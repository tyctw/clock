import React from 'react';
import { Heart, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiteFooter: React.FC = () => (
  <footer className="mt-8 overflow-hidden rounded-t-[2rem] border border-[#e8decd] bg-[#fffdfa] shadow-[0_-8px_28px_rgba(65,51,31,0.05)]">
    <div className="grid grid-cols-2 gap-5 px-6 py-6 sm:px-10 md:grid-cols-[1.35fr_1fr_1fr] md:py-7">
      <div className="col-span-2 md:col-span-1"><div className="mb-2 flex items-center gap-2 text-[#193968]"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#193968] text-white"><Sparkles className="h-3.5 w-3.5" /></span><span className="font-black tracking-tight">116 會考倒數</span></div><p className="max-w-sm text-xs font-medium leading-5 text-slate-500">陪伴每一位考生掌握時間、整理資訊，也在努力的路上互相加油。</p></div>
      <div><h2 className="mb-2 text-[10px] font-black tracking-[0.16em] text-slate-400">快速連結</h2><div className="flex flex-col items-start gap-1.5 text-xs font-bold text-slate-600"><Link to="/schedule" className="transition hover:text-blue-600">考試日程</Link><Link to="/rules" className="transition hover:text-blue-600">應試規則</Link><Link to="/cheer-wall" className="transition hover:text-rose-500">考生加油牆</Link></div></div>
      <div className="flex flex-col items-end text-right"><h2 className="mb-2 text-[10px] font-black tracking-[0.16em] text-slate-400">聯絡與支持</h2><a href="mailto:tyctw.analyze@gmail.com" className="mb-3 inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 transition hover:text-blue-600"><Mail className="h-3.5 w-3.5 text-blue-500" />tyctw.analyze@gmail.com</a><a href="https://tyctw.github.io/spare/support/" target="_blank" rel="noopener noreferrer" className="group block rounded-xl border border-rose-100 bg-rose-50/70 px-3 py-2 transition hover:-translate-y-0.5 hover:bg-rose-100 hover:shadow-sm"><p className="mb-1 text-[10px] font-medium text-rose-900/55">支持免費升學工具持續維護</p><span className="ml-auto flex w-fit items-center gap-1.5 text-xs font-black text-rose-500 transition group-hover:text-rose-700"><Heart className="h-3.5 w-3.5 fill-current" />小額贊助</span></a></div>
    </div>
    <div className="flex flex-col gap-1 border-t border-[#eee5d9] bg-[#fcfaf6] px-6 py-3 text-center text-[10px] font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-10"><span>© TYCTW Analyze</span><span>一起朝目標前進</span></div>
  </footer>
);

export default SiteFooter;
