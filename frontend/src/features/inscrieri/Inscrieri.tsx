import { useState } from 'react';

type FormData = {
  nume: string;
  email: string;
  telefon: string;
  varsta: string;
  sediu: string;
  selectedCourses: string[];
  acceptTerms: boolean;
};

export default function Inscrieri() {
  const [formData, setFormData] = useState<FormData>({
    nume: '',
    email: '',
    telefon: '',
    varsta: '',
    sediu: '',
    selectedCourses: [],
    acceptTerms: false
  });

  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  const availableCourses = [
    "Pian",
    "Canto", 
    "Chitară Clasică",
    "Chitară Acustică",
    "Chitară Electrică",
    "Chitară Bass",
    "Acordeon",
    "Ukulele",
    "Mandolină",
    "Vioară",
    "Tobe",
    "Saxofon",
    "Clarinet",
    "Flaut",
    "Teorie și Solfegiu",
    "Armonie",
    "Actorie",
    "Dansuri",
    "Mandala",
    "Școala de Vară"
  ];

  const handleCourseToggle = (course: string) => {
    setFormData(prev => ({
      ...prev,
      selectedCourses: prev.selectedCourses.includes(course)
        ? prev.selectedCourses.filter(c => c !== course)
        : [...prev.selectedCourses, course]
    }));
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-20">
      {/* Top decorative elements */}
      <div className="hidden md:block absolute top-[200px] lg:top-[250px] xl:top-[300px] 2xl:top-[350px] 
        scale-75 xl:scale-100 -left-5 opacity-40">
        <img src="/images/right-half-circle.png" alt="" />
      </div>
      <div className="hidden md:block absolute right-0 top-[200px] lg:top-[250px] xl:top-[300px] 2xl:top-[350px]
        scale-75 xl:scale-100 opacity-40">
        <img src="/images/footer-air-scaleddown.png" alt="" />
      </div>

      <div className="md:container md:mx-auto px-6 pt-32 pb-10">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-green-secondary text-white tracking-wider text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Înscriere Armonia Academy!
          </div>
          <h1 className="font-saint text-4xl sm:text-5xl md:text-6xl mb-6">Începe călătoria ta spre excelență</h1>
          <p className="text-gray-600">Cu un singur click poți lua legătura cu noi. Tot ce trebuie să faci este să completezi formularul și să apeși pe butonul ÎNSCRIERE pentru a începe drumul tău în domeniul ales.</p>
        </div>

        {/* Main form section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Left column - Form */}
              <div className="space-y-6">
                <h2 className="font-saint text-2xl md:text-3xl text-blue-text-primary mb-6">Formular înscriere program:</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Nume și Prenume"
                      value={formData.nume}
                      onChange={(e) => handleInputChange('nume', e.target.value)}
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon"
                      value={formData.telefon}
                      onChange={(e) => handleInputChange('telefon', e.target.value)}
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Vârsta"
                      value={formData.varsta}
                      onChange={(e) => handleInputChange('varsta', e.target.value)}
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>

                  {/* Course selection dropdown */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 pl-4 mb-2">
                      Selectează cursurile dorite: *
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                        className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary text-left bg-white flex items-center justify-between"
                      >
                        <span className={formData.selectedCourses.length === 0 ? 'text-gray-400' : 'text-gray-700'}>
                          {formData.selectedCourses.length === 0 
                            ? 'Alege unul sau mai multe cursuri...' 
                            : `${formData.selectedCourses.length} cursuri selectate`
                          }
                        </span>
                        <svg 
                          className={`w-5 h-5 transition-transform ${showCourseDropdown ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {showCourseDropdown && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-2xl shadow-lg max-h-60 overflow-y-auto">
                          {availableCourses.map((course, index) => (
                            <label 
                              key={index} 
                              className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl"
                            >
                              <input
                                type="checkbox"
                                checked={formData.selectedCourses.includes(course)}
                                onChange={() => handleCourseToggle(course)}
                                className="text-green-secondary focus:ring-green-secondary rounded"
                              />
                              <span className="text-gray-700">{course}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Selected courses display */}
                    {formData.selectedCourses.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {formData.selectedCourses.map((course, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                          >
                            {course}
                            <button
                              type="button"
                              onClick={() => handleCourseToggle(course)}
                              className="ml-1 text-green-500 hover:text-green-700"
                            >
                              ×
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Sedii selection */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-700 pl-4">Alege sediul:</p>
                    <div className="space-y-2">
                      {[
                        "Sediul Gara de Nord (Str. Vespasian 34)",
                        "Sediul Fainari (Str. Episcop Radu nr. 63)",
                        "Sediul Mihai Bravu (Str. Stirului 14-16)",
                        "Sediul Piata Progresul (Str. Tufisului Nr. 14)"
                      ].map((sediu, index) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer pl-4">
                          <input
                            type="radio"
                            name="sediu"
                            value={sediu}
                            checked={formData.sediu === sediu}
                            onChange={(e) => handleInputChange('sediu', e.target.value)}
                            className="text-green-secondary focus:ring-green-secondary"
                          />
                          <span className="text-sm text-gray-600">{sediu}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Terms checkbox */}
                  <div className="flex items-start gap-2 pl-4">
                    <input
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                      className="mt-1.5 text-green-secondary focus:ring-green-secondary"
                      required
                    />
                    <p className="text-sm text-gray-600">
                      Am citit și sunt de acord cu{" "}
                      <a href="#" className="text-green-secondary underline">
                        Termenii și Condițiile
                      </a>
                    </p>
                  </div>

                  {/* Submit button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={formData.selectedCourses.length === 0}
                      className="bg-green-secondary text-white font-semibold px-8 py-3 rounded-full 
                        transition hover:bg-teal-500 active:scale-[0.98] disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      ÎNSCRIERE Program Armonia
                    </button>
                  </div>
                </form>
              </div>

              {/* Right column - Course list and info */}
              <div>
                <h2 className="font-saint text-2xl md:text-3xl text-blue-text-primary mb-6">Armonia Academy:</h2>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-700 mb-4">Programe disponibile:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {availableCourses.map((curs, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${
                          formData.selectedCourses.includes(curs) ? 'bg-green-secondary' : 'bg-gray-300'
                        }`}></div>
                        <span className={`text-sm ${
                          formData.selectedCourses.includes(curs) ? 'text-green-700 font-medium' : 'text-gray-600'
                        }`}>{curs}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-6 bg-yellow-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎯</span>
                    <p className="font-semibold text-gray-700">EVALUAREA ESTE GRATUITĂ!</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    În cel mai scurt timp vei fi contactat de echipa noastră.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}