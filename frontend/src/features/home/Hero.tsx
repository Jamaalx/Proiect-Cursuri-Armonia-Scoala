export default function Hero() {
  return (
    <>
      {/* <div className="container mx-auto flex items-center justify-around mt-6">
        <div className="flex items-center gap-4 bg-green-secondary/10 p-3 rounded-lg ml-10">
          <div className="w-4 h-4 bg-green-400 rounded-full"></div>
          <div className="text-green-secondary-rgb">
            ARMONIA Academy
          </div>
        </div>
        <div></div>
        <div></div>
        <div className="">
          <img src="./images/yellow-circle.png" alt="" />
        </div>
      </div>

      <div className="text-center relative">
        <img className="absolute -top-9" src="./images/gray-cilinder.png" alt="" />
        <p className="tracking-normal text-fluid-md lg:text-fluid-2xl font-saint">Descoperă Magia</p>
      </div> */}
      <div className="flex justify-center">
        <img className="hidden md:block xl:w-[81%]" src="./images/hero.png" alt="" />
        <img className="md:hidden w-full" src="./images/hero-mobile.png" alt="" />
      </div>
      <div>
        <div className="flex justify-center relative -top-16 z-10">
          <a
            className="inline-block relative cursor-pointer select-none transition-transform duration-100 active:scale-95"
          >
            <img
              className="max-w-full h-auto w-auto scale-[0.28] lg:scale-50"
              src="./images/buton_vezi_cursuri.png"
              alt=""
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-white font-bold text-[8px] md:text-[10px] lg:text-lg text-center mr-4 md:mr-10 lg:mr-16">
                Vezi Cursuriile
              </span>
            </div>
          </a>
        </div>
        <div className="flex justify-end relative bottom-40">
          <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 relative z-10">
            <img className="scale-50 md:scale-90 lg:scale-100" src="./images/chat_bot.png" alt="" />
          </a>
        </div>
        <div className="flex justify-center relative bottom-36 md:bottom-0 scale-50 md:scale-100">
          <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 relative">
            <img className="scale-90 lg:scale-100" src="./images/scroll.png" alt="" />
          </a>
        </div>
      </div>
      <div className="relative scale-50 md:scale-100 container mx-auto bottom-20 md:bottom-0 md:mt-24 flex justify-center lg:justify-start">
        <a className="bg-green-secondary px-16 rounded-full btn btn-ghost hover:bg-green-secondary-rgb text-white text-lg">Sediile Noastre</a>
      </div>
      <div className="mt-20">
        dadaw
      </div>
    </>
  );
}