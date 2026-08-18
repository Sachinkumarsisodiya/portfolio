import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { ArrowRight, Star, GitFork } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function GithubSection() {
  const topRepos = [
    {
      name: 'binance_trading_bot',
      desc: 'Automated trading bot for Binance Futures Testnet using Python.',
      stars: 12,
      forks: 3,
      lang: 'Python',
      color: '#3572A5'
    },
    {
      name: 'ticket-tale',
      desc: 'A BookMyShow inspired ticket booking UI built with React.',
      stars: 8,
      forks: 2,
      lang: 'JavaScript',
      color: '#f1e05a'
    }
  ];

  return (
    <section className="py-20 relative">
      <SectionHeading 
        title="Code speaks louder." 
        subtitle="GitHub" 
        align="center"
      />
      
      <div className="mt-12 max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        
        {/* Main CTA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 p-8 rounded-xl bg-card border border-border flex flex-col items-center justify-center text-center hover:border-accent/30 transition-all shadow-subtle group relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full blur-[50px]"></div>

          <div className="w-20 h-20 rounded-full bg-[#050505] border border-border flex items-center justify-center text-text-primary mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:border-accent/50 group-hover:shadow-glow relative z-10">
            <FaGithub size={40} />
          </div>
          <h3 className="text-xl font-bold text-text-primary mb-3 relative z-10">Sachinkumarsisodiya</h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-8 relative z-10">
            Explore my open-source projects, experiments, and daily development workflow.
          </p>
          <a 
            href="https://github.com/Sachinkumarsisodiya" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 w-full justify-center bg-text-primary text-[#050505] rounded-md font-bold hover:bg-accent hover:shadow-glow transition-all duration-300 relative z-10"
          >
            Follow on GitHub <ArrowRight size={18} className="ml-2" />
          </a>
        </motion.div>

        {/* Right Side: Graph & Repos */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Contribution Graph Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors shadow-subtle flex flex-col justify-center overflow-hidden"
          >
            <h4 className="text-text-primary font-bold mb-6 flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-3 animate-pulse shadow-glow"></span>
              Recent Contributions
            </h4>
            <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
              {/* Uses rshah's ghchart API with A3E635 accent color */}
              <img 
                src="https://ghchart.rshah.org/A3E635/Sachinkumarsisodiya" 
                alt="GitHub Contribution Chart" 
                className="min-w-[700px] w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </motion.div>

          {/* Top Repositories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topRepos.map((repo, idx) => (
              <motion.a
                key={repo.name}
                href={`https://github.com/Sachinkumarsisodiya/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="block p-6 rounded-xl bg-[#050505] border border-border hover:border-accent/50 hover:shadow-glow transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-text-primary font-bold group-hover:text-accent transition-colors flex items-center">
                    <FaGithub className="mr-2 text-text-muted group-hover:text-accent transition-colors" /> {repo.name}
                  </h4>
                </div>
                <p className="text-text-secondary text-sm mb-6 line-clamp-2">
                  {repo.desc}
                </p>
                <div className="flex items-center text-xs text-text-muted gap-4">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.color }}></span>
                    {repo.lang}
                  </span>
                  <span className="flex items-center gap-1 hover:text-text-primary transition-colors cursor-help">
                    <Star size={14} /> {repo.stars}
                  </span>
                  <span className="flex items-center gap-1 hover:text-text-primary transition-colors cursor-help">
                    <GitFork size={14} /> {repo.forks}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
