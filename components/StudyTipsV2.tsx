import React, { useState } from 'react';
import { ArrowUpRight, BookOpen, BrainCircuit, Calculator, Globe2, History, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const subjects = [
  { id: 'chinese', label: '國文科', icon: BookOpen, color: 'rose', title: '國文科攻略', summary: '語感與課外閱讀，也是得分關鍵！許多人認為國文只要靠語感就好，但會考國文的準備絕非如此簡單。除了基本的文言文與國學常識，更重要的是閱讀理解能力。', tag: '閱讀理解 × 國學常識' },
  { id: 'english', label: '英文科', icon: Globe2, color: 'blue', title: '英文科攻略', summary: '從核心單字、文法到閱讀題型，建立穩定的理解力與答題節奏。', tag: '單字 × 閱讀策略' },
  { id: 'math', label: '數學科', icon: Calculator, color: 'amber', title: '數學科攻略', summary: '先掌握觀念與常用解題模型，再透過練習提高速度與正確率。', tag: '觀念 × 題型演練' },
  { id: 'science', label: '自然科', icon: Zap, color: 'emerald', title: '自然科攻略', summary: '用圖表和實驗概念串連知識，訓練跨單元的科學推理能力。', tag: '觀念整合 × 實驗判讀' },
  { id: 'social', label: '社會科', icon: History, color: 'violet', title: '社會科攻略', summary: '掌握時間軸、地圖與議題脈絡，讓零碎知識形成完整架構。', tag: '脈絡 × 圖表判讀' },
  { id: 'mindset', label: '心態與作息', icon: BrainCircuit, color: 'teal', title: '心態與作息攻略', summary: '照顧睡眠、情緒與複習節奏，在考前維持最穩定的狀態。', tag: '節奏 × 壓力調適' },
];

const colorStyles = {
  rose: 'from-rose-500 to-orange-400 bg-rose-50 text-rose-600 border-rose-200 ring-rose-100',
  blue: 'from-blue-600 to-sky-400 bg-blue-50 text-blue-600 border-blue-200 ring-blue-100',
  amber: 'from-amber-500 to-orange-400 bg-amber-50 text-amber-600 border-amber-200 ring-amber-100',
  emerald: 'from-emerald-600 to-teal-400 bg-emerald-50 text-emerald-600 border-emerald-200 ring-emerald-100',
  violet: 'from-violet-600 to-fuchsia-400 bg-violet-50 text-violet-600 border-violet-200 ring-violet-100',
  teal: 'from-teal-600 to-cyan-400 bg-teal-50 text-teal-600 border-teal-200 ring-teal-100',
};

const StudyTipsV2: React.FC = () => {
  const [activeId, setActiveId] = useState('chinese');
  const active = subjects.find((subject) => subject.id === activeId) ?? subjects[0];
  const Icon = active.icon;
  const theme = colorStyles[active.color as keyof typeof colorStyles];

  return (
    <section className="relative mt-8 w-full overflow-hidden rounded-[2rem] border border-[#eadfce] bg-[#fffdfa] p-5 shadow-[0_18px_45px_rgba(65,51,31,0.08)] sm:p-8">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-100/70 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-amber-100/60 blur-3xl" />

      <div className="relative">
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-orange-500"><Sparkles className="h-4 w-4" />STUDY PLAYBOOK</div>
            <h2 className="text-2xl font-black tracking-tight text-[#2e3a52] sm:text-3xl">高分秘笈與各科研讀攻略</h2>
            <p className="mt-2 text-sm font-medium text-slate-500">獨家整理，助你掌握得分關鍵</p>
          </div>
          <span className="self-start rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-600 sm:self-auto">選擇科目，開始衝刺</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div role="tablist" aria-label="各科研讀攻略" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {subjects.map((subject) => {
              const SubjectIcon = subject.icon;
              const isActive = subject.id === active.id;
              const styles = colorStyles[subject.color as keyof typeof colorStyles];
              return (
                <button key={subject.id} type="button" role="tab" aria-selected={isActive} onClick={() => setActiveId(subject.id)} className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm font-black transition-all duration-300 ${isActive ? `${styles.split(' ').slice(1).join(' ')} bg-white shadow-sm ring-2` : 'border-transparent bg-slate-50/80 text-slate-500 hover:bg-white hover:shadow-sm'}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isActive ? `bg-gradient-to-br ${styles.split(' ').slice(0, 2).join(' ')} text-white` : 'bg-white text-slate-400'}`}><SubjectIcon className="h-4 w-4" /></span>
                  <span className="truncate">{subject.label}</span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className={`relative overflow-hidden rounded-2xl border ${theme.split(' ').slice(3, 4).join(' ')} bg-white p-6 sm:p-7`}>
            <div className={`absolute -right-8 -top-10 h-40 w-40 rounded-full ${theme.split(' ').slice(2, 3).join(' ')} opacity-80`} />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${theme.split(' ').slice(0, 2).join(' ')} text-white shadow-lg`}><Icon className="h-5 w-5" /></div>
                  <div><span className={`text-xs font-black tracking-[0.16em] ${theme.split(' ').slice(3, 4).join(' ')}`}>FOCUS AREA</span><h3 className="text-2xl font-black text-slate-800">{active.title}</h3></div>
                </div>
                <p className="max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">{active.summary}</p>
              </div>
              <div className="flex flex-col justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
                <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${theme.split(' ').slice(2, 4).join(' ')}`}>{active.tag}</span>
                <Link to={`/strategy/${active.id}`} className="inline-flex w-fit items-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-black text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-slate-700">閱讀更多詳情 <ArrowUpRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyTipsV2;
