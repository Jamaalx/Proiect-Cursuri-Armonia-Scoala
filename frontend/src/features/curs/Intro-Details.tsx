
import { useState } from "react";
import { getTodayFormatted } from "../../lib/dateConvert";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function IntroDetails({ card }: { card: any; }) {
  const [videoSrc, setVideoSrc] = useState("/videos/video-test.mp4");
  const [selected, setSelected] = useState("incepator");

  return (
    <div className="relative">
      <div className="md:container md:mx-auto my-10 items-center flex flex-col 
        lg:flex-row rounded-xl lg:gap-20  py-8 px-6">
        <div className="flex">
          <div className="flex flex-col">
            <div className='hidden lg:flex w-fit mb-5 gap-3 bg-green-secondary-rgb/10 items-center
            py-2 px-2 rounded-lg'>
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <p className="text-sm font-medium text-green-secondary-rgb">ARMONIA Academy</p>
            </div>

            <div className={`~text-5xl/6xl font-saint text-green-secondary mb-4`}>
              <p>{card.name}</p>
            </div>

            <div className="flex gap-2">
              <div className="relative text-[#E6E6E6]">
                <div className="absolute left-4 lg:left-0">
                  <img className="hidden lg:block" src="/images/big-red-line.png" alt="" />
                  <img className="lg:hidden" src="/images/small-red-line.png" alt="" />
                </div>
                <p className="~text-3xl/5xl font-bold font-epilogue text-nowrap">{card.pretDiscounted}</p>
              </div>
              <div>
                <p className="~text-3xl/5xl font-bold font-epilogue text-green-secondary text-nowrap">{card.pretFull}</p>
              </div>
            </div>

            <div className="mb-4 mt-2">
              <div className="flex gap-8 mt-4 lg:mt-0">
                <div className=" flex ~gap-1/4 items-center">
                  <img src="/images/green-calendar.png" alt="" className="w-4 h-5" />
                  <p className="text-[#4D5756] ~text-xs/md text-nowrap">{getTodayFormatted()}</p>
                </div>
                <div className=" flex ~gap-1/4 items-center">
                  <img src="/images/green-file.png" alt="" className="w-4 h-5" />
                  <p className="text-[#4D5756] ~text-xs/md text-nowrap">{card.sesiuni}</p>
                </div>
              </div>

            </div>
            <div className="hidden lg:flex gap-4 text-white mt-10 font-sora">
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test.mp4");
                  setSelected("incepator");
                }}
                className={`btn-click-effect px-11 py-4 rounded-full ${selected === "incepator"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Începător
              </button>
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test2.mp4");
                  setSelected("avansat");
                }}
                className={`btn-click-effect px-11 py-4 font-bold rounded-full ${selected === "avansat"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Avansat
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex flex-col gap-4 text-white font-sora">
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test.mp4");
                  setSelected("incepator");
                }}
                className={`btn-click-effect px-6 text-xs py-3 rounded-full ${selected === "incepator"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Începător
              </button>
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test2.mp4");
                  setSelected("avansat");
                }}
                className={`btn-click-effect px-6 text-xs py-3 font-bold rounded-full ${selected === "avansat"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Avansat
              </button>
            </div>
          </div>
        </div>
        <div className="w-[95%] md:2-[65%] mx-auto md:mt-8 lg:mt-0">
          <video key={videoSrc} controls className="w-full rounded-lg shadow-lg">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="absolute hidden 2xl:block top-[500px] opacity-30 xl:opacity-100">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex flex-col xl:flex-row font-sora mx-2 mb-8">
        <div className="flex flex-col mx-4">
          <div className="flex ~gap-3/5 ~mb-4/16 flex-wrap">
            <p className="~text-xs/lg bg-purple-primary text-white px-4 py-4 rounded-full" >Descriere</p>
            <p className="~text-xs/lg bg-gray-100 font-bold text-blue-text-primary px-4 py-4 rounded-full">Curicula</p>
          </div>
          <div className="flex flex-col gap-6 ~mb-2/6">
            <p className="text-blue-text-primary text-xl font-saint">Descrierea cursului</p>
            <p className="text-[#333931] ~text-xs/lg ~leading-2/9">{card.descriere}</p>
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <p className="text-blue-text-primary text-xl font-saint">Ce o sa inveti?</p>
            <p className="text-[#333931] ~text-xs/lg ~leading-2/9">{card.ceOsaInveti}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col items-center justify-center gap-8">
          <div className="~px-2/9 ~py-4/9 flex lg:block justify-center rounded-3xl w-[350px] shadow-2xl">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <img src="/images/vertical-divider.png" alt="" />
                <p className="font-hind text-[#191B1E] ~text-lg/xl font-semibold">Cerințe</p>
              </div>
              <div className="pl-3 flex flex-col ~text-sm/lg">
                <p>{card.ceriinte.nivel}</p>
                <p>{card.ceriinte.varstaMinima}</p>
                <p>{card.ceriinte.echipamentNecesar}</p>
              </div>
              <div className="flex">
                <img src="/images/vertical-divider.png" alt="" />
                <p className="font-hind text-[#191B1E] ~text-lg/xl font-semibold">Cui i se adresează</p>
              </div>
              <div className="pl-3 flex flex-col ~text-sm/lg">
                <p>{card.cuiISeadreseaza.tipuri[0]}</p>
                <p>{card.cuiISeadreseaza.tipuri[1]}</p>
                <p>{card.cuiISeadreseaza.varsta}</p>
                <p>{card.cuiISeadreseaza.scop}</p>
              </div>
              <div className="btn-click-effect cursor-pointer self-center
                bg-purple-primary text-white ~py-2/4 ~px-10/20 text-nowrap rounded-full ~text-xs/lg">
                Înscrie-te
              </div>
            </div>
          </div>
          <div className="p-9 rounded-3xl shadow-2xl w-[350px]">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col">
                <img src="/images/teacher.png" alt="" className="w-[118px] h-auto" />
              </div>
              <div className="text-center">
                <p className="font-hind text-[#191B1E] text-xl font-semibold">{card.profesor.nume}</p>
                <p className="text-[#5C727D]">Experienta {card.profesor.experienta}</p>
              </div>
              <div>
                <p className="text-center text-[#5C727D] text-sm">{card.profesor.descriere}</p>
              </div>
              <div className="flex gap-2">
                <img src="/images/facebook.png" alt="" />
                <img src="/images/youtube.png" alt="" />
                <img src="/images/instagram.png" alt="" />
                <img src="/images/twitter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:container flex relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black">
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
            <span className="bg-white rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}