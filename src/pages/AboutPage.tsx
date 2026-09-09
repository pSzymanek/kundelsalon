import { MessageCircle, Award, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <main className="flex-grow pt-28 pb-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
            Über uns
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-primary)] mb-6">
            Lernen Sie unser Team kennen
          </h1>
          <p className="text-xl text-stone-600">
            Wir sind zertifizierte Hundefriseure mit einer großen Leidenschaft für Tiere. Bei uns steht das Wohlbefinden Ihres Lieblings an erster Stelle – ganz ohne Stress und Zwang.
          </p>
        </div>

        {/* Featured Image & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square group">
            <img 
              src="/about/team-dogs.jpg" 
              alt="Das Team vom Hundesalon Giunia mit Hunden" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-serif mb-2">Liebe zum Beruf</h3>
              <p className="text-white/90 text-sm">Jeder Hund wird bei uns behandelt wie unser eigener.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-[var(--color-primary)]">Unsere Philosophie</h2>
            <p className="text-stone-600 leading-relaxed text-lg">
              Der Besuch im Hundesalon sollte für Ihren Vierbeiner keine Qual, sondern ein entspannendes Spa-Erlebnis sein. Deshalb nehmen wir uns für jedes Tier ausreichend Zeit, bauen Vertrauen auf und verzichten komplett auf Galgen, Föhnboxen oder gar Narkose.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-100">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900">Zertifiziert</h4>
                <p className="text-sm text-stone-500">Fundierte Ausbildung im Hundefriseur-Handwerk.</p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] flex items-center justify-center mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900">Mitfühlend</h4>
                <p className="text-sm text-stone-500">Wir arbeiten mit positiver Verstärkung und viel Lob.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spa & Wellness Section */}
        <div className="bg-stone-50 rounded-[3rem] p-8 md:p-16 mb-24 relative overflow-hidden border border-stone-100">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 opacity-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-serif text-[var(--color-primary)]">Ozon-Therapie &amp; Spa</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                Als einer der wenigen Salons bieten wir exklusive Ozon-Therapien an. Diese speziellen Sprudelbäder fördern die Durchblutung, wirken antibakteriell und helfen hervorragend bei Hautproblemen, Allergien oder starkem Haarausfall.
              </p>
              <ul className="space-y-3 pt-4">
                {[
                  "Tiefenreinigung der Poren",
                  "Linderung bei Juckreiz und Schuppen",
                  "Entspannt die Muskulatur",
                  "Fördert das gesunde Haarwachstum"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                    <Star className="w-4 h-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link to="/preise" className="text-[var(--color-primary)] font-bold hover:underline flex items-center gap-2">
                  Preise für Spa-Behandlungen ansehen &rarr;
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-xl aspect-square">
              <img 
                src="/about/spa-bath.jpg" 
                alt="Hund im Ozon-Spa-Bad" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-[var(--color-primary)] mb-4">Zertifizierte Expertise</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Wir bilden uns stetig weiter, um Ihrem Hund die modernsten und schonendsten Pflegestandards bieten zu können.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden shadow-md aspect-[3/4] group">
              <img src="/about/giunia.jpg" alt="Inhaberin" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md aspect-[3/4] group">
              <img src="/about/team-certs.jpg" alt="Zertifikatsübergabe" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-md aspect-[3/4] group">
              <img src="/about/partner.jpg" alt="Team Mitglied" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#25D366] rounded-[3rem] p-10 md:p-16 text-center text-white shadow-xl shadow-[#25D366]/20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Lernen Sie uns persönlich kennen!</h2>
            <p className="text-lg text-white/90 mb-8">
              Vereinbaren Sie noch heute einen Termin oder schreiben Sie uns Ihre Fragen einfach per WhatsApp.
            </p>
            <a
              href="https://wa.me/491791700661"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#25D366] hover:bg-stone-50 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              Chat auf WhatsApp starten
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
