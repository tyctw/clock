import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, CalendarDays, ClipboardList, BookOpen, ExternalLink, CircleAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

type Exam = { code: string; label: string; date: string[]; chinese: React.ReactNode; english: React.ReactNode; math: React.ReactNode; science: React.ReactNode; social: React.ReactNode; note?: string };
type Publisher = { name: string; description: string; officialUrl?: string; exams: Exam[] };
const same = (scope: string, extra: Partial<Exam> = {}): Omit<Exam, 'code' | 'label' | 'date'> => ({ chinese: scope, english: scope, math: scope, science: scope, social: scope, ...extra });

const publishers: Publisher[] = [
  { name: '多數學校', description: '常見的 4 次校內模擬考安排；各校實際日期仍以公告為準。', exams: [
    { code: '一', label: '第 1 次', date: ['115/09/08（二）', '115/09/09（三）'], ...same('第 1～2 冊', { science: <>生物：七上<br />理化：八上</>, note: '南一版' }) },
    { code: '二', label: '第 2 次', date: ['115/12/23（三）', '115/12/24（四）'], ...same('第 1～4 冊', { note: '翰林版' }) },
    { code: '三', label: '第 3 次', date: ['116/02/18（四）', '116/02/19（五）'], ...same('第 1～5 冊', { note: '南一版' }) },
    { code: '四', label: '第 4 次', date: ['116/04/15（四）', '116/04/16（五）'], ...same('第 1～6 冊', { note: '康軒版' }) },
  ]},
  { name: '翰林版', description: '共 6 回，依各科進度安排範圍。', officialUrl: 'https://examjh.hanlin.com.tw/DownLoaded/Download/12', exams: [
    { code: 'J1', label: '第 1 次', date: ['115/09/09（三）', '115/09/10（四）'], ...same('第 1～2 冊', { science: '第 1、3 冊' }) },
    { code: 'J2', label: '第 2 次', date: ['115/10/28（三）', '115/10/29（四）'], ...same('第 1～3 冊', { science: '第 2、4 冊' }) },
    { code: 'J3', label: '第 3 次', date: ['115/12/23（三）', '115/12/24（四）'], ...same('第 1～4 冊') },
    { code: 'J4', label: '第 4 次', date: ['116/02/18（四）', '116/02/19（五）'], ...same('第 1～5 冊') },
    { code: 'J5', label: '第 5 次', date: ['116/03/30（二）', '116/03/31（三）'], ...same('第 1～5.5 冊', { note: '第 6 冊為前半冊' }) },
    { code: 'J6', label: '第 6 次', date: ['116/04/20（二）', '116/04/21（三）'], ...same('第 1～6 冊', { note: '模擬會考全範圍' }) },
  ]},
  { name: '康軒版', description: '共 6 回，含自然 A／B 卷進度安排。', officialUrl: 'https://exam.knsh.com.tw/download?id=160151&Tab=filesdown', exams: [
    { code: '9-1', label: '第 1 次', date: ['115/09/08（二）', '115/09/09（三）'], ...same('第 1～2 冊', { science: <>A 卷：第 1～2 冊<br />B 卷：第 1、3 冊</>, note: '八年級考生與九年級分開排名' }) },
    { code: '9-2', label: '第 2 次', date: ['115/10/29（四）', '115/10/30（五）'], ...same('第 1～3 冊', { science: <>A 卷：第 1～3 冊<br />B 卷：第 2、4 冊</> }) },
    { code: '9-3', label: '第 3 次', date: ['115/12/17（四）', '115/12/18（五）'], ...same('第 1～4 冊') },
    { code: '9-4', label: '第 4 次', date: ['116/02/16（二）', '116/02/17（三）'], ...same('第 1～5 冊') },
    { code: '9-5', label: '第 5 次', date: ['116/03/30（二）', '116/03/31（三）'], ...same('第 1～5.5 冊', { note: '第 6 冊至第 7 週進度' }) },
    { code: '9-6', label: '第 6 次', date: ['116/04/15（四）', '116/04/16（五）'], ...same('第 1～6 冊') },
  ]},
  { name: '南一版', description: '共 4 回，全面附寫作測驗，涵蓋七至九年級課程。', officialUrl: 'https://www.mietc.tw/Mietc_Api-1.5/FileDownload/Message/115%E5%AD%B8%E5%B9%B4%E4%B9%9D%E5%B9%B4%E7%B4%9A%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%95%99%E8%82%B2%E6%9C%83%E8%80%83%E6%A8%A1%E6%93%AC%E6%B8%AC%E9%A9%97%E4%BA%94%E7%A7%91%E5%8F%96%E6%9D%90%E7%AF%84%E7%96%87%E8%A1%A8.pdf/4c040fc6-5285-4a8a-ac05-a1011073577e.pdf', exams: [
    { code: 'A', label: '第一次', date: ['115/09/08（二）', '115/09/09（三）'], ...same('第 1～2 冊', { science: <>生物：七上<br />理化：八上</>, note: '七年級全部課程' }) },
    { code: 'B', label: '第二次', date: ['115/12/23（三）', '115/12/24（四）'], ...same('第 1～4 冊', { note: '七、八年級全部課程' }) },
    { code: 'A', label: '第三次', date: ['116/02/18（四）', '116/02/19（五）'], ...same('第 1～5 冊', { note: '七、八年級、九上全部課程' }) },
    { code: 'B', label: '第四次', date: ['116/04/20（二）', '116/04/21（三）'], ...same('第 1～6 冊', { note: '七、八、九年級全部綜合課程' }) },
  ]},
];

const Details: React.FC<{ exam: Exam }> = ({ exam }) => <dl className="grid grid-cols-2 gap-3 px-5 py-5 text-sm">
  {[['國文（含寫作）', exam.chinese], ['英語／英聽', exam.english], ['數學', exam.math], ['自然', exam.science]].map(([name, value]) => <div key={String(name)} className="rounded-2xl border border-[#eee4d5] bg-[#fffdfa] px-3 py-3 shadow-[0_3px_10px_rgba(72,53,27,0.035)]"><dt className="text-[11px] font-black tracking-wide text-[#8793a5]">{name}</dt><dd className="mt-1 font-black leading-6 text-[#3d5272]">{value}</dd></div>)}
  <div className="col-span-2 rounded-2xl border border-[#eee4d5] bg-[#fffdfa] px-3 py-3 shadow-[0_3px_10px_rgba(72,53,27,0.035)]"><dt className="text-[11px] font-black tracking-wide text-[#8793a5]">社會</dt><dd className="mt-1 font-black text-[#3d5272]">{exam.social}</dd></div>
  {exam.note && <div className="col-span-2 flex items-start gap-2 border-t border-dashed border-[#e5d8c4] pt-4"><span className="mt-0.5 rounded-md bg-[#fff0c9] px-2 py-0.5 text-[10px] font-black text-[#9a6714]">備註</span><dd className="font-bold leading-5 text-[#66758a]">{exam.note}</dd></div>}
</dl>;

export const MockExamSchedulePage: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const versionSelectorRef = useRef<HTMLDivElement>(null);
  const publisher = publishers[selected];

  useEffect(() => {
    if (!window.matchMedia('(max-width: 639px)').matches) return;
    versionSelectorRef.current?.querySelector<HTMLButtonElement>(`[data-version-index="${selected}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [selected]);
  return <section className="animate-fade-in pb-2 pt-6 sm:pb-6 sm:pt-12">
    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#687891] transition-colors hover:text-[#fa6841]"><ArrowLeft className="h-4 w-4" /> 返回首頁</Link>
    <div className="relative mt-6 overflow-hidden rounded-[2rem] bg-[#183468] px-7 py-9 text-white shadow-[0_20px_40px_rgba(16,43,89,0.2)] sm:px-10 sm:py-12"><div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#ffcb4d]/20" /><div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><div className="mb-3 flex items-center gap-2 text-xs font-black tracking-[0.16em] text-[#ffcb4d]"><ClipboardList className="h-4 w-4" /> MOCK EXAM PLAN</div><h1 className="text-3xl font-black tracking-tight sm:text-4xl">115 學年度九年級<br className="sm:hidden" />模擬考時間與範圍表</h1><p className="mt-3 text-sm font-medium leading-6 text-[#d4def2]">選擇使用的出版社版本，掌握對應的施測日期與複習範圍。</p></div><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#ffcb4d] ring-1 ring-white/15"><CalendarDays className="h-8 w-8" /></div></div></div>
    <div className="mt-7 rounded-[1.75rem] border border-[#e6dccc] bg-gradient-to-br from-[#fffdfa] to-[#fff8ed] p-4 shadow-[0_12px_26px_rgba(72,53,27,0.07)] sm:p-5"><div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="inline-flex rounded-full bg-[#eaf0fa] px-2.5 py-1 text-xs font-black tracking-wide text-[#183468]">選擇日程／版本</p><p className="mt-2 text-xs font-medium leading-5 text-[#78869a]">{publisher.description}</p>{publisher.officialUrl && <a href={publisher.officialUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-[#fa6841] transition-colors hover:text-[#c94b2c]">查看 {publisher.name} 官方範圍表 <ExternalLink className="h-3.5 w-3.5" /></a>}</div><div ref={versionSelectorRef} className="-mx-1 flex max-w-full gap-1.5 overflow-x-auto rounded-2xl border border-[#e9e0d2] bg-[#f5f0e7] p-1.5 shadow-inner scrollbar-thin"><span className="sr-only">滑動以選擇日程或版本</span>{publishers.map((item, index) => <button key={item.name} data-version-index={index} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-black transition-all duration-300 ${selected === index ? 'bg-[#183468] text-white shadow-[0_5px_12px_rgba(24,52,104,0.28)]' : 'text-[#66758a] hover:bg-white hover:text-[#183468]'}`}>{item.name}</button>)}</div></div></div>
    <div className="mt-6 space-y-4 md:hidden">{publisher.exams.map(exam => <article key={`${exam.code}-${exam.label}`} className="overflow-hidden rounded-3xl border border-[#e6dccc] bg-[#fffdfa] shadow-[0_10px_24px_rgba(72,53,27,0.08)] transition-transform duration-300 active:scale-[0.99]"><div className="flex items-center justify-between bg-gradient-to-r from-[#f5f0e7] via-[#faf6ee] to-[#fff7e6] px-5 py-4"><div className="flex items-center gap-3"><span className="flex min-w-10 items-center justify-center rounded-xl bg-[#183468] px-2 py-2.5 text-xs font-black text-white shadow-[0_4px_10px_rgba(24,52,104,0.22)]">{exam.code}</span><div><p className="text-sm font-black text-[#183468]">{exam.label}模擬考</p><p className="mt-1 text-xs font-bold text-[#718099]">{exam.date.join('、')}</p></div></div><span className="rounded-full border border-[#f3d99c] bg-[#fff0cf] px-3 py-1.5 text-xs font-black text-[#9a6714]">{publisher.name}</span></div><Details exam={exam} /></article>)}</div>
    <div className="mt-6 hidden overflow-hidden rounded-[1.75rem] border border-[#e6dccc] bg-[#fffdfa] shadow-[0_14px_32px_rgba(72,53,27,0.09)] md:block"><div className="border-b border-[#eee4d5] bg-gradient-to-r from-[#fffdfa] to-[#fff6e6] px-6 py-5 sm:px-8"><div className="flex items-center gap-2 text-sm font-bold text-[#536987]"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#fff0cf]"><BookOpen className="h-4 w-4 text-[#e87a28]" /></span> {publisher.name}｜各科範圍依施測次別整理</div></div><div className="overflow-x-auto"><table className="min-w-[980px] w-full text-left"><thead className="bg-[#edf2f9] text-xs font-black tracking-wide text-[#435b7e]"><tr><th className="px-6 py-5">回次</th><th className="px-5 py-5">施測日期</th><th className="px-5 py-5">國文<br /><span className="font-medium">（含寫作）</span></th><th className="px-5 py-5">英語／英聽</th><th className="px-5 py-5">數學</th><th className="px-5 py-5">自然</th><th className="px-5 py-5">社會</th><th className="px-5 py-5">備註</th></tr></thead><tbody className="divide-y divide-[#eee4d5] text-sm font-semibold text-[#3d5272]">{publisher.exams.map(exam => <tr key={`${exam.code}-${exam.label}`} className="odd:bg-[#fffdfa] even:bg-[#fff9ef] transition-colors hover:bg-[#fff0d6]"><td className="px-6 py-6"><span className="inline-flex min-w-10 justify-center rounded-xl bg-[#183468] px-3 py-2 font-black text-white shadow-[0_4px_10px_rgba(24,52,104,0.18)]">{exam.code}</span><div className="mt-2 text-xs font-bold text-[#66758a]">{exam.label}</div></td><td className="whitespace-nowrap px-5 py-6 leading-7 text-[#183468]">{exam.date.map(day => <div key={day}>{day}</div>)}</td><td className="px-5 py-6">{exam.chinese}</td><td className="px-5 py-6">{exam.english}</td><td className="px-5 py-6">{exam.math}</td><td className="px-5 py-6 leading-6">{exam.science}</td><td className="px-5 py-6">{exam.social}</td><td className="px-5 py-6 text-xs leading-6 text-[#66758a]">{exam.note ?? '—'}</td></tr>)}</tbody></table></div></div>
    <div role="note" className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-[#f2c86e] bg-gradient-to-r from-[#fff5de] to-[#fff0c9] px-4 py-3.5 text-center text-sm font-black text-[#82570d] shadow-[0_6px_14px_rgba(198,139,28,0.08)]"><CircleAlert className="h-5 w-5 shrink-0" /><span>實際施測日期、範圍與安排，仍需依照各校規定為主。</span></div>
  </section>;
};
