import { Hero } from '../components/Hero';
import { PageWrapper } from '../components/ui/PageWrapper';
import { BentoSection } from '../components/BentoSection';
import { WhatIBuild } from '../components/WhatIBuild';
import { Projects } from '../components/Projects';
import { GithubSection } from '../components/GithubSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { SpecialtyMarquee } from '../components/SpecialtyMarquee';
import { HomeAbout } from '../components/HomeAbout';

export function Home() {
  return (
    <PageWrapper title="Home" description="Sachin Kumar Sisodiya's Portfolio Home" showBreadcrumb={false}>
      <Hero />
      
      {/* About Section */}
      <HomeAbout />
      
      {/* Premium Bento Grid Section */}
      <BentoSection />

      <WhatIBuild />

      {/* Dynamic Marquee Section */}
      <SpecialtyMarquee />

      {/* Featured Projects Preview */}
      <div className="py-20 border-t border-b border-border">
        <div className="text-center mb-12">
          <SectionHeading title="Featured" highlight="Work" subtitle="Projects" />
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
