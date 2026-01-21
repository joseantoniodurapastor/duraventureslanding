import { trackCTAClick } from '../utils/tracking'

const Hero = ({ onOpenCalendly }) => {
  const handleAuditoriaClick = () => {
    trackCTAClick('Auditoría Gratuita 20 Min → Calcula Tu Hemorragia €', 'hero')
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleDemoClick = () => {
    trackCTAClick('Ver Propuesta Demo que Cerró 25K€', 'hero')
    // Scroll a casos estudio o abrir modal
    document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Banner sticky superior */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 z-50">
        <p className="text-sm text-white text-center py-2 px-4">
          ⚠️ Solo 3 slots auditoría esta semana | Precio Closer sube a 2.497€ en 14 días
        </p>
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 mt-20">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <div className="font-display font-display text-oro-ejecutivo text-3xl md:text-5xl lg:text-6xl tracking-tight text-center">
            DURÁ VENTURES
          </div>
        </div>

        {/* Headline - H1 único para SEO */}
        <h1 className="font-heading font-black text-blanco-puro text-3xl md:text-6xl text-center mb-6 md:mb-8 max-w-4xl leading-tight">
          Estás perdiendo <span className="font-mono text-oro-ejecutivo">15.000€/mes</span> en propuestas que no cierran
        </h1>

        {/* Subheadline */}
        <p className="font-body text-platino-dark text-lg md:text-xl text-center mb-8 md:mb-12 max-w-3xl leading-relaxed px-4">
          Implementamos <span className="text-blanco-puro font-semibold">SaaS personalizado</span> que genera propuestas comerciales agresivas basadas en <span className="text-blanco-puro font-semibold">dolor económico del cliente</span>. Tasa de cierre: <span className="text-blanco-puro font-semibold">30% amateur → 60% élite</span>. <span className="text-oro-ejecutivo font-semibold">ROI en 14 días o devolvemos + 200€</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-md md:max-w-none md:w-auto mb-8 md:mb-12">
          <button
            onClick={handleAuditoriaClick}
            className="bg-oro-ejecutivo text-negro-absoluto font-heading font-bold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg rounded-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-oro-ejecutivo/50 w-full md:w-auto"
          >
            Auditoría Gratuita 20 Min → Calcula Tu Hemorragia €
          </button>
          <button
            onClick={handleDemoClick}
            className="border border-blanco-puro text-blanco-puro bg-transparent font-heading font-semibold px-8 md:px-12 py-4 md:py-5 text-base md:text-lg rounded-sm transition-all duration-200 ease-out hover:bg-blanco-puro hover:text-negro-absoluto w-full md:w-auto"
          >
            Ver Propuesta Demo que Cerró 25K€
          </button>
        </div>

        {/* Proof bullets */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-platino-dark">
          <span>✓ 48h implementación</span>
          <span>✓ Acceso vitalicio 1.997€</span>
          <span>✓ 4 IAs élite</span>
          <span>✓ Garantía brutal</span>
        </div>
      </section>
    </>
  )
}

export default Hero
