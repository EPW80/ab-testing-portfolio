import React from 'react';
import Hero from '../components/home/Hero';
import CaseStudyGrid from '../components/case-studies/CaseStudyGrid';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home: React.FC = () => {
  useDocumentTitle('A/B Testing & CRO Portfolio');

  return (
    <div className="min-h-screen">
      <Hero />
      <CaseStudyGrid />
    </div>
  );
};

export default Home;
