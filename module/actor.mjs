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
    
    const wounds = actorData.items.filter(i => i.type === 'wound');
    const totalSeverity = wounds.reduce((acc, w) => acc + (w.system.severity || 0), 0);
    
    system.life.value = Math.max(0, system.life.max - totalSeverity);

    // Wound Penalty
    system.woundPenalty = Math.floor(totalSeverity / 6);

    // Stamina
    system.stamina.max = system.life.value;
    system.stamina.value = Math.min(system.stamina.value, system.stamina.max);

    // Protection
    const protectionItems = actorData.items.filter(i => ['armor', 'shield'].includes(i.type));
    system.protection.max = protectionItems.reduce((acc, a) => acc + (a.system.protection || 0), 0);
    system.protection.value = Math.min(system.protection.value, system.protection.max);

    // Favor
    system.favor.max = will;

    // Load Capacity
    const hasBackpack = actorData.items.some(i => 
      ['weapon', 'armor', 'shield', 'gear'].includes(i.type) && 
      (i.name.toLowerCase() === 'backpack' || i.name.toLowerCase() === 'mochila') &&
      i.system.location === 'body'
    );
    const backpackBonus = hasBackpack ? 6 : 0;

    const baseCap = 6 + Number(physique) + backpackBonus;
    system.loadCapacity = {
      base: Math.floor(baseCap * 100) / 100,
      current: 0
    };

    const physicalItems = actorData.items.filter(i => ['weapon', 'armor', 'shield', 'gear'].includes(i.type));
    const currentLoad = physicalItems.reduce((acc, i) => {
      const qty = i.system.quantity || 1;
      const rawTotalSlots = (i.system.slots || 0) * qty;
      const totalSlots = Math.floor(rawTotalSlots * 100) / 100;

      // Prepare display string for slots if total > 1
      if (totalSlots > 1) {
        i.slotDisplay = game.i18n.format("TRILHAMARGA.OccupiesSlots", {slots: totalSlots});
      } else {
        i.slotDisplay = "";
      }

      if (i.system.location === 'other') return acc;
      return acc + totalSlots;
    }, 0);
    system.loadCapacity.current = Math.floor(currentLoad * 100) / 100;
    
    // Calculate percentage and color for load bar
    const pct = (system.loadCapacity.current / system.loadCapacity.base) * 100;
    system.loadCapacity.pct = Math.min(pct, 100);
    
    if (pct <= 50) system.loadCapacity.color = "green";
    else if (pct <= 75) system.loadCapacity.color = "yellow";
    else system.loadCapacity.color = "red";
  }

  _prepareNpcData(actorData) {
    // NPCs have less derived logic in this system so far
  }

  /**
   * Custom Attack Roll implementation
   */
  async rollAttack(weapon) {
    const skillName = weapon.system.associated_skill;
    const skill = this.items.find(i => i.type === 'skill' && i.name === skillName);
    const bonus = skill ? (skill.system.level || 0) : 0;
    const woundPenalty = this.system.woundPenalty || 0;
    const totalBonus = bonus - woundPenalty;

    const variation = await this._getVariationPrompt();
    if (variation === null) return;

    // Attack Roll Formula
    let atkFormula = "1d12";
    if (variation > 0) atkFormula = `${variation + 1}d12kh`;
    else if (variation < 0) atkFormula = `${Math.abs(variation) + 1}d12kl`;
    if (totalBonus !== 0) {
      atkFormula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    // Damage Roll Formula
    const dmgFormula = weapon.system.damage || "1d2";

    const atkRoll = new Roll(atkFormula);
    const dmgRoll = new Roll(dmgFormula);

    const skillCheckText = skill ? game.i18n.format("TRILHAMARGA.SkillCheck", {skill: skill.name}) : "";
    
    let flavor = `
      <div class="trilhamarga chat-card">
        <div class="card-content">
          <strong>${game.i18n.localize("TRILHAMARGA.Roll")}: ${weapon.name}</strong>
          ${skillCheckText ? `<br/>${skillCheckText}` : ''}
        </div>
      </div>
    `;

    // Create message with both rolls
    // We evaluate both before creating the message to handle crit logic
    await atkRoll.evaluate({async: true});
    await dmgRoll.evaluate({async: true});

    const dieValue = atkRoll.dice[0].total;
    let critLabel = "";
    if (dieValue === 12) critLabel = game.i18n.localize("TRILHAMARGA.CriticalSuccess");
    else if (dieValue === 1) critLabel = game.i18n.localize("TRILHAMARGA.CriticalFailure");

    if (critLabel) {
      flavor = flavor.replace('</div>\n      </div>', `</div><div class="card-footer"><strong>${critLabel}</strong></div></div>`);
    }

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: flavor,
      type: CONST.CHAT_MESSAGE_TYPES.ROLL,
      rolls: [atkRoll, dmgRoll]
    });
  }

  /**
   * Custom Roll implementation
   */
  async roll(difficulty = 6, variation = 0) {
    let formula = "1d12";
    if (variation > 0) formula = `${variation + 1}d12kh`;
    else if (variation < 0) formula = `${Math.abs(variation) + 1}d12kl`;

    const roll = new Roll(formula);
    
    let flavor = `
      <div class="trilhamarga chat-card">
        <div class="card-content">
          <strong>${game.i18n.localize("TRILHAMARGA.Roll")} (${game.i18n.localize("TRILHAMARGA.Difficulty")}: ${difficulty})</strong>
        </div>
      </div>
    `;

    // Create message with initial flavor
    const message = await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: flavor
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
    const woundPenalty = this.system.woundPenalty || 0;
    const totalBonus = bonus - woundPenalty;
    
    const variation = await this._getVariationPrompt();
    if (variation === null) return;
    
    let formula = "1d12";
    if (variation > 0) formula = `${variation + 1}d12kh`;
    else if (variation < 0) formula = `${Math.abs(variation) + 1}d12kl`;

    if (totalBonus !== 0) {
      formula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    const roll = new Roll(formula);
    const skillCheckText = game.i18n.format("TRILHAMARGA.SkillCheck", {skill: skill.name});
    let flavor = `
      <div class="trilhamarga chat-card">
        <div class="card-content">
          <strong>${skillCheckText}</strong>
        </div>
      </div>
    `;

    const message = await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: flavor
    });

    const evaluatedRoll = message.rolls[0];
    const dieValue = evaluatedRoll.dice[0].total; 

    let resultKey = "";
    if (dieValue === 12) resultKey = "TRILHAMARGA.CriticalSuccess";
    else if (dieValue === 1) resultKey = "TRILHAMARGA.CriticalFailure";

    if (resultKey) {
      flavor = flavor.replace('</div>\n      </div>', `</div><div class="card-footer"><strong>${game.i18n.localize(resultKey)}</strong></div></div>`);
      await message.update({ flavor });
    }

    return evaluatedRoll;
  }

  /**
   * Custom Spell Casting implementation
   */
  async castSpell(spell) {
    const occultSkill = this.items.find(i => i.type === 'skill' && (i.name.toLowerCase() === 'occult' || i.name.toLowerCase() === 'ocultismo'));
    const bonus = occultSkill ? (occultSkill.system.level || 0) : 0;
    const woundPenalty = this.system.woundPenalty || 0;
    const totalBonus = bonus - woundPenalty;
    const difficulty = 8;

    const variation = await this._getVariationPrompt();
    if (variation === null) return;
    
    let formula = "1d12";
    if (variation > 0) formula = `${variation + 1}d12kh`;
    else if (variation < 0) formula = `${Math.abs(variation) + 1}d12kl`;

    if (totalBonus !== 0) {
      formula += totalBonus > 0 ? ` + ${totalBonus}` : ` - ${Math.abs(totalBonus)}`;
    }

    const roll = new Roll(formula);
    let flavor = `
      <div class="trilhamarga chat-card">
        <div class="card-content">
          <strong>${game.i18n.localize("TRILHAMARGA.Cast")}: ${spell.name}</strong>
        </div>
      </div>
    `;

    const message = await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: flavor
    });

    const evaluatedRoll = message.rolls[0];
    const resultValue = evaluatedRoll.total;
    const dieValue = evaluatedRoll.dice[0].total;

    let result = "";
    let success = false;
    if (dieValue === 12) {
      result = "TRILHAMARGA.CriticalSuccess";
      success = true;
    } else if (dieValue === 1) {
      result = "TRILHAMARGA.CriticalFailure";
      success = false;
    } else if (resultValue >= difficulty) {
      result = "TRILHAMARGA.Success";
      success = true;
    } else {
      result = "TRILHAMARGA.Failure";
      success = false;
    }

    let resultHtml = `<strong>${game.i18n.localize(result)}</strong>`;
    
    if (success) {
      const powerLevel = resultValue - 7;
      resultHtml += `<br/><strong>${game.i18n.localize("TRILHAMARGA.PowerLevel")}:</strong> ${powerLevel}`;
    }

    if (spell.system.description) {
      resultHtml += `<br/><hr/>${spell.system.description}`;
    }

    flavor = flavor.replace('</div>\n      </div>', `</div><div class="card-footer">${resultHtml}</div></div>`);
    await message.update({ flavor });

    return evaluatedRoll;
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

  async _getVariationPrompt() {
    return new Promise(resolve => {
      new Dialog({
        title: game.i18n.localize("TRILHAMARGA.Variation"),
        content: `
          <select id="variation" style="width: 100%; margin-bottom: 10px;">
            <option value="3">3 chances positivas</option>
            <option value="2">2 chances positivas</option>
            <option value="1">1 chance positiva</option>
            <option value="0" selected>Regular</option>
            <option value="-1">1 chance negativa</option>
            <option value="-2">2 chances negativas</option>
            <option value="-3">3 chances negativas</option>
          </select>
        `,
        buttons: {
          roll: {
            label: "Ok",
            callback: (html) => resolve(parseInt(html.find("#variation").val()))
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
