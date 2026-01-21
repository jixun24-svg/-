
export enum SectionId {
  Home = 'home',
  Summary = 'summary',
  Market = 'market',
  Products = 'products',
  Finance = 'finance',
  Team = 'team'
}

export interface Founder {
  name: string;
  role: string;
  description: string;
  image: string;
  achievements: string[];
}

export interface FinancialMetric {
  year: string;
  conservative: number;
  base: number;
  optimistic: number;
}
