import { useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Define the type for sediu data
type SediuData = {
  nume: string;
  imagineSediu: string;
  pin: string;
  culoareText: string;
  telefon: string;
  email?: string;
  adresa: string;
  zona?: string;
  program: string[];
  icon: string;
  link: string;
  customText?: string;
};

export default function Sediile() {
  const sediiData: SediuData[] = [
    {
      nume: "Obor-Fainari ",
      imagineSediu: "/images/sediu-green.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      telefon: "+ 40738318373",
      email: "obor@armoniaacademy.ro",
      adresa: "Str. Episcopul Radu nr. 63 (langa Patiseria Blitz 'n Roll din str. Fainari nr. 5)",
      zona: "Zona Obor - Mosilor, vis-a-vis de Scoala 50 Maica Domnului",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "/images/green-human.png",
      link: "https://www.google.com/maps/dir/44.4435846,26.1267148/Strada+Episcopul+Radu+63,+Bucure%C8%99ti/@44.4460768,26.1197233,1184m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b1f8cb8e874d85:0xe579d312fd836658!2m2!1d26.12188!2d44.4476593?hl=en&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      nume: "Sediul Gara\nde Nord",
      imagineSediu: "/images/sediu-green.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      telefon: "+ 40273092740",
      email: "contact@scoalaarmona.ro",
      adresa: "Strada Vespasian nr.34, Sector 1,\nBucuresti",
      zona: "Zona gara de Nord vis-a-vis de Gradinaita Zum-Zum",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "/images/green-human.png",
      link: "https://www.google.com/maps/dir/44.451156,26.1338887/Strada+Vespasian+34,+Bucure%C8%99ti+010921/@44.4437844,26.0641663,9471m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b201e4eb47ade1:0x8edda206e49b9180!2m2!1d26.0714761!2d44.4453017?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      nume: "Sediul Mihai Bravu",
      imagineSediu: "/images/isolation_mode.png",
      pin: "/images/yellow-pin.png",
      culoareText: "text-[#FFD46C]",
      telefon: "+ 40723092740",
      email: "mihaibravu@scoalaarmona.ro",
      adresa: "Strada Stirului nr.14-16, Sector 3,\nBucuresti",
      zona: "Zona Mihai Bravu, vis-a-vis de Magazinul Mathaus",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "/images/yellow-human.png",
      link: "https://www.google.com/maps/dir/44.451156,26.1338887/Strada+%C8%98tirului+14,+Bucure%C8%99ti/@44.4319086,26.1096394,4737m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b1feee4adf3005:0x105915c8e42dee1!2m2!1d26.1320982!2d44.4135867?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      nume: "Sediul Piata\nProgresul",
      imagineSediu: "/images/purple-hamburger.png",
      pin: "/images/purple-pin.png",
      culoareText: "text-purple-primary",
      telefon: "+ 40741231234",
      email: "progresul@scoalaarmona.ro",
      adresa: "Strada Exemplu 99, Sector 4,\nBucuresti",
      zona: "Zona Piata Progresul, langa Lidl",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "/images/purple-human.png",
      link: "https://www.google.com/maps/dir/44.451156,26.1338887/USR+Sector+4,+Strada+L%C3%A2n%C4%83riei+99,+Bucure%C8%99ti+040321/@44.4327556,26.0996873,4736m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b1ff7cc579647d:0x5cbe9c6547bcdae1!2m2!1d26.1028006!2d44.4152935?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
    {
      nume: "Sediul Premium Atomic Academy",
      customText: "",
      imagineSediu: "/images/purple-hat.png",
      pin: "/images/purple-pin.png",
      culoareText: "text-purple-primary",
      telefon: "+ 40736924645",
      adresa: "Cladirea Cocor, Bdul Ion C. Bratianu nr.29-33",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "/images/purple-human.png",
      link: "https://www.google.com/maps/dir/44.451156,26.1338887/Cocor,+Bulevardul+Ion+C.+Br%C4%83tianu+29-33,+Bucure%C8%99ti+030167/@44.4405521,26.1016744,4736m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b1ff3e6b6b9f2d:0x70a781d665a6dc87!2m2!1d26.1041419!2d44.4303647?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    },
  ];
  const [, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative">
      <div className="absolute right-0 -top-40">
        <img src="/images/cercuri.png" alt="" />
      </div>
      <div className="mx-4 relative max-w-[95%] md:max-w-[90%] lg:max-w-[85%] md:mx-auto md:mt-24 flex md:justify-center">
        <a className="bg-green-secondary font-normal ~px-6/16 rounded-full btn btn-ghost hover:bg-green-secondary-rgb text-white ~text-sm/lg">
          Sediile Noastre
        </a>
      </div>
      <div className="hidden lg:grid max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto md:mt-10 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {sediiData.map((sediu: SediuData, index: number) => (
          <div
            key={index}
            className="bg-white/70 shadow-lg rounded-xl p-8 flex flex-col min-h-[560px] relative"
          >
            <div className="flex items-center justify-between gap-4 md:gap-16 mb-10">
              <div>
                <img src={sediu.imagineSediu} alt="" />
              </div>
              <div className="flex gap-2 border rounded-full items-center py-3 px-4">
                <div>
                  <img src="/images/google-pin.png" alt="" />
                </div>
                <a href={sediu.link} target="_blank" rel="noopener noreferrer">
                  <p className="m-0 text-blue-500 cursor-pointer font-semibold tracking-wider">Direction</p>
                </a>
              </div>
            </div>

            <h2 className={`${sediu.customText || "text-5xl"} font-saint mb-2 ${sediu.culoareText}`}>
              {sediu.nume.split("\n").map((line: string, i: number) => (
                <div key={i}>{line}</div>
              ))}
            </h2>

            <div>
              <div className="h-5"></div>
              <div className="flex gap-2 rounded-full items-center">
                <div>
                  <img src={sediu.pin} alt="" />
                </div>
                <p className="m-0 tracking-wider">Bucuresti</p>
              </div>

              <div className="flex gap-2 rounded-full items-center">
                <p className="m-0 tracking-wider">{sediu.telefon}</p>
              </div>

              <div className="flex gap-2 rounded-full items-center">
                <p className="m-0 tracking-wider">{sediu.email}</p>
              </div>

              <div className="flex gap-2 rounded-full items-center">
                <p className="m-0 tracking-wider whitespace-pre-line">{sediu.adresa}</p>
              </div>

              <div className="flex gap-2 rounded-full items-center">
                <p className="m-0 tracking-wider whitespace-pre-line">{sediu.zona}</p>
              </div>
              <div className="h-5"></div>
              <div className="flex gap-2 rounded-full items-center">
                <p className="m-0 tracking-wider font-bold">Program:</p>
              </div>

              {sediu.program.map((linie: string, idx: number) => (
                <div key={idx} className="flex gap-2 rounded-full items-center">
                  <p className="m-0 tracking-wider">{linie}</p>
                </div>
              ))}

              <div className="absolute right-5 bottom-5">
                <img src={sediu.icon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='lg:hidden mx-4 max-w-[95%] md:max-w-[90%] md:mx-auto'>
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
          {sediiData.map((sediu: SediuData, index: number) => (
            <SwiperSlide
              key={index}
              className="md:!w-80 flex justify-center py-10"
            >
              <div
                key={index}
                className="bg-white/70 shadow-lg rounded-xl p-8 flex flex-col w-full md:max-w-80 lg:max-w-96 min-h-[530px] relative"
              >
                <div className="flex items-center justify-between gap-4 md:gap-16 ~mb-2/10">
                  <div>
                    <img src={sediu.imagineSediu} alt="" className='~w-20/40' />
                  </div>
                  <div className="flex gap-2 border rounded-full items-center ~py-1/3 px-2">
                    <div>
                      <img src="/images/google-pin.png" alt="" />
                    </div>
                    <a href={sediu.link} target="_blank" rel="noopener noreferrer">
                      <p className="m-0 text-blue-500 font-semibold ~text-xs/sm tracking-wider cursor-pointer">Direction</p>
                    </a>
                  </div>
                </div>

                <h2 className={`${sediu.customText || "text-md leading-7"} font-saint mb-2 ${sediu.culoareText}`}>
                  {sediu.nume.split("\n").map((line: string, i: number) => (
                    <div key={i}>{line}</div>
                  ))}
                </h2>

                <div className='~text-sm/md'>
                  <div className="flex gap-2 rounded-full items-center">
                    <div>
                      <img src={sediu.pin} alt="" />
                    </div>
                    <p className="m-0 tracking-wider">Bucuresti</p>
                  </div>

                  <div className="flex gap-2 rounded-full items-center">
                    <p className="m-0 tracking-wider">{sediu.telefon}</p>
                  </div>

                  <div className="flex gap-2 rounded-full items-center">
                    <p className="m-0 tracking-wider">{sediu.email}</p>
                  </div>

                  <div className="flex gap-2 rounded-full items-center">
                    <p className="m-0 tracking-wider whitespace-pre-line">{sediu.adresa}</p>
                  </div>

                  <div className="flex gap-2 rounded-full items-center">
                    <p className="m-0 tracking-wider whitespace-pre-line">{sediu.zona}</p>
                  </div>
                  <div className="h-5"></div>
                  <div className="flex gap-2 rounded-full items-center">
                    <p className="m-0 tracking-wider font-bold">Program:</p>
                  </div>

                  {sediu.program.map((linie: string, idx: number) => (
                    <div key={idx} className="flex gap-2 rounded-full items-center">
                      <p className="m-0 tracking-wider">{linie}</p>
                    </div>
                  ))}

                  <div className="absolute right-5 bottom-5">
                    <img src={sediu.icon} alt="" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
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
          {/* PAGINATION */}
          <div className="custom-pagination-pachete mb-2 relative bottom-7 flex justify-center gap-2" />

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
        </Swiper>
      </div>
    </div>
  );
}