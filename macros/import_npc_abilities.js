
// Macro to create all NPC Abilities
const abilitiesData = [
  {
    "name": "À prova de fogo",
    "bonus": 0,
    "description": "Imune a _**[fogo](combat.html#sec:fire)**_.",
    "img": "icons/magic/fire/projectile-fireball-red-yellow.webp"
  },
  {
    "name": "Agarrar",
    "bonus": 4,
    "description": "Uma criatura atingida por um ataque de Mordida fica _**[agarrada](combat.html#stat:grappled)**_ pelo crocodilo. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ele não podem evitar o ataque de Mordida do crocodilo. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar.",
    "img": "icons/creatures/tentacles/tentacle-eyes-yellow-pink.webp"
  },
  {
    "name": "Alcateia",
    "bonus": 0,
    "description": "Qualquer lobo a até 9 metros do lobo atroz tem uma _**[chance positiva](rules.html#sec:positivechance)**_ para atacar e oponentes tem uma _**[chance negativa](rules.html#sec:negativechance)**_ para atacá-lo.",
    "img": "icons/creatures/tentacles/tentacle-eyes-yellow-pink.webp"
  },
  {
    "name": "Alterar aparência",
    "bonus": 0,
    "description": "Pode modificar sua aparência para assumir a forma de uma mulher humanoide.",
    "img": "icons/magic/control/fear-fright-white.webp"
  },
  {
    "name": "Alterar forma",
    "bonus": 0,
    "description": "Com uma _**[ação menor](combat.html#sec:minoraction)**_, ele pode alterar sua forma para a de um morcego, lobo ou névoa.",
    "img": "icons/magic/control/silhouette-grow-shrink-blue.webp"
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
    "description": "Uma criatura a até 9 metros dele cai em uma armadilha aleatória. __**[Agilidade](skills.html#skill:agility)**_ para evitar_:",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Ataque em bando",
    "bonus": 0,
    "description": "Sempre que acertar um ataque, passa a _**[iniciativa](combat.html#sec:initiative)**_ para outro babuíno, independentemente se o resultado do dado foi _**ímpar**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Atropelar",
    "bonus": 4,
    "description": "Qualquer criatura que esteja em seu caminho quando ele se desloca sofre 1d8 de dano. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Bafo de chamas",
    "bonus": 2,
    "description": "Criaturas em um cone de 3 metros sofrem 1 de _**[dano de fogo](combat.html#sec:fire)**_. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_.",
    "img": "icons/magic/fire/projectile-fireball-red-yellow.webp"
  },
  {
    "name": "Bafo petrificante",
    "bonus": 4,
    "description": "Criaturas a até 9 metros dela são _**[petrificadas](combat.html#stat:paralyzed)**_. __**[Físico](skills.html#skill:physique)**_ para resistir_.",
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
    "description": "Recupera pontos de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ igual ao dano de Mordida.",
    "img": "icons/magic/life/heart-cross-strong-red.webp"
  },
  {
    "name": "Beijo da morte",
    "bonus": 0,
    "description": "Ao beijar um alvo, causa 1d6 de _**[dano necrótico](combat.html#sec:necroticdamage)**_.",
    "img": "icons/magic/death/skull-horned-worn-fire-blue.webp"
  },
  {
    "name": "Bicada petrificante",
    "bonus": 2,
    "description": "Uma criatura bicada é _**[petrificada](combat.html#stat:paralyzed)**_. __**[Físico](skills.html#skill:physique)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Cabeças",
    "bonus": 0,
    "description": "Uma hidra tem 1d8 cabeças. Se uma cabeça for cortada e não for cauterizada, outras duas nascem no lugar na próxima vez que ela tiver a _**[iniciativa](combat.html#sec:initiative)**_. Cada cabeça tem 12 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_, 3 de _**[Proteção](combat.html#sec:protection)**_ e soma 1 no dano de Mordidas.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Camuflagem",
    "bonus": 4,
    "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em pântanos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Canto",
    "bonus": 3,
    "description": "Criaturas a até 18 metros dela ficam enfeitiçadas e são magicamente atraídas para ela. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Cheiro de sangue",
    "bonus": 0,
    "description": "O dano do Tridente aumenta em um passo na _**[escala de dano](equipments.html#sec:damageladder)**_ contra criaturas com _**[ferimentos](combat.html#sec:wounds)**_.",
    "img": "icons/magic/life/heart-cross-strong-red.webp"
  },
  {
    "name": "Confusão",
    "bonus": 0,
    "description": "_Feitiço_. O alvo fica _**[confuso](combat.html#stat:confused)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Constrição",
    "bonus": 2,
    "description": "A criatura fica _**[agarrada](combat.html#stat:grappled)**_ pela cobra constritora. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ela não podem evitar o ataque de Constrição da cobra constritora. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Contra-ataque",
    "bonus": 0,
    "description": "Se sofrer dano por um ataque corpo a corpo, pode fazer um _**[contra-ataque](combat.html#sec:counterattack)**_.",
    "img": "icons/skills/melee/strike-sword-steel-light.webp"
  },
  {
    "name": "Controle da realidade",
    "bonus": 6,
    "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_, _**[Dissipar Magia](spells.html#spell:dispelmagic)**_, _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Lentidão](spells.html#spell:slow)**_, _**[Passo Nebuloso](spells.html#spell:mistystep)**_, _**[Silêncio](spells.html#spell:silence)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Corrosão",
    "bonus": 0,
    "description": "Reduz permanentemente o dano de uma arma de metal em um passo na _**[escala de dano](equipments.html#sec:damageladder)**_ ou a _**[Proteção](combat.html#sec:protection)**_ de uma armadura de metal em 1d6. Corrói completamente outros objetos de metal.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Dedo da morte",
    "bonus": 6,
    "description": "Uma criatura a até 9 metros dele morre instantaneamente. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/magic/death/skull-horned-worn-fire-blue.webp"
  },
  {
    "name": "Derrubar",
    "bonus": 0,
    "description": "Se acertar um ataque no final de uma _**[investida](combat.html#sec:charge)**_, além de causar dano, também derruba o alvo.",
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
    "description": "_Feitiço_. O alvo sofre _**[dano](spells.html#sec:spelldamageperPL)**_ de um feitiço de _**[NP](spells.html#sec:castingspells)**_ + 3.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Dividir-se",
    "bonus": 0,
    "description": "Quando reduzido a 0 pontos de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_, ele se divide em dois, cada um com metade da _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ total do original. Um pudim negro que tenha 1 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ não consegue se dividir.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Ecolocalização",
    "bonus": 6,
    "description": "Pode usar sua ecolocalização para lidar com testes relacionados a _**[Percepção](skills.html#skill:perception)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Encanto",
    "bonus": 4,
    "description": "Pode lançar os feitiços _**[Sono](spells.html#spell:sleep)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
    "img": "icons/magic/control/hypnosis-mesmerism-swirl.webp"
  },
  {
    "name": "Enfeitiçar",
    "bonus": 3,
    "description": "Pode lançar o feitiço _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Engolfar",
    "bonus": 4,
    "description": "Criaturas pelas quais o cubo passa por cima ficam _**[agarradas](combat.html#stat:grappled)**_ dentro dele, ficando impossibilitadas de respirar e sofrendo 1d6 de dano no início dos próximos _**[turnos](combat.html#sec:turn)**_ dele. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para escapar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Engolir",
    "bonus": 4,
    "description": "Uma criatura mordida é engolida por ele. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_. Criaturas engolidas sofrem 1d8 de dano sempre que a iniciativa volta para o lado delas. Se o verme sofrer pelo menos 12 de dano de um único golpe, ele regurgita todas as criaturas que engoliu.",
    "img": "icons/creatures/tentacles/tentacle-eyes-yellow-pink.webp"
  },
  {
    "name": "Escravizar",
    "bonus": 6,
    "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Escudo",
    "bonus": 0,
    "description": "Possui _**[cobertura parcial](combat.html#sec:halfcover)**_ enquanto estiver carregando um escudo.",
    "img": "icons/magic/defensive/shield-barrier-blue.webp"
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
    "description": "Criaturas a até 9 metros dele ficam adormecidas. __**[Físico](skills.html#skill:physique)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Explosão Mental",
    "bonus": 0,
    "description": "Feitiço. Uma criatura a até 9 metros de distância que o devorador de cérebros consiga ver sofre dano mental _**[de acordo com o NP](spells.html#sec:spelldamageperPL)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Extrair Cérebro",
    "bonus": 0,
    "description": "Se o _**[Vigor](combat.html#sec:stamina)**_ de uma criatura _**[agarrada](combat.html#stat:grappled)**_ pelo devorador de cérebros tiver sido reduzida a zero, o cérebro dela é devorado e ela morre instantaneamente.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Falsa aparência",
    "bonus": 0,
    "description": "Enquanto estiver imóvel, é indistinguível de uma armadura normal.",
    "img": "icons/magic/control/fear-fright-white.webp"
  },
  {
    "name": "Faro para sangue",
    "bonus": 0,
    "description": "O dano de sua mordida aumenta um passo na _**[escala de dano](equipments.html#sec:damageladder)**_ contra criaturas com _**[ferimentos](combat.html#sec:wounds)**_.",
    "img": "icons/magic/life/heart-cross-strong-red.webp"
  },
  {
    "name": "Feitiçaria",
    "bonus": 2,
    "description": "Pode lançar os feitiços _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Invocar Diabretes](spells.html#spell:summoncreature)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Ferida eterna",
    "bonus": 0,
    "description": "_**[Ferimentos](combat.html#sec:wounds)**_ causados por um cavaleiro da morte não cicatrizam totalmente.",
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
    "description": "Pode lançar os feitiços _**[Ilusão](spells.html#spell:illusion)**_, _**[Sono](spells.html#spell:sleep)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
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
    "description": "Criaturas a menos de 9 metros ficam _**[lentas](combat.html#stat:slow)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furtiva",
    "bonus": 4,
    "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação à noite.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furtividade",
    "bonus": 4,
    "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação em rios e lagos.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Furtivo",
    "bonus": 4,
    "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Grito aterrador",
    "bonus": 3,
    "description": "Criaturas a até 9 metros dela perdem todo o _**[Vigor](combat.html#sec:stamina)**_. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/magic/earth/projectile-stone-generic.webp"
  },
  {
    "name": "Grudar",
    "bonus": 0,
    "description": "Uma criatura atingida por um ataque de Mordida fica _**[agarrada](combat.html#stat:grappled)**_ pelo mímico. Criaturas _**[agarradas](combat.html#stat:grappled)**_ por ele não podem evitar o ataque de Mordida do mímico. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Imunidade",
    "bonus": 0,
    "description": "Imune a ataques físicos não mágicos, exceto por armas de prata, quando em forma monstruosa.",
    "img": "icons/magic/defensive/shield-barrier-blue.webp"
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
    "description": "Se for reduzido a 0 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_ por meios não mágicos, recupera 1d4 – 1 de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Incêndio",
    "bonus": 3,
    "description": "Criaturas a até 9 metros sofrem 1d6 de _**[dano de fogo](combat.html#sec:fire)**_. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_.",
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
    "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_, _**Explosão Mental**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
    "img": "icons/magic/control/hypnosis-mesmerism-swirl.webp"
  },
  {
    "name": "Investida",
    "bonus": 0,
    "description": "Quando faz uma _**[investida](combat.html#sec:charge)**_, pode avançar 6 metros em linha reta, além do deslocamento normal.",
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
    "description": "Uma criatura a até 9 metros dele é puxada para alcance corpo a corpo. __**[Esquiva](skills.html#skill:dodge)**_ para evitar_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Língua de cobra",
    "bonus": 3,
    "description": "Pode lançar os feitiços _**[Comando](spells.html#spell:command)**_, _**[Imobilizar Criatura](spells.html#spell:holdperson)**_ e _**[Tomar Controle](spells.html#spell:takecontrol)**_.",
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
    "description": "Pode usar uma _**[ação menor](combat.html#sec:minoraction)**_ para marcar um alvo. Ele tem uma _**[chance positiva](rules.html#sec:positivechance)**_ em qualquer teste contra seu alvo e o alvo tem uma _**[chance negativa](rules.html#sec:negativechance)**_ em qualquer teste contra ele.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Matraquear",
    "bonus": 3,
    "description": "Criaturas a até 9 metros dele ficam _**[confusas](combat.html#stat:confused)**_. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Medo de fogo",
    "bonus": 0,
    "description": "Tem uma _**[chance negativa](rules.html#sec:negativechance)**_ para atacar se estiver vendo fogo.",
    "img": "icons/magic/fire/projectile-fireball-red-yellow.webp"
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
    "description": "Criaturas a menos de 9 metros ficam _**[presas](combat.html#stat:restrained)**_ no chão. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para se soltar.",
    "img": "icons/magic/earth/projectile-stone-generic.webp"
  },
  {
    "name": "Morto-vivo",
    "bonus": 0,
    "description": "Imune a efeitos que afetam criaturas vivas e efeitos de controle mental.",
    "img": "icons/magic/death/skull-horned-worn-fire-blue.webp"
  },
  {
    "name": "Necromancia",
    "bonus": 8,
    "description": "Pode lançar os feitiços _**[Cone de Frio](spells.html#spell:coneoffrost)**_, _**[Escuridão](spells.html#spell:darkness)**_, _**[Globo de Invulnerabilidade](spells.html#spell:orbofinvulnerability)**_, _**[Imobilizar Criatura](spells.html#spell:holdperson)**_, _**[Passo Nebuloso](spells.html#spell:mistystep)**_, _**[Silêncio](spells.html#spell:silence)**_, _**[Toque Vampírico](spells.html#spell:vampirictouch)**_ e _**[Voo](spells.html#spell:fly)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Olhar petrificante",
    "bonus": 4,
    "description": "Uma criatura que olhe em seus olhos é _**[petrificada](combat.html#stat:paralyzed)**_. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Olhos",
    "bonus": 6,
    "description": "Pode lançar aleatoriamente um feitiço da lista abaixo com alcance de 9 metros (role 1d6 e retire os resultados que já saíram):",
    "img": "icons/magic/perception/eye-ringed-green.webp"
  },
  {
    "name": "Pancada",
    "bonus": 2,
    "description": "Criaturas atingidas por uma pancada ficam _**[lentas](combat.html#stat:slow)**_. __**[Físico](skills.html#skill:physique)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Paralisia",
    "bonus": 3,
    "description": "Uma criatura atingida por um ataque de Garras fica _**[paralisada](combat.html#stat:paralyzed)**_ até o fim do combate. __**[Físico](skills.html#skill:physique)**_ para resistir_.",
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
    "img": "icons/magic/earth/projectile-stone-generic.webp"
  },
  {
    "name": "Peste",
    "bonus": 0,
    "description": "_**[Ferimentos](combat.html#sec:wounds)**_ causados por um rato gigante são considerados _**[moderados](combat.html#sec:moderatewounds)**_ independente de sua severidade.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Petrificar",
    "bonus": 0,
    "description": "_Feitiço_. O alvo é _**[petrificado](combat.html#stat:paralyzed)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Presença ameaçadora",
    "bonus": 6,
    "description": "Criaturas a até 12 metros dele ficam _**[abaladas](combat.html#stat:shaken)**_ até o fim do combate. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Pungar",
    "bonus": 3,
    "description": "Com uma _**[ação menor](combat.html#sec:minoraction)**_, rouba um item aleatório que não esteja sendo usado ou vestido de uma criatura em alcance corpo a corpo. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para evitar.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Raio da morte",
    "bonus": 0,
    "description": "_Feitiço_. O alvo morre instantaneamente.",
    "img": "icons/magic/death/skull-horned-worn-fire-blue.webp"
  },
  {
    "name": "Realidade Ilusória",
    "bonus": 5,
    "description": "Uma realidade ilusória envolve permanentemente o entorno do seu covil, fazendo-o parecer um local seguro e convidativo para atrair suas vítimas e ocultar sua verdadeira natureza. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para ver através da ilusão.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Regeneração",
    "bonus": 0,
    "description": "Recupera 1d12+4 pontos de _**[Vitalidade](npc_sheets_intro.html#sec:vitality)**_.",
    "img": "icons/magic/life/cross-yellow-green.webp"
  },
  {
    "name": "Resistência ao frio",
    "bonus": 0,
    "description": "Todo dano de frio é reduzido à metade, arredondado para cima.",
    "img": "icons/magic/defensive/shield-barrier-blue.webp"
  },
  {
    "name": "Rugido",
    "bonus": 3,
    "description": "Criaturas a até 9 metros dele ficam _**[abaladas](combat.html#stat:shaken)**_ até o fim do combate. __**[Vontade](skills.html#skill:will)**_ para resistir_.",
    "img": "icons/magic/control/fear-fright-white.webp"
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
    "img": "icons/magic/earth/projectile-stone-generic.webp"
  },
  {
    "name": "Sugar sangue",
    "bonus": 2,
    "description": "O stirge se fixa em uma criatura picada causando 1d4 de dano no início dos próximos _**[turnos](combat.html#sec:turn)**_ dele. Um stirge que esteja fixado em uma criatura não pode atacar. _**[Teste de](rules.html#sec:skillcheck)**_ _**[Físico](skills.html#skill:physique)**_ para remover.",
    "img": "icons/magic/life/heart-cross-strong-red.webp"
  },
  {
    "name": "Tática de Combate",
    "bonus": 0,
    "description": "Oponentes tem uma _**[chance negativa](rules.html#sec:negativechance)**_ para atacar um soldado veterano caso haja outro soldado adjacente a ele.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Teia",
    "bonus": 2,
    "description": "Pode lançar o feitiço _**[Teia](spells.html#spell:web)**_.",
    "img": "icons/creatures/tentacles/tentacle-eyes-yellow-pink.webp"
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
    "description": "Cura completamente um _**[ferimento](combat.html#sec:wounds)**_.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Toque de podridão",
    "bonus": 0,
    "description": "Ao tocar um alvo, causa um _**[ferimento](combat.html#sec:wounds)**_ com severidade 1d4. Esse _**[ferimento](combat.html#sec:wounds)**_ é considerado _**[moderado](combat.html#sec:moderatewounds)**_ independente de sua severidade.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Toque necrótico",
    "bonus": 0,
    "description": "Causa 1d4 de _**[dano necrótico](combat.html#sec:necroticdamage)**_.",
    "img": "icons/magic/death/skull-horned-worn-fire-blue.webp"
  },
  {
    "name": "Transparente",
    "bonus": 4,
    "description": "_**[Teste de](rules.html#sec:skillcheck)**_ _**[Percepção](skills.html#skill:perception)**_ para notar a aproximação.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Vampiro",
    "bonus": 0,
    "description": "Vira pó ao ser exposto ao sol. Fica _**[paralisado](combat.html#stat:paralyzed)**_ se receber uma estaca de madeira no coração. Tem uma _**[chance negativa](rules.html#sec:negativechance)**_ em todos os testes se estiver exposto ao cheiro de alho. Não pode atravessar fluxos de água e não pode entrar em uma casa sem ser convidado.",
    "img": "icons/svg/aura.svg"
  },
  {
    "name": "Veneno",
    "bonus": 3,
    "description": "Uma criatura atingida por sua adaga sofre efeito de um _**[veneno](combat.html#sec:poison)**_ neurotóxico de potência 3.",
    "img": "icons/skills/toxins/poison-drop-green.webp"
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
