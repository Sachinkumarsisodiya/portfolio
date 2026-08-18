import { motion } from "framer-motion";
import { cn } from "./Button";

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("max-w-3xl mx-auto text-center mb-20", className)}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 border border-accent/20 rounded-full shadow-glow"
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-text-primary via-text-primary to-text-muted mb-6"
      >
        {title}
      </motion.h2>
    </div>
  );
}
