import { Hero } from '../components/Hero';
import { PageWrapper } from '../components/ui/PageWrapper';
import { WhatIBuild } from '../components/WhatIBuild';
import { Projects } from '../components/Projects';
import { GithubSection } from '../components/GithubSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <PageWrapper title="Home" description="Sachin Sisodiya's Portfolio Home" showBreadcrumb={false}>
      <Hero />
      
      {/* Brief About Teaser */}
      <section className="py-20 relative border-b border-border">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionHeading title="Building practical software with modern technologies." subtitle="About" />
          <p className="text-text-secondary leading-relaxed font-sans text-xl mt-8">
            I'm a Full-Stack Python & Shopify Developer with a deep passion for building polished, high-performance web applications. I blend traditional software engineering with cutting-edge AI tools to ship production-ready code faster.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <Link to="/about" className="inline-flex items-center text-accent font-medium hover:underline">
              Read my full bio <ArrowRight size={16} className="ml-1" />
            </Link>
            <Link to="/skills" className="inline-flex items-center text-accent font-medium hover:underline">
              View my tech stack <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <WhatIBuild />

      {/* Featured Projects Preview */}
      <div className="py-20 border-t border-b border-border">
        <div className="text-center mb-12">
          <SectionHeading title="Featured Work" subtitle="Projects" />
        </div>
        <Projects limit={2} hideHeading={true} />
        <div className="text-center mt-12 relative z-10">
          <Link to="/projects" className="inline-flex items-center px-6 py-3 bg-card border border-border rounded-md text-text-primary hover:border-accent/50 hover:text-accent transition-colors font-mono text-sm">
            cd /projects <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <GithubSection />

    </PageWrapper>
  );
}
