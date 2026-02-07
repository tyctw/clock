import React from 'react';

const ExamRules: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
       <div className="flex items-center gap-3 mb-4 px-2">
        <div className="h-6 w-1.5 bg-rose-500 rounded-full"></div>
        <h2 className="text-lg font-bold text-slate-700 tracking-wide uppercase">重要考試規則</h2>
      </div>

      <div className="flex-grow rounded-3xl border border-rose-200/60 bg-rose-50/60 backdrop-blur-md p-6 sm:p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
        {/* Decorative bg */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
        <div className="absolute top-10 right-10 opacity-10 text-rose-600 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
        </div>
        
        <div className="relative z-10 h-80 overflow-y-auto custom-scrollbar pr-2 sm:pr-4">
           <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
                
                <div className="bg-white/50 rounded-xl p-4 border border-rose-100 shadow-sm">
                    <h3 className="font-bold text-rose-700 mb-2 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                             <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        常見違規行為（務必避免！）
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600">
                        <li>
                            <span className="font-semibold text-slate-800">攜帶非應試用品：</span>
                            如水、飲料、口香糖、計算紙、多媒體播放器等，以及電子錶計時器等計時物品（發出鬧鈴聲響者）。<br/>
                            <span className="text-xs text-slate-500">*如需要飲水或藥物，需考前提出相關證明。</span>
                        </li>
                        <li>
                            <span className="font-semibold text-slate-800">手機違規：</span>
                            攜帶手機入試場，忘了關機或關機仍發出響聲者（強烈建議手機不要帶入試場）。
                        </li>
                        <li>
                            <span className="font-semibold text-slate-800">作答時間違規：</span>
                            提早翻開題本，或逾時作答者（測驗結束鐘聲響起即需停止作答）。
                        </li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <div>
                        <span className="inline-block px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded mb-1">入場與離場時間</span>
                        <ul className="list-decimal pl-5 space-y-1">
                            <li><span className="font-bold">遲到/提早交卷：</span>國、數、社、自、英語(閱讀)遲到超過 20 分鐘不得入場，測驗 30 分內不得提早交卷。</li>
                            <li><span className="font-bold">英語（聽力）：</span>試題開始播放後，考生即不得入場。</li>
                            <li>每節測驗說明時間不可翻閱題本，測驗說明開始後即不准離場。考生因病、因故須暫時離座，須經監試委員同意及陪同下，始准離座。</li>
                        </ul>
                    </div>

                    <div>
                         <span className="inline-block px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded mb-1">應試文具規定</span>
                         <ul className="list-decimal pl-5 space-y-1">
                            <li>可以攜帶透明墊板(不得有任何圖形、文字印刷於其上)、三角板、圓規、直尺。</li>
                            <li><span className="font-bold text-rose-600">不可以</span>帶量角器或具有量角功能的器具。</li>
                            <li>不得在場內向他人借用各項應試用品。</li>
                         </ul>
                    </div>

                    <div>
                        <span className="inline-block px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded mb-1">作答規範</span>
                        <ul className="list-decimal pl-5 space-y-1">
                            <li>
                                <span className="font-bold">數學非選與寫作測驗：</span>
                                務必使用<span className="font-bold underline">黑筆</span>(建議 0.5~0.7mm 筆尖)書寫，可用立可白(帶)更正。不可在試卷上塗鴉或顯示自己身份，書寫內容不得超出格線外框。
                            </li>
                            <li>
                                <span className="font-bold">答案卡：</span>
                                用 <span className="font-bold underline">2B 鉛筆</span>劃記，用橡皮擦更改，<span className="font-bold text-rose-600">絕不可用立可白(帶)塗改</span>，否則電腦無法判讀。
                            </li>
                        </ul>
                    </div>

                    <div>
                         <span className="inline-block px-2 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded mb-1">其他注意事項</span>
                         <ul className="list-decimal pl-5 space-y-1">
                            <li>試場內嚴禁談話、左顧右盼等行為，更不可對監考人員有輕浮的言語。</li>
                            <li><span className="font-bold">違規記點：</span>違規1點扣0.3分、2點扣0.6分，並扣於國中教育會考總積分上。</li>
                            <li><span className="font-bold">准考證遺失：</span>入場後發現准考證未帶或遺失，考生應立即告知監試委員；經監試委員查核為考生本人無誤者，先准予應試，但考生應於當節考試結束後至考場試務中心申請補發。</li>
                         </ul>
                    </div>
                </div>
           </div>
        </div>
        
        {/* Fade effect at the bottom of scroll area */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-rose-50/90 to-transparent pointer-events-none rounded-b-3xl"></div>
      </div>
    </div>
  );
};

export default ExamRules;