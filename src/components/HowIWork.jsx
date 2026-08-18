import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export function HowIWork() {
  const steps = [
    {
      num: "01",
      title: "Understand",
      desc: "Understand the requirement and business goal."
    },
    {
      num: "02",
      title: "Plan",
      desc: "Choose architecture, technologies and implementation approach."
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop frontend, backend, APIs and integrations."
    },
    {
      num: "04",
      title: "Ship",
      desc: "Test, deploy, optimize and improve."
    }
  ];

  return (
    <section className="py-20 relative">
      <SectionHeading 
        title="Development Workflow" 
        subtitle="How I Work" 
        align="left"
      />
      
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border flex flex-col space-y-4 hover:border-accent/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute -right-4 -top-4 text-8xl font-black text-background-secondary select-none z-0 group-hover:text-[var(--border)] transition-colors">
              {step.num}
            </div>
            <div className="relative z-10">
              <span className="text-accent font-mono text-sm font-semibold mb-2 block">STEP {step.num}</span>
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
