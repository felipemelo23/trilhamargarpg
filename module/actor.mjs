/**
 * Extend the base Actor document to support derived data.
 */
export class TrilhamargaActor extends Actor {

  prepareData() {
    super.prepareData();
  }

  prepareDerivedData() {
    const actorData = this;
    const system = actorData.system;
    const flags = actorData.flags.trilhamarga || {};

    if (actorData.type === 'pc') this._preparePcData(actorData);
    if (actorData.type === 'npc') this._prepareNpcData(actorData);
  }

  _preparePcData(actorData) {
    const system = actorData.system;
    
    // Find relevant skills
    const physique = actorData.items.find(i => i.type === 'skill' && i.name.toLowerCase() === 'physique' || i.name.toLowerCase() === 'físico')?.system.level || 0;
    const will = actorData.items.find(i => i.type === 'skill' && i.name.toLowerCase() === 'will' || i.name.toLowerCase() === 'vontade')?.system.level || 0;

    // Calculate Life
    system.life.max = 6 + (2 * physique);
    
    const wounds = actorData.items.filter(i => i.type === 'wound' && i.system.category !== 'scar');
    const totalSeverity = wounds.reduce((acc, w) => acc + Number(w.system.severity || 0), 0);
    
    system.life.value = Math.max(0, system.life.max - totalSeverity);

    // Wound Penalty
    system.woundPenalty = Math.floor(totalSeverity / 6);

    // Stamina
    system.stamina.max = system.life.value;
    system.stamina.value = Math.min(system.stamina.value, system.stamina.max);

    // Protection
    const protectionItems = actorData.items.filter(i => ['armor', 'shield'].includes(i.type) && i.system.location === 'body');
    system.protection.max = protectionItems.reduce((acc, a) => acc + Number(a.system.protection || 0), 0);
    system.protection.value = Math.min(system.protection.value, system.protection.max);

    // Protection Penalty (1 for every 4 points of max protection)
    system.protectionPenalty = Math.floor(system.protection.max / 4);

    // Favor
    system.favor.max = will;

    // Load Capacity
    const hasBackpack = actorData.items.some(i => 
      ['weapon', 'armor', 'shield', 'gear'].includes(i.type) && 
      (i.name.toLowerCase() === 'backpack' || i.name.toLowerCase() === 'mochila') &&
      i.system.location === 'body'
    );
    
    const bodyMax = 6 + Number(physique);
    const backpackMax = hasBackpack ? 6 : 0;

    system.loadCapacity = {
      body: {
        max: bodyMax,
        current: 0
      },
      backpack: {
        max: backpackMax,
        current: 0
      }
    };

    const physicalItems = actorData.items.filter(i => ['weapon', 'armor', 'shield', 'gear'].includes(i.type));
    for (let i of physicalItems) {
      const qty = Number(i.system.quantity || 1);
      const rawTotalSlots = Number(i.system.slots || 0) * qty;
      const totalSlots = Math.floor(rawTotalSlots * 100) / 100;

      // Prepare display string for slots if total > 1
      if (totalSlots > 1) {
        i.slotDisplay = game.i18n.format("TRILHAMARGA.OccupiesSlots", {slots: totalSlots});
      } else {
        i.slotDisplay = "";
      }

      const loc = i.system.location || 'body';
      if (loc === 'body' || loc === 'backpack') {
        system.loadCapacity[loc].current += totalSlots;
      }
    }

    // Round current values and calculate pct/color
    for (let type of ['body', 'backpack']) {
      const cap = system.loadCapacity[type];
      cap.current = Math.floor(cap.current * 100) / 100;
      
      if (cap.max > 0) {
        const pct = (cap.current / cap.max) * 100;
        cap.pct = Math.min(pct, 100);
        
        if (pct <= 50) cap.color = "green";
        else if (pct <= 75) cap.color = "yellow";
        else cap.color = "red";
      } else {
        cap.pct = 0;
        cap.color = "";
      }
    }
  }

  _prepareNpcData(actorData) {
    // NPCs have less derived logic in this system so far
  }

  /** @override */
  async _preUpdate(changed, options, user) {
    await super._preUpdate(changed, options, user);

    // For NPCs, enforce that current vitality and protection do not exceed their max
    if (this.type === 'npc') {
      // Vitality
      const vMax = foundry.utils.getProperty(changed, "system.vitality.max");
      const vVal = foundry.utils.getProperty(changed, "system.vitality.value");
      
      if (vMax !== undefined) {
        // If max changed, reset to full UNLESS the value is also changed to something different from its current state
        const currentV = Number(this.system.vitality.value);
        const changedV = vVal !== undefined ? Number(vVal) : undefined;
        
        if (changedV === undefined || changedV === currentV) {
          foundry.utils.setProperty(changed, "system.vitality.value", Number(vMax));
        } else {
          foundry.utils.setProperty(changed, "system.vitality.value", Math.min(changedV, Number(vMax)));
        }
      } else if (vVal !== undefined) {
        // If only value changed, cap it at existing max
        foundry.utils.setProperty(changed, "system.vitality.value", Math.min(Number(vVal), Number(this.system.vitality.max)));
      }

      // Protection
      const pMax = foundry.utils.getProperty(changed, "system.protection.max");
      const pVal = foundry.utils.getProperty(changed, "system.protection.value");
      
      if (pMax !== undefined) {
        // If max changed, reset to full UNLESS the value is also changed to something different from its current state
        const currentP = Number(this.system.protection.value);
        const changedP = pVal !== undefined ? Number(pVal) : undefined;
        
        if (changedP === undefined || changedP === currentP) {
          foundry.utils.setProperty(changed, "system.protection.value", Number(pMax));
        } else {
          foundry.utils.setProperty(changed, "system.protection.value", Math.min(changedP, Number(pMax)));
        }
      } else if (pVal !== undefined) {
        foundry.utils.setProperty(changed, "system.protection.value", Math.min(Number(pVal), Number(this.system.protection.max)));
      }
    }
  }

  /**
   * Custom Attack Roll implementation
   */
  async rollAttack(weapon) {
    const skillName = weapon.system.associated_skill;
    const skill = this.items.find(i => i.type === 'skill' && i.name === skillName);
    const bonus = skill ? (skill.system.level || 0) : 0;
    const woundPenalty = Number(this.system.woundPenalty || 0);
    const protectionPenalty = (skill?.system.protectionPenalty) ? Number(this.system.protectionPenalty || 0) : 0;
    const baseModifier = -(woundPenalty + protectionPenalty);
    const totalBonus = bonus;

    const modifier = await this._getModifierPrompt(baseModifier);
    if (modifier === null) return;

    // Attack Roll Formula
    let atkFormula = "1d12";
    if (modifier > 0) atkFormula = `${modifier + 1}d12kh`;
    else if (modifier < 0) atkFormula = `${Math.abs(modifier) + 1}d12kl`;
    if (totalBonus !== 0) {
      atkFormula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    // Damage Roll Formula
    let dmgFormula = weapon.system.damage || "1d2";
    if (weapon.system.addPhysiqueToDamage) {
      const physique = this.items.find(i => i.type === 'skill' && (i.name.toLowerCase() === 'physique' || i.name.toLowerCase() === 'físico'))?.system.level || 0;
      if (physique !== 0) {
        dmgFormula += physique > 0 ? ` + ${physique}` : ` - ${Math.abs(physique)}`;
      }
    }

    const roll = new Roll(atkFormula);
    const dmgRoll = new Roll(dmgFormula);

    await roll.evaluate();
    await dmgRoll.evaluate();

    const flavorParts = [];
    if (woundPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.WoundPenalty")}: ${woundPenalty})`);
    if (protectionPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.ProtectionPenalty")}: ${protectionPenalty})`);
    const flavorText = flavorParts.join(" ");

    const dieValue = roll.dice[0].total;
    let atkResultLabel = "";
    let resultClass = "";
    if (dieValue === 12) {
      atkResultLabel = "TRILHAMARGA.CriticalSuccess";
      resultClass = "critical-success";
    } else if (dieValue === 1) {
      atkResultLabel = "TRILHAMARGA.CriticalFailure";
      resultClass = "critical-failure";
    }

    const chatData = {
      actor: this,
      weapon: weapon,
      weaponName: weapon.name,
      skillName: skill ? skill.name : null,
      flavorText: flavorText,
      atkRollHtml: await roll.render(),
      atkResultLabel: atkResultLabel,
      resultClass: resultClass,
      dmgRollHtml: await dmgRoll.render()
    };

    const content = await renderTemplate("systems/trilhamarga/templates/chat/weapon-attack.hbs", chatData);

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: content,
      style: CONST.CHAT_MESSAGE_STYLES.ROLL,
      rolls: [roll, dmgRoll]
    });
  }

  /**
   * Custom NPC Attack Roll implementation
   */
  async rollNpcAttack(attack) {
    const bonus = attack.system.bonus || 0;
    const modifier = await this._getModifierPrompt();
    if (modifier === null) return;

    // Attack Roll Formula
    let atkFormula = "1d12";
    if (modifier > 0) atkFormula = `${modifier + 1}d12kh`;
    else if (modifier < 0) atkFormula = `${Math.abs(modifier) + 1}d12kl`;
    if (bonus !== 0) {
      atkFormula += bonus > 0 ? ` + ${bonus}` : ` - ${Math.abs(bonus)}`;
    }

    // Damage Roll Formula
    const dmgFormula = attack.system.damage || "1d2";

    const atkRoll = new Roll(atkFormula);
    const dmgRoll = new Roll(dmgFormula);

    let flavor = `
      <div class="trilhamarga chat-card">
        <div class="card-content">
          <strong>${game.i18n.localize("TRILHAMARGA.Roll")}: ${attack.name}</strong>
          ${attack.system.description ? `<br/>${attack.system.description}` : ''}
        </div>
      </div>
    `;

    await atkRoll.evaluate();
    
    // Check for critical success/failure
    const dieValue = atkRoll.dice[0].total;
    let critLabel = "";
    if (dieValue === 12) critLabel = game.i18n.localize("TRILHAMARGA.CriticalSuccess");
    else if (dieValue === 1) critLabel = game.i18n.localize("TRILHAMARGA.CriticalFailure");

    await dmgRoll.evaluate();

    if (critLabel) {
      flavor = flavor.replace('</div>\n      </div>', `</div><div class="card-footer"><strong>${critLabel}</strong></div></div>`);
    }

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: flavor, // Actually the content
      style: CONST.CHAT_MESSAGE_STYLES.ROLL,
      rolls: [atkRoll, dmgRoll]
    });
  }

  /**
   * Custom Roll implementation
   */
  async roll(difficulty = 6, modifier = 0) {
    let formula = "1d12";
    if (modifier > 0) formula = `${modifier + 1}d12kh`;
    else if (modifier < 0) formula = `${Math.abs(modifier) + 1}d12kl`;

    const roll = new Roll(formula);
    
    let flavor = `
      <div class="trilhamarga chat-card">
        <div class="card-content">
          <strong>${game.i18n.localize("TRILHAMARGA.Roll")} (${game.i18n.localize("TRILHAMARGA.Difficulty")}: ${difficulty})</strong>
        </div>
      </div>
    `;

    await roll.evaluate();
    
    // Create message
    const message = await ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: flavor,
      style: CONST.CHAT_MESSAGE_STYLES.ROLL,
      rolls: [roll]
    });

    const evaluatedRoll = message.rolls[0];
    const resultValue = evaluatedRoll.total;
    const dieValue = evaluatedRoll.dice[0].total; 

    let result = "";
    if (dieValue === 12) result = "TRILHAMARGA.CriticalSuccess";
    else if (dieValue === 1) result = "TRILHAMARGA.CriticalFailure";
    else if (resultValue >= difficulty) result = "TRILHAMARGA.Success";
    else result = "TRILHAMARGA.Failure";

    // Update message with final result
    flavor = flavor.replace('</div>\n      </div>', `</div><div class="card-footer"><strong>${game.i18n.localize(result)}</strong></div></div>`);
    await message.update({ flavor });

    return evaluatedRoll;
  }

  /**
   * Custom Skill Roll implementation
   */
  async rollSkill(skill) {
    const bonus = skill.system.level || 0;
    const woundPenalty = Number(this.system.woundPenalty || 0);
    const protectionPenalty = skill.system.protectionPenalty ? Number(this.system.protectionPenalty || 0) : 0;
    const baseModifier = -(woundPenalty + protectionPenalty);
    const totalBonus = bonus;
    
    const modifier = await this._getModifierPrompt(baseModifier);
    if (modifier === null) return;
    
    let formula = "1d12";
    if (modifier > 0) formula = `${modifier + 1}d12kh`;
    else if (modifier < 0) formula = `${Math.abs(modifier) + 1}d12kl`;

    if (totalBonus !== 0) {
      formula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    const roll = new Roll(formula);
    await roll.evaluate();

    const flavorParts = [];
    if (woundPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.WoundPenalty")}: ${woundPenalty})`);
    if (protectionPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.ProtectionPenalty")}: ${protectionPenalty})`);
    const flavorText = flavorParts.join(" ");

    const dieValue = roll.dice[0].total; 
    let resultLabel = "";
    let resultClass = "";

    if (dieValue === 12) {
      resultLabel = "TRILHAMARGA.CriticalSuccess";
      resultClass = "critical-success";
    } else if (dieValue === 1) {
      resultLabel = "TRILHAMARGA.CriticalFailure";
      resultClass = "critical-failure";
    }

    const chatData = {
      actor: this,
      skillName: skill.name,
      flavorText: flavorText,
      rollHtml: await roll.render(),
      resultLabel: resultLabel,
      resultClass: resultClass
    };

    const content = await renderTemplate("systems/trilhamarga/templates/chat/skill-roll.hbs", chatData);

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: content,
      style: CONST.CHAT_MESSAGE_STYLES.ROLL,
      rolls: [roll]
    });
  }

  /**
   * Custom Wound Roll implementation
   */
  async rollWound(wound) {
    const physiqueSkill = this.items.find(i => i.type === 'skill' && (i.name.toLowerCase() === 'physique' || i.name.toLowerCase() === 'físico'));
    const bonus = physiqueSkill ? (physiqueSkill.system.level || 0) : 0;
    const woundPenalty = Number(this.system.woundPenalty || 0);
    const baseModifier = -woundPenalty;
    const totalBonus = bonus;
    const severity = Number(wound.system.severity || 0);
    const difficulty = 7 + severity;

    const modifier = await this._getModifierPrompt(baseModifier);
    if (modifier === null) return;
    
    let formula = "1d12";
    if (modifier > 0) formula = `${modifier + 1}d12kh`;
    else if (modifier < 0) formula = `${Math.abs(modifier) + 1}d12kl`;

    if (totalBonus !== 0) {
      formula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    const roll = new Roll(formula);
    await roll.evaluate();

    const difficultyLabel = game.i18n.format("TRILHAMARGA.DifficultyLabel", {difficulty: difficulty});
    const flavorParts = [difficultyLabel, `(${wound.name})` ];
    if (woundPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.WoundPenalty")}: ${woundPenalty})`);
    const flavorText = flavorParts.join(" ");

    const resultValue = roll.total;
    const dieValue = roll.dice[0].total;

    let resultLabel = "";
    let resultClass = "";
    if (dieValue === 12) {
      resultLabel = "TRILHAMARGA.CriticalSuccess";
      resultClass = "critical-success";
    } else if (dieValue === 1) {
      resultLabel = "TRILHAMARGA.CriticalFailure";
      resultClass = "critical-failure";
    } else if (resultValue >= difficulty) {
      resultLabel = "TRILHAMARGA.Success";
      resultClass = "success";
    } else {
      resultLabel = "TRILHAMARGA.Failure";
      resultClass = "failure";
    }

    const chatData = {
      actor: this,
      skillName: physiqueSkill ? physiqueSkill.name : game.i18n.localize("TRILHAMARGA.Normal"),
      flavorText: flavorText,
      rollHtml: await roll.render(),
      resultLabel: resultLabel,
      resultClass: resultClass
    };

    const content = await renderTemplate("systems/trilhamarga/templates/chat/skill-roll.hbs", chatData);

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: content,
      style: CONST.CHAT_MESSAGE_STYLES.ROLL,
      rolls: [roll]
    });
  }

  /**
   * Custom Spell Casting implementation
   */
  async castSpell(spell) {
    const occultSkill = this.items.find(i => i.type === 'skill' && (i.name.toLowerCase() === 'occult' || i.name.toLowerCase() === 'ocultismo'));
    const bonus = occultSkill ? (occultSkill.system.level || 0) : 0;
    const woundPenalty = Number(this.system.woundPenalty || 0);
    const protectionPenalty = occultSkill?.system.protectionPenalty ? Number(this.system.protectionPenalty || 0) : 0;
    const arcaneFatigue = Number(this.system.arcane_fatigue?.value || 0);
    const baseModifier = -(woundPenalty + protectionPenalty + arcaneFatigue);
    const totalBonus = bonus;
    const difficulty = 8;

    const modifier = await this._getModifierPrompt(baseModifier);
    if (modifier === null) return;
    
    let formula = "1d12";
    if (modifier > 0) formula = `${modifier + 1}d12kh`;
    else if (modifier < 0) formula = `${Math.abs(modifier) + 1}d12kl`;

    if (totalBonus !== 0) {
      formula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    const roll = new Roll(formula);
    await roll.evaluate();

    const flavorParts = [];
    if (woundPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.WoundPenalty")}: ${woundPenalty})`);
    if (protectionPenalty > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.ProtectionPenalty")}: ${protectionPenalty})`);
    if (arcaneFatigue > 0) flavorParts.push(`(${game.i18n.localize("TRILHAMARGA.ArcaneFatigue")}: ${arcaneFatigue})`);
    const flavorText = flavorParts.join(" ");

    const resultValue = roll.total;
    const dieValue = roll.dice[0].total;

    let resultLabel = "";
    let resultClass = "";
    let success = false;
    if (dieValue === 12) {
      resultLabel = "TRILHAMARGA.CriticalSuccess";
      resultClass = "critical-success";
      success = true;
    } else if (dieValue === 1) {
      resultLabel = "TRILHAMARGA.CriticalFailure";
      resultClass = "critical-failure";
      success = false;
    } else if (resultValue >= difficulty) {
      resultLabel = "TRILHAMARGA.Success";
      resultClass = "success";
      success = true;
    } else {
      resultLabel = "TRILHAMARGA.Failure";
      resultClass = "failure";
      success = false;
    }

    const chatData = {
      actor: this,
      spell: spell,
      skillName: occultSkill ? occultSkill.name : game.i18n.localize("TRILHAMARGA.Normal"),
      flavorText: flavorText,
      rollHtml: await roll.render(),
      resultLabel: resultLabel,
      resultClass: resultClass,
      success: success,
      powerLevel: success ? (resultValue - 7) : 0
    };

    const content = await renderTemplate("systems/trilhamarga/templates/chat/spell-cast.hbs", chatData);

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      content: content,
      style: CONST.CHAT_MESSAGE_STYLES.ROLL,
      rolls: [roll]
    });
  }

  async _getDifficultyPrompt() {
    return new Promise(resolve => {
      new Dialog({
        title: game.i18n.localize("TRILHAMARGA.Difficulty"),
        content: `<input type="number" id="difficulty" value="6">`,
        buttons: {
          roll: {
            label: game.i18n.localize("TRILHAMARGA.Roll"),
            callback: (html) => resolve(parseInt(html.find("#difficulty").val()))
          },
          cancel: {
            label: game.i18n.localize("TRILHAMARGA.Cancel"),
            callback: () => resolve(null)
          }
        },
        default: "roll"
      }, { width: 250 }).render(true);
    });
  }

  async _getModifierPrompt(defaultValue = 0) {
    return new Promise(resolve => {
      const options = [3, 2, 1, 0, -1, -2, -3];
      if (!options.includes(defaultValue)) options.push(defaultValue);
      options.sort((a, b) => b - a);

      let optionsHtml = "";
      for (let opt of options) {
        const selected = opt === defaultValue ? "selected" : "";
        let label = "";
        if (opt > 0) {
          label = opt === 1 ? game.i18n.localize("TRILHAMARGA.PositiveChance") : game.i18n.format("TRILHAMARGA.PositiveChances", {n: opt});
        }
        else if (opt < 0) {
          const absOpt = Math.abs(opt);
          label = absOpt === 1 ? game.i18n.localize("TRILHAMARGA.NegativeChance") : game.i18n.format("TRILHAMARGA.NegativeChances", {n: absOpt});
        }
        else label = game.i18n.localize("TRILHAMARGA.Normal");
        optionsHtml += `<option value="${opt}" ${selected}>${label}</option>`;
      }

      new Dialog({
        title: game.i18n.localize("TRILHAMARGA.Modifier"),
        content: `
          <select id="modifier" style="width: 100%; margin-bottom: 10px;">
            ${optionsHtml}
          </select>
        `,
        buttons: {
          roll: {
            label: "Ok",
            callback: (html) => resolve(parseInt(html.find("#modifier").val()))
          },
          cancel: {
            label: game.i18n.localize("TRILHAMARGA.Cancel"),
            callback: () => resolve(null)
          }
        },
        default: "roll"
      }, { width: 250 }).render(true);
    });
  }
}
