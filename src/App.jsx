import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* Global Animated Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/20 dark:bg-primary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[128px] opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <BentoGrid />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
