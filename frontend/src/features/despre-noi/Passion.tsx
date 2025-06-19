import { Link } from "react-router";

const teachers = [
  {
    nume: "Micheal Hammond",
    imagineTeacher: "./images/michel-hamond.png",
  },
  {
    nume: "Cherly Curry",
    imagineTeacher: "./images/chery-cury.png",
  },
  {
    nume: "Willie Diaz",
    imagineTeacher: "./images/whillie-diaz.png",
  },
  {
    nume: "Jimmy Sifuentes",
    imagineTeacher: "./images/jhimmy-siluete.png",
  },
  {
    nume: "Justin Clark",
    imagineTeacher: "./images/justin-clark.png",
  },
  {
    nume: "Walter Skeete",
    imagineTeacher: "./images/walter-skeete.png",
  },
  {
    nume: "Willky Diaz",
    imagineTeacher: "./images/w-diaz.png",
  },
  {
    nume: "Ann Dooley",
    imagineTeacher: "./images/ann-doley.png",
  },
];

export default function Passion() {
  return (
    <div className="relative flex flex-col ~mt-20/40">
      <div className="xl:container md:mx-auto pl-4 flex justify-center lg:justify-start mb-10">
        <div className="flex flex-col gap-6 ~max-w-xs/3xl justify-center">
          <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
            <p className="tracking-wider">Filozofia educațională</p>
          </div>
          <div className="font-saint ~text-xl/5xl text-[#0E2A46]">
            It's Our Passion To Work With People At
            <span className="text-green-secondary-rgb"> Armonia Acedemy.</span>
          </div>

          <div className="~text-sm/lg">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud. veniam, quis nostrud..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud..</p>
          </div>
        </div>
        <div className="hidden md:flex items-end">
          <div className="scale-100">
            <img src="./images/purple-human-big.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img className="w-full" src="./images/purple-banner.png" alt="" />
      </div>

      <div className="md:container md:mx-auto mt-10">
        <div className="flex justify-center">
          <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
            <p className="tracking-wider">Filozofia educațională</p>
          </div>
        </div>
        {/* Profesori carduri */}
        <div className="px-4 py-8 md:container md:mx-auto gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {teachers.map((teacher, index) => (
            <Link to={"/profesor"} key={index}>
              <div className="p-2 shadow-lg rounded-lg flex flex-col">
                <img src={teacher.imagineTeacher} alt="" />
                <div className="m-4">
                  <p className="font-bold text-lg text-blue-text-primary">{teacher.nume}</p>
                  <p className="text-sm text-green-secondary">Teacher</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="md:container flex flex-col md:flex-row relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black mb-20">
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

      <div className="md:container justify-center flex flex-col md:flex-row relative md:mx-auto rounded-3xl mx-6 bg-green-secondary text-white mb-20">
        <div className="flex flex-col p-5 items-center text-center md:text-start gap-2 py-5 max-w-7xl">
          <div className="font-abril text-5xl">
            <p>Vei beneficia de o experiență impecabilă</p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod or incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud..</p>
          </div>
          <div className="font-abril text-5xl">
            <p>Ce îți oferim?</p>
          </div>

          <div className="px-4 hidden lg:grid py-8 md:container md:mx-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-2 shadow-lg bg-white rounded-lg flex flex-col w-[239px] h-[290px]">
              <div className="m-4">
              </div>
            </div>
            <div className="p-2 shadow-lg bg-white rounded-lg flex flex-col w-[239px] h-[290px]">
              <div className="m-4">
              </div>
            </div>
            <div className="p-2 shadow-lg bg-white rounded-lg flex flex-col w-[239px] h-[290px]">
              <div className="m-4">
              </div>
            </div>
            <div className="p-2 shadow-lg bg-white rounded-lg flex flex-col w-[239px] h-[290px]">
              <div className="m-4">
              </div>
            </div>
          </div>

          <div className="mt-6 btn-click-effect cursor-pointer select-none mb-4">
            <span className="bg-purple-primary px-16 rounded-full tracking-wider font-semibold py-4">
              Înscrie-te
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}