import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Send, Sparkles, MessageCircleHeart, Quote, Flame, X } from 'lucide-react';

interface Cheer {
  id: number;
  message: string;
  createdAt: string;
}

const LanternRitualModal: React.FC<{ message: string; onComplete: () => void; onCancel: () => void }> = ({ message, onComplete, onCancel }) => {
   const [phase, setPhase] = useState<'ready'|'ignited'|'flying'>('ready');

   useEffect(() => {
       const t1 = setTimeout(() => {
           setPhase('ignited');
           const t2 = setTimeout(() => {
               setPhase('flying');
               const t3 = setTimeout(() => {
                   onComplete(); 
               }, 3500); 
           }, 1500); 
       }, 500);
       return () => {
           clearTimeout(t1);
       };
   }, [onComplete]);

   return (
     <div className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden">
        {/* Stars Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           {[...Array(30)].map((_, i) => (
              <div key={i} className="absolute bg-white rounded-full opacity-40 animate-pulse"
                   style={{ 
                       top: `${Math.random()*100}%`, 
                       left: `${Math.random()*100}%`, 
                       width: `${Math.random()*3+1}px`, 
                       height: `${Math.random()*3+1}px`, 
                       animationDuration: `${Math.random()*3+1}s`,
                       animationDelay: `${Math.random()*2}s` 
                   }} />
           ))}
        </div>

        <button onClick={onCancel} aria-label="取消留言" className={`absolute top-8 right-8 text-slate-400 hover:text-white transition-colors z-50 ${phase !== 'ready' ? 'hidden' : ''}`}>
           <X className="w-8 h-8" />
        </button>

        {/* Lantern Container */}
        <div className={`relative transition-all duration-[3000ms] ease-in-out ${phase === 'flying' ? '-translate-y-[150vh] scale-75 opacity-0' : 'translate-y-0 scale-100 opacity-100'} ${phase === 'ready' ? 'animate-float' : ''}`}>
           {/* Glow */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000 ${phase !== 'ready' ? 'w-96 h-96 bg-orange-500/60 blur-[100px]' : 'w-64 h-64 bg-orange-500/20 blur-[80px]'}`}></div>

           {/* Lantern Body */}
           <div className="relative flex flex-col items-center z-10 transition-transform duration-[50ms]" style={{ transform: phase === 'ignited' ? `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)` : 'none' }}>
              <div className="w-56 sm:w-72 h-72 sm:h-96 bg-gradient-to-b from-amber-100 via-orange-300 to-amber-600 rounded-t-[100px] rounded-b-3xl shadow-[0_0_50px_rgba(245,158,11,0.6)] flex items-center justify-center p-8 border-b-8 border-amber-900/40 relative overflow-hidden">
                 <p className="text-amber-950 font-black text-2xl sm:text-3xl leading-relaxed break-words [writing-mode:vertical-rl] tracking-[0.3em] max-h-full overflow-hidden z-10">
                    {message}
                 </p>
                 <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Base structure */}
              <div className="w-36 sm:w-48 h-4 bg-amber-950 rounded-b-lg relative"></div>

              {/* Fire glow */}
              <div className="absolute -bottom-10 flex flex-col items-center">
                 {phase !== 'ready' && <div className="w-24 h-24 bg-yellow-400 blur-2xl absolute opacity-80 animate-pulse"></div>}
                 <Flame className={`text-yellow-300 fill-yellow-400 transition-all duration-1000 ${phase !== 'ready' ? 'w-24 h-24 drop-shadow-[0_0_40px_rgba(253,224,71,1)] animate-pulse' : 'w-10 h-10 drop-shadow-[0_0_10px_rgba(253,224,71,0.8)]'}`} />
              </div>
           </div>
        </div>

        {/* Removed manual ignite controls since it's automatic */}

        {/* Ignited message */}
        {phase === 'ignited' && (
           <div className="absolute bottom-32 z-20 animate-fade-in">
              <p className="text-orange-200 text-2xl font-black tracking-[0.5em] animate-pulse drop-shadow-[0_0_10px_rgba(253,186,116,0.8)]">願望升溫中...</p>
           </div>
        )}
     </div>
   )
}

export const CheerWallPage: React.FC = () => {
  const [cheers, setCheers] = useState<Cheer[]>([]);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [stats, setStats] = useState<{total: number, today: number}>({ total: 0, today: 0 });
  const [ritualState, setRitualState] = useState<{ show: boolean, message: string }>({ show: false, message: '' });
  const [isAgreed, setIsAgreed] = useState(false);

  useEffect(() => {
    fetchCheers();
    fetchStats();
  }, []);

  const fetchCheers = async () => {
    try {
      const res = await fetch('/api/cheers');
      if (res.ok) {
        const data = await res.json();
        setCheers(data);
      }
    } catch (err) {
      console.error("Failed to fetch cheers:", err);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/cheers/stats');
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch (err) {
      console.error("Failed to fetch stats:", err);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isSubmitting) return;
    
    if (!isAgreed) {
      setErrorMsg('請勾選同意留言規範');
      return;
    }

    setRitualState({ show: true, message: message.trim() });
  };

  const executeSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/cheers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: ritualState.message })
      });

      if (res.ok) {
        const newCheer = await res.json();
        setCheers(prev => [newCheer, ...prev].slice(0, 50));
        fetchStats();
        setMessage('');
        setIsAgreed(false);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || '發送失敗，請稍後再試');
      }
    } catch (err) {
      console.error("Failed to post cheer:", err);
      setErrorMsg('網路發生錯誤，請稍後再試');
    } finally {
      setIsSubmitting(false);
      setRitualState({ show: false, message: '' });
    }
  };

  // Color palettes for the sticky notes
  const cardStyles = [
    { bg: 'from-amber-100 via-orange-200 to-orange-400', border: 'border-orange-500/30 border-b-orange-700/40', text: 'text-orange-950', accent: 'bg-orange-500', icon: 'text-orange-400', quote: 'text-orange-200' },
    { bg: 'from-rose-100 via-rose-300 to-rose-500', border: 'border-rose-500/30 border-b-rose-700/40', text: 'text-rose-950', accent: 'bg-rose-500', icon: 'text-rose-400', quote: 'text-rose-200' },
    { bg: 'from-yellow-50 via-amber-200 to-amber-400', border: 'border-amber-500/30 border-b-amber-700/40', text: 'text-amber-950', accent: 'bg-amber-500', icon: 'text-amber-400', quote: 'text-amber-200' },
    { bg: 'from-red-100 via-red-300 to-red-500', border: 'border-red-500/30 border-b-red-700/40', text: 'text-red-950', accent: 'bg-red-500', icon: 'text-red-400', quote: 'text-red-200' },
    { bg: 'from-orange-50 via-amber-300 to-orange-500', border: 'border-orange-500/30 border-b-orange-700/40', text: 'text-orange-950', accent: 'bg-orange-500', icon: 'text-orange-400', quote: 'text-orange-200' },
  ];

  return (
    <div className="animate-fade-in flex-grow flex flex-col max-w-5xl mx-auto w-full px-4">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors">
          <ArrowLeft className="w-4 h-4" />
          返回首頁
        </Link>
      </div>
      
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-slate-200/60 p-6 sm:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-0 left-0 -ml-20 mt-20 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg shadow-amber-500/30 mb-6 transform -rotate-3">
            <MessageCircleHeart className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600 tracking-tight mb-4">
            考生加油打氣牆
          </h1>
          <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto mb-6">
            留下一句溫暖的話，給正在奮戰的自己或同學們一點鼓勵吧！每一句加油，都是支持彼此前進的力量。
          </p>
          
          <div className="flex items-center justify-center gap-4 sm:gap-8">
             <div className="bg-white/60 backdrop-blur-sm border border-rose-100 rounded-2xl px-6 py-3 shadow-sm flex flex-col items-center">
                 <span className="text-2xl sm:text-3xl font-black text-rose-500 tabular-nums">{stats.total}</span>
                 <span className="text-xs sm:text-sm font-bold text-slate-500 mt-1">總計留言</span>
             </div>
             <div className="bg-white/60 backdrop-blur-sm border border-amber-100 rounded-2xl px-6 py-3 shadow-sm flex flex-col items-center">
                 <span className="text-2xl sm:text-3xl font-black text-amber-500 tabular-nums">{stats.today}</span>
                 <span className="text-xs sm:text-sm font-bold text-slate-500 mt-1">今日新增</span>
             </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mb-16 relative z-10 max-w-3xl mx-auto">
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 flex flex-col transition-all focus-within:ring-4 focus-within:ring-amber-500/20 focus-within:border-amber-400">
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              placeholder="寫下你的加油留言... (例如：116會考加油！我們頂峰相見！)"
              maxLength={100}
              aria-label="加油留言"
              className="w-full bg-transparent border-none px-6 py-4 text-slate-700 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-0"
              disabled={isSubmitting}
            />
            
            <div className="flex flex-col sm:flex-row items-center justify-between px-4 pb-4 pt-4 sm:pb-2 sm:pt-2 border-t border-slate-50 gap-4 sm:gap-4">
              <div className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 w-full sm:w-auto">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={isAgreed}
                      aria-label="確認不包含不當用詞"
                      onChange={(e) => {
                        setIsAgreed(e.target.checked);
                        if (errorMsg) setErrorMsg(null);
                      }}
                      className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-amber-500 checked:border-amber-500 transition-colors focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:outline-none"
                    />
                    <Sparkles className="w-3.5 h-3.5 text-white absolute pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" />
                  </div>
                  <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                    我確認留言沒有包含不當用詞與惡意規範
                  </span>
                </label>
              </div>

              <button
                type="submit"
                disabled={!message.trim() || !isAgreed || isSubmitting}
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-md shadow-amber-500/20"
              >
                <span>送出留言</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start mt-3 px-2">
            <div className="flex-grow">
              {errorMsg && (
                <p className="text-sm text-red-500 font-medium animate-fade-in text-left">
                  {errorMsg}
                </p>
              )}
            </div>
            <p className="text-sm text-slate-400 font-medium whitespace-nowrap ml-4">
              {message.length}/100 字
            </p>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {cheers.length > 0 ? (
            cheers.map((cheer, index) => {
              const style = cardStyles[index % cardStyles.length];
              
              return (
                <div key={cheer.id} className="relative flex flex-col items-center justify-end group transition-all duration-500 transform hover:-translate-y-4">
                  {/* Fire glow & Base */}
                  <div className="absolute -bottom-4 animate-pulse opacity-80 group-hover:opacity-100 transition-opacity">
                    <Flame className="w-10 h-10 text-yellow-300 fill-yellow-400 drop-shadow-[0_0_15px_rgba(253,224,71,0.8)]" />
                  </div>
                  <div className="w-16 h-10 bg-gradient-to-t from-orange-500 to-yellow-200 rounded-full blur-xl absolute -bottom-6 animate-pulse opacity-60"></div>
                  
                  {/* Lantern Body */}
                  <div className={`relative w-full overflow-hidden bg-gradient-to-b ${style.bg} border ${style.border} rounded-t-[40px] rounded-b-2xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.5)] transition-all duration-500 flex flex-col h-full z-10 mb-2 border-b-8`}>
                      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>

                      <div className="relative z-10 flex-grow flex flex-col min-h-[8rem]">
                         <p className={`font-black text-xl sm:text-2xl ${style.text} leading-relaxed tracking-widest text-center flex-grow flex items-center justify-center break-words drop-shadow-sm`}>
                            {cheer.message}
                         </p>
                      </div>
                      
                      <div className="mt-6 flex items-center justify-between relative z-10 border-t border-black/5 pt-4">
                         <div className="flex items-center gap-2">
                             <div className={`w-6 h-6 rounded-full ${style.accent} bg-opacity-20 flex items-center justify-center`}>
                                 <MessageCircleHeart className={`w-3 h-3 ${style.icon}`} />
                             </div>
                             <span className={`text-xs font-bold ${style.text} opacity-80`}>
                                 匿名祝福
                             </span>
                         </div>
                         <span className={`text-xs font-bold ${style.text} opacity-60 tracking-wider`}>
                           {new Date(cheer.createdAt).toLocaleDateString('zh-TW', { month: 'short', day: 'numeric' })}
                         </span>
                      </div>
                  </div>
                  
                  {/* Lantern Base structure */}
                  <div className="w-2/3 h-3 bg-amber-900 rounded-b-lg relative z-0 shadow-lg">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-amber-950/50"></div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-center bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
              <Sparkles className="w-12 h-12 text-slate-300 mb-4" />
              <p className="text-xl text-slate-500 font-medium">目前還沒有留言</p>
              <p className="text-slate-400 mt-2">來當第一個留下祝福的人吧！</p>
            </div>
          )}
        </div>
      </div>

      {ritualState.show && (
        <LanternRitualModal 
          message={ritualState.message} 
          onComplete={executeSubmit} 
          onCancel={() => setRitualState({ show: false, message: '' })} 
        />
      )}
    </div>
  );
};
