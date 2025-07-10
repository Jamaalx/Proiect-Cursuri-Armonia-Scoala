import { useState } from "react";
import { Link } from "react-router-dom";

const teachers = [
  {
    name: "Micheal Hammond",
    imagineTeacher: "/images/michel-hamond.png",
  },
  {
    name: "Cherly Curry",
    imagineTeacher: "/images/chery-cury.png",
  },
  {
    name: "Willie Diaz",
    imagineTeacher: "/images/whillie-diaz.png",
  },
  {
    name: "Jimmy Sifuentes",
    imagineTeacher: "/images/jhimmy-siluete.png",
  },
  {
    name: "Justin Clark",
    imagineTeacher: "/images/justin-clark.png",
  },
  {
    name: "Walter Skeete",
    imagineTeacher: "/images/walter-skeete.png",
  },
  {
    name: "Willky Diaz",
    imagineTeacher: "/images/w-diaz.png",
  },
  {
    name: "Ann Dooley",
    imagineTeacher: "/images/ann-doley.png",
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
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className=" hidden  md:block absolute right-0 top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 opacity-0 2xl:opacity-100">
        <img src="/images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex flex-col gap-10 mx-4 mt-[50px]">
        {/* Banner */}
        <div className="~mb-6/10">
          <img src="/images/profesori-banner.png" alt="" className=" h-1/2" />
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
            <img src="/images/search.png" alt="Search" className="w-6 h-6" />
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
          <img src="/images/intrebare-black.png" alt="" />
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