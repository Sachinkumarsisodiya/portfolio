import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AskSachin } from './components/AskSachin';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Preloader } from './components/Preloader';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetail } from './pages/ProjectDetail';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';

function AnimatedRoutes() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(() => {
    // Check if user has already visited in this session
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited;
  });

  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem('hasVisited', 'true');
  };

  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={handlePreloaderComplete} />
          ) : (
            <motion.div 
              key="main-app"
              className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans transition-colors duration-300 relative flex flex-col"
            >
              <Navbar />
              <AskSachin />
              <FloatingWhatsApp />
              
              <main className="flex-grow flex flex-col z-10">
                <AnimatedRoutes />
              </main>
              
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  );
}

export default App;
