import React from 'react';
import { ArrowRight, BookOpenCheck, Compass, Sparkles } from 'lucide-react';

const topics = ['各科準備方向', '考前心態調適', '重要考場規定'];

const OfficialGuide: React.FC = () => (
  <a
    href="https://tyctw.github.io/official/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="會考準備方式與注意事項（另開新視窗）"
    className="group relative block h-full w-full overflow-hidden rounded-[2rem] border border-[#bfe6d6] bg-[#effbf6] p-6 no-underline shadow-[0_14px_32px_rgba(16,185,129,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(16,185,129,0.18)] sm:p-7"
  >
    <div className="absolute -right-8 -top-14 text-[10rem] font-black leading-none tracking-tighter text-emerald-600/[0.055] transition-transform duration-700 group-hover:scale-110">GO</div>
    <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-emerald-600 via-teal-400 to-lime-300" />

    <div className="relative flex h-full flex-col justify-between gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-200 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
          <BookOpenCheck className="h-6 w-6" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-white/80 px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-emerald-700">
          <Sparkles className="h-3.5 w-3.5" /> OFFICIAL GUIDE
        </span>
      </div>

      <div>
        <h2 className="mb-2 text-2xl font-black tracking-tight text-[#14543e] transition-colors group-hover:text-emerald-600 sm:text-[1.7rem]">會考準備方式與注意事項</h2>
        <p className="max-w-md text-sm font-medium leading-6 text-emerald-950/60">官方統整攻略，掌握各科準備秘訣與考場須知。</p>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-emerald-200/70 pt-4">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black tracking-[0.16em] text-emerald-700/60"><Compass className="h-3.5 w-3.5" />內容包含</div>
          <div className="flex flex-wrap gap-1.5">
            {topics.map((topic) => <span key={topic} className="rounded-lg bg-white/80 px-2 py-1 text-[11px] font-bold text-emerald-700">{topic}</span>)}
          </div>
        </div>
        <span className="flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-xs font-black text-white shadow-md shadow-emerald-200 transition-transform duration-300 group-hover:translate-x-1">
          立即閱讀 <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </a>
);

export default OfficialGuide;
