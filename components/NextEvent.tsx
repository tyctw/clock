import React, { useState, useEffect } from 'react';
import { SCHEDULE_ITEMS } from '../constants';
import { ScheduleItem } from '../types';

const NextEvent: React.FC = () => {
  const [nextEvent, setNextEvent] = useState<ScheduleItem | null>(null);
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number} | null>(null);

  useEffect(() => {
    const calculateNextEvent = () => {
      const now = new Date();
      const futureEvents = SCHEDULE_ITEMS.filter(item => 
        item.dateObj && item.dateObj.getTime() > now.getTime()
      ).sort((a, b) => (a.dateObj!.getTime() - b.dateObj!.getTime()));

      if (futureEvents.length > 0) {
        const event = futureEvents[0];
        setNextEvent(event);
        
        const diff = event.dateObj!.getTime() - now.getTime();
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
        });
      } else {
        setNextEvent(null);
        setTimeLeft(null);
      }
    };

    calculateNextEvent();
    const timer = setInterval(calculateNextEvent, 1000); 
    return () => clearInterval(timer);
  }, []);

  if (!nextEvent || !timeLeft) return null;

  return (
    <div className="h-full w-full">
      <div className="rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-emerald-200/60 bg-emerald-50/60 backdrop-blur-md">
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/40 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100/40 rounded-full blur-2xl transform -translate-x-5 translate-y-5"></div>

        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 rounded-full bg-emerald-100 border border-emerald-200 items-center justify-center text-emerald-600 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Upcoming Event</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight mb-2 tracking-tight">
                {nextEvent.task}
            </h3>
            <p className="text-emerald-800/70 font-medium">{nextEvent.date}</p>
        </div>

        <div className="mt-8 pt-6 border-t border-emerald-200/50 flex items-center justify-between relative z-10">
            <div className="flex flex-col">
                <span className="text-[10px] text-emerald-600/80 uppercase font-bold mb-1 tracking-wider">Time Remaining</span>
                <div className="flex items-baseline gap-1">
                     <span className="text-4xl font-black text-emerald-600 tabular-nums">{timeLeft.days}</span>
                     <span className="text-sm font-bold text-emerald-700/60">天</span>
                </div>
            </div>
             <div className="flex items-center gap-3 bg-white/40 rounded-xl px-4 py-2 shadow-sm border border-white/50 backdrop-blur-sm">
                <div className="text-center">
                    <span className="block text-xl font-bold text-emerald-900 tabular-nums leading-none">{timeLeft.hours}</span>
                    <span className="text-[10px] text-emerald-600/70 font-bold uppercase">Hrs</span>
                </div>
                <div className="w-px h-6 bg-emerald-200/50"></div>
                <div className="text-center">
                    <span className="block text-xl font-bold text-emerald-900 tabular-nums leading-none">{timeLeft.minutes}</span>
                    <span className="text-[10px] text-emerald-600/70 font-bold uppercase">Min</span>
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;