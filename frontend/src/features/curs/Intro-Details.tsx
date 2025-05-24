
import { useState } from "react";
export default function IntroDetails() {
  const [videoSrc, setVideoSrc] = useState("./videos/video-test.mp4");
  const [selected, setSelected] = useState("incepator");
  return (
    <div className="relative">
      <div className="md:container md:mx-auto my-10 items-center shadow-xl flex flex-col lg:flex-row rounded-xl lg:gap-20  py-8 px-6">
        <div className="flex flex-col scale-75 md:scale-100">
          <div className='flex w-fit mb-5 gap-3 bg-green-secondary-rgb/10 items-center
            py-2 px-2 rounded-lg'>
            <div className="h-3 w-3 rounded-full bg-green-400" />
            <p className="text-sm font-medium text-green-secondary-rgb">ARMONIA Academy</p>
          </div>

          <div className={`text-6xl font-saint text-green-secondary mb-4`}>
            <p>Vioară</p>
          </div>

          <div className="flex gap-2">
            <div className="relative text-[#E6E6E6]">
              <div className="absolute">
                <img src="./images/big-red-line.png" alt="" />
              </div>
              <p className="text-[42px] font-bold font-epilogue">1420 €</p>
            </div>
            <div>
              <p className="text-[42px] font-bold font-epilogue text-green-secondary">1200 €</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className=" flex gap-4 items-center">
              <img src="./images/purple-calendar.png" alt="" className="w-4 h-5" />
              <p className="text-[#4D5756]">Martie 28, 2025</p>
            </div>
            <div className=" flex gap-4 items-center">
              <img src="./images/purple-file.png" alt="" className="w-4 h-5" />
              <p className="text-[#4D5756]">10 sesiuni</p>
            </div>
          </div>

          <div className="flex gap-4 text-white mt-10 font-sora">
            <button
              onClick={() => {
                setVideoSrc("./videos/video-test.mp4");
                setSelected("incepator");
              }}
              className={`btn-click-effect px-11 py-4 rounded-full ${selected === "incepator"
                ? "bg-purple-primary text-white"
                : "border border-purple-primary text-purple-primary"
                }`}
            >
              Începător
            </button>
            <button
              onClick={() => {
                setVideoSrc("./videos/video-test2.mp4");
                setSelected("avansat");
              }}
              className={`btn-click-effect px-11 py-4 font-bold rounded-full ${selected === "avansat"
                ? "bg-purple-primary text-white"
                : "border border-purple-primary text-purple-primary"
                }`}
            >
              Avansat
            </button>
          </div>
        </div>
        <div className="w-[95%] md:2-[65%] mx-auto md:mt-8 lg:mt-0">
          <video key={videoSrc} controls className="w-full rounded-lg shadow-lg">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="absolute top-[500px] opacity-30 xl:opacity-100">
        <img src="./images/right-half-circle.png" alt="" />
      </div>

      <div className="md:container md:mx-auto flex flex-col xl:flex-row gap-8 font-sora mx-2 mb-8">
        <div className="flex flex-col mx-4">
          <div className="flex gap-5 mb-[60px] flex-wrap">
            <p className="bg-purple-primary text-white px-4 py-4 rounded-full" >Descriere</p>
            <p className="bg-gray-100 font-bold text-blue-text-primary px-4 py-4 rounded-full">Curicula</p>
            <p className="bg-gray-100 font-bold text-blue-text-primary px-4 py-4 rounded-full">Testimoniale</p>
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <p className="text-blue-text-primary text-xl font-saint">Descrierea cursului</p>
            <p className="text-[#333931] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident,              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <p className="text-blue-text-primary text-xl font-saint">Descrierea cursului</p>
            <p className="text-[#333931] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim..</p>
            <p className="text-[#333931] leading-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim..</p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row xl:flex-col gap-8">

          <div className="p-9 rounded-3xl shadow-2xl w-[350px]">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <img src="./images/vertical-divider.png" alt="" />
                <p className="font-hind text-[#191B1E] text-xl font-semibold">Cerințe</p>
              </div>
              <div className="pl-3 flex flex-col">
                <p>Basic Programming</p>
                <p>Daily Update</p>
                <p>Routine Study</p>
                <p>Regular Join Class</p>
              </div>
              <div className="flex">
                <img src="./images/vertical-divider.png" alt="" />
                <p className="font-hind text-[#191B1E] text-xl font-semibold">Cui i se adresează</p>
              </div>
              <div className="pl-3 flex flex-col">
                <p>Technical People</p>
                <p>Engineering Students</p>
                <p>Programming Lover</p>
              </div>
              <div className="btn-click-effect cursor-pointer self-center
                bg-purple-primary text-white py-4 px-20 rounded-full text-lg">
                Înscrie-te
              </div>
            </div>
          </div>

          <div className="p-9 rounded-3xl shadow-2xl w-[350px]">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col">
                <img src="./images/teacher.png" alt="" className="w-[118px] h-auto" />
              </div>
              <div>
                <p className="font-hind text-[#191B1E] text-xl font-semibold">Jhon Sina</p>
                <p className="text-[#5C727D]">Instructor</p>
              </div>
              <div>
                <p className="text-center text-[#5C727D] text-sm">La cursul acreditat de Vioara vei trece
                  alături de un experienced trainer
                  dedicat prin toate conceptele importante
                  de care ai.</p>
              </div>
              <div className="flex gap-2">
                <img src="./images/facebook.png" alt="" />
                <img src="./images/youtube.png" alt="" />
                <img src="./images/instagram.png" alt="" />
                <img src="./images/twitter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:container flex flex-col md:flex-row relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black mb-20">
        <div className="py-5 px-10 flex justify-center md:block">
          <img src="./images/intrebare-black.png" alt="" />
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
    </div>
  );
}