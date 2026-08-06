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
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      setTimeLeft(calculateTimeLeft());
      const now = Date.now();
      const delay = 1000 - (now % 1000);
      timeoutId = setTimeout(tick, delay);
    };

    const now = Date.now();
    const delay = 1000 - (now % 1000);
    timeoutId = setTimeout(tick, delay);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!mounted) return null;

  const timerBlocks = [
    { value: timeLeft.days, label: "天 DAYS", color: "from-blue-500 to-indigo-600" },
    { value: timeLeft.hours, label: "時 HOURS", color: "from-indigo-500 to-violet-600" },
    { value: timeLeft.minutes, label: "分 MINUTES", color: "from-violet-500 to-purple-600" },
    { value: timeLeft.seconds, label: "秒 SECONDS", color: "from-purple-500 to-pink-600" }
  ];

  return (
    <div className="w-full flex justify-center py-0 relative z-10">
      <div className="sr-only" aria-live="polite">
        距離會考還有 {timeLeft.days} 天 {timeLeft.hours} 小時 {timeLeft.minutes} 分鐘 {timeLeft.seconds} 秒
      </div>
      
      {/* Main Glass Container */}
      <div className="relative group w-full max-w-5xl mx-4 sm:mx-auto" aria-hidden="true">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#102b59] blur-2xl opacity-20 transition-opacity duration-1000 rounded-[2rem]"></div>
        
        <div className="relative flex flex-col items-center py-9 px-5 sm:py-10 sm:px-7 bg-[#183468] border border-white/10 shadow-[0_18px_35px_rgba(16,43,89,0.22)] rounded-[2rem] overflow-hidden transition-transform duration-500 hover:-translate-y-1">
          
          {/* Inner Light Glare */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70"></div>
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#ffcb4d]/15"></div>

          <div className="mb-6 flex w-full items-center justify-between border-b border-white/15 pb-4 text-[11px] font-black tracking-wider text-white z-10"><span>CAP EXAM COMPASS</span><span className="flex items-center gap-1.5 text-[#82ebb2]"><span className="h-2 w-2 rounded-full bg-[#82ebb2]"></span>會考倒數中</span></div>
          <div className="grid grid-cols-2 sm:flex sm:flex-nowrap items-center justify-center gap-x-4 gap-y-6 sm:gap-3 md:gap-5 w-full z-10">
            {timerBlocks.map((block, index) => (
              <React.Fragment key={block.label}>
                <div className="flex flex-col items-center min-w-[62px] sm:min-w-[74px] lg:min-w-[86px] group/block">
                  <div className="relative flex items-center justify-center overflow-hidden">
                     {/* The Number */}
                     <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tabular-nums tracking-tighter text-white group-hover/block:-translate-y-1 transition-transform duration-500">
                       {block.value.toString().padStart(2, '0')}
                     </span>
                  </div>
                  {/* Label */}
                  <div className="mt-3 flex flex-col items-center gap-2">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#c5d3ed] uppercase">
                      {block.label}
                    </span>
                    <div className={`w-3 h-1 rounded-full bg-gradient-to-r ${block.color} opacity-50 group-hover/block:w-8 group-hover/block:opacity-100 transition-all duration-500`}></div>
                  </div>
                </div>

                {/* Separator Colons (hidden on mobile, visible on sm+) */}
                {index < timerBlocks.length - 1 && (
                  <div className="hidden sm:flex flex-col gap-3 lg:gap-4 pb-7 text-white/40">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
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
