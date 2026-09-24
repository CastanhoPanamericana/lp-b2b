import React from 'react';
import { appliedCreativitySegments } from '../data/courses';
import { Sparkles, Users, Presentation } from 'lucide-react';

interface AppliedCreativitySectionProps {
  onSelectActivity?: (activityTitle: string) => void;
  searchQuery?: string;
}

export const AppliedCreativitySection: React.FC<AppliedCreativitySectionProps> = ({
  onSelectActivity,
  searchQuery = '',
}) => {
  const query = searchQuery.toLowerCase().trim();

  return (
    <div id="categoria-experiencias" className="mb-14">
      {/* Category Header */}
      <div className="mb-6 pt-2">
        <div
          className="w-11 h-[5px] rounded-xs mb-2.5"
          style={{ backgroundColor: '#EA580C' }}
        />
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] uppercase tracking-tight">
            Experiências de Criatividade Aplicada
          </h2>
          <span className="text-[0.72rem] font-extrabold text-[#EA580C] bg-[#FFF7ED] border border-[#FFEDD5] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
            SOLUÇÕES CORPORATIVAS • 20 ATIVIDADES
          </span>
        </div>
        <p className="text-sm text-[#64748B] mt-2 max-w-3xl">
          Formatos executivos dinâmicos desenvolvidos sob medida para encontros de liderança, convenções, offsites e treinamentos imersivos.
        </p>
      </div>

      {/* 2 Full-Width Cards */}
      <div className="space-y-6">
        {appliedCreativitySegments.map((segment) => {
          const isMasterclass = segment.type === 'masterclass';

          // Filter activities if search query is present
          const filteredActivities = segment.activities.filter((act) => {
            if (!query) return true;
            return (
              act.toLowerCase().includes(query) ||
              segment.title.toLowerCase().includes(query) ||
              segment.formatDescription.toLowerCase().includes(query) ||
              'experiências de criatividade aplicada'.includes(query)
            );
          });

          if (query && filteredActivities.length === 0) {
            return null;
          }

          return (
            <div
              key={segment.type}
              id={`card-${segment.type}`}
              className="w-full bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 shadow-xs hover:border-[#CBD5E1] transition-all"
            >
              {/* Card Header & Badges */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-[#E2E8F0]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-[0.7rem] font-black tracking-wider px-3 py-1 rounded-full uppercase flex items-center gap-1.5 ${
                        isMasterclass
                          ? 'bg-[#F3E8FF] text-[#7C3AED]'
                          : 'bg-[#ECFDF5] text-[#059669]'
                      }`}
                    >
                      {isMasterclass ? (
                        <Presentation className="w-3.5 h-3.5" />
                      ) : (
                        <Users className="w-3.5 h-3.5" />
                      )}
                      {segment.badgeLabel}
                    </span>

                    <span className="text-[0.7rem] font-extrabold tracking-wider px-3 py-1 rounded-full uppercase bg-[#F1F5F9] text-[#475569]">
                      {isMasterclass
                        ? 'Formato Palestra'
                        : 'Ação Prática & Hands-on'}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-[#0F172A] tracking-tight">
                    {segment.title}
                  </h3>
                </div>

                <div className="text-xs font-bold text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1.5 rounded-md whitespace-nowrap self-start md:self-auto">
                  {segment.activities.length} Atividades Disponíveis
                </div>
              </div>

              {/* Description of Activity Type */}
              <div className="bg-[#FAF9F6] border-l-4 border-[#EA580C] px-5 py-3.5 rounded-r-md mb-6">
                <p className="text-[0.88rem] text-[#334155] leading-relaxed">
                  {segment.detailedDescription}
                </p>
              </div>

              {/* 10 Buttons for each activity in this segment */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-xs font-black text-[#475569] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                    Atividades Disponíveis neste Segmento:
                  </h4>
                  <span className="text-[0.72rem] text-[#64748B] font-semibold">
                    10 Opções
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {segment.activities.map((activity, idx) => {
                    const numberLabel = String(idx + 1).padStart(2, '0');
                    return (
                      <div
                        key={idx}
                        id={`item-${segment.type}-${idx + 1}`}
                        className={`w-full text-left p-3.5 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-between gap-3 ${
                          isMasterclass
                            ? 'border-l-4 border-l-[#7C3AED]'
                            : 'border-l-4 border-l-[#059669]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-7 h-7 shrink-0 rounded-md flex items-center justify-center text-[0.75rem] font-black ${
                              isMasterclass
                                ? 'bg-[#EDE9FE] text-[#7C3AED]'
                                : 'bg-[#DCFCE7] text-[#059669]'
                            }`}
                          >
                            {numberLabel}
                          </span>
                          <span className="text-[0.85rem] font-bold text-[#1E293B] leading-tight">
                            {activity}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
