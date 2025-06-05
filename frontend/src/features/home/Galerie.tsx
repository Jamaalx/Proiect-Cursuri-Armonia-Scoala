import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { cn } from '../../lib/cn';

const courses = [
  {
    image: "./images/school-1.jpg",
  },
  {
    image: "./images/school-3.jpg",
  },
  {
    image: "./images/school-2.jpg",
  },
  // adaugă restul cursurilor după acest model...
];

const Galerie = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <div className="md:container mx-auto px-4 py-10 bg-green-50 rounded-3xl relative">
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex justify-center md:justify-between md:flex-row'>
            <p className='bg-green-secondary text-white tracking-wider text-sm font-semibold px-16 py-2 rounded-full self-center'>
              Galerie
            </p>
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
            el: '.custom-pagination-galerie',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="swiper-bullet ${className}"></span>`,
          }}
        >
          {/* Cards here in the swiper */}
          {courses.map((photo, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[750px] flex justify-center py-10"
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
                    'w-full bg-green-50 rounded-xl transition-shadow duration-300 flex flex-col gap-4 h-[450px]',
                    activeIndex === index ? 'shadow-xl' : 'shadow-md'
                  )}
                >
                  <div
                    className="w-full h-full bg-green-50 transition-shadow duration-300"
                  >
                    <img
                      src={photo.image}
                      alt=""
                      className="w-full h-full object-cover rounded-xl" // Adaugă 'object-cover rounded-xl' la imagine
                    />
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION BUTTONS */}
        <div className="custom-prev absolute top-1/2 left-6 transform -translate-y-1/2 z-10 cursor-pointer">
          <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
            <span className="text-2xl text-teal-600 group-hover:text-white">
              <FiChevronLeft />
            </span>
          </div>
        </div>

        <div className="custom-next absolute top-1/2 right-6 transform -translate-y-1/2 z-10 cursor-pointer">
          <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
            <span className="text-2xl text-teal-600 group-hover:text-white">
              <FiChevronRight />
            </span>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="custom-pagination-galerie mt-6 flex justify-center gap-2" />

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
      {/* Map comes here */}
      <div className='md:container md:mx-auto my-20 p-8 md:p-0'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.4494974875956!2d26.113730376656946!3d44.37951647107878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4723b04b1b%3A0xffce9928d3e321a7!2sLidl%2C%20%C8%98oseaua%20Giurgiului%2C%20Bucure%C8%99ti%20040741!5e0!3m2!1sen!2sro!4v1717011892802!5m2!1sen!2sro"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Galerie;