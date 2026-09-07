import { useState } from "react";
import { transformationList } from "../data/galleryData";
import { ArrowRightLeft } from "lucide-react";

export const BeforeAfterGallery = () => {
  const [activeViews, setActiveViews] = useState<{ [key: string]: "before" | "after" }>({
    "trans-1": "after",
    "trans-2": "after",
    "trans-3": "after",
    "trans-4": "after"
  });

  const toggleView = (id: string) => {
    setActiveViews((prev) => ({
      ...prev,
      [id]: prev[id] === "before" ? "after" : "before"
    }));
  };

  return (
    <section id="vorher-nachher" className="py-20 bg-stone-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">
            Unsere Galerie
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Metamorphosen: Vorher &amp; Nachher
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Sehen Sie selbst, wie viel Leichtigkeit, Frische und Eleganz ein professionelles
            Grooming bei Hundesalon Giunia bewirkt. Klicken Sie auf das Bild, um zwischen Vorher und Nachher zu wechseln.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transformationList.map((item) => {
            const currentView = activeViews[item.id] || "after";
            const isAfter = currentView === "after";

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group"
              >
                <div
                  className="relative aspect-[4/5] overflow-hidden cursor-pointer bg-stone-100"
                  onClick={() => toggleView(item.id)}
                >
                  <img
                    src={isAfter ? item.afterImg : item.beforeImg}
                    alt={item.name + " - " + (isAfter ? "Nachher" : "Vorher")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3">
                    <span
                      className={"text-xs font-bold px-3 py-1 rounded-full shadow-md transition-colors " + (
                        isAfter
                          ? "bg-[var(--color-primary)] text-white"
                          : "bg-stone-800 text-white"
                      )}
                    >
                      {isAfter ? "✨ NACHHER" : "⏳ VORHER"}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-stone-800 p-2 rounded-full shadow-md text-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRightLeft className="w-3.5 h-3.5" />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-serif-luxury text-lg font-bold">{item.name}</p>
                    <p className="text-xs text-stone-200">{item.breed}</p>
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <div className="inline-block text-[11px] font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-2.5 py-0.5 rounded-md">
                    {item.treatment}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed italic">
                    „{item.quote}”
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleView(item.id)}
                    className="w-full mt-2 py-2 px-3 rounded-xl border border-stone-200 text-[11px] font-semibold text-stone-700 hover:bg-stone-50 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <ArrowRightLeft className="w-3 h-3 text-stone-500" />
                    <span>Auf {isAfter ? "Vorher" : "Nachher"} umschalten</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-stone-500">
            📸 Folgen Sie uns auch auf Instagram für tägliche Vorher-Nachher-Stories:{" "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-stone-800 hover:text-[var(--color-primary)] underline transition-colors"
            >
              @hundesalon_giunia
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};
