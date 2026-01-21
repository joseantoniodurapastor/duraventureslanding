import React from 'react';

const Hero = ({ onOpenCalendly }) => {
  const scrollToCalculator = () => {
    document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0A0A0A]">
      {/* Decorative elements background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4D03F]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-bold text-[#E5E4E2] uppercase tracking-wider">
                Solo 3 slots disponibles esta semana
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Deja de perder{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">
                15.000€/mes
              </span>
              {' '}en propuestas
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-[#E5E4E2] mb-10 max-w-xl leading-relaxed">
              SaaS personalizado que genera propuestas comerciales agresivas.
              Convierte tu tasa de cierre de 30% amateur a 60% élite.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToCalculator}
                className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#D4AF37]/40 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Calcula tu hemorragia →
                <span className="text-sm">€</span>
              </button>

              <button
                onClick={onOpenCalendly}
                className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center"
              >
                Ver demo en vivo
              </button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-[#1A1A1A] flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-[#D4AF37]">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-[#8C8C8C] font-bold">
                  50K€+ recuperados por clientes
                </span>
              </div>
            </div>
          </div>

          {/* Right: Visual/Demo */}
          <div className="relative">
            {/* Mockup container con glow */}
            <div className="relative z-10 bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] rounded-2xl border border-[#3A3A3A] shadow-2xl overflow-hidden p-2">

              {/* Fake browser chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#3A3A3A]">
                <div className="w-3 h-3 rounded-full bg-[#3A3A3A]"></div>
                <div className="w-3 h-3 rounded-full bg-[#3A3A3A]"></div>
                <div className="w-3 h-3 rounded-full bg-[#3A3A3A]"></div>
              </div>

              {/* Content preview mimic */}
              <div className="aspect-video bg-[#0A0A0A] p-6 space-y-4">
                <div className="h-4 w-1/3 bg-[#1A1A1A] rounded animate-pulse"></div>
                <div className="h-8 w-full bg-[#2A2A2A] rounded animate-pulse"></div>
                <div className="h-24 w-full bg-[#1A1A1A] rounded animate-pulse"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                    <div className="text-[10px] text-[#8C8C8C] uppercase mb-1">Tasa cierre</div>
                    <div className="text-2xl font-black text-[#D4AF37]">60%</div>
                  </div>
                  <div className="p-4 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5">
                    <div className="text-[10px] text-[#8C8C8C] uppercase mb-1">ROI</div>
                    <div className="text-2xl font-black text-[#D4AF37]">14d</div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#F4D03F]/20 blur-2xl -z-10"></div>
            </div>

            {/* Floating stats */}
            <div className="absolute -top-6 -right-6 z-20 bg-[#1A1A1A] border border-[#3A3A3A] p-4 rounded-xl shadow-xl animate-bounce-slow">
              <div className="text-[10px] text-[#8C8C8C] uppercase">Ahorro promedio</div>
              <div className="text-xl font-black text-white">15K€/mes</div>
            </div>

            <div className="absolute -bottom-6 -left-6 z-20 bg-[#1A1A1A] border border-[#3A3A3A] p-4 rounded-xl shadow-xl">
              <div className="text-[10px] text-[#8C8C8C] uppercase">Implementación</div>
              <div className="text-xl font-black text-white">48h</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
