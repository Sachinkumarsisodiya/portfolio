import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function GithubSection() {
  return (
    <section className="py-20 relative">
      <SectionHeading 
        title="Code speaks louder." 
        subtitle="GitHub" 
        align="center"
      />
      
      <div className="mt-12 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-xl bg-card border border-border flex flex-col items-center text-center hover:border-accent/30 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-background-secondary border border-border flex items-center justify-center text-text-primary mb-6">
            <FaGithub size={32} />
          </div>
          <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg">
            Explore my repositories, experiments and development work.
          </p>
          <a 
            href="https://github.com/Sachinkumarsisodiya" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 bg-text-primary text-[#050505] rounded-md font-medium hover:bg-text-secondary transition-colors"
          >
            View GitHub <ArrowRight size={18} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
