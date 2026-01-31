import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComparisonSlider from '../../../components/case-studies/ComparisonSlider';

describe('ComparisonSlider', () => {
  const defaultProps = {
    beforeImage: 'before.jpg',
    afterImage: 'after.jpg',
  };

  it('renders before and after images', () => {
    render(<ComparisonSlider {...defaultProps} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'after.jpg');
    expect(images[1]).toHaveAttribute('src', 'before.jpg');
  });

  it('displays default labels', () => {
    render(<ComparisonSlider {...defaultProps} />);

    expect(screen.getByText('Before')).toBeInTheDocument();
    expect(screen.getByText('After')).toBeInTheDocument();
  });

  it('displays custom labels', () => {
    render(
      <ComparisonSlider
        {...defaultProps}
        beforeLabel="Original"
        afterLabel="Optimized"
      />
    );

    expect(screen.getByText('Original')).toBeInTheDocument();
    expect(screen.getByText('Optimized')).toBeInTheDocument();
  });

  it('has slider role for accessibility', () => {
    render(<ComparisonSlider {...defaultProps} />);

    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
  });

  it('responds to keyboard navigation', async () => {
    const user = userEvent.setup();
    render(<ComparisonSlider {...defaultProps} />);

    const slider = screen.getByRole('slider');
    slider.focus();

    const initialValue = slider.getAttribute('aria-valuenow');

    await user.keyboard('{ArrowRight}');
    const newValue = slider.getAttribute('aria-valuenow');

    expect(Number(newValue)).toBeGreaterThan(Number(initialValue));
  });

  it('is focusable and keyboard accessible', () => {
    render(<ComparisonSlider {...defaultProps} />);

    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('tabIndex', '0');
  });

  it('displays keyboard instructions', () => {
    render(<ComparisonSlider {...defaultProps} />);

    expect(screen.getByText(/use arrow keys or drag to compare/i)).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ComparisonSlider {...defaultProps} className="custom-slider" />
    );

    const slider = container.querySelector('.custom-slider');
    expect(slider).toBeInTheDocument();
  });

  it('prevents image dragging', () => {
    render(<ComparisonSlider {...defaultProps} />);

    const images = screen.getAllByRole('img');
    images.forEach(img => {
      expect(img).toHaveAttribute('draggable', 'false');
    });
  });
});
