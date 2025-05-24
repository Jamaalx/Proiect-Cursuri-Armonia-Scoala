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

export default function Profesori() {
  return (
    <div className="relative">
      <div className="absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-20 2xl:opacity-100">
        <img src="./images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute right-0 top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 opacity-20 lg:opacity-100">
        <img src="./images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex flex-col gap-10 mt-[50px]">
        {/* Banner */}
        <div className="mb-[70px]">
          <img src="./images/banner.png" alt="" className="w-full" />
        </div>
      </div>
      <div className="md:container md:mx-auto mt-10">
        <div className="flex justify-center">
          <div>
            <p className="tracking-wider font-saint text-green-secondary text-[42px]">Profesorii Armonia Academy</p>
          </div>
        </div>
        {/* Profesori carduri */}
        <Link to={"/profesor"}>
          <div className="px-4 py-8 md:container md:mx-auto gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((teacher, index) => (
              <div key={index} className="p-2 shadow-lg rounded-lg flex flex-col">


                <img src={teacher.imagineTeacher} alt="" />

                <div className="m-4">
                  <p className="font-bold text-lg text-blue-text-primary">{teacher.nume}</p>
                  <p className="text-sm text-green-secondary">Teacher</p>
                </div>
              </div>
            ))}
          </div>
        </Link>
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
    </div>
  );
}