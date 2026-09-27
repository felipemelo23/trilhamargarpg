
// Macro to create all NPC Attacks
const attacksData = [
  {
    "name": "Adaga",
    "bonus": 0,
    "damage": "1d4"
  },
  {
    "name": "Arco",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Arco Curto",
    "bonus": 2,
    "damage": "1d4"
  },
  {
    "name": "Arco longo",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Arma Improvisada",
    "bonus": 1,
    "damage": ""
  },
  {
    "name": "Atropelar",
    "bonus": 4,
    "damage": ""
  },
  {
    "name": "Azagaia",
    "bonus": 2,
    "damage": "1d4"
  },
  {
    "name": "Bafo de chamas",
    "bonus": 0,
    "damage": ""
  },
  {
    "name": "Besta",
    "bonus": 3,
    "damage": "1d12"
  },
  {
    "name": "Bicada",
    "bonus": 1,
    "damage": "1d4"
  },
  {
    "name": "Cascos",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Cauda",
    "bonus": 4,
    "damage": "1d8"
  },
  {
    "name": "Chifrada",
    "bonus": 2,
    "damage": "1d8"
  },
  {
    "name": "Chifre",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Chifres",
    "bonus": 1,
    "damage": "1d4"
  },
  {
    "name": "Cimitarra",
    "bonus": 4,
    "damage": "1d10"
  },
  {
    "name": "Clava",
    "bonus": 4,
    "damage": "1d12+2"
  },
  {
    "name": "Coice",
    "bonus": 1,
    "damage": "1d4"
  },
  {
    "name": "Constrição",
    "bonus": 2,
    "damage": "1d6"
  },
  {
    "name": "Corrosão",
    "bonus": 1,
    "damage": ""
  },
  {
    "name": "Desarmado",
    "bonus": 2,
    "damage": "1d2"
  },
  {
    "name": "Engolfar",
    "bonus": 1,
    "damage": ""
  },
  {
    "name": "Escravizar",
    "bonus": 4,
    "damage": ""
  },
  {
    "name": "Espada",
    "bonus": 2,
    "damage": "1d8"
  },
  {
    "name": "Espada curta",
    "bonus": 0,
    "damage": "1d6"
  },
  {
    "name": "Espada longa",
    "bonus": 5,
    "damage": "1d10"
  },
  {
    "name": "Espinhos",
    "bonus": 3,
    "damage": "1d6"
  },
  {
    "name": "Extrair Cérebro",
    "bonus": 0,
    "damage": ""
  },
  {
    "name": "Fagocitar",
    "bonus": 3,
    "damage": "1d4"
  },
  {
    "name": "Ferrão",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Galhos",
    "bonus": 4,
    "damage": "1d12+4"
  },
  {
    "name": "Garra",
    "bonus": 3,
    "damage": "1d6"
  },
  {
    "name": "Garras",
    "bonus": 2,
    "damage": "1d3"
  },
  {
    "name": "Jato",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Labareda",
    "bonus": 0,
    "damage": "1d4"
  },
  {
    "name": "Lança",
    "bonus": 1,
    "damage": "1d8"
  },
  {
    "name": "Maça",
    "bonus": 2,
    "damage": "1d8"
  },
  {
    "name": "Machado",
    "bonus": 2,
    "damage": "1d6"
  },
  {
    "name": "Mordida",
    "bonus": 3,
    "damage": "1d4"
  },
  {
    "name": "Mordidas",
    "bonus": 3,
    "damage": "1d10"
  },
  {
    "name": "Olhos",
    "bonus": 0,
    "damage": ""
  },
  {
    "name": "Pancada",
    "bonus": 4,
    "damage": "1d10"
  },
  {
    "name": "Pedra",
    "bonus": 3,
    "damage": "1d12+3"
  },
  {
    "name": "Picada",
    "bonus": 2,
    "damage": "1d2"
  },
  {
    "name": "Presas",
    "bonus": 3,
    "damage": "1d10"
  },
  {
    "name": "Rajada",
    "bonus": 3,
    "damage": "1d8"
  },
  {
    "name": "Regeneração",
    "bonus": 0,
    "damage": ""
  },
  {
    "name": "Rugido",
    "bonus": 3,
    "damage": ""
  },
  {
    "name": "Tentáculo",
    "bonus": 2,
    "damage": "1d8"
  },
  {
    "name": "Tentáculos",
    "bonus": 4,
    "damage": "1d8"
  },
  {
    "name": "Toque necrótico",
    "bonus": 4,
    "damage": ""
  },
  {
    "name": "Tridente",
    "bonus": 2,
    "damage": "1d6"
  },
  {
    "name": "Uivo",
    "bonus": 0,
    "damage": ""
  }
];

const itemData = attacksData.map(a => ({
  name: a.name,
  type: "npc_attack",
  img: "icons/svg/dice-target.svg",
  system: {
    bonus: a.bonus,
    damage: a.damage,
    defaultModification: 0
  }
}));

await Item.createDocuments(itemData);
ui.notifications.info(`Created ${itemData.length} NPC Attacks!`);
