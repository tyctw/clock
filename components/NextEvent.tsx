import React, { useState, useEffect } from 'react';
import { SCHEDULE_ITEMS } from '../constants';
import { ScheduleItem } from '../types';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

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
    <div className="h-full w-full group">
      <div className="relative rounded-[3rem] p-8 sm:p-10 h-full flex flex-col justify-between overflow-hidden bg-white/60 backdrop-blur-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
        
        {/* Background Blur Accents */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/30 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3 transition-transform duration-700 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3 transition-transform duration-700 group-hover:scale-150"></div>

        <div className="relative z-10 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-sm backdrop-blur-md">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] mt-0.5">Upcoming Event</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 leading-[1.1] mb-3 tracking-tighter group-hover:text-emerald-700 transition-colors duration-300">
                {nextEvent.task}
            </h3>
            <p className="text-emerald-600/80 text-sm font-bold tracking-widest flex items-center gap-2">
                {nextEvent.date}
            </p>
        </div>

        <div className="mt-auto pt-6 border-t-2 border-slate-100/60 relative z-10">
            <div className="flex items-center gap-2 mb-4">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-[10px] text-slate-400 uppercase font-bold tracking-[0.2em]">Time Remaining</span>
            </div>
            
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="flex items-baseline gap-2">
                     <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-800 tabular-nums tracking-tighter drop-shadow-sm group-hover:text-emerald-600 transition-colors duration-300">{timeLeft.days}</span>
                     <span className="text-lg font-bold text-slate-400">天</span>
                </div>
                 
                 <div className="flex items-center gap-4 bg-white/80 rounded-2xl px-5 py-3 border border-slate-100 shadow-sm backdrop-blur-md">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-slate-700 tabular-nums leading-none">{timeLeft.hours}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-[0.2em]">Hrs</span>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black text-slate-700 tabular-nums leading-none">{timeLeft.minutes}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-[0.2em]">Min</span>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NextEvent;