import { useState } from "react";
import { getTodayFormatted } from "../../lib/dateConvert";
import { Course, useGetTeachersStore } from "../../store/armoniaDataStore";

export default function IntroDetails({ card }: { card: Course }) {
  const [videoSrc, setVideoSrc] = useState("/videos/video-test.mp4");
  const [selected, setSelected] = useState("incepator");
  const teachers = useGetTeachersStore((state) => state.teachers);

  // Add safety check for card
  if (!card) {
    return <div>Loading...</div>;
  }

  // Find teacher by name match
  const teacherData = teachers.find(teacher => 
    teacher.name.toLowerCase().includes(card.profesor.nume.toLowerCase().split(' ')[0]) ||
    card.profesor.nume.toLowerCase().includes(teacher.name.toLowerCase().split(' ')[0])
  );

  const teacherImage = teacherData?.imagineTeacher || "/images/teacher.png";

  // Safe content rendering with fallbacks
  const safeDescriere = card.descriere || "Cursul nostru de " + card.name + " este conceput pentru a vă oferi o experiență de învățare completă și interactivă.";
  const safeCeOsaInveti = card.ceOsaInveti || "Veți învăța fundamentele " + card.name.toLowerCase() + ", tehnici de bază și interpretarea pieselor preferate.";

  return (
    <div className="relative">
      <div className="md:container md:mx-auto my-10 items-center flex flex-col 
        lg:flex-row rounded-xl lg:gap-20  py-8 px-6">
        <div className="flex">
          <div className="flex flex-col">
            <div className='hidden lg:flex w-fit mb-5 gap-3 bg-green-secondary-rgb/10 items-center
            py-2 px-2 rounded-lg'>
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <p className="text-sm font-medium text-green-secondary-rgb">ARMONIA Academy</p>
            </div>

            <div className={`~text-5xl/6xl font-saint text-green-secondary mb-4`}>
              <p>{card.name}</p>
            </div>

            <div className="flex gap-2">
              <div className="relative text-[#E6E6E6]">
                <div className="absolute left-4 lg:left-0">
                  <img className="hidden lg:block" src="/images/big-red-line.png" alt="" />
                  <img className="lg:hidden" src="/images/small-red-line.png" alt="" />
                </div>
                <p className="~text-3xl/5xl font-bold font-epilogue text-nowrap">{card.pretDiscounted}</p>
              </div>
              <div>
                <p className="~text-3xl/5xl font-bold font-epilogue text-green-secondary text-nowrap">{card.pretFull}</p>
              </div>
            </div>

            <div className="mb-4 mt-2">
              <div className="flex gap-8 mt-4 lg:mt-0">
                <div className=" flex ~gap-1/4 items-center">
                  <img src="/images/green-calendar.png" alt="" className="w-4 h-5" />
                  <p className="text-[#4D5756] ~text-xs/md text-nowrap">{getTodayFormatted()}</p>
                </div>
                <div className=" flex ~gap-1/4 items-center">
                  <img src="/images/green-file.png" alt="" className="w-4 h-5" />
                  <p className="text-[#4D5756] ~text-xs/md text-nowrap">{card.sesiuni}</p>
                </div>
              </div>

            </div>
            <div className="hidden lg:flex gap-4 text-white mt-10 font-sora">
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test.mp4");
                  setSelected("incepator");
                }}
                className={`btn-click-effect px-11 py-4 rounded-full ${selected === "incepator"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Începător
              </button>
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test2.mp4");
                  setSelected("avansat");
                }}
                className={`btn-click-effect px-11 py-4 font-bold rounded-full ${selected === "avansat"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Avansat
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="flex flex-col gap-4 text-white font-sora">
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test.mp4");
                  setSelected("incepator");
                }}
                className={`btn-click-effect px-6 text-xs py-3 rounded-full ${selected === "incepator"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Începător
              </button>
              <button
                onClick={() => {
                  setVideoSrc("/videos/video-test2.mp4");
                  setSelected("avansat");
                }}
                className={`btn-click-effect px-6 text-xs py-3 font-bold rounded-full ${selected === "avansat"
                  ? "bg-green-secondary text-white"
                  : "border border-green-secondary text-green-secondary"
                  }`}
              >
                Avansat
              </button>
            </div>
          </div>
        </div>
        <div className="w-[95%] md:w-[65%] mx-auto md:mt-8 lg:mt-0">
          <video key={videoSrc} controls className="w-full rounded-lg shadow-lg">
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Dynamic Capitole Curs Section - positioned after main content */}
      <div className="md:container flex mt-10 flex-col lg:flex-row relative md:mx-auto rounded-3xl mx-6 bg-green-secondary text-black mb-28">
        <div className="py-5 px-10 flex justify-center lg:block">
          <p className="text-white ~text-2xl/4xl font-black">Capitole Curs</p>
        </div>
        <div className="flex flex-col items-center lg:items-start text-center lg:text-start gap-2 md:py-5 flex-1">
          <div className="flex flex-col ~text-sm/2xl lg:flex-row text-white ~gap-2/10 w-full">
            {card.capitoleCurs?.capitole ? (
              // Display course chapters in columns
              <>
                <div className="flex flex-col">
                  {card.capitoleCurs.capitole.slice(0, 2).map((capitol, index) => (
                    <p key={index}>✓ {capitol}</p>
                  ))}
                </div>
                {card.capitoleCurs.capitole.length > 2 && (
                  <div className="flex flex-col">
                    {card.capitoleCurs.capitole.slice(2, 4).map((capitol, index) => (
                      <p key={index + 2}>✓ {capitol}</p>
                    ))}
                  </div>
                )}
                {card.capitoleCurs.capitole.length > 4 && (
                  <div className="flex flex-col">
                    {card.capitoleCurs.capitole.slice(4).map((capitol, index) => (
                      <p key={index + 4}>✓ {capitol}</p>
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Fallback content if no chapters available
              <>
                <div className="flex flex-col">
                  <p>✓ Introducere în {card.name.toLowerCase()}</p>
                  <p>✓ Poziția corectă</p>
                </div>
                <div className="flex flex-col">
                  <p>✓ Tehnici de bază</p>
                  <p>✓ Note și ritm</p>
                </div>
                <div className="flex flex-col">
                  <p>✓ Primele melodii</p>
                  <p>✓ Exerciții practice</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="absolute hidden 2xl:block top-[500px] opacity-30 xl:opacity-100">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="md:container md:mx-auto flex flex-col xl:flex-row font-sora mx-2 mb-8">
        <div className="flex flex-col mx-4 flex-1">
          <div className="flex ~gap-3/5 ~mb-4/16 flex-wrap">
            <p className="~text-xs/lg bg-purple-primary text-white px-4 py-4 rounded-full" >Descriere</p>
            <p className="~text-xs/lg bg-gray-100 font-bold text-blue-text-primary px-4 py-4 rounded-full">Curicula</p>
          </div>
          <div className="flex flex-col gap-6 ~mb-2/6">
            <p className="text-blue-text-primary text-xl font-saint">Descrierea cursului</p>
            <p className="text-[#333931] ~text-xs/lg ~leading-2/9">{safeDescriere}</p>
          </div>
          <div className="flex flex-col gap-6 mb-6">
            <p className="text-blue-text-primary text-xl font-saint">Ce o sa inveti?</p>
            <p className="text-[#333931] ~text-xs/lg ~leading-2/9">{safeCeOsaInveti}</p>
          </div>
          
          {/* Fill the white space with additional content */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-3xl shadow-lg mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-secondary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-saint text-green-secondary">De ce să alegi Armonia Academy?</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-green-secondary font-bold">✓</span>
                <span>Profesori cu experiență de peste 10 ani</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-secondary font-bold">✓</span>
                <span>Lecții personalizate pentru fiecare elev</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-secondary font-bold">✓</span>
                <span>Instrumente profesionale disponibile</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-secondary font-bold">✓</span>
                <span>Program flexibil adaptat stilului tău</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-secondary font-bold">✓</span>
                <span>5 locații în București</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-secondary font-bold">✓</span>
                <span>Certificat de absolvire recunoscut</span>
              </div>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border-l-4 border-purple-primary">
            <h3 className="text-xl font-saint text-purple-primary mb-4">Progresul tău în 6 luni</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div>
                  <p className="font-semibold text-gray-800">Luna 1-2: Fundamentele</p>
                  <p className="text-sm text-gray-600">Poziția corectă, primele acorduri/note</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-green-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div>
                  <p className="font-semibold text-gray-800">Luna 3-4: Dezvoltarea tehnicii</p>
                  <p className="text-sm text-gray-600">Melodii simple, coordinarea mâinilor</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-purple-primary rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div>
                  <p className="font-semibold text-gray-800">Luna 5-6: Interpretarea</p>
                  <p className="text-sm text-gray-600">Piese complete, expresivitate muzicală</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row xl:flex-col items-center justify-center gap-8 xl:min-w-[400px]">
          <div className="~px-2/9 ~py-4/9 flex lg:block justify-center rounded-3xl w-[350px] shadow-2xl">
            <div className="flex flex-col gap-3">
              <div className="flex">
                <img src="/images/vertical-divider.png" alt="" />
                <p className="font-hind text-[#191B1E] ~text-lg/xl font-semibold">Cerințe</p>
              </div>
              <div className="pl-3 flex flex-col ~text-sm/lg">
                <p>{card.ceriinte?.val1 || "Fără experiență necesară"}</p>
                <p>{card.ceriinte?.val2 || "Vârsta minimă de 7 ani"}</p>
                <p>{card.ceriinte?.val3 || "Exercițiu regulat"}</p>
                <p>{card.ceriinte?.val4 || "Răbdare și dedicare"}</p>
              </div>
              <div className="flex">
                <img src="/images/vertical-divider.png" alt="" />
                <p className="font-hind text-[#191B1E] ~text-lg/xl font-semibold">Cui i se adresează</p>
              </div>
              <div className="pl-3 flex flex-col ~text-sm/lg">
                <p>{card.cuiISeadreseaza?.val1 || "Începători"}</p>
                <p>{card.cuiISeadreseaza?.val2 || "7 ani și peste"}</p>
                <p>{card.cuiISeadreseaza?.val3 || "Dezvoltarea abilităților muzicale"}</p>
                {card.cuiISeadreseaza?.val4 && <p>{card.cuiISeadreseaza.val4}</p>}
              </div>
              <div 
                onClick={() => {
                  document.getElementById('registration-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
                className="btn-click-effect cursor-pointer self-center
                bg-purple-primary text-white ~py-2/4 ~px-10/20 text-nowrap rounded-full ~text-xs/lg hover:bg-purple-600 transition-colors"
              >
                Înscrie-te
              </div>
            </div>
          </div>
          <div className="p-9 rounded-3xl shadow-2xl w-[350px]">
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col">
                <img src={teacherImage} alt={card.profesor?.nume || "Teacher"} className="w-[118px] h-auto" />
              </div>
              <div className="text-center">
                <p className="font-hind text-[#191B1E] text-xl font-semibold">{card.profesor?.nume || "Profesor"}</p>
                <p className="text-[#5C727D]">Experiența {card.profesor?.experienta || "peste 5 ani"}</p>
              </div>
              <div>
                <p className="text-center text-[#5C727D] text-sm">{card.profesor?.descriere || "Profesor experimentat cu pasiune pentru predare."}</p>
              </div>
              <div className="flex gap-2">
                <img src="/images/facebook.png" alt="" />
                <img src="/images/youtube.png" alt="" />
                <img src="/images/instagram.png" alt="" />
                <img src="/images/twitter.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:container flex relative md:mx-auto rounded-3xl mx-6 bg-yellow-secondary text-black">
        <div className="py-5 ~px-2/10 flex justify-center md:block">
          <img src="/images/intrebare-black.png" alt="" className="w-80 h-20 sm:hidden" />
          <img src="/images/intrebare-black.png" alt="" className="hidden sm:block" />
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
    </div>
  );
}