import { HeartHandshake, Shield, Sparkles, Coffee, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const WhyUs = () => {
  return (
    <section id="philosophie" className="py-20 relative bg-stone-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-stone-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-primary)] block mb-2">
              Philosophie &amp; Versprechen
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Warum Giunia besonders ist.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            Wir haben mit den veralteten Mustern traditioneller Salons gebrochen.
            Bei uns gibt es keine Massenabfertigung, kein Einsperren in Föhnboxen und keinen Stress.
          </p>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Tile 1: Main Manifesto Hero (Spans 8 cols) */}
          <div className="md:col-span-8 rounded-[2.5rem] bg-stone-900 text-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[380px] group">

            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-stone-200 text-xs font-semibold mb-6">
                <HeartHandshake className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                <span>Unser Herzstück: Geduld</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-4xl font-semibold leading-tight max-w-xl text-white">
                „Wir schneiden nicht gegen die Natur des Tieres, sondern arbeiten im Einklang mit seinem Vertrauen.”
              </h3>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-stone-300">
              <p className="max-w-md leading-relaxed">
                Jeder Termin ist ein exklusives Einzeltreffen. Ängstliche oder junge Hunde bekommen alle Zeit der Welt, um aufzutauen.
              </p>
              <div className="flex items-center gap-2 shrink-0 font-bold text-white">
                <span>100% Einzelführung</span>
                <ArrowUpRight className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
            </div>
          </div>

          {/* Bento Tile 2: No Sedation Guarantee (Spans 4 cols) */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-white p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-stone-900 mb-2">
                Ohne Narkose &amp; ohne Beruhigungsmittel
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Keine chemischen Ruhigsteller, keine Zwangsfixierung. Wir setzen auf professionelle Grifftechniken, die dem Tier Sicherheit und Halt geben.
              </p>
            </div>
            
            <div className="pt-6 border-t border-stone-100 flex items-center gap-2 text-[11px] font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Tierschutzgeprüftes Handling</span>
            </div>
          </div>

          {/* Bento Tile 3: Modern Ergonomic Tech & Hygiene (Spans 4 cols) */}
          <div className="md:col-span-4 rounded-[2.5rem] bg-white p-8 border border-stone-200/80 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-serif-luxury text-xl font-bold text-stone-900 mb-2">
                Modernste Spa-Ausstattung
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Absenkbare hydraulische Wannen für gelenkschonenden Einstieg großer Hunde. Keine heißen Trockenboxen – jedes Tier wird sanft von Hand getrocknet.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100 flex items-center gap-2 text-[11px] font-bold text-purple-900">
              <CheckCircle2 className="w-4 h-4 text-purple-600" />
              <span>Sterilisierte Scheren vor jedem Gast</span>
            </div>
          </div>

          {/* Bento Tile 4: Cozy Owner Lounge (Spans 8 cols) */}
          <div className="md:col-span-8 rounded-[2.5rem] bg-stone-50 border border-stone-200/80 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 hover:shadow-md transition-all">
            <div className="space-y-3 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/60 text-stone-700 text-[11px] font-bold uppercase tracking-wider">
                <Coffee className="w-3.5 h-3.5 text-stone-600" />
                <span>Transparenz schafft Vertrauen</span>
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-stone-900">
                Sie dürfen gerne dabeibleiben
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Keine verschlossenen Hintertüren: In unserer gemütlichen Lounge können Sie bei Kaffee oder Tee zusehen oder ganz entspannt die Wartezeit genießen.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-56 h-36 rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=600&q=80"
                alt="Wohlfühlatmosphäre Hundesalon Giunia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
