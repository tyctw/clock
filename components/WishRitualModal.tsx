import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Heart, Sparkles, X } from 'lucide-react';

type RitualPhase = 'writing' | 'sealing' | 'blessing' | 'released';

interface WishRitualModalProps {
  message: string;
  onComplete: () => void;
  onCancel: () => void;
}

const PHASE_COPY: Record<RitualPhase, { title: string; subtitle: string }> = {
  writing: { title: '收下這份心意', subtitle: '將祝福寫進星願信箋' },
  sealing: { title: '封緘祝福', subtitle: '讓溫柔的話語被好好珍藏' },
  blessing: { title: '星光正在回應', subtitle: '願努力都有回音，前路都有光' },
  released: { title: '祝福已送達', subtitle: '這份力量已加入加油牆' },
};

export const WishRitualModal: React.FC<WishRitualModalProps> = ({ message, onComplete, onCancel }) => {
  const [phase, setPhase] = useState<RitualPhase>('writing');
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('sealing'), 1200),
      setTimeout(() => setPhase('blessing'), 2600),
      setTimeout(() => setPhase('released'), 4300),
      setTimeout(() => onCompleteRef.current(), 6100),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const copy = PHASE_COPY[phase];
  const isSealed = phase === 'sealing' || phase === 'blessing' || phase === 'released';
  const isReleased = phase === 'released';

  return createPortal(
    <div className="fixed inset-0 z-[2147483647] isolate flex items-center justify-center overflow-hidden bg-slate-950/95 px-4 text-white backdrop-blur-xl">
      <style>{`
        @keyframes wish-drift { 0%,100% { transform: translate3d(0,0,0); opacity: .18; } 50% { transform: translate3d(14px,-22px,0); opacity: .8; } }
        @keyframes wish-pulse { 0%,100% { transform: scale(.88); opacity: .3; } 50% { transform: scale(1.18); opacity: .78; } }
        @keyframes wish-particle { 0% { transform: translate(-50%,-50%) scale(.25); opacity: 0; } 24% { opacity: 1; } 100% { transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1); opacity: 0; } }
        @keyframes wish-card-out { to { transform: translateY(-36px) scale(.72) rotate(-3deg); opacity: 0; } }
        .wish-drift { animation: wish-drift var(--duration) ease-in-out infinite; animation-delay: var(--delay); }
        .wish-pulse { animation: wish-pulse 1.5s ease-in-out infinite; }
        .wish-particle { animation: wish-particle 1.65s cubic-bezier(.12,.7,.25,1) forwards; }
      `}</style>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(167,139,250,.34),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(14,165,233,.2),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(244,114,182,.18),transparent_28%)]" />
      {[...Array(28)].map((_, index) => (
        <span
          key={index}
          className="wish-drift absolute h-1 w-1 rounded-full bg-white"
          style={{
            left: `${(index * 37) % 100}%`, top: `${(index * 61) % 100}%`,
            '--duration': `${3 + (index % 5)}s`, '--delay': `${-(index % 4)}s`,
          } as React.CSSProperties}
        />
      ))}

      <button
        onClick={onCancel}
        aria-label="取消送出留言"
        className={`absolute right-5 top-5 z-30 rounded-full border border-white/15 bg-white/10 p-3 text-white/70 transition hover:bg-white/20 hover:text-white ${phase === 'writing' ? '' : 'pointer-events-none opacity-0'}`}
      >
        <X className="h-5 w-5" />
      </button>

      <div className="relative z-10 flex w-full max-w-md flex-col items-center">
        <div className="mb-7 text-center transition-all duration-500">
          <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.32em] text-violet-200">
            <Sparkles className="h-4 w-4" /> 星願儀式 <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{copy.title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-300">{copy.subtitle}</p>
        </div>

        <div className="relative flex h-[310px] w-full items-center justify-center sm:h-[330px]">
          {phase === 'blessing' && <div className="wish-pulse absolute h-72 w-72 rounded-full bg-violet-400/30 blur-3xl" />}
          {isReleased && [...Array(22)].map((_, index) => (
            <span
              key={index}
              className="wish-particle absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gradient-to-br from-amber-200 to-fuchsia-400 shadow-[0_0_12px_rgba(255,255,255,.9)]"
              style={{ '--x': `${((index * 53) % 340) - 170}px`, '--y': `${((index * 79) % 310) - 155}px`, animationDelay: `${(index % 6) * 45}ms` } as React.CSSProperties}
            />
          ))}

          <div className={`relative w-[285px] transition-all duration-[1500ms] ${isReleased ? 'animate-[wish-card-out_1500ms_ease-in_forwards]' : 'translate-y-0 opacity-100'}`}>
            <div className="absolute inset-x-8 -bottom-8 h-16 rounded-full bg-violet-500/40 blur-2xl transition-all duration-700" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#fffdf7] via-[#f5edff] to-[#dbeafe] p-2 shadow-[0_25px_80px_rgba(76,29,149,.45)]">
              <div className="relative min-h-[245px] rounded-[1.6rem] border border-violet-200/70 bg-white/70 px-7 py-8 text-slate-700">
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-full bg-violet-100/80" />
                <div className="relative flex items-center justify-between text-violet-500">
                  <span className="text-xs font-black tracking-[0.22em]">TO THE FUTURE</span>
                  <Heart className={`h-5 w-5 fill-current transition-transform duration-500 ${isSealed ? 'scale-125 text-rose-500' : ''}`} />
                </div>
                <p className="relative mt-7 line-clamp-5 text-center text-xl font-black leading-relaxed tracking-wide text-slate-700">{message}</p>
                <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-black tracking-[0.2em] text-violet-600">116 願你閃閃發光</span>
                </div>
              </div>

              <div className={`absolute inset-x-0 top-0 h-28 origin-top bg-gradient-to-b from-violet-300 via-fuchsia-200 to-transparent transition-transform duration-700 ${isSealed ? 'rotate-x-0' : '-rotate-x-90'}`} style={{ transformStyle: 'preserve-3d' }} />
              <div className={`absolute left-1/2 top-[92px] z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-rose-400 to-fuchsia-600 shadow-lg transition-all duration-500 ${isSealed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                {phase === 'blessing' || isReleased ? <Check className="h-6 w-6" /> : <Heart className="h-5 w-5 fill-current" />}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          {(['writing', 'sealing', 'blessing', 'released'] as RitualPhase[]).map((step, index) => (
            <span key={step} className={`h-1.5 rounded-full transition-all duration-500 ${index <= ['writing', 'sealing', 'blessing', 'released'].indexOf(phase) ? 'w-8 bg-violet-300' : 'w-3 bg-white/20'}`} />
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
};
