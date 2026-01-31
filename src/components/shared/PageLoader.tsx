import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <p className="text-secondary-600 text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default PageLoader;
