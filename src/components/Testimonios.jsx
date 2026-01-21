const Testimonios = () => {
  const testimonios = [
    {
      quote: "Cerré 2 proyectos más al mes. Son 50K€ extra al año. Inversión 1.997€ recuperada en 2 semanas.",
      metrica: "+50.000€/año",
      metricaSub: "Payback: 14 días",
      autor: "María G.",
      rol: "Consultora Transformación Digital, 180K€/año facturación"
    },
    {
      quote: "Reducimos tiempo propuestas de 4 días a 1 hora. Cerramos 3 de los 10 deals que antes perdíamos. +288K€/año.",
      metrica: "+288.000€/año",
      metricaSub: "Ahorro: 96h/mes",
      autor: "Fundador Agencia Marketing",
      rol: "10 empleados, Madrid"
    },
    {
      quote: "Automatizamos reportes clientes. Ahorramos 12h/semana = 1.280€/mes. ROI en 18 días con IA Feroz.",
      metrica: "+15.360€/año",
      metricaSub: "ROI: 18 días",
      autor: "Director Operaciones Agencia Performance",
      rol: "Valencia, 30 clientes activos"
    }
  ]

  return (
    <section id="testimonios" className="px-4 md:px-8 lg:px-16 py-12 md:py-20 max-w-7xl mx-auto">
      <h2 className="font-heading font-bold text-blanco-puro text-3xl text-center mb-12">
        Resultados Reales, Números Reales
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-zinc-oscuro border-l-4 border-oro-ejecutivo p-6 rounded-sm"
          >
            <p className="text-white text-lg mb-4 leading-relaxed">
              "{testimonio.quote}"
            </p>
            <div className="mb-4">
              <p className="font-mono text-oro-ejecutivo text-2xl font-normal">
                {testimonio.metrica}
              </p>
              <p className="font-mono text-oro-ejecutivo text-sm font-normal mt-1">
                {testimonio.metricaSub}
              </p>
            </div>
            <p className="text-platino-dark text-sm font-semibold">
              — {testimonio.autor}
            </p>
            <p className="text-platino-dark text-xs mt-1">
              {testimonio.rol}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonios
