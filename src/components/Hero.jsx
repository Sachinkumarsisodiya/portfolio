import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, MapPin, Mail, Eye } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function Hero() {
  const [greeting, setGreeting] = useState('Welcome');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) setGreeting("Good morning");
    else if (hour >= 12 && hour < 17) setGreeting("Good afternoon");
    else if (hour >= 17 && hour < 22) setGreeting("Good evening");
    else setGreeting("Good night");
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden border-b border-border">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-[#101010] border border-[#242424] text-text-primary text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span>Open to Work</span>
              </span>
              <span className="inline-flex items-center text-text-muted text-xs font-mono">
                <MapPin size={12} className="mr-1" />
                Jaipur, Rajasthan, India
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="text-accent font-mono text-sm mb-3">
              {greeting}
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold text-text-primary mb-4 leading-[1.1] tracking-tight"
            >
              Hi, I'm Sachin
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl text-text-secondary font-semibold mb-6 group"
            >
              Full Stack Python & <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500">Shopify Developer.</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-text-muted mb-10 leading-relaxed max-w-lg font-sans"
            >
              I build modern web applications, REST APIs, Shopify experiences, and AI-assisted digital products with a focus on clean code, responsive interfaces, and real-world usability.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-accent text-[#050505] rounded-md hover:bg-accent-hover transition-colors shadow-glow hover:shadow-glow-hover">
                View Projects 
                <ArrowRight className="ml-2" size={16} />
              </Link>
              
              <a href="/Sachin_Sisodiya_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-card text-text-primary border border-border rounded-md hover:bg-border/50 hover:text-white transition-colors">
                <Eye className="mr-2" size={16} />
                View Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-5 mt-10">
              <a href="https://github.com/Sachinkumarsisodiya" target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors flex items-center">
                <FaGithub size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/sachin-kumar-sisodiya" target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors flex items-center">
                <FaLinkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:sachinsisodiya005@gmail.com" className="text-text-muted hover:text-text-primary transition-colors flex items-center">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a href="https://wa.me/917733866682" target="_blank" rel="noreferrer" className="text-text-muted hover:text-[#25D366] transition-colors flex items-center" title="Connect on WhatsApp">
                <FaWhatsapp size={20} />
                <span className="sr-only">WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Terminal Window */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-1 bg-accent/20 blur-2xl rounded-full opacity-30 z-0"></div>
            <div className="relative rounded-xl bg-[#0a0a0a] border border-[#242424] shadow-subtle overflow-hidden w-full flex flex-col font-mono text-sm z-10">
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-[#242424] bg-[#101010]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#eab308]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]"></div>
                </div>
                <div className="mx-auto flex items-center text-xs text-text-muted">
                  <Terminal size={12} className="mr-2" />
                  bash
                </div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 space-y-4 text-text-secondary leading-relaxed">
                <div>
                  <span className="text-accent">$</span> <span className="text-text-primary">whoami</span>
                  <p className="mt-1 text-text-muted">Sachin Kumar Sisodiya</p>
                </div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                  <span className="text-accent">$</span> <span className="text-text-primary">role</span>
                  <p className="mt-1 text-text-muted">Full Stack Python Developer</p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
                  <span className="text-accent">$</span> <span className="text-text-primary">stack</span>
                  <p className="mt-1 text-text-muted">Python • FastAPI • React • Shopify</p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }}>
                  <span className="text-accent">$</span> <span className="text-text-primary">status</span>
                  <p className="mt-1 text-accent">Open to Work</p>
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.5 }} className="flex items-center">
                  <span className="text-accent">$</span> <span className="w-2 h-4 bg-text-primary ml-2 animate-pulse"></span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
