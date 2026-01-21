import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#3A3A3A] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/logo.png"
                alt="Durá Ventures Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-lg shadow-gold/20"
              />
              <span className="font-black text-white text-xl tracking-tight">
                DURÁ VENTURES
              </span>
            </div>
            <p className="text-[#8C8C8C] leading-relaxed max-w-md mb-8 text-lg">
              Building High-Ticket SaaS. Productos B2B que resuelven ineficiencias costosas mediante software e IA.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/duraventures" className="w-12 h-12 bg-[#1A1A1A] rounded-xl flex items-center justify-center hover:bg-[#2A2A2A] transition-all hover:scale-110 border border-[#3A3A3A]">
                <svg className="w-6 h-6 text-[#E5E4E2]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Productos</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://closerproposals.es" className="text-[#8C8C8C] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  Closer Proposals
                </a>
              </li>
              <li>
                <a href="https://iaferoz.com" className="text-[#8C8C8C] hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                  IA Feroz
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Contacto</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hola@duraventures.com" className="text-[#8C8C8C] hover:text-[#D4AF37] transition-colors">
                  hola@duraventures.com
                </a>
              </li>
              <li className="text-[#8C8C8C]">Madrid, España</li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#3A3A3A] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8C8C8C] text-sm font-medium">
            © 2025 Durá Ventures S.L. Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-[#8C8C8C] hover:text-white transition-colors font-medium">
              Privacidad
            </a>
            <a href="#" className="text-[#8C8C8C] hover:text-white transition-colors font-medium">
              Términos
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
