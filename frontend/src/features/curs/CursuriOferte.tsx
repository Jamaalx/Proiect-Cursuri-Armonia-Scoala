import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { cn } from '../../lib/cn';
import { Link } from 'react-router';

const cardData = [
  {
    id: 1,
    name: "Teorie",
    category: "sound",
    instrumentImage: "./images/teorie.png",
    pin: "./images/yellow-pin.png",
    culoareText: "text-sky-primary",
    humanIcon: "./images/sky-human.png",
    buttonColor1: "bg-sky-primary",
    buttonColor2: "bg-sky-secondary",
  },
  {
    id: 2,
    name: "Suflat",
    category: "sound",
    instrumentImage: "./images/yellow-flaut.png",
    pin: "./images/yellow-pin.png",
    culoareText: "text-yellow-primary",
    humanIcon: "./images/yellow-human.png",
    buttonColor1: "bg-yellow-primary",
    buttonColor2: "bg-yellow-secondary",
  },
  {
    id: 3,
    name: "Pian",
    category: "sound",
    instrumentImage: "./images/pian.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
  },
  {
    id: 4,
    name: "Chitară",
    category: "sound",
    instrumentImage: "./images/green-guitar.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
  },
  {
    id: 5,
    name: "Ukulele",
    category: "sound",
    instrumentImage: "./images/green-guitar.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
  },
  {
    id: 6,
    name: "Mandolina",
    category: "sound",
    instrumentImage: "./images/green-guitar.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
  },
  {
    id: 7,
    name: "Bass", category: "sound",
    instrumentImage: "./images/green-guitar.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
  },
  {
    id: 8,
    name: "Canto",
    category: "sound",
    instrumentImage: "./images/green-guitar.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
  },
];

export default function CursuriOferte() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div>
      <div className="md:container flex mt-10 flex-col lg:flex-row relative md:mx-auto rounded-3xl mx-6 bg-green-secondary text-black mb-28">
        <div className="py-5 px-10 flex justify-center lg:block">
          <p className="text-white ~text-3xl/5xl font-black">Capitole Curs</p>
        </div>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-2 md:py-5 flex-1">
          <div className="flex flex-col ~text-sm/2xl lg:flex-row text-white ~gap-2/10 w-full">
            <div className="flex flex-col">
              <p>✓ Introducere în vioară</p>
              <p>✓ Poziția corectă</p>
            </div>
            <div className="flex flex-col">
              <p>✓ Tehnici de arcuș</p>
              <p>✓ Note și ritm</p>
            </div>
            <div className="flex flex-col">
              <p>✓ Primele melodii</p>
              <p>✓ Audiții și exerciții</p>
            </div>
          </div>
          <div className="mt-6 btn-click-effect cursor-pointer ~text-sm/2xl select-none mb-6 md:mb-3">
            <span className="bg-white rounded-full text-green-secondary tracking-wider font-semibold px-6 py-3">
              Descarcă programa
            </span>
          </div>
        </div>
      </div>

      {/* swiper is here */}
      <div className="relative md:container md:mx-auto mb-10">
        <p>Cursuri Populare</p>
        <div className='className="relative max-w-6xl mx-auto px-4"'>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            centeredSlides
            initialSlide={1}
            spaceBetween={30}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{
              el: '.custom-pagination-cursuri-oferte',
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="swiper-bullet ${className}"></span>`,
            }}
          >
            {/* Cards here in the swiper */}
            {cardData.map((card, index) => (
              <SwiperSlide
                key={index}
                className="w-full md:w-auto !max-w-[540px] flex justify-center py-6"
              >
                <Link to="/program">
                  <div
                    key={card.id}

                    className="bg-white text-black hover:scale-105 rounded-xl p-6 shadow-lg hover:shadow-xl transition"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div>
                        <img src={card.instrumentImage} alt="" className='w-40 md:w-60 h-auto' />
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

                        <div className={`text-[52px] font-saint ${card.culoareText}`}>
                          <p>{card.name}</p>
                        </div>

                        <div className="text-[#333931] text-sm max-w-[540px]">
                          <p>Lorem ipsum dolor sit amet, consectetur elit, sed doeiusmod tempor</p>
                        </div>

                        <div className="flex gap-2 mt-6">
                          <div className="relative text-[#E6E6E6]">
                            <div className="absolute">
                              <img src="./images/red-line.png" alt="" />
                            </div>
                            <p className="text-xl font-bold font-epilogue">1420 €</p>
                          </div>
                          <div>
                            <p className="text-xl font-bold font-epilogue text-green-secondary">1200 €</p>
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVIGATION BUTTONS */}
          <div className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer">
            <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
              <span className="text-2xl text-teal-600 group-hover:text-white">
                <FiChevronLeft />
              </span>
            </div>
          </div>

          <div className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer">
            <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
              <span className="text-2xl text-teal-600 group-hover:text-white">
                <FiChevronRight />
              </span>
            </div>
          </div>

          {/* PAGINATION */}
          <div className="custom-pagination-cursuri-oferte mt-6 flex justify-center gap-2" />

          {/* Bullet customization */}
          <style>{`
        .swiper-bullet {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background-color: #cbd5e0;
          margin: 0 4px;
          display: inline-block;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .swiper-bullet.swiper-pagination-bullet-active {
          background-color: #14b8a6;
          width: 12px;
          height: 12px;
          opacity: 1;
        }
      `}</style>
        </div>
      </div>
      {/* purple ai nevoie de ajutor */}
      <div className="md:container flex flex-col md:flex-row relative md:mx-auto rounded-3xl mx-6 bg-purple-primary text-white mb-20">
        <div className="py-5 px-10 flex justify-center md:block">
          <img src="./images/intrebare.png" alt="" />
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
            <span className="bg-white text-black rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}