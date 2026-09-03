import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Briefcase } from 'lucide-react';

export function Experience() {
  /* Commented out 1-year experience entry for now
  const fullStackExperience = {
    role: "Full Stack Developer / Shopify Developer",
    company: "Sabai Innovations Pvt. Ltd.",
    date: "September 2025 – July 2026",
    responsibilities: [
      "Full Stack web development",
      "Shopify theme development & customization",
      "Shopify application development",
      "Frontend development",
      "Python development & API integration",
      "Database work",
      "Version control via Git/GitHub & deployment",
      "AI-assisted development workflows"
    ]
  };
  */

  const experiences = [
    {
      role: "IT Intern",
      company: "Sabai Innovations Pvt. Ltd.",
      date: "January 2026 – July 2026",
      responsibilities: [
        "Full Stack web development",
        "Shopify theme development & customization",
        "Shopify application development",
        "Frontend development",
        "Backend development",
        "Version control via Git/GitHub & deployment",
        "AI-assisted development workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <SectionHeading 
        title="Professional Timeline" 
        subtitle="Experience" 
        align="left"
      />
      
      <div className="mt-16 max-w-3xl">
        <div className="relative border-l border-border ml-6 md:ml-8 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-colors text-text-muted">
                <Briefcase size={16} />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-mono text-text-muted mt-1 md:mt-0">
                  {exp.date}
                </span>
              </div>
              
              <h4 className="text-text-secondary font-medium mb-4">{exp.company}</h4>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((task, i) => (
                  <li key={i} className="flex items-start text-sm text-text-muted">
                    <span className="text-accent mr-2 mt-0.5">▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


