import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import PreAgendamento from "./components/PreAgendamento";
import WhatsAppCallout from "./components/WhatsAppCallout";
import LocationAndHours from "./components/LocationAndHours";
import Footer from "./components/Footer";
import WhatsAppIcon from "./components/WhatsAppIcon";

export default function App() {
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFloatBtn(true);
      } else {
        setShowFloatBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20meu%20pet.";

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] select-none text-slate-800" id="main-app-container">
      
      {/* Complete Header Bar */}
      <Header />

      {/* Main Sections */}
      <main className="grow" id="main-content">
        
        {/* Hero Section (Primeira Dobra) */}
        <Hero />

        {/* Confidence Section (Diferenciais) */}
        <TrustSection />

        {/* Services Showcase Cards */}
        <Services />

        {/* Real Testimonials from clients */}
        <Testimonials />

        {/* Interactive Guided Booking Block */}
        <PreAgendamento />

        {/* Action and Conversation Callout */}
        <WhatsAppCallout />

        {/* Geographic location, Phone, schedules and Maps embed */}
        <LocationAndHours />

      </main>

      {/* Integrated professional Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Button for Instant Mobile/Desktop Conversions */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className={`fixed bottom-6 right-6 z-40 bg-teal-600 text-white rounded-full p-4 shadow-xl hover:bg-teal-700 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer ${
          showFloatBtn ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-10 pointer-events-none"
        }`}
        id="floating-whatsapp-trigger"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-600"></span>
        </span>
        <WhatsAppIcon className="w-7 h-7 text-white fill-white" />
      </a>

    </div>
  );
}
