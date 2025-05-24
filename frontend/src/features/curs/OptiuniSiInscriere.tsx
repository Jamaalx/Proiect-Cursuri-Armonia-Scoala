export default function OptiuniSiInscriere() {
  return (
    <div className="">
      <div className="md:container md:mx-auto text-3xl font-bold">
        <p className="text-center font-saint text-[42px]">Optiuni de plata</p>
        <div className="bg-yellow-secondary p-8 rounded-2xl flex flex-col gap-4 mx-2">
          <div className="flex justify-between text-center flex-col md:flex-row items-center bg-white rounded-full px-6 py-2 mb-4">
            <p>Pret intreg</p>
            <p>1234 Lei</p>
          </div>
          <p className="pl-4 text-[#333931] font-saint">Optiuni de plata in rate</p>
          <div className="flex justify-between text-center flex-col md:flex-row items-center bg-white rounded-full px-6 py-2">
            <p>2 rate fara dobanda</p>
            <p>1234 Lei/luna</p>
          </div>
          <div className="flex justify-between text-center flex-col md:flex-row items-center bg-white rounded-full px-6 py-2 mb-4">
            <p>12 rate fara dobanda</p>
            <p>12 Lei/luna</p>
          </div>
        </div>
      </div>
      {/* Here we do space between Optiuni de plata and Formulaire */}
      <div className="mb-10"></div>
      <div className="bg-purple-primary w-full absolute h-[1000px] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Vreau să încep!</h2>

          {/* Form begin */}
          <form className="flex flex-col gap-6">
            {/* Nume + Prenume */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Nume"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none"
              />
              <input
                type="text"
                placeholder="Prenume"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>

            {/* Telefon + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="tel"
                placeholder="Telefon"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>

            {/* Vârstă */}
            <input
              type="number"
              placeholder="Vârstă"
              className="w-full px-5 py-3 rounded-full text-black focus:outline-none"
            />

            {/* Checkbox + text */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <p>
                <span>*</span>Prin completarea acestui formular, ești de acord cu{" "}
                <a href="#" className="underline text-white font-semibold">
                  Termeni și Condiții
                </a>{" "}
                Armonia Academy
              </p>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                className="bg-white text-purple-primary font-bold px-10 py-3 rounded-full text-lg transition hover:scale-105"
              >
                Mă înscriu
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[600px] lg:h-[500px]"></div>
    </div>
  );
}