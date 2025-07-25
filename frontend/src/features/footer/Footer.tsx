import { useState, useEffect } from 'react';

export default function Footer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simple loading state to prevent flash
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`relative mt-52 bg-cover min-h-[550px] text-white transition-opacity duration-300 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundImage: "url('/images/footer-feet.png')" }}
    >
      {/* Elemente decorative */}
      <div className="absolute -top-44 -left-36 md:-left-2 z-10">
        <img className="scale-75 md:scale-100" src="/images/footer-gear.png" alt="" />
      </div>
      <div className="absolute -right-20 md:right-0 -top-64 lg:-top-48 z-10">
        <img className="hidden md:block scale-75 md:scale-100" src="/images/footer-air.png" alt="" />
      </div>
      <div className="absolute right-0 -top-24 md:-top-40 z-10">
        <img className="md:hidden scale-75" src="/images/footer-air-scaleddown.png" alt="" />
      </div>

      {/* Construcția principală a footerului */}
      <div className="relative z-10 lg:container md:mx-auto px-6 pt-24">
        <div className="flex md:flex-wrap flex-col md:flex-row md:justify-between xl:gap-20 w-full">

          {/* ⬅️ Coloana 1: Armonia */}
          <div className="flex flex-col items-center md:items-left gap-4 md:w-1/3 text-[15px]">
            <div>
              <a className="btn btn-ghost hover:bg-transparent p-0 mb-4">
                <img src="/images/armonia.png" alt="Armonia Logo" className="h-10" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <img className="w-4 aspect-square object-contain" src="/images/white-pin.png" alt="" />
                  <p>Sedii Armonia Academy:</p>
                </div>
                <div className="flex flex-col gap-1 max-w-80 text-sm">
                  <p>• <strong>Obor-Fainari:</strong> Str. Episcopul Radu nr. 63</p>
                  <p>• <strong>Gara de Nord:</strong> Str. Vespasian nr. 34, Sector 1</p>
                  <p>• <strong>Mihai Bravu:</strong> Str. Stirului nr. 14-16, Sector 3</p>
                  <p>• <strong>Piața Progresul:</strong> Str. Tufișului 14, Sector 4</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/images/phone.png" alt="" />
                <p>Tel: +40 723 092 740</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="/images/time.png" alt="" />
                <div className="flex flex-col text-sm">
                  <p>Luni-Vineri: 10:00-21:00</p>
                  <p>Sâmbătă: 09:00-21:00, Duminică: 09:00-16:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/images/mail.png" alt="" />
                <p>Email: contact@armoniaacademy.ro</p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a 
                  href="https://consumer-redress.ec.europa.eu/index_en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src="/images/footer-logo-1.png" alt="Soluționarea Online a Litigiilor" />
                </a>
                <a 
                  href="https://reclamatiisal.anpc.ro/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src="/images/footer-logo-2.png" alt="ANPC - Protecția Consumatorilor" />
                </a>
              </div>
            </div>
          </div>

          {/* 💌 Coloana 2: Newsletter */}
          <div className="flex flex-col items-center sm:mr-10 md:justify-center mb-10 md:mb-0 gap-4 mt-10 md:mt-0 md:w-1/3 text-[15px]">
            <p className="text-[#0A033C] font-raleway text-sm text-center">
              Stai la zi cu toate informațiile despre cursurile noastre!
            </p>
            <form className="flex bg-white max-w-md rounded-2xl overflow-hidden shadow-md text-sm">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 pl-4 lg:px-6 py-2 text-black focus:outline-none placeholder:text-gray-300 placeholder:text-base"
              />
              <button
                type="submit"
                className="bg-teal-600 m-0.5 rounded-2xl hover:bg-teal-500 text-white px-6 md:px-10 py-3 transition"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}