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
        title="Building practical software with" 
        highlight="modern technologies."
        subtitle="About"
        align="left"
      />
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Bio */}
        <div className="text-text-secondary leading-relaxed font-sans text-lg space-y-6">
          <p>
            I am a Full-Stack Python and Shopify Developer focused on crafting clean, efficient, and user-centric digital solutions. With a strong foundation in modern web development practices, I bridge the gap between complex backend logic and seamless frontend interfaces.
          </p>
          <p>
            My technical background spans across building scalable REST APIs, engineering custom Shopify experiences, and utilizing AI-assisted workflows to drastically improve development cycles and output quality. I am passionate about writing maintainable code and solving real-world business problems.
          </p>
        </div>
        
        {/* Profile Image */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
            {/* Subtle background glow */}
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl group-hover:bg-accent/30 transition-colors duration-500 -z-10"></div>
            
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl aspect-[4/5]">
              {/* The uploaded profile image */}
              <img 
                src="/profile.jpg" 
                alt="Sachin Kumar Sisodiya working on laptop" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              {/* Dark overlay gradient to blend with the dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-50 pointer-events-none"></div>
            </div>
          </div>
        </motion.div>
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
