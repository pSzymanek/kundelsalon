import type { ServiceCategory } from "../types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "small-dogs",
    categoryName: "Kleine Hunde",
    badge: "Bis 10 kg",
    description: "Sanfte, stressfreie Pflege für Zwerg- und Kleinrassen. Ideal für empfindliche Lieblinge.",
    examples: "z.B. Malteser, Havaneser, Yorkshire Terrier, Pomeranian, Zwergpudel, Shih Tzu, Dackel",
    items: [
      {
        id: "sd-complete",
        name: "Komplettpflege Wellness",
        tagline: "Das Rundum-Sorglos-Paket für strahlendes Fell & Wohlbefinden",
        price: 75,
        duration: "ca. 75 - 90 Min.",
        popular: true,
        features: [
          "Wohltuendes Schaumbad mit Bio-Hautpflegeshampoo & Conditioner",
          "Sanftes Trocknen mit leisem, handgeführtem Föhn (keine Föhnbox!)",
          "Rassetypischer Scherenschnitt, Faconieren oder Konturenschnitt",
          "Pfoten- & Ballenpflege mit nährendem Bio-Pfotenbalsam",
          "Fachgerechte Krallenkürzung & Intimpflege",
          "Sanfte Ohren- & Augenreinigung"
        ]
      },
      {
        id: "sd-hygiene",
        name: "Hygiene- & Erfrischungspaket",
        tagline: "Zwischenpflege für saubere Pfötchen und frischen Duft",
        price: 55,
        duration: "ca. 45 - 60 Min.",
        features: [
          "Entspannendes Pflegebad & Föhnen",
          "Gründliches Ausbürsten & Kämmen",
          "Freischneiden der Augenpartie & Pfotenunterseite",
          "Hygienischer Intimzonenschnitt",
          "Krallen schneiden & Ohrenhygiene"
        ]
      },
      {
        id: "sd-deshedding",
        name: "Unterwoll-Entfernung (Deshedding)",
        tagline: "Befreit die Haut von totem Haar – maximale Atmungsaktivität",
        price: 65,
        duration: "ca. 60 Min.",
        features: [
          "Intensive Entfernung von losem Unterfell mit Spezialwerkzeug",
          "Spezialbad zur Öffnung der Haarfollikel",
          "Blow-Out-Technik für schonenden Fellwechsel",
          "Pfotenpflege & Krallenkürzen"
        ]
      }
    ]
  },
  {
    id: "medium-dogs",
    categoryName: "Mittlere Hunde",
    badge: "10 - 25 kg",
    description: "Ausgewogene Fellpflege für aktive Begleiter mit dichterem Fell oder Lockenstruktur.",
    examples: "z.B. Cocker Spaniel, Französische Bulldogge, Border Collie, Beagle, Mittelpudel, Schnauzer",
    items: [
      {
        id: "md-complete",
        name: "Komplettpflege Wellness",
        tagline: "Vollständige Schönheits- und Gesundheitspflege für mittlere Rassen",
        price: 89,
        duration: "ca. 90 - 110 Min.",
        popular: true,
        features: [
          "2-fach Reinigung mit tiefenwirksamem Bio-Shampoo & Seidenmaske",
          "Stressfreies Handföhnen mit Temperaturkontrolle",
          "Fachgerechtes Schneiden, Scheren oder rassetypisches Modellieren",
          "Pfoten ausscheren, Ballenschutz & Krallenschneiden",
          "Gründliche Ohrenreinigung & Zupfen überflüssiger Ohrhaare",
          "Prüfung von Haut und Fell auf Zecken oder Irritationen"
        ]
      },
      {
        id: "md-hygiene",
        name: "Hygiene & Ausbürsten",
        tagline: "Ideal zwischen zwei großen Schuren oder nach Waldspaziergängen",
        price: 69,
        duration: "ca. 60 Min.",
        features: [
          "Bürsten, Entfilzen kleiner Knötchen & Kämmen",
          "Warmwasserbad mit hypoallergenem Sensitiv-Shampoo",
          "Föhnen & Konturenausbesserung an Pfoten & Fahnen",
          "Krallen kürzen & Ohren reinigen"
        ]
      },
      {
        id: "md-deshedding",
        name: "Intensiv-Deshedding Unterwolle",
        tagline: "Perfekt bei saisonalem Fellwechsel für weniger Haare zu Hause",
        price: 79,
        duration: "ca. 75 Min.",
        features: [
          "Tiefen-Entwollung mit sanften Spezialkämmen",
          "Entfilzungsspray & feuchtigkeitsspendendes Bad",
          "Ausblasen toter Haare mit regulierbarem Warmluftföhn",
          "Krallen schneiden & Pfotenbalsam"
        ]
      }
    ]
  },
  {
    id: "large-dogs",
    categoryName: "Große Hunde",
    badge: "Ab 25 kg",
    description: "Großzügige Pflege mit ergonomischen Einstiegshilfen für gelenkschonenden Komfort.",
    examples: "z.B. Golden Retriever, Labrador, Königspudel, Berner Sennenhund, Australian Shepherd, Schäferhund",
    items: [
      {
        id: "ld-complete",
        name: "Komplettpflege Premium",
        tagline: "Luxusbehandlung für stattliche Rassen – mit ergonomischer Einstiegswanne",
        price: 115,
        duration: "ca. 120 - 150 Min.",
        popular: true,
        features: [
          "Gelenkschonender Einstieg in die hydraulische Wohlfühl-Badewanne",
          "Intensive Hydromassage mit stärkendem Vitalshampoo",
          "Vollständiges Trockenföhnen von Hand (keine Zwangsbelüftung)",
          "Kompletter Schnitt nach Rassestandard oder Kundenwunsch",
          "Pfotenunterseite ausscheren, Krallen feilen & Ballenbalsam",
          "Schonende Augen- und Gehörgangspflege"
        ]
      },
      {
        id: "ld-deshedding",
        name: "Großes Unterwoll-Spezial",
        tagline: "Enorme Entlastung bei Hitzestau und schwerem Unterfell",
        price: 98,
        duration: "ca. 90 - 120 Min.",
        features: [
          "Professionelles Auskämmen von Tonnen toter Unterwolle",
          "Kombiniertes Wasch- und Duschbad mit entfilzender Spülung",
          "Power-Blowing-Verfahren zur hautschonenden Fellentlastung",
          "Krallenpflege & Erfrischung"
        ]
      },
      {
        id: "ld-washbrush",
        name: "Baden & Ausbürsten",
        tagline: "Gründliche Reinigung & Glanz für kurz- und stockhaarige Rassen",
        price: 85,
        duration: "ca. 75 Min.",
        features: [
          "Baden mit rückfettenden Pflegestoffen für empfindliche Hundehaut",
          "Gründliches Ausbürsten von Schmutz und abgestorbenem Haar",
          "Komplett trocknen & seidiges Finish-Glanzspray",
          "Krallencheck & Ohrenpflege"
        ]
      }
    ]
  },
  {
    id: "cats",
    categoryName: "Katzenpflege",
    badge: "Samtpfoten",
    description: "Besonders behutsames Handling ohne Narkose in einer ruhigen, hundefreien Umgebung.",
    examples: "z.B. Britisch Kurzhaar, Ragdoll, Maine Coon, Perser, Norwegische Waldkatze, Europäisch Kurzhaar",
    items: [
      {
        id: "cat-complete",
        name: "Sanfte Komplettpflege Katze",
        tagline: "Entspanntes Grooming speziell auf die Katzenseele abgestimmt",
        price: 79,
        duration: "ca. 60 - 75 Min.",
        popular: true,
        features: [
          "Absolut ruhige Atmosphäre – kein Hundegebell, keine Hektik",
          "Gefühlvolles Entfilzen und Ausbürsten von Knötchen",
          "Entfernen von überschüssiger Unterwolle (weniger Haarballen)",
          "Sicheres und schmerzfreies Kürzen der Krallenspitzen",
          "Augen- und Ohrenhygiene mit reizfreier Kamillenlotion",
          "Besitzer dürfen während der gesamten Behandlung beruhigend dabeibleiben"
        ]
      },
      {
        id: "cat-matting",
        name: "Teilrasur / Entfilzungsschnitt",
        tagline: "Schmerzfreie Befreiung von festen Filzplatten & Knoten",
        price: 55,
        duration: "ca. 45 Min.",
        features: [
          "Präzises Entfernen dichter Filzknoten mit leiser Feinschnitt-Maschine",
          "Hautschonende Schermethode verhindert Ziepen und Reizungen",
          "Sanftes Glattbürsten des gesunden Restfells",
          "Krallenpflege & Pfotenbalsam"
        ]
      }
    ]
  },
  {
    id: "specials",
    categoryName: "Spezial- & Wellness",
    badge: "Exklusiv",
    description: "Gezielte Zusatzbehandlungen für Zahngesundheit, Welpen und Rauhaarrassen.",
    examples: "Zahnpflege, Trimmen von Hand, Welpentraining & Spa-Rituale",
    items: [
      {
        id: "sp-teeth",
        name: "Emmi-Pet Ultraschall-Zahnreinigung",
        tagline: "100% geräuschlos, ohne Vibration und ohne gefährliche Narkose",
        price: 45,
        duration: "ca. 30 - 40 Min.",
        popular: true,
        features: [
          "Sanfte Beseitigung von Zahnbelag, Plaque & Zahnstein",
          "Wirkt gegen Zahnfleischentzündungen und üblen Maulgeruch",
          "Völlig schmerzfrei & ohne Betäubung",
          "Folgebehandlung / Auffrischung innerhalb von 8 Wochen: nur 25 €"
        ]
      },
      {
        id: "sp-puppy",
        name: "Welpen-Eingewöhnung (Schnuppertag)",
        tagline: "Bis 6 Monate: Spielerisches Kennenlernen für ein stressfreies Hundeleben",
        price: 35,
        duration: "ca. 40 Min.",
        features: [
          "Entspanntes Erkunden des Salons mit vielen Leckerlis & Streicheleinheiten",
          "Sanftes Heranführen an Tisch, Bürste, Kamm und Föhngeräusche",
          "Kleiner Pfoten- und Augenhaarschnitt zum Üben",
          "Wertvolle Pflegetipps für Frauchen & Herrchen für zu Hause"
        ]
      },
      {
        id: "sp-stripping",
        name: "Handstripping (Fachgerechtes Trimmen)",
        tagline: "Für Rauhaar- und Drahthaarrassen – von Hand gezupft nach Standard",
        price: 50,
        duration: "pro Stunde (abgerechnet im 15-Min-Takt)",
        features: [
          "Schmerzfreies Entfernen von reifem, abgestorbenem Deckhaar von Hand",
          "Erhält die natürliche Farbintensität und wetterfeste Fellstruktur",
          "Ideal für Dackel, Zwergschnauzer, Terrier und Jagdhunde",
          "Inklusive anschließender Beruhigungspflege für die Haarfollikel"
        ]
      }
    ]
  }
];

export const salonAddons = [
  { name: "Krallenschneiden & Feilen separat", price: 15, duration: "15 Min" },
  { name: "Medizinisches / Hypoallergenes Spezialbad", price: 12, duration: "10 Min" },
  { name: "Zeckenentfernung & Desinfektion", price: 8, duration: "10 Min" },
  { name: "Intensive Ballenpflege mit Bienenwachs", price: 10, duration: "10 Min" }
];
