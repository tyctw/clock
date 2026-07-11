import React from 'react';
import { Target, MapPin, Sparkles, TrendingUp } from 'lucide-react';

const regions = [
  "基北區", "桃聯區", "中投區", "彰化區", "台南區", "高雄區", "竹苗區"
];

const PlacementAnalysis: React.FC = () => {
  return (
    <a 
      href="https://tyctw.github.io/spare/" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="會考落點分析系統 (在新分頁開啟)"
      className="group block relative w-full h-full rounded-[2rem] lg:rounded-[2.5rem] bg-white border border-blue-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] cursor-pointer no-underline"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[150%] h-[150%] bg-gradient-to-bl from-blue-50 via-white to-white opacity-80 pointer-events-none -translate-y-1/2 translate-x-1/4 group-hover:rotate-12 transition-transform duration-1000"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-50/50 rounded-full blur-[60px] pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col justify-between p-6 lg:p-10 h-full gap-6">
        
        {/* Top Content */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
               <Target className="w-7 h-7 text-white" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-extrabold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>智能預測</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-800 mb-3 tracking-tight group-hover:text-blue-600 transition-colors leading-tight">
            會考落點分析系統
          </h2>
          
          <p className="text-base text-slate-500 font-medium mb-6 leading-relaxed max-w-sm">
            結合歷年數據與AI智能運算，為你精準預測最佳志願，贏在起跑點。
          </p>

          {/* Region tags */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>支援考區</span>
            </div>
            <div className="flex flex-wrap gap-2">
               {regions.slice(0, 4).map((region) => (
                 <span 
                   key={region}
                   className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-600 text-xs font-bold border border-slate-100 group-hover:border-blue-100 group-hover:bg-blue-50/50 transition-colors"
                 >
                   {region}
                 </span>
               ))}
               {regions.length > 4 && (
                   <span className="px-3 py-1.5 rounded-xl bg-slate-50 text-slate-400 text-xs font-bold border border-slate-100">
                       +{regions.length - 4}
                   </span>
               )}
            </div>
          </div>
        </div>

        {/* Bottom Action Button */}
        <div className="mt-8 lg:mt-auto pt-2 flex items-center gap-3">
          <span className="text-sm font-bold text-blue-600 tracking-wide">立即測驗落點</span>
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors duration-300">
            <TrendingUp className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

      </div>
    </a>
  );
};

export default PlacementAnalysis;
