import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS", "Bootstrap", "jQuery"]
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "REST APIs", "Uvicorn"]
    },
    {
      title: "Database",
      skills: ["SQL", "MySQL", "Supabase"]
    },
    {
      title: "Shopify",
      skills: ["Shopify", "Shopify Liquid", "Shopify Themes", "Shopify Apps", "Shopify CLI", "Shopify Partner Dashboard"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Netlify", "Jupyter Notebook"]
    },
    {
      title: "AI-Assisted Development",
      skills: ["Cursor", "Antigravity", "Lovable"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <SectionHeading 
        title="Technical Arsenal" 
        subtitle="Skills & Technologies"
        align="left"
      />
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-xl bg-card border border-border flex flex-col space-y-4 hover:border-accent/30 transition-colors"
          >
            <h3 className="text-lg font-bold text-text-primary pb-2 border-b border-border">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-background-secondary border border-border rounded-md text-text-secondary text-xs font-mono hover:text-accent hover:border-accent/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
