import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, HeartHandshake, ExternalLink } from 'lucide-react';
import { audioEngine } from '../utils/sound';
import { MOVIE_INFO } from '../data/movieData';

interface HeaderProps {
  onOpenSupportModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSupportModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    if (isSoundOn) {
      audioEngine.stopAtmosphere();
      setIsSoundOn(false);
    } else {
      audioEngine.startAtmosphere();
      setIsSoundOn(true);
    }
  };

  const navLinks = [
    { label: '作品概要', href: '#story', en: 'STORY' },
    { label: 'キャスト・募集', href: '#cast', en: 'CAST' },
    { label: 'スタッフ', href: '#staff', en: 'STAFF' },
    { label: '上映会イベント', href: '#screening', en: 'EVENT' },
    { label: '支援・リターン', href: '#crowdfunding', en: 'CROWDFUND' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Movie Title */}
        <a href="#top" className="group flex flex-col">
          <span className="text-xs tracking-widest text-sky-400/80 font-medium font-gothic">
            映画公式サイト
          </span>
          <span className="text-lg sm:text-xl font-bold font-mincho tracking-wider text-white group-hover:text-sky-300 transition-colors">
            {MOVIE_INFO.title}
          </span>
          <span className="text-[10px] tracking-widest text-slate-400 uppercase font-sans">
            {MOVIE_INFO.englishTitle}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2.5 py-1.5 rounded text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex flex-col items-center group"
            >
              <span className="text-xs font-medium font-gothic tracking-wider group-hover:text-sky-300 transition-colors">
                {item.label}
              </span>
              <span className="text-[9px] tracking-widest text-slate-500 group-hover:text-slate-400 uppercase">
                {item.en}
              </span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Sound Toggle */}
          <button
            id="sound-toggle-button"
            onClick={toggleSound}
            aria-label={isSoundOn ? 'サウンドをミュート' : 'サウンドを再生'}
            className={`p-2 rounded-full border transition-all duration-200 text-xs flex items-center gap-1.5 ${
              isSoundOn
                ? 'bg-sky-950/60 border-sky-500 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
                : 'border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 bg-slate-900/60'
            }`}
            title={isSoundOn ? '音楽を停止' : '青春アンビエント音を再生'}
          >
            {isSoundOn ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            <span className="hidden md:inline text-[11px] font-gothic">
              {isSoundOn ? 'BGM ON' : 'BGM'}
            </span>
          </button>

          {/* CAMPFIRE Support Link Button */}
          <a
            id="header-campfire-button"
            href="#crowdfunding"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-md shadow-red-950/40 transition-all transform hover:-translate-y-0.5"
          >
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>CAMPFIREで応援</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/70 border border-slate-800"
            aria-label="メニューを開く"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-slate-950/98 border-b border-slate-800 backdrop-blur-xl px-6 py-6 shadow-2xl transition-all animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-slate-900 text-slate-200 hover:text-sky-300"
              >
                <span className="font-gothic font-medium">{item.label}</span>
                <span className="text-xs text-slate-500 tracking-wider font-sans">{item.en}</span>
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={MOVIE_INFO.campfireUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-sm shadow-md"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>CAMPFIRE プロジェクトを見る</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
              {onOpenSupportModal && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSupportModal();
                  }}
                  className="w-full py-2.5 rounded-lg border border-sky-600/40 text-sky-300 hover:bg-sky-950/40 text-sm font-medium"
                >
                  リターン詳細・ご支援手続き
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
