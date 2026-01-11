import React from 'react';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import { TrendingUp, Users, TestTube } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { label: 'Avg. Conversion Increase', value: '37%', icon: <TrendingUp className="w-5 h-5" /> },
    { label: 'Tests Run', value: '15+', icon: <TestTube className="w-5 h-5" /> },
    { label: 'Users Impacted', value: '24K+', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              A/B Testing & Conversion Optimization
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6 leading-tight"
          >
            Turning Clicks into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Conversions
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-secondary-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Data-driven optimization strategies that deliver measurable results.
            Explore case studies showcasing real A/B tests with proven conversion
            rate improvements.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button href="/#case-studies" size="lg">
              View Case Studies
            </Button>
            <Button href="https://github.com/epw80" variant="secondary" size="lg">
              View Portfolio
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-secondary-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center mb-2 text-primary-600">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-secondary-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
