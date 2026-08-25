import React, { useState } from 'react';
import { CalendarDays, Copy, Menu, QrCode, Send, Share2, X } from 'lucide-react';

interface ClockHeaderProps { isMenuOpen: boolean; onMenuToggle: () => void; }

const ClockHeader: React.FC<ClockHeaderProps> = ({ isMenuOpen, onMenuToggle }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareFeedback, setShareFeedback] = useState(false);
  const shareUrl = window.location.href;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareFeedback(true);
      window.setTimeout(() => setShareFeedback(false), 2000);
    } catch {
      // The browser may block clipboard access in an embedded preview.
    }
  };

  const handleShare = async () => {
    const shareData = { title: '116 會考倒數', text: '一起掌握會考重要時程與倒數資訊！', url: shareUrl };
    try {
      if (navigator.share) await navigator.share(shareData);
      else await copyLink();
    } catch {
      // Closing the native share panel is not an error that needs to be shown.
    }
  };

  return <>
    <header className="fixed left-0 right-0 top-0 z-30 px-4 pt-3 sm:px-8 sm:pt-4"><div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-[#e6dccd] bg-[#fffdfa]/90 px-3 shadow-[0_8px_22px_rgba(65,51,31,0.08)] backdrop-blur-xl sm:px-4"><div className="flex min-w-0 items-center gap-2.5"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#193968] text-white shadow-sm"><CalendarDays className="h-[1.125rem] w-[1.125rem]" /></span><div className="min-w-0"><p className="truncate text-sm font-black tracking-tight text-[#193968]">116 會考倒數</p><p className="hidden text-[10px] font-bold tracking-wide text-slate-400 sm:block">掌握重要時程，穩步前進</p></div></div><div className="flex items-center gap-2"><button type="button" onClick={() => setIsShareOpen(true)} aria-label="分享網站" className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#dce8f4] bg-[#f4f7fb] text-[#193968] transition hover:bg-white hover:text-blue-600"><Share2 className="h-4 w-4" /></button><button type="button" onClick={onMenuToggle} aria-expanded={isMenuOpen} aria-controls="mobile-menu" aria-label="開啟菜單" className={`flex h-9 items-center gap-2 rounded-xl border px-2.5 text-xs font-black transition ${isMenuOpen ? 'border-[#193968] bg-[#193968] text-white' : 'border-[#dce8f4] bg-[#f4f7fb] text-[#193968] hover:bg-white'}`}><span className="hidden sm:block">選單</span>{isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button></div></div></header>
    {isShareOpen && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/40 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="分享網站"><section className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-white bg-[#fffdfa] shadow-2xl"><div className="flex items-center justify-between border-b border-[#eee5d9] px-6 py-5"><div><p className="text-xs font-black tracking-[0.16em] text-blue-500">SHARE WEBSITE</p><h2 className="mt-1 text-xl font-black text-[#193968]">分享給朋友</h2></div><button type="button" onClick={() => setIsShareOpen(false)} aria-label="關閉分享視窗" className="rounded-xl bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200"><X className="h-4 w-4" /></button></div><div className="px-6 py-6 text-center"><div className="mx-auto mb-4 flex h-48 w-48 items-center justify-center rounded-2xl border border-[#dce8f4] bg-white p-3 shadow-sm"><img src={`https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(shareUrl)}`} alt="網站分享 QR Code" className="h-full w-full" /></div><div className="mb-5 flex items-center justify-center gap-1.5 text-sm font-bold text-slate-600"><QrCode className="h-4 w-4 text-blue-500" />掃描 QR Code 開啟網站</div><div className="grid grid-cols-2 gap-3"><button type="button" onClick={copyLink} className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-black text-blue-700 transition hover:bg-blue-100"><Copy className="h-4 w-4" />複製連結</button><button type="button" onClick={handleShare} className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#193968] px-4 py-3 text-sm font-black text-white transition hover:bg-[#10264e]"><Send className="h-4 w-4" />立即分享</button></div>{shareFeedback && <p role="status" className="mt-3 text-xs font-bold text-emerald-600">分享網址已複製</p>}</div></section></div>}
  </>;
};

export default ClockHeader;
