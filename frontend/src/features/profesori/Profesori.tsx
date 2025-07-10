import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetTeachersStore } from "../../store/armoniaDataStore";

export default function Profesori() {
  const teachers = useGetTeachersStore((state) => state.teachers);
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