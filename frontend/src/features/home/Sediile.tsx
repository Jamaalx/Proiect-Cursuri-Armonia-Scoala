export default function Sediile() {
  const sediiData = [
    {
      nume: "Sediul Obor\nMoșilor",
      imagineSediu: "./images/sediu-green.png",
      pin: "./images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      telefon: "+ 40738318373",
      email: "contact@scoalaarmona.ro",
      adresa: "Strada Profesor Ion Maiorescu 37, Sector 2, Bucuresti",
      zona: "Zona Obor - Mosilor, vis-a-vis de Scoala 50 Maica Domnului",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "./images/green-human.png"
    },
    {
      nume: "Sediul Gara\nde Nord",
      imagineSediu: "./images/sediu-green.png",
      pin: "./images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      telefon: "+ 40273092740",
      email: "contact@scoalaarmona.ro",
      adresa: "Strada Vespasian nr.34, Sector 1,\nBucuresti",
      zona: "Zona gara de Nord vis-a-vis de Gradina\nZu-Zum",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "./images/green-human.png"
    },
    {
      nume: "Sediul Mihai Bravu",
      imagineSediu: "./images/isolation_mode.png",
      pin: "./images/yellow-pin.png",
      culoareText: "text-[#FFD46C]",
      telefon: "+ 40723092740",
      email: "mihaibravu@scoalaarmona.ro",
      adresa: "Strada Stirului nr.14-16, Sector 3,\nBucuresti",
      zona: "Zona Mihai Bravu, vis-a-vis de Magazinul Mathaus\nZu-Zum",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "./images/yellow-human.png"
    },
    {
      nume: "Sediul Piata\nProgresul",
      imagineSediu: "./images/purple-hamburger.png",
      pin: "./images/purple-pin.png",
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
      icon: "./images/purple-human.png"
    },
    {
      nume: "Sediul Premium Atomic Academy",
      customText: "text-4xl",
      imagineSediu: "./images/purple-hat.png",
      pin: "./images/purple-pin.png",
      culoareText: "text-purple-primary",
      telefon: "+ 40736924645",
      adresa: "Cladirea Cocor, Bdul Ion C. Bratianu nr.29-33",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "./images/purple-human.png"
    },
  ];

  return (
    <div className="relative">
      <div className="absolute right-0 -top-40">
        <img src="./images/cercuri.png" alt="" />
      </div>

      <div className="md:container mx-auto md:mt-10 gap-10 flex mb-10 justify-center flex-wrap">
        {sediiData.map((sediu, index) => (
          <div
            key={index}
            className="bg-white/70 shadow-lg rounded-xl p-8 flex flex-col w-full md:max-w-80 lg:max-w-96 min-h-[560px] relative"
          >
            <div className="flex items-center justify-between gap-4 md:gap-16 mb-10">
              <div>
                <img src={sediu.imagineSediu} alt="" />
              </div>
              <div className="flex gap-2 border rounded-full items-center py-3 px-4">
                <div>
                  <img src="./images/google-pin.png" alt="" />
                </div>
                <p className="m-0 text-blue-500 font-semibold tracking-wider">Direction</p>
              </div>
            </div>

            <h2 className={`${sediu.customText || "text-5xl"} font-saint mb-2 ${sediu.culoareText}`}>
              {sediu.nume.split("\n").map((line, i) => (
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

              {sediu.program.map((linie, idx) => (
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
    </div>
  );
}