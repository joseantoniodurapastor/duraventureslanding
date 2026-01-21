import { useEffect, useState, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import FormularioCalculadora from './components/FormularioCalculadora'
import Products from './components/Products'
import Testimonios from './components/Testimonios'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { trackScrollDepth, trackCalendlyOpened } from './utils/tracking'
import { Analytics } from '@vercel/analytics/react'

const Calendly = lazy(() => import('./components/Calendly'))

function App() {
  const [showCalendly, setShowCalendly] = useState(false)
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
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out')
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    // Scroll tracking
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

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
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollDepthTracked])

  const handleOpenCalendly = () => {
    setShowCalendly(true)
    trackCalendlyOpened('cta_global')
  }

  const handleCloseCalendly = () => {
    setShowCalendly(false)
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-[#D4AF37] selection:text-black">
      <Navbar onOpenCalendly={handleOpenCalendly} />

      <Hero onOpenCalendly={handleOpenCalendly} />

      <SocialProof />

      <FormularioCalculadora onOpenCalendly={handleOpenCalendly} />

      <Products onOpenCalendly={handleOpenCalendly} />

      <Testimonios />

      <FinalCTA onOpenCalendly={handleOpenCalendly} />

      <Footer />

      {/* Calendly Modal */}
      {showCalendly && (
        <Suspense fallback={
          <div className="fixed inset-0 bg-[#0A0A0A] bg-opacity-95 z-[60] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin"></div>
              <div className="text-[#E5E4E2] font-bold tracking-widest uppercase text-sm">Cargando agenda...</div>
            </div>
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
