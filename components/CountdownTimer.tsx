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

  // Configuration to match the visual style of the bento grid components below
  const timerBlocks = [
    { 
      value: timeLeft.days, 
      label: "DAYS", 
      // Main Blue Theme
      containerClass: "border-blue-200/60 bg-blue-50/60",
      textClass: "text-blue-600",
      blobClass: "bg-blue-200",
      labelDotClass: "bg-blue-500"
    },
    { 
      value: timeLeft.hours, 
      label: "HOURS", 
      // Matches ImportantSchedule (Violet)
      containerClass: "border-violet-200/60 bg-violet-50/60",
      textClass: "text-violet-600",
      blobClass: "bg-violet-200",
      labelDotClass: "bg-violet-500"
    },
    { 
      value: timeLeft.minutes, 
      label: "MINUTES", 
      // Matches ExamSchedule (Sky)
      containerClass: "border-sky-200/60 bg-sky-50/60",
      textClass: "text-sky-600",
      blobClass: "bg-sky-200",
      labelDotClass: "bg-sky-500"
    },
    { 
      value: timeLeft.seconds, 
      label: "SECONDS", 
      // Matches NextEvent (Emerald) - Represents 'Now'
      containerClass: "border-emerald-200/60 bg-emerald-50/60",
      textClass: "text-emerald-600",
      blobClass: "bg-emerald-200",
      labelDotClass: "bg-emerald-500"
    }
  ];

  return (
    <div className="w-full flex justify-center py-4 sm:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {timerBlocks.map((block, index) => (
              <div 
                key={block.label}
                className={`
                  relative group flex flex-col items-center justify-center
                  w-36 h-36 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-44 lg:h-44
                  rounded-3xl backdrop-blur-md transition-all duration-500
                  border shadow-sm
                  hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
                  overflow-hidden
                  ${block.containerClass}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                 {/* Decorative background blobs to match card style */}
                 <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity ${block.blobClass}`}></div>
                 <div className={`absolute -bottom-12 -left-12 w-24 h-24 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity ${block.blobClass}`}></div>

                 {/* Content */}
                 <div className="relative z-10 flex flex-col items-center">
                    <span className="text-5xl sm:text-6xl font-black text-slate-800 tracking-tight tabular-nums leading-none mb-2 group-hover:scale-110 transition-transform duration-300">
                      {block.value.toString().padStart(2, '0')}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${block.labelDotClass}`}></div>
                      <span className={`text-xs font-bold tracking-[0.2em] uppercase ${block.textClass} opacity-80`}>
                        {block.label}
                      </span>
                      <div className={`w-1.5 h-1.5 rounded-full ${block.labelDotClass}`}></div>
                    </div>
                 </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default CountdownTimer;