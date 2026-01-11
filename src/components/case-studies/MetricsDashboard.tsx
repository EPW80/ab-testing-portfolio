import React from 'react';
import { CaseStudyResults } from '../../types';
import MetricCard from '../shared/MetricCard';
import { TrendingUp, TrendingDown, Clock, Award } from 'lucide-react';

interface MetricsDashboardProps {
  results: CaseStudyResults;
}

const MetricsDashboard: React.FC<MetricsDashboardProps> = ({ results }) => {
  const conversionChange = Math.round(
    ((results.conversionRate.after - results.conversionRate.before) /
      results.conversionRate.before) *
      100
  );

  const bounceRateChange = Math.round(
    ((results.bounceRate.after - results.bounceRate.before) /
      results.bounceRate.before) *
      100
  );

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary-900 mb-2">
          Results & Impact
        </h2>
        <p className="text-secondary-600">
          Key metrics showing the impact of optimization efforts
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          label="Conversion Rate"
          value={`${results.conversionRate.after}%`}
          change={conversionChange}
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <MetricCard
          label="Bounce Rate"
          value={`${results.bounceRate.after}%`}
          change={bounceRateChange}
          icon={<TrendingDown className="w-6 h-6" />}
        />
        <MetricCard
          label="Avg. Time on Page"
          value={results.avgTimeOnPage.after}
          icon={<Clock className="w-6 h-6" />}
        />
        {results.statisticalSignificance && (
          <MetricCard
            label="Statistical Significance"
            value={`${results.statisticalSignificance}%`}
            icon={<Award className="w-6 h-6" />}
          />
        )}
      </div>

      {/* Before/After Comparison */}
      <div className="bg-secondary-50 rounded-xl p-6 border border-secondary-200">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">
          Before vs. After Comparison
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-secondary-600 mb-1">Conversion Rate</p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">
                  Before: {results.conversionRate.before}%
                </div>
                <div className="bg-success-100 text-success-700 px-3 py-1 rounded-md text-sm font-medium">
                  After: {results.conversionRate.after}%
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-success-600">
                +{conversionChange}%
              </span>
              <p className="text-xs text-secondary-600">improvement</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-secondary-600 mb-1">Bounce Rate</p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">
                  Before: {results.bounceRate.before}%
                </div>
                <div className="bg-success-100 text-success-700 px-3 py-1 rounded-md text-sm font-medium">
                  After: {results.bounceRate.after}%
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-success-600">
                {bounceRateChange}%
              </span>
              <p className="text-xs text-secondary-600">reduction</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-secondary-600 mb-1">Avg. Time on Page</p>
              <div className="flex items-center space-x-4">
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm font-medium">
                  Before: {results.avgTimeOnPage.before}
                </div>
                <div className="bg-success-100 text-success-700 px-3 py-1 rounded-md text-sm font-medium">
                  After: {results.avgTimeOnPage.after}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDashboard;
