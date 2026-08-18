import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerAI = () => {
    window.dispatchEvent(new CustomEvent('open-ai-chat'));
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Experience', href: '/experience' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-background/80 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-border/50 group-hover:border-accent transition-all duration-300 shadow-sm">
              <img src="/avatar.jpg" alt="Sachin" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="text-lg font-mono font-bold tracking-tight text-text-primary transition-colors duration-300 group-hover:text-white">
              <span className="text-accent">&lt;</span>sachinkumarsisodiya<span className="text-accent">/&gt;</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <ul className="flex items-center space-x-1 mr-4 bg-[#0a0a0a] rounded-full p-1 border border-border">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <li key={link.name} className="relative">
                    <Link 
                      to={link.href} 
                      className={`relative z-10 block px-4 py-1.5 text-xs font-mono transition-colors duration-300 ${isActive ? 'text-background' : 'text-text-muted hover:text-text-primary'}`}
                    >
                      {link.name}
                    </Link>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-accent rounded-full -z-0"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center space-x-3">
              <button 
                onClick={triggerAI}
                className="flex items-center text-xs font-mono px-4 py-2 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/30 transition-all bg-[#0a0a0a]"
              >
                <Terminal size={14} className="mr-2" />
                Ask AI
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button 
              onClick={triggerAI}
              className="text-text-secondary hover:text-accent transition-colors"
            >
              <Terminal size={20} />
            </button>
            <button 
              className="text-text-primary p-1"
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
          className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-border shadow-2xl"
        >
          <ul className="flex flex-col py-4 px-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className={`block px-4 py-3 rounded-lg text-sm font-mono transition-colors ${isActive ? 'bg-accent/10 text-accent' : 'text-text-secondary hover:bg-border/50 hover:text-text-primary'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
