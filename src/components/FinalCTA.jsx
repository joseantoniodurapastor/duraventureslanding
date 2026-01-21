import React from 'react';

const FinalCTA = ({ onOpenCalendly }) => {
    return (
        <section id="pricing" className="relative py-32 px-6 bg-gradient-to-br from-[#1A1A1A] via-[#0A0A0A] to-[#1A1A1A] overflow-hidden">

            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F4D03F]/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">

                <h2 className="font-black text-5xl md:text-7xl text-white mb-6 leading-tight">
                    Deja de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] italic">perder dinero</span>
                </h2>

                <p className="text-2xl text-[#E5E4E2] mb-12 max-w-2xl mx-auto leading-relaxed">
                    Agenda tu auditoría gratuita de 20 minutos. Te mostramos exactamente cuánto estás perdiendo y cómo cerrarlo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button
                        onClick={onOpenCalendly}
                        className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-10 py-5 rounded-xl font-black text-xl hover:shadow-2xl hover:shadow-[#D4AF37]/50 transition-all hover:scale-105"
                    >
                        Agendar Auditoría Ahora
                    </button>

                    <a
                        href="#productos"
                        className="bg-white/5 backdrop-blur border-2 border-[#3A3A3A] text-white px-10 py-5 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center"
                    >
                        Ver Productos
                    </a>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-[#8C8C8C]">
                    {[
                        "Sin compromiso",
                        "20 minutos",
                        "Cálculo € real"
                    ].map((text, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="font-bold uppercase tracking-wider">{text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FinalCTA;
