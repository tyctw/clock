import React from 'react';
import { SCHEDULE_ITEMS } from '../constants';

const ImportantSchedule: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex items-center gap-3 mb-4 px-2">
        <div className="h-6 w-1.5 bg-violet-500 rounded-full"></div>
        <h2 className="text-lg font-bold text-slate-700 tracking-wide uppercase">Important Dates</h2>
      </div>

      <div className="flex-grow rounded-3xl border border-violet-200/60 bg-violet-50/60 backdrop-blur-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <ul className="relative border-l border-violet-200 ml-3 space-y-8 z-10">
          {SCHEDULE_ITEMS.map((item, index) => (
            <li key={index} className="ml-6 relative">
              <span className={`
                absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 transition-all duration-300
                ${item.isHighlight 
                  ? 'bg-yellow-400 border-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)] scale-110' 
                  : 'bg-white border-violet-300'
                }
              `}></span>
              
              <div className={`transition-all duration-300 ${item.isHighlight ? 'transform translate-x-1' : ''}`}>
                <h4 className={`text-base font-bold mb-1 ${item.isHighlight ? 'text-violet-900' : 'text-slate-800'}`}>
                  {item.task}
                </h4>
                
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className={`text-sm font-medium ${item.isHighlight ? 'text-violet-800 font-bold' : 'text-slate-500'}`}>
                    {item.date}
                  </span>
                  {item.note && (
                    <span className="text-xs text-violet-400/80">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 pt-6 border-t border-violet-200/50 text-center relative z-10">
          <p className="text-xs text-violet-400">
            * 實際日程以 116 學年度國中教育會考簡章公布為準
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportantSchedule;