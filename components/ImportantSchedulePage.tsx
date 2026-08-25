import React, { useEffect } from 'react';
import { ArrowLeft, CalendarDays, CheckCircle2, ChevronRight, Clock3, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SCHEDULE_ITEMS } from '../constants';

const ImportantSchedulePage: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="animate-fade-in mx-auto flex w-full max-w-5xl flex-col pb-8">
      <Link to="/" className="mb-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-slate-500 transition hover:text-violet-600"><ArrowLeft className="h-4 w-4" />返回倒數首頁</Link>
      <section className="relative overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 px-6 py-9 shadow-[0_18px_45px_rgba(109,40,217,0.10)] sm:px-10 sm:py-12">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-300/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-fuchsia-200/35 blur-3xl" />
        <div className="relative"><div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-xs font-black tracking-[0.14em] text-violet-600"><Sparkles className="h-3.5 w-3.5" />IMPORTANT SCHEDULE</div><h1 className="max-w-2xl text-3xl font-black tracking-tight text-slate-800 sm:text-5xl">116 會考重要日程</h1><p className="mt-4 max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base">從報名、考試到免試入學，將每個重要階段整理在同一頁，讓你能提早規劃、安心準備。</p><div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-violet-200"><CalendarDays className="h-4 w-4" />會考日期：116 年 5 月 15 日至 16 日</div></div>
      </section>

      <section className="mt-8 rounded-[2rem] border border-[#eadfce] bg-[#fffdfa] p-6 shadow-[0_14px_35px_rgba(65,51,31,0.07)] sm:p-9">
        <div className="mb-8 flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600"><Clock3 className="h-5 w-5" /></span><div><h2 className="text-2xl font-black tracking-tight text-slate-800">重要時程總覽</h2><p className="mt-1 text-sm font-medium text-slate-500">實際日期請以 116 學年度國中教育會考簡章為準。</p></div></div>
        <ol className="relative space-y-5 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-violet-200 sm:before:left-6">
          {SCHEDULE_ITEMS.map((item, index) => <li key={item.task} className="relative flex gap-4 sm:gap-5"><span className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border-4 border-[#fffdfa] text-xs font-black shadow-sm sm:h-12 sm:w-12 ${item.isHighlight ? 'bg-violet-600 text-white shadow-violet-200' : 'bg-violet-100 text-violet-600'}`}>{item.isHighlight ? <CheckCircle2 className="h-5 w-5" /> : String(index + 1).padStart(2, '0')}</span><article className={`min-w-0 flex-grow rounded-2xl border p-4 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:p-5 ${item.isHighlight ? 'border-violet-200 bg-violet-50/70' : 'border-slate-100 bg-slate-50/70'}`}><div><h3 className={`font-black ${item.isHighlight ? 'text-violet-800' : 'text-slate-800'}`}>{item.task}</h3>{item.note && <p className="mt-1 text-xs font-medium text-slate-500">{item.note}</p>}</div><div className={`mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-black sm:mt-0 ${item.isHighlight ? 'bg-violet-600 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200'}`}><CalendarDays className="h-3.5 w-3.5" />{item.isHighlight ? item.date : '等官方公布後更新'}</div></article></li>)}
        </ol>
      </section>

      <Link to="/schedule" className="group mt-7 flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 text-sm font-black text-blue-800 transition hover:border-blue-200 hover:bg-blue-50"><span>查看詳細考試作息與應試提醒</span><ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></Link>
    </div>
  );
};

export default ImportantSchedulePage;
