import { TrilhamargaActor } from "./actor.mjs";
import { TrilhamargaItem } from "./item.mjs";
import { TrilhamargaActorSheet } from "./sheets/actor-sheet.mjs";
import { TrilhamargaItemSheet } from "./sheets/item-sheet.mjs";

Hooks.once("init", async function() {
  console.log("Trilhamarga RPG | Initializing Trilhamarga RPG System");

  // Handlebars Helpers
  Handlebars.registerHelper('and', function() {
    return Array.prototype.slice.call(arguments, 0, -1).every(Boolean);
  });

  Handlebars.registerHelper('gt', function(a, b) {
    return a > b;
  });

  Handlebars.registerHelper('capitalize', function(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  });

  Handlebars.registerHelper('concat', function() {
    let outStr = '';
    for (let arg in arguments) {
      if (typeof arguments[arg] !== 'object') {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper('skillLevelLabel', function(level) {
    return game.i18n.localize(`TRILHAMARGA.SkillLevels.${level}`);
  });

  // Define custom Entity classes
  CONFIG.Actor.documentClass = TrilhamargaActor;
  CONFIG.Item.documentClass = TrilhamargaItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("trilhamarga", TrilhamargaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("trilhamarga", TrilhamargaItemSheet, { makeDefault: true });

  // Add system styles to TinyMCE editor
  CONFIG.TinyMCE.content_css.push("systems/trilhamarga/css/trilhamarga.css");

  // Dice Tray compatibility
  CONFIG.Dice.types = ["d4", "d6", "d8", "d10", "d12", "d20", "d100"];
  CONFIG.Dice.rolls = [Roll];
  CONFIG.Dice.terms.d4 = Die;
  CONFIG.Dice.terms.d6 = Die;
  CONFIG.Dice.terms.d8 = Die;
  CONFIG.Dice.terms.d10 = Die;
  CONFIG.Dice.terms.d12 = Die;
  CONFIG.Dice.terms.d20 = Die;
  CONFIG.Dice.terms.d100 = Die;

  // Register system settings
  game.settings.register("trilhamarga", "destiny", {
    name: "TRILHAMARGA.Destiny",
    scope: "world",
    config: false,
    type: Number,
    default: 0,
    onChange: value => {
      if (ui.destinyTracker) ui.destinyTracker.render();
    }
  });

  game.settings.register("trilhamarga", "doom", {
    name: "TRILHAMARGA.Doom",
    scope: "world",
    config: false,
    type: Number,
    default: 0,
    onChange: value => {
      if (ui.destinyTracker) ui.destinyTracker.render();
    }
  });

  // Default Token settings
  CONFIG.Token.objectClass.DEFAULT_CONFIG.displayBars = CONST.TOKEN_DISPLAY_MODES.HOVER;
  CONFIG.Token.objectClass.DEFAULT_CONFIG.displayName = CONST.TOKEN_DISPLAY_MODES.HOVER;

  // Preload Handlebars templates
  return loadTemplates([
    "systems/trilhamarga/templates/actors/pc-sheet.html",
    "systems/trilhamarga/templates/actors/npc-sheet.html",
    "systems/trilhamarga/templates/items/item-sheet.html",
    "systems/trilhamarga/templates/chat/skill-roll.hbs",
    "systems/trilhamarga/templates/chat/weapon-attack.hbs",
    "systems/trilhamarga/templates/chat/npc-attack.hbs"
  ]);
});

Hooks.on('dcCalcWhitelist', (whitelist, actor) => {
  whitelist.trilhamarga = {
    flags: {
      adv: false
    },
    abilities: [],
    attributes: ['life.value', 'stamina.value', 'protection.value', 'vitality.value', 'woundPenalty', 'protectionPenalty']
  };
});

Hooks.on('diceCalculator', (app, html, data) => {
  // If dcCalcWhitelist didn't pick it up, we try to inject it here
  if (data && !data.trilhamarga) {
    data.trilhamarga = {
      abilities: [],
      attributes: ['life.value', 'stamina.value', 'protection.value', 'vitality.value']
    };
  }
});

Hooks.on("renderChatMessage", (message, html, data) => {
  const sender = html.find(".message-sender")[0];
  if ( !sender ) return;

  sender.innerText = message.author.name;
});

Hooks.on("ready", async function() {
  // Create the Destiny/Doom tracker UI
  if (!ui.destinyTracker) {
    ui.destinyTracker = new DestinyTracker().render(true);
  }
});

Hooks.on("preCreateToken", (token, data, options, userId) => {
  const actor = token.actor;
  if (!actor) return;

  const updates = {
    displayBars: CONST.TOKEN_DISPLAY_MODES.HOVER,
    displayName: CONST.TOKEN_DISPLAY_MODES.HOVER,
    bar1: { attribute: actor.type === "pc" ? "stamina" : "vitality" },
    bar2: { attribute: "protection" }
  };

  if (actor.type === "pc") {
    updates.disposition = CONST.TOKEN_DISPOSITIONS.FRIENDLY;
  }

  token.updateSource(updates);
});

/**
 * Custom Tracker for Destiny and Doom
 */
class DestinyTracker extends Application {
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "destiny-tracker",
      template: "systems/trilhamarga/templates/ui/destiny-tracker.html",
      popOut: false
    });
  }

  /** @override */
  _injectHTML(html) {
    if ( !document.getElementById("destiny-tracker") ) {
      $("#interface").append(html);
    }
  }

  getData() {
    return {
      destiny: game.settings.get("trilhamarga", "destiny"),
      doom: game.settings.get("trilhamarga", "doom"),
      isGM: game.user.isGM
    };
  }

  activateListeners(html) {
    super.activateListeners(html);
    html.find(".destiny-up").click(() => this._updateCurrency("destiny", 1));
    html.find(".destiny-down").click(() => this._updateCurrency("destiny", -1));
    html.find(".doom-up").click(() => this._updateCurrency("doom", 1));
    html.find(".doom-down").click(() => this._updateCurrency("doom", -1));
  }

  async _updateCurrency(type, delta) {
    if (type === "doom" && !game.user.isGM) return;
    if (type === "destiny" && !game.user.isGM && delta > 0) return;
    
    const current = game.settings.get("trilhamarga", type);
    await game.settings.set("trilhamarga", type, Math.max(0, current + delta));
  }
}
