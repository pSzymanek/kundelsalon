import { Star, ShieldCheck, Heart, Sparkles, ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero = ({ onOpenBooking }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[var(--color-primary-light)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[var(--color-gold-light)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-primary-light)] border border-[var(--color-primary-border)] text-[var(--color-primary)] text-xs font-semibold tracking-wide uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hundesalon &amp; Katzenpflege Giunia</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]">
              Liebevolle Pflege &amp; Wellness für Ihren Vierbeiner –{" "}
              <span className="italic font-normal text-[var(--color-primary)]">ganz ohne Stress.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              Willkommen bei Hundesalon Giunia. Wir verbinden fachgerechte Scherenschnitte,
              wohltuende Pflegebäder und schonende Unterwollentfernung mit absoluter Ruhe,
              Geduld und 100% veganer Bio-Kosmetik. Weil Ihr Tier nur das Beste verdient.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-stone-700">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                </div>
                <span>100% ohne Narkose &amp; ohne Beruhigungsmittel</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Star className="w-3.5 h-3.5 text-amber-600 fill-current" />
                </div>
                <span>4.9 / 5.0 Google Bewertung (über 180 Reviews)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                  <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] fill-current" />
                </div>
                <span>Individuelle Termine ohne Fließband-Hektik</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                </div>
                <span>NEU: Emmi-Pet Ultraschall-Zahnreinigung</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-lg shadow-[var(--color-primary)]/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Termin online anfragen</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#leistungen"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 shadow-xs transition-all hover:border-stone-300"
              >
                <span>Leistungen &amp; Preise ansehen</span>
              </a>

              <a
                href="https://wa.me/4917612345678?text=Hallo%20Hundesalon%20Giunia,%20ich%20m%C3%B6chte%20gerne%20einen%20Termin%20anfragen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 rounded-2xl text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all"
                title="WhatsApp Direkt-Kontakt"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80" alt="Kundin" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Kunde" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Kundin" />
              </div>
              <div className="text-xs text-stone-600">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-stone-800 ml-1">4.9 / 5</span>
                </div>
                <span>Vertraut von Hundebesitzern in der Region</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=80"
                  alt="Gepflegter Hund nach professionellem Schnitt bei Hundesalon Giunia"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-left">
                  <p className="text-xs uppercase tracking-widest text-stone-200 font-semibold">Ergebnis-Garantie</p>
                  <p className="font-serif-luxury text-lg font-medium text-white">„Frisch gestylt, fluffig &amp; glücklich.”</p>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center text-[var(--color-primary)]">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">100% Stressfrei</p>
                  <p className="text-[11px] text-stone-500">Sanfte Berührung &amp; Pausen</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">Bio Naturkosmetik</p>
                  <p className="text-[11px] text-stone-500">Frei von Silikonen &amp; Parabenen</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
