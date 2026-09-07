import { useState } from "react";
import { serviceCategories, salonAddons } from "../data/servicesData";
import type { ServiceItem } from "../types";
import { Check, Clock, Sparkles, HelpCircle, ArrowRight } from "lucide-react";

interface ServicesPricingProps {
  onSelectService: (categoryName: string, service: ServiceItem) => void;
}

export const ServicesPricing = ({ onSelectService }: ServicesPricingProps) => {
  const [activeTab, setActiveTab] = useState<string>("small-dogs");

  const currentCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  return (
    <section id="leistungen" className="py-20 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">
            Transparente Preise &amp; Rundum-Pflege
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Unsere Leistungen &amp; Pakete
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Wählen Sie die passende Kategorie für Ihren Liebling. Alle Behandlungen beinhalten
            hochwertige Bio-Pflegeprodukte, liebevolle Betreuung und sanfte Föhntechnik von Hand.
          </p>
        </div>

        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={"px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer " + (
                  isActive
                    ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/20 scale-105"
                    : "bg-stone-100 hover:bg-stone-200/80 text-stone-700"
                )}
              >
                <span>{cat.categoryName}</span>
                <span className={"ml-2 text-[11px] px-2 py-0.5 rounded-full " + (isActive ? "bg-white/20 text-white" : "bg-stone-200 text-stone-600")}>
                  {cat.badge}
                </span>
              </button>
            );
          })}
        </div>

        <div className="bg-stone-50 rounded-2xl p-4 sm:p-6 mb-10 border border-stone-200/70 text-left flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block mb-1">
              {currentCategory.categoryName} • {currentCategory.badge}
            </span>
            <p className="text-sm font-medium text-stone-800">
              {currentCategory.description}
            </p>
            <p className="text-xs text-stone-500 mt-0.5 italic">
              {currentCategory.examples}
            </p>
          </div>
          <div className="shrink-0 text-xs text-stone-500 flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-stone-200">
            <HelpCircle className="w-4 h-4 text-stone-400" />
            <span>Preise können bei starker Verfilzung leicht variieren</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left items-stretch">
          {currentCategory.items.map((item) => {
            return (
              <div
                key={item.id}
                className={"rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative " + (
                  item.popular
                    ? "bg-white border-2 border-[var(--color-primary)] shadow-xl shadow-[var(--color-primary)]/10 ring-4 ring-[var(--color-primary-light)]"
                    : "bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-stone-300"
                )}
              >
                {item.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-white text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Sehr beliebt</span>
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-stone-500 mb-4 min-h-[32px]">
                    {item.tagline}
                  </p>

                  <div className="flex items-baseline gap-2 pb-5 border-b border-stone-100 mb-5">
                    <span className="text-xs text-stone-400 font-medium">ab</span>
                    <span className="text-3xl font-extrabold text-stone-900 tracking-tight">
                      {item.price} €
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 text-xs text-stone-500 bg-stone-100 px-2.5 py-1 rounded-lg">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {item.duration}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                      Im Paket enthalten:
                    </p>
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(currentCategory.categoryName, item)}
                  className={"w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer " + (
                    item.popular
                      ? "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-md shadow-[var(--color-primary)]/20"
                      : "bg-stone-900 hover:bg-stone-800 text-white"
                  )}
                >
                  <span>Diesen Service auswählen</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200">
          <div className="text-left mb-4">
            <h4 className="font-serif-luxury text-lg font-bold text-stone-900">
              Kleine Zusatzleistungen &amp; Einzelbehandlungen
            </h4>
            <p className="text-xs text-stone-500">
              Können zu jedem Paket flexibel hinzugebucht oder als schneller Kurzbesuch vereinbart werden:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {salonAddons.map((addon, aIdx) => (
              <div
                key={aIdx}
                className="bg-white rounded-2xl p-4 border border-stone-200/80 flex items-center justify-between shadow-2xs"
              >
                <div className="text-left">
                  <p className="text-xs font-bold text-stone-900">{addon.name}</p>
                  <p className="text-[11px] text-stone-400">Dauer: {addon.duration}</p>
                </div>
                <div className="text-right shrink-0 ml-2">
                  <span className="text-sm font-extrabold text-[var(--color-primary)]">
                    +{addon.price} €
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
