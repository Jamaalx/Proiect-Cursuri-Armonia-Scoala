import { useState } from "react";
import { cn } from "../../lib/cn";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const cardData = [
  {
    id: 1,
    name: "Pian",
    category: "sound",
    instrumentImage: "./images/pian.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
    pretFull : "750 RON",
    pretDiscounted : "520 RON",
    descriere:"Descoperă universul fascinant al pianului la Armonia Academy! Pianul este considerat regele instrumentelor și oferă cele mai complete fundamente muzicale. Cursurile noastre sunt adaptate pentru toate vârstele și nivelurile, de la primele melodii simple până la interpretări complexe ale marilor compozitori. Profesorii noștri experimentați te vor ghida în dezvoltarea tehnică, interpretativă și muzicalității necesare pentru a deveni un pianist acomplinit. Învață să explorezi întreaga gamă expresivă a pianului, de la delicatețea unei balade la puterea unei simfonii.",
    ceOsaInveti:"Tehnica fundamentală: Poziția corectă, digitația și coordonarea mâinilor Citirea notelor: Cheia de SOL și FA, armuri, ritmuri complexe Repertoriu variat: Clasic (Bach, Chopin, Mozart), jazz, pop, muzică contemporană Pedalarea: Tehnici de utilizare a pedalelor pentru expresivitate Improvizația: Dezvoltarea creativității și spontaneității muzicale Acompaniamentul: Susținerea vocii sau a altor instrumente Teoria muzicală: Înțelegerea armoniei, scalelor și structurilor muzicale",

    profesor: {
      nume: "Maria",
      experienta: "15 ani",
      descriere: "Profesor de pian cu experienta in predarea la copii si adulti."
    },
    ceriinte: {
      nivel: "Incepator",
      varstaMinima: "7 ani",
      echipamentNecesar: "Pian sau tastatura"
    },
    cuiISeadreseaza:{
      tipuri: ["Incepatori", "Intermediari"],
      varsta: "7 ani si peste",
      scop: "Dezvoltarea abilitatilor muzicale si a creativitatii"
    },
    curicula: {
      ceOSaInveti: "Tehnici de baza pentru interpretarea la pian, notiuni de teorie muzicala si dezvoltarea urechii muzicale."
    },
    sesiuni: "4-5 sesiuni",
    capitoleCurs: {
      capitole: [
        "Introducere in pian",
        "Tehnici de baza",
        "Interpretare si creativitate",
        "Teorie muzicala"
      ]
    },
    optiuniDeplata: {
      tipuri: 
      {
        integral:"Plata integrala",
      },
      optiuniDePlataInRate:{
        opt1:{
          descriere: "2 rate fara dobanda.",
          pret:"111"
        },
        opt2:{
          descriere: "12 rate fara dobanda.",
          pret:"3212"
        }
      }
    }
  },
  {
    id: 2,
    name: "Tobe",
    category: "sound",
    instrumentImage: "./images/tobe.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
    pretFull : "750 RON",
    pretDiscounted : "520 RON",
    descriere:"Eliberează-ți energia și descoperă puterea ritmului cu cursurile de tobe de la Armonia Academy! Tobele sunt inima oricărei formații muzicale și oferă una dintre cele mai captivante experiențe muzicale. De la beaturi simple la pattern-uri complexe, te invităm să explorezi universul percuției într-o sală special amenajată, alături de un profesor cu experiență bogată în interpretare și producție muzicală. Cursurile noastre acoperă toate stilurile - de la pop și rock la jazz și metal - și sunt adaptate pentru toate vârstele și nivelurile, oferind o experiență completă și interactivă.",
    ceOsaInveti:"Tehnica fundamentală: Poziția corectă, ținerea băților, coordonarea membrelor Rudimente de bază: Paradiddle, flam, roll și alte tehnici esențiale Pattern-uri ritmice: Pentru toate stilurile muzicale (rock, pop, jazz, funk, latin) Citirea notației: Partituri pentru percuție și chart-uri Coordonarea: Independența membrelor și poliritmuri Dinamica și expresivitate: Control asupra volumului și intensității Acompaniament live: Integrarea cu alte instrumente (pian, chitară) Tehnici avansate: Ghost notes, fills creativi, subdiviziuni complexe",

    profesor: {
      nume: "Aurel Ciucur",
      experienta: "peste 5 ani",
      descriere: "Profesor pasionat și producător muzical cu peste 5 ani de experiență în predare și interpretare scenică. Aurel combină cunoștințele teoretice cu experiența practică în trupe, oferind o perspectivă completă asupra muzicii moderne și a producției muzicale."
    },
    ceriinte: {
      nivel: "Incepator",
      varstaMinima: "7 ani",
      echipamentNecesar: "Pian sau tastatura"
    },
    cuiISeadreseaza:{
      tipuri: ["Incepatori", "Intermediari"],
      varsta: "7 ani si peste",
      scop: "Dezvoltarea abilitatilor muzicale si a creativitatii"
    },
    curicula: {
      ceOSaInveti: "Tehnici de baza pentru interpretarea la pian, notiuni de teorie muzicala si dezvoltarea urechii muzicale."
    },
    sesiuni: "4-5 sesiuni",
    capitoleCurs: {
      capitole: [
        "Introducere in pian",
        "Tehnici de baza",
        "Interpretare si creativitate",
        "Teorie muzicala"
      ]
    },
    optiuniDeplata: {
      tipuri: 
      {
        integral:"Plata integrala",
      },
      optiuniDePlataInRate:{
        opt1:{
          descriere: "2 rate fara dobanda.",
          pret:"111"
        },
        opt2:{
          descriere: "12 rate fara dobanda.",
          pret:"3212"
        }
      }
    }
  },
  {
    id: 3,
    name: "Chitara",
    category: "sound",
    instrumentImage: "./images/pian.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "chitara e smechera",
    pretFull : "750 RON",
    pretDiscounted : "520 RON",
    descriere:"",
    ceOsaInveti:"",

    profesor: {
      nume: "Ion Popescu",
      experienta: "5 ani",
      descriere: "Profesor de pian cu experienta in predarea la copii si adulti."
    },
    ceriinte: {
      nivel: "Incepator",
      varstaMinima: "7 ani",
      echipamentNecesar: "Pian sau tastatura"
    },
    cuiISeadreseaza:{
      tipuri: ["Incepatori", "Intermediari"],
      varsta: "7 ani si peste",
      scop: "Dezvoltarea abilitatilor muzicale si a creativitatii"
    },
    curicula: {
      ceOSaInveti: "Tehnici de baza pentru interpretarea la pian, notiuni de teorie muzicala si dezvoltarea urechii muzicale."
    },
    sesiuni: "4-5 sesiuni",
    capitoleCurs: {
      capitole: [
        "Introducere in pian",
        "Tehnici de baza",
        "Interpretare si creativitate",
        "Teorie muzicala"
      ]
    },
    optiuniDeplata: {
      tipuri: 
      {
        integral:"Plata integrala",
      },
      optiuniDePlataInRate:{
        opt1:{
          descriere: "2 rate fara dobanda.",
          pret:"111"
        },
        opt2:{
          descriere: "12 rate fara dobanda.",
          pret:"3212"
        }
      }
    }
  },
];

export default function Programe() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  type Category = "sound" | "digital" | null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleCategoryFilter = (cat: Exclude<Category, null>) => {
    setSelectedCategory((prev) => (prev === cat ? null : cat));
  };

  const filteredCards = cardData.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory ? card.category === selectedCategory : true;
    return matchesSearch && matchesCategory;

  });
  return (
    <div className="md:container md:mx-auto px-6 flex flex-col gap-10 mt-[50px]">
      {/* Banner */}
      <div className="mb-[70px]">
        <img src="./images/banner.png" alt="" className="w-full" />
      </div>

      {/* Buttons and search bar */}
      <div className="flex flex-col mx-0 md:mx-auto xl:mx-0 gap-6 xl:flex-row items-center xl:justify-between">
        {/* Filter buttons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleCategoryFilter("sound")}
            className={`~text-sm/2xl px-4 py-3 rounded-full tracking-wider font-semibold ${selectedCategory === "sound"
              ? "bg-green-secondary text-white"
              : "border border-green-secondary text-green-secondary"
              }`}
          >
            Armonia Sound
          </button>

          <button
            onClick={() => handleCategoryFilter("digital")}
            className={`~text-sm/2xl px-4 py-3 rounded-full tracking-wider font-semibold ${selectedCategory === "digital"
              ? "bg-green-secondary text-white"
              : "border border-green-secondary text-green-secondary"
              }`}
          >
            Armonia Digital
          </button>
        </div>

        {/* Search bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-white md:w-full max-w-lg rounded-full overflow-hidden shadow-2xl text-sm"
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
      </div>

      {/* Chat Buble */}
      <div className="hidden xl:flex justify-end absolute -bottom-60 right-10">
        <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 relative z-10">
          <img className="scale-50 md:scale-90 lg:scale-100" src="./images/chat_bot.png" alt="" />
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}

              className="bg-white text-black hover:scale-105 rounded-xl p-6 shadow-xl hover:shadow-xl transition"
            >
              <div className="flex items-center gap-8">
                <div>
                  <img src={card.instrumentImage} alt="" className="hidden lg:block" />
                  <img src={card.instrumentImage} alt="" className="w-20 h-30 lg:hidden" />
                </div>

                <div className="flex flex-col">
                  <div className='flex w-fit mb-6 gap-3 bg-green-secondary-rgb/10 items-center py-2 px-2 rounded-lg'>
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <p className="text-sm font-medium text-green-secondary-rgb">ARMONIA Academy</p>
                  </div>

                  <div className="flex gap-2">
                    <img src={card.pin} alt="" className="w-5 aspect-square object-contain" />
                    <p className="m-0 text-sm tracking-wider text-[#4D5756]">Bucuresti</p>
                  </div>

                  <div className={`~text-4xl/5xl mt-2 font-saint ${card.culoareText}`}>
                    <p>{card.name}</p>
                  </div>

                  <div className="text-[#333931] text-sm max-w-64">
                    <p>{card.customText}</p>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <div className="relative text-[#E6E6E6]">
                      <div className="absolute">
                        <img src="./images/red-line.png" alt="" />
                      </div>
                      <p className="text-xl font-bold font-epilogue">{card.pretFull}</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold font-epilogue text-green-secondary">{card.pretDiscounted}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div
                      className={cn(
                        'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]', card.buttonColor1
                      )}
                    >
                      <Link to="/program">
                        <span className="text-sm font-medium">Vezi mai Mult</span>
                      </Link>
                      <div className={cn("p-4 rounded-full", card.buttonColor2)}>
                        <FiArrowRight className="text-xl" />
                      </div>
                    </div>
                    <div className="flex md:hidden items-end">
                      <img src={card.humanIcon} alt="" className="w-7 h-12" />
                    </div>
                  </div>

                </div>

                <div className="hidden md:flex self-end">
                  <img src={card.humanIcon} alt="" className="w-7 h-12" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-300">Nicio potrivire</p>
        )}
      </div>

      <div className="md:container flex w-full relative md:mx-auto rounded-3xl  bg-yellow-secondary text-black">
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
            <span className="bg-white ~text-xs/sm text-nowrap rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}