import { ShoppingBag, Server, Zap, Layout, Cpu, Code2, Rocket, Database, UserCheck, MessageSquare, Timer, Lightbulb, RefreshCw, Workflow, Activity, Target } from 'lucide-react';

const row1 = [
  { icon: <ShoppingBag size={18} className="text-accent" />, text: "Custom Shopify Stores" },
  { icon: <Server size={18} className="text-accent" />, text: "Robust Backend APIs" },
  { icon: <Zap size={18} className="text-accent" />, text: "Performance Optimization" },
  { icon: <Layout size={18} className="text-accent" />, text: "Responsive Interfaces" },
  { icon: <Cpu size={18} className="text-accent" />, text: "AI Integrations" },
  { icon: <Code2 size={18} className="text-accent" />, text: "Clean Architecture" },
  { icon: <Rocket size={18} className="text-accent" />, text: "Rapid Prototyping" },
  { icon: <Database size={18} className="text-accent" />, text: "Database Design" },
];

const row2 = [
  { icon: <UserCheck size={18} className="text-purple-400" />, text: "Zero Hand-Holding" },
  { icon: <MessageSquare size={18} className="text-purple-400" />, text: "Clear Communication" },
  { icon: <Timer size={18} className="text-purple-400" />, text: "Fast Iterations" },
  { icon: <Lightbulb size={18} className="text-purple-400" />, text: "Problem Solving" },
  { icon: <RefreshCw size={18} className="text-purple-400" />, text: "Adaptability" },
  { icon: <Workflow size={18} className="text-purple-400" />, text: "Lifecycle Ownership" },
  { icon: <Activity size={18} className="text-purple-400" />, text: "Agile Development" },
  { icon: <Target size={18} className="text-purple-400" />, text: "Client-Centric" },
];

export function SpecialtyMarquee() {
  // Duplicate arrays 4 times to ensure it fills ultra-wide screens
  // Since we have 4 copies, shifting by 25% perfectly loops one full set.
  const marquee1 = [...row1, ...row1, ...row1, ...row1];
  const marquee2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <div className="w-full py-12 overflow-hidden relative bg-[#0A0A0A] border-y border-border">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
      `}</style>

      {/* Fade edges for a premium look */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
      
      {/* Container for both rows */}
      <div className="flex flex-col gap-6 relative z-0">
        
        {/* Row 1: Moves Left */}
        <div 
          className="flex w-max"
          style={{ animation: 'marquee-left 40s linear infinite' }}
        >
          {marquee1.map((item, idx) => (
            <div 
              key={`row1-${idx}`} 
              className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full bg-[#050505] border border-border shadow-sm hover:border-accent/50 hover:bg-accent/5 hover:scale-105 transition-all cursor-default"
            >
              {item.icon}
              <span className="text-text-primary text-sm md:text-base font-semibold whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Row 2: Moves Right */}
        <div 
          className="flex w-max"
          style={{ animation: 'marquee-right 45s linear infinite' }}
        >
          {marquee2.map((item, idx) => (
            <div 
              key={`row2-${idx}`} 
              className="flex items-center gap-3 px-6 py-3 mx-3 rounded-full bg-[#050505] border border-border shadow-sm hover:border-purple-500/50 hover:bg-purple-500/5 hover:scale-105 transition-all cursor-default"
            >
              {item.icon}
              <span className="text-text-primary text-sm md:text-base font-semibold whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
