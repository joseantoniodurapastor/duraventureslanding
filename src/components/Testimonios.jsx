import React from 'react';

const Testimonios = () => {
  const testimonials = [
    {
      name: "María G.",
      role: "Consultora Transformación Digital",
      facturacion: "180K€/año facturación",
      quote: "Cerré 2 proyectos más al mes. Son 50K€ extra al año. Inversión 1.997€ recuperada en 2 semanas.",
      metric: "+50.000€",
      metricLabel: "/año",
      payback: "Payback: 14 días",
      initial: "M"
    },
    {
      name: "Fundador Agencia",
      role: "Agencia Marketing Digital",
      facturacion: "10 empleados, Madrid",
      quote: "Reducimos tiempo propuestas de 4 días a 1 hora. Cerramos 3 de los 10 deals que antes perdíamos. +288K€/año.",
      metric: "+288.000€",
      metricLabel: "/año",
      payback: "Ahorro: 96h/mes",
      initial: "A"
    },
    {
      name: "Director Operaciones",
      role: "Agencia Performance",
      facturacion: "Valencia, 30 clientes activos",
      quote: "Automatizamos reportes clientes. Ahorramos 12h/semana = 1.280€/mes. ROI en 18 días con IA Feroz.",
      metric: "+15.360€",
      metricLabel: "/año",
      payback: "ROI: 18 días",
      initial: "D"
    }
  ];

  return (
    <section id="casos" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-black text-4xl md:text-6xl text-white mb-4">
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">Reales</span>
          </h2>
          <p className="text-xl text-[#E5E4E2] max-w-2xl mx-auto">
            Números verificables. No promesas vacías.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-2xl p-8 border border-[#3A3A3A] hover:border-[#D4AF37] transition-all group">

              {/* Quote */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-[#D4AF37]/30 mb-4 group-hover:text-[#D4AF37]/50 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-[#E5E4E2] text-lg leading-relaxed mb-4">
                  {t.quote}
                </p>
              </div>

              {/* Metric destacada */}
              <div className="bg-[#0A0A0A]/50 rounded-xl p-4 mb-6 border-l-4 border-[#D4AF37]">
                <div className="font-black text-3xl text-white mb-1">
                  {t.metric}<span className="text-[#D4AF37]">{t.metricLabel}</span>
                </div>
                <div className="text-sm text-[#8C8C8C] font-bold uppercase tracking-wider">{t.payback}</div>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-full flex items-center justify-center font-black text-black text-xl shadow-lg">
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-[#8C8C8C]">{t.role}</div>
                  <div className="text-xs text-[#8C8C8C] font-mono mt-1">{t.facturacion}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonios;
