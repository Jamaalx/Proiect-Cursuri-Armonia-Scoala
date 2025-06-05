
interface OferteType {
  title: string,
  price: string,
  color: "green" | "yellow" | "red" | "blue" | "purple" | "pink" | string;
  features: string[];
}

const EmilServiceComponent = () => {
  const oferteSiteuri: OferteType[] = [
    {
      title: "Esențial",
      price: "800€ TVA inclus",
      color: "green",
      features: [
        "Pagină unică (OnePage)",
        "Design responsive personalizat",
        "Formular de contact, hartă Google Maps",
        "SEO de bază (etichete meta, titluri)",
        "Livrare: 5–7 zile lucrătoare",
        "Render Starter: 7€/lună",
        "Mentenanță: 20€/lună",
        "Ajutor pentru domeniu (~10–15€/an)",
      ],
    },
    {
      title: "Standard",
      price: "1 800€ TVA inclus",
      color: "yellow",
      features: [
        "Site de prezentare (5–10 pagini)",
        "Design complet personalizat",
        "Blog, galerie, formulare avansate",
        "SEO complet on-page",
        "CMS simplu pentru modificări de conținut",
        "Livrare: 2–3 săptămâni",
        "Render Standard: 25€/lună",
        "Mentenanță: 30€/lună",
        "Ajutor pentru domeniu (~10–15€/an)",
      ],
    },
    {
      title: "Premium",
      price: "De la 3 500€ TVA inclus",
      color: "red",
      features: [
        "Site e-commerce sau aplicație la comandă",
        "UI/UX profesional și personalizat",
        "Plată online, coș, spațiu client",
        "SEO avansat cu structurare semantică",
        "CMS avansat cu panou de control",
        "Livrare: 4–6 săptămâni",
        "Render Pro: 85€/lună",
        "MongoDB Atlas: 9–12€/lună",
        "Mentenanță: 40€/lună",
        "Ajutor pentru domeniu (~10–15€/an)",
      ],
    },
  ];

  const oferteMeniuri = [
    {
      title: "Pachet Esențial",
      price: "300€ TVA inclus",
      color: "blue",
      features: [
        "Creare video tip slide cu până la 3 pagini de meniu",
        "Design simplu realizat pe baza materialelor oferite de client",
        "Optimizat pentru afișaj TV în buclă continuă",
        "Format Full HD (1080p, MP4) gata de utilizare",
        "Livrare în 4–5 zile",
      ],
    },
    {
      title: "Pachet Confort",
      price: "550€ TVA inclus",
      color: "purple",
      features: [
        "Creare video slide cu până la 5 pagini de meniu",
        "Design personalizat creat de noi pe baza informațiilor clientului",
        "Animații simple și tranziții fluide între pagini",
        "Video Full HD pregătit pentru ecran TV",
        "Livrare în 6–8 zile",
      ],
    },
    {
      title: "Pachet Premium",
      price: "900€ TVA inclus",
      color: "pink",
      features: [
        "Video slide cu până la 8 pagini de meniu",
        "Design și animații avansate, inclusiv crearea tuturor materialelor grafice",
        "Tranziții dinamice și evidențierea preparatelor",
        "Suport și ghid pentru instalare și actualizare",
        "Livrare în 10–12 zile lucrătoare",
      ],
    },
  ];

  type CardGridProps = {
    data: OferteType[];
    title: string;
  };

  const CardGrid = ({ data, title }: CardGridProps) => (
    <section className="py-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">{title}</h2>
      <div className="grid gap-8 md:grid-cols-3 px-6 max-w-7xl mx-auto">
        {data.map((item) => {
          let bgColor = "bg-white";
          switch (item.color) {
            case "green":
              bgColor = "bg-green-50";
              break;
            case "yellow":
              bgColor = "bg-yellow-50";
              break;
            case "red":
              bgColor = "bg-red-50";
              break;
            case "blue":
              bgColor = "bg-blue-50";
              break;
            case "purple":
              bgColor = "bg-purple-50";
              break;
            case "pink":
              bgColor = "bg-pink-50";
              break;
            default:
              bgColor = "bg-white";
          }
          return (
            <div
              key={item.title}
              className={`border-2 border-${item.color}-400 rounded-2xl shadow-md p-6 ${bgColor} hover:shadow-xl transition`}
            >
              <h3 className={`text-${item.color}-700 text-xl font-semibold mb-2`}>
                {item.title}
              </h3>
              <p className={`text-${item.color}-800 text-2xl font-bold mb-4`}>
                {item.price}
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100">
      <CardGrid data={oferteSiteuri} title="Creare Site-uri Web" />
      <CardGrid data={oferteMeniuri} title="Meniuri Video pentru Restaurante & Fast-Food" />
    </div>
  );
};

export default EmilServiceComponent;
