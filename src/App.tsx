import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/shared/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import CaseStudyDetail from './pages/CaseStudyDetail';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function AppContent() {
  useSmoothScroll();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
