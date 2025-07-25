import { useGetSediiStore } from "../../store/armoniaDataStore";

export default function Contact() {
  const sediiData = useGetSediiStore((state) => state.sediiData);
  return (
    <div className="relative overflow-hidden">
      {/* floating elements are here */}
      <div className="absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-40 hidden lg:block">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[500px]">
        <img src="/images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 bottom-10">
        <img src="/images/green-right-gear.png" alt="" />
      </div>

      <div className="md:container md:mx-auto justify-center mt-16 p-4 md:p-16 flex flex-col lg:flex-row gap-10 rounded-xl">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-center text-3xl md:text-4xl text-blue-text-primary font-sora">Ia legătura cu noi
          </h2>
          <p className="text-[#333931] text-center">
            Suntem aici să te ajutăm să îți începi călătoria muzicală! Contactează-ne pentru informații despre cursuri, programări sau orice întrebări legate de oferta noastră educațională. Echipa Armonia Academy îți răspunde prompt și cu mare plăcere.
          </p>
          {sediiData.map((sediu, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 min-w-[50px]">
                <img src="/images/green-pin.png" alt="" className="py-3 px-4 bg-gray-100 rounded-full" />
              </div>
              <div className="flex flex-col text-[#333931]">
                <h3 className="text-xl font-bold">{sediu.nume}</h3>
                <p>{sediu.adresa}</p>
                <p>{sediu.telefon}</p>
                <p>{sediu.email}</p>
                <p>{sediu.zona}</p>
                <p>{sediu.program.join(", ")}</p>
                <a href={sediu.link} target="_blank" rel="noopener noreferrer">Vezi pe hartă</a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          {/* Form begin */}
          <form className="flex flex-col gap-6">
            <div className="flex">
              <input
                type="text"
                placeholder="Nume"
                className="flex-1 bg-gray-100 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Email"
                className="flex-1 bg-gray-100 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Telefon"
                className="flex-1 bg-gray-100 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Subiect"
                className="flex-1 bg-gray-100 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>

            <div className="flex h-60">
              <textarea
                className="flex-1 bg-gray-100 shadow-lg px-5 py-3 rounded-2xl text-black focus:outline-none"
                placeholder="Mesaj"
                name="" id="">

              </textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-purple-primary text-white font-bold tracking-wide px-10 py-4 rounded-full ~text-sm/lg transition hover:scale-105"
              >
                Trimite
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}