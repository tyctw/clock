import React from 'react';
import { ArrowUpRight, Heart, Sparkles, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountdownTimerV2 from './CountdownTimerV2';

const HeroV2: React.FC = () => (
  <section className="relative mb-12 mt-4 overflow-hidden rounded-[2.5rem] border border-[#e8decd] bg-[#fffdfa] px-6 py-8 text-[#1d3d6d] shadow-[0_20px_48px_rgba(65,51,31,0.12)] sm:mb-16 sm:px-10 sm:py-11 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:px-12">
    <div className="absolute -left-24 -top-28 h-80 w-80 rounded-full bg-blue-100/80 blur-3xl" /><div className="absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl" />
    <div className="relative flex flex-col justify-center">
      <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[10px] font-black tracking-[0.18em] text-blue-600"><Sparkles className="h-3.5 w-3.5 text-amber-500" />2027/05/15 ~ 05/16</span>
      <p className="mb-2 text-sm font-black tracking-[0.16em] text-[#dc714c]">國中教育會考倒數</p>
      <h1 className="text-4xl font-black tracking-tight sm:text-6xl"><span className="block text-[#e4a63b]">116年</span>國中教育會考</h1>
      <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-slate-500 sm:text-base">準備 116 年國中教育會考，掌握時間、安排複習，讓每天的努力更靠近目標。</p>
      <div className="mt-7 grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:gap-3"><Link to="/cheer-wall" className="group inline-flex min-w-0 items-center gap-2 rounded-xl bg-[#fff0ed] px-3 py-3 text-sm font-black text-[#a54436] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:gap-3 sm:px-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-rose-200 text-rose-600"><Heart className="h-4 w-4 fill-current" /></span><span className="min-w-0 truncate">會考加油牆<small className="block truncate text-[10px] font-bold text-rose-400">看看大家說什麼</small></span><ArrowUpRight className="h-4 w-4 shrink-0" /></Link><a href="https://tyctw.github.io/spare/" target="_blank" rel="noopener noreferrer" className="group inline-flex min-w-0 items-center gap-2 rounded-xl bg-[#1d5da6] px-3 py-3 text-sm font-black text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-[#174d8a] sm:gap-3 sm:px-4"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white"><Target className="h-4 w-4" /></span><span className="min-w-0 truncate">會考落點分析<small className="block truncate text-[10px] font-bold text-blue-100">預測最佳高中</small></span><ArrowUpRight className="h-4 w-4 shrink-0" /></a></div>
    </div>
    <div className="relative mt-9 lg:mt-0 lg:flex lg:items-center"><div className="w-full rounded-[2rem] border border-[#dbe8f5] bg-white/85 p-5 shadow-[0_14px_32px_rgba(29,61,109,0.12)] backdrop-blur-sm sm:p-7"><div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4"><span className="text-[10px] font-black tracking-[0.2em] text-blue-500">CAP EXAM COMPASS</span><span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600"><i className="h-2 w-2 rounded-full bg-amber-400" />會考倒數中</span></div><CountdownTimerV2 /></div></div>
  </section>
);

export default HeroV2;
