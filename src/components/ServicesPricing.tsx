import { useState } from "react";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { pricingData } from "../data/servicesData";

interface ServicesPricingProps {
  onSelectService: (categoryName: string, service: any) => void;
}

export const ServicesPricing = ({ onSelectService }: ServicesPricingProps) => {
  const [activeTab, setActiveTab] = useState(pricingData[0].id);

  return (
    <section id="leistungen" className="py-24 bg-[var(--color-bg-alt)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-primary-light)] opacity-40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-primary-light)] text-[var(--color-primary)] text-sm font-bold tracking-wider uppercase mb-4 shadow-sm">
            Exklusive Pflege
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--color-primary)] mb-6 leading-tight">
            Maßgeschneiderte Behandlungen
          </h2>
          <p className="text-lg text-stone-600">
            Wählen Sie das passende Wohlfühlprogramm für Ihren Liebling.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          <div className="lg:w-1/3 space-y-3">
            {pricingData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={"w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 font-serif text-lg md:text-xl relative overflow-hidden group " + (
                  activeTab === category.id
                    ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20 scale-100 md:scale-105"
                    : "bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900 border border-stone-200"
                )}
              >
                <div className="flex items-center justify-between relative z-10">
                  <span className="font-bold">{category.title}</span>
                  <ChevronDown className={"w-5 h-5 transition-transform duration-300 " + (
                    activeTab === category.id ? "-rotate-90 text-white" : "-rotate-90 text-stone-400 group-hover:text-stone-600"
                  )} />
                </div>
              </button>
            ))}
            
            <div className="hidden lg:block mt-8 p-6 bg-white rounded-3xl border border-stone-100 shadow-sm">
              <div className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-wider mb-2">Termin vereinbaren</div>
              <p className="text-stone-600 text-sm mb-5">
                Wir beraten Sie gerne individuell zur perfekten Pflege für die Bedürfnisse Ihres Hundes.
              </p>
              <a
                href="https://wa.me/491791700661"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE53] text-white px-5 py-3.5 rounded-xl font-bold shadow-md transition-all text-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.082 19.165c-1.343.001-2.648-.36-3.793-1.041l-4.225 1.109 1.134-4.116c-.749-1.182-1.144-2.55-1.143-3.95.002-4.101 3.338-7.436 7.438-7.437 1.989.001 3.861.777 5.267 2.183s2.179 3.281 2.179 5.271c-.002 4.105-3.337 7.44-7.441 7.441z"/></svg>
                <span>Chat auf WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            {pricingData.map((category) => (
              <div
                key={category.id}
                className={"transition-all duration-500 " + (
                  activeTab === category.id
                    ? "opacity-100 translate-y-0 relative z-10"
                    : "opacity-0 absolute top-0 left-0 w-full pointer-events-none translate-y-4"
                )}
              >
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-stone-900/5 border border-stone-100/50 backdrop-blur-sm">
                  
                  <div className="mb-8 border-b border-stone-100 pb-8">
                    <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-primary)] mb-3">{category.title}</h3>
                    <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                      {category.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onSelectService(category.title, item)}
                        className="group p-5 rounded-2xl bg-stone-50 border border-stone-100 hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-light)] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div className="mb-4">
                          <h4 className="font-bold text-stone-900 text-lg mb-1">{item.name}</h4>
                          {item.tagline && <p className="text-[13px] text-stone-500 leading-snug">{item.tagline}</p>}
                        </div>
                        
                        <div className="flex items-end justify-between mt-auto pt-2 border-t border-stone-200 group-hover:border-[var(--color-primary)]/20">
                          <div className="text-[var(--color-primary)] font-extrabold text-xl">
                            {item.pricePrefix && <span className="text-sm text-stone-500 mr-1">{item.pricePrefix}</span>}
                            {item.price} €
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-primary)] shadow-sm group-hover:scale-110 transition-transform">
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {category.includes && (
                    <div className="mt-8 bg-stone-50 rounded-2xl p-6 border border-stone-100">
                      <h4 className="font-serif font-bold text-lg mb-4">Inklusivleistungen</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {category.includes.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-stone-700">
                            <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
