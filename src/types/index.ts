export type Category = 'ecommerce' | 'landing-page' | 'mobile';

export interface MetricResult {
  before: number;
  after: number;
}

export interface TimeMetricResult {
  before: string;
  after: string;
}

export interface CaseStudyResults {
  conversionRate: MetricResult;
  bounceRate: MetricResult;
  avgTimeOnPage: TimeMetricResult;
  statisticalSignificance?: number;
}

export interface Variant {
  description: string;
  image: string;
  screenshots?: string[];
}

export interface Implementation {
  variantA: Variant;
  variantB: Variant;
}

export interface TechnicalDetails {
  stack: string[];
  optimizations: string[];
  challenges?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: Category;
  thumbnail: string;
  overview: string;
  challenge: string;
  hypothesis: string;
  implementation: Implementation;
  results: CaseStudyResults;
  technicalDetails: TechnicalDetails;
  keyLearnings: string[];
  duration: string;
  sampleSize: number;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}
