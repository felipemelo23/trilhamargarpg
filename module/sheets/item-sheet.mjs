/**
 * Extend the basic ItemSheet with some very simple modifications
 */
export class TrilhamargaItemSheet extends ItemSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["trilhamarga", "sheet", "item"],
      width: 520,
      height: 650
    });
  }

  /** @override */
  get template() {
    return `systems/trilhamarga/templates/items/item-sheet.html`;
  }

  /** @override */
  getData() {
    const data = super.getData();
    data.system = data.item.system;

    if ((this.item.type === "weapon" || this.item.type === "npc_attack") && data.system.defaultModification === undefined) {
      data.system.defaultModification = 0;
    }

    // Damage options for weapons
    data.damageOptions = [
      "1d2", "1d4", "1d6", "1d8", "1d10", "1d12",
      "1d12 + 1", "1d12 + 2", "1d12 + 3", "1d12 + 4", "1d12 + 5", "1d12 + 6"
    ];

    // Get actor skills for weapons
    if (this.item.actor) {
      data.actorSkills = this.item.actor.items
        .filter(i => i.type === "skill")
        .map(i => i.name)
        .sort();
    }

    // Get actor abilities for NPC spells
    if (this.item.actor && this.item.actor.type === "npc") {
      data.actorAbilities = this.item.actor.items
        .filter(i => i.type === "npc_ability")
        .map(i => i.name)
        .sort();
    }

    // Skill level options
    data.skillLevelOptions = {
      "-1": game.i18n.localize("TRILHAMARGA.SkillLevels.-1"),
      "0": game.i18n.localize("TRILHAMARGA.SkillLevels.0"),
      "1": game.i18n.localize("TRILHAMARGA.SkillLevels.1"),
      "2": game.i18n.localize("TRILHAMARGA.SkillLevels.2"),
      "3": game.i18n.localize("TRILHAMARGA.SkillLevels.3"),
      "4": game.i18n.localize("TRILHAMARGA.SkillLevels.4"),
      "5": game.i18n.localize("TRILHAMARGA.SkillLevels.5"),
      "6": game.i18n.localize("TRILHAMARGA.SkillLevels.6")
    };

    // Modification options
    data.modificationOptions = [
      { value: "3", label: game.i18n.format("TRILHAMARGA.PositiveChances", {n: 3}) },
      { value: "2", label: game.i18n.format("TRILHAMARGA.PositiveChances", {n: 2}) },
      { value: "1", label: game.i18n.localize("TRILHAMARGA.PositiveChance") },
      { value: "0", label: game.i18n.localize("TRILHAMARGA.Normal") },
      { value: "-1", label: game.i18n.localize("TRILHAMARGA.NegativeChance") },
      { value: "-2", label: game.i18n.format("TRILHAMARGA.NegativeChances", {n: 2}) },
      { value: "-3", label: game.i18n.format("TRILHAMARGA.NegativeChances", {n: 3}) }
    ];

    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
  }
}
