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
              src="/about/paw-grooming.jpg" 
              alt="Präzise und liebevolle Fellpflege" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h3 className="text-2xl font-serif mb-2">Präzision &amp; Feingefühl</h3>
              <p className="text-white/90 text-sm">Jeder Schnitt sitzt, jeder Hund fühlt sich wohl.</p>
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

        {/* Premium Blovi Spa Section */}
        <div className="bg-stone-900 text-white rounded-[3rem] p-8 md:p-16 mb-24 relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="inline-block py-1 px-3 rounded-full bg-white/10 text-emerald-400 text-xs font-bold tracking-wider uppercase shadow-sm">
                Premium Ausstattung
              </div>
              <h2 className="text-3xl md:text-5xl font-serif text-white">
                Die exklusive <span className="text-emerald-400">Blovi Spa</span> Wanne
              </h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                Wir sind stolz darauf, Ihren Hunden das ultimative Wellness-Erlebnis in unserer hochmodernen <strong>Blovi Spa Wanne</strong> bieten zu können. Diese innovative Technologie kombiniert Mikroluftbläschen, Ozon und Lichttherapie, um tiefgreifende Reinigung und Entspannung zu gewährleisten.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Ozon-Therapie", desc: "Wirkt stark antibakteriell und heilt Hautirritationen." },
                  { title: "Mikro-Bläschen", desc: "Tiefenreinigung der Poren ohne Chemie." },
                  { title: "Farb- & Lichttherapie", desc: "Beruhigt das Tier durch sanfte Farben." },
                  { title: "Hydromassage", desc: "Löst Verspannungen und fördert die Durchblutung." }
                ].map((feature, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-colors">
                    <h4 className="text-emerald-400 font-bold mb-1 flex items-center gap-2">
                      <Star className="w-3.5 h-3.5" />
                      {feature.title}
                    </h4>
                    <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to="/preise" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-stone-900 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105">
                  Preise für Spa-Behandlungen ansehen
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-square relative group">
              <img 
                src="/about/blovi-spa.jpg" 
                alt="Hund in der modernen Blovi Spa Wanne" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-emerald-400 font-bold tracking-widest text-xs uppercase mb-1">Blovi Spa System</p>
                <p className="text-white text-lg font-serif">Das höchste Level der Hundepflege.</p>
              </div>
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
