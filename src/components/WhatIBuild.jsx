import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Globe, Code2, ShoppingCart, Cpu } from 'lucide-react';

export function WhatIBuild() {
  const cards = [
    {
      num: "01",
      title: "Web Applications",
      desc: "Responsive, accessible, and performant web applications built with React, Vite, and modern CSS frameworks.",
      icon: <Globe size={20} className="text-accent" />
    },
    {
      num: "02",
      title: "Python APIs",
      desc: "Robust, scalable, and documented REST APIs built with Python, FastAPI, and integrated with SQL databases.",
      icon: <Code2 size={20} className="text-accent" />
    },
    {
      num: "03",
      title: "Shopify Solutions",
      desc: "Custom Shopify themes, bespoke Liquid development, and scalable public or custom Shopify apps.",
      icon: <ShoppingCart size={20} className="text-accent" />
    },
    {
      num: "04",
      title: "AI-Assisted Products",
      desc: "Rapid prototyping and production-ready applications built using AI-assisted workflows and agents.",
      icon: <Cpu size={20} className="text-accent" />
    }
  ];

  return (
    <section className="py-20 relative">
      <SectionHeading 
        title="What I" highlight="Build" 
        subtitle="Services & Expertise" 
        align="left"
      />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background-secondary border border-border flex items-center justify-center group-hover:scale-110 transition-transform shadow-subtle">
              {card.icon}
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-text-muted font-mono text-sm font-semibold">{card.num}</span>
                <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{card.title}</h3>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
