const Portfolio = () => {
  return (
    <section id="portfolio" className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 className="font-heading font-bold text-blanco-puro text-[29px] md:text-[36px] mb-12 md:mb-16 text-center md:text-left">
        Nuestros Productos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Card Closer Proposals */}
        <article
          data-product="closer-proposals"
          data-price="1997"
          data-currency="EUR"
          className="bg-zinc-oscuro border-t-2 border-rojo-borde p-8 md:p-10 rounded-sm transition-all duration-200 ease-out hover:shadow-lg hover:shadow-oro-ejecutivo/10"
        >
          {/* Símbolo */}
          <div className="mb-6">
            <span className="font-heading font-bold text-rojo-borde text-2xl md:text-3xl">
              CLOSER<span className="text-rojo-borde">•</span>
            </span>
          </div>

          {/* Título */}
          <h3 className="font-heading font-bold text-blanco-puro text-[22px] md:text-[28px] mb-4">
            CLOSER PROPOSALS
          </h3>

          {/* Tagline */}
          <p className="font-body text-platino-dark text-base md:text-lg mb-6">
            Tu closer de élite trabajando 24/7
          </p>

          {/* Descripción */}
          <p className="font-body text-blanco-puro text-sm md:text-base leading-relaxed mb-8">
            Implementación personalizada SaaS que genera propuestas comerciales B2B de alto impacto basadas en dolor económico del cliente. No vendemos software genérico. Vendemos implementación completa que cierra ventas.
          </p>

          {/* Métrica destacada */}
          <div className="mb-8">
            <p className="font-mono text-oro-ejecutivo text-[18px] font-normal">
              1.997€ pago único | Acceso vitalicio
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://closerproposals.es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-heading font-semibold text-oro-ejecutivo hover:text-oro-ejecutivo/80 transition-colors duration-200 text-base md:text-lg group"
          >
            Ver Closer Proposals
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </article>

        {/* Card IA Feroz */}
        <article
          data-product="ia-feroz"
          data-price="600"
          data-currency="EUR"
          className="bg-zinc-oscuro border-t-2 border-rojo-borde p-8 md:p-10 rounded-sm transition-all duration-200 ease-out hover:shadow-lg hover:shadow-oro-ejecutivo/10"
        >
          {/* Símbolo */}
          <div className="mb-6">
            <span className="text-3xl md:text-4xl">🦅</span>
          </div>

          {/* Título */}
          <h3 className="font-heading font-bold text-blanco-puro text-[22px] md:text-[28px] mb-4">
            IA FEROZ
          </h3>

          {/* Tagline */}
          <p className="font-body text-platino-dark text-base md:text-lg mb-6">
            Automatización que muerde
          </p>

          {/* Descripción */}
          <p className="font-body text-blanco-puro text-sm md:text-base leading-relaxed mb-8">
            Implementamos workflows automatización n8n + IA en 7 días que eliminan procesos manuales y devuelven margen a empresas 50K-3M€ revenue/año. No vendemos educación. Vendemos implementación funcionando.
          </p>

          {/* Métrica destacada */}
          <div className="mb-8">
            <p className="font-mono text-oro-ejecutivo text-[18px] font-normal">
              600€ base | Entrega 7 días
            </p>
          </div>

          {/* CTA */}
          <a
            href="https://iaferoz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-heading font-semibold text-oro-ejecutivo hover:text-oro-ejecutivo/80 transition-colors duration-200 text-base md:text-lg group"
          >
            Ver IA Feroz
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
