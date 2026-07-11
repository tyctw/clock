import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle2, Lock, Link as LinkIcon, Users, Cookie, FileText } from 'lucide-react';

export const PrivacyPolicyPage: React.FC = () => {
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
        <div className="absolute top-0 left-0 -ml-16 -mt-16 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white shadow-lg">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">隱私權政策</h1>
              <p className="text-slate-500 mt-1 font-medium">保障您的資訊安全與隱私</p>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none space-y-8">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <p className="text-slate-700 leading-relaxed m-0 font-medium text-lg">
                歡迎您使用「TYCTW 會考落點分析」網站（以下簡稱本網站）。我們非常重視您的隱私權，為了讓您能夠安心使用本網站的各項服務與資訊，特此向您說明本網站的隱私權保護政策，以保障您的權益，請您詳閱下列內容：
              </p>
            </div>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-slate-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">一、隱私權保護政策的適用範圍</h2>
              </div>
              <div className="pl-7">
                <p className="text-slate-600 leading-relaxed m-0">
                  隱私權保護政策內容，包括本網站如何處理在您使用網站服務時收集到的個人識別資料。隱私權保護政策不適用於本網站以外的相關連結網站，也不適用於非本網站所委託或參與管理的人員。
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">二、個人資料的蒐集、處理及利用方式</h2>
              </div>
              <ul className="list-none pl-7 space-y-3 text-slate-600 leading-relaxed m-0">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>當您造訪本網站或使用本網站提供之功能服務時，我們將視該服務功能性質，請您提供必要的個人資料，並在該特定目的範圍內處理及利用您的個人資料；非經您書面同意，本網站不會將個人資料用於其他用途。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>本網站為靜態工具網站，主要運算與資料暫存皆於您的瀏覽器端進行（例如利用 localStorage 儲存您的志願設定與會考成績）。我們<strong className="text-slate-800">不會</strong>主動蒐集、回傳、儲存或傳送您的個人身分資料或私密成績至我們的伺服器，您可以安心使用。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>於一般瀏覽時，伺服器會自行記錄相關行徑，包括您使用連線設備的 IP 位址、使用時間、使用的瀏覽器、瀏覽及點選資料記錄等，做為我們增進網站服務的參考依據，此記錄為內部應用，決不對外公佈。</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Lock className="w-5 h-5 text-emerald-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">三、資料之保護</h2>
              </div>
              <ul className="list-none pl-7 space-y-3 text-slate-600 leading-relaxed m-0">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>本網站採用標準的安全傳輸協定 (HTTPS) 來保護資訊傳輸的安全。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>我們不會與任何第三人分享您的個人資料，除非取得您的同意或有法律依據。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>我們嚴格要求本網站之相關人員遵守保密義務，如有違反保密義務者，將接受相關的法律處分。</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="w-5 h-5 text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">四、網站對外的相關連結</h2>
              </div>
              <div className="pl-7">
                <p className="text-slate-600 leading-relaxed m-0">
                  本網站的網頁提供其他網站的網路連結，您也可經由本網站所提供的連結，點選進入其他網站。但該連結網站不適用本網站的隱私權保護政策，您必須參考該連結網站中的隱私權保護政策。
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-amber-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">五、與第三人共用個人資料之政策</h2>
              </div>
              <div className="pl-7">
                <p className="text-slate-600 leading-relaxed m-0 mb-3">
                  本網站絕不會提供、交換、出租或出售任何您的個人資料給其他個人、團體、私人企業或公務機關，但有法律依據或合約義務者，不在此限。
                </p>
                <ul className="list-none space-y-2 text-slate-600 leading-relaxed m-0">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">-</span>
                    <span>經由您書面同意。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">-</span>
                    <span>法律明文規定。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">-</span>
                    <span>為免除您生命、身體、自由或財產上之危險。</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">-</span>
                    <span>與公務機關或學術研究機構合作，基於公共利益為統計或學術研究而有必要，且資料經過提供者處理或蒐集者依其揭露方式無從識別特定之當事人。</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <Cookie className="w-5 h-5 text-orange-500" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">六、Cookie 之使用</h2>
              </div>
              <div className="pl-7">
                <p className="text-slate-600 leading-relaxed m-0">
                  為了提供您最佳的服務，本網站可能會在您的電腦中放置並取用我們的 Cookie。若您不願接受 Cookie 的寫入，您可在您使用的瀏覽器功能項中設定隱私權等級為高，即可拒絕 Cookie 的寫入，但可能會導致網站某些功能無法正常執行。
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-slate-600" />
                <h2 className="text-xl font-bold text-slate-800 tracking-tight m-0">七、隱私權保護政策之修正</h2>
              </div>
              <div className="pl-7">
                <p className="text-slate-600 leading-relaxed m-0">
                  本網站隱私權保護政策將因應需求隨時進行修正，修正後的條款將刊登於網站上。如果您對我們的隱私權政策有任何疑問，歡迎隨時透過電子郵件與我們聯繫。
                </p>
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200/60 text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium">
              <p className="m-0">最後更新日期：2024年</p>
              <a href="mailto:tyctw.analyze@gmail.com" className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2 rounded-lg transition-colors">
                聯絡我們：tyctw.analyze@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
