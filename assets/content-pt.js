/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2230] · PORTUGUESE (pt-BR)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2230';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2230]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: 'Para alunos de 8–9 anos: no Minecraft, eles deixam de ser jogadores e passam a ser criadores — com o próprio herói e a própria casa, mecanismos de Redstone e um robô Assistente programado em Lua. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para praticar a publicação de uma construção do Minecraft e a resolução do problema mais comum.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e baseia-se no que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'O conteúdo do curso',
    desc:'Os dados gerais do curso, o que o aluno conquista e a primeira aula do Módulo 1.',
    obj:'Prepare-se para dar a primeira aula do Minecraft CraftForge Beginner. Nela, alunos de 8 a 9 anos criam a própria skin, publicam a skin no Kodland Sparks, entram no mundo do curso usando essa skin e começam a construir a própria casa.',
    offer:[['🧱','Conhecer os dados gerais do curso e o que o aluno conquista.'],['📖','Saber o que acontece na primeira aula.'],['🤖','Entender como o robô Assistente e o Sparks AI são usados.'],['📘','Revisar a primeira aula e as Teacher Notes dela no Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','8–9 anos'],['⏱️','Aula','60 min'],['📚','Programa','40 aulas · 10 módulos'],['🌙','Linguagem','Lua']] },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','Toda aula começa mostrando o resultado pronto e dizendo o que os alunos vão aprender. Depois você mostra o caminho na sua tela e guia a turma um passo por vez.'],
          ['🛠️','De jogador a criador','Num jogo, outra pessoa criou as regras. Aqui o aluno constrói, programa um robô, cria mecanismos — e mostra o resultado para os outros.'],
          ['🔍','O erro faz parte do processo','Quando algo não funciona: <i>O que eu vejo? Por que isso acontece? O que vou tentar? Funcionou?</i> Algumas aulas têm um erro planejado na sua tela para os alunos acharem a causa sozinhos.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Desde a Aula 1, os alunos publicam os trabalhos no <b>Kodland Sparks</b>, o portfólio deles. O <b>Sparks AI</b> sugere ideias e dá feedback, mas quem decide o que aproveitar é o aluno.' }
      ]},
      { id:'goals', e:'🎓', title:'Qual é o resultado para o aluno', blocks:[
        { t:'p', html:'Ao final do curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria projetos','Mais de nove projetos no portfólio do Kodland Sparks, além de um projeto de conclusão: o próprio território, onde construções, mecanismos e programas funcionam juntos.'],
          ['🤖','Programa um robô em Lua','Comandos, argumentos, variáveis, laços, condições e funções próprias. O robô constrói, cava, desvia de obstáculos e cumpre missões — e o aluno aprende a dividir uma tarefa grande em passos.'],
          ['⚡','Cria mecanismos e lógica','A Redstone é a "eletricidade" do Minecraft: alavancas, fios, lâmpadas, portas, pistões e armadilhas. O aluno aprende a lógica "se... então" e vê o resultado na hora.'],
          ['🏰','Cria construções e jogos','Constrói com atenção à forma, à cor e à luz, e cria um minijogo com regras próprias para os colegas jogarem.'],
          ['💬','Fala do próprio trabalho com segurança','Explica como tudo funciona no fim de cada aula e apresenta o projeto de conclusão para a turma.'],
          ['🧠','Habilidades para a vida','Criatividade, trabalho em equipe (jogar o jogo dos colegas e dar feedback), comunicação e pensamento crítico: encontrar bugs e usar com bom senso as dicas do Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'A primeira aula', blocks:[
        { t:'p', html:'O Módulo 1, <b>"Primeiro Fogo. Meu mundo e os primeiros comandos"</b>, termina com o projeto <b>"Meu herói e minha casa"</b>. Abra a primeira aula e leia o que você precisa saber, o resultado-chave, o seu papel e os pontos de atenção.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'🔥', h:'Aula 1 — Primeiro Fogo', p:'A primeira aula do curso (7 cartões e tarefa de casa). Os alunos abrem o Kodland Launcher, conhecem a turma, desenham e publicam a própria skin no Kodland Sparks, vestem a skin para entrar no mundo e começam a construir a casa numa ilha.',
            acc:[['📚','O que você precisa saber','<ul><li>O roteiro: conexão e launcher → o que vem pela frente → skin no Kodland Sparks enquanto o Kodland Launcher baixa o jogo → vestir a skin, entrar no mundo e se teletransportar para a ilha → construir a casa → apresentação dos projetos → encerramento e tarefa de casa.</li><li>O <b>estúdio de skins</b> abre dentro do próprio cartão da aula (botão <b>Expand</b> para tela cheia). O aluno não precisa sair da aula para ir ao Kodland Sparks.</li><li>No Kodland Launcher: <b>Create → Skins → a própria skin → Wear</b>, depois <b>Play</b> com o código do mundo, e <b>F5</b> para se ver.</li><li>Os alunos constroem no <b>modo criativo</b>: paredes, uma entrada e uma placa com o apelido. O telhado fica para a tarefa de casa.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>🏁 A skin está <b>publicada no Kodland Sparks e o link está na tarefa</b>. Todos chegam aqui por volta dos 29 min; este cartão nunca é encurtado.</li><li>Cada aluno entra no mundo com a própria skin e está na ilha.</li><li>A casa tem paredes, uma entrada e uma placa com o apelido.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Conheça a turma: fale de você, dê a palavra a todos e chame cada um pelo nome durante a aula toda.</li><li>Diga o objetivo da aula em voz alta: "Hoje cada um vai criar a própria skin, e o mundo vai reconhecer vocês".</li><li>Pergunte: "Qual é a diferença entre criar e só jogar?" — num jogo, outra pessoa criou as regras; aqui você cria e mostra para os outros.</li><li><b>Erro planejado, só na sua tela:</b> entre no mundo sem apertar <b>Wear</b> → você fica igual a todo mundo. Pergunte por quê e depois corrija. Assim os alunos já fazem certo.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Na L1, é quase certo que o Kodland Launcher de alguém não vai abrir. A skin é desenhada no navegador, então o aluno continua trabalhando enquanto você resolve o Kodland Launcher durante o trabalho individual.</li><li>A tecla <b>Esc</b> não funciona dentro do estúdio em tela cheia: use o botão <b>Collapse</b>, na parte de cima.</li><li>O desenho pode não ter fim: "Do seu jeito, não precisa ficar perfeito. Dá para terminar em casa".</li><li>Confira no Backoffice se os links chegaram de verdade, não só se apareceram na tela.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Um dia antes, envie os links do launcher no chat do grupo e peça para os alunos instalarem com antecedência.</li><li>Faça você mesmo o caminho completo: skin no Kodland Sparks → publicar → Skins → Wear → entrar no mundo com o código → teletransporte para a ilha.</li><li>Código do mundo: <b>Welcome to CraftForge</b> (aba Play). O comando de teletransporte está nas Teacher Notes e no cartão.</li><li>Tarefa de casa: terminar a casa, mostrar um print ao assistente de IA do cartão da tarefa e enviar o print com uma frase.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: resumo, resultado-chave, os tempos de cada cartão, o seu papel e os pontos de atenção. A Aula 1 também tem um vídeo de preparação. <b>Leia todas as Teacher Notes antes da aula.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Revise a primeira aula no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a primeira aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2230', e:'📘', title:'Abrir o curso no Backoffice', small:'[2230] Minecraft CraftForge Beginner — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'O Kodland Launcher, um início forte, a publicação no Kodland Sparks e os problemas mais comuns.',
    obj:'Saiba o que garante o sucesso técnico de uma aula do Minecraft CraftForge: o Kodland Launcher, a verificação do Kodland Launcher antes do conteúdo, os últimos minutos para publicar e mostrar os trabalhos, onde os alunos encontram o link do projeto e as soluções para os problemas mais comuns.',
    needs:['mcPublish'],
    offer:[['🟩','Baixar, instalar e entrar no Kodland Launcher.'],['🚀','Fazer a verificação do Kodland Launcher antes do conteúdo e começar pelo resultado.'],['📤','Garantir que todos os alunos publiquem no Kodland Sparks e enviem o link.'],['🛠️','Resolver os problemas mais comuns do launcher e do Minecraft.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para os cursos de Minecraft. Abra cada um:' },
        { t:'acc', items:[
          ['🎬','Primeiro o resultado — e por que criar é diferente de jogar','<p>Nos primeiros minutos, <b>mostre o resultado pronto</b> e diga o que os alunos vão aprender hoje.</p><ul><li>Use o cartão de briefing: "Olhem o que vocês vão ter daqui a uma hora: o próprio crafter e a própria casa na ilha".</li><li>Explique por que construir um projeto <b>é diferente de só jogar</b>: num jogo, outra pessoa criou as regras; aqui o aluno cria e mostra para os outros.</li><li>Pergunte a um ou dois alunos: "Para você, qual é a diferença entre criar e só jogar?"</li></ul>'],
          ['🟩','A verificação do login e do launcher vem antes do conteúdo','<p>Faça a verificação da conexão e do launcher <b>antes</b> da parte de conteúdo, para o jogo baixar enquanto você conhece a turma.</p><ul><li>Conexão: um minuto — câmera, microfone, "Oi!".</li><li>Launcher: 2–3 minutos — envie os links, mostre o login na sua tela e peça um "+" no chat quando aparecer a barra verde.</li><li>Não espere o download terminar e não segure a turma por causa de um ou dois "-": volte a eles durante o trabalho individual.</li><li>A partir da L2: "Abram o Kodland Launcher e iniciem o mundo — deixem carregar enquanto a gente conversa".</li></ul>'],
          ['⏱️','Proteja os últimos 7–10 minutos','<p>Os últimos <b>7–10 minutos</b> são para publicar, mostrar os trabalhos e dar feedback — e não são cedidos para a construção.</p><ul><li>Use paradas firmes: aviso de dois minutos, depois "Parem, mãos fora do teclado. Hora da apresentação!", e chame logo o primeiro aluno pelo nome.</li><li>3 participantes mostram o trabalho; a turma dá um feedback específico: nome, o que funcionou, uma dica.</li><li>Termine com o encerramento, a reflexão, a próxima aula e a tarefa de casa — isso nunca é encurtado.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'O Kodland Launcher', blocks:[
        { t:'p', html:'Os alunos abrem o Minecraft pelo <b>Kodland Launcher</b>: ele baixa o jogo, abre o mundo do curso e é onde eles criam e vestem as skins. Você precisa dele instalado e pronto no seu computador antes da primeira aula.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>As suas credenciais:</b> para baixar e entrar no Kodland Launcher, você usa as <b>mesmas credenciais do Kodland Sparks</b>. Elas são fornecidas pelo <b>departamento de Operações ou de Ensino</b>. Os alunos entram com a própria conta Kodland — não precisam criar uma nova.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Página de download e guia oficial', small:'portfolio.kodland.org/launcher/download — Windows e Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Baixe o instalador.</li><li>Abra o arquivo baixado.</li><li>Na tela azul de aviso, clique em <b>More info → Run anyway</b> e siga o instalador.</li></ol>'],
          ['🍎','macOS 13 ou mais recente','<ol><li>Baixe o arquivo do seu processador (Apple → <b>Sobre Este Mac</b>: M1–M4 = Apple Silicon).</li><li>Abra o arquivo baixado e arraste o <b>Kodland Launcher</b> para <b>Applications</b>. Não abra o launcher por essa janela.</li><li>Abra o <b>Terminal</b>, cole a linha abaixo e aperte Return. É normal não aparecer nenhuma resposta.</li><li>Abra o launcher em <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Entrar','Clique em <b>Sign in</b>. Abre uma página no navegador: clique em <b>Sign in with Kodland</b> — um botão só, sem senha. Se o navegador não abrir, use o link abaixo do botão para receber um código curto (válido por 5 minutos).'],
          ['Baixar o jogo','O Kodland Launcher baixa o jogo em várias etapas (cerca de 550 MB; são necessários cerca de 1,8 GB livres). Deixe rodando.'],
          ['Jogar','Quando aparecer que está tudo pronto, aperte <b>Play</b>. A primeira abertura pode levar até um minuto. O código do mundo vai na aba <b>Play</b>.'],
          ['Atualizações','Se o Kodland Launcher não atualizar, instale a versão mais recente da página de download por cima da antiga. Os mundos e as skins continuam lá.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Links diretos de download (os mesmos do cartão da aula)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Quando o Kodland Launcher de um aluno não funciona', blocks:[
        { t:'p', html:'Na Aula 1, é quase certo que o launcher de alguém não vai abrir. Tudo bem: <b>primeiro dê uma tarefa para os outros</b> e depois fale com o aluno. Peça o compartilhamento de tela e guie por voz: "O que você está vendo agora? Clique neste botão". Se não resolver em alguns minutos: "Acompanhe a minha tela por enquanto, já volto".' },
        { t:'acc', open:false, items:[
          ['📥','O arquivo não baixa','Envie de novo no chat o link do cartão e confira se o aluno escolheu o arquivo do sistema dele.'],
          ['🍎','O Mac não abre o Kodland Launcher','Rode a linha do Terminal do primeiro cartão e abra o Kodland Launcher de novo em <b>Applications</b>.'],
          ['🪟','O Windows pergunta se deve abrir o arquivo','<b>More info → Run anyway</b>.'],
          ['🔑','O aluno não consegue entrar','O mesmo login Kodland das aulas — sem conta nova. A janela de login abre no navegador e muitas vezes fica escondida atrás de outras janelas.'],
          ['⏳','O jogo demora para carregar ou o download para','O primeiro download é demorado, é normal. Se a barra parar: confira a internet, feche o Kodland Launcher e abra de novo — o download continua.'],
          ['🖌️','O Kodland Launcher não funcionou de jeito nenhum','Na Aula 1 o aluno ainda desenha e publica a skin no Kodland Sparks (no navegador), então chega ao resultado principal. No mundo, ele acompanha a sua tela. Depois da aula, ajude com a abertura do Kodland Launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se vários alunos tiverem o mesmo erro, mostre a solução para todos de uma vez.' }
      ]},
      { id:'req', e:'💻', title:'Requisitos do computador', blocks:[
        { t:'p', html:'Isto é o que um aluno precisa para o Minecraft CraftForge. Serve quando um aluno tem problemas para instalar ou rodar o jogo:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computador e sistema','Desktop ou notebook com <b>Windows 10/11 (64 bits)</b> ou <b>macOS 13 ou mais recente</b>. Mac: só Apple Silicon (M1 ou mais novo).'],
          ['🧠','Memória e processador','<b>8 GB de RAM</b> com placa de vídeo dedicada, ou <b>12 GB</b> com placa de vídeo integrada. Processador de <b>4 núcleos</b>.'],
          ['🎮','Placa de vídeo e disco','Placa de vídeo com suporte a <b>Vulkan 1.3</b> e <b>2 GB</b> de memória de vídeo. <b>5 GB</b> livres em disco.'],
          ['🎧','Conexão e equipamento','Internet estável, que aguente videochamadas. Mouse de dois botões, teclado, fone com microfone e câmera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks', blocks:[
        { t:'p', html:'A publicação é o principal resultado de muitas aulas: o aluno publica o trabalho no Kodland Sparks e cola o link no cartão da aula. No Módulo 1 há dois caminhos:' },
        { t:'cards', cols:2, items:[
          ['🎨','A skin (Aula 1)','Na Aula 1, o estúdio de skins está dentro do cartão: <b>Publish</b> → dar um nome à skin → <b>Publish</b> de novo. Um arquivo de skin também pode ser publicado pelo Kodland Sparks: <b>Publish project → Minecraft skin</b> → nome → <b>Model</b> (Steve ou Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Uma construção','Print da construção (F5, F1) → Kodland Sparks → <b>Publish project</b> → <b>Image</b> → nome → <b>Drawing</b>: fazer upload do print → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Onde fica o link','O link é o endereço da página do projeto. O aluno vai em <b>My projects</b> no Kodland Sparks, abre o <b>projeto publicado</b> e copia o link da <b>barra de endereço do navegador</b>: <code>portfolio.kodland.org/apelido/…</code>.'],
          ['Colar no cartão da aula','Esse link é colado no cartão da aula na plataforma da Kodland (por exemplo, "Link da minha skin no Kodland Sparks").'],
          ['Escolher a visibilidade','<b>Public</b> aparece no Feed e no portfólio. <b>Friends only</b> é para amigos e professores. <b>Only me</b> deixa o projeto privado — ninguém mais consegue abrir o link, nem você.'],
          ['Dois passos diferentes','Vale lembrar: publicar no Kodland Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>. Confira no Backoffice se os links chegaram de verdade.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulação', title:'Publicar uma skin e uma construção no Kodland Sparks', text:'Uma réplica do Kodland Sparks e do cartão da aula: como aluno, você publica uma skin, encontra o link em My projects, cola o link no cartão da plataforma, publica o print de uma construção como projeto Image e resolve um link que não abre. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','A skin não aparece em Skins','Confira se a skin está publicada no Kodland Sparks e se o launcher usa a mesma conta. Feche e abra de novo a seção <b>Skins</b>.'],
          ['👕','O aluno apertou Wear com o jogo aberto','O launcher avisa que a skin vai aparecer quando o jogo for reiniciado: é só sair e entrar de novo no mundo.'],
          ['📍','O teletransporte não funcionou','Peça o compartilhamento de tela: em geral o comando está incompleto ou falta o sinal de menos antes do último número.'],
          ['⛶','O aluno não consegue sair do estúdio em tela cheia','Clique em <b>Collapse</b>, na parte de cima do estúdio — a tecla <b>Esc</b> não funciona lá dentro.'],
          ['🔒','O link do aluno não abre','Provavelmente o projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>). Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo.'],
          ['🖼️','O aluno não encontra o print','No Windows fica em <b>Imagens → Capturas de tela</b>; no Mac, na área de trabalho. Se não encontrar agora, o aluno anexa depois, em casa.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo de preparação.','O meu launcher está instalado e com login feito, e eu mesmo fiz o caminho da aula.','Antes da Aula 1, enviei os links do launcher no chat do grupo.'] },
          { h:'🎬 Durante a aula', items:['Fiz a verificação da conexão e do launcher antes do conteúdo.','Mostrei o resultado pronto e o objetivo da aula nos primeiros minutos.'] },
          { h:'📤 No fim da aula', items:['Protegi os últimos 7–10 minutos para publicar, mostrar os trabalhos e dar feedback.','Todos enviaram o link do projeto publicado no cartão da aula.','Abri alguns links para conferir se estão funcionando.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Para quem é o Minecraft CraftForge Beginner e quanto dura cada aula?',
      o:['Para alunos de 8–9 anos, com aulas de 60 minutos em grupo.','Para alunos de 10–12 anos, com aulas de 90 minutos.','Para alunos de 13–17 anos, com aulas de 90 minutos.'],
      a:0, e:'O Beginner é para alunos de 8–9 anos: 40 aulas de 60 minutos em grupo.' },
    { q:'Em qual linguagem de programação os alunos programam o robô Assistente?',
      o:['Python.','Blocos do Scratch.','Lua.'],
      a:2, e:'O robô Assistente é programado em Lua: comandos, argumentos, variáveis, laços, condições e funções.' },
    { q:'Como começa uma aula?',
      o:['Com teoria sobre redstone antes de alguém entrar no mundo.','Mostrando o resultado pronto, dizendo o objetivo e explicando por que criar é diferente de só jogar.','Os alunos começam a construir na hora, sem ver um exemplo.'],
      a:1, e:'Primeiro o resultado: os alunos veem aonde vão chegar e por que criar é diferente de jogar.' },
    { q:'O que o aluno leva do curso, no fim?',
      o:['Uma prova final escrita.','Mais de nove projetos no portfólio do Kodland Sparks e um projeto de conclusão — o próprio território, apresentado para a turma.','Só a casa da Aula 1.'],
      a:1, e:'Mais de nove projetos no portfólio e um projeto de conclusão em que construções, mecanismos e programas funcionam juntos.' },
    { q:'Qual é o papel do Sparks AI nas aulas?',
      o:['Faz o projeto no lugar do aluno.','Sugere ideias e dá feedback; o aluno decide o que aproveitar.','Avalia a aula no lugar do tutor.'],
      a:1, e:'O Sparks sugere, o aluno decide — em geral, um pedido por aula.' }
  ],
  m2:[
    { q:'Quando você faz a verificação da conexão e do launcher?',
      o:['No começo da aula, antes do conteúdo, para o jogo baixar enquanto você conhece a turma.','No meio da aula, quando os alunos precisam do Minecraft.','No fim, para não tirar tempo da aula.'],
      a:0, e:'Antes do conteúdo: o jogo baixa enquanto você conhece a turma.' },
    { q:'Quais credenciais você usa para baixar e entrar no Kodland Launcher?',
      o:['Uma conta nova que você mesmo cria.','As mesmas credenciais do Kodland Sparks, fornecidas pelo departamento de Operações ou de Ensino.','A conta de um aluno.'],
      a:1, e:'O launcher usa as suas credenciais do Kodland Sparks, fornecidas pelo departamento de Operações ou de Ensino.' },
    { q:'Onde o aluno encontra o link para enviar no cartão da aula?',
      o:['Num comentário embaixo do projeto.','No Sparks: My projects → abrir o projeto publicado → copiar o endereço da barra do navegador.','No launcher, na aba Play.'],
      a:1, e:'O link é o endereço da página do projeto: My projects → o projeto publicado → a barra do navegador.' },
    { q:'Para que servem os últimos 7–10 minutos da aula?',
      o:['Mais tempo de construção.','Publicar, mostrar os trabalhos e dar feedback — além do encerramento e da tarefa de casa.','Jogo livre.'],
      a:1, e:'Proteja os últimos minutos: publicação, apresentação com feedback e encerramento.' },
    { ctx:'Na Aula 1, o launcher de um aluno não abre, e o resto da turma está pronto.',
      q:'O que você faz?',
      o:['Para a aula até o launcher funcionar.','Segue com a turma — a skin é desenhada no Sparks, no navegador — e ajuda o aluno durante o trabalho individual.','Pede ao aluno que tente de novo em casa e pule a aula.'],
      a:1, e:'Um problema não deve parar a turma: o aluno ainda desenha e publica a skin, e você resolve o Kodland Launcher durante o trabalho individual.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e faça o caminho da aula no launcher.'],
    ['🟩', '<b>Primeiros minutos:</b> verificação da conexão e do launcher, depois o resultado pronto e o objetivo.'],
    ['🔗', '<b>O link:</b> My projects → o projeto publicado → o endereço na barra do navegador.'],
    ['⏱️', '<b>Últimos 7–10 minutos:</b> publicar, mostrar os trabalhos e dar feedback.']
  ]
};
