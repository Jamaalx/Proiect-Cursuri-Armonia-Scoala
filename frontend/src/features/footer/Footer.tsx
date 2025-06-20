export default function Footer() {
  return (
    <div className="relative mt-52 bg-cover min-h-[550px] text-white" style={{ backgroundImage: "url('./images/footer-feet.png')" }}>

      {/* Elemente decorative */}
      <div className="absolute -top-44 -left-36 md:-left-2 z-10">
        <img className="scale-75 md:scale-100" src="./images/footer-gear.png" alt="" />
      </div>
      <div className="absolute -right-20 md:right-0 -top-64 lg:-top-48 z-10">
        <img className="hidden md:block scale-75 md:scale-100" src="./images/footer-air.png" alt="" />
      </div>
      <div className="absolute right-0 -top-24 md:-top-40 z-10">
        <img className="md:hidden scale-75" src="./images/footer-air-scaleddown.png" alt="" />
      </div>

      {/* Construcția principală a footerului */}
      <div className="relative z-10 lg:container md:mx-auto px-6 pt-24">
        <div className="flex md:flex-wrap flex-col md:flex-row md:justify-between xl:gap-20 w-full">

          {/* ⬅️ Coloana 1: Armonia */}
          <div className="flex flex-col items-center md:items-left gap-4 md:w-1/3 text-[15px]">
            <div>
              <a className="btn btn-ghost hover:bg-transparent p-0 mb-4">
                <img src="./images/armonia.png" alt="Armonia Logo" className="h-10" />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <img className="w-4 aspect-square object-contain" src="./images/white-pin.png" alt="" />
                  <p>Address:</p>
                </div>
                <div className="flex flex-col gap-2 max-w-80">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="./images/phone.png" alt="" />
                <p>Tel :+9229341037</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="./images/time.png" alt="" />
                <p>Response hours: 8 to 20</p>
              </div>

              <div className="flex items-center gap-4">
                <img src="./images/mail.png" alt="" />
                <p>Email: info@onlearn.com</p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <img src="./images/footer-logo-1.png" alt="" />
                <img src="./images/footer-logo-2.png" alt="" />
              </div>
            </div>
          </div>

          {/* ⬛ Coloana 2: Link-uri */}
          <div className="flex flex-col items-center md:items-left md:items-left mt-10 w-full md:w-20 font-raleway text-[15px]">
            <ul className="space-y-2 text-white/80 text-sm">
              <p className="mb-3 text-[#0A033C] font-semibold">Links</p>
              <li><a href="#" className="text-[#0B7077] hover:underline">About us</a></li>
              <li><a href="#" className="text-[#0B7077] hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* 💌 Coloana 3: Newsletter */}
          <div className="flex flex-col items-center sm:mr-10 md:justify-center mb-10 md:mb-0 gap-4 mt-10 md:mt-0 md:w-1/3 text-[15px]">
            <p className="text-[#0A033C] font-raleway text-sm text-center">
              Stay up to date with the latest courses
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