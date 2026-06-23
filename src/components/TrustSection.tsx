import PawPrintBackground from "./PawPrintBackground";

export default function TrustSection() {
  const trustItems = [
    {
      title: "Atendimento Humanizado",
      description: "Entendemos seu pet como parte da família. Cada consulta é guiada por carinho, calma e respeito absoluto pelo tempo de adaptação de cada animal.",
    },
    {
      title: "Profissionais Qualificados",
      description: "Médicos veterinários especialistas com ampla experiência nas mais diversas especialidades clínicas, cirúrgicas e estéticas para diagnósticos precisos.",
    },
    {
      title: "Cuidado Preventivo",
      description: "Foco integral no bem-estar continuado do pet. Programas de vacinação moderna, exames preventivos (check-ups) e acompanhamento nutricional detalhado.",
    },
    {
      title: "Estrutura para Exames",
      description: "Equipamentos modernos para exames laboratoriais, ultrassonografia, raio-X e procedimentos cirúrgicos complexos com monitoração anestésica completa.",
    },
    {
      title: "Cães, Gatos e Silvestres",
      description: "Atendimento especializado e adaptado para felinos, cães de todos os portes e animais silvestres (aves, roedores, répteis) com ambientes dedicados.",
    },
  ];

  return (
    <section id="diferenciais" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="trust-grid">
          {trustItems.map((item, idx) => {
            return (
              <div
                key={item.title}
                className={`bg-white rounded-2xl p-8 border border-slate-100 hover:border-teal-500 shadow-soft hover:shadow-premium transition-all duration-300 hover:-translate-y-1 ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                id={`trust-card-${idx}`}
              >
                  {/* Title */}
                  <h3 className="font-display font-bold text-xl text-slate-800 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
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
