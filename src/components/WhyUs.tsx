import { HeartHandshake, Shield, Sparkles, Coffee, CheckCircle2 } from "lucide-react";

export const WhyUs = () => {
  const pillars = [
    {
      icon: HeartHandshake,
      title: "1. Zeit, Geduld & Einfühlungsvermögen",
      desc: "Wir betreiben keinen Fließband-Salon. Jedes Tier bekommt die Zeit, die es braucht, um Vertrauen aufzubauen. Bei ängstlichen Tieren legen wir gezielte Kuschel- und Erholungspausen ein.",
      badge: "Mit Herz & Verstand"
    },
    {
      icon: Shield,
      title: "2. Ohne Narkose & ohne Zwang",
      desc: "Keine Beruhigungsmittel, keine Fixiergalgen. Wir arbeiten ausschließlich mit sanfter Führung, positiver Bestärkung und professioneller Grifftechnik, die dem Tier Sicherheit vermittelt.",
      badge: "100% Tierschutzkonform"
    },
    {
      icon: Sparkles,
      title: "3. Modernste Salon-Ausstattung",
      desc: "Ergonomische, hydraulisch absenkbare Badewannen für schonenden Einstieg großer Hunde, leise Handföhne ohne Boxen-Einsperren und täglich sterilisierte Scheren & Schermesser.",
      badge: "Höchste Hygiene"
    },
    {
      icon: Coffee,
      title: "4. Frauchen & Herrchen willkommen",
      desc: "Transparenz schafft Vertrauen: Sie dürfen gerne in unserer gemütlichen Lounge bei einer Tasse Kaffee verweilen oder nach kurzer Eingewöhnung den Bummel in der Stadt genießen.",
      badge: "Wohlfühlatmosphäre"
    }
  ];

  return (
    <section id="warum-giunia" className="py-20 relative bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">
            Unser Qualitätsversprechen
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Warum Hundesalon Giunia?
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Wir sind selbst leidenschaftliche Tierhalter. Wir wissen, wie viel Ihnen Ihr Vierbeiner
            bedeutet und dass Sie ihn nur in die besten, liebevollsten Hände geben möchten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-medium text-stone-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Für Hunde &amp; Katzen aller Rassen und jedes Alters</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
              Haben Sie einen besonders ängstlichen oder älteren Hund?
            </h4>
            <p className="text-sm text-stone-600">
              Sprechen Sie uns vorab an. Wir planen extra Ruhezeiten ein und stimmen jeden Handgriff individuell ab.
            </p>
          </div>
          <a
            href="https://wa.me/4917612345678?text=Hallo%20Hundesalon%20Giunia,%20ich%20habe%20eine%20Frage%20zu%20einem%20%C3%A4ngstlichen%20Hund."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold tracking-wide transition-colors"
          >
            Persönliche Beratung anfragen
          </a>
        </div>

      </div>
    </section>
  );
};
