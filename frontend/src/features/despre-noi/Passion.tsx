import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { cn } from '../../lib/cn';
import { useRef, useState } from 'react';

const teachers = [
  {
    nume: "Micheal Hammond",
    imagineTeacher: "./images/michel-hamond.png",
  },
  {
    nume: "Cherly Curry",
    imagineTeacher: "./images/chery-cury.png",
  },
  {
    nume: "Willie Diaz",
    imagineTeacher: "./images/whillie-diaz.png",
  },
  {
    nume: "Jimmy Sifuentes",
    imagineTeacher: "./images/jhimmy-siluete.png",
  },
  {
    nume: "Justin Clark",
    imagineTeacher: "./images/justin-clark.png",
  },
  {
    nume: "Walter Skeete",
    imagineTeacher: "./images/walter-skeete.png",
  },
  {
    nume: "Willky Diaz",
    imagineTeacher: "./images/w-diaz.png",
  },
  {
    nume: "Ann Dooley",
    imagineTeacher: "./images/ann-doley.png",
  },
];

export default function Passion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative flex flex-col ~mt-20/40">
      <div className="xl:container md:mx-auto pl-4 flex justify-center lg:justify-start mb-10">
        <div className="flex flex-col gap-6 ~max-w-xs/3xl justify-center">
          <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
            <p className="tracking-wider">Filozofia educațională</p>
          </div>
          <div className="font-saint ~text-xl/5xl text-[#0E2A46]">
            Pasiunea noastră este să lucrăm cu oamenii la
            <span className="text-green-secondary-rgb"> Armonia Acedemy.</span>
          </div>

          <div className="~text-sm/lg">
            <p>La Armonia Academy, credem că educația este cea mai puternică forță transformatoare din viața oamenilor. Filozofia noastră se bazează pe convingerea că fiecare persoană are un potențial unic care merită să fie descoperit, cultivat și dezvoltat în toate aspectele vieții.
Viziunea noastră depășește granițele educației tradiționale. Ne concentrăm pe dezvoltarea personală completă - de la competențele creative și artistice, până la abilitățile digitale și antreprenoriale de care viitorul are nevoie. Credem într-o abordare holistică care combină învățarea academică cu dezvoltarea emoțională și socială.
Echipa noastră de mentori și educatori înțelege că lumea se schimbă rapid și că educația trebuie să se adapteze. De aceea, ne concentrăm pe dezvoltarea gândirii critice, creativității, colaborării și adaptabilității - competențele esențiale pentru succesul în orice domeniu.
Pasiunea noastră se reflectă în tot ce facem: creăm experiențe de învățare personalizate, inspirăm încrederea în sine și motivăm fiecare persoană să-și atingă potențialul maxim. Fie că vorbim despre arte, tehnologie, leadership sau dezvoltare personală, misiunea noastră rămâne aceeași: să transformăm vieți prin educație de calitate.</p>
          </div>
        </div>
        <div className="hidden md:flex items-end">
          <div className="scale-100">
            <img src="./images/purple-human-big.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img className="w-full lg:hidden" src="./images/purple-banner-small.png" alt="" />
        <img className="w-full hidden lg:block" src="./images/purple-banner.png" alt="" />
      </div>

      <div className="md:container md:mx-auto mt-10">
        <div className="flex justify-center">
          <div className="w-max bg-green-secondary text-sm font-semibold text-white py-2 px-4 rounded-full">
            <p className="tracking-wider">Filozofia educațională</p>
          </div>
        </div>
        {/* Profesori carduri */}
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
        </div>

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

      <div className="md:container mb-10 flex mt-10 relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black">
        <div className="py-5 ~px-2/10 flex justify-center md:block">
          <img src="./images/intrebare-black.png" alt="" className="w-80 h-20 sm:hidden" />
          <img src="./images/intrebare-black.png" alt="" className="hidden sm:block" />
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

    <div className="md:container justify-center flex flex-col md:flex-row relative md:mx-auto rounded-3xl mx-6 bg-green-secondary text-white mb-20">
  <div className="flex flex-col p-5 items-center text-center md:text-start gap-2 py-5 max-w-7xl">
    <div className="font-abril ~text-2xl/5xl">
      <p>Vei beneficia de o experiență impecabilă</p>
    </div>
    <div className='~text-sm/4xl'>
      <p>La Armonia Academy, fiecare lecție este o călătorie de descoperire muzicală. Profesorii noștri dedicați combină pasiunea cu experiența pentru a-ți oferi o educație muzicală completă, adaptată nivelului și obiectivelor tale. Indiferent dacă ești la început de drum sau vrei să îți perfecționezi abilitățile, îți garantăm o experiență de învățare inspirațională și profesională.</p>
    </div>
    <div className="font-abril ~text-2xl/5xl">
      <p>Ce îți oferim?</p>
    </div>

    <div className="px-8 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        
        {/* Card 1: Profesori Experimentați */}
        <div className="p-8 shadow-xl bg-white rounded-2xl flex flex-col w-full max-w-sm h-64 text-gray-800 items-center text-center justify-center hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-6 p-4 bg-purple-100 rounded-full">
            <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">Profesori Experimentați</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Echipă de specialiști cu experiență vastă și rezultate dovedite</p>
        </div>

        {/* Card 2: Lecții Personalizate */}
        <div className="p-8 shadow-xl bg-white rounded-2xl flex flex-col w-full max-w-sm h-64 text-gray-800 items-center text-center justify-center hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-6 p-4 bg-orange-100 rounded-full">
            <svg className="w-12 h-12 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">Lecții Personalizate</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Curriculum adaptat nivelului și obiectivelor fiecărui elev</p>
        </div>

        {/* Card 3: 5 Sedii în București */}
        <div className="p-8 shadow-xl bg-white rounded-2xl flex flex-col w-full max-w-sm h-64 text-gray-800 items-center text-center justify-center hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-6 p-4 bg-green-100 rounded-full">
            <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">5 Sedii Moderne</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Locații convenabile în București cu echipamente de calitate</p>
        </div>

        {/* Card 4: Flexibilitate Program */}
        <div className="p-8 shadow-xl bg-white rounded-2xl flex flex-col w-full max-w-sm h-64 text-gray-800 items-center text-center justify-center hover:shadow-2xl transition-shadow duration-300">
          <div className="mb-6 p-4 bg-yellow-100 rounded-full">
            <svg className="w-12 h-12 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
          </div>
          <h4 className="font-bold text-lg mb-3 text-gray-800">Program Flexibil</h4>
          <p className="text-sm text-gray-600 leading-relaxed">Orar adaptat stilului tău de viață, inclusiv weekend</p>
        </div>

      </div>
    </div>

    {/* Buton Call-to-Action */}
    <div className="mt-4">
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg">
        Înscrie-te
      </button>
    </div>

  </div>
</div>
    </div>
  );
}