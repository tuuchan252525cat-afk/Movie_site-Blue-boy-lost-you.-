import React, { useState } from 'react';
import { ArrowUp, Share2, Check, ExternalLink, Heart, Film } from 'lucide-react';
import { MOVIE_INFO } from '../data/movieData';

export const Footer: React.FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleShareX = () => {
    const text = encodeURIComponent(`現役高校生が描く、高校生の恋愛のリアル。映画『${MOVIE_INFO.title}』公式サイト。2027年3月14日 福岡上映会「AOI FILM FEST」開催決定！\n#君を失う青い僕 #AOIFILMFEST #高校生映画\n`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(window.location.href)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs font-gothic relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-900">
          {/* Brand & Concept */}
          <div className="space-y-2 max-w-md">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-sky-400" />
              <span className="font-mincho text-xl font-bold text-white tracking-wider">
                『{MOVIE_INFO.title}』
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-gothic">
              {MOVIE_INFO.catchphrase}。<br />
              鹿児島・宮崎の高校生クリエイターが県境を超えて制作する長編青春映画プロジェクト。
            </p>
          </div>

          {/* Social Share & Back to Top */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleShare}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors"
              title="サイトURLをコピー"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{isCopied ? 'URLコピー完了' : 'URLを共有'}</span>
            </button>

            <button
              onClick={handleShareX}
              className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Xでポスト</span>
            </button>

            <a
              href={MOVIE_INFO.campfireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-red-950/60 border border-red-800/60 text-rose-300 hover:bg-red-900/60 flex items-center gap-1.5 transition-colors"
            >
              <Heart className="w-3.5 h-3.5 text-red-400" />
              <span>CAMPFIREプロジェクト</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white text-slate-400 transition-colors"
              aria-label="ページ最上部へ戻る"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Navigation Quick Links in Footer */}
        <div className="py-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] text-slate-400">
          <a href="#top" className="hover:text-sky-300 transition-colors">TOP</a>
          <a href="#story" className="hover:text-sky-300 transition-colors">作品概要・あらすじ</a>
          <a href="#cast" className="hover:text-sky-300 transition-colors">登場人物・キャスト募集</a>
          <a href="#staff" className="hover:text-sky-300 transition-colors">監督・スタッフ紹介</a>
          <a href="#screening" className="hover:text-sky-300 transition-colors">上映イベント【AOI FILM FEST】</a>
          <a href="#crowdfunding" className="hover:text-sky-300 transition-colors">クラウドファンディング・リターン</a>
        </div>

        {/* Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>
            © 2026-2027 映画『君を失う、青い僕。』製作委員会 / 徳留拓東・岩本佑都 All Rights Reserved.
          </p>
          <p className="text-[10px] text-slate-400">
            企画・製作：徳留 拓東（鹿児島県） / 岩本 佑都（宮崎県）
          </p>
        </div>
      </div>
    </footer>
  );
};
