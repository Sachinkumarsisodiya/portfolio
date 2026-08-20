import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Globe from "react-globe.gl";

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
  const globeEl = useRef();
  const [countries, setCountries] = useState({ features: [] });

  useEffect(() => {
    // Fetch countries borders for deep details
    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
      .catch(err => console.error("Error loading country borders:", err));
  }, []);

  useEffect(() => {
    // Auto-rotate and slightly zoomed-in position so cities are spread out and readable
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1.0;
      globeEl.current.controls().enableZoom = false;
      // Altitude 1.7 provides a good balance between seeing the whole globe and separating the cities
      globeEl.current.pointOfView({ lat: 20, lng: 77, altitude: 1.7 }); 
    }
  }, []);

  const allMarkers = [
    { lat: 28.6139, lng: 77.2090, size: 0.05, color: '#a3e635', name: 'New Delhi' },
    { lat: 51.5072, lng: -0.1276, size: 0.05, color: '#ffffff', name: 'London' },
    { lat: 25.2048, lng: 55.2708, size: 0.05, color: '#ffffff', name: 'Dubai' },
    
    // Major Indian Cities (Geographically spread out to avoid natural overlap)
    { lat: 23.0225, lng: 72.5714, size: 0.03, color: '#d1d5db', name: 'Ahmedabad' },
    { lat: 22.7196, lng: 75.8577, size: 0.03, color: '#d1d5db', name: 'Indore' },
    { lat: 19.0760, lng: 72.8777, size: 0.03, color: '#d1d5db', name: 'Mumbai' },
    { lat: 12.9716, lng: 77.5946, size: 0.03, color: '#d1d5db', name: 'Bangalore' },
    { lat: 26.9124, lng: 75.7873, size: 0.15, color: '#ec4899', name: 'Jaipur 💖' }
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
              <Globe
                ref={globeEl}
                width={380}
                height={380}
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                
                // Country borders for nations detail
                polygonsData={countries.features}
                polygonAltitude={0.01}
                polygonCapColor={() => 'rgba(200, 200, 200, 0.02)'}
                polygonSideColor={() => 'rgba(200, 200, 200, 0.02)'}
                polygonStrokeColor={() => '#333333'} // Dark grey borders

                // Use HTML Elements for absolute crispiest text rendering
                htmlElementsData={allMarkers}
                htmlElement={d => {
                  const el = document.createElement('div');
                  const isVisitor = d.name.includes('Jaipur');
                  const fontSize = isVisitor ? '13px' : '10px';
                  const dotSize = isVisitor ? '8px' : '4px';
                  const fontWeight = isVisitor ? '800' : '600';
                  const textShadow = '0 0 6px #000, 0 0 6px #000, 0 0 6px #000'; // Strong shadow for readability
                  
                  el.innerHTML = `
                    <div style="display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); pointer-events: none;">
                      <div style="color: ${d.color}; font-size: ${fontSize}; font-weight: ${fontWeight}; font-family: ui-sans-serif, system-ui, sans-serif; white-space: nowrap; text-shadow: ${textShadow}; letter-spacing: 0.5px;">${d.name}</div>
                      <div style="width: ${dotSize}; height: ${dotSize}; background: ${d.color}; border-radius: 50%; box-shadow: 0 0 10px ${d.color}; margin-top: 4px;"></div>
                    </div>
                  `;
                  return el;
                }}
                
                // Atmosphere
                atmosphereColor="#a3e635"
                atmosphereAltitude={0.15}
              />
            </div>

            {/* Render extracted ClockBadge component */}
            <ClockBadge />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
