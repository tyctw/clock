import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';
import { TARGET_DATE } from '../constants';

const CountdownTimer: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +TARGET_DATE - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const timerBlocks = [
    { value: timeLeft.days, label: "DAYS", dot: "bg-blue-500", glow: "bg-blue-300" },
    { value: timeLeft.hours, label: "HOURS", dot: "bg-indigo-500", glow: "bg-indigo-300" },
    { value: timeLeft.minutes, label: "MINUTES", dot: "bg-violet-500", glow: "bg-violet-300" },
    { value: timeLeft.seconds, label: "SECONDS", dot: "bg-emerald-500", glow: "bg-emerald-300" }
  ];

  return (
    <div className="w-full flex justify-center py-4 sm:py-8 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl px-2 sm:px-4">
        {timerBlocks.map((block, index) => (
          <div key={block.label} className="relative group w-full" style={{ animationDelay: `${index * 100}ms` }}>
            {/* Soft backdrop glow that intensifies on hover */}
            <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-3xl ${block.glow}`}></div>
            
            {/* Main Card Body */}
            <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 px-4 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] overflow-hidden">
               
               {/* Inner top highlight for 3D glass effect */}
               <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>
               <div className="absolute top-1 inset-x-0 h-[40%] bg-gradient-to-b from-white/60 to-transparent pointer-events-none rounded-t-[2.5rem]"></div>
               
               {/* Glowing dot indicator */}
               <div className="absolute top-6 right-6 flex items-center justify-center">
                  <div className={`absolute w-3 h-3 rounded-full ${block.glow} blur-sm opacity-80 animate-pulse`}></div>
                  <div className={`relative w-2 h-2 rounded-full ${block.dot} shadow-[0_0_8px_currentColor] opacity-90`}></div>
               </div>

               {/* Large Numbers */}
               <div className="relative z-10 flex items-center justify-center mt-2">
                 <span className="text-6xl sm:text-7xl md:text-8xl font-black tabular-nums tracking-tighter text-slate-800 drop-shadow-sm transition-transform duration-300 group-hover:scale-105">
                   {block.value.toString().padStart(2, '0')}
                 </span>
               </div>

               {/* Sub-label Container */}
               <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2 z-10">
                 <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.25em] uppercase text-slate-500/90 group-hover:text-slate-700 transition-colors duration-300">
                   {block.label}
                 </span>
                 <div className={`w-4 h-0.5 rounded-full ${block.dot} opacity-40 group-hover:w-10 group-hover:opacity-100 transition-all duration-500`}></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
