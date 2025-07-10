import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { cn } from '../../lib/cn';
import { Link, useLocation } from 'react-router-dom';
import { useGetTeachersStore } from '../../store/armoniaDataStore';

export default function Profesor() {
  const location = useLocation();
  const teacher = location.state?.teacher;
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const teachers = useGetTeachersStore((state) => state.teachers);
  return (
    <div className="relative">
      <div className="absolute hidden 2xl:block top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 -left-5 opacity-20 2xl:opacity-100">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="absolute hidden 2xl:block right-0 top-[80px] sm:top-[150px] md:top-[200px] lg:top-[350px] xl:top-[450px] 2xl:top-[500px] 
      scale-75 xl:scale-100 opacity-20 lg:opacity-100">
        <img src="/images/footer-air-scaleddown.png" alt="" />
      </div>

      <div className='md:container rounded-xl shadow-xl p-6 gap-10 flex flex-col md:flex-row md:mx-auto'>
        <div className='flex flex-col items-center'>
          <div>
            <img src={`${teacher.imagineTeacher}`} alt="" className='w-96 h-auto md:w-[243px] md:h-[243px]' />
            <div className='flex justify-evenly items-center ~py-2/9'>
              <a href="">
                <img src="/images/facebook2.png" alt="" className='scale-50' />
              </a>
              <a href="">
                <img src="/images/twitter2.png" alt="" className='scale-50' />
              </a>
              <a href="">
                <img src="/images/skype.png" alt="" className='scale-50' />
              </a>
              <a href="">
                <img src="/images/linkedin.png" alt="" className='scale-50' />
              </a>
            </div>
            <div className='h-[2px] w-full bg-gray-100'></div>
            <div className='my-9'>
              <div className='flex gap-2 flex-col'>
                <div className='flex items-center gap-2 text-sm text-[#4D5756]'>
                  <img src="/images/green-pin.png" alt="" />
                  <p>{teacher.locatie}</p>
                </div>
                <div className='flex items-center gap-2 text-sm text-[#4D5756]'>
                  <img src="/images/green-mail.png" alt="" />
                  <p>{teacher.email}</p>
                </div>
              </div>
            </div>
            <Link to={"/contact"}>
              <div className="flex items-center justify-between mt-6">
                <div
                  className={cn(
                    'flex select-none bg-purple-primary items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]'
                  )}
                >
                  <span className="text-sm font-medium">Vezi mai Mult</span>
                  <div className={cn("p-4 rounded-full bg-purple-secondary")}>
                    <FiArrowRight className="text-xl" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex flex-col gap-4 mb-6">
            <p className="text-blue-text-primary ~text-lg/2xl font-saint">{teacher.name}</p>
            <p className='text-green-secondary text-sm'>Profesor</p>
            <p className="text-[#333931] ~text-xs/lg ~leading-2/9">{teacher.descriereScurta}</p>
            <p className="text-[#333931] ~text-xs/lg ~leading-2/9">{teacher.descriereCompleta}</p>

            <p className="text-blue-text-primary text-xl font-saint">Educatie:</p>
            <p className='~text-xs/lg ~leading-2/9'>
              {teacher.educatie}
            </p>
            <p className="text-blue-text-primary ~text-lg/2xl font-saint">Expertise & Skills:</p>
            <p className="text-blue-text-primary">{teacher.expertiza[0]}</p>
            <div className='h-1 w-full bg-[#09B289]/30'></div>
            <p className="text-blue-text-primary">{teacher.expertiza[1]}s</p>
            <div className='h-2 w-full bg-[#09B289]/30'></div>
            <p className="text-blue-text-primary">{teacher.expertiza[2]}</p>
            <div className='h-3 w-full bg-[#09B289]/30'></div>
            <p className="text-blue-text-primary">{teacher.expertiza[3]}</p>
            <div className='h-4 w-full bg-[#09B289]/30'></div>
            <p className="text-blue-text-primary">{teacher.expertiza[4]}</p>
            <div className='h-5 w-full bg-[#09B289]/30'></div>
          </div>

        </div>
      </div>

      {/* purple ai nevoie de ajutor */}
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
        <div className='mb-8'>
          <img className="mt-16 hidden lg:block w-full relative" src="/images/yellow-banner.png" alt="" />
          <img className="mt-16 lg:hidden w-full relative" src="/images/yellow-banner-small.png" alt="" />
        </div>
      </div>

      <div className="relative md:container md:mx-auto">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          centeredSlides
          initialSlide={3}
          spaceBetween={30}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          pagination={{
            el: '.custom-pagination-pachete',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="swiper-bullet ${className}"></span>`,
          }}
        >
          {teachers.map((profesor, index) => (
            <SwiperSlide
              key={index}
              className="md:!w-80 flex justify-center px-6 py-10"
            >
              <div
                onClick={() => swiperRef.current?.slideTo(index)}
                className={cn(
                  'cursor-pointer h-full w-full transition-all duration-300 ease-in-out',
                  activeIndex === index ? 'scale-105' : 'scale-95',
                )}
              >
                <div className="p-2 select-none shadow-lg rounded-lg flex flex-col">
                  <img src={profesor.imagineTeacher} alt="" />
                  <div className="m-4">
                    <p className="font-bold text-lg text-blue-text-primary">{profesor.nume}</p>
                    <p className="text-sm text-green-secondary">Teacher</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* NAVIGATION BUTTONS */}
        <div className="custom-prev absolute left-2 md:left-20 transform -translate-y-1/2 z-50 cursor-pointer">
          <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
            <span className="text-2xl text-teal-600 group-hover:text-white">
              <FiChevronLeft />
            </span>
          </div>
        </div>

        <div className="custom-next absolute right-2 md:right-20 transform -translate-y-1/2 z-10 cursor-pointer">
          <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
            <span className="text-2xl text-teal-600 group-hover:text-white">
              <FiChevronRight />
            </span>
          </div>
        </div>

        {/* Fade Left */}
        <div className="pointer-events-none absolute top-0 left-0 md:w-[100px] lg:w-[250px] xl:w-[350px] 2xl:w-[500px] h-full z-20  bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Fade Right */}
        <div className="pointer-events-none absolute top-0 right-0 md:w-[100px] lg:w-[250px] xl:w-[350px] 2xl:w-[500px] h-full z-20 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>;

      {/* PAGINATION */}
      <div className="custom-pagination-pachete flex justify-center gap-2" />;

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
    </div >
  );
}