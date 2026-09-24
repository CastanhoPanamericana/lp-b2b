import React, { useMemo } from 'react';
import { CourseData } from '../types';
import { CourseCard } from './CourseCard';
import {
  categoryOrdering,
  getCategoryDisplayName,
  getCategoryDescription,
  getRealSchoolIntensives,
  allAreas,
  onDemandCourses,
} from '../data/courses';
import { AppliedCreativitySection } from './AppliedCreativitySection';

interface CatalogSectionProps {
  courses: CourseData[];
  selectedCategory?: string;
  selectedArea?: string;
  searchQuery?: string;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  courses,
  selectedCategory = '',
  selectedArea = '',
  searchQuery = '',
}) => {
  const query = searchQuery.toLowerCase().trim();
  const areaFilter = selectedArea.toLowerCase().trim();

  // Normalize category check
  const isCategorySelected = (catKey: string) => {
    if (!selectedCategory) return true;
    const normSelected = selectedCategory.toLowerCase().trim();
    const normKey = catKey.toLowerCase().trim();
    return (
      normSelected === normKey ||
      normSelected.replace(/[^a-z0-9]/g, '') === normKey.replace(/[^a-z0-9]/g, '')
    );
  };

  // Group regular courses by categoria, then by area
  const groupedByCategory = useMemo(() => {
    const grouped: Record<string, Record<string, CourseData[]>> = {};

    categoryOrdering.forEach((c) => {
      grouped[c] = {};
    });

    courses.forEach((item) => {
      const c = (item.categoria || item.carreira || '').toLowerCase().trim();
      const a = item.area;
      if (!grouped[c]) {
        grouped[c] = {};
      }
      if (!grouped[c][a]) {
        grouped[c][a] = [];
      }
      grouped[c][a].push(item);
    });

    return grouped;
  }, [courses]);

  // Real intensives extracted directly from school's real courses
  const realIntensivesByArea = useMemo(() => {
    const allIntensives = getRealSchoolIntensives();
    const grouped: Record<string, typeof allIntensives> = {};

    allAreas.forEach((a) => {
      grouped[a] = [];
    });

    allIntensives.forEach((item) => {
      if (areaFilter && !item.area.toLowerCase().includes(areaFilter)) {
        return;
      }
      if (
        query &&
        !item.title.toLowerCase().includes(query) &&
        !item.area.toLowerCase().includes(query) &&
        !item.origemCursoMae.toLowerCase().includes(query) &&
        !'intensivo'.includes(query)
      ) {
        return;
      }

      if (!grouped[item.area]) {
        grouped[item.area] = [];
      }
      grouped[item.area].push(item);
    });

    return grouped;
  }, [areaFilter, query]);

  // Exact OnDemand courses from user specification
  const onDemandCoursesByArea = useMemo(() => {
    const grouped: Record<string, typeof onDemandCourses> = {};

    onDemandCourses.forEach((c) => {
      if (areaFilter && !c.area.toLowerCase().includes(areaFilter)) {
        return;
      }
      if (
        query &&
        !c.title.toLowerCase().includes(query) &&
        !c.area.toLowerCase().includes(query) &&
        !'ondemand on-demand'.includes(query)
      ) {
        return;
      }

      if (!grouped[c.area]) {
        grouped[c.area] = [];
      }
      grouped[c.area].push(c);
    });

    return grouped;
  }, [areaFilter, query]);

  // Check counts to determine if empty
  const hasRegularCourses = courses.length > 0;
  const hasIntensives = Object.keys(realIntensivesByArea).some(
    (key) => realIntensivesByArea[key].length > 0
  );
  const hasOnDemand = Object.keys(onDemandCoursesByArea).some(
    (key) => onDemandCoursesByArea[key].length > 0
  );
  const shouldShowAppliedCreativity = isCategorySelected(
    'experiências de criatividade aplicada'
  );

  const hasAnyContent =
    hasRegularCourses ||
    hasIntensives ||
    hasOnDemand ||
    shouldShowAppliedCreativity;

  if (!hasAnyContent) {
    return (
      <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-12 max-w-lg mx-auto shadow-sm">
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-2">
            Nenhum programa encontrado
          </h3>
          <p className="text-sm text-[#64748B]">
            Tente ajustar os filtros de categoria, área temática ou o termo de busca.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main id="catalogo" className="max-w-[1240px] mx-auto my-8 mb-20 px-4">
      {categoryOrdering.map((categoryKey) => {
        // If user filtered by a specific category and this isn't it, skip
        if (!isCategorySelected(categoryKey)) {
          return null;
        }

        // 1. Experiências de Criatividade Aplicada (Categoria com 20 atividades fictícias nos 2 cards)
        if (categoryKey === 'experiências de criatividade aplicada') {
          return (
            <AppliedCreativitySection
              key={categoryKey}
              searchQuery={searchQuery}
            />
          );
        }

        // 2. Intensivo (Módulos reais de curta duração de cada curso da escola)
        if (categoryKey === 'intensivo') {
          const areasWithIntensives = Object.keys(realIntensivesByArea)
            .filter((area) => realIntensivesByArea[area].length > 0)
            .sort((a, b) => a.localeCompare(b, 'pt-BR'));
          if (areasWithIntensives.length === 0) return null;

          return (
            <div key={categoryKey} id="categoria-intensivo" className="mb-14">
              <div className="mb-6 pt-2">
                <div
                  className="w-11 h-[5px] rounded-xs mb-2.5"
                  style={{ backgroundColor: '#D97706' }}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] uppercase tracking-tight">
                    Intensivo
                  </h2>
                  <span className="text-[0.72rem] font-extrabold text-[#D97706] bg-[#FEF3C7] border border-[#FDE68A] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    MÓDULOS DE CURTA DURAÇÃO • OPÇÕES B2B
                  </span>
                </div>
                <p className="text-sm text-[#64748B] mt-2 max-w-3xl">
                  Cursos intensivos e módulos avulsos de curta duração (12h a 36h) das matrizes da ESPM e Panamericana, ideais para capacitações ágeis.
                </p>
              </div>

              {areasWithIntensives.map((areaKey) => {
                const modules = realIntensivesByArea[areaKey];
                return (
                  <div
                    key={areaKey}
                    className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 mb-6 shadow-xs"
                  >
                    <h3 className="relative text-lg sm:text-xl font-black text-[#0F172A] uppercase tracking-tight mb-5 pb-3 border-b border-[#E2E8F0] before:content-[''] before:block before:w-8 before:h-[3px] before:bg-[#C8102E] before:rounded-xs before:mb-2">
                      {areaKey}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {modules.map((mod, idx) => (
                        <CourseCard
                          key={idx}
                          title={mod.title}
                          badgeType="intensivo"
                          badgeLabel="INTENSIVO"
                          areaLabel={mod.area}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        // 3. OnDemand (Cursos especificados exatamente pelo usuário)
        if (categoryKey === 'on-demand') {
          const areasWithOnDemand = Object.keys(onDemandCoursesByArea)
            .filter((area) => onDemandCoursesByArea[area].length > 0)
            .sort((a, b) => a.localeCompare(b, 'pt-BR'));
          if (areasWithOnDemand.length === 0) return null;

          return (
            <div key={categoryKey} id="categoria-ondemand" className="mb-14">
              <div className="mb-6 pt-2">
                <div
                  className="w-11 h-[5px] rounded-xs mb-2.5"
                  style={{ backgroundColor: '#84CC16' }}
                />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] uppercase tracking-tight">
                    OnDemand
                  </h2>
                  <span className="text-[0.72rem] font-extrabold text-[#4D7C0F] bg-[#ECFCCB] border border-[#D9F99D] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    FORMATO SOB DEMANDA • IN-COMPANY
                  </span>
                </div>
                <p className="text-sm text-[#64748B] mt-2 max-w-3xl">
                  Cursos OnDemand da ESPM e Panamericana disponíveis para contratação corporativa imediata, no ritmo e tempo da sua equipe.
                </p>
              </div>

              {areasWithOnDemand.map((areaKey) => {
                const areaCourses = onDemandCoursesByArea[areaKey];
                return (
                  <div
                    key={areaKey}
                    className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 mb-6 shadow-xs"
                  >
                    <h3 className="relative text-lg sm:text-xl font-black text-[#0F172A] uppercase tracking-tight mb-5 pb-3 border-b border-[#E2E8F0] before:content-[''] before:block before:w-8 before:h-[3px] before:bg-[#C8102E] before:rounded-xs before:mb-2">
                      {areaKey}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {areaCourses.map((c, cIdx) => (
                        <CourseCard
                          key={cIdx}
                          title={c.title}
                          badgeType="ondemand"
                          badgeLabel="ONDEMAND"
                          areaLabel={c.area}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }

        // 4. Categorias Regulares (Pós-Graduação, Formação Técnica, Formação Livre)
        const areasObject = groupedByCategory[categoryKey];
        if (!areasObject || Object.keys(areasObject).length === 0) return null;

        const getBadgeType = (
          catKey: string
        ): 'pos' | 'tecnica' | 'formacao' => {
          switch (catKey) {
            case 'pós-graduação':
              return 'pos';
            case 'formação técnica':
              return 'tecnica';
            default:
              return 'formacao';
          }
        };

        const badgeType = getBadgeType(categoryKey);

        const getAccentColor = (key: string) => {
          switch (key) {
            case 'pós-graduação':
              return '#BD00FF';
            case 'formação técnica':
              return '#2563EB';
            case 'formação livre':
              return '#3B82F6';
            default:
              return '#C8102E';
          }
        };

        const displayName = getCategoryDisplayName(categoryKey);

        return (
          <div
            key={categoryKey}
            id={`categoria-${categoryKey.replace(/[^a-z0-9]/gi, '-')}`}
            className="mb-14"
          >
            {/* Category Header */}
            <div className="mb-6 pt-2">
              <div
                className="w-11 h-[5px] rounded-xs mb-2.5"
                style={{ backgroundColor: getAccentColor(categoryKey) }}
              />
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] uppercase tracking-tight">
                  {displayName}
                </h2>
                <span className="text-[0.72rem] font-extrabold text-[#64748B] bg-white border border-[#E2E8F0] px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  OPÇÕES B2B
                </span>
              </div>
              {getCategoryDescription(categoryKey) && (
                <p className="text-sm text-[#64748B] mt-2 max-w-3xl">
                  {getCategoryDescription(categoryKey)}
                </p>
              )}
            </div>

            {/* Areas Sections */}
            {Object.keys(areasObject)
              .sort((a, b) => a.localeCompare(b, 'pt-BR'))
              .map((areaKey) => {
              const areaCourses = areasObject[areaKey];

              return (
                <div
                  key={areaKey}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 mb-6 shadow-xs"
                >
                  {/* Area Title */}
                  <h3 className="relative text-lg sm:text-xl font-black text-[#0F172A] uppercase tracking-tight mb-5 pb-3 border-b border-[#E2E8F0] before:content-[''] before:block before:w-8 before:h-[3px] before:bg-[#C8102E] before:rounded-xs before:mb-2">
                    {areaKey}
                  </h3>

                  {areaCourses.map((course, cIdx) => (
                    <div key={cIdx} className="mb-8 last:mb-0">
                      {/* Parent Course Box */}
                      <div className="mb-4">
                        <CourseCard
                          title={course.cursoMae}
                          badgeType={badgeType}
                          badgeLabel={displayName}
                          areaLabel={course.area}
                          isParent={true}
                        />
                      </div>

                      {/* Disclaimers Box for Pós-Graduação */}
                      {(course.categoria === 'pós-graduação' ||
                        course.carreira === 'pós-graduação') && (
                        <div className="bg-[#F8FAFC] border-l-4 border-[#8A2BE2] px-5 py-4 my-4 rounded-r-md text-xs text-[#334155] leading-relaxed">
                          <ul className="space-y-1.5 list-none m-0 p-0">
                            <li className="relative pl-5">
                              <span className="absolute left-0 text-[#8A2BE2] font-bold">
                                →
                              </span>
                              Módulos do curso também podem ser cursados de forma
                              avulsa. Os créditos obtidos em módulos avulsos
                              podem ser aproveitados no curso completo.
                            </li>
                            <li className="relative pl-5">
                              <span className="absolute left-0 text-[#8A2BE2] font-bold">
                                →
                              </span>
                              Também é possível concluir o curso completo por
                              meio da realização dos módulos avulsos. Caso todos
                              os módulos sejam concluídos dentro do período de
                              até 5 anos, o estudante poderá realizar o Projeto
                              Integrativo Multidisciplinar (PIM) e obter o
                              certificado de pós-graduação.
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Formações Vinculadas */}
                      {course.formacoesVinculadas &&
                        course.formacoesVinculadas.length > 0 && (
                          <div className="mb-6">
                            <h5 className="my-3 text-xs font-bold text-[#475569] uppercase tracking-wider">
                              FORMAÇÕES VINCULADAS:
                            </h5>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                              {course.formacoesVinculadas.map(
                                (formacao, fIdx) => (
                                  <CourseCard
                                    key={fIdx}
                                    title={formacao}
                                    badgeType="formacao"
                                    badgeLabel="FORMAÇÃO"
                                    areaLabel={course.area}
                                  />
                                )
                              )}
                            </div>
                          </div>
                        )}

                      {/* Módulos / Intensivos Vinculados */}
                      {course.intensivos && course.intensivos.length > 0 && (
                        <div>
                          <h5 className="my-3 text-xs font-bold text-[#475569] uppercase tracking-wider">
                            MÓDULOS / INTENSIVOS VINCULADOS:
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {course.intensivos.map((mod, mIdx) => (
                              <CourseCard
                                key={mIdx}
                                title={mod}
                                badgeType="intensivo"
                                badgeLabel="INTENSIVO"
                                areaLabel={course.area}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        );
      })}
    </main>
  );
};
