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
    <section id="education" className="py-20 relative">
      <SectionHeading 
        title="Education" 
        subtitle="Academic Background"
        align="left"
      />
      
      <div className="mt-12 space-y-6 max-w-3xl">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-background-secondary rounded-xl p-6 border border-border hover:border-accent/30 transition-colors shadow-subtle overflow-hidden"
          >
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent flex-shrink-0 transition-colors">
                {item.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {item.degree}
                  </h3>
                  <span className="inline-flex items-center text-xs font-mono text-text-secondary bg-card px-3 py-1 rounded border border-border">
                    {item.period}
                  </span>
                </div>
                
                <div className="text-lg font-medium text-text-secondary mb-1">
                  {item.institution}
                </div>
                <div className="text-xs text-text-muted font-mono uppercase tracking-wide">
                  {item.location}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
