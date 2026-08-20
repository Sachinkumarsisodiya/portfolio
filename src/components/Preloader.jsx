import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeSnippets = [
  "const app = express();",
  "<motion.div animate={{ opacity: 1 }} />",
  "SELECT * FROM users WHERE id = 1;",
  "function optimize(ast) { ... }",
  "import { useEffect } from 'react';",
  "git push origin main --force",
  "npm run build && npm run deploy",
  "Array.prototype.map()",
  "console.log('Hello World');",
  "display: flex; justify-content: center;",
  "export default function App()",
  "01001000 01101001",
  "const [state, setState] = useState()",
  "await fetch('/api/data')",
  "module.exports = config;"
];

const logLines = [
  "Mounting core components...",
  "Establishing secure connection...",
  "Loading 3D textures...",
  "Decrypting user data...",
  "Compiling shaders...",
  "Initializing neural link...",
  "Optimizing render tree...",
  "Bypassing mainframe...",
  "Injecting dependencies..."
];

const FloatingCodes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15] z-0">
      {Array.from({ length: 20 }).map((_, i) => {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const randomX = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        const randomDuration = 10 + Math.random() * 15;
        
        return (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: `${randomX}vw`, opacity: 0 }}
            animate={{ 
              y: "-10vh",
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: randomDuration,
              delay: randomDelay,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute font-mono text-[10px] md:text-sm text-accent whitespace-nowrap drop-shadow-[0_0_5px_rgba(163,230,53,0.8)]"
          >
            {randomSnippet}
          </motion.div>
        );
      })}
    </div>
  );
};

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2.5; // Decryption speed
    }, 40);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayText}</span>;
};

const GyroscopeLoader = ({ count }) => {
  return (
    <div className="relative flex items-center justify-center w-56 h-56 md:w-72 md:h-72 mb-8 perspective-[1000px]">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      
      {/* Ring 1 - X/Y Rotation */}
      <motion.div 
        animate={{ rotateX: 360, rotateY: 180, rotateZ: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border-[1px] border-text-muted/30 border-t-accent"
        style={{ transformStyle: 'preserve-3d' }}
      />
      
      {/* Ring 2 - Reverse Rotation */}
      <motion.div 
        animate={{ rotateX: -360, rotateY: 360, rotateZ: -180 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 md:inset-6 rounded-full border-[2px] border-purple-500/20 border-b-purple-500 border-dashed"
        style={{ transformStyle: 'preserve-3d' }}
      />
      
      {/* Ring 3 - Fast Inner Rotation */}
      <motion.div 
        animate={{ rotateX: 180, rotateY: -360, rotateZ: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 md:inset-12 rounded-full border-[1px] border-white/10 border-l-white/60"
        style={{ transformStyle: 'preserve-3d' }}
      />
      
      {/* Center Counter */}
      <div className="relative z-10 flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 shadow-[0_0_40px_rgba(163,230,53,0.15)]">
        <span className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
          {count}
        </span>
        <span className="text-accent text-xs md:text-sm font-bold font-mono uppercase mt-1">%</span>
      </div>
    </div>
  );
};

export function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState('counting'); // 'counting' | 'greeting'
  const [activeLog, setActiveLog] = useState(logLines[0]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    let start = 0;
    const duration = 2400; // Increased duration for more drama
    const interval = 20;
    const step = 100 / (duration / interval);

    // Fast random log line changer
    const logInterval = setInterval(() => {
      setActiveLog(logLines[Math.floor(Math.random() * logLines.length)]);
    }, 150);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        setCount(100);
        clearInterval(timer);
        clearInterval(logInterval);
        setTimeout(() => setPhase('greeting'), 400);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => {
      clearInterval(timer);
      clearInterval(logInterval);
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (phase === 'greeting') {
      const timer = setTimeout(() => {
        onComplete();
      }, 2800); // Plenty of time to see the decryption effect
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <motion.div 
      exit={{ 
        y: "-100vh", 
        opacity: 0,
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
    >
      {/* Technical Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(163,230,53,0.05)_0%,rgba(3,3,3,1)_70%)] z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 z-0" />
      
      {/* Floating Code Particles */}
      <FloatingCodes />

      <AnimatePresence mode="wait">
        {phase === 'counting' && (
          <motion.div
            key="counter"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.2, 
              filter: "blur(20px)", 
              transition: { duration: 0.6, ease: "easeIn" } 
            }}
            className="flex flex-col items-center relative z-10 w-full"
          >
            <GyroscopeLoader count={count} />
            
            {/* Terminal-like loading logs */}
            <div className="mt-8 bg-black/40 border border-white/5 rounded-lg p-4 w-[280px] md:w-[350px] backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-text-muted ml-2 font-mono">SYS_BOOT_SEQ</span>
              </div>
              <div className="font-mono text-xs md:text-sm text-text-muted flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-accent opacity-70">Memory:</span>
                  <span className="text-white">{Math.floor(count * 64)} / 6400 KB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-accent opacity-70">Status:</span>
                  <span className="text-white">SYS_OK</span>
                </div>
                <div className="mt-2 text-[10px] md:text-xs text-purple-400 truncate flex items-center gap-2">
                  <span className="animate-pulse">{'>'}</span> {activeLog}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {phase === 'greeting' && (
          <motion.div
            key="greeting"
            className="flex flex-col items-center justify-center relative z-10 w-full px-4"
          >
            {/* Central glowing line mask effect */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent -translate-y-1/2 drop-shadow-[0_0_15px_rgba(163,230,53,1)] z-20"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="relative z-10"
            >
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-center uppercase flex flex-col md:flex-row gap-2 md:gap-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <ScrambleText text="SACHIN" className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500" />
                <ScrambleText text="SISODIYA" className="text-transparent bg-clip-text bg-gradient-to-b from-accent to-purple-500" />
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-8 md:mt-12 flex flex-col items-center gap-4 z-10 bg-black/30 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md"
            >
              <div className="font-mono text-text-primary text-[10px] md:text-sm tracking-[0.4em] uppercase flex items-center gap-4">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(163,230,53,1)]"></span>
                Access Granted
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(163,230,53,1)]"></span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
