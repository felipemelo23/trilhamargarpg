/**
 * Extend the basic ActorSheet with some very simple modifications
 */
export class TrilhamargaActorSheet extends ActorSheet {

  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ["trilhamarga", "sheet", "actor"],
      width: 700,
      height: 800,
      tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "descriptors" }],
      dragDrop: [{dragSelector: ".item[data-item-id]", dropSelector: null}]
    });
  }

  /** @override */
  get template() {
    return `systems/trilhamarga/templates/actors/${this.actor.type}-sheet.html`;
  }

  /** @override */
  async getData() {
    const data = await super.getData();
    data.system = data.actor.system;

    // Prepare items
    if (this.actor.type === 'pc') {
      this._preparePcItems(data);
    } else if (this.actor.type === 'npc') {
      this._prepareNpcItems(data);
      data.actorAbilities = this.actor.items
        .filter(i => i.type === "npc_ability")
        .map(i => i.name)
        .sort();
    }

    return data;
  }

  _preparePcItems(data) {
    // Sort items by sort property
    const items = this.actor.items.contents.sort((a, b) => (a.sort || 0) - (b.sort || 0));

    // Find Physique level
    const physique = items.find(i => i.type === 'skill' && (i.name.toLowerCase() === 'physique' || i.name.toLowerCase() === 'físico'))?.system.level || 0;

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
    const notes = [];

    for (let i of items) {
      if (i.type === 'skill') skills.push(i);
      else if (['weapon', 'armor', 'shield', 'gear'].includes(i.type)) {
        // Calculate display damage for weapons
        if (i.type === 'weapon') {
          let displayDamage = i.system.damage || "1d2";
          if (i.system.addPhysiqueToDamage && physique !== 0) {
            displayDamage += physique > 0 ? ` + ${physique}` : ` - ${Math.abs(physique)}`;
          }
          i.displayDamage = displayDamage;
        }

        const loc = i.system.location || 'body';
        if (inventory[loc]) inventory[loc].push(i);
        else inventory.body.push(i);
      }
      else if (i.type === 'wound') wounds.push(i);
      else if (i.type === 'divine_domain') divineDomains.push(i);
      else if (i.type === 'divine_tenet') divineTenets.push(i);
      else if (i.type === 'spell') spells.push(i);
      else if (i.type === 'recipe') recipes.push(i);
      else if (i.type === 'note') notes.push(i);
    }

    data.skills = skills.sort((a, b) => {
      const levelDiff = (b.system.level || 0) - (a.system.level || 0);
      if (levelDiff !== 0) return levelDiff;
      return a.name.localeCompare(b.name);
    });
    data.inventory = inventory;
    data.wounds = wounds.sort((a, b) => (b.system.severity || 0) - (a.system.severity || 0));
    data.divineDomains = divineDomains;
    data.divineTenets = divineTenets;
    data.spells = spells;
    data.recipes = recipes;
    data.notes = notes;
  }

  _prepareNpcItems(data) {
    // Sort items by sort property
    const items = this.actor.items.contents.sort((a, b) => (a.sort || 0) - (b.sort || 0));

    const attacks = [];
    const abilities = [];
    const spells = [];

    for (let i of items) {
      if (i.type === 'npc_attack') attacks.push(i);
      else if (i.type === 'npc_ability') abilities.push(i);
      else if (i.type === 'spell') spells.push(i);
    }

    data.attacks = attacks;
    data.abilities = abilities;
    data.spells = spells;
  }

  /** @override */
  _onSortItem(event, itemData) {
    const target = event.target.closest(".item[data-item-id]");
    const targetId = target?.dataset.itemId;
    if (!targetId) return super._onSortItem(event, itemData);

    const item = this.actor.items.get(itemData.uuid?.split('.').pop() || itemData.id);
    const targetItem = this.actor.items.get(targetId);
    if (!item || !targetItem || item.id === targetItem.id) return super._onSortItem(event, itemData);

    // Only sort if item types match
    if (item.type !== targetItem.type) return super._onSortItem(event, itemData);

    // Filter siblings to only those of the same type
    const siblings = this.actor.items.filter(i => i.type === item.type && i.id !== item.id);
    
    // Perform the sort
    const sortUpdates = SortingHelpers.performIntegerSort(item, {target: targetItem, siblings});
    const updateData = sortUpdates.map(u => ({_id: u.target.id, sort: u.update.sort}));
    
    return this.actor.updateEmbeddedDocuments("Item", updateData);
  }

  /** @override */
  async _onDrop(event) {
    let data;
    try {
      data = JSON.parse(event.dataTransfer.getData("text/plain"));
    } catch (err) {
      return false;
    }

    const targetLocation = event.target.closest(".inventory-section")?.dataset.location;
    
    // If we're dropping an item onto a specific inventory section
    if (data.type === "Item" && targetLocation) {
      const item = await Item.fromDropData(data);
      if (!item) return super._onDrop(event);

      const isPhysical = ["weapon", "armor", "shield", "gear"].includes(item.type);

      // Handle items from a different actor (Move between sheets)
      if (item.actor && item.actor.id !== this.actor.id) {
        if (!isPhysical) return super._onDrop(event);

        // Check capacity on target actor
        if (!this.actor.checkCapacity(item, targetLocation)) {
          const locLabel = game.i18n.localize(`TRILHAMARGA.${targetLocation.capitalize()}`);
          ui.notifications.warn(game.i18n.format("TRILHAMARGA.InventoryFull", {location: locLabel}));
          return false;
        }

        // Create on target with new location
        const itemData = item.toObject();
        itemData.system.location = targetLocation;
        await this.actor.createEmbeddedDocuments("Item", [itemData]);

        // Delete from source if user has permission
        if (item.actor.isOwner) {
          await item.delete();
        }
        return false;
      }

      // Handle existing items on the same actor
      if (item.actor?.id === this.actor.id && isPhysical) {
        // Check capacity if changing location
        if (item.system.location !== targetLocation) {
          if (!this.actor.checkCapacity(item, targetLocation, {excludeItems: [item]})) {
            const locLabel = game.i18n.localize(`TRILHAMARGA.${targetLocation.capitalize()}`);
            ui.notifications.warn(game.i18n.format("TRILHAMARGA.InventoryFull", {location: locLabel}));
            return false;
          }
        }
        
        await item.update({"system.location": targetLocation});
        // If dropped on the section (not an item), prevent default to avoid redundant sorting logic
        if (!event.target.closest(".item")) return;
      }
      // Store location for _onDropItemCreate (for compendium drops)
      this._dropLocation = targetLocation;
    } else {
      this._dropLocation = null;
    }

    return super._onDrop(event);
  }

  /** @override */
  async _onDropItemCreate(itemData) {
    itemData = itemData instanceof Array ? itemData : [itemData];
    const itemsToCreate = [];

    for (let item of itemData) {
      const isPhysical = ["weapon", "armor", "shield", "gear"].includes(item.type);
      
      // Apply drop location if available
      if (this._dropLocation && isPhysical) {
        item = foundry.utils.mergeObject(item, {"system.location": this._dropLocation}, {inplace: false});
      }

      const targetLoc = item.system?.location || 'body';

      // Check capacity for physical items
      if (isPhysical && !this.actor.checkCapacity(item, targetLoc)) {
        const locLabel = game.i18n.localize(`TRILHAMARGA.${targetLoc.capitalize()}`);
        ui.notifications.warn(game.i18n.format("TRILHAMARGA.InventoryFull", {location: locLabel}));
        continue;
      }

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
  _onChangeInput(event) {
    const el = event.target;
    const value = el.value;
    
    // Handle relative changes (+/-)
    if (value.startsWith('+') || value.startsWith('-')) {
      const delta = parseInt(value);
      if (!isNaN(delta)) {
        const name = el.name;
        const current = foundry.utils.getProperty(this.actor, name);
        const newValue = Math.max(0, (Number(current) || 0) + delta);
        el.value = newValue;
      }
    }
    
    return super._onChangeInput(event);
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

    // Item clicks (Icon or Name)
    html.find('.item-clickable').click(this._onItemClick.bind(this));

    // XP Adjustment
    html.find('.xp-control').click(this._onXpAdjust.bind(this));
  }

  async _onXpAdjust(event) {
    event.preventDefault();
    const button = event.currentTarget;
    const isPlus = button.classList.contains('xp-plus');
    const amount = isPlus ? 1 : -1;
    const currentXp = this.actor.system.xp || 0;
    const newXp = Math.max(0, currentXp + amount);
    
    await this.actor.update({ "system.xp": newXp });
  }

  async _onItemClick(event) {
    event.preventDefault();
    const li = $(event.currentTarget).parents(".item");
    const item = this.actor.items.get(li.data("itemId"));

    switch (item.type) {
      case 'skill':
        return this.actor.rollSkill(item);
      case 'armor':
      case 'shield':
      case 'gear':
        return this._shareItemToChat(item);
      case 'npc_ability':
        return this.actor.useNpcAbility(item);
      case 'spell':
        return this.actor.castSpell(item);
      case 'divine_tenet':
        return this._promptMiracle(item);
      case 'weapon':
        return this.actor.rollAttack(item);
      case 'wound':
        return this.actor.rollWound(item);
      case 'npc_attack':
        return this.actor.rollNpcAttack(item);
      default:
        return;
    }
  }
  async _shareItemToChat(item) {
    const chatData = {
      actor: this.actor,
      item: item
    };

    const content = await renderTemplate("systems/trilhamarga/templates/chat/item-card.hbs", chatData);

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: content,
      type: CONST.CHAT_MESSAGE_TYPES.OTHER
    });
  }

  async _promptMiracle(item) {
    const buttons = {};
    const miracles = item.system.miracles || {};

    if (miracles.minor) {
      buttons.minor = {
        label: game.i18n.localize("TRILHAMARGA.MiracleMinor"),
        callback: () => this._shareMiracleToChat(item, miracles.minor)
      };
    }
    if (miracles.mid) {
      buttons.mid = {
        label: game.i18n.localize("TRILHAMARGA.MiracleMid"),
        callback: () => this._shareMiracleToChat(item, miracles.mid)
      };
    }
    if (miracles.major) {
      buttons.major = {
        label: game.i18n.localize("TRILHAMARGA.MiracleMajor"),
        callback: () => this._shareMiracleToChat(item, miracles.major)
      };
    }

    if (Object.keys(buttons).length === 0) return;

    new Dialog({
      title: game.i18n.localize("TRILHAMARGA.ChooseMiracle"),
      content: `<p>${game.i18n.localize("TRILHAMARGA.ChooseMiracle")}</p>`,
      buttons: buttons,
      default: "minor"
    }).render(true);
  }

  async _shareMiracleToChat(item, description) {
    const chatData = {
      actor: this.actor,
      item: item,
      description: description
    };

    const content = await renderTemplate("systems/trilhamarga/templates/chat/miracle-card.hbs", chatData);

    return ChatMessage.create({
      speaker: ChatMessage.getSpeaker({ actor: this.actor }),
      content: content,
      type: CONST.CHAT_MESSAGE_TYPES.OTHER
    });
  }

  async _onItemCreate(event) {
    event.preventDefault();
    const header = event.currentTarget;
    const type = header.dataset.type;
    
    // Map item type to localization key
    const typeKeys = {
      'skill': 'Skill',
      'weapon': 'Weapon',
      'armor': 'Armor',
      'shield': 'Shield',
      'gear': 'Gear',
      'wound': 'Wound',
      'divine_domain': 'DivineDomain',
      'divine_tenet': 'DivineTenet',
      'spell': 'Spell',
      'recipe': 'Recipe',
      'note': 'Note',
      'npc_attack': 'NPCAttack',
      'npc_ability': 'NPCAbility'
    };

    const typeLabel = game.i18n.localize(`TRILHAMARGA.${typeKeys[type] || type.capitalize()}`);
    const itemName = game.i18n.format("TRILHAMARGA.NewItem", {item: typeLabel});

    // Check capacity for physical items (default to 'body')
    if (['weapon', 'armor', 'shield', 'gear'].includes(type)) {
      if (!this.actor.checkCapacity({type, system: {slots: 1, quantity: 1}}, 'body')) {
        const locLabel = game.i18n.localize("TRILHAMARGA.Body");
        ui.notifications.warn(game.i18n.format("TRILHAMARGA.InventoryFull", {location: locLabel}));
        return false;
      }
    }

    const itemData = {
      name: itemName,
      type: type,
      system: {}
    };

    // Default values and icons
    if (type === 'wound') {
      itemData.img = 'icons/skills/wounds/injury-triple-slash-bleed.webp';
      itemData.system.category = 'mild';
      itemData.system.severity = 1;
    } else if (type === 'note') {
      itemData.img = 'icons/sundries/scrolls/scroll-writing-white.webp';
    }

    return await this.actor.createEmbeddedDocuments("Item", [itemData]);
  }

  async _onRoll(event) {
    event.preventDefault();
    const element = event.currentTarget;
    const dataset = element.dataset;

    if (dataset.roll) {
      const difficulty = await this._getDifficulty();
      if (difficulty === null) return;
      
      const modifier = await this._getModifier();
      if (modifier === null) return;
      
      await this.actor.roll(difficulty, modifier);
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
          },
          cancel: {
            label: game.i18n.localize("TRILHAMARGA.Cancel"),
            callback: () => resolve(null)
          }
        },
        default: "roll"
      }, { width: 250 }).render(true);
    });
    return diff;
  }

  async _getModifier() {
     // Simple prompt for modifier for now
     const modVal = await new Promise(resolve => {
      new Dialog({
        title: game.i18n.localize("TRILHAMARGA.Modifier"),
        content: `
          <select id="modifier" style="width: 100%; margin-bottom: 10px;">
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
    return modVal;
  }
}
