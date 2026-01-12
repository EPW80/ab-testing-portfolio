import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Mail,
  Github,
  Linkedin,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Code,
  BarChart3,
  Zap
} from 'lucide-react';
import Button from '../components/shared/Button';

const About: React.FC = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'A/B Testing & Optimization', level: 90, icon: <Target className="w-5 h-5" /> },
    { name: 'Google Analytics & Tag Manager', level: 85, icon: <BarChart3 className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 95, icon: <Zap className="w-5 h-5" /> },
    { name: 'Performance Optimization', level: 90, icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'User Research', level: 80, icon: <Users className="w-5 h-5" /> },
  ];

  const process = [
    {
      step: 1,
      title: 'Research & Analysis',
      description: 'Analyze user behavior, identify friction points, and research best practices to understand where opportunities lie.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: 2,
      title: 'Hypothesis Formation',
      description: 'Develop data-backed hypotheses about what changes will improve key metrics and why.',
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      step: 3,
      title: 'Implementation',
      description: 'Build and deploy test variants with clean code, ensuring proper tracking and minimal performance impact.',
      icon: <Code className="w-6 h-6" />,
    },
    {
      step: 4,
      title: 'Testing & Iteration',
      description: 'Run tests to statistical significance, analyze results, and iterate based on learnings.',
      icon: <Target className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-secondary-600 leading-relaxed">
              Hi! I'm a Marketing Developer specializing in conversion optimization and A/B testing.
              I combine technical expertise with data-driven insights to help e-commerce brands increase revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-6">
                Background
              </h2>
              <div className="prose prose-lg max-w-none text-secondary-700 space-y-4">
                <p>
                  With a background in Computer Science from California State University, Fullerton,
                  I've developed a unique skill set that bridges the gap between marketing and technology.
                </p>
                <p>
                  My experience spans frontend development, e-commerce optimization, and data analytics.
                  I've worked with DTC brands and e-commerce platforms to implement A/B tests that have
                  collectively improved conversion rates by an average of 35% and generated significant
                  revenue increases.
                </p>
                <p>
                  What drives me is the challenge of understanding user behavior and translating insights
                  into measurable business outcomes. Every test is an opportunity to learn something new
                  about what motivates customers to take action.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-6">
                My Testing Philosophy
              </h2>
              <div className="bg-white rounded-xl p-8 border border-secondary-200 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      Data Over Opinions
                    </h3>
                    <p className="text-secondary-700">
                      While intuition has its place, I believe in letting data guide decisions.
                      Every test is designed to validate or challenge assumptions with real user behavior.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      User-Centric Approach
                    </h3>
                    <p className="text-secondary-700">
                      Optimization isn't about tricking users—it's about removing friction and
                      creating experiences that genuinely serve their needs better.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      Statistical Rigor
                    </h3>
                    <p className="text-secondary-700">
                      I ensure tests reach statistical significance and account for external factors.
                      False positives waste time and resources—proper methodology prevents them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                      Continuous Learning
                    </h3>
                    <p className="text-secondary-700">
                      Every test—win or lose—is a learning opportunity. Failed tests often provide
                      the most valuable insights about user behavior and preferences.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-12 text-center">
                My Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-white rounded-xl border-2 border-primary-200 p-6 h-full hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
                        {item.icon}
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-secondary-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-12 text-center">
                Skills & Expertise
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white rounded-lg p-6 border border-secondary-200"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="text-primary-600 mr-3">{skill.icon}</div>
                        <span className="font-semibold text-secondary-900">{skill.name}</span>
                      </div>
                      <span className="text-sm text-secondary-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                        className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl p-8 md:p-12 text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Interested in optimizing your conversion rates and growing your business?
                Let's discuss how A/B testing can drive measurable results.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="mailto:hello@example.com"
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-all"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </div>
              <Link to="/">
                <Button variant="secondary" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
