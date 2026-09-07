import { useState, useRef } from "react";
import { transformationList } from "../data/galleryData";
import { Sparkles, MoveHorizontal } from "lucide-react";

export const BeforeAfterGallery = () => {
  const [selectedPetIndex, setSelectedPetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activePet = transformationList[selectedPetIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="verwandlungen" className="py-24 bg-stone-900 text-white relative overflow-hidden text-left">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-stone-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-stone-300 uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-primary)]" />
              <span>Interaktiver Vergleich</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Metamorphosen: Vorher &amp; Nachher
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
            Ziehen Sie den Schieberegler nach links und rechts, um die Verwandlung vor und nach dem Grooming direkt zu erleben.
          </p>
        </div>

        {/* Pet Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {transformationList.map((pet, idx) => {
            const isSelected = selectedPetIndex === idx;
            return (
              <button
                key={pet.id}
                onClick={() => {
                  setSelectedPetIndex(idx);
                  setSliderPosition(50);
                }}
                className={"px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer " + (
                  isSelected
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/25"
                    : "bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700"
                )}
              >
                <span>{pet.name}</span>
                <span className="ml-1.5 opacity-60">({pet.breed})</span>
              </button>
            );
          })}
        </div>

        {/* Large Interactive Split Slider Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => (isDragging.current = true)}
              onMouseUp={() => (isDragging.current = false)}
              onMouseLeave={() => (isDragging.current = false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onClick={(e) => handleMove(e.clientX)}
              className="relative w-full aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-800 select-none cursor-ew-resize group"
            >
              {/* After Image (Background, full width) */}
              <img
                src={activePet.afterImg}
                alt={activePet.name + " Nachher"}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Before Image (Foreground, clipped by sliderPosition) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: sliderPosition + "%" }}
              >
                <img
                  src={activePet.beforeImg}
                  alt={activePet.name + " Vorher"}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? containerRef.current.clientWidth + "px" : "100%",
                    height: "100%"
                  }}
                />
              </div>

              {/* Labels on top of images */}
              <div className="absolute top-5 left-5 bg-black/70 backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider pointer-events-none">
                ⏳ Vorher
              </div>
              <div className="absolute top-5 right-5 bg-[var(--color-primary)] backdrop-blur-md px-3.5 py-1 rounded-full text-[11px] font-bold text-white uppercase tracking-wider pointer-events-none">
                ✨ Nachher
              </div>

              {/* Interactive Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none shadow-2xl"
                style={{ left: sliderPosition + "%" }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-stone-900 shadow-xl flex items-center justify-center border-2 border-stone-900">
                  <MoveHorizontal className="w-5 h-5" />
                </div>
              </div>

              {/* Hint bottom bar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] text-stone-300 font-medium tracking-wider pointer-events-none">
                ↔ Ziehen zum Vergleichen
              </div>
            </div>
          </div>

          {/* Details & Quote Column */}
          <div className="lg:col-span-4 space-y-6 lg:pl-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-[var(--color-primary)] uppercase tracking-wider">
                Behandlungsbericht
              </span>
              <h3 className="font-serif-luxury text-3xl font-bold text-white">
                {activePet.name}
              </h3>
              <p className="text-xs text-stone-400 font-medium">
                Rasse: {activePet.breed}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
              <p className="text-xs font-bold text-stone-300 uppercase tracking-wider">Durchgeführte Pflege:</p>
              <p className="text-sm font-semibold text-[var(--color-primary)]">
                {activePet.treatment}
              </p>
              <p className="text-xs text-stone-400 italic leading-relaxed pt-2 border-t border-white/10">
                „{activePet.quote}”
              </p>
            </div>

            <div className="pt-2 text-xs text-stone-400">
              <p>
                Jedes Fell ist einzigartig. Wir stimmen Shampoos, Kämmtechnik und Schnitt exakt auf Hauttyp und Rassestandard ab.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
