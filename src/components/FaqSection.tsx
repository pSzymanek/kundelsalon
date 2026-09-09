import { useState } from "react";
import { faqList } from "../data/faqData";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FaqSection = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-stone-50/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">
            Häufige Fragen
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Gut zu wissen für Ihren Besuch
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Haben Sie Fragen vor dem ersten Termin? Hier finden Sie transparente Antworten
            zu Ablauf, Tierschutz, Welpen und Hygiene.
          </p>
        </div>

        <div className="space-y-3.5 text-left">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={"bg-white rounded-2xl border transition-all duration-200 overflow-hidden " + (
                  isOpen ? "border-stone-300 shadow-sm" : "border-stone-200 hover:border-stone-300"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-bold text-stone-900">
                    {item.question}
                  </span>
                  <div
                    className={"w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-600 transition-transform duration-200 " + (
                      isOpen ? "rotate-180 bg-[var(--color-primary-light)] text-[var(--color-primary)]" : ""
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-stone-900">Ihre Frage war nicht dabei?</p>
              <p className="text-xs text-stone-500">Wir beraten Sie gerne unverbindlich per WhatsApp oder Telefon.</p>
            </div>
          </div>
          <a
            href="https://wa.me/491791700661"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-colors"
          >
            WhatsApp-Frage stellen
          </a>
        </div>

      </div>
    </section>
  );
};
