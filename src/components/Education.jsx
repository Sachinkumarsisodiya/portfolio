import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Master of Commerce (Business Administration)",
      institution: "UNIVERSITY OF RAJASTHAN",
      location: "JAIPUR, RAJASTHAN",
      period: "2020 – 2022",
      icon: <GraduationCap size={20} />
    },
    {
      degree: "Bachelor of Commerce",
      institution: "UNIVERSITY OF RAJASTHAN",
      location: "JAIPUR, RAJASTHAN",
      period: "2017 – 2020",
      icon: <GraduationCap size={20} />
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "RAJASTHAN BOARD OF SECONDARY EDUCATION",
      location: "JAIPUR, RAJASTHAN",
      period: "2017",
      icon: <Award size={20} />
    }
  ];

  return (
    <section id="education" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Education" 
          subtitle="My academic background and qualifications."
        />
        
        <div className="mt-12 space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-2xl bg-white/10 dark:bg-black/20 border border-white/20 flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                  {item.icon}
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.degree}
                    </h3>
                    <span className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-primary-300 bg-white/10 dark:bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200/20 dark:border-white/10">
                      {item.period}
                    </span>
                  </div>
                  
                  <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {item.institution}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
