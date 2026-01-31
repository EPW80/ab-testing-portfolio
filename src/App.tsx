import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import SkipToContent from './components/shared/SkipToContent';
import ErrorBoundary from './components/shared/ErrorBoundary';
import PageLoader from './components/shared/PageLoader';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Lazy load page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

function AppContent() {
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-study/:id" element={<CaseStudyDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
