import React from 'react';
import { FilterState } from '../types';
import { allAreas, categoryOrdering, getCategoryDisplayName } from '../data/courses';
import { Search, X, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onReset: () => void;
  totalCourses: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalCourses,
}) => {
  const isFiltered =
    (filters.categoria && filters.categoria !== '') ||
    (filters.area && filters.area !== '') ||
    (filters.searchQuery && filters.searchQuery !== '');

  return (
    <div
      id="filter-panel"
      className="sticky top-0 z-40 bg-white border-b border-[#E2E8F0] px-[5%] py-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        {/* Left Side: Filters Group */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[0.78rem] font-extrabold uppercase text-[#64748B] tracking-wider whitespace-nowrap">
            Filtrar Catálogo:
          </span>

          {/* Categoria Select */}
          <select
            id="filter-categoria"
            value={filters.categoria}
            onChange={(e) => onFilterChange('categoria', e.target.value)}
            className="px-3.5 py-2 border border-[#E2E8F0] rounded-md text-[0.85rem] font-semibold bg-white text-[#1A1A1A] outline-none focus:border-[#C8102E] transition-colors cursor-pointer min-w-[200px]"
          >
            <option value="">Todas as Categorias</option>
            {categoryOrdering.map((c) => (
              <option key={c} value={c}>
                {getCategoryDisplayName(c)}
              </option>
            ))}
          </select>

          {/* Area Select */}
          <select
            id="filter-area"
            value={filters.area}
            onChange={(e) => onFilterChange('area', e.target.value)}
            className="px-3.5 py-2 border border-[#E2E8F0] rounded-md text-[0.85rem] font-semibold bg-white text-[#1A1A1A] outline-none focus:border-[#C8102E] transition-colors cursor-pointer min-w-[210px]"
          >
            <option value="">Todas as Áreas Temáticas</option>
            {allAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          {/* Quick Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
            <input
              type="text"
              id="search-input"
              value={filters.searchQuery}
              onChange={(e) => onFilterChange('searchQuery', e.target.value)}
              placeholder="Buscar curso, módulo ou workshop..."
              className="w-full pl-9 pr-7 py-2 border border-[#E2E8F0] rounded-md text-[0.85rem] font-medium bg-white text-[#1A1A1A] placeholder-[#94A3B8] outline-none focus:border-[#C8102E] transition-colors"
            />
            {filters.searchQuery && (
              <button
                type="button"
                onClick={() => onFilterChange('searchQuery', '')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                title="Limpar busca"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Side: Total & Reset */}
        <div className="flex items-center justify-between md:justify-end gap-3 pt-1 md:pt-0">
          <span className="text-[0.8rem] font-semibold text-[#64748B]">
            {totalCourses} {totalCourses === 1 ? 'programa' : 'programas'}
          </span>
          {isFiltered && (
            <button
              id="btn-reset-filters"
              onClick={onReset}
              className="flex items-center gap-1.5 text-[#C8102E] hover:text-[#A00C23] text-[0.8rem] font-bold cursor-pointer underline transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
