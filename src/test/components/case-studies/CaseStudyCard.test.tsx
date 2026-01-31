import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CaseStudyCard from '../../../components/case-studies/CaseStudyCard';

const mockCaseStudy = {
  id: '1',
  title: 'E-commerce Product Page Optimization',
  category: 'E-commerce',
  client: 'FashionCo',
  description: 'Optimized product page to increase conversions',
  image: 'product-page.jpg',
  metrics: {
    conversionRate: '+47%',
    revenue: '+$125K',
    timeOnPage: '+2.3min',
  },
  problem: 'Low conversion rate',
  hypothesis: 'Add trust signals',
  solution: 'Added reviews and badges',
  results: 'Conversion increased 47%',
  beforeImage: 'before.jpg',
  afterImage: 'after.jpg',
  implementation: 'React and TypeScript',
  learnings: 'Trust signals matter',
  tags: ['A/B Testing', 'CRO', 'E-commerce'],
  duration: '2 weeks',
  date: '2024-01-01',
};

// Wrapper component for router context
const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('CaseStudyCard', () => {
  it('renders case study title', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    expect(screen.getByText('E-commerce Product Page Optimization')).toBeInTheDocument();
  });

  it('renders category', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    expect(screen.getByText('E-commerce')).toBeInTheDocument();
  });

  it('renders description', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    expect(screen.getByText('Optimized product page to increase conversions')).toBeInTheDocument();
  });

  it('renders primary metric', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    expect(screen.getByText('+47%')).toBeInTheDocument();
  });

  it('renders case study image', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'product-page.jpg');
    expect(image).toHaveAttribute('alt', 'E-commerce Product Page Optimization');
  });

  it('renders link to case study detail page', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    const link = screen.getByRole('link', { name: /view case study/i });
    expect(link).toHaveAttribute('href', '/case-study/1');
  });

  it('displays tags', () => {
    renderWithRouter(<CaseStudyCard caseStudy={mockCaseStudy} />);

    expect(screen.getByText('A/B Testing')).toBeInTheDocument();
    expect(screen.getByText('CRO')).toBeInTheDocument();
  });
});
