const Footer = () => {
  return (
    <footer className="border-t border-zinc-oscuro px-4 md:px-8 lg:px-16 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
          {/* Logo */}
          <div>
            <div className="font-display font-display text-oro-ejecutivo text-2xl md:text-3xl tracking-tight">
              DURÁ VENTURES
            </div>
          </div>

          {/* Copyright */}
          <div className="font-body text-platino-dark text-sm md:text-base">
            <p>© 2025 Durá Ventures S.L. | Madrid, España</p>
            <address className="not-italic mt-2">
              <a
                href="mailto:hola@duaraventures.com"
                className="hover:text-oro-ejecutivo transition-colors duration-200"
              >
                hola@duaraventures.com
              </a>
            </address>
          </div>

          {/* Links Legales */}
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a
              href="/privacidad"
              className="font-body text-platino-dark hover:text-oro-ejecutivo text-sm md:text-base transition-colors duration-200"
            >
              Privacidad
            </a>
            <a
              href="/terminos"
              className="font-body text-platino-dark hover:text-oro-ejecutivo text-sm md:text-base transition-colors duration-200"
            >
              Términos
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
