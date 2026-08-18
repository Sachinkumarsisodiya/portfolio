import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Mail, Eye, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

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

  return (
    <section id="contact" className="py-20 relative border-t border-border">
      <SectionHeading 
        title="Let's build something together." 
        subtitle="Contact" 
        align="center"
      />
      
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            I'm currently open to opportunities in Full Stack Development, Python Development, Shopify Development and related web development roles.
          </p>
          
          <div className="flex flex-col space-y-4">
            <a href="mailto:sachinsisodiya005@gmail.com" className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group">
              <Mail className="text-text-muted group-hover:text-accent mr-4 transition-colors" />
              <span className="text-text-primary font-medium">sachinsisodiya005@gmail.com</span>
            </a>
            
            <a href="https://linkedin.com/in/sachin-kumar-sisodiya" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group">
              <FaLinkedin className="text-text-muted group-hover:text-accent mr-4 transition-colors" size={24} />
              <span className="text-text-primary font-medium">LinkedIn Profile</span>
            </a>
            
            <a href="https://github.com/Sachinkumarsisodiya" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group">
              <FaGithub className="text-text-muted group-hover:text-accent mr-4 transition-colors" size={24} />
              <span className="text-text-primary font-medium">GitHub Profile</span>
            </a>
            
            <a href="/Sachin_Sisodiya_Resume.pdf" target="_blank" rel="noreferrer" className="flex items-center p-4 bg-card border border-border rounded-lg hover:border-accent/50 transition-colors group">
              <Eye className="text-text-muted group-hover:text-accent mr-4 transition-colors" />
              <span className="text-text-primary font-medium">View Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 shadow-subtle">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background-secondary border border-border rounded-md px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background-secondary border border-border rounded-md px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-background-secondary border border-border rounded-md px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors resize-none"
                  placeholder="How can we work together?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3 bg-accent text-[#050505] font-medium rounded-md hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-glow hover:shadow-glow-hover"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={16} className="ml-2" />
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-accent text-sm text-center mt-4">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-sm text-center mt-4">Failed to send message. Please try again later.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
