import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Terminal, Code, Database, Smartphone, Palette, GitBranch, MapPin, Sparkles, Cpu, Send } from 'lucide-react';
import { FaReact, FaPython, FaNodeJs, FaFigma, FaShopify } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiTypescript, SiMysql, SiNextdotjs } from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, color: 'text-[#61DAFB]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900 dark:text-white' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
  { name: 'Python', icon: FaPython, color: 'text-[#3776AB]' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]' },
  { name: 'MySQL', icon: SiMysql, color: 'text-[#4479A1]' },
  { name: 'Shopify', icon: FaShopify, color: 'text-[#7AB55C]' },
  { name: 'Figma', icon: FaFigma, color: 'text-[#F24E1E]' },
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
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="About & Skills" 
          subtitle="Everything about me, neatly packed."
        />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12"
        >
          {/* Main Bio Box (Large span) */}
          <motion.div 
            variants={item}
            className="md:col-span-2 lg:col-span-2 row-span-2 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-primary-500/20 rounded-2xl flex items-center justify-center text-primary-500 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
                  <Terminal size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans text-lg">
                  I'm a Full-Stack Python & React Developer with a deep passion for building polished, high-performance web applications. I blend traditional software engineering with cutting-edge AI tools to ship production-ready code faster. 
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-sans text-lg mt-4">
                  Whether it's complex backend logic, sleek frontend interfaces, or building Shopify apps, I focus on delivering seamless user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location / Status Box */}
          <motion.div 
            variants={item}
            className="md:col-span-1 lg:col-span-1 row-span-1 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark relative overflow-hidden group flex flex-col items-center justify-center text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4 animate-float shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Jaipur, India</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Available globally</p>
          </motion.div>

          {/* AI Workflow Box */}
          <motion.div 
            variants={item}
            className="md:col-span-1 lg:col-span-1 row-span-1 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-500 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">AI-Assisted</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Leveraging LLMs and autonomous agents for rapid development.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Masonry (Wide Box) */}
          <motion.div 
            variants={item}
            className="md:col-span-3 lg:col-span-2 row-span-1 bg-white/5 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/20 dark:border-white/10 shadow-glass dark:shadow-glass-dark relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Code size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Core Tech Stack</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name} 
                      className="flex items-center space-x-2 px-3 py-2 bg-white/5 dark:bg-black/20 rounded-xl border border-gray-200/10 dark:border-white/5 hover:-translate-y-1 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 cursor-default"
                    >
                      <Icon className={skill.color} size={16} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
