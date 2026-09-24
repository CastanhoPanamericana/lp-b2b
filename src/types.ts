export interface CourseData {
  id?: string;
  area: string;
  categoria: string;
  carreira?: string; // backwards compatibility alias
  cursoMae: string;
  formacoesVinculadas: string[];
  intensivos: string[];
}

export type CategoryType =
  | 'pós-graduação'
  | 'formação técnica'
  | 'formação livre'
  | 'intensivo'
  | 'on-demand'
  | 'experiências de criatividade aplicada';

// Backward compatibility alias
export type CareerType = CategoryType;

export interface FilterState {
  categoria: string;
  carreira?: string;
  area: string;
  searchQuery: string;
}

export interface AppliedCreativityActivity {
  id: string;
  title: string;
  type: 'masterclass' | 'workshop';
}

export interface AppliedCreativitySegment {
  type: 'masterclass' | 'workshop';
  title: string;
  badgeLabel: string;
  formatDescription: string;
  detailedDescription: string;
  activities: string[];
}
