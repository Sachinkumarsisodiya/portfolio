import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className={`mx-auto max-w-5xl pointer-events-auto transition-all duration-500 rounded-full ${isScrolled ? 'bg-white/70 dark:bg-gray-950/70 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-soft dark:shadow-soft-dark py-3 px-6' : 'bg-transparent py-3 px-2'}`}>
        <div className="flex justify-between items-center">
          <a href="#" onClick={() => setActiveSection('home')} className="text-xl font-bold tracking-tight text-gray-900 dark:text-white shrink-0 ml-2">
            Sachin<span className="text-primary-600">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1 mr-4">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  <a 
                    href={link.href} 
                    onClick={() => setActiveSection(link.id)}
                    className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-primary-700 dark:text-primary-300' : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}`}
                  >
                    {link.name}
                  </a>
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary-50 dark:bg-primary-900/30 rounded-full -z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-3 border-l border-gray-200 dark:border-gray-800 pl-4 shrink-0">
              <button 
                onClick={toggleTheme} 
                className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <Button as="a" href="/resume.pdf" target="_blank" variant="primary" size="sm" className="h-9 px-4">
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3 shrink-0">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="text-gray-900 dark:text-white p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl p-4 shadow-xl pointer-events-auto"
        >
          <ul className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === link.id ? 'bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900'}`}
                  onClick={() => {
                    setActiveSection(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
              <Button as="a" href="/resume.pdf" target="_blank" variant="primary" className="w-full">
                Download Resume
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
