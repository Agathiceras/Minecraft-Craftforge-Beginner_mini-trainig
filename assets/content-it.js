/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2240 · ENG] · ITALIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'it' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formazione sul corso EM',
  footer: 'kodland · Nuovo modello educativo · Formazione sul corso',
  devLink: '🛠 Sviluppatore',
  logoSub: 'Nuovo modello educativo',
  navHome: '← Home',
  navBackModule: '← Torna al modulo',
  moduleN: 'Modulo {n}',
  badgeStart: 'Inizia →',
  badgeLocked: '🔒 Completa il modulo {n}',
  badgeDone: '✓ Completato · {score}%',
  progLabel: 'moduli completati',
  progAllDone: 'Moduli completati 🎉',
  eyebrow: '{course} · Modulo {n} di {total}',
  ctaTitle: 'Verifica del modulo',
  ctaText: '{n} brevi domande. Per superare la verifica serve almeno il 70%.',
  lockSim: '🔒 Completa la simulazione qui sopra per sbloccare la verifica.',
  startCheck: 'Inizia la verifica →',
  retake: '🔁 Ripeti la verifica',
  qmeta: '{e} Verifica del modulo {n} · Domanda {i} di {total}',
  fbRight: '✅ <b>Corretto!</b> ',
  fbWrong: '❌ <b>Non proprio.</b> ',
  nextQuestion: 'Domanda successiva →',
  seeResult: 'Vedi il risultato →',
  passedTitle: 'Verifica superata!',
  failTitle: 'Ci sei quasi',
  scoreLine: 'Hai risposto correttamente a <b>{score} domande su {n}</b>.',
  failText: 'Serve almeno il 70%. Ripassa il modulo e riprova — puoi ripetere la verifica tutte le volte che vuoi.',
  nextUnlocked: '<b>Modulo {n} · {title}</b> è ora sbloccato.',
  goModule: 'Vai al modulo {n} →',
  allDoneText: 'Hai completato entrambi i moduli di questa formazione.',
  seeNext: 'Scopri il prossimo passaggio →',
  reviewModule: '📖 Ripassa il modulo',
  homeDoneTitle: 'Moduli completati!',
  homeDoneText: 'Un ultimo passaggio: il test DST nella pagina della formazione sull’LMS.',
  homeDoneBtn: 'Scopri come proseguire →',
  doneBadge: '✓ Fatto',
  doneBack: 'Torna ai moduli',
  lockedTitle: 'Ancora bloccato',
  lockedModule: 'Completa prima il modulo {n}.',
  lockedStep: 'Completa il passaggio precedente per sbloccare questo.',
  ok: 'OK',
  linkOpen: 'Apri ↗',
  projPlay: '▶ Apri ↗',
  simOpen: '▶ Apri la simulazione qui',
  simClose: '✕ Chiudi la simulazione',
  simNewTab: 'Apri in una nuova scheda ↗',
  simDone: '✅ Simulazione completata',
  simTodo: '○ Simulazione da completare',
  checkTag: 'Spunta le voci',
  mythTag: 'Mito',
  mythTap: 'Tocca per scoprire la realtà →',
  mythReality: 'Realtà ✓',
  sortWrong: '✗ Non proprio.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2240';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Formazione sul corso · [2240]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: 'Per studenti di 8–9 anni: in Minecraft passano da giocatori a creatori: creano il proprio eroe e la propria casa, costruiscono meccanismi di redstone e programmano in Lua un robot Assistente. Due moduli: i contenuti del corso e gli aspetti tecnici delle lezioni.',
  facts: [
    ['🧑‍💻', '<b>Procedi al tuo ritmo.</b> I tuoi progressi vengono salvati in questo browser. Ogni modulo termina con una breve verifica.'],
    ['⚡', '<b>Con attività pratiche.</b> Una simulazione di Kodland Sparks per esercitarti a pubblicare una costruzione Minecraft e a risolvere il problema più comune.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Prima di iniziare:</b> completa la <b>formazione principale sul nuovo modello educativo (EM)</b>. Questa formazione sul corso viene dopo e si basa su ciò che hai visto lì: Backoffice e le note per il tutor (Teacher Notes), Classroom con Follow Mode, il tour di Kodland Sparks e la qualità della lezione.' },
  { kind:'warn', e:'🔄', html:'<b>I contenuti delle lezioni in Backoffice vengono aggiornati continuamente.</b> Le lezioni migliorano costantemente grazie al feedback di studenti e tutor. Niente paura: ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'I contenuti del corso',
    desc:'Le informazioni generali sul corso, che cosa ottiene lo studente e la prima lezione del Modulo 1 del corso.',
    obj:'Prepararti a tenere la prima lezione di Minecraft CraftForge Beginner. In questa lezione, gli studenti di 8–9 anni creano la propria skin, la pubblicano su Kodland Sparks, entrano con la skin nel mondo del corso e iniziano a costruire la propria casa.',
    offer:[['🧱','Conoscere le informazioni generali sul corso e che cosa ottiene lo studente.'],['📖','Sapere che cosa succede nella prima lezione.'],['🤖','Capire come si usano il robot Assistente e Sparks AI.'],['📘','Leggere la prima lezione e le relative note per il tutor in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Il corso', blocks:[
        { t:'meta', items:[['🧒','Età','8–9 anni'],['⏱️','Lezione','60 min'],['📚','Programma','40 lezioni · 10 moduli'],['🌙','Linguaggio','Lua']] },
        { t:'trio', items:[
          ['🎬','Prima il risultato','Apri ogni lezione mostrando il risultato finale e dicendo che cosa impareranno gli studenti. Poi mostri il percorso sul tuo schermo e li guidi un passo alla volta.'],
          ['🛠️','Da giocatore a creatore','In un gioco, le regole le ha fatte qualcun altro. Qui lo studente costruisce, programma un robot, crea meccanismi — e mostra il risultato agli altri.'],
          ['🔍','Gli errori fanno parte del percorso','Quando qualcosa non funziona: <i>Che cosa vedo? Perché succede? Che cosa provo? Ha funzionato?</i> Alcune lezioni prevedono un errore pianificato sul tuo schermo, perché gli studenti ne trovino da soli la causa.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Gli studenti pubblicano i loro lavori su <b>Kodland Sparks</b>, il loro portfolio, fin dalla Lezione 1. <b>Sparks AI</b> propone idee e feedback, ma è lo studente a decidere che cosa usare.' }
      ]},
      { id:'goals', e:'🎓', title:'Che cosa ottiene lo studente', blocks:[
        { t:'p', html:'Alla fine del corso, lo studente raggiungerà questi risultati:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea progetti','Oltre nove progetti nel suo portfolio di Kodland Sparks e un progetto finale: la sua terra, dove costruzioni, meccanismi e programmi funzionano insieme.'],
          ['🤖','Programma un robot in Lua','Comandi, argomenti, variabili, cicli, condizioni e funzioni proprie. Il robot costruisce, scava, evita gli ostacoli e completa missioni — e lo studente impara a scomporre un compito complesso in passaggi più semplici.'],
          ['⚡','Costruisce meccanismi e logica','La redstone è l’«elettricità» di Minecraft: leve, fili, lampade, porte, pistoni e trappole. Lo studente impara la logica «se–allora» e vede subito il risultato.'],
          ['🏰','Crea costruzioni e giochi','Costruisce facendo attenzione a forma, colore e luce, e crea un minigioco con regole proprie a cui giocano i compagni.'],
          ['💬','Parla del proprio lavoro con sicurezza','Alla fine di ogni lezione spiega come funziona il suo lavoro e, a fine corso, presenta il progetto finale al gruppo.'],
          ['🧠','Competenze per la vita','Creatività, lavoro di squadra (provare i giochi dei compagni e dare feedback), comunicazione e pensiero critico: trovare i bug e usare con giudizio i suggerimenti di Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La prima lezione', blocks:[
        { t:'p', html:'Il Modulo 1 del corso, <b>«Primo fuoco. Il mio mondo e i primi comandi»</b>, si conclude con il progetto <b>«Il mio eroe e la mia casa»</b>. Apri la prima lezione e leggi che cosa devi sapere, il risultato chiave, il tuo ruolo e i punti a cui prestare attenzione.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'🔥', h:'Lezione 1 — Primo fuoco', p:'La prima lezione del corso (7 schede più i compiti). Gli studenti avviano il launcher, conoscono il gruppo, disegnano e pubblicano la propria skin su Sparks, la indossano per entrare nel mondo e iniziano a costruire la propria casa su un’isola.',
            acc:[['📚','Che cosa devi sapere','<ul><li>Il percorso: collegamento e launcher → che cosa ci aspetta → skin su Sparks mentre il launcher scarica il gioco → indossare la skin, entrare nel mondo e teletrasportarsi sull’isola → costruire la casa → presentazione dei progetti → riepilogo e compiti.</li><li>Lo <b>studio delle skin</b> si apre direttamente nella scheda della lezione (pulsante <b>Expand</b> per lo schermo intero). Lo studente non deve uscire dalla lezione per andare su Sparks.</li><li>Nel launcher: <b>Create → Skins → la propria skin → Wear</b>, poi <b>Play</b> con il codice del mondo, e <b>F5</b> per vedersi in terza persona.</li><li>Gli studenti costruiscono in <b>modalità creativa</b>: muri, un ingresso e un cartello con il proprio nickname. Il tetto si costruisce a casa, come compito.</li></ul>'],
                 ['🎯','Risultato chiave','<ul><li>🏁 La skin è <b>pubblicata su Sparks e il suo link è nella scheda della lezione</b>. Tutti devono arrivarci entro il minuto 29 circa; questa fase non si accorcia mai.</li><li>Ogni studente entra nel mondo con la propria skin e si trova sull’isola.</li><li>La casa ha muri, un ingresso e un cartello con il nickname.</li></ul>'],
                 ['🧑‍🏫','Il tuo ruolo','<ul><li>Presentati e fai conoscenza con il gruppo: dai la parola a tutti e usa i nomi per tutta la lezione.</li><li>Di’ ad alta voce l’obiettivo della lezione: «Oggi ognuno di voi creerà la propria skin e tutti vi riconosceranno nel mondo di gioco».</li><li>Chiedi: «In che cosa creare è diverso dal semplice giocare?» — in un gioco le regole le ha fatte qualcun altro; qui crei tu e mostri il risultato agli altri.</li><li><b>Errore pianificato, solo sul tuo schermo:</b> entra nel mondo senza premere <b>Wear</b> → sei uguale a tutti gli altri. Chiedi perché, poi correggi. Così, quando tocca a loro, gli studenti lo fanno subito nel modo giusto.</li></ul>'],
                 ['📌','Attenzione','<ul><li>Nella L1 è molto probabile che a qualcuno il launcher non parta. La skin si disegna nel browser, quindi lo studente continua a lavorare mentre tu sistemi il launcher durante il lavoro autonomo.</li><li><b>Esc</b> non funziona dentro lo studio a schermo intero: usa il pulsante <b>Collapse</b> in alto.</li><li>Il disegno rischia di non finire mai: «Deve essere tua, non perfetta. Puoi finirla a casa».</li><li>Controlla in Backoffice che i link siano arrivati davvero, non solo che siano stati mostrati sullo schermo.</li></ul>'],
                 ['⚙️','Aspetti tecnici','<ul><li>Il giorno prima, invia i link del launcher nella chat del gruppo e chiedi agli studenti di installarlo in anticipo.</li><li>Fai tu, in prima persona, tutto il percorso: skin su Sparks → pubblicazione → Skins → Wear → entrare nel mondo con il codice → teletrasporto sull’isola.</li><li>Codice del mondo: <b>Welcome to CraftForge</b> (scheda Play). Il comando di teletrasporto è nelle note per il tutor e nella scheda.</li><li>Compiti: finire la casa, mostrare uno screenshot all’assistente IA integrato nella scheda dei compiti e consegnare lo screenshot con una frase.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La prima nota per il tutor di ogni lezione contiene il piano completo: la sintesi, il risultato chiave, i tempi di ogni scheda, il tuo ruolo e i rischi. La Lezione 1 ha anche un video di preparazione. <b>Leggi tutte le note per il tutor prima della lezione.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Leggi la prima lezione in Backoffice', blocks:[
        { t:'p', html:'Prima della verifica, apri il corso in Backoffice e leggi la prima lezione con calma — lì trovi tutte le schede attività e le note per il tutor. Non c’è un limite di tempo.' },
        { t:'link', href:'https://bo.kodland.org/courses/2240', e:'📘', title:'Apri il corso in Backoffice', small:'[2240] Minecraft CraftForge Beginner — le lezioni e le relative note per il tutor' },
        { t:'callout', kind:'warn', e:'🔄', html:'I contenuti delle lezioni in Backoffice continueranno a essere aggiornati grazie al feedback di studenti e tutor. Ogni volta che qualcosa cambia, riceverai un avviso in anticipo per preparare la lezione.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Gli aspetti tecnici delle lezioni',
    desc:'Il Kodland Launcher, un buon inizio, la pubblicazione su Sparks e i problemi più comuni.',
    obj:'Scoprire che cosa fa funzionare tecnicamente una lezione di Minecraft CraftForge: il Kodland Launcher, il controllo del launcher prima dei contenuti, gli ultimi minuti per pubblicare e mostrare i lavori, dove gli studenti trovano il link al proprio progetto e le soluzioni ai problemi più comuni.',
    needs:['mcPublish'],
    offer:[['🟩','Scaricare, installare il Kodland Launcher e accedere.'],['🚀','Fare il controllo del launcher prima dei contenuti e iniziare dal risultato.'],['📤','Assicurarti che ogni studente pubblichi su Sparks e invii il link.'],['🛠️','Risolvere i problemi più comuni del launcher e di Minecraft.']],
    sections:[
      { id:'focus', e:'🎯', title:'I 3 punti che fanno funzionare una lezione', blocks:[
        { t:'p', html:'Sono le priorità fissate dal team di prodotto per i corsi di Minecraft. Aprile una alla volta:' },
        { t:'acc', items:[
          ['🎬','Mostra prima il risultato e spiega perché creare è diverso dal giocare','<p>Nei primi minuti, <b>mostra il risultato finale</b> e di’ che cosa impareranno oggi gli studenti.</p><ul><li>Usa la scheda di briefing: «Guardate che cosa avrete tra un’ora: il vostro crafter e la vostra casa sull’isola».</li><li>Spiega in che cosa costruire un progetto <b>è diverso dal semplice giocare</b>: in un gioco le regole le ha fatte qualcun altro; qui lo studente crea e mostra il risultato agli altri.</li><li>Chiedi a uno o due studenti: «Secondo te, in che cosa creare è diverso dal semplice giocare?»</li></ul>'],
          ['🟩','Il controllo del collegamento e del launcher viene prima dei contenuti','<p>Fai il controllo del collegamento e del launcher <b>prima</b> della parte di contenuti, così il gioco si scarica mentre conosci il gruppo.</p><ul><li>Collegamento: un minuto — videocamera, microfono, «Ciao!».</li><li>Launcher: 2–3 minuti — invia i link, mostra l’accesso sul tuo schermo, chiedi un «+» in chat quando compare la barra verde.</li><li>Non aspettare che il download finisca e non bloccare il gruppo per uno o due «−»: torna da loro durante il lavoro autonomo.</li><li>Dalla Lezione 2 in poi: «Aprite il launcher e avviate il vostro mondo — lasciatelo caricare mentre parliamo».</li></ul>'],
          ['⏱️','Proteggi gli ultimi 7–10 minuti','<p>Gli ultimi <b>7–10 minuti</b> servono per pubblicare, mostrare i lavori e dare feedback — e non vanno sacrificati per continuare a costruire.</p><ul><li>Interrompi in modo netto: avvisa due minuti prima, poi «Stop, mani lontane dalla tastiera. È il momento della presentazione!», e chiama subito il primo studente.</li><li>Tre studenti mostrano il proprio lavoro; il gruppo dà un feedback specifico: nome, che cosa ha funzionato, un consiglio.</li><li>Concludi con riepilogo, riflessione, prossima lezione e compiti — queste parti non si accorciano mai.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Il Kodland Launcher', blocks:[
        { t:'p', html:'Gli studenti aprono Minecraft tramite il <b>Kodland Launcher</b>: scarica il gioco, apre il mondo del corso ed è il posto dove creano le skin e le indossano. Devi averlo installato e pronto sul tuo computer prima della tua prima lezione.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Le tue credenziali:</b> per scaricare il launcher e accedere usi le <b>stesse credenziali di Kodland Sparks</b>. Te le fornisce il <b>reparto Operations o Teaching</b>. Gli studenti accedono con il proprio account Kodland — non ne serve uno nuovo.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Pagina di download e guida ufficiale', small:'portfolio.kodland.org/launcher/download — Windows e Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Scarica il programma di installazione.</li><li>Apri il file scaricato.</li><li>Nella schermata blu di avviso, clicca su <b>More info → Run anyway</b>, poi segui l’installazione.</li></ol>'],
          ['🍎','macOS 13 o successivo','<ol><li>Scarica il file per il tuo processore (Apple → <b>Informazioni su questo Mac</b>: M1 o successivi = Apple Silicon).</li><li>Apri il file scaricato e trascina <b>Kodland Launcher</b> in <b>Applications</b>. Non aprirlo da quella finestra.</li><li>Apri <b>Terminal</b>, incolla la riga qui sotto e premi Invio. È normale che non compaia nulla.</li><li>Apri il launcher da <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Accedi','Clicca su <b>Sign in</b>. Si apre una pagina del browser: clicca su <b>Sign in with Kodland</b> — un solo pulsante, nessuna password. Se il browser non si apre, usa il link sotto il pulsante per ottenere un codice breve (valido per cinque minuti).'],
          ['Scarica il gioco','Il launcher scarica il gioco in diversi passaggi (circa 550 MB; servono circa 1,8 GB di spazio libero). Lascialo lavorare.'],
          ['Gioca','Quando il launcher indica che è tutto pronto, premi <b>Play</b>. Il primo avvio può richiedere fino a un minuto. Il codice del mondo si inserisce nella scheda <b>Play</b>.'],
          ['Aggiornamenti','Se il launcher non si aggiorna, scarica l’ultima versione dalla pagina di download e installala sopra quella vecchia. Mondi e skin restano al loro posto.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Link di download diretti (gli stessi della scheda della lezione)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1 o successivi)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Quando il launcher di uno studente non funziona', blocks:[
        { t:'p', html:'Nella Lezione 1, il launcher di qualcuno quasi sicuramente non partirà. È normale: <b>prima dai un compito agli altri</b>, poi collegati con lo studente. Chiedigli di condividere lo schermo e guidalo a voce: «Che cosa vedi adesso? Clicca su questo pulsante». Se il problema non si risolve in un paio di minuti: «Per ora segui il mio schermo, torno da te tra poco».' },
        { t:'acc', open:false, items:[
          ['📥','Il file non si scarica','Invia di nuovo in chat il link della scheda e controlla che lo studente abbia scelto il file per il suo sistema.'],
          ['🍎','Il Mac non apre il launcher','Esegui la riga del Terminal indicata nella sezione «Il Kodland Launcher» e apri di nuovo il launcher da <b>Applications</b>.'],
          ['🪟','Windows chiede se aprire il file','<b>More info → Run anyway</b>.'],
          ['🔑','Lo studente non riesce ad accedere','Usa lo stesso accesso Kodland delle lezioni — nessun account nuovo. La finestra di accesso si apre nel browser e spesso finisce dietro altre finestre.'],
          ['⏳','Il gioco impiega molto a caricarsi o il download si ferma','Il primo download è lungo, è normale. Se la barra si ferma: controlla la connessione, chiudi il launcher e riaprilo — il download riprende.'],
          ['🖌️','Il launcher proprio non parte','Nella Lezione 1 lo studente disegna e pubblica comunque la skin su Sparks (nel browser), quindi ottiene il risultato principale. Nel mondo segue il tuo schermo. Dopo la lezione, aiutalo con l’avvio.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se più studenti hanno lo stesso errore, mostra la soluzione a tutti una volta sola.' }
      ]},
      { id:'req', e:'💻', title:'Requisiti del computer', blocks:[
        { t:'p', html:'Ecco che cosa serve a uno studente per Minecraft CraftForge. È utile quando uno studente ha problemi a installare o avviare il gioco:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computer e sistema','Computer fisso o portatile con <b>Windows 10/11 (64 bit)</b> o <b>macOS 13 o successivo</b>. Mac: solo Apple Silicon (M1 o più recente).'],
          ['🧠','Memoria e processore','<b>8 GB di RAM</b> con scheda grafica dedicata, oppure <b>12 GB</b> con grafica integrata. Un processore <b>quad-core</b>.'],
          ['🎮','Grafica e disco','Una scheda grafica che supporti <b>Vulkan 1.3</b> e <b>2 GB</b> di memoria video. <b>5 GB</b> di spazio libero su disco.'],
          ['🎧','Connessione e dotazione','Una connessione internet stabile, adatta alle videochiamate. Un mouse a due tasti, tastiera, cuffie con microfono e videocamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Pubblicare su Kodland Sparks', blocks:[
        { t:'p', html:'La pubblicazione è il risultato principale di molte lezioni: lo studente pubblica il lavoro su Sparks e incolla il link nella scheda della lezione. Nel Modulo 1 del corso ci sono due modi:' },
        { t:'cards', cols:2, items:[
          ['🎨','La skin (Lezione 1)','Nella Lezione 1 lo studio delle skin è dentro la scheda: <b>Publish</b> → dai un nome alla skin → di nuovo <b>Publish</b>. Un file di skin si può pubblicare anche da Sparks: <b>Publish project → Minecraft skin</b> → nome → <b>Model</b> (Steve o Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Una costruzione','Screenshot della costruzione (F5 per la terza persona, F1 per nascondere l’interfaccia) → Sparks → <b>Publish project</b> → <b>Image</b> → nome → <b>Drawing</b>: carica lo screenshot → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Dove si trova il link','Il link è l’indirizzo della pagina del progetto. Lo studente va su <b>My projects</b> in Sparks, apre il <b>progetto pubblicato</b> e copia il link dalla <b>barra degli indirizzi del browser</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Incollalo nella scheda della lezione','Il link va incollato nel campo apposito della scheda sulla piattaforma Kodland (per esempio, «Link alla mia skin su Kodland Sparks»).'],
          ['Scegli la visibilità','Con <b>Public</b> il progetto compare nel feed e nel portfolio. <b>Friends only</b> è per amici e insegnanti. <b>Only me</b> rende il progetto privato — nessun altro può aprire il link, nemmeno il tutor.'],
          ['Due passaggi distinti','Pubblicare su Sparks e inviare il link sulla piattaforma Kodland sono <b>due passaggi distinti</b>. Controlla in Backoffice che i link siano arrivati davvero.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulazione', title:'Pubblica una skin e una costruzione su Kodland Sparks', text:'Una riproduzione di Kodland Sparks e della scheda della lezione: nei panni di uno studente, pubblichi una skin, trovi il suo link in My projects, lo incolli nella scheda sulla piattaforma, pubblichi lo screenshot di una costruzione come progetto Image e sistemi un link che non si apre. Richiede circa 5 minuti. La verifica del modulo si sblocca quando hai finito.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando qualcosa va storto', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','La skin non compare in «Skins»','Controlla che la skin sia pubblicata su Sparks e che il launcher usi lo stesso account. Chiudi e riapri la sezione <b>Skins</b>.'],
          ['👕','Lo studente ha premuto «Wear» con il gioco aperto','Il launcher avvisa che la skin comparirà al prossimo avvio del gioco: esci dal mondo ed entra di nuovo.'],
          ['📍','Il teletrasporto non ha funzionato','Chiedi allo studente di condividere lo schermo: di solito il comando non è completo o manca il segno meno prima dell’ultimo numero.'],
          ['⛶','Lo studente non riesce a uscire dallo studio a schermo intero','Clicca su <b>Collapse</b> in alto nello studio — <b>Esc</b> lì dentro non funziona.'],
          ['🔒','Il link dello studente non si apre','Probabilmente il progetto è stato salvato come <b>Only me</b> (compare l’etichetta <b>Private project</b>). Chiedi allo studente: <b>My projects → apri il progetto → Edit → Public → Publish</b>. Il link resta lo stesso.'],
          ['🖼️','Lo studente non trova lo screenshot','Su Windows si trova in <b>Immagini → Screenshot</b>; su Mac, sulla scrivania. Se ora non si trova, lo studente può allegarlo più tardi, da casa.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist tecnica per ogni lezione', blocks:[
        { t:'check', title:'✅ La mia checklist tecnica', groups:[
          { h:'☑️ Prima della lezione', items:['Ho letto tutte le note per il tutor della lezione e ho guardato il video di preparazione.','Il mio launcher è installato, ho effettuato l’accesso e ho fatto personalmente il percorso della lezione.','Prima della Lezione 1, ho inviato i link del launcher nella chat del gruppo.'] },
          { h:'🎬 Durante la lezione', items:['Ho fatto il controllo del collegamento e del launcher prima dei contenuti.','Nei primi minuti ho mostrato il risultato finale e l’obiettivo della lezione.'] },
          { h:'📤 Alla fine della lezione', items:['Ho protetto gli ultimi 7–10 minuti per pubblicare, mostrare i lavori e dare feedback.','Tutti hanno inviato il link al progetto pubblicato nella scheda della lezione.','Ho aperto alcuni link per controllare che funzionino.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'A chi è rivolto Minecraft CraftForge Beginner e quanto dura ogni lezione?',
      o:['A studenti di 8–9 anni, con lezioni di gruppo di 60 minuti.','A studenti di 10–12 anni, con lezioni di 90 minuti.','A studenti di 13–17 anni, con lezioni di 90 minuti.'],
      a:0, e:'Beginner è rivolto a studenti di 8–9 anni: 40 lezioni di gruppo da 60 minuti.' },
    { q:'Con quale linguaggio gli studenti programmano il robot Assistente?',
      o:['Python.','Blocchi di Scratch.','Lua.'],
      a:2, e:'Il robot Assistente si programma in Lua: comandi, argomenti, variabili, cicli, condizioni e funzioni.' },
    { q:'Come inizia una lezione?',
      o:['Con la teoria sulla redstone prima che qualcuno entri nel mondo.','Mostrando il risultato finale, dicendo l’obiettivo e spiegando perché creare è diverso dal semplice giocare.','Facendo iniziare subito gli studenti a costruire, senza mostrare un esempio.'],
      a:1, e:'Prima il risultato: gli studenti vedono dove stanno andando e perché creare è diverso dal giocare.' },
    { q:'Che cosa ottiene lo studente alla fine del corso?',
      o:['Un esame finale scritto.','Più di nove progetti nel suo portfolio di Kodland Sparks e un progetto finale — la sua terra, presentata al gruppo.','Solo la casa della Lezione 1.'],
      a:1, e:'Più di nove progetti nel portfolio e un progetto finale in cui costruzioni, meccanismi e programmi funzionano insieme.' },
    { q:'Qual è il ruolo di Sparks AI nelle lezioni?',
      o:['Realizza il progetto al posto dello studente.','Propone idee e feedback; è lo studente a decidere che cosa usare.','Valuta la lezione al posto del tutor.'],
      a:1, e:'Sparks AI propone, lo studente decide — di solito una richiesta per lezione.' }
  ],
  m2:[
    { q:'Quando fai il controllo del collegamento e del launcher?',
      o:['All’inizio della lezione, prima dei contenuti, così il gioco si scarica mentre conosci il gruppo.','A metà lezione, quando gli studenti hanno bisogno di Minecraft.','Alla fine, così non toglie tempo alla lezione.'],
      a:0, e:'Prima dei contenuti: il gioco si scarica mentre conosci il gruppo.' },
    { q:'Quali credenziali usi per scaricare il Kodland Launcher e accedere?',
      o:['Un nuovo account che crei tu.','Le stesse credenziali di Kodland Sparks, fornite dal reparto Operations o Teaching.','L’account di uno studente.'],
      a:1, e:'Il launcher usa le tue credenziali di Kodland Sparks, fornite dal reparto Operations o Teaching.' },
    { q:'Dove trova lo studente il link da inviare nella scheda della lezione?',
      o:['In un commento sotto il progetto.','Su Sparks: My projects → apri il progetto pubblicato → copia l’indirizzo dalla barra del browser.','Nel launcher, nella scheda Play.'],
      a:1, e:'Il link è l’indirizzo della pagina del progetto: My projects → il progetto pubblicato → la barra del browser.' },
    { q:'A che cosa servono gli ultimi 7–10 minuti della lezione?',
      o:['Tempo extra per costruire.','Pubblicare, mostrare i lavori e dare feedback — più il riepilogo e i compiti.','Gioco libero.'],
      a:1, e:'Proteggi gli ultimi minuti: pubblicazione, presentazione con feedback e riepilogo.' },
    { ctx:'Nella Lezione 1, il launcher di uno studente non parte e il resto del gruppo è pronto.',
      q:'Che cosa fai?',
      o:['Interrompi la lezione finché il launcher non funziona.','Fai andare avanti il gruppo — la skin si disegna su Sparks, nel browser — e aiuti lo studente durante il lavoro autonomo.','Dici allo studente di riprovare a casa e di saltare la lezione.'],
      a:1, e:'Un solo problema non deve fermare il gruppo: lo studente disegna e pubblica comunque la skin, e tu sistemi il launcher durante il lavoro autonomo.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Moduli completati!',
  html: `<p>Ci sei quasi! Torna alla pagina della formazione su LMS da cui hai aperto questo percorso. Il test DST si trova subito sotto la formazione.</p>
    <p>👉 <b>Per completare con successo la formazione devi svolgere e superare il test DST.</b> Se non svolgi il test DST, la formazione resterà incompleta e potrebbe scadere.</p>
    <p>Il punteggio minimo per superarlo è <b>80%</b>.</p>
    <p>Buona fortuna! ❤️</p>`,
  nexts: [
    ['📒', '<b>Prima di ogni lezione:</b> leggi le note per il tutor in Backoffice e fai il percorso della lezione nel launcher.'],
    ['🟩', '<b>Primi minuti:</b> controllo del collegamento e del launcher, poi il risultato finale e l’obiettivo.'],
    ['🔗', '<b>Il link:</b> My projects → il progetto pubblicato → l’indirizzo nella barra del browser.'],
    ['⏱️', '<b>Ultimi 7–10 minuti:</b> pubblicazione, presentazione dei lavori e feedback.']
  ]
};
