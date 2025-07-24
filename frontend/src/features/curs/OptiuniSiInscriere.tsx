import { useState } from 'react';
import { useGetCoursesStore, Course } from '../../store/armoniaDataStore';

export default function OptiuniSiInscriere({ card }: { card: Course }) {
  // Set this to true when you want to enable the payment options
  const showPaymentOptions = false;
  const courses = useGetCoursesStore((state) => state.courses);
  
  // Form state
  const [selectedOtherInstruments, setSelectedOtherInstruments] = useState<string[]>([]);
  
  // Get other instruments (exclude the current one)
  const otherInstruments = courses.filter(course => course.id !== card.id);
  
  const handleInstrumentToggle = (instrumentName: string) => {
    setSelectedOtherInstruments(prev => 
      prev.includes(instrumentName)
        ? prev.filter(name => name !== instrumentName)
        : [...prev, instrumentName]
    );
  };

  return (
    <div className="">
      {showPaymentOptions && (
        <div className="md:container relative top-24 z-10 md:mx-auto ~text-lg/3xl font-bold">
          <p className="text-center font-saint ~text-3xl/5xl mb-4">Optiuni de plata</p>
          <div className="bg-yellow-secondary p-8 rounded-2xl flex flex-col gap-4 mx-6">
            <div className="flex justify-between text-center flex-col md:flex-row items-center bg-white rounded-full px-6 py-2 mb-4">
              <p>{card.optiuniDeplata?.tipuri?.integral || 'Plata integrala'}</p>
              <p>1234 Lei Lunar </p>
            </div>
            <p className="pl-4 text-[#333931] font-saint">Optiuni de plata in rate</p>
            <div className="flex justify-between text-center flex-col md:flex-row items-center bg-white rounded-full px-6 py-2">
              <p>2 rate fara dobanda</p>
              <p>1234 Lei/luna</p>
            </div>
            <div className="flex justify-between text-center flex-col md:flex-row items-center bg-white rounded-full px-6 py-2 mb-4">
              <p>12 rate fara dobanda</p>
              <p>12 Lei/luna</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Here we do space between Optiuni de plata and Formulaire */}
      <div className="mb-10"></div>
      
      <div id="registration-form" className="bg-purple-primary w-full absolute h-[1200px] py-16 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold mb-8">Vreau să încep!</h2>

          {/* Form begin */}
          <form className="flex flex-col gap-6">
            {/* Nume + Prenume */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Nume"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none"
              />
              <input
                type="text"
                placeholder="Prenume"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none"
              />
            </div>

            {/* Telefon + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="tel"
                  placeholder="Telefon"
                  className="w-full px-5 py-3 rounded-full text-black focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-5 py-3 rounded-full text-black focus:outline-none"
                />
              </div>
            </div>

            {/* Vârstă */}
            <input
              type="number"
              placeholder="Vârstă"
              className="w-full px-5 py-3 rounded-full text-black focus:outline-none"
            />

            {/* Selected Course - Pre-selected and disabled */}
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium">Cursul selectat:</label>
              <div className="relative">
                <input
                  type="text"
                  value={card.name}
                  disabled
                  className="w-full px-5 py-3 rounded-full text-gray-700 bg-gray-200 focus:outline-none cursor-not-allowed"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Other Instruments Selection */}
            <div className="flex flex-col gap-4">
              <label className="text-white text-sm font-medium">
                Ce alte instrumente ți-ar plăcea să încerci? (opțional)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {otherInstruments.map((instrument) => (
                  <label
                    key={instrument.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      selectedOtherInstruments.includes(instrument.name)
                        ? 'bg-white/20 border-2 border-white'
                        : 'bg-white/10 border-2 border-transparent hover:bg-white/15'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedOtherInstruments.includes(instrument.name)}
                      onChange={() => handleInstrumentToggle(instrument.name)}
                      className="w-4 h-4 text-green-500 bg-white rounded focus:ring-green-500 focus:ring-2"
                    />
                    <div className="flex items-center gap-2">
                      <img 
                        src={instrument.instrumentImage} 
                        alt={instrument.name}
                        className="w-6 h-6 object-contain"
                      />
                      <span className="text-white text-sm font-medium">{instrument.name}</span>
                    </div>
                  </label>
                ))}
              </div>
              
              {/* Selected instruments summary */}
              {selectedOtherInstruments.length > 0 && (
                <div className="bg-white/10 p-3 rounded-lg">
                  <p className="text-white text-sm">
                    <strong>Instrumente selectate:</strong> {selectedOtherInstruments.join(', ')}
                  </p>
                </div>
              )}
            </div>

            {/* Checkbox + text */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" required />
              <p>
                <span className="text-red-300">*</span>Prin completarea acestui formular, ești de acord cu{" "}
                <a href="#" className="underline text-white font-semibold">
                  Termeni și Condiții
                </a>{" "}
                Armonia Academy
              </p>
            </div>

            {/* Button */}
            <div>
              <button type="submit"
                className="bg-white text-purple-primary font-bold px-10 py-3 rounded-full text-lg transition hover:scale-105"
              >
                Mă înscriu
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[700px] lg:h-[600px]"></div>
    </div>
  );
}