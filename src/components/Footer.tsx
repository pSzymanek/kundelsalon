import { Heart, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  onOpenLegal: (type: "impressum" | "datenschutz" | "agb") => void;
  onOpenBooking: () => void;
}

export const Footer = ({ onOpenLegal, onOpenBooking }: FooterProps) => {
  return (
    <footer className="bg-[#181615] text-stone-300 pt-16 pb-12 border-t border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/95 p-3 rounded-2xl inline-block shadow-sm">
              <img
                src="/logo.png"
                alt="Hundesalon Giunia Logo"
                className="h-14 w-auto object-contain"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Exklusiver Salon für Hunde und Katzen. Liebevolles Grooming, rassetypische Scherenschnitte,
              schonende Unterwollentfernung und Ultraschall-Zahnreinigung ohne Narkose und ohne Stress.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[var(--color-primary)] text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.13-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-800 hover:bg-[var(--color-primary)] text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/" className="hover:text-white transition-colors">Startseite</Link></li>
              <li><Link to="/preise" className="hover:text-white transition-colors">Leistungen &amp; Preise</Link></li>
              <li><a href="/#warum-giunia" className="hover:text-white transition-colors">Warum Giunia?</a></li>
              <li><a href="/#vorher-nachher" className="hover:text-white transition-colors">Vorher &amp; Nachher Galerie</a></li>
              <li><a href="/#bewertungen" className="hover:text-white transition-colors">Google Kundenstimmen (4.9★)</a></li>
              <li><a href="/#faq" className="hover:text-white transition-colors">Häufige Fragen (FAQ)</a></li>
              <li><a href="/#kontakt" className="hover:text-white transition-colors">Kontakt &amp; Anfahrt</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Salon &amp; Kontakt
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Affenbergstr. 5, 74189 Weinsberg</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href="tel:+491791700661" className="hover:text-white">+49 179 1700661</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:hallo@hundesalon-giunia.de" className="hover:text-white">hallo@hundesalon-giunia.de</a>
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all shadow-md cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Termin anfragen</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Rechtliches
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onOpenLegal("impressum")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("datenschutz")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Datenschutzerklärung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("agb")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Salonordnung &amp; AGB
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Hundesalon Giunia. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-1.5">
            <span>Mit Liebe &amp; Hingabe für Tiere gepflegt</span>
            <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
};
