import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { cn } from '../../lib/cn';
import { Link } from 'react-router-dom';

const courses = [
  {
    instrumentImage: "/images/vioara.png",
    calendar: "/images/yellow-calendar.png",
    date: "Martie 28, 2025",
    pin: "/images/green-pin.png",
    localitate: "Bucuresti",
    type: "Vioara",
    colorText: "text-green-secondary",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    icon: "/images/green-human.png"
  },
  {
    instrumentImage: "/images/yellow-guitar.png",
    calendar: "/images/yellow-calendar.png",
    date: "Martie 28, 2025",
    pin: "/images/yellow-pin.png",
    localitate: "Bucuresti",
    type: "Chitară",
    colorText: "text-[#FFD46C]",
    buttonColor1: "bg-yellow-200",
    buttonColor2: "bg-yellow-300",
    icon: "/images/yellow-human.png"
  },
  {
    instrumentImage: "/images/flaut.png",
    calendar: "/images/yellow-calendar.png",
    date: "Martie 28, 2025",
    pin: "/images/green-pin.png",
    localitate: "Bucuresti",
    type: "Flaut",
    colorText: "text-green-secondary",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    icon: "/images/green-human.png"
  },
  {
    instrumentImage: "/images/pian.png",
    calendar: "/images/yellow-calendar.png",
    date: "Martie 28, 2025",
    pin: "/images/green-pin.png",
    localitate: "Bucuresti",
    type: "Pian",
    colorText: "text-green-secondary",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    icon: "/images/green-human.png"
  },

];

const Pachete = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="md:container mx-auto px-6 py-10 bg-green-50 rounded-3xl relative">
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col gap-4 items-center text-center'>
          <div className='flex justify-center gap-4'>
            <p className='bg-green-secondary text-white tracking-wider text-sm font-semibold ~px-2/4 ~py-1/2 rounded-full'>
              Cursuri Populare
            </p>
            <Link to={"/cursuri"}>
              <p className='text-green-secondary underline tracking-wider text-sm font-semibold ~px-2/4 ~py-1/2 rounded-full'>
                Vezi toate cursurile
              </p>
            </Link>
          </div>
          <p className='font-saint ~text-md/3xl'>Alege cel mai bun pachet pentru învățare</p>
        </div>
      </div>

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
          el: '.custom-pagination-pach',
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="swiper-bullet ${className}"></span>`,
        }}
      >
        {/* Cards here in the swiper */}
        {courses.map((course, index) => (
          <SwiperSlide
            key={index}
            className="!w-[90%] md:!w-[450px] flex justify-center py-10"
          >
            <div
              onClick={() => swiperRef.current?.slideTo(index)}
              className={cn(
                'cursor-pointer h-full w-full transition-all duration-300 ease-in-out',
                activeIndex === index ? 'scale-105' : 'scale-95',
              )}
            >
              <div
                className={cn(
                  'w-full bg-white rounded-xl transition-shadow duration-300 flex flex-col gap-4 px-6 py-8 h-[450px]',
                  activeIndex === index ? 'shadow-xl' : 'shadow-md'
                )}
              >
                <div className="flex gap-6">
                  <div>
                    <img src={course.instrumentImage} alt="" />
                  </div>
                  <div className="flex flex-col gap-3 px-2 py-1 rounded-lg">
                    <div className='flex gap-3 bg-green-secondary-rgb/10 items-center py-2 px-2 rounded-lg'>
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <p className="text-[10px] sm:text-sm font-medium text-green-secondary-rgb text-nowrap">ARMONIA Academy</p>
                    </div>
                  </div>
                </div>

                {/* DATE + LOCATION */}
                <div className="flex gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <img src={course.calendar} alt="" className="w-4 h-4" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div></div>
                    <img src={course.pin} alt="" className="w-4 aspect-square object-contain" />
                    <span>{course.localitate}</span>
                  </div>
                </div>

                {/* TITLU */}
                <div className={cn("text-[48px] font-saint leading-none", course.colorText)}>
                  {course.type}
                </div>

                {/* DESCRIERE */}
                <div className="text-sm text-gray-700 pr-4">
                  Descoperă cursul perfect pentru tine și începe-ți călătoria muzicală alături de profesori experimentați.
                </div>

                {/* CTA + ICON */}
                <div className="flex items-center justify-between mt-6">
                  <div
                    className={cn(
                      'flex items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]',
                      course.buttonColor1
                    )}
                  >
                    <Link to={"program"}>
                      <span className="text-sm font-medium">Vezi mai Mult</span>
                    </Link>
                    <div className={cn("p-4 rounded-full", course.buttonColor2)}>
                      <FiArrowRight className="text-xl" />
                    </div>
                  </div>
                  <img src={course.icon} alt="" className="w-5 h-10 shrink-0" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* NAVIGATION BUTTONS */}
      <div className="custom-prev absolute left-4 transform -translate-y-1/2 z-10 cursor-pointer">
        <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
          <span className="text-2xl text-teal-600 group-hover:text-white">
            <FiChevronLeft />
          </span>
        </div>
      </div>

      <div className="custom-next absolute right-4 transform -translate-y-1/2 z-10 cursor-pointer">
        <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
          <span className="text-2xl text-teal-600 group-hover:text-white">
            <FiChevronRight />
          </span>
        </div>
      </div>

      {/* PAGINATION */}
      <div className="custom-pagination-pach flex justify-center gap-2" />

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

      <div className="flex items-center justify-center mt-6 cursor-pointer ml-6 md:mr-6">
        <div
          className={cn(
            'flex bg-green-secondary items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]',
          )}
        >
          <Link to={"cursuri"}>
            <span className="text-sm font-medium select-none">Vezi Cursurile</span>
          </Link>
          <div className={cn("p-4 rounded-full bg-teal-400")}>
            <FiArrowRight className="text-xl" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Pachete;