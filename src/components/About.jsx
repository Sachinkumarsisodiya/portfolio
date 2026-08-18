import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Terminal, Database, ShoppingBag, Cpu } from 'lucide-react';

export function About() {
  const highlightCards = [
    {
      title: "Full Stack Development",
      description: "Building responsive, accessible, and performant web applications from frontend to backend.",
      icon: <Terminal size={24} className="text-accent" />
    },
    {
      title: "Python Backend",
      description: "Developing robust REST APIs, automation scripts, and server-side logic using Python and FastAPI.",
      icon: <Database size={24} className="text-accent" />
    },
    {
      title: "Shopify Development",
      description: "Creating custom Shopify themes and scalable Shopify Apps using Liquid, React, and Node.",
      icon: <ShoppingBag size={24} className="text-accent" />
    },
    {
      title: "AI-Assisted Development",
      description: "Leveraging modern AI tools to accelerate development workflows and ship high-quality code faster.",
      icon: <Cpu size={24} className="text-accent" />
    }
  ];

  return (
    <section className="py-20 relative">
      <SectionHeading 
        title="Building practical software with modern technologies." 
        subtitle="About Me" 
        align="left"
      />
      
      <div className="mt-12 text-text-secondary leading-relaxed max-w-3xl font-sans text-lg space-y-6">
        <p>
          I am a Full-Stack Python and Shopify Developer focused on crafting clean, efficient, and user-centric digital solutions. With a strong foundation in modern web development practices, I bridge the gap between complex backend logic and seamless frontend interfaces.
        </p>
        <p>
          My technical background spans across building scalable REST APIs, engineering custom Shopify experiences, and utilizing AI-assisted workflows to drastically improve development cycles and output quality. I am passionate about writing maintainable code and solving real-world business problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {highlightCards.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border flex flex-col space-y-4 hover:border-accent/30 transition-colors group"
          >
            <div className="w-12 h-12 rounded-lg bg-background-secondary border border-border flex items-center justify-center group-hover:scale-110 transition-transform">
              {card.icon}
            </div>
            <h3 className="text-xl font-bold text-text-primary">{card.title}</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
