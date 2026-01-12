import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getCaseStudyById, caseStudies } from '../data/caseStudies';
import MetricsDashboard from '../components/case-studies/MetricsDashboard';
import ComparisonSlider from '../components/case-studies/ComparisonSlider';
import Button from '../components/shared/Button';
import { ArrowLeft, Clock, Users, Code, Lightbulb, CheckCircle } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? getCaseStudyById(id) : undefined;

  if (!caseStudy) {
    return <Navigate to="/" replace />;
  }

  const categoryColors: Record<string, string> = {
    'ecommerce': 'bg-primary-100 text-primary-700',
    'landing-page': 'bg-accent-100 text-accent-700',
    'mobile': 'bg-orange-100 text-orange-700',
  };

  const categoryLabels: Record<string, string> = {
    'ecommerce': 'E-commerce',
    'landing-page': 'Landing Page',
    'mobile': 'Mobile',
  };

  // Get next case study
  const currentIndex = caseStudies.findIndex(cs => cs.id === caseStudy.id);
  const nextCaseStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-secondary-50 border-b border-secondary-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            to="/"
            className="inline-flex items-center text-secondary-700 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Case Studies
          </Link>
        </div>
      </div>

      {/* Header Section */}
      <section className="pt-12 pb-8 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[caseStudy.category]}`}>
                {categoryLabels[caseStudy.category]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 mb-4">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-secondary-600 mb-6">{caseStudy.client}</p>
            <div className="flex flex-wrap gap-6 text-secondary-700">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary-600" />
                <span>{caseStudy.duration}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary-600" />
                <span>{caseStudy.sampleSize.toLocaleString()} users tested</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Overview Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-6">
            Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">The Challenge</h3>
              <p className="text-secondary-700 leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">The Hypothesis</h3>
              <p className="text-secondary-700 leading-relaxed">{caseStudy.hypothesis}</p>
            </div>
          </div>
        </motion.section>

        {/* Results Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <MetricsDashboard results={caseStudy.results} />
        </motion.section>

        {/* Before/After Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-6">
            Interactive Before vs. After
          </h2>

          {/* Interactive Comparison Slider */}
          <div className="mb-8">
            <ComparisonSlider
              beforeImage={caseStudy.implementation.variantA.image}
              afterImage={caseStudy.implementation.variantB.image}
              beforeLabel="Control (Version A)"
              afterLabel="Optimized (Version B)"
            />
            <p className="text-sm text-secondary-600 text-center mt-4">
              Drag the slider or use arrow keys to compare versions
            </p>
          </div>

          {/* Implementation Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-secondary-900 flex items-center">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                Control (Version A)
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                {caseStudy.implementation.variantA.description}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-secondary-900 flex items-center">
                <span className="inline-block w-3 h-3 bg-success-500 rounded-full mr-2"></span>
                Optimized (Version B)
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                {caseStudy.implementation.variantB.description}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Technical Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-secondary-50 rounded-xl p-8 border border-secondary-200"
        >
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-primary-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900">
              Technical Details
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technicalDetails.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white px-3 py-1 rounded-md text-sm text-secondary-700 border border-secondary-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">Key Optimizations</h3>
              <ul className="space-y-2">
                {caseStudy.technicalDetails.optimizations.map((optimization, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-success-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-700">{optimization}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Key Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center mb-6">
            <Lightbulb className="w-6 h-6 text-primary-600 mr-3" />
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900">
              Key Learnings
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {caseStudy.keyLearnings.map((learning, index) => (
              <div
                key={index}
                className="bg-primary-50 border border-primary-200 rounded-lg p-4 flex items-start"
              >
                <span className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </span>
                <p className="text-secondary-700 leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Next Case Study CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Explore More Case Studies
          </h2>
          <p className="text-lg mb-8 opacity-90">
            See how A/B testing and optimization drive measurable results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`/case-study/${nextCaseStudy.id}`}
              variant="secondary"
              size="lg"
            >
              Next: {nextCaseStudy.title}
            </Button>
            <Button href="/" variant="ghost" size="lg" className="bg-white/10 hover:bg-white/20 text-white">
              View All Case Studies
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
