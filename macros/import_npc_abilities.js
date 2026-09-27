
// Macro to create all NPC Abilities
const abilitiesData = [
  {
    "name": "À prova de fogo",
    "bonus": 0,
    "description": "Imune a fogo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Agarrar",
    "bonus": 4,
    "description": "Uma criatura atingida por um ataque de Mordida fica agarrada pelo crocodilo. Criaturas agarradas por ele não podem evitar o ataque de Mordida do crocodilo. Teste de Físico para se soltar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Alcateia",
    "bonus": 0,
    "description": "Qualquer lobo a até 9 metros do lobo atroz tem uma chance positiva para atacar e oponentes tem uma chance negativa para atacá-lo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Alterar aparência",
    "bonus": 0,
    "description": "Pode modificar sua aparência para assumir a forma de uma mulher humanoide.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Alterar forma",
    "bonus": 0,
    "description": "Com uma ação menor, ele pode alterar sua forma para a de um morcego, lobo ou névoa.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Animar árvores",
    "bonus": 0,
    "description": "Transforma 1d4 árvores ao redor em Treants, sem essa habilidade, que voltam a ser árvores normais em um dia.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Arma Improvisada",
    "bonus": 0,
    "description": "Armas improvisadas pequenas como garrafas causam 1d4 de dano, enquanto armas maiores como uma cadeira causam 1d8.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Armadilha",
    "bonus": 4,
    "description": "Uma criatura a até 9 metros dele cai em uma armadilha aleatória. Agilidade para evitar:",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Ataque em bando",
    "bonus": 0,
    "description": "Sempre que acertar um ataque, passa a iniciativa para outro babuíno, independentemente se o resultado do dado foi ímpar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Atropelar",
    "bonus": 4,
    "description": "Qualquer criatura que esteja em seu caminho quando ele se desloca sofre 1d8 de dano. Esquiva para evitar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Bafo de chamas",
    "bonus": 2,
    "description": "Criaturas em um cone de 3 metros sofrem 1 de dano de fogo. Esquiva para evitar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Bafo petrificante",
    "bonus": 4,
    "description": "Criaturas a até 9 metros dela são petrificadas. Físico para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Barreira consagrada",
    "bonus": 0,
    "description": "Não pode atravessar uma linha de sal.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Beber sangue",
    "bonus": 0,
    "description": "Recupera pontos de Vitalidade igual ao dano de Mordida.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Beijo da morte",
    "bonus": 0,
    "description": "Ao beijar um alvo, causa 1d6 de dano necrótico.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Bicada petrificante",
    "bonus": 2,
    "description": "Uma criatura bicada é petrificada. Físico para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Cabeças",
    "bonus": 0,
    "description": "Uma hidra tem 1d8 cabeças. Se uma cabeça for cortada e não for cauterizada, outras duas nascem no lugar na próxima vez que ela tiver a iniciativa. Cada cabeça tem 12 de Vitalidade, 3 de Proteção e soma 1 no dano de Mordidas.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Camuflagem",
    "bonus": 4,
    "description": "Teste de Percepção para notar a aproximação em pântanos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Canto",
    "bonus": 3,
    "description": "Criaturas a até 18 metros dela ficam enfeitiçadas e são magicamente atraídas para ela. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Cheiro de sangue",
    "bonus": 0,
    "description": "O dano do Tridente aumenta em um passo na escala de dano contra criaturas com ferimentos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Confusão",
    "bonus": 0,
    "description": "Feitiço. O alvo fica confuso.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Constrição",
    "bonus": 2,
    "description": "A criatura fica agarrada pela cobra constritora. Criaturas agarradas por ela não podem evitar o ataque de Constrição da cobra constritora. Teste de Físico para se soltar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Contra-ataque",
    "bonus": 0,
    "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um contra-ataque.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Controle da realidade",
    "bonus": 6,
    "description": "Pode lançar os feitiços Comando, Dissipar Magia, Imobilizar Criatura, Lentidão, Passo Nebuloso, Silêncio e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Corrosão",
    "bonus": 0,
    "description": "Reduz permanentemente o dano de uma arma de metal em um passo na escala de dano ou a Proteção de uma armadura de metal em 1d6. Corrói completamente outros objetos de metal.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Dedo da morte",
    "bonus": 6,
    "description": "Uma criatura a até 9 metros dele morre instantaneamente. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Derrubar",
    "bonus": 0,
    "description": "Se acertar um ataque no final de uma investida, além de causar dano, também derruba o alvo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Desejo",
    "bonus": 0,
    "description": "Pode conceder um desejo a uma criatura.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Desintegrar",
    "bonus": 0,
    "description": "Feitiço. O alvo sofre dano de um feitiço de NP + 3.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Dividir-se",
    "bonus": 0,
    "description": "Quando reduzido a 0 pontos de Vitalidade, ele se divide em dois, cada um com metade da Vitalidade total do original. Um pudim negro que tenha 1 de Vitalidade não consegue se dividir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Ecolocalização",
    "bonus": 6,
    "description": "Pode usar sua ecolocalização para lidar com testes relacionados a Percepção.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Encanto",
    "bonus": 4,
    "description": "Pode lançar os feitiços Sono e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Enfeitiçar",
    "bonus": 3,
    "description": "Pode lançar o feitiço Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Engolfar",
    "bonus": 4,
    "description": "Criaturas pelas quais o cubo passa por cima ficam agarradas dentro dele, ficando impossibilitadas de respirar e sofrendo 1d6 de dano no início dos próximos turnos dele. Teste de Físico para escapar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Engolir",
    "bonus": 4,
    "description": "Uma criatura mordida é engolida por ele. Esquiva para evitar. Criaturas engolidas sofrem 1d8 de dano sempre que a iniciativa volta para o lado delas. Se o verme sofrer pelo menos 12 de dano de um único golpe, ele regurgita todas as criaturas que engoliu.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Escravizar",
    "bonus": 6,
    "description": "Pode lançar os feitiços Comando e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Escudo",
    "bonus": 0,
    "description": "Possui cobertura parcial enquanto estiver carregando um escudo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Espinhos",
    "bonus": 0,
    "description": "9 metros de alcance.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Esporos soníferos",
    "bonus": 1,
    "description": "Criaturas a até 9 metros dele ficam adormecidas. Físico para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Explosão Mental",
    "bonus": 0,
    "description": "Feitiço. Uma criatura a até 9 metros de distância que o devorador de cérebros consiga ver sofre dano mental de acordo com o NP.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Extrair Cérebro",
    "bonus": 0,
    "description": "Se o Vigor de uma criatura agarrada pelo devorador de cérebros tiver sido reduzida a zero, o cérebro dela é devorado e ela morre instantaneamente.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Falsa aparência",
    "bonus": 0,
    "description": "Enquanto estiver imóvel, é indistinguível de uma armadura normal.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Faro para sangue",
    "bonus": 0,
    "description": "O dano de sua mordida aumenta um passo na escala de dano contra criaturas com ferimentos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Feitiçaria",
    "bonus": 2,
    "description": "Pode lançar os feitiços Imobilizar Criatura, Invocar Diabretes e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Ferida eterna",
    "bonus": 0,
    "description": "Ferimentos causados por um cavaleiro da morte não cicatrizam totalmente.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Filactério",
    "bonus": 0,
    "description": "Se o filactério de um lich não for destruído, ele volta à vida 1d6 dias depois.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Flauta de Pã",
    "bonus": 3,
    "description": "Pode lançar os feitiços Ilusão, Sono e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Fotofóbica",
    "bonus": 0,
    "description": "Fica cega sob luz forte.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furacão",
    "bonus": 0,
    "description": "Criaturas a menos de 9 metros ficam lentas.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furtiva",
    "bonus": 4,
    "description": "Teste de Percepção para notar a aproximação à noite.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furtividade",
    "bonus": 4,
    "description": "Teste de Percepção para notar a aproximação em rios e lagos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furtivo",
    "bonus": 4,
    "description": "Teste de Percepção para notar a aproximação.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Grito aterrador",
    "bonus": 3,
    "description": "Criaturas a até 9 metros dela perdem todo o Vigor. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Grudar",
    "bonus": 0,
    "description": "Uma criatura atingida por um ataque de Mordida fica agarrada pelo mímico. Criaturas agarradas por ele não podem evitar o ataque de Mordida do mímico. Teste de Físico para se soltar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Imunidade",
    "bonus": 0,
    "description": "Imune a ataques físicos não mágicos, exceto por armas de prata, quando em forma monstruosa.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Inalterável",
    "bonus": 0,
    "description": "Não pode ter sua forma alterada magicamente.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Incansável",
    "bonus": 0,
    "description": "Se for reduzido a 0 de Vitalidade por meios não mágicos, recupera 1d4 – 1 de Vitalidade.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Incêndio",
    "bonus": 3,
    "description": "Criaturas a até 9 metros sofrem 1d6 de dano de fogo. Esquiva para evitar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Inescrutável",
    "bonus": 0,
    "description": "Imune a efeitos de controle ou leitura de mente.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Intangível",
    "bonus": 0,
    "description": "Não sofre dano por meios físicos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Invadir a Mente",
    "bonus": 4,
    "description": "Pode lançar os feitiços Comando, Explosão Mental e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Investida",
    "bonus": 0,
    "description": "Quando faz uma investida, pode avançar 6 metros em linha reta, além do deslocamento normal.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Labareda",
    "bonus": 0,
    "description": "9 metros de alcance.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Língua",
    "bonus": 2,
    "description": "Uma criatura a até 9 metros dele é puxada para alcance corpo a corpo. Esquiva para evitar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Língua de cobra",
    "bonus": 3,
    "description": "Pode lançar os feitiços Comando, Imobilizar Criatura e Tomar Controle.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Lua cheia",
    "bonus": 0,
    "description": "Lobisomens só assumem sua forma monstruosa durante a noite de lua cheia. Em outros momentos, ele é um homem normal com traços ligeiramente bestiais.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Maldição da licantropia",
    "bonus": 0,
    "description": "Uma criatura mordida se transforma em um lobisomem na próxima lua cheia.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Marca do Caçador",
    "bonus": 0,
    "description": "Pode usar uma ação menor para marcar um alvo. Ele tem uma chance positiva em qualquer teste contra seu alvo e o alvo tem uma chance negativa em qualquer teste contra ele.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Matraquear",
    "bonus": 3,
    "description": "Criaturas a até 9 metros dele ficam confusas. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Medo de fogo",
    "bonus": 0,
    "description": "Tem uma chance negativa para atacar se estiver vendo fogo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Meio-peixe",
    "bonus": 0,
    "description": "Precisa voltar para a água a cada 4 horas.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Mil bocas",
    "bonus": 0,
    "description": "Ataca, ao mesmo tempo, todas as criaturas que estiverem no alcance corpo a corpo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Moldar terra",
    "bonus": 3,
    "description": "Criaturas a menos de 9 metros ficam presas no chão. Teste de Físico para se soltar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Morto-vivo",
    "bonus": 0,
    "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Necromancia",
    "bonus": 8,
    "description": "Pode lançar os feitiços Cone de Frio, Escuridão, Globo de Invulnerabilidade, Imobilizar Criatura, Passo Nebuloso, Silêncio, Toque Vampírico e Voo.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Olhar petrificante",
    "bonus": 4,
    "description": "Uma criatura que olhe em seus olhos é petrificada. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Olhos",
    "bonus": 6,
    "description": "Pode lançar aleatoriamente um feitiço da lista abaixo com alcance de 9 metros (role 1d6 e retire os resultados que já saíram):",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Pancada",
    "bonus": 2,
    "description": "Criaturas atingidas por uma pancada ficam lentas. Físico para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Paralisia",
    "bonus": 3,
    "description": "Uma criatura atingida por um ataque de Garras fica paralisada até o fim do combate. Físico para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Passo da natureza",
    "bonus": 0,
    "description": "Pode se deslocar magicamente entre árvores.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Pedra",
    "bonus": 0,
    "description": "18 metros de alcance.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Peste",
    "bonus": 0,
    "description": "Ferimentos causados por um rato gigante são considerados moderados independente de sua severidade.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Petrificar",
    "bonus": 0,
    "description": "Feitiço. O alvo é petrificado.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Presença ameaçadora",
    "bonus": 6,
    "description": "Criaturas a até 12 metros dele ficam abaladas até o fim do combate. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Pungar",
    "bonus": 3,
    "description": "Com uma ação menor, rouba um item aleatório que não esteja sendo usado ou vestido de uma criatura em alcance corpo a corpo. Teste de Percepção para evitar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Raio da morte",
    "bonus": 0,
    "description": "Feitiço. O alvo morre instantaneamente.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Realidade Ilusória",
    "bonus": 5,
    "description": "Uma realidade ilusória envolve permanentemente o entorno do seu covil, fazendo-o parecer um local seguro e convidativo para atrair suas vítimas e ocultar sua verdadeira natureza. Teste de Percepção para ver através da ilusão.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Regeneração",
    "bonus": 0,
    "description": "Recupera 1d12+4 pontos de Vitalidade.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Resistência ao frio",
    "bonus": 0,
    "description": "Todo dano de frio é reduzido à metade, arredondado para cima.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Rugido",
    "bonus": 3,
    "description": "Criaturas a até 9 metros dele ficam abaladas até o fim do combate. Vontade para resistir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Salto",
    "bonus": 0,
    "description": "Pode saltar 6 metros, além do deslocamento normal.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Sono de pedra",
    "bonus": 0,
    "description": "Vira estátua sob a luz do sol.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Sugar sangue",
    "bonus": 2,
    "description": "O stirge se fixa em uma criatura picada causando 1d4 de dano no início dos próximos turnos dele. Um stirge que esteja fixado em uma criatura não pode atacar. Teste de Físico para remover.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Tática de Combate",
    "bonus": 0,
    "description": "Oponentes tem uma chance negativa para atacar um soldado veterano caso haja outro soldado adjacente a ele.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Teia",
    "bonus": 2,
    "description": "Pode lançar o feitiço Teia.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Telepatia",
    "bonus": 0,
    "description": "Conhece a mente de toda criatura a até 18 metros dele.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Teletransporte",
    "bonus": 0,
    "description": "Ele e qualquer criatura a até 3 metros dele são teletransportados.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Toque de cura",
    "bonus": 0,
    "description": "Cura completamente um ferimento.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Toque de podridão",
    "bonus": 0,
    "description": "Ao tocar um alvo, causa um ferimento com severidade 1d4. Esse ferimento é considerado moderado independente de sua severidade.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Toque necrótico",
    "bonus": 0,
    "description": "Causa 1d4 de dano necrótico.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Transparente",
    "bonus": 4,
    "description": "Teste de Percepção para notar a aproximação.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Vampiro",
    "bonus": 0,
    "description": "Vira pó ao ser exposto ao sol. Fica paralisado se receber uma estaca de madeira no coração. Tem uma chance negativa em todos os testes se estiver exposto ao cheiro de alho. Não pode atravessar fluxos de água e não pode entrar em uma casa sem ser convidado.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Veneno",
    "bonus": 3,
    "description": "Uma criatura atingida por sua adaga sofre efeito de um veneno neurotóxico de potência 3.",
    "img": "icons/svg/aura.svg"
  }
];

async function importAbilities() {
  // Create or find folder
  let folder = game.folders.find(f => f.name === "NPC Abilities" && f.type === "Item");
  if (!folder) {
    folder = await Folder.create({ name: "NPC Abilities", type: "Item" });
  }

  const itemData = abilitiesData.map(a => ({
    name: a.name,
    type: "npc_ability",
    img: a.img,
    folder: folder.id,
    system: {
      bonus: a.bonus,
      description: a.description
    }
  }));

  const created = await Item.createDocuments(itemData);
  ui.notifications.info(`Created ${created.length} NPC Abilities in the "NPC Abilities" folder!`);
}

importAbilities();
