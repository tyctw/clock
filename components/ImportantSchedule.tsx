import React from 'react';
import { SCHEDULE_ITEMS } from '../constants';
import { CalendarDays, ArrowRight } from 'lucide-react';

const ImportantSchedule: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex items-center gap-3 mb-6 px-2">
        <div className="h-6 w-1.5 bg-violet-500 rounded-full"></div>
        <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">Important Dates</h2>
      </div>

      <div className="flex-grow rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-fuchsia-200/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>
        
        <div className="absolute top-6 right-8 opacity-[0.03] text-violet-900 transform rotate-12 transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110 pointer-events-none">
            <CalendarDays size={120} />
        </div>

        <ul className="relative ml-2 space-y-6 z-10 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-gradient-to-b before:from-violet-300 before:via-violet-200 before:to-transparent">
          {SCHEDULE_ITEMS.map((item, index) => (
            <li key={index} className="relative pl-10 group/item">
              
              {/* Timeline Dot */}
              <span className={`absolute left-0 top-1.5 h-6 w-6 rounded-full border-[3px] bg-white flex items-center justify-center transition-all duration-500
                ${item.isHighlight 
                  ? 'border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.4)] scale-110' 
                  : 'border-violet-200 group-hover/item:border-violet-400'
                }
              `}>
                {item.isHighlight && <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"></div>}
              </span>
              
              <div className={`transition-all duration-300 ${item.isHighlight ? 'transform translate-x-2' : 'group-hover/item:translate-x-1'}`}>
                {/* Task Title */}
                <h4 className={`text-lg font-black mb-1.5 tracking-tight ${item.isHighlight ? 'text-violet-700' : 'text-slate-800'}`}>
                  {item.task}
                </h4>
                
                {/* Date & Note Info */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-bold shadow-sm border ${item.isHighlight ? 'bg-violet-500 text-white border-violet-600' : 'bg-white text-slate-600 border-slate-200'}`}>
                    <CalendarDays className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  
                  {item.note && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-violet-500/80 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                      <ArrowRight className="w-3 h-3" />
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-10 pt-6 border-t border-slate-200/60 text-center relative z-10 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-violet-400"></span>
                <p className="text-[11px] font-bold text-slate-500 tracking-wider">
                    實際日程以 116 學年度國中教育會考簡章為準
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantSchedule;