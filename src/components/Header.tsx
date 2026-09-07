import { useState, useEffect } from "react";
import { Phone, Calendar, Menu, X, Heart, MessageCircle } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header = ({ onOpenBooking }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Startseite", href: "#" },
    { label: "Leistungen & Preise", href: "#leistungen" },
    { label: "Warum Giunia?", href: "#warum-giunia" },
    { label: "Vorher & Nachher", href: "#vorher-nachher" },
    { label: "Kundenstimmen", href: "#bewertungen" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontakt", href: "#kontakt" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Announcement top bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-4 flex-wrap">
        <span className="inline-flex items-center gap-1.5">
          <Heart className="w-3.5 h-3.5 text-[#C82338] fill-current" />
          <span>Sanfte Pflege ohne Narkose &amp; ohne Stress</span>
        </span>
        <span className="hidden md:inline text-stone-500">•</span>
        <span className="hidden md:inline-flex items-center gap-2 text-stone-300">
          <span>Öffnungszeiten: Di–Sa nach Vereinbarung</span>
        </span>
        <span className="hidden md:inline text-stone-500">•</span>
        <a
          href="tel:+4917612345678"
          className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>+49 176 1234 5678</span>
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={"w-full transition-all duration-300 " + (
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-2.5 border-b border-stone-200/70"
            : "bg-white/80 backdrop-blur-sm py-3.5 border-b border-stone-200/40"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-12 md:h-14 flex items-center">
              <img
                src="/logo.png"
                alt="Hundesalon Giunia Logo"
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-[var(--color-primary)] transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/4917612345678?text=Hallo%20Hundesalon%20Giunia,%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hover:scale-105"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md shadow-[var(--color-primary)]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Termin buchen</span>
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-[var(--color-primary)]"
            >
              Termin
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 border-t border-stone-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-[var(--color-primary)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2.5">
              <a
                href="https://wa.me/4917612345678?text=Hallo%20Hundesalon%20Giunia,%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium text-sm text-emerald-800 bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Direkt per WhatsApp schreiben</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white bg-[var(--color-primary)] shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Termin online vereinbaren</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
