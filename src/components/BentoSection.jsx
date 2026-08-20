import { useEffect, useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";

const LazyGlobe = lazy(() => import("./GlobeWidget"));

// Extract Clock into a separate component so it doesn't re-render the whole BentoSection every second
function ClockBadge() {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute bottom-8 right-8 bg-[#050505]/80 backdrop-blur-md border border-border rounded-full px-4 py-2 flex items-center z-10 shadow-lg">
      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2"></div>
      <span className="text-text-primary font-mono text-sm font-medium">{time}</span>
    </div>
  );
}

export function BentoSection() {

  const allMarkers = [
    { lat: 28.6139, lng: 77.2090, size: 0.05, color: '#a3e635', name: 'New Delhi' },
    { lat: 51.5072, lng: -0.1276, size: 0.05, color: '#ffffff', name: 'London' },
    { lat: 25.2048, lng: 55.2708, size: 0.05, color: '#ffffff', name: 'Dubai' },
    
    // Major Indian Cities (Geographically spread out to avoid natural overlap)
    { lat: 23.0225, lng: 72.5714, size: 0.03, color: '#d1d5db', name: 'Ahmedabad' },
    { lat: 22.7196, lng: 75.8577, size: 0.03, color: '#d1d5db', name: 'Indore' },
    { lat: 19.0760, lng: 72.8777, size: 0.03, color: '#d1d5db', name: 'Mumbai' },
    { lat: 12.9716, lng: 77.5946, size: 0.03, color: '#d1d5db', name: 'Bangalore' },
    { lat: 26.9124, lng: 75.7873, size: 0.15, color: '#ec4899', name: 'Jaipur' }
  ];

  return (
    <section className="py-20 relative overflow-hidden border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="mb-10">
          <p className="text-text-muted text-sm font-bold tracking-widest uppercase mb-2">Know About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary tracking-tight">
            More than just <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">a developer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Bento Card: Avatar & Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A] border border-border rounded-[2rem] p-8 relative flex flex-col items-center text-center overflow-hidden group shadow-subtle hover:border-border/80 transition-colors"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-500"></div>

            <div className="w-36 h-36 mb-6 relative z-10 group-hover:scale-105 transition-transform duration-500 rounded-full flex items-center justify-center">
              {/* Shining/Pulsing Glow Effect (Stationary breathing light) */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 blur-[15px] animate-pulse opacity-80"></div>
              
              {/* Intense core glow just around the edges */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6),0_0_20px_rgba(236,72,153,0.6)] animate-pulse"></div>
              
              {/* The Image */}
              <img src="/favicon.jpg" alt="Developer Avatar" className="relative z-20 w-full h-full object-cover rounded-full" />
            </div>

            <h3 className="text-text-muted text-xs font-bold tracking-widest uppercase mb-2 relative z-10">Let's Build Together</h3>
            <p className="text-2xl font-bold text-text-primary mb-2 relative z-10">Clear communication, fast iterations</p>
            <p className="text-text-secondary text-sm mb-10 relative z-10">Based in India • Open for roles & freelance</p>

            <div className="w-full bg-[#050505] border border-border rounded-xl p-4 flex flex-col items-start text-left relative z-10 mt-auto hover:border-accent/30 transition-colors">
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 bg-accent rounded-sm mr-2"></div>
                <span className="text-text-primary font-bold text-sm">Zero Hand-Holding</span>
              </div>
              <p className="text-text-muted text-xs">I own the problem end to end</p>
            </div>
          </motion.div>

          {/* Right Bento Card: Globe & Timezone */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0A0A0A] border border-border rounded-[2rem] p-8 relative overflow-hidden flex flex-col group min-h-[480px] md:min-h-[400px] shadow-subtle hover:border-border/80 transition-colors"
          >
            {/* Glowing inner shadow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(255,255,255,0.02)] pointer-events-none rounded-[2rem]"></div>

            <div className="relative z-10 mb-8 md:mb-4 text-center">
              <h3 className="text-text-muted text-xs font-bold tracking-widest uppercase mb-2">Flexible with Timezones</h3>
              <p className="text-2xl font-bold text-text-primary mb-2">
                Based in India, available <span className="font-serif italic text-accent">globally</span>
              </p>
            </div>

            {/* Realistic React Globe Container (Perfectly Centered & Sized) */}
            <div className="absolute top-[60%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8 opacity-90 group-hover:opacity-100 transition-opacity duration-500 cursor-grab active:cursor-grabbing flex justify-center items-center">
              <Suspense fallback={<div className="w-12 h-12 rounded-full border-2 border-[#1a1a1a] border-t-accent animate-spin"></div>}>
                <LazyGlobe allMarkers={allMarkers} />
              </Suspense>
            </div>

            {/* Render extracted ClockBadge component */}
            <ClockBadge />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
