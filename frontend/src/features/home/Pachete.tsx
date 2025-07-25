import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { cn } from '../../lib/cn';
import { Link } from 'react-router-dom';
import { useGetCoursesStore } from '../../store/armoniaDataStore';

const Pachete = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const courses = useGetCoursesStore((state) => state.courses);
  console.log(activeIndex);

  return (
    <div className="md:container mx-auto px-6 py-10 bg-green-50 rounded-3xl relative">
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div className='flex flex-col gap-4 items-center text-center'>
          <div className='flex justify-center gap-4'>
            <p className='bg-green-secondary text-white tracking-wider text-sm font-semibold ~px-2/4 ~py-1/2 rounded-full'>
              Cursuri Populare
            </p>
            <Link to={"/programe"}>
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
          el: '.custom-pagination-cursuri-oferte',
          clickable: true,
          renderBullet: (_, className) =>
            `<span class="swiper-bullet ${className}"></span>`,
        }}
      >
        {/* Cards here in the swiper */}
        {courses.map((card, index) => (
          <SwiperSlide
            key={index}
            className="w-full md:w-auto !max-w-[540px] flex justify-center"
          >
            <div
              key={card.id}
              className="bg-white text-black hover:scale-105 rounded-xl mx-6 py-6 shadow-xl hover:shadow-xl transition max-w-[540px] w-full"
            >
              <div className="flex items-start gap-4 px-4">
                <div className="flex-shrink-0">
                  <img src={card.instrumentImage} alt="" className='w-16 h-auto' />
                </div>

                <div className="flex flex-col flex-grow min-w-0">
                  <div className='flex w-fit mb-4 gap-2 bg-green-secondary-rgb/10 items-center py-1.5 px-2 rounded-lg'>
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400 flex-shrink-0" />
                    <p className="text-sm font-medium text-green-secondary-rgb whitespace-nowrap">ARMONIA Academy</p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <img src={card.pin} alt="" className="w-4 h-4 flex-shrink-0" />
                    <p className="text-sm tracking-wider text-[#4D5756]">Bucuresti</p>
                  </div>

                  <div className={`text-3xl sm:text-4xl mt-2 font-saint ${card.culoareText} leading-tight`}>
                    <p className="line-clamp-2">{card.name}</p>
                  </div>

                  <div className="text-[#333931] text-sm mt-2">
                    <p className="line-clamp-2">Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.</p>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <div className="relative text-[#E6E6E6]">
                      <div className="absolute inset-y-0 w-full flex items-center">
                        <img src="/images/red-line.png" alt="" className="w-full" />
                      </div>
                      <p className="text-lg font-bold font-epilogue">750 RON</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold font-epilogue text-green-secondary">520 RON</p>
                    </div>
                  </div>

                  <Link key={card.id} to={`/curs/${card.id}`} state={{ card }}>
                    <div className="flex items-center justify-between mt-4">
                      <div
                        className={cn(
                          'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]', card.buttonColor1
                        )}
                      >
                        <span className="text-sm font-medium whitespace-nowrap">Vezi mai Mult</span>
                        <div className={cn("p-3 rounded-full", card.buttonColor2)}>
                          <FiArrowRight className="text-lg" />
                        </div>
                      </div>
                      <div className="flex items-end ml-2">
                        <img src={card.humanIcon} alt="" className="w-4 h-8" />
                      </div>
                    </div>
                  </Link>
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

      <Link to={"/programe"}>
        <div className="flex items-center justify-center mt-6 cursor-pointer ml-6 md:mr-6">
          <div
            className={cn(
              'flex bg-green-secondary items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]',
            )}
          >
            <span className="text-sm font-medium select-none">Vezi Cursurile</span>
            <div className={cn("p-4 rounded-full bg-teal-400")}>
              <FiArrowRight className="text-xl" />
            </div>
          </div>
        </div>
      </Link>

    </div>
  );
};

export default Pachete;