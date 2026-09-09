import { useState } from "react";
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
