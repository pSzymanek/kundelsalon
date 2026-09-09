import { X, Shield, FileText } from "lucide-react";

interface LegalModalProps {
  type: "impressum" | "datenschutz" | "agb" | null;
  onClose: () => void;
}

export const LegalModals = ({ type, onClose }: LegalModalProps) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-stone-200 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === "impressum" && <FileText className="w-5 h-5 text-[var(--color-primary)]" />}
            {type === "datenschutz" && <Shield className="w-5 h-5 text-emerald-500" />}
            {type === "agb" && <FileText className="w-5 h-5 text-amber-500" />}
            <h3 className="font-serif-luxury text-xl font-bold capitalize">
              {type === "impressum" && "Impressum"}
              {type === "datenschutz" && "Datenschutzerklärung (DSGVO)"}
              {type === "agb" && "Allgemeine Geschäftsbedingungen & Salonordnung"}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 text-left text-xs sm:text-sm text-stone-700 space-y-4 max-h-[70vh] overflow-y-auto leading-relaxed">
          {type === "impressum" && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Angaben gemäß § 5 TMG:</h4>
                <p>Hundesalon Giunia<br />Inhaberin: Giunia Mustermann<br />Affenbergstr. 5<br />74189 Weinsberg, Deutschland</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Kontakt:</h4>
                <p>Telefon: +49 179 1700661<br />E-Mail: hallo@hundesalon-giunia.de<br />Website: www.hundesalon-giunia.de</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Umsatzsteuer-Identifikationsnummer:</h4>
                <p>Umsatzsteuer-ID gemäß § 27 a Umsatzsteuergesetz: DE 123 456 789 (oder Kleinunternehmerstatus nach § 19 UStG).</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Verbraucherstreitbeilegung:</h4>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>
            </div>
          )}

          {type === "datenschutz" && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">1. Datenschutz auf einen Blick</h4>
                <p>Der Schutz Ihrer persönlichen Daten und der Ihres Tieres ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TDMG).</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">2. Datenerfassung auf dieser Website</h4>
                <p>Wenn Sie unser Termin- oder Kontaktformular nutzen oder uns per WhatsApp kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir niemals ohne Ihre Einwilligung weiter.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">3. WhatsApp-Nutzung</h4>
                <p>Bei Kontaktaufnahme via WhatsApp gelten die Datenschutzbestimmungen von WhatsApp Ireland Limited. Die Datenübertragung erfolgt verschlüsselt.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">4. Ihre Rechte</h4>
                <p>Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung und Widerspruch bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten zu.</p>
              </div>
            </div>
          )}

          {type === "agb" && (
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">1. Terminabsagen</h4>
                <p>Sollten Sie einen Termin nicht wahrnehmen können, bitten wir um Absage mindestens 24 Stunden im Voraus, damit wir den Termin an andere Vierbeiner vergeben können.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">2. Gesundheit &amp; Impfstatus</h4>
                <p>Der Tierhalter versichert, dass das zu behandelnde Tier frei von ansteckenden Krankheiten und Ungeziefer ist und über einen gültigen Grund-Tollwutschutz verfügt.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">3. Bezahlung</h4>
                <p>Die Bezahlung der erbrachten Dienstleistung erfolgt unmittelbar im Anschluss an die Behandlung in bar oder per EC-/Kartenzahlung.</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
