import { create } from 'zustand';

export type Course = {
  id: number;
  name: string;
  category: string;
  instrumentImage: string;
  pin: string;
  culoareText: string;
  humanIcon: string;
  buttonColor1: string;
  buttonColor2: string;
  customText: string;
  pretFull: string;
  pretDiscounted: string;
  descriere: string;
  ceOsaInveti: string;
  profesor: {
    nume: string;
    experienta: string;
    descriere: string;
  };
  ceriinte: {
    val1: string;
    val2: string;
    val3: string;
    val4: string;
  };
  cuiISeadreseaza: {
    val1: string;
    val2: string;
    val3: string;
    val4?: string;
  };
  curicula: {
    ceOSaInveti: string;
  };
  sesiuni: string;
  capitoleCurs: {
    capitole: string[];
  };
  optiuniDeplata: {
    tipuri: {
      integral: string;
    };
    optiuniDePlataInRate: {
      opt1: {
        descriere: string;
        pret: string;
      };
      opt2: {
        descriere: string;
        pret: string;
      };
    };
  };
};
export type BlogPost = {
  id: string;
  photoUrl: string;
  photosUrls?: { photo: string; }[];
  title: string;
  date: string;
  author: string;
  categoria: string;
  keywords: string[];
  descriere: {
    title: string;
    continut1: string;
    subtitlu1: string;
    pozaDescriere: string;
    continut2: string;
  };
};
export type Teacher = {
  id: number;
  name: string;
  role: string;
  imagineTeacher: string;
  locatie: string;
  email: string;
  website: string;
  descriereScurta: string;
  descriereCompleta: string;
  educatie: string;
  expertiza: string[];
  realizari: string[];
};
export type Sediu = {
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
  customText?: string,
};

type TeacherStore = {
  teachers: Teacher[];
};
type CourseStore = {
  courses: Course[];
};
type BlogsStore = {
  blogs: BlogPost[];
};
type SediiStore = {
  sediiData: Sediu[];
};

export const useGetCoursesStore = create<CourseStore>(() => ({
  courses: [
    {
      id: 1,
      name: "Pian",
      category: "sound",
      instrumentImage: "/images/pian.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Descoperă universul fascinant al pianului la Armonia Academy! Pianul este considerat regele instrumentelor și oferă cele mai complete fundamente muzicale. Cursurile noastre sunt adaptate pentru toate vârstele și nivelurile, de la primele melodii simple până la interpretări complexe ale marilor compozitori. Profesorii noștri experimentați te vor ghida în dezvoltarea tehnică, interpretativă și muzicalității necesare pentru a deveni un pianist acomplinit. Învață să explorezi întreaga gamă expresivă a pianului, de la delicatețea unei balade la puterea unei simfonii.",
      ceOsaInveti: "Tehnica fundamentală: Poziția corectă, digitația și coordonarea mâinilor Citirea notelor: Cheia de SOL și FA, armuri, ritmuri complexe Repertoriu variat: Clasic (Bach, Chopin, Mozart), jazz, pop, muzică contemporană Pedalarea: Tehnici de utilizare a pedalelor pentru expresivitate Improvizația: Dezvoltarea creativității și spontaneității muzicale Acompaniamentul: Susținerea vocii sau a altor instrumente Teoria muzicală: Înțelegerea armoniei, scalelor și structurilor muzicale",

      profesor: {
        nume: "Ana Maria Scrioșteanu",
        experienta: "peste 10 ani experiență combinată",
        descriere: "Echipa noastră de profesori de pian combină experiența academică cu pasiunea pentru predare. Absolvenți ai UNMB cu specializări în interpretare și compoziție, oferă o abordare completă care îmbină tehnica clasică cu stilurile moderne."
      },
      ceriinte: {
        val1: "Fără experiență necesară - începem cu fundamentele absolute",
        val2: "Vârsta minimă de 5 ani pentru dezvoltarea coordinării",
        val3: "Dedicare pentru exersare regulată acasă",
        val4: "Disponibilitate pentru lecții săptămânale constante"
      },
      cuiISeadreseaza: {
        val1: "Incepatori",
        val2: "7 ani si peste",
        val3: "Dezvoltarea abilitatilor muzicale si a creativitatii",
        val4: "Intermediari"
      },
      curicula: {
        ceOSaInveti: "Tehnici de bază pentru interpretarea la pian, noțiuni de teorie muzicală și dezvoltarea urechii muzicale."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în pian și poziția corectă",
          "Tehnici de bază și citirea notelor",
          "Interpretare și creativitate",
          "Teorie muzicală și armonie"
        ]
      },
      optiuniDeplata: {
        tipuri:
        {
          integral: "Plata integrala",
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "2 rate fara dobanda.",
            pret: "111"
          },
          opt2: {
            descriere: "12 rate fara dobanda.",
            pret: "3212"
          }
        }
      }
    },
    {
      id: 2,
      name: "Tobe",
      category: "sound",
      instrumentImage: "/images/tobe.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Eliberează-ți energia și descoperă puterea ritmului cu cursurile de tobe de la Armonia Academy! Tobele sunt inima oricărei formații muzicale și oferă una dintre cele mai captivante experiențe muzicale. De la beaturi simple la pattern-uri complexe, te invităm să explorezi universul percuției într-o sală special amenajată, alături de un profesor cu experiență bogată în interpretare și producție muzicală. Cursurile noastre acoperă toate stilurile - de la pop și rock la jazz și metal - și sunt adaptate pentru toate vârstele și nivelurile, oferind o experiență completă și interactivă.",
      ceOsaInveti: "Tehnica fundamentală: Poziția corectă, ținerea băților, coordonarea membrelor Rudimente de bază: Paradiddle, flam, roll și alte tehnici esențiale Pattern-uri ritmice: Pentru toate stilurile muzicale (rock, pop, jazz, funk, latin) Citirea notației: Partituri pentru percuție și chart-uri Coordonarea: Independența membrelor și poliritmuri Dinamica și expresivitate: Control asupra volumului și intensității Acompaniament live: Integrarea cu alte instrumente (pian, chitară) Tehnici avansate: Ghost notes, fills creativi, subdiviziuni complexe",

      profesor: {
        nume: "Aurel Ciucur",
        experienta: "peste 5 ani",
        descriere: "Profesor pasionat și producător muzical cu peste 5 ani de experiență în predare și interpretare scenică. Aurel combină cunoștințele teoretice cu experiența practică în trupe, oferind o perspectivă completă asupra muzicii moderne și a producției muzicale."
      },
      ceriinte: {
        val1: "Fără experiență necesară - începem cu fundamentele absolute",
        val2: "Vârsta minimă de 3 ani pentru dezvoltarea coordinării",
        val3: "Răbdarea pentru dezvoltarea treptată a tehnicii",
        val4: "Dedicare pentru exersare și progres",

      },
      cuiISeadreseaza: {
        val1: "Incepatori",
        val2: "7 ani si peste",
        val3: "Dezvoltarea abilitatilor muzicale si a creativitatii",
        val4: "Intermediari"
      },
      curicula: {
        ceOSaInveti: "Tehnici de baza pentru interpretarea la pian, notiuni de teorie muzicala si dezvoltarea urechii muzicale."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere in pian",
          "Tehnici de baza",
          "Interpretare si creativitate",
          "Teorie muzicala"
        ]
      },
      optiuniDeplata: {
        tipuri:
        {
          integral: "Plata integrala",
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "2 rate fara dobanda.",
            pret: "111"
          },
          opt2: {
            descriere: "12 rate fara dobanda.",
            pret: "3212"
          }
        }
      }
    },
    {
      id: 3,
      name: "Chitară",
      category: "sound",
      instrumentImage: "/images/green-guitar.png",
      pin: "/images/green-pin.png",
  culoareText: "text-green-secondary-rgb",
  humanIcon: "/images/green-human.png",
  buttonColor1: "bg-green-secondary",
  buttonColor2: "bg-teal-400",
  customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
  pretFull: "750 RON",
  pretDiscounted: "520 RON",
  descriere: "Descoperă universul fascinant al chitarei cu cursurile noastre de la Armonia Academy! Chitara este unul dintre cele mai populare și versatile instrumente muzicale, perfectă pentru orice stil - de la clasic la rock, pop și folk. Cursurile noastre sunt adaptate pentru toate vârstele și nivelurile, de la primii acorduri până la tehnici avansate de interpretare. Profesorii noștri experimentați te vor ghida să descoperi frumusețea acestui instrument minunat, dezvoltându-ți atât tehnica cât și pasiunea pentru muzică.",
  ceOsaInveti: "Acorduri fundamentale: Majore, minore și septimă pentru toate tonalitățile Tehnici de strumming: Pattern-uri ritmice pentru diverse stiluri muzicale Fingerpicking: Tehnici de degete pentru melodii și arpegii Citirea tablaturilor: Sistemul de notație specific chitarei Scări muzicale: Majore, minore, pentatonice pentru improvizație Barré și tehnici avansate: Pentru acorduri complexe și tranziții fluide Repertoriu variat: De la piese clasice la hits-uri contemporane Acompaniament vocal: Cântatul și însoțirea la chitară Tehnici de chitară electrică: Pentru cei interesați de stilurile rock și blues",
  profesor: {
    nume: "Matei Alexandru",
    experienta: "peste 15 ani experiență combinată",
    descriere: "Echipa noastră de profesori de chitară aduce o experiență vastă din diferite domenii muzicale - de la clasic la metal, jazz și folk românesc. Fiecare profesor își adaptează stilul de predare la personalitatea și obiectivele elevului."
  },
        ceriinte: {
    val1: "Fără experiență necesară - de la primul acord",
    val2: "Vârsta minimă de 7 ani pentru mânuirea instrumentului",
    val3: "Exercițiu regulat pentru dezvoltarea dexterității",
    val4: "Răbdare pentru formarea calusurilor pe degete"
  },
  cuiISeadreseaza: {
    val1: "Incepatori",
    val2: "7 ani si peste",
    val3: "Dezvoltarea abilitatilor muzicale si a creativitatii",
    val4: "Intermediari"
  },
  curicula: {
    ceOSaInveti: "Acorduri de bază, tehnici de chitară și interpretarea pieselor preferate."
  },
  sesiuni: "4-5 sesiuni",
  capitoleCurs: {
    capitole: [
      "Introducere în chitară și acorduri de bază",
      "Tehnici de picking și strumming",
      "Scări și improvizație",
      "Repertoriu și interpretare"
    ]
  },
  optiuniDeplata: {
    tipuri: {
      integral: "Plata integrala",
    },
    optiuniDePlataInRate: {
      opt1: {
        descriere: "2 rate fara dobanda.",
        pret: "111"
      },
      opt2: {
        descriere: "12 rate fara dobanda.",
        pret: "3212"
      }
    }
  }
  },
    {
      id: 4,
      name: "Canto",
      category: "sound",
      instrumentImage: "/images/canto.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Descoperă puterea vocii tale cu cursurile de canto de la Armonia Academy! Vocea este cel mai personal și expresiv instrument muzical, iar prin cursurile noastre înveți să o folosești corect, sănătos și artistic. De la tehnica respirației la interpretarea cu emoție, profesorii noștri specializați în canto clasic, popular și jazz te vor ghida să îți descoperi și să îți dezvolți talentul vocal.",
      ceOsaInveti: "Tehnica respirației: Respirația diafragmatică și controlul suflului Poziția corectă: Postura și relaxarea musculaturii Tehnica vocală: Emisie, rezonanță, registre vocale Dicția și articulația: Claritatea textului și pronunția Intonația: Cântatul curat și controlul înălțimilor Interpretarea: Transmiterea emoțiilor prin voce Stiluri vocale: Clasic, popular, jazz, musical Acompaniament: Cântatul cu instrumentul sau playback Repertoriu variat: Adaptat vârstei și stilului preferat",
      profesor: {
        nume: "Ana Maria Scrioșteanu",
        experienta: "peste 12 ani experiență combinată",
        descriere: "Profesoarele noastre de canto sunt absolventele UNMB cu specializări în canto clasic și popular. Cu experiență în spectacole și concerte, oferă o pregătire completă care combină tehnica academică cu interpretarea modernă."
      },
      ceriinte: {
        val1: "Fără experiență necesară - de la primele sunete",
        val2: "Vârsta minimă de 5 ani pentru dezvoltarea vocii",
        val3: "Exercițiu vocal regulat pentru dezvoltare",
        val4: "Deschidere pentru exprimarea emoțiilor prin voce"
      },
      cuiISeadreseaza: {
        val1: "Copii cu talent vocal natural și dornici să învețe",
        val2: "Adolescenți pasionați de muzica populară și pop",
        val3: "Adulți care vor să își dezvolte vocea și încrederea",
        val4: "Viitori interpreți și artiști vocali"
      },
      curicula: {
        ceOSaInveti: "Tehnica vocală, respirație corectă și interpretarea pieselor vocale."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în canto și tehnica respirației",
          "Tehnica vocală și emisie corectă",
          "Interpretare și expresivitate",
          "Repertoriu și stiluri vocale"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    },
    {
      id: 5,
      name: "Vioară",
      category: "sound",
      instrumentImage: "/images/vioara.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Descoperă eleganța și frumusețea viorii cu cursurile noastre de la Armonia Academy! Vioara este unul dintre cele mai expresive instrumente din familia corzilor, oferind o paletă emoțională unică și o sonoritate captivantă. Cu o profesoară cu peste 20 de ani de experiență în Orchestra Radio, învățământul viorii la Armonia combină rigoarea interpretării clasice cu bucuria de a cânta.",
      ceOsaInveti: "Tehnica fundamentală: Poziția corectă a viorii și a arcușului Tehnica mâinii stângi: Fingering, vibrato, shifting Tehnica arcușului: Detaché, legato, staccato, spiccato Intonația: Cântatul curat și dezvoltarea auzului Citirea notației: Partituri pentru vioară în cheia de sol Scări și arpegii: Exerciții tehnice pentru dexteritate Repertoriu clasic: Etude, piese și concerte adaptate nivelului Interpretarea: Frazare, dinamică și expresivitate Muzica de cameră: Colaborarea cu alte instrumente",
      profesor: {
        nume: "Mirela Popa",
        experienta: "peste 20 ani",
        descriere: "Absolventă a secției de interpretare muzicală din cadrul UNMB, cu o experiență vastă de peste 20 de ani ca violonistă în Orchestra Radio. Această experiență se reflectă în lecții adaptate nivelului fiecărui elev, punând accent pe rigoarea interpretării și bucuria de a cânta."
      },
      ceriinte: {
        val1: "Fără experiență necesară - începem cu fundamentele",
        val2: "Vârsta minimă de 6 ani pentru mânuirea instrumentului",
        val3: "Răbdare pentru dezvoltarea intonației corecte",
        val4: "Exercițiu zilnic pentru progresul tehnic"
      },
      cuiISeadreseaza: {
        val1: "Copii atrași de muzica clasică și sonorii rafinate",
        val2: "Adolescenți care vor să facă parte din orchestre",
        val3: "Adulți pasionați de cultura și arta clasică",
        val4: "Viitori muzicieni de muzică clasică și de cameră"
      },
      curicula: {
        ceOSaInveti: "Tehnica viorii, intonație corectă și interpretarea repertoriului clasic."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în vioară și poziția corectă",
          "Tehnica arcușului și a mâinii stângi",
          "Intonație și citirea notelor",
          "Repertoriu și interpretare muzicală"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    },
    {
      id: 6,
      name: "Saxofon",
      category: "sound",
      instrumentImage: "/images/saxofon.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Explorează sonoritatea unică și versatilitatea saxofonului cu cursurile noastre de la Armonia Academy! Saxofonul este instrumentul perfect care îmbină eleganța cu modernitatea, fiind esențial în jazz, muzica clasică, rock și muzica populară. Cu un profesor absolvent al UNMB și cu experiență în orchestre simfonice și formații diverse, cursurile noastre te introduc în lumea fascinantă a saxofonului.",
      ceOsaInveti: "Tehnica respirației: Control al suflului și respirația diafragmatică Embouchure: Poziția corectă a buzelor și danturii Tehnica suflului: Atacul, susținerea și încheierea sunetului Scări și arpegii: Pentru toate tonalitățile Citirea notației: Partituri pentru saxofon în diverse chei Tehnici expresive: Vibrato, glissando, bend Improvizația: Elemente de jazz și blues Repertoriu divers: Clasic, jazz, popular, muzică de cameră Colaborarea: Interpretare în ansambluri și orchestre",
      profesor: {
        nume: "Alexandru Mînzar",
        experienta: "absolvent UNMB",
        descriere: "Absolvent al Facultății de Muzică din UNMB cu licența și masterul în interpretare muzicală. Experiență bogată în proiecte diverse - de la orchestre simfonice la muzică de cameră și colaborări cu orchestre de folclor, oferind o perspectivă completă asupra diversității muzicale."
      },
      ceriinte: {
        val1: "Fără experiență necesară - începem cu respirația",
        val2: "Vârsta minimă de 9 ani pentru controlul respirației",
        val3: "Capacitatea de concentrare pentru tehnica suflului",
        val4: "Exercițiu regulat pentru dezvoltarea embouchure-ului"
      },
      cuiISeadreseaza: {
        val1: "Pasionați de jazz și muzica expresivă",
        val2: "Tineri atrași de sonoritățile moderne și rafinate",
        val3: "Viitori membri ai orchestrelor și Big Band-urilor",
        val4: "Muzicieni care vor să exploreze improvizația"
      },
      curicula: {
        ceOSaInveti: "Tehnica saxofonului, respirație corectă și interpretarea repertoriului diversificat."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în saxofon și tehnica respirației",
          "Embouchure și tehnica suflului",
          "Scări, arpegii și citirea notelor",
          "Repertoriu și improvizație"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    },
    {
      id: 7,
      name: "Mandolină",
      category: "sound",
      instrumentImage: "/images/mandolina.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Descoperă farmecul unic al mandolinei cu cursurile noastre de la Armonia Academy! Mandolina este un instrument fascinant care îmbină tradițiile muzicale europene cu sonoritățile moderne din bluegrass, jazz și blues. Cu un profesor autodidact pasionat și cu experiență internațională, vei explora diversitatea stilistică a acestui instrument captivant, de la Bach și Vivaldi la David Grisman și choro brazilian.",
      ceOsaInveti: "Tehnica fundamentală: Poziția corectă, mânuirea plectrului Acordarea și întreținerea: Îngrijirea instrumentului Tremolo: Tehnica caracteristică mandolinei Citirea tablaturilor și partiturilor Repertoriu divers: Clasic, bluegrass, jazz, blues, choro brazilian Improvizația: Dezvoltarea creativității muzicale Tehnici avansate: Ornamentații, variații stilistice Colaborarea: Acompaniament și interpretare în ansamblu Dezvoltarea auzului: Ascultare activă și analiză muzicală",
      profesor: {
        nume: "Codruț Andrei",
        experienta: "4 ani predare, 15+ ani experiență",
        descriere: "Profesor pasionat cu experiență internațională, incluzând locul 2 la European Blues Challenge din Toulouse (2013). Autodidact cu parcurs vast în diverse stiluri muzicale și experiență scenică în țară și străinătate, oferind o metodă de predare centrată pe apropierea de muzică și instrument."
      },
      ceriinte: {
        val1: "Fără experiență necesară - parcurs adaptat fiecărui nivel",
        val2: "Vârsta minimă de 8 ani pentru mânuirea instrumentului",
        val3: "Curiozitate pentru explorarea diverselor stiluri muzicale",
        val4: "Disponibilitate pentru dezvoltarea auzului muzical"
      },
      cuiISeadreseaza: {
        val1: "Pasionați de muzică tradițională și modernă",
        val2: "Muzicieni care vor să exploreze instrumente unice",
        val3: "Iubitori de bluegrass, jazz și blues",
        val4: "Persoane care apreciază diversitatea stilistică"
      },
      curicula: {
        ceOSaInveti: "Tehnica mandolinei, repertoriu diversificat și dezvoltarea creativității muzicale."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în mandolină și tehnica de bază",
          "Tremolo și tehnici caracteristice",
          "Repertoriu clasic și modern",
          "Improvizație și creativitate muzicală"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    },
    {
      id: 8,
      name: "Ukulele",
      category: "sound",
      instrumentImage: "/images/ukulele.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Alătură-te aventurii muzicale cu ukulele la Armonia Academy! Ukulele este instrumentul perfect pentru începători și pentru cei care vor să aducă bucurie și spontaneitate în muzică. Cu sonoritatea sa caldă și prietenoasă, ukulele este ideal pentru acompaniament vocal și interpretări relaxate. Cursurile noastre combină tehnica de bază cu plăcerea de a cânta, fiind perfecte pentru toate vârstele.",
      ceOsaInveti: "Tehnica fundamentală: Poziția corectă, strumming de bază Acorduri esențiale: Majore, minore, septimă Ritmuri populare: Pentru diverse stiluri muzicale Fingerpicking: Tehnici pentru melodii și arpegii Citirea tablaturilor: Sistem simplu și eficient Repertoriu variat: Pop, folk, hawaiian, indie Acompaniament vocal: Cântatul și însoțirea la ukulele Tehnici avansate: Percuție pe instrument, ornamentații Improvizația: Dezvoltarea creativității personale",
      profesor: {
        nume: "Codruț Andrei",
        experienta: "experiență combinată în diverse stiluri",
        descriere: "Echipa noastră de profesori de ukulele aduce o experiență variată din domenii muzicale diverse, de la jazz și blues la folk și muzica populară, oferind o abordare completă și relaxată a învățării ukulele."
      },
      ceriinte: {
        val1: "Fără experiență necesară - perfect pentru începători",
        val2: "Vârsta minimă de 5 ani - instrument ideal pentru copii",
        val3: "Dorința de a se distra și de a cânta",
        val4: "Deschidere pentru acompaniament vocal"
      },
      cuiISeadreseaza: {
        val1: "Începători care vor un instrument accesibil și distractiv",
        val2: "Copii și adolescenți - primul lor instrument muzical",
        val3: "Adulți care caută un hobby relaxant și social",
        val4: "Iubitori de muzică folk, pop și hawaiiană"
      },
      curicula: {
        ceOSaInveti: "Acorduri de bază la ukulele, ritmuri simple și acompaniament vocal."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în ukulele și acorduri de bază",
          "Ritmuri și strumming patterns",
          "Fingerpicking și melodii simple",
          "Acompaniament vocal și repertoriu"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    },
    {
      id: 9,
      name: "Bass",
      category: "sound",
      instrumentImage: "/images/bass.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Descoperă puterea fundamentală a bassului cu cursurile noastre de la Armonia Academy! Bassul este coloana vertebrală a oricărei formații muzicale, oferind fundația ritmică și armonică esențială. De la linii melodice simple la groove-uri complexe de funk și jazz, cursurile noastre te vor învăța să devii baza solidă a oricărei formații muzicale.",
      ceOsaInveti: "Tehnica fundamentală: Poziția corectă, fingering, plucking Acordarea și întreținerea: Îngrijirea instrumentului Linii de bass: Pentru diverse stiluri muzicale Citirea tablaturilor și partiturilor Groove și pocket: Dezvoltarea simțului ritmic Tehnici avansate: Slap, pop, tapping Walking bass: Specific jazzului și blues-ului Acompaniament: Colaborarea cu tobele și alte instrumente Improvizația: Creativitate în liniile de bass",
      profesor: {
        nume: "Lucian Sanda",
        experienta: "experiență vastă în trupe și proiecte",
        descriere: "Profesorii noștri de bass aduc experiența practică din diverse formații muzicale, de la jazz la metal, oferind o perspectivă completă asupra rolului bassului în muzica modernă."
      },
      ceriinte: {
        val1: "Fără experiență necesară - de la primele note",
        val2: "Vârsta minimă de 10 ani pentru mânuirea instrumentului",
        val3: "Simț ritmic de bază sau dorința de a-l dezvolta",
        val4: "Interes pentru munca în echipă muzicală"
      },
      cuiISeadreseaza: {
        val1: "Viitori membri de formații muzicale",
        val2: "Pasionați de rhythm section și groove",
        val3: "Muzicieni care vor să înțeleagă fundamentele muzicii",
        val4: "Iubitori de funk, jazz, rock și muzică electronică"
      },
      curicula: {
        ceOSaInveti: "Tehnica bass-ului, linii melodice și dezvoltarea groove-ului."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în bass și tehnica de bază",
          "Linii de bass și groove fundamentale",
          "Tehnici avansate și stiluri diverse",
          "Acompaniament și interpretare în formație"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    },
    {
      id: 10,
      name: "Clarinet",
      category: "sound",
      instrumentImage: "/images/clarinet.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      humanIcon: "/images/green-human.png",
      buttonColor1: "bg-green-secondary",
      buttonColor2: "bg-teal-400",
      customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
      pretFull: "750 RON",
      pretDiscounted: "520 RON",
      descriere: "Explorează versatilitatea și eleganța clarinelului cu cursurile noastre de la Armonia Academy! Clarinetul este unul dintre cele mai expresive instrumente de suflat, cu o gamă dinamică impresionantă și capacitatea de a interpreta atât muzica clasică, cât și jazz-ul modern. Cu un profesor în curs de absolvire la UNMB, cursurile oferă o fundație solidă și o abordare contemporană a învățării.",
      ceOsaInveti: "Tehnica respirației: Control al suflului și respirația diafragmatică Embouchure: Poziția corectă pentru clarinet Tehnica suflului: Atacul, legato, staccato Scări și arpegii: Pentru toate tonalitățile Citirea notației: Partituri pentru clarinet în Bb Tehnici expresive: Vibrato, glissando, bend Repertoriu clasic: Mozart, Weber, Brahms Improvizația jazz: Elemente de swing și bebop Colaborarea: Muzică de cameră și orchestre",
      profesor: {
        nume: "Damian Marin",
        experienta: "student anul final UNMB",
        descriere: "În curs de absolvire a facultății de interpretare instrumentală la clarinet din cadrul UNMB, unde își va continua formarea la nivel de masterat. Drumul neconvențional în muzică demonstrează că pasiunea și dedicarea pot depăși orice obstacol, oferind o perspectivă unică că 'muzica nu are vârstă'."
      },
      ceriinte: {
        val1: "Fără experiență necesară - curajul de a începe",
        val2: "Vârsta minimă de 9 ani pentru controlul respirației",
        val3: "Motivație și dorința de a evolua constant",
        val4: "Dedicare pentru practica regulată"
      },
      cuiISeadreseaza: {
        val1: "Persoane care cred că 'muzica nu are vârstă'",
        val2: "Tineri atrași de sonoritățile clasice și jazz",
        val3: "Viitori membri ai orchestrelor și ansamblurilor",
        val4: "Muzicieni care vor să exploreze versatilitatea instrumentului"
      },
      curicula: {
        ceOSaInveti: "Tehnica clarinelului, respirație corectă și repertoriu clasic și modern."
      },
      sesiuni: "4-5 sesiuni",
      capitoleCurs: {
        capitole: [
          "Introducere în clarinet și tehnica respirației",
          "Embouchure și tehnica suflului",
          "Scări, exerciții și citirea notelor",
          "Repertoriu și interpretare muzicală"
        ]
      },
      optiuniDeplata: {
        tipuri: {
          integral: "Plata integrală 520 RON - LUNAR"
        },
        optiuniDePlataInRate: {
          opt1: {
            descriere: "8-10 cursuri în 3 rate fără dobândă.",
            pret: "347 RON lunar"
          },
          opt2: {
            descriere: "12-15 cursuri în 6 rate fără dobândă.",
            pret: "260 RON lunar"
          }
        }
      }
    }
  ]
}));
export const useGetBlogsStore = create<BlogsStore>(() => ({
  blogs: [
    {
      id: "blog-1",
      photoUrl: "/images/blog-1.jpg",
      photosUrls: [
        { photo: "/images/blog-1.jpg" },
        { photo: "/images/blog-2.jpg" },
        { photo: "/images/blog-3.jpg" },
      ],
      title: "Cum să Alegi Primul Tău Instrument Muzical - Ghid Complet 2025",
      date: "Iunie 8, 2025",
      author: "Alex Mantello",
      categoria: "Ghiduri pentru începători",
      keywords: ["primul instrument", "alegere instrument muzical", "cursuri muzica bucuresti", "armonia academy"],
      descriere: {
        title: "Alegerea Primului Instrument Muzical -  Factori Esențiali de Considerat",
        continut1: "Alegerea primului instrument muzical poate fi o provocare pentru mulți începători. În acest ghid complet, îți voi prezenta factorii esențiali care te vor ajuta să iei decizia corectă. De la vârstă și preferințe muzicale, până la buget și spațiul disponibil acasă, fiecare aspect contează în această decizie importantă. La Armonia Academy, am ghidat sute de elevi în alegerea instrumentului perfect pentru ei.",
        subtitlu1: "Factorii Principali în Alegerea Instrumentului",
        pozaDescriere: "/images/blog-instruments.jpg",
        continut2: "Vârsta este primul factor de considerat - copiii de 4-6 ani se descurcă excelent cu pianul sau ukulele, în timp ce adolescenții preferă adesea chitara sau tobele. Preferințele muzicale joacă un rol crucial: dacă îți place rock-ul, chitara electrică ar fi ideală, dacă preferi muzica clasică, pianul sau vioara sunt opțiuni excelente. Bugetul variază considerabil - un pian digital de calitate costă între 2000-5000 lei, o chitară pentru începători între 300-800 lei. La Armonia Academy oferim consultanță gratuită pentru alegerea instrumentului și chiar posibilitatea de a testa instrumentele înainte de a lua decizia finală.",
      }
    },
    {
      id: "blog-2",
      photoUrl: "/images/blog-2.jpg",
      title: "Beneficiile Învățării Muzicii pentru Dezvoltarea Creierului la Copii",
      date: "Iunie 1, 2025",
      author: "Alex Mantello",
      categoria: "Educație muzicală",
      keywords: ["muzica si creierul", "dezvoltarea copiilor", "beneficii muzica", "cursuri copii bucuresti"],
      descriere: {
        title: "Cum Influențează Muzica Dezvoltarea Cognitivă a Copiilor",
        continut1: "Studiile neuroștiințifice demonstrează că învățarea muzicii produce schimbări remarcabile în creierul copilului. În acest articol, voi explora cercetările recente care arată cum lecțiile de muzică îmbunătățesc memoria, atenția, limbajul și abilitățile matematice ale copiilor. Observațiile din cei 12 ani de predare la Armonia Academy confirmă aceste beneficii extraordinare.",
        subtitlu1: "Impactul Neurologic al Educației Muzicale",
        pozaDescriere: "/images/blog-brain-music.jpg",
        continut2: "Cercetările de la Harvard și MIT arată că copiii care învață muzică dezvoltă conexiuni neuronale mai puternice în zonele responsabile pentru procesarea limbajului și matematica. Am observat personal că elevii mei care studiază pianul de minimum 6 luni îmbunătățesc semnificativ performanțele școlare. Muzica stimulează ambele emisfere cerebrale simultan, dezvoltând gândirea creativă și logică. Copiii care învață instrumente cu coarde (vioară, chitară) dezvoltă coordonarea și concentrarea mai rapid decât colegii lor. La Armonia Academy, programele noastre sunt special concepute pentru a maximiza aceste beneficii cognitive.",
      }
    },
    {
      id: "blog-3",
      photoUrl: "/images/blog-3.jpg",
      title: "Ghidul Complet pentru Lecțiile de Pian: De la Început la Performanță",
      date: "Mai 25, 2025",
      author: "Alex Mantello",
      categoria: "Instrumente",
      keywords: ["lectii pian bucuresti", "invatare pian", "cursuri pian", "profesor pian"],
      descriere: {
        title: "Totul Despre Lecțiile de Pian - De la Primii Pași la Măiestrie",
        continut1: "Pianul este considerat 'regele instrumentelor' și pe bună dreptate. În acest ghid detaliat, voi împărtăși secretele unei progresii rapide la pian, bazate pe experiența mea de predare și pe metodele dovedite la Armonia Academy. Vei învăța cum să practici eficient, cum să dezvolți tehnică și cum să interpretezi cu emoție.",
        subtitlu1: "Metodologia Eficientă de Învățare a Pianului",
        pozaDescriere: "/images/blog-piano-lesson.jpg",
        continut2: "Secretul progresiei rapide la pian constă în practicarea structurată și îndrumarea profesională. Recomand 30 minute de practică zilnică pentru începători, împărțite în exerciții de tehnică (10 min), studiul piesei noi (15 min) și repetarea pieselor învățate (5 min). Poziția corectă la pian este fundamentală - șezutul la 2/3 din banchetă, picioarele pe podea, încheieturile ușor ridicate. La Armonia Academy folosim metoda progresivă: începem cu piese simple de 5 note, apoi evoluăm către scale majore și minore, acorduri și eventual piese complexe de Bach sau Chopin. Elevii noștri ating nivel intermediar în 8-12 luni cu practică regulată.",
      }
    },
    {
      id: "blog-4",
      photoUrl: "/images/blog-4.jpg",
      title: "Chitara pentru Începători: Totul Ce Trebuie să Știi în 2025",
      date: "Mai 15, 2025",
      author: "Alex Mantello",
      categoria: "Instrumente",
      keywords: ["chitara incepatori", "lectii chitara bucuresti", "acorduri chitara", "cursuri chitara"],
      descriere: {
        title: "Drumul de la Zero la Chitarist - Ghid Practic pentru Începători",
        continut1: "Chitara este unul dintre cele mai populare instrumente, iar începutul poate fi intimidant. După 12 ani de predare a chitarei, am dezvoltat o metodă care face învățarea rapidă și plăcută. În acest articol voi dezvălui secretele pentru o progresie rapidă și voi răspunde la toate întrebările frecvente ale începătorilor.",
        subtitlu1: "Primul Tău Acord și Primele Tale Melodii",
        pozaDescriere: "/images/blog-guitar-beginner.jpg",
        continut2: "Primul acord pe care îl învață elevii mei este G major - simplu și sonor. Urmează C major și D major, cu care poți cânta deja sute de melodii populare. Poziția corectă a mâinii stângi este crucială: degetul mare pe spatele gâtului, celelalte degete curbate peste corzi. Pentru mâna dreaptă, recomand să începi cu atacul alternativ simplu înainte de a trece la fingerpicking. La Armonia Academy, elevii învață primele 10 acorduri în prima lună și pot cânta prima melodie completă în lecția 4-5. Investiția într-o chitară de calitate (500-800 lei pentru începători) face diferența enormă în progresie și motivație.",
      }
    },
    {
      id: "blog-5",
      photoUrl: "/images/blog-5.jpg",
      title: "Tehnicile de Respirație pentru Canto: Secretele Profesioniștilor",
      date: "Mai 8, 2025",
      author: "Alex Mantello",
      categoria: "Canto",
      keywords: ["tehnici respiratie canto", "lectii canto bucuresti", "cursuri voce", "respiratie diafragmatica"],
      descriere: {
        title: "Respirația Diafragmatică - Fundația Unei Voci Puternice",
        continut1: "Respirația este fundamentul cântului profesional. În acest ghid detaliat, voi explica tehnicile de respirație folosite de cântăreții profesioniști și voi oferi exerciții practice pentru dezvoltarea capacității pulmonare și controlului respirației. Aceste tehnici sunt esențiale pentru orice aspirant la canto.",
        subtitlu1: "Exerciții Practice pentru Dezvoltarea Respirației",
        pozaDescriere: "/images/blog-breathing-technique.jpg",
        continut2: "Respirația diafragmatică se învață prin exerciții sistematice. Exercițiul 'câinelui' (respirații rapide și scurte) dezvoltă controlul diafragmei, în timp ce respirațiile lungi pe sunetul 'ahh' îmbunătățesc capacitatea pulmonară. Recomand 10 minute de exerciții de respirație înainte de fiecare sesiune de canto. Poziția corectă: în picioare, umerii relaxați, o mână pe piept, una pe burtă - când respiri corect, doar mâna de pe burtă se mișcă. La Armonia Academy, profesorii noștri de canto încep fiecare lecție cu 5 minute de exerciții de respirație, iar elevii observă îmbunătățiri semnificative ale vocii în doar 2-3 săptămâni.",
      }
    },
    {
      id: "blog-6",
      photoUrl: "/images/blog-6.jpg",
      title: "Vioară vs Vișlă: Care Instrument cu Coarde să Alegi?",
      date: "Mai 1, 2025",
      author: "Alex Mantello",
      categoria: "Instrumente",
      keywords: ["vioara vs viola", "instrumente coarde", "lectii vioara bucuresti", "diferente vioara viola"],
      descriere: {
        title: "Comparația Completă: Vioară sau Violă pentru Începători",
        continut1: "Alegerea între vioară și violă confundă mulți începători. Deși similare la prima vedere, aceste instrumente au caracteristici distincte care influențează experiența de învățare. În acest articol voi analiza diferențele tehnice, muzicale și practice pentru a te ajuta să faci alegerea corectă.",
        subtitlu1: "Diferențele Tehnice și Muzicale Esențiale",
        pozaDescriere: "/images/blog-violin-viola.jpg",
        continut2: "Vioara este cu 7 cm mai scurtă și acordată cu o cvintă mai înalt decât viola, având un sunet mai strălucitor și penetrant. Viola produce tonuri mai calde și profunde, fiind acordată în do-sol-re-la. Pentru copii sub 12 ani recomand vioara, fiind mai ușoară și cu dimensiuni adaptate vârstei. Viola necesită mâini și degete mai lungi, fiind ideală pentru adolescenți și adulți. Din perspectiva repertoriului, vioara are o literatură vastă de solistic, în timp ce viola excelează în muzica de cameră. La Armonia Academy avem instrumente de toate dimensiunile și oferim lecția de probă gratuită pentru ambele instrumente.",
      }
    },
    {
      id: "blog-7",
      photoUrl: "/images/blog-7.jpg",
      title: "Saxofonul în Muzica Modernă: De la Jazz la Pop Contemporary",
      date: "Aprilie 25, 2025",
      author: "Alex Mantello",
      categoria: "Instrumente",
      keywords: ["saxofon modern", "lectii saxofon bucuresti", "saxofon jazz", "saxofon pop"],
      descriere: {
        title: "Evoluția Saxofonului în Stilurile Muzicale Contemporane",
        continut1: "Saxofonul a parcurs o călătorie fascinantă de la jazz-ul clasic la pop-ul modern. În acest articol voi explora cum acest instrument versatil s-a adaptat diferitelor stiluri muzicale și care sunt tehnicile specifice pentru fiecare gen. De asemenea, voi oferi sfaturi pentru aspiranții saxofoniști.",
        subtitlu1: "Tehnici Specifice pentru Fiecare Stil Muzical",
        pozaDescriere: "/images/blog-saxophone-styles.jpg",
        continut2: "Jazz-ul tradițional cere maeștria improvizației și înțelegerea progresiilor armonii complexe. Saxofoniștii de jazz dezvoltă un vibrato caracteristic și o frazare expresivă. În funk și R&B, accentul este pe groove și ritmuri sincopate, cu tehnici precum 'growling' și 'bending'. Pop-ul contemporary folosește saxofonul pentru hooks memorabile și solo-uri emotionale, cerând o abordare mai lirică. La Armonia Academy, profesorii noștri de saxofon sunt specializați în toate stilurile și adaptează lecțiile la preferințele muzicale ale fiecărui elev. Recomand să începi cu jazz-ul tradițional pentru a dezvolta baza tehnică solidă.",
      }
    },
    {
      id: "blog-8",
      photoUrl: "/images/blog-8.jpg",
      title: "Tobele: Fundamentele Ritmului și Coordinării în Muzică",
      date: "Aprilie 18, 2025",
      author: "Alex Mantello",
      categoria: "Instrumente",
      keywords: ["lectii tobe bucuresti", "cursuri baterie", "invatare tobe", "ritm coordonare"],
      descriere: {
        title: "Drumming pentru Începători - De la Primele Beats la Groove Complex",
        continut1: "Tobele sunt inima fiecărei formații muzicale, oferind fundația ritmică pe care se construiește întreaga muzică. În acest ghid complet voi explica fundamentele drumming-ului, de la ținerea corectă a bățelor până la dezvoltarea groove-urilor complexe și a coordination avansate.",
        subtitlu1: "Dezvoltarea Coordinării și a Simțului Ritmic",
        pozaDescriere: "/images/blog-drums-coordination.jpg",
        continut2: "Coordinarea între cele patru membre este cea mai mare provocare la tobe. Începem cu exerciții simple: mâna dreaptă pe hi-hat, stânga pe snare, piciorul drept pe kick drum. Metronómul este esențial pentru dezvoltarea timing-ului precis - recomand să începi cu 60 BPM și să crești treptat. Fill-urile se învață progresiv: simple de 2 beats, apoi 4 beats, eventual full-bar fills. La Armonia Academy folosim baterii electronice pentru începători, permițând practicarea cu căștile fără a deranja vecinii. Stilurile de bază (rock, funk, latin) se învață în primele 3-6 luni, iar elevii pot cânta în formație după un an de studiu.",
      }
    },
    {
      id: "blog-9",
      photoUrl: "/images/blog-9.jpg",
      title: "Teoria Muzicii Simplificată: Ghidul Complet pentru Începători",
      date: "Aprilie 11, 2025",
      author: "Alex Mantello",
      categoria: "Teorie muzicală",
      keywords: ["teoria muzicii", "note muzicale", "scale muzicale", "acorduri teorie"],
      descriere: {
        title: "Înțelegerea Fundamentelor: Note, Scale și Acorduri",
        continut1: "Teoria muzicii poate părea intimidantă, dar înțelegerea fundamentelor face diferența între un muzician și un adevărat artist. În acest ghid voi simplifica conceptele complexe și voi explica cum se aplică teoria în practica muzicală zilnică. Nu este necesară cunoașterea teoriei pentru a începe, dar te va ajuta enormemente în progresie.",
        subtitlu1: "De la Note la Acorduri - Construirea Cunoștințelor Teoretice",
        pozaDescriere: "/images/blog-music-theory.jpg",
        continut2: "Sistemul muzical occidental folosește 12 note (7 naturale + 5 alterații), organizate în octave de 8 note. Scările majore urmează formula T-T-S-T-T-T-S (ton-ton-semiton), în timp ce scările minore naturale folosesc T-S-T-T-S-T-T. Acordurile se construiesc prin suprapunerea terțelor: triad major (1-3-5), minor (1-3b-5), diminuat (1-3b-5b). Înțelegerea intervalelor este fundamentală pentru improvizație și compoziție. La Armonia Academy integrăm teoria gradual în lecțiile practice - elevii învață conceptele prin piesele pe care le cântă, nu prin memorarea abstractă. Această abordare face teoria accesibilă și utilă pentru toți elevii.",
      }
    },
    {
      id: "blog-10",
      photoUrl: "/images/blog-10.jpg",
      title: "Pregătirea pentru Examene și Concursuri Muzicale",
      date: "Aprilie 4, 2025",
      author: "Alex Mantello",
      categoria: "Performanță",
      keywords: ["concursuri muzicale", "examene muzica", "pregatire concurs", "performanta scenica"],
      descriere: {
        title: "Strategii de Pregătire pentru Performanțe Muzicale de Succes",
        continut1: "Pregătirea pentru concursuri și examene muzicale necesită o abordare strategică și disciplinată. În acest articol voi împărtăși metodele dovedite pentru pregătirea eficientă, gestionarea anxietății de scenă și maximizarea performanței în momentele cheie. Experiența mea cu elevii câștigători de premii oferă perspective valoroase.",
        subtitlu1: "Planificarea și Execuția unei Pregătiri de Succes",
        pozaDescriere: "/images/blog-music-competition.jpg",
        continut2: "Pregătirea începe cu minimum 3 luni înainte de concurs. Prima lună se dedică alegerii repertoriului potrivit și înțelegerii cerințelor tehnice. Luna a doua se concentrează pe perfecționarea tehnică și interpretare. Luna finală include simulări de concurs și antrenament mental. Gestionarea stresului se învață prin exerciții de respirație și vizualizare pozitivă. Recomand înregistrări audio ale propriei performanțe pentru auto-evaluare. La Armonia Academy organizăm 'mini-concursuri' interne pentru a-i obișnui pe elevi cu atmosfera competițională. Elevii noștri au câștigat peste 50 de premii la concursuri naționale în ultimii 5 ani.",
      }
    },
    {
      id: "blog-11",
      photoUrl: "/images/blog-11.jpg",
      title: "Cum să Practici Eficient Acasă: Maximizează Timpul de Studiu",
      date: "Martie 28, 2025",
      author: "Alex Mantello",
      categoria: "Sfaturi practice",
      keywords: ["practica acasa", "studiu eficient muzica", "progresie rapida", "metode practica"],
      descriere: {
        title: "Secretele Practicii Eficiente - Progresie Maximă în Timp Minim",
        continut1: "Calitatea practicii contează mai mult decât cantitatea. În acest ghid detaliat voi dezvălui tehnicile de practică folosite de muzicienii profesioniști, care permit progresie rapidă chiar și cu timp limitat. Aceste metode transformă 30 de minute de practică focalizată în echivalentul a 2 ore de practică dezorganizată.",
        subtitlu1: "Structurarea Sesiunilor de Practică pentru Rezultate Optime",
        pozaDescriere: "/images/blog-practice-routine.jpg",
        continut2: "Sesiunea ideală de practică începe cu 5 minute de încălzire (scale, arpegii), urmată de 15 minute de lucru tehnic concentrat pe dificultățile specifice, și se termină cu 10 minute de interpretare expresivă. Metoda 'slow practice' este esențială: practică piesa cu 50% din tempo-ul normal, concentrându-te pe precizia fiecărei note. Folosește metronómul pentru dezvoltarea timing-ului precis. Împarte piesele complexe în secțiuni de 4-8 măsuri și perfecționează fiecare secțiune separat. La Armonia Academy oferim elevilor 'jurnal de practică' pentru monitorizarea progresului și identificarea zonelor problematice. Consistența bate intensitatea - 20 minute zilnic sunt mai eficiente decât 3 ore o dată pe săptămână.",
      }
    },
    {
      id: "blog-12",
      photoUrl: "/images/blog-12.jpg",
      title: "Muzica în Era Digitală: Aplicații și Tehnologii pentru Muzicieni",
      date: "Martie 21, 2025",
      author: "Alex Mantello",
      categoria: "Tehnologie",
      keywords: ["aplicatii muzica", "tehnologie muzicala", "software muzica", "instrumente digitale"],
      descriere: {
        title: "Instrumentele Digitale Esențiale pentru Muzicianul Modern",
        continut1: "Tehnologia a revoluționat modul în care învățăm și creăm muzică. În acest articol voi prezenta cele mai utile aplicații și software-uri pentru muzicieni, de la metronoame avansate și tunere precise, până la DAW-uri profesionale și instrumente de compoziție. Aceste unelte digitale accelerează învățarea și deschid noi posibilități creative.",
        subtitlu1: "Selecția Celor Mai Bune Aplicații și Software-uri Muzicale",
        pozaDescriere: "/images/blog-music-technology.jpg",
        continut2: "Pentru începători recomand Simply Piano (iOS/Android) pentru învățarea pianului, Yousician pentru instrumente multiple, și Metronome Plus pentru dezvoltarea timing-ului. Muzicienii intermediari beneficiază de GarageBand (gratuit pe Mac) sau Reaper pentru înregistrări home studio. Profesional, Logic Pro X și Pro Tools rămân standardul industriei. Pentru teorie muzicală, Tenuto și Music Theory Helper sunt excelente. Aplicațiile de acordare precum Boss Tuner oferă precizie superioară clasicelor tunere fizice. La Armonia Academy integrăm aceste tehnologii în lecții, iar elevii primesc liste personalizate de aplicații recomandate pentru instrumentul lor. Tehnologia nu înlocuiește profesorul, ci completează învățarea tradițională.",
      }
    },
    {
      id: "blog-13",
      photoUrl: "/images/blog-13.jpg",
      title: "Construirea unei Cariere Muzicale: De la Pasiune la Profesie",
      date: "Martie 14, 2025",
      author: "Alex Mantello",
      categoria: "Carieră muzicală",
      keywords: ["cariera muzicala", "muzician profesionist", "industria muzicala", "succes muzical"],
      descriere: {
        title: "Drumul către Succes în Industria Muzicală Contemporană",
        continut1: "Transformarea pasiunii pentru muzică într-o carieră sustenabilă necesită mai mult decât talent - cere planificare strategică, networking și înțelegerea industriei. În acest ghid voi explora diferitele căi de carieră muzicală și voi oferi sfaturi practice pentru construirea unei cariere de succes în muzică.",
        subtitlu1: "Opțiunile de Carieră și Strategiile de Dezvoltare Profesională",
        pozaDescriere: "/images/blog-music-career.jpg",
        continut2: "Carierele muzicale moderne includ: artist/interpret, profesor de muzică, producător, inginer de sunet, compozitor pentru film/TV, muzician de studio, și manager artistic. Fiecare cale cere abilități specifice și strategii diferite. Pentru artiști, social media și platformele streaming sunt esențiale pentru construirea fanbase-ului. Profesorii de muzică pot lucra în școli, universități, sau ca instructori privați. Networking-ul se face prin participarea la jam sessions, concerte, și evenimente ale industriei. La Armonia Academy, mulți dintre profesorii noștri au cariere artistice active și oferă elevilor perspective realiste despre industrie. Recomand să dezvolți multiple surse de venit în muzică pentru stabilitate financiară.",
      }
    },
    {
      id: "blog-14",
      photoUrl: "/images/blog-14.jpg",
      title: "Muzica de Cameră: Beneficiile Cântatului în Ansamblu",
      date: "Martie 7, 2025",
      author: "Alex Mantello",
      categoria: "Ansamblu",
      keywords: ["muzica de camera", "ansamblu muzical", "colaborare muzicala", "quartete cvartet"],
      descriere: {
        title: "Arta Colaborării Muzicale - De la Solo la Ansamblu",
        continut1: "Muzica de cameră oferă o experiență unică de învățare și performanță, dezvoltând abilități care nu pot fi dobândite prin studiul individual. În acest articol voi explora beneficiile cântatului în ansamblu, de la dezvoltarea ascultării active până la îmbunătățirea comunicării muzicale și a sincronizării perfecte.",
        subtitlu1: "Dezvoltarea Abilităților de Colaborare și Sincronizare",
        pozaDescriere: "/images/blog-chamber-music.jpg",
        continut2: "Muzica de cameră dezvoltă ascultarea activă - muzicienii învață să își ajusteze volumul, tempo-ul și interpretarea în funcție de colegii lor. Comunicarea non-verbală devine esențială: contactul vizual, respirația comună, și gesturile discrete coordonează ansamblul. Responsabilitatea individuală crește - fiecare greșeală afectează întregul grup. Repertoriul de cameră, de la Bach la Brahms, oferă o bogăție interpretativă imensă. La Armonia Academy organizăm sesiuni lunare de muzică de cameră pentru elevii avansați, formând cvartetere de coarde, trio-uri de pian, și ansambluri de instrumente de suflat. Aceste experiențe pregătesc elevii pentru muzica profesională și dezvoltă prietenii de-o viață.",
      }
    },
    {
      id: "blog-15",
      photoUrl: "/images/blog-15.jpg",
      title: "Viitorul Educației Muzicale: Tendințe și Inovații în 2025",
      date: "Martie 31, 2025",
      author: "Alex Mantello",
      categoria: "Viitor",
      keywords: ["viitorul muzicii", "educatie muzicala 2025", "inovatii muzicale", "tehnologie educativa"],
      descriere: {
        title: "Cum se Transformă Educația Muzicală în Era Digitală",
        continut1: "Educația muzicală traversează o perioadă de transformare accelerată, impulsionată de tehnologiile emergente și schimbarea nevoilor elevilor. În acest articol prospectiv voi analiza tendințele care vor forma viitorul învățării muzicale și cum Armonia Academy se adaptează pentru a oferi cea mai bună experiență educațională.",
        subtitlu1: "Inovațiile Tehnologice și Metodologice în Educația Muzicală",
        pozaDescriere: "/images/blog-future-music-education.jpg",
        continut2: "Realitatea augmentată (AR) începe să transforme lecțiile de muzică - elevii pot vediza notele muzicale în spațiul 3D și pot practica cu instrumente virtuale. Inteligența artificială oferă feedback instant asupra performanței și personalizează curriculum-ul pentru fiecare elev. Lecțiile hibride (online + offline) devin norma, oferind flexibilitate maximă. Gamification face învățarea mai angajantă, cu sisteme de puncte și provocări. La Armonia Academy investim constant în tehnologie educațională, menținând echilibrul între inovație și metodele tradiționale dovedite. Viitorul aparține profesorilor care îmbină experiența umană cu puterea tehnologiei pentru a crea experiențe de învățare extraordinare.",
      }
    }
  ]
}));
export const useGetTeachersStore = create<TeacherStore>(() => ({
  teachers: [
    {
      id: 1,
      name: "CODRUȚ ANDREI",
      role: "Profesor Mandolină/Ukulele",
      imagineTeacher: "/images/codru-andrei.png",
      locatie: "Gara de Nord, București",
      email: "codru.andrei@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Profesor de mandolină cu 4 ani experiență în predare și peste 15 ani experiență muzicală internațională.",
      descriereCompleta: "Țin cursul de mandolină la Școala Armonia de patru ani. Personal, am descoperit mandolina mai mult întâmplător, acum mai bine de 15 ani prin albumul mandolinistului american David Grisman. Parcursul meu muzical a început pe la 15 ani, în liceu, când am luat contact cu chitaristul și profesorul Adi Manolovici. Debutul meu scenic a venit în 2007 cântând heavy metal și hard rock alături de trupa RUST. În 2012 m-am alăturat duo-ului Soul Serenade, cu care mi-am petrecut următorii 11 ani cântând pe scene din țară și străinătate, inclusiv la New York.",
      educatie: "Autodidact cu parcurs vast în diverse stiluri muzicale - blues, jazz, bluegrass, choro brazilian, muzică clasică prin Bach și Vivaldi.",
      expertiza: [
        "Mandolină - blues, jazz, bluegrass",
        "Ukulele pentru toate vârstele",
        "Choro brazilian",
        "Muzică clasică - Bach, Vivaldi",
        "Experiență scenică internațională"
      ],
      realizari: [
        "Locul 2 la European Blues Challenge, Toulouse (2013)",
        "Concerte în Luxembourg, Germania, Ungaria, Bulgaria, Franța",
        "Festival organizat de Institutul Cultural Român la New York",
        "11 ani cu duo-ul Soul Serenade"
      ]
    },
    {
      id: 2,
      name: "MATEI ALEXANDRU",
      role: "Profesor Chitară/Pian",
      imagineTeacher: "/images/matei-alexandru.png",
      locatie: "Gara de Nord, București",
      email: "matei.alexandru@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Profesor de chitară și pian cu formare completă muzicală și experiență în coordonarea atelierelor de artă muzicală.",
      descriereCompleta: "Sunt profesor de chitară și pian la școala de muzică Armonia. Vocația mea pentru muzică s-a manifestat încă din copilărie prin fascinația pentru instrumente muzicale. La vârsta de 5 ani am început studiul pianului prin lecții particulare și între 7 și 15 ani am urmat cursurile Școlii de muzică și arte plastice, numărul 5 din București. Am fost laureat al unor concursuri de interpretare vocală, la chitară și la pian, am coordonat activitatea a numeroase ateliere de artă muzicală și ofer lecții adaptate pentru elevi de toate vârstele.",
      educatie: "Școala de muzică și arte plastice nr. 5 București - pian, chitară, teorie muzicală și cor (7-15 ani). Lecții particulare de pian din vârsta de 5 ani.",
      expertiza: [
        "Pian - tehnici specifice și teorie muzicală",
        "Chitară - toate nivelurile",
        "Coordonare ateliere de artă muzicală",
        "Compoziție și interpretare",
        "Dezvoltarea abilitaților muzicale complete"
      ],
      realizari: [
        "Laureat la concursuri de interpretare vocală",
        "Laureat la concursuri de chitară și pian",
        "Coordonator ateliere artă muzicală pentru fundații și ONG-uri",
        "Membru activ în formația A Theory of Harmony"
      ]
    },
    {
      id: 3,
      name: "ANA MARIA SCRIOȘTEANU",
      role: "Profesor Pian/Canto",
      imagineTeacher: "/images/anamariascriosteanu.png",
      locatie: "Gara de Nord, București",
      email: "ana.scriosteanu@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Studentă anul IV la UNMB, specializare canto clasic, cu experiență în muzică ușoară și jazz.",
      descriereCompleta: "Muzica face parte din viața mea încă de la vârsta de 5 ani, când am început să urmez cursuri de chitară și canto. Am urmat cursurile Școlii de Arte nr. 3, secțiunea violoncel și pian secundar, iar apoi am continuat cu Liceul de Muzică George Enescu din București, specializarea canto clasic. În prezent, sunt studentă în anul IV la Universitatea Națională de Muzică din București. Am participat la numeroase concursuri și festivaluri de muzică, obținând premii care mi-au validat eforturile. În paralel, activez ca solistă în trupa de evenimente Bella Band.",
      educatie: "Universitatea Națională de Muzică București - anul IV, canto clasic. Liceul de Muzică George Enescu București. Școala de Arte nr. 3 - violoncel și pian secundar.",
      expertiza: [
        "Canto clasic - tehnica vocală avansată",
        "Muzică ușoară și jazz",
        "Pian - nivel intermediar și avansat",
        "Interpretare scenică - experiență în Bella Band",
        "Predare prietenoasă și relaxată"
      ],
      realizari: [
        "Premii la concursuri și festivaluri de muzică",
        "Solistă activă în trupa Bella Band",
        "Interpretare pop, soul, jazz și muzică de petrecere",
        "Experiență în predarea pentru toate vârstele"
      ]
    },
    {
      id: 4,
      name: "ANTONIA ȘTEFĂNESCU",
      role: "Profesor Pian/Canto",
      imagineTeacher: "/images/antonia-stefanescu.png",
      locatie: "Gara de Nord, București",
      email: "antonia.stefanescu@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Studentă anul IV la UNMB, secția canto clasic, cu specializare în pian de performanță și operă.",
      descriereCompleta: "Pasiunea mea pentru muzică a început încă de la vârsta de 5 ani, când am făcut primii pași prin studiul canto-ului pop, muzicii folclorice și pianului, instrumentul meu de suflet. Am urmat un parcurs educațional dedicat muzicii la Colegiul de Artă Carmen Sylva din Ploiești, studiind pianul de performanță încă din clasele primare până la liceu, iar din clasa a IX-a m-am orientat către canto clasic. Am participat la numeroase concursuri, spectacole și olimpiade de muzică ca solistă de pian, canto folcloric și clasic, și coristă, obținând premii pe măsură.",
      educatie: "Universitatea Națională de Muzică București - anul IV, canto clasic. Colegiul de Artă Carmen Sylva Ploiești - pian de performanță și canto clasic.",
      expertiza: [
        "Pian de performanță - nivel avansat",
        "Canto clasic și operă",
        "Canto folcloric și pop",
        "Activitate pedagogică activă",
        "Abordare echilibrată tehnică-expresivitate"
      ],
      realizari: [
        "Premii la concursuri de pian și canto",
        "Premii la olimpiade de muzică",
        "Experiență ca solistă și coristă",
        "Activitate pedagogică pentru toate vârstele"
      ]
    },
    {
      id: 5,
      name: "LUCIAN SANDA",
      role: "Profesor Chitară/Bass/Ukulele",
      imagineTeacher: "/images/lucian-sanda.png",
      locatie: "Gara de Nord, București",
      email: "lucian.sanda@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Absolvent Brighton Jazz School cu experiență vastă în trupe și predare, specializat în chitară, bass și ukulele.",
      descriereCompleta: "Nu am visat niciodată că voi fi muzician, doar m-am lăsat purtat de șirul întâmplărilor. Prima mea chitară a fost un desfăcător de capace de sticlă în formă de chitară. Am absolvit Sociologie, Psihologie și Pedagogie la Universitatea București, iar apoi am studiat muzica în Anglia unde am absolvit Brighton Jazz School și Brighton Jazz Guitar School. Am devenit tutor de chitară la Brighton Unemployed Centre și am participat consecutiv la 6 ediții ale Fringe Festival. În 2020 am revenit în țară, susținând workshopuri și concerte la MNAC, Muzeul Țăranului Român și Biblioteca Națională.",
      educatie: "Brighton Jazz School și Brighton Jazz Guitar School, Anglia. Universitatea București - Sociologie, Psihologie, Pedagogie.",
      expertiza: [
        "Chitară jazz și clasică",
        "Bass electric și acustic",
        "Ukulele pentru toate vârstele",
        "Experiență în predare și tutorat",
        "Compoziție și aranjamente"
      ],
      realizari: [
        "6 participări consecutive la Fringe Festival",
        "3 ediții Festival de muzică Lobe Supreme",
        "Membru fondator Jazzmine Trio și Acronic Jazz Trio",
        "Coloană sonoră film „No fixed abode",
        "Concerte la MNAC, Muzeul Țăranului, Biblioteca Națională",
      ]
    },
    {
      id: 6,
      name: "ALEXANDRU MÎNZAR",
      role: "Profesor Saxofon",
      imagineTeacher: "/images/alexandru-minzar.png",
      locatie: "Gara de Nord, București",
      email: "alexandru.minzar@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Absolvent UNMB cu licența și masterul în interpretare muzicală, experiență în orchestre simfonice și diverse proiecte.",
      descriereCompleta: "Sunt absolvent al Facultății de Muzică din cadrul UNMB, unde am obținut atât licența, cât și masterul în interpretare muzicală. Cariera mea artistică s-a conturat în paralel cu formarea academică, implicându-mă în numeroase proiecte muzicale - de la trupe și band-uri, la muzică de cameră și colaborări cu orchestre simfonice din Ploiești și București. Pentru mine, muzica înseamnă diversitate și comunicare, motiv pentru care am explorat și alte stiluri - am avut ocazia să cânt și alături de orchestre de folclor, ceea ce mi-a îmbogățit profund repertoriul și sensibilitatea artistică.",
      educatie: "Universitatea Națională de Muzică București - Licența și Masterul în interpretare muzicală, saxofon.",
      expertiza: [
        "Saxofon clasic și contemporan",
        "Muzică de cameră",
        "Experiență în orchestre simfonice",
        "Colaborări cu orchestre de folclor",
        "Diversitate stilistică și comunicare muzicală"
      ],
      realizari: [
        "Colaborări cu orchestre simfonice din Ploiești și București",
        "Experiență în trupe și band-uri diverse",
        "Proiecte de muzică de cameră",
        "Colaborări cu orchestre de folclor"
      ]
    },
    {
      id: 7,
      name: "ȘTEFAN DUPU",
      role: "Profesor Chitară/Bass/Ukulele",
      imagineTeacher: "/images/stefan-dupu.png",
      locatie: "Mihai Bravu, București",
      email: "stefan.dupu@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Profesor cu peste 15 ani experiență, absolvent Liceul de Arte Victor Brauner, specializat în diverse stiluri muzicale.",
      descriereCompleta: "Sunt profesor de chitară și muzician cu peste 15 ani de experiență în lumea muzicii. Am descoperit această pasiune de mic, datorită tatălui meu, și de la 6 ani am început studiul chitarei și pianului. Am studiat la Liceul de Arte Victor Brauner din Piatra Neamț, unde mi-am pus bazele teoretice și practice solide. În timpul liceului am participat la mai multe concursuri locale, atât la chitara clasică, cât și la pian. De-a lungul timpului am cântat în diverse trupe și proiecte muzicale, abordând o paletă largă de stiluri - de la folk românesc până la death metal.",
      educatie: "Liceul de Arte Victor Brauner Piatra Neamț. Studii de chitară și pian din vârsta de 6 ani.",
      expertiza: [
        "Chitară clasică și electrică",
        "Bass electric",
        "Ukulele și instrumente cu corzi",
        "Stiluri diverse - folk, rock, metal",
        "Dezvoltarea urechii muzicale"
      ],
      realizari: [
        "Premii și mențiuni la concursuri de chitară clasică și pian",
        "Experiență în trupe diverse - folk românesc la death metal",
        "Peste 15 ani experiență în predare",
        "Dezvoltarea unui stil propriu și viziune deschisă"
      ]
    },
    {
      id: 8,
      name: "MARIA NICOLAU",
      role: "Profesor Pian/Canto",
      imagineTeacher: "/images/maria-nicolau.png",
      locatie: "Mihai Bravu, București",
      email: "maria.nicolau@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Profesor de canto și pian specializat în lucrul cu copiii, cu abordare personalizată și empatică.",
      descriereCompleta: "Sunt profesor de canto și pian pasionat de muzică și de lucrul cu copiii, cu o abordare personalizată și empatică a predării. Pentru mine, fiecare copil este unic, iar lecțiile sunt adaptate în funcție de nevoile, vârsta și nivelul fiecărui elev. Scopul meu este nu doar să dezvolt abilitățile vocale ale copiilor, ci și să le ofer încredere în propria voce și bucuria de a cânta. Predau într-un mod interactiv, relaxat și prietenos, punând accent pe respirația corectă, dicție, intonație, dezvoltarea auzului muzical și expresivitate.",
      educatie: "Specializare în pedagogie muzicală și lucrul cu copiii. Formare în tehnici vocale și pian.",
      expertiza: [
        "Canto pentru copii - tehnici vocale adaptate",
        "Pian pentru începători și intermediari",
        "Dezvoltarea auzului muzical la copii",
        "Metode interactive și jucăușe de predare",
        "Respirație, dicție și expresivitate vocală"
      ],
      realizari: [
        "Specializare în predarea pentru copii",
        "Abordare personalizată pentru fiecare elev",
        "Experiență în dezvoltarea încrederii în sine prin muzică",
        "Metode creative și interactive de predare"
      ]
    },
    {
      id: 9,
      name: "RALUCA ANTONOVICI",
      role: "Profesor Canto/Pian",
      imagineTeacher: "/images/raluca-antonovici.png",
      locatie: "Piața Progresul, București",
      email: "raluca.antonovici@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Absolventă UNMB, specializată în Compoziție Muzicală, cu peste 15 ani experiență didactică și colaborări artistice.",
      descriereCompleta: "Absolventă a Universității Naționale de Muzică din București, specializată în Compoziție Muzicală, predau cu pasiune pian și canto, îmbinând experiența scenică cu cea pedagogică. Cu peste 15 ani de activitate didactică și colaborări alături de artiști cunoscuți din zona folk, pop și nu numai, ofer lecții dinamice și adaptate fiecărui cursant. Pasiunea mea pentru compoziție se reflectă și în creațiile dedicate copiilor - piese originale, gândite cu drag pentru a inspira și a bucura cursanții mici. Lecțiile mele includ acompaniament live la pian, oferind o experiență completă, personalizată și profund muzicală.",
      educatie: "Universitatea Națională de Muzică București - Compoziție Muzicală.",
      expertiza: [
        "Compoziție muzicală și aranjamente",
        "Pian clasic și modern",
        "Canto - tehnici vocale avansate",
        "Acompaniament live la pian",
        "Creații originale pentru copii"
      ],
      realizari: [
        "Peste 15 ani experiență didactică",
        "Colaborări cu artiști cunoscuți folk și pop",
        "Compoziții originale pentru copii",
        "Experiență scenică și pedagogică combinată"
      ]
    },
    {
      id: 10,
      name: "AUREL CIUCUR",
      role: "Profesor Tobe",
      imagineTeacher: "/images/aurel-ciucur.png",
      locatie: "Piața Progresul, București",
      email: "aurel.ciucur@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Profesor de tobe și producător muzical cu experiență în compoziție, aranjamente și interpretare scenică.",
      descriereCompleta: "Profesor de tobe și producător muzical, cu experiență în compoziție și aranjamente muzicale pentru toate genurile, propun o călătorie autentică prin universul sunetelor și ritmurilor muzicale. Cu o activitate bogată atât în predare, cât și în interpretare scenică de mai mult de 5 ani alături de trupe pop și hard rock, transform fiecare lecție într-o experiență interactivă, adaptată stilului și nivelul fiecărui cursant. Pe lângă studiul tobelor, ofer posibilitatea de a explora și alte instrumente: pianul și chitara acustică, integrând elemente de acompaniament live în timpul lecțiilor.",
      educatie: "Formare în producție muzicală, compoziție și aranjamente. Experiență practică în trupe și proiecte muzicale.",
      expertiza: [
        "Tobe - toate stilurile (pop, rock, jazz, funk)",
        "Producție muzicală și aranjamente",
        "Compoziție pentru diverse genuri",
        "Pian și chitară acustică complementare",
        "Acompaniament live în lecții"
      ],
      realizari: [
        "Peste 5 ani experiență în predare și interpretare scenică",
        "Activitate în trupe pop și hard rock",
        "Experiență în producție muzicală",
        "Aranjamente pentru diverse genuri muzicale"
      ]
    },
    {
      id: 11,
      name: "MIRELA POPA",
      role: "Profesor Vioară",
      imagineTeacher: "/images/mirela-popa.png",
      locatie: "Piața Progresul, București",
      email: "mirela.popa@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Absolventă UNMB cu peste 20 ani experiență ca violonistă în Orchestra Radio, specializată în interpretare muzicală.",
      descriereCompleta: "Profesoară de vioară, absolventă a secției de interpretare muzicală din cadrul Universității Naționale de Muzică din București, cu o experiență bogată cumulată în peste 20 de ani ca violonistă în cadrul Orchestrei Radio. Această experiență vastă se reflectă în lecțiile adaptate nivelului și nevoilor fiecărui elev - fie că e la început de drum sau dorește să-și perfecționeze tehnica. Accentul este pus nu numai pe rigoarea interpretării, ci mai ales pe bucuria de a cânta. Răbdarea și perseverența sunt esențiale, iar cu susținere și încredere, fiecare cursant poate atinge rezultate remarcabile.",
      educatie: "Universitatea Națională de Muzică București - secția interpretare muzicală, vioară.",
      expertiza: [
        "Vioară clasică - nivel profesionist",
        "Experiență orchestrală de elită (Orchestra Radio)",
        "Interpretare muzicală de înaltă performanță",
        "Predare adaptată pentru toate nivelurile",
        "Îmbinarea rigorii cu bucuria de a cânta"
      ],
      realizari: [
        "Peste 20 ani în Orchestra Radio",
        "Experiență vastă în interpretare muzicală profesionistă",
        "Predare pentru toate nivelurile și vârstele",
        "Abordare care combină excelența cu pasiunea"
      ]
    },
    {
      id: 12,
      name: "DAMIAN MARIN",
      role: "Profesor Clarinet/Saxofon",
      imagineTeacher: "/images/damian-marin.png",
      locatie: "Piața Progresul, București",
      email: "damian.marin@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Student în curs de absolvire UNMB la clarinet și saxofon, cu abordare modernă și flexibilă a predării.",
      descriereCompleta: "Sunt în curs de absolvire a facultății de interpretare instrumentală la clarinet și saxofon din cadrul Universității de Muzică din București, unde îmi voi continua formarea și la nivel de masterat. Drumul meu în muzică a fost neconvențional: am absolvit un liceu cu profil diferit, iar pasiunea pentru clarinet și saxofon a apărut abia spre finalul liceului. Prin dedicare și pregătire intensă, am reușit să intru la Conservator, iar acest parcurs personal mi-a arătat că muzica nu are vârstă, ci doar curajul de a începe. Lecțiile mele sunt personalizate, accesibile și construite în jurul nevoilor și pasiunilor tale muzicale.",
      educatie: "Universitatea Națională de Muzică București - în curs de absolvire, interpretare instrumentală clarinet și saxofon. Continuare la nivel de masterat.",
      expertiza: [
        "Clarinet clasic și modern",
        "Saxofon - diverse stiluri",
        "Abordare personalizată și accesibilă",
        "Perspectiva că muzica nu are vârstă",
        "Lecții adaptate pasiunilor individuale"
      ],
      realizari: [
        "Parcurs neconvențional demonstrând că dedicarea depășește orice obstacol",
        "Acceptat la UNMB prin pregătire intensă",
        "Continuare la masterat - demonstrație de excelență",
        "Filosofia că muzica este accesibilă la orice vârstă"
      ]
    },
    {
      id: 13,
      name: "CODRIN MIRCEA",
      role: "Fondator & Profesor Chitară",
      imagineTeacher: "/images/codrin-mircea.png",
      locatie: "Obor-Făinari",
      email: "codrin.mircea@armoniaacademy.ro",
      website: "armoniaacademy.ro",
      descriereScurta: "Fondatorul Armonia Academy cu 12 ani experiență pedagogică și formare completă în chitară clasică, electrică și jazz.",
      descriereCompleta: "Muzica i-a atras atenția încă din copilărie, motiv pentru care și-a dorit să învețe să cânte la chitară. A început să studieze singur prin abordarea stilurilor folk și rock, iar apoi s-a perfecționat la Școala Populară de Arte Tiberiu Brediceanu din Brașov unde a deslușit tainele chitarei clasice și chitarei electrice. După ce s-a stabilit în București, și-a dorit să se dezvolte alături de muzicieni și chitariști cu experiență. Urmând un plan bine pus la punct, după ce a studiat teorie muzicală avansată alături de Dragoș Stama, a învățat tehnici shred de chitară electrică, tehnici de armonie modală, tehnici melodice și lick-uri metal de la Corrado Sgandura. Introducerea în jazz i-a fost transmisă de către Marius Pop, după care alături de Mihnea Ferezan a studiat lick-uri și armonie blues, rock și metal.",
      educatie: "Școala Populară de Arte Tiberiu Brediceanu Brașov - chitară clasică și electrică. Studii avansate cu Dragoș Stama (teorie muzicală), Corrado Sgandura (tehnici shred și armonie modală), Marius Pop (jazz), Mihnea Ferezan (blues, rock, metal).",
      expertiza: [
        "Chitară clasică și fingerstyle",
        "Chitară electrică - tehnici shred și metal",
        "Jazz și improvizație",
        "Blues, rock și pop",
        "Teorie muzicală avansată",
        "Armonie modală și melodică",
        "12 ani experiență pedagogică"
      ],
      realizari: [
        "Fondatorul Armonia Academy",
        "12 ani de activitate pedagogică cu rezultate excepționale",
        "Elevii săi au obținut numeroase premii la concursurile naționale de chitară",
        "Chitarist versatil cu abordare completă - de la clasic la metal",
        "Experiență vastă în predarea conceptelor muzicale complexe"
      ],
      misiune: "Să-i inițieze pe iubitorii de chitară în arta muzicii bazându-se pe înțelegerea și aplicarea conceptelor muzicale și oferindu-le cu răbdare susținerea de care vor avea nevoie."
    }
  ]
}));
export const useGetSediiStore = create<SediiStore>(() => ({
  sediiData: [
    {
      nume: "Obor-Fainari ",
      imagineSediu: "/images/sediu-green.png",
      pin: "/images/green-pin.png",
      culoareText: "text-green-secondary-rgb",
      telefon: "+ 40738318373",
      email: "obor@armoniaacademy.ro",
      adresa: "Str. Episcopul Radu nr. 63 (langa Patiseria Blitz 'n Roll din str. Fainari nr. 5)",
      zona: "Zona Obor - Mosilor",
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
      telefon: "+ 40723092740",
      email: "contact@scoalaarmona.ro",
      adresa: "Strada Vespasian nr.34, Sector 1,\nBucuresti",
      zona: "Zona gara de Nord vis-a-vis de Gradina\nZu-Zum",
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
      zona: "Zona Mihai Bravu, vis-a-vis de Magazinul Mathaus\nZu-Zum",
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
      telefon: "+ 40764059927",
      email: "progresul@scoalaarmona.ro",
      adresa: "Strada Știrului, 14, Sector 4,\nBucuresti",
      zona: "Zona Piata Progresul, langa Lidl",
      program: [
        "Luni - Vineri: 10:00 - 21:00",
        "Sambata: 09:00 - 21:00",
        "Duminica: 09:00 - 16:00"
      ],
      icon: "/images/purple-human.png",
      link: "https://www.google.com/maps/dir/44.451156,26.1338887/USR+Sector+4,+Strada+L%C3%A2n%C4%83riei+99,+Bucure%C8%99ti+040321/@44.4327556,26.0996873,4736m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x40b1ff7cc579647d:0x5cbe9c6547bcdae1!2m2!1d26.1028006!2d44.4152935?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
    }
  ]
}));
