import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import WhatsAppIcon from "./WhatsAppIcon";
import PawPrintBackground from "./PawPrintBackground";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden" id="footer">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="dark" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 - Brand credentials */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="sm" lightText={true} />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Cuidado veterinário completo e humanizado para o seu melhor companheiro.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/5511982823788" target="_blank" rel="noopener" className="p-2 rounded-lg bg-slate-800 text-teal-400 hover:bg-teal-600 hover:text-white transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon className="w-5 h-5 fill-current" />
              </a>
              <span className="text-slate-500 text-xs self-center">CRMV-SP 18.214</span>
            </div>
          </div>

          {/* Col 2 - Quick links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              Atalhos úteis
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#diferenciais" className="text-slate-400 hover:text-teal-400 transition-colors">Diferenciais</a>
              </li>
              <li>
                <a href="#servicos" className="text-slate-400 hover:text-teal-400 transition-colors">Serviços Clínicos</a>
              </li>
              <li>
                <a href="#pre-agendamento" className="text-slate-400 hover:text-teal-400 transition-colors">Pré-Agendamento</a>
              </li>
              <li>
                <a href="#contato" className="text-slate-400 hover:text-teal-400 transition-colors">Endereço e Contato</a>
              </li>
            </ul>
          </div>

          {/* Col 3 - Legal and Local SEO text */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest">
              My Vet Morumbi
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span>Rua Pasquale Gallupi, 420 / 900 - Morumbi, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <span>(11) 3501-3107 | (11) 3501-2756</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                <span>contato@myvetmorumbi.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright detail */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-sans">
          <div>
            &copy; {currentYear} My Vet Clínica Veterinária LTDA. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap gap-4 text-slate-600 justify-center">
            <span>Desenvolvido sob rígidos padrões veterinários</span>
            <span>•</span>
            <span>Clínica veterinária Morumbi</span>
            <span>•</span>
            <span>Veterinário Morumbi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
