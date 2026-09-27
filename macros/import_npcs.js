
// Macro to create all NPCs
const actorsData = [
  {
    "name": "Acólito das Sombras",
    "category": "Humanos",
    "vitality": 9,
    "protection": 0,
    "defense": 1,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Aprendiz de magias profanas, treinado em rituais e sacrifícios. Ataca em conjunto, invocando demônios para lutar por eles e usando feitiços de controle mental fragilizar seus oponentes.",
    "attacks": [
      {
        "name": "Adaga",
        "bonus": 0,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Feitiçaria",
        "bonus": 2,
        "description": "Pode lançar os feitiços _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Invocar Diabretes](spells.html#spell:summoncreature)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      }
    ]
  },
  {
    "name": "Assassino Silencioso",
    "category": "Humanos",
    "vitality": 9,
    "protection": 3,
    "defense": 3,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Matador furtivo que age sem aviso. Move-se nas sombras, ataca por trás e desaparece antes da retaliação.",
    "attacks": [
      {
        "name": "Adaga",
        "bonus": 3,
        "damage": "1d4"
      },
      {
        "name": "Besta",
        "bonus": 3,
        "damage": "1d12"
      }
    ],
    "abilities": [
      {
        "name": "Furtivo",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação."
      },
      {
        "name": "Veneno",
        "bonus": 3,
        "description": "Uma criatura atingida por sua adaga sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 3."
      }
    ]
  },
  {
    "name": "Bandido de Estrada",
    "category": "Humanos",
    "vitality": 12,
    "protection": 0,
    "defense": 1,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Criminoso oportunista que embosca viajantes nas estradas. Prefere atacar com a vantagem numérica e recuar se a luta parecer perdida.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 2,
        "damage": "1d8"
      },
      {
        "name": "Arco Curto",
        "bonus": 2,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Furtivo",
        "bonus": 2,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em estrada e ambientes selvagens."
      }
    ]
  },
  {
    "name": "Brigão de Taverna",
    "category": "Humanos",
    "vitality": 10,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Lutador improvisado movido por raiva, álcool e orgulho. Usa o que tiver à mão, como garrafas, cadeiras ou os próprios punhos e raramente mede consequências.",
    "attacks": [
      {
        "name": "Desarmado",
        "bonus": 2,
        "damage": "1d2"
      },
      {
        "name": "Arma Improvisada",
        "bonus": 1,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Arma Improvisada",
        "bonus": 0,
        "description": "Armas improvisadas pequenas como garrafas causam 1d4 de dano, enquanto armas maiores como uma cadeira causam 1d8."
      }
    ]
  },
  {
    "name": "Caçador Errante",
    "category": "Humanos",
    "vitality": 12,
    "protection": 6,
    "defense": 3,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Rastreador solitário acostumado às florestas e pântanos. Letal com arco e armadilhas, evita combates diretos e persegue presas por dias.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 3,
        "damage": "1d8"
      },
      {
        "name": "Arco",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Armadilha",
        "bonus": 4,
        "description": "Uma criatura a até 9 metros dele cai em uma armadilha aleatória. __**[Agilidade](skills.html#skill:agility)**_ para evitar_:"
      }
    ]
  },
  {
    "name": "Caçador de Recompensas",
    "category": "Humanos",
    "vitality": 12,
    "protection": 9,
    "defense": 3,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Implacável perseguidor de foragidos. Sabe rastrear, capturar e sobreviver por conta própria. Luta com eficiência brutal e prefere inimigos vivos, mas não se importa se morrerem.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 4,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Marca do Caçador",
        "bonus": 0,
        "description": "Pode usar uma _**[ação menor](combat.html#sec:minoraction)**_ para marcar um alvo. Ele tem uma _**[chance positiva](rules.html#sec:positivechance)**_ em qualquer teste contra seu alvo e o alvo tem uma _**[chance negativa](rules.html#sec:negativechance)**_ em qualquer teste contra ele."
      }
    ]
  },
  {
    "name": "Cavaleiro Renegado",
    "category": "Humanos",
    "vitality": 18,
    "protection": 12,
    "defense": 4,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Ex-paladino ou nobre caído em desgraça. Combate com disciplina e fúria, usando armaduras pesadas e um código pessoal distorcido.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 4,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      },
      {
        "name": "Escudo",
        "bonus": 0,
        "description": "Possui _**[cobertura parcial](combat.html#sec:halfcover)**_ enquanto estiver carregando um escudo."
      }
    ]
  },
  {
    "name": "Cultista Fanático",
    "category": "Humanos",
    "vitality": 9,
    "protection": 0,
    "defense": 1,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Servo cego de uma entidade sombria. Entra em transe durante o combate, gritando preces e lutando até a morte sem medo nem razão.",
    "attacks": [
      {
        "name": "Adaga",
        "bonus": 2,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Feitiçaria",
        "bonus": 4,
        "description": "Pode lançar os feitiços _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Invocar Diabretes](spells.html#spell:summoncreature)**_ e _**[Toque Macabro](spells.html#spell:chilltouch)**_."
      }
    ]
  },
  {
    "name": "Guarda da Cidade",
    "category": "Humanos",
    "vitality": 12,
    "protection": 6,
    "defense": 4,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Soldado treinado para manter a ordem. Combate em formação, segue ordens sem questionar e prende antes de matar, a menos que seja provocado.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Ladrão de Rua",
    "category": "Humanos",
    "vitality": 9,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Oportunista ágil e esperto, acostumado a becos e telhados. Prefere atacar de surpresa e fugir antes que percebam o golpe.",
    "attacks": [
      {
        "name": "Adaga",
        "bonus": 2,
        "damage": "1d6"
      },
      {
        "name": "Besta",
        "bonus": 2,
        "damage": "1d12"
      }
    ],
    "abilities": [
      {
        "name": "Pungar",
        "bonus": 3,
        "description": "Com uma _**[ação menor](combat.html#sec:minoraction)**_, rouba um item aleatório que não esteja sendo usado ou vestido de uma criatura em alcance corpo a corpo. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para evitar."
      }
    ]
  },
  {
    "name": "Mercenário Contratado",
    "category": "Humanos",
    "vitality": 12,
    "protection": 6,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Guerreiro profissional que luta por ouro. Armado, disciplinado e cínico, cumpre ordens com eficiência, mas abandona a causa se o pagamento falhar.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 2,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Soldado Novato",
    "category": "Humanos",
    "vitality": 9,
    "protection": 6,
    "defense": 1,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Jovem em armas, de olhar inseguro e mãos trêmulas. Segue ordens sem compreender o porquê e acredita que coragem é apenas não demonstrar o medo.",
    "attacks": [
      {
        "name": "Lança",
        "bonus": 1,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Soldado Veterano",
    "category": "Humanos",
    "vitality": 24,
    "protection": 12,
    "defense": 4,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Combatente endurecido por campanhas e derrotas. Mantém sangue-frio em batalha, age com tática e nunca subestima o inimigo.",
    "attacks": [
      {
        "name": "Espada",
        "bonus": 4,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Tática de Combate",
        "bonus": 0,
        "description": "Oponentes tem uma _**[chance negativa](rules.html#sec:negativechance)**_ para atacar um soldado veterano caso haja outro soldado adjacente a ele."
      }
    ]
  },
  {
    "name": "Águia",
    "category": "Animais",
    "vitality": 6,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "18 metros (voo)",
    "description": "Ave de rapina majestosa de visão aguçada, capaz de mergulhar dos céus para atacar com suas garras.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 2,
        "damage": "1d3"
      }
    ],
    "abilities": []
  },
  {
    "name": "Babuíno",
    "category": "Animais",
    "vitality": 9,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros (escalar)",
    "description": "Primata agressivo e territorialista que vive em bandos e defende seu espaço com ferocidade.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Ataque em bando",
        "bonus": 0,
        "description": "Sempre que acertar um ataque, passa a _**[iniciativa](combat.html#sec:initiative)**_ para outro babuíno, independentemente se o resultado do dado foi _**ímpar**_."
      }
    ]
  },
  {
    "name": "Baleia Assassina",
    "category": "Animais",
    "vitality": 48,
    "protection": 0,
    "defense": 4,
    "resistance": 3,
    "movement": "18 metros (natação)",
    "description": "Um predador formidável das profundezas, extremamente inteligente e caçador implacável em grupo.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 4,
        "damage": "1d12"
      },
      {
        "name": "Cauda",
        "bonus": 4,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de Cauda."
      }
    ]
  },
  {
    "name": "Búfalo",
    "category": "Animais",
    "vitality": 24,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "12 metros",
    "description": "Grande herbívoro de constituição robusta e temperamento imprevisível, letal quando ataca em investida.",
    "attacks": [
      {
        "name": "Chifrada",
        "bonus": 2,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Investida",
        "bonus": 0,
        "description": "Quando faz uma _**[investida](combat.html#sec:charge)**_, pode avançar 6 metros em linha reta, além do deslocamento normal."
      }
    ]
  },
  {
    "name": "Camelo",
    "category": "Animais",
    "vitality": 18,
    "protection": 0,
    "defense": 1,
    "resistance": 0,
    "movement": "12 metros",
    "description": "Animal de carga alto e resistente, perfeitamente adaptado para longas jornadas em climas áridos.",
    "attacks": [
      {
        "name": "Coice",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Cão",
    "category": "Animais",
    "vitality": 6,
    "protection": 0,
    "defense": 1,
    "resistance": 1,
    "movement": "12 metros",
    "description": "Animal domesticado incrivelmente leal, muito utilizado para guarda, caça ou simples companhia.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Cavalo",
    "category": "Animais",
    "vitality": 18,
    "protection": 0,
    "defense": 1,
    "resistance": 1,
    "movement": "18 metros",
    "description": "Montaria veloz e assustadiça, vital para viagens longas, mas que prefere fugir a lutar.",
    "attacks": [
      {
        "name": "Coice",
        "bonus": 1,
        "damage": "1d6"
      }
    ],
    "abilities": []
  },
  {
    "name": "Cavalo de Guerra",
    "category": "Animais",
    "vitality": 24,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "18 metros",
    "description": "Montaria robusta e treinada para não temer o caos de um campo de batalha.",
    "attacks": [
      {
        "name": "Cascos",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Cobra Constritora",
    "category": "Animais",
    "vitality": 12,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Uma serpente de grande porte que esmaga suas vítimas com apertos mortais.",
    "attacks": [
      {
        "name": "Constrição",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Constrição",
        "bonus": 2,
        "description": "A criatura fica _**[agarrada](combat.html#stat:grappled)**_ pela cobra constritora. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ela não podem evitar o ataque de Constrição da cobra constritora. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Cobra Venenosa",
    "category": "Animais",
    "vitality": 3,
    "protection": 0,
    "defense": 2,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Uma pequena e ágil serpente que injeta toxinas letais ao se sentir ameaçada.",
    "attacks": [
      {
        "name": "Picada",
        "bonus": 2,
        "damage": "1d2"
      }
    ],
    "abilities": [
      {
        "name": "Veneno",
        "bonus": 3,
        "description": "Uma criatura picada sofre efeito de um _**[veneno](combat.html#sec:poison)**_ inoculante de potência 3."
      }
    ]
  },
  {
    "name": "Coruja",
    "category": "Animais",
    "vitality": 3,
    "protection": 0,
    "defense": 1,
    "resistance": 1,
    "movement": "18 metros (voo)",
    "description": "Caçadora noturna de voo perfeitamente silencioso e sentidos muito aguçados para a escuridão.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 1,
        "damage": "1d2"
      }
    ],
    "abilities": [
      {
        "name": "Furtiva",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação à noite."
      }
    ]
  },
  {
    "name": "Crocodilo",
    "category": "Animais",
    "vitality": 12,
    "protection": 9,
    "defense": 3,
    "resistance": 1,
    "movement": "9 metros (natação)",
    "description": "Predador paciente, escondido sob a água com suas escamas duras e mandíbulas devastadoras.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Furtividade",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em rios e lagos."
      },
      {
        "name": "Agarrar",
        "bonus": 4,
        "description": "Uma criatura atingida por um ataque de Mordida fica _**[agarrada](combat.html#stat:grappled)**_ pelo crocodilo. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ele não podem evitar o ataque de Mordida do crocodilo. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Elefante",
    "category": "Animais",
    "vitality": 36,
    "protection": 9,
    "defense": 2,
    "resistance": 4,
    "movement": "12 metros",
    "description": "Um gigante herbívoro de força colossal, capaz de esmagar oponentes quando em fúria.",
    "attacks": [
      {
        "name": "Presas",
        "bonus": 3,
        "damage": "1d10"
      },
      {
        "name": "Atropelar",
        "bonus": 4,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Atropelar",
        "bonus": 4,
        "description": "Qualquer criatura que esteja em seu caminho quando ele se desloca sofre 1d8 de dano. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      }
    ]
  },
  {
    "name": "Falcão",
    "category": "Animais",
    "vitality": 3,
    "protection": 0,
    "defense": 3,
    "resistance": 1,
    "movement": "18 metros (voo)",
    "description": "Ave ágil e veloz, amplamente utilizada por caçadores devido à sua precisão nos céus.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 4,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Gorila",
    "category": "Animais",
    "vitality": 24,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "9 metros (escalar)",
    "description": "Primata imenso e musculoso que prefere a paz, mas ataca com força esmagadora se seu território for invadido.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 4,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      }
    ]
  },
  {
    "name": "Lebre",
    "category": "Animais",
    "vitality": 1,
    "protection": 0,
    "defense": 3,
    "resistance": 0,
    "movement": "12 metros",
    "description": "Pequeno animal herbívoro de movimentos extremamente rápidos e difíceis de prever.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 0,
        "damage": "1"
      }
    ],
    "abilities": []
  },
  {
    "name": "Javali",
    "category": "Animais",
    "vitality": 12,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "12 metros",
    "description": "Porco selvagem feroz e obstinado, que nunca recua e desfere investidas perigosas com suas presas.",
    "attacks": [
      {
        "name": "Presas",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Investida",
        "bonus": 0,
        "description": "Quando faz uma _**[investida](combat.html#sec:charge)**_, pode avançar 3 metros em linha reta, além do deslocamento normal."
      }
    ]
  },
  {
    "name": "Jumento",
    "category": "Animais",
    "vitality": 12,
    "protection": 0,
    "defense": 1,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Animal de carga muito resistente, famoso por sua teimosia, mas inestimável em longas jornadas.",
    "attacks": [
      {
        "name": "Coice",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Leão",
    "category": "Animais",
    "vitality": 36,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "12 metros",
    "description": "O orgulhoso predador das savanas, caçador temível que usa táticas de grupo para abater suas presas.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d10"
      },
      {
        "name": "Garras",
        "bonus": 4,
        "damage": "1d8"
      },
      {
        "name": "Rugido",
        "bonus": 3,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Rugido",
        "bonus": 3,
        "description": "Criaturas a até 9 metros dele ficam _**[abaladas](combat.html#stat:shaken)**_ até o fim do combate. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Lobo",
    "category": "Animais",
    "vitality": 9,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "12 metros",
    "description": "Predador canino ágil e astuto que caça em alcateias, contando com o trabalho em equipe e táticas de cerco para abater suas presas.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": []
  },
  {
    "name": "Lontra",
    "category": "Animais",
    "vitality": 3,
    "protection": 0,
    "defense": 3,
    "resistance": 1,
    "movement": "12 metros (natação)",
    "description": "Pequeno mamífero aquático ágil, brincalhão e excelente em pegar peixes.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 1,
        "damage": "1d3"
      }
    ],
    "abilities": []
  },
  {
    "name": "Mamute",
    "category": "Animais",
    "vitality": 48,
    "protection": 6,
    "defense": 2,
    "resistance": 6,
    "movement": "12 metros",
    "description": "Uma criatura pré-histórica massiva, parente do elefante, coberto de pelos e equipado com longas presas curvas.",
    "attacks": [
      {
        "name": "Presas",
        "bonus": 3,
        "damage": "1d12"
      },
      {
        "name": "Atropelar",
        "bonus": 4,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Atropelar",
        "bonus": 4,
        "description": "Qualquer criatura que esteja em seu caminho quando ele se desloca sofre 1d10 de dano. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      },
      {
        "name": "Resistência ao frio",
        "bonus": 0,
        "description": "Todo dano de frio é reduzido à metade, arredondado para cima."
      }
    ]
  },
  {
    "name": "Morcego",
    "category": "Animais",
    "vitality": 1,
    "protection": 0,
    "defense": 2,
    "resistance": 0,
    "movement": "12 metros (voo)",
    "description": "Pequeno mamífero voador noturno de visão limitada, mas que se guia com precisão através de ecolocalização.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 0,
        "damage": "1"
      }
    ],
    "abilities": [
      {
        "name": "Ecolocalização",
        "bonus": 6,
        "description": "Pode usar sua ecolocalização para lidar com testes relacionados a _**[Percepção](skills.html#skill:perception)**_."
      }
    ]
  },
  {
    "name": "Rato",
    "category": "Animais",
    "vitality": 1,
    "protection": 0,
    "defense": 0,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Pequeno roedor urbano, capaz de se esgueirar pelas menores frestas.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 0,
        "damage": "1"
      }
    ],
    "abilities": [
      {
        "name": "Furtiva",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em ambientes urbanos."
      }
    ]
  },
  {
    "name": "Puma",
    "category": "Animais",
    "vitality": 24,
    "protection": 0,
    "defense": 3,
    "resistance": 1,
    "movement": "12 metros (escalar)",
    "description": "Felino solitário e ágil, especialista em emboscadas, que espreita suas presas do alto de árvores e encostas antes de saltar para um ataque letal.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d8"
      },
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Furtivo",
        "bonus": 3,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em ambientes selvagens."
      }
    ]
  },
  {
    "name": "Tigre",
    "category": "Animais",
    "vitality": 30,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Predador solitário imenso e furtivo, que ataca com força e precisão mortais saindo da selva.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d10"
      },
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Furtivo",
        "bonus": 3,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em ambientes selvagens."
      }
    ]
  },
  {
    "name": "Tubarão",
    "category": "Animais",
    "vitality": 24,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "18 metros (natação)",
    "description": "O mais voraz caçador marítimo, cujos sentidos são atiçados à loucura pelo menor cheiro de sangue.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Faro para sangue",
        "bonus": 0,
        "description": "O dano de sua mordida aumenta um passo na _**[escala de dano](equipments.html#sec:damageladder)**_ contra criaturas com _**[ferimentos](combat.html#sec:wounds)**_."
      }
    ]
  },
  {
    "name": "Urso",
    "category": "Animais",
    "vitality": 30,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Um predador onívoro maciço, lento à primeira vista, mas dono de uma força física quase imbatível.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 2,
        "damage": "1d10"
      },
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Agarrar",
        "bonus": 4,
        "description": "Uma criatura atingida por um ataque de Garras fica _**[agarrada](combat.html#stat:grappled)**_ pelo urso. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Veado",
    "category": "Animais",
    "vitality": 6,
    "protection": 0,
    "defense": 2,
    "resistance": 1,
    "movement": "18 metros",
    "description": "Herbívoro gracioso e muito atento, pronto para correr grandes distâncias ao primeiro estalo de um galho.",
    "attacks": [
      {
        "name": "Chifres",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Abocanhador Matraqueante",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 1,
    "resistance": 0,
    "movement": "3 metros",
    "description": "Um amontoado amorfo de carne pulsante, coberto por bocas e olhos disformes, que sussurra insanidades e devora tudo ao seu alcance.",
    "attacks": [
      {
        "name": "Mordidas",
        "bonus": 3,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Mil bocas",
        "bonus": 0,
        "description": "Ataca, ao mesmo tempo, todas as criaturas que estiverem no alcance corpo a corpo."
      },
      {
        "name": "Matraquear",
        "bonus": 3,
        "description": "Criaturas a até 9 metros dele ficam _**[confusas](combat.html#stat:confused)**_. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Abolete",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "9 metros (natação)",
    "description": "Uma criatura aquática ancestral de tentáculos, pele viscosa e olhos hipnóticos, capaz de escravizar mentes com sua telepatia.",
    "attacks": [
      {
        "name": "Tentáculo",
        "bonus": 2,
        "damage": "1d8"
      },
      {
        "name": "Escravizar",
        "bonus": 4,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de Tentáculo."
      },
      {
        "name": "Telepatia",
        "bonus": 0,
        "description": "Conhece a mente de toda criatura a até 18 metros dele."
      },
      {
        "name": "Escravizar",
        "bonus": 6,
        "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      }
    ]
  },
  {
    "name": "Aranha Gigante",
    "category": "Monstros",
    "vitality": 6,
    "protection": 6,
    "defense": 3,
    "resistance": 1,
    "movement": "18 metros (escalar)",
    "description": "Uma aranha monstruosa e venenosa que escala superfícies e tece teias para capturar suas presas.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Veneno",
        "bonus": 2,
        "description": "Uma criatura mordida sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 2."
      },
      {
        "name": "Teia",
        "bonus": 2,
        "description": "Pode lançar o feitiço _**[Teia](spells.html#spell:web)**_."
      },
      {
        "name": "Fotofóbica",
        "bonus": 0,
        "description": "Fica cega sob luz forte."
      }
    ]
  },
  {
    "name": "Aranha Gigante Mãe",
    "category": "Monstros",
    "vitality": 36,
    "protection": 24,
    "defense": 2,
    "resistance": 4,
    "movement": "12 metros (escalar)",
    "description": "Mãe de uma ninhada de aranhas gigantes, é uma criatura aracnídea de proporções colossais com uma força descomunal e um veneno letal que ela usa para dissolver suas vítimas antes de devorá-las.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 4,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Veneno",
        "bonus": 6,
        "description": "Uma criatura mordida sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 6."
      },
      {
        "name": "Teia",
        "bonus": 6,
        "description": "Pode lançar o feitiço _**[Teia](spells.html#spell:web)**_."
      },
      {
        "name": "Fotofóbica",
        "bonus": 0,
        "description": "Fica cega sob luz forte."
      }
    ]
  },
  {
    "name": "Armadura Animada",
    "category": "Monstros",
    "vitality": 12,
    "protection": 18,
    "defense": 2,
    "resistance": 0,
    "movement": "6 metros",
    "description": "Uma armadura vazia e encantada que se move sozinha, atacando implacavelmente através da magia que a controla.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Falsa aparência",
        "bonus": 0,
        "description": "Enquanto estiver imóvel, é indistinguível de uma armadura normal."
      }
    ]
  },
  {
    "name": "Banshee",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 2,
    "resistance": 0,
    "movement": "9 metros (voo)",
    "description": "Um espírito vingativo e espectral de uma mulher que, com seu grito aterrador, traz desespero e morte àqueles que o ouvem.",
    "attacks": [
      {
        "name": "Toque necrótico",
        "bonus": 4,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Intangível",
        "bonus": 0,
        "description": "Não sofre dano por meios físicos."
      },
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Toque necrótico",
        "bonus": 0,
        "description": "Causa 1d4 de _**[dano necrótico](combat.html#sec:necroticdamage)**_."
      },
      {
        "name": "Grito aterrador",
        "bonus": 3,
        "description": "Criaturas a até 9 metros dela perdem todo o _**[Vigor](combat.html#sec:stamina)**_. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Basilisco",
    "category": "Monstros",
    "vitality": 18,
    "protection": 6,
    "defense": 1,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Um lagarto monstruoso com escamas iridescentes que petrifica qualquer criatura que cruze olhares com ele.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Olhar petrificante",
        "bonus": 4,
        "description": "Uma criatura que olhe em seus olhos é _**[petrificada](combat.html#stat:paralyzed)**_. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Bruxa",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 3,
    "resistance": 6,
    "movement": "9 metros",
    "description": "Uma criatura sobrenatural de aparência horrenda, mestra em feitiçaria sombria e enganação, que se alimenta da carne e do medo de suas vítimas.",
    "attacks": [
      {
        "name": "Garra",
        "bonus": 3,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Alterar aparência",
        "bonus": 0,
        "description": "Pode modificar sua aparência para assumir a forma de uma mulher humanoide."
      },
      {
        "name": "Realidade Ilusória",
        "bonus": 5,
        "description": "Uma realidade ilusória envolve permanentemente o entorno do seu covil, fazendo-o parecer um local seguro e convidativo para atrair suas vítimas e ocultar sua verdadeira natureza. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para ver através da ilusão."
      },
      {
        "name": "Feitiçaria",
        "bonus": 6,
        "description": "Pode lançar os feitiços _**[Invisibilidade](spells.html#spell:invisibility)**_, _**[Invocar Diabretes](spells.html#spell:summoncreature)**_, _**[Mísseis Mágicos](spells.html#spell:magicmissile)**_, _**[Polimorfia](spells.html#spell:polimorph)**_, _**[Sono](spells.html#spell:sleep)**_ e _**[Voo](spells.html#spell:fly)**_."
      }
    ]
  },
  {
    "name": "Bugurso",
    "category": "Monstros",
    "vitality": 18,
    "protection": 9,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Uma criatura humanoide bestial, grande e peluda, com traços de urso e goblin, conhecida por sua furtividade surpreendente e ataques brutais.",
    "attacks": [
      {
        "name": "Maça",
        "bonus": 2,
        "damage": "1d8"
      },
      {
        "name": "Azagaia",
        "bonus": 2,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      },
      {
        "name": "Furtivo",
        "bonus": 2,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação."
      }
    ]
  },
  {
    "name": "Bulette",
    "category": "Monstros",
    "vitality": 12,
    "protection": 18,
    "defense": 2,
    "resistance": 2,
    "movement": "6 metros (escavar)",
    "description": "Um predador blindado conhecido como \"tubarão de terra\", com uma couraça impenetrável e a capacidade de escavar rapidamente para emboscar suas presas.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Salto",
        "bonus": 0,
        "description": "Pode saltar 6 metros, além do deslocamento normal."
      },
      {
        "name": "Derrubar",
        "bonus": 0,
        "description": "Se acertar um ataque no final de uma _**[investida](combat.html#sec:charge)**_, além de causar dano, também derruba o alvo."
      }
    ]
  },
  {
    "name": "Cão Infernal",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Um mastim infernal de olhos brilhantes e corpo envolto em chamas, leal a forças malignas e capaz de cuspir fogo para reduzir seus inimigos a cinzas.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d6"
      },
      {
        "name": "Bafo de chamas",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Bafo de chamas",
        "bonus": 2,
        "description": "Criaturas em um cone de 3 metros sofrem 1 de _**[dano de fogo](combat.html#sec:fire)**_. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      },
      {
        "name": "Barreira consagrada",
        "bonus": 0,
        "description": "Não pode atravessar uma linha de sal."
      }
    ]
  },
  {
    "name": "Carniçal",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Um morto-vivo faminto por carne fresca, com garras afiadas e um fedor pútrido, capaz de paralisar suas vítimas antes de devorá-las.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Furtivo",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação."
      },
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Paralisia",
        "bonus": 3,
        "description": "Uma criatura atingida por um ataque de Garras fica _**[paralisada](combat.html#stat:paralyzed)**_ até o fim do combate. __**[Físico](skills.html#skill:physique)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Cavaleiro da Morte",
    "category": "Monstros",
    "vitality": 36,
    "protection": 18,
    "defense": 4,
    "resistance": 4,
    "movement": "9 metros",
    "description": "Um guerreiro morto-vivo imbuído de poder profano, vestindo uma armadura negra e empunhando uma lâmina amaldiçoada, destinado a espalhar destruição em nome das trevas.",
    "attacks": [
      {
        "name": "Espada longa",
        "bonus": 5,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      },
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Ferida eterna",
        "bonus": 0,
        "description": "_**[Ferimentos](combat.html#sec:wounds)**_ causados por um cavaleiro da morte não cicatrizam totalmente."
      }
    ]
  },
  {
    "name": "Centauro",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Uma criatura metade humano, metade cavalo, dotada de grande força e agilidade, habitante de florestas e planícies, vivendo em tribos guerreiras ou xamanísticas.",
    "attacks": [
      {
        "name": "Arco longo",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Cobra Gigante",
    "category": "Monstros",
    "vitality": 18,
    "protection": 3,
    "defense": 1,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Uma serpente colossal de corpo poderoso, capaz de esmagar suas presas em um aperto mortal.",
    "attacks": [
      {
        "name": "Constrição",
        "bonus": 3,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Constrição",
        "bonus": 4,
        "description": "A criatura fica _**[agarrada](combat.html#stat:grappled)**_ pela cobra gigante. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ela não podem evitar o ataque de Constrição da cobra gigante. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Cocatriz",
    "category": "Monstros",
    "vitality": 9,
    "protection": 0,
    "defense": 1,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Uma criatura alada com traços de galo e réptil, nascida de feitiçaria obscura, cuja bicada pode petrificar suas vítimas.",
    "attacks": [
      {
        "name": "Bicada",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Bicada petrificante",
        "bonus": 2,
        "description": "Uma criatura bicada é _**[petrificada](combat.html#stat:paralyzed)**_. __**[Físico](skills.html#skill:physique)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Cubo Gelatinoso",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 0,
    "resistance": 0,
    "movement": "3 metros",
    "description": "Uma massa translúcida e pegajosa que desliza silenciosamente por masmorras, dissolvendo tudo em seu interior com seu ácido digestivo.",
    "attacks": [
      {
        "name": "Engolfar",
        "bonus": 1,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Transparente",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação."
      },
      {
        "name": "Engolfar",
        "bonus": 4,
        "description": "Criaturas pelas quais o cubo passa por cima ficam _**[agarradas](combat.html#stat:grappled)**_ dentro dele, ficando impossibilitadas de respirar e sofrendo 1d6 de dano no início dos próximos _**[turnos](combat.html#sec:turn)**_ dele. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para escapar."
      }
    ]
  },
  {
    "name": "Devorador de Cérebros",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 2,
    "resistance": 6,
    "movement": "9 metros",
    "description": "Um humanoide de pele cadavérica e cabeça de polvo, vindo de dimensões alienígenas, que domina através do medo e se alimenta de cérebros de criaturas sencientes.",
    "attacks": [
      {
        "name": "Tentáculos",
        "bonus": 4,
        "damage": "1d8"
      },
      {
        "name": "Extrair Cérebro",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Agarrar",
        "bonus": 4,
        "description": "Uma criatura atingida por um ataque de Tentáculos fica _**[agarrada](combat.html#stat:grappled)**_ pelo devorador de cérebros. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      },
      {
        "name": "Extrair Cérebro",
        "bonus": 0,
        "description": "Se o _**[Vigor](combat.html#sec:stamina)**_ de uma criatura _**[agarrada](combat.html#stat:grappled)**_ pelo devorador de cérebros tiver sido reduzida a zero, o cérebro dela é devorado e ela morre instantaneamente."
      },
      {
        "name": "Telepatia",
        "bonus": 3,
        "description": "Ouve os pensamentos de qualquer criatura a até 9 metros dele. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      },
      {
        "name": "Invadir a Mente",
        "bonus": 4,
        "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_, _**Explosão Mental**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      },
      {
        "name": "Explosão Mental",
        "bonus": 0,
        "description": "Feitiço. Uma criatura a até 9 metros de distância que o devorador de cérebros consiga ver sofre dano mental _**[de acordo com o NP](spells.html#sec:spelldamageperPL)**_."
      }
    ]
  },
  {
    "name": "Diabrete",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 3,
    "resistance": 0,
    "movement": "9 metros (voo)",
    "description": "Um pequeno demônio astuto e traiçoeiro, de asas membranosas e cauda pontiaguda, que adora pregar peças e manipular mortais para seus próprios fins sombrios.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 0,
        "damage": "1d4"
      },
      {
        "name": "Labareda",
        "bonus": 0,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Labareda",
        "bonus": 0,
        "description": "9 metros de alcance."
      }
    ]
  },
  {
    "name": "Dragão",
    "category": "Monstros",
    "vitality": 64,
    "protection": 36,
    "defense": 4,
    "resistance": 6,
    "movement": "24 metros (voo)",
    "description": "Uma criatura colossal de escamas reluzentes, olhos cheios de malícia e asas imensas que eclipsam o céu, capaz de cuspir um bafo de chamas devastador. Venerado como guardião de segredos ancestrais ou temido como um tirano imortal, o dragão é um ser de inteligência afiada e um orgulho inabalável, governando reinos esquecidos ou acumulando tesouros em covis profundos.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 6,
        "damage": "1d12+6"
      },
      {
        "name": "Garras",
        "bonus": 5,
        "damage": "1d12+4"
      },
      {
        "name": "Cauda",
        "bonus": 5,
        "damage": "1d12"
      },
      {
        "name": "Bafo de chamas",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "À prova de fogo",
        "bonus": 0,
        "description": "Imune a _**[fogo](combat.html#sec:fire)**_."
      },
      {
        "name": "Presença ameaçadora",
        "bonus": 6,
        "description": "Criaturas a até 12 metros dele ficam _**[abaladas](combat.html#stat:shaken)**_ até o fim do combate. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      },
      {
        "name": "Bafo de chamas",
        "bonus": 8,
        "description": "Criaturas em um cone de 18 metros sofrem 3d6 de _**[dano de fogo](combat.html#sec:fire)**_. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      }
    ]
  },
  {
    "name": "Dríade",
    "category": "Monstros",
    "vitality": 6,
    "protection": 3,
    "defense": 0,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Um espírito feérico ligado às árvores e florestas, de aparência graciosa e pele amadeirada, capaz de se fundir com a natureza e punir aqueles que ameaçam seu domínio verdejante.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Enfeitiçar",
        "bonus": 3,
        "description": "Pode lançar o feitiço _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      },
      {
        "name": "Passo da natureza",
        "bonus": 0,
        "description": "Pode se deslocar magicamente entre árvores."
      }
    ]
  },
  {
    "name": "Drider",
    "category": "Monstros",
    "vitality": 24,
    "protection": 18,
    "defense": 2,
    "resistance": 2,
    "movement": "12 metros (escalar)",
    "description": "Uma abominação meio-elfa, meio-aranha, criada como uma maldição dos deuses sombrios, habitando cavernas profundas, florestas corrompidas e caçando intrusos com astúcia cruel, veneno e teias traiçoeiras.",
    "attacks": [
      {
        "name": "Picada",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Veneno",
        "bonus": 4,
        "description": "Uma criatura picada sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 4."
      },
      {
        "name": "Teia",
        "bonus": 4,
        "description": "Pode lançar o feitiço _**[Teia](spells.html#spell:web)**_."
      },
      {
        "name": "Fotofóbica",
        "bonus": 0,
        "description": "Fica cega sob luz forte."
      }
    ]
  },
  {
    "name": "Elemental da Água",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 4,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Uma entidade viva feita de água em constante fluxo, capaz de mudar de forma, engolir inimigos em redemoinhos e controlar as marés com sua vontade primordial.",
    "attacks": [
      {
        "name": "Jato",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Engolfar",
        "bonus": 3,
        "description": "Criaturas em alcance corpo a corpo ficam _**[agarradas](combat.html#stat:grappled)**_ dentro do elemental. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para escapar."
      }
    ]
  },
  {
    "name": "Elemental da Terra",
    "category": "Monstros",
    "vitality": 24,
    "protection": 24,
    "defense": 1,
    "resistance": 4,
    "movement": "9 metros",
    "description": "Uma entidade colossal formada de rocha e barro, com um corpo bruto e implacável, capaz de moldar o solo ao seu redor e esmagar inimigos com força titânica.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Moldar terra",
        "bonus": 3,
        "description": "Criaturas a menos de 9 metros ficam _**[presas](combat.html#stat:restrained)**_ no chão. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Elemental do Ar",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 4,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Uma entidade etérea feita de vento e tempestade, invisível como a brisa ou furiosa como um ciclone, capaz de produzir furacões e lançar inimigos pelos ares.",
    "attacks": [
      {
        "name": "Rajada",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Intangível",
        "bonus": 0,
        "description": "Não sofre dano por meios físicos."
      },
      {
        "name": "Furacão",
        "bonus": 0,
        "description": "Criaturas a menos de 9 metros ficam _**[lentas](combat.html#stat:slow)**_."
      }
    ]
  },
  {
    "name": "Elemental do Fogo",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 4,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Uma entidade ardente de chamas vivas, irradiando calor e destruição, capaz de incendiar tudo ao seu redor e reduzir seus inimigos a cinzas com um simples toque.",
    "attacks": [
      {
        "name": "Labareda",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Intangível",
        "bonus": 0,
        "description": "Não sofrem dano por meios físicos."
      },
      {
        "name": "Incêndio",
        "bonus": 3,
        "description": "Criaturas a até 9 metros sofrem 1d6 de _**[dano de fogo](combat.html#sec:fire)**_. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      }
    ]
  },
  {
    "name": "Esfinge",
    "category": "Monstros",
    "vitality": 54,
    "protection": 0,
    "defense": 3,
    "resistance": 5,
    "movement": "12 metros (voo)",
    "description": "Uma criatura majestosa com corpo de leão, asas poderosas e rosto humano, guardiã de segredos ancestrais, impondo enigmas mortais àqueles que buscam seu conhecimento.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 4,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Inescrutável",
        "bonus": 0,
        "description": "Imune a efeitos de controle ou leitura de mente."
      },
      {
        "name": "Rugido",
        "bonus": 4,
        "description": "Criaturas a até 18 metros dela que possam escutá-la ficam _**[paralisadas](combat.html#stat:paralyzed)**_ até o fim do combate. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      },
      {
        "name": "Controle da realidade",
        "bonus": 6,
        "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_, _**[Dissipar Magia](spells.html#spell:dispelmagic)**_, _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Lentidão](spells.html#spell:slow)**_, _**[Passo Nebuloso](spells.html#spell:mistystep)**_, _**[Silêncio](spells.html#spell:silence)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      }
    ]
  },
  {
    "name": "Esqueleto",
    "category": "Monstros",
    "vitality": 3,
    "protection": 9,
    "defense": 1,
    "resistance": 0,
    "movement": "6 metros",
    "description": "Um cadáver animado sem vontade própria, formado por ossos ressequidos e vazios de vida, movido por necromancia para servir como um guardião incansável ou um soldado imortal.",
    "attacks": [
      {
        "name": "Espada curta",
        "bonus": 0,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas, efeitos de controle mental e dano perfurante."
      }
    ]
  },
  {
    "name": "Fera do Pântano",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 1,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Um humanoide anfíbio de pele viscosa e olhos esbugalhados, nativo de pântanos, que se move com saltos ágeis e vive em tribos primitivas e belicosas.",
    "attacks": [
      {
        "name": "Lança",
        "bonus": 0,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Camuflagem",
        "bonus": 4,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em pântanos."
      }
    ]
  },
  {
    "name": "Gárgula",
    "category": "Monstros",
    "vitality": 18,
    "protection": 24,
    "defense": 1,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Uma criatura de pedra viva com asas de morcego e feições demoníacas, imóvel como uma estátua até despertar para atacar intrusos e proteger ruínas ancestrais.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Falsa aparência",
        "bonus": 0,
        "description": "Enquanto estiver imóvel, é indistinguível de uma estátua normal."
      }
    ]
  },
  {
    "name": "Gênio",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 3,
    "resistance": 3,
    "movement": "12 metros",
    "description": "Um ser místico de poder imenso, nascido dos elementos primordiais, capaz de conceder desejos com consequências imprevisíveis e governar domínios sobrenaturais além da compreensão mortal.",
    "attacks": [
      {
        "name": "Cimitarra",
        "bonus": 4,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Intangível",
        "bonus": 0,
        "description": "Não sofre dano por meios físicos."
      },
      {
        "name": "Desejo",
        "bonus": 0,
        "description": "Pode conceder um desejo a uma criatura."
      }
    ]
  },
  {
    "name": "Gigante",
    "category": "Monstros",
    "vitality": 54,
    "protection": 9,
    "defense": 2,
    "resistance": 4,
    "movement": "12 metros",
    "description": "Uma criatura humanoide colossal, de força titânica e passos que fazem tremer a terra, vivendo em montanhas, vales ou fortalezas ancestrais, onde seguem suas próprias leis e tradições.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 4,
        "damage": "1d12+3"
      },
      {
        "name": "Pedra",
        "bonus": 3,
        "damage": "1d12+3"
      }
    ],
    "abilities": [
      {
        "name": "Pedra",
        "bonus": 0,
        "description": "18 metros de alcance."
      }
    ]
  },
  {
    "name": "Gnoll",
    "category": "Monstros",
    "vitality": 18,
    "protection": 6,
    "defense": 3,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Uma criatura humanoide selvagem com traços de hiena, feroz e sedenta por sangue, que vaga em bandos de saqueadores, espalhando terror e destruição por onde passa.",
    "attacks": [
      {
        "name": "Machado",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      }
    ]
  },
  {
    "name": "Goblin",
    "category": "Monstros",
    "vitality": 6,
    "protection": 3,
    "defense": 2,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Uma criatura pequena e astuta de pele esverdeada, travessa, caótica e frequentemente encontrada em bandos barulhentos.",
    "attacks": [
      {
        "name": "Espada curta",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Golem",
    "category": "Monstros",
    "vitality": 24,
    "protection": 36,
    "defense": 1,
    "resistance": 2,
    "movement": "6 metros",
    "description": "Uma construção humanoide animada por magia, feita de pedra, metal ou argila, incansável e obediente, projetada para proteger templos, fortalezas ou cumprir ordens de seu criador.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 4,
        "damage": "1d12"
      }
    ],
    "abilities": [
      {
        "name": "Inalterável",
        "bonus": 0,
        "description": "Não pode ter sua forma alterada magicamente."
      },
      {
        "name": "Pancada",
        "bonus": 2,
        "description": "Criaturas atingidas por uma pancada ficam _**[lentas](combat.html#stat:slow)**_. __**[Físico](skills.html#skill:physique)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Górgona",
    "category": "Monstros",
    "vitality": 24,
    "protection": 24,
    "defense": 1,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Uma criatura quadrúpede de couro metálico e chifres afiados, capaz de expelir um bafo venenoso que transforma suas vítimas em pedra.",
    "attacks": [
      {
        "name": "Chifre",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Investida",
        "bonus": 0,
        "description": "Quando faz uma _**[investida](combat.html#sec:charge)**_, pode avançar 9 metros em linha reta, além do deslocamento normal."
      },
      {
        "name": "Bafo petrificante",
        "bonus": 4,
        "description": "Criaturas a até 9 metros dela são _**[petrificadas](combat.html#stat:paralyzed)**_. __**[Físico](skills.html#skill:physique)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Grifo",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "18 metros (voo)",
    "description": "Uma majestosa criatura híbrida com corpo de leão e cabeça, asas e garras de águia, conhecida por sua ferocidade, lealdade e habilidade em caçar dos céus.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 5,
        "damage": "1d12+1"
      },
      {
        "name": "Bicada",
        "bonus": 5,
        "damage": "1d10"
      }
    ],
    "abilities": [
      {
        "name": "Agarrar",
        "bonus": 4,
        "description": "Uma criatura atingida por um ataque de Garras durante uma _**[investida](combat.html#sec:charge)**_ aérea fica _**[agarrada](combat.html#stat:grappled)**_ pelo grifo. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Guiverno",
    "category": "Monstros",
    "vitality": 36,
    "protection": 9,
    "defense": 3,
    "resistance": 2,
    "movement": "18 metros (voo)",
    "description": "Uma criatura reptiliana alada semelhante a um dragão, porém menor e mais feroz, com um ferrão venenoso mortal na cauda e uma natureza predatória implacável.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d12"
      },
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d10"
      },
      {
        "name": "Ferrão",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Veneno",
        "bonus": 4,
        "description": "Uma criatura mordida sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 4."
      }
    ]
  },
  {
    "name": "Harpia",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 3,
    "resistance": 1,
    "movement": "12 metros (voo)",
    "description": "Uma criatura alada com corpo de ave e torso de mulher, conhecida por sua voz encantadora que seduz viajantes incautos para sua perdição.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Canto",
        "bonus": 3,
        "description": "Criaturas a até 18 metros dela ficam enfeitiçadas e são magicamente atraídas para ela. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Hipogrifo",
    "category": "Monstros",
    "vitality": 24,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "18 metros (voo)",
    "description": "Uma criatura majestosa e ágil, com corpo de cavalo e cabeça, asas e garras de águia, conhecida por sua lealdade feroz e velocidade impressionante nos céus.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Agarrar",
        "bonus": 2,
        "description": "Uma criatura atingida por um ataque de Garras durante uma _**[investida](combat.html#sec:charge)**_ aérea fica _**[agarrada](combat.html#stat:grappled)**_ pelo hipogrifo. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Hobgoblin",
    "category": "Monstros",
    "vitality": 12,
    "protection": 6,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Um guerreiro goblinoide alto e disciplinado, de pele avermelhada ou azulada, conhecido por sua organização militar rígida, táticas implacáveis e lealdade feroz a seu clã ou império.",
    "attacks": [
      {
        "name": "Espada longa",
        "bonus": 2,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Kobold",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 0,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Pequenos humanoides reptilianos, astutos e traiçoeiros, que vivem em cavernas e minas, especializados em emboscadas e armadilhas.",
    "attacks": [
      {
        "name": "Lança",
        "bonus": 0,
        "damage": "1d4"
      }
    ],
    "abilities": []
  },
  {
    "name": "Kraken",
    "category": "Monstros",
    "vitality": 72,
    "protection": 0,
    "defense": 3,
    "resistance": 4,
    "movement": "18 metros (natação)",
    "description": "Um monstro marinho colossal, com tentáculos gigantescos, capaz de arrastar navios inteiros para as profundezas do oceano, espalhando terror por onde passa.",
    "attacks": [
      {
        "name": "Tentáculos",
        "bonus": 6,
        "damage": "1d12+4"
      },
      {
        "name": "Mordida",
        "bonus": 5,
        "damage": "1d12+6"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de Tentáculo que causa 1d8 de dano."
      },
      {
        "name": "Constrição",
        "bonus": 6,
        "description": "Uma criatura atingida por um ataque de Tentáculos fica _**[agarrada](combat.html#stat:grappled)**_ pelo kraken. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ele não podem evitar o ataque de Constrição do kraken. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Lich",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 1,
    "resistance": 6,
    "movement": "9 metros",
    "description": "Um feiticeiro imortal e corrompido pela necromancia, que preserva sua alma em um filactério, controlando mortos-vivos e buscando poder através de práticas sombrias e proibidas.",
    "attacks": [
      {
        "name": "Toque necrótico",
        "bonus": 4,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de _**Toque necrótico**_."
      },
      {
        "name": "Toque necrótico",
        "bonus": 0,
        "description": "Causa 1d6 de _**[dano necrótico](combat.html#sec:necroticdamage)**_."
      },
      {
        "name": "Dedo da morte",
        "bonus": 6,
        "description": "Uma criatura a até 9 metros dele morre instantaneamente. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      },
      {
        "name": "Necromancia",
        "bonus": 8,
        "description": "Pode lançar os feitiços _**[Cone de Frio](spells.html#spell:coneoffrost)**_, _**[Escuridão](spells.html#spell:darkness)**_, _**[Globo de Invulnerabilidade](spells.html#spell:orbofinvulnerability)**_, _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Passo Nebuloso](spells.html#spell:mistystep)**_, _**[Silêncio](spells.html#spell:silence)**_, _**[Toque Vampírico](spells.html#spell:vampirictouch)**_ e _**[Voo](spells.html#spell:fly)**_."
      },
      {
        "name": "Filactério",
        "bonus": 0,
        "description": "Se o filactério de um lich não for destruído, ele volta à vida 1d6 dias depois."
      }
    ]
  },
  {
    "name": "Lobisomem",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 4,
    "resistance": 4,
    "movement": "12 metros",
    "description": "Um humano amaldiçoado que se transforma em uma besta lupina durante a lua cheia, com força sobre-humana e instintos selvagens.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 6,
        "damage": "1d8"
      },
      {
        "name": "Garras",
        "bonus": 6,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de Garras."
      },
      {
        "name": "Lua cheia",
        "bonus": 0,
        "description": "Lobisomens só assumem sua forma monstruosa durante a noite de lua cheia. Em outros momentos, ele é um homem normal com traços ligeiramente bestiais."
      },
      {
        "name": "Imunidade",
        "bonus": 0,
        "description": "Imune a ataques físicos não mágicos, exceto por armas de prata, quando em forma monstruosa."
      },
      {
        "name": "Maldição da licantropia",
        "bonus": 0,
        "description": "Uma criatura mordida se transforma em um lobisomem na próxima lua cheia."
      }
    ]
  },
  {
    "name": "Lobo Atroz",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "12 metros",
    "description": "Uma versão monstruosa e mais feroz de lobo comum capaz de comandar uma alcateia e atacar com precisão mortal.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 4,
        "damage": "1d8"
      },
      {
        "name": "Uivo",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Alcateia",
        "bonus": 0,
        "description": "Qualquer lobo a até 9 metros do lobo atroz tem uma _**[chance positiva](rules.html#sec:positivechance)**_ para atacar e oponentes tem uma _**[chance negativa](rules.html#sec:negativechance)**_ para atacá-lo."
      }
    ]
  },
  {
    "name": "Mantícora",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "9 metros (voo)",
    "description": "Uma criatura com corpo de leão, asas de morcego e cauda de escorpião, cujo ataque com espinhos na cauda é mortal e devastador.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 4,
        "damage": "1d8"
      },
      {
        "name": "Espinhos",
        "bonus": 3,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de Espinhos."
      },
      {
        "name": "Espinhos",
        "bonus": 0,
        "description": "9 metros de alcance."
      }
    ]
  },
  {
    "name": "Mímico",
    "category": "Monstros",
    "vitality": 6,
    "protection": 12,
    "defense": 1,
    "resistance": 0,
    "movement": "6 metros",
    "description": "Uma criatura que se disfarça como objetos inanimados, como baús, para emboscar suas vítimas com uma mandíbula terrível.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 1,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Grudar",
        "bonus": 0,
        "description": "Uma criatura atingida por um ataque de Mordida fica _**[agarrada](combat.html#stat:grappled)**_ pelo mímico. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ele não podem evitar o ataque de Mordida do mímico. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Minotauro",
    "category": "Monstros",
    "vitality": 36,
    "protection": 9,
    "defense": 1,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Uma criatura gigante com corpo humano e cabeça de touro, famosa por sua força bruta, caçando qualquer um que ouse invadir seu domínio.",
    "attacks": [
      {
        "name": "Machado",
        "bonus": 3,
        "damage": "1d10"
      },
      {
        "name": "Chifre",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Investida",
        "bonus": 0,
        "description": "Se fizer uma _**[investida](combat.html#sec:charge)**_ com os chifres, pode avançar 9 metros em linha reta, além do deslocamento normal."
      }
    ]
  },
  {
    "name": "Monstro da Ferrugem",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 0,
    "resistance": 0,
    "movement": "12 metros",
    "description": "Uma criatura corrosiva que devora metal, capaz de enferrujar e destruir armas e armaduras com seu toque, espalhando destruição por onde passa.",
    "attacks": [
      {
        "name": "Garra",
        "bonus": 0,
        "damage": "1d4"
      },
      {
        "name": "Corrosão",
        "bonus": 1,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Corrosão",
        "bonus": 0,
        "description": "Reduz permanentemente o dano de uma arma de metal em um passo na _**[escala de dano](equipments.html#sec:damageladder)**_ ou a _**[Proteção](combat.html#sec:protection)**_ de uma armadura de metal em 1d6. Corrói completamente outros objetos de metal."
      }
    ]
  },
  {
    "name": "Múmia",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 0,
    "resistance": 0,
    "movement": "6 metros",
    "description": "Um morto-vivo embalado em faixas de linho, ressuscitado por magia antiga, que guarda segredos antigos e amaldiçoa os que ousam profanar seu descanso eterno.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Toque de podridão",
        "bonus": 0,
        "description": "Ao tocar um alvo, causa um _**[ferimento](combat.html#sec:wounds)**_ com severidade 1d4. Esse _**[ferimento](combat.html#sec:wounds)**_ é considerado _**[moderado](combat.html#sec:moderatewounds)**_ independente de sua severidade."
      }
    ]
  },
  {
    "name": "Naga",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 1,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Uma criatura bizarra com longo e sinuoso corpo de serpente que termina em um rosto lascivo de feições humanas, olhos fendados e língua bifurcada.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Veneno",
        "bonus": 4,
        "description": "Uma criatura mordida sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 4."
      },
      {
        "name": "Língua de cobra",
        "bonus": 3,
        "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_, _**[Imobilizar Criatura](spells.html#spell:holdperson)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      }
    ]
  },
  {
    "name": "Observador",
    "category": "Monstros",
    "vitality": 54,
    "protection": 0,
    "defense": 2,
    "resistance": 5,
    "movement": "6 metros (voo)",
    "description": "Uma criatura aterrorizante com múltiplos olhos que distorcem a realidade e controlam mentes, trazendo destruição e loucura com seu olhar.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 5,
        "damage": "1d12+2"
      },
      {
        "name": "Olhos",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Olhos",
        "bonus": 6,
        "description": "Pode lançar aleatoriamente um feitiço da lista abaixo com alcance de 9 metros (role 1d6 e retire os resultados que já saíram):"
      },
      {
        "name": "Confusão",
        "bonus": 0,
        "description": "_Feitiço_. O alvo fica _**[confuso](combat.html#stat:confused)**_."
      },
      {
        "name": "Petrificar",
        "bonus": 0,
        "description": "_Feitiço_. O alvo é _**[petrificado](combat.html#stat:paralyzed)**_."
      },
      {
        "name": "Desintegrar",
        "bonus": 0,
        "description": "_Feitiço_. O alvo sofre _**[dano](spells.html#sec:spelldamageperPL)**_ de um feitiço de _**[NP](spells.html#sec:castingspells)**_ + 3."
      },
      {
        "name": "Raio da morte",
        "bonus": 0,
        "description": "_Feitiço_. O alvo morre instantaneamente."
      }
    ]
  },
  {
    "name": "Ogro",
    "category": "Monstros",
    "vitality": 54,
    "protection": 9,
    "defense": 1,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Uma criatura enorme e brutal, com força imensa e intelecto limitado, frequentemente encontrada em territórios selvagens, onde caça e destrói tudo em seu caminho.",
    "attacks": [
      {
        "name": "Clava",
        "bonus": 4,
        "damage": "1d12+2"
      }
    ],
    "abilities": []
  },
  {
    "name": "Orc",
    "category": "Monstros",
    "vitality": 12,
    "protection": 9,
    "defense": 2,
    "resistance": 1,
    "movement": "9 metros",
    "description": "Uma criatura guerreira e brutal com características animalescas e um desejo insaciável por combate, frequentemente organizada em tribos ou exércitos violentos.",
    "attacks": [
      {
        "name": "Espada longa",
        "bonus": 2,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      }
    ]
  },
  {
    "name": "Pássaro Roca",
    "category": "Monstros",
    "vitality": 72,
    "protection": 0,
    "defense": 2,
    "resistance": 4,
    "movement": "24 metros (voo)",
    "description": "Uma criatura colossal com o corpo de uma ave gigante, capaz de levantar elefantes com suas garras poderosas, conhecida por seu poder destrutivo e tamanho imensurável.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 5,
        "damage": "1d12+4"
      }
    ],
    "abilities": [
      {
        "name": "Agarrar",
        "bonus": 6,
        "description": "Uma criatura atingida por um ataque de Garras durante uma _**[investida](combat.html#sec:charge)**_ aérea fica _**[agarrada](combat.html#stat:grappled)**_ pelo pássaro roca. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Pégaso",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "18 metros (voo)",
    "description": "Uma criatura mítica com corpo de cavalo e asas de águia, conhecida por sua beleza e agilidade, capaz de voar grandes distâncias com graciosidade e força.",
    "attacks": [
      {
        "name": "Coice",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": []
  },
  {
    "name": "Povo-Cogumelo",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 0,
    "resistance": 0,
    "movement": "6 metros",
    "description": "Criaturas fungoides, com aparência de cogumelos gigantes, que vivem em cavernas e florestas escuras, utilizando esporos soníferos para imobilizar suas presas e caçar em silêncio.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 0,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Esporos soníferos",
        "bonus": 1,
        "description": "Criaturas a até 9 metros dele ficam adormecidas. __**[Físico](skills.html#skill:physique)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Povo-Lagarto",
    "category": "Monstros",
    "vitality": 12,
    "protection": 3,
    "defense": 1,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Humanoides reptilianos de escamas duras e instintos primitivos, que habitam pântanos e rios, vivendo em tribos guerreiras e reverenciando antigos deuses-serpente.",
    "attacks": [
      {
        "name": "Lança",
        "bonus": 1,
        "damage": "1d6"
      }
    ],
    "abilities": []
  },
  {
    "name": "Pudim Negro",
    "category": "Monstros",
    "vitality": 8,
    "protection": 0,
    "defense": 1,
    "resistance": 0,
    "movement": "6 metros (escalar)",
    "description": "Uma criatura amorfa e gelatinosa, feita de matéria negra e pegajosa, que consome tudo em seu caminho, corroendo e engolindo suas presas antes de se multiplicar.",
    "attacks": [
      {
        "name": "Fagocitar",
        "bonus": 3,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Corrosão",
        "bonus": 0,
        "description": "Ao ser acertado por uma arma não-mágica, reduz permanentemente o dano dela em um passo na _**[escala de dano](equipments.html#sec:damageladder)**_."
      },
      {
        "name": "Dividir-se",
        "bonus": 0,
        "description": "Quando reduzido a 0 pontos de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_, ele se divide em dois, cada um com metade da _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ total do original. Um pudim negro que tenha 1 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ não consegue se dividir."
      }
    ]
  },
  {
    "name": "Rato Gigante",
    "category": "Monstros",
    "vitality": 3,
    "protection": 0,
    "defense": 2,
    "resistance": 0,
    "movement": "9 metros",
    "description": "Um rato corrompido por forças obscuras amplificado até o tamanho de um cão, com dentes afiados e garras perigosas impregnadas de doenças e malícia.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 1,
        "damage": "1d4"
      },
      {
        "name": "Garras",
        "bonus": 1,
        "damage": "1d3"
      }
    ],
    "abilities": [
      {
        "name": "Peste",
        "bonus": 0,
        "description": "_**[Ferimentos](combat.html#sec:wounds)**_ causados por um rato gigante são considerados _**[moderados](combat.html#sec:moderatewounds)**_ independente de sua severidade."
      }
    ]
  },
  {
    "name": "Quimera",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 3,
    "resistance": 2,
    "movement": "12 metros (voo)",
    "description": "Uma criatura híbrida com a cabeça de leão, corpo de cabra, cauda de serpente e cabeça de dragão, capaz de lançar chamas e atacar com grande ferocidade.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 3,
        "damage": "1d10"
      },
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d8"
      },
      {
        "name": "Chifrada",
        "bonus": 3,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ que ela ainda não usou desde a última vez que teve a _**[iniciativa](combat.html#sec:initiative)**_."
      },
      {
        "name": "Bafo de chamas",
        "bonus": 3,
        "description": "Criaturas em um cone de 6 metros sofrem 1d6 de _**[dano de fogo](combat.html#sec:fire)**_. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      }
    ]
  },
  {
    "name": "Sahuagin",
    "category": "Monstros",
    "vitality": 12,
    "protection": 0,
    "defense": 1,
    "resistance": 1,
    "movement": "18 metros (natação)",
    "description": "Uma criatura anfíbia humanoide com aparência de peixe, conhecida por sua natureza predatória e habilidade em viver tanto na água quanto em terra, atacando em bandos.",
    "attacks": [
      {
        "name": "Tridente",
        "bonus": 2,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Cheiro de sangue",
        "bonus": 0,
        "description": "O dano do Tridente aumenta em um passo na _**[escala de dano](equipments.html#sec:damageladder)**_ contra criaturas com _**[ferimentos](combat.html#sec:wounds)**_."
      },
      {
        "name": "Meio-peixe",
        "bonus": 0,
        "description": "Precisa voltar para a água a cada 4 horas."
      }
    ]
  },
  {
    "name": "Sapo Gigante",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 1,
    "resistance": 0,
    "movement": "12 metros",
    "description": "Um sapo monstruoso, capaz de saltar grandes distâncias e usar sua língua pegajosa para capturar presas em seu caminho.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 2,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Língua",
        "bonus": 2,
        "description": "Uma criatura a até 9 metros dele é puxada para alcance corpo a corpo. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_."
      }
    ]
  },
  {
    "name": "Sátiro",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 2,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Uma criatura feérica com corpo de homem e pernas de bode, conhecida por sua natureza travessa, habilidades musicais encantadoras e ligação com a natureza selvagem.",
    "attacks": [
      {
        "name": "Chifres",
        "bonus": 1,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Flauta de Pã",
        "bonus": 3,
        "description": "Pode lançar os feitiços _**[Ilusão](spells.html#spell:illusion)**_, _**[Sono](spells.html#spell:sleep)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      }
    ]
  },
  {
    "name": "Sombra",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 4,
    "resistance": 2,
    "movement": "12 metros (voo)",
    "description": "Uma entidade espectral feita de escuridão e imune a ataques físicos, capaz de drenar a vitalidade de suas vítimas.",
    "attacks": [
      {
        "name": "Toque necrótico",
        "bonus": 3,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Intangível",
        "bonus": 0,
        "description": "Não sofre dano por meios físicos."
      },
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Toque necrótico",
        "bonus": 0,
        "description": "Causa 1d4 de _**[dano necrótico](combat.html#sec:necroticdamage)**_."
      }
    ]
  },
  {
    "name": "Stirge",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 4,
    "resistance": 0,
    "movement": "18 metros (voo)",
    "description": "Uma criatura semelhante a um morcego gigante, que se alimenta sugando o sangue de suas vítimas, fixando-se nelas com seu longo bico.",
    "attacks": [
      {
        "name": "Picada",
        "bonus": 4,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Sugar sangue",
        "bonus": 2,
        "description": "O stirge se fixa em uma criatura picada causando 1d4 de dano no início dos próximos _**[turnos](combat.html#sec:turn)**_ dele. Um stirge que esteja fixado em uma criatura não pode atacar. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para remover."
      }
    ]
  },
  {
    "name": "Súcubo/Íncubo",
    "category": "Monstros",
    "vitality": 18,
    "protection": 0,
    "defense": 3,
    "resistance": 4,
    "movement": "12 metros",
    "description": "Criaturas demoníacas sedutoras que se alimentam da energia vital de suas vítimas, assumindo formas atraentes para seduzir e manipular mortais em busca de prazer ou poder.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Alterar aparência",
        "bonus": 0,
        "description": "Pode modificar sua aparência para assumir a forma de uma mulher (para súcubo) ou homem (para íncubo)."
      },
      {
        "name": "Beijo da morte",
        "bonus": 0,
        "description": "Ao beijar um alvo, causa 1d6 de _**[dano necrótico](combat.html#sec:necroticdamage)**_."
      },
      {
        "name": "Encanto",
        "bonus": 4,
        "description": "Pode lançar os feitiços _**[Sono](spells.html#spell:sleep)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      }
    ]
  },
  {
    "name": "Treant",
    "category": "Monstros",
    "vitality": 48,
    "protection": 24,
    "defense": 1,
    "resistance": 4,
    "movement": "9 metros",
    "description": "Uma criatura antiga e imponente, formada por troncos e raízes, guardiã das florestas, que defende seu território com uma força imensa e sabedoria ancestral.",
    "attacks": [
      {
        "name": "Galhos",
        "bonus": 4,
        "damage": "1d12+4"
      }
    ],
    "abilities": [
      {
        "name": "Falsa aparência",
        "bonus": 0,
        "description": "Enquanto estiver imóvel, é indistinguível de uma árvore normal."
      },
      {
        "name": "Animar árvores",
        "bonus": 0,
        "description": "Transforma 1d4 árvores ao redor em Treants, sem essa habilidade, que voltam a ser árvores normais em um dia."
      }
    ]
  },
  {
    "name": "Tritão/Sereia",
    "category": "Monstros",
    "vitality": 12,
    "protection": 3,
    "defense": 1,
    "resistance": 1,
    "movement": "18 metros (natação)",
    "description": "Criaturas aquáticas humanoides, com parte superior humana e cauda de peixe, conhecidas por sua beleza hipnótica e habilidades em nadar e caçar nas profundezas dos oceanos.",
    "attacks": [
      {
        "name": "Tridente",
        "bonus": 1,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Canto",
        "bonus": 3,
        "description": "Criaturas a até 18 metros de uma sereia ficam enfeitiçadas e são magicamente atraídas para ela. __**[Vontade](skills.html#skill:will)**_ para resistir_."
      }
    ]
  },
  {
    "name": "Troll",
    "category": "Monstros",
    "vitality": 36,
    "protection": 9,
    "defense": 1,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Uma criatura gigantesca, com pele grossa e rochosa, conhecida por sua força bruta e resistência imensa, capaz de se curar rapidamente de ferimentos.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 3,
        "damage": "1d12"
      },
      {
        "name": "Regeneração",
        "bonus": 0,
        "damage": ""
      }
    ],
    "abilities": [
      {
        "name": "Regeneração",
        "bonus": 0,
        "description": "Recupera 1d12+4 pontos de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_."
      },
      {
        "name": "Sono de pedra",
        "bonus": 0,
        "description": "Vira estátua sob a luz do sol."
      }
    ]
  },
  {
    "name": "Unicórnio",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 2,
    "resistance": 6,
    "movement": "18 metros",
    "description": "Uma criatura mítica e graciosa com corpo de cavalo e um chifre espiralado na testa, símbolo de pureza e beleza, capaz de curar ferimentos com o toque de seu chifre mágico.",
    "attacks": [
      {
        "name": "Chifre",
        "bonus": 3,
        "damage": "1d8"
      },
      {
        "name": "Coice",
        "bonus": 3,
        "damage": "1d6"
      }
    ],
    "abilities": [
      {
        "name": "Toque de cura",
        "bonus": 0,
        "description": "Cura completamente um _**[ferimento](combat.html#sec:wounds)**_."
      },
      {
        "name": "Teletransporte",
        "bonus": 0,
        "description": "Ele e qualquer criatura a até 3 metros dele são teletransportados."
      }
    ]
  },
  {
    "name": "Urso-Coruja",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 2,
    "resistance": 2,
    "movement": "9 metros",
    "description": "Uma criatura híbrida com o corpo de urso e a cabeça de coruja, combinando força bruta e visão aguçada, sendo uma guardiã silenciosa das florestas.",
    "attacks": [
      {
        "name": "Garras",
        "bonus": 2,
        "damage": "1d10"
      },
      {
        "name": "Bicada",
        "bonus": 3,
        "damage": "1d8"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      },
      {
        "name": "Agarrar",
        "bonus": 4,
        "description": "Uma criatura atingida por um ataque de Bicada fica _**[agarrada](combat.html#stat:grappled)**_ pelo urso-coruja. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar."
      }
    ]
  },
  {
    "name": "Vampiro",
    "category": "Monstros",
    "vitality": 54,
    "protection": 0,
    "defense": 5,
    "resistance": 6,
    "movement": "18 metros (voo)",
    "description": "Uma criatura imortal das sombras, sedenta por sangue, que caça à noite, deixando um rastro de morte e terror, para manter sua existência cruel e eterna.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 6,
        "damage": "1d12+2"
      },
      {
        "name": "Garras",
        "bonus": 6,
        "damage": "1d12"
      }
    ],
    "abilities": [
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_ de Garras."
      },
      {
        "name": "Beber sangue",
        "bonus": 0,
        "description": "Recupera pontos de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ igual ao dano de Mordida."
      },
      {
        "name": "Encanto",
        "bonus": 6,
        "description": "Pode lançar o feitiço _**[Tomar Controle](spells.html#spell:takecontrol)**_."
      },
      {
        "name": "Alterar forma",
        "bonus": 0,
        "description": "Com uma _**[ação menor](combat.html#sec:minoraction)**_, ele pode alterar sua forma para a de um morcego, lobo ou névoa."
      },
      {
        "name": "Intangível",
        "bonus": 0,
        "description": "Em sua forma de névoa, torna-se imune a danos físicos, mas também incapaz de interagir fisicamente com o mundo."
      },
      {
        "name": "Vampiro",
        "bonus": 0,
        "description": "Vira pó ao ser exposto ao sol. Fica _**[paralisado](combat.html#stat:paralyzed)**_ se receber uma estaca de madeira no coração. Tem uma _**[chance negativa](rules.html#sec:negativechance)**_ em todos os testes se estiver exposto ao cheiro de alho. Não pode atravessar fluxos de água e não pode entrar em uma casa sem ser convidado."
      }
    ]
  },
  {
    "name": "Verme da Areia",
    "category": "Monstros",
    "vitality": 72,
    "protection": 12,
    "defense": 1,
    "resistance": 5,
    "movement": "12 metros (escavar)",
    "description": "Uma monstruosidade colossal que habita as areias do deserto, com uma mandíbula gigantesca e um corpo subterrâneo, capaz de engolir tudo em seu caminho.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 5,
        "damage": "1d12+6"
      }
    ],
    "abilities": [
      {
        "name": "Engolir",
        "bonus": 4,
        "description": "Uma criatura mordida é engolida por ele. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_. Criaturas engolidas sofrem 1d8 de dano sempre que a iniciativa volta para o lado delas. Se o verme sofrer pelo menos 12 de dano de um único golpe, ele regurgita todas as criaturas que engoliu."
      }
    ]
  },
  {
    "name": "Yeti",
    "category": "Monstros",
    "vitality": 36,
    "protection": 0,
    "defense": 1,
    "resistance": 3,
    "movement": "9 metros",
    "description": "Uma criatura gigante e peluda, habitante das montanhas geladas, que ataca intrusos com força imensa e fúria implacável.",
    "attacks": [
      {
        "name": "Pancada",
        "bonus": 4,
        "damage": "1d12"
      }
    ],
    "abilities": [
      {
        "name": "Contra-ataque",
        "bonus": 0,
        "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_."
      },
      {
        "name": "Camuflagem",
        "bonus": 3,
        "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em ambientes nevados."
      },
      {
        "name": "Medo de fogo",
        "bonus": 0,
        "description": "Tem uma _**[chance negativa](rules.html#sec:negativechance)**_ para atacar se estiver vendo fogo."
      }
    ]
  },
  {
    "name": "Zumbi",
    "category": "Monstros",
    "vitality": 6,
    "protection": 0,
    "defense": 0,
    "resistance": 0,
    "movement": "6 metros",
    "description": "Uma criatura morta-viva, reanimada por necromancia, movendo-se lentamente e com fome insaciável por carne humana, espalhando a morte por onde passa.",
    "attacks": [
      {
        "name": "Mordida",
        "bonus": 0,
        "damage": "1d4"
      }
    ],
    "abilities": [
      {
        "name": "Morto-vivo",
        "bonus": 0,
        "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental."
      },
      {
        "name": "Incansável",
        "bonus": 0,
        "description": "Se for reduzido a 0 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ por meios não mágicos, recupera 1d4 – 1 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_."
      }
    ]
  }
];

function guessIcon(name, description) {
  const n = name.toLowerCase();
  const d = description.toLowerCase();
  if (n.includes('contra-ataque')) return 'icons/skills/melee/strike-sword-steel-light.webp';
  if (n.includes('fogo') || n.includes('chamas')) return 'icons/magic/fire/projectile-fireball-red-yellow.webp';
  if (n.includes('veneno') || n.includes('peçonha') || d.includes('veneno')) return 'icons/skills/toxins/poison-drop-green.webp';
  if (n.includes('gelo') || n.includes('congelar')) return 'icons/magic/water/projectile-ice-snowball.webp';
  if (n.includes('necrótico') || n.includes('morto-vivo') || n.includes('zumbi') || n.includes('morto')) return 'icons/magic/death/skull-horned-worn-fire-blue.webp';
  if (n.includes('agarrar') || n.includes('engolir') || n.includes('teia') || n.includes('alcateia')) return 'icons/creatures/tentacles/tentacle-eyes-yellow-pink.webp';
  if (n.includes('sangue')) return 'icons/magic/life/heart-cross-strong-red.webp';
  if (n.includes('medo') || n.includes('terror') || n.includes('uivo') || n.includes('rugido') || n.includes('aparência') || n.includes('aterrorizante')) return 'icons/magic/control/fear-fright-white.webp';
  if (n.includes('encanto') || n.includes('mente') || n.includes('canção')) return 'icons/magic/control/hypnosis-mesmerism-swirl.webp';
  if (n.includes('regeneração') || n.includes('curar')) return 'icons/magic/life/cross-yellow-green.webp';
  if (n.includes('voo') || n.includes('voador') || n.includes('asas')) return 'icons/commodities/biological/wing-bird-white.webp';
  if (n.includes('visão') || n.includes('olhos') || n.includes('percepção')) return 'icons/magic/perception/eye-ringed-green.webp';
  if (n.includes('imunidade') || n.includes('resistência') || n.includes('imune') || n.includes('armadura') || n.includes('escudo')) return 'icons/magic/defensive/shield-barrier-blue.webp';
  if (n.includes('forma') || n.includes('transformar') || n.includes('alterar')) return 'icons/magic/control/silhouette-grow-shrink-blue.webp';
  if (n.includes('invisibilidade') || n.includes('invisível')) return 'icons/magic/perception/shadow-stealth-eyes-purple.webp';
  if (n.includes('magia') || n.includes('feitiço')) return 'icons/magic/symbols/star-solid-blue.webp';
  if (n.includes('morte') || n.includes('matar')) return 'icons/magic/death/skull-horned-worn-fire-blue.webp';
  if (n.includes('relâmpago') || n.includes('elétrico') || n.includes('choque')) return 'icons/magic/lightning/bolt-strike-blue.webp';
  if (n.includes('ácido') || n.includes('corrosivo')) return 'icons/magic/acid/projectile-faceted-glob.webp';
  if (n.includes('terra') || n.includes('pedra')) return 'icons/magic/earth/projectile-stone-generic.webp';
  if (n.includes('água') || n.includes('aquático') || n.includes('nadar')) return 'icons/magic/water/wave-water-blue.webp';
  return 'icons/svg/aura.svg';
}

async function importNPCs() {
  // Main Folder
  let rootFolder = game.folders.find(f => f.name === "Fichas de PdMs" && f.type === "Actor");
  if (!rootFolder) rootFolder = await Folder.create({ name: "Fichas de PdMs", type: "Actor" });

  const categoryMap = {};
  for (const cat of ["Humanos", "Animais", "Monstros"]) {
    let folder = game.folders.find(f => f.name === cat && f.type === "Actor" && f.folder?.id === rootFolder.id);
    if (!folder) folder = await Folder.create({ name: cat, type: "Actor", folder: rootFolder.id });
    categoryMap[cat] = folder.id;
  }

  const actorsToCreate = actorsData.map(a => {
    const items = [];
    
    for (const atk of a.attacks) {
      items.push({
        name: atk.name,
        type: "npc_attack",
        system: {
          bonus: atk.bonus,
          damage: atk.damage,
          defaultModification: 0
        }
      });
    }

    for (const ab of a.abilities) {
      items.push({
        name: ab.name,
        type: "npc_ability",
        img: guessIcon(ab.name, ab.description),
        system: {
          bonus: ab.bonus,
          description: ab.description
        }
      });
    }

    return {
      name: a.name,
      type: "npc",
      folder: categoryMap[a.category],
      system: {
        vitality: { value: a.vitality, max: a.vitality },
        protection: { value: a.protection, max: a.protection },
        defense: a.defense,
        resistance: a.resistance,
        movement: a.movement,
        description: a.description
      },
      items: items
    };
  });

  const created = await Actor.createDocuments(actorsToCreate);
  ui.notifications.info(`Created ${created.length} NPCs in their folders!`);
}

importNPCs();
