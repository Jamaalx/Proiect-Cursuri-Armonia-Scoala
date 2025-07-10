import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useState, useRef, useEffect } from 'react';
import 'swiper/swiper-bundle.css';

const videos = [
  {
    videoUrl: "/videos/video-1.mp4",
  },
  {
    videoUrl: "/videos/video-2.mp4",
  },
  {
    videoUrl: "/videos/video-3.mp4",
  },
];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const OurClients = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return;
      video.pause();
      video.currentTime = 0;
    });
    setPlayingIndex(null);
  }, [activeIndex]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <div>
      <div className="md:container mx-auto px-4 py-10 relative">
        <div className='flex flex-col items-center'>
          <div className='flex flex-col gap-4 pl-6'>
            <div className='flex justify-center'>
              <p className='bg-purple-primary text-white tracking-widest ~text-sm/lg
              font-semibold px-8 py-2 rounded-full'>Testimoniale</p>
            </div>
            <p className='font-saint ~text-2xl/5xl'>Ce spun studenții noștri</p>
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
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            el: ".custom-pagination-pachete",
            clickable: true,
            renderBullet: (_, className) =>
              `<span class="swiper-bullet ${className}"></span>`,
          }}
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] md:!w-[450px] flex justify-center py-10"
            >
              <div
                className={`relative w-full h-96 rounded-3xl shadow-md transition-all duration-300 ease-in-out ${activeIndex === index ? "scale-105 shadow-xl" : "scale-95 opacity-50"
                  }`}
                onClick={() => {
                  swiperRef.current?.slideTo(index);
                  togglePlay(index);
                }}
              >
                <div className="relative w-full h-full">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={video.videoUrl}
                    className="rounded-[30px] w-full h-full object-cover"
                    playsInline
                    muted={false} // <- Not muted anymore
                    controls={false} // Custom control only
                  />

                  {/* Play button overlay */}
                  {playingIndex !== index && activeIndex === index && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent parent onClick
                        togglePlay(index);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg group"
                    >
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="black"
                          className="w-6 h-6 pl-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
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
        </Swiper>

        {/* PAGINATION */}
        <div className="custom-pagination-pachete flex justify-center gap-2" />

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

      {/* Pink Banner */}
      <div>
        <img className="w-full lg:hidden" src="/images/purple-banner-small.png" alt="" />
        <img className="w-full hidden lg:block" src="/images/purple-banner.png" alt="" />
      </div>

    </div>
  );
};

export default OurClients;