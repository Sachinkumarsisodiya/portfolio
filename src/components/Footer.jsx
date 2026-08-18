import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Info */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-mono font-bold tracking-tight text-text-primary mb-4 block">
              Sachin Kumar Sisodiya
            </Link>
            <p className="text-text-secondary text-sm mb-6 max-w-sm">
              Full Stack Python & Shopify Developer based in Jaipur, Rajasthan, India. Building modern, performant web applications and AI-assisted products.
            </p>
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
            <h4 className="text-text-primary font-bold mb-4 uppercase tracking-wider text-sm">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/Sachinkumarsisodiya" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors text-sm">GitHub</a></li>
              <li><a href="https://linkedin.com/in/sachin-kumar-sisodiya" target="_blank" rel="noreferrer" className="text-text-muted hover:text-accent transition-colors text-sm">LinkedIn</a></li>
              <li><a href="mailto:sachinsisodiya005@gmail.com" className="text-text-muted hover:text-accent transition-colors text-sm">Email</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
          <p>© {currentYear} Sachin Kumar Sisodiya. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Jaipur, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
}
