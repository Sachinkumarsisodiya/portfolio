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
      }, 2400); // Extended time slightly to enjoy the premium animation
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.5, ease: "easeIn" } }}
            className="flex flex-col items-center relative z-10 w-full max-w-sm px-8"
          >
            <div className="relative flex items-start justify-center">
              <span className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-text-primary to-text-muted">
                {count}
              </span>
              <span className="text-2xl md:text-4xl text-accent mt-2 md:mt-4 ml-1 font-mono">%</span>
            </div>
            
            <div className="w-full h-[2px] bg-border rounded-full mt-12 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-accent to-purple-500 transition-all duration-75 ease-linear"
                style={{ width: `${count}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-white shadow-[0_0_10px_2px_rgba(163,230,53,0.8)] transition-all duration-75 ease-linear"
                style={{ left: `calc(${count}% - 4px)`, opacity: count > 0 ? 1 : 0 }}
              />
            </div>
            
            <div className="mt-8 font-mono text-xs text-text-muted uppercase tracking-[0.2em] flex items-center gap-3">
              <span className="text-accent animate-pulse font-bold">{'//'}</span>
              <span>{currentText}</span>
            </div>
          </motion.div>
        )}

        {phase === 'name' && (
          <motion.div
            key="name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.6 } }}
            className="text-center relative"
          >
            {/* Background Glow */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-accent to-purple-500 blur-[100px] -z-10 rounded-full pointer-events-none"
            />

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4">
              <motion.span 
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-text-primary"
              >
                Sachin
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 italic pr-2 md:pr-4"
              >
                Sisodiya
              </motion.span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent mt-8 mx-auto w-3/4 max-w-xs origin-center"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-text-muted mt-6 font-mono tracking-widest uppercase text-xs md:text-sm flex items-center justify-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.8)]"></span>
              Loading Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
