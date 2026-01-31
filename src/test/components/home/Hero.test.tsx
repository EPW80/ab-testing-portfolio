import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../../../components/home/Hero';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Hero', () => {
  it('renders main heading', () => {
    renderWithRouter(<Hero />);

    expect(screen.getByText(/A\/B Testing Portfolio/i)).toBeInTheDocument();
  });

  it('renders subtitle or description', () => {
    renderWithRouter(<Hero />);

    // Check for key phrases that should be in the hero section
    const heroContent = screen.getByRole('banner') || screen.getByRole('region');
    expect(heroContent).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    renderWithRouter(<Hero />);

    // Common CTA text variations
    const ctaButton = screen.getByRole('link', { name: /view case studies|explore projects|see my work/i });
    expect(ctaButton).toBeInTheDocument();
  });

  it('has proper heading hierarchy', () => {
    renderWithRouter(<Hero />);

    const mainHeading = screen.getByRole('heading', { level: 1 });
    expect(mainHeading).toBeInTheDocument();
  });
});
