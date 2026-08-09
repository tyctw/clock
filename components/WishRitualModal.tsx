import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Heart, Sparkles, X } from 'lucide-react';

type Phase = 'writing' | 'sealing' | 'blessing' | 'released';
interface Props { message: string; onComplete: () => void; onCancel: () => void; }

const copy: Record<Phase, { title: string; subtitle: string }> = {
  writing: { title: '正在寫下祝福', subtitle: '讓這份心意成為前進的光。' },
  sealing: { title: '封存這份心意', subtitle: '祝福已經準備啟程。' },
  blessing: { title: '點亮你的祝福', subtitle: '願努力都能開出最好的結果。' },
  released: { title: '祝福已送達', subtitle: '一起朝目標前進，建中見！' },
};

export const WishRitualModal: React.FC<Props> = ({ message, onComplete, onCancel }) => {
  const [phase, setPhase] = useState<Phase>('writing');
  const done = useRef(onComplete);
  useEffect(() => { done.current = onComplete; }, [onComplete]);
  useEffect(() => {
    const timers = [setTimeout(() => setPhase('sealing'), 1100), setTimeout(() => setPhase('blessing'), 2450), setTimeout(() => setPhase('released'), 4200), setTimeout(() => done.current(), 6500)];
    return () => timers.forEach(clearTimeout);
  }, []);
  const activeIndex = ['writing', 'sealing', 'blessing', 'released'].indexOf(phase);
  const released = phase === 'released';
  const sealed = phase !== 'writing';

  return createPortal(<div className="fixed inset-0 z-[2147483647] isolate flex items-center justify-center overflow-hidden bg-[#160e2d]/95 px-4 text-white backdrop-blur-xl">
    <style>{`
      @keyframes aurora { 0%,100% { transform: translate3d(-6%,-3%,0) rotate(0); } 50% { transform: translate3d(7%,6%,0) rotate(12deg); } }
      @keyframes twinkle { 0%,100% { opacity:.15; transform:scale(.7); } 50% { opacity:1; transform:scale(1.4); } }
      @keyframes orbit { to { transform:rotate(360deg); } }
      @keyframes flare { 0% { transform:scale(.2); opacity:0; } 35% { opacity:1; } 100% { transform:scale(2.2); opacity:0; } }
      @keyframes burst { 0% { transform:translate(-50%,-50%) scale(.3); opacity:0; } 25% { opacity:1; } 100% { transform:translate(calc(-50% + var(--x)),calc(-50% + var(--y))) scale(1); opacity:0; } }
      @keyframes flight { 0% { transform:translateY(0) scale(1) rotate(0); opacity:1; } 100% { transform:translateY(-120vh) scale(.55) rotate(7deg); opacity:0; } }
      @keyframes seal { 0%,100% { transform:scale(1); } 50% { transform:scale(1.16); } }
      .wish-aurora { animation:aurora 9s ease-in-out infinite alternate; }.wish-star { animation:twinkle var(--d) ease-in-out infinite; animation-delay:var(--delay); }.wish-orbit { animation:orbit var(--orbit) linear infinite; }.wish-burst { animation:burst 1.8s cubic-bezier(.12,.7,.2,1) forwards; animation-delay:var(--delay); }.wish-flight { animation:flight 2s cubic-bezier(.18,.75,.24,1) forwards; }.wish-seal { animation:seal 1.1s ease-in-out infinite; }
    `}</style>
    <div className="wish-aurora absolute -left-1/4 -top-1/3 h-[70vh] w-[70vh] rounded-full bg-fuchsia-600/25 blur-[110px]" /><div className="wish-aurora absolute -bottom-1/4 -right-1/4 h-[65vh] w-[65vh] rounded-full bg-cyan-500/20 blur-[110px]" style={{ animationDelay: '-4s' }} />
    {[...Array(46)].map((_, i) => <i key={i} className="wish-star absolute h-1 w-1 rounded-full bg-white" style={{ left: `${(i * 43) % 100}%`, top: `${(i * 67) % 100}%`, '--d': `${1.8 + (i % 4)}s`, '--delay': `${-(i % 5)}s` } as React.CSSProperties} />)}
    <button onClick={onCancel} aria-label="取消送出祝福" className={`absolute right-5 top-5 z-30 rounded-full border border-white/20 bg-white/10 p-3 text-white/75 transition hover:bg-white/20 hover:text-white ${phase === 'writing' ? '' : 'pointer-events-none opacity-0'}`}><X className="h-5 w-5" /></button>
    <div className="relative z-10 flex w-full max-w-md flex-col items-center">
      <div className="mb-6 text-center"><div className="mb-3 flex items-center justify-center gap-2 text-[10px] font-black tracking-[0.35em] text-rose-200"><Sparkles className="h-4 w-4" />WISH RITUAL<Sparkles className="h-4 w-4" /></div><h2 className="text-3xl font-black tracking-tight sm:text-4xl">{copy[phase].title}</h2><p className="mt-2 text-sm font-medium text-violet-100/75">{copy[phase].subtitle}</p></div>
      <div className="relative flex h-[335px] w-full items-center justify-center">
        {(phase === 'blessing' || released) && <><div className="absolute h-64 w-64 rounded-full border border-amber-200/30" /><div className="wish-orbit absolute h-72 w-72 rounded-full border border-fuchsia-200/20" style={{ '--orbit': '8s' } as React.CSSProperties}><i className="absolute -top-1 left-1/2 h-2 w-2 rounded-full bg-amber-200 shadow-[0_0_14px_5px_rgba(253,230,138,.7)]" /></div><div className="wish-orbit absolute h-56 w-56 rounded-full border border-cyan-200/20" style={{ '--orbit': '5s', animationDirection: 'reverse' } as React.CSSProperties}><i className="absolute bottom-2 right-4 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_12px_4px_rgba(165,243,252,.7)]" /></div><div className="absolute h-48 w-48 rounded-full bg-amber-300/25 blur-3xl" /></>}
        {released && <>{[...Array(32)].map((_, i) => <i key={i} className="wish-burst absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gradient-to-br from-amber-100 via-rose-300 to-fuchsia-400 shadow-[0_0_12px_rgba(255,255,255,.95)]" style={{ '--x': `${((i * 79) % 420) - 210}px`, '--y': `${((i * 47) % 330) - 165}px`, '--delay': `${(i % 8) * 35}ms` } as React.CSSProperties} />)}<div className="absolute h-32 w-32 rounded-full border border-white/30" style={{ animation: 'flare 1.4s ease-out infinite' }} /></>}
        <div className={`relative w-[285px] ${released ? 'wish-flight' : ''}`}><div className="absolute inset-x-8 -bottom-10 h-20 rounded-full bg-fuchsia-500/40 blur-2xl" /><div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#fffdf8] via-[#fff1f5] to-[#e9e2ff] p-2 shadow-[0_28px_90px_rgba(76,29,149,.52)]"><div className="relative min-h-[245px] overflow-hidden rounded-[1.6rem] border border-rose-200/70 bg-white/80 px-7 py-8 text-slate-700"><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-rose-100" /><div className="relative flex items-center justify-between text-rose-500"><span className="text-[10px] font-black tracking-[0.22em]">TO THE FUTURE</span><Heart className={`h-5 w-5 fill-current ${sealed ? 'wish-seal text-rose-500' : ''}`} /></div><p className="relative mt-7 line-clamp-5 text-center text-xl font-black leading-relaxed tracking-wide">{message}</p><div className="absolute bottom-5 left-0 right-0 flex justify-center"><span className="rounded-full bg-rose-100 px-3 py-1 text-[10px] font-black tracking-[0.18em] text-rose-600">116 年會考加油</span></div></div><div className={`absolute left-1/2 top-[86px] z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-rose-400 to-fuchsia-600 text-white shadow-xl transition-all duration-500 ${sealed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>{phase === 'blessing' || released ? <Check className="h-6 w-6" /> : <Heart className="h-5 w-5 fill-current" />}</div></div></div>
      </div>
      <div className="mt-3 flex items-center gap-2">{['writing', 'sealing', 'blessing', 'released'].map((step, i) => <span key={step} className={`h-1.5 rounded-full transition-all duration-500 ${i <= activeIndex ? 'w-9 bg-gradient-to-r from-rose-300 to-amber-200' : 'w-3 bg-white/20'}`} />)}</div>
    </div>
  </div>, document.body);
};
