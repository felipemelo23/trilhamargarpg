/**
 * Extend the basic ItemSheet with some very simple modifications
 */
export class TrilhamargaItemSheet extends ItemSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["trilhamarga", "sheet", "item"],
      width: 520,
      height: 480
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

    return data;
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
  }
}
