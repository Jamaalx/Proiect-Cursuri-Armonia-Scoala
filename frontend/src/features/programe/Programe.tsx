import { useState } from "react";
import { cn } from "../../lib/cn";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGetCoursesStore } from "../../store/armoniaDataStore";

export default function Programe() {
  const cardData = useGetCoursesStore((state) => state.courses);
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
    <div className="md:container md:mx-auto px-6 flex flex-col gap-8 mt-[50px] min-h-screen justify-between">
      {/* Banner */}
      <div className="mb-[70px]">
        <img src="/images/banner.png" alt="" className="w-full" />
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
            <img src="/images/search.png" alt="Search" className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <Link key={card.id} to={`/curs/${card.id}`} className="block">
              <div className="bg-white text-black hover:scale-105 rounded-xl p-6 shadow-xl hover:shadow-xl transition">
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
                          <img src="/images/red-line.png" alt="" />
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
                        <span className="text-sm font-medium">Vezi mai Mult</span>
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
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-300">Nicio potrivire</p>
        )}
      </div>

      <div className="md:container flex w-full md:mx-auto rounded-3xl bg-yellow-secondary text-black mt-auto">
        <div className="py-5 ~px-2/10 flex justify-center md:block">
          <img src="/images/intrebare-black.png" alt="" className="w-80 h-20 sm:hidden" />
          <img src="/images/intrebare-black.png" alt="" className="hidden sm:block" />
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
            <Link to="/contact">
              <span className="bg-white rounded-full tracking-wider font-semibold px-4 py-2">
                Programează o discuție
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}