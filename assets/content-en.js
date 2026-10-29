/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2226 · ENG] · ENGLISH (base version)
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'en' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM course training',
  footer: 'kodland · New Educational Model · Course training',
  devLink: '🛠 Developer',
  logoSub: 'New Educational Model',
  navHome: '← Home',
  navBackModule: '← Back to the module',
  moduleN: 'Module {n}',
  badgeStart: 'Start →',
  badgeLocked: '🔒 Complete Module {n}',
  badgeDone: '✓ Completed · {score}%',
  progLabel: 'modules complete',
  progAllDone: 'Modules completed 🎉',
  eyebrow: '{course} · Module {n} of {total}',
  ctaTitle: 'Module check',
  ctaText: '{n} short questions. Score 70% or more to pass.',
  lockSim: '🔒 Complete the simulation above to unlock the check.',
  startCheck: 'Start the check →',
  retake: '🔁 Retake the check',
  qmeta: '{e} Module {n} check · Question {i} of {total}',
  fbRight: '✅ <b>Correct!</b> ',
  fbWrong: '❌ <b>Not quite.</b> ',
  nextQuestion: 'Next question →',
  seeResult: 'See my result →',
  passedTitle: 'You passed!',
  failTitle: 'Almost there',
  scoreLine: 'You answered <b>{score} of {n}</b> correctly.',
  failText: 'You need 70% or more. Review the module and try again — you can retake it as many times as you need.',
  nextUnlocked: '<b>Module {n} · {title}</b> is now unlocked.',
  goModule: 'Go to Module {n} →',
  allDoneText: 'You’ve completed both modules of this training.',
  seeNext: 'See what’s next →',
  reviewModule: '📖 Review the module',
  homeDoneTitle: 'Modules completed!',
  homeDoneText: 'One last step: the DST test on the LMS training page.',
  homeDoneBtn: 'See what to do next →',
  doneBadge: '✓ Done',
  doneBack: 'Back to the modules',
  lockedTitle: 'Still locked',
  lockedModule: 'Complete Module {n} first.',
  lockedStep: 'Complete the previous step to unlock this one.',
  ok: 'OK',
  linkOpen: 'Open ↗',
  projPlay: '▶ Open ↗',
  simOpen: '▶ Open the simulation here',
  simClose: '✕ Close the simulation',
  simNewTab: 'Open in a new tab ↗',
  simDone: '✅ Simulation completed',
  simTodo: '○ Simulation pending',
  checkTag: 'Tick them off',
  mythTag: 'Myth',
  mythTap: 'Tap to see the reality →',
  mythReality: 'Reality ✓',
  sortWrong: '✗ Not quite.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2226';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Course training · [2226]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: 'For students aged 8–9: in Minecraft, they go from player to creator — their own hero and home, redstone mechanisms, and an Assistant robot they program in Lua. Two modules: the course content and the technical side of the lessons.',
  facts: [
    ['🧑‍💻', '<b>At your own pace.</b> Your progress is saved in this browser. Each module ends with a short check.'],
    ['⚡', '<b>Practice included.</b> A simulation of Kodland Sparks to practise how a Minecraft build is published and the most common problem.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Before you start:</b> complete the <b>core New Educational Model (EM) training</b> first. This course training comes after it and builds on what you saw there: Backoffice and the Teacher Notes, Classroom with Follow Mode, the Kodland Sparks tour and lesson quality.' },
  { kind:'warn', e:'🔄', html:'<b>The lesson content in Backoffice is updated continuously.</b> Lessons are constantly improved with feedback from students and tutors. Don’t worry: whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'The course content',
    desc:'The general course details, what the student achieves, and the first lesson of Module 1.',
    obj:'Get ready to teach the first lesson of Minecraft CraftForge Beginner. In it, students aged 8–9 create their own skin, publish it in Kodland Sparks, enter the course world wearing it and start building their own house.',
    offer:[['🧱','Know the general course details and what the student achieves.'],['📖','Know what happens in the first lesson.'],['🤖','Understand how the Assistant robot and Sparks AI are used.'],['📘','Review the first lesson and its Teacher Notes in Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'The course', blocks:[
        { t:'meta', items:[['🧒','Age','8–9 years'],['⏱️','Lesson','60 min'],['📚','Programme','40 lessons · 10 modules'],['🌙','Language','Lua']] },
        { t:'trio', items:[
          ['🎬','The result first','Every lesson opens by showing the finished result and saying what students will learn. Then you show the path on your screen and guide them one step at a time.'],
          ['🛠️','From player to creator','In a game, someone else made the rules. Here the student builds, programs a robot and makes mechanisms — and shows the result to others.'],
          ['🔍','Mistakes are part of the process','When something doesn’t work: <i>What do I see? Why is that? What will I try? Did it work?</i> Some lessons include a planned mistake on your screen so students find the cause themselves.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Students publish their work in <b>Kodland Sparks</b>, their portfolio, starting from Lesson 1. <b>Sparks AI</b> suggests ideas and feedback, but the student decides what to take.' }
      ]},
      { id:'goals', e:'🎓', title:'What the student achieves', blocks:[
        { t:'p', html:'By the end of the course, the student will reach these achievements:' },
        { t:'cards', cols:2, items:[
          ['🧱','Creates projects','More than nine projects in their Kodland Sparks portfolio, plus a graduation project: their own land, where builds, mechanisms and programs work together.'],
          ['🤖','Programs a robot in Lua','Commands, arguments, variables, loops, conditions and their own functions. The robot builds, digs, avoids obstacles and completes missions — and the student learns to break a big task into steps.'],
          ['⚡','Builds mechanisms and logic','Redstone is Minecraft’s “electricity”: levers, wires, lamps, doors, pistons and traps. The student learns “if–then” logic and sees the result straight away.'],
          ['🏰','Creates builds and games','Builds with attention to shape, colour and light, and a mini-game with its own rules that classmates play.'],
          ['💬','Talks about their work with confidence','Explains how everything works at the end of every lesson and presents the graduation project to the group.'],
          ['🧠','Skills for life','Creativity, teamwork (playing each other’s games and giving feedback), communication, and critical thinking: finding bugs and using hints from Sparks AI wisely.']
        ]}
      ]},
      { id:'les', e:'📖', title:'The first lesson', blocks:[
        { t:'p', html:'Module 1, <b>“First Fire. My World and First Commands”</b>, ends with the project <b>“My hero and my home”</b>. Open the first lesson and read what you need to know, the key result, your role and the points to watch out for.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'🔥', h:'Lesson 1 — First Fire', p:'The first lesson of the course (7 cards and homework). Students launch the launcher, meet the group, draw and publish their own skin in Sparks, wear it to enter the world, and start building their own house on an island.',
            acc:[['📚','What you need to know','<ul><li>The route: connection and launcher → what’s ahead → skin in Sparks while the launcher downloads the game → wear the skin, enter the world and teleport to the island → build your house → project showcase → wrap-up and homework.</li><li>The <b>skin studio</b> opens right inside the lesson card (button <b>Expand</b> for full screen). The student does not need to leave the lesson to go to Sparks.</li><li>In the launcher: <b>Create → Skins → own skin → Wear</b>, then <b>Play</b> with the world code, and <b>F5</b> to see yourself.</li><li>Students build in <b>creative mode</b>: walls, an entrance and a sign with their nickname. The roof is homework.</li></ul>'],
                 ['🎯','Key result','<ul><li>🏁 The skin is <b>published in Sparks and its link is in the task</b>. Everyone reaches it by about minute 29; this card is never shortened.</li><li>Each student enters the world wearing their own skin and stands on the island.</li><li>The house has walls, an entrance and a sign with the nickname.</li></ul>'],
                 ['🧑‍🏫','Your role','<ul><li>Get to know the group: talk about yourself, give everyone the floor and use names all lesson.</li><li>Say the lesson goal out loud: “Today everyone will create their own skin, and the world will recognise them.”</li><li>Ask: “How is creating different from just playing?” — in a game someone else made the rules; here you create and show others.</li><li><b>Planned mistake, only on your screen:</b> enter the world without pressing <b>Wear</b> → you look like everyone else. Ask why, then fix it. Students do it right straight away.</li></ul>'],
                 ['📌','Watch out','<ul><li>In L1 someone’s launcher almost certainly won’t start. The skin is drawn in the browser, so the student keeps working while you fix the launcher during independent work.</li><li><b>Esc</b> doesn’t work inside the full-screen studio: use the <b>Collapse</b> button at the top.</li><li>Drawing can go on forever: “Your own, not perfect. You can finish it at home.”</li><li>Check in Backoffice that the links really arrived, not only that they were shown on screen.</li></ul>'],
                 ['⚙️','Technical aspects','<ul><li>A day before, send the launcher links to the group chat and ask students to install it in advance.</li><li>Go through the whole path yourself: skin in Sparks → publish → Skins → Wear → enter the world with the code → teleport to the island.</li><li>World code: <b>Welcome to CraftForge</b> (Play tab). The teleport command is in the Teacher Notes and on the card.</li><li>Homework: finish the house, show a screenshot to the AI assistant built into the homework card, and submit the screenshot with one sentence.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'The first Teacher Note of each lesson has the full plan: summary, key result, the timing of each card, your role and the risks. Lesson 1 also has a preparation video. <b>Read all the Teacher Notes before the lesson.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Review the first lesson in Backoffice', blocks:[
        { t:'p', html:'Before the check, open the course in Backoffice and read through the first lesson at your own pace — the activity cards and the Teacher Notes are all there. Nothing is timed.' },
        { t:'link', href:'https://bo.kodland.org/courses/2226', e:'📘', title:'Open the course in Backoffice', small:'[2226] Minecraft CraftForge Beginner — the lessons and their Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'The lesson content in Backoffice will keep being updated with feedback from students and tutors. Whenever something changes, you’ll be notified in advance so you can prepare the lesson.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'The technical side of the lessons',
    desc:'The Kodland Launcher, a strong start, publishing in Sparks and the most common problems.',
    obj:'Learn what makes a Minecraft CraftForge lesson work technically: the Kodland Launcher, the launcher check before the content, the last minutes for publishing and showing work, where students find the link to their project, and the fixes for the most common problems.',
    needs:['mcPublish'],
    offer:[['🟩','Download, install and sign in to the Kodland Launcher.'],['🚀','Run the launcher check before the content, and start with the result.'],['📤','Make sure every student publishes in Sparks and sends the link.'],['🛠️','Solve the most common launcher and Minecraft problems.']],
    sections:[
      { id:'focus', e:'🎯', title:'The 3 points that make a lesson work', blocks:[
        { t:'p', html:'These are the focus areas set by the product team for the Minecraft courses. Open each one:' },
        { t:'acc', items:[
          ['🎬','Show the result first — and why creating is different from playing','<p>In the first minutes, <b>show the finished result</b> and say what students will learn today.</p><ul><li>Use the briefing card: “Look what you’ll have in an hour: your own crafter and your own house on the island.”</li><li>Explain how building a project <b>differs from just playing</b>: in a game, someone else made the rules; here the student creates and shows it to others.</li><li>Ask one or two students: “How do you think creating is different from just playing?”</li></ul>'],
          ['🟩','The login and launcher check comes before the content','<p>Run the connection and launcher check <b>before</b> the content part, so the game downloads while you get to know the group.</p><ul><li>Connection: one minute — camera, microphone, “Hello!”.</li><li>Launcher: 2–3 minutes — send the links, show the sign-in on your screen, ask for a “+” in the chat when the green bar appears.</li><li>Don’t wait for the download to finish, and don’t hold the group for one or two “−”: come back to them during independent work.</li><li>From Lesson 2 on: “Open the launcher and start your world — let it load while we talk.”</li></ul>'],
          ['⏱️','Protect the last 7–10 minutes','<p>The last <b>7–10 minutes</b> are for publishing, showing work and feedback — and they are not given away to building.</p><ul><li>Use hard stops: two-minute warning, then “Stop, hands off the keyboard. Showcase time!”, and name the first student straight away.</li><li>3 participants show their work; the group gives specific feedback: name, what worked, one tip.</li><li>Finish with the wrap-up, reflection, next lesson and homework — these are never shortened.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'The Kodland Launcher', blocks:[
        { t:'p', html:'Students open Minecraft through the <b>Kodland Launcher</b>: it downloads the game, opens the course world, and is where they create skins and wear them. You need it installed and ready on your computer before your first lesson.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Your credentials:</b> to download and sign in to the launcher, you use the <b>same credentials as Kodland Sparks</b>. They are provided to you by the <b>Operations or Teaching department</b>. Students sign in with their own Kodland account — they don’t need a new one.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Download page and official guide', small:'portfolio.kodland.org/launcher/download — Windows and Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Download the installer.</li><li>Open the downloaded file.</li><li>On the blue warning screen, click <b>More info → Run anyway</b>, then follow the installer.</li></ol>'],
          ['🍎','macOS 13 or later','<ol><li>Download the file for your processor (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Open the downloaded file and drag <b>Kodland Launcher</b> into <b>Applications</b>. Don’t open it from that window.</li><li>Open <b>Terminal</b>, paste the line below and press Return. No output is normal.</li><li>Open the launcher from <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Sign in','Click <b>Sign in</b>. A browser page opens: click <b>Sign in with Kodland</b> — one button, no password. If the browser doesn’t open, use the link under the button to get a short code (valid for five minutes).'],
          ['Download the game','The launcher downloads the game in several steps (about 550 MB; you need about 1.8 GB of free space). Leave it running.'],
          ['Play','When it says all done, press <b>Play</b>. The first launch can take up to a minute. The world code goes on the <b>Play</b> tab.'],
          ['Updates','If the launcher doesn’t update, install the latest version from the download page over the old one. Worlds and skins stay in place.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Direct download links (the ones on the lesson card)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'When a student’s launcher doesn’t work', blocks:[
        { t:'p', html:'In Lesson 1, someone’s launcher will almost certainly not start. That’s fine: <b>first give the others a task</b>, then connect with the student. Ask them to share their screen and guide them by voice: “What do you see now? Click this button.” If it isn’t solved in a couple of minutes: “Follow my screen for now, I’ll be back soon.”' },
        { t:'acc', open:false, items:[
          ['📥','The file doesn’t download','Send the link from the card to the chat again and check that the student chose the file for their system.'],
          ['🍎','The Mac doesn’t open the launcher','Run the Terminal line from the first card and open the launcher again from <b>Applications</b>.'],
          ['🪟','Windows asks whether to open the file','<b>More info → Run anyway</b>.'],
          ['🔑','The student can’t sign in','The same Kodland login as for the lessons — no new account. The sign-in window opens in the browser and often hides behind other windows.'],
          ['⏳','The game loads for a long time or the download stops','The first download is long, that’s normal. If the bar stops: check the internet, close the launcher and open it again — the download continues.'],
          ['🖌️','The launcher never worked','In Lesson 1 the student still draws and publishes the skin in Sparks (in the browser), so they get the main result. In the world they follow your screen. After the lesson, help them with the launch.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'If several students have the same error, show the solution to everyone once.' }
      ]},
      { id:'req', e:'💻', title:'Computer requirements', blocks:[
        { t:'p', html:'This is what a student needs for Minecraft CraftForge. It’s useful when a student has problems installing or running the game:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computer and system','Desktop or laptop with <b>Windows 10/11 (64-bit)</b> or <b>macOS 13 or later</b>. Mac: Apple Silicon only (M1 or newer).'],
          ['🧠','Memory and processor','<b>8 GB of RAM</b> with a dedicated graphics card, or <b>12 GB</b> with integrated graphics. A <b>4-core</b> processor.'],
          ['🎮','Graphics and disk','A graphics card with <b>Vulkan 1.3</b> support and <b>2 GB</b> of video memory. <b>5 GB</b> of free disk space.'],
          ['🎧','Connection and equipment','A stable internet connection that can handle video calls. A two-button mouse, keyboard, headset with a microphone, and camera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publishing in Kodland Sparks', blocks:[
        { t:'p', html:'Publishing is the main result of many lessons: the student publishes the work in Sparks and pastes the link into the lesson card. There are two ways in Module 1:' },
        { t:'cards', cols:2, items:[
          ['🎨','The skin (Lesson 1)','In Lesson 1 the skin studio is inside the card: <b>Publish</b> → give the skin a name → <b>Publish</b> again. A skin file can also be published from Sparks: <b>Publish project → Minecraft skin</b> → name → <b>Model</b> (Steve or Alex) → <b>Skin file</b> (64×64 PNG) → <b>Publish</b>.'],
          ['🖼️','A build','Screenshot of the build (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → name → <b>Drawing</b>: upload the screenshot → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Where the link is','The link is the address of the project page. The student goes to <b>My projects</b> in Sparks, opens the <b>published project</b> and copies the link from the <b>browser’s address bar</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Paste it in the lesson card','That link is pasted into the lesson card on the Kodland platform (for example, “Link to my Skin in Kodland Sparks”).'],
          ['Choose the visibility','<b>Public</b> appears in the feed and on the portfolio. <b>Friends only</b> is for friends and teachers. <b>Only me</b> makes the project private — nobody else can open the link, not even you.'],
          ['Two different steps','Publishing in Sparks and sending the link on the Kodland platform are <b>two different steps</b>. Check in Backoffice that the links really arrived.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulation', title:'Publish a skin and a build in Kodland Sparks', text:'A replica of Kodland Sparks and the lesson card: as a student, you publish a skin, find its link in My projects, paste it into the card on the platform, publish a build screenshot as an Image project, and fix a link that doesn’t open. It takes about 5 minutes. The module check unlocks when you finish.' }
      ]},
      { id:'trouble', e:'🛠️', title:'When something goes wrong', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','The skin isn’t in “Skins”','Check that the skin is published in Sparks and that the launcher uses the same account. Close and reopen the <b>Skins</b> section.'],
          ['👕','The student pressed “Wear” while the game was open','The launcher says the skin will appear when the game starts again: exit and enter the world.'],
          ['📍','The teleport didn’t work','Ask the student to share the screen: usually the command isn’t complete or the minus before the last number is missing.'],
          ['⛶','The student can’t leave the full-screen studio','Click <b>Collapse</b> at the top of the studio — <b>Esc</b> doesn’t work inside it.'],
          ['🔒','The student’s link doesn’t open','The project was probably saved as <b>Only me</b> (it shows the <b>Private project</b> tag). Ask the student: <b>My projects → open the project → Edit → Public → Publish</b>. The link stays the same.'],
          ['🖼️','The student can’t find the screenshot','On Windows it’s in <b>Pictures → Screenshots</b>; on a Mac, on the desktop. If it can’t be found now, the student attaches it later at home.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Technical checklist for every lesson', blocks:[
        { t:'check', title:'✅ My technical checklist', groups:[
          { h:'☑️ Before the lesson', items:['I read all the Teacher Notes of the lesson and watched the preparation video.','My launcher is installed and signed in, and I went through the lesson path myself.','Before Lesson 1, I sent the launcher links to the group chat.'] },
          { h:'🎬 During the lesson', items:['I ran the connection and launcher check before the content.','I showed the finished result and the lesson goal in the first minutes.'] },
          { h:'📤 At the end of the lesson', items:['I protected the last 7–10 minutes for publishing, showing work and feedback.','Everyone sent the link to the published project in the lesson card.','I opened some links to check that they work.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Who is Minecraft CraftForge Beginner for, and how long is each lesson?',
      o:['Students aged 8–9, with 60-minute group lessons.','Students aged 10–12, with 90-minute lessons.','Students aged 13–17, with 90-minute lessons.'],
      a:0, e:'Beginner is for students aged 8–9: 40 lessons of 60 minutes in a group.' },
    { q:'In which programming language do students program the Assistant robot?',
      o:['Python.','Scratch blocks.','Lua.'],
      a:2, e:'The Assistant robot is programmed in Lua: commands, arguments, variables, loops, conditions and functions.' },
    { q:'How does a lesson start?',
      o:['With theory about redstone before anyone enters the world.','By showing the finished result, saying the goal and explaining how creating is different from just playing.','Students start building straight away without seeing an example.'],
      a:1, e:'The result first: students see where they are going and why creating is different from playing.' },
    { q:'What does the student leave the course with?',
      o:['A written final exam.','More than nine projects in their Kodland Sparks portfolio and a graduation project — their own land, presented to the group.','Only the house from Lesson 1.'],
      a:1, e:'Nine+ projects in the portfolio and a graduation project where builds, mechanisms and programs work together.' },
    { q:'What is the role of Sparks AI in the lessons?',
      o:['It builds the project for the student.','It suggests ideas and feedback; the student decides what to take.','It grades the lesson instead of the tutor.'],
      a:1, e:'Sparks suggests, the student decides — usually one request per lesson.' }
  ],
  m2:[
    { q:'When do you run the connection and launcher check?',
      o:['At the start of the lesson, before the content, so the game downloads while you get to know the group.','In the middle of the lesson, when students need Minecraft.','At the end, so it doesn’t take time from the lesson.'],
      a:0, e:'Before the content: the game downloads while you get to know the group.' },
    { q:'Which credentials do you use to download and sign in to the Kodland Launcher?',
      o:['A new account that you create yourself.','The same credentials as Kodland Sparks, provided by the Operations or Teaching department.','A student’s account.'],
      a:1, e:'The launcher uses your Kodland Sparks credentials, provided by the Operations or Teaching department.' },
    { q:'Where does a student find the link to send in the lesson card?',
      o:['In a comment under the project.','In Sparks: My projects → open the published project → copy the address from the browser bar.','In the launcher, on the Play tab.'],
      a:1, e:'The link is the address of the project page: My projects → the published project → the browser bar.' },
    { q:'What are the last 7–10 minutes of the lesson for?',
      o:['Extra building time.','Publishing, showing work and feedback — plus the wrap-up and homework.','Free play.'],
      a:1, e:'Protect the last minutes: publishing, the showcase with feedback, and the wrap-up.' },
    { ctx:'In Lesson 1, one student’s launcher doesn’t start, and the rest of the group is ready.',
      q:'What do you do?',
      o:['Stop the lesson until the launcher works.','Keep the group going — the skin is drawn in Sparks, in the browser — and help the student during independent work.','Tell the student to try again at home and skip the lesson.'],
      a:1, e:'One problem shouldn’t stop the group: the student still draws and publishes the skin, and you fix the launcher during independent work.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Modules completed!',
  html: `<p>You’re almost done! Return to the LMS training page where you accessed this training. The DST test is available right below the training.</p>
    <p>👉 <b>You must complete and pass the DST test for the training to be considered successfully completed.</b> If you do not complete the DST test, the training will remain incomplete and may expire.</p>
    <p>The minimum passing score is <b>80%</b>.</p>
    <p>Good luck! ❤️</p>`,
  nexts: [
    ['📒', '<b>Before every lesson:</b> read the Teacher Notes in Backoffice and go through the lesson path in the launcher.'],
    ['🟩', '<b>First minutes:</b> connection and launcher check, then the finished result and the goal.'],
    ['🔗', '<b>The link:</b> My projects → the published project → the address in the browser bar.'],
    ['⏱️', '<b>Last 7–10 minutes:</b> publishing, showing work and feedback.']
  ]
};
