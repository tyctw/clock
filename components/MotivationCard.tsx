import React, { useState, useEffect } from 'react';
import { motivationQuotes } from '../quotes';

const MotivationCard: React.FC = () => {
  const [quote, setQuote] = useState<string>("");

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
    const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
    setQuote(motivationQuotes[randomIndex]);
  };

  return (
    <div className="h-full w-full">
      <div className="relative rounded-3xl p-8 sm:p-10 h-full flex flex-col justify-center items-center text-center overflow-hidden group hover:shadow-xl transition-all duration-500 border border-amber-200/60 bg-amber-50/60 backdrop-blur-md">
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 p-8 opacity-10 text-amber-600">
          <svg className="w-40 h-40 transform rotate-12 translate-x-10 -translate-y-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 13.134 11.3333 11.1667 16 11V3C10 3 5 7.47715 5 13V21H14.017ZM24.017 21L24.017 18C24.017 16.8954 23.1216 16 22.017 16H19C19 13.134 21.3333 11.1667 26 11V3C20 3 15 7.47715 15 13V21H24.017Z" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-amber-100/20 to-transparent"></div>

        <div className="relative z-10 w-full flex flex-col items-center flex-grow justify-center">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-white/60 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Daily Inspiration
          </div>

          <div className="flex-grow flex items-center justify-center mb-8 w-full">
            <p className="text-xl sm:text-2xl md:text-3xl text-slate-800 font-serif leading-relaxed italic animate-fade-in relative px-4 sm:px-8 max-w-2xl drop-shadow-sm">
              {quote || "正在為你尋找力量..."}
            </p>
          </div>

          <button
            onClick={handleRandomQuote}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-slate-500/30 overflow-hidden"
          >
            <span className="relative flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:rotate-180 duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              抽取今日籤詩
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MotivationCard;