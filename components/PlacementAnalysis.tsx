import React from 'react';
import { Target, MapPin, ChevronRight, Sparkles } from 'lucide-react';

const regions = [
  "基北區", "桃聯區", "中投區", "彰化區", "台南區", "高雄區", "竹苗區"
];

const PlacementAnalysis: React.FC = () => {
  return (
    <a 
      href="https://tyctw.github.io/spare/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="group block relative w-full rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1 cursor-pointer no-underline"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 sm:p-12 gap-8">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>RECOMMENDED</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight group-hover:text-blue-100 transition-colors">
            會考落點分析系統
          </h2>
          
          <p className="text-lg sm:text-xl text-blue-100/80 font-medium mb-8 max-w-2xl mx-auto md:mx-0">
            精準預測，贏在起點。
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <div className="flex items-center gap-1.5 text-blue-200/60 text-sm font-medium mr-2">
              <MapPin className="w-4 h-4" />
              <span>支援考區：</span>
            </div>
            {regions.map((region) => (
              <span 
                key={region}
                className="px-3 py-1 rounded-lg bg-white/10 text-white text-sm font-medium border border-white/5 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                {region}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side: Action Button */}
        <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-auto">
          <div className="relative group/btn w-full md:w-auto flex items-center justify-center gap-3 px-8 py-5 bg-white text-blue-900 rounded-2xl font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 transform group-hover:scale-105 active:scale-95">
            <Target className="w-6 h-6 text-blue-600" />
            <span>立即前往</span>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover/btn:bg-blue-100 transition-colors">
              <ChevronRight className="w-5 h-5 text-blue-600 group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </div>
          <span className="text-blue-200/50 text-xs mt-4 font-medium tracking-wider">COMPREHENSIVE ANALYSIS</span>
        </div>

      </div>
    </a>
  );
};

export default PlacementAnalysis;
