import React from 'react';
import { Play, HeartHandshake, Sparkles, Calendar, MapPin, Users } from 'lucide-react';
import { MOVIE_INFO, SCREENING_EVENT } from '../data/movieData';
import { CrowdfundingState } from '../types';

interface HeroProps {
  cfState: CrowdfundingState;
}

export const Hero: React.FC<HeroProps> = ({ cfState }) => {
  const percent = Math.min(100, Math.round((cfState.currentAmount / cfState.targetAmount) * 100));

  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Poster Image with cinematic zoom and mood gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_project.jpg"
          alt="他県の仲間と創る短編映画 & 高校生 映像上映会プロジェクト"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered vignette & gradients with optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/50 to-slate-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/30 to-slate-950/80" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col items-center text-center">
        {/* Badges */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/70 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-lg shadow-sky-950/30">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>{MOVIE_INFO.badge}</span>
          <span className="text-slate-500">|</span>
          <span>鹿児島 × 宮崎 高校生クリエイター共同制作</span>
        </div>

        {/* Catchphrase */}
        <p className="font-mincho text-sm sm:text-base md:text-lg tracking-[0.25em] text-slate-300 mb-4 font-light">
          {MOVIE_INFO.catchphrase}
        </p>

        {/* Big Japanese Movie Title */}
        <div className="my-2 sm:my-4 relative">
          <h1 className="font-mincho text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            {MOVIE_INFO.title}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-sans tracking-[0.35em] text-sky-200/80 mt-2 font-light uppercase">
            {MOVIE_INFO.englishTitle}
          </p>
        </div>

        {/* Short Concept / Tagline */}
        <p className="max-w-2xl text-xs sm:text-sm md:text-base text-slate-300 mt-4 leading-relaxed font-gothic px-4">
          ひとりの高校生のリアルな恋愛体験を基に、好きバレ・告白・すれ違い、そして友達との絆を描く青春映画。
        </p>

        {/* Event Notice Badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 bg-slate-900/80 border border-slate-800/80 px-4 py-2 rounded-xl backdrop-blur-sm">
          <div className="flex items-center gap-1.5 text-amber-300 font-medium">
            <Calendar className="w-4 h-4" />
            <span>{SCREENING_EVENT.name}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1 text-slate-300">
            <span>{SCREENING_EVENT.date}</span>
          </div>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <div className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>福岡会場（作品上映＆舞台挨拶）</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <a
            id="hero-read-story-button"
            href="#story"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-sky-300 border border-slate-700/80 font-medium font-gothic text-sm flex items-center justify-center gap-2 shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>作品概要・あらすじ</span>
          </a>

          <a
            id="hero-support-button"
            href="#crowdfunding"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-medium font-gothic text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all transform hover:-translate-y-0.5"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>クラウドファンディングで支援</span>
          </a>
        </div>

        {/* Compact Crowdfunding Quick Status Bar */}
        <div className="mt-10 w-full max-w-2xl bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-2xl">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block mr-1" />
              CAMPFIRE 支援受付中
            </span>
            <span className="text-sky-400 font-semibold">{percent}% 達成</span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden mb-3">
            <div
              className="bg-gradient-to-r from-sky-500 via-indigo-400 to-rose-500 h-full rounded-full transition-all duration-700"
              style={{ width: `${percent}%` }}
            />
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
            <div className="border-r border-slate-800/80 pr-2">
              <div className="text-slate-400 text-[11px]">現在のご支援額</div>
              <div className="text-base sm:text-lg font-bold text-white font-gothic">
                ¥{cfState.currentAmount.toLocaleString()}
              </div>
            </div>
            <div className="border-r border-slate-800/80 pr-2">
              <div className="text-slate-400 text-[11px]">支援者数</div>
              <div className="text-base sm:text-lg font-bold text-white font-gothic flex items-center justify-center gap-1">
                <Users className="w-3.5 h-3.5 text-slate-400" />
                {cfState.supportersCount}人
              </div>
            </div>
            <div>
              <div className="text-slate-400 text-[11px]">残り期間</div>
              <div className="text-base sm:text-lg font-bold text-amber-300 font-gothic">
                {cfState.daysRemaining}日
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
