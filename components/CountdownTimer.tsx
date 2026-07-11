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
    { value: timeLeft.days, label: "天 DAYS", color: "from-blue-500 to-indigo-600" },
    { value: timeLeft.hours, label: "時 HOURS", color: "from-indigo-500 to-violet-600" },
    { value: timeLeft.minutes, label: "分 MINUTES", color: "from-violet-500 to-purple-600" },
    { value: timeLeft.seconds, label: "秒 SECONDS", color: "from-purple-500 to-pink-600" }
  ];

  return (
    <div className="w-full flex justify-center py-6 sm:py-10 relative z-10">
      <div className="sr-only" aria-live="polite">
        距離會考還有 {timeLeft.days} 天 {timeLeft.hours} 小時 {timeLeft.minutes} 分鐘 {timeLeft.seconds} 秒
      </div>
      
      {/* Main Glass Container */}
      <div className="relative group w-full max-w-5xl mx-4 sm:mx-auto" aria-hidden="true">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000 rounded-[3rem]"></div>
        
        <div className="relative flex flex-col items-center py-10 px-6 sm:py-14 sm:px-12 bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_40px_rgb(0,0,0,0.06)] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden transition-transform duration-500 hover:shadow-[0_16px_60px_rgb(0,0,0,0.1)]">
          
          {/* Inner Light Glare */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-100"></div>
          <div className="absolute top-1 inset-x-0 h-32 bg-gradient-to-b from-white/80 to-transparent pointer-events-none rounded-t-[3rem]"></div>

          <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-6 sm:gap-4 md:gap-8 lg:gap-12 w-full z-10">
            {timerBlocks.map((block, index) => (
              <React.Fragment key={block.label}>
                <div className="flex flex-col items-center min-w-[80px] sm:min-w-[100px] lg:min-w-[140px] group/block">
                  <div className="relative flex items-center justify-center overflow-hidden">
                     {/* The Number */}
                     <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tabular-nums tracking-tighter text-slate-800 drop-shadow-sm group-hover/block:-translate-y-1 transition-transform duration-500">
                       {block.value.toString().padStart(2, '0')}
                     </span>
                  </div>
                  {/* Label */}
                  <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-slate-500/80 uppercase">
                      {block.label}
                    </span>
                    <div className={`w-3 h-1 rounded-full bg-gradient-to-r ${block.color} opacity-50 group-hover/block:w-8 group-hover/block:opacity-100 transition-all duration-500`}></div>
                  </div>
                </div>

                {/* Separator Colons (hidden on mobile, visible on sm+) */}
                {index < timerBlocks.length - 1 && (
                  <div className="hidden sm:flex flex-col gap-3 lg:gap-5 pb-8 sm:pb-12 text-slate-300">
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-slate-200/80 shadow-sm"></div>
                    <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-slate-200/80 shadow-sm"></div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
