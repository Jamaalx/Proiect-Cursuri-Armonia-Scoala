export default function Help() {
  return (
    <div className="mt-16 relative">
      <div className="absolute -top-40 left-0">
        <img className="w-1/2 md:w-full" src="/images/cercuri-purple.png" alt="" />
      </div>
      <div className="md:container flex relative md:mx-auto rounded-3xl mx-6 bg-purple-primary text-white">
        <div className="py-5 ~px-2/10 flex justify-center md:block">
          <img src="/images/intrebare.png" alt="" className="w-80 h-20 sm:hidden" />
          <img src="/images/intrebare.png" alt="" className="hidden sm:block" />
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
            <span className="bg-white rounded-full tracking-wider font-semibold text-purple-primary px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
      <div>
        <img className="mt-16 hidden lg:block w-full relative" src="/images/yellow-banner.png" alt="" />
        <img className="mt-16 lg:hidden w-full relative" src="/images/yellow-banner-small.png" alt="" />
      </div>
    </div>
  );
}