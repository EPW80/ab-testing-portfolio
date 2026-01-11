import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CaseStudy } from '../../types';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  const navigate = useNavigate();

  const categoryColors = {
    'ecommerce': 'bg-primary-100 text-primary-700',
    'landing-page': 'bg-accent-100 text-accent-700',
    'mobile': 'bg-orange-100 text-orange-700',
  };

  const categoryLabels = {
    'ecommerce': 'E-commerce',
    'landing-page': 'Landing Page',
    'mobile': 'Mobile',
  };

  // Calculate percentage improvement
  const conversionImprovement = Math.round(
    ((caseStudy.results.conversionRate.after - caseStudy.results.conversionRate.before) /
      caseStudy.results.conversionRate.before) *
      100
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => navigate(`/case-study/${caseStudy.id}`)}
      className="group bg-white rounded-xl border border-secondary-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-secondary-100 overflow-hidden">
        <img
          src={caseStudy.thumbnail}
          alt={caseStudy.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[caseStudy.category]}`}>
            {categoryLabels[caseStudy.category]}
          </span>
        </div>
        {/* Metric Badge */}
        <div className="absolute top-4 right-4 bg-success-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg">
          <TrendingUp className="w-4 h-4 mr-1" />
          +{conversionImprovement}%
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-sm text-secondary-600 mb-4">{caseStudy.client}</p>
        <p className="text-secondary-700 line-clamp-3 mb-4 leading-relaxed">
          {caseStudy.overview}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-secondary-100">
          <div className="text-sm text-secondary-600">
            <span className="font-medium">{caseStudy.sampleSize.toLocaleString()}</span> users tested
          </div>
          <div className="flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
            View Details
            <ArrowRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
