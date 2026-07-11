import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import CountdownTimer from './components/CountdownTimer';
import CheerCard from './components/CheerCard';
import SchedulePage from './components/SchedulePage';
import SidebarMenu from './components/SidebarMenu';
import NextEvent from './components/NextEvent';
import ClockHeader from './components/ClockHeader';
import ExamRules from './components/ExamRules';
import PlacementAnalysis from './components/PlacementAnalysis';
import OfficialGuide from './components/OfficialGuide';
import StudyTips from './components/StudyTips';
import StrategyPage from './components/StrategyPage';
import { AboutUsPage } from './components/AboutUsPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { CheerWallPage } from './components/CheerWallPage';
import { EXAM_NAME, EXAM_DATES, TARGET_DATE } from './constants';
import { ShieldAlert, ArrowRight, ArrowLeft, Clock, MessageSquareHeart, Target } from 'lucide-react';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomeContent: React.FC = () => (
  <>
    {/* Header Section */}
    <header className="text-center mb-10 sm:mb-16 relative animate-fade-in mt-8 sm:mt-12 flex flex-col items-center">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 border border-slate-200/60 shadow-sm mb-6 backdrop-blur-xl">
        <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse"></span>
        <span className="text-slate-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">{EXAM_DATES}</span>
      </div>
      
      <h1 className="flex flex-col items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        <span className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-slate-800 drop-shadow-sm leading-none bg-clip-text text-transparent bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          116年
        </span>
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 drop-shadow-sm">
          國中教育會考
        </span>
      </h1>
      
      <div className="w-full max-w-5xl mx-auto flex justify-center mb-10">
         <CountdownTimer />
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-3xl mx-auto px-4 mt-2">
        <Link 
          to="/cheer-wall" 
          className="group relative flex-1 flex items-center justify-center gap-4 px-6 py-5 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-100 border border-orange-200 shadow-[0_8px_20px_rgba(251,146,60,0.1)] hover:shadow-[0_15px_30px_rgba(251,146,60,0.2)] hover:-translate-y-1 transition-all duration-400 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/0 via-white/60 to-orange-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-orange-500 shadow-sm group-hover:scale-110 transition-transform duration-400 group-hover:rotate-6">
             <MessageSquareHeart className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold text-orange-600/80 mb-0.5">看看大家說什麼</span>
            <span className="text-lg font-black text-orange-800 tracking-wide">
              會考加油牆
            </span>
          </div>
        </Link>
        
        <a 
          href="https://tyctw.github.io/spare/" 
          aria-label="會考落點分析 (在新分頁開啟)" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group relative flex-1 flex items-center justify-center gap-4 px-6 py-5 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-[0_8px_20px_rgba(59,130,246,0.1)] hover:shadow-[0_15px_30px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-400 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/0 via-white/60 to-blue-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-400 group-hover:-rotate-6">
             <Target className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold text-blue-600/80 mb-0.5">預測最佳高中</span>
            <span className="text-lg font-black text-blue-800 tracking-wide">
              會考落點分析
            </span>
          </div>
        </a>
      </div>
    </header>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 w-full max-w-6xl mx-auto">
        
        {/* Row 1: Status & Motivation */}
        <div className="col-span-1 lg:col-span-5 h-auto lg:h-[28rem] min-h-[24rem]">
           <NextEvent />
        </div>
        
        <div className="col-span-1 lg:col-span-7 h-auto lg:h-[28rem] min-h-[24rem]">
           <CheerCard />
        </div>

        {/* Row 2: Placement Analysis & Official Guide */}
        <div className="col-span-1 lg:col-span-6 min-h-[18rem] lg:min-h-[24rem]">
           <PlacementAnalysis />
        </div>
        
        <div className="col-span-1 lg:col-span-6 min-h-[18rem] lg:min-h-[24rem]">
           <OfficialGuide />
        </div>

        {/* Row 4: Study Tips (Full Width) */}
        <div className="col-span-1 lg:col-span-12">
           <StudyTips />
        </div>

        {/* Row 5: Schedule & Exam Rules (Half Widths on Desktop) */}
        <div className="col-span-1 lg:col-span-6 min-h-[10rem]">
          <Link to="/schedule" className="group block relative w-full h-full rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100/60 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 p-6 sm:p-8 overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 bg-blue-200/30 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
             <div className="relative z-10 flex h-full justify-between items-center gap-6">
                <div className="flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-blue-100 shadow-md text-blue-500 transform group-hover:rotate-6 transition-transform duration-500 mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2 group-hover:text-blue-700 transition-colors">考試日程與重要時程</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">查看會考詳細作息時間、休息建議與鐘聲規定。</p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100/50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
             </div>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-6 min-h-[10rem]">
          <Link to="/rules" className="group block relative w-full h-full rounded-[2rem] bg-gradient-to-br from-rose-50 to-orange-50/50 border border-rose-100/60 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 p-6 sm:p-8 overflow-hidden">
             <div className="absolute top-0 right-0 w-48 h-48 bg-rose-200/30 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
             <div className="relative z-10 flex h-full justify-between items-center gap-6">
                <div className="flex-grow">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-rose-100 shadow-md text-rose-500 transform group-hover:-rotate-6 transition-transform duration-500 mb-4">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-800 tracking-tight mb-2 group-hover:text-rose-700 transition-colors">重要考試規則與違規行為</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">考試前務必詳細閱讀，避免無謂失分。</p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full bg-rose-100/50 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
             </div>
          </Link>
        </div>
    </div>
  </>
);

const RulesPage: React.FC = () => (
  <div className="animate-fade-in flex-grow flex flex-col">
    <div className="mb-6">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 font-bold transition-colors">
        <ArrowLeft className="w-4 h-4" />
        返回倒數首頁
      </Link>
    </div>
    <div className="w-full">
       <ExamRules />
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-blue-200 selection:text-blue-900 flex flex-col relative overflow-x-hidden bg-[#f8fafc]">
      <ScrollToTop />
      <ClockHeader />
      <SidebarMenu />
      
      {/* Dynamic Background (Light Theme) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-indigo-100/50 rounded-full blur-[100px] mix-blend-multiply animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-cyan-50/60 rounded-full blur-[80px] mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
      </div>

      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-8 z-10 flex-grow max-w-6xl flex flex-col">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/strategy/:subjectId" element={<StrategyPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/cheer-wall" element={<CheerWallPage />} />
        </Routes>

        <footer className="mt-auto pt-16 sm:pt-24 mb-8 text-slate-400 text-sm w-full border-t border-slate-200/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="font-semibold text-slate-500">© TYCTW 會考落點分析</p>
              <a href="mailto:tyctw.analyze@gmail.com" aria-label="聯絡我們 (tyctw.analyze@gmail.com)" className="hover:text-blue-600 transition-colors duration-300">
                tyctw.analyze@gmail.com
              </a>
              <p className="text-xs font-mono text-slate-300">
                Target: {TARGET_DATE.toISOString().split('T')[0]}
              </p>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <Link to="/about" className="hover:text-blue-600 transition-colors duration-300 font-medium">關於我們</Link>
              <Link to="/privacy" className="hover:text-blue-600 transition-colors duration-300 font-medium">隱私權政策</Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;