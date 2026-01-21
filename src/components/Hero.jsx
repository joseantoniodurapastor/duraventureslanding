const Hero = () => {
  const handleVerPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactar = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24">
      {/* Logo */}
      <div className="mb-12 md:mb-16">
        <div className="font-display font-display text-oro-ejecutivo text-3xl md:text-5xl lg:text-6xl tracking-tight text-center">
          DURÁ VENTURES
        </div>
      </div>

      {/* Headline - H1 único para SEO */}
      <h1 className="font-heading font-black text-blanco-puro text-[38px] md:text-[48px] text-center mb-6 md:mb-8 max-w-4xl leading-tight">
        Building High-Ticket SaaS
      </h1>

      {/* Subheadline */}
      <p className="font-body text-platino-dark text-lg md:text-xl text-center mb-8 md:mb-12 max-w-3xl leading-relaxed px-4">
        Productos B2B que resuelven ineficiencias costosas mediante software e IA
      </p>

      {/* Línea decorativa oro */}
      <div className="w-24 md:w-32 h-0.5 bg-oro-ejecutivo mb-12 md:mb-16"></div>

      {/* CTAs */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-md md:max-w-none md:w-auto">
        <button
          onClick={handleVerPortfolio}
          className="bg-oro-ejecutivo text-negro-absoluto font-heading font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg rounded-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-oro-ejecutivo/50 w-full md:w-auto"
        >
          Ver Portfolio
        </button>
        <button
          onClick={handleContactar}
          className="border border-blanco-puro text-blanco-puro bg-transparent font-heading font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg rounded-sm transition-all duration-200 ease-out hover:bg-blanco-puro hover:text-negro-absoluto w-full md:w-auto"
        >
          Contactar
        </button>
      </div>
    </section>
  )
}

export default Hero
