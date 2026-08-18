import { useParams, Navigate } from 'react-router-dom';
import { PageWrapper } from '../components/ui/PageWrapper';
import { projectsData } from '../data/projects';
import { ArrowLeft, ExternalLink, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const sections = [
    { title: "Overview", content: project.overview },
    { title: "Problem", content: project.problem },
    { title: "Solution", content: project.solution },
    { title: "Challenges", content: project.challenges },
    { title: "What I Learned", content: project.learned }
  ];

  return (
    <PageWrapper title={`${project.name} | Projects`} description={project.shortDesc}>
      <article className="max-w-4xl mx-auto py-10">
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-accent font-mono text-sm font-semibold">{project.num}</span>
            <span className="text-text-muted font-mono text-xs px-2 py-1 bg-card border border-border rounded">{project.category}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6 leading-tight">
            {project.name}
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed max-w-2xl font-sans">
            {project.shortDesc}
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-accent text-[#050505] rounded-md hover:bg-accent-hover transition-colors shadow-glow hover:shadow-glow-hover">
                <ExternalLink className="mr-2" size={16} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-card text-text-primary border border-border rounded-md hover:bg-[#1a1a1a] hover:text-white transition-colors">
                <FaGithub className="mr-2" size={16} />
                View Code
              </a>
            )}
          </div>
        </header>

        {/* Hero Image Area */}
        <div className="w-full aspect-video rounded-xl bg-card border border-border flex items-center justify-center mb-16 shadow-subtle overflow-hidden relative">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {sections.map(section => (
              section.content && (
                <section key={section.title}>
                  <h2 className="text-2xl font-bold text-text-primary mb-4 pb-2 border-b border-border inline-block">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary leading-relaxed font-sans text-lg">
                    {section.content}
                  </p>
                </section>
              )
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 border-b border-border pb-2">Technologies</h3>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <li key={tech} className="px-3 py-1 bg-card border border-border rounded text-text-secondary text-xs font-mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {project.features && (
              <div>
                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-4 border-b border-border pb-2">Key Features</h3>
                <ul className="space-y-3">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-start text-sm text-text-secondary">
                      <span className="text-accent mr-2 mt-0.5">▹</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
        
        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-border flex justify-between items-center">
          <Link to="/projects" className="text-text-muted hover:text-accent font-mono text-sm inline-flex items-center transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </Link>
        </div>
        
      </article>
    </PageWrapper>
  );
}
