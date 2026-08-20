import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export function Projects({ limit, hideHeading = false }) {
  const displayProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section id="projects" className="py-10 relative">
      {!hideHeading && (
        <SectionHeading 
          title="Selected Work" 
          subtitle="Projects" 
          align="left"
        />
      )}
      
      <div className={`grid grid-cols-1 gap-12 ${!hideHeading ? 'mt-12' : ''}`}>
        {displayProjects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <Link to={`/projects/${project.id}`} className="lg:col-span-7 relative w-full aspect-video rounded-xl overflow-hidden bg-card border border-border group-hover:border-accent/30 transition-colors block shadow-subtle">
              <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/10 group-hover:text-white/20 transition-colors pointer-events-none">
                <span className="text-8xl font-black">{project.num}</span>
              </div>
            </Link>

            {/* Project Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-accent font-mono text-sm font-semibold">{project.num}</span>
                <span className="text-text-muted font-mono text-xs px-2 py-1 bg-card border border-border rounded">{project.category}</span>
              </div>
              
              <Link to={`/projects/${project.id}`}>
                <h3 className="text-3xl font-bold text-text-primary mb-4 hover:text-accent transition-colors">
                  {project.name}
                </h3>
              </Link>
              
              <p className="text-text-secondary leading-relaxed mb-6">
                {project.shortDesc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-text-muted text-sm font-mono border-b border-transparent hover:border-accent hover:text-accent transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-6">
                <Link to={`/projects/${project.id}`} className="inline-flex items-center text-text-primary font-medium hover:text-accent transition-colors">
                  View Details <ArrowRight size={16} className="ml-2" />
                </Link>
                <div className="flex space-x-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
