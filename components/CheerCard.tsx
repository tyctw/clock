import React, { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircleHeart, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface Cheer { id: number; message: string; }

const CheerCard: React.FC = () => {
  const [cheers, setCheers] = useState<Cheer[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchCheers = async () => {
      const { data } = await supabase.from('cheers').select('id, message').order('created_at', { ascending: false }).limit(10);
      if (data?.length) setCheers(data);
    };
    fetchCheers();
  }, []);

  useEffect(() => {
    if (cheers.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % cheers.length), 6000);
    return () => window.clearInterval(timer);
  }, [cheers.length]);

  const message = cheers[index]?.message ?? '努力不會白費，建中見！';

  return (
    <article className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-[#f0cdbd] bg-[#fff8f1] p-5 shadow-[0_18px_38px_rgba(195,92,46,0.12)] sm:p-6">
      <div className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-rose-200/60 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-amber-200/60 blur-3xl" />
      <div className="absolute right-5 top-3 text-8xl font-black tracking-tighter text-orange-500/[0.055]">♥</div>

      <div className="relative flex h-full flex-col justify-between gap-5">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-3 py-1.5 text-[10px] font-black tracking-[0.18em] text-rose-600"><MessageCircleHeart className="h-3.5 w-3.5" />加油牆 CHEER WALL</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f06445] text-white shadow-lg shadow-orange-200"><Quote className="h-4 w-4" /></span>
        </div>

        <div className="flex flex-1 items-center border-l-4 border-[#f28a61] pl-5">
          <p className="line-clamp-3 font-serif text-2xl font-bold leading-relaxed tracking-wide text-[#603226] sm:text-3xl">{message}</p>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-orange-200/70 pt-4">
          <div className="flex gap-1.5">{Array.from({ length: Math.min(Math.max(cheers.length, 1), 5) }, (_, dotIndex) => <span key={dotIndex} className={`h-1.5 rounded-full transition-all ${dotIndex === index % 5 ? 'w-5 bg-[#f06445]' : 'w-1.5 bg-orange-200'}`} />)}</div>
          <Link to="/cheer-wall" className="inline-flex items-center gap-2 rounded-xl bg-[#f06445] px-4 py-2.5 text-sm font-black text-white shadow-md shadow-orange-200 transition-all hover:-translate-y-0.5 hover:bg-[#db4d31]">留下你的祝福 <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </article>
  );
};

export default CheerCard;
