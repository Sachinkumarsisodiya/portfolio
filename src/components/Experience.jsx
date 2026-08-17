import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey."
        />
        
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="relative pl-10 sm:pl-12 py-6 group"
          >
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-500/0 dark:via-primary-500/40 dark:to-primary-500/0"></div>
            
            {/* Timeline Icon */}
            <div className="absolute left-0 top-8 w-10 h-10 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 shadow-glass dark:shadow-glass-dark flex items-center justify-center z-10 group-hover:border-primary-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-500">
              <Briefcase size={18} className="text-primary-600 dark:text-primary-400" />
            </div>
            
            <div className="flex-grow bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark transition-all duration-300 hover:-translate-y-1 overflow-hidden group/card relative">
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover/card:text-primary-600 dark:group-hover/card:text-primary-400 transition-colors">IT Intern</h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 font-medium mt-1">Sabai Innovations</h4>
                  </div>
                  <div className="flex items-center text-sm font-semibold text-primary-600 dark:text-primary-300 bg-white/10 dark:bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                    <Calendar size={14} className="mr-2" />
                    Jan 2026 – Jun 2026
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <div className="flex items-center">
                    <MapPin size={15} className="mr-1.5" />
                    Jaipur, India (6 Months)
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1.5 opacity-70 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">✦</span>
                    <span className="leading-relaxed">Built and deployed web solutions using modern tools and AI-assisted workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1.5 opacity-70 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">✦</span>
                    <span className="leading-relaxed">Developed websites using AI-assisted tools and modern front-end frameworks.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1.5 opacity-70 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">✦</span>
                    <span className="leading-relaxed">Managed domain/subdomain configuration, debugging, and Shopify app development.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-3 mt-1.5 opacity-70 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">✦</span>
                    <span className="leading-relaxed">Used Git & GitHub for version control and continuous deployment pipelines.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
