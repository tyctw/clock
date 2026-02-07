import React, { useState, useEffect } from 'react';
import { EXAM_NAME } from '../constants';

const links = [
  { name: '學測倒數', url: 'https://ceecc.vercel.app/' },
  { name: '統測倒數', url: 'https://teece.vercel.app/' },
  { name: '分科倒數', url: 'https://ceeecc.vercel.app/' },
];

const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleGoogleCalendar = () => {
    // 2027/05/22 08:30 (UTC+8) -> 2027-05-22 00:30 UTC
    // 2027/05/23 17:00 (UTC+8) -> 2027-05-23 09:00 UTC
    const start = "20270522T003000Z";
    const end = "20270523T090000Z";
    const text = encodeURIComponent(EXAM_NAME);
    const details = encodeURIComponent("考試日程：社會、數學、國文、寫作、自然、英語。\n\n加油！堅持到底！\n\n*時間僅供參考，請以官方簡章為準。");
    const location = encodeURIComponent("全台各考區");
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const handleDownloadICS = () => {
    const event = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:20270522T003000Z",
      "DTEND:20270523T090000Z",
      "SUMMARY:116年國中教育會考",
      "DESCRIPTION:考試日程：社會、數學、國文、寫作、自然、英語。加油！(時間僅供參考，以簡章為準)",
      "LOCATION:全台各考區",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    const blob = new Blob([event], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', '116_cap_exam.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* New Toggle Button Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 pl-3 pr-2 py-2 rounded-full backdrop-blur-xl transition-all duration-300 border shadow-lg hover:shadow-xl group ${
          isOpen 
            ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' 
            : 'bg-white/80 text-slate-700 border-white/60 hover:bg-white hover:text-blue-600'
        }`}
        aria-label="Toggle Menu"
      >
        <span className={`text-xs font-bold tracking-widest uppercase hidden sm:block transition-colors ${isOpen ? 'text-slate-300' : 'text-slate-500 group-hover:text-blue-600'}`}>
            Menu
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-700 rotate-90' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
            {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            )}
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 border-l border-slate-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-28 flex-grow overflow-y-auto custom-scrollbar">
          
          {/* Reminder Section */}
          <div className="mb-8 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100/60 shadow-inner">
             <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </span>
                <h3 className="text-lg font-black text-slate-800">考試提醒</h3>
             </div>
             <p className="text-xs text-slate-500 mb-4 leading-relaxed">
               將會考日期加入行事曆，提前規劃衝刺進度。
             </p>
             <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={handleGoogleCalendar}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50/50 transition-all duration-300 group"
                >
                  <span className="text-xl mb-1 group-hover:scale-110 transition-transform">G</span>
                  <span className="text-[10px] font-bold text-slate-600">Google 日曆</span>
                </button>
                <button 
                  onClick={handleDownloadICS}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-300 hover:bg-indigo-50/50 transition-all duration-300 group"
                >
                  <span className="text-xl mb-1 group-hover:scale-110 transition-transform">📅</span>
                  <span className="text-[10px] font-bold text-slate-600">iCal / Outlook</span>
                </button>
             </div>
          </div>

          <div className="w-full h-px bg-slate-100 mb-8"></div>

          {/* Links Section */}
          <div className="mb-4">
             <h3 className="text-xl font-bold text-slate-800 mb-2">更多倒數</h3>
             <p className="text-xs text-slate-400">高中升大學考試</p>
          </div>
          
          <nav className="space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-300 text-slate-600 hover:text-slate-800 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-slate-600 transition-colors"></div>
                   <span className="font-bold tracking-wide text-sm">{link.name}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-8 border-t border-slate-100 bg-slate-50/50">
           <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact</p>
           </div>
           <a href="mailto:tyctw.analyze@gmail.com" className="block text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors mb-4">
             tyctw.analyze@gmail.com
           </a>
           <p className="text-[10px] text-slate-400 leading-relaxed font-mono">
             © TYCTW Analyze. All rights reserved.
           </p>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;