import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Mail, Eye, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Web3Forms is much more reliable than FormSubmit
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY",
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: "New Message from Portfolio Website"
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        console.error("Form error:", result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error("Fetch error:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  const contactLinks = [
    { icon: Mail, label: 'sachinsisodiya005@gmail.com', href: 'mailto:sachinsisodiya005@gmail.com' },
    { icon: FaLinkedin, label: 'LinkedIn Profile', href: 'https://linkedin.com/in/sachin-kumar-sisodiya' },
    { icon: FaGithub, label: 'GitHub Profile', href: 'https://github.com/Sachinkumarsisodiya' },
    { icon: FaInstagram, label: 'Instagram Profile', href: 'https://www.instagram.com/sachin_indu_sisodiya?igsi=MXQwdzJ2YWVrbGpoaw==' },
    { icon: Eye, label: 'View Resume', href: '/Sachin_Sisodiya_Resume.pdf' },
  ];

  return (
    <section id="contact" className="py-20 relative border-t border-border overflow-hidden">
      <SectionHeading 
        title="Let's build something together." 
        subtitle="Contact" 
        align="center"
      />
      
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 px-4">
        {/* Contact Info (Left Side) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center relative"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

          <h3 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-tight relative z-10">
            Ready to create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-400">extraordinary?</span>
          </h3>
          <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg relative z-10">
            I'm currently open to new opportunities in Full Stack Development, Python Development, and Shopify Development. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a 
                  key={idx}
                  href={link.href} 
                  target={link.href.startsWith('http') || link.href.endsWith('.pdf') ? "_blank" : undefined}
                  rel={link.href.startsWith('http') || link.href.endsWith('.pdf') ? "noreferrer" : undefined}
                  className="flex items-center p-4 bg-[#0A0A0A] border border-border rounded-xl hover:border-accent/50 hover:bg-card/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-subtle"
                >
                  <div className="w-12 h-12 rounded-full bg-[#050505] border border-border flex items-center justify-center mr-4 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                    <Icon className="text-text-muted group-hover:text-accent transition-colors" size={20} />
                  </div>
                  <span className="text-text-primary font-medium text-sm truncate">{link.label}</span>
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* Contact Form (Right Side) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Subtle background glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

          <form onSubmit={handleSubmit} className="bg-[#0A0A0A]/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-subtle relative z-10">
            <h4 className="text-2xl font-bold text-text-primary mb-8">Send me a message</h4>
            
            <div className="space-y-6">
              {/* Floating Label Input: Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="peer w-full bg-[#050505] border border-border rounded-xl px-4 pt-7 pb-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all shadow-inner"
                  placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-5 text-text-muted transition-all duration-200 pointer-events-none
                             peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted
                             peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent
                             -translate-y-3 text-xs text-text-secondary"
                >
                  Full Name
                </label>
              </div>
              
              {/* Floating Label Input: Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="peer w-full bg-[#050505] border border-border rounded-xl px-4 pt-7 pb-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all shadow-inner"
                  placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-4 top-5 text-text-muted transition-all duration-200 pointer-events-none
                             peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted
                             peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent
                             -translate-y-3 text-xs text-text-secondary"
                >
                  Email Address
                </label>
              </div>
              
              {/* Floating Label Textarea: Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full bg-[#050505] border border-border rounded-xl px-4 pt-7 pb-3 text-text-primary focus:outline-none focus:border-accent/50 transition-all shadow-inner resize-none"
                  placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-5 text-text-muted transition-all duration-200 pointer-events-none
                             peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-text-muted
                             peer-focus:-translate-y-3 peer-focus:text-xs peer-focus:text-accent
                             -translate-y-3 text-xs text-text-secondary"
                >
                  Your Message
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-4 bg-accent text-[#050505] text-lg font-bold rounded-xl hover:bg-accent-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-glow hover:shadow-glow-hover group"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-center p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 mt-4"
                  >
                    <CheckCircle2 className="mr-2" size={18} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center justify-center p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 mt-4"
                  >
                    <AlertCircle className="mr-2" size={18} />
                    <span>Failed to send message. Please try again later.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
