import { useEffect } from 'react'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Filosofia from './components/Filosofia'
import Numeros from './components/Numeros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
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

  return (
    <main className="min-h-screen bg-negro-absoluto">
      <Hero />
      <Portfolio />
      <Filosofia />
      <Numeros />
      <Contacto />
      <Footer />
    </main>
  )
}

export default App
