import PawPrintBackground from "./PawPrintBackground";

export default function Testimonials() {
  const reviews = [
    {
      name: "Fernanda Miranda",
      initials: "FM",
      role: "Tutora de Pet",
      text: "O local é amplo, arejado e com facilidade para estacionar. Fomos atendidos com muita atenção e vimos cuidado real com o nosso pet.",
      rating: 5,
      accent: "bg-orange-50 text-slate-800",
    },
    {
      name: "Dani Paiva",
      initials: "DP",
      role: "Tutora do bulldog francês Floki",
      text: "O Floki foi muito bem tratado nas consultas, exames e castração. A equipe foi atenciosa e transmitiu segurança em todo o processo.",
      rating: 5,
      accent: "bg-orange-50 text-slate-800",
    },
    {
      name: "Luana Gomes",
      initials: "LG",
      role: "Tutora de Pet",
      text: "Atendimento excelente desde o primeiro contato até a consulta presencial. Meu dog ficou em ótimas mãos.",
      rating: 5,
      accent: "bg-orange-50 text-slate-800",
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
              className="bg-white rounded-xl p-6 border border-slate-200/70 shadow-sm hover:border-[#E87800]/50 hover:shadow-md transition-colors duration-200 flex flex-col justify-between"
              id={`testimonial-card-${idx}`}
            >
              <div className="space-y-4">
                <div className="w-7 h-0.5 bg-[#E87800] rounded-full" />
                {/* Testimonial Text */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-100">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-xs select-none ${review.accent}`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-sm text-slate-900">
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
