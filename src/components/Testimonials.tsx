import PawPrintBackground from "./PawPrintBackground";

export default function Testimonials() {
  const reviews = [
    {
      name: "Fernanda Miranda",
      initials: "FM",
      role: "Tutora de Pet",
      text: "A primeira coisa que observamos foi a facilidade para estacionar, coisa rara nos dias de hoje. O local é bem amplo e arejado. O cuidado com os cães já começa a se refletir no atendimento aos proprietários, fomos atendidos pela Camila, super simpática e atenciosa. Ficamos aguardando na recepção e vendo todo o cuidado e carinho pelo nosso pet <3",
      rating: 5,
      accent: "bg-teal-50 text-teal-700",
    },
    {
      name: "Dani Paiva",
      initials: "DP",
      role: "Tutora do bulldog francês Floki",
      text: "Tenho um bulldog francês, o nome dele é Floki. Ele foi muito bem tratado em todas as consultas, exames e na castração. Veterinários de ótima capacitação. Recepcionista atenciosa e simpática. Super indico essa clínica.",
      rating: 5,
      accent: "bg-teal-50 text-teal-700",
    },
    {
      name: "Luana Gomes",
      initials: "LG",
      role: "Tutora de Pet",
      text: "Melhor clinica vet da região, atendimento excepcional meninas da recepção desde o primeiro contato pelo telefone ao presencial. Valor da consulta 80,00 o mais em conta que encontrei. Obrigada por tudo meu Dog agora está em ótimas mãos!",
      rating: 5,
      accent: "bg-teal-50 text-teal-700",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
      {/* Subtle floating paw prints layer */}
      <PawPrintBackground variant="teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Quem ama, confia: o que dizem nossos clientes
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A satisfação e o carinho dos nossos tutores são o verdadeiro reflexo do nosso compromisso diário com a saúde de cada pet.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
          {reviews.map((review, idx) => (
            <div
              key={review.name}
              className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              id={`testimonial-card-${idx}`}
            >
              <div className="space-y-5">
                {/* Testimonial Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-100">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm select-none ${review.accent}`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-slate-900">
                    {review.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
