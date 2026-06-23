import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Serviços", href: "#servicos" },
    { label: "Agendamento", href: "#pre-agendamento" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
      id="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" id="logo-link">
            <Logo size="sm" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium" id="desktop-nav">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-slate-600 hover:text-teal-600 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+551135013107"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-teal-600 transition-colors duration-200"
              id="header-phone-link"
            >
              <Phone className="w-4 h-4 text-teal-600" />
              (11) 3501-3107
            </a>
            <a
              href="https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5.5 py-3 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 shadow-md shadow-teal-600/20 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              id="header-cta-btn"
            >
              Agendar no WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-emerald-500 hover:bg-slate-50 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100 absolute top-full left-0 right-0 animate-fade-in" id="mobile-menu">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
            <hr className="border-slate-100 my-4" />
            <div className="px-3 space-y-4">
              <a
                href="tel:+551135013107"
                className="flex items-center gap-2 text-slate-700 font-medium hover:text-teal-600 transition-colors"
              >
                <Phone className="w-5 h-5 text-teal-600" />
                (11) 3501-3107
              </a>
              <a
                href="https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white text-center block py-3 rounded-lg font-bold shadow-soft flex items-center justify-center gap-2 transition-all"
              >
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
