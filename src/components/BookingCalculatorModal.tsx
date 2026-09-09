import { useState, useEffect } from "react";
import { X, Calendar, MessageCircle } from "lucide-react";
import { pricingData } from "../data/servicesData";

interface BookingCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: { categoryName: string; service: any } | null;
}

export const BookingCalculatorModal = ({
  isOpen,
  onClose,
  preselectedService
}: BookingCalculatorModalProps) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("komplettpflege");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("kp-mini");
  
  const [petName, setPetName] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const cat = pricingData.find((c) => c.title === preselectedService.categoryName);
      if (cat) {
        setSelectedCategoryId(cat.id);
        setSelectedServiceId(preselectedService.service.id);
      }
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const activeCategory = pricingData.find((c) => c.id === selectedCategoryId) || pricingData[0];
  const activeService = activeCategory.items.find((i) => i.id === selectedServiceId) || activeCategory.items[0];

  const totalPrice = activeService.price;

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hallo Hundesalon Giunia!
Ich möchte gerne einen Termin anfragen.

*Angaben zum Tier:*
Name: ${petName}
Rasse/Mix: ${petBreed}

*Gewünschte Leistung:*
Kategorie: ${activeCategory.title}
Leistung: ${activeService.name} (Preis: ${activeService.pricePrefix || ""} ${activeService.price} €)

*Meine Daten:*
Name: ${ownerName}
Telefon: ${phone}

${notes ? `*Anmerkungen:*\n${notes}` : ""}

Bitte gebt mir Bescheid, wann ein passender Termin frei wäre. Vielen Dank!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/491791700661?text=${encodedMessage}`, "_blank");
    
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 font-sans">
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-8 duration-500">
        
        {/* Header */}
        <div className="bg-[var(--color-primary)] text-white px-6 py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold leading-tight">Termin anfragen</h2>
              <p className="text-[13px] text-white/80">Einfach &amp; schnell via WhatsApp</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow custom-scrollbar">
          
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-2">
                <MessageCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Leite zu WhatsApp weiter...</h3>
              <p className="text-stone-500 max-w-sm">
                Sie werden nun direkt zu unserem WhatsApp Chat weitergeleitet, um die Anfrage abzuschließen.
              </p>
            </div>
          ) : (
            <form id="booking-form" onSubmit={handleWhatsAppRedirect} className="space-y-8">
              
              <div>
                <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-3">
                  1. Kategorie
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {pricingData.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategoryId(cat.id);
                        if (cat.items.length > 0) {
                          setSelectedServiceId(cat.items[0].id);
                        }
                      }}
                      className={"p-2.5 rounded-xl border text-center transition-all cursor-pointer " + (
                        selectedCategoryId === cat.id
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] text-[var(--color-primary)] font-bold shadow-sm"
                          : "border-stone-200 text-stone-700 hover:bg-stone-50"
                      )}
                    >
                      <span className="block text-sm">{cat.title}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block mb-3">
                  2. Leistung auswählen
                </label>
                <div className="space-y-2">
                  {activeCategory.items.map((srv) => (
                    <label
                      key={srv.id}
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={"flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-all " + (
                        selectedServiceId === srv.id
                          ? "border-[var(--color-primary)] bg-[var(--color-primary-light)] ring-1 ring-[var(--color-primary)]"
                          : "border-stone-200 hover:bg-stone-50"
                      )}
                    >
                      <div>
                        <p className="text-sm font-bold text-stone-900">{srv.name}</p>
                        {srv.tagline && <p className="text-[11px] text-stone-500 mt-1">{srv.tagline}</p>}
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-extrabold text-[var(--color-primary)]">
                          {srv.pricePrefix && <span className="font-normal text-stone-500 mr-1">{srv.pricePrefix}</span>}
                          {srv.price} €
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 flex items-center justify-between">
                <div>
                  <p className="text-xs text-stone-500">Grundpreis:</p>
                  <p className="text-2xl font-extrabold text-stone-900">
                    {activeService?.pricePrefix && <span className="text-lg font-normal text-stone-500 mr-1">{activeService.pricePrefix}</span>}
                    {totalPrice} €
                  </p>
                </div>
                <div className="text-right text-xs text-stone-500">
                  <p className="text-[11px]">Inkl. MwSt.</p>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold text-stone-900 uppercase tracking-wider block">
                  3. Ihre Angaben
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Name des Tiers *</label>
                    <input
                      type="text"
                      required
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Rasse / Mix *</label>
                    <input
                      type="text"
                      required
                      value={petBreed}
                      onChange={(e) => setPetBreed(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Ihr Name *</label>
                    <input
                      type="text"
                      required
                      value={ownerName}
                      onChange={(e) => setOwnerName(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Telefonnummer *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-stone-600 mb-1 mt-2">Besonderheiten / Anmerkungen</label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="z.B. sehr ängstlich, Allergien..."
                    className="w-full px-3 py-2 text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] resize-none"
                  ></textarea>
                </div>
              </div>

            </form>
          )}

        </div>

        {/* Footer Actions */}
        {!submitted && (
          <div className="border-t border-stone-100 p-4 sm:p-6 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
            <p className="text-[11px] text-stone-500 sm:max-w-xs text-center sm:text-left">
              Mit dem Absenden der Anfrage stimmen Sie unserer Datenschutzerklärung zu. Die finale Terminbestätigung erfolgt über WhatsApp.
            </p>
            <button
              type="submit"
              form="booking-form"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE53] text-white px-8 py-3.5 rounded-xl font-bold shadow-md hover:shadow-lg hover:shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Anfrage per WhatsApp senden</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
