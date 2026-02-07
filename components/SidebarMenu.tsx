import React, { useState, useEffect } from 'react';

const links = [
  { name: '學測倒數', url: 'https://ceecc.vercel.app/' },
  { name: '統測倒數', url: 'https://teece.vercel.app/' },
  { name: '分科倒數', url: 'https://ceeecc.vercel.app/' },
];

const SidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* New Toggle Button Design */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-2 pl-3 pr-2 py-2 rounded-full backdrop-blur-xl transition-all duration-300 border shadow-lg hover:shadow-xl group ${
          isOpen 
            ? 'bg-slate-800 text-white border-slate-700 hover:bg-slate-700' 
            : 'bg-white/80 text-slate-700 border-white/60 hover:bg-white hover:text-blue-600'
        }`}
        aria-label="Toggle Menu"
      >
        <span className={`text-xs font-bold tracking-widest uppercase hidden sm:block transition-colors ${isOpen ? 'text-slate-300' : 'text-slate-500 group-hover:text-blue-600'}`}>
            Menu
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-slate-700 rotate-90' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
            {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
            ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            )}
        </div>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/95 border-l border-slate-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8 pt-28 flex-grow overflow-y-auto">
          <div className="mb-8">
             <h3 className="text-2xl font-black text-slate-800 mb-2">倒數導航</h3>
             <p className="text-sm text-slate-500">更多升學考試倒數計時器</p>
          </div>
          
          <nav className="space-y-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 text-slate-600 hover:text-blue-600 transition-all shadow-sm hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-500 transition-colors"></div>
                   <span className="font-bold tracking-wide">{link.name}</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-30 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-8 border-t border-slate-100 bg-slate-50/50">
           <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact</p>
           </div>
           <a href="mailto:tyctw.analyze@gmail.com" className="block text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors mb-4">
             tyctw.analyze@gmail.com
           </a>
           <p className="text-[10px] text-slate-400 leading-relaxed font-mono">
             © TYCTW Analyze. All rights reserved.
           </p>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;