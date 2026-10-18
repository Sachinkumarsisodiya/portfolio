import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Bot, Code2, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      role: "AI Automation & Website Developer",
      company: "HETALLS GLOBAL PVT. LTD.",
      location: "Jaipur, Rajasthan",
      date: "October 2026 – Present",
      isCurrent: true,
      icon: Bot,
      iconBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      tags: ["AI Automation", "Web Development", "E-commerce", "Workflow Optimization", "Agentic AI"],
      responsibilities: [
        "Develop and maintain responsive websites tailored to business and e-commerce requirements.",
        "Build AI-powered automation workflows to reduce repetitive tasks and streamline business operations.",
        "Customize website layouts, integrate new features, and enhance overall functionality.",
        "Leverage AI tools and agent-based development platforms to accelerate development and improve productivity.",
        "Optimize existing workflows and implement technical improvements to support business growth."
      ]
    },
    {
      role: "Full Stack Web Developer",
      company: "SABAI INNOVATIONS PVT. LTD.",
      location: "Jaipur, Rajasthan",
      date: "September 2025 – July 2026",
      isCurrent: false,
      icon: Code2,
      iconBg: "bg-accent/10 text-accent border-accent/20",
      tags: ["Full Stack", "Shopify", "API Integration", "Theme Customization", "Testing & Deployment"],
      responsibilities: [
        "Developed and maintained static and dynamic websites with fully functional admin panels.",
        "Built and customized Shopify stores, themes, and e-commerce functionalities to meet business requirements.",
        "Integrated third-party APIs and implemented custom features to enhance website capabilities.",
        "Identified and resolved bugs while improving website performance, usability, and functionality.",
        "Managed website testing, deployment, hosting, maintenance, and ongoing technical support."
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-16 relative">
      <SectionHeading 
        title="Professional Experience" 
        subtitle="Career Journey" 
        align="left"
      />
      
      <div className="mt-12 space-y-8 max-w-4xl">
        {experiences.map((exp, idx) => {
          const IconComponent = exp.icon;
          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative p-6 sm:p-8 rounded-2xl bg-card border border-border/80 hover:border-accent/40 transition-all duration-300 shadow-subtle group overflow-hidden"
            >
              {/* Subtle Ambient Background Gradient on Hover */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[90px] pointer-events-none group-hover:bg-accent/10 transition-colors duration-500 -mr-20 -mt-20"></div>

              {/* Header: Icon + Titles + Date Badge */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-xl border flex items-center justify-center shrink-0 ${exp.iconBg} shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-secondary mt-1">
                      <span className="font-semibold text-text-primary">{exp.company}</span>
                      <span className="text-border">•</span>
                      <span className="inline-flex items-center text-text-muted text-xs font-mono">
                        <MapPin size={12} className="mr-1 text-text-muted" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Date & Status Badge */}
                <div className="sm:self-start shrink-0">
                  {exp.isCurrent ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-medium shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                      </span>
                      <span>{exp.date}</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background-secondary border border-border text-text-muted text-xs font-mono">
                      <Calendar size={12} />
                      <span>{exp.date}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags / Pills */}
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {exp.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-background border border-border text-text-secondary group-hover:border-accent/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Responsibilities list */}
              <div className="pt-5 border-t border-border/50 relative z-10">
                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start text-sm text-text-secondary leading-relaxed">
                      <span className="text-accent mr-3 mt-1 text-xs shrink-0">▹</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
