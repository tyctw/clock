import React, { useEffect } from 'react';
import { ChevronRight, Heart, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props { isOpen: boolean; onClose: () => void; }
const externalLinks = [
  { name: '基北區會考落點', url: 'https://tyctw.github.io/spare/?route=/scoring-rules/taipei' },
  { name: '桃連區會考落點', url: 'https://tyctw.github.io/spare/?route=/scoring-rules/taoyuan' },
  { name: '中投區會考落點', url: 'https://tyctw.github.io/spare/?route=/scoring-rules/central' },
];

const SidebarMenuV2: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => { const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); }; window.addEventListener('keydown', closeOnEscape); return () => window.removeEventListener('keydown', closeOnEscape); }, [onClose]);
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : 'unset'; return () => { document.body.style.overflow = 'unset'; }; }, [isOpen]);
  return <><div className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} onClick={onClose} aria-hidden="true" /><aside id="mobile-menu" role="dialog" aria-modal="true" aria-label="網站選單" className={`fixed right-0 top-0 z-50 flex h-full w-80 flex-col border-l border-[#e7ddce] bg-[#fffdfa]/95 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}><div className="flex items-center justify-between border-b border-[#eee5d9] px-7 py-6"><div><p className="text-xs font-black tracking-[0.16em] text-rose-500">NAVIGATION</p><h2 className="mt-1 text-xl font-black text-[#193968]">探索更多資訊</h2></div><button type="button" onClick={onClose} className="rounded-xl bg-slate-100 p-2 text-slate-500 hover:bg-slate-200"><X className="h-4 w-4" /></button></div><nav className="flex-grow space-y-3 overflow-y-auto p-7"><Link to="/mock-exams" onClick={onClose} className="flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 p-4 font-bold text-amber-800"><span>模擬考試日程</span><ChevronRight className="h-4 w-4" /></Link><a href="https://tyctw.github.io/spare/support/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-rose-200 bg-rose-50 p-4 font-bold text-rose-600"><span className="flex items-center gap-2"><Heart className="h-4 w-4 fill-current" />小額贊助</span><ChevronRight className="h-4 w-4" /></a>{externalLinks.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm font-bold text-slate-600 transition hover:bg-white"><span>{link.name}</span><ChevronRight className="h-4 w-4 text-slate-300" /></a>)}</nav><div className="border-t border-[#eee5d9] bg-[#fcfaf6] p-7"><p className="mb-2 text-[10px] font-black tracking-[0.16em] text-slate-400">CONTACT</p><a href="mailto:tyctw.analyze@gmail.com" className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600"><Mail className="h-4 w-4" />tyctw.analyze@gmail.com</a></div></aside></>;
};

export default SidebarMenuV2;
