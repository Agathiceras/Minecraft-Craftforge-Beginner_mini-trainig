/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2226 · ENG] · INDONESIAN
   Translated from content-en.js. Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   TODO: replace the Backoffice code and link (2226 / 2227) with the Indonesian course when it exists.
   ============================================================ */
window.COURSE = { lang: 'id' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Pelatihan kursus EM',
  footer: 'kodland · Model Pendidikan Baru · Pelatihan kursus',
  devLink: '🛠 Pengembang',
  logoSub: 'Model Pendidikan Baru',
  navHome: '← Beranda',
  navBackModule: '← Kembali ke modul',
  moduleN: 'Modul {n}',
  badgeStart: 'Mulai →',
  badgeLocked: '🔒 Selesaikan Modul {n}',
  badgeDone: '✓ Selesai · {score}%',
  progLabel: 'modul selesai',
  progAllDone: 'Semua modul selesai 🎉',
  eyebrow: '{course} · Modul {n} dari {total}',
  ctaTitle: 'Evaluasi modul',
  ctaText: '{n} pertanyaan singkat. Raih skor 70% atau lebih untuk lulus.',
  lockSim: '🔒 Selesaikan simulasi di atas untuk membuka evaluasi.',
  startCheck: 'Mulai evaluasi →',
  retake: '🔁 Ulangi evaluasi',
  qmeta: '{e} Evaluasi Modul {n} · Pertanyaan {i} dari {total}',
  fbRight: '✅ <b>Benar!</b> ',
  fbWrong: '❌ <b>Belum tepat.</b> ',
  nextQuestion: 'Pertanyaan berikutnya →',
  seeResult: 'Lihat hasil saya →',
  passedTitle: 'Anda lulus!',
  failTitle: 'Sedikit lagi',
  scoreLine: 'Anda menjawab <b>{score} dari {n}</b> pertanyaan dengan benar.',
  failText: 'Anda memerlukan skor 70% atau lebih. Pelajari lagi modulnya, lalu coba kembali — Anda bisa mengulanginya sebanyak yang diperlukan.',
  nextUnlocked: '<b>Modul {n} · {title}</b> sekarang sudah terbuka.',
  goModule: 'Ke Modul {n} →',
  allDoneText: 'Anda sudah menyelesaikan kedua modul pelatihan ini.',
  seeNext: 'Lihat langkah selanjutnya →',
  reviewModule: '📖 Pelajari lagi modulnya',
  homeDoneTitle: 'Semua modul selesai!',
  homeDoneText: 'Satu langkah terakhir: tes DST di halaman pelatihan LMS.',
  homeDoneBtn: 'Lihat langkah selanjutnya →',
  doneBadge: '✓ Selesai',
  doneBack: 'Kembali ke modul',
  lockedTitle: 'Masih terkunci',
  lockedModule: 'Selesaikan Modul {n} terlebih dahulu.',
  lockedStep: 'Selesaikan langkah sebelumnya untuk membuka langkah ini.',
  ok: 'OK',
  linkOpen: 'Buka ↗',
  projPlay: '▶ Buka ↗',
  simOpen: '▶ Buka simulasi di sini',
  simClose: '✕ Tutup simulasi',
  simNewTab: 'Buka di tab baru ↗',
  simDone: '✅ Simulasi selesai',
  simTodo: '○ Simulasi belum dikerjakan',
  checkTag: 'Centang semuanya',
  mythTag: 'Mitos',
  mythTap: 'Ketuk untuk melihat faktanya →',
  mythReality: 'Faktanya ✓',
  sortWrong: '✗ Belum tepat.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2226';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Pelatihan kursus · [2226]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: 'Untuk siswa usia 8–9 tahun: di Minecraft, mereka berubah dari pemain menjadi kreator — membuat tokoh dan rumah sendiri, mekanisme redstone, dan robot Asisten yang mereka program dengan Lua. Dua modul: materi kursus dan sisi teknis pelajaran.',
  facts: [
    ['🧑‍💻', '<b>Sesuai kecepatan Anda.</b> Progres Anda tersimpan di browser ini. Setiap modul diakhiri dengan evaluasi singkat.'],
    ['⚡', '<b>Dilengkapi latihan.</b> Simulasi Kodland Sparks untuk berlatih cara memublikasikan bangunan Minecraft dan mengatasi masalah yang paling sering muncul.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Sebelum mulai:</b> selesaikan dulu <b>pelatihan inti Model Pendidikan Baru (EM)</b>. Pelatihan kursus ini adalah lanjutannya dan dibangun di atas apa yang sudah Anda pelajari di sana: Backoffice dan Teacher Notes, Classroom dengan Follow Mode, tur Kodland Sparks, dan kualitas pelajaran.' },
  { kind:'warn', e:'🔄', html:'<b>Konten pelajaran di Backoffice terus diperbarui.</b> Pelajaran terus disempurnakan berdasarkan umpan balik dari siswa dan tutor. Jangan khawatir: setiap kali ada perubahan, Anda akan diberi tahu lebih dulu agar bisa menyiapkan pelajarannya.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'Materi kursus',
    desc:'Informasi umum kursus, apa yang dicapai siswa, dan 4 pelajaran pertama Modul 1.',
    obj:'Bersiap mengajar pelajaran-pelajaran pertama Minecraft CraftForge Beginner. Di dalamnya, siswa usia 8–9 tahun membuat tokoh dan rumah sendiri, membangun mekanisme redstone pertama mereka, serta merakit dan memprogram robot Asisten.',
    offer:[['🧱','Mengetahui informasi umum kursus dan apa yang dicapai siswa.'],['📖','Mengetahui apa yang terjadi di setiap 4 pelajaran pertama.'],['🤖','Memahami cara robot Asisten dan Sparks AI digunakan.'],['📘','Mempelajari pelajaran-pelajaran dan Teacher Notes-nya di Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kursusnya', blocks:[
        { t:'meta', items:[['🧒','Usia','8–9 tahun'],['⏱️','Pelajaran','60 menit'],['📚','Program','40 pelajaran · 10 modul'],['🌙','Bahasa','Lua']] },
        { t:'trio', items:[
          ['🎬','Hasil akhir lebih dulu','Setiap pelajaran dibuka dengan menunjukkan hasil akhir dan menyebutkan apa yang akan dipelajari siswa. Lalu Anda menunjukkan langkah-langkahnya di layar Anda dan membimbing mereka selangkah demi selangkah.'],
          ['🛠️','Dari pemain menjadi kreator','Dalam game, aturannya dibuat orang lain. Di sini siswa membangun, memprogram robot, dan membuat mekanisme — lalu menunjukkan hasilnya kepada orang lain.'],
          ['🔍','Kesalahan adalah bagian dari proses','Saat sesuatu tidak berhasil: <i>Apa yang saya lihat? Kenapa begitu? Apa yang akan saya coba? Berhasil tidak?</i> Beberapa pelajaran berisi kesalahan yang disengaja di layar Anda agar siswa menemukan penyebabnya sendiri.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Siswa memublikasikan karya mereka di <b>Kodland Sparks</b>, portofolio mereka, sejak Pelajaran 1. <b>Sparks AI</b> memberi ide dan umpan balik, tetapi siswa yang memutuskan apa yang diambil.' }
      ]},
      { id:'goals', e:'🎓', title:'Apa yang dicapai siswa', blocks:[
        { t:'p', html:'Di akhir kursus, siswa akan meraih pencapaian berikut:' },
        { t:'cards', cols:2, items:[
          ['🧱','Membuat proyek','Lebih dari sembilan proyek di portofolio Kodland Sparks, ditambah proyek kelulusan: lahan miliknya sendiri, tempat bangunan, mekanisme, dan program bekerja bersama.'],
          ['🤖','Memprogram robot dengan Lua','Perintah, argumen, variabel, perulangan, kondisi, dan fungsi buatan sendiri. Robot membangun, menggali, menghindari rintangan, dan menyelesaikan misi — dan siswa belajar memecah tugas besar menjadi langkah-langkah.'],
          ['⚡','Membangun mekanisme dan logika','Redstone adalah “listrik” di Minecraft: tuas, kabel, lampu, pintu, piston, dan jebakan. Siswa belajar logika “jika–maka” dan langsung melihat hasilnya.'],
          ['🏰','Membuat bangunan dan game','Membangun dengan memperhatikan bentuk, warna, dan cahaya, serta membuat mini-game dengan aturannya sendiri yang dimainkan teman sekelas.'],
          ['💬','Percaya diri menceritakan karyanya','Menjelaskan cara kerja semuanya di akhir setiap pelajaran dan mempresentasikan proyek kelulusan di depan grup.'],
          ['🧠','Keterampilan untuk hidup','Kreativitas, kerja sama (memainkan game teman dan memberi umpan balik), komunikasi, dan berpikir kritis: menemukan bug dan memakai petunjuk dari Sparks AI dengan bijak.']
        ]}
      ]},
      { id:'les', e:'📖', title:'4 pelajaran pertama', blocks:[
        { t:'p', html:'Modul 1, <b>“Api Pertama. Duniaku dan Perintah Pertama”</b>, diakhiri dengan proyek <b>“Tokohku dan rumahku”</b>. Keempat pelajaran berlangsung di dunia yang sama. Buka setiap pelajaran dan baca apa yang perlu Anda ketahui, hasil utamanya, peran Anda, dan hal-hal yang perlu diperhatikan.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'🔥', h:'Pelajaran 1 — Api Pertama', p:'Pelajaran pertama kursus (7 kartu dan PR). Siswa menjalankan launcher, berkenalan dengan grup, menggambar dan memublikasikan skin mereka sendiri di Sparks, memakainya untuk masuk ke dunia, lalu mulai membangun rumah sendiri di sebuah pulau.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li>Alurnya: koneksi dan launcher → apa yang akan dikerjakan → skin di Sparks selagi launcher mengunduh game → pakai skin, masuk ke dunia dan teleport ke pulau → bangun rumah → pamer proyek → rekap dan PR.</li><li><b>Studio skin</b> terbuka langsung di dalam kartu pelajaran (tombol <b>Expand</b> untuk layar penuh). Siswa tidak perlu keluar dari pelajaran untuk membuka Sparks.</li><li>Di launcher: <b>Create → Skins → skin sendiri → Wear</b>, lalu <b>Play</b> dengan kode dunia, dan <b>F5</b> untuk melihat diri sendiri.</li><li>Siswa membangun dalam <b>creative mode</b>: dinding, pintu masuk, dan papan tanda dengan nickname mereka. Atapnya menjadi PR.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>🏁 Skin sudah <b>dipublikasikan di Sparks dan tautannya ada di tugas</b>. Semua siswa mencapainya sekitar menit ke-29; kartu ini tidak pernah dipersingkat.</li><li>Setiap siswa masuk ke dunia dengan memakai skin sendiri dan berdiri di pulau.</li><li>Rumahnya punya dinding, pintu masuk, dan papan tanda dengan nickname.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Kenali grupnya: ceritakan tentang diri Anda, beri semua siswa kesempatan bicara, dan panggil nama mereka sepanjang pelajaran.</li><li>Sebutkan tujuan pelajaran dengan lantang: “Hari ini setiap orang akan membuat skin sendiri, dan dunia akan mengenali kalian.”</li><li>Tanyakan: “Apa bedanya membuat dengan sekadar bermain?” — dalam game, aturannya dibuat orang lain; di sini kalian yang membuat dan menunjukkannya kepada orang lain.</li><li><b>Kesalahan yang disengaja, hanya di layar Anda:</b> masuk ke dunia tanpa menekan <b>Wear</b> → Anda terlihat sama seperti yang lain. Tanyakan kenapa, lalu perbaiki. Siswa pun langsung melakukannya dengan benar.</li></ul>'],
                 ['📌','Perhatikan','<ul><li>Di Pelajaran 1 hampir pasti ada launcher siswa yang tidak mau jalan. Skin digambar di browser, jadi siswa tetap bisa bekerja sementara Anda memperbaiki launcher-nya saat kerja mandiri.</li><li><b>Esc</b> tidak berfungsi di dalam studio layar penuh: gunakan tombol <b>Collapse</b> di bagian atas.</li><li>Menggambar bisa tidak ada habisnya: “Yang penting buatanmu sendiri, tidak harus sempurna. Kamu bisa menyelesaikannya di rumah.”</li><li>Cek di Backoffice bahwa tautannya benar-benar masuk, bukan hanya ditunjukkan di layar.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Sehari sebelumnya, kirim tautan launcher ke chat grup dan minta siswa menginstalnya lebih dulu.</li><li>Coba sendiri seluruh alurnya: skin di Sparks → publikasikan → Skins → Wear → masuk ke dunia dengan kode → teleport ke pulau.</li><li>Kode dunia: <b>Welcome to CraftForge</b> (tab Play). Perintah teleport ada di Teacher Notes dan di kartu.</li><li>PR: selesaikan rumahnya, tunjukkan screenshot kepada asisten AI yang ada di kartu PR, lalu kirim screenshot itu beserta satu kalimat.</li></ul>']] },
          { tab:'M1L2', e:'🗼', h:'Pelajaran 2 — Penjaga Hutan', p:'Siswa mempelajari mekanisme pertama mereka: <b>cahaya dari injakan</b> — pressure plate di atas redstone lamp. Mereka membangun menara pengawas dengan lampu di puncaknya, menyempurnakannya dengan satu ide dari Sparks, lalu memublikasikan screenshot-nya di Sparks.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li><b>Pressure plate</b> bekerja seperti pintu otomatis di toko: injak, lalu sesuatu terjadi. Hanya <b>redstone lamp</b> di bawah plate yang menyala karena injakan.</li><li>Lampu dan plate ada di inventaris creative: <b>E</b> → cari <b>lamp</b> / <b>pressure</b>.</li><li>Menaranya milik siswa sendiri: bahan dan tinggi bebas, dengan tangga untuk naik serta lampu dan plate di puncaknya.</li><li>Screenshot dipublikasikan di Sparks sebagai proyek <b>Image</b>: <b>Publish project → Image → nama → unggah → Publish</b>. Lalu <b>My projects → proyek yang sudah dipublikasikan</b>: alamat di bilah browser adalah tautan yang dimasukkan ke tugas.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>Lampu setiap siswa menyala saat diinjak.</li><li>🏁 Menara dengan lampu yang menyala karena injakan dan <b>tautan ke screenshot yang sudah dipublikasikan ada di tugas</b> (sekitar menit ke-30).</li><li>Satu ide dari Sparks ditambahkan ke menara — siswa yang memilih idenya.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Mulai dengan pengecekan PR: 2–3 relawan menunjukkan rumah mereka selama 10 detik, dengan pujian yang spesifik.</li><li><b>Kesalahan yang disengaja:</b> di layar Anda, plate di atas papan kayu biasa — diinjak, tidak terjadi apa-apa. Tanyakan “Kenapa tidak menyala?” sebelum menunjukkan cara yang benar.</li><li>Jangan menentukan ukuran, nanti semua membangun menara yang sama.</li><li>Ingatkan mereka: “Sparks memberi saran, kalian yang memutuskan — ambil satu ide.”</li></ul>'],
                 ['📌','Perhatikan','<ul><li>Lampu padam sekitar satu detik setelah kaki diangkat — itu memang seharusnya.</li><li>Mencari “plate” juga memunculkan chestplate: cari <b>pressure</b>.</li><li>“Warnai hutan” bersifat opsional: persingkat atau lewati jika waktunya kurang. Publikasi tidak pernah dipersingkat.</li><li>Siswa yang launcher-nya tidak berfungsi mengikuti layar Anda hari ini, lalu membangun dan memublikasikan menaranya di rumah bersama PR.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Dunia yang sama dengan Pelajaran 1 (kode <b>Welcome to CraftForge</b>). Telusuri sendiri jalan dari titik teleport ke hutan sebelum pelajaran.</li><li>Screenshot: <b>Win + Print Screen</b> (Pictures → Screenshots) atau <b>Cmd + Shift + 4</b> (desktop). <b>F5</b> untuk melihat diri sendiri, <b>F1</b> untuk menyembunyikan antarmuka.</li><li>PR: cahaya dari injakan di rumah siswa sendiri, dipublikasikan di Sparks, dengan tautannya di tugas.</li></ul>']] },
          { tab:'M1L3', e:'🤖', h:'Pelajaran 3 — Teknologi Kuno', p:'Siswa mengikuti jejak cahaya melewati bangunan gelap menuju kastel kuno, merakit <b>robot Asisten</b> mereka sendiri dalam tiga crafting, dan menulis perintah sungguhan pertama untuknya. Lalu mereka meminta ide bangunan kepada Sparks dan menghidupkan kembali tempat itu.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li>Robot (<i>mining turtle</i>) dibuat dalam tiga crafting, berurutan: <b>otak</b> (computer: 7 stone, redstone di tengah, glass pane di bawah) → <b>badan</b> (turtle: 7 iron ingot, computer di tengah, chest di bawah) → <b>beliung</b> (turtle + diamond pickaxe yang <b>baru dan tanpa enchant</b>).</li><li>Klik kanan robot untuk membuka konsolnya. Program siap pakai langsung berfungsi: <b>refuel</b> (dengan coal) dan <b>tunnel 3</b>.</li><li>Kode buatan sendiri memerlukan <b>mode Lua</b> lebih dulu: ketik <b>lua</b> + Enter, lalu <code>turtle.dig()</code>, <code>turtle.forward()</code>, <code>turtle.turnRight()</code>. Keluar dengan <code>exit()</code>.</li><li>Tanpa mode Lua, konsol menjawab <b>“No such program”</b> — konsolnya tidak rusak.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>Setiap siswa punya robot dengan beliung yang menjalankan perintah mereka.</li><li>Siswa mengubah perintah dan menjalankannya lagi setidaknya sekali (siklus programmer: tulis → amati → ubah → jalankan lagi).</li><li>Bangunan di dekat kastel, berdasarkan ide dari Sparks, dengan cahaya dan papan tanda.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Tunjukkan blok briefing “Ke sinilah kita akan pergi” agar siswa melihat hasilnya sebelum mulai.</li><li>Pandu perjalanan dengan demonstrasi di layar Anda; jangan perlihatkan kastelnya lebih dulu — itulah momen “wow”-nya.</li><li>Tunjukkan setiap crafting di layar Anda dan tunggu sampai semua mengulanginya sebelum lanjut ke yang berikutnya.</li><li>Buat bagian coding tetap ringan, tanpa teori: “Saya menulis perintah, robot menurut.”</li></ul>'],
                 ['📌','Perhatikan','<ul><li>Urutan crafting salah: tanpa otak tidak ada badan.</li><li>Beliung yang rusak atau ber-enchant tidak berfungsi: berikan yang baru.</li><li>Robot tidak bergerak maju → perlu coal dan <b>refuel</b>.</li><li>Sparks dipakai sekali, sebelum membangun. Jika tidak tersedia, berikan dua ide sendiri.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Koordinat teleport, pola crafting, dan perintah ada di Teacher Notes setiap kartu.</li><li>Parade: relawan menunjukkan robot mereka beraksi; yang lain mengambil screenshot dan mengisi kolom jawaban.</li><li>PR: bawa robot ke pulau, beri tugas, lalu kirim screenshot.</li></ul>']] },
          { tab:'M1L4', e:'🪄', h:'Pelajaran 4 — Arena Ajaib', p:'Pelajaran terakhir di dunia pertama. Robot belajar <b>membangun dengan perintah</b>: naik, berbelok, dan meletakkan blok. Setelah istirahat, setiap siswa membangun konstruksinya sendiri, menunjukkan fotonya kepada Sparks untuk mendapat satu ide, lalu mempresentasikannya.',
            acc:[['📚','Yang perlu Anda ketahui','<ul><li>Perintah baru (dalam mode Lua): <code>turtle.up()</code> / <code>turtle.down()</code>, <code>turtle.turnLeft()</code>, <code>turtle.forward()</code>, <code>turtle.placeDown()</code>.</li><li><b>Bahan bakar:</b> blok di slot 1, coal di slot 2, lalu <code>turtle.select(2)</code> → <code>turtle.refuel()</code> → <code>turtle.select(1)</code>.</li><li>Untuk membangun ke atas: <code>up()</code> dulu, lalu <code>placeDown()</code> — robot naik dan meninggalkan blok di bawahnya.</li><li>Sebelum istirahat hanya latihan (beberapa blok ke atas, satu belokan); konstruksi milik siswa sendiri dikerjakan setelahnya.</li></ul>'],
                 ['🎯','Hasil utama','<ul><li>Siswa berhasil membuat robot bergerak dan meletakkan setidaknya satu blok.</li><li>Konstruksi sendiri di arena, dengan cahaya dan papan nama pembuat, serta satu ide dari Sparks.</li><li>Dipresentasikan di parade: screenshot + “Robotku bisa… Di arena aku membangun…”.</li></ul>'],
                 ['🧑‍🏫','Peran Anda','<ul><li>Tunjukkan sendiri teknik utamanya: slot → refuel → mode Lua → <code>up()</code> dan <code>placeDown()</code> bergantian.</li><li>Jangan menentukan bentuknya: parade harus menampilkan bangunan yang berbeda-beda.</li><li>Tutup dunia pertama dengan hangat: dunia-dunia baru dan tantangan baru menanti.</li></ul>'],
                 ['📌','Perhatikan','<ul><li>“No such program” → mode Lua belum aktif.</li><li>Tidak bergerak → belum refuel. Tidak meletakkan blok → blok tidak ada di slot 1, atau <code>placeDown()</code> sebelum <code>up()</code>.</li><li>Saran dari Sparks harus menyemangati, sekecil apa pun bangunannya; satu permintaan per pelajaran.</li></ul>'],
                 ['⚙️','Aspek teknis','<ul><li>Pandu rutenya (rawa → rumah → arena) dengan demonstrasi di layar Anda.</li><li>PR: robot membangun konstruksi kecil di pulau siswa; kirim screenshot.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Teacher Note pertama di setiap pelajaran berisi rencana lengkapnya: ringkasan, hasil utama, durasi setiap kartu, peran Anda, dan risikonya. Pelajaran 1 juga dilengkapi video persiapan. <b>Baca semua Teacher Notes sebelum pelajaran.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Pelajari pelajarannya di Backoffice', blocks:[
        { t:'p', html:'Sebelum evaluasi, buka kursusnya di Backoffice dan baca keempat pelajaran sesuai kecepatan Anda — semua kartu aktivitas dan Teacher Notes ada di sana. Tidak ada batas waktu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2226', e:'📘', title:'Buka kursus di Backoffice', small:'[2226] Minecraft CraftForge Beginner — pelajaran dan Teacher Notes-nya' },
        { t:'callout', kind:'warn', e:'🔄', html:'Konten pelajaran di Backoffice akan terus diperbarui berdasarkan umpan balik dari siswa dan tutor. Setiap kali ada perubahan, Anda akan diberi tahu lebih dulu agar bisa menyiapkan pelajarannya.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Sisi teknis pelajaran',
    desc:'Kodland Launcher, awal pelajaran yang kuat, publikasi di Sparks, dan masalah yang paling sering muncul.',
    obj:'Pelajari apa yang membuat pelajaran Minecraft CraftForge berjalan lancar secara teknis: Kodland Launcher, pengecekan launcher sebelum materi, menit-menit terakhir untuk publikasi dan pamer karya, tempat siswa menemukan tautan proyeknya, dan solusi untuk masalah yang paling sering muncul.',
    needs:['mcPublish'],
    offer:[['🟩','Mengunduh, menginstal, dan masuk ke Kodland Launcher.'],['🚀','Melakukan pengecekan launcher sebelum materi, dan memulai dengan hasil akhir.'],['📤','Memastikan setiap siswa memublikasikan karyanya di Sparks dan mengirim tautannya.'],['🛠️','Mengatasi masalah launcher dan Minecraft yang paling sering muncul.']],
    sections:[
      { id:'focus', e:'🎯', title:'3 hal yang membuat pelajaran berhasil', blocks:[
        { t:'p', html:'Inilah fokus utama yang ditetapkan tim produk untuk kursus-kursus Minecraft. Buka satu per satu:' },
        { t:'acc', items:[
          ['🎬','Tunjukkan hasil akhir lebih dulu — dan kenapa membuat berbeda dari bermain','<p>Di menit-menit pertama, <b>tunjukkan hasil akhirnya</b> dan sebutkan apa yang akan dipelajari siswa hari ini.</p><ul><li>Gunakan kartu briefing: “Lihat apa yang akan kalian punya dalam satu jam: crafter kalian sendiri dan rumah kalian sendiri di pulau.”</li><li>Jelaskan bahwa membangun proyek <b>berbeda dari sekadar bermain</b>: dalam game, aturannya dibuat orang lain; di sini siswa yang membuat dan menunjukkannya kepada orang lain.</li><li>Tanyakan kepada satu atau dua siswa: “Menurut kalian, apa bedanya membuat dengan sekadar bermain?”</li></ul>'],
          ['🟩','Pengecekan login dan launcher dilakukan sebelum materi','<p>Lakukan pengecekan koneksi dan launcher <b>sebelum</b> bagian materi, agar game terunduh selagi Anda berkenalan dengan grup.</p><ul><li>Koneksi: satu menit — kamera, mikrofon, “Halo!”.</li><li>Launcher: 2–3 menit — kirim tautannya, tunjukkan cara masuk di layar Anda, minta siswa mengetik “+” di chat saat bilah hijau muncul.</li><li>Jangan menunggu unduhan selesai, dan jangan menahan grup karena satu atau dua “−”: bantu mereka saat kerja mandiri.</li><li>Mulai Pelajaran 2: “Buka launcher dan jalankan dunia kalian — biarkan memuat selagi kita mengobrol.”</li></ul>'],
          ['⏱️','Jaga 7–10 menit terakhir','<p><b>7–10 menit</b> terakhir dipakai untuk publikasi, pamer karya, dan umpan balik — dan tidak boleh diberikan untuk membangun.</p><ul><li>Gunakan batas waktu yang tegas: peringatan dua menit, lalu “Stop, lepaskan tangan dari keyboard. Saatnya pamer karya!”, dan langsung sebut nama siswa pertama.</li><li>3 siswa menunjukkan karyanya; grup memberi umpan balik yang spesifik: nama, apa yang berhasil, satu saran.</li><li>Akhiri dengan rekap, refleksi, pelajaran berikutnya, dan PR — bagian ini tidak pernah dipersingkat.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Siswa membuka Minecraft melalui <b>Kodland Launcher</b>: launcher ini mengunduh game, membuka dunia kursus, dan menjadi tempat mereka membuat dan memakai skin. Launcher harus sudah terinstal dan siap di komputer Anda sebelum pelajaran pertama.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Kredensial Anda:</b> untuk mengunduh dan masuk ke launcher, Anda menggunakan <b>kredensial yang sama dengan Kodland Sparks</b>. Kredensial ini diberikan oleh <b>departemen Operasional atau Pengajaran</b>. Siswa masuk dengan akun Kodland mereka sendiri — mereka tidak perlu akun baru.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Halaman unduhan dan panduan resmi', small:'portfolio.kodland.org/launcher/download — Windows dan Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Unduh installer-nya.</li><li>Buka file yang sudah diunduh.</li><li>Di layar peringatan berwarna biru, klik <b>More info → Run anyway</b>, lalu ikuti installer-nya.</li></ol>'],
          ['🍎','macOS 13 atau lebih baru','<ol><li>Unduh file untuk prosesor Anda (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Buka file yang sudah diunduh dan seret <b>Kodland Launcher</b> ke <b>Applications</b>. Jangan membukanya dari jendela itu.</li><li>Buka <b>Terminal</b>, tempel baris di bawah ini dan tekan Return. Tidak muncul apa-apa itu normal.</li><li>Buka launcher dari <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Masuk','Klik <b>Sign in</b>. Halaman browser akan terbuka: klik <b>Sign in with Kodland</b> — satu tombol, tanpa kata sandi. Jika browser tidak terbuka, gunakan tautan di bawah tombol untuk mendapatkan kode pendek (berlaku lima menit).'],
          ['Unduh game','Launcher mengunduh game dalam beberapa tahap (sekitar 550 MB; Anda memerlukan ruang kosong sekitar 1,8 GB). Biarkan berjalan.'],
          ['Play','Saat muncul keterangan semuanya selesai, tekan <b>Play</b>. Peluncuran pertama bisa memakan waktu hingga satu menit. Kode dunia dimasukkan di tab <b>Play</b>.'],
          ['Pembaruan','Jika launcher tidak memperbarui diri, instal versi terbaru dari halaman unduhan di atas versi lama. Dunia dan skin tetap aman.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Tautan unduhan langsung (yang ada di kartu pelajaran)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Saat launcher siswa tidak berfungsi', blocks:[
        { t:'p', html:'Di Pelajaran 1, hampir pasti ada launcher siswa yang tidak mau jalan. Tidak apa-apa: <b>beri tugas dulu kepada siswa lain</b>, lalu hubungi siswa tersebut. Minta ia membagikan layarnya dan pandu dengan suara: “Apa yang kamu lihat sekarang? Klik tombol ini.” Jika tidak selesai dalam beberapa menit: “Ikuti layar saya dulu, nanti saya kembali.”' },
        { t:'acc', open:false, items:[
          ['📥','File tidak terunduh','Kirim lagi tautan dari kartu ke chat dan pastikan siswa memilih file untuk sistemnya.'],
          ['🍎','Mac tidak mau membuka launcher','Jalankan baris Terminal dari kartu pertama dan buka lagi launcher dari <b>Applications</b>.'],
          ['🪟','Windows bertanya apakah file boleh dibuka','<b>More info → Run anyway</b>.'],
          ['🔑','Siswa tidak bisa masuk','Login Kodland yang sama dengan untuk pelajaran — tanpa akun baru. Jendela masuk terbuka di browser dan sering tersembunyi di balik jendela lain.'],
          ['⏳','Game lama sekali memuat atau unduhan berhenti','Unduhan pertama memang lama, itu normal. Jika bilahnya berhenti: cek internet, tutup launcher lalu buka lagi — unduhan akan berlanjut.'],
          ['🖌️','Launcher tidak pernah berhasil jalan','Di Pelajaran 1 siswa tetap menggambar dan memublikasikan skin di Sparks (di browser), jadi ia tetap meraih hasil utama. Di dalam dunia, ia mengikuti layar Anda. Setelah pelajaran, bantu ia menjalankan launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Jika beberapa siswa mengalami error yang sama, tunjukkan solusinya sekali untuk semua.' }
      ]},
      { id:'req', e:'💻', title:'Persyaratan komputer', blocks:[
        { t:'p', html:'Inilah yang dibutuhkan siswa untuk Minecraft CraftForge. Informasi ini berguna saat siswa kesulitan menginstal atau menjalankan game:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Komputer dan sistem','Komputer desktop atau laptop dengan <b>Windows 10/11 (64-bit)</b> atau <b>macOS 13 atau lebih baru</b>. Mac: hanya Apple Silicon (M1 atau lebih baru).'],
          ['🧠','Memori dan prosesor','<b>RAM 8 GB</b> dengan kartu grafis terpisah, atau <b>12 GB</b> dengan grafis terintegrasi. Prosesor <b>4 inti</b>.'],
          ['🎮','Grafis dan disk','Kartu grafis yang mendukung <b>Vulkan 1.3</b> dengan memori video <b>2 GB</b>. Ruang disk kosong <b>5 GB</b>.'],
          ['🎧','Koneksi dan perlengkapan','Koneksi internet stabil yang kuat untuk panggilan video. Mouse dua tombol, keyboard, headset dengan mikrofon, dan kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Memublikasikan di Kodland Sparks', blocks:[
        { t:'p', html:'Publikasi adalah hasil utama di banyak pelajaran: siswa memublikasikan karyanya di Sparks dan menempelkan tautannya di kartu pelajaran. Di Modul 1 ada dua cara:' },
        { t:'cards', cols:2, items:[
          ['🎨','Skin (Pelajaran 1)','Di Pelajaran 1, studio skin ada di dalam kartu: <b>Publish</b> → beri nama skin → <b>Publish</b> lagi. File skin juga bisa dipublikasikan dari Sparks: <b>Publish project → Minecraft skin</b> → nama → <b>Model</b> (Steve atau Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Bangunan (Pelajaran 2 dan PR)','Screenshot bangunan (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → nama → <b>Drawing</b>: unggah screenshot → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Di mana tautannya','Tautannya adalah alamat halaman proyek. Siswa membuka <b>My projects</b> di Sparks, membuka <b>proyek yang sudah dipublikasikan</b>, lalu menyalin tautan dari <b>bilah alamat browser</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Tempel di kartu pelajaran','Tautan itu ditempelkan di kartu pelajaran di platform Kodland (misalnya, “Tautan ke Skin saya di Kodland Sparks”).'],
          ['Pilih visibilitas','<b>Public</b> muncul di feed dan di portofolio. <b>Friends only</b> untuk teman dan guru. <b>Only me</b> membuat proyek menjadi privat — tidak ada orang lain yang bisa membuka tautannya, termasuk Anda.'],
          ['Dua langkah yang berbeda','Memublikasikan di Sparks dan mengirim tautan di platform Kodland adalah <b>dua langkah yang berbeda</b>. Cek di Backoffice bahwa tautannya benar-benar masuk.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simulasi', title:'Publikasikan skin dan bangunan di Kodland Sparks', text:'Replika Kodland Sparks dan kartu pelajaran: sebagai siswa, Anda memublikasikan skin, menemukan tautannya di My projects, menempelkannya di kartu di platform, memublikasikan screenshot bangunan sebagai proyek Image, dan memperbaiki tautan yang tidak bisa dibuka. Waktunya sekitar 5 menit. Evaluasi modul terbuka setelah Anda selesai.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Saat ada yang tidak berjalan', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','Skin tidak ada di “Skins”','Pastikan skin sudah dipublikasikan di Sparks dan launcher memakai akun yang sama. Tutup lalu buka lagi bagian <b>Skins</b>.'],
          ['👕','Siswa menekan “Wear” saat game sedang terbuka','Launcher memberi tahu bahwa skin akan muncul saat game dijalankan lagi: keluar lalu masuk lagi ke dunia.'],
          ['📍','Teleport tidak berhasil','Minta siswa membagikan layarnya: biasanya perintahnya tidak lengkap atau tanda minus sebelum angka terakhir terlewat.'],
          ['⛶','Siswa tidak bisa keluar dari studio layar penuh','Klik <b>Collapse</b> di bagian atas studio — <b>Esc</b> tidak berfungsi di dalamnya.'],
          ['💡','Lampu tidak menyala','Pastikan itu <b>redstone lamp</b> (bukan blok cahaya lain) dan plate-nya terpasang langsung di atasnya.'],
          ['🤖','Robot menjawab “No such program” atau tidak bergerak','“No such program” → ketik <b>lua</b> + Enter dulu. Tidak bergerak → coal dan <b>refuel</b> (di Pelajaran 4: <code>select(2)</code> → <code>refuel()</code> → <code>select(1)</code>). Tidak meletakkan blok → blok di slot 1, dan <code>up()</code> sebelum <code>placeDown()</code>.'],
          ['🔒','Tautan siswa tidak bisa dibuka','Proyeknya kemungkinan disimpan sebagai <b>Only me</b> (muncul label <b>Private project</b>). Minta siswa: <b>My projects → buka proyeknya → Edit → Public → Publish</b>. Tautannya tetap sama.'],
          ['🖼️','Siswa tidak menemukan screenshot-nya','Di Windows ada di <b>Pictures → Screenshots</b>; di Mac, di desktop. Jika belum ketemu sekarang, siswa bisa melampirkannya nanti di rumah.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Daftar periksa teknis untuk setiap pelajaran', blocks:[
        { t:'check', title:'✅ Daftar periksa teknis saya', groups:[
          { h:'☑️ Sebelum pelajaran', items:['Saya sudah membaca semua Teacher Notes pelajaran dan menonton video persiapannya.','Launcher saya sudah terinstal dan sudah login, dan saya sudah mencoba sendiri alur pelajarannya.','Sebelum Pelajaran 1, saya sudah mengirim tautan launcher ke chat grup.'] },
          { h:'🎬 Selama pelajaran', items:['Saya melakukan pengecekan koneksi dan launcher sebelum materi.','Saya menunjukkan hasil akhir dan tujuan pelajaran di menit-menit pertama.'] },
          { h:'📤 Di akhir pelajaran', items:['Saya menjaga 7–10 menit terakhir untuk publikasi, pamer karya, dan umpan balik.','Semua siswa sudah mengirim tautan proyek yang dipublikasikan di kartu pelajaran.','Saya membuka beberapa tautan untuk memastikan tautannya berfungsi.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Untuk siapa Minecraft CraftForge Beginner, dan berapa lama setiap pelajarannya?',
      o:['Siswa usia 8–9 tahun, dengan pelajaran grup 60 menit.','Siswa usia 10–12 tahun, dengan pelajaran 90 menit.','Siswa usia 13–17 tahun, dengan pelajaran 90 menit.'],
      a:0, e:'Beginner ditujukan untuk siswa usia 8–9 tahun: 40 pelajaran grup, masing-masing 60 menit.' },
    { q:'Dengan bahasa pemrograman apa siswa memprogram robot Asisten?',
      o:['Python.','Blok Scratch.','Lua.'],
      a:2, e:'Robot Asisten diprogram dengan Lua: perintah, argumen, variabel, perulangan, kondisi, dan fungsi.' },
    { q:'Bagaimana pelajaran dimulai?',
      o:['Dengan teori tentang redstone sebelum siapa pun masuk ke dunia.','Dengan menunjukkan hasil akhir, menyebutkan tujuan, dan menjelaskan apa bedanya membuat dengan sekadar bermain.','Siswa langsung mulai membangun tanpa melihat contoh.'],
      a:1, e:'Hasil akhir lebih dulu: siswa melihat ke mana mereka akan menuju dan kenapa membuat berbeda dari bermain.' },
    { q:'Apa yang dibawa siswa setelah menyelesaikan kursus?',
      o:['Ujian akhir tertulis.','Lebih dari sembilan proyek di portofolio Kodland Sparks dan proyek kelulusan — lahan miliknya sendiri, yang dipresentasikan di depan grup.','Hanya rumah dari Pelajaran 1.'],
      a:1, e:'Lebih dari sembilan proyek di portofolio dan proyek kelulusan tempat bangunan, mekanisme, dan program bekerja bersama.' },
    { q:'Apa peran Sparks AI dalam pelajaran?',
      o:['Membuatkan proyek untuk siswa.','Memberi ide dan umpan balik; siswa yang memutuskan apa yang diambil.','Menilai pelajaran menggantikan tutor.'],
      a:1, e:'Sparks memberi saran, siswa yang memutuskan — biasanya satu permintaan per pelajaran.' }
  ],
  m2:[
    { q:'Kapan Anda melakukan pengecekan koneksi dan launcher?',
      o:['Di awal pelajaran, sebelum materi, agar game terunduh selagi Anda berkenalan dengan grup.','Di tengah pelajaran, saat siswa membutuhkan Minecraft.','Di akhir, agar tidak menyita waktu pelajaran.'],
      a:0, e:'Sebelum materi: game terunduh selagi Anda berkenalan dengan grup.' },
    { q:'Kredensial apa yang Anda gunakan untuk mengunduh dan masuk ke Kodland Launcher?',
      o:['Akun baru yang Anda buat sendiri.','Kredensial yang sama dengan Kodland Sparks, yang diberikan oleh departemen Operasional atau Pengajaran.','Akun milik siswa.'],
      a:1, e:'Launcher menggunakan kredensial Kodland Sparks Anda, yang diberikan oleh departemen Operasional atau Pengajaran.' },
    { q:'Di mana siswa menemukan tautan yang harus dikirim di kartu pelajaran?',
      o:['Di komentar di bawah proyek.','Di Sparks: My projects → buka proyek yang sudah dipublikasikan → salin alamat dari bilah browser.','Di launcher, di tab Play.'],
      a:1, e:'Tautannya adalah alamat halaman proyek: My projects → proyek yang sudah dipublikasikan → bilah browser.' },
    { q:'Untuk apa 7–10 menit terakhir pelajaran?',
      o:['Waktu tambahan untuk membangun.','Publikasi, pamer karya, dan umpan balik — ditambah rekap dan PR.','Bermain bebas.'],
      a:1, e:'Jaga menit-menit terakhir: publikasi, pamer karya dengan umpan balik, dan rekap.' },
    { ctx:'Di Pelajaran 1, launcher seorang siswa tidak mau jalan, sementara anggota grup lainnya sudah siap.',
      q:'Apa yang Anda lakukan?',
      o:['Menghentikan pelajaran sampai launcher-nya berfungsi.','Melanjutkan pelajaran bersama grup — skin digambar di Sparks, di browser — dan membantu siswa tersebut saat kerja mandiri.','Meminta siswa mencoba lagi di rumah dan melewatkan pelajaran.'],
      a:1, e:'Satu masalah tidak boleh menghentikan grup: siswa tetap menggambar dan memublikasikan skin, dan Anda memperbaiki launcher-nya saat kerja mandiri.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Semua modul selesai!',
  html: `<p>Anda hampir selesai! Kembalilah ke halaman pelatihan LMS tempat Anda membuka pelatihan ini. Tes DST tersedia tepat di bawah pelatihan.</p>
    <p>👉 <b>Anda wajib mengerjakan dan lulus tes DST agar pelatihan dianggap selesai dengan sukses.</b> Jika Anda tidak mengerjakan tes DST, pelatihan akan tetap berstatus belum selesai dan bisa kedaluwarsa.</p>
    <p>Nilai minimum kelulusan adalah <b>80%</b>.</p>
    <p>Semoga sukses! ❤️</p>`,
  nexts: [
    ['📒', '<b>Sebelum setiap pelajaran:</b> baca Teacher Notes di Backoffice dan coba sendiri alur pelajarannya di launcher.'],
    ['🟩', '<b>Menit-menit pertama:</b> pengecekan koneksi dan launcher, lalu hasil akhir dan tujuan pelajaran.'],
    ['🔗', '<b>Tautannya:</b> My projects → proyek yang sudah dipublikasikan → alamat di bilah browser.'],
    ['⏱️', '<b>7–10 menit terakhir:</b> publikasi, pamer karya, dan umpan balik.']
  ]
};
