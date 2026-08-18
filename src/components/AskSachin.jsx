import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Send, Bot, User } from 'lucide-react';

export function AskSachin() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am an AI trained on Sachin Kumar Sisodiya\'s portfolio. Ask me anything about his skills, experience, or projects.' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-ai-chat', handleOpen);
    return () => window.removeEventListener('open-ai-chat', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("API Key missing");
      }
      
      const systemInstruction = `You are a helpful and professional AI assistant integrated into Sachin Kumar Sisodiya's portfolio website. 
Your goal is to answer questions about Sachin's skills, experience, projects, and background. 
Always refer to Sachin in the third person. 

CRITICAL RULES:
1. DO NOT use any Markdown formatting (no asterisks **, no bullet points *, no hash #). Use plain text ONLY.
2. Be extremely concise. Keep your answers to 1 or 2 short sentences. This is to ensure fast response times.
3. Be conversational and easy to understand. Do not dump lists of skills unless specifically asked, and even then, just name the top 3-4 as a normal sentence.

**About Sachin:**
He is a Full-Stack Python and Shopify Developer focused on crafting clean, efficient, and user-centric digital solutions. 
He builds scalable REST APIs (FastAPI), custom Shopify experiences (Liquid, Apps), and utilizes AI-assisted workflows.

**Skills:** Frontend (React, Vite, Tailwind CSS), Backend (Python, FastAPI), Database (SQL), Shopify (Apps, Themes, Liquid), AI Tools.
**Experience:** Full Stack Web Developer at Sabai Innovations Pvt. Ltd., Jaipur (September 2025 – July 2026).
**Education:** Master of Commerce & Bachelor of Commerce (University of Rajasthan).
**Projects:** Wokl Music Studio, Sisodiya Healthcare Clinic, FreeShip Pro, Testicraft, Ticket-Tale, Binance Trading Bot, Student Marksheet System, RIYAH Shopify Theme (Password: Sisodiyaa).
**Contact:** Email: sachinsisodiya005@gmail.com, Mobile: +91-7733866682, Location: Agra Road, Jaipur, Rajasthan.`;

      const history = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      }));

      // Using the ultra-fast flash-lite model
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:streamGenerateContent?alt=sse&key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          system_instruction: {
            parts: { text: systemInstruction }
          },
          contents: [
            ...history,
            { role: 'user', parts: [{ text: userMessage }] }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || "API request failed");
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);
      
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let aiText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const dataStr = line.replace('data: ', '').trim();
            if (dataStr === '[DONE]' || !dataStr) continue;
            
            try {
              const data = JSON.parse(dataStr);
              const textPart = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (textPart) {
                aiText += textPart;
                setMessages(prev => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1].content = aiText;
                  return newMessages;
                });
              }
            } catch (e) {
              console.error("Parse error on chunk:", e);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      let errorMsg = "Sorry, I am currently unable to process your request. Please try again later.";
      if (error.message === "API Key missing") {
         errorMsg = "My backend isn't connected yet! Please add a VITE_GEMINI_API_KEY to the .env.local file to activate my AI capabilities.";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: errorMsg }]);
      setIsTyping(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-4 sm:bottom-10 right-4 sm:right-10 w-[calc(100vw-32px)] sm:w-[400px] h-[500px] max-h-[80vh] bg-card border border-border shadow-2xl rounded-2xl z-[101] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-card/50">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Terminal size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary text-sm font-sans">Ask Sachin AI</h3>
                  <p className="text-xs text-text-muted font-mono flex items-center">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2"></span>
                    Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-text-muted hover:text-text-primary transition-colors p-2"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-border ml-3 text-text-secondary' : 'bg-accent/10 mr-3 text-accent'}`}>
                      {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    </div>
                    <div className={`p-3 rounded-2xl leading-relaxed ${msg.role === 'user' ? 'bg-border text-text-primary rounded-tr-none' : 'bg-background-secondary border border-border text-text-secondary rounded-tl-none'}`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex max-w-[85%] flex-row">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 mr-3 flex items-center justify-center text-accent">
                      <Bot size={14} />
                    </div>
                    <div className="p-4 rounded-2xl bg-background-secondary border border-border rounded-tl-none flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-border bg-card">
              <form onSubmit={handleSubmit} className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my stack..."
                  className="w-full bg-background-secondary border border-border rounded-full py-3 pl-4 pr-12 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-accent text-[#050505] rounded-full hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
