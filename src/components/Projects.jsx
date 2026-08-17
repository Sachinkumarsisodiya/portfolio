import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from './ui/Button';

export function Projects() {
  const projects = [
    {
      title: "Shopify Development — Apps & Themes",
      description: "Built and published 'TestiCraft' and 'FreeShip Pro' (live on Shopify App Store). Built 'RIYAH', a premium Shopify Online Store 2.0 theme using AI-assisted development. Managed live Shopify stores end-to-end including products, collections, navigation, and theme customization.",
      tags: ["Shopify", "Remix", "App Bridge", "Polaris", "Liquid", "E-commerce"],
      featured: true,
      bgStyle: "from-purple-500/20 via-pink-500/10 to-transparent",
      icon: <ShoppingBag className="text-white" size={20} />
    },
    {
      title: "Binance Futures Testnet Trading Bot",
      description: "Modular CLI-based trading bot placing MARKET and LIMIT orders on Binance Futures Testnet. Automated trade execution logic using Binance Futures API.",
      tags: ["Python", "API Integration", "Automation"],
      bgStyle: "from-yellow-500/20 via-orange-500/10 to-transparent",
    },
    {
      title: "WOKL Music Studio",
      description: "Responsive multi-page React website with component-based architecture and client-side routing. Integrated WhatsApp CTA for direct user engagement.",
      tags: ["React", "Tailwind CSS", "Vercel"],
      link: "#",
      bgStyle: "from-blue-500/20 via-cyan-500/10 to-transparent",
    },
    {
      title: "Sisodiya Healthcare Clinic",
      description: "Fully responsive clinic website with online appointment booking system. Custom specialties carousel, WhatsApp integration for patient queries.",
      tags: ["Web App", "Booking System"],
      link: "#",
      bgStyle: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
      title: "Student Marksheet Management System",
      description: "Dynamic system to manage student records and auto-calculate grades. Implemented real-time DOM manipulation with input validation.",
      tags: ["JavaScript", "DOM", "Data Management"],
      github: "#",
      bgStyle: "from-indigo-500/20 via-blue-500/10 to-transparent",
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Real-world applications built with modern frameworks and AI-assisted workflows."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative rounded-3xl overflow-hidden border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark bg-white/5 dark:bg-white/5 backdrop-blur-xl flex flex-col h-full ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Dynamic Animated Background Gradient for the card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgStyle} opacity-50 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    {project.featured && (
                      <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        {project.icon}
                        <span className="ml-2 text-gray-900 dark:text-white">Flagship App</span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex space-x-3 bg-white/5 backdrop-blur-md p-2 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-transform hover:scale-110">
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-transform hover:scale-110">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300/90 leading-relaxed font-sans text-lg mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1.5 bg-white/10 dark:bg-black/30 border border-gray-200/20 dark:border-white/10 text-gray-800 dark:text-gray-200 text-xs font-semibold tracking-wide rounded-lg backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
