import { useState } from 'react';

export default function Inscrieri() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    varsta: '',
    sediu: '',
    acceptTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
            Înscriere Armonia Academy
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
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon"
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Vârsta"
                      className="w-full px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-secondary"
                      required
                    />
                  </div>

                  {/* Sedii selection */}
                  <div className="space-y-3">
                    <p className="font-medium text-gray-700 pl-4">Alege sediul:</p>
                    <div className="space-y-2">
                      {[
                        "Sediul Muncii - Decebal (Str. Trifoi nr.5)",
                        "Sediul Obor - Moșilor (Str. Ion Maiorescu 37)",
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
                      className="bg-green-secondary text-white font-semibold px-8 py-3 rounded-full 
                        transition hover:bg-teal-500 active:scale-[0.98]"
                    >
                      ÎNSCRIERE Program Armonia
                    </button>
                  </div>
                </form>
              </div>

              {/* Right column - Course list */}
              <div>
                <h2 className="font-saint text-2xl md:text-3xl text-blue-text-primary mb-6">Armonia Academy:</h2>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="font-semibold text-gray-700 mb-4">Programe disponibile:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
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
                    ].map((curs, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-secondary"></div>
                        <span className="text-sm text-gray-600">{curs}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-6 bg-yellow-50 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="/images/chat_bot.png" alt="" className="w-6 h-6" />
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
