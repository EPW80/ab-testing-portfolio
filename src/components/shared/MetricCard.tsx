import React, { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  change,
  icon,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = typeof value === 'number' ? value : parseFloat(value.toString().replace(/[^0-9.-]/g, ''));

    if (isNaN(numericValue)) {
      return;
    }

    const duration = 1500;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatValue = (val: number | string): string => {
    if (typeof value === 'string' && !value.match(/^[0-9.]+$/)) {
      return value;
    }

    const numVal = typeof val === 'number' ? val : parseFloat(val.toString());

    if (value.toString().includes('%')) {
      return `${numVal.toFixed(1)}%`;
    }

    return numVal.toFixed(1);
  };

  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-lg border border-secondary-200 p-6 shadow-sm ${className}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-secondary-600 font-medium mb-1">{label}</p>
          <p className="text-3xl font-bold text-secondary-900">
            {isVisible ? formatValue(displayValue) : formatValue(0)}
          </p>
          {change !== undefined && (
            <div className="mt-2 flex items-center">
              {isPositive && (
                <>
                  <ArrowUp className="w-4 h-4 text-success-600 mr-1" />
                  <span className="text-sm font-medium text-success-600">
                    +{Math.abs(change)}%
                  </span>
                </>
              )}
              {isNegative && (
                <>
                  <ArrowDown className="w-4 h-4 text-red-600 mr-1" />
                  <span className="text-sm font-medium text-red-600">
                    {change}%
                  </span>
                </>
              )}
              <span className="text-sm text-secondary-500 ml-1">vs. before</span>
            </div>
          )}
        </div>
        {icon && (
          <div className="text-primary-600 bg-primary-50 p-3 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;
