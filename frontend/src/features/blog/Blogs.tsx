import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "../../lib/cn";
import { Link } from "react-router";

export type BlogPost = {
  id: number;
  photoUrl: string;
  photosUrls?: { photo: string; }[]; // câmp opțional
  title: string;
  date: string;
  author: string;
  categoria: string;
  keywords: string[];
  descriere?: {};
};

const blogs: BlogPost[] = [
  {
    id: 1,
    photoUrl: "./images/blog-1.jpg",
    title: "Cum să Alegi Primul Tău Instrument Muzical - Ghid Complet 2025",
    date: "Iunie 8, 2025",
    author: "Alex Mantello",
    categoria: "Ghiduri pentru începători",
    keywords: ["primul instrument", "alegere instrument muzical", "cursuri muzica bucuresti", "armonia academy"],
    descriere: {
      title: "Alegerea Primului Instrument Muzical - Factori Esențiali de Considerat",
      continut1: "Alegerea primului instrument muzical poate fi o provocare pentru mulți începători. În acest ghid complet, îți voi prezenta factorii esențiali care te vor ajuta să iei decizia corectă. De la vârstă și preferințe muzicale, până la buget și spațiul disponibil acasă, fiecare aspect contează în această decizie importantă. La Armonia Academy, am ghidat sute de elevi în alegerea instrumentului perfect pentru ei.",
      subtitlu1: "Factorii Principali în Alegerea Instrumentului",
      pozaDescriere: "./images/blog-instruments.jpg",
      continut2: "Vârsta este primul factor de considerat - copiii de 4-6 ani se descurcă excelent cu pianul sau ukulele, în timp ce adolescenții preferă adesea chitara sau tobele. Preferințele muzicale joacă un rol crucial: dacă îți place rock-ul, chitara electrică ar fi ideală, dacă preferi muzica clasică, pianul sau vioara sunt opțiuni excelente. Bugetul variază considerabil - un pian digital de calitate costă între 2000-5000 lei, o chitară pentru începători între 300-800 lei. La Armonia Academy oferim consultanță gratuită pentru alegerea instrumentului și chiar posibilitatea de a testa instrumentele înainte de a lua decizia finală.",
    }
  },

  {
    id: 2,
    photoUrl: "./images/blog-2.jpg",
    title: "Beneficiile Învățării Muzicii pentru Dezvoltarea Creierului la Copii",
    date: "Iunie 1, 2025",
    author: "Alex Mantello",
    categoria: "Educație muzicală",
    keywords: ["muzica si creierul", "dezvoltarea copiilor", "beneficii muzica", "cursuri copii bucuresti"],
    descriere: {
      title: "Cum Influențează Muzica Dezvoltarea Cognitivă a Copiilor",
      continut1: "Studiile neuroștiințifice demonstrează că învățarea muzicii produce schimbări remarcabile în creierul copilului. În acest articol, voi explora cercetările recente care arată cum lecțiile de muzică îmbunătățesc memoria, atenția, limbajul și abilitățile matematice ale copiilor. Observațiile din cei 12 ani de predare la Armonia Academy confirmă aceste beneficii extraordinare.",
      subtitlu1: "Impactul Neurologic al Educației Muzicale",
      pozaDescriere: "./images/blog-brain-music.jpg",
      continut2: "Cercetările de la Harvard și MIT arată că copiii care învață muzică dezvoltă conexiuni neuronale mai puternice în zonele responsabile pentru procesarea limbajului și matematica. Am observat personal că elevii mei care studiază pianul de minimum 6 luni îmbunătățesc semnificativ performanțele școlare. Muzica stimulează ambele emisfere cerebrale simultan, dezvoltând gândirea creativă și logică. Copiii care învață instrumente cu coarde (vioară, chitară) dezvoltă coordonarea și concentrarea mai rapid decât colegii lor. La Armonia Academy, programele noastre sunt special concepute pentru a maximiza aceste beneficii cognitive.",
    }
  },

  {
    id: 3,
    photoUrl: "./images/blog-3.jpg",
    title: "Ghidul Complet pentru Lecțiile de Pian: De la Început la Performanță",
    date: "Mai 25, 2025",
    author: "Alex Mantello",
    categoria: "Instrumente",
    keywords: ["lectii pian bucuresti", "invatare pian", "cursuri pian", "profesor pian"],
    descriere: {
      title: "Totul Despre Lecțiile de Pian - De la Primii Pași la Măiestrie",
      continut1: "Pianul este considerat 'regele instrumentelor' și pe bună dreptate. În acest ghid detaliat, voi împărtăși secretele unei progresii rapide la pian, bazate pe experiența mea de predare și pe metodele dovedite la Armonia Academy. Vei învăța cum să practici eficient, cum să dezvolți tehnică și cum să interpretezi cu emoție.",
      subtitlu1: "Metodologia Eficientă de Învățare a Pianului",
      pozaDescriere: "./images/blog-piano-lesson.jpg",
      continut2: "Secretul progresiei rapide la pian constă în practicarea structurată și îndrumarea profesională. Recomand 30 minute de practică zilnică pentru începători, împărțite în exerciții de tehnică (10 min), studiul piesei noi (15 min) și repetarea pieselor învățate (5 min). Poziția corectă la pian este fundamentală - șezutul la 2/3 din banchetă, picioarele pe podea, încheieturile ușor ridicate. La Armonia Academy folosim metoda progresivă: începem cu piese simple de 5 note, apoi evoluăm către scale majore și minore, acorduri și eventual piese complexe de Bach sau Chopin. Elevii noștri ating nivel intermediar în 8-12 luni cu practică regulată.",
    }
  },

  {
    id: 4,
    photoUrl: "./images/blog-4.jpg",
    title: "Chitara pentru Începători: Totul Ce Trebuie să Știi în 2025",
    date: "Mai 15, 2025",
    author: "Alex Mantello",
    categoria: "Instrumente",
    keywords: ["chitara incepatori", "lectii chitara bucuresti", "acorduri chitara", "cursuri chitara"],
    descriere: {
      title: "Drumul de la Zero la Chitarist - Ghid Practic pentru Începători",
      continut1: "Chitara este unul dintre cele mai populare instrumente, iar începutul poate fi intimidant. După 12 ani de predare a chitarei, am dezvoltat o metodă care face învățarea rapidă și plăcută. În acest articol voi dezvălui secretele pentru o progresie rapidă și voi răspunde la toate întrebările frecvente ale începătorilor.",
      subtitlu1: "Primul Tău Acord și Primele Tale Melodii",
      pozaDescriere: "./images/blog-guitar-beginner.jpg",
      continut2: "Primul acord pe care îl învață elevii mei este G major - simplu și sonor. Urmează C major și D major, cu care poți cânta deja sute de melodii populare. Poziția corectă a mâinii stângi este crucială: degetul mare pe spatele gâtului, celelalte degete curbate peste corzi. Pentru mâna dreaptă, recomand să începi cu atacul alternativ simplu înainte de a trece la fingerpicking. La Armonia Academy, elevii învață primele 10 acorduri în prima lună și pot cânta prima melodie completă în lecția 4-5. Investiția într-o chitară de calitate (500-800 lei pentru începători) face diferența enormă în progresie și motivație.",
    }
  },

  {
    id: 5,
    photoUrl: "./images/blog-5.jpg",
    title: "Tehnicile de Respirație pentru Canto: Secretele Profesioniștilor",
    date: "Mai 8, 2025",
    author: "Alex Mantello",
    categoria: "Canto",
    keywords: ["tehnici respiratie canto", "lectii canto bucuresti", "cursuri voce", "respiratie diafragmatica"],
    descriere: {
      title: "Respirația Diafragmatică - Fundația Unei Voci Puternice",
      continut1: "Respirația este fundamentul cântului profesional. În acest ghid detaliat, voi explica tehnicile de respirație folosite de cântăreții profesioniști și voi oferi exerciții practice pentru dezvoltarea capacității pulmonare și controlului respirației. Aceste tehnici sunt esențiale pentru orice aspirant la canto.",
      subtitlu1: "Exerciții Practice pentru Dezvoltarea Respirației",
      pozaDescriere: "./images/blog-breathing-technique.jpg",
      continut2: "Respirația diafragmatică se învață prin exerciții sistematice. Exercițiul 'câinelui' (respirații rapide și scurte) dezvoltă controlul diafragmei, în timp ce respirațiile lungi pe sunetul 'ahh' îmbunătățesc capacitatea pulmonară. Recomand 10 minute de exerciții de respirație înainte de fiecare sesiune de canto. Poziția corectă: în picioare, umerii relaxați, o mână pe piept, una pe burtă - când respiri corect, doar mâna de pe burtă se mișcă. La Armonia Academy, profesorii noștri de canto încep fiecare lecție cu 5 minute de exerciții de respirație, iar elevii observă îmbunătățiri semnificative ale vocii în doar 2-3 săptămâni.",
    }
  },

  {
    id: 6,
    photoUrl: "./images/blog-6.jpg",
    title: "Vioară vs Vișlă: Care Instrument cu Coarde să Alegi?",
    date: "Mai 1, 2025",
    author: "Alex Mantello",
    categoria: "Instrumente",
    keywords: ["vioara vs viola", "instrumente coarde", "lectii vioara bucuresti", "diferente vioara viola"],
    descriere: {
      title: "Comparația Completă: Vioară sau Violă pentru Începători",
      continut1: "Alegerea între vioară și violă confundă mulți începători. Deși similare la prima vedere, aceste instrumente au caracteristici distincte care influențează experiența de învățare. În acest articol voi analiza diferențele tehnice, muzicale și practice pentru a te ajuta să faci alegerea corectă.",
      subtitlu1: "Diferențele Tehnice și Muzicale Esențiale",
      pozaDescriere: "./images/blog-violin-viola.jpg",
      continut2: "Vioara este cu 7 cm mai scurtă și acordată cu o cvintă mai înalt decât viola, având un sunet mai strălucitor și penetrant. Viola produce tonuri mai calde și profunde, fiind acordată în do-sol-re-la. Pentru copii sub 12 ani recomand vioara, fiind mai ușoară și cu dimensiuni adaptate vârstei. Viola necesită mâini și degete mai lungi, fiind ideală pentru adolescenți și adulți. Din perspectiva repertoriului, vioara are o literatură vastă de solistic, în timp ce viola excelează în muzica de cameră. La Armonia Academy avem instrumente de toate dimensiunile și oferim lecția de probă gratuită pentru ambele instrumente.",
    }
  },

  {
    id: 7,
    photoUrl: "./images/blog-7.jpg",
    title: "Saxofonul în Muzica Modernă: De la Jazz la Pop Contemporary",
    date: "Aprilie 25, 2025",
    author: "Alex Mantello",
    categoria: "Instrumente",
    keywords: ["saxofon modern", "lectii saxofon bucuresti", "saxofon jazz", "saxofon pop"],
    descriere: {
      title: "Evoluția Saxofonului în Stilurile Muzicale Contemporane",
      continut1: "Saxofonul a parcurs o călătorie fascinantă de la jazz-ul clasic la pop-ul modern. În acest articol voi explora cum acest instrument versatil s-a adaptat diferitelor stiluri muzicale și care sunt tehnicile specifice pentru fiecare gen. De asemenea, voi oferi sfaturi pentru aspiranții saxofoniști.",
      subtitlu1: "Tehnici Specifice pentru Fiecare Stil Muzical",
      pozaDescriere: "./images/blog-saxophone-styles.jpg",
      continut2: "Jazz-ul tradițional cere maeștria improvizației și înțelegerea progresiilor armonii complexe. Saxofoniștii de jazz dezvoltă un vibrato caracteristic și o frazare expresivă. În funk și R&B, accentul este pe groove și ritmuri sincopate, cu tehnici precum 'growling' și 'bending'. Pop-ul contemporary folosește saxofonul pentru hooks memorabile și solo-uri emotionale, cerând o abordare mai lirică. La Armonia Academy, profesorii noștri de saxofon sunt specializați în toate stilurile și adaptează lecțiile la preferințele muzicale ale fiecărui elev. Recomand să începi cu jazz-ul tradițional pentru a dezvolta baza tehnică solidă.",
    }
  },

  {
    id: 8,
    photoUrl: "./images/blog-8.jpg",
    title: "Tobele: Fundamentele Ritmului și Coordinării în Muzică",
    date: "Aprilie 18, 2025",
    author: "Alex Mantello",
    categoria: "Instrumente",
    keywords: ["lectii tobe bucuresti", "cursuri baterie", "invatare tobe", "ritm coordonare"],
    descriere: {
      title: "Drumming pentru Începători - De la Primele Beats la Groove Complex",
      continut1: "Tobele sunt inima fiecărei formații muzicale, oferind fundația ritmică pe care se construiește întreaga muzică. În acest ghid complet voi explica fundamentele drumming-ului, de la ținerea corectă a bățelor până la dezvoltarea groove-urilor complexe și a coordination avansate.",
      subtitlu1: "Dezvoltarea Coordinării și a Simțului Ritmic",
      pozaDescriere: "./images/blog-drums-coordination.jpg",
      continut2: "Coordinarea între cele patru membre este cea mai mare provocare la tobe. Începem cu exerciții simple: mâna dreaptă pe hi-hat, stânga pe snare, piciorul drept pe kick drum. Metronómul este esențial pentru dezvoltarea timing-ului precis - recomand să începi cu 60 BPM și să crești treptat. Fill-urile se învață progresiv: simple de 2 beats, apoi 4 beats, eventual full-bar fills. La Armonia Academy folosim baterii electronice pentru începători, permițând practicarea cu căștile fără a deranja vecinii. Stilurile de bază (rock, funk, latin) se învață în primele 3-6 luni, iar elevii pot cânta în formație după un an de studiu.",
    }
  },

  {
    id: 9,
    photoUrl: "./images/blog-9.jpg",
    title: "Teoria Muzicii Simplificată: Ghidul Complet pentru Începători",
    date: "Aprilie 11, 2025",
    author: "Alex Mantello",
    categoria: "Teorie muzicală",
    keywords: ["teoria muzicii", "note muzicale", "scale muzicale", "acorduri teorie"],
    descriere: {
      title: "Înțelegerea Fundamentelor: Note, Scale și Acorduri",
      continut1: "Teoria muzicii poate părea intimidantă, dar înțelegerea fundamentelor face diferența între un muzician și un adevărat artist. În acest ghid voi simplifica conceptele complexe și voi explica cum se aplică teoria în practica muzicală zilnică. Nu este necesară cunoașterea teoriei pentru a începe, dar te va ajuta enormemente în progresie.",
      subtitlu1: "De la Note la Acorduri - Construirea Cunoștințelor Teoretice",
      pozaDescriere: "./images/blog-music-theory.jpg",
      continut2: "Sistemul muzical occidental folosește 12 note (7 naturale + 5 alterații), organizate în octave de 8 note. Scările majore urmează formula T-T-S-T-T-T-S (ton-ton-semiton), în timp ce scările minore naturale folosesc T-S-T-T-S-T-T. Acordurile se construiesc prin suprapunerea terțelor: triad major (1-3-5), minor (1-3b-5), diminuat (1-3b-5b). Înțelegerea intervalelor este fundamentală pentru improvizație și compoziție. La Armonia Academy integrăm teoria gradual în lecțiile practice - elevii învață conceptele prin piesele pe care le cântă, nu prin memorarea abstractă. Această abordare face teoria accesibilă și utilă pentru toți elevii.",
    }
  },

  {
    id: 10,
    photoUrl: "./images/blog-10.jpg",
    title: "Pregătirea pentru Examene și Concursuri Muzicale",
    date: "Aprilie 4, 2025",
    author: "Alex Mantello",
    categoria: "Performanță",
    keywords: ["concursuri muzicale", "examene muzica", "pregatire concurs", "performanta scenica"],
    descriere: {
      title: "Strategii de Pregătire pentru Performanțe Muzicale de Succes",
      continut1: "Pregătirea pentru concursuri și examene muzicale necesită o abordare strategică și disciplinată. În acest articol voi împărtăși metodele dovedite pentru pregătirea eficientă, gestionarea anxietății de scenă și maximizarea performanței în momentele cheie. Experiența mea cu elevii câștigători de premii oferă perspective valoroase.",
      subtitlu1: "Planificarea și Execuția unei Pregătiri de Succes",
      pozaDescriere: "./images/blog-music-competition.jpg",
      continut2: "Pregătirea începe cu minimum 3 luni înainte de concurs. Prima lună se dedică alegerii repertoriului potrivit și înțelegerii cerințelor tehnice. Luna a doua se concentrează pe perfecționarea tehnică și interpretare. Luna finală include simulări de concurs și antrenament mental. Gestionarea stresului se învață prin exerciții de respirație și vizualizare pozitivă. Recomand înregistrări audio ale propriei performanțe pentru auto-evaluare. La Armonia Academy organizăm 'mini-concursuri' interne pentru a-i obișnui pe elevi cu atmosfera competițională. Elevii noștri au câștigat peste 50 de premii la concursuri naționale în ultimii 5 ani.",
    }
  },

  {
    id: 11,
    photoUrl: "./images/blog-11.jpg",
    title: "Cum să Practici Eficient Acasă: Maximizează Timpul de Studiu",
    date: "Martie 28, 2025",
    author: "Alex Mantello",
    categoria: "Sfaturi practice",
    keywords: ["practica acasa", "studiu eficient muzica", "progresie rapida", "metode practica"],
    descriere: {
      title: "Secretele Practicii Eficiente - Progresie Maximă în Timp Minim",
      continut1: "Calitatea practicii contează mai mult decât cantitatea. În acest ghid detaliat voi dezvălui tehnicile de practică folosite de muzicienii profesioniști, care permit progresie rapidă chiar și cu timp limitat. Aceste metode transformă 30 de minute de practică focalizată în echivalentul a 2 ore de practică dezorganizată.",
      subtitlu1: "Structurarea Sesiunilor de Practică pentru Rezultate Optime",
      pozaDescriere: "./images/blog-practice-routine.jpg",
      continut2: "Sesiunea ideală de practică începe cu 5 minute de încălzire (scale, arpegii), urmată de 15 minute de lucru tehnic concentrat pe dificultățile specifice, și se termină cu 10 minute de interpretare expresivă. Metoda 'slow practice' este esențială: practică piesa cu 50% din tempo-ul normal, concentrându-te pe precizia fiecărei note. Folosește metronómul pentru dezvoltarea timing-ului precis. Împarte piesele complexe în secțiuni de 4-8 măsuri și perfecționează fiecare secțiune separat. La Armonia Academy oferim elevilor 'jurnal de practică' pentru monitorizarea progresului și identificarea zonelor problematice. Consistența bate intensitatea - 20 minute zilnic sunt mai eficiente decât 3 ore o dată pe săptămână.",
    }
  },

  {
    id: 12,
    photoUrl: "./images/blog-12.jpg",
    title: "Muzica în Era Digitală: Aplicații și Tehnologii pentru Muzicieni",
    date: "Martie 21, 2025",
    author: "Alex Mantello",
    categoria: "Tehnologie",
    keywords: ["aplicatii muzica", "tehnologie muzicala", "software muzica", "instrumente digitale"],
    descriere: {
      title: "Instrumentele Digitale Esențiale pentru Muzicianul Modern",
      continut1: "Tehnologia a revoluționat modul în care învățăm și creăm muzică. În acest articol voi prezenta cele mai utile aplicații și software-uri pentru muzicieni, de la metronoame avansate și tunere precise, până la DAW-uri profesionale și instrumente de compoziție. Aceste unelte digitale accelerează învățarea și deschid noi posibilități creative.",
      subtitlu1: "Selecția Celor Mai Bune Aplicații și Software-uri Muzicale",
      pozaDescriere: "./images/blog-music-technology.jpg",
      continut2: "Pentru începători recomand Simply Piano (iOS/Android) pentru învățarea pianului, Yousician pentru instrumente multiple, și Metronome Plus pentru dezvoltarea timing-ului. Muzicienii intermediari beneficiază de GarageBand (gratuit pe Mac) sau Reaper pentru înregistrări home studio. Profesional, Logic Pro X și Pro Tools rămân standardul industriei. Pentru teorie muzicală, Tenuto și Music Theory Helper sunt excelente. Aplicațiile de acordare precum Boss Tuner oferă precizie superioară clasicelor tunere fizice. La Armonia Academy integrăm aceste tehnologii în lecții, iar elevii primesc liste personalizate de aplicații recomandate pentru instrumentul lor. Tehnologia nu înlocuiește profesorul, ci completează învățarea tradițională.",
    }
  },

{
    id: 13,
    photoUrl: "./images/blog-13.jpg",
    title: "Construirea unei Cariere Muzicale: De la Pasiune la Profesie",
    date: "Martie 14, 2025",
    author: "Alex Mantello",
    categoria: "Carieră muzicală",
    keywords: ["cariera muzicala", "muzician profesionist", "industria muzicala", "succes muzical"],
    descriere: {
      title: "Drumul către Succes în Industria Muzicală Contemporană",
      continut1: "Transformarea pasiunii pentru muzică într-o carieră sustenabilă necesită mai mult decât talent - cere planificare strategică, networking și înțelegerea industriei. În acest ghid voi explora diferitele căi de carieră muzicală și voi oferi sfaturi practice pentru construirea unei cariere de succes în muzică.",
      subtitlu1: "Opțiunile de Carieră și Strategiile de Dezvoltare Profesională",
      pozaDescriere: "./images/blog-music-career.jpg",
      continut2: "Carierele muzicale moderne includ: artist/interpret, profesor de muzică, producător, inginer de sunet, compozitor pentru film/TV, muzician de studio, și manager artistic. Fiecare cale cere abilități specifice și strategii diferite. Pentru artiști, social media și platformele streaming sunt esențiale pentru construirea fanbase-ului. Profesorii de muzică pot lucra în școli, universități, sau ca instructori privați. Networking-ul se face prin participarea la jam sessions, concerte, și evenimente ale industriei. La Armonia Academy, mulți dintre profesorii noștri au cariere artistice active și oferă elevilor perspective realiste despre industrie. Recomand să dezvolți multiple surse de venit în muzică pentru stabilitate financiară.",
    }
  },

  {
    id: 14,
    photoUrl: "./images/blog-14.jpg",
    title: "Muzica de Cameră: Beneficiile Cântatului în Ansamblu",
    date: "Martie 7, 2025",
    author: "Alex Mantello",
    categoria: "Ansamblu",
    keywords: ["muzica de camera", "ansamblu muzical", "colaborare muzicala", "quartete cvartet"],
    descriere: {
      title: "Arta Colaborării Muzicale - De la Solo la Ansamblu",
      continut1: "Muzica de cameră oferă o experiență unică de învățare și performanță, dezvoltând abilități care nu pot fi dobândite prin studiul individual. În acest articol voi explora beneficiile cântatului în ansamblu, de la dezvoltarea ascultării active până la îmbunătățirea comunicării muzicale și a sincronizării perfecte.",
      subtitlu1: "Dezvoltarea Abilităților de Colaborare și Sincronizare",
      pozaDescriere: "./images/blog-chamber-music.jpg",
      continut2: "Muzica de cameră dezvoltă ascultarea activă - muzicienii învață să își ajusteze volumul, tempo-ul și interpretarea în funcție de colegii lor. Comunicarea non-verbală devine esențială: contactul vizual, respirația comună, și gesturile discrete coordonează ansamblul. Responsabilitatea individuală crește - fiecare greșeală afectează întregul grup. Repertoriul de cameră, de la Bach la Brahms, oferă o bogăție interpretativă imensă. La Armonia Academy organizăm sesiuni lunare de muzică de cameră pentru elevii avansați, formând cvartetere de coarde, trio-uri de pian, și ansambluri de instrumente de suflat. Aceste experiențe pregătesc elevii pentru muzica profesională și dezvoltă prietenii de-o viață.",
    }
  },

  {
    id: 15,
    photoUrl: "./images/blog-15.jpg",
    title: "Viitorul Educației Muzicale: Tendințe și Inovații în 2025",
    date: "Martie 31, 2025",
    author: "Alex Mantello",
    categoria: "Viitor",
    keywords: ["viitorul muzicii", "educatie muzicala 2025", "inovatii muzicale", "tehnologie educativa"],
    descriere: {
      title: "Cum se Transformă Educația Muzicală în Era Digitală",
      continut1: "Educația muzicală traversează o perioadă de transformare accelerată, impulsionată de tehnologiile emergente și schimbarea nevoilor elevilor. În acest articol prospectiv voi analiza tendințele care vor forma viitorul învățării muzicale și cum Armonia Academy se adaptează pentru a oferi cea mai bună experiență educațională.",
      subtitlu1: "Inovațiile Tehnologice și Metodologice în Educația Muzicală",
      pozaDescriere: "./images/blog-future-music-education.jpg",
      continut2: "Realitatea augmentată (AR) începe să transforme lecțiile de muzică - elevii pot vediza notele muzicale în spațiul 3D și pot practica cu instrumente virtuale. Inteligența artificială oferă feedback instant asupra performanței și personalizează curriculum-ul pentru fiecare elev. Lecțiile hibride (online + offline) devin norma, oferind flexibilitate maximă. Gamification face învățarea mai angajantă, cu sisteme de puncte și provocări. La Armonia Academy investim constant în tehnologie educațională, menținând echilibrul între inovație și metodele tradiționale dovedite. Viitorul aparține profesorilor care îmbină experiența umană cu puterea tehnologiei pentru a crea experiențe de învățare extraordinare.",
    }
  }
];

const POSTS_PER_PAGE = 4;

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredPosts = searchTerm
    ? blogs.filter((post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.author.toLowerCase().includes(searchTerm)
    )
    : blogs;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const selectedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  const [imageIndices, setImageIndices] = useState<{ [postId: string]: number; }>({});

  const handleNextImage = (postId: number, imagesLength: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [postId]: (prev[postId] ?? 0) + 1 >= imagesLength ? 0 : (prev[postId] ?? 0) + 1,
    }));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handlePrevImage = (postId: number, imagesLength: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [postId]: (prev[postId] ?? 0) - 1 < 0 ? imagesLength - 1 : (prev[postId] ?? 0) - 1,
    }));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // opțional
  };
  return (
    <div>
      <div className="absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-40 hidden lg:block">
        <img src="./images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[500px] ">
        <img src="./images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[1200px] ">
        <img src="./images/green-right-gear.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex mx-6 gap-20 mt-10">
        <div className="flex flex-col flex-1">
          <div className="lg:hidden flex flex-col gap-5 mb-4">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border border-gray-200 bg-white w-full rounded-full overflow-hidden shadow-xl text-sm"
            >
              <input
                type="text"
                placeholder="Pe cine doresti sa cauti?"
                value={searchTerm}
                onChange={handleSearchChange}
                className="flex-1 pl-4 lg:px-6 py-2 text-black
                focus:outline-none placeholder:text-gray-300 placeholder:text-base text-lg"
              />
              <button
                type="submit"
              >
                <img src="./images/search-black.png" alt="Search" className="w-10 h-10 mr-4" />
              </button>
            </form>
            <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
              RECENT POST
            </p>
          </div>

          <div className="">
            {selectedPosts.map((post) => {
              const hasMultipleImages = Array.isArray(post.photosUrls) && post.photosUrls.length > 0;
              const currentImageIndex = imageIndices[post.id] ?? 0;
              const currentImage = hasMultipleImages
                ? post.photosUrls![currentImageIndex].photo
                : post.photoUrl;

              return (
                <div key={post.id}>
                  <div className="relative">
                    <img
                      src={currentImage}
                      alt="blog"
                      className="rounded-3xl mb-3 w-full"
                    />
                    {hasMultipleImages && post.photosUrls!.length > 1 && (
                      <div className="absolute bottom-0 left-0 mx-2 right-0 flex justify-between items-center transform -translate-y-1/2">
                        <button
                          onClick={() => handlePrevImage(post.id, post.photosUrls!.length)}
                          className="bg-white text-white px-2 py-1 rounded hover:bg-opacity-70"
                        >
                          <img src="./images/left-arrow.png" alt="" className="~p-1/4" />
                        </button>
                        <button
                          onClick={() => handleNextImage(post.id, post.photosUrls!.length)}
                          className="bg-white text-white px-2 py-1 rounded hover:bg-opacity-70"
                        >
                          <img src="./images/right-arrow.png" alt="" className="~p-1/4" />
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-4 mb-16">
                    <div className="flex gap-4">
                      <div className="flex gap-2 items-center">
                        <img src="./images/green-calendar.png" alt="" />
                        <p className="text-sm text-gray-500">{post.date}</p>
                      </div>
                      <div className="flex gap-2 items-center">
                        <img src="./images/little-user.png" alt="" className="w-[11px] h-[13px]" />
                        <p className="text-sm text-gray-700">Autor: {post.author}</p>
                      </div>
                    </div>
                    <h3 className="~text-xl/3xl font-semibold text-blue-text-primary mb-2">{post.title}</h3>
                    <div className="flex items-center justify-between my-6">
                      <div
                        className={cn(
                          'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97] bg-purple-primary',
                        )}
                      >
                        <Link to={"/blog"}>
                          <span className="text-sm font-sora">Vezi Mai Mult</span>
                        </Link>
                        <div className={cn("p-4 rounded-full bg-purple-secondary")}>
                          <FiArrowRight className="text-xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


          <div className="flex justify-center mt-6 gap-2 items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded border ${currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-purple-600 border-purple-600 hover:bg-purple-50"
                }`}
            >
              ←
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`w-8 h-8 rounded-full border font-medium ${currentPage === index + 1
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600 hover:bg-purple-100"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded border ${currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-purple-600 border-purple-600 hover:bg-purple-50"
                }`}
            >
              →
            </button>
          </div>
        </div>
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col gap-10">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex border border-gray-200 bg-white md:w-full max-w-lg rounded-full overflow-hidden shadow-xl text-sm"
          >
            <input
              type="text"
              placeholder="Pe cine doresti sa cauti?"
              value={searchTerm}
              onChange={handleSearchChange}
              className="flex-1 pl-4 lg:px-6 py-4 text-black
                focus:outline-none placeholder:text-gray-300 placeholder:text-base text-lg"
            />
            <button
              type="submit"
            >
              <img src="./images/search-black.png" alt="Search" className="w-10 h-10 mr-4" />
            </button>
          </form>
          <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
            RECENT POST dadw
          </p>
          <div className="gap-4">
            <img src="./images/recent-1.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="./images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="./images/recent-2.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="./images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="./images/recent-3.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="./images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="./images/recent-4.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="./images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <img src="./images/recent-5.png" alt="" />
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <img src="./images/green-calendar.png" alt="" />
                <p className="text-sm">14 Iunie 2025</p>
              </div>
              <p className="max-w-56 text-blue-text-primary font-semibold text-[13px]">Interdum velit laoreet id
                donec ultrices tincidunt arcu.</p>
            </div>
          </div>
          <p className="text-blue-text-primary font-epilogue tracking-wider text-xl">
            POPULAR TAG:
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Balance</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Coaching</div>
            </div>
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Motivation</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Courses</div>
            </div>
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Life Guide</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Strategy</div>
            </div>
            <div className="flex gap-2">
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Education</div>
              <div className="font-sora text-sm text-[#4D5756] bg-gray-100 px-10 py-3">Coaching</div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:container flex mt-10 relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black">
        <div className="py-5 ~px-2/10 flex justify-center md:block">
          <img src="./images/intrebare-black.png" alt="" className="w-80 h-20 sm:hidden" />
          <img src="./images/intrebare-black.png" alt="" className="hidden sm:block" />
        </div>
        <div className="flex flex-col pr-4 items-center md:items-start text-center md:text-start gap-2 py-5 max-w-4xl">
          <div className="font-saint ~text-2xl/3xl">
            <p>Ai nevoie de ajutor?</p>
          </div>
          <div>
            <p>Programează o întâlnire cu un consultant Armonia Academy care te va ajuta pas cu pas pentru o
              alegere corectă a noului tău drum în carieră.</p>
          </div>
          <div className="btn-click-effect mt-2 cursor-pointer select-none">
            <span className="bg-white rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};