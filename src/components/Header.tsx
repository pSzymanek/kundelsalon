import { useState, useEffect } from "react";
import { Calendar, Menu, X, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

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
    { label: "Startseite", href: "/" },
    { label: "Preise & Leistungen", href: "/preise" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Philosophie", href: "/#philosophie" },
    { label: "Verwandlungen", href: "/#verwandlungen" },
    { label: "Kontakt", href: "/#kontakt" }
  ];

  return (
    <>
      {/* Top minimal status bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-[11px] py-1.5 px-4 text-center tracking-wider flex items-center justify-center gap-4">
        <span className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-stone-300">Termine für diese Woche verfügbar</span>
        </span>
        <span className="hidden sm:inline text-stone-600">•</span>
        <span className="hidden sm:inline text-stone-300">Stressfreie Einzeltermine ohne Narkose</span>
        <span className="hidden md:inline text-stone-600">•</span>
        <a href="tel:+491791700661" className="hidden md:inline text-stone-300 hover:text-white transition-colors">
          Tel: +49 179 1700661
        </a>
      </div>

      {/* Floating Island Navigation Bar */}
      <header className="sticky top-4 z-50 w-full px-4 sm:px-6 pointer-events-none">
        <nav className={"max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto border " + (
          isScrolled
            ? "bg-white/92 backdrop-blur-xl shadow-xl shadow-stone-900/5 border-stone-200/80 py-2.5 px-5"
            : "bg-white/80 backdrop-blur-lg shadow-md shadow-stone-900/3 border-stone-200/60 py-3 px-6"
        )}>
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 shrink-0 group">
              <img
                src="/logo.png"
                alt="Hundesalon Giunia"
                className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ mixBlendMode: "multiply" }}
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-stone-600 hover:text-[var(--color-primary)] transition-colors relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-200 group-hover:w-full rounded-full" />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <a
                href="https://wa.me/491791700661?text=Hallo%20Hundesalon%20Giunia,%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE53] shadow-md transition-all hover:scale-105"
                title="WhatsApp Direkt"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md shadow-[var(--color-primary)]/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Termin anfragen</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[var(--color-primary)]"
              >
                Termin
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label="Menü öffnen"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 pb-3 border-t border-stone-100 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-sm font-medium text-stone-700 hover:bg-stone-50 hover:text-[var(--color-primary)]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[var(--color-primary)]"
                >
                  Termin online vereinbaren
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};
