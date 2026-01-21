import { useState, useEffect } from 'react'
import { trackFormStart, trackFormFieldComplete, trackFormSubmit, trackHemorragiaCalculated, trackCalendlyOpened } from '../utils/tracking'

const FormularioCalculadora = ({ onOpenCalendly }) => {
  const [formData, setFormData] = useState({
    tipoVenta: '',
    ticketMedio: '',
    propuestasMes: '',
    conversionActual: '',
    email: '',
    linkedin: ''
  })
  const [hemorragia, setHemorragia] = useState(null)
  const [formStarted, setFormStarted] = useState(false)

  useEffect(() => {
    // Track cuando se inicia el formulario (usuario hace scroll hasta él)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !formStarted) {
          trackFormStart()
          setFormStarted(true)
        }
      })
    }, { threshold: 0.5 })

    const element = document.getElementById('formulario')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [formStarted])

  const calcularHemorragia = (ticket, propuestas, conversionActual) => {
    const conversionObjetivo = 60 // Con Closer Proposals
    const cierresActuales = propuestas * (conversionActual / 100)
    const cierresPotenciales = propuestas * (conversionObjetivo / 100)
    const dealsPerdidos = cierresPotenciales - cierresActuales
    const hemorragiaMensual = Math.round(dealsPerdidos * ticket)
    const hemorragiaAnual = hemorragiaMensual * 12
    return { mensual: hemorragiaMensual, anual: hemorragiaAnual }
  }

  const handleChange = (field, value) => {
    const newData = {
      ...formData,
      [field]: value
    }
    setFormData(newData)
    trackFormFieldComplete(field)
    
    // Calcular en vivo cuando todos los campos están llenos
    const ticket = parseFloat(newData.ticketMedio)
    const propuestas = parseFloat(newData.propuestasMes)
    const conversion = parseFloat(newData.conversionActual)

    if (newData.tipoVenta && ticket && propuestas && conversion && !isNaN(ticket) && !isNaN(propuestas) && !isNaN(conversion)) {
      const calculo = calcularHemorragia(ticket, propuestas, conversion)
      setHemorragia(calculo)
      trackHemorragiaCalculated(calculo.mensual, calculo.anual)
    } else {
      setHemorragia(null)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (hemorragia) {
      trackFormSubmit({
        hemorragia_mensual: hemorragia.mensual,
        hemorragia_anual: hemorragia.anual,
        ...formData
      })
      
      // Guardar en localStorage
      localStorage.setItem('calculadoraData', JSON.stringify({
        ...formData,
        hemorragia
      }))
      
      // Abrir Calendly
      trackCalendlyOpened('form_calculadora')
      onOpenCalendly()
    }
  }

  return (
    <section id="formulario" className="bg-zinc-oscuro py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading font-bold text-blanco-puro text-3xl text-center mb-4">
          ¿Cuánto dinero estás perdiendo exactamente?
        </h2>
        <p className="text-platino-dark text-center mb-12">
          Responde 4 preguntas. Te calculamos tu hemorragia económica en vivo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo 1: ¿Qué vendes? */}
          <div>
            <label className="block text-blanco-puro text-sm mb-2">¿Qué vendes?</label>
            <select
              value={formData.tipoVenta}
              onChange={(e) => handleChange('tipoVenta', e.target.value)}
              className="w-full bg-negro-absoluto border border-platino-dark text-blanco-puro px-4 py-3 focus:border-oro-ejecutivo focus:outline-none rounded-sm"
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="servicios-b2b">Servicios B2B (consultoría, agencia)</option>
              <option value="saas">SaaS / Software</option>
              <option value="productos-high-ticket">Productos high-ticket</option>
            </select>
          </div>

          {/* Campo 2: Ticket medio */}
          <div>
            <label className="block text-blanco-puro text-sm mb-2">Ticket medio por proyecto/cliente</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.ticketMedio}
                onChange={(e) => handleChange('ticketMedio', e.target.value)}
                placeholder="15000"
                className="flex-1 bg-negro-absoluto border border-platino-dark text-blanco-puro px-4 py-3 focus:border-oro-ejecutivo focus:outline-none rounded-sm"
                required
              />
              <span className="text-platino-dark text-sm whitespace-nowrap">€ (promedio)</span>
            </div>
          </div>

          {/* Campo 3: Propuestas/mes */}
          <div>
            <label className="block text-blanco-puro text-sm mb-2">¿Cuántas propuestas envías al mes?</label>
            <input
              type="number"
              value={formData.propuestasMes}
              onChange={(e) => handleChange('propuestasMes', e.target.value)}
              placeholder="10"
              className="w-full bg-negro-absoluto border border-platino-dark text-blanco-puro px-4 py-3 focus:border-oro-ejecutivo focus:outline-none rounded-sm"
              required
            />
          </div>

          {/* Campo 4: Conversión actual */}
          <div>
            <label className="block text-blanco-puro text-sm mb-2">Tasa conversión actual</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={formData.conversionActual}
                onChange={(e) => handleChange('conversionActual', e.target.value)}
                placeholder="30"
                min="0"
                max="100"
                className="flex-1 bg-negro-absoluto border border-platino-dark text-blanco-puro px-4 py-3 focus:border-oro-ejecutivo focus:outline-none rounded-sm"
                required
              />
              <span className="text-platino-dark text-sm whitespace-nowrap">% (ej: 30 = 3 de cada 10)</span>
            </div>
          </div>

          {/* Resultado cálculo */}
          {hemorragia && hemorragia.mensual > 0 && (
            <div className="bg-red-600 border-2 border-red-400 p-6 rounded-sm">
              <p className="text-white text-lg mb-2">Tu hemorragia económica mensual:</p>
              <p className="font-mono text-oro-ejecutivo text-5xl font-bold mb-2">
                {hemorragia.mensual.toLocaleString('es-ES')}€
              </p>
              <p className="text-white text-2xl mb-4">
                Al año: {hemorragia.anual.toLocaleString('es-ES')}€
              </p>
              <p className="text-white text-sm opacity-90">
                Basado en mejorar tu tasa de cierre del {formData.conversionActual}% al 60% con Closer Proposals.
              </p>
            </div>
          )}

          {/* Campos captura lead (solo mostrar si hay resultado) */}
          {hemorragia && hemorragia.mensual > 0 && (
            <>
              <div>
                <label className="block text-blanco-puro text-sm mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="w-full bg-negro-absoluto border border-platino-dark text-blanco-puro px-4 py-3 focus:border-oro-ejecutivo focus:outline-none rounded-sm"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-blanco-puro text-sm mb-2">LinkedIn URL (opcional)</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleChange('linkedin', e.target.value)}
                  className="w-full bg-negro-absoluto border border-platino-dark text-blanco-puro px-4 py-3 focus:border-oro-ejecutivo focus:outline-none rounded-sm"
                  placeholder="https://linkedin.com/in/tu-perfil"
                />
              </div>
            </>
          )}

          {/* CTA post-cálculo */}
          {hemorragia && hemorragia.mensual > 0 && (
            <button
              type="submit"
              className="w-full bg-oro-ejecutivo text-negro-absoluto py-4 font-heading font-bold text-lg rounded-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar Auditoría Ahora → Cerrar Esta Hemorragia
            </button>
          )}
        </form>
      </div>
    </section>
  )
}

export default FormularioCalculadora
