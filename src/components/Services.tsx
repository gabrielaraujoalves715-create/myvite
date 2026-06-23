import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import PawPrintBackground from "./PawPrintBackground";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const services = [
    {
      id: "clinica",
      title: "Clínica Médica Veterinária",
      shortDesc: "Consultas detalhadas, check-ups e acompanhamento de rotina feitos com acolhimento.",
      category: "caes-gatos",
      details: [
        "Consultas gerais e preventivas",
        "Especialidades (Dermatologia, Cardiologia, etc.)",
        "Acompanhamento sênior e pediátrico",
        "Gerenciamento de doenças crônicas"
      ],
      color: "border-teal-100 hover:border-teal-500 hover:shadow-teal-500/5 text-teal-600"
    },
    {
      id: "vacinas",
      title: "Vacinação Avançada",
      shortDesc: "Proteção vacinal de alta tecnologia contra as principais viroses e zoonoses.",
      category: "prevencao",
      details: [
        "Vacinas importadas de altíssima segurança",
        "Protocolos vacinais individualizados",
        "Acompanhamento de imunidade pós-vacinal",
        "Controle de pulgas, carrapatos e vermes"
      ],
      color: "border-blue-100 hover:border-blue-500 hover:shadow-blue-500/5 text-blue-600"
    },
    {
      id: "exames",
      title: "Exames de Imagem & Laboratório",
      shortDesc: "Diagnósticos com agilidade para direcionamento terapêutico imediato.",
      category: "caes-gatos",
      details: [
        "Ultrassonografia abdominal de ponta",
        "Raio-X digital rápido e confortável",
        "Análises laboratoriais completas",
        "Resultados integrados ao prontuário"
      ],
      color: "border-purple-100 hover:border-purple-500 hover:shadow-purple-500/5 text-purple-600"
    },
    {
      id: "cirurgias",
      title: "Procedimentos Cirúrgicos",
      shortDesc: "Cirurgias gerais e ortopédicas feitas com máxima biossegurança.",
      category: "caes-gatos",
      details: [
        "Anestesia inalatória com monitoração multiparamétrica",
        "Procedimentos de castração seguros e rápidos",
        "Cirurgias de tecidos moles e ortopedia",
        "Internação diurna em ambiente calmo"
      ],
      color: "border-teal-100 hover:border-teal-600 hover:shadow-teal-600/5 text-teal-700"
    },
    {
      id: "odontologia",
      title: "Odontologia Veterinária",
      shortDesc: "Tratamento periodontal para garantir a saúde geral do pet a partir da boca.",
      category: "caes-gatos",
      details: [
        "Tratamento de tártaro por ultrassom",
        "Radiologia odontológica intraoral",
        "Extrações dentárias com alívio guiado da dor",
        "Polimento da coroa e profilaxia regular"
      ],
      color: "border-indigo-100 hover:border-indigo-500 hover:shadow-indigo-500/5 text-indigo-600"
    },
    {
      id: "estetica",
      title: "Estética Animal Especializada",
      shortDesc: "Banhos e tosas com shampoos suaves e profissionais que entendem o comportamento do pet.",
      category: "prevencao",
      details: [
        "Banhos terapêuticos e hidratação",
        "Tosa higiênica e tosa da raça",
        "Corte de unhas e limpeza de ouvidos segura",
        "Secadores silenciosos excelentes para pets tímidos"
      ],
      color: "border-purple-100 hover:border-purple-500 hover:shadow-purple-500/5 text-purple-600"
    },
    {
      id: "silvestres",
      title: "Atendimento de Animais Silvestres",
      shortDesc: "Consultas, manejo alimentar e cuidados para aves, repteis, roedores e coelhos.",
      category: "silvestres",
      details: [
        "Exames específicos para animais silvestres",
        "Suporte ambiental e nutricional",
        "Tratamento clínico e odontológico para roedores",
        "Vacinação específica sob orientação técnica"
      ],
      color: "border-amber-100 hover:border-amber-500 hover:shadow-amber-500/5 text-amber-600"
    },
  ];

  const categories = [
    { label: "Todos os Serviços", value: "todos" },
    { label: "Clínica & Cirurgia", value: "caes-gatos" },
    { label: "Estética & Vacinação", value: "prevencao" },
    { label: "Animais Silvestres", value: "silvestres" },
  ];

  const filteredServices = selectedCategory === "todos"
    ? services
    : services.filter(s => s.category === selectedCategory);

  return (
    <section id="servicos" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Nossos Serviços Veterinários
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Oferecemos uma linha completa de tratamentos clínicos, preventivos e estéticos para que o seu pet tenha uma vida longa, saudável e feliz.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" id="services-tabs">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-teal-600 text-white shadow-soft"
                  : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
        {filteredServices.map((srv) => {
            return (
              <div
                key={srv.id}
                className={`bg-white rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${srv.color}`}
                id={`service-card-${srv.id}`}
              >
                <div>
                  {/* Title */}
                  <h3 className="font-display font-extrabold text-xl text-slate-900 mb-2 group-hover:text-slate-950">
                    {srv.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {srv.shortDesc}
                  </p>

                  {/* Bullet details */}
                  <ul className="space-y-2 mt-4" id={`details-list-${srv.id}`}>
                    {srv.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-8 border-t border-slate-100/60 w-full">
                  <a
                    href={`https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20mais%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(srv.title)}%20para%20meu%20pet.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-center block bg-slate-50 group-hover:bg-teal-600 group-hover:text-white hover:bg-teal-700 text-slate-700 transition-all duration-300"
                  >
                    Consultar este Serviço
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
