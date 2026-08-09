import React, { useEffect, useState } from 'react';
import { CalendarDays, Menu, Timer, X } from 'lucide-react';
import { TARGET_DATE } from '../constants';

interface ClockHeaderProps { isMenuOpen: boolean; onMenuToggle: () => void; }

const ClockHeader: React.FC<ClockHeaderProps> = ({ isMenuOpen, onMenuToggle }) => {
  const [now, setNow] = useState(new Date());
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => { const update = () => { const current = new Date(); setNow(current); setDaysLeft(Math.max(0, Math.floor((TARGET_DATE.getTime() - current.getTime()) / 86_400_000))); }; update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer); }, []);
  return <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-3 sm:px-8 sm:pt-4"><div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-[#e6dccd] bg-[#fffdfa]/90 px-3 shadow-[0_8px_22px_rgba(65,51,31,0.08)] backdrop-blur-xl sm:px-4"><div className="flex min-w-0 items-center gap-2.5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#193968] text-white shadow-sm"><CalendarDays className="h-[1.125rem] w-[1.125rem]" /></span><div className="min-w-0"><p className="truncate text-sm font-black tracking-tight text-[#193968]">116 會考倒數</p><p className="hidden text-[10px] font-bold tracking-wide text-slate-400 sm:block">2027 / 05 / 15 — 05 / 16</p></div></div><div className="flex items-center gap-2"><div className="hidden items-center gap-2 sm:flex"><div className="rounded-xl bg-[#f4f7fb] px-3 py-1.5 text-right"><p className="text-[9px] font-black tracking-[0.14em] text-slate-400">現在時間</p><time className="text-sm font-black tabular-nums text-slate-700">{now.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}</time></div><div className="flex items-center gap-2 rounded-xl bg-[#fff4df] px-3 py-1.5 text-[#a96916]"><Timer className="h-4 w-4" /><div><p className="text-[9px] font-black tracking-[0.12em] text-amber-700/60">距離會考</p><p className="text-sm font-black tabular-nums">{daysLeft} 天</p></div></div></div><button type="button" onClick={onMenuToggle} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="開啟菜單" className={`flex h-9 items-center gap-2 rounded-xl border px-2.5 text-xs font-black transition ${isMenuOpen ? 'border-[#193968] bg-[#193968] text-white' : 'border-[#dce8f4] bg-[#f4f7fb] text-[#193968] hover:bg-white'}`}><span className="hidden sm:block">選單</span>{isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></div></header>;
};

export default ClockHeader;
