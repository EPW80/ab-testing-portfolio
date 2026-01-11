import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../../data/caseStudies';
import { Category } from '../../types';
import CaseStudyCard from './CaseStudyCard';

type FilterOption = 'all' | Category;

const CaseStudyGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all');

  const filters: { label: string; value: FilterOption }[] = [
    { label: 'All', value: 'all' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Landing Pages', value: 'landing-page' },
    { label: 'Mobile', value: 'mobile' },
  ];

  const filteredCaseStudies =
    activeFilter === 'all'
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeFilter);

  return (
    <section id="case-studies" className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Real A/B tests with measurable results. Each case study includes detailed
            methodology, implementation, and key learnings.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeFilter === filter.value
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 hover:text-primary-600 shadow-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Case Study Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-20">
            <p className="text-secondary-600 text-lg">
              No case studies found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudyGrid;
