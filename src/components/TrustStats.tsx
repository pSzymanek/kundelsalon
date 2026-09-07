import { ShieldCheck, Heart, Sparkles, Award } from "lucide-react";

export const TrustStats = () => {
  const stats = [
    {
      icon: ShieldCheck,
      value: "100% Stressfrei",
      label: "Keine Narkose, keine Beruhigungsmittel, kein Zwang",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    },
    {
      icon: Heart,
      value: "1.200+",
      label: "Glückliche Hunde & Katzen seit Saloneröffnung",
      color: "text-[var(--color-primary)]",
      bg: "bg-[var(--color-primary-light)]",
      border: "border-[var(--color-primary-border)]"
    },
    {
      icon: Award,
      value: "4.9 ★★★★★",
      label: "Google-Kundenzufriedenheit aus über 180 Bewertungen",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-100"
    },
    {
      icon: Sparkles,
      value: "Bio & Vegan",
      label: "Sanfte Pflegeprodukte schonend für sensible Haut & Pfoten",
      color: "text-purple-700",
      bg: "bg-purple-50",
      border: "border-purple-100"
    }
  ];

  return (
    <section className="py-8 bg-white/60 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-100 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className={"w-12 h-12 rounded-xl flex items-center justify-center shrink-0 " + stat.bg + " " + stat.color + " border " + stat.border}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-serif-luxury text-xl font-bold text-stone-900 tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
