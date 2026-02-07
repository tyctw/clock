import React from 'react';

const AdBanner: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <a 
        href="https://tyctw.github.io/spare/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-r from-white to-amber-50 backdrop-blur-xl transition-all duration-300 shadow-lg hover:shadow-amber-500/20 hover:border-amber-300 no-underline"
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-amber-200/20 to-transparent -translate-x-[200%] animate-shimmer"></div>
        
        <div className="relative z-10 p-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left space-y-2">
             <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  RECOMMENDED
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-wide group-hover:text-amber-600 transition-colors">
                  會考落點分析系統
                </h3>
             </div>
             <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
               精準預測，贏在起點。支援：<span className="text-amber-600 font-bold border-b border-amber-200 pb-0.5">桃聯區、中投區、基北區、彰化區、台南區、高雄區</span>
             </p>
          </div>
          
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-amber-500 bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg">
              立即前往
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AdBanner;