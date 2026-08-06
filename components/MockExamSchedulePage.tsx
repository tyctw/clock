import React from 'react';
import { ArrowLeft, CalendarDays, ClipboardList, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const exams = [
  {
    order: '一', date: ['115/09/08（二）', '115/09/09（三）'], chinese: '第 1～2 冊', english: '第 1～2 冊', math: '第 1～2 冊', science: <>生物：七上<br />理化：八上</>, social: '第 1～2 冊', publisher: '南一',
  },
  {
    order: '二', date: ['115/12/23（三）', '115/12/24（四）'], chinese: '第 1～4 冊', english: '第 1～4 冊', math: '第 1～4 冊', science: '第 1～4 冊', social: '第 1～4 冊', publisher: '翰林',
  },
  {
    order: '三', date: ['116/02/18（四）', '116/02/19（五）'], chinese: '第 1～5 冊', english: '第 1～5 冊', math: '第 1～5 冊', science: '第 1～5 冊', social: '第 1～5 冊', publisher: '南一',
  },
  {
    order: '四', date: ['116/04/15（四）', '116/04/16（五）'], chinese: '第 1～6 冊', english: '第 1～6 冊', math: '第 1～6 冊', science: '第 1～6 冊', social: '第 1～6 冊', publisher: '康軒',
  },
];

export const MockExamSchedulePage: React.FC = () => (
  <section className="animate-fade-in pb-10 pt-6 sm:pt-12">
    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#687891] transition-colors hover:text-[#fa6841]">
      <ArrowLeft className="h-4 w-4" /> 返回首頁
    </Link>

    <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#183468] px-7 py-9 text-white shadow-[0_20px_40px_rgba(16,43,89,0.2)] sm:px-10 sm:py-12">
      <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#ffcb4d]/20" />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.16em] text-[#ffcb4d]"><ClipboardList className="h-4 w-4" /> MOCK EXAM PLAN</div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">115 學年度九年級<br className="sm:hidden" />模擬考時間與範圍表</h1>
          <p className="mt-3 text-sm font-medium leading-6 text-[#d4def2]">掌握每次模擬考的日期、考試範圍與版本，安排最適合自己的複習節奏。</p>
        </div>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#ffcb4d] ring-1 ring-white/15"><CalendarDays className="h-8 w-8" /></div>
      </div>
    </div>

    <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[#e6dccc] bg-[#fffdfa] shadow-[0_12px_30px_rgba(72,53,27,0.08)]">
      <div className="border-b border-[#eee4d5] px-6 py-5 sm:px-8"><div className="flex items-center gap-2 text-sm font-bold text-[#536987]"><BookOpen className="h-4 w-4 text-[#fa6841]" /> 各科範圍依施測次別整理</div></div>
      <div className="overflow-x-auto">
        <table className="min-w-[980px] w-full text-left">
          <thead className="bg-[#f5f0e7] text-xs font-black tracking-wide text-[#435b7e]">
            <tr>
              <th className="px-6 py-5">次別</th><th className="px-5 py-5">施測日期</th><th className="px-5 py-5">國文<br /><span className="font-medium">（含寫作）</span></th><th className="px-5 py-5">英語／英聽</th><th className="px-5 py-5">數學</th><th className="px-5 py-5">自然</th><th className="px-5 py-5">社會</th><th className="px-5 py-5">備註</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#eee4d5] text-sm font-semibold text-[#3d5272]">
            {exams.map((exam) => <tr key={exam.order} className="transition-colors hover:bg-[#fff7e9]">
              <td className="px-6 py-6"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#183468] font-black text-white">{exam.order}</span></td>
              <td className="whitespace-nowrap px-5 py-6 leading-7 text-[#183468]">{exam.date.map(day => <div key={day}>{day}</div>)}</td>
              <td className="px-5 py-6">{exam.chinese}</td><td className="px-5 py-6">{exam.english}</td><td className="px-5 py-6">{exam.math}</td><td className="px-5 py-6 leading-6">{exam.science}</td><td className="px-5 py-6">{exam.social}</td>
              <td className="px-5 py-6"><span className="rounded-full bg-[#ffe9bd] px-3 py-1.5 text-xs font-black text-[#9a6714]">{exam.publisher}</span></td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
    <p className="mt-5 text-center text-xs font-medium text-[#78869a]">實際施測安排如有異動，請以學校公告為準。</p>
  </section>
);
