import { motion } from 'framer-motion';
import { ArrowRight, Mail, Terminal, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from './ui/Button';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 bg-noise opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-grid-pattern dark:bg-grid-pattern-dark [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] opacity-50 dark:opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary-500/20 dark:bg-primary-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen -z-10 pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-screen -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-md text-gray-900 dark:text-gray-100 text-sm font-medium mb-6 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                <span>Available for new opportunities</span>
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold text-gray-900 dark:text-white mb-6 leading-[1.05] tracking-tighter"
            >
              Hi, I'm Sachin.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 pb-2 inline-block animate-pulse-slow">
                Full-Stack Developer
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg font-sans"
            >
              Building responsive web apps and Shopify products, blending traditional coding with AI-assisted development to ship fast, functional software.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center"
            >
              <Button as="a" href="#projects" variant="primary" className="group shadow-glow hover:shadow-glow-hover transition-all duration-300 hover:-translate-y-1">
                View Projects 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button as="a" href="#contact" variant="outline" className="backdrop-blur-md bg-white/5 border-white/10 hover:bg-white/10 dark:text-white transition-all duration-300 hover:-translate-y-1">
                Contact Me
              </Button>
              <div className="flex items-center space-x-4 ml-4 mt-4 sm:mt-0">
                <a href="https://github.com/Sachinkumarsisodiya" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:-translate-y-1 duration-300 inline-block">
                  <FaGithub size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/sachin-kumar-sisodiya" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:-translate-y-1 duration-300 inline-block">
                  <FaLinkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="mailto:sachinsisodiya005@gmail.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:-translate-y-1 duration-300 inline-block">
                  <Mail size={24} />
                  <span className="sr-only">Email</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Anchor */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block animate-float"
          >
            {/* Abstract Terminal Window */}
            <div className="relative rounded-2xl bg-white/10 dark:bg-[#0a0a0a]/60 backdrop-blur-2xl border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark overflow-hidden aspect-[4/3] w-full flex flex-col transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="flex items-center px-4 py-3 border-b border-gray-200/10 dark:border-white/5 bg-white/5 dark:bg-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="mx-auto flex items-center text-xs text-gray-400 font-mono">
                  <Terminal size={14} className="mr-2" />
                  agent.js
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <span className="text-pink-400 font-semibold">import</span> <span className="text-gray-900 dark:text-white">{'{'}</span> <span className="text-blue-500 dark:text-blue-300 font-semibold">AIAgent</span> <span className="text-gray-900 dark:text-white">{'}'}</span> <span className="text-pink-400 font-semibold">from</span> <span className="text-green-500 dark:text-green-300">'@antigravity/core'</span><span className="text-gray-500">;</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-4"
                >
                  <span className="text-pink-400 font-semibold">const</span> <span className="text-blue-500 dark:text-blue-300">buildProject</span> <span className="text-gray-900 dark:text-white">=</span> <span className="text-pink-400 font-semibold">async</span> <span className="text-gray-900 dark:text-white">()</span> <span className="text-pink-400 font-semibold">=&gt;</span> <span className="text-gray-900 dark:text-white">{'{'}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="pl-4"
                >
                  <span className="text-pink-400 font-semibold">await</span> <span className="text-blue-500 dark:text-blue-300">AIAgent</span><span className="text-gray-900 dark:text-white">.</span><span className="text-yellow-500 dark:text-yellow-200">execute</span><span className="text-gray-900 dark:text-white">({'{'}</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="pl-8"
                >
                  <span className="text-blue-500 dark:text-blue-300">task:</span> <span className="text-green-500 dark:text-green-300">"Build production-ready app"</span><span className="text-gray-500">,</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="pl-8"
                >
                  <span className="text-blue-500 dark:text-blue-300">tools:</span> <span className="text-gray-900 dark:text-white">[</span><span className="text-green-500 dark:text-green-300">'React'</span><span className="text-gray-500">,</span> <span className="text-green-500 dark:text-green-300">'Tailwind'</span><span className="text-gray-500">,</span> <span className="text-green-500 dark:text-green-300">'Python'</span><span className="text-gray-900 dark:text-white">]</span><span className="text-gray-500">,</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.5 }}
                  className="pl-8"
                >
                  <span className="text-blue-500 dark:text-blue-300">optimize:</span> <span className="text-orange-500 dark:text-orange-300">true</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.5 }}
                  className="pl-4"
                >
                  <span className="text-gray-900 dark:text-white">{'}'})</span><span className="text-gray-500">;</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4, duration: 0.5 }}
                >
                  <span className="text-gray-900 dark:text-white">{'}'}</span><span className="text-gray-500">;</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3, type: "spring" }}
                  className="mt-6 flex items-center text-green-500 dark:text-green-400 font-bold drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                >
                  <span className="mr-2">❯</span> Success: Deployed perfectly.
                </motion.div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white/20 dark:bg-[#0a0a0a]/60 backdrop-blur-xl p-4 rounded-2xl shadow-glass dark:shadow-glass-dark border border-white/20 dark:border-white/10 flex items-center space-x-3 z-20"
            >
              <div className="w-10 h-10 bg-primary-500/20 dark:bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Workflow</p>
                <p className="font-bold text-gray-900 dark:text-white">AI-Assisted Dev</p>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
