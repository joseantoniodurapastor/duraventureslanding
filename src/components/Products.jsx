import React from 'react';

const Products = ({ onOpenCalendly }) => {
    return (
        <section id="productos" className="py-24 px-6 bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-black text-4xl md:text-6xl text-white mb-4 italic">
                        Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] not-italic">Productos</span>
                    </h2>
                    <p className="text-xl text-[#E5E4E2] max-w-2xl mx-auto">
                        Dos soluciones. Un objetivo: convertir tu hemorragia económica en facturación.
                    </p>
                </div>

                {/* Products grid */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Closer Proposals Card */}
                    <div className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#3A3A3A] hover:border-[#D4AF37] transition-all hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2">

                        {/* Badge top */}
                        <div className="absolute top-4 right-4 bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold">
                            BEST SELLER
                        </div>

                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>

                        {/* Logo producto */}
                        <div className="mb-4">
                            <div className="flex items-center gap-2">
                                <h3 className="font-black text-3xl text-white">CLOSER PROPOSALS</h3>
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            </div>
                            <p className="text-[#D4AF37] font-semibold italic mt-1">
                                Tu closer de élite trabajando 24/7
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[#E5E4E2] leading-relaxed mb-6">
                            Implementación personalizada SaaS que genera propuestas comerciales B2B de alto impacto basadas en dolor económico del cliente.
                            No vendemos software genérico. Vendemos implementación completa que <span className="text-white font-bold">cierra ventas</span>.
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                            {[
                                "SaaS con tu marca + dominio propio",
                                "4 IAs élite (Claude, GPT-4, Grok, Gemini)",
                                "Implementación en 48h",
                                "Acceso vitalicio + actualizaciones gratis"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-[#E5E4E2]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#0A0A0A]/50 rounded-xl border border-[#3A3A3A]">
                            <div>
                                <div className="text-xs text-[#8C8C8C] mb-1 uppercase font-bold tracking-wider">Tasa cierre</div>
                                <div className="font-black text-2xl text-white">
                                    30% → <span className="text-[#D4AF37]">60%</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xs text-[#8C8C8C] mb-1 uppercase font-bold tracking-wider">ROI promedio</div>
                                <div className="font-black text-2xl text-[#D4AF37]">14 días</div>
                            </div>
                        </div>

                        {/* Precio */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-2">
                                <span className="font-black text-5xl text-white">1.997€</span>
                                <span className="text-[#8C8C8C] font-medium">pago único</span>
                            </div>
                            <p className="text-[#D4AF37] text-sm font-semibold mt-1 uppercase tracking-wider">
                                Propiedad vitalicia del activo
                            </p>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={onOpenCalendly}
                            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all group-hover:scale-[1.02]"
                        >
                            Genera Propuesta Demo → +1.000€/mes
                        </button>
                    </div>

                    {/* IA Feroz Card */}
                    <div className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-3xl p-8 border border-[#3A3A3A] hover:border-[#D4AF37] transition-all hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:-translate-y-2">

                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F4D03F] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>

                        {/* Logo producto */}
                        <div className="mb-4">
                            <h3 className="font-black text-3xl text-white uppercase">IA FEROZ</h3>
                            <p className="text-[#D4AF37] font-semibold italic mt-1">
                                Automatización que muerde
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-[#E5E4E2] leading-relaxed mb-6">
                            Implementamos workflows automatización n8n + IA en 7 días que eliminan procesos manuales y devuelven margen a empresas 50K-3M€ revenue/año.
                            No vendemos educación. Vendemos <span className="text-white font-bold">implementación funcionando</span>.
                        </p>

                        {/* Features */}
                        <div className="space-y-3 mb-6">
                            {[
                                "Workflows n8n personalizados",
                                "Integración IAs (Claude, GPT, Gemini)",
                                "Entrega garantizada 7 días",
                                "Soporte técnico incluido"
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-[#E5E4E2]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#0A0A0A]/50 rounded-xl border border-[#3A3A3A]">
                            <div>
                                <div className="text-xs text-[#8C8C8C] mb-1 uppercase font-bold tracking-wider">Ahorro promedio</div>
                                <div className="font-black text-2xl text-[#D4AF37]">4.980€/mes</div>
                            </div>
                            <div>
                                <div className="text-xs text-[#8C8C8C] mb-1 uppercase font-bold tracking-wider">Entrega</div>
                                <div className="font-black text-2xl text-white">7 días</div>
                            </div>
                        </div>

                        {/* Precio */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-2">
                                <span className="font-black text-5xl text-white">600€</span>
                                <span className="text-[#8C8C8C] font-medium">base</span>
                            </div>
                            <p className="text-[#D4AF37] text-sm font-semibold mt-1 uppercase tracking-wider">
                                + workflows modulares
                            </p>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={onOpenCalendly}
                            className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all group-hover:scale-[1.02]"
                        >
                            Auditoría Procesos 20 Min → Ahorra 4.980€
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Products;
