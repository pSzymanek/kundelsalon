
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
