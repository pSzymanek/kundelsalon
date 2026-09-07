import { reviewsData } from "../data/reviewsData";
import { Star, CheckCircle, Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section id="bewertungen" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">
            Echte Kundenstimmen
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Was Tierhalter über Giunia sagen
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Das Vertrauen von Hund, Katze und Mensch ist unsere größte Auszeichnung.
            Lesen Sie ungefilterte Erfahrungsberichte zufriedener Frauchen und Herrchen.
          </p>

          <div className="inline-flex items-center gap-3 bg-stone-50 border border-stone-200/80 px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-800">4.9 von 5.0 Sternen</span>
            <span className="text-xs text-stone-400">•</span>
            <span className="text-xs text-stone-500">Google Rezensionen</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-stone-50/70 rounded-3xl p-6 border border-stone-200/70 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300" />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
                  „{rev.comment}”
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-stone-200/60">
                <img
                  src={rev.avatarUrl}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                />
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs font-bold text-stone-900">{rev.author}</p>
                    <CheckCircle className="w-3 h-3 text-emerald-600 fill-emerald-100" />
                  </div>
                  <p className="text-[11px] text-[var(--color-primary)] font-medium">
                    Liebling: {rev.breed}
                  </p>
                  <p className="text-[10px] text-stone-400">{rev.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
