import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, MessageCircleHeart, Quote, Send, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { WishRitualModal } from './WishRitualModal';

interface Cheer { id: number; message: string; createdAt: string; }

const colors = [
  'border-rose-200 border-t-rose-400 text-rose-500',
  'border-amber-200 border-t-amber-400 text-amber-500',
  'border-sky-200 border-t-sky-400 text-sky-500',
  'border-violet-200 border-t-violet-400 text-violet-500',
  'border-emerald-200 border-t-emerald-400 text-emerald-500',
];

const PAGE_SIZE = 150;

export const CheerWallPageV2: React.FC = () => {
  const [cheers, setCheers] = useState<Cheer[]>([]);
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ total: 0, today: 0 });
  const [page, setPage] = useState(1);
  const [ritual, setRitual] = useState<{ message: string; requestId: string } | null>(null);
  const lock = useRef(false);

  const loadCheers = async () => {
    const start = (page - 1) * PAGE_SIZE;
    const { data } = await supabase.from('cheers').select('id, message, created_at').order('created_at', { ascending: false }).range(start, start + PAGE_SIZE - 1);
    if (data) setCheers(data.map((item) => ({ id: item.id, message: item.message, createdAt: item.created_at })));
  };

  const loadStats = async () => {
    const { count: total } = await supabase.from('cheers').select('*', { count: 'exact', head: true });
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const { count: todayCount } = await supabase.from('cheers').select('*', { count: 'exact', head: true }).gte('created_at', today.toISOString());
    setStats({ total: total ?? 0, today: todayCount ?? 0 });
  };

  useEffect(() => {
    loadCheers();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);
  useEffect(() => { loadStats(); }, []);

  const completeSubmit = async () => {
    if (!ritual || lock.current) return;
    lock.current = true; setIsSubmitting(true); setError('');
    try {
      const { data, error: submitError } = await supabase.rpc('submit_cheer', { p_message: ritual.message.slice(0, 100), p_request_id: ritual.requestId }).single();
      if (submitError) throw submitError;
      if (data && page === 1) setCheers((current) => [{ id: data.id, message: data.message, createdAt: data.created_at }, ...current].slice(0, PAGE_SIZE));
      if (page !== 1) setPage(1);
      setMessage(''); setAgreed(false); loadStats();
    } catch {
      setError('祝福暫時無法送出，請稍後再試。');
    } finally {
      lock.current = false; setIsSubmitting(false); setRitual(null);
    }
  };

  const startSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!message.trim() || !agreed || isSubmitting) return;
    setRitual({ message: message.trim(), requestId: crypto.randomUUID() });
  };

  const totalPages = Math.max(1, Math.ceil(stats.total / PAGE_SIZE));

  return (
    <main className="mx-auto w-full max-w-6xl animate-fade-in px-4 pb-12">
      <Link to="/" className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-slate-500 shadow-sm transition-colors hover:text-rose-600"><ArrowLeft className="h-4 w-4" />回到首頁</Link>

      <section className="relative overflow-hidden rounded-[2.5rem] border border-[#efddea] bg-[#fffdfa] px-6 py-10 text-[#64384d] shadow-[0_22px_55px_rgba(141,77,105,0.12)] sm:px-10 sm:py-12">
        <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#f1cdd5_1px,transparent_1px)] [background-size:18px_18px]" /><div className="absolute -right-16 -top-20 h-80 w-80 rounded-full bg-rose-200/70 blur-3xl" /><div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-amber-200/50 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center sm:text-left">
          <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-100 to-amber-100 text-rose-500 shadow-sm ring-1 ring-rose-200 sm:mx-0"><MessageCircleHeart className="h-7 w-7" /></span>
          <p className="mb-3 text-xs font-black tracking-[0.24em] text-rose-500">CHEER TOGETHER</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl">考生加油打氣牆</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium leading-7 text-[#866374] sm:mx-0 sm:text-left sm:text-base">把你的祝福留在這裡，讓每一位正在努力的考生，都收到一點前進的力量。</p>
          <div className="mt-7 flex justify-center gap-3 sm:absolute sm:right-0 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2">
            <div className="rounded-2xl border border-rose-200 bg-white/75 px-5 py-3 shadow-sm backdrop-blur-sm"><b className="block text-2xl tabular-nums text-rose-500">{stats.total}</b><span className="text-xs font-bold text-rose-900/55">總祝福數</span></div>
            <div className="rounded-2xl border border-amber-200 bg-white/75 px-5 py-3 shadow-sm backdrop-blur-sm"><b className="block text-2xl tabular-nums text-amber-500">{stats.today}</b><span className="text-xs font-bold text-amber-900/55">今日新增</span></div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mt-8 max-w-4xl rounded-[2rem] border border-[#efddea] bg-[#fffdfa] p-5 shadow-[0_16px_35px_rgba(68,32,84,0.12)] sm:mt-10 sm:p-7">
        <div className="mb-4 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600"><Heart className="h-5 w-5 fill-current" /></span><div><h2 className="font-black text-slate-800">留下一句祝福</h2><p className="text-xs font-medium text-slate-500">你的話，可能正好成為某人的力量。</p></div></div>
        <form onSubmit={startSubmit}>
          <textarea value={message} onChange={(event) => { setMessage(event.target.value); setError(''); }} maxLength={100} disabled={isSubmitting} placeholder="例如：穩穩寫完每一題，你一定可以！" className="min-h-[112px] w-full resize-none rounded-2xl border border-rose-100 bg-rose-50/40 px-4 py-3 text-slate-700 outline-none transition focus:border-rose-300 focus:ring-4 focus:ring-rose-100" />
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><label className="flex items-center gap-2 text-xs font-medium text-slate-500"><input type="checkbox" checked={agreed} onChange={(event) => { setAgreed(event.target.checked); setError(''); }} className="h-4 w-4 rounded border-slate-300 accent-rose-500" />我同意遵守留言規範，不發布不當內容。</label><div className="flex items-center justify-between gap-3 sm:justify-end"><span className="text-xs text-slate-400">{message.length}/100</span><button type="submit" disabled={!message.trim() || !agreed || isSubmitting} className="inline-flex items-center gap-2 rounded-xl bg-[#d95669] px-4 py-2.5 text-sm font-black text-white shadow-md shadow-rose-200 transition hover:-translate-y-0.5 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-45">送出祝福 <Send className="h-4 w-4" /></button></div></div>
          {error && <p className="mt-3 text-sm font-bold text-rose-600">{error}</p>}
        </form>
      </section>

      <section className="mt-12"><div className="mb-6 flex items-end justify-between gap-4"><div><div className="mb-2 flex items-center gap-2 text-xs font-black tracking-[0.18em] text-rose-500"><Sparkles className="h-4 w-4" />CHEER NOTES</div><h2 className="text-2xl font-black tracking-tight text-slate-800">最新祝福</h2><p className="mt-1 text-sm font-medium text-slate-400">每一句都值得被看見</p></div><span className="rounded-full border border-rose-100 bg-rose-50 px-3 py-1.5 text-xs font-black text-rose-500">{stats.total} 則心意</span></div>
        {cheers.length ? <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{cheers.map((cheer, index) => { const tone = colors[index % colors.length]; return <article key={cheer.id} className={`group relative flex min-h-[190px] flex-col overflow-hidden rounded-2xl border border-t-4 bg-white p-5 shadow-[0_8px_18px_rgba(65,51,31,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(65,51,31,0.12)] ${tone}`}><div className="absolute -right-7 -top-7 h-24 w-24 rounded-full bg-current opacity-[0.045] transition-transform duration-500 group-hover:scale-150" /><div className="relative flex items-center justify-between"><span className="flex h-8 w-8 items-center justify-center rounded-xl bg-current/10"><Quote className="h-4 w-4" /></span><span className="text-[10px] font-black tracking-[0.16em] text-slate-300">CHEER NOTE</span></div><p className="relative my-5 flex-grow text-base font-bold leading-7 text-slate-700">{cheer.message}</p><div className="relative flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-slate-400"><span className={`inline-flex items-center gap-1 ${tone.split(' ').at(-1)}`}><Heart className="h-3.5 w-3.5 fill-current" />考生加油</span><time>{new Date(cheer.createdAt).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })}</time></div></article>; })}</div> : <div className="rounded-2xl border border-dashed border-rose-200 bg-white/60 py-14 text-center"><MessageCircleHeart className="mx-auto mb-3 h-10 w-10 text-rose-300" /><p className="font-bold text-slate-500">成為第一位留下祝福的人吧！</p></div>}
      </section>

      {totalPages > 1 && <nav aria-label="祝福分頁" className="mt-8 flex items-center justify-center gap-3"><button type="button" onClick={() => setPage((current) => Math.max(1, current - 1))} disabled={page === 1} className="inline-flex items-center gap-1 rounded-xl border border-rose-100 bg-white px-4 py-2.5 text-sm font-black text-rose-500 shadow-sm transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40"><ChevronLeft className="h-4 w-4" />上一頁</button><span className="rounded-xl bg-rose-50 px-4 py-2.5 text-sm font-black text-rose-600">第 {page} / {totalPages} 頁</span><button type="button" onClick={() => setPage((current) => Math.min(totalPages, current + 1))} disabled={page === totalPages} className="inline-flex items-center gap-1 rounded-xl border border-rose-100 bg-white px-4 py-2.5 text-sm font-black text-rose-500 shadow-sm transition hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-40">下一頁<ChevronRight className="h-4 w-4" /></button></nav>}

      {ritual && <WishRitualModal message={ritual.message} onComplete={completeSubmit} onCancel={() => setRitual(null)} />}
    </main>
  );
};
