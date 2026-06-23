import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import PawPrintBackground from "./PawPrintBackground";
import imgFachada from "../assets/images/myvet-fachada.png";
import imgEntrada from "../assets/images/myvet-entrada.png";
import imgPatio from "../assets/images/myvet-patio.png";

const carouselImages = [
  { src: imgFachada, alt: "Fachada da clínica veterinária My Vet no Morumbi" },
  { src: imgEntrada, alt: "Entrada da clínica veterinária My Vet" },
  { src: imgPatio, alt: "Pátio da clínica veterinária My Vet" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-avança a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + carouselImages.length) % carouselImages.length);
  const next = () => setCurrent((c) => (c + 1) % carouselImages.length);

  return (
    <section
      id="hero"
      className="relative pt-28 pb-24 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-white border-b border-slate-100"
    >
      {/* Decorative ambient blurred blobs with Sleek teal tints */}
      <div className="absolute top-20 right-[-10%] w-[450px] h-[450px] rounded-full bg-teal-50/40 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-[-5%] w-[350px] h-[350px] rounded-full bg-slate-50/50 blur-2xl -z-10" />

      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="hero-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Column (7 cols / 12 on screen) */}
          <div className="lg:col-span-7 flex flex-col items-center text-center space-y-6 mx-auto w-full" id="hero-text-container">


            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.1] text-center" id="hero-title">
              <span className="block mb-1 sm:inline">Cuidado completo</span>{" "}
              <span className="block mb-1 sm:inline">para <span className="text-teal-600 italic font-semibold">o seu pet</span></span>{" "}
              <span className="block sm:inline">no Morumbi</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl text-center" id="hero-subtitle">
              Atendimento humanizado para cães, gatos e animais silvestres, com clínica médica, vacinação, exames, cirurgias, odontologia e estética animal.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-6 sm:pt-2 justify-center items-center" id="hero-cta-buttons">
              <a
                href="https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/35 hover:-translate-y-0.5 text-base text-center w-full sm:w-auto"
                id="hero-whatsapp-booking"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current" />
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 font-bold px-7 py-4 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md text-base text-center w-full sm:w-auto"
                id="hero-services-link"
              >
                Ver Serviços
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Graphical/Image Column (5 cols / 12 on screen) */}
          <div className="lg:col-span-5 relative flex justify-center" id="hero-image-container">
            {/* Visual background details */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600/10 to-transparent rounded-3xl -rotate-3 scale-95" />

            {/* Carrossel de fotos */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium border-4 border-white w-full">
              {/* Imagens */}
              <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[480px]">
                {carouselImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      idx === current ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>

              {/* Setas de navegação */}
              <button
                onClick={prev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-1.5 shadow-md transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 rounded-full p-1.5 shadow-md transition-all duration-200 hover:scale-110 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores (bolinhas) */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Ir para foto ${idx + 1}`}
                    className={`rounded-full transition-all duration-300 ${
                      idx === current
                        ? "bg-white w-5 h-2"
                        : "bg-white/50 hover:bg-white/80 w-2 h-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
