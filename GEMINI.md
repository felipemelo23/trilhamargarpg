# Trilhamarga RPG - FoundryVTT System

This project is a custom system module for [FoundryVTT](https://foundryvtt.com/) implementing the mechanics of the **Trilhamarga RPG**.

## Core Mechanics

### 1. Roll System
The system uses a custom 1d12-based resolution:
- **Base Roll**: `1d12` vs. **Difficulty**.
- **Critical Success**: Natural 12.
- **Critical Failure**: Natural 1.
- **Positive Variation**: `2d12kh` (Keep Higher).
- **Negative Variation**: `2d12kl` (Keep Lower).

Rolls are triggered via the `.rollable` class on character sheets or through the `actor.roll()` method.

### 2. Meta-currency (Destiny & Doom)
- **Destiny (Group)**: Visible to all; GM can grant/spend; Players can spend.
- **Doom (GM)**: Visible to all; Only GM can grant/spend.
- **Tracker**: A persistent UI element (`DestinyTracker`) is anchored to the top-left of the screen.

### 3. Data Architecture (`template.json`)
- **Actors**: 
  - `pc`: Player characters with derived stats (Life, Load Capacity) and narrative descriptors.
  - `npc`: Streamlined non-player characters.
- **Items**:
  - `skill`: Proficiency level (-1 to +6).
  - `gear`: Equipment with slot and stacking logic.
  - `wound`: Tracks injury severity affecting Life and penalties.
  - `divine_domain`, `spell`, `recipe`: Categorized magic/alchemy entries.

## Project Structure

```text
trilhamarga/
├── css/
│   └── trilhamarga.css       # Visual styling and layouts
├── lang/
│   ├── en.json               # English localization
│   └── pt-BR.json            # Portuguese localization
├── module/
│   ├── actor.mjs             # Base Actor logic & derived data
│   ├── item.mjs              # Base Item logic
│   ├── trilhamarga.mjs       # System entry point & Meta-currency
│   └── sheets/
│       ├── actor-sheet.mjs   # Actor sheet interaction logic
│       └── item-sheet.mjs    # Item sheet interaction logic
├── templates/
│   ├── actors/               # PC and NPC HTML templates
│   ├── items/                # Item HTML templates
│   └── ui/                   # Shared UI templates (Destiny Tracker)
├── system.json               # FoundryVTT system metadata
└── template.json             # Data models for Actors and Items
```

## Maintenance & Development

### Derived Data
Most character stats (Life, Load Capacity, Wound Penalties) are calculated in `TrilhamargaActor.prepareDerivedData()`. Avoid storing these in the database; always calculate them based on related items (e.g., Life is based on the `Physique` skill and `wound` items).

### Adding New Tabs
1. Update `TrilhamargaActorSheet.defaultOptions` to include the tab name.
2. Add the `<nav>` entry and `<section class="tab">` in `pc-sheet.html` or `npc-sheet.html`.
3. Ensure items are filtered into the correct data category in `TrilhamargaActorSheet._preparePcItems()`.

### Localization
Always use `{{localize 'KEY'}}` in templates and `game.i18n.localize('KEY')` in JavaScript. New keys must be added to both `lang/en.json` and `lang/pt-BR.json`.

## Coding Standards
- **ES Modules**: Use `.mjs` for all JavaScript files.
- **Language**: Code logic and variables must be in **English**. String literals and UI text must use **localization keys**.
- **Foundry API**: Target compatibility with the latest stable FoundryVTT version.
