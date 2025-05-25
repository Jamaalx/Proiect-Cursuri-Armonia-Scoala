export default function Contact() {
  return (
    <div>
      {/* floating elements are here */}
      <div className="absolute top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-40 hidden lg:block">
        <img src="./images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[500px] ">
        <img src="./images/footer-air-scaleddown.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 2xl:top-[1850px] ">
        <img src="./images/green-right-gear.png" alt="" />
      </div>


      <div className="md:container md:mx-auto justify-center mt-16 p-4 md:p-16 flex flex-col lg:flex-row gap-10 shadow-xl rounded-xl">
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-text-primary 
          font-bold font-saint">Get in Touch
          </h2>
          <p className="text-[#333931]">
            Suspendisse ultrice gravida dictum fusce placerat
            ultricies integer
          </p>
          <div className="flex flex-col gap-5">

            <div className="flex gap-4">
              <div className="flex-shrink-0 min-w-[50px]">
                <img src="./images/green-pin.png" alt="" className="py-3 px-4 bg-gray-100 rounded-full" />
              </div>
              <div className="flex flex-col text-[#333931]">
                <p className="text-[#4D5756] font-bold tracking-wide">Sediul Obor Moșilor</p>
                <p>+ 40738318373</p>
                <p>contact@scoalaarmonia.ro</p>
                <p>Strada Profesor Ion Maiorescu 37, Sector 2, Bucuresti</p>
                <p>Zona Obor - Mosilor, vis-a-vis de Scoala 50 Maica Domnului</p>
              </div>
            </div>

            <div className="flex gap-4 text-[#333931]">
              <div className="flex-shrink-0 min-w-[50px]">
                <img src="./images/green-pin.png" alt="" className="py-3 px-4 bg-gray-100 rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#4D5756] font-bold tracking-wide">Sediul Gara de Nord</p>
                <p>+ 40723092740</p>
                <p>garadenord@scoalaarmonia.ro</p>
                <p>Strada Vespasian nr.34, Sector 1, Bucuresti</p>
                <p>Zona Gara de Nord vis-a-vis de Gradinita Zum-Zum</p>
              </div>
            </div>

            <div className="flex gap-4 text-[#333931]">
              <div className="flex-shrink-0 min-w-[50px]">
                <img src="./images/green-pin.png" alt="" className="py-3 px-4 bg-gray-100 rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#4D5756] font-bold tracking-wide">Sediul Mihai Bravu</p>
                <p>+ 40723092740</p>
                <p>mihaibravu@scoalaarmonia.ro</p>
                <p>Strada Stirului, nr 14-16, Sector 3, Bucuresti</p>
                <p>Zona Mihai Bravu, vis-a-vis de Magazinul Mathaus</p>
              </div>
            </div>

            <div className="flex gap-4 text-[#333931]">
              <div className="flex-shrink-0 min-w-[50px]">
                <img src="./images/green-pin.png" alt="" className="py-3 px-4 bg-gray-100 rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#4D5756] font-bold tracking-wide">Sediul Piața Progresul</p>
                <p>+ 40764059927</p>
                <p>piataprogresul@scoalaarmonia.ro</p>
                <p>Strada Tufisului nr. 14, Sector 4, Bucuresti</p>
                <p>Zona Piata Progresul, langa Scoala Gimnaziala nr. 188</p>
              </div>
            </div>

            <div className="flex gap-4 text-[#333931]">
              <div className="flex-shrink-0 min-w-[50px]">
                <img src="./images/green-pin.png" alt="" className="py-3 px-4 bg-gray-100 rounded-full" />
              </div>
              <div className="flex flex-col">
                <p className="text-[#4D5756] font-bold tracking-wide">Sediul Premium Atomic Academy</p>
                <p>+ 40736924645</p>
                <p>Cladirea Cocor, Bdul Ion C. Bratianu nr. 29-33</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {/* Form begin */}
          <form className="flex flex-col gap-6">
            <div className="flex">
              <input
                type="text"
                placeholder="Nume"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Email"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Telefon"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="Subiect"
                className="flex-1 shadow-lg px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>

            <div className="flex h-60">
              <textarea
                className="flex-1 shadow-lg px-5 py-3 rounded-2xl text-black focus:outline-none"
                name="" id="">

              </textarea>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="bg-purple-primary text-white font-bold tracking-wide px-10 py-4 rounded-full text-lg transition hover:scale-105"
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