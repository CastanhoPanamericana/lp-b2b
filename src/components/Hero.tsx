import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-b2b"
      className="bg-[#111111] text-white px-[5%] py-10 md:py-12 text-center border-b border-[#222222]"
    >
      <div className="max-w-[850px] mx-auto">
        {/* Co-Branding Badge */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="inline-flex items-center gap-2.5 bg-[#1F1F1F] px-4 py-1.5 rounded-full border border-white/10 shadow-xs">
            <span className="text-[#C8102E] font-black text-xs tracking-wider">ESPM</span>
            <span className="text-gray-500 font-light text-xs">|</span>
            <span className="text-white font-extrabold text-xs tracking-wider">PANAMERICANA</span>
            <span className="text-gray-600 text-xs">•</span>
            <span className="text-[#FFF100] text-[0.68rem] font-black tracking-widest uppercase">Soluções Corporativas B2B</span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">
          Catálogo de Cursos Corporativos
        </h1>
        <p className="text-[#94A3B8] text-sm sm:text-base md:text-lg leading-relaxed max-w-[750px] mx-auto">
          Conheça os cursos e experiências exclusivas da <span className="text-white font-semibold">ESPM | Panamericana</span>.
          <br className="hidden sm:inline" />
          Selecione os módulos desejados e monte um programa sob medida para sua empresa.
        </p>
      </div>
    </section>
  );
};
