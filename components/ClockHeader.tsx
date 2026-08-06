import React, { useState, useEffect } from 'react';
import { TARGET_DATE } from '../constants';

const ClockHeader: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [daysLeft, setDaysLeft] = useState<number>(0);

  useEffect(() => {
    setTime(new Date());
    
    const calculateDays = () => {
        const diff = +TARGET_DATE - +new Date();
        return diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
    };
    setDaysLeft(calculateDays());

    const timer = setInterval(() => {
        setTime(new Date());
        setDaysLeft(calculateDays());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  return (
    <div className="fixed top-4 left-4 sm:top-6 sm:left-8 z-40 animate-fade-in select-none">
       <div className="flex items-center gap-3 p-1.5 pr-5 rounded-2xl bg-[#fffdfa]/95 backdrop-blur-xl border border-[#e7ddce] shadow-[0_8px_20px_rgba(65,51,31,0.08)] transition-all hover:shadow-lg group">
          
          {/* Circular Badge for Days Left */}
          <div className="flex flex-col items-center justify-center w-12 h-12 rounded-xl bg-[#102b59] text-white shadow-md group-hover:scale-105 transition-transform duration-300">
             <span className="text-[10px] font-bold uppercase leading-none opacity-80">剩餘</span>
             <span className="text-lg font-black leading-none tracking-tighter">{daysLeft}</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-[#10264e] font-mono tracking-tighter tabular-nums leading-none">
                    {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
                </h2>
                <span className="text-xs font-bold text-slate-400 animate-pulse">:</span>
                <span className="text-sm font-bold text-slate-500 font-mono tabular-nums">
                    {time.getSeconds().toString().padStart(2, '0')}
                </span>
            </div>
            <p className="text-[10px] sm:text-xs text-[#687891] font-bold uppercase tracking-wider">
                {time.toLocaleDateString('zh-TW', { month: 'short', day: 'numeric', weekday: 'short' })}
            </p>
          </div>
       </div>
    </div>
  );
};

export default ClockHeader;
