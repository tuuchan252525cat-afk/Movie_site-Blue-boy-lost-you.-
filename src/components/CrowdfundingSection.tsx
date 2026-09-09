import React from 'react';
import { HeartHandshake, PieChart, Users, Calendar, Sparkles, ExternalLink, Check, Gift } from 'lucide-react';
import { RETURN_PLANS, FUNDS_USAGE, MOVIE_INFO } from '../data/movieData';
import { CrowdfundingState, ReturnPlan } from '../types';

interface CrowdfundingSectionProps {
  cfState: CrowdfundingState;
  onSelectPlan: (plan: ReturnPlan) => void;
}

export const CrowdfundingSection: React.FC<CrowdfundingSectionProps> = ({
  cfState,
  onSelectPlan,
}) => {
  const percent = Math.min(100, Math.round((cfState.currentAmount / cfState.targetAmount) * 100));

  return (
    <section id="crowdfunding" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800/60 text-rose-400 text-xs font-medium uppercase tracking-widest mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>CAMPFIRE CROWDFUNDING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-mincho text-white tracking-wider">
            クラウドファンディング支援状況
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-gothic max-w-xl mx-auto">
            映画制作および福岡での上映会イベント開催に向け、CAMPFIREにてご支援を募っています。
          </p>
        </div>

        {/* Live Funding Progress Dashboard Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-600/20 text-red-400 text-xs font-semibold mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                CAMPFIRE 公開中プロジェクト
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-mincho text-white">
                高校生のリアルな恋愛体験を高校生が映画化！高校生の輝きをスクリーンへ
              </h3>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400 mt-2">
                <span>目標金額：<strong className="text-white font-mono">¥{cfState.targetAmount.toLocaleString()}</strong></span>
                <span className="text-slate-600">•</span>
                <span>プロジェクトオーナー：<strong className="text-white">徳留 拓東</strong></span>
                <span className="text-slate-600">•</span>
                <span>募集終了：<strong className="text-amber-300 font-mono">2026年10月31日</strong></span>
              </div>
            </div>

            {/* CAMPFIRE Official Page Button */}
            <a
              id="campfire-official-link-button"
              href={MOVIE_INFO.campfireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white font-medium text-sm shadow-lg shadow-red-950/50 transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>CAMPFIREプロジェクト詳細</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Big Progress Statistics */}
          <div className="pt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-5xl font-black font-gothic text-white tracking-tight">
                  ¥{cfState.currentAmount.toLocaleString()}
                </span>
                <span className="text-sm sm:text-base text-slate-400 font-medium">
                  現在のご支援総額
                </span>
              </div>
              <div className="text-2xl sm:text-4xl font-extrabold text-sky-400 font-mono">
                {percent}% <span className="text-xs sm:text-sm text-slate-400 font-normal">達成</span>
              </div>
            </div>

            {/* Gauge Progress Bar */}
            <div className="w-full bg-slate-900 rounded-full h-4 overflow-hidden p-0.5 border border-slate-800 mb-6">
              <div
                className="bg-gradient-to-r from-sky-500 via-indigo-500 to-rose-500 h-full rounded-full transition-all duration-1000 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                style={{ width: `${percent}%` }}
              />
            </div>

            {/* 3 Metric Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-950/60 border border-sky-800/50 text-sky-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">ご支援いただいた方</span>
                  <span className="text-xl sm:text-2xl font-bold font-gothic text-white">
                    {cfState.supportersCount} <span className="text-xs font-normal text-slate-400">人</span>
                  </span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800/50 text-amber-400">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">募集終了まで</span>
                  <span className="text-xl sm:text-2xl font-bold font-gothic text-amber-300">
                    {cfState.daysRemaining} <span className="text-xs font-normal text-slate-400">日</span>
                  </span>
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/80 p-4 rounded-2xl flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">All-in 方式</span>
                  <span className="text-sm font-semibold text-emerald-300 leading-tight block">
                    目標未達でも映画制作・上映を実施
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 資金について (Use of funds breakdown) */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-3xl p-6 sm:p-8 mb-16">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-2">
            <PieChart className="w-4 h-4" />
            <span>資金の使い道について</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-mincho text-white mb-4">
            ご支援金の使途内訳
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-gothic mb-6">
            皆さまからいただいた大切な資金は、映画撮影および福岡での上映会を最高の形で実現するため、以下の用途に大切に使用させていただきます。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {FUNDS_USAGE.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800/80 p-3.5 rounded-xl flex items-start justify-between gap-3"
              >
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-200">{item.item}</span>
                </div>
                <span className="text-xs font-mono font-bold text-sky-400 shrink-0 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-900">
                  {item.share}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-xs text-amber-300/90 font-gothic italic">
            ※目標金額を超えた場合は、追加の上映イベント開催費やロケーション撮影費、上映用パンフレット制作費に充てさせていただきます。
          </div>
        </div>

        {/* リターン一覧 (Return Plans) */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-sky-400 text-xs font-medium uppercase tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>RETURNS</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-bold font-mincho text-white">
            リターン一覧
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 font-gothic max-w-lg mx-auto">
            クラウドファンディングにご協力いただきますと、金額に応じた限定リターンと感謝メッセージ、映画本編エンドクレジットへのお名前掲載をさせていただきます。
          </p>
        </div>

        {/* Return Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RETURN_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all relative ${
                plan.recommended
                  ? 'bg-gradient-to-b from-sky-950/40 via-slate-950 to-slate-950 border-2 border-sky-500/80 shadow-2xl shadow-sky-950/50'
                  : 'bg-slate-950/90 border border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 right-6 bg-sky-500 text-slate-950 text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full tracking-wider shadow-md">
                  RECOMMENDED
                </div>
              )}

              <div>
                {/* Plan Code & Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                    プラン {plan.planCode}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {plan.category === 'location' ? '① ロケ地公開プラン' : '② 上映会無料招待プラン'}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold font-mincho text-white mb-2">
                  {plan.title}
                </h4>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl sm:text-3xl font-extrabold font-gothic text-white">
                    ¥{plan.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 ml-1">（税込・送料込）</span>
                </div>

                {/* Short Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-gothic mb-5">
                  {plan.description}
                </p>

                {/* Perk Items List */}
                <div className="border-t border-slate-800 pt-4 mb-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    含まれるリターン内容
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200 font-gothic">
                    {plan.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Delivery Date */}
                {plan.deliveryDate && (
                  <div className="text-[11px] text-slate-400 font-mono mb-4 bg-slate-900 px-2.5 py-1 rounded-lg inline-block border border-slate-800">
                    お届け予定：<span className="text-slate-200 font-semibold">{plan.deliveryDate}</span>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                id={`select-plan-${plan.planCode.toLowerCase()}-button`}
                onClick={() => onSelectPlan(plan)}
                className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-md ${
                  plan.recommended
                    ? 'bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sky-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                <span>このリターンを選択して支援</span>
              </button>
            </div>
          ))}
        </div>

        {/* Note on End Credit */}
        <div className="mt-8 text-center text-xs text-slate-400 bg-slate-950/40 border border-slate-800/80 p-4 rounded-xl max-w-2xl mx-auto">
          ※備考欄にご希望のエンドクレジット記載名をお書きください。ニックネーム可。エンドクレジット以外での使用はいたしません。
        </div>
      </div>
    </section>
  );
};
