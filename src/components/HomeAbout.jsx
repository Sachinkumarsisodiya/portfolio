import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowRight, Code, Laptop, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomeAbout() {
  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Building practical software with" 
          highlight="modern technologies."
          subtitle="About Me"
          align="left"
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Key Highlights */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-text-muted text-lg md:text-xl leading-relaxed font-sans">
              I'm a <span className="text-text-primary font-semibold">Full-Stack Python & Shopify Developer</span> based in Jaipur, India. I blend traditional software engineering with cutting-edge AI tools to craft clean, efficient, and user-centric digital products.
            </p>
            <p className="text-text-secondary text-base leading-relaxed font-sans">
              Whether architecting robust REST APIs with FastAPI, engineering custom Shopify themes & apps, or building modern React interfaces, I focus on solving real business problems with maintainable, production-ready code.
            </p>

            {/* Quick Stats / Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div className="p-4 rounded-xl bg-card/70 border border-border/80 hover:border-accent/40 transition-colors flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-background-secondary border border-border text-accent">
                  <Code size={20} />
                </div>
                <div>
                  <h4 className="text-text-primary text-sm font-bold">Core Tech Stack</h4>
                  <p className="text-text-muted text-xs mt-0.5 font-mono">Python • FastAPI • React • Shopify</p>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-card/70 border border-border/80 hover:border-accent/40 transition-colors flex items-start space-x-3">
                <div className="p-2.5 rounded-lg bg-background-secondary border border-border text-accent">
                  <Laptop size={20} />
                </div>
                <div>
                  <h4 className="text-text-primary text-sm font-bold">Current Role</h4>
                  <p className="text-text-muted text-xs mt-0.5 font-mono">Developer @ Sabai Innovations</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-accent text-[#050505] font-semibold text-sm hover:bg-accent-hover transition-colors shadow-glow"
              >
                Read full bio 
                <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <Link 
                to="/skills" 
                className="inline-flex items-center text-text-primary font-semibold text-sm hover:text-accent transition-colors group"
              >
                View tech stack 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Sachin Working Image Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 relative group flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/25 via-purple-500/20 to-blue-500/25 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              
              {/* Main Card Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-[#0a0a0a] shadow-2xl group-hover:border-accent/40 transition-all duration-500">
                
                {/* Status Badge Top Left */}
                <div className="absolute top-3 left-3 z-20 bg-[#050505]/85 backdrop-blur-md border border-border/80 px-3 py-1.5 rounded-full flex items-center space-x-2 shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-text-primary text-xs font-mono font-medium">Coding & Building 💻</span>
                </div>

                {/* AI Badge Top Right */}
                <div className="absolute top-3 right-3 z-20 bg-[#050505]/85 backdrop-blur-md border border-border/80 px-2.5 py-1.5 rounded-full flex items-center space-x-1 text-accent text-xs font-mono shadow-lg">
                  <Sparkles size={12} />
                  <span>Developer</span>
                </div>

                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src="/sachin_working.jpg" 
                    alt="Sachin Kumar Sisodiya working on laptop" 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-75 pointer-events-none"></div>
                </div>

                {/* Bottom Overlay Info Bar */}
                <div className="p-4 bg-[#0a0a0a] border-t border-border/60 flex items-center justify-between">
                  <div>
                    <h3 className="text-text-primary text-sm font-bold">Sachin Kumar Sisodiya</h3>
                    <p className="text-text-muted text-xs font-mono">Full Stack & Shopify Developer</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

