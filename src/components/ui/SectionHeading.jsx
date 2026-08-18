import { motion } from "framer-motion";
import { cn } from "./Button";

export function SectionHeading({ title, highlight, subtitle, className, align = "center" }) {
  const alignClass = align === "left" ? "text-left mx-0" : align === "right" ? "text-right mx-0" : "text-center mx-auto";

  return (
    <div className={cn(`max-w-3xl mb-16 relative z-10 ${alignClass}`, className)}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 border border-accent/20 rounded-full shadow-glow cursor-default hover:scale-105 transition-transform"
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-[4rem] font-bold tracking-tight text-text-primary mb-6 leading-tight group"
      >
        {title}{" "}
        {highlight && (
          <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 drop-shadow-sm group-hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500">
            {highlight}
          </span>
        )}
      </motion.h2>
    </div>
  );
}
