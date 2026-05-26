import React from 'react';
import { AlertTriangle, Clock, Edit3, Type, Info, ShieldAlert } from 'lucide-react';

const ExamRules: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex items-center gap-3 mb-6 px-2">
        <div className="h-6 w-1.5 bg-rose-500 rounded-full"></div>
        <h2 className="text-xl font-black text-slate-800 tracking-tight uppercase">重要考試規則</h2>
      </div>

      <div className="flex-grow rounded-[2.5rem] border border-white/80 bg-white/70 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden group">
        
        {/* Decorative bg */}
        <div className="absolute -bottom-32 -right-32 w-[30rem] h-[30rem] bg-rose-200/20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000 pointer-events-none"></div>
        <div className="absolute top-10 right-10 opacity-[0.02] text-rose-800 pointer-events-none transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
            <ShieldAlert size={200} />
        </div>
        
        <div className="relative z-10 h-[28rem] overflow-y-auto custom-scrollbar pr-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700">
                
                {/* 1. Critical Violations */}
                <div className="md:col-span-2 bg-gradient-to-br from-rose-50 to-red-50/50 rounded-3xl p-6 md:p-8 border border-rose-100 shadow-sm relative overflow-hidden group/alert hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <h3 className="font-black text-xl text-rose-700 mb-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center border border-rose-200 group-hover/alert:scale-110 transition-transform">
                            <AlertTriangle className="text-rose-600 w-5 h-5" />
                        </div>
                        常見違規行為（務必避免！）
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                            <span className="font-bold text-slate-800 block mb-1">攜帶非應試用品</span>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                如水、飲料、口香糖、計算紙，及電子錶計時器（發出鬧鈴聲響者）。<br/>
                                <span className="text-xs text-rose-500 font-medium mt-1 block">*需飲水/藥物需考前提出證明</span>
                            </p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                            <span className="font-bold text-slate-800 block mb-1">手機違規</span>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                攜帶手機入試場，忘了關機或關機仍發出響聲者。<span className="font-bold border-b border-rose-200 block mt-1">強烈建議不要帶入試場</span>
                            </p>
                        </div>
                        <div className="bg-white/60 p-4 rounded-2xl border border-white/80 shadow-sm">
                            <span className="font-bold text-slate-800 block mb-1">作答時間違規</span>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                提早翻開題本，或逾時作答者。測驗結束鐘聲響起即需<span className="font-bold text-rose-600 block mt-1">立即停止作答</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Timing */}
                <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg mb-4 shadow-sm">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        入場與離場時間
                    </div>
                    <ul className="space-y-3">
                        <li className="flex gap-2">
                            <span className="text-emerald-500 font-black mt-0.5">•</span>
                            <p className="text-sm leading-relaxed"><span className="font-bold text-slate-800 block">遲到/提早交卷：</span>國、數、社、自、英語(閱讀)遲到超過 20 分鐘不得入場，測驗 30 分內不得提早交卷。</p>
                        </li>
                        <li className="flex gap-2">
                             <span className="text-emerald-500 font-black mt-0.5">•</span>
                             <p className="text-sm leading-relaxed"><span className="font-bold text-slate-800 block">英語（聽力）：</span>試題開始播放後，考生即<span className="font-bold text-rose-600 underline">不得入場</span>。</p>
                        </li>
                    </ul>
                </div>

                {/* 3. Stationery */}
                <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg mb-4 shadow-sm">
                        <Edit3 className="w-4 h-4 text-blue-500" />
                        應試文具規定
                    </div>
                     <ul className="space-y-3">
                        <li className="flex gap-2">
                            <span className="text-blue-500 font-black mt-0.5">•</span>
                            <p className="text-sm leading-relaxed"><span className="font-bold text-slate-800 block pb-1">可以攜帶：</span>透明墊板(不得有圖形文字)、三角板、圓規、直尺。</p>
                        </li>
                        <li className="flex gap-2">
                             <span className="text-rose-500 font-black mt-0.5">X</span>
                             <p className="text-sm text-slate-700"><span className="font-bold text-rose-600 block pb-1">不可以帶：</span>量角器或具量角功能器具。</p>
                        </li>
                     </ul>
                </div>

                {/* 4. Formatting */}
                <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg mb-4 shadow-sm">
                        <Type className="w-4 h-4 text-violet-500" />
                        作答規範
                    </div>
                    <ul className="space-y-4 text-sm leading-relaxed">
                        <li className="bg-white p-3 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-800 block mb-1">📝 數學非選與寫作測驗：</span>
                            務必使用<span className="font-bold border-b-2 border-slate-800 px-1">黑筆</span>(0.5~0.7mm)，可用立可白更正。內容不得超出格線外框。
                        </li>
                        <li className="bg-white p-3 rounded-xl border border-slate-100">
                            <span className="font-bold text-slate-800 block mb-1">🗄️ 答案卡：</span>
                            用 <span className="font-bold border-b-2 border-slate-800 px-1">2B 鉛筆</span>劃記，用橡皮擦更改，<span className="font-bold text-rose-600 bg-rose-50 px-1 rounded">絕不可用立可白塗改</span>。
                        </li>
                    </ul>
                </div>

                {/* 5. Others */}
                <div className="bg-slate-50/80 rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-lg mb-4 shadow-sm">
                        <Info className="w-4 h-4 text-amber-500" />
                        其他注意事項
                    </div>
                     <ul className="space-y-3">
                        <li className="flex gap-2">
                             <span className="text-amber-500 font-black mt-0.5">•</span>
                             <p className="text-sm leading-relaxed"><span className="font-bold text-slate-800">違規記點：</span>違規1點扣0.3分、2點扣0.6分，並扣於總積分上。</p>
                        </li>
                        <li className="flex gap-2">
                             <span className="text-amber-500 font-black mt-0.5">•</span>
                             <p className="text-sm leading-relaxed"><span className="font-bold text-slate-800">准考證遺失：</span>應立即告知監試委員；核對無誤後先准予應試，當節結束後至試務中心補發。</p>
                        </li>
                     </ul>
                </div>

           </div>
        </div>
        
        {/* Transparent layout fade effect at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 via-white/50 to-transparent pointer-events-none rounded-b-[2.5rem]"></div>
      </div>
    </div>
  );
};

export default ExamRules;
