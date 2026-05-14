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

    system.loadCapacity = {
      base: 6 + physique + backpackBonus,
      max: 12 + physique + backpackBonus,
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
    
    const formula = bonus === 0 ? "1d12" : `1d12 + ${bonus}`;
    const roll = new Roll(formula);
    
    // Create the message first to allow DSN to handle evaluation/animation
    const message = await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: `${game.i18n.localize("TRILHAMARGA.Roll")}: ${weapon.name}`
    });
    
    // Update the message with crit info after evaluation
    const evaluatedRoll = message.rolls[0];
    const dieValue = evaluatedRoll.dice[0].total;
    if (dieValue === 12 || dieValue === 1) {
      const critLabel = dieValue === 12 ? 
        ` (${game.i18n.localize("TRILHAMARGA.CriticalSuccess")})` : 
        ` (${game.i18n.localize("TRILHAMARGA.CriticalFailure")})`;
      
      await message.update({
        flavor: `${game.i18n.localize("TRILHAMARGA.Roll")}: ${weapon.name}${critLabel}`
      });
    }

    return evaluatedRoll;
  }

  /**
   * Custom Roll implementation
   */
  async roll(difficulty = 6, variation = 0) {
    let formula = "1d12";
    if (variation > 0) formula = "2d12kh";
    else if (variation < 0) formula = "2d12kl";

    const roll = new Roll(formula);
    
    // Create message with initial flavor
    const message = await roll.toMessage({
      speaker: ChatMessage.getSpeaker({ actor: this }),
      flavor: `${game.i18n.localize("TRILHAMARGA.Roll")} (${game.i18n.localize("TRILHAMARGA.Difficulty")}: ${difficulty})`
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
    await message.update({
      flavor: `${game.i18n.localize(result)} (${game.i18n.localize("TRILHAMARGA.Difficulty")}: ${difficulty})`
    });

    return evaluatedRoll;
  }
}
