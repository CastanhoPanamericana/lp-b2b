import React from 'react';
import { Award, Users, BookOpen, Sparkles, Building2, Layers } from 'lucide-react';

interface CorporateProps {
  onOpenContact: () => void;
}

export const CorporateSolutions: React.FC<CorporateProps> = ({ onOpenContact }) => {
  return (
    <div className="bg-white border-t border-[#E2E8F0] py-16 px-[5%]">
      <div className="max-w-[1240px] mx-auto space-y-16">
        {/* Soluções Corporativas Section */}
        <section id="solucoes" className="scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C8102E] font-black text-xs uppercase tracking-widest block mb-2">
              Flexibilidade e Personalização
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase">
              Soluções Corporativas In-Company
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Formatos flexíveis para atender as necessidades de desenvolvimento e inovação do seu time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#FAF9F6] border border-[#E2E8F0] p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#C8102E]/10 text-[#C8102E] flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base uppercase text-[#111111] mb-2">
                  Turmas Exclusivas In-Company
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Cursos e pós-graduações formatados especificamente para a realidade e desafios da sua empresa, presenciais ou online síncronos.
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="mt-6 text-xs font-black text-[#C8102E] hover:underline flex items-center gap-1 cursor-pointer"
              >
                CONSULTAR TURMA EXCLUSIVA →
              </button>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E2E8F0] p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#8A2BE2]/10 text-[#8A2BE2] flex items-center justify-center mb-4">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base uppercase text-[#111111] mb-2">
                  Trilhas Modulares Customizadas
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Monte um percurso de aprendizagem combinando intensivos e módulos de diferentes áreas: Design, Games, Fotografia e Moda.
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="mt-6 text-xs font-black text-[#C8102E] hover:underline flex items-center gap-1 cursor-pointer"
              >
                MONTAR TRILHA SOB MEDIDA →
              </button>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E2E8F0] p-6 rounded-xl flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 text-[#D97706] flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base uppercase text-[#111111] mb-2">
                  Vouchers & Bolsas Corporativas
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Condições especiais e pacotes de créditos para colaboradores da sua organização cursarem turmas abertas em nosso catálogo.
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="mt-6 text-xs font-black text-[#C8102E] hover:underline flex items-center gap-1 cursor-pointer"
              >
                SOLICITAR TABELA B2B →
              </button>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="scroll-mt-24 pt-8 border-t border-gray-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#C8102E] font-black text-xs uppercase tracking-widest block mb-2">
              Excelência Acadêmica e Prática de Mercado
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-[#111111] uppercase">
              Diferenciais ESPM | Panamericana
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-lg border border-slate-200 bg-white">
              <div className="text-[#C8102E] mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1 uppercase">Certificação Dupla</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                A união da referência máxima em negócios e comunicação da ESPM com a tradição em arte e design da Panamericana.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-white">
              <div className="text-[#C8102E] mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1 uppercase">Corpo Docente Atuante</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Professores e especialistas que lideram o mercado em estúdios, agências e grandes corporações.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-white">
              <div className="text-[#C8102E] mb-3">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1 uppercase">Créditos Cumulativos</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Possibilidade de cursar módulos intensivos e aproveitar os créditos para a titulação completa de pós-graduação em até 5 anos.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-white">
              <div className="text-[#C8102E] mb-3">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1 uppercase">Projetos Reais (Hands-On)</h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Metodologia orientada à prática com resolução de desafios reais aplicáveis diretamente ao dia a dia da empresa.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
