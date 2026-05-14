/**
 * Extend the basic ItemSheet with some very simple modifications
 */
export class TrilhamargaItemSheet extends ItemSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
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

    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
  }
}
