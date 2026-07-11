import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Users, HeartHandshake, ShieldCheck, Target, Sparkles } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="animate-fade-in flex-grow flex flex-col max-w-4xl mx-auto w-full">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          返回首頁
        </Link>
      </div>
      
      <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200/60 p-8 sm:p-12 shadow-xl shadow-slate-200/40 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-0 right-32 -mt-16 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight">
              關於我們
            </h1>
          </div>
          
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              我們相信升學資訊不應該只服務少數人，也不應該因為資料分散、規則複雜或查詢門檻高，而讓學生與家長在重要選擇前感到無助。
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mt-4">
              因此，本服務的核心目標是免費提供大家可使用的升學輔助工具。不論是前段、中段、後段學校，或是高中、高職、五專等不同升學路徑，都應該有被整理、被看見、被比較的機會。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">補足資訊落差</h2>
              <p className="text-slate-600 leading-relaxed">
                網路上常見資料多集中在前幾志願與明星學校，中後段學校、高中職與不同群科的錄取資訊相對不足。我們希望透過系統化的整理，讓更多學校資料被納入參考，協助每一位學生找到適合自己的舞台。
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">維持免費使用</h2>
              <p className="text-slate-600 leading-relaxed">
                升學規劃是許多家庭共同面對的問題。我們希望盡可能把基礎查詢與分析功能免費開放，降低取得資訊的成本，讓每一個家庭都能享有平等的資訊獲取權利。
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">透明客觀的數據</h2>
              <p className="text-slate-600 leading-relaxed">
                我們的落點分析與升學策略工具，皆以歷年公開數據為基礎，透過科學化的演算法進行推估。我們承諾不偏袒特定學校，維持中立客觀的立場，提供您最真實的數據參考。
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 tracking-tight">我們的願景</h2>
              <p className="text-slate-600 leading-relaxed">
                期盼未來的台灣升學體制，能夠讓每個孩子不再為了未知的填志願過程感到恐慌。我們將持續開發更多元、更精準的輔助工具，陪伴孩子們走過升學這條路，自信地邁向人生下一個階段。
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center pt-8 border-t border-slate-200/60">
             <div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
               <Sparkles className="w-4 h-4 text-amber-400" />
               <span>陪伴您走過升學的每一步</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
