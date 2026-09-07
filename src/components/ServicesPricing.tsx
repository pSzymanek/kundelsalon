import { useState } from "react";
import { serviceCategories, salonAddons } from "../data/servicesData";
import type { ServiceItem } from "../types";
import { Check, Clock, ChevronDown, ChevronUp, Sparkles, ArrowRight, Shield } from "lucide-react";

interface ServicesPricingProps {
  onSelectService: (categoryName: string, service: ServiceItem) => void;
}

export const ServicesPricing = ({ onSelectService }: ServicesPricingProps) => {
  const [activeTab, setActiveTab] = useState<string>("small-dogs");
  const [expandedItemId, setExpandedItemId] = useState<string>("sd-complete");

  const currentCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  const toggleExpand = (id: string) => {
    setExpandedItemId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="leistungen" className="py-24 relative bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-stone-200">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-primary)] block">
              Menü &amp; Behandlungen
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
              Preise &amp; Leistungen nach Maß
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            Transparente Preise ohne Überraschungen. Alle Pakete beinhalten sanfte Föhntechnik von Hand,
            Bio-Kosmetik und professionelle Pfoten- &amp; Ohrenhygiene.
          </p>
        </div>

        {/* Category Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {serviceCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  if (cat.items.length > 0) setExpandedItemId(cat.items[0].id);
                }}
                className={"px-6 py-3 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer " + (
                  isActive
                    ? "bg-stone-900 text-white shadow-md shadow-stone-900/10"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                )}
              >
                <span>{cat.categoryName}</span>
                <span className={"ml-2 text-[10px] uppercase tracking-wider opacity-70"}>
                  ({cat.badge})
                </span>
              </button>
            );
          })}
        </div>

        {/* Category Intro Bar */}
        <div className="mb-10 p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-bold text-stone-900 block mb-0.5">
              {currentCategory.categoryName} • {currentCategory.badge}
            </span>
            <p className="text-stone-600">{currentCategory.description}</p>
            <p className="text-stone-400 italic text-[11px] mt-0.5">{currentCategory.examples}</p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-stone-500 bg-white px-3 py-1.5 rounded-xl border border-stone-200">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Handtrocknung ohne Föhnbox</span>
          </div>
        </div>

        {/* Interactive Atelier Service List (NO generic box cards!) */}
        <div className="space-y-4">
          {currentCategory.items.map((item, idx) => {
            const isExpanded = expandedItemId === item.id;
            const itemNumber = (idx + 1).toString().padStart(2, "0");

            return (
              <div
                key={item.id}
                className={"border transition-all duration-300 rounded-3xl overflow-hidden " + (
                  isExpanded
                    ? "border-[var(--color-primary)] bg-[var(--color-primary-light)]/20 shadow-lg shadow-[var(--color-primary)]/5"
                    : "border-stone-200/80 bg-stone-50/50 hover:bg-white hover:border-stone-300"
                )}
              >
                {/* Main Accordion Row */}
                <div
                  onClick={() => toggleExpand(item.id)}
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-300 group-hover:text-[var(--color-primary)]">
                      {itemNumber}
                    </span>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-stone-900">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-primary)] text-white">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Favorit</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-stone-500">
                        {item.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-stone-200/60">
                    <div className="text-left md:text-right">
                      <span className="text-[11px] text-stone-400 uppercase tracking-wider block">Grundpreis</span>
                      <span className="text-2xl font-extrabold text-stone-900">
                        ab {item.price} €
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(currentCategory.categoryName, item);
                        }}
                        className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] shadow-sm transition-all hover:scale-105 cursor-pointer"
                      >
                        Buchen
                      </button>

                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Inclusions Drawer */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-stone-200/60 bg-white animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-4">
                      
                      <div className="md:col-span-8 space-y-4">
                        <div className="flex items-center gap-4 text-xs text-stone-500 pb-2">
                          <span className="inline-flex items-center gap-1.5 bg-stone-100 px-3 py-1 rounded-lg">
                            <Clock className="w-3.5 h-3.5 text-stone-500" />
                            <span>Dauer: {item.duration}</span>
                          </span>
                          <span>•</span>
                          <span>Inklusive individueller Fellanalyse</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-700">
                              <div className="w-4 h-4 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3 h-3 stroke-[3]" />
                              </div>
                              <span className="leading-relaxed">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-4 bg-stone-50 rounded-2xl p-5 border border-stone-200/80 flex flex-col justify-between space-y-3">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">Möchten Sie dieses Paket?</p>
                          <p className="text-xs text-stone-700 mt-1">
                            Wir beraten Sie gerne unverbindlich und planen ausreichend Zeit für Ihren Liebling ein.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectService(currentCategory.categoryName, item)}
                          className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Für diesen Termin vormerken</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Addon Minimalist Bar */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <div className="mb-6">
            <h4 className="font-serif-luxury text-xl font-bold text-stone-900">
              Kleine Zusatzleistungen &amp; Einzeltermine
            </h4>
            <p className="text-xs text-stone-500">
              Flexibel hinzubuchbar oder als schneller Einzelbesuch:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {salonAddons.map((addon, aIdx) => (
              <div
                key={aIdx}
                className="bg-stone-50 rounded-2xl p-4 border border-stone-200/80 flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-bold text-stone-900">{addon.name}</p>
                  <p className="text-[11px] text-stone-500">{addon.duration}</p>
                </div>
                <span className="text-sm font-extrabold text-[var(--color-primary)] ml-2">
                  +{addon.price} €
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
