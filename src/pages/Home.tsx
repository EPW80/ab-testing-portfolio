import React from 'react';
import Hero from '../components/home/Hero';
import CaseStudyGrid from '../components/case-studies/CaseStudyGrid';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CaseStudyGrid />
    </div>
  );
};

export default Home;
