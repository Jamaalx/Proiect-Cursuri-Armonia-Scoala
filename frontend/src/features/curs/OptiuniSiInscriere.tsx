import { useState } from 'react';
import { useGetCoursesStore, Course } from '../../store/armoniaDataStore';
import { 
  sendCourseRegistrationEmail, 
  CourseRegistrationData, 
  showNotification,
  isValidEmail,
  isValidPhoneNumber 
} from '../../services/emailService';

export default function OptiuniSiInscriere({ card }: { card: Course }) {
  // Set this to true when you want to enable the payment options
  const showPaymentOptions = false;
  const courses = useGetCoursesStore((state) => state.courses);
  
  // Form state
  const [selectedOtherInstruments, setSelectedOtherInstruments] = useState<string[]>([]);
  const [formData, setFormData] = useState<CourseRegistrationData>({
    nume: "",
    prenume: "",
    telefon: "",
    email: "",
    varsta: "",
    selectedCourse: card.name,
    selectedOtherInstruments: [],
    acceptTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Get other instruments (exclude the current one)
  const otherInstruments = courses.filter(course => course.id !== card.id);
  
  const handleInstrumentToggle = (instrumentName: string) => {
    setSelectedOtherInstruments(prev => {
      const updated = prev.includes(instrumentName)
        ? prev.filter(name => name !== instrumentName)
        : [...prev, instrumentName];
      
      setFormData(prevForm => ({
        ...prevForm,
        selectedOtherInstruments: updated
      }));
      
      return updated;
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.nume.trim()) {
      showNotification('error', 'Numele este obligatoriu!');
      return false;
    }

    if (!formData.prenume.trim()) {
      showNotification('error', 'Prenumele este obligatoriu!');
      return false;
    }

    if (!formData.email.trim()) {
      showNotification('error', 'Email-ul este obligatoriu!');
      return false;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('error', 'Email-ul nu este valid!');
      return false;
    }

    if (!formData.telefon.trim()) {
      showNotification('error', 'Telefonul este obligatoriu!');
      return false;
    }

    if (!isValidPhoneNumber(formData.telefon)) {
      showNotification('error', 'Numărul de telefon nu este valid! (Ex: 0722123456 sau +40722123456)');
      return false;
    }

    if (!formData.varsta.trim()) {
      showNotification('error', 'Vârsta este obligatorie!');
      return false;
    }

    const age = parseInt(formData.varsta);
    if (isNaN(age) || age < 3 || age > 99) {
      showNotification('error', 'Vârsta trebuie să fie între 3 și 99 de ani!');
      return false;
    }

    if (!formData.acceptTerms) {
      showNotification('error', 'Trebuie să acceptați termenii și condițiile!');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const success = await sendCourseRegistrationEmail(formData);
      
      if (success) {
        showNotification('success', 'Înscrierea a fost trimisă cu succes! Vă vom contacta în curând pentru detalii.');
        // Reset form
        setFormData({
          nume: "",
          prenume: "",
          telefon: "",
          email: "",
          varsta: "",
          selectedCourse: card.name,
          selectedOtherInstruments: [],
          acceptTerms: false,
        });
        setSelectedOtherInstruments([]);
      } else {
        showNotification('error', 'A apărut o eroare la trimiterea înscrierii. Încercați din nou.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showNotification('error', 'A apărut o eroare la trimiterea înscrierii. Încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
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
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {/* Nume + Prenume */}
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                name="nume"
                value={formData.nume}
                onChange={handleInputChange}
                placeholder="Nume *"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
                required
                disabled={isSubmitting}
              />
              <input
                type="text"
                name="prenume"
                value={formData.prenume}
                onChange={handleInputChange}
                placeholder="Prenume *"
                className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Telefon + Email */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleInputChange}
                  placeholder="Telefon * (Ex: 0722123456)"
                  className="w-full px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  className="w-full px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Vârstă */}
            <input
              type="number"
              name="varsta"
              value={formData.varsta}
              onChange={handleInputChange}
              placeholder="Vârstă *"
              min="3"
              max="99"
              className="w-full px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-white"
              required
              disabled={isSubmitting}
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
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedOtherInstruments.includes(instrument.name)}
                      onChange={() => !isSubmitting && handleInstrumentToggle(instrument.name)}
                      className="w-4 h-4 text-green-500 bg-white rounded focus:ring-green-500 focus:ring-2"
                      disabled={isSubmitting}
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
              <input 
                type="checkbox" 
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="mt-1" 
                required 
                disabled={isSubmitting}
              />
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
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`font-bold px-10 py-3 rounded-full text-lg transition-all duration-200 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-white text-purple-primary hover:bg-gray-100 hover:scale-105 active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    Se înscrie...
                  </span>
                ) : (
                  'Mă înscriu'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[700px] lg:h-[600px]"></div>
    </div>
  );
}