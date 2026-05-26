import React from 'react';
import { Clock, BookOpen, PenTool, FlaskConical, Headphones, Navigation } from 'lucide-react';

const schedule = [
  {
    day: "Day 1",
    date: "116年5月22日 (星期六)",
    accent: "bg-blue-500",
    lightAccent: "bg-blue-50",
    textAccent: "text-blue-600",
    events: [
      { time: "08:30 - 09:40", subject: "社會", duration: "70 min", icon: <Navigation className="w-4 h-4" /> },
      { time: "10:30 - 11:50", subject: "數學", duration: "80 min", icon: <PenTool className="w-4 h-4" /> },
      { time: "13:50 - 15:00", subject: "國文", duration: "70 min", icon: <BookOpen className="w-4 h-4" /> },
      { time: "15:50 - 16:40", subject: "寫作測驗", duration: "50 min", icon: <PenTool className="w-4 h-4" /> },
    ]
  },
  {
    day: "Day 2",
    date: "116年5月23日 (星期日)",
    accent: "bg-indigo-500",
    lightAccent: "bg-indigo-50",
    textAccent: "text-indigo-600",
    events: [
      { time: "08:30 - 09:40", subject: "自然", duration: "70 min", icon: <FlaskConical className="w-4 h-4" /> },
      { time: "10:30 - 11:30", subject: "英語閱讀", duration: "60 min", icon: <BookOpen className="w-4 h-4" /> },
      { time: "12:05 - 12:30", subject: "英語聽力", duration: "25 min", icon: <Headphones className="w-4 h-4" /> },
    ]
  }
];

const ExamSchedule: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex items-center gap-3 mb-6 px-2">
        <div className="h-6 w-1.5 bg-sky-500 rounded-full"></div>
        <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">Exam Schedule</h2>
      </div>
      
      <div className="flex-grow rounded-[2rem] border border-white/80 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden relative group">
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 transition-transform duration-1000 group-hover:scale-150 pointer-events-none"></div>

        <div className="space-y-6 h-full overflow-y-auto custom-scrollbar pr-2 relative z-10">
          {schedule.map((day, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Day Header */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-lg text-xs font-black tracking-widest text-white uppercase shadow-sm ${day.accent}`}>
                    {day.day}
                  </span>
                  <span className="text-slate-700 font-bold text-sm sm:text-base">{day.date}</span>
                </div>
              </div>
              
              {/* Events List */}
              <div className="grid grid-cols-1 gap-3">
                {day.events.map((event, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl flex items-center justify-between border border-white/60 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] ${day.lightAccent}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center ${day.textAccent}`}>
                        {event.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-slate-800 font-black text-lg">{event.subject}</span>
                        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                           <Clock className="w-3.5 h-3.5" />
                           <span className="text-xs font-mono tracking-tight">{event.time}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <span className={`text-[10px] sm:text-xs font-black px-2.5 py-1 rounded-md bg-white border border-slate-100 shadow-sm ${day.textAccent}`}>
                        {event.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
