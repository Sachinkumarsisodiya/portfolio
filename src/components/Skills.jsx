import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Code2, Server, Database, ShoppingBag, Wrench, Sparkles } from 'lucide-react';
import { useState, useRef } from 'react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code2 className="w-5 h-5 text-accent" />,
    skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS", "Bootstrap", "jQuery"]
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 text-accent" />,
    skills: ["Python", "FastAPI", "REST APIs", "Uvicorn"]
  },
  {
    title: "Database",
    icon: <Database className="w-5 h-5 text-accent" />,
    skills: ["SQL", "MySQL", "Supabase"]
  },
  {
    title: "Shopify",
    icon: <ShoppingBag className="w-5 h-5 text-accent" />,
    skills: ["Shopify", "Shopify Liquid", "Shopify Themes", "Shopify Apps", "Shopify CLI", "Shopify Partner Dashboard"]
  },
  {
    title: "Tools",
    icon: <Wrench className="w-5 h-5 text-accent" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "Jupyter Notebook"]
  },
  {
    title: "AI-Assisted Development",
    icon: <Sparkles className="w-5 h-5 text-accent" />,
    skills: ["Cursor", "Antigravity", "Lovable"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

const SkillCard = ({ category }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col p-6 rounded-[2rem] bg-[#0A0A0A] border border-border overflow-hidden group shadow-subtle hover:border-border/80 transition-colors"
    >
      {/* Dynamic Mouse Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-[2rem]"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(163, 230, 53, 0.08), transparent 40%)`,
        }}
      />
      
      {/* Glowing inner shadow on the card */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,255,255,0.015)] pointer-events-none rounded-[2rem]"></div>

      <div className="relative z-10 flex items-center mb-6 pb-4 border-b border-border/50">
        <div className="w-12 h-12 rounded-xl bg-[#050505] flex items-center justify-center mr-4 border border-border group-hover:border-accent/30 group-hover:scale-110 transition-all duration-300 shadow-inner">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
          {category.title}
        </h3>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-2">
        {category.skills.map(skill => (
          <span 
            key={skill}
            className="px-3 py-1.5 bg-[#050505] border border-border rounded-lg text-text-secondary text-xs sm:text-sm font-mono hover:text-text-primary hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 cursor-default shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Technical" highlight="Arsenal" 
          subtitle="Skills & Technologies"
          align="center"
        />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
