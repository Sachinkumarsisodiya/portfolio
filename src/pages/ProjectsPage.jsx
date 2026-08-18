import { PageWrapper } from '../components/ui/PageWrapper';
import { Projects } from '../components/Projects';

export function ProjectsPage() {
  return (
    <PageWrapper title="Projects" description="Explore my development projects and open source work.">
      <Projects />
    </PageWrapper>
  );
}
