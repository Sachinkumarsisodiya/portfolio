import { PageWrapper } from '../components/ui/PageWrapper';
import { About as AboutComponent } from '../components/About';
import { Education } from '../components/Education';
import { HowIWork } from '../components/HowIWork';

export function About() {
  return (
    <PageWrapper title="About" description="About Sachin Sisodiya - Full-Stack Developer">
      <AboutComponent />
      <HowIWork />
      <Education />
    </PageWrapper>
  );
}
