import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="text-xl font-mono font-bold tracking-tight text-text-primary block">
              Sachin Kumar Sisodiya
            </Link>
            <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
              Full Stack Python & Shopify Developer based in Jaipur, Rajasthan, India. Building modern, performant web applications and AI-assisted products.
            </p>
            
            {/* Availability Status Badge */}
            <div className="inline-flex items-center space-x-2 py-1.5 px-3 rounded-full bg-[#050505] border border-border text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-text-secondary">Open for Full-Time & Freelance</span>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-text-primary font-bold mb-4 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-muted hover:text-accent transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-text-muted hover:text-accent transition-colors text-sm">About</Link></li>
              <li><Link to="/skills" className="text-text-muted hover:text-accent transition-colors text-sm">Skills</Link></li>
              <li><Link to="/projects" className="text-text-muted hover:text-accent transition-colors text-sm">Projects</Link></li>
              <li><Link to="/experience" className="text-text-muted hover:text-accent transition-colors text-sm">Experience</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-accent transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="text-text-primary font-bold mb-4 uppercase tracking-wider text-sm">Social & Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/Sachinkumarsisodiya" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors text-sm">GitHub</a></li>
              <li><a href="https://linkedin.com/in/sachin-kumar-sisodiya" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors text-sm">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/sachin_indu_sisodiya?igsi=MXQwdzJ2YWVrbGpoaw==" target="_blank" rel="noreferrer" className="text-text-muted hover:text-[#E1306C] transition-colors text-sm">Instagram</a></li>
              <li><a href="https://wa.me/917733866682" target="_blank" rel="noreferrer" className="text-text-muted hover:text-[#25D366] transition-colors text-sm">WhatsApp</a></li>
              <li><a href="mailto:sachinsisodiya005@gmail.com" className="text-text-muted hover:text-accent transition-colors text-sm">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted gap-4">
          <p>© {currentYear} Sachin Kumar Sisodiya. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Jaipur, Rajasthan, India</span>
            <button 
              onClick={scrollToTop} 
              className="flex items-center space-x-1 text-text-muted hover:text-accent transition-colors font-mono"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

