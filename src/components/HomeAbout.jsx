import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomeAbout() {
  return (
    <section className="py-24 relative flex flex-col items-center justify-center text-center">
      <SectionHeading 
        title="Building practical software with" 
        highlight="modern technologies."
        subtitle="About"
        align="center"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto px-4"
      >
        <p className="text-text-muted text-lg md:text-xl leading-relaxed font-sans mb-12">
          I'm a Full-Stack Python & Shopify Developer with a deep passion for building polished, high-performance web applications. I blend traditional software engineering with cutting-edge AI tools to ship production-ready code faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Link 
            to="/about" 
            className="group flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            Read my full bio 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/skills" 
            className="group flex items-center text-accent font-semibold hover:text-accent/80 transition-colors"
          >
            View my tech stack 
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
