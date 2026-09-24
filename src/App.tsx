/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { CatalogSection } from './components/CatalogSection';
import { Footer } from './components/Footer';
import {
  rawCourses,
  appliedCreativitySegments,
  getRealSchoolIntensives,
  onDemandCourses,
} from './data/courses';
import { FilterState } from './types';

export default function App() {
  const [filters, setFilters] = useState<FilterState>({
    categoria: '',
    area: '',
    searchQuery: '',
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      categoria: '',
      area: '',
      searchQuery: '',
    });
  };

  // Cursos regulares oficiais da escola filtrados
  const filteredCourses = useMemo(() => {
    return rawCourses.filter((item) => {
      const itemCat = (item.categoria || item.carreira || '').toLowerCase().trim();
      const filterCat = (filters.categoria || '').toLowerCase().trim();

      const matchesCategoria =
        !filterCat ||
        itemCat === filterCat ||
        itemCat.replace(/[^a-z0-9]/g, '') === filterCat.replace(/[^a-z0-9]/g, '');

      const matchesArea =
        !filters.area ||
        item.area.toLowerCase().includes(filters.area.toLowerCase());

      const query = filters.searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.cursoMae.toLowerCase().includes(query) ||
        item.area.toLowerCase().includes(query) ||
        itemCat.includes(query) ||
        (item.intensivos && item.intensivos.some((i) => i.toLowerCase().includes(query))) ||
        (item.formacoesVinculadas && item.formacoesVinculadas.some((f) => f.toLowerCase().includes(query)));

      return matchesCategoria && matchesArea && matchesSearch;
    });
  }, [filters]);

  // Contagem dinâmica e precisa dos programas de acordo com o filtro ativo
  const totalProgramsCount = useMemo(() => {
    const filterCat = (filters.categoria || '').toLowerCase().trim();
    const query = filters.searchQuery.toLowerCase().trim();
    const areaFilter = filters.area.toLowerCase().trim();

    // Se filtrou por Intensivo: conta os intensivos reais da escola
    if (filterCat === 'intensivo') {
      const realIntensives = getRealSchoolIntensives();
      return realIntensives.filter((i) => {
        const matchesArea = !areaFilter || i.area.toLowerCase().includes(areaFilter);
        const matchesQuery =
          !query ||
          i.title.toLowerCase().includes(query) ||
          i.area.toLowerCase().includes(query) ||
          i.origemCursoMae.toLowerCase().includes(query);
        return matchesArea && matchesQuery;
      }).length;
    }

    // Se filtrou por OnDemand: conta os cursos de onDemandCourses
    if (filterCat === 'on-demand') {
      return onDemandCourses.filter((c) => {
        const matchesArea = !areaFilter || c.area.toLowerCase().includes(areaFilter);
        const matchesQuery =
          !query ||
          c.title.toLowerCase().includes(query) ||
          c.area.toLowerCase().includes(query);
        return matchesArea && matchesQuery;
      }).length;
    }

    // Se filtrou por Experiências de Criatividade Aplicada: conta as 20 atividades
    if (filterCat === 'experiências de criatividade aplicada' || filterCat.includes('criatividade')) {
      let actCount = 0;
      appliedCreativitySegments.forEach((segment) => {
        segment.activities.forEach((act) => {
          if (
            !query ||
            act.toLowerCase().includes(query) ||
            segment.title.toLowerCase().includes(query) ||
            segment.badgeLabel.toLowerCase().includes(query)
          ) {
            actCount++;
          }
        });
      });
      return actCount;
    }

    // Se filtrou por Pós-Graduação, Formação Técnica ou Formação Livre
    if (filterCat) {
      return filteredCourses.filter(
        (c) => (c.categoria || c.carreira || '').toLowerCase().trim() === filterCat
      ).length;
    }

    // Todas as Categorias (sem filtro de categoria):
    // Conta cursos regulares + intensivos reais + atividades de experiências criativas
    let total = filteredCourses.length;

    // Adiciona intensivos reais
    const realIntensives = getRealSchoolIntensives();
    const matchingIntensives = realIntensives.filter((i) => {
      const matchesArea = !areaFilter || i.area.toLowerCase().includes(areaFilter);
      const matchesQuery =
        !query ||
        i.title.toLowerCase().includes(query) ||
        i.area.toLowerCase().includes(query);
      return matchesArea && matchesQuery;
    });
    total += matchingIntensives.length;

    // Adiciona os cursos OnDemand oficiais
    const matchingOnDemand = onDemandCourses.filter((c) => {
      const matchesArea = !areaFilter || c.area.toLowerCase().includes(areaFilter);
      const matchesQuery =
        !query ||
        c.title.toLowerCase().includes(query) ||
        c.area.toLowerCase().includes(query);
      return matchesArea && matchesQuery;
    });
    total += matchingOnDemand.length;

    // Se não filtrou por área temática, soma as atividades de criatividade aplicada
    if (!areaFilter) {
      appliedCreativitySegments.forEach((segment) => {
        segment.activities.forEach((act) => {
          if (!query || act.toLowerCase().includes(query)) {
            total++;
          }
        });
      });
    }

    return total;
  }, [filteredCourses, filters]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-[#1A1A1A]">
      {/* 1. Header removido para incorporação perfeita em outro site */}

      {/* Hero Section */}
      <Hero />

      {/* Filter Sticky Bar */}
      <FilterBar
        filters={filters}
        onFilterChange={handleFilterChange}
        onReset={handleResetFilters}
        totalCourses={totalProgramsCount}
      />

      {/* Main Catalog */}
      <div className="flex-1">
        <CatalogSection
          courses={filteredCourses}
          selectedCategory={filters.categoria}
          selectedArea={filters.area}
          searchQuery={filters.searchQuery}
        />
      </div>

      {/* Footer - Apenas logotipo com fundo preto */}
      <Footer />
    </div>
  );
}
