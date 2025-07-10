import { useState } from "react";
import { Link } from "react-router";

const teachers = [
   {
    id: 1,
    name: "CODRUȚ ANDREI",
    role: "Profesor Mandolină/Ukulele",
    imagineTeacher: "./images/codru-andrei.png",
    locatie: "Gara de Nord, București",
    email: "codru.andrei@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Profesor de mandolină cu 4 ani experiență în predare și peste 15 ani experiență muzicală internațională.",
    descriereCompleta: "Țin cursul de mandolină la Școala Armonia de patru ani. Personal, am descoperit mandolina mai mult întâmplător, acum mai bine de 15 ani prin albumul mandolinistului american David Grisman. Parcursul meu muzical a început pe la 15 ani, în liceu, când am luat contact cu chitaristul și profesorul Adi Manolovici. Debutul meu scenic a venit în 2007 cântând heavy metal și hard rock alături de trupa RUST. În 2012 m-am alăturat duo-ului Soul Serenade, cu care mi-am petrecut următorii 11 ani cântând pe scene din țară și străinătate, inclusiv la New York.",
    educatie: "Autodidact cu parcurs vast în diverse stiluri muzicale - blues, jazz, bluegrass, choro brazilian, muzică clasică prin Bach și Vivaldi.",
    expertiza: [
      "Mandolină - blues, jazz, bluegrass",
      "Ukulele pentru toate vârstele", 
      "Choro brazilian",
      "Muzică clasică - Bach, Vivaldi",
      "Experiență scenică internațională"
    ],
    realizari: [
      "Locul 2 la European Blues Challenge, Toulouse (2013)",
      "Concerte în Luxembourg, Germania, Ungaria, Bulgaria, Franța",
      "Festival organizat de Institutul Cultural Român la New York",
      "11 ani cu duo-ul Soul Serenade"
    ]
  },
  {
    id: 2,
    name: "MATEI ALEXANDRU",
    role: "Profesor Chitară/Pian",
    imagineTeacher: "./images/matei-alexandru.png",
    locatie: "Gara de Nord, București", 
    email: "matei.alexandru@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Profesor de chitară și pian cu formare completă muzicală și experiență în coordonarea atelierelor de artă muzicală.",
    descriereCompleta: "Sunt profesor de chitară și pian la școala de muzică Armonia. Vocația mea pentru muzică s-a manifestat încă din copilărie prin fascinația pentru instrumente muzicale. La vârsta de 5 ani am început studiul pianului prin lecții particulare și între 7 și 15 ani am urmat cursurile Școlii de muzică și arte plastice, numărul 5 din București. Am fost laureat al unor concursuri de interpretare vocală, la chitară și la pian, am coordonat activitatea a numeroase ateliere de artă muzicală și ofer lecții adaptate pentru elevi de toate vârstele.",
    educatie: "Școala de muzică și arte plastice nr. 5 București - pian, chitară, teorie muzicală și cor (7-15 ani). Lecții particulare de pian din vârsta de 5 ani.",
    expertiza: [
      "Pian - tehnici specifice și teorie muzicală",
      "Chitară - toate nivelurile",
      "Coordonare ateliere de artă muzicală",
      "Compoziție și interpretare",
      "Dezvoltarea abilitaților muzicale complete"
    ],
    realizari: [
      "Laureat la concursuri de interpretare vocală",
      "Laureat la concursuri de chitară și pian",
      "Coordonator ateliere artă muzicală pentru fundații și ONG-uri",
      "Membru activ în formația A Theory of Harmony"
    ]
  },
  {
    id: 3,
    name: "ANA MARIA SCRIOȘTEANU",
    role: "Profesor Pian/Canto",
    imagineTeacher: "./images/ana-maria-scriosteanu.png",
    locatie: "Gara de Nord, București",
    email: "ana.scriosteanu@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Studentă anul IV la UNMB, specializare canto clasic, cu experiență în muzică ușoară și jazz.",
    descriereCompleta: "Muzica face parte din viața mea încă de la vârsta de 5 ani, când am început să urmez cursuri de chitară și canto. Am urmat cursurile Școlii de Arte nr. 3, secțiunea violoncel și pian secundar, iar apoi am continuat cu Liceul de Muzică George Enescu din București, specializarea canto clasic. În prezent, sunt studentă în anul IV la Universitatea Națională de Muzică din București. Am participat la numeroase concursuri și festivaluri de muzică, obținând premii care mi-au validat eforturile. În paralel, activez ca solistă în trupa de evenimente Bella Band.",
    educatie: "Universitatea Națională de Muzică București - anul IV, canto clasic. Liceul de Muzică George Enescu București. Școala de Arte nr. 3 - violoncel și pian secundar.",
    expertiza: [
      "Canto clasic - tehnica vocală avansată",
      "Muzică ușoară și jazz",
      "Pian - nivel intermediar și avansat",
      "Interpretare scenică - experiență în Bella Band",
      "Predare prietenoasă și relaxată"
    ],
    realizari: [
      "Premii la concursuri și festivaluri de muzică",
      "Solistă activă în trupa Bella Band",
      "Interpretare pop, soul, jazz și muzică de petrecere",
      "Experiență în predarea pentru toate vârstele"
    ]
  },
  {
    id: 4,
    name: "ANTONIA ȘTEFĂNESCU",
    role: "Profesor Pian/Canto",
    imagineTeacher: "./images/antonia-stefanescu.png",
    locatie: "Gara de Nord, București",
    email: "antonia.stefanescu@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Studentă anul IV la UNMB, secția canto clasic, cu specializare în pian de performanță și operă.",
    descriereCompleta: "Pasiunea mea pentru muzică a început încă de la vârsta de 5 ani, când am făcut primii pași prin studiul canto-ului pop, muzicii folclorice și pianului, instrumentul meu de suflet. Am urmat un parcurs educațional dedicat muzicii la Colegiul de Artă Carmen Sylva din Ploiești, studiind pianul de performanță încă din clasele primare până la liceu, iar din clasa a IX-a m-am orientat către canto clasic. Am participat la numeroase concursuri, spectacole și olimpiade de muzică ca solistă de pian, canto folcloric și clasic, și coristă, obținând premii pe măsură.",
    educatie: "Universitatea Națională de Muzică București - anul IV, canto clasic. Colegiul de Artă Carmen Sylva Ploiești - pian de performanță și canto clasic.",
    expertiza: [
      "Pian de performanță - nivel avansat",
      "Canto clasic și operă",
      "Canto folcloric și pop",
      "Activitate pedagogică activă",
      "Abordare echilibrată tehnică-expresivitate"
    ],
    realizari: [
      "Premii la concursuri de pian și canto",
      "Premii la olimpiade de muzică",
      "Experiență ca solistă și coristă",
      "Activitate pedagogică pentru toate vârstele"
    ]
  },
  {
    id: 5,
    name: "LUCIAN SANDA",
    role: "Profesor Chitară/Bass/Ukulele",
    imagineTeacher: "./images/lucian-sanda.png",
    locatie: "Gara de Nord, București",
    email: "lucian.sanda@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Absolvent Brighton Jazz School cu experiență vastă în trupe și predare, specializat în chitară, bass și ukulele.",
    descriereCompleta: "Nu am visat niciodată că voi fi muzician, doar m-am lăsat purtat de șirul întâmplărilor. Prima mea chitară a fost un desfăcător de capace de sticlă în formă de chitară. Am absolvit Sociologie, Psihologie și Pedagogie la Universitatea București, iar apoi am studiat muzica în Anglia unde am absolvit Brighton Jazz School și Brighton Jazz Guitar School. Am devenit tutor de chitară la Brighton Unemployed Centre și am participat consecutiv la 6 ediții ale Fringe Festival. În 2020 am revenit în țară, susținând workshopuri și concerte la MNAC, Muzeul Țăranului Român și Biblioteca Națională.",
    educatie: "Brighton Jazz School și Brighton Jazz Guitar School, Anglia. Universitatea București - Sociologie, Psihologie, Pedagogie.",
    expertiza: [
      "Chitară jazz și clasică",
      "Bass electric și acustic", 
      "Ukulele pentru toate vârstele",
      "Experiență în predare și tutorat",
      "Compoziție și aranjamente"
    ],
    realizari: [
      "6 participări consecutive la Fringe Festival",
      "3 ediții Festival de muzică Lobe Supreme",
      "Membru fondator Jazzmine Trio și Acronic Jazz Trio",
      "Coloană sonoră film „No fixed abode",
      "Concerte la MNAC, Muzeul Țăranului, Biblioteca Națională",
    ]
  },
   {
    id: 6,
    name: "ALEXANDRU MÎNZAR",
    role: "Profesor Saxofon",
    imagineTeacher: "./images/alexandru-minzar.png",
    locatie: "Gara de Nord, București",
    email: "alexandru.minzar@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Absolvent UNMB cu licența și masterul în interpretare muzicală, experiență în orchestre simfonice și diverse proiecte.",
    descriereCompleta: "Sunt absolvent al Facultății de Muzică din cadrul UNMB, unde am obținut atât licența, cât și masterul în interpretare muzicală. Cariera mea artistică s-a conturat în paralel cu formarea academică, implicându-mă în numeroase proiecte muzicale - de la trupe și band-uri, la muzică de cameră și colaborări cu orchestre simfonice din Ploiești și București. Pentru mine, muzica înseamnă diversitate și comunicare, motiv pentru care am explorat și alte stiluri - am avut ocazia să cânt și alături de orchestre de folclor, ceea ce mi-a îmbogățit profund repertoriul și sensibilitatea artistică.",
    educatie: "Universitatea Națională de Muzică București - Licența și Masterul în interpretare muzicală, saxofon.",
    expertiza: [
      "Saxofon clasic și contemporan",
      "Muzică de cameră",
      "Experiență în orchestre simfonice",
      "Colaborări cu orchestre de folclor",
      "Diversitate stilistică și comunicare muzicală"
    ],
    realizari: [
      "Colaborări cu orchestre simfonice din Ploiești și București",
      "Experiență în trupe și band-uri diverse",
      "Proiecte de muzică de cameră",
      "Colaborări cu orchestre de folclor"
    ]
  },
   {
    id: 7,
    name: "ȘTEFAN DUPU",
    role: "Profesor Chitară/Bass/Ukulele",
    imagineTeacher: "./images/stefan-dupu.png",
    locatie: "Mihai Bravu, București",
    email: "stefan.dupu@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Profesor cu peste 15 ani experiență, absolvent Liceul de Arte Victor Brauner, specializat în diverse stiluri muzicale.",
    descriereCompleta: "Sunt profesor de chitară și muzician cu peste 15 ani de experiență în lumea muzicii. Am descoperit această pasiune de mic, datorită tatălui meu, și de la 6 ani am început studiul chitarei și pianului. Am studiat la Liceul de Arte Victor Brauner din Piatra Neamț, unde mi-am pus bazele teoretice și practice solide. În timpul liceului am participat la mai multe concursuri locale, atât la chitara clasică, cât și la pian. De-a lungul timpului am cântat în diverse trupe și proiecte muzicale, abordând o paletă largă de stiluri - de la folk românesc până la death metal.",
    educatie: "Liceul de Arte Victor Brauner Piatra Neamț. Studii de chitară și pian din vârsta de 6 ani.",
    expertiza: [
      "Chitară clasică și electrică",
      "Bass electric", 
      "Ukulele și instrumente cu corzi",
      "Stiluri diverse - folk, rock, metal",
      "Dezvoltarea urechii muzicale"
    ],
    realizari: [
      "Premii și mențiuni la concursuri de chitară clasică și pian",
      "Experiență în trupe diverse - folk românesc la death metal",
      "Peste 15 ani experiență în predare",
      "Dezvoltarea unui stil propriu și viziune deschisă"
    ]
  },
  {
    id: 8,
    name: "MARIA NICOLAU",
    role: "Profesor Pian/Canto",
    imagineTeacher: "./images/maria-nicolau.png",
    locatie: "Mihai Bravu, București",
    email: "maria.nicolau@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Profesor de canto și pian specializat în lucrul cu copiii, cu abordare personalizată și empatică.",
    descriereCompleta: "Sunt profesor de canto și pian pasionat de muzică și de lucrul cu copiii, cu o abordare personalizată și empatică a predării. Pentru mine, fiecare copil este unic, iar lecțiile sunt adaptate în funcție de nevoile, vârsta și nivelul fiecărui elev. Scopul meu este nu doar să dezvolt abilitățile vocale ale copiilor, ci și să le ofer încredere în propria voce și bucuria de a cânta. Predau într-un mod interactiv, relaxat și prietenos, punând accent pe respirația corectă, dicție, intonație, dezvoltarea auzului muzical și expresivitate.",
    educatie: "Specializare în pedagogie muzicală și lucrul cu copiii. Formare în tehnici vocale și pian.",
    expertiza: [
      "Canto pentru copii - tehnici vocale adaptate",
      "Pian pentru începători și intermediari",
      "Dezvoltarea auzului muzical la copii",
      "Metode interactive și jucăușe de predare",
      "Respirație, dicție și expresivitate vocală"
    ],
    realizari: [
      "Specializare în predarea pentru copii",
      "Abordare personalizată pentru fiecare elev",
      "Experiență în dezvoltarea încrederii în sine prin muzică",
      "Metode creative și interactive de predare"
    ]
  },
  {
    id: 9,
    name: "RALUCA ANTONOVICI",
    role: "Profesor Canto/Pian",
    imagineTeacher: "./images/raluca-antonovici.png",
    locatie: "Piața Progresul, București",
    email: "raluca.antonovici@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Absolventă UNMB, specializată în Compoziție Muzicală, cu peste 15 ani experiență didactică și colaborări artistice.",
    descriereCompleta: "Absolventă a Universității Naționale de Muzică din București, specializată în Compoziție Muzicală, predau cu pasiune pian și canto, îmbinând experiența scenică cu cea pedagogică. Cu peste 15 ani de activitate didactică și colaborări alături de artiști cunoscuți din zona folk, pop și nu numai, ofer lecții dinamice și adaptate fiecărui cursant. Pasiunea mea pentru compoziție se reflectă și în creațiile dedicate copiilor - piese originale, gândite cu drag pentru a inspira și a bucura cursanții mici. Lecțiile mele includ acompaniament live la pian, oferind o experiență completă, personalizată și profund muzicală.",
    educatie: "Universitatea Națională de Muzică București - Compoziție Muzicală.",
    expertiza: [
      "Compoziție muzicală și aranjamente",
      "Pian clasic și modern",
      "Canto - tehnici vocale avansate",
      "Acompaniament live la pian",
      "Creații originale pentru copii"
    ],
    realizari: [
      "Peste 15 ani experiență didactică",
      "Colaborări cu artiști cunoscuți folk și pop",
      "Compoziții originale pentru copii",
      "Experiență scenică și pedagogică combinată"
    ]
  },
  {
    id: 10,
    name: "AUREL CIUCUR",
    role: "Profesor Tobe",
    imagineTeacher: "./images/aurel-ciucur.png",
    locatie: "Piața Progresul, București",
    email: "aurel.ciucur@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Profesor de tobe și producător muzical cu experiență în compoziție, aranjamente și interpretare scenică.",
    descriereCompleta: "Profesor de tobe și producător muzical, cu experiență în compoziție și aranjamente muzicale pentru toate genurile, propun o călătorie autentică prin universul sunetelor și ritmurilor muzicale. Cu o activitate bogată atât în predare, cât și în interpretare scenică de mai mult de 5 ani alături de trupe pop și hard rock, transform fiecare lecție într-o experiență interactivă, adaptată stilului și nivelul fiecărui cursant. Pe lângă studiul tobelor, ofer posibilitatea de a explora și alte instrumente: pianul și chitara acustică, integrând elemente de acompaniament live în timpul lecțiilor.",
    educatie: "Formare în producție muzicală, compoziție și aranjamente. Experiență practică în trupe și proiecte muzicale.",
    expertiza: [
      "Tobe - toate stilurile (pop, rock, jazz, funk)",
      "Producție muzicală și aranjamente",
      "Compoziție pentru diverse genuri",
      "Pian și chitară acustică complementare",
      "Acompaniament live în lecții"
    ],
    realizari: [
      "Peste 5 ani experiență în predare și interpretare scenică",
      "Activitate în trupe pop și hard rock",
      "Experiență în producție muzicală",
      "Aranjamente pentru diverse genuri muzicale"
    ]
  },
  {
    id: 11,
    name: "MIRELA POPA",
    role: "Profesor Vioară",
    imagineTeacher: "./images/mirela-popa.png",
    locatie: "Piața Progresul, București",
    email: "mirela.popa@armoniaacademy.ro",
    website: "armoniaacademy.ro",
    descriereScurta: "Absolventă UNMB cu peste 20 ani experiență ca violonistă în Orchestra Radio, specializată în interpretare muzicală.",
    descriereCompleta: "Profesoară de vioară, absolventă a secției de interpretare muzicală din cadrul Universității Naționale de Muzică din București, cu o experiență bogată cumulată în peste 20 de ani ca violonistă în cadrul Orchestrei Radio. Această experiență vastă se reflectă în lecțiile adaptate nivelului și nevoilor fiecărui elev - fie că e la început de drum sau dorește să-și perfecționeze tehnica. Accentul este pus nu numai pe rigoarea interpretării, ci mai ales pe bucuria de a cânta. Răbdarea și perseverența sunt esențiale, iar cu susținere și încredere, fiecare cursant poate atinge rezultate remarcabile.",
    educatie: "Universitatea Națională de Muzică București - secția interpretare muzicală, vioară.",
    expertiza: [
      "Vioară clasică - nivel profesionist",
      "Experiență orchestrală de elită (Orchestra Radio)",
      "Interpretare muzicală de înaltă performanță",
      "Predare adaptată pentru toate nivelurile",
      "Îmbinarea rigorii cu bucuria de a cânta"
    ],
    realizari: [
      "Peste 20 ani în Orchestra Radio",
      "Experiență vastă în interpretare muzicală profesionistă",
      "Predare pentru toate nivelurile și vârstele",
      "Abordare care combină excelența cu pasiunea"
    ]
  },
  {
  id: 12,
  name: "DAMIAN MARIN",
  role: "Profesor Clarinet/Saxofon",
  imagineTeacher: "./images/damian-marin.png",
  locatie: "Piața Progresul, București",
  email: "damian.marin@armoniaacademy.ro",
  website: "armoniaacademy.ro",
  descriereScurta: "Student în curs de absolvire UNMB la clarinet și saxofon, cu abordare modernă și flexibilă a predării.",
  descriereCompleta: "Sunt în curs de absolvire a facultății de interpretare instrumentală la clarinet și saxofon din cadrul Universității de Muzică din București, unde îmi voi continua formarea și la nivel de masterat. Drumul meu în muzică a fost neconvențional: am absolvit un liceu cu profil diferit, iar pasiunea pentru clarinet și saxofon a apărut abia spre finalul liceului. Prin dedicare și pregătire intensă, am reușit să intru la Conservator, iar acest parcurs personal mi-a arătat că muzica nu are vârstă, ci doar curajul de a începe. Lecțiile mele sunt personalizate, accesibile și construite în jurul nevoilor și pasiunilor tale muzicale.",
  educatie: "Universitatea Națională de Muzică București - în curs de absolvire, interpretare instrumentală clarinet și saxofon. Continuare la nivel de masterat.",
  expertiza: [
    "Clarinet clasic și modern",
    "Saxofon - diverse stiluri",
    "Abordare personalizată și accesibilă",
    "Perspectiva că muzica nu are vârstă",
    "Lecții adaptate pasiunilor individuale"
  ],
  realizari: [
    "Parcurs neconvențional demonstrând că dedicarea depășește orice obstacol",
    "Acceptat la UNMB prin pregătire intensă",
    "Continuare la masterat - demonstrație de excelență",
    "Filosofia că muzica este accesibilă la orice vârstă"
  ]
},
{
  id: 13, 
  name: "CODRIN MIRCEA",
  role: "Fondator & Profesor Chitară",
  imagineTeacher: "./images/codrin-mircea.png",
  locatie: "Obor-Făinari",
  email: "codrin.mircea@armoniaacademy.ro",
  website: "armoniaacademy.ro",
  descriereScurta: "Fondatorul Armonia Academy cu 12 ani experiență pedagogică și formare completă în chitară clasică, electrică și jazz.",
  descriereCompleta: "Muzica i-a atras atenția încă din copilărie, motiv pentru care și-a dorit să învețe să cânte la chitară. A început să studieze singur prin abordarea stilurilor folk și rock, iar apoi s-a perfecționat la Școala Populară de Arte Tiberiu Brediceanu din Brașov unde a deslușit tainele chitarei clasice și chitarei electrice. După ce s-a stabilit în București, și-a dorit să se dezvolte alături de muzicieni și chitariști cu experiență. Urmând un plan bine pus la punct, după ce a studiat teorie muzicală avansată alături de Dragoș Stama, a învățat tehnici shred de chitară electrică, tehnici de armonie modală, tehnici melodice și lick-uri metal de la Corrado Sgandura. Introducerea în jazz i-a fost transmisă de către Marius Pop, după care alături de Mihnea Ferezan a studiat lick-uri și armonie blues, rock și metal.",
  educatie: "Școala Populară de Arte Tiberiu Brediceanu Brașov - chitară clasică și electrică. Studii avansate cu Dragoș Stama (teorie muzicală), Corrado Sgandura (tehnici shred și armonie modală), Marius Pop (jazz), Mihnea Ferezan (blues, rock, metal).",
  expertiza: [
    "Chitară clasică și fingerstyle",
    "Chitară electrică - tehnici shred și metal",
    "Jazz și improvizație",
    "Blues, rock și pop",
    "Teorie muzicală avansată",
    "Armonie modală și melodică",
    "12 ani experiență pedagogică"
  ],
  realizari: [
    "Fondatorul Armonia Academy",
    "12 ani de activitate pedagogică cu rezultate excepționale",
    "Elevii săi au obținut numeroase premii la concursurile naționale de chitară",
    "Chitarist versatil cu abordare completă - de la clasic la metal",
    "Experiență vastă în predarea conceptelor muzicale complexe"
  ],
  misiune: "Să-i inițieze pe iubitorii de chitară în arta muzicii bazându-se pe înțelegerea și aplicarea conceptelor muzicale și oferindu-le cu răbdare susținerea de care vor avea nevoie."
}
];

export default function Profesori() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const filteredCards = teachers.filter((teacher) => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchTerm);
    return matchesSearch;

  });
  return (
    <div className="relative">
      <div className="hidden md:block absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-0 2xl:opacity-100">
        <img src="./images/right-half-circle.png" alt="" />
      </div>
      <div className=" hidden  md:block absolute right-0 top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 opacity-0 2xl:opacity-100">
        <img src="./images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex flex-col gap-10 mx-4 mt-[50px]">
        {/* Banner */}
        <div className="~mb-6/10">
          <img src="./images/profesori-banner.png" alt="" className=" h-1/2" />
        </div>
      </div>
      {/* Search bar */}
      <div className="md:container md:mx-auto">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-white md:w-full max-w-lg rounded-full overflow-hidden shadow-2xl mx-4 text-sm"
        >
          <input
            type="text"
            placeholder="Ce dorești să înveți astăzi?"
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-1 pl-4 lg:px-6 py-4 text-black focus:outline-none placeholder:text-gray-300 placeholder:text-base text-lg"
          />
          <button
            type="submit"
            className="bg-teal-500 rounded-full hover:bg-teal-400 text-white px-5 py-4 transition"
          >
            <img src="./images/search.png" alt="Search" className="w-6 h-6" />
          </button>
        </form>
        {/* Profesori carduri */}
        <Link to={"/profesor"}>
          <div className="px-4 py-8 md:container md:mx-auto gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {filteredCards.length > 0 ? (
              filteredCards.map((teacher, index) => (

                <div key={index} className="p-2 shadow-lg rounded-lg flex flex-col">
                  <img src={teacher.imagineTeacher} alt="" />
                  <div className="m-4">
                    <p className="font-bold text-lg text-blue-text-primary">{teacher.name}</p>
                    <p className="text-sm text-green-secondary">Trainer</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-300">Nicio potrivire</p>
            )}
          </div>
        </Link>
      </div >
      <div className="hidden md:flex container flex-col md:flex-row relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black mb-20">
        <div className="py-5 px-10 flex justify-center md:block">
          <img src="./images/intrebare-black.png" alt="" />
        </div>
        <div className="flex flex-col p-5 items-center md:items-start text-center md:text-start gap-2 py-5 max-w-3xl">
          <div className="font-saint text-3xl">
            <p>Ai nevoie de ajutor?</p>
          </div>
          <div>
            <p>Programează o întâlnire cu un consultant Armonia Academy care te va ajuta pas cu pas pentru o
              alegere corectă a noului tău drum în carieră.</p>
          </div>
          <div className="mt-6 btn-click-effect cursor-pointer select-none">
            <span className="bg-white rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div >
  );
}