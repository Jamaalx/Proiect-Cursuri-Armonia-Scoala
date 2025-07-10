import { useState } from "react";
import { cn } from "../../lib/cn";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const cardData = [
  {
    id: 1,
    name: "Pian",
    category: "sound",
    instrumentImage: "./images/pian.png",
    pin: "./images/green-pin.png",
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
      nume: "Ana Maria Scrioșteanu / Matei Alexandru / Antonia Ștefănescu",
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
      tipuri: ["Incepatori", "Intermediari"],
      varsta: "7 ani si peste",
      scop: "Dezvoltarea abilitatilor muzicale si a creativitatii"
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
      tipuri: ["Incepatori", "Intermediari"],
      varsta: "7 ani si peste",
      scop: "Dezvoltarea abilitatilor muzicale si a creativitatii"
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
    instrumentImage: "/images/pian.png",
    pin: "/images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "/images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "chitara e smechera",
    pretFull: "750 RON",
    pretDiscounted: "520 RON",
    descriere: "",
    ceOsaInveti: "",

    profesor: {
      nume: "Matei Alexandru / Ștefan Dupu / Lucian Sanda",
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
      tipuri: ["Incepatori", "Intermediari"],
      varsta: "7 ani si peste",
      scop: "Dezvoltarea abilitatilor muzicale si a creativitatii"
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
    id: 4,
    name: "Canto",
    category: "sound",
    instrumentImage: "./images/canto.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
    pretFull: "750 RON",
    pretDiscounted: "520 RON",
    descriere: "Descoperă puterea vocii tale cu cursurile de canto de la Armonia Academy! Vocea este cel mai personal și expresiv instrument muzical, iar prin cursurile noastre înveți să o folosești corect, sănătos și artistic. De la tehnica respirației la interpretarea cu emoție, profesorii noștri specializați în canto clasic, popular și jazz te vor ghida să îți descoperi și să îți dezvolți talentul vocal.",
    ceOsaInveti: "Tehnica respirației: Respirația diafragmatică și controlul suflului Poziția corectă: Postura și relaxarea musculaturii Tehnica vocală: Emisie, rezonanță, registre vocale Dicția și articulația: Claritatea textului și pronunția Intonația: Cântatul curat și controlul înălțimilor Interpretarea: Transmiterea emoțiilor prin voce Stiluri vocale: Clasic, popular, jazz, musical Acompaniament: Cântatul cu instrumentul sau playback Repertoriu variat: Adaptat vârstei și stilului preferat",
    profesor: {
      nume: "Ana Maria Scrioșteanu / Antonia Ștefănescu / Raluca Antonovici",
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
    instrumentImage: "./images/vioara.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
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
    instrumentImage: "./images/saxofon.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
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
    instrumentImage: "./images/mandolina.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
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
    instrumentImage: "./images/ukulele.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
    pretFull: "750 RON",
    pretDiscounted: "520 RON",
    descriere: "Alătură-te aventurii muzicale cu ukulele la Armonia Academy! Ukulele este instrumentul perfect pentru începători și pentru cei care vor să aducă bucurie și spontaneitate în muzică. Cu sonoritatea sa caldă și prietenoasă, ukulele este ideal pentru acompaniament vocal și interpretări relaxate. Cursurile noastre combină tehnica de bază cu plăcerea de a cânta, fiind perfecte pentru toate vârstele.",
    ceOsaInveti: "Tehnica fundamentală: Poziția corectă, strumming de bază Acorduri esențiale: Majore, minore, septimă Ritmuri populare: Pentru diverse stiluri muzicale Fingerpicking: Tehnici pentru melodii și arpegii Citirea tablaturilor: Sistem simplu și eficient Repertoriu variat: Pop, folk, hawaiian, indie Acompaniament vocal: Cântatul și însoțirea la ukulele Tehnici avansate: Percuție pe instrument, ornamentații Improvizația: Dezvoltarea creativității personale",
    profesor: {
      nume: "Codruț Andrei / Lucian Sanda / Ștefan Dupu",
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
    instrumentImage: "./images/bass.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
    buttonColor1: "bg-green-secondary",
    buttonColor2: "bg-teal-400",
    customText: "Alege cursul perfect pentru tine și începe o călătorie de dezvoltare personală și profesională.",
    pretFull: "750 RON",
    pretDiscounted: "520 RON",
    descriere: "Descoperă puterea fundamentală a bassului cu cursurile noastre de la Armonia Academy! Bassul este coloana vertebrală a oricărei formații muzicale, oferind fundația ritmică și armonică esențială. De la linii melodice simple la groove-uri complexe de funk și jazz, cursurile noastre te vor învăța să devii baza solidă a oricărei formații muzicale.",
    ceOsaInveti: "Tehnica fundamentală: Poziția corectă, fingering, plucking Acordarea și întreținerea: Îngrijirea instrumentului Linii de bass: Pentru diverse stiluri muzicale Citirea tablaturilor și partiturilor Groove și pocket: Dezvoltarea simțului ritmic Tehnici avansate: Slap, pop, tapping Walking bass: Specific jazzului și blues-ului Acompaniament: Colaborarea cu tobele și alte instrumente Improvizația: Creativitate în liniile de bass",
    profesor: {
      nume: "Lucian Sanda / Ștefan Dupu",
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
    instrumentImage: "./images/clarinet.png",
    pin: "./images/green-pin.png",
    culoareText: "text-green-secondary-rgb",
    humanIcon: "./images/green-human.png",
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
];

export default function Programe() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category>(null);
  type Category = "sound" | "digital" | null;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleCategoryFilter = (cat: Exclude<Category, null>) => {
    setSelectedCategory((prev) => (prev === cat ? null : cat));
  };

  const filteredCards = cardData.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm);
    const matchesCategory = selectedCategory ? card.category === selectedCategory : true;
    return matchesSearch && matchesCategory;

  });
  return (
    <div className="md:container md:mx-auto px-6 flex flex-col gap-10 mt-[50px]">
      {/* Banner */}
      <div className="mb-[70px]">
        <img src="/images/banner.png" alt="" className="w-full" />
      </div>

      {/* Buttons and search bar */}
      <div className="flex flex-col mx-0 md:mx-auto xl:mx-0 gap-6 xl:flex-row items-center xl:justify-between">
        {/* Filter buttons */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => handleCategoryFilter("sound")}
            className={`~text-sm/2xl px-4 py-3 rounded-full tracking-wider font-semibold ${selectedCategory === "sound"
              ? "bg-green-secondary text-white"
              : "border border-green-secondary text-green-secondary"
              }`}
          >
            Armonia Sound
          </button>

          <button
            onClick={() => handleCategoryFilter("digital")}
            className={`~text-sm/2xl px-4 py-3 rounded-full tracking-wider font-semibold ${selectedCategory === "digital"
              ? "bg-green-secondary text-white"
              : "border border-green-secondary text-green-secondary"
              }`}
          >
            Armonia Digital
          </button>
        </div>

        {/* Search bar */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex bg-white md:w-full max-w-lg rounded-full overflow-hidden shadow-2xl text-sm"
        >
          <input
            type="text"
            placeholder="Ce dorești să înveți astăzi?"
            value={searchTerm}
            onChange={handleSearchChange}
            className="flex-1 pl-4 lg:px-6 py-4 text-black focus:outline-none placeholder:text-gray-300 placeholder:text-base text-lg"
          />
          <button
            type="submit"
            className="bg-teal-500 rounded-full hover:bg-teal-400 text-white px-5 py-4 transition"
          >
            <img src="/images/search.png" alt="Search" className="w-6 h-6" />
          </button>
        </form>
      </div>

      {/* Chat Buble */}
      <div className="hidden xl:flex justify-end absolute -bottom-60 right-10">
        <a className="btn btn-ghost hover:bg-transparent text-base font-normal px-0 pb-2 relative z-10">
          <img className="scale-50 md:scale-90 lg:scale-100" src="/images/chat_bot.png" alt="" />
        </a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card) => (
            <div
              key={card.id}

              className="bg-white text-black hover:scale-105 rounded-xl p-6 shadow-xl hover:shadow-xl transition"
            >
              <div className="flex items-center gap-8">
                <div>
                  <img src={card.instrumentImage} alt="" className="hidden lg:block" />
                  <img src={card.instrumentImage} alt="" className="w-20 h-30 lg:hidden" />
                </div>

                <div className="flex flex-col">
                  <div className='flex w-fit mb-6 gap-3 bg-green-secondary-rgb/10 items-center py-2 px-2 rounded-lg'>
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <p className="text-sm font-medium text-green-secondary-rgb">ARMONIA Academy</p>
                  </div>

                  <div className="flex gap-2">
                    <img src={card.pin} alt="" className="w-5 aspect-square object-contain" />
                    <p className="m-0 text-sm tracking-wider text-[#4D5756]">Bucuresti</p>
                  </div>

                  <div className={`~text-4xl/5xl mt-2 font-saint ${card.culoareText}`}>
                    <p>{card.name}</p>
                  </div>

                  <div className="text-[#333931] text-sm max-w-64">
                    <p>{card.customText}</p>
                  </div>

                  <div className="flex gap-2 mt-6">
                    <div className="relative text-[#E6E6E6]">
                      <div className="absolute">
                        <img src="/images/red-line.png" alt="" />
                      </div>
                      <p className="text-xl font-bold font-epilogue">{card.pretFull}</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold font-epilogue text-green-secondary">{card.pretDiscounted}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    <div
                      className={cn(
                        'flex select-none items-center justify-center rounded-full gap-2 pl-4 text-white transition active:scale-[0.97]', card.buttonColor1
                      )}
                    >
                      <Link key={card.id} to={`/curs/${card.id}`} state={{ card }}>
                        <span className="text-sm font-medium">Vezi mai Mult</span>
                      </Link>
                      <div className={cn("p-4 rounded-full", card.buttonColor2)}>
                        <FiArrowRight className="text-xl" />
                      </div>
                    </div>
                    <div className="flex md:hidden items-end">
                      <img src={card.humanIcon} alt="" className="w-7 h-12" />
                    </div>
                  </div>

                </div>

                <div className="hidden md:flex self-end">
                  <img src={card.humanIcon} alt="" className="w-7 h-12" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-300">Nicio potrivire</p>
        )}
      </div>

      <div className="md:container flex w-full relative md:mx-auto rounded-3xl  bg-yellow-secondary text-black">
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
            <span className="bg-white ~text-xs/sm text-nowrap rounded-full tracking-wider font-semibold px-4 py-2">
              Programează o discuție
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}