import React, { useState, useEffect } from 'react';
import { motivationQuotes } from '../quotes';
import { Sparkles, RefreshCw, Quote } from 'lucide-react';

const MotivationCard: React.FC = () => {
  const [quote, setQuote] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dayString = startOfDay.toISOString().split('T')[0];
    
    let hash = 0;
    for (let i = 0; i < dayString.length; i++) {
      hash = ((hash << 5) - hash) + dayString.charCodeAt(i);
      hash |= 0;
    }
    
    const index = Math.abs(hash) % motivationQuotes.length;
    setQuote(motivationQuotes[index]);
  }, []);

  const handleRandomQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
        setQuote(motivationQuotes[randomIndex]);
        setIsAnimating(false);
    }, 400); // Wait for fade out
  };

  return (
    <div className="h-full w-full group">
      <div className="relative rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 h-full flex flex-col justify-between overflow-hidden bg-white/70 backdrop-blur-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 transition-transform duration-1000 group-hover:scale-150"></div>
        
        {/* Subtle Watermark Icon */}
        <div className="absolute top-10 right-10 opacity-[0.03] text-amber-900 transform rotate-12 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110 pointer-events-none">
            <Quote size={180} />
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center flex-grow">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-amber-50/80 border border-amber-100/80 text-amber-700 shadow-sm backdrop-blur-md self-start">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest mt-0.5">Daily Inspiration</span>
          </div>

          {/* Quote Content */}
          <div className="relative flex-grow flex items-center mb-10 w-full min-h-[120px]">
             {/* Left accent line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-gradient-to-b from-amber-300 to-orange-400 rounded-full opacity-50 group-hover:h-full group-hover:opacity-100 transition-all duration-700"></div>
            
            <p className={`text-2xl sm:text-3xl md:text-4xl text-slate-800 font-serif leading-snug tracking-wide italic pl-8 drop-shadow-sm transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {quote || "正在為你尋找力量..."}
            </p>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="relative z-10 border-t border-slate-200/60 pt-6">
            <button
                onClick={handleRandomQuote}
                className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200/80 rounded-2xl hover:bg-slate-50 hover:text-amber-600 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50/0 via-amber-100/30 to-amber-50/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                <RefreshCw className={`w-4 h-4 transition-transform duration-500 ${isAnimating ? 'animate-spin' : 'group-hover/btn:rotate-180'}`} />
                <span className="tracking-widest">抽取今日籤詩</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default MotivationCard;
