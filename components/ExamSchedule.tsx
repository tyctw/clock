import React from 'react';

const schedule = [
  {
    day: "Day 1",
    date: "116年5月22日 (星期六)",
    accent: "text-blue-600",
    bg: "bg-white/60",
    events: [
      { time: "08:30 - 09:40", subject: "社會", duration: "70 min" },
      { time: "10:30 - 11:50", subject: "數學", duration: "80 min" },
      { time: "13:50 - 15:00", subject: "國文", duration: "70 min" },
      { time: "15:50 - 16:40", subject: "寫作測驗", duration: "50 min" },
    ]
  },
  {
    day: "Day 2",
    date: "116年5月23日 (星期日)",
    accent: "text-sky-600",
    bg: "bg-white/60",
    events: [
      { time: "08:30 - 09:40", subject: "自然", duration: "70 min" },
      { time: "10:30 - 11:30", subject: "英語閱讀", duration: "60 min" },
      { time: "12:05 - 12:30", subject: "英語聽力", duration: "25 min" },
    ]
  }
];

const ExamSchedule: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex items-center gap-3 mb-4 px-2">
        <div className="h-6 w-1.5 bg-sky-500 rounded-full"></div>
        <h2 className="text-lg font-bold text-slate-700 tracking-wide uppercase">Exam Schedule</h2>
      </div>
      
      <div className="flex-grow rounded-3xl border border-sky-200/60 bg-sky-50/60 backdrop-blur-md p-2 sm:p-4 hover:shadow-xl transition-all duration-300">
        <div className="space-y-4 h-full overflow-y-auto custom-scrollbar">
          {schedule.map((day, index) => (
            <div key={index} className="rounded-2xl overflow-hidden border border-sky-100/50 bg-white/40">
              <div className="px-5 py-3 border-b border-sky-100/50 flex justify-between items-center bg-sky-100/30">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-widest ${day.accent}`}>{day.day}</span>
                  <p className="text-slate-700 font-bold text-sm sm:text-base">{day.date}</p>
                </div>
              </div>
              
              <div className="divide-y divide-sky-100/50">
                {day.events.map((event, idx) => (
                  <div key={idx} className="p-3 sm:p-4 flex items-center justify-between hover:bg-white/50 transition-colors">
                    <div className="flex flex-col">
                      <span className="text-slate-800 font-bold text-base sm:text-lg">{event.subject}</span>
                      <span className="text-slate-500 text-xs font-mono">{event.time}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold px-2 py-1 rounded bg-sky-100/50 text-sky-700 border border-sky-200/50">
                      {event.duration}
                    </span>
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