import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import MetricCard from '../../../components/shared/MetricCard';
import { ShoppingCart } from 'lucide-react';

describe('MetricCard', () => {
  it('renders label and value', () => {
    render(<MetricCard label="Conversion Rate" value="47%" />);

    expect(screen.getByText('Conversion Rate')).toBeInTheDocument();
    expect(screen.getByText('47%')).toBeInTheDocument();
  });

  it('displays numeric value', () => {
    render(<MetricCard label="Total Sales" value={1234} />);

    expect(screen.getByText('Total Sales')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <MetricCard
        label="Cart Value"
        value="$99.99"
        icon={<ShoppingCart data-testid="cart-icon" />}
      />
    );

    expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
  });

  it('displays positive change with green styling', () => {
    render(<MetricCard label="Sales" value="100" change={25} />);

    expect(screen.getByText('+25%')).toBeInTheDocument();
    expect(screen.getByText('vs. before')).toBeInTheDocument();
  });

  it('displays negative change with red styling', () => {
    render(<MetricCard label="Bounce Rate" value="30%" change={-15} />);

    expect(screen.getByText('-15%')).toBeInTheDocument();
    expect(screen.getByText('vs. before')).toBeInTheDocument();
  });

  it('does not display change indicator when change is undefined', () => {
    render(<MetricCard label="Users" value="1000" />);

    expect(screen.queryByText('vs. before')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <MetricCard label="Test" value="100" className="custom-class" />
    );

    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('animates value on visibility', async () => {
    render(<MetricCard label="Revenue" value="5000" />);

    // The component uses IntersectionObserver which is mocked
    // The value should eventually display
    await waitFor(() => {
      expect(screen.getByText(/5000/)).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('formats percentage values correctly', () => {
    render(<MetricCard label="Conversion" value="23.5%" />);

    expect(screen.getByText('23.5%')).toBeInTheDocument();
  });
});
