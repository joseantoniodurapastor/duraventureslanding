import { useEffect, useState, Suspense, lazy } from 'react'
import Hero from './components/Hero'
import FormularioCalculadora from './components/FormularioCalculadora'
import Portfolio from './components/Portfolio'
import Testimonios from './components/Testimonios'
import Filosofia from './components/Filosofia'
import Numeros from './components/Numeros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import { trackScrollDepth, trackCalendlyOpened } from './utils/tracking'
import { Analytics } from '@vercel/analytics/react'

const Calendly = lazy(() => import('./components/Calendly'))

function App() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const [scrollDepthTracked, setScrollDepthTracked] = useState({
    '25': false,
    '50': false,
    '75': false,
    '100': false
  })

  useEffect(() => {
    // Intersection Observer para fade-in scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section, article')
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out')
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    // Scroll tracking para depth y sticky CTA mobile
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

      // Track scroll depth
      const depths = ['25', '50', '75', '100']
      depths.forEach((depth) => {
        if (scrollPercentage >= parseInt(depth) && !scrollDepthTracked[depth]) {
          trackScrollDepth(`${depth}%`)
          setScrollDepthTracked(prev => ({
            ...prev,
            [depth]: true
          }))
        }
      })

      // Show sticky CTA mobile cuando scroll > 100vh
      if (window.innerWidth < 768) {
        setShowStickyCTA(scrollTop > windowHeight)
      } else {
        setShowStickyCTA(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollDepthTracked])

  const handleOpenCalendly = () => {
    setShowCalendly(true)
    trackCalendlyOpened('cta')
  }

  const handleCloseCalendly = () => {
    setShowCalendly(false)
  }

  const scrollToFormulario = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-negro-absoluto">
      <Hero onOpenCalendly={handleOpenCalendly} />
      <FormularioCalculadora onOpenCalendly={handleOpenCalendly} />
      <Portfolio onOpenCalendly={handleOpenCalendly} />
      <Testimonios />
      <Filosofia />
      <Numeros />
      <Contacto />
      <Footer />

      {/* CTA Sticky Mobile */}
      {showStickyCTA && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-oro-ejecutivo p-4 z-40 shadow-lg">
          <button
            onClick={scrollToFormulario}
            className="w-full bg-negro-absoluto text-oro-ejecutivo py-3 font-heading font-bold text-sm rounded-sm transition-all duration-200 ease-out hover:bg-zinc-oscuro"
          >
            Calcular Mi Hemorragia € Ahora
          </button>
        </div>
      )}

      {/* Calendly Modal */}
      {showCalendly && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="text-white text-lg">Cargando calendario...</div>
          </div>
        }>
          <Calendly onClose={handleCloseCalendly} />
        </Suspense>
      )}

      <Analytics />
    </main>
  )
}

export default App
