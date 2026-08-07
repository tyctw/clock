import React, { useEffect } from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
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
import { MockExamSchedulePage } from './components/MockExamSchedulePage';
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

class RouteErrorBoundary extends React.Component<
  { resetKey: string; children: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(previousProps: Readonly<{ resetKey: string }>) {
    if (previousProps.resetKey !== this.props.resetKey && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="flex flex-grow flex-col items-center justify-center gap-5 py-24 text-center">
          <h1 className="text-2xl font-black text-slate-800">頁面暫時無法載入</h1>
          <p className="text-slate-500">請回到首頁後再試一次。</p>
          <Link to="/" className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition-colors hover:bg-blue-700">
            回到首頁
          </Link>
        </section>
      );
    }

    return this.props.children;
  }
}

const HomeContent: React.FC = () => (
  <>
    {/* Header Section */}
    <header className="mb-12 sm:mb-20 relative animate-fade-in mt-4 sm:mt-8 lg:min-h-[620px] flex flex-col items-start rounded-[2rem] border border-white bg-[#fffdfa]/90 px-5 py-8 shadow-[0_18px_45px_rgba(65,51,31,0.10)] sm:rounded-[2.5rem] sm:px-10 sm:py-12 lg:justify-center lg:px-12 lg:py-14 lg:pr-[52%]">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fffdfa] border border-[#e3d8c9] shadow-sm mb-7">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ffe4d9]"><span className="w-2 h-2 rounded-full bg-[#fa6a42] animate-pulse"></span></span>
        <span className="text-[#705942] text-xs sm:text-sm font-bold tracking-wide">{EXAM_DATES} 國中教育會考倒數</span>
      </div>
      
      <h1 className="flex w-full max-w-none flex-col items-start gap-2 sm:gap-3 mb-6 sm:mb-7">
        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.9rem] font-black tracking-[-0.07em] text-[#10264e] leading-none">
          116年
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.25rem] font-black tracking-[-0.06em] text-[#fa6841] leading-none">
          國中教育會考
        </span>
      </h1>
      <p className="w-full max-w-xl text-base sm:text-lg leading-8 font-medium text-[#526886]">準備 116 年國中教育會考，掌握時間、安排複習，讓每天的努力更靠近目標。</p>
      
      <div className="relative mt-8 flex w-full max-w-[590px] justify-center lg:absolute lg:right-10 lg:top-1/2 lg:mt-0 lg:w-[46%] lg:min-w-[410px] lg:-translate-y-1/2 before:hidden lg:before:absolute lg:before:-right-4 lg:before:top-6 lg:before:h-[calc(100%-1rem)] lg:before:w-full lg:before:rounded-[2rem] lg:before:bg-[#efc35d]">
         <CountdownTimer />
      </div>

      <div className="relative z-10 mt-6 flex w-full flex-col justify-start gap-3 px-0 sm:flex-row lg:mt-8">
        <Link 
          to="/cheer-wall" 
          className="group relative flex flex-1 items-center justify-start gap-3 overflow-hidden rounded-2xl border border-orange-200 bg-gradient-to-br from-amber-50 to-orange-100 px-4 py-4 shadow-[0_8px_20px_rgba(251,146,60,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(251,146,60,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/0 via-white/60 to-orange-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
             <MessageSquareHeart className="h-5 w-5" />
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
          className="group relative flex flex-1 items-center justify-start gap-3 overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-4 shadow-[0_8px_20px_rgba(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(59,130,246,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200/0 via-white/60 to-blue-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
             <Target className="h-5 w-5" />
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
  const location = useLocation();

  return (
    <div className="min-h-0 text-slate-800 selection:bg-[#ffcb4d] selection:text-[#10264e] flex flex-col relative overflow-x-hidden bg-[#f5f0e7]">
      <ScrollToTop />
      <ClockHeader />
      <SidebarMenu />
      
      {/* Dynamic Background (Light Theme) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#f5f0e7]"></div>
      </div>

      <main className="container mx-auto px-5 sm:px-8 pt-24 pb-0 sm:pb-4 z-10 max-w-6xl flex flex-col">
        <RouteErrorBoundary resetKey={location.pathname}>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/rules" element={<RulesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/mock-exams" element={<MockExamSchedulePage />} />
            <Route path="/strategy/:subjectId" element={<StrategyPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/cheer-wall" element={<CheerWallPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </RouteErrorBoundary>

        <footer className="mt-4 sm:mt-10 pt-4 sm:pt-8 mb-0 text-slate-400 text-sm w-full border-t border-slate-200/60">
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
