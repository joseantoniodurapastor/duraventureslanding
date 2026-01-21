import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenCalendly }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${isScrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#3A3A3A]' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png"
                        alt="Durá Ventures Logo"
                        className="w-10 h-10 object-contain rounded-lg shadow-lg shadow-gold/20"
                    />
                    <span className="font-black text-white text-xl tracking-tight hidden sm:block">
                        DURÁ VENTURES
                    </span>
                </div>

                {/* Nav links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#productos" className="text-[#E5E4E2] hover:text-[#D4AF37] transition-colors font-medium">Productos</a>
                    <a href="#calculadora" className="text-[#E5E4E2] hover:text-[#D4AF37] transition-colors font-medium">Cómo Funciona</a>
                    <a href="#casos" className="text-[#E5E4E2] hover:text-[#D4AF37] transition-colors font-medium">Casos Éxito</a>
                    <a href="#pricing" className="text-[#E5E4E2] hover:text-[#D4AF37] transition-colors font-medium">Pricing</a>
                </div>

                {/* CTA */}
                <button
                    onClick={onOpenCalendly}
                    className="bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all hover:scale-105"
                >
                    Auditoría Gratis
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
