import fs from 'fs';
import path from 'path';

const srcDir = './src';
const pagesDir = path.join(srcDir, 'pages');

if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir);
}

const homeTsx = `import React from 'react';
import { Hero } from "../components/Hero";
import { WhyUs } from "../components/WhyUs";
import { ServicesPricing } from "../components/ServicesPricing";
import { BeforeAfterGallery } from "../components/BeforeAfterGallery";
import { Testimonials } from "../components/Testimonials";
import { FaqSection } from "../components/FaqSection";
import { ContactSection } from "../components/ContactSection";
import type { ServiceItem } from "../types";

interface HomeProps {
  onOpenBooking: () => void;
  onSelectService: (categoryName: string, service: ServiceItem) => void;
}

export function Home({ onOpenBooking, onSelectService }: HomeProps) {
  return (
    <main className="flex-grow">
      <Hero onOpenBooking={onOpenBooking} />
      <WhyUs />
      <ServicesPricing onSelectService={onSelectService} />
      <BeforeAfterGallery />
      <Testimonials />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
`;

fs.writeFileSync(path.join(pagesDir, 'Home.tsx'), homeTsx, 'utf8');

const appTsx = `import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BookingCalculatorModal } from "./components/BookingCalculatorModal";
import { LegalModals } from "./components/LegalModals";
import { Home } from "./pages/Home";
import { PricingPage } from "./pages/PricingPage";

import type { ServiceItem } from "./types";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    categoryName: string;
    service: ServiceItem;
  } | null>(null);

  const [legalModal, setLegalModal] = useState<"impressum" | "datenschutz" | "agb" | null>(null);

  const handleSelectService = (categoryName: string, service: ServiceItem) => {
    setSelectedService({ categoryName, service });
    setBookingOpen(true);
  };

  const handleOpenBookingDirect = () => {
    setSelectedService(null);
    setBookingOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-primary-light)] selection:text-[var(--color-primary)] relative">
        <Header onOpenBooking={handleOpenBookingDirect} />

        <Routes>
          <Route path="/" element={<Home onOpenBooking={handleOpenBookingDirect} onSelectService={handleSelectService} />} />
          <Route path="/preise" element={<PricingPage />} />
        </Routes>

        <Footer
          onOpenLegal={(type) => setLegalModal(type)}
          onOpenBooking={handleOpenBookingDirect}
        />

        <BookingCalculatorModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          preselectedService={selectedService}
        />

        <LegalModals
          type={legalModal}
          onClose={() => setLegalModal(null)}
        />
        
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(path.join(srcDir, 'App.tsx'), appTsx, 'utf8');

const floatingWhatsAppTsx = `import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/491791700661"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[#25D366]/40 transition-all duration-300 group"
      aria-label="Chat auf WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-[#25D366] px-4 py-2 rounded-2xl font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Jetzt Termin vereinbaren!
      </span>
    </a>
  );
}
`;

fs.writeFileSync(path.join(srcDir, 'components', 'FloatingWhatsApp.tsx'), floatingWhatsAppTsx, 'utf8');

const pricingPageTsx = `import { pricingData } from "../data/servicesData";
import { MessageCircle, Check } from "lucide-react";
import { Link } from "react-router-dom";

export function PricingPage() {
  return (
    <main className="flex-grow pt-32 pb-24 bg-[var(--color-bg-alt)]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-6">Unsere Preise</h1>
          <p className="text-xl text-stone-600 mb-8">
            Transparente Preise für exklusive Pflege. Jeder Hund ist einzigartig, daher richten sich unsere Preise nach Aufwand, Verhalten und Fellzustand.
          </p>
          <a
            href="https://wa.me/491791700661"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE53] text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-xl hover:shadow-[#25D366]/30"
          >
            <MessageCircle className="w-6 h-6" />
            Anfrage über WhatsApp senden
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Komplettpflege Section - Prominent */}
          <div className="lg:col-span-2 bg-[var(--color-bg)] rounded-[2rem] p-8 md:p-12 shadow-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-light)] opacity-30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="mb-10 relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-primary)] mb-4">{pricingData[0].title}</h2>
              <p className="text-lg text-stone-600 max-w-2xl">{pricingData[0].description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-4">
                <h3 className="font-serif text-xl mb-6">Inklusivleistungen:</h3>
                <ul className="space-y-3">
                  {pricingData[0].includes?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700">
                      <div className="mt-1 bg-[var(--color-primary-light)] text-[var(--color-primary)] rounded-full p-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 md:p-8">
                <div className="space-y-4">
                  {pricingData[0].items.map((item) => (
                    <div key={item.id} className="flex justify-between items-end border-b border-stone-200 pb-3 last:border-0">
                      <span className="font-medium text-lg">{item.name}</span>
                      <div className="text-right">
                        {item.pricePrefix && <span className="text-sm text-stone-500 mr-1">{item.pricePrefix}</span>}
                        <span className="font-serif text-xl text-[var(--color-primary)]">{item.price} €</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Other Categories */}
          {pricingData.slice(1).map((category) => (
            <div key={category.id} className="bg-[var(--color-bg)] rounded-[2rem] p-8 shadow-sm border border-stone-100">
              <h3 className="text-2xl font-serif text-[var(--color-primary)] mb-3">{category.title}</h3>
              {category.description && <p className="text-stone-600 mb-8">{category.description}</p>}
              
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center border-b border-stone-100 pb-3 last:border-0 group">
                    <div>
                      <div className="font-medium text-stone-800">{item.name}</div>
                      {item.tagline && <div className="text-sm text-stone-500 mt-1">{item.tagline}</div>}
                    </div>
                    <div className="text-right whitespace-nowrap pl-4">
                      {item.pricePrefix && <span className="text-sm text-stone-500 mr-1">{item.pricePrefix}</span>}
                      <span className="font-serif text-lg text-[var(--color-primary)] font-medium">
                        {item.price} €
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-8">
            Alle Preise inkl. MwSt. Bei extremen Verfilzungen oder parasitärem Befall behalten wir uns vor, einen Aufschlag nach Aufwand zu berechnen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/491791700661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE53] text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Termin via WhatsApp
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-8 py-4 rounded-full font-medium transition-all"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(pagesDir, 'PricingPage.tsx'), pricingPageTsx, 'utf8');
console.log('Pages built successfully');
