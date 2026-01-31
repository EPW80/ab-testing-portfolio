import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Button from '../components/shared/Button';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFound: React.FC = () => {
  useDocumentTitle('Page Not Found');

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg text-center"
      >
        <div className="mb-8">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-100 mb-6"
          >
            <Search className="w-12 h-12 text-primary-600" />
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-secondary-900 mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading font-semibold text-secondary-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-secondary-600 text-lg mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/"
            variant="primary"
            size="lg"
            icon={<Home className="w-5 h-5" />}
          >
            Back to Home
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="secondary"
            size="lg"
            icon={<ArrowLeft className="w-5 h-5" />}
          >
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
