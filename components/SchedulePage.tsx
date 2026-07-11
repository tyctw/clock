import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, BellRing, Info, AlertCircle } from 'lucide-react';
import ExamSchedule from './ExamSchedule';
import ImportantSchedule from './ImportantSchedule';

const SchedulePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-fade-in flex-grow flex flex-col w-full">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          返回倒數首頁
        </Link>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          <div className="h-full">
            <ExamSchedule />
          </div>
          <div className="h-full">
            <ImportantSchedule />
          </div>
        </div>

        {/* Additional Exam Schedule Details */}
        <div className="w-full flex flex-col">
           <div className="flex items-center gap-3 mb-6 px-2">
            <div className="h-6 w-1.5 bg-blue-500 rounded-full"></div>
            <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">考試日程詳細作息與鐘聲</h2>
          </div>

          <div className="flex-grow rounded-[2.5rem] border border-white/80 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              
              {/* Bell Instructions */}
              <div className="bg-slate-50/80 rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg mb-6 shadow-sm">
                    <BellRing className="w-4 h-4 text-blue-500" />
                    鐘聲與應考作息
                </div>
                
                <ul className="space-y-6 text-slate-700">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-500 font-black text-lg">1</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">預備鈴響</h4>
                      <p className="text-sm leading-relaxed">考試前10分鐘打預備鈴。鈴響後考生即可入場，但<span className="font-bold text-rose-600 underline">不得翻閱題本</span>，且不得離場。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-500 font-black text-lg">2</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">考試開始鐘聲</h4>
                      <p className="text-sm leading-relaxed">正式鐘響起，才能翻開題本開始作答。遲到逾20分鐘者不得入場（英語聽力測驗試題開始播放後即不得入場）。</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-rose-500 font-black text-lg">3</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">考試結束鐘聲</h4>
                      <p className="text-sm leading-relaxed">鐘響即<span className="font-bold text-rose-600">立即停止作答</span>，雙手離開桌面。若繼續作答將被扣分或不予計分。</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Exam Instructions & Break times */}
              <div className="flex flex-col gap-6">
                
                <div className="bg-emerald-50/50 rounded-3xl p-6 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-emerald-200 text-emerald-700 text-sm font-bold rounded-lg mb-4 shadow-sm">
                      <Clock className="w-4 h-4 text-emerald-500" />
                      提早交卷規定
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    除了英語（聽力）不准提早離場外，其餘各節次<span className="font-bold">測驗開始30分鐘後</span>，始得提早交卷離場。交卷後應立即離開試場周邊，不得逗留。
                  </p>
                </div>

                <div className="bg-amber-50/50 rounded-3xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition-shadow flex-grow">
                   <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-amber-200 text-amber-700 text-sm font-bold rounded-lg mb-4 shadow-sm">
                      <Info className="w-4 h-4 text-amber-500" />
                      休息時間建議
                  </div>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex gap-2">
                       <span className="text-amber-500 font-black mt-0.5">•</span>
                       <p className="leading-relaxed">各科考試間的休息時間通常為40-50分鐘。建議喝點溫水，去洗手間，並讓眼睛休息。</p>
                    </li>
                    <li className="flex gap-2">
                       <span className="text-amber-500 font-black mt-0.5">•</span>
                       <p className="leading-relaxed">午餐時間請吃清淡、七分飽即可，避免過油或過甜的食物導致下午考試昏沉。</p>
                    </li>
                    <li className="flex gap-2">
                       <span className="text-amber-500 font-black mt-0.5">•</span>
                       <p className="leading-relaxed">不要與同學討論上一節的答案，考完就放下，全力準備下一科。</p>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
