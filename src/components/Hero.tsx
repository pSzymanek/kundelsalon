import { ArrowDownRight, Sparkles, MessageCircle, Star, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero = ({ onOpenBooking }: HeroProps) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:pt-10 lg:pb-24 text-left">
      
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[var(--color-primary-light)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[var(--color-gold-light)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Magazine Editorial Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 border-b border-stone-200/70">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200/80 shadow-2xs text-[11px] font-semibold tracking-wider uppercase text-stone-600">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span>Haute Grooming Atelier • Hunde &amp; Katzen</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-semibold text-stone-900 leading-[1.08] tracking-tight">
              Die Kunst sanfter Fellpflege.{" "}
              <span className="italic font-normal text-[var(--color-primary)]">Ganz ohne Stress.</span>
            </h1>
          </div>

          <div className="lg:col-span-4 space-y-4 lg:pl-6 lg:border-l border-stone-200">
            <p className="text-sm text-stone-600 leading-relaxed">
              Willkommen bei <strong>Hundesalon Giunia</strong>. Wir verbinden präzise rassetypische Scherenschnitte
              mit absoluter Ruhe, geduldiger Zuwendung und 100% natürlicher Bio-Kosmetik.
            </p>

            <div className="flex items-center gap-4 pt-1">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-md shadow-[var(--color-primary)]/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Termin anfragen
              </button>
              <a
                href="#leistungen"
                className="inline-flex items-center gap-1 text-xs font-semibold text-stone-800 hover:text-[var(--color-primary)] transition-colors group"
              >
                <span>Preise &amp; Menü</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Hero Visual Collage (Editorial Asymmetry) */}
        <div className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Large Editorial Image */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/11] shadow-2xl border border-stone-200/80 group">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=80"
                alt="Boutique Hundesalon Giunia"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-stone-300">Atelier Standard</p>
                  <p className="font-serif-luxury text-xl sm:text-2xl font-medium">Individuelle Einzelführung &amp; Kuschelpausen</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>100% Bio-Shampoo</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Quality Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-bold text-stone-900">
                  <span>4.9 / 5.0 Google Bewertung</span>
                </div>
                <p className="text-[11px] text-stone-500">Aus über 180 echten Kundenstimmen</p>
              </div>
            </div>
          </div>

          {/* Right Side Editorial Story & Feature Blocks */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            
            {/* Editorial Feature 1: No Sedation */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-2xs hover:border-[var(--color-primary)]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-900">100% ohne Narkose &amp; Fixierung</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Wir arbeiten niemals mit Beruhigungsmitteln oder Zwang. Jedes Tier wird mit sanfter Führung und Geduld begleitet.
              </p>
            </div>

            {/* Editorial Feature 2: Ultrasound Teeth Cleaning */}
            <div className="p-6 rounded-3xl bg-white border border-stone-200/80 shadow-2xs hover:border-[var(--color-primary)]/40 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-serif-luxury text-lg font-bold text-stone-900">Emmi-Pet Ultraschall</h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Geräuschlose, vibrationsfreie Zahnreinigung gegen Zahnstein und Maulgeruch – schonend und ohne Tierarzt-Narkose.
              </p>
            </div>

            {/* Quick WhatsApp Concierge Bar */}
            <div className="p-5 rounded-3xl bg-[#25D366] text-white flex items-center justify-between gap-4 shadow-xl shadow-[#25D366]/20">
              <div>
                <p className="text-sm font-bold text-white mb-0.5">Termin via WhatsApp</p>
                <p className="text-xs text-white/90 font-medium">Schnell &amp; unkompliziert anfragen</p>
              </div>
              <a
                href="https://wa.me/491791700661?text=Hallo%20Hundesalon%20Giunia,%20ich%20habe%20eine%20kurze%20Frage."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white text-[#25D366] hover:bg-stone-50 font-bold text-sm inline-flex items-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat starten</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Running Luxury Marquee Ticker */}
      <div className="mt-16 py-3 bg-[#1C1917] text-[#FAF8F5] overflow-hidden whitespace-nowrap border-y border-stone-800">
        <div className="inline-block animate-marquee text-xs font-semibold uppercase tracking-widest space-x-8">
          <span>✦ 100% STRESSFREI</span>
          <span>✦ OHNE NARKOSE &amp; OHNE ZWANG</span>
          <span>✦ EMMI-PET ULTRASCHALL-ZAHNREINIGUNG</span>
          <span>✦ 100% BIO-NATURKOSMETIK</span>
          <span>✦ HYDRAULISCHE EINSTIEGSWANNE</span>
          <span>✦ BEHUTSAME KATZENPFLEGE</span>
          <span>✦ RUNDUM-WELLNESS FÜR JEDE GRÖSSE</span>
          <span>✦ ATELIER HUNDESALON GIUNIA</span>
        </div>
      </div>

    </section>
  );
};
