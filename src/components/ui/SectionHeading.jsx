import { motion } from "framer-motion";
import { cn } from "./Button";

export function SectionHeading({ title, subtitle, className }) {
  return (
    <div className={cn("max-w-2xl mx-auto text-center mb-16", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
