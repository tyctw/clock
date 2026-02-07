import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import MotivationCard from './components/MotivationCard';
import ExamSchedule from './components/ExamSchedule';
import ImportantSchedule from './components/ImportantSchedule';
import SidebarMenu from './components/SidebarMenu';
import AdBanner from './components/AdBanner';
import NextEvent from './components/NextEvent';
import ClockHeader from './components/ClockHeader';
import ExamRules from './components/ExamRules';
import ExamReminderModal from './components/ExamReminderModal';
import { EXAM_NAME, EXAM_DATES, TARGET_DATE } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-blue-200 selection:text-blue-900 flex flex-col relative overflow-x-hidden bg-[#f8fafc]">
      <ClockHeader />
      <SidebarMenu />
      <ExamReminderModal />
      
      {/* Dynamic Background (Light Theme) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-100/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-cyan-50/60 rounded-full blur-[80px] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-8 z-10 flex-grow max-w-6xl">
        
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-12 relative animate-fade-in mt-4 sm:mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 border border-slate-200 shadow-sm mb-4 sm:mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-slate-600 text-xs sm:text-sm font-bold tracking-widest uppercase">{EXAM_DATES}</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-slate-900">
            {EXAM_NAME}
          </h1>
          
          <div className="flex justify-center">
             <CountdownTimer />
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 w-full">
            
            {/* Row 1: Status & Motivation */}
            <div className="col-span-1 md:col-span-5 h-full">
               <NextEvent />
            </div>
            
            <div className="col-span-1 md:col-span-7 h-full">
               <MotivationCard />
            </div>

            {/* Row 2: Ad Banner (Full Width) */}
            <div className="col-span-1 md:col-span-12">
               <AdBanner />
            </div>

            {/* Row 3: Schedules */}
            <div className="col-span-1 md:col-span-6 h-full">
              <ExamSchedule />
            </div>
            
            <div className="col-span-1 md:col-span-6 h-full">
              <ImportantSchedule />
            </div>

            {/* Row 4: Exam Rules (Full Width) */}
            <div className="col-span-1 md:col-span-12 h-full">
              <ExamRules />
            </div>
        </div>

        <footer className="mt-16 sm:mt-24 mb-8 text-slate-400 text-sm text-center w-full pt-8 border-t border-slate-200/60">
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-slate-500">© TYCTW 會考落點分析</p>
            <a href="mailto:tyctw.analyze@gmail.com" className="hover:text-blue-600 transition-colors duration-300">
              tyctw.analyze@gmail.com
            </a>
            <p className="text-xs font-mono text-slate-300">
              Target: {TARGET_DATE.toISOString().split('T')[0]}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;