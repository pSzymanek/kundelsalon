import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { ServicesPricing } from "./components/ServicesPricing";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { Testimonials } from "./components/Testimonials";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { BookingCalculatorModal } from "./components/BookingCalculatorModal";
import { LegalModals } from "./components/LegalModals";

import type { ServiceItem } from "./types";

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
          <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-primary-light)] selection:text-[var(--color-primary)]">
        
        {/* Sticky Header */}
        <Header onOpenBooking={handleOpenBookingDirect} />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero onOpenBooking={handleOpenBookingDirect} />
                    <WhyUs />
          <ServicesPricing onSelectService={handleSelectService} />
          <BeforeAfterGallery />
          <Testimonials />
          <FaqSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer
          onOpenLegal={(type) => setLegalModal(type)}
          onOpenBooking={handleOpenBookingDirect}
        />

        {/* Modals */}
        <BookingCalculatorModal
          isOpen={bookingOpen}
          onClose={() => setBookingOpen(false)}
          preselectedService={selectedService}
        />

        <LegalModals
          type={legalModal}
          onClose={() => setLegalModal(null)}
        />

        {/* Interactive Theme Switcher Preview Widget */}
        

      </div>
      );
}

export default App;

