import { PageWrapper } from '../components/ui/PageWrapper';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export function NotFound() {
  return (
    <PageWrapper title="404 - Not Found" description="Page not found" showBreadcrumb={false}>
      <section className="py-32 relative text-center">
        <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center justify-center">
          <SectionHeading 
            title="404" 
            subtitle="Page Not Found"
          />
          <p className="text-text-secondary text-lg mt-8 mb-8 font-mono">
            Error: Directory not found.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-hover text-[#050505] rounded-md font-medium transition-colors shadow-glow hover:shadow-glow-hover"
          >
            <Terminal size={18} className="mr-2" />
            cd /home
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
