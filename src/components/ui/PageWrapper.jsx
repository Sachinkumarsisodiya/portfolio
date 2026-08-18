import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const pageVariants = {
  initial: {
    opacity: 0,
    filter: 'blur(10px)',
  },
  in: {
    opacity: 1,
    filter: 'blur(0px)',
  },
  out: {
    opacity: 0,
    filter: 'blur(10px)',
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.4
};

export function PageWrapper({ children, title, description, showBreadcrumb = true }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const defaultTitle = "Sachin Sisodiya | Full Stack Python & Shopify Developer";
  const defaultDesc = "Portfolio of Sachin Sisodiya, a Full Stack Python and Shopify Developer from Jaipur, India, showcasing web applications, APIs, Shopify projects and AI-assisted development.";

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="w-full flex-grow pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1280px] mx-auto relative z-10"
    >
      <Helmet>
        <title>{title ? `${title} — Sachin Sisodiya` : defaultTitle}</title>
        <meta name="description" content={description || defaultDesc} />
        <meta property="og:title" content={title ? `${title} — Sachin Sisodiya` : defaultTitle} />
        <meta property="og:description" content={description || defaultDesc} />
        <meta property="og:type" content="website" />
      </Helmet>

      {showBreadcrumb && !isHome && (
        <div className="mb-10">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-mono text-text-muted hover:text-accent transition-colors group"
          >
            <ArrowLeft size={16} className="mr-3 group-hover:-translate-x-1 transition-transform" />
            cd ~
          </Link>
        </div>
      )}
      
      {children}
    </motion.div>
  );
}
