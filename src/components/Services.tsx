import PawPrintBackground from "./PawPrintBackground";

const services = [
  {
    id: "consultas",
    title: "Consultas",
    desc: "Atendimento clínico cuidadoso para acompanhar a saúde do seu pet.",
  },
  {
    id: "medicina-felina",
    title: "Medicina Felina",
    desc: "Cuidado pensado para as necessidades e o comportamento dos gatos.",
  },
  {
    id: "silvestres",
    title: "Animais Silvestres",
    desc: "Atendimento para aves, roedores, répteis e outros animais silvestres.",
  },
  {
    id: "vacinacao",
    title: "Vacinação",
    desc: "Protocolos de proteção para cada fase da vida do pet.",
  },
  {
    id: "cirurgias",
    title: "Cirurgias",
    desc: "Procedimentos com preparo, segurança e acompanhamento profissional.",
  },
  {
    id: "ortopedia",
    title: "Ortopedia",
    desc: "Avaliação e cuidado para ossos, articulações, músculos e tendões.",
  },
  {
    id: "odontologia",
    title: "Odontologia",
    desc: "Prevenção e tratamento para manter a saúde oral do pet.",
  },
  {
    id: "exames",
    title: "Exames",
    desc: "Agilidade e estrutura para apoiar diagnósticos mais precisos.",
  },
  {
    id: "imagem",
    title: "Raio-X e Ultrassom",
    desc: "Exames de imagem para auxiliar a avaliação veterinária.",
  },
  {
    id: "reabilitacao",
    title: "Reabilitação",
    desc: "Recursos terapêuticos para recuperação e qualidade de vida.",
  },
  {
    id: "estetica",
    title: "Centro de Estética Pet",
    desc: "Banho e cuidados de bem-estar com conforto e atenção.",
  },
  {
    id: "farmacia",
    title: "Farmácia Veterinária",
    desc: "Medicamentos e itens veterinários com orientação da equipe.",
  },
  {
    id: "delivery",
    title: "Delivery / Leva e Traz",
    desc: "Transporte com ar-condicionado, canis individuais e cuidado.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-white relative overflow-hidden">
      <PawPrintBackground variant="orange" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#E87800] leading-tight">
            Conheça nossos serviços.
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-[#E87800]" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Atendimento completo para cães, gatos e animais silvestres, com estrutura para cuidados clínicos, preventivos, cirúrgicos, diagnósticos e estéticos.
          </p>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="services-grid">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-xl p-5 border border-slate-200/70 shadow-sm hover:border-[#E87800]/50 hover:shadow-md transition-colors duration-200 flex flex-col"
              id={`service-card-${srv.id}`}
            >
              {/* Linha decorativa no topo */}
              <div className="w-7 h-0.5 bg-[#E87800] rounded-full mb-4 shrink-0" />

              <h3 className="font-display font-semibold text-base text-slate-900 mb-2 leading-snug">
                {srv.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                {srv.desc}
              </p>

              <div className="pt-5 mt-auto">
                <a
                  href={`https://wa.me/5511982823788?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(srv.title)}%20para%20meu%20pet.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-xs font-semibold py-2 rounded-xl bg-slate-50 hover:bg-teal-600 hover:text-white text-slate-600 border border-slate-100 hover:border-teal-600 transition-all duration-300"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
