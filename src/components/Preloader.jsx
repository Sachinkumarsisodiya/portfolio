import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
  "Booting system...",
  "Fetching dependencies...",
  "Compiling assets...",
  "Initializing AI modules...",
  "System ready."
];

export function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // 'counting' | 'name'

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = 'hidden';
    
    let start = 0;
    const duration = 1200; // 1.2 seconds of counting
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setCount(100);
        clearInterval(timer);
        setTimeout(() => setPhase('name'), 300);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    };
  }, []);

  useEffect(() => {
    if (phase === 'name') {
      const timer = setTimeout(() => {
        onComplete();
      }, 1800); // show name for 1.8 seconds before triggering complete
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  const currentTextIndex = Math.min(Math.floor(count / 20), 4);
  const currentText = loadingTexts[currentTextIndex];

  return (
    <motion.div 
      exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050505]"
    >
      <AnimatePresence mode="wait">
        {phase === 'counting' && (
          <motion.div
            key="counter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.4 } }}
            className="flex flex-col items-center"
          >
            <span className="text-6xl md:text-8xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">
              {count}%
            </span>
            <div className="w-48 h-1 bg-border rounded-full mt-6 overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-75 ease-linear"
                style={{ width: `${count}%` }}
              />
            </div>
            <div className="mt-8 font-mono text-sm text-text-muted flex items-center gap-3">
              <span className="text-accent animate-pulse">{'>_'}</span>
              <span>{currentText}</span>
            </div>
          </motion.div>
        )}

        {phase === 'name' && (
          <motion.div
            key="name"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              <span className="text-text-primary">Sachin</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 italic">
                Sisodiya
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-text-muted mt-4 font-mono tracking-widest uppercase text-sm"
            >
              Loading Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
