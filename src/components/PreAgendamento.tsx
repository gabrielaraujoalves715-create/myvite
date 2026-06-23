import { useState } from "react";
import { Check, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import PawPrintBackground from "./PawPrintBackground";

export default function PreAgendamento() {
  const [step, setStep] = useState(1);
  const [petType, setPetType] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petService, setPetService] = useState("");
  const [petName, setPetName] = useState("");
  const [tutorName, setTutorName] = useState("");

  const petTypes = [
    { id: "dog", label: "Cachorro", icon: "🐶" },
    { id: "cat", label: "Gato", icon: "🐱" },
    { id: "silvestre", label: "Silvestre / Exótico", icon: "🦜" },
  ];

  const petAges = [
    { id: "filhote", label: "Filhote (Até 1 ano)", icon: "🍼" },
    { id: "adulto", label: "Adulto (1 a 7 anos)", icon: "🎾" },
    { id: "senior", label: "Sênior (+ de 7 anos)", icon: "💤" },
  ];

  const petServices = [
    { id: "consulta", label: "Consulta de Rotina / Check-up" },
    { id: "vacina", label: "Vacinação Preventiva" },
    { id: "estetica", label: "Estética (Banho / Tosa)" },
    { id: "exames", label: "Exames de Imagem ou Sangue" },
    { id: "cirurgia", label: "Cirurgia / Castração" },
    { id: "odonto", label: "Odontologia Veterinária" },
  ];

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleReset = () => {
    setStep(1);
    setPetType("");
    setPetAge("");
    setPetService("");
    setPetName("");
    setTutorName("");
  };

  // Compile deep WhatsApp link
  const generateWhatsAppText = () => {
    const selectedType = petTypes.find((p) => p.id === petType)?.label || "";
    const selectedAge = petAges.find((a) => a.id === petAge)?.label || "";
    const selectedService = petServices.find((s) => s.id === petService)?.label || "";
    
    let text = `Olá, equipe My Vet! Gostaria de agendar um atendimento.`;
    if (tutorName) text += ` Meu nome é ${tutorName}.`;
    if (petName) text += ` O nome do meu pet é ${petName}.`;
    if (selectedType || selectedAge) {
      text += ` Ele é um ${selectedType.toLowerCase()}${selectedAge ? ` (${selectedAge.toLowerCase()})` : ""}.`;
    }
    if (selectedService) {
      text += ` Necessito de: ${selectedService}.`;
    }
    
    return `https://wa.me/5511982823788?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pre-agendamento" className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="teal" />

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3">
            Pré-Agendamento Inteligente
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-sans">
            Preencha os passos abaixo para agilizarmos a ficha médica do seu pet. Ao final, envie diretamente para o nosso WhatsApp com um clique!
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white rounded-3xl shadow-premium border border-slate-100 p-6 sm:p-10" id="wizard-container">
          
          {/* Progress Indicators */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    step >= num
                      ? "bg-teal-600 text-white shadow-soft"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {step > num ? <Check className="w-4 h-4" /> : num}
                </div>
                <span className={`text-xs font-bold hidden sm:inline ${
                  step === num ? "text-teal-600" : "text-slate-400"
                }`}>
                  {num === 1 ? "Pet" : num === 2 ? "Idade / Porte" : num === 3 ? "Serviço" : "Resumo"}
                </span>
              </div>
            ))}
          </div>

          {/* STEP 1: PET TYPE */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in" id="step-1">
              <h3 className="text-base uppercase tracking-wider font-bold text-slate-500 text-center sm:text-left">
                Qual é a espécie do seu companheiro?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {petTypes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setPetType(t.id);
                      handleNext();
                    }}
                    className={`p-6 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                      petType === t.id
                        ? "border-teal-600 bg-teal-50/50 text-teal-800 font-bold"
                        : "border-slate-100 hover:border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="text-4xl block mb-3 leading-none">{t.icon}</span>
                    <span className="text-sm font-semibold">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: PET AGE */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in" id="step-2">
              <h3 className="text-base uppercase tracking-wider font-bold text-slate-500 text-center sm:text-left">
                Qual é a fase de vida dele?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {petAges.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setPetAge(a.id);
                      handleNext();
                    }}
                    className={`p-6 rounded-2xl border-2 text-center transition-all cursor-pointer ${
                      petAge === a.id
                        ? "border-teal-600 bg-teal-50/50 text-teal-800 font-bold"
                        : "border-slate-100 hover:border-slate-200 bg-slate-50 text-slate-700"
                    }`}
                  >
                    <span className="text-4xl block mb-3 leading-none">{a.icon}</span>
                    <span className="text-sm font-semibold">{a.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex justify-start pt-4">
                <button
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SERVICE TYPE & NAMES */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in" id="step-3">
              <h3 className="text-base uppercase tracking-wider font-bold text-slate-500">
                O que seu pet precisa e quais os vossos nomes?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-2">
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Nome do tutor
                  </label>
                  <input
                    type="text"
                    value={tutorName}
                    onChange={(e) => setTutorName(e.target.value)}
                    placeholder="Ex: Gabriel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-teal-600 bg-slate-50"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Nome do pet
                  </label>
                  <input
                    type="text"
                    value={petName}
                    onChange={(e) => setPetName(e.target.value)}
                    placeholder="Ex: Thor"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-teal-600 bg-slate-50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Selecione o serviço principal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="pet-services-grid">
                  {petServices.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setPetService(s.id)}
                      className={`p-3.5 rounded-xl border-2 text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-between ${
                        petService === s.id
                          ? "border-teal-600 bg-teal-50/50 text-teal-800"
                          : "border-slate-100 hover:border-slate-200 bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span>{s.label}</span>
                      {petService === s.id && <div className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px]">✓</div>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                <button
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-sm font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Voltar
                </button>
                <button
                  onClick={handleNext}
                  disabled={!petService}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                    petService
                      ? "bg-teal-600 hover:bg-teal-700 text-white shadow-soft"
                      : "bg-slate-100 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Continuar <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: SUMMARY & SUBMIT */}
          {step === 4 && (
            <div className="space-y-6 animate-fade-in text-center" id="step-4">
              <div className="w-16 h-16 bg-teal-100/80 rounded-full flex items-center justify-center mx-auto text-teal-600">
                <Calendar className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  Tudo pronto para o contato!
                </h3>
                <p className="text-slate-500 text-sm max-w-md mx-auto">
                  Compilamos as informações do seu pet em uma ficha preliminar. Clique no botão abaixo para nos enviar e concluir o agendamento!
                </p>
              </div>

              {/* Graphical draft metadata card */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 max-w-lg mx-auto text-left space-y-3 font-sans">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Sua Ficha Preliminar</span>
                  <span className="text-[10px] text-teal-600 bg-teal-100/50 px-2 py-0.5 rounded-md font-bold">Resumo Seguro</span>
                </h4>
                <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-semibold text-slate-700">
                  <div>
                    <span className="text-slate-400 text-[10px] block font-medium uppercase tracking-wider">Tutor</span>
                    {tutorName || "Não especificado"}
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block font-medium uppercase tracking-wider">Nome do Pet</span>
                    {petName || "Não especificado"}
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block font-medium uppercase tracking-wider">Espécie</span>
                    {petTypes.find((p) => p.id === petType)?.label || "Não especificado"}
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] block font-medium uppercase tracking-wider">Fase de vida</span>
                    {petAges.find((a) => a.id === petAge)?.label || "Não especificado"}
                  </div>
                  <div className="col-span-2 border-t border-slate-100 pt-2.5">
                    <span className="text-slate-400 text-[10px] block font-medium uppercase tracking-wider">Serviço Pretendido</span>
                    <span className="text-teal-700 font-bold">
                      {petServices.find((s) => s.id === petService)?.label || ""}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-4">
                <button
                  onClick={handleBack}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-sm font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" /> Editar Ficha
                </button>
                <a
                  href={generateWhatsAppText()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-teal-600/15 hover:shadow-teal-600/30 hover:-translate-y-0.5 text-sm glow-btn"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white text-white shrink-0" />
                  Confirmar e Enviar no WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto text-xs text-slate-400 hover:text-rose-500 transition-colors py-2"
                >
                  Limpar e Reiniciar
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
