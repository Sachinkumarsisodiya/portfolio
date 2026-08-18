import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Code, Database, Sparkles, Terminal, Wrench, Layout, BrainCircuit } from 'lucide-react';

const skillCategories = [
  {
    title: 'Front-End',
    icon: <Layout size={20} />,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/20',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'jQuery', 'JavaScript']
  },
  {
    title: 'Programming & DB',
    icon: <Database size={20} />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/20',
    skills: ['Python', 'SQL', 'MySQL']
  },
  {
    title: 'AI Development',
    icon: <BrainCircuit size={20} />,
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/20',
    skills: ['AI Agents', 'LLMs', 'AI-Assisted Development', 'Prompt Engineering', 'Intelligent Automation']
  },
  {
    title: 'AI Tools',
    icon: <Sparkles size={20} />,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/20',
    skills: ['Antigravity IDE', 'Lovable', 'Claude', 'GitHub Copilot', 'Codex', 'V0', 'ChatGPT']
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={20} />,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/20',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Replit', 'Shopify']
  }
];

export function BentoGrid() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading 
          title="Technical Arsenal" 
          subtitle="My complete toolkit for building modern applications."
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {/* Main Focus Box */}
          <motion.div 
            variants={item}
            className="md:col-span-2 lg:col-span-2 row-span-1 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-500 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                <Terminal size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Philosophy</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans text-lg">
                I combine traditional full-stack web development with next-generation AI workflows. This allows me to architect robust backend systems, craft responsive frontend interfaces, and deploy faster by utilizing intelligent agents and LLMs throughout the entire software lifecycle.
              </p>
            </div>
          </motion.div>

          {/* Render Categorized Skills */}
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark relative overflow-hidden group ${
                category.title === 'AI Tools' ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 ${category.bgColor} rounded-xl flex items-center justify-center ${category.color} shadow-[0_0_15px_rgba(255,255,255,0.05)]`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-white/5 dark:bg-black/20 border border-gray-200/10 dark:border-white/5 text-gray-700 dark:text-gray-300 text-sm font-medium tracking-wide rounded-lg backdrop-blur-md cursor-default hover:border-gray-300 dark:hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
