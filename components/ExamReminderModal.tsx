import React, { useState, useEffect } from 'react';
import { TARGET_DATE } from '../constants';

const ExamReminderModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkTimeAndShow = () => {
      const now = new Date();
      // Calculate difference in days (rounding up)
      const diffTime = TARGET_DATE.getTime() - now.getTime();
      const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Condition: 14 days or less before exam, and exam hasn't passed (allow up to -1 for the second day)
      if (daysLeft <= 14 && daysLeft >= -1) {
        
        // Check if already dismissed today
        const todayStr = now.toISOString().split('T')[0];
        const lastDismissed = localStorage.getItem('exam_reminder_dismissed_date');
        
        if (lastDismissed !== todayStr) {
          // Add a small delay for better UX on load
          setTimeout(() => setIsOpen(true), 1500);
        }
      }
    };

    checkTimeAndShow();
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Save today's date to prevent showing again today
    const todayStr = new Date().toISOString().split('T')[0];
    localStorage.setItem('exam_reminder_dismissed_date', todayStr);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-[float_0.5s_ease-out_forwards] border-4 border-amber-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-6 text-white text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="relative z-10">
             <div className="inline-block p-3 rounded-full bg-white/20 backdrop-blur-md mb-3 shadow-sm animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
             </div>
             <h2 className="text-2xl font-black tracking-wider">考前最後衝刺！</h2>
             <p className="text-amber-100 text-sm font-bold mt-1">保持最佳狀態，你可以的！</p>
           </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6 bg-white">
           
           <div className="space-y-4">
              <div className="flex gap-4 items-start">
                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">1</div>
                 <div>
                    <h3 className="font-bold text-slate-800 text-lg">調整生理時鐘</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">請開始依照會考時間作息，每天早上 6:30 起床，晚上 11:00 前就寢，確保考試當天精神飽滿。</p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-lg">2</div>
                 <div>
                    <h3 className="font-bold text-slate-800 text-lg">飲食清淡衛生</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">避免生冷、油膩或辛辣食物，多喝溫水，照顧好腸胃，身體健康是考試的本錢。</p>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg">3</div>
                 <div>
                    <h3 className="font-bold text-slate-800 text-lg">回歸課本與錯題</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">最後階段不宜再鑽研過難的新題型，請重新複習課本觀念與過往的錯題筆記。</p>
                 </div>
              </div>
           </div>

           <button 
             onClick={handleClose}
             className="w-full py-4 rounded-xl bg-slate-800 text-white font-bold text-lg shadow-lg shadow-slate-300/50 hover:bg-slate-700 hover:scale-[1.02] transition-all duration-300 active:scale-95"
           >
             收到，我準備好了！
           </button>
           
           <p className="text-center text-xs text-slate-400">
             * 此提醒今日不再顯示
           </p>
        </div>
      </div>
    </div>
  );
};

export default ExamReminderModal;