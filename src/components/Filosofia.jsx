const Filosofia = () => {
  const filosofias = [
    {
      icono: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      titulo: "Pain-Based Selling",
      texto: "Cuantificamos la pérdida económica antes de vender. ROI medible o no vendemos."
    },
    {
      icono: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      titulo: "High-Ticket Exclusivo",
      texto: "1.000€-5.000€. Sin productos baratos. Implementación personalizada premium."
    },
    {
      icono: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      titulo: "Velocidad Brutal",
      texto: "48h-7 días implementación. Funcional > perfección. Sin teoría."
    }
  ]

  return (
    <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 className="font-heading font-bold text-blanco-puro text-[29px] md:text-[36px] mb-12 md:mb-16 text-center md:text-left">
        Nuestra Filosofía
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {filosofias.map((filosofia, index) => (
          <div key={index} className="flex flex-col">
            <div className="text-blanco-puro mb-6">
              {filosofia.icono}
            </div>
            <h3 className="font-heading font-bold text-blanco-puro text-xl md:text-2xl mb-4">
              {filosofia.titulo}
            </h3>
            <p className="font-body text-platino-dark text-base md:text-lg leading-relaxed">
              {filosofia.texto}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Filosofia
