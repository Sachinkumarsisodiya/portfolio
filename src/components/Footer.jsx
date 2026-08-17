import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-200/20 dark:border-white/10 bg-white/5 dark:bg-black/10 backdrop-blur-xl py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sachin<span className="text-primary-600 dark:text-primary-400">.</span>
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              Building fast, functional, user-friendly software.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/Sachinkumarsisodiya" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110">
              <span className="sr-only">GitHub</span>
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/sachin-kumar-sisodiya" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:sachinsisodiya005@gmail.com" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hover:scale-110">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200/20 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} Sachin Kumar. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 space-x-6 font-medium">
            <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
