const Contacto = () => {
  return (
    <section id="contacto" className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 className="font-heading font-bold text-blanco-puro text-[29px] md:text-[36px] mb-12 md:mb-16 text-center md:text-left">
        Hablemos
      </h2>

      <div className="space-y-8 md:space-y-10">
        {/* Email */}
        <div>
          <a
            href="mailto:hola@duaraventures.com"
            className="font-body text-platino-dark hover:text-oro-ejecutivo text-lg md:text-xl transition-colors duration-200"
          >
            hola@duaraventures.com
          </a>
        </div>

        {/* Links Productos */}
        <nav className="flex flex-col md:flex-row gap-6 md:gap-8">
          <a
            href="https://closerproposals.es"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-semibold text-oro-ejecutivo hover:text-oro-ejecutivo/80 transition-colors duration-200 text-base md:text-lg"
          >
            closerproposals.es
          </a>
          <a
            href="https://iaferoz.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading font-semibold text-oro-ejecutivo hover:text-oro-ejecutivo/80 transition-colors duration-200 text-base md:text-lg"
          >
            iaferoz.com
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Contacto
