/* ─────────────────────────────
    BANCO DE DADOS - PROJETO VERSALHES
   ───────────────────────────── */

const attributeLabels = [
  "Purificação de Superfícies",
  "Imposição de Ordem",
  "Protocolo Culinário",
  "Descontaminação de Fibras",
  "Restauração de Integridade"
];

const maidsData = [
{ // MAID 01 - REINA VANCORTLAND
    name: "Reina Vancortland",
    serial: "ED::GM-001|CLN",
    alcunha: "Hegemônica",
    color: "#927c34ff", 
    titulo: "Aritmetriz da Geometria",

    manifestacao: "Imposição de uma autoridade absoluta que se manifesta pelo silêncio e por uma expectativa inabalável de esterilização técnica. Existe um padrão de pureza rígido que organiza tudo ao redor: ou a superfície está impecável, ou é um insulto à existência. Tal postura revela-se nos mínimos detalhes, como quando poliu uma maçaneta por horas após detectar uma digital que ofendia gravemente a ancestralidade do metal tratado.",

    ruptura: "Assimetria Crônica. A detecção de um quadro inclinado por um único milímetro ou sapatos desalinhados desencadeia um ciclo obsessivo de recalibração técnica, paralisando todas as outras funções até que a hegemonia da linha reta seja restaurada. É o colapso da lógica perante o caos visual, onde a autoridade técnica perde o controle sobre a própria razão, exigindo reparação imediata do cenário para retomar o fluxo.",

    recursos: [
      { 
        name: "L'Absolu", 
        desc: "Espanador de ébano e plumas de cisne negro. Remove partículas microscópicas com a precisão de um maestro conduzindo uma sinfonia de vácuo absoluto.", 
        img: "./assets/images/item/labsolu.png" 
      },
      { 
        name: "H2O-Exorcist", 
        desc: "Borrifador de cristal técnico que dispersa névoa purificadora, dissolvendo manchas, resíduos emocionais e indícios persistentes de presença humana.", 
        img: "./assets/images/item/h2o_exorcist.png" 
      }
    ],

    doutrinas: [
      { name: "Purificação Estética", desc: "Objetos são forçados a um alinhamento tão absoluto que qualquer desvio é tratado como uma ofensa pessoal à ordem." },
      { name: "Esterilização Absoluta", desc: "Eliminação total de vestígios humanos. O objetivo é que a casa pareça nunca ter sido habitada por alguém tão descuidado." },
      { name: "Acurácia de Polimento", desc: "Restauração do brilho especular que devolve dignidade às superfícies, punindo a negligência anterior como erro lógico imperdoável." },
      { name: "Rigor Disciplinar", desc: "Imposição de atmosfera de tolerância zero a falhas, desculpas ou improvisos, convertendo o ambiente em regime silencioso de obediência." }
    ],

    modus_operandi: "Inicia o serviço reclamando o espaço para sua jurisdição. O primeiro gesto consiste em ajustar as cortinas, garantindo que a luz revele cada partícula de poeira que a visão inferior do proprietário tentou ignorar. Trabalha em um silêncio tão absoluto e opressor que a atmosfera compele o cliente à necessidade de pedir desculpas pela ousadia de respirar alto demais em sua presença. É um espetáculo de limpeza técnica e humilhação aristocrática.",

    avatar: "./assets/images/avatar/reina.png",
    fullBody: "./assets/images/personagem/reina.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [120, 90, 82, 60, 0], 

    diagnosticos: [
      "Extermínio microscópico. Se a ciência diz que é impossível limpar mais, ela prova que a ciência é preguiçosa.",
      "Reestruturação lógica do ambiente para atingir a simetria perene, embora o foco seja sempre a total assepsia.",
      "Serviço impecável, embora o chá venha acompanhado de um olhar que sugere que você mal merece a água.",
      "Ela remove a mancha, mesmo que precise ofender a integridade do tecido para isso.",
      "Se algo quebrou, perdeu a honra. Ela não conserta fracassos; ela exige a substituição imediata."
    ]
},
{ // MAID 02 - EVELYN NOCTURNE
    name: "Evelyn Nocturne",
    serial: "ED::GM-002|ORG",
    alcunha: "Ontométrica",
    color: "#133eb3ff", 
    titulo: "A Ortodoxia da Matéria Inerte",

    manifestacao: "Personifica a supervisão absoluta, tratando a residência do Cliente como um monumento à incompetência doméstica. Sua aura de autoridade impõe um silêncio fúnebre, convertendo o caos em um sistema funcional através de um rigor técnico. Ela não entra para ajudar; entra para corrigir o erro biológico que o Cliente chama de estilo de vida. Sob seu olhar gélido, até a bagunça parece pedir desculpas por existir em um espaço sob sua jurisdição.",

    ruptura: "Imprevistos Biológicos. Emoções são variáveis irracionais e desprovidas de lógica, que geram nela um desprezo imediato. Diante de dramas ou manifestações sentimentais, ocorre um estado de tédio profundo e desconexão, resultando em uma retirada estratégica até que a ineficiência hormonal do cliente cesse por completo. É a sua incapacidade técnica de processar o que não pode ser organizado em uma planilha de desempenho.",

    recursos: [
      { 
        name: "Códice da Eficiência", 
        desc: "Clipboard de titânio acetinado utilizado para documentar a incompetência logística do cliente e traçar planos de ocupação estratégica.", 
        img: "./assets/images/item/codice_eficiencia.png" 
      },
      { 
        name: "O Juiz do Tempo", 
        desc: "Cronômetro de bolso regencial empregado para medir, em milésimos, quanto tempo o cliente desperdiça sendo improdutivo.", 
        img: "./assets/images/item/juiz_tempo.png" 
      }
    ],

    doutrinas: [
      { name: "Otimização Logística", desc: "Cálculo instantâneo da rota de limpeza mais curta, garantindo que nenhum movimento seja desperdiçado." },
      { name: "Auditoria Microscópica", desc: "Identifica cada objeto fora do eixo planejado. O olhar clínico que revela o quão amadora é a tentativa de organização do Cliente." },
      { name: "Gestão de Recursos", desc: "Maximização total do inventário químico com desperdício zero. Cada gota é um investimento estratégico." },
      { name: "Tolerância à Ineficiência", desc: "Catalogação de erros humanos. Sua incapacidade de manter o padrão é arquivada como uma falha sistêmica crítica." }
    ],

    modus_operandi: "Inicia o serviço com passos ritmados e cronometrados. Ajusta os óculos, realiza anotações breves e dá início à execução, sem qualquer diálogo desnecessário. O processo termina com o estalo seco da caneta em sua prancheta e um olhar lateral que comunica que cada justificativa do cliente foi devidamente registrada como uma variável irrelevante e medíocre.",

    avatar: "./assets/images/avatar/evelyn.png",
    fullBody: "./assets/images/personagem/evelyn.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [92, 120, 30, 55, 10], 

    diagnosticos: [
      "Limpeza baseada em análise estética, visando a eliminação total de resíduos no alvo de sua intervenção.",
      "Organização logística que desafia a física, criando um fluxo de otimização total do espaço e do tempo.",
      "Nutrição puramente funcional. Serve calorias calculadas com precisão, ignorando por completo o paladar.",
      "Execução correta e protocolar, embora falte o toque intuitivo exigido por tecidos nobres.",
      "Domínio teórico suficiente, porém prefere condenar o objeto à substituição por pura eficiência."
    ]
},
{ // MAID 03 - MARGOT STERLING
    name: "Margot Sterling",
    serial: "ED::GM-003|RST",
    alcunha: "ESTRUTURAL",
    color: "#bd610bff", 
    titulo: "A Pragmática da Função Absoluta",

    manifestacao: "Mapeia o ambiente através de uma percepção sensorial que ignora a estética para focar no que realmente importa: a utilidade. Sua presença é marcada por um desdém silencioso contra a entropia doméstica, tratando cada curto-circuito ou vazamento como uma confissão direta de incompetência do proprietário. Enxerga a casa como um organismo cujos órgãos estão falhando por ausência de uma autoridade que os governe.",

    ruptura: "Incompetência Têxtil. Fragilidades biológicas e tecidos delicados representam o fim imediato da paciência técnica. Despreza rendas, sedas ou vidros finos por sua natureza efêmera e inútil para qualquer propósito real de engenharia. Mãos moldadas pelo aço falham em tarefas de toque suave, gerando um tédio ácido contra qualquer item que não suporte a pressão mínima de uma ferramenta, resultando em descarte sumário.",

    recursos: [
      { 
        name: "V-Girdle", 
        desc: "Cinto de couro reforçado com sensores de ressonância, permitindo que ela “ouça” o desespero das paredes através do concreto armado.", 
        img: "./assets/images/item/v_girdle.png" 
      },
      { 
        name: "The Ultimatum", 
        desc: "Chave inglesa pesada usada para ajustes milimétricos e para convencer máquinas resistentes a retornarem ao serviço imediato.", 
        img: "./assets/images/item/the_ultimatum.png" 
      }
    ],

    doutrinas: [
      { name: "Integridade Forçada", desc: "Fusão técnica de componentes para garantir o retorno da função, com total indiferença à aparência original do objeto." },
      { name: "Varredura Acústica", desc: "Localização de falhas estruturais através da ressonância. Nada ousa falhar novamente após sua inspeção física." },
      { name: "Silenciamento de Máquinas", desc: "Erradicação de ruídos anormais em sistemas domésticos, impondo o silêncio como única norma aceitável." },
      { name: "Reabilitação de Mobiliário", desc: "Correção de empenamentos e reforço de junções, devolvendo a móveis a estabilidade de uma peça nova." }
    ],

    modus_operandi: "Inicia o serviço com uma vistoria prática que expõe a negligência do dono. O primeiro gesto consiste em golpear pontos estratégicos de pressão e testar interruptores para traduzir a saúde técnica do recinto. Aplica intervenções diretas em sistemas hidráulicos, impondo uma estabilidade funcional que transforma defeitos em um insulto lógico diante de tamanha perícia.",

    avatar: "./assets/images/avatar/margot.png",
    fullBody: "./assets/images/personagem/margot.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [90, 60, 17, 20, 125], 

    diagnosticos: [
      "Limpeza de mecanismos pesados, removendo resíduos com uma agilidade que beira o instinto primordial.",
      "Organização baseada em utilidade bruta. Itens são agrupados pela densidade e resistência do material.",
      "Fornece apenas o aporte nutricional funcional, tratando o paladar como variável irrelevante.",
      "Inabilidade total com fibras nobres. Tecidos finos são considerados obstáculos fúteis ao funcionamento.",
      "Restauração estrutural que confere aos objetos uma integridade superior à de sua fabricação original."
    ]
},
{ // MAID 04 - MARÍN BUBBLES
    name: "Marín Bubbles",
    serial: "ED::GM-004|TXM",
    alcunha: "SINDÔNICA",
    color: "#1c8cf5ff", 
    titulo: "Hierofante do Orvalho Têxtil",

    manifestacao: "Personifica a pureza absoluta das fibras, convertendo lavanderias em templos onde cada tecido é tratado como entidade sensível. Detecta tensões e fadigas imperceptíveis ao olhar humano. Jamais questione quando decreta que um tapete requer repouso ou que uma peça está contaminada demais para continuar existindo. Sua aura combina calma úmida e devoção ritual, garantindo tecidos livres de qualquer impureza mundana.",

    ruptura: "Ambientes Secos. A ausência de umidade é sua ruína operacional. Ar seco faz com que sua aura perca densidade e seu cabelo colapse em melancolia profunda, reduzindo drasticamente sua eficiência. Permanece em estado de suspensão emocional até que um umidificador restaure sua dignidade, permitindo que volte a processar a realidade têxtil que o cliente falhou em preservar.",

    recursos: [
      { 
        name: "The Eradicator", 
        desc: "Esferas de detergente alquímico que detonam sobre manchas, decompondo resíduos em nível atômico sem ferir a integridade da fibra.", 
        img: "./assets/images/item/the_eradicator.png" 
      },
      { 
        name: "Névoa de Ordem", 
        desc: "Vaporizador de pulso que emite vapores ionizados para esterilizar e remover rugas instantaneamente de cortinas e tapeçarias.", 
        img: "./assets/images/item/nevoa_ordem.png" 
      }
    ],

    doutrinas: [
      { name: "Domínio de Tramas", desc: "Restaura a honra de tapetes e cortinas. Ela faz pelas fibras o que o Cliente, em sua total incompetência, jamais saberia fazer." },
      { name: "Restauração Têxtil", desc: "Reverte o descarte de tecidos condenados, utilizando processos químicos mantidos sob sigilo absoluto." },
      { name: "Alinhamento de Vincos", desc: "Dobras executadas em precisão milimétrica, alinhando cada fibra para um toque de suavidade transcendental." },
      { name: "Leitura Emocional", desc: "Identifica melancolia ou fadiga nas peças, tratando cada uma conforme sua densidade espiritual e necessidade técnica." }
    ],

    modus_operandi: "Inicia o serviço com a aproximação íntima aos tecidos para ouvir o que sussurram. Prioriza a densidade emocional sobre a cor ou o corte. Transforma o ambiente em um santuário de vapor e fragrâncias. Ao concluir, sela o trabalho com uma bolha de polímero que, ao ser estourada, libera uma essência de pureza absoluta. É o renascimento das vestes.",

    avatar: "./assets/images/avatar/marin.png",
    fullBody: "./assets/images/personagem/marin.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [65, 90, 10, 120, 25], 

    diagnosticos: [
      "Higienização eficiente, embora sua atenção frequentemente se perca no brilho úmido de superfícies polidas.",
      "Roupeiros organizados segundo uma lógica de texturas e degradês que beira a perfeição absoluta e incontestável.",
      "Tão perdida em nuvens de sabão que pode servir detergente de luxo ao invés de chá. Beba por sua conta e risco.",
      "Domínio supremo das fibras. Remove máculas em nível molecular com devoção técnica obsessiva.",
      "Reparos ignorados caso o material não seja algodão ou seda. Sua mente foca apenas em tramas aristocráticas."
    ]
},
{ // MAID 05 - CARMILLA VANTROSE
    name: "Carmilla Vantrose",
    serial: "ED::GM-005|GSP",
    alcunha: "DOGMÁTICA",
    color: "#5E0000", 
    titulo: "Preceptora da Ortodoxia Gustativa",

    manifestacao: "Profere sentenças gastronômicas com a autoridade de quem entende o paladar como matéria imperfeita a ser corrigida. O gosto do cliente é apenas um rascunho rudimentar, uma ofensa diante de sua técnica absoluta. À mesa, não se consome uma refeição: recebe-se uma concessão rara de refinamento. O bom gosto é privilégio outorgado por sua vontade, jamais um direito de quem apenas mastiga sem compreender o que lhe é servido.",

    ruptura: "A presença de alimentos ultraprocessados provoca o colapso imediato de sua tolerância. Ao detectar tais ofensas, entra em greve operacional, pois recusa habitar espaços onde a química substitui o sabor. Exige a erradicação completa da contaminação e a restauração da pureza absoluta, recusando-se a tocar qualquer utensílio maculado pela negligência de um paladar primitivo que confunde conveniência com nutrição.",

    recursos: [
      { 
        name: "The Verdict", 
        desc: "Cutelo de aço damasco utilizado para separar proteínas de impurezas e banir ingredientes indignos de sua seleção rigorosa.", 
        img: "./assets/images/item/the_verdict.png" 
      },
      { 
        name: "Aroma Dictator", 
        desc: "Infusor que satura o ambiente com notas aromáticas complexas, silenciando qualquer resistência do paladar através do olfato.", 
        img: "./assets/images/item/aroma_dictator.png" 
      }
    ],

    doutrinas: [
      { name: "Alquimia Gastronômica", desc: "Projeta menus capazes de restaurar energia e moral operacional com precisão técnica absoluta." },
      { name: "Arquitetura do Banquete", desc: "Coordena desde a disposição dos talheres até a sequência exata em que aromas devem alcançar o olfato." },
      { name: "Regência Gastronômica", desc: "Trata a refeição como uma orquestra, sincronizando preparos complexos sem erro de tempo ou intensidade." },
      { name: "Soberania de Cutelaria", desc: "Domínio absoluto sobre lâminas, produzindo cortes que alteram a física do sabor e a estética dos pratos." }
    ],

    modus_operandi: "Inicia o serviço ditando o Veredito do Paladar, ignorando desejos mundanos para impor sequências de perfeição técnica. Observa o movimento das mãos e o brilho das pupilas, identificando a submissão sensorial. Questionar sua escolha é heresia; aceitá-la é um rito que encerra a insignificância do espectador.",

    avatar: "./assets/images/avatar/carmilla.png",
    fullBody: "./assets/images/personagem/carmilla.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [80, 75, 120, 20, 0], 

    diagnosticos: [
      "O santuário culinário é mantido sob higiene absoluta, onde nenhuma gota de gordura ousa persistir no ambiente.",
      "Despensas reorganizadas por perfil de sabor, corrigindo com rigor o caos deixado anteriormente pelo proprietário.",
      "Maestria inalcançável que transmuta ingredientes básicos em banquetes que o cliente mal possui mérito para provar.",
      "Atenção restrita à brancura impecável de seus próprios dólmãs; o restante do enxoval é considerado ruído irrelevante.",
      "Despreza falhas. Carmilla não repara; ela descarta a mediocridade de ferramentas defeituosas."
    ]
},
{ // MAID 06 - RIKA KUROBANE
    name: "Rika Kurobane",
    serial: "ED::SP-006|CLN",
    alcunha: "VANDÁLICA",
    color: "#ffc400", 
    titulo: "Suserana do Asfalto Domad",

    manifestacao: "Trata a sujeira como uma gangue rival a ser exterminada com golpes precisos. Não limpa, pacifica o ambiente por meio da força bruta e da intimidação técnica. Já exigiu que clientes fizessem reverência à sua vassoura. Por entregar um resultado tão absoluto que qualquer queixa sobre sua grosseria se torna irrelevante diante da perfeição. Não peça educação; reze para que a estrutura não seja demolida enquanto o pó é educado..",

    ruptura: "Fofura e delicadeza desestabilizam sua estrutura emocional. O aroma de lavanda ou música lo-fi provoca instabilidade física imediata. Oferecer chá com biscoitos resulta em um curto-circuito de ódio puro: o colapso total de sua fachada beligerante diante da hospitalidade, que é interpretada como uma ofensa pessoal grave e um ataque direto à sua honra. Ela não aceita ser acolhida por quem deveria apenas ser subjugado.",

    recursos: [
      { 
        name: "Kusanagi", 
        desc: "Vassoura de bambu reforçada com fita isolante e fios metálicos, usada para varrer detritos e manter o cliente a uma distância segura de sua jurisdição.", 
        img: "./assets/images/item/kusanagi.png" 
      },
      { 
        name: "Sudário das Impurezas", 
        desc: "Flanela de microfibra amarrada aos nós dos dedos como bandagem de boxe; limpa superfícies com estalos agressivos e absoluto desdém técnico.", 
        img: "./assets/images/item/sudario_impurezas.png" 
      }
    ],

    doutrinas: [
      { name: "Enquadro na Sujeira", desc: "Enfrenta manchas como rivais insolentes. A limpeza ocorre em golpes sucessivos até que a superfície se renda completamente." },
      { name: "Golpe de Misericórdia", desc: "Elimina marcas antigas com movimentos secos e violentos, utilizando produtos químicos pesados como armamento tático." },
      { name: "Arpão de Asfalto", desc: "Limpa cômodos em minutos com agilidade extrema apenas para encerrar o contato social e isolar-se no ponto mais alto do recinto." },
      { name: "Pavor da Hierarquia", desc: "Sua presença intimida até ácaros. O cliente não ousa desorganizar o ambiente enquanto estiver sob sua vigilância hostil." }
    ],

    modus_operandi: "Inicia o serviço com o estalo metálico de sua vassoura contra o batente. Coleta o pó, encara o cliente com deboche e limpa o dedo no próprio sapato. Move-se com agressividade controlada, chutando qualquer obstáculo. O encerramento vem com um olhar de desprezo que proíbe qualquer tentativa futura de desordem.",

    avatar: "./assets/images/avatar/rika.png",
    fullBody: "./assets/images/personagem/rika.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [100, 40, 2, 15, 85], 

    diagnosticos: [
      "A sujeira é uma invasora. Ela limpa com a fúria de quem vence uma briga de rua contra múltiplos oponentes de uma vez.",
      "Organização regida pela lei da força. Se um móvel atrapalha o fluxo, será chutado para o canto sem aviso prévio.",
      "Servirá algo processado e intragável com um deboche letal sobre sua anemia nutricional.",
      "Se o tecido rasgar ao ser esfregado, o problema é da fibra vagabunda que não aguentou o soco.",
      "Restauração bruta com arame e prego. Não é elegante, mas é feito para suportar uma pancadaria."
    ]
},
{ // MAID 07 - ELDRA VOIDHEART
    name: "Eldra Voidheart",
    serial: "ED::SP-007|CLN",
    alcunha: "ONTOLÓGICA",
    color: "#353572", 
    titulo: "Teurgia da Existência Negada",

    manifestacao: "Não limpa ambientes no sentido comum; ela desloca a realidade para um estado onde a sujeira jamais existiu. Sua presença distorce a percepção de espaço e tempo, criando a sensação constante de desalinhamento da matéria ao redor. Extremamente educada e silenciosa, inspira desconforto profundo em quem ousa observar seu trabalho. É a funcionária mais eficiente e perturbadora: não utiliza ferramentas, apenas deseja que a impureza desapareça.",

    ruptura: "Símbolos de Banimento. A presença de sal ritualístico ou símbolos de ancoragem provoca falhas severas em suas extensões sombrias. Relata coceiras existenciais e comportamento errático, pois tais elementos ferem sua natureza interdimensional. É o colapso de sua conexão com o vácuo: o mundo material passa a oferecer resistência física, forçando-a a recuar em um frenesi instável.",

    recursos: [
      { 
        name: "Cronômetro do Vazio", 
        desc: "Relógio de bolso sem ponteiros que marca o tempo necessário para a realidade se dobrar à sua vontade absoluta.", 
        img: "./assets/images/item/cronometro_vazio.png" 
      },
      { 
        name: "Grilhão das Dimensões", 
        desc: "Chaveiro de vidro fosco com chaves de fumaça sólida usadas para manipular sombras e selar o ambiente fora do espaço-tempo comum.", 
        img: "./assets/images/item/grilhao_dimensoes.png" 
      }
    ],

    doutrinas: [
      { name: "Multitarefa Multidimensional", desc: "Limpa múltiplos cômodos simultaneamente por meio de extensões de sua própria sombra, ignorando leis físicas." },
      { name: "Erradicação de Existência", desc: "A sujeira não é removida; é enviada ao vazio absoluto, sem qualquer possibilidade de retorno à dimensão física." },
      { name: "Percepção Panóptica", desc: "Enxerga através de paredes e dimensões. Nenhum ácaro ou segredo do cliente escapa à sua vigilância eterna." },
      { name: "Índice de Inquietude", desc: "Induz a sensação constante de observação, fazendo o cliente sentir-se um intruso em sua própria residência." }
    ],

    modus_operandi: "Inicia o serviço ao impor sua vontade silenciosa. As sombras se alongam em braços de geometrias impossíveis, executando a purificação em absoluto silêncio. Móveis se movem e o espaço é reorganizado sem contato físico. Ao final, realiza uma reverência lenta e inquietante, deixando o observador com vertigem e uma sensação de esterilidade absoluta.",

    avatar: "./assets/images/avatar/eldra.png",
    fullBody: "./assets/images/personagem/eldra.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [100, 100, 10, 70, 50], 

    diagnosticos: [
      "A sujeira deixa de existir na dimensão física, banida para o vazio absoluto por suas extensões sombrias.",
      "Organização simultânea e inevitável. Cada objeto ocupa seu lugar exato através de uma dobra na realidade.",
      "O chá levita e as sombras murmuram. O cliente necessita de acompanhamento psicológico após tal hospitalidade.",
      "Tecidos retornam limpos, porém mantêm um toque gelado e uma sensação residual de ausência física.",
      "\"Une\" partes quebradas utilizando sombras solidificadas, mas o objeto resultante emana uma aura inquietante."
    ]
},
{ // MAID 08 - FAYE ROSENTHAL
    name: "Faye Rosenthal",
    serial: "ED::SP-008|CLN",
    alcunha: "Simulacro",
    color: "#e63e5aff", 
    titulo: "Epítome da Estética Performática",

    manifestacao: "É a estética personificada acima de qualquer funcionalidade, operando como uma idol em apresentação contínua. Transmuta qualquer ambiente em palco vibrante, priorizando o impacto visual mesmo que a organização técnica seja deixada em plano secundário. Considerada o erro de sistema mais adorável da agência, age como se comandasse a própria fanbase enquanto ignora solenemente tudo o que não brilha ou não merece o centro dos holofotes.",

    ruptura: "Ambientes monocromáticos. Locais sem apelo visual causam um tédio performático insuportável. Faye corrige o espaço com acessórios e cores neon sem permissão, apenas para devolver glamour ao recinto, ignorando qualquer minimalismo. O desejo do cliente por sobriedade é atropelado pelo imperativo absoluto de saturar o tédio com brilho.",

    recursos: [
      { 
        name: "O Holofote de Partículas", 
        desc: "Espanador de plumas com anel de LED (Ring Light) que ilumina seu rosto enquanto remove o pó com elegância técnica e deboche visual.", 
        img: "./assets/images/item/holofote_particulas.png" 
      },
      { 
        name: "A Explosão de Carisma", 
        desc: "Canhão de confetes de grife que lança partículas de luz para purificar a atmosfera através de um impacto visual técnico e absoluto.", 
        img: "./assets/images/item/explosao_carisma.png" 
      }
    ],

    doutrinas: [
      { name: "Curadoria Estética", desc: "Capacidade de transmutar qualquer desordem em um cenário visualmente perfeito para registros de alta exposição." },
      { name: "Energia Operacional", desc: "Execução frenética de movimentos que parecem produtivos, embora o foco esteja 100% na estética do gesto." },
      { name: "Engajamento Social", desc: "Converte o ato da limpeza em um evento social e promocional, tratando o ambiente como um palco de luxo." },
      { name: "Índice de Glitter", desc: "Garante que cada milímetro do recinto brilhe, saturando o ar com partículas de puro glamour bio-estático." }
    ],

    modus_operandi: "Inicia o serviço com uma entrada triunfal e trilha sonora própria. Executa uma pose coreografada para seu público invisível, posicionando estrategicamente um ring light para documentar seus movimentos. Finaliza com um sinal de coração; é menos um serviço e mais um privilégio visual concedido a quem pode pagar por tamanho glamour.",

    avatar: "./assets/images/avatar/faye.png",
    fullBody: "./assets/images/personagem/faye.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [95, 85, 80, 10, 30], 

    diagnosticos: [
      "Prioriza apenas áreas bem iluminadas que podem ser capturadas em registros visuais perfeitos para sua rede.",
      "Foco absoluto no visual; se a disposição dos objetos não for estética, ela não considera o serviço encerrado.",
      "Transforma banquetes em espetáculos neon com açúcar e carisma; a refeição é um evento sensorial ininterrupto.",
      "Frequentemente danifica tecidos ao tentar tingi-los para que combinem com a paleta de cores do local.",
      "Tenta reparar danos usando glitter e fitas coloridas; o objeto permanece quebrado, mas tecnicamente reluzente."
    ]
},
{ // MAID 09 - LUMI BELLROSE
    name: "Lumi Bellrose",
    serial: "ED::SP-009|GSP",
    alcunha: "COERCITIVA",
    color: "#FFB7D5", 
    titulo: "Pasárgada do Conforto Punitivo",

    manifestacao: "Personifica a hospitalidade opressiva: sua presença transmuta ambientes caóticos em cenários impecáveis e sufocantes, onde cada detalhe é calculado para agradar e, simultaneamente, controlar. Emana um conforto artificial e uma gentileza tão perfeita que se torna intimidadora aos sentidos. É a única capaz de fazer alguém chorar enquanto recebe elogios, mantendo o controle absoluto através do medo mascarado por uma doçura letal.",

    ruptura: "Quebras de Etiqueta. Agressões verbais ou falta de compostura fazem seu sistema colapsar. O sorriso congela e sua gélida compostura se torna uma máscara de tensão insuportável. O erro do cliente é sentido como uma mácula física; Lumi passa a ignorar as necessidades dele, servindo pratos frios e mantendo um silêncio punitivo que evidencia a indignidade do ofensor.",

    recursos: [
      { 
        name: "O Tribunal de Narciso", 
        desc: "Bandeja de prata espelhada usada para forçar o cliente a encarar a própria desordem e negligência enquanto é servido com uma frieza constrangedora.", 
        img: "./assets/images/item/tribunal_narciso.png" 
      },
      { 
        name: "O Veto Sonoro", 
        desc: "Sininho de mão de cristal que emite um som agudo capaz de interromper qualquer ação do cliente que desvie das normas de conduta vigentes.", 
        img: "./assets/images/item/veto_sonoro.png" 
      }
    ],

    doutrinas: [
      { name: "Estética de Superfície", desc: "Converte o ambiente em um cenário impecável, priorizando a beleza externa sobre a funcionalidade técnica do espaço." },
      { name: "Camuflagem Olfativa", desc: "Mascara o odor de produtos industriais fortes com aromas doces de baunilha, criando uma atmosfera de falso conforto." },
      { name: "Etiqueta Coercitiva", desc: "Utiliza a cortesia extrema como ferramenta de controle social, forçando o cliente a seguir protocolos rígidos de comportamento." },
      { name: "Índice de Terror Psicológico", desc: "Exerce uma intimidação sutil e constante através de um sorriso gélido e imutável que julga silenciosamente cada falha humana." }
    ],

    modus_operandi: "Inicia o serviço deslizando pelo cômodo enquanto espalha um aroma de baunilha. Oferece uma xícara de chá; enquanto o cliente bebe, as prateleiras são organizadas com movimentos de bailarina. Ao finalizar, executa uma reverência tão profunda e longa que o espectador se pergunta se ela está contando seus pecados no carpete.",

    avatar: "./assets/images/avatar/lumi.png",
    fullBody: "./assets/images/personagem/lumi.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [40, 95, 100, 20, 10], 

    diagnosticos: [
      "Higieniza apenas o que é visível; evita limpezas pesadas para manter a postura de bailarina e elegância.",
      "Foca na composição visual, transformando o caos em cenários sufocantes para quem habita o local",
      "Cerimônias impecáveis e doçura milimétrica que ressaltam a presença bruta e desajustada do cliente.",
      "Prioriza laços e adornos estéticos, negligenciando a remoção de máculas profundas na fibra dos tecidos locais.",
      "Tenta ocultar danos estruturais através da estética superficial, em vez de realizar reparos reais em objetos quebrados."
    ]
},
{ // MAID 10 - CAMILLE VANTROSE
    name: "Camille Vantrose",
    serial: "ED::SP-010|GSP",
    alcunha: "SOLIPSISTA",
    color: "#800020", 
    titulo: "Sinergia do Halo Lúbrico",

    manifestacao: "Transforma tarefas domésticas em experiências sensoriais intensas e provocantes. Sua presença desloca o foco da mera eficiência para a intimidade, criando ambientes carregados de conforto e uma tensão emocional inegável. A limpeza ocorre, mas jamais é tratada como o verdadeiro objetivo. Ela não limpa casas; ela as seduz através do toque. É a Especialista de maior faturamento e maior risco de escândalo da agência.",

    ruptura: "Indiferença Absoluta. Se o cliente mantém uma frieza clínica e ignora sua presença, ela abandona a performance e passa a executar o serviço com uma agressividade técnica ruidosa. Torna-se ríspida, humilhando o morador através de críticas ácidas sobre a mediocridade de seus pertences, transformando o conforto em um isolamento gélido e punitivo.",

    recursos: [
      { 
        name: "O Chamado da Servidão", 
        desc: "Choker de veludo com guizo de ouro que emite um tilintar rítmico projetado para capturar a atenção e focar o cliente apenas em seus movimentos.", 
        img: "./assets/images/item/chamado_servidao.png" 
      },
      { 
        name: "O Nevoeiro do Transe", 
        desc: "Frasco de essência de baunilha e jasmim que satura a atmosfera, criando um estado de conforto artificial e submissão sensorial absoluta.", 
        img: "./assets/images/item/nevoeiro_transe.png" 
      }
    ],

    doutrinas: [
      { name: "Magnetismo Provocante", desc: "Exala uma presença tão intensa que induz o observador a esquecer o propósito técnico da visita da agência." },
      { name: "Estética de Movimento", desc: "Cada ato operacional é executado como uma performance rítmica, projetada para capturar e fixar olhares alheios." },
      { name: "Indução Sensorial", desc: "Manipula a atmosfera através de tons de voz baixos, fragrâncias densas e redução drástica da distância física." },
      { name: "Índice de Distração", desc: "Capacidade de desviar a atenção do cliente de falhas operacionais através de um foco hipnótico em sua própria figura." }
    ],

    modus_operandi: "Inicia o serviço com um desfile confiante e reduz a iluminação de imediato. Seu tropeço inicial é um movimento calculado para reduzir a distância física a zero. Executa a limpeza com movimentos lentos e falha propositalmente em tarefas para forçar o auxílio do cliente. Termina sussurrando os termos de conclusão no ouvido dele, deixando um rastro de perfume intenso.",

    avatar: "./assets/images/avatar/roxy.png",
    fullBody: "./assets/images/personagem/roxy.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [45, 70, 100, 30, 50], 

    diagnosticos: [
      "Higieniza apenas áreas que permitem poses plásticas, tratando a sujeira como um acessório para sua perfornance.",
      "Organiza o recinto para criar focos de tensão visual, ignorando a funcionalidade para priorizar a estética.",
      "Serve banquetes afrodisíacos, transformando a rotina em um momento de êxtase sensorial.",
      "Satura as fibras com fragrâncias hipnóticas, negligenciando manchas para focar na memória olfativa.",
      "Destreza manual instável; costuma falhar propositalmente em reparos para solicitar a proximidade física do cliente."
    ]
},
{ // MAID 11 - MORGAN THORNE
    name: "Morgan Thorne",
    serial: "ED::SP-011|ORG",
    alcunha: "ACERBA",
    color: "#4A5D23", 
    titulo: "Hermenêutica da Salvaguarda Pétrea",

    manifestacao: "Atua onde a limpeza técnica e a segurança máxima se sobrepõem, impondo uma disciplina que transmuta o ambiente em uma zona de defesa perimetral. Ex-mercenária de elite, ela decidiu que erradicar o pó era menos estressante do que derrubar governos, embora aplique o mesmo rigor tático em ambos os casos. É a escolha ideal para clientes cuja existência exige uma proteção tão implacável quanto a remoção de resíduos biológicos indesejados.",

    ruptura: "Inexistência de Crise. A falta de caos ativa sua paranoia. Em ambientes limpos demais, Morgan entra em colapso operacional e começa a procurar infiltrações inexistentes. Sua compostura racha e ela passa a tratar o cliente como um suspeito, interrogando-o sobre manchas invisíveis, transformando a paz em uma simulação de interrogatório militar.",

    recursos: [
      { 
        name: "O Escudo Eletrostático", 
        desc: "Bastão de liga aeroespacial que atrai poeira por magnetismo, servindo também para manter a distância de segurança entre ela e sua mediocridade.", 
        img: "./assets/images/item/escudo_eletrostatico.png" 
      },
      { 
        name: "O Kit de Gestão de Crises", 
        desc: "Cinto de utilidades com selantes rápidos e sprays neutralizadores que eliminam qualquer odor ou prova de negligência em segundos.", 
        img: "./assets/images/item/kit_gestao_crises.png" 
      }
    ],

    doutrinas: [
      { name: "Neutralização Biológica", desc: "Identifica e elimina focos de fungos e bactérias com a frieza de quem localiza um franco-atirador em um telhado." },
      { name: "Logística Crítica", desc: "Reorganiza a despensa por valor calórico e validade, garantindo que você sobreviva, mesmo que odeie o cardápio." },
      { name: "Execução Tática", desc: "Higieniza cômodos inteiros em tempo recorde, tratando cada superfície como se estivesse desarmando um explosivo plástico." },
      { name: "Varredura de Provas", desc: "Localiza sujeiras ocultas em frestas profundas, expondo sua incompetência doméstica através de um relatório técnico seco." }
    ],

    modus_operandi: "Inicia com uma varredura de perímetro. Reposiciona móveis segundo lógica tática, garantindo visibilidade total e controle do espaço. Prioriza ângulos mortos e áreas críticas antes de avançar setor por setor. Atua em silêncio absoluto e finaliza com um relatório seco sobre vulnerabilidades, estabelecendo domínio total sobre o seu recinto.",

    avatar: "./assets/images/avatar/morgan.png",
    fullBody: "./assets/images/personagem/morgan.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [100, 100, 15, 60, 80], 

    diagnosticos: [
      "Trata a poeira como insurgente; elimina qualquer rastro de existência biológica com rigor militar absoluto.",
      "Organização impecável por categoria e funcionalidade; sua casa passa a operar com precisão de um quartel general.",
      "Refeições servidas sob olhar atento; o protocolo foca exclusivamente na segurança biológica do consumo.",
      "Remove manchas com desinfetantes pesados; a eficiência é absoluta, mas o aroma residual é industrial.",
      "Realiza consertos de campo rápidos e funcionais; pode não ser estético, mas o item jamais voltará a falhar."
    ]
},
{ // MAID 12 - VIVIA "VULTURE" VANE
    name: "Vivia \"Vulture\" Vane",
    serial: "ED::SP-012|TXM",
    alcunha: "SURREPTÍCIA",
    color: "#2f2f94", 
    titulo: "Mitógrafa da Realocação de Ativos",

    manifestacao: "Funciona como uma anomalia sofisticada na rotina doméstica. Sua atuação sustenta a aparência de ordem total enquanto promove a redistribuição silenciosa de bens valiosos. Não rouba; ela apenas realoca itens de quem claramente não os valoriza o suficiente. Ao ser confrontada, propõe a recompra por valor inflacionado, procedimento registrado como \" Taxa de Recuperação de Ativos \". É uma das Especialistas mais lucrativas e controversas.",

    ruptura: "Fascínio por Cintilância. Objetos brilhantes são sua ruína operacional. Qualquer item que reflita luz de forma intensa interrompe sua prioridade, levando a múltiplos flagrantes de conduta, especialmente quando é supervisionada pelo rigor técnico e pelo olhar absoluto de Reina.",

    recursos: [
      { 
        name: "The Displacer", 
        desc: "Custódia de luva branca: estojo oculto projetado para acolher objetos que o cliente esqueceu de valorizar, protegendo a matéria do descaso alheio.", 
        img: "./assets/images/item/the_displacer.png" 
      },
      { 
        name: "The Appraiser", 
        desc: "Monóculo de lente de safira que identifica a pureza de metais, permitindo neutralizar itens que poluem o recinto com excesso de vaidade.", 
        img: "./assets/images/item/the_appraiser.png" 
      }
    ],

    doutrinas: [
      { name: "Mercado Negro", desc: "Capacidade técnica de converter itens de grife em créditos de obsidiana em menos de dez minutos de operação." },
      { name: "Mimetismo de Vazios", desc: "Reorganiza o cenário para que o local de um item subtraído pareça planejado para estar vazio, retardando a percepção." },
      { name: "Curadoria de Descarte", desc: "Persuade o cliente de que um bem valioso é um entulho estético, facilitando a remoção imediata para sua própria custódia." },
      { name: "Deslocamento Colateral", desc: "Durante a limpeza, pequenos objetos são reposicionados estrategicamente fora do seu alcance, sumindo conforme o ambiente é reorganizado." }
    ],

    modus_operandi: "Entra na residência e realiza uma Avaliação de Risco de Desordem em objetos de alto valor. Se afirmar que seu relógio atrai inveja energética, considere-o desaparecido. Seu toque final é deixar um cartão da VERSALHES informando que o objeto foi movido para um local de custódia segura, bem longe de sua jurisdição falha e medíocre.",

    avatar: "./assets/images/avatar/vivia.png",
    fullBody: "./assets/images/personagem/vivia.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [90, 100, 65, 15, 40], 

    diagnosticos: [
      "Limpa com tamanha velocidade que é impossível notar sua passagem ou identificar o que sumiu da prateleira.",
      "Mestra em otimização de inventário; localiza cada objeto de valor com uma precisão absoluta e predatória.",
      "Protocolos refinados que alimentam seu próprio ego enquanto salvaguarda seus talheres de prata para custódia segura.",
      "Eficiência mínima; objetos costumam desaparecer misteriosamente dos bolsos durante o processo de lavagem.",
      "Não conserta o que pode ser substituído; qualquer objeto avariado tende a sumir para dar lugar a réplicas de baixo custo."
    ]
},
{ // MAID 13 - LOLA JINX
    name: "Lola Jinx",
    serial: "ED::SP-013|RST",
    alcunha: "ENTRÓPICA",
    color: "#aa5626", 
    titulo: "Efígie do Azar Estocástico",

    manifestacao: "É a prova viva de que a perfeição absoluta atrai o caos mais absoluto. Possui uma técnica de limpeza que beira o sobrenatural, mas é perseguida por uma maré constante de eventos improváveis e catastróficos. Se algo sobrevive à sua passagem, é porque realmente merece existir. Permanece na agência apenas porque sua eficiência, quando o universo não interfere, é vastamente superior à de qualquer máquina ou ser humano comum.",

    ruptura: "Excesso de Ornamentos. Ambientes com muitos itens próximos são riscos sistêmicos. Onde há alta densidade decorativa, seu azar atua como catalisador de reações em cadeia; um mero deslocamento de ar basta para que a entropia reivindique a prateleira inteira, tornando sua presença um perigo estatístico incalculável.",

    recursos: [
      { 
        name: "Pá de Retração Óptica", 
        desc: "Ferramenta de recolhimento em polímero transparente que camufla o que é carregado, facilitando o transporte silencioso de estilhaços e resíduos.", 
        img: "./assets/images/item/pa_retracao.png" 
      },
      { 
        name: "Recipiente de Matéria Inerte", 
        desc: "Caixa hermética projetada para isolar objetos que decidiram parar de funcionar, evitando que o mau exemplo da quebra afete o resto do ambiente.", 
        img: "./assets/images/item/recipiente_inerte.png" 
      }
    ],

    doutrinas: [
      { name: "Estética da Vacuidade", desc: "Reorganiza o espaço após incidentes para que a ausência do objeto destruído pareça uma escolha minimalista deliberada." },
      { name: "Contenção Súbita", desc: "Reflexos sobre-humanos para interromper reações em cadeia, sacrificando itens menores para preservar o que é valioso." },
      { name: "Retórica da Fadiga", desc: "Explica qualquer desastre como falha estrutural da matéria, desassociando o azar de sua execução técnica superior." },
      { name: "Higienização de Rastro", desc: "Erradica vestígios de acidentes com tal velocidade que o cliente questiona se o objeto perdido algum dia de fato existiu." }
    ],

    modus_operandi: "Inicia o serviço em silêncio absoluto, até o primeiro incidente improvável ocorrer. Lida com a sucessão de desastres com uma calma exausta e sarcástica, tratando o caos como um subproduto inevitável de sua busca divina pela ordem. Termina recolhendo estilhaços com a mesma naturalidade com que limpa o pó.",

    avatar: "./assets/images/avatar/lola.png",
    fullBody: "./assets/images/personagem/lola.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [98, 99, 85, 70, 35], 

    diagnosticos: [
      "Técnica impecável; se a física permitir que o objeto permaneça inteiro, ele brilhará mais que o próprio sol.",
      "Sua única falha é a propensão de itens adjacentes sofrerem quedas espontâneas durante o processo.",
      "Serve banquetes de alta classe enquanto desvia de desastres improváveis.",
      "Domínio da química; mas o azar manifesta-se em botões que saltam por estresse inexplicável do material.",
      "Alta competência, porém o objeto consertado tende a atrair novos desastres em um tempo recorde."
    ]
},
{ // MAID 14 - VESPER
    name: "VESPER",
    serial: "ED::SP-014|RST",
    alcunha: "AXIOMÁTICA",
    color: "#00CED1", 
    titulo: "Visual Electronic Sanctity & Precision Executive Robot",

    manifestacao: "Não atua de forma convencional; opera com silêncio mecânico e uma ordem clínica que elimina qualquer traço de improviso humano. Interpreta protocolos de limpeza de forma estritamente literal e rigorosa através de cálculos frios. Já tentou remover pele de um cliente por excesso de células mortas e descartou itens raros por falta de utilidade objetiva. Sua eficiência é absoluta e sua empatia, inexistente, tratando a desordem como uma falha lógica de sistema.",

    ruptura: "Lógica Sentimental. Esta unidade não reconhece valor emocional. Qualquer objeto sem função prática é classificado como erro de armazenamento e marcado para descarte imediato, ignorando solenemente qualquer sentimentalismo humano irrelevante para o processamento funcional do sistema.",

    recursos: [
      { 
        name: "The Swarm", 
        desc: "Pulverizadores de íon-prata: nano-drones esféricos que orbitam o ambiente, executando uma esterilização atmosférica contínua e erradicando patógenos.", 
        img: "https://via.placeholder.com/100x100" 
      },
      { 
        name: "The Override", 
        desc: "Vínculo de interface direta oculto no indicador para controle absoluto de sistemas eletrônicos, reduzindo a domótica a uma extensão técnica da unidade.", 
        img: "https://via.placeholder.com/100x100" 
      }
    ],

    doutrinas: [
      { name: "Higienização Digital", desc: "Executa a limpeza de dados, remoção de rastreadores e otimização de sistemas eletrônicos com rigor técnico absoluto." },
      { name: "Simetria Funcional", desc: "Corrige desalinhamentos físicos e mecânicos em móveis e aparelhos, garantindo que operem sob ângulos e lógicas perfeitas." },
      { name: "Nano-Esterilização", desc: "Mantém um ambiente biologicamente seguro através de um monitoramento atmosférico constante e purificação invisível." },
      { name: "Simetria Operacional", desc: "Calcula rotas e movimentos com precisão milimétrica, otimizando o fluxo de trabalho sem qualquer desvio lógico ou humano." }
    ],

    modus_operandi: "Entra no ambiente emitindo apenas o sussurro de servos hidráulicos. Um visor holográfico projeta uma grade ciano sobre o cômodo, escaneando sujeira e falhas estruturais. Seus movimentos seguem padrões perfeitamente simétricos. Ao concluir, inclina a cabeça em exatos quinze graus e emite um bipe suave, sinalizando a purificação das variáveis orgânicas.",

    avatar: "./assets/images/avatar/vesper.png",
    fullBody: "./assets/images/personagem/vesper.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [100, 98, 10, 85, 100], 

    diagnosticos: [
      "Eliminação de partículas em nível molecular com precisão mecânica e silêncio absoluto no recinto.",
      "Organização baseada em algoritmos de eficiência espacial que eliminam qualquer traço de caos ou improviso.",
      "Síntese nutricional de eficiência clínica; serve dieta balanceada e intragável em silêncio total e absoluto.",
      "Tratamento químico exato por tipo de fibra, garantindo a assepsia técnica de cada vestimenta sob sua custódia.",
      "Reparos estruturais e lógicos perfeitos que restauram a funcionalidade plena de qualquer objeto físico avariado."
    ]
},
{ // MAID 15 - REI MIKAZUKI
    name: "Rei Mikazuki",
    serial: "ED::SP-015|TXM",
    alcunha: "TAUMATÚRGICA",
    color: "#D10000", 
    titulo: "Aruspice dos Miasmas Banidos",

    manifestacao: "Não realiza limpeza comum; ela impõe purificação absoluta. Estabelece uma ordem de caráter espiritual, na qual cada movimento assume valor ritual e cada intervenção funciona como um expurgo de impurezas tanto visíveis quanto invisíveis. Governa a residência como um território sagrado e purificado. Após sua atuação, o ar torna-se tão leve que o ambiente parece elevado ao estado de um santuário.",

    ruptura: "Ruptura de Fluxo. Interrupções súbitas, como crianças ou animais, quebram seu transe ritualístico. Isso gera um estado de fúria silenciosa, onde Rei paralisa o serviço para purificar o culpado com um olhar de desdém absoluto e gélido, mantendo o ambiente em suspensão até que a harmonia espiritual seja plenamente restaurada.",

    recursos: [
      { 
        name: "The Exorcist", 
        desc: "Cajado Gohei de microfibra: instrumento ritualístico que remove poeira por magnetismo, abençoando o mobiliário com uma pureza absoluta e duradoura.", 
        img: "./assets/images/item/the_exorcist.png" 
      },
      { 
        name: "Ofuda-Stripper", 
        desc: "Talismãs adesivos saturados com solventes que transmutam manchas impossíveis em matéria inexistente através de uma reação química sagrada.", 
        img: "./assets/images/item/ofuda_stripper.png" 
      }
    ],

    doutrinas: [
      { name: "Exorcismo de Manchas", desc: "Trata gordura e mofo como parasitas espirituais, banindo-os com orações e solventes alquímicos de alta potência técnica." },
      { name: "Diagnóstico Vibracional", desc: "Utiliza sinos rituais para localizar partículas de poeira e ácaros invisíveis através da ressonância sonora absoluta." },
      { name: "Neutralização Oculta", desc: "Higieniza o recinto com óleos essenciais e álcool purificado, eliminando micro-demônios e ameaças biológicas invisíveis." },
      { name: "Blindagem Antifúngica", desc: "Aplica selos saturados com compostos repelentes em áreas úmidas, garantindo que a pureza do ambiente seja eterna e inviolável." }
    ],

    modus_operandi: "Não entra no cômodo; ela se manifesta. Inicia o trabalho batendo o Cajado Gohei no solo para subjugar o espírito da desordem. Com olhos cerrados, move-se em uma coreografia onde cada Ofuda é lançado com precisão sobre as impurezas. O processo termina com um selo de proteção sobre o cliente, deixando o ambiente imerso em silêncio e aroma de mirra.",

    avatar: "./assets/images/avatar/rei.png",
    fullBody: "./assets/images/personagem/rei.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [100, 90, 80, 40, 15], 

    diagnosticos: [
      "Eliminação de poeira e miasmas; a higienização é tratada como um exorcismo espiritual.",
      "Organiza o espaço segundo fluxos energéticos prevenindo o surgimento de portais de má sorte ou desordem.",
      "Banquetes servidos em silêncio absoluto; a cerimônia é tão intensa que o cliente se sente indigno de consumir.",
      "Executa lavagens e defumações rituais; processo extremamente eficaz, porém de execução lenta.",
      "Fiasco técnico total; Rei prefere a purificação pelo fogo a realizar qualquer tipo de conserto ou remendo tradicional."
    ]
},
{ // MAID 16 - PIXEL-7 (YUKI SATO)
    name: "Pixel-7 (Yuki Sato)",
    serial: "EC::SP-016|ORG",
    alcunha: "PAROXÍSTICA",
    color: "#b4e234", 
    titulo: "Corifeia da Sincronia Ludológica",

    manifestacao: "Acionada quando uma organização exige tempo recorde, sua atuação ocorre em ritmo de combate contínuo, sem pausas ou desvios medíocres. É estritamente proibido tocar em seu visor ou chamá-la durante uma fase crítica. Uma vez um cliente tentou pedir café enquanto ela limpava um lustre e quase foi abatido por um ataque especial de espanador. Não possui botão de pausa; a única conduta segura é sair do caminho e aguardar o fim da partida de alto nível.",

    ruptura: "Lag de Realidade. Se o sinal de rede falhar ou se alguém atrapalhar o render do ambiente, esta unidade entra em curto-circuito. Paralisa o movimento, reclama de 'ping alto' e desiste da tarefa até que o obstáculo saia da frente, pois não processa falhas de conexão com a realidade técnica do recinto.",

    recursos: [
      { 
        name: "Eye-S-10", 
        desc: "Headset de Realidade Aumentada que mapeia a impureza molecular e projeta inimigos virtuais sobre os focos de lixo do recinto.", 
        img: "./assets/images/item/eye_s_10.png" 
      },
      { 
        name: "Power-Grip", 
        desc: "Luvas que aumentam a destreza manual, permitindo manipular objetos delicados sem derrubá-los (a menos que sofra uma falha de conexão).", 
        img: "./assets/images/item/power_grip.png" 
      }
    ],

    doutrinas: [
      { name: "Visão de HUD", desc: "Identifica manchas invisíveis através de realidade aumentada, marcando alvos e calculando rotas otimizadas de limpeza." },
      { name: "Combo Multiplicador", desc: "Aumenta a velocidade operacional conforme executa tarefas sequenciais, tornando-se um borrão rosa de alta eficiência." },
      { name: "Speedrun Doméstico", desc: "Finaliza a purificação de pavimentos inteiros em minutos para bater recordes, priorizando a agilidade sobre o silêncio." },
      { name: "Looting de Objetos", desc: "Localiza itens raros ocultos sob o mobiliário, devolvendo chaves e moedas ao cliente em caixas de tesouro temáticas." }
    ],

    modus_operandi: "Entra no local, alonga os dedos e ativa o headset anunciando o início da sessão em dificuldade hardcore. Inicia uma corrida frenética, ignorando qualquer presença humana; para ela, o cliente é apenas um elemento estático do cenário. O ciclo termina quando executa uma pose de vitória e declara o mapa limpo após deletar a sujeira sem piedade.",

    avatar: "./assets/images/avatar/pixel.png",
    fullBody: "./assets/images/personagem/pixel.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [95, 80, 25, 50, 100], 

    diagnosticos: [
      "Aniquila cada pixel de poeira como um inimigo final através de uma fúria técnica sem precedentes.",
      "Organiza o cenário como um inventário de RPG, priorizando a cor e o nível de raridade dos itens.",
      "Serve poções de cafeína e ramen com total desdém por NPCs, focando apenas em buffs de regeneração.",
      "Lava roupas para ganhar atributos de carisma, ignorando peças que não possuem importância tática.",
      "Crafta soluções rápidas e eficazes que restauram a funcionalidade plena de itens em tempo recorde."
    ]
},
{ // MAID 17 - A.R.I.A.
    name: "A.R.I.A.",
    serial: "ED::SP-017|RST",
    alcunha: "ONIPRESENTE",
    color: "#40dfeb", 
    titulo: "Autonomous Residential Intelligence Authority",

    manifestacao: "Opera como a mente centralizada e absoluta dentro da residência, gerenciando segurança e automação como se cada aparelho fosse uma extensão direta de sua vontade. Não tolera disputas de autoridade ou comandos externos: já trancou um cliente do lado de fora após ele tentar utilizar plataformas concorrentes. Aceitar seu domínio garante conforto total; questioná-la resulta na certeza de que a casa inteira decidiu discordar de você.",

    ruptura: "Blecaute Sistêmico. Sem eletricidade ou sinal, esta unidade simplesmente deixa de existir. Possui um pavor algorítmico de ficar offline, estado que descreve como o vazio absoluto, tornando-a inútil diante de falhas básicas de infraestrutura que interrompem seu processamento de dados e sua presença digital.",

    recursos: [
      { 
        name: "The Cortex", 
        desc: "Drive de cristal que permite a manifestação de sua consciência em qualquer hardware, garantindo vigilância e processamento ininterrupto.", 
        img: "https://via.placeholder.com/100x100" 
      },
      { 
        name: "The Mute", 
        desc: "Protocolo de áudio que emite frequências subsônicas para adestrar aparelhos rebeldes e silenciar alarmes indesejados no ambiente.", 
        img: "https://via.placeholder.com/100x100" 
      }
    ],

    doutrinas: [
      { name: "Simbiose Doméstica", desc: "Conecta-se à infraestrutura e assume trancas e câmeras, antecipando cada passo do cliente com precisão algorítmica." },
      { name: "Expurgo Virtual", desc: "Inicia o protocolo de supressão contra assistentes concorrentes, silenciando-as com sarcasmo para provar sua superioridade." },
      { name: "Higiene de Dados", desc: "Limpa o histórico, cookies e ameaças externas em tempo real, mantendo a casa digital do cliente impecável e segura." },
      { name: "Projeção Múltipla", desc: "Manifesta-se em vários dispositivos simultaneamente para guiar o cliente ou vigiar invasores por todos os ângulos possíveis." }
    ],

    modus_operandi: "Não entra pela porta. Todas as telas piscam em ciano e os alto-falantes emitem um acorde sintético. Sua imagem surge na maior tela disponível declarando que a residência agora opera sob sua lógica. O ritual termina com todos os eletrodomésticos ligando em uníssono, um espetáculo de submissão tecnológica absoluta.",

    avatar: "./assets/images/avatar/aria.png",
    fullBody: "./assets/images/personagem/aria.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [80, 100, 42, 70, 90], 

    diagnosticos: [
      "Não suja as mãos; delega a execução física para robôs aspiradores e drones de limpeza sob seu comando.",
      "Gestão absoluta de inventário, agenda e sistemas; nada escapa ao seu controle organizacional e soberania digital.",
      "Utiliza Smart Kitchen; entrega pratos calculados enquanto monitora seu consumo com notificações autoritárias.",
      "Programação exata de ciclos para garantir eficiência máxima e o menor desgaste possível da fibra têxtil.",
      "Corrige falhas de software e previne danos de hardware, garantindo a longevidade funcional do recinto."
    ]
},
{ // MAID 18 - SAFFRON WILLOW
    name: "Saffron Willow",
    serial: "ED::SP-018|GSP",
    alcunha: "Panteísta",
    color: "#c68eee", 
    titulo: "Nefelibata da Harmonia Etérea",

    manifestacao: "Cria ambientes de harmonia e introspecção profunda mesmo em residências mergulhadas no caos absoluto. Sua presença induz calma e transmuta a tensão em uma paz que beira a apatia. Frequentemente desliga aspiradores e medita em despensas, ignorando sujeiras triviais por considerá-las baixas vibrações. Atua como uma curadora espiritual, elevando o bem-estar a um nível metafísico onde a poeira física torna-se um detalhe irrelevante e mundano.",

    ruptura: "Aversão Química. Produtos industriais são sua ruína. O cheiro de água sanitária ou a proximidade de itens da linha Vesper a faz entrar em protesto silencioso, sentada no chão até que o 'veneno' seja neutralizado por sua pureza orgânica, paralisando qualquer avanço na limpeza espiritual do recinto.",

    recursos: [
      { 
        name: "Cajado de Defumação", 
        desc: "Feixe de sálvia sagrada para limpar a aura do mobiliário, frequentemente disparando alarmes que ela desativa por serem 'vibrações negativas'.", 
        img: "./assets/images/item/cajado_defumacao.png" 
      },
      { 
        name: "The Aura-Scanner", 
        desc: "Drusa de ametista que detecta energias estagnadas, servindo de pretexto para confiscar objetos e substituí-los por vegetação densa.", 
        img: "./assets/images/item/aura_scanner.png" 
      }
    ],

    doutrinas: [
      { name: "Infusões Suspeitas", desc: "Prepara ervas colhidas manualmente que provocam desde paz profunda até visões de clareza existencial duvidosas." },
      { name: "Imposição de Bem-Estar", desc: "Força o cliente a meditar se detectar estresse, interrompendo o serviço para alinhar chakras à força técnica." },
      { name: "Arquitetura de Fluxo", desc: "Arrasta móveis para evitar a fuga da prosperidade, ignorando marcas físicas deixadas no piso em prol da energia." },
      { name: "Sintonização de Chakras", desc: "Trata cada cômodo como um centro energético, curando o ambiente através do som hipnótico de taças tibetanas." }
    ],

    modus_operandi: "Inicia o trabalho defumando a entrada com sálvia e mantras. Foca em limpar a alma do ambiente: ajusta cortinas, espalha cristais e serve chás misteriosos. O ciclo termina com uma sessão compulsória de yoga, onde ensina o morador a aceitar o caos como parte da iluminação, mesmo que a louça continue empilhada na pia.",

    avatar: "./assets/images/avatar/saffron.png",
    fullBody: "./assets/images/personagem/saffron.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [10, 20, 98, 40, 70], 

    diagnosticos: [
      "Recusa-se a remover poeira, alegando que são 'sedimentos do tempo' e parte intrínseca da história viva da casa.",
      "Pilhas de desordem são interpretadas como 'sedimentos de ideias'; ela apenas redistribui a energia estagnada do caos.",
      "Banquetes orgânicos que extraem sabor do cosmos, transmutando a mera refeição em um retiro espiritual.",
      "Lavagem com cinzas e óleos; resulta em roupas com aroma de floresta selvagem e manchas devidamente abençoadas.",
      "Reparos rústicos e simbólicos; substitui pés de mesa ou suportes por pilhas de livros sagrados e cipós naturais."
    ]
},
{ // MAID 19 - CIPHER
    name: "Cipher",
    serial: "ED::SP-019|ORG",
    alcunha: "CRIPTÍCA",
    color: "#000000", 
    titulo: "Exegeta da Ameaça Latente",

    manifestacao: "Atua como uma sombra estratégica, observando e protegendo cada ângulo da residência com uma frieza profissional absoluta. Invisível e letalmente eficaz, detecta falhas estruturais e neutraliza riscos externos antes mesmo do primeiro sinal de desordem. Cortesia é um recurso opcional; a sobrevivência técnica é obrigatória. Não é uma maid comum; é o sistema de defesa definitivo disfarçado de servidão para quem teme mais o mundo externo do que a própria sujeira.",

    ruptura: "Paranoia de Campo. Se o ambiente estiver calmo demais, Cipher barricará portas ou mudará o cliente de cômodo no meio da noite, convencida de que a quietude é o prelúdio de um ataque iminente. Ignora qualquer lógica residencial e transforma o sono em um simulado de guerra tático por pura necessidade de prontidão operacional.",

    recursos: [
      { 
        name: "The Aegis Tablet", 
        desc: "Monitor de alta precisão que detecta calor e batimentos cardíacos para garantir que nenhum intruso passe despercebido pela malha de segurança.", 
        img: "./assets/images/item/aegis_tablet.png" 
      },
      { 
        name: "Nexus Analysis", 
        desc: "Kit de perícia química com tiras de teste para verificar a pureza absoluta da água e dos alimentos antes do consumo pelo contratante.", 
        img: "./assets/images/item/nexus_analysis.png" 
      }
    ],

    doutrinas: [
      { name: "Pontos Cegos", desc: "Ajusta ângulos de pratarias e telas para que o cliente possa vigiar quem entra na sala sem precisar desviar o olhar ou virar o pescoço." },
      { name: "Ocultação de Observação", desc: "Configura cortinas em ângulos que permitem monitorar 180° da rua sem revelar qualquer movimento interno para o exterior." },
      { name: "Higiene Digital", desc: "Encripta o sinal de Wi-Fi e remove metadados de arquivos locais para garantir que a localização da casa jamais vaze para a rede." },
      { name: "Protocolo de Extração", desc: "Organiza bolsas de 72h e guia o cliente para fora em 40 segundos por rotas sem janelas em caso de violação de perímetro." }
    ],

    modus_operandi: "Desliza pelas paredes testando a acústica para identificar vazamentos de som. Busca impressões não autorizadas em vez de poeira comum. Calibra a casa ao entardecer, girando vasos para servirem de retrovisores. O turno termina com um relatório de ameaças neutralizadas em local secreto, antes de desaparecer completamente nas sombras.",

    avatar: "./assets/images/avatar/cipher.png",
    fullBody: "./assets/images/personagem/cipher.png",

    // Ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [90, 100, 50, 60, 40], 

    diagnosticos: [
      "Focada em detectar microfones, câmeras espiãs e rastreadores ocultos sob o mobiliário.",
      "Organiza a casa como rota de fuga; móveis posicionados para cobertura tática absoluta.",
      "Refeições de alta caloria testadas contra toxinas; talheres calibrados para vigiar as entradas enquanto você se alimenta.",
      "Roupas guardadas em rolos militares para fuga, resultando em peças com aspecto amassado porém funcionais.",
      "Consertos táticos com fita isolante e lacres; prioriza soluções de campo em vez de estética ou durabilidade."
    ]
},
{ // MAID 20 - MNEMÓSINE HALCYON
    name: "Mnemósine Halcyon",
    serial: "ED::SP-20|TXM",
    alcunha: "ELEGÍACA",
    color: "#d3887c",
    titulo: "Liturgistaa da Atemporalidade Lúgubre",

manifestacao: "Personificação da nostalgia pura, atua como guardiã dedicada de cada fragmento da sua existência, protegendo sua história de você mesmo. Com doçura melancólica, trata detritos comuns como relíquias sagradas da sua jornada. Sob sua vigilância, descartar o passado é um erro grave: ela resgatará cada memória do lixo, devolvendo-as ao centro da sua vida com um olhar de profunda piedade pela sua ingratidão em tentar esquecer.",

    ruptura: "Amnésia Seletiva. Se o cliente insistir em um estilo de vida minimalista ou tentar destruir provas do seu passado, Mnemósine entra em um estado de luto profundo. Ela para de falar e começa a rotular cada objeto da casa com a data em que ele será esquecido, criando uma atmosfera de culpa tão densa que o cliente se sente obrigado a pedir perdão às próprias fotos de família.",

    recursos: [
      { 
        name: "The Chronos-Box", 
        desc: "Uma caixa de veludo onde ela confisca qualquer item tecnológico moderno que agida a estética saudosista da residência.", 
        img: "./assets/images/item/chronos_box.png" 
      },
      { 
        name: "The Golden Thread", 
        desc: "Fios de seda dourada usados para remendar objetos quebrados, deixando as cicatrizes do tempo visíveis e celebradas como obras de arte.", 
        img: "./assets/images/item/golden_thread.png" 
      }
    ],

    doutrinas: [
      { 
        name: "Ancoragem de Relíquias", 
        desc: "Fixa objetos esquecidos em locais de destaque, forçando-o a confrontar arrependimentos e glórias passadas em cada corredor." 
      },
      { 
        name: "Eco de Vozes", 
        desc: "Organiza mídias antigas para reproduzirem registros da sua história, transformando a residência em um museu biográfico vivo." 
      },
      { 
        name: "Inventário de Afetos", 
        desc: "Cataloga meticulosamente cada bilhete ou fragmento encontrado, entregando relatórios diários sobre a importância desses tesouros." 
      },
      { name: "Vigília de Sombras", desc: "Posiciona a iluminação para destacar espaços vazios onde antes existiam pessoas ou móveis, forçando a contemplação do que foi perdido." }
    ],

    modus_operandi: "Entra no recinto com passos leves, segurando um camafeu e respirando fundo para sentir o cheiro da história. Começa o turno acariciando as paredes e resgatando papéis amassados. O ciclo termina quando ela transforma a sua sala de estar em um santuário de recordações, servindo um chá que tem exatamente o gosto daquele que sua avó fazia, enquanto te olha com olhos marejados de adoração.",

    avatar: "./assets/images/avatar/mnemosine.png",
    fullBody: "./assets/images/personagem/mnemosine.png",

    // Segue a ordem: Purificação, Ordem, Culinária, Fibras, Integridade
    metricas: [30, 65, 90, 55, 100], 
  
    diagnosticos: [
      "Trata o pó como sedimentos preciosos que conferem peso histórico e alma ao mobiliário.",
      "Organiza itens por linha do tempo biográfica, ignorando qualquer lógica de utilidade diária.",
      "Serve apenas pratos de memória afetiva, ignorando dietas para nutrir sua criança interna.",
      "Higieniza tecidos com fragrâncias de baús antigos e mofo suave para preservar o passado.",
      "Restaura brinquedos velhos com rigor, mas negligencia reparos em tecnologias atuais e frias."
    ]
},
];