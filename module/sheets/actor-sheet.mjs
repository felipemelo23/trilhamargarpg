/**
 * Extend the basic ActorSheet with some very simple modifications
 */
export class TrilhamargaActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["trilhamarga", "sheet", "actor"],
      width: 700,
      height: 800,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "skills" }]
    });
  }

  /** @override */
  get template() {
    return `systems/trilhamarga/templates/actors/${this.actor.type}-sheet.html`;
  }

  /** @override */
  getData() {
    const data = super.getData();
    data.system = data.actor.system;

    // Prepare items
    if (this.actor.type === 'pc') {
      this._preparePcItems(data);
    } else if (this.actor.type === 'npc') {
      this._prepareNpcItems(data);
    }

    return data;
  }

  _preparePcItems(data) {
    const actorData = data.actor;
    
    const skills = [];
    const inventory = {
      body: [],
      backpack: [],
      other: []
    };
    const wounds = [];
    const divineDomains = [];
    const spells = [];
    const recipes = [];
    const divineTenets = [];

    for (let i of actorData.items) {
      if (i.type === 'skill') skills.push(i);
      else if (['weapon', 'armor', 'shield', 'gear'].includes(i.type)) {
        const loc = i.system.location || 'body';
        if (inventory[loc]) inventory[loc].push(i);
        else inventory.body.push(i);
      }
      else if (i.type === 'wound') wounds.push(i);
      else if (i.type === 'divine_domain') divineDomains.push(i);
      else if (i.type === 'divine_tenet') divineTenets.push(i);
      else if (i.type === 'spell') spells.push(i);
      else if (i.type === 'recipe') recipes.push(i);
    }

    data.skills = skills.sort((a, b) => a.name.localeCompare(b.name));
    data.inventory = inventory;
    data.wounds = wounds;
    data.divineDomains = divineDomains;
    data.divineTenets = divineTenets;
    data.spells = spells;
    data.recipes = recipes;
  }

  _prepareNpcItems(data) {
    const actorData = data.actor;
    const attacks = [];
    const abilities = [];

    for (let i of actorData.items) {
      if (i.type === 'npc_attack') attacks.push(i);
      else if (i.type === 'npc_ability') abilities.push(i);
    }

    data.attacks = attacks;
    data.abilities = abilities;
  }

  /** @override */
  async _onDropItemCreate(itemData) {
    itemData = itemData instanceof Array ? itemData : [itemData];
    const itemsToCreate = [];

    for (const item of itemData) {
      // Check if item is stackable and already exists
      const isStackable = item.system?.stackable;
      const existingItem = isStackable ? this.actor.items.find(i => i.name === item.name && i.type === item.type) : null;

      if (existingItem) {
        const qty = item.system.quantity || 1;
        await existingItem.update({ "system.quantity": existingItem.system.quantity + qty });
      } else {
        itemsToCreate.push(item);
      }
    }

    if (itemsToCreate.length === 0) return [];
    return super._onDropItemCreate(itemsToCreate);
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;

    // Add Inventory Item
    html.find('.item-create').click(this._onItemCreate.bind(this));

    // Update Inventory Item
    html.find('.item-edit').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.sheet.render(true);
    });

    // Delete Inventory Item
    html.find('.item-delete').click(ev => {
      const li = $(ev.currentTarget).parents(".item");
      const item = this.actor.items.get(li.data("itemId"));
      item.delete();
    });

    // Rollable abilities
    html.find('.rollable').click(this._onRoll.bind(this));

    // Rollable weapons
    html.find('.rollable-weapon').click(this._onWeaponRoll.bind(this));
  }

  async _onWeaponRoll(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const item = this.actor.items.get(li.data("itemId"));
    return this.actor.rollAttack(item);
  }

  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    const itemData = {
      name: `Novo ${type}`,
      type: type,
      system: {}
    };
    return await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

  async _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      const difficulty = await this._getDifficulty();
      const variation = await this._getVariation();
      await this.actor.roll(difficulty, variation);
    }
  }

  async _getDifficulty() {
    // Simple prompt for difficulty for now
    const diff = await new Promise(resolve => {
      new Dialog({
        title: game.i18n.localize("TRILHAMARGA.Difficulty"),
        content: `<input type="number" id="difficulty" value="6">`,
        buttons: {
          roll: {
            label: game.i18n.localize("TRILHAMARGA.Roll"),
            callback: (html) => resolve(parseInt(html.find("#difficulty").val()))
          }
        },
        default: "roll"
      }).render(true);
    });
    return diff;
  }

  async _getVariation() {
     // Simple prompt for variation for now
     const varVal = await new Promise(resolve => {
      new Dialog({
        title: "Variação",
        content: `
          <select id="variation">
            <option value="0">Normal (1d12)</option>
            <option value="1">Positivo (+1d12kh)</option>
            <option value="-1">Negativo (+1d12kl)</option>
          </select>
        `,
        buttons: {
          roll: {
            label: "Ok",
            callback: (html) => resolve(parseInt(html.find("#variation").val()))
          }
        },
        default: "roll"
      }).render(true);
    });
    return varVal;
  }
}
