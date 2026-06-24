import PawPrintBackground from "./PawPrintBackground";

export default function TrustSection() {
  const trustItems = [
    {
      title: "Atendimento Humanizado",
      description: "Consultas conduzidas com calma, escuta e respeito ao tempo de cada animal.",
    },
    {
      title: "Profissionais Qualificados",
      description: "Equipe veterinária preparada para diferentes necessidades clínicas e cirúrgicas.",
    },
    {
      title: "Cuidado Preventivo",
      description: "Vacinação, check-ups e orientação para acompanhar a saúde ao longo da vida.",
    },
    {
      title: "Estrutura para Exames",
      description: "Exames laboratoriais e de imagem para apoiar decisões com mais segurança.",
    },
    {
      title: "Cães, Gatos e Silvestres",
      description: "Atendimento adaptado para cães, gatos, aves, roedores e répteis.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="teal" />

      <div className="max-w-7xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Por que tutores confiam na My Vet?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Combinamos paixão pelos animais com tecnologia diagnóstica para oferecer a melhor experiência em cuidados veterinários da região.
          </p>
        </div>

        {/* Central visual grid (5 items with standard Layout balance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6 xl:gap-7" id="trust-grid">
          {trustItems.map((item, idx) => {
            return (
              <div
                key={item.title}
                className={`bg-white rounded-xl lg:rounded-2xl p-6 lg:p-7 border border-slate-200/70 lg:border-gray-100 shadow-sm hover:border-[#E87800]/50 hover:shadow-md transition-colors duration-200 lg:col-span-2 lg:h-full ${
                  idx === 3 ? "lg:col-start-2" : idx === 4 ? "md:col-span-2" : ""
                }`}
                id={`trust-card-${idx}`}
              >
                  <div className="w-7 h-0.5 bg-[#E87800] rounded-full mb-4" />
                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
