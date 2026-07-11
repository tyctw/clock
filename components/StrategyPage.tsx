import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { studyTipsData } from './StudyTips';

const StrategyPage: React.FC = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();

  const activeContent = studyTipsData.find(t => t.id === subjectId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!activeContent) {
      navigate('/');
    }
  }, [activeContent, navigate]);

  if (!activeContent) return null;

  return (
    <div className="animate-fade-in flex-grow flex flex-col w-full max-w-5xl mx-auto px-4 pb-12">
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold transition-all bg-white/50 hover:bg-white px-5 py-2.5 rounded-full shadow-sm hover:shadow-md border border-slate-200/60">
          <ArrowLeft className="w-4 h-4" />
          返回首頁
        </Link>
      </div>

      {/* Hero Section */}
      <div className={`relative w-full rounded-[3rem] border bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-8 sm:p-16 md:p-20 ${activeContent.borderColor} overflow-hidden mb-12`}>
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none opacity-60 ${activeContent.bgColor}`}></div>
        <div className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none opacity-60 ${activeContent.bgColor}`}></div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-[2rem] flex items-center justify-center bg-white shadow-xl border-4 ${activeContent.borderColor} ${activeContent.color} mb-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500`}>
            {React.cloneElement(activeContent.icon as React.ReactElement, { className: 'w-12 h-12 sm:w-16 sm:h-16' })}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-tight mb-6 leading-tight">
            {activeContent.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-400">完整攻略</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-slate-500 leading-relaxed mb-10 max-w-2xl">
            {activeContent.content}
          </p>
          <div className="flex items-center gap-3 text-sm font-bold tracking-widest text-slate-400 uppercase">
            <Sparkles className="w-4 h-4" />
            <span>High Score Strategy</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Strategies List */}
      <div className="space-y-8 sm:space-y-12">
        {activeContent.fullStrategy?.map((strategy, idx) => (
          <div key={idx} className={`group relative bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[2.5rem] p-8 sm:p-12 md:p-14 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden`}>
            {/* Hover Gradient */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${activeContent.bgColor} transition-opacity duration-500 pointer-events-none`}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
              {/* Left Column: Number & Title */}
              <div className="w-full md:w-2/5 shrink-0 md:sticky md:top-24">
                <div className={`text-6xl sm:text-8xl font-black ${activeContent.color} opacity-20 mb-4 tracking-tighter leading-none`}>
                  0{idx + 1}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight leading-snug">
                  {strategy.subtitle}
                </h3>
              </div>
              
              {/* Right Column: Text Content */}
              <div className="w-full md:w-3/5 md:pt-10">
                <div className={`w-16 h-1.5 ${activeContent.bgColor} mb-8 rounded-full`}></div>
                <p className="text-slate-600 leading-loose text-lg sm:text-xl font-medium whitespace-pre-wrap">
                  {strategy.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Footer Navigation */}
      <div className="mt-16 sm:mt-20 flex justify-center pb-8">
         <Link to="/" className={`inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1`}>
            <span>準備好了，回首頁繼續倒數</span>
            <ArrowRight className="w-5 h-5" />
         </Link>
      </div>
    </div>
  );
};

export default StrategyPage;
