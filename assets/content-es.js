/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2234 · LatAm] · SPANISH (LatAm)
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'es' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formación de curso EM',
  footer: 'kodland · Nuevo Modelo Educativo · Formación de curso',
  devLink: '🛠 Developer',
  logoSub: 'Nuevo Modelo Educativo',
  navHome: '← Inicio',
  navBackModule: '← Volver al módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Empezar →',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  progLabel: 'módulos completados',
  progAllDone: 'Módulos completados 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificación del módulo',
  ctaText: '{n} preguntas cortas. Necesitas 70% o más para aprobar.',
  lockSim: '🔒 Completa la simulación de arriba para desbloquear la verificación.',
  startCheck: 'Empezar la verificación →',
  retake: '🔁 Repetir la verificación',
  qmeta: '{e} Verificación del Módulo {n} · Pregunta {i} de {total}',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste bien <b>{score} de {n}</b>.',
  failText: 'Necesitas 70% o más. Repasa el módulo y vuelve a intentarlo: puedes repetirlo las veces que necesites.',
  nextUnlocked: 'Se desbloqueó el <b>Módulo {n} · {title}</b>.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste los dos módulos de esta formación.',
  seeNext: 'Ver el siguiente paso →',
  reviewModule: '📖 Repasar el módulo',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Falta un último paso: el test DST en la página de la formación en el LMS.',
  homeDoneBtn: 'Ver qué hacer ahora →',
  doneBadge: '✓ Completado',
  doneBack: 'Volver a los módulos',
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir ↗',
  simOpen: '▶ Abrir la simulación aquí',
  simClose: '✕ Cerrar la simulación',
  simNewTab: 'Abrir en otra pestaña ↗',
  simDone: '✅ Simulación completada',
  simTodo: '○ Simulación pendiente',
  checkTag: 'Márcalos',
  mythTag: 'Mito',
  mythTap: 'Toca para ver la realidad →',
  mythReality: 'Realidad ✓',
  sortWrong: '✗ No exactamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2234';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Formación de curso · [2234]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: 'Para estudiantes de 8–9 años: en Minecraft pasan de jugadores a creadores, con su propio héroe y su casa, mecanismos de redstone y un robot Asistente que programan en Lua. Dos módulos: el contenido del curso y la parte técnica de las lecciones.',
  facts: [
    ['🧑‍💻', '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador. Cada módulo termina con una verificación corta.'],
    ['⚡', '<b>Práctica incluida.</b> Una simulación de Kodland Sparks para practicar cómo se publica una construcción de Minecraft y el problema más común.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de empezar:</b> haz primero la <b>formación principal del Nuevo Modelo Educativo (EM)</b>. Esta formación del curso va después y parte de lo que ya viste allí: el Backoffice y las Teacher Notes, el Classroom con el Follow Mode, el recorrido por Kodland Sparks y la calidad de la lección.' },
  { kind:'warn', e:'🔄', html:'<b>El contenido de las lecciones en el Backoffice se actualiza constantemente.</b> Con el feedback de estudiantes y tutores, las lecciones se mejoran todo el tiempo. No te preocupes: cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'El contenido del curso',
    desc:'Los datos generales del curso, lo que logra el estudiante y las primeras 4 lecciones del Módulo 1.',
    obj:'Prepárate para dar las primeras lecciones de Minecraft CraftForge Beginner. En ellas, estudiantes de 8–9 años crean su propio héroe y su casa, construyen su primer mecanismo de redstone, y arman y programan un robot Asistente.',
    offer:[['🧱','Conocer los datos generales del curso y lo que logra el estudiante.'],['📖','Saber qué pasa en cada una de las primeras 4 lecciones.'],['🤖','Entender cómo se usan el robot Asistente y Sparks AI.'],['📘','Revisar las lecciones y sus Teacher Notes en el Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'El curso', blocks:[
        { t:'meta', items:[['🧒','Edad','8–9 años'],['⏱️','Lección','60 min'],['📚','Programa','40 lecciones · 10 módulos'],['🌙','Lenguaje','Lua']] },
        { t:'trio', items:[
          ['🎬','Primero el resultado','Cada lección empieza mostrando el resultado final y diciendo qué van a aprender los estudiantes. Después muestras el camino en tu pantalla y los guías paso a paso.'],
          ['🛠️','De jugador a creador','En un juego, las reglas las hizo otra persona. Aquí el estudiante construye, programa un robot y crea mecanismos, y muestra el resultado a los demás.'],
          ['🔍','El error es parte del proceso','Cuando algo no funciona: <i>¿Qué veo? ¿Por qué pasa? ¿Qué voy a probar? ¿Funcionó?</i> Algunas lecciones incluyen un error planificado en tu pantalla para que los estudiantes encuentren la causa por su cuenta.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Los estudiantes publican sus trabajos en <b>Kodland Sparks</b>, su portafolio, desde la Lección 1. <b>Sparks AI</b> sugiere ideas y da feedback, pero el estudiante decide qué tomar.' }
      ]},
      { id:'goals', e:'🎓', title:'Qué logra el estudiante', blocks:[
        { t:'p', html:'Al terminar el curso, el estudiante tiene estos logros:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea proyectos','Más de nueve proyectos en su portafolio de Kodland Sparks, y un proyecto final: su propio territorio, donde construcciones, mecanismos y programas funcionan juntos.'],
          ['🤖','Programa un robot en Lua','Comandos, argumentos, variables, ciclos, condiciones y sus propias funciones. El robot construye, excava, esquiva obstáculos y cumple misiones, y el estudiante aprende a dividir una tarea grande en pasos.'],
          ['⚡','Construye mecanismos y lógica','La redstone es la «electricidad» de Minecraft: palancas, cables, lámparas, puertas, pistones y trampas. El estudiante aprende la lógica «si… entonces» y ve el resultado al instante.'],
          ['🏰','Crea construcciones y juegos','Construye cuidando la forma, el color y la luz, y crea un minijuego con sus propias reglas para que lo jueguen sus compañeros.'],
          ['💬','Habla de su trabajo con seguridad','Explica cómo funciona todo al final de cada lección y presenta su proyecto final al grupo.'],
          ['🧠','Habilidades para la vida','Creatividad, trabajo en equipo (jugar los juegos de los demás y dar feedback), comunicación y pensamiento crítico: encontrar errores y usar con criterio las pistas de Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Las primeras 4 lecciones', blocks:[
        { t:'p', html:'El Módulo 1, <b>«Primer fuego. Mi mundo y mis primeros comandos»</b>, termina con el proyecto <b>«Mi héroe y mi casa»</b>. Las cuatro lecciones ocurren en el mismo mundo. Abre cada lección y revisa lo que necesitas saber, el resultado clave, tu rol y los puntos de atención.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'🔥', h:'Lección 1 — Primer fuego', p:'La primera lección del curso (7 tarjetas y la tarea). Los estudiantes abren el launcher, conocen al grupo, dibujan y publican su propia skin en Sparks, se la ponen para entrar al mundo y empiezan a construir su casa en una isla.',
            acc:[['📚','Lo que necesitas saber','<ul><li>La ruta: conexión y launcher → lo que viene → skin en Sparks mientras el launcher descarga el juego → ponerse la skin, entrar al mundo y teletransportarse a la isla → construir la casa → muestra de proyectos → cierre y tarea.</li><li>El <b>estudio de skins</b> se abre dentro de la misma tarjeta de la lección (botón <b>Expand</b> para pantalla completa). El estudiante no necesita salir de la lección para ir a Sparks.</li><li>En el launcher: <b>Create → Skins → su skin → Wear</b>, después <b>Play</b> con el código del mundo, y <b>F5</b> para verse.</li><li>Los estudiantes construyen en <b>modo creativo</b>: paredes, una entrada y un cartel con su apodo. El techo queda de tarea.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>🏁 La skin está <b>publicada en Sparks y su link está en la tarea</b>. Todos llegan a este punto hacia el minuto 29; esta tarjeta nunca se recorta.</li><li>Cada estudiante entra al mundo con su propia skin y llega a la isla.</li><li>La casa tiene paredes, una entrada y un cartel con el apodo.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Conoce al grupo: cuenta algo sobre ti, dale la palabra a todos y usa sus nombres durante toda la lección.</li><li>Di en voz alta el objetivo de la lección: «Hoy cada uno va a crear su propia skin, y el mundo lo va a reconocer».</li><li>Pregunta: «¿En qué se diferencia crear de solo jugar?». En un juego, las reglas las hizo otra persona; aquí tú creas y se lo muestras a los demás.</li><li><b>Error planificado, solo en tu pantalla:</b> entra al mundo sin presionar <b>Wear</b> → te ves igual que todos. Pregunta por qué y después corrígelo. Los estudiantes lo hacen bien desde el principio.</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>En la L1, es casi seguro que el launcher de alguien no va a iniciar. La skin se dibuja en el navegador, así que el estudiante sigue trabajando mientras tú resuelves el launcher durante el trabajo independiente.</li><li><b>Esc</b> no funciona dentro del estudio en pantalla completa: usa el botón <b>Collapse</b>, arriba.</li><li>Dibujar puede no terminar nunca: «Que sea tuya, no perfecta. Puedes terminarla en casa».</li><li>Revisa en el Backoffice que los links realmente llegaron, no solo que se mostraron en pantalla.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Un día antes, envía los links del launcher al chat del grupo y pide a los estudiantes que lo instalen con anticipación.</li><li>Haz tú todo el recorrido: skin en Sparks → publicar → Skins → Wear → entrar al mundo con el código → teletransportarse a la isla.</li><li>Código del mundo: <b>Welcome to CraftForge</b> (pestaña Play). El comando de teletransporte está en las Teacher Notes y en la tarjeta.</li><li>Tarea: terminar la casa, mostrar una captura de pantalla al asistente de IA integrado en la tarjeta de la tarea y entregar la captura con una oración.</li></ul>']] },
          { tab:'M1L2', e:'🗼', h:'Lección 2 — Guardián del bosque', p:'Los estudiantes aprenden su primer mecanismo: <b>luz con un paso</b>, una placa de presión sobre una lámpara de redstone. Construyen una torre de vigilancia con la lámpara arriba, la mejoran con una idea de Sparks y publican una captura en Sparks.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Una <b>placa de presión</b> funciona como la puerta automática de una tienda: la pisas y pasa algo. Solo una <b>lámpara de redstone</b> debajo de la placa da luz con un paso.</li><li>La lámpara y la placa están en el inventario creativo: <b>E</b> → buscar <b>lamp</b> / <b>pressure</b>.</li><li>La torre es del estudiante: cualquier material y altura, con una escalera para subir y una lámpara con placa arriba.</li><li>La captura se publica en Sparks como proyecto <b>Image</b>: <b>Publish project → Image → nombre → subir → Publish</b>. Después, <b>My projects → el proyecto publicado</b>: la dirección en la barra del navegador es el link que va en la tarea.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>La lámpara de cada estudiante se enciende con un paso.</li><li>🏁 Una torre con una lámpara que se activa al pisar y el <b>link a la captura publicada en la tarea</b> (hacia el minuto 30).</li><li>Una idea de Sparks agregada a la torre: el estudiante elige cuál.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Empieza revisando la tarea: 2–3 voluntarios muestran su casa durante 10 segundos, con un elogio concreto.</li><li><b>Error planificado:</b> en tu pantalla, una placa sobre tablas comunes; la pisas y no pasa nada. Pregunta «¿Por qué no se enciende?» antes de mostrar la forma correcta.</li><li>No dictes medidas, o todos van a construir la misma torre.</li><li>Recuérdales: «Sparks sugiere, tú decides: toma una idea».</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>La lámpara se apaga más o menos un segundo después de bajarse de la placa: es lo esperado.</li><li>Si buscan «plate», también aparecen las pecheras (chestplates): que busquen <b>pressure</b>.</li><li>«Colorear el bosque» es opcional: acórtalo u omítelo si falta tiempo. La publicación nunca se recorta.</li><li>Un estudiante sin launcher funcionando sigue tu pantalla hoy y construye y publica la torre en casa, con la tarea.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>El mismo mundo de la Lección 1 (código <b>Welcome to CraftForge</b>). Antes de la lección, recorre tú el camino desde el punto de teletransporte hasta el bosque.</li><li>Capturas: <b>Win + Print Screen</b> (Imágenes → Capturas de pantalla) o <b>Cmd + Shift + 4</b> (escritorio). <b>F5</b> para verse, <b>F1</b> para ocultar la interfaz.</li><li>Tarea: luz con un paso en la casa del estudiante, publicada en Sparks, con el link en la tarea.</li></ul>']] },
          { tab:'M1L3', e:'🤖', h:'Lección 3 — Tecnología antigua', p:'Los estudiantes siguen un camino de luz por una estructura oscura hasta un castillo antiguo, arman su propio <b>robot Asistente</b> en tres crafteos y le escriben sus primeros comandos reales. Después le piden a Sparks una idea de construcción y le devuelven la vida al lugar.',
            acc:[['📚','Lo que necesitas saber','<ul><li>El robot (una <i>mining turtle</i>) se arma en tres crafteos, en orden: <b>cerebro</b> (computadora: 7 de piedra, redstone en el centro, un panel de vidrio abajo) → <b>cuerpo</b> (tortuga: 7 lingotes de hierro, la computadora en el centro, un cofre abajo) → <b>pico</b> (tortuga + un pico de diamante <b>nuevo y sin encantar</b>).</li><li>Con clic derecho sobre el robot se abre su consola. Los programas listos funcionan directamente: <b>refuel</b> (con carbón) y <b>tunnel 3</b>.</li><li>Para el código propio, primero hace falta el <b>modo Lua</b>: escribir <b>lua</b> + Enter, y después <code>turtle.dig()</code>, <code>turtle.forward()</code>, <code>turtle.turnRight()</code>. Se sale con <code>exit()</code>.</li><li>Sin el modo Lua, la consola responde <b>«No such program»</b>: no está rota.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Cada estudiante tiene un robot con pico que ejecuta sus comandos.</li><li>El estudiante cambió un comando y lo volvió a ejecutar al menos una vez (el ciclo del programador: escribir → observar → cambiar → volver a ejecutar).</li><li>Una construcción junto al castillo, basada en una idea de Sparks, con luz y un cartel.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Muestra el bloque de presentación «Aquí es adonde vamos» para que los estudiantes vean el resultado antes de empezar.</li><li>Guía el camino con una demostración en tu pantalla; no reveles el castillo antes de tiempo: es el momento sorpresa.</li><li>Muestra cada crafteo en tu pantalla y espera a que todos lo repitan antes del siguiente.</li><li>Mantén la programación ligera, sin teoría: «Escribo un comando y el robot obedece».</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>Crafteos en el orden equivocado: sin cerebro no hay cuerpo.</li><li>Un pico gastado o encantado no funciona: dale uno nuevo.</li><li>El robot no avanza → necesita carbón y <b>refuel</b>.</li><li>Sparks se usa una vez, antes de construir. Si no está disponible, dales tú dos ideas.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Las coordenadas de teletransporte, los esquemas de crafteo y los comandos están en las Teacher Notes de cada tarjeta.</li><li>El desfile: voluntarios muestran su robot en acción; los demás toman una captura y completan el campo de respuesta.</li><li>Tarea: llevar el robot a la isla, darle una tarea y entregar una captura.</li></ul>']] },
          { tab:'M1L4', e:'🪄', h:'Lección 4 — La arena mágica', p:'La última lección del primer mundo. El robot aprende a <b>construir con comandos</b>: subir, girar y colocar bloques. Después del descanso, cada estudiante hace su propia construcción, le muestra una foto a Sparks para obtener una idea y la presenta.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Comandos nuevos (en modo Lua): <code>turtle.up()</code> / <code>turtle.down()</code>, <code>turtle.turnLeft()</code>, <code>turtle.forward()</code>, <code>turtle.placeDown()</code>.</li><li><b>Combustible:</b> bloques en la ranura 1, carbón en la ranura 2, y después <code>turtle.select(2)</code> → <code>turtle.refuel()</code> → <code>turtle.select(1)</code>.</li><li>Para construir hacia arriba: primero <code>up()</code>, después <code>placeDown()</code>; el robot sube y deja un bloque debajo.</li><li>Antes del descanso solo se practica (un par de bloques hacia arriba, un giro); la construcción propia del estudiante viene después.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>El estudiante hizo que el robot se moviera y colocara al menos un bloque.</li><li>Una construcción propia en la arena, con luz y un cartel con el nombre del autor, y una idea de Sparks.</li><li>Presentada en el desfile: captura + «Mi robot sabe… En la arena construí…».</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Muestra tú la técnica principal: ranuras → refuel → modo Lua → <code>up()</code> y <code>placeDown()</code> alternados.</li><li>No dictes la forma: en el desfile tienen que verse construcciones distintas.</li><li>Cierra el primer mundo con calidez: vienen mundos y desafíos nuevos.</li></ul>'],
                 ['📌','Puntos de atención','<ul><li>«No such program» → falta el modo Lua.</li><li>No se mueve → no recargó combustible. No coloca bloques → los bloques no están en la ranura 1, o <code>placeDown()</code> va antes de <code>up()</code>.</li><li>El consejo de Sparks debe animar incluso una construcción pequeña; una consulta por lección.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Guía la ruta (pantano → casa → arena) con una demostración en tu pantalla.</li><li>Tarea: el robot hace una pequeña construcción en la isla del estudiante; entregar una captura.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de cada lección tiene el plan completo: resumen, resultado clave, los tiempos de cada tarjeta, tu rol y los riesgos. La Lección 1 también tiene un video de preparación. <b>Lee todas las Teacher Notes antes de la clase.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Repasa las lecciones en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y lee las cuatro lecciones a tu ritmo: las tarjetas de actividad y las Teacher Notes están todas allí. No hay tiempo límite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2234', e:'📘', title:'Abrir el curso en el Backoffice', small:'[2234] Minecraft CraftForge Beginner — las lecciones y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se irá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'La parte técnica de las lecciones',
    desc:'El Kodland Launcher, un buen inicio, la publicación en Sparks y los problemas más comunes.',
    obj:'Conoce lo que hace que una lección de Minecraft CraftForge funcione técnicamente: el Kodland Launcher, la revisión del launcher antes del contenido, los últimos minutos para publicar y mostrar los trabajos, dónde encuentran los estudiantes el link de su proyecto y las soluciones a los problemas más comunes.',
    needs:['mcPublish'],
    offer:[['🟩','Descargar, instalar e iniciar sesión en el Kodland Launcher.'],['🚀','Hacer la revisión del launcher antes del contenido y empezar por el resultado.'],['📤','Lograr que cada estudiante publique en Sparks y envíe el link.'],['🛠️','Resolver los problemas más comunes del launcher y de Minecraft.']],
    sections:[
      { id:'focus', e:'🎯', title:'Los 3 puntos que hacen funcionar una lección', blocks:[
        { t:'p', html:'Estos son los puntos de foco que definió el equipo de producto para los cursos de Minecraft. Abre cada uno:' },
        { t:'acc', items:[
          ['🎬','Primero el resultado, y por qué crear es distinto de jugar','<p>En los primeros minutos, <b>muestra el resultado final</b> y di qué van a aprender hoy los estudiantes.</p><ul><li>Usa la tarjeta de presentación: «Miren lo que van a tener en una hora: su propio crafter y su propia casa en la isla».</li><li>Explica en qué se <b>diferencia crear un proyecto de solo jugar</b>: en un juego, las reglas las hizo otra persona; aquí el estudiante crea y se lo muestra a los demás.</li><li>Pregunta a uno o dos estudiantes: «¿En qué crees que se diferencia crear de solo jugar?».</li></ul>'],
          ['🟩','La revisión del inicio de sesión y del launcher va antes del contenido','<p>Haz la revisión de la conexión y del launcher <b>antes</b> de la parte de contenido, así el juego se descarga mientras conoces al grupo.</p><ul><li>Conexión: un minuto, con cámara, micrófono y «¡Hola!».</li><li>Launcher: 2–3 minutos. Envía los links, muestra el inicio de sesión en tu pantalla y pide un «+» en el chat cuando aparezca la barra verde.</li><li>No esperes a que termine la descarga ni detengas al grupo por uno o dos «−»: vuelve con ellos durante el trabajo independiente.</li><li>Desde la Lección 2: «Abran el launcher e inicien su mundo; que cargue mientras conversamos».</li></ul>'],
          ['⏱️','Protege los últimos 7–10 minutos','<p>Los últimos <b>7–10 minutos</b> son para publicar, mostrar los trabajos y dar feedback, y no se ceden a la construcción.</p><ul><li>Usa cortes firmes: aviso de dos minutos, después «Alto, manos fuera del teclado. ¡Hora de mostrar!», y nombra de inmediato al primer estudiante.</li><li>3 participantes muestran su trabajo; el grupo da feedback concreto: nombre, qué funcionó, un consejo.</li><li>Termina con el cierre, la reflexión, la próxima lección y la tarea: nunca se recortan.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'El Kodland Launcher', blocks:[
        { t:'p', html:'Los estudiantes abren Minecraft con el <b>Kodland Launcher</b>: descarga el juego, abre el mundo del curso y es donde crean sus skins y se las ponen. Necesitas tenerlo instalado y listo en tu computadora antes de tu primera clase.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Tus credenciales:</b> para descargar el launcher e iniciar sesión, usas las <b>mismas credenciales de Kodland Sparks</b>. Te las da el <b>departamento de Operaciones o de Enseñanza</b>. Los estudiantes inician sesión con su propia cuenta de Kodland: no necesitan una nueva.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Página de descarga y guía oficial', small:'portfolio.kodland.org/launcher/download — Windows y Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Descarga el instalador.</li><li>Abre el archivo descargado.</li><li>En la pantalla azul de advertencia, haz clic en <b>More info → Run anyway</b> y sigue el instalador.</li></ol>'],
          ['🍎','macOS 13 o posterior','<ol><li>Descarga el archivo para tu procesador (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Abre el archivo descargado y arrastra <b>Kodland Launcher</b> a <b>Applications</b>. No lo abras desde esa ventana.</li><li>Abre <b>Terminal</b>, pega la línea de abajo y presiona Return. Es normal que no aparezca ningún mensaje.</li><li>Abre el launcher desde <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Iniciar sesión','Haz clic en <b>Sign in</b>. Se abre una página en el navegador: haz clic en <b>Sign in with Kodland</b>, un solo botón y sin contraseña. Si el navegador no se abre, usa el link debajo del botón para obtener un código corto (válido por cinco minutos).'],
          ['Descargar el juego','El launcher descarga el juego en varios pasos (unos 550 MB; necesitas alrededor de 1,8 GB de espacio libre). Déjalo trabajar.'],
          ['Jugar','Cuando indique que todo está listo, presiona <b>Play</b>. El primer inicio puede tardar hasta un minuto. El código del mundo va en la pestaña <b>Play</b>.'],
          ['Actualizaciones','Si el launcher no se actualiza, instala la última versión desde la página de descarga encima de la anterior. Los mundos y las skins se conservan.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Links de descarga directa (los de la tarjeta de la lección)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Cuando el launcher de un estudiante no funciona', blocks:[
        { t:'p', html:'En la Lección 1, es casi seguro que el launcher de alguien no va a iniciar. No pasa nada: <b>primero dale una tarea al resto</b> y después conéctate con el estudiante. Pídele que comparta pantalla y guíalo con la voz: «¿Qué ves ahora? Haz clic en este botón». Si no se resuelve en un par de minutos: «Por ahora sigue mi pantalla, ya vuelvo contigo».' },
        { t:'acc', open:false, items:[
          ['📥','El archivo no se descarga','Vuelve a enviar al chat el link de la tarjeta y revisa que el estudiante haya elegido el archivo para su sistema.'],
          ['🍎','La Mac no abre el launcher','Ejecuta la línea de Terminal de la primera tarjeta y vuelve a abrir el launcher desde <b>Applications</b>.'],
          ['🪟','Windows pregunta si abrir el archivo','<b>More info → Run anyway</b>.'],
          ['🔑','El estudiante no puede iniciar sesión','Es el mismo usuario de Kodland que usa en las clases, sin cuenta nueva. La ventana de inicio de sesión se abre en el navegador y muchas veces queda escondida detrás de otras ventanas.'],
          ['⏳','El juego tarda mucho en cargar o la descarga se detiene','La primera descarga es larga, es normal. Si la barra se detiene: revisa el internet, cierra el launcher y vuelve a abrirlo; la descarga continúa.'],
          ['🖌️','El launcher nunca funcionó','En la Lección 1, el estudiante igual dibuja y publica la skin en Sparks (en el navegador), así que obtiene el resultado principal. En el mundo, sigue tu pantalla. Después de la clase, ayúdalo a iniciar el launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Si varios estudiantes tienen el mismo error, muestra la solución a todos una sola vez.' }
      ]},
      { id:'req', e:'💻', title:'Requisitos de la computadora', blocks:[
        { t:'p', html:'Esto es lo que necesita el estudiante para Minecraft CraftForge. Es útil conocerlo cuando un estudiante tiene problemas para instalar o abrir el juego:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computadora y sistema','De escritorio o laptop con <b>Windows 10/11 (64 bits)</b> o <b>macOS 13 o posterior</b>. En Mac: solo Apple Silicon (M1 o más reciente).'],
          ['🧠','Memoria y procesador','<b>8 GB de RAM</b> con tarjeta gráfica dedicada, o <b>12 GB</b> con gráficos integrados. Un procesador de <b>4 núcleos</b>.'],
          ['🎮','Gráficos y disco','Una tarjeta gráfica compatible con <b>Vulkan 1.3</b> y con <b>2 GB</b> de memoria de video. <b>5 GB</b> de espacio libre en disco.'],
          ['🎧','Conexión y equipo','Internet estable que soporte videollamadas. Mouse de dos botones, teclado, auriculares con micrófono y cámara.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publicar en Kodland Sparks', blocks:[
        { t:'p', html:'Publicar es el resultado principal de muchas lecciones: el estudiante publica su trabajo en Sparks y pega el link en la tarjeta de la lección. En el Módulo 1 hay dos formas:' },
        { t:'cards', cols:2, items:[
          ['🎨','La skin (Lección 1)','En la Lección 1, el estudio de skins está dentro de la tarjeta: <b>Publish</b> → ponerle nombre a la skin → <b>Publish</b> otra vez. También se puede publicar un archivo de skin desde Sparks: <b>Publish project → Minecraft skin</b> → nombre → <b>Model</b> (Steve o Alex) → <b>Skin file</b> (PNG de 64×64) → <b>Publish</b>.'],
          ['🖼️','Una construcción (Lección 2 y tareas)','Captura de la construcción (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → nombre → <b>Drawing</b>: subir la captura → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Dónde está el link','El link es la dirección de la página del proyecto. El estudiante va a <b>My projects</b> en Sparks, abre el <b>proyecto publicado</b> y copia el link de la <b>barra de direcciones del navegador</b>: <code>portfolio.kodland.org/apodo/…</code>.'],
          ['Pegarlo en la tarjeta de la lección','Ese link se pega en la tarjeta de la lección en la plataforma Kodland (por ejemplo, «Link a mi skin en Kodland Sparks»).'],
          ['Elegir la visibilidad','<b>Public</b> aparece en el feed y en el portafolio. <b>Friends only</b> es para amigos y profesores. <b>Only me</b> deja el proyecto privado: nadie más puede abrir el link, ni siquiera tú.'],
          ['Dos pasos distintos','Publicar en Sparks y enviar el link en la plataforma Kodland son <b>dos pasos distintos</b>. Revisa en el Backoffice que los links realmente llegaron.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulación', title:'Publicar una skin y una construcción en Kodland Sparks', text:'Una réplica de Kodland Sparks y de la tarjeta de la lección: como un estudiante, publicas una skin, encuentras su link en My projects, lo pegas en la tarjeta de la plataforma, publicas la captura de una construcción como proyecto Image y resuelves un link que no abre. Toma unos 5 minutos. La verificación del módulo se desbloquea al terminar.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Cuando algo sale mal', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','La skin no aparece en «Skins»','Revisa que la skin esté publicada en Sparks y que el launcher use la misma cuenta. Cierra y vuelve a abrir la sección <b>Skins</b>.'],
          ['👕','El estudiante presionó «Wear» con el juego abierto','El launcher avisa que la skin aparecerá cuando el juego se vuelva a iniciar: hay que salir y volver a entrar al mundo.'],
          ['📍','El teletransporte no funcionó','Pídele al estudiante que comparta pantalla: casi siempre el comando está incompleto o falta el signo menos antes del último número.'],
          ['⛶','El estudiante no puede salir del estudio en pantalla completa','Haz clic en <b>Collapse</b>, arriba en el estudio: <b>Esc</b> no funciona dentro de él.'],
          ['💡','La lámpara no se enciende','Revisa que sea una <b>lámpara de redstone</b> (no otro bloque de luz) y que la placa esté justo encima.'],
          ['🤖','El robot responde «No such program» o no se mueve','«No such program» → primero hay que escribir <b>lua</b> + Enter. No se mueve → carbón y <b>refuel</b> (en la Lección 4: <code>select(2)</code> → <code>refuel()</code> → <code>select(1)</code>). No coloca bloques → bloques en la ranura 1, y <code>up()</code> antes de <code>placeDown()</code>.'],
          ['🔒','El link del estudiante no abre','Seguramente guardó el proyecto como <b>Only me</b> (aparece la etiqueta <b>Private project</b>). Pídele al estudiante: <b>My projects → abrir el proyecto → Edit → Public → Publish</b>. El link sigue siendo el mismo.'],
          ['🖼️','El estudiante no encuentra la captura','En Windows está en <b>Imágenes → Capturas de pantalla</b>; en Mac, en el escritorio. Si no la encuentra ahora, el estudiante la adjunta después en casa.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada clase', blocks:[
        { t:'check', title:'✅ Mi checklist técnico', groups:[
          { h:'☑️ Antes de la clase', items:['Leí todas las Teacher Notes de la lección y vi el video de preparación.','Mi launcher está instalado y con la sesión iniciada, y yo mismo hice el recorrido de la lección.','Antes de la Lección 1, envié los links del launcher al chat del grupo.'] },
          { h:'🎬 Durante la clase', items:['Hice la revisión de la conexión y del launcher antes del contenido.','Mostré el resultado final y el objetivo de la lección en los primeros minutos.'] },
          { h:'📤 Al final de la clase', items:['Protegí los últimos 7–10 minutos para publicar, mostrar los trabajos y dar feedback.','Todos enviaron el link del proyecto publicado en la tarjeta de la lección.','Abrí algunos links para comprobar que funcionan.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'¿Para quién es Minecraft CraftForge Beginner y cuánto dura cada lección?',
      o:['Para estudiantes de 8–9 años, con lecciones grupales de 60 minutos.','Para estudiantes de 10–12 años, con lecciones de 90 minutos.','Para estudiantes de 13–17 años, con lecciones de 90 minutos.'],
      a:0, e:'Beginner es para estudiantes de 8–9 años: 40 lecciones grupales de 60 minutos.' },
    { q:'¿En qué lenguaje de programación programan los estudiantes al robot Asistente?',
      o:['Python.','Bloques de Scratch.','Lua.'],
      a:2, e:'El robot Asistente se programa en Lua: comandos, argumentos, variables, ciclos, condiciones y funciones.' },
    { q:'¿Cómo empieza una lección?',
      o:['Con teoría sobre la redstone antes de que alguien entre al mundo.','Mostrando el resultado final, diciendo el objetivo y explicando en qué se diferencia crear de solo jugar.','Los estudiantes empiezan a construir de inmediato, sin ver un ejemplo.'],
      a:1, e:'Primero el resultado: los estudiantes ven adónde van y por qué crear es distinto de jugar.' },
    { q:'¿Con qué termina el curso el estudiante?',
      o:['Con un examen final escrito.','Con más de nueve proyectos en su portafolio de Kodland Sparks y un proyecto final, su propio territorio, presentado al grupo.','Solo con la casa de la Lección 1.'],
      a:1, e:'Más de nueve proyectos en el portafolio y un proyecto final donde construcciones, mecanismos y programas funcionan juntos.' },
    { q:'¿Qué papel tiene Sparks AI en las lecciones?',
      o:['Construye el proyecto por el estudiante.','Sugiere ideas y da feedback; el estudiante decide qué tomar.','Evalúa la lección en lugar del tutor.'],
      a:1, e:'Sparks sugiere y el estudiante decide; por lo general, una consulta por lección.' }
  ],
  m2:[
    { q:'¿Cuándo haces la revisión de la conexión y del launcher?',
      o:['Al inicio de la lección, antes del contenido, así el juego se descarga mientras conoces al grupo.','A mitad de la lección, cuando los estudiantes necesitan Minecraft.','Al final, para que no le quite tiempo a la lección.'],
      a:0, e:'Antes del contenido: el juego se descarga mientras conoces al grupo.' },
    { q:'¿Qué credenciales usas para descargar el Kodland Launcher e iniciar sesión?',
      o:['Una cuenta nueva que creas tú.','Las mismas credenciales de Kodland Sparks, que te da el departamento de Operaciones o de Enseñanza.','La cuenta de un estudiante.'],
      a:1, e:'El launcher usa tus credenciales de Kodland Sparks, que te da el departamento de Operaciones o de Enseñanza.' },
    { q:'¿Dónde encuentra el estudiante el link que tiene que enviar en la tarjeta de la lección?',
      o:['En un comentario debajo del proyecto.','En Sparks: My projects → abrir el proyecto publicado → copiar la dirección de la barra del navegador.','En el launcher, en la pestaña Play.'],
      a:1, e:'El link es la dirección de la página del proyecto: My projects → el proyecto publicado → la barra del navegador.' },
    { q:'¿Para qué son los últimos 7–10 minutos de la lección?',
      o:['Para construir un rato más.','Para publicar, mostrar los trabajos y dar feedback, además del cierre y la tarea.','Para jugar libremente.'],
      a:1, e:'Protege los últimos minutos: la publicación, la muestra con feedback y el cierre.' },
    { ctx:'En la Lección 1, el launcher de un estudiante no inicia y el resto del grupo está listo.',
      q:'¿Qué haces?',
      o:['Detienes la lección hasta que el launcher funcione.','Sigues con el grupo (la skin se dibuja en Sparks, en el navegador) y ayudas al estudiante durante el trabajo independiente.','Le dices al estudiante que lo intente de nuevo en casa y que se salte la lección.'],
      a:1, e:'Un problema no debe frenar al grupo: el estudiante igual dibuja y publica la skin, y tú resuelves el launcher durante el trabajo independiente.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: '¡Módulos completados!',
  html: `<p>¡Ya casi terminas! Vuelve a la página de la formación en el LMS, desde donde accediste a esta formación. El test DST está justo debajo de la formación.</p>
    <p>👉 <b>Debes hacer y aprobar el test DST para que la formación se considere completada.</b> Si no haces el DST, la formación quedará incompleta y puede vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada clase:</b> lee las Teacher Notes en el Backoffice y haz el recorrido de la lección en el launcher.'],
    ['🟩', '<b>Primeros minutos:</b> revisión de la conexión y del launcher, y después el resultado final y el objetivo.'],
    ['🔗', '<b>El link:</b> My projects → el proyecto publicado → la dirección en la barra del navegador.'],
    ['⏱️', '<b>Últimos 7–10 minutos:</b> publicar, mostrar los trabajos y dar feedback.']
  ]
};
