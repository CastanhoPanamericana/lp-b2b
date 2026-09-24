import React, { useState } from 'react';

interface HeaderProps {
  onOpenContact: (courseName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <header
      id="main-header"
      className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] px-[5%] py-3 shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
    >
      <div className="max-w-[1240px] mx-auto flex justify-between items-center gap-4">
        {/* Brand & B2B Tag */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 no-underline group"
          >
            {!imgError ? (
              <img
                src="https://escola-panamericana.com.br/wp-content/uploads/2026/03/Logo2026-ESPM-EPA.webp"
                alt="ESPM | Panamericana"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex items-center gap-1 font-black text-xl tracking-tight text-[#111111]">
                <span className="text-[#C8102E]">ESPM</span>
                <span className="text-gray-400 font-light">|</span>
                <span>PANAMERICANA</span>
              </div>
            )}
            <span
              id="b2b-tag-pill"
              className="bg-[#111111] text-white text-[0.7rem] font-extrabold px-2.5 py-1 rounded tracking-wider uppercase whitespace-nowrap"
            >
              SOLUÇÕES B2B
            </span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            <li>
              <a
                href="#catalogo"
                id="nav-catalogo"
                className="text-[#111111] hover:text-[#C8102E] font-bold text-[0.85rem] uppercase tracking-wide transition-colors"
              >
                Catálogo
              </a>
            </li>
            <li>
              <a
                href="#solucoes"
                id="nav-solucoes"
                className="text-[#111111] hover:text-[#C8102E] font-bold text-[0.85rem] uppercase tracking-wide transition-colors"
              >
                Soluções Corporativas
              </a>
            </li>
            <li>
              <a
                href="#diferenciais"
                id="nav-diferenciais"
                className="text-[#111111] hover:text-[#C8102E] font-bold text-[0.85rem] uppercase tracking-wide transition-colors"
              >
                Diferenciais
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact CTA Button */}
        <div className="flex items-center gap-3">
          <button
            id="btn-contact-consultor-header"
            onClick={() => onOpenContact()}
            className="bg-[#C8102E] hover:bg-[#A00C23] text-white px-5 py-2.5 rounded-md font-extrabold text-[0.8rem] uppercase tracking-wide transition-all shadow-sm active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            Falar com Consultor B2B
          </button>
        </div>
      </div>
    </header>
  );
};
