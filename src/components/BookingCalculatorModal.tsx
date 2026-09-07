import { useState, useEffect } from "react";
import { X, Calendar, MessageCircle, CheckCircle2, Dog, Cat } from "lucide-react";
import type { ServiceItem } from "../types";
import { serviceCategories, salonAddons } from "../data/servicesData";

interface BookingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: { categoryName: string; service: ServiceItem } | null;
}

export const BookingCalculatorModal = ({
  isOpen,
  onClose,
  preselectedService
}: BookingCalculatorModalProps) => {
  const [petType, setPetType] = useState<"hund" | "katze">("hund");
  const [petSize, setPetSize] = useState<string>("small-dogs");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("sd-complete");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("Vormittags (09:00 - 13:00)");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const cat = serviceCategories.find((c) => c.categoryName === preselectedService.categoryName);
      if (cat) {
        if (cat.id === "cats") {
          setPetType("katze");
          setPetSize("cats");
        } else {
          setPetType("hund");
          setPetSize(cat.id);
        }
        setSelectedServiceId(preselectedService.service.id);
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const activeCategory = serviceCategories.find((c) => c.id === petSize) || serviceCategories[0];
  const activeService = activeCategory.items.find((i) => i.id === selectedServiceId) || activeCategory.items[0];

  const basePrice = activeService ? activeService.price : 75;
  const addonsTotal = selectedAddons.reduce((sum, name) => {
    const addon = salonAddons.find((a) => a.name === name);
    return sum + (addon ? addon.price : 0);
  }, 0);
  const totalPrice = basePrice + addonsTotal;

  const toggleAddon = (name: string) => {
    setSelectedAddons((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  const handleWhatsAppSend = () => {
    const text = "Hallo Hundesalon Giunia! 🐾\n" +
      "Ich möchte gerne einen Termin anfragen:\n\n" +
      "- Tier: " + (petType === "hund" ? "Hund" : "Katze") + " (" + (petBreed || "Rasse nicht angegeben") + ")\n" +
      "- Name des Tiers: " + (petName || "-") + "\n" +
      "- Gewählter Service: " + (activeService?.name || "") + " (" + activeCategory.categoryName + ")\n" +
      "- Zusatzleistungen: " + (selectedAddons.length > 0 ? selectedAddons.join(", ") : "Keine") + "\n" +
      "- Geschätzter Preis: ca. " + totalPrice + " €\n" +
      "- Wunschtermin: " + (preferredDate || "Flexibel") + " (" + preferredTime + ")\n" +
      "- Besitzer: " + (ownerName || "-") + " (Tel: " + (phone || "-") + ")\n" +
      (notes ? "- Besonderheiten: " + notes : "") + "\n\n" +
      "Ich freue mich auf Ihre Rückmeldung!";

    const encoded = encodeURIComponent(text);
    window.open("https://wa.me/4917612345678?text=" + encoded, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-stone-200 my-8 transition-all animate-in fade-in zoom-in-95 duration-200">
        
        <div className="bg-stone-900 text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h3 className="font-serif-luxury text-xl font-bold text-white">
                Terminrechner &amp; Buchungsanfrage
              </h3>
              <p className="text-xs text-stone-400">
                Wählen Sie Ihre Wünsche für eine unverbindliche Anfrage
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif-luxury text-2xl font-bold text-stone-900">
              Vielen Dank für Ihre Anfrage!
            </h4>
            <p className="text-sm text-stone-600 max-w-md mx-auto">
              Wir haben Ihre Terminanfrage für <strong>{petName || "Ihren Liebling"}</strong> erhalten.
              Wir melden uns innerhalb von wenigen Stunden bei Ihnen per Telefon oder WhatsApp, um den Termin zu bestätigen.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="p-6 space-y-6 text-left max-h-[80vh] overflow-y-auto">
            
            <div>
              <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                1. Für wen ist der Termin?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setPetType("hund");
                    setPetSize("small-dogs");
                    setSelectedServiceId("sd-complete");
                  }}
                  className={"flex items-center justify-center gap-2 p-3 rounded-2xl border text-sm font-semibold transition-all cursor-pointer " + (
                    petType === "hund"
                      ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold shadow-xs"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  )}
                >
                  <Dog className="w-4 h-4" />
                  <span>Hund</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPetType("katze");
                    setPetSize("cats");
                    setSelectedServiceId("cat-complete");
                  }}
                  className={"flex items-center justify-center gap-2 p-3 rounded-2xl border text-sm font-semibold transition-all cursor-pointer " + (
                    petType === "katze"
                      ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold shadow-xs"
                      : "border-stone-200 text-stone-600 hover:bg-stone-50"
                  )}
                >
                  <Cat className="w-4 h-4" />
                  <span>Katze</span>
                </button>
              </div>
            </div>

            {petType === "hund" && (
              <div>
                <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                  2. Größe Ihres Hundes
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "small-dogs", label: "Klein", desc: "Bis 10 kg" },
                    { id: "medium-dogs", label: "Mittel", desc: "10 - 25 kg" },
                    { id: "large-dogs", label: "Groß", desc: "Ab 25 kg" }
                  ].map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => {
                        setPetSize(size.id);
                        const cat = serviceCategories.find((c) => c.id === size.id);
                        if (cat && cat.items.length > 0) {
                          setSelectedServiceId(cat.items[0].id);
                        }
                      }}
                      className={"p-2.5 rounded-2xl border text-center transition-all cursor-pointer " + (
                        petSize === size.id
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold"
                          : "border-stone-200 text-stone-700 hover:bg-stone-50"
                      )}
                    >
                      <span className="block text-xs font-bold">{size.label}</span>
                      <span className="block text-[10px] text-stone-500">{size.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                3. Gewünschtes Pflegepaket
              </label>
              <div className="space-y-2">
                {activeCategory.items.map((srv) => (
                  <label
                    key={srv.id}
                    onClick={() => setSelectedServiceId(srv.id)}
                    className={"flex items-center justify-between p-3.5 rounded-2xl border cursor-pointer transition-all " + (
                      selectedServiceId === srv.id
                        ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] ring-1 ring-[var(--color-primary)]"
                        : "border-stone-200 hover:bg-stone-50"
                    )}
                  >
                    <div>
                      <p className="text-xs font-bold text-stone-900">{srv.name}</p>
                      <p className="text-[11px] text-stone-500">{srv.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-extrabold text-[var(--color-primary)]">
                        ab {srv.price} €
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-2">
                4. Optionale Extras &amp; Wellness
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {salonAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.name);
                  return (
                    <button
                      key={addon.name}
                      type="button"
                      onClick={() => toggleAddon(addon.name)}
                      className={"flex items-center justify-between p-2.5 rounded-xl border text-xs text-left transition-all cursor-pointer " + (
                        isChecked
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] font-medium text-[var(--color-primary)]"
                          : "border-stone-200 text-stone-700 hover:bg-stone-50"
                      )}
                    >
                      <span>{addon.name}</span>
                      <span className="font-bold ml-2">+{addon.price} €</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-center justify-between">
              <div>
                <p className="text-xs text-stone-500">Geschätzter Gesamtpreis:</p>
                <p className="text-2xl font-extrabold text-stone-900">
                  ab ca. {totalPrice} €
                </p>
              </div>
              <div className="text-right text-xs text-stone-500">
                <p className="font-semibold text-stone-800">Dauer: {activeService?.duration}</p>
                <p className="text-[11px]">Inkl. MwSt. &amp; Bio-Kosmetik</p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                5. Ihre Angaben für die Reservierung
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">Name des Tiers *</label>
                  <input
                    type="text"
                    required
                    placeholder="z.B. Milo oder Luna"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">Rasse / Mix</label>
                  <input
                    type="text"
                    placeholder="z.B. Zwergpudel, Malteser..."
                    value={petBreed}
                    onChange={(e) => setPetBreed(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">Ihr Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Vor- und Nachname"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">Telefonnummer *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+49 176..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">Wunschdatum</label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1">Bevorzugte Uhrzeit</label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                  >
                    <option value="Vormittags (09:00 - 13:00)">Vormittags (09:00 - 13:00)</option>
                    <option value="Nachmittags (13:00 - 18:00)">Nachmittags (13:00 - 18:00)</option>
                    <option value="Samstags nach Absprache">Samstags nach Absprache</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-stone-600 mb-1">Besonderheiten / Wünsche</label>
                <textarea
                  rows={2}
                  placeholder="z.B. etwas ängstlich beim Föhnen, Verfilzungen an den Ohren..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full sm:flex-1 py-3.5 px-4 rounded-xl text-xs font-bold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-950" />
                <span>Direkt per WhatsApp anfragen</span>
              </button>

              <button
                type="submit"
                className="w-full sm:flex-1 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Online-Anfrage absenden</span>
              </button>
            </div>
            <p className="text-[11px] text-stone-400 text-center">
              🔒 Ihre Daten werden vertraulich behandelt und nicht weitergegeben.
            </p>

          </form>
        )}

      </div>
    </div>
  );
};
