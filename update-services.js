import fs from 'fs';

const servicesDataContent = `export interface PricingCategory {
  id: string;
  title: string;
  description?: string;
  items: PricingItem[];
  includes?: string[];
}

export interface PricingItem {
  id: string;
  name: string;
  price: number | string;
  pricePrefix?: string;
  tagline?: string;
}

export const pricingData: PricingCategory[] = [
  {
    id: "komplettpflege",
    title: "Komplettpflege",
    description: "Umfassende Pflege für Haut und Haar, abgestimmt auf Größe und Rasse.",
    includes: [
      "Individuelle Fell- und Hautkontrolle",
      "Baden mit hochwertigem Shampoo",
      "Conditioner / Pflege passend zum Felltyp",
      "Gründliches Föhnen",
      "Bürsten und Kämmen",
      "Unterwolle entfernen (wenn nötig)",
      "Schneiden / Scheren / Modellieren",
      "Pfoten ausschneiden und pflegen",
      "Krallen schneiden",
      "Ohren reinigen",
      "Augenbereich reinigen",
      "Hygiene-/Intimbereich",
      "Individueller Schnitt nach Wunsch"
    ],
    items: [
      { id: "kp-mini", name: "Mini (bis 5kg)", price: 75, pricePrefix: "ab" },
      { id: "kp-klein", name: "Klein (5-10kg)", price: 85, pricePrefix: "ab" },
      { id: "kp-mittel", name: "Mittel (10-20kg)", price: 100, pricePrefix: "ab" },
      { id: "kp-gross", name: "Groß (20-30kg)", price: 120, pricePrefix: "ab" },
      { id: "kp-sehrgross", name: "Sehr groß (30-40kg)", price: 145, pricePrefix: "ab" },
      { id: "kp-xxl", name: "XXL (über 40kg)", price: 165, pricePrefix: "ab" },
    ]
  },
  {
    id: "spezialpflege",
    title: "Spezialpflege",
    description: "Spezifische Behandlungen für anspruchsvolles Fell und besondere Bedürfnisse.",
    items: [
      { id: "sp-unterwolle", name: "Unterwolle / Fellwechsel", price: 25, pricePrefix: "ab" },
      { id: "sp-ausbuersten", name: "Intensives Ausbürsten", price: 25, pricePrefix: "ab" },
      { id: "sp-entfilzen", name: "Entfilzen", price: 20, pricePrefix: "ab" },
      { id: "sp-trimmen", name: "Trimmen", price: 60, pricePrefix: "ab" },
      { id: "sp-doodle", name: "Pudel- / Doodle-Pflege", price: 95, pricePrefix: "ab" },
      { id: "sp-bad", name: "Spezialpflegebad", price: 20, pricePrefix: "ab" },
    ]
  },
  {
    id: "welpen",
    title: "Welpen",
    description: "Behutsame erste Schritte für einen stressfreien Salonbesuch.",
    items: [
      { id: "wel-eingewoehnung", name: "Eingewöhnung", tagline: "Kennenlernen, Bürsten, Pfoten", price: 35, pricePrefix: "ab" },
      { id: "wel-komplett", name: "Komplettpflege Welpe", price: 55, pricePrefix: "ab" },
    ]
  },
  {
    id: "wellness",
    title: "Wellness & Ozon",
    description: "Gesundheitsfördernde Behandlungen für Haut und Fell.",
    items: [
      { id: "wel-ozon", name: "Ozontherapie (15 Min)", price: 20 },
      { id: "wel-ozonbad", name: "Ozon-Wellness + Pflegebad", price: 35, pricePrefix: "ab" },
      { id: "wel-pflege", name: "Wellness-Pflege", price: 25, pricePrefix: "ab" },
    ]
  },
  {
    id: "zusatz",
    title: "Zusatzleistungen",
    description: "Kleine Pflege-Extras zum Dazubuchen.",
    items: [
      { id: "zus-krallen", name: "Krallen schneiden", price: 15 },
      { id: "zus-ohren", name: "Ohren reinigen", price: 15 },
      { id: "zus-augen", name: "Augen / Gesicht freischneiden", price: 15 },
      { id: "zus-pfoten", name: "Pfoten ausschneiden", price: 20 },
      { id: "zus-hygiene", name: "Hygieneschnitt", price: 20 },
      { id: "zus-paket", name: "Paket", tagline: "Krallen, Ohren, Pfoten", price: 40 },
    ]
  }
];
`;

fs.writeFileSync('c:/Users/poczt/Documents/AntiG testowe/groomer_niemiecki/src/data/servicesData.ts', servicesDataContent, 'utf8');
console.log('Done');
