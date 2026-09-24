import React, { useState } from 'react';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <footer
      id="footer"
      className="bg-black text-white py-10 px-[5%] border-t border-[#1F1F1F]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center">
        {!imgError ? (
          <img
            src="https://escola-panamericana.com.br/wp-content/uploads/2026/03/Logo2026-ESPM-EPA.webp"
            alt="ESPM | Panamericana Escola de Arte e Design"
            className="h-10 sm:h-12 w-auto object-contain brightness-105"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex items-center gap-2 font-black text-2xl tracking-tight text-white select-none">
            <span className="text-[#C8102E]">ESPM</span>
            <span className="text-gray-500 font-light">|</span>
            <span className="tracking-wide">PANAMERICANA</span>
          </div>
        )}
      </div>
    </footer>
  );
};
