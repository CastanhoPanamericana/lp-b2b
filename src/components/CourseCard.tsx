import React from 'react';

interface CourseCardProps {
  title: string;
  badgeType: 'pos' | 'intensivo' | 'formacao' | 'tecnica' | 'ondemand' | 'experiencia';
  badgeLabel: string;
  areaLabel: string;
  isParent?: boolean;
  onSelect?: (courseName: string) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  badgeType,
  badgeLabel,
  areaLabel,
  isParent = false,
  onSelect,
}) => {
  const getBadgeStyle = () => {
    switch (badgeType) {
      case 'pos':
        return 'bg-[#F3E8FF] text-[#8A2BE2]';
      case 'intensivo':
        return 'bg-[#FEF3C7] text-[#D97706]';
      case 'formacao':
        return 'bg-[#DBEAFE] text-[#2563EB]';
      case 'tecnica':
        return 'bg-[#E0E7FF] text-[#4F46E5]';
      case 'ondemand':
        return 'bg-[#ECFCCB] text-[#4D7C0F]';
      case 'experiencia':
        return 'bg-[#FFF7ED] text-[#EA580C]';
      default:
        return 'bg-[#F1F5F9] text-[#475569]';
    }
  };

  const footerText =
    badgeType === 'ondemand'
      ? 'CURSO ONDEMAND'
      : isParent
      ? 'PROGRAMA COMPLETO'
      : 'PROGRAMA REGULAR';

  return (
    <div
      onClick={onSelect ? () => onSelect(title) : undefined}
      className={`rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all duration-200 ${
        onSelect
          ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)]'
          : 'hover:shadow-[0_6px_18px_rgba(0,0,0,0.04)]'
      } group ${
        isParent
          ? 'bg-[#FAF9F6] border-2 border-[#CBD5E0]'
          : 'bg-white border border-[#E2E8F0]'
      }`}
    >
      <div>
        {/* Badges Container */}
        <div className="flex flex-col gap-1.5 items-start mb-4">
          <span
            className={`text-[0.68rem] font-black tracking-wider px-3 py-1 rounded-full uppercase ${getBadgeStyle()}`}
          >
            {badgeLabel}
          </span>
          <span className="text-[0.65rem] font-extrabold tracking-wider px-3 py-0.5 rounded-full uppercase bg-[#F1F5F9] text-[#475569]">
            {areaLabel}
          </span>
        </div>

        {/* Course Title */}
        <h4 className="text-[0.95rem] sm:text-[1rem] font-black text-[#0F172A] leading-[1.35] uppercase mb-4 group-hover:text-[#C8102E] transition-colors">
          {title}
        </h4>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-4 border-t border-[#F1F5F9] group-hover:border-[#E2E8F0] transition-colors">
        <span className="text-[0.7rem] font-black text-[#64748B] tracking-wider uppercase">
          {footerText}
        </span>
        <span className="text-[0.68rem] font-bold text-[#94A3B8] tracking-wider uppercase">
          ESPM • Panamericana
        </span>
      </div>
    </div>
  );
};
