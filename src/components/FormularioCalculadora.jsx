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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !formStarted) {
          trackFormStart()
          setFormStarted(true)
        }
      })
    }, { threshold: 0.5 })

    const element = document.getElementById('calculadora')
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

    // Calcular en vivo cuando los campos numéricos básicos están llenos
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

  return (
    <section id="calculadora" className="relative py-24 px-6 bg-[#0A0A0A] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#D4AF37]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 mb-4">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">
              Calculadora hemorragia económica
            </span>
          </div>

          <h2 className="font-black text-4xl md:text-6xl text-white mb-6">
            ¿Cuánto dinero estás perdiendo?
          </h2>
          <p className="text-xl text-[#E5E4E2] max-w-2xl mx-auto">
            Responde 4 preguntas. Te mostramos tu hemorragia económica en tiempo real.
          </p>
        </div>

        {/* Calculator card */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div className="bg-[#1A1A1A] rounded-3xl p-8 border border-[#3A3A3A] shadow-2xl">

            {/* Campo 1 */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#8C8C8C] uppercase tracking-widest mb-4">
                ¿Qué vendes?
              </label>
              <select
                className="w-full bg-[#0A0A0A] border border-[#3A3A3A] text-white px-6 py-4 rounded-xl focus:border-[#D4AF37] outline-none appearance-none cursor-pointer"
                value={formData.tipoVenta}
                onChange={(e) => handleChange('tipoVenta', e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                <option value="servicios-b2b">Servicios B2B (consultoría, agencia)</option>
                <option value="saas">SaaS / Software</option>
                <option value="productos-high-ticket">Productos high-ticket (+1000€)</option>
              </select>
            </div>

            {/* Campo 2 */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#8C8C8C] uppercase tracking-widest mb-4">
                Ticket medio por proyecto
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-[#0A0A0A] border border-[#3A3A3A] text-white px-6 py-4 rounded-xl focus:border-[#D4AF37] outline-none"
                  placeholder="5000"
                  value={formData.ticketMedio}
                  onChange={(e) => handleChange('ticketMedio', e.target.value)}
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#8C8C8C] font-bold">€</span>
              </div>
              <p className="text-xs text-[#555] mt-2">Valor promedio de cada deal</p>
            </div>

            {/* Campo 3 */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#8C8C8C] uppercase tracking-widest mb-4">
                Propuestas que envías al mes
              </label>
              <input
                type="number"
                className="w-full bg-[#0A0A0A] border border-[#3A3A3A] text-white px-6 py-4 rounded-xl focus:border-[#D4AF37] outline-none"
                placeholder="10"
                value={formData.propuestasMes}
                onChange={(e) => handleChange('propuestasMes', e.target.value)}
              />
            </div>

            {/* Campo 4 */}
            <div className="mb-8">
              <label className="block text-sm font-bold text-[#8C8C8C] uppercase tracking-widest mb-4">
                Tasa de conversión actual
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full bg-[#0A0A0A] border border-[#3A3A3A] text-white px-6 py-4 rounded-xl focus:border-[#D4AF37] outline-none"
                  placeholder="30"
                  value={formData.conversionActual}
                  onChange={(e) => handleChange('conversionActual', e.target.value)}
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#8C8C8C] font-bold">%</span>
              </div>
              <p className="text-xs text-[#555] mt-2">Ejemplo: 30% = 3 de cada 10 propuestas cierran</p>
            </div>

          </div>

          {/* Resultado (mostrar cuando se calcula) */}
          <div className={`relative transition-all duration-700 ${hemorragia ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {hemorragia && (
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-3xl p-10 border-2 border-red-500/50 shadow-[0_0_50px_rgba(239,68,68,0.2)]">

                {/* Animated background */}
                <div className="absolute inset-0 bg-red-500/5 opacity-10 animate-pulse rounded-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-red-500 uppercase tracking-widest mb-6">
                    Tu hemorragia económica mensual:
                  </h3>

                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-black text-6xl md:text-8xl text-white tracking-tighter">
                      {hemorragia.mensual.toLocaleString('es-ES')}
                    </span>
                    <span className="text-3xl font-black text-[#D4AF37]">€</span>
                    <span className="text-xl text-[#8C8C8C]">/mes</span>
                  </div>

                  <div className="bg-red-500/20 text-red-200 px-4 py-2 rounded-lg inline-block font-bold text-lg mb-8">
                    Al año: {hemorragia.anual.toLocaleString('es-ES')}€
                  </div>

                  <div className="space-y-6 mb-10">
                    <p className="text-xl text-[#E5E4E2] leading-relaxed">
                      Estás cerrando solo {Math.round(formData.propuestasMes * (formData.conversionActual / 100))} de cada {formData.propuestasMes} propuestas.
                      Con <span className="text-[#D4AF37] font-bold">Closer Proposals</span>, empresas de tu perfil cierran {Math.round(formData.propuestasMes * 0.6)}.
                    </p>
                    <div className="h-px bg-[#3A3A3A] w-full"></div>
                    <p className="text-lg text-red-400 font-medium">
                      Son {Math.round(formData.propuestasMes * 0.6) - Math.round(formData.propuestasMes * (formData.conversionActual / 100))} proyectos más al mes × {formData.ticketMedio}€ = {hemorragia.mensual.toLocaleString('es-ES')}€/mes que se te escapan ahora mismo.
                    </p>
                  </div>

                  <button
                    onClick={onOpenCalendly}
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-6 rounded-2xl font-black text-xl hover:scale-[1.02] transition-all hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
                  >
                    Agendar Auditoría Ahora → Cerrar Esta Hemorragia
                  </button>
                </div>
              </div>
            )}
            {!hemorragia && (
              <div className="h-full flex items-center justify-center p-12 border-2 border-dashed border-[#3A3A3A] rounded-3xl">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#555]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-[#8C8C8C] font-medium">Completa los datos para ver tu resultado en vivo</p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}

export default FormularioCalculadora
