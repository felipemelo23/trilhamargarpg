import { TrilhamargaActor } from "./actor.mjs";
import { TrilhamargaItem } from "./item.mjs";
import { TrilhamargaActorSheet } from "./sheets/actor-sheet.mjs";
import { TrilhamargaItemSheet } from "./sheets/item-sheet.mjs";

Hooks.once("init", async function() {
  console.log("Trilhamarga RPG | Initializing Trilhamarga RPG System");

  // Define custom Entity classes
  CONFIG.Actor.documentClass = TrilhamargaActor;
  CONFIG.Item.documentClass = TrilhamargaItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("trilhamarga", TrilhamargaActorSheet, { makeDefault: true });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("trilhamarga", TrilhamargaItemSheet, { makeDefault: true });

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

  // Handlebars Helpers
  Handlebars.registerHelper('and', function() {
    return Array.prototype.slice.call(arguments, 0, -1).every(Boolean);
  });

  Handlebars.registerHelper('gt', function(a, b) {
    return a > b;
  });

  // Preload Handlebars templates
  return loadTemplates([
    "systems/trilhamarga/templates/actors/pc-sheet.html",
    "systems/trilhamarga/templates/actors/npc-sheet.html",
    "systems/trilhamarga/templates/items/item-sheet.html"
  ]);
});

Hooks.on("ready", async function() {
  // Create the Destiny/Doom tracker UI
  if (!ui.destinyTracker) {
    ui.destinyTracker = new DestinyTracker().render(true);
  }
});

/**
 * Custom Tracker for Destiny and Doom
 */
class DestinyTracker extends Application {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "destiny-tracker",
      template: "systems/trilhamarga/templates/ui/destiny-tracker.html",
      popOut: false
    });
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
