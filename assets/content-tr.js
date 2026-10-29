/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2232 · TR] · TURKISH
   Translated from content-en.js (the base version). Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'tr' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM kurs eğitimi',
  footer: 'kodland · Yeni Eğitim Modeli · Kurs eğitimi',
  devLink: '🛠 Developer',
  logoSub: 'Yeni Eğitim Modeli',
  navHome: '← Ana sayfa',
  navBackModule: '← Modüle dön',
  moduleN: 'Modül {n}',
  badgeStart: 'Başla →',
  badgeLocked: '🔒 Önce Modül {n}’i tamamla',
  badgeDone: '✓ Tamamlandı · %{score}',
  progLabel: 'modül tamamlandı',
  progAllDone: 'Modüller tamamlandı 🎉',
  eyebrow: '{course} · Modül {n} / {total}',
  ctaTitle: 'Modül kontrolü',
  ctaText: '{n} kısa soru. Geçmek için %70 veya üzeri gerekir.',
  lockSim: '🔒 Kontrolü açmak için yukarıdaki simülasyonu tamamla.',
  startCheck: 'Kontrole başla →',
  retake: '🔁 Kontrolü tekrarla',
  qmeta: '{e} Modül {n} kontrolü · Soru {i} / {total}',
  fbRight: '✅ <b>Doğru!</b> ',
  fbWrong: '❌ <b>Tam olarak değil.</b> ',
  nextQuestion: 'Sonraki soru →',
  seeResult: 'Sonucumu gör →',
  passedTitle: 'Geçtin!',
  failTitle: 'Az kaldı',
  scoreLine: '<b>{n} sorudan {score}</b> tanesini doğru cevapladın.',
  failText: '%70 veya üzeri gerekiyor. Modülü tekrar gözden geçir ve yeniden dene — istediğin kadar tekrar edebilirsin.',
  nextUnlocked: '<b>Modül {n} · {title}</b> açıldı.',
  goModule: 'Modül {n}’e git →',
  allDoneText: 'Bu eğitimin iki modülünü de tamamladın.',
  seeNext: 'Sıradaki adımı gör →',
  reviewModule: '📖 Modülü gözden geçir',
  homeDoneTitle: 'Modüller tamamlandı!',
  homeDoneText: 'Son bir adım kaldı: LMS’teki eğitim sayfasında DST testi.',
  homeDoneBtn: 'Şimdi ne yapmalıyım →',
  doneBadge: '✓ Tamamlandı',
  doneBack: 'Modüllere dön',
  lockedTitle: 'Henüz kilitli',
  lockedModule: 'Önce Modül {n}’i tamamla.',
  lockedStep: 'Bunu açmak için önceki adımı tamamla.',
  ok: 'Tamam',
  linkOpen: 'Aç ↗',
  projPlay: '▶ Aç ↗',
  simOpen: '▶ Simülasyonu burada aç',
  simClose: '✕ Simülasyonu kapat',
  simNewTab: 'Yeni sekmede aç ↗',
  simDone: '✅ Simülasyon tamamlandı',
  simTodo: '○ Simülasyon bekliyor',
  checkTag: 'İşaretle',
  mythTag: 'Efsane',
  mythTap: 'Gerçeği görmek için dokun →',
  mythReality: 'Gerçek ✓',
  sortWrong: '✗ Tam olarak değil.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2232';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Kurs eğitimi · [2232]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: '8–9 yaş öğrenciler için: Minecraft’ta oyuncu olmaktan çıkıp yaratıcıya dönüşürler — kendi kahramanlarını ve evlerini, redstone mekanizmalarını ve Lua ile programladıkları bir Asistan robotu oluştururlar. İki modül: kursun içeriği ve derslerin teknik tarafı.',
  facts: [
    ['🧑‍💻', '<b>Kendi hızında.</b> İlerlemen bu tarayıcıda kaydedilir. Her modül kısa bir kontrolle biter.'],
    ['⚡', '<b>Uygulama dahil.</b> Bir Minecraft yapısının nasıl yayınlandığını ve en sık karşılaşılan sorunu pratik yapman için bir Kodland Sparks simülasyonu.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Başlamadan önce:</b> önce <b>Yeni Eğitim Modeli (EM) ana eğitimini</b> tamamla. Bu kurs eğitimi ondan sonra gelir ve orada gördüklerinin üzerine kurulur: Backoffice ve öğretmen notları (Teacher Notes), Follow Mode ile Classroom, Kodland Sparks turu ve ders kalitesi.' },
  { kind:'warn', e:'🔄', html:'<b>Backoffice’teki ders içerikleri sürekli güncellenir.</b> Dersler, öğrencilerden ve eğitmenlerden gelen geri bildirimlerle sürekli iyileştirilir. Endişelenme: bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'Kursun içeriği',
    desc:'Kursun genel bilgileri, öğrencinin kazanımları ve Modül 1’in ilk dersi.',
    obj:'Minecraft CraftForge Beginner’ın ilk dersine hazırlan. Bu derste 8–9 yaş öğrenciler kendi skin’lerini oluşturur, Kodland Sparks’ta yayınlar, bu skin’i giyerek kursun dünyasına girer ve kendi evlerini inşa etmeye başlar.',
    offer:[['🧱','Kursun genel bilgilerini ve öğrencinin kazanımlarını öğren.'],['📖','İlk derste ne olduğunu öğren.'],['🤖','Asistan robotun ve Sparks AI’ın nasıl kullanıldığını anla.'],['📘','İlk dersi ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Yaş','8–9'],['⏱️','Ders','60 dk'],['📚','Program','40 ders · 10 modül'],['🌙','Dil','Lua']] },
        { t:'trio', items:[
          ['🎬','Önce sonuç','Her ders, bitmiş sonucu göstererek ve öğrencilerin ne öğreneceğini söyleyerek açılır. Ardından yolu kendi ekranında gösterir ve onlara adım adım rehberlik edersin.'],
          ['🛠️','Oyuncudan yaratıcıya','Bir oyunda kuralları başkası koymuştur. Burada öğrenci inşa eder, bir robotu programlar, mekanizmalar yapar — ve sonucu başkalarına gösterir.'],
          ['🔍','Hatalar sürecin bir parçasıdır','Bir şey çalışmadığında: <i>Ne görüyorum? Neden böyle? Neyi deneyeceğim? İşe yaradı mı?</i> Bazı derslerde, öğrencilerin nedeni kendilerinin bulması için senin ekranında planlı bir hata yer alır.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Öğrenciler 1. Dersten itibaren çalışmalarını portfolyoları olan <b>Kodland Sparks</b>’ta yayınlar. <b>Sparks AI</b> fikir ve geri bildirim önerir, ancak neyi alacağına öğrenci karar verir.' }
      ]},
      { id:'goals', e:'🎓', title:'Öğrencinin kazanımları', blocks:[
        { t:'p', html:'Kursun sonunda öğrenci şu kazanımlara ulaşır:' },
        { t:'cards', cols:2, items:[
          ['🧱','Projeler oluşturur','Kodland Sparks portfolyosunda dokuzdan fazla proje ve bir mezuniyet projesi: yapıların, mekanizmaların ve programların birlikte çalıştığı kendi arazisi.'],
          ['🤖','Lua ile bir robotu programlar','Komutlar, argümanlar, değişkenler, döngüler, koşullar ve kendi fonksiyonları. Robot inşa eder, kazar, engellerden kaçar ve görevleri tamamlar — öğrenci de büyük bir görevi adımlara bölmeyi öğrenir.'],
          ['⚡','Mekanizmalar ve mantık kurar','Redstone, Minecraft’ın “elektriği”dir: şalterler, kablolar, lambalar, kapılar, pistonlar ve tuzaklar. Öğrenci “eğer–ise” mantığını öğrenir ve sonucu hemen görür.'],
          ['🏰','Yapılar ve oyunlar oluşturur','Şekle, renge ve ışığa dikkat ederek yapılar inşa eder; sınıf arkadaşlarının oynadığı, kendi kuralları olan bir mini oyun yapar.'],
          ['💬','Çalışmasını özgüvenle anlatır','Her dersin sonunda her şeyin nasıl çalıştığını açıklar ve mezuniyet projesini gruba sunar.'],
          ['🧠','Hayat becerileri','Yaratıcılık, takım çalışması (birbirinin oyunlarını oynamak ve geri bildirim vermek), iletişim ve eleştirel düşünme: hataları bulmak ve Sparks AI’ın ipuçlarını akıllıca kullanmak.']
        ]}
      ]},
      { id:'les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1, <b>“İlk Ateş. Dünyam ve İlk Komutlar”</b>, <b>“Kahramanım ve evim”</b> projesiyle biter. İlk dersi aç ve bilmen gerekenleri, ana sonucu, rolünü ve dikkat edilmesi gerekenleri oku.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1D1', e:'🔥', h:'1. Ders — İlk Ateş', p:'Kursun ilk dersi (7 kart ve ödev). Öğrenciler launcher’ı başlatır, grupla tanışır, kendi skin’lerini çizip Sparks’ta yayınlar, dünyaya girmek için skin’i giyer ve bir adada kendi evlerini inşa etmeye başlar.',
            acc:[['📚','Bilmen gerekenler','<ul><li>Dersin akışı: bağlantı ve launcher → bizi neler bekliyor → launcher oyunu indirirken Sparks’ta skin → skin’i giy, dünyaya gir ve adaya ışınlan → evini inşa et → proje sunumu → kapanış ve ödev.</li><li><b>Skin stüdyosu</b> doğrudan ders kartının içinde açılır (tam ekran için <b>Expand</b> düğmesi). Öğrencinin Sparks’a gitmek için dersten çıkmasına gerek yoktur.</li><li>Launcher’da: <b>Create → Skins → kendi skin’i → Wear</b>, ardından dünya koduyla <b>Play</b> ve kendini görmek için <b>F5</b>.</li><li>Öğrenciler <b>yaratıcı modda</b> inşa eder: duvarlar, bir giriş ve takma adlarının yazılı olduğu bir tabela. Çatı ödevdir.</li></ul>'],
                 ['🎯','Ana sonuç','<ul><li>🏁 Skin <b>Sparks’ta yayınlanmış ve bağlantısı görevde</b>. Herkes buna yaklaşık 29. dakikada ulaşır; bu kart asla kısaltılmaz.</li><li>Her öğrenci dünyaya kendi skin’iyle girer ve adada durur.</li><li>Evin duvarları, bir girişi ve takma adın yazılı olduğu bir tabelası vardır.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Grubu tanı: kendinden bahset, herkese söz ver ve ders boyunca isimleri kullan.</li><li>Dersin hedefini yüksek sesle söyle: “Bugün herkes kendi skin’ini oluşturacak ve dünya onu tanıyacak.”</li><li>Sor: “Yaratmak, sadece oynamaktan nasıl farklıdır?” — bir oyunda kuralları başkası koymuştur; burada sen yaratırsın ve başkalarına gösterirsin.</li><li><b>Planlı hata, yalnızca senin ekranında:</b> <b>Wear</b>’a basmadan dünyaya gir → herkese benziyorsun. Nedenini sor, sonra düzelt. Öğrenciler bunu hemen doğru yapar.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>1. Derste birinin launcher’ı neredeyse kesinlikle açılmayacaktır. Skin tarayıcıda çizildiği için öğrenci çalışmaya devam eder, sen de bağımsız çalışma sırasında launcher’ı düzeltirsin.</li><li>Tam ekran stüdyonun içinde <b>Esc</b> çalışmaz: üstteki <b>Collapse</b> düğmesini kullan.</li><li>Çizim sonsuza kadar sürebilir: “Kusursuz değil, senin olsun. Evde bitirebilirsin.”</li><li>Bağlantıların yalnızca ekranda gösterilmediğini, gerçekten ulaştığını Backoffice’te kontrol et.</li></ul>'],
                 ['⚙️','Teknik konular','<ul><li>Bir gün önce launcher bağlantılarını grup sohbetine gönder ve öğrencilerden önceden kurmalarını iste.</li><li>Tüm yolu kendin dene: Sparks’ta skin → yayınla → Skins → Wear → kodla dünyaya gir → adaya ışınlan.</li><li>Dünya kodu: <b>Welcome to CraftForge</b> (Play sekmesi). Işınlanma komutu öğretmen notlarında ve kartta yer alır.</li><li>Ödev: evi bitirmek, ekran görüntüsünü ödev kartındaki yapay zeka yardımcısına göstermek ve ekran görüntüsünü bir cümleyle birlikte göndermek.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Her dersin ilk öğretmen notunda tam plan yer alır: özet, ana sonuç, her kartın zamanlaması, senin rolün ve riskler. 1. Derste ayrıca bir hazırlık videosu vardır. <b>Dersten önce tüm öğretmen notlarını oku.</b>' }
      ]},
      { id:'bo', e:'📘', title:'İlk dersi Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve ilk dersi kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2232', e:'📘', title:'Kursu Backoffice’te aç', small:'[2232] Minecraft CraftForge Beginner — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Derslerin teknik tarafı',
    desc:'Kodland Launcher, güçlü bir başlangıç, Sparks’ta yayınlama ve en sık karşılaşılan sorunlar.',
    obj:'Bir Minecraft CraftForge dersini teknik olarak neyin çalıştırdığını öğren: Kodland Launcher, içerikten önce launcher kontrolü, yayınlamaya ve çalışmaları göstermeye ayrılan son dakikalar, öğrencilerin proje bağlantısını nerede bulduğu ve en sık karşılaşılan sorunların çözümleri.',
    needs:['mcPublish'],
    offer:[['🟩','Kodland Launcher’ı indir, kur ve giriş yap.'],['🚀','Launcher kontrolünü içerikten önce yap ve derse sonuçla başla.'],['📤','Her öğrencinin Sparks’ta yayınlamasını ve bağlantıyı göndermesini sağla.'],['🛠️','En sık karşılaşılan launcher ve Minecraft sorunlarını çöz.']],
    sections:[
      { id:'focus', e:'🎯', title:'Bir dersi başarılı kılan 3 nokta', blocks:[
        { t:'p', html:'Bunlar, ürün ekibinin Minecraft kursları için belirlediği odak alanlarıdır. Her birini aç:' },
        { t:'acc', items:[
          ['🎬','Önce sonucu göster — ve yaratmanın oynamaktan neden farklı olduğunu','<p>İlk dakikalarda <b>bitmiş sonucu göster</b> ve öğrencilerin bugün ne öğreneceğini söyle.</p><ul><li>Brifing kartını kullan: “Bakın, bir saat sonra neleriniz olacak: kendi zanaatkârınız ve adada kendi eviniz.”</li><li>Bir proje inşa etmenin <b>sadece oynamaktan nasıl farklı olduğunu</b> açıkla: bir oyunda kuralları başkası koymuştur; burada öğrenci yaratır ve başkalarına gösterir.</li><li>Bir veya iki öğrenciye sor: “Sizce yaratmak, sadece oynamaktan nasıl farklı?”</li></ul>'],
          ['🟩','Giriş ve launcher kontrolü içerikten önce gelir','<p>Bağlantı ve launcher kontrolünü içerik bölümünden <b>önce</b> yap; böylece sen grubu tanırken oyun iner.</p><ul><li>Bağlantı: bir dakika — kamera, mikrofon, “Merhaba!”.</li><li>Launcher: 2–3 dakika — bağlantıları gönder, girişi kendi ekranında göster, yeşil çubuk görününce sohbete “+” yazmalarını iste.</li><li>İndirmenin bitmesini bekleme ve bir iki “−” için grubu bekletme: bağımsız çalışma sırasında onlara geri dön.</li><li>2. Dersten itibaren: “Launcher’ı açın ve dünyanızı başlatın — biz konuşurken yüklensin.”</li></ul>'],
          ['⏱️','Son 7–10 dakikayı koru','<p>Son <b>7–10 dakika</b> yayınlamaya, çalışmaları göstermeye ve geri bildirime ayrılır — inşa etmeye verilmez.</p><ul><li>Kesin duraklar kullan: iki dakika uyarısı, ardından “Durun, eller klavyeden çekilsin. Sunum zamanı!” ve hemen ilk öğrencinin adını söyle.</li><li>3 katılımcı çalışmasını gösterir; grup somut geri bildirim verir: isim, neyin işe yaradığı, bir öneri.</li><li>Kapanış, yansıma, sonraki ders ve ödevle bitir — bunlar asla kısaltılmaz.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Öğrenciler Minecraft’ı <b>Kodland Launcher</b> üzerinden açar: oyunu indirir, kurs dünyasını açar ve skin oluşturup giydikleri yer de burasıdır. İlk dersinden önce bilgisayarında kurulu ve hazır olması gerekir.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Giriş bilgilerin:</b> launcher’ı indirmek ve giriş yapmak için <b>Kodland Sparks ile aynı giriş bilgilerini</b> kullanırsın. Bunlar sana <b>Operasyon veya Eğitim departmanı</b> tarafından sağlanır. Öğrenciler kendi Kodland hesaplarıyla giriş yapar — yeni bir hesaba ihtiyaçları yoktur.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'İndirme sayfası ve resmi rehber', small:'portfolio.kodland.org/launcher/download — Windows ve Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Kurulum dosyasını indir.</li><li>İndirilen dosyayı aç.</li><li>Mavi uyarı ekranında <b>More info → Run anyway</b>’e tıkla, ardından kurulum adımlarını izle.</li></ol>'],
          ['🍎','macOS 13 veya üzeri','<ol><li>İşlemcine uygun dosyayı indir (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>İndirilen dosyayı aç ve <b>Kodland Launcher</b>’ı <b>Applications</b> klasörüne sürükle. O pencereden açma.</li><li><b>Terminal</b>’i aç, aşağıdaki satırı yapıştır ve Return’e bas. Hiçbir çıktı olmaması normaldir.</li><li>Launcher’ı <b>Applications</b> klasöründen aç.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Giriş yap','<b>Sign in</b>’e tıkla. Bir tarayıcı sayfası açılır: <b>Sign in with Kodland</b>’e tıkla — tek bir düğme, şifre yok. Tarayıcı açılmazsa, kısa bir kod almak için düğmenin altındaki bağlantıyı kullan (beş dakika geçerlidir).'],
          ['Oyunu indir','Launcher oyunu birkaç adımda indirir (yaklaşık 550 MB; yaklaşık 1,8 GB boş alan gerekir). Çalışmaya devam etmesine izin ver.'],
          ['Oyna','Her şeyin tamamlandığını söylediğinde <b>Play</b>’e bas. İlk açılış bir dakikaya kadar sürebilir. Dünya kodu <b>Play</b> sekmesine girilir.'],
          ['Güncellemeler','Launcher güncellenmezse, indirme sayfasından en son sürümü eskisinin üzerine kur. Dünyalar ve skin’ler yerinde kalır.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Doğrudan indirme bağlantıları (ders kartındakiler)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Bir öğrencinin launcher’ı çalışmadığında', blocks:[
        { t:'p', html:'1. Derste birinin launcher’ı neredeyse kesinlikle açılmayacaktır. Bu sorun değil: <b>önce diğerlerine bir görev ver</b>, ardından öğrenciyle ilgilen. Ekranını paylaşmasını iste ve ona sesli olarak rehberlik et: “Şimdi ne görüyorsun? Bu düğmeye tıkla.” Birkaç dakikada çözülmezse: “Şimdilik benim ekranımı takip et, birazdan sana döneceğim.”' },
        { t:'acc', open:false, items:[
          ['📥','Dosya inmiyor','Karttaki bağlantıyı sohbete tekrar gönder ve öğrencinin kendi sistemine uygun dosyayı seçtiğini kontrol et.'],
          ['🍎','Mac launcher’ı açmıyor','İlk karttaki Terminal satırını çalıştır ve launcher’ı <b>Applications</b> klasöründen yeniden aç.'],
          ['🪟','Windows dosyanın açılıp açılmayacağını soruyor','<b>More info → Run anyway</b>.'],
          ['🔑','Öğrenci giriş yapamıyor','Derslerdeki Kodland girişinin aynısı — yeni hesap yok. Giriş penceresi tarayıcıda açılır ve çoğu zaman diğer pencerelerin arkasında kalır.'],
          ['⏳','Oyun uzun süre yükleniyor veya indirme duruyor','İlk indirme uzun sürer, bu normaldir. Çubuk durursa: interneti kontrol et, launcher’ı kapatıp yeniden aç — indirme kaldığı yerden devam eder.'],
          ['🖌️','Launcher hiç çalışmadı','1. Derste öğrenci yine de skin’i Sparks’ta (tarayıcıda) çizer ve yayınlar, böylece ana sonuca ulaşır. Dünyada ise senin ekranını takip eder. Dersten sonra launcher’ı açması için ona yardım et.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Birkaç öğrencide aynı hata varsa, çözümü herkese bir kez göster.' }
      ]},
      { id:'req', e:'💻', title:'Bilgisayar gereksinimleri', blocks:[
        { t:'p', html:'Bir öğrencinin Minecraft CraftForge için ihtiyaç duyduğu şeyler bunlardır. Bir öğrenci oyunu kurarken veya çalıştırırken sorun yaşadığında işe yarar:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Bilgisayar ve sistem','<b>Windows 10/11 (64 bit)</b> veya <b>macOS 13 ya da üzeri</b> yüklü masaüstü ya da dizüstü bilgisayar. Mac: yalnızca Apple Silicon (M1 veya daha yeni).'],
          ['🧠','Bellek ve işlemci','Harici ekran kartıyla <b>8 GB RAM</b> veya dahili grafikle <b>12 GB</b>. <b>4 çekirdekli</b> bir işlemci.'],
          ['🎮','Grafik ve disk','<b>Vulkan 1.3</b> destekli ve <b>2 GB</b> video belleğine sahip bir ekran kartı. <b>5 GB</b> boş disk alanı.'],
          ['🎧','Bağlantı ve ekipman','Görüntülü görüşmeleri kaldırabilecek stabil bir internet bağlantısı. İki tuşlu fare, klavye, mikrofonlu kulaklık ve kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Kodland Sparks’ta yayınlama', blocks:[
        { t:'p', html:'Yayınlama birçok dersin ana sonucudur: öğrenci çalışmasını Sparks’ta yayınlar ve bağlantıyı ders kartına yapıştırır. Modül 1’de iki yol vardır:' },
        { t:'cards', cols:2, items:[
          ['🎨','Skin (1. Ders)','1. Derste skin stüdyosu kartın içindedir: <b>Publish</b> → skin’e bir ad ver → tekrar <b>Publish</b>. Bir skin dosyası Sparks’tan da yayınlanabilir: <b>Publish project → Minecraft skin</b> → ad → <b>Model</b> (Steve veya Alex) → <b>Skin file</b> (64×64 PNG) → <b>Publish</b>.'],
          ['🖼️','Bir yapı','Yapının ekran görüntüsü (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → ad → <b>Drawing</b>: ekran görüntüsünü yükle → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Bağlantı nerede','Bağlantı, proje sayfasının adresidir. Öğrenci Sparks’ta <b>My projects</b>’e gider, <b>yayınlanan projeyi</b> açar ve bağlantıyı <b>tarayıcının adres çubuğundan</b> kopyalar: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Ders kartına yapıştır','Bu bağlantı, Kodland platformundaki ders kartına yapıştırılır (örneğin, “Kodland Sparks’taki Skin’imin bağlantısı”).'],
          ['Görünürlüğü seç','<b>Public</b> akışta ve portfolyoda görünür. <b>Friends only</b> arkadaşlar ve öğretmenler içindir. <b>Only me</b> projeyi gizli yapar — bağlantıyı başka kimse açamaz, sen bile.'],
          ['İki farklı adım','Sparks’ta yayınlamak ve Kodland platformunda bağlantıyı göndermek <b>iki farklı adımdır</b>. Bağlantıların gerçekten ulaştığını Backoffice’te kontrol et.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Simülasyon', title:'Kodland Sparks’ta bir skin ve bir yapı yayınla', text:'Kodland Sparks’ın ve ders kartının bir kopyası: öğrenci olarak bir skin yayınlar, bağlantısını My projects’te bulur, platformdaki karta yapıştırır, bir yapının ekran görüntüsünü Image projesi olarak yayınlar ve açılmayan bir bağlantıyı düzeltirsin. Yaklaşık 5 dakika sürer. Bitirdiğinde modül kontrolü açılır.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Bir şey ters gittiğinde', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','Skin “Skins” bölümünde yok','Skin’in Sparks’ta yayınlandığını ve launcher’ın aynı hesabı kullandığını kontrol et. <b>Skins</b> bölümünü kapatıp yeniden aç.'],
          ['👕','Öğrenci oyun açıkken “Wear”a bastı','Launcher, skin’in oyun yeniden başladığında görüneceğini söyler: dünyadan çık ve tekrar gir.'],
          ['📍','Işınlanma çalışmadı','Öğrenciden ekranını paylaşmasını iste: genellikle komut eksiktir veya son sayının önündeki eksi işareti unutulmuştur.'],
          ['⛶','Öğrenci tam ekran stüdyodan çıkamıyor','Stüdyonun üstündeki <b>Collapse</b>’a tıkla — içeride <b>Esc</b> çalışmaz.'],
          ['🔒','Öğrencinin bağlantısı açılmıyor','Proje muhtemelen <b>Only me</b> olarak kaydedilmiştir (<b>Private project</b> etiketi görünür). Öğrenciden şunu yapmasını iste: <b>My projects → projeyi aç → Edit → Public → Publish</b>. Bağlantı aynı kalır.'],
          ['🖼️','Öğrenci ekran görüntüsünü bulamıyor','Windows’ta <b>Resimler → Ekran Görüntüleri</b> klasöründedir; Mac’te masaüstündedir. Şu an bulunamazsa öğrenci daha sonra evde ekler.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Her ders için teknik kontrol listesi', blocks:[
        { t:'check', title:'✅ Teknik kontrol listem', groups:[
          { h:'☑️ Dersten önce', items:['Dersin tüm öğretmen notlarını okudum ve hazırlık videosunu izledim.','Launcher’ım kurulu ve giriş yapılmış durumda; dersin yolunu kendim denedim.','1. Dersten önce launcher bağlantılarını grup sohbetine gönderdim.'] },
          { h:'🎬 Ders sırasında', items:['Bağlantı ve launcher kontrolünü içerikten önce yaptım.','İlk dakikalarda bitmiş sonucu ve dersin hedefini gösterdim.'] },
          { h:'📤 Dersin sonunda', items:['Son 7–10 dakikayı yayınlamaya, çalışmaları göstermeye ve geri bildirime ayırdım.','Herkes yayınlanan projenin bağlantısını ders kartına gönderdi.','Çalıştıklarını kontrol etmek için bazı bağlantıları açtım.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Minecraft CraftForge Beginner kimler içindir ve her ders ne kadar sürer?',
      o:['8–9 yaş öğrenciler için, 60 dakikalık grup dersleri.','10–12 yaş öğrenciler için, 90 dakikalık dersler.','13–17 yaş öğrenciler için, 90 dakikalık dersler.'],
      a:0, e:'Beginner, 8–9 yaş öğrenciler içindir: grupla yapılan 60 dakikalık 40 ders.' },
    { q:'Öğrenciler Asistan robotu hangi programlama diliyle programlar?',
      o:['Python.','Scratch blokları.','Lua.'],
      a:2, e:'Asistan robot Lua ile programlanır: komutlar, argümanlar, değişkenler, döngüler, koşullar ve fonksiyonlar.' },
    { q:'Bir ders nasıl başlar?',
      o:['Kimse dünyaya girmeden önce redstone hakkında teoriyle.','Bitmiş sonucu göstererek, hedefi söyleyerek ve yaratmanın sadece oynamaktan nasıl farklı olduğunu açıklayarak.','Öğrenciler bir örnek görmeden hemen inşa etmeye başlar.'],
      a:1, e:'Önce sonuç: öğrenciler nereye gittiklerini ve yaratmanın oynamaktan neden farklı olduğunu görür.' },
    { q:'Öğrenci kurstan neyle ayrılır?',
      o:['Yazılı bir final sınavıyla.','Kodland Sparks portfolyosunda dokuzdan fazla proje ve gruba sunulan bir mezuniyet projesiyle — kendi arazisi.','Yalnızca 1. Dersteki evle.'],
      a:1, e:'Portfolyoda dokuzdan fazla proje ve yapıların, mekanizmaların ve programların birlikte çalıştığı bir mezuniyet projesi.' },
    { q:'Sparks AI’ın derslerdeki rolü nedir?',
      o:['Projeyi öğrenci yerine inşa eder.','Fikir ve geri bildirim önerir; neyi alacağına öğrenci karar verir.','Dersi eğitmen yerine değerlendirir.'],
      a:1, e:'Sparks önerir, öğrenci karar verir — genellikle ders başına bir istek.' }
  ],
  m2:[
    { q:'Bağlantı ve launcher kontrolünü ne zaman yaparsın?',
      o:['Dersin başında, içerikten önce; böylece sen grubu tanırken oyun iner.','Dersin ortasında, öğrencilerin Minecraft’a ihtiyacı olduğunda.','Sonunda, dersten zaman almasın diye.'],
      a:0, e:'İçerikten önce: sen grubu tanırken oyun iner.' },
    { q:'Kodland Launcher’ı indirmek ve giriş yapmak için hangi giriş bilgilerini kullanırsın?',
      o:['Kendi oluşturduğun yeni bir hesabı.','Operasyon veya Eğitim departmanının sağladığı, Kodland Sparks ile aynı giriş bilgilerini.','Bir öğrencinin hesabını.'],
      a:1, e:'Launcher, Operasyon veya Eğitim departmanının sağladığı Kodland Sparks giriş bilgilerini kullanır.' },
    { q:'Öğrenci, ders kartına göndereceği bağlantıyı nerede bulur?',
      o:['Projenin altındaki bir yorumda.','Sparks’ta: My projects → yayınlanan projeyi aç → adresi tarayıcı çubuğundan kopyala.','Launcher’da, Play sekmesinde.'],
      a:1, e:'Bağlantı, proje sayfasının adresidir: My projects → yayınlanan proje → tarayıcı çubuğu.' },
    { q:'Dersin son 7–10 dakikası ne içindir?',
      o:['Ek inşa süresi.','Yayınlama, çalışmaları gösterme ve geri bildirim — artı kapanış ve ödev.','Serbest oyun.'],
      a:1, e:'Son dakikaları koru: yayınlama, geri bildirimli sunum ve kapanış.' },
    { ctx:'1. Derste bir öğrencinin launcher’ı açılmıyor, grubun geri kalanı ise hazır.',
      q:'Ne yaparsın?',
      o:['Launcher çalışana kadar dersi durdurursun.','Grubu devam ettirirsin — skin Sparks’ta, tarayıcıda çizilir — ve bağımsız çalışma sırasında öğrenciye yardım edersin.','Öğrenciye evde tekrar denemesini söyler ve dersi atlarsın.'],
      a:1, e:'Tek bir sorun grubu durdurmamalı: öğrenci yine de skin’i çizip yayınlar, sen de bağımsız çalışma sırasında launcher’ı düzeltirsin.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Modüller tamamlandı!',
  html: `<p>Neredeyse bitirdin! Bu eğitime eriştiğin LMS eğitim sayfasına geri dön. DST testi, eğitimin hemen altında yer alıyor.</p>
    <p>👉 <b>Eğitimin başarıyla tamamlanmış sayılması için DST testini yapman ve geçmen gerekir.</b> DST testini yapmazsan eğitim tamamlanmamış olarak kalır ve süresi dolabilir.</p>
    <p>Geçme notu en az <b>%80</b>’dir.</p>
    <p>Bol şans! ❤️</p>`,
  nexts: [
    ['📒', '<b>Her dersten önce:</b> Backoffice’teki öğretmen notlarını oku ve dersin yolunu launcher’da dene.'],
    ['🟩', '<b>İlk dakikalar:</b> bağlantı ve launcher kontrolü, ardından bitmiş sonuç ve hedef.'],
    ['🔗', '<b>Bağlantı:</b> My projects → yayınlanan proje → tarayıcı çubuğundaki adres.'],
    ['⏱️', '<b>Son 7–10 dakika:</b> yayınlama, çalışmaları gösterme ve geri bildirim.']
  ]
};
