import WhatsAppIcon from "./WhatsAppIcon";
import PawPrintBackground from "./PawPrintBackground";

export default function WhatsAppCallout() {
  const whatsappUrl = "https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20esclarecer%20algumas%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20da%20My%20Vet.";

  return (
    <section id="whatsapp-callout" className="py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-800 to-teal-600 rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-xl relative overflow-hidden">
          {/* Subtle floating paw prints layer */}
          <PawPrintBackground variant="dark" />

          {/* Background graphical accents */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-teal-900/30 rounded-full blur-xl -translate-x-1/3 translate-y-1/3" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column - Core Request Text */}
              <div className="lg:col-span-7 space-y-6 text-left" id="whatsapp-callout-text">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Precisa de atendimento para o seu pet?
                </h2>
                <p className="text-teal-50 text-base sm:text-lg leading-relaxed max-w-xl">
                  Fale com a equipe da My Vet pelo WhatsApp e tire suas dúvidas sobre horários, serviços e agendamentos. Nosso atendimento é humanizado, ágil e atencioso desde o primeiro contato.
                </p>
              </div>

            {/* Right Column - Big Action Buttons */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center" id="whatsapp-callout-action">
              {/* Main Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs sm:max-w-sm bg-white hover:bg-teal-50 text-teal-700 hover:text-teal-800 font-extrabold px-5 py-4 sm:px-8 sm:py-5 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl text-center text-base sm:text-lg flex items-center justify-center gap-2 sm:gap-3 cursor-pointer group whitespace-nowrap"
                id="whatsapp-callout-btn"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600 fill-teal-600 group-hover:scale-110 transition-transform shrink-0" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
