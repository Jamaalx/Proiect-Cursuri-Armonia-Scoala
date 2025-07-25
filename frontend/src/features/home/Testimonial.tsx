import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useRef } from 'react';
import 'swiper/swiper-bundle.css';
import { cn } from '../../lib/cn';

const courses = [
  {
    title: "“Profesori extraordinari și atmosferă inspirantă“",
    textBody: "Am început cursurile de pian la Armonia Academy acum 6 luni și progresul meu a depășit orice așteptare. Profesorii sunt nu doar foarte pricepuți, ci și extrem de răbdători și motivanți. Fiecare lecție este o bucurie și simt cum cresc ca muzician în fiecare zi.",
    userImage: "/images/poze-testimonial-1.png",
    userName: "Ionela",
    profession: "Avocat",
  },
  {
    title: "“O experiență care mi-a schimbat viața”",
    textBody: "La 25 de ani am crezut că e prea târziu să învăț chitara, dar echipa de la Armonia Academy m-a convins de contrariul. Metodele lor sunt adaptate perfect pentru adulți, iar pasiunea profesorilor este contagioasă. Acum cânt pentru familia mea și mă simt împlinit!",
    userImage: "/images/poze-testimonial-2.png",
    userName: "Alex",
    profession: "Freelancer",
  },
  {
    title: "“Locul perfect pentru dezvoltarea talentului“",
    textBody: "Fratele meu a început cursurile de vioară la 8 ani și de atunci a înflorit ca artist. Profesorii știu să motiveze copiii și să-i facă să iubească muzica. Mediul este profesional, dar totodată cald și primitor. Recomand cu încredere!",
    userImage: "/images/poze-testimonial-3.png",
    userName: "Vlad",
    profession: "Office Manager",
  },
  // adaugă restul cursurilor după acest model...
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div>
      <div className="md:container mx-auto px-4 py-16 relative">
        <div className='flex flex-col md:flex-row justify-center'>
          <div className='flex flex-col gap-4 pl-6 items-center'>
            <div className='flex'>
              <p className='bg-purple-primary text-white tracking-wider text-sm font-semibold px-10 py-2 rounded-full'>Testimoniale</p>
            </div>
            <p className='font-saint text-3xl'>Ce spun studenții noștri</p>
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
            el: '.custom-pagination-testimonial',
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="swiper-bullet ${className}"></span>`,
          }}
        >
          {/* Cards here in the swiper */}
          {courses.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[450px] flex justify-center py-20"
            >
              <div
                onClick={() => swiperRef.current?.slideTo(index)}
                className={cn(
                  'cursor-pointer h-full w-full transition-all duration-300 ease-in-out',
                  activeIndex === index ? 'scale-105' : 'scale-95',
                )}
              >
                {/* here is the card body */}
                <div
                  className={cn(
                    'w-full bg-white rounded-xl transition-shadow duration-300 flex flex-col gap-4 px-12 py-8 ~h-[550px]/[350px]',
                    activeIndex === index ? 'shadow-xl' : 'shadow-md'
                  )}
                >
                  <div className='text-[#170F49] font-semibold tracking-wider text-xl'>
                    {testimonial.title}
                  </div>
                  <div className="text-base text-[#6F6C90] pr-4">
                    {testimonial.textBody}
                  </div>
                  <div className='flex gap-4 items-center'>
                    <div>
                      <img src={testimonial.userImage} alt="" />
                    </div>
                    <div className='flex flex-col'>
                      <p className='text-[#170F49] tracking-wide font-semibold'>{testimonial.userName}</p>
                      <p className='text-[#6F6C90]'>{testimonial.profession}</p>
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* NAVIGATION BUTTONS */}
        <div className="custom-prev absolute bottom-1/5 left-1/4 transform -translate-y-1/2 z-10 cursor-pointer">
          <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
            <span className="text-2xl text-teal-600 group-hover:text-white">
              <FiChevronLeft />
            </span>
          </div>
        </div>

        <div className="custom-next absolute bottom-1/5 right-1/4 transform -translate-y-1/2 z-10 cursor-pointer">
          <div className="group w-10 h-10 flex items-center justify-center bg-white rounded-full shadow hover:bg-green-secondary transition">
            <span className="text-2xl text-teal-600 group-hover:text-white">
              <FiChevronRight />
            </span>
          </div>
        </div>

        {/* PAGINATION */}
        <div className="custom-pagination-testimonial  flex justify-center gap-2" />

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
      <div>
        <img className="hidden lg:block w-full relative" src="/images/purple-banner.png" alt="" />
        <img className="lg:hidden w-full relative" src="/images/purple-banner-small.png" alt="" />
      </div>
    </div>
  );
};

export default Testimonial;