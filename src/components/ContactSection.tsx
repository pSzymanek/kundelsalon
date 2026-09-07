import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Car } from "lucide-react";

export const ContactSection = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMsg("");
    }, 4000);
  };

  return (
    <section id="kontakt" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-xs font-semibold tracking-wider uppercase">
            Hier finden Sie uns
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Kontakt, Anfahrt &amp; Öffnungszeiten
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Wir freuen uns darauf, Sie und Ihren Liebling persönlich bei uns zu begrüßen.
            Termine vergeben wir flexibel nach vorheriger Vereinbarung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-stone-50 rounded-3xl p-7 border border-stone-200/80 space-y-5">
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                Hundesalon Giunia
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Salon-Standort</p>
                    <p className="text-stone-600">Kurfürstendamm 142 (Musteradresse)</p>
                    <p className="text-stone-500">10707 Berlin / Deutschland</p>
                    <div className="inline-flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium mt-1 bg-emerald-50 px-2 py-0.5 rounded-md">
                      <Car className="w-3.5 h-3.5" />
                      <span>Kostenlose Kundenparkplätze im Innenhof</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Telefon &amp; WhatsApp</p>
                    <a href="tel:+4917612345678" className="text-stone-700 hover:text-[var(--color-primary)] block">
                      +49 176 1234 5678
                    </a>
                    <a
                      href="https://wa.me/4917612345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold inline-flex items-center gap-1 mt-0.5 hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Jetzt WhatsApp Chat starten</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">E-Mail</p>
                    <a href="mailto:hallo@hundesalon-giunia.de" className="text-stone-700 hover:text-[var(--color-primary)]">
                      hallo@hundesalon-giunia.de
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-stone-900 text-white rounded-3xl p-7 shadow-lg space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    Öffnungszeiten
                  </h4>
                  <p className="text-xs text-stone-400">Termine nur nach vorheriger Vereinbarung</p>
                </div>
              </div>

              <div className="space-y-2 text-xs divide-y divide-stone-800 pt-2">
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-300">Dienstag – Freitag</span>
                  <span className="font-semibold text-white">09:00 – 18:00 Uhr</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-300">Samstag</span>
                  <span className="font-semibold text-white">09:00 – 15:00 Uhr</span>
                </div>
                <div className="flex justify-between py-1.5 text-stone-400">
                  <span>Montag &amp; Sonntag</span>
                  <span className="italic">Ruhetag / nach Absprache</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-stone-50 rounded-3xl p-7 border border-stone-200/80">
              <h3 className="font-serif-luxury text-xl font-bold text-stone-900 mb-1">
                Nachricht senden
              </h3>
              <p className="text-xs text-stone-500 mb-6">
                Haben Sie eine Frage oder möchten Sie einen Rückruf? Schreiben Sie uns direkt.
              </p>

              {formSent ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="text-sm font-bold text-emerald-900">Nachricht erfolgreich gesendet!</p>
                  <p className="text-xs text-emerald-700">Wir melden uns in Kürze bei Ihnen zurück.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">Ihr Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Max Mustermann"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-stone-700 mb-1">E-Mail oder Telefon *</label>
                      <input
                        type="text"
                        required
                        placeholder="max@beispiel.de"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">Ihre Nachricht *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Wie können wir Ihnen und Ihrem Vierbeiner helfen?"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-stone-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Nachricht absenden</span>
                  </button>
                </form>
              )}
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-stone-200 aspect-[16/8] shadow-xs bg-stone-200 group">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Standort Karte Hundesalon Giunia"
                className="w-full h-full object-cover filter saturate-50 group-hover:filter-none transition-all duration-500"
              />
              <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-2xs flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-stone-100 text-center">
                  <div className="flex items-center justify-center gap-2 text-[var(--color-primary)] font-bold text-xs mb-0.5">
                    <MapPin className="w-4 h-4" />
                    <span>Hundesalon Giunia</span>
                  </div>
                  <p className="text-[11px] text-stone-600">Zentrale Lage &amp; bequeme Anfahrt</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[var(--color-primary)] hover:underline inline-block mt-1"
                  >
                    Route in Google Maps planen →
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
