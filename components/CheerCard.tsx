import React, { useState, useEffect } from 'react';
import { MessageCircleHeart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Cheer {
  id: number;
  message: string;
}

const CheerCard: React.FC = () => {
  const [cheers, setCheers] = useState<Cheer[]>([]);
  const [currentCheerIndex, setCurrentCheerIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch('/api/cheers')
      .then(res => res.json())
      .then(data => {
          if (data && data.length > 0) {
              setCheers(data);
          }
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
      if (cheers.length <= 1) return;
      const interval = setInterval(() => {
          setIsAnimating(true);
          setTimeout(() => {
              setCurrentCheerIndex((prev) => (prev + 1) % cheers.length);
              setIsAnimating(false);
          }, 400);
      }, 6000);
      return () => clearInterval(interval);
  }, [cheers.length]);

  const currentCheer = cheers.length > 0 ? cheers[currentCheerIndex] : { message: "116會考加油！我們一定可以的！" };

  return (
    <div className="h-full w-full group">
      <div className="relative rounded-[3rem] p-8 sm:p-12 h-full flex flex-col justify-between overflow-hidden bg-white/60 backdrop-blur-3xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-200/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-150"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 transition-transform duration-1000 group-hover:scale-150"></div>
        
        {/* Subtle Watermark Icon */}
        <div className="absolute top-10 right-10 opacity-[0.03] text-rose-900 transform rotate-12 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110 pointer-events-none">
            <MessageCircleHeart size={240} />
        </div>

        <div className="relative z-10 w-full flex flex-col justify-center flex-grow">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 mb-10 px-5 py-2.5 rounded-full bg-white/80 border border-rose-100/80 text-rose-700 shadow-sm backdrop-blur-md self-start">
            <MessageCircleHeart className="w-4 h-4 text-rose-500" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] mt-0.5">加油牆 CHEER WALL</span>
          </div>

          {/* Quote Content */}
          <div className="relative flex-grow flex items-center mb-10 w-full min-h-[160px]">
             {/* Left accent line */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-1/2 bg-gradient-to-b from-rose-300 to-orange-400 rounded-full opacity-50 group-hover:h-full group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
                        <p className={`text-2xl sm:text-3xl md:text-4xl text-slate-800 font-serif leading-[1.4] tracking-wide italic pl-8 drop-shadow-sm transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              {currentCheer.message}
            </p>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="relative z-10 border-t-2 border-slate-100/60 pt-5 mt-2 flex justify-between items-center">
            <Link
                to="/cheer-wall"
                className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-100 rounded-lg hover:bg-rose-50 hover:border-rose-100 hover:text-rose-700 transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-[1px] overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50/0 via-rose-100/40 to-rose-50/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="tracking-widest">留下你的祝福</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover/btn:translate-x-1" />
            </Link>
            
            <div className="hidden sm:flex gap-2">
               {cheers.slice(0, 5).map((_, idx) => (
                  <div key={idx} className={`h-2 rounded-full transition-all duration-500 ${idx === currentCheerIndex % 5 ? 'bg-rose-400 w-6' : 'bg-slate-200 w-2'}`} />
               ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheerCard;
