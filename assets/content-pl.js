/* ============================================================
   EM course training · Minecraft CraftForge Beginner [2228 · PL] · POLISH
   For another language: copy this file as content-xx.js and change lang.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names, commands and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by region (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pl' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Szkolenie z kursu EM',
  footer: 'kodland · Nowy Model Edukacyjny · Szkolenie z kursu',
  devLink: '🛠 Deweloper',
  logoSub: 'Nowy Model Edukacyjny',
  navHome: '← Strona główna',
  navBackModule: '← Wróć do modułu',
  moduleN: 'Moduł {n}',
  badgeStart: 'Zacznij →',
  badgeLocked: '🔒 Ukończ moduł {n}',
  badgeDone: '✓ Ukończono · {score}%',
  progLabel: 'ukończonych modułów',
  progAllDone: 'Moduły ukończone 🎉',
  eyebrow: '{course} · Moduł {n} z {total}',
  ctaTitle: 'Sprawdzian modułu',
  ctaText: 'Liczba krótkich pytań: {n}. Zdobądź co najmniej 70%, aby zaliczyć.',
  lockSim: '🔒 Ukończ symulację powyżej, aby odblokować sprawdzian.',
  startCheck: 'Zacznij sprawdzian →',
  retake: '🔁 Powtórz sprawdzian',
  qmeta: '{e} Sprawdzian modułu {n} · Pytanie {i} z {total}',
  fbRight: '✅ <b>Dobrze!</b> ',
  fbWrong: '❌ <b>Niezupełnie.</b> ',
  nextQuestion: 'Następne pytanie →',
  seeResult: 'Zobacz mój wynik →',
  passedTitle: 'Zaliczone!',
  failTitle: 'Prawie się udało',
  scoreLine: 'Poprawnych odpowiedzi: <b>{score} z {n}</b>.',
  failText: 'Potrzebujesz co najmniej 70%. Powtórz moduł i spróbuj jeszcze raz — możesz podchodzić do sprawdzianu tyle razy, ile potrzebujesz.',
  nextUnlocked: '<b>Moduł {n} · {title}</b> jest już odblokowany.',
  goModule: 'Przejdź do modułu {n} →',
  allDoneText: 'Ukończyłeś oba moduły tego szkolenia.',
  seeNext: 'Zobacz kolejne kroki →',
  reviewModule: '📖 Powtórz moduł',
  homeDoneTitle: 'Moduły ukończone!',
  homeDoneText: 'Ostatni krok: test DST na stronie szkolenia w LMS.',
  homeDoneBtn: 'Zobacz, co robić dalej →',
  doneBadge: '✓ Ukończono',
  doneBack: 'Wróć do modułów',
  lockedTitle: 'Jeszcze zablokowane',
  lockedModule: 'Najpierw ukończ moduł {n}.',
  lockedStep: 'Ukończ poprzedni krok, aby odblokować ten.',
  ok: 'OK',
  linkOpen: 'Otwórz ↗',
  projPlay: '▶ Otwórz ↗',
  simOpen: '▶ Otwórz symulację tutaj',
  simClose: '✕ Zamknij symulację',
  simNewTab: 'Otwórz w nowej karcie ↗',
  simDone: '✅ Symulacja ukończona',
  simTodo: '○ Symulacja do wykonania',
  checkTag: 'Odhaczaj',
  mythTag: 'Mit',
  mythTap: 'Kliknij, aby zobaczyć, jak jest naprawdę →',
  mythReality: 'Rzeczywistość ✓',
  sortWrong: '✗ Niezupełnie.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'mcbeg';
COURSE.code = '2228';
COURSE.title = 'Minecraft CraftForge Beginner';
COURSE.color = '#16A34A';

COURSE.home = {
  kicker: '🎓 Szkolenie z kursu · [2228]',
  title: 'Minecraft CraftForge <span class="hl">Beginner</span>',
  lead: 'Dla uczniów w wieku 8–9 lat: w Minecrafcie zmieniają się z graczy w twórców — tworzą własnego bohatera i dom, mechanizmy z redstone i robota Asystenta, którego programują w Lua. Dwa moduły: treści kursu i techniczna strona lekcji.',
  facts: [
    ['🧑‍💻', '<b>We własnym tempie.</b> Twój postęp zapisuje się w tej przeglądarce. Każdy moduł kończy się krótkim sprawdzianem.'],
    ['⚡', '<b>Praktyka w zestawie.</b> Symulacja Kodland Sparks, w której przećwiczysz publikowanie budowli z Minecrafta i najczęstszy problem.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Zanim zaczniesz:</b> najpierw ukończ <b>główne szkolenie z Nowego Modelu Edukacyjnego (EM)</b>. To szkolenie z kursu jest jego kontynuacją i opiera się na tym, co tam poznałeś: Backoffice i Teacher Notes, Classroom z Follow Mode, wycieczka po Kodland Sparks i jakość lekcji.' },
  { kind:'warn', e:'🔄', html:'<b>Treści lekcji w Backoffice są stale aktualizowane.</b> Lekcje są ciągle ulepszane na podstawie opinii uczniów i tutorów. Spokojnie: gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'⛏️', color:'#16A34A', title:'Treści kursu',
    desc:'Ogólne informacje o kursie, co osiąga uczeń i pierwsza lekcja modułu 1.',
    obj:'Przygotuj się do poprowadzenia pierwszej lekcji Minecraft CraftForge Beginner. Uczniowie w wieku 8–9 lat tworzą na niej własnego skina, publikują go w Kodland Sparks, wchodzą w nim do świata kursu i zaczynają budować własny dom.',
    offer:[['🧱','Poznasz ogólne informacje o kursie i to, co osiąga uczeń.'],['📖','Dowiesz się, co dzieje się na pierwszej lekcji.'],['🤖','Zrozumiesz, jak wykorzystuje się robota Asystenta i Sparks AI.'],['📘','Przejrzysz pierwszą lekcję i jej Teacher Notes w Backoffice.']],
    sections:[
      { id:'ov', e:'🧱', title:'Kurs', blocks:[
        { t:'meta', items:[['🧒','Wiek','8–9 lat'],['⏱️','Lekcja','60 min'],['📚','Program','40 lekcji · 10 modułów'],['🌙','Język','Lua']] },
        { t:'trio', items:[
          ['🎬','Najpierw wynik','Każda lekcja zaczyna się od pokazania gotowego wyniku i powiedzenia, czego uczniowie się nauczą. Potem pokazujesz drogę na swoim ekranie i prowadzisz ich krok po kroku.'],
          ['🛠️','Z gracza w twórcę','W grze zasady ustalił ktoś inny. Tutaj uczeń buduje, programuje robota i tworzy mechanizmy — a potem pokazuje wynik innym.'],
          ['🔍','Błędy są częścią procesu','Gdy coś nie działa: <i>Co widzę? Dlaczego tak jest? Co spróbuję? Czy zadziałało?</i> Niektóre lekcje mają zaplanowany błąd na Twoim ekranie, żeby uczniowie sami znaleźli przyczynę.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Uczniowie publikują swoje prace w <b>Kodland Sparks</b>, swoim portfolio, już od lekcji 1. <b>Sparks AI</b> podsuwa pomysły i opinie, ale to uczeń decyduje, co weźmie.' }
      ]},
      { id:'goals', e:'🎓', title:'Co osiąga uczeń', blocks:[
        { t:'p', html:'Na koniec kursu uczeń osiągnie te cele:' },
        { t:'cards', cols:2, items:[
          ['🧱','Tworzy projekty','Ponad dziewięć projektów w portfolio Kodland Sparks oraz projekt końcowy: własną krainę, w której budowle, mechanizmy i programy działają razem.'],
          ['🤖','Programuje robota w Lua','Polecenia, argumenty, zmienne, pętle, warunki i własne funkcje. Robot buduje, kopie, omija przeszkody i wykonuje misje — a uczeń uczy się dzielić duże zadanie na kroki.'],
          ['⚡','Buduje mechanizmy i logikę','Redstone to „prąd” w Minecrafcie: dźwignie, przewody, lampy, drzwi, tłoki i pułapki. Uczeń poznaje logikę „jeśli–to” i od razu widzi efekt.'],
          ['🏰','Tworzy budowle i gry','Buduje, dbając o kształt, kolor i światło, oraz tworzy minigrę z własnymi zasadami, w którą grają koledzy z grupy.'],
          ['💬','Pewnie opowiada o swojej pracy','Na koniec każdej lekcji wyjaśnia, jak wszystko działa, i prezentuje grupie projekt końcowy.'],
          ['🧠','Umiejętności na całe życie','Kreatywność, praca w zespole (granie w gry innych i dawanie informacji zwrotnej), komunikacja i krytyczne myślenie: szukanie błędów i mądre korzystanie z podpowiedzi Sparks AI.']
        ]}
      ]},
      { id:'les', e:'📖', title:'Pierwsza lekcja', blocks:[
        { t:'p', html:'Moduł 1, <b>„Pierwszy ogień. Mój świat i pierwsze polecenia”</b>, kończy się projektem <b>„Mój bohater i mój dom”</b>. Otwórz pierwszą lekcję i przeczytaj, co musisz wiedzieć, jaki jest kluczowy wynik, jaka jest Twoja rola i na co uważać.' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'🔥', h:'Lekcja 1 — Pierwszy ogień', p:'Pierwsza lekcja kursu (7 kart i zadanie domowe). Uczniowie uruchamiają launcher, poznają grupę, rysują i publikują własnego skina w Sparks, zakładają go, żeby wejść do świata, i zaczynają budować swój dom na wyspie.',
            acc:[['📚','Co musisz wiedzieć','<ul><li>Przebieg: połączenie i launcher → co nas czeka → skin w Sparks, podczas gdy launcher pobiera grę → założenie skina, wejście do świata i teleport na wyspę → budowa domu → prezentacja projektów → podsumowanie i zadanie domowe.</li><li><b>Studio skinów</b> otwiera się bezpośrednio w karcie lekcji (przycisk <b>Expand</b> — pełny ekran). Uczeń nie musi wychodzić z lekcji, żeby przejść do Sparks.</li><li>W launcherze: <b>Create → Skins → własny skin → Wear</b>, potem <b>Play</b> z kodem świata i <b>F5</b>, żeby zobaczyć siebie.</li><li>Uczniowie budują w <b>trybie kreatywnym</b>: ściany, wejście i tabliczkę ze swoim nickiem. Dach to zadanie domowe.</li></ul>'],
                 ['🎯','Kluczowy wynik','<ul><li>🏁 Skin jest <b>opublikowany w Sparks, a jego link jest w zadaniu</b>. Wszyscy docierają do tego mniej więcej do 29. minuty; tej karty nigdy się nie skraca.</li><li>Każdy uczeń wchodzi do świata we własnym skinie i stoi na wyspie.</li><li>Dom ma ściany, wejście i tabliczkę z nickiem.</li></ul>'],
                 ['🧑‍🏫','Twoja rola','<ul><li>Poznaj grupę: opowiedz o sobie, daj każdemu głos i zwracaj się do uczniów po imieniu przez całą lekcję.</li><li>Powiedz na głos cel lekcji: „Dziś każdy stworzy własnego skina, a świat go rozpozna”.</li><li>Zapytaj: „Czym tworzenie różni się od zwykłego grania?” — w grze zasady ustalił ktoś inny; tutaj tworzysz i pokazujesz innym.</li><li><b>Zaplanowany błąd, tylko na Twoim ekranie:</b> wejdź do świata bez klikania <b>Wear</b> → wyglądasz jak wszyscy. Zapytaj dlaczego, potem to popraw. Uczniowie od razu robią to dobrze.</li></ul>'],
                 ['📌','Uważaj','<ul><li>Na L1 komuś prawie na pewno nie uruchomi się launcher. Skina rysuje się w przeglądarce, więc uczeń dalej pracuje, a Ty naprawiasz launcher w czasie pracy samodzielnej.</li><li><b>Esc</b> nie działa w studiu na pełnym ekranie: użyj przycisku <b>Collapse</b> na górze.</li><li>Rysowanie może trwać w nieskończoność: „Ma być Twoje, nie idealne. Możesz dokończyć w domu”.</li><li>Sprawdź w Backoffice, czy linki naprawdę dotarły, a nie tylko czy były pokazane na ekranie.</li></ul>'],
                 ['⚙️','Aspekty techniczne','<ul><li>Dzień wcześniej wyślij linki do launchera na czat grupy i poproś uczniów, żeby zainstalowali go wcześniej.</li><li>Przejdź całą ścieżkę sam: skin w Sparks → publikacja → Skins → Wear → wejście do świata z kodem → teleport na wyspę.</li><li>Kod świata: <b>Welcome to CraftForge</b> (zakładka Play). Polecenie teleportu jest w Teacher Notes i na karcie.</li><li>Zadanie domowe: dokończyć dom, pokazać zrzut ekranu asystentowi AI wbudowanemu w kartę zadania domowego i przesłać zrzut ekranu z jednym zdaniem.</li></ul>']] },
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'Pierwsza Teacher Note każdej lekcji zawiera pełny plan: podsumowanie, kluczowy wynik, czas każdej karty, Twoją rolę i ryzyka. Lekcja 1 ma też film przygotowawczy. <b>Przeczytaj wszystkie Teacher Notes przed lekcją.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Przejrzyj pierwszą lekcję w Backoffice', blocks:[
        { t:'p', html:'Przed sprawdzianem otwórz kurs w Backoffice i przejrzyj pierwszą lekcję we własnym tempie — są tam wszystkie karty aktywności i Teacher Notes. Nie ma limitu czasu.' },
        { t:'link', href:'https://bo.kodland.org/courses/2228', e:'📘', title:'Otwórz kurs w Backoffice', small:'[2228] Minecraft CraftForge Beginner — lekcje i ich Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'Treści lekcji w Backoffice będą dalej aktualizowane na podstawie opinii uczniów i tutorów. Gdy coś się zmieni, dostaniesz informację z wyprzedzeniem, żeby przygotować lekcję.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'Techniczna strona lekcji',
    desc:'Kodland Launcher, mocny start, publikowanie w Sparks i najczęstsze problemy.',
    obj:'Dowiedz się, dzięki czemu lekcja Minecraft CraftForge działa od strony technicznej: Kodland Launcher, sprawdzenie launchera przed treściami, ostatnie minuty na publikację i pokazanie prac, gdzie uczniowie znajdują link do swojego projektu i jak rozwiązać najczęstsze problemy.',
    needs:['mcPublish'],
    offer:[['🟩','Pobierzesz, zainstalujesz Kodland Launcher i zalogujesz się do niego.'],['🚀','Przeprowadzisz sprawdzenie launchera przed treściami i zaczniesz od wyniku.'],['📤','Dopilnujesz, żeby każdy uczeń opublikował pracę w Sparks i wysłał link.'],['🛠️','Rozwiążesz najczęstsze problemy z launcherem i Minecraftem.']],
    sections:[
      { id:'focus', e:'🎯', title:'3 rzeczy, dzięki którym lekcja działa', blocks:[
        { t:'p', html:'To obszary, na których zespół produktowy kazał się skupić w kursach Minecraft. Otwórz każdy z nich:' },
        { t:'acc', items:[
          ['🎬','Najpierw pokaż wynik — i czym tworzenie różni się od grania','<p>W pierwszych minutach <b>pokaż gotowy wynik</b> i powiedz, czego uczniowie dziś się nauczą.</p><ul><li>Użyj karty wprowadzającej: „Zobaczcie, co będziecie mieć za godzinę: własnego craftera i własny dom na wyspie”.</li><li>Wyjaśnij, czym budowanie projektu <b>różni się od zwykłego grania</b>: w grze zasady ustalił ktoś inny; tutaj uczeń tworzy i pokazuje to innym.</li><li>Zapytaj jednego lub dwóch uczniów: „Jak myślisz, czym tworzenie różni się od zwykłego grania?”.</li></ul>'],
          ['🟩','Sprawdzenie logowania i launchera jest przed treściami','<p>Sprawdź połączenie i launcher <b>przed</b> częścią merytoryczną, żeby gra pobierała się, kiedy poznajesz grupę.</p><ul><li>Połączenie: jedna minuta — kamera, mikrofon, „Cześć!”.</li><li>Launcher: 2–3 minuty — wyślij linki, pokaż logowanie na swoim ekranie, poproś o „+” na czacie, gdy pojawi się zielony pasek.</li><li>Nie czekaj, aż pobieranie się skończy, i nie zatrzymuj grupy z powodu jednego czy dwóch „−”: wróć do nich w czasie pracy samodzielnej.</li><li>Od lekcji 2: „Otwórzcie launcher i uruchomcie swój świat — niech się ładuje, kiedy rozmawiamy”.</li></ul>'],
          ['⏱️','Chroń ostatnie 7–10 minut','<p>Ostatnie <b>7–10 minut</b> jest na publikację, pokazanie prac i informację zwrotną — i nie oddaje się ich na budowanie.</p><ul><li>Stosuj twarde stopy: ostrzeżenie dwie minuty wcześniej, potem „Stop, ręce z klawiatury. Czas na prezentacje!” i od razu wskaż pierwszego ucznia.</li><li>3 osoby pokazują swoją pracę; grupa daje konkretną informację zwrotną: imię, co się udało, jedna wskazówka.</li><li>Zakończ podsumowaniem, refleksją, zapowiedzią następnej lekcji i zadaniem domowym — tego nigdy się nie skraca.</li></ul>']
        ]}
      ]},
      { id:'launcher', e:'🟩', title:'Kodland Launcher', blocks:[
        { t:'p', html:'Uczniowie otwierają Minecrafta przez <b>Kodland Launcher</b>: pobiera on grę, otwiera świat kursu i to w nim uczniowie tworzą i zakładają skiny. Musisz mieć go zainstalowanego i gotowego na swoim komputerze przed pierwszą lekcją.' },
        { t:'callout', kind:'warn', e:'🔑', html:'<b>Twoje dane logowania:</b> do pobrania launchera i zalogowania się używasz <b>tych samych danych co w Kodland Sparks</b>. Przekazuje Ci je <b>dział operacyjny lub dydaktyczny</b>. Uczniowie logują się swoim kontem Kodland — nie potrzebują nowego.' },
        { t:'link', href:'https://portfolio.kodland.org/launcher/download#guide', e:'⬇️', title:'Strona pobierania i oficjalny poradnik', small:'portfolio.kodland.org/launcher/download — Windows i Mac' },
        { t:'cards', cols:2, items:[
          ['🪟','Windows 10 / 11','<ol><li>Pobierz instalator.</li><li>Otwórz pobrany plik.</li><li>Na niebieskim ekranie ostrzeżenia kliknij <b>More info → Run anyway</b>, a potem postępuj zgodnie z instalatorem.</li></ol>'],
          ['🍎','macOS 13 lub nowszy','<ol><li>Pobierz plik dla swojego procesora (Apple → <b>About This Mac</b>: M1–M4 = Apple Silicon).</li><li>Otwórz pobrany plik i przeciągnij <b>Kodland Launcher</b> do <b>Applications</b>. Nie otwieraj go z tego okna.</li><li>Otwórz <b>Terminal</b>, wklej poniższą linię i naciśnij Return. Brak komunikatu jest normalny.</li><li>Otwórz launcher z <b>Applications</b>.</li></ol>']
        ]},
        { t:'p', html:'<code>xattr -dr com.apple.quarantine "/Applications/Kodland Launcher.app"</code>' },
        { t:'steps', items:[
          ['Logowanie','Kliknij <b>Sign in</b>. Otworzy się strona w przeglądarce: kliknij <b>Sign in with Kodland</b> — jeden przycisk, bez hasła. Jeśli przeglądarka się nie otworzy, użyj linku pod przyciskiem, żeby dostać krótki kod (ważny pięć minut).'],
          ['Pobranie gry','Launcher pobiera grę w kilku etapach (ok. 550 MB; potrzebujesz ok. 1,8 GB wolnego miejsca). Zostaw go uruchomionego.'],
          ['Gra','Gdy pojawi się informacja, że wszystko gotowe, kliknij <b>Play</b>. Pierwsze uruchomienie może potrwać do minuty. Kod świata wpisuje się w zakładce <b>Play</b>.'],
          ['Aktualizacje','Jeśli launcher się nie aktualizuje, zainstaluj najnowszą wersję ze strony pobierania na starą. Światy i skiny zostają na miejscu.']
        ]},
        { t:'acc', open:false, items:[
          ['⬇️','Bezpośrednie linki do pobrania (te same co na karcie lekcji)','<ul><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-win-x64-setup.exe" target="_blank" rel="noopener">Windows</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-arm64.dmg" target="_blank" rel="noopener">Mac — Apple Silicon (M1–M4)</a></li><li><a href="https://github.com/Kodland-Sparks/kodland-launcher-releases/releases/latest/download/kodland-launcher-mac-x64.dmg" target="_blank" rel="noopener">Mac — Intel</a></li></ul>']
        ]}
      ]},
      { id:'l1', e:'🧯', title:'Gdy launcher ucznia nie działa', blocks:[
        { t:'p', html:'Na lekcji 1 komuś prawie na pewno nie uruchomi się launcher. To nic złego: <b>najpierw daj pozostałym zadanie</b>, potem połącz się z uczniem. Poproś, żeby udostępnił ekran, i prowadź go głosem: „Co teraz widzisz? Kliknij ten przycisk”. Jeśli w ciągu kilku minut się nie uda: „Na razie śledź mój ekran, zaraz wrócę”.' },
        { t:'acc', open:false, items:[
          ['📥','Plik się nie pobiera','Wyślij jeszcze raz link z karty na czat i sprawdź, czy uczeń wybrał plik dla swojego systemu.'],
          ['🍎','Mac nie otwiera launchera','Uruchom linię w Terminalu z pierwszej karty i otwórz launcher ponownie z <b>Applications</b>.'],
          ['🪟','Windows pyta, czy otworzyć plik','<b>More info → Run anyway</b>.'],
          ['🔑','Uczeń nie może się zalogować','To samo logowanie Kodland co na lekcjach — bez nowego konta. Okno logowania otwiera się w przeglądarce i często chowa się za innymi oknami.'],
          ['⏳','Gra długo się ładuje albo pobieranie stoi','Pierwsze pobieranie trwa długo, to normalne. Jeśli pasek stanął: sprawdź internet, zamknij launcher i otwórz go ponownie — pobieranie będzie kontynuowane.'],
          ['🖌️','Launcher w ogóle nie zadziałał','Na lekcji 1 uczeń i tak rysuje i publikuje skina w Sparks (w przeglądarce), więc osiąga główny wynik. W świecie śledzi Twój ekran. Po lekcji pomóż mu uruchomić launcher.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Jeśli kilku uczniów ma ten sam błąd, pokaż rozwiązanie wszystkim naraz.' }
      ]},
      { id:'req', e:'💻', title:'Wymagania sprzętowe', blocks:[
        { t:'p', html:'Tego potrzebuje uczeń do Minecraft CraftForge. Przydaje się, gdy uczeń ma problem z instalacją lub uruchomieniem gry:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Komputer i system','Komputer stacjonarny lub laptop z <b>Windows 10/11 (64-bit)</b> albo <b>macOS 13 lub nowszym</b>. Mac: tylko Apple Silicon (M1 lub nowszy).'],
          ['🧠','Pamięć i procesor','<b>8 GB RAM</b> z dedykowaną kartą graficzną lub <b>12 GB</b> ze zintegrowaną grafiką. Procesor <b>4-rdzeniowy</b>.'],
          ['🎮','Grafika i dysk','Karta graficzna z obsługą <b>Vulkan 1.3</b> i <b>2 GB</b> pamięci wideo. <b>5 GB</b> wolnego miejsca na dysku.'],
          ['🎧','Połączenie i sprzęt','Stabilne łącze internetowe, które poradzi sobie z rozmowami wideo. Mysz z dwoma przyciskami, klawiatura, słuchawki z mikrofonem i kamera.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Publikowanie w Kodland Sparks', blocks:[
        { t:'p', html:'Publikacja to główny wynik wielu lekcji: uczeń publikuje pracę w Sparks i wkleja link do karty lekcji. W module 1 są dwa sposoby:' },
        { t:'cards', cols:2, items:[
          ['🎨','Skin (lekcja 1)','Na lekcji 1 studio skinów jest w karcie: <b>Publish</b> → nazwa skina → ponownie <b>Publish</b>. Plik skina można też opublikować ze Sparks: <b>Publish project → Minecraft skin</b> → nazwa → <b>Model</b> (Steve lub Alex) → <b>Skin file</b> (PNG 64×64) → <b>Publish</b>.'],
          ['🖼️','Budowla','Zrzut ekranu budowli (F5, F1) → Sparks → <b>Publish project</b> → <b>Image</b> → nazwa → <b>Drawing</b>: prześlij zrzut ekranu → <b>Publish</b>.']
        ]},
        { t:'steps', items:[
          ['Gdzie jest link','Link to adres strony projektu. Uczeń wchodzi w Sparks do <b>My projects</b>, otwiera <b>opublikowany projekt</b> i kopiuje link z <b>paska adresu przeglądarki</b>: <code>portfolio.kodland.org/nickname/…</code>.'],
          ['Wklej go do karty lekcji','Ten link wkleja się do karty lekcji na platformie Kodland (na przykład „Link do mojego skina w Kodland Sparks”).'],
          ['Wybierz widoczność','<b>Public</b> — projekt pojawia się w aktualnościach i w portfolio. <b>Friends only</b> — dla znajomych i nauczycieli. <b>Only me</b> — projekt jest prywatny i nikt inny nie otworzy linku, nawet Ty.'],
          ['Dwa różne kroki','Publikacja w Sparks i wysłanie linku na platformie Kodland to <b>dwa różne kroki</b>. Sprawdź w Backoffice, czy linki naprawdę dotarły.']
        ]},
        { t:'sim', flag:'mcPublish', src:'minecraft-publish/Minecraft_Publish.html?flow=image', e:'⚡', badge:'Symulacja', title:'Opublikuj skina i budowlę w Kodland Sparks', text:'Replika Kodland Sparks i karty lekcji: jako uczeń publikujesz skina, znajdujesz jego link w My projects, wklejasz go do karty na platformie, publikujesz zrzut ekranu budowli jako projekt Image i naprawiasz link, który się nie otwiera. Zajmuje to ok. 5 minut. Sprawdzian modułu odblokuje się, gdy skończysz.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Gdy coś pójdzie nie tak', blocks:[
        { t:'acc', open:false, items:[
          ['🎨','Skina nie ma w „Skins”','Sprawdź, czy skin jest opublikowany w Sparks i czy launcher używa tego samego konta. Zamknij i ponownie otwórz sekcję <b>Skins</b>.'],
          ['👕','Uczeń kliknął „Wear” przy otwartej grze','Launcher informuje, że skin pojawi się po ponownym uruchomieniu gry: trzeba wyjść ze świata i wejść ponownie.'],
          ['📍','Teleport nie zadziałał','Poproś ucznia o udostępnienie ekranu: zwykle polecenie jest niepełne albo brakuje minusa przed ostatnią liczbą.'],
          ['⛶','Uczeń nie może wyjść ze studia na pełnym ekranie','Kliknij <b>Collapse</b> na górze studia — <b>Esc</b> w nim nie działa.'],
          ['🔒','Link ucznia się nie otwiera','Projekt został prawdopodobnie zapisany jako <b>Only me</b> (ma oznaczenie <b>Private project</b>). Poproś ucznia: <b>My projects → otwórz projekt → Edit → Public → Publish</b>. Link pozostaje ten sam.'],
          ['🖼️','Uczeń nie może znaleźć zrzutu ekranu','W Windows jest w <b>Obrazy → Zrzuty ekranu</b>; na Macu — na pulpicie. Jeśli teraz go nie znajdzie, uczeń dołączy go później w domu.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Techniczna lista kontrolna na każdą lekcję', blocks:[
        { t:'check', title:'✅ Moja techniczna lista kontrolna', groups:[
          { h:'☑️ Przed lekcją', items:['Przeczytałem wszystkie Teacher Notes lekcji i obejrzałem film przygotowawczy.','Mój launcher jest zainstalowany i zalogowany, a ścieżkę lekcji przeszedłem sam.','Przed lekcją 1 wysłałem linki do launchera na czat grupy.'] },
          { h:'🎬 W trakcie lekcji', items:['Sprawdziłem połączenie i launcher przed treściami.','W pierwszych minutach pokazałem gotowy wynik i cel lekcji.'] },
          { h:'📤 Na koniec lekcji', items:['Ochroniłem ostatnie 7–10 minut na publikację, pokazanie prac i informację zwrotną.','Wszyscy wysłali w karcie lekcji link do opublikowanego projektu.','Otworzyłem kilka linków, żeby sprawdzić, czy działają.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Dla kogo jest Minecraft CraftForge Beginner i ile trwa każda lekcja?',
      o:['Dla uczniów w wieku 8–9 lat; lekcje grupowe po 60 minut.','Dla uczniów w wieku 10–12 lat; lekcje po 90 minut.','Dla uczniów w wieku 13–17 lat; lekcje po 90 minut.'],
      a:0, e:'Beginner jest dla uczniów w wieku 8–9 lat: 40 lekcji po 60 minut w grupie.' },
    { q:'W jakim języku programowania uczniowie programują robota Asystenta?',
      o:['Python.','Bloki Scratch.','Lua.'],
      a:2, e:'Robota Asystenta programuje się w Lua: polecenia, argumenty, zmienne, pętle, warunki i funkcje.' },
    { q:'Jak zaczyna się lekcja?',
      o:['Od teorii o redstone, zanim ktokolwiek wejdzie do świata.','Od pokazania gotowego wyniku, powiedzenia celu i wyjaśnienia, czym tworzenie różni się od zwykłego grania.','Uczniowie od razu zaczynają budować, nie widząc przykładu.'],
      a:1, e:'Najpierw wynik: uczniowie widzą, dokąd zmierzają i czym tworzenie różni się od grania.' },
    { q:'Z czym uczeń kończy kurs?',
      o:['Z pisemnym egzaminem końcowym.','Z ponad dziewięcioma projektami w portfolio Kodland Sparks i projektem końcowym — własną krainą, zaprezentowaną grupie.','Tylko z domem z lekcji 1.'],
      a:1, e:'Ponad dziewięć projektów w portfolio i projekt końcowy, w którym budowle, mechanizmy i programy działają razem.' },
    { q:'Jaka jest rola Sparks AI na lekcjach?',
      o:['Buduje projekt za ucznia.','Podsuwa pomysły i opinie; uczeń decyduje, co weźmie.','Ocenia lekcję zamiast tutora.'],
      a:1, e:'Sparks podpowiada, uczeń decyduje — zwykle jedno zapytanie na lekcję.' }
  ],
  m2:[
    { q:'Kiedy sprawdzasz połączenie i launcher?',
      o:['Na początku lekcji, przed treściami, żeby gra pobierała się, kiedy poznajesz grupę.','W połowie lekcji, kiedy uczniowie potrzebują Minecrafta.','Na końcu, żeby nie zabierać czasu lekcji.'],
      a:0, e:'Przed treściami: gra pobiera się, kiedy poznajesz grupę.' },
    { q:'Jakich danych logowania używasz do pobrania Kodland Launcher i zalogowania się?',
      o:['Nowego konta, które zakładasz sam.','Tych samych danych co w Kodland Sparks, przekazanych przez dział operacyjny lub dydaktyczny.','Konta ucznia.'],
      a:1, e:'Launcher używa Twoich danych logowania do Kodland Sparks, przekazanych przez dział operacyjny lub dydaktyczny.' },
    { q:'Gdzie uczeń znajduje link, który wysyła w karcie lekcji?',
      o:['W komentarzu pod projektem.','W Sparks: My projects → otwórz opublikowany projekt → skopiuj adres z paska przeglądarki.','W launcherze, w zakładce Play.'],
      a:1, e:'Link to adres strony projektu: My projects → opublikowany projekt → pasek przeglądarki.' },
    { q:'Na co jest ostatnie 7–10 minut lekcji?',
      o:['Na dodatkowy czas budowania.','Na publikację, pokazanie prac i informację zwrotną — plus podsumowanie i zadanie domowe.','Na swobodną grę.'],
      a:1, e:'Chroń ostatnie minuty: publikacja, prezentacja z informacją zwrotną i podsumowanie.' },
    { ctx:'Na lekcji 1 jednemu uczniowi nie uruchamia się launcher, a reszta grupy jest gotowa.',
      q:'Co robisz?',
      o:['Przerywasz lekcję, dopóki launcher nie zadziała.','Prowadzisz grupę dalej — skina rysuje się w Sparks, w przeglądarce — i pomagasz uczniowi w czasie pracy samodzielnej.','Mówisz uczniowi, żeby spróbował w domu i opuścił lekcję.'],
      a:1, e:'Jeden problem nie powinien zatrzymywać grupy: uczeń i tak rysuje i publikuje skina, a Ty naprawiasz launcher w czasie pracy samodzielnej.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Moduły ukończone!',
  html: `<p>Prawie koniec! Wróć na stronę szkolenia w LMS, z której otworzyłeś to szkolenie. Test DST znajdziesz tuż pod szkoleniem.</p>
    <p>👉 <b>Aby szkolenie zostało uznane za ukończone, musisz wykonać test DST i go zaliczyć.</b> Jeśli nie ukończysz testu DST, szkolenie pozostanie nieukończone i może wygasnąć.</p>
    <p>Minimalny wynik zaliczający to <b>80%</b>.</p>
    <p>Powodzenia! ❤️</p>`,
  nexts: [
    ['📒', '<b>Przed każdą lekcją:</b> przeczytaj Teacher Notes w Backoffice i przejdź ścieżkę lekcji w launcherze.'],
    ['🟩', '<b>Pierwsze minuty:</b> sprawdzenie połączenia i launchera, potem gotowy wynik i cel.'],
    ['🔗', '<b>Link:</b> My projects → opublikowany projekt → adres w pasku przeglądarki.'],
    ['⏱️', '<b>Ostatnie 7–10 minut:</b> publikacja, pokazanie prac i informacja zwrotna.']
  ]
};
