import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  const baseClasses = 'bg-white rounded-xl border border-secondary-200 p-6 transition-all duration-300';
  const hoverClasses = hover
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';
  const shadowClasses = 'shadow-sm';

  const combinedClasses = `${baseClasses} ${shadowClasses} ${hoverClasses} ${className}`;

  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
