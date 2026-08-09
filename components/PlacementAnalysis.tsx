import React from 'react';
import { ArrowRight, MapPin, Sparkles, Target } from 'lucide-react';

const regions = ['基北區', '桃聯區', '中投區', '彰化區'];

const PlacementAnalysis: React.FC = () => (
  <a
    href="https://tyctw.github.io/spare/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="會考落點分析系統（另開新視窗）"
    className="group relative block h-full w-full overflow-hidden rounded-[2rem] border border-[#c6dcff] bg-[#f3f8ff] p-6 no-underline shadow-[0_14px_32px_rgba(37,99,235,0.10)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(37,99,235,0.18)] sm:p-7"
  >
    <div className="absolute -right-8 -top-14 text-[11rem] font-black leading-none tracking-tighter text-blue-600/[0.055] transition-transform duration-700 group-hover:scale-110">AI</div>
    <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300" />

    <div className="relative flex h-full flex-col justify-between gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
          <Target className="h-6 w-6" />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[10px] font-black tracking-[0.16em] text-blue-600">
          <Sparkles className="h-3.5 w-3.5" /> AI SMART
        </span>
      </div>

      <div>
        <h2 className="mb-2 text-2xl font-black tracking-tight text-[#173d78] transition-colors group-hover:text-blue-600 sm:text-[1.7rem]">會考落點分析系統</h2>
        <p className="max-w-md text-sm font-medium leading-6 text-blue-950/60">結合歷年數據與 AI 智能運算，為你精準預測最佳志願，贏在起跑點。</p>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-blue-200/60 pt-4">
        <div className="min-w-0">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-black tracking-[0.16em] text-blue-700/60"><MapPin className="h-3.5 w-3.5" />支援考區</div>
          <div className="flex flex-wrap gap-1.5">
            {regions.map((region) => <span key={region} className="rounded-lg bg-white/80 px-2 py-1 text-[11px] font-bold text-blue-700">{region}</span>)}
            <span className="rounded-lg bg-blue-100 px-2 py-1 text-[11px] font-bold text-blue-600">+3</span>
          </div>
        </div>
        <span className="flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-3 py-2 text-xs font-black text-white shadow-md shadow-blue-200 transition-transform duration-300 group-hover:translate-x-1">
          立即測驗落點 <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  </a>
);

export default PlacementAnalysis;
