import React, { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Clock3, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SCHEDULE_ITEMS } from '../constants';
import { ScheduleItem } from '../types';

const NextEvent: React.FC = () => {
  const [nextEvent, setNextEvent] = useState<ScheduleItem | null>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now();
      const event = SCHEDULE_ITEMS
        .filter((item) => item.dateObj && item.dateObj.getTime() > now)
        .sort((a, b) => a.dateObj!.getTime() - b.dateObj!.getTime())[0];

      if (!event?.dateObj) return;
      const difference = event.dateObj.getTime() - now;
      setNextEvent(event);
      setTimeLeft({
        days: Math.floor(difference / 86_400_000),
        hours: Math.floor((difference / 3_600_000) % 24),
        minutes: Math.floor((difference / 60_000) % 60),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!nextEvent) return null;

  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-[#193968] bg-[#102b54] p-5 text-white shadow-[0_18px_38px_rgba(16,43,84,0.22)] sm:p-6">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute right-5 top-4 text-8xl font-black tracking-tighter text-white/[0.045]">01</div>

      <div className="relative flex h-full flex-col justify-between gap-5">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-white/10 px-3 py-1.5 text-[10px] font-black tracking-[0.18em] text-cyan-100 backdrop-blur-sm"><CalendarDays className="h-3.5 w-3.5" />UPCOMING EVENT</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-300 text-[#102b54] shadow-lg shadow-cyan-400/20"><Timer className="h-4 w-4" /></span>
          </div>
          <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{nextEvent.task}</h2>
          <p className="mt-2 text-sm font-bold tracking-wider text-cyan-100/85">{nextEvent.date}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/10 p-3.5 backdrop-blur-sm">
          <div className="mb-2 flex items-center gap-2 text-[10px] font-black tracking-[0.18em] text-cyan-100/70"><Clock3 className="h-3.5 w-3.5" />TIME REMAINING</div>
          <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-2">
            <div className="border-r border-white/10"><span className="block text-4xl font-black leading-none tabular-nums text-white sm:text-5xl">{timeLeft.days}</span><span className="mt-1 block text-xs font-bold text-cyan-100/70">天</span></div>
            <div><span className="block text-2xl font-black leading-none tabular-nums text-cyan-100">{String(timeLeft.hours).padStart(2, '0')}</span><span className="mt-1 block text-[10px] font-black tracking-wider text-cyan-100/60">HRS</span></div>
            <div><span className="block text-2xl font-black leading-none tabular-nums text-cyan-100">{String(timeLeft.minutes).padStart(2, '0')}</span><span className="mt-1 block text-[10px] font-black tracking-wider text-cyan-100/60">MIN</span></div>
          </div>
        </div>
        <Link to="/important-schedule" className="inline-flex items-center justify-between rounded-xl border border-cyan-200/20 bg-white/10 px-4 py-3 text-sm font-black text-cyan-50 transition hover:bg-cyan-300 hover:text-[#102b54]">
          查看會考重要日程 <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default NextEvent;
