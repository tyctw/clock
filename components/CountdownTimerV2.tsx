import React, { useEffect, useState } from 'react';
import { TARGET_DATE } from '../constants';

type Remaining = { days: number; hours: number; minutes: number; seconds: number };
const getRemaining = (): Remaining => {
  const diff = Math.max(TARGET_DATE.getTime() - Date.now(), 0);
  return { days: Math.floor(diff / 86_400_000), hours: Math.floor((diff / 3_600_000) % 24), minutes: Math.floor((diff / 60_000) % 60), seconds: Math.floor((diff / 1_000) % 60) };
};

const CountdownTimerV2: React.FC = () => {
  const [time, setTime] = useState(getRemaining());
  useEffect(() => { const timer = window.setInterval(() => setTime(getRemaining()), 1000); return () => window.clearInterval(timer); }, []);
  const blocks = [{ value: time.days, label: '天 DAYS' }, { value: time.hours, label: '時 HOURS' }, { value: time.minutes, label: '分 MINUTES' }, { value: time.seconds, label: '秒 SECONDS' }];
  return <div className="grid grid-cols-2 gap-3">{blocks.map((block, index) => <div key={block.label} className={`rounded-2xl border p-4 text-center sm:p-5 ${index === 0 ? 'border-amber-200 bg-amber-50' : 'border-slate-100 bg-slate-50/80'}`}><span className={`block text-4xl font-black leading-none tabular-nums sm:text-5xl ${index === 0 ? 'text-amber-500' : 'text-[#1d3d6d]'}`}>{String(block.value).padStart(index === 0 ? 1 : 2, '0')}</span><span className="mt-2 block text-[10px] font-black tracking-[0.14em] text-slate-400">{block.label}</span></div>)}</div>;
};

export default CountdownTimerV2;
