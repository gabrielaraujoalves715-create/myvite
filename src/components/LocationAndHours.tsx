import { Clock, MapPin, Phone, MessageSquare, Compass, ExternalLink } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import PawPrintBackground from "./PawPrintBackground";

export default function LocationAndHours() {
  const address = "Rua Pasquale Gallupi, 420 - Morumbi, São Paulo - SP";
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const whatsappUrl = "https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20saber%20se%20est%C3%A3o%20abertos%20ou%20agendar%20um%20hor%C3%A1rio.";

  return (
    <section id="contato" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Estamos pertinho do seu pet
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Localização estratégica com amplo estacionamento, estrutura climatizada e acessibilidade completa para o conforto do seu animal.
          </p>
        </div>

        {/* Info & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="location-and-hours-grid">
          
          {/* Info Card Column (5 cols / 12) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-100 shadow-soft flex flex-col justify-between" id="location-info-card">
            <div className="space-y-8">
              
              {/* Address details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-teal-600 font-bold uppercase tracking-wider text-xs">
                  <MapPin className="w-5 h-5 shrink-0" />
                  <span>Endereço</span>
                </div>
                <p className="text-slate-800 text-base font-semibold leading-relaxed" id="address-text">
                  {address}
                </p>
                <p className="text-slate-500 text-sm">
                  Ponto de referência: Próximo à praça do Morumbi, com vagas exclusivas na frente para clientes em atendimento.
                </p>
              </div>

              <hr className="border-slate-100" />

              {/* Work Hours details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 text-teal-600 font-bold uppercase tracking-wider text-xs">
                  <Clock className="w-5 h-5 shrink-0" />
                  <span>Horários de Atendimento</span>
                </div>
                <div className="space-y-2.5" id="hours-list">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium font-sans">Segunda a Sexta</span>
                    <span className="text-slate-900 font-bold">08:00 às 20:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Sábados</span>
                    <span className="text-slate-900 font-bold">08:00 às 13:00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Domingos e Feriados</span>
                    <span className="text-slate-600 font-semibold italic">Fechado para consultas de rotina</span>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Direct Phones list */}
              <div className="space-y-3">
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                  Telefones para contato
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+551135013107"
                    className="flex items-center gap-2 text-slate-800 hover:text-teal-600 text-sm font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-600" />
                    (11) 3501-3107
                  </a>
                  <a
                    href="tel:+551135012756"
                    className="flex items-center gap-2 text-slate-800 hover:text-teal-600 text-sm font-bold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-teal-600" />
                    (11) 3501-2756
                  </a>
                  <a
                    href="https://wa.me/5511982823788"
                    className="flex items-center gap-2 text-slate-800 hover:text-teal-600 text-sm font-bold transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-teal-600 shrink-0 fill-teal-600 font-sans" />
                    (11) 98282-3788
                  </a>
                </div>
              </div>

            </div>

            {/* Structured action button block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 mt-8 border-t border-slate-100" id="location-card-footer-ctas">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold p-3.5 rounded-2xl text-xs text-center flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-md cursor-pointer animate-none"
                id="maps-direction-btn"
              >
                <Compass className="w-4 h-4" />
                Como Chegar (Google Maps)
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 font-bold p-3.5 rounded-2xl text-xs text-center flex items-center justify-center gap-1.5 transition-all"
                id="location-whatsapp-btn"
              >
                <WhatsAppIcon className="w-4 h-4 text-teal-600 fill-teal-600 shrink-0 font-sans" />
                WhatsApp da Clínica
              </a>
            </div>

          </div>

          {/* Map Preview Column (7 cols / 12) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-soft relative bg-teal-50/20 min-h-[300px] lg:min-h-full" id="location-map-container">
            {/* Real Interactive Map Iframe styled delicately */}
            <iframe
              src="https://maps.google.com/maps?q=Rua%20Pasquale%20Gallupi%2C%20420%2C%20Morumbi%2C%20S%C3%A3o%20Paulo%20-%20SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px", display: "block" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Morumbi"
              className="w-full h-full"
              id="location-iframe"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
