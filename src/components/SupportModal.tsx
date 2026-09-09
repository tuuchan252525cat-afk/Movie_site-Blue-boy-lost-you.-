import React from 'react';
import { X, HeartHandshake, Check, ExternalLink, ShieldCheck, Info } from 'lucide-react';
import { ReturnPlan } from '../types';
import { MOVIE_INFO } from '../data/movieData';

interface SupportModalProps {
  plan: ReturnPlan | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  plan,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !plan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          aria-label="閉じる"
        >
          <X className="w-4 h-4" />
        </button>

        <div>
          <div className="mb-6">
            <span className="text-xs font-bold text-rose-400 tracking-wider uppercase">
              CROWDFUNDING RETURN
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-mincho text-white mt-1">
              リターンの詳細・ご支援手続き
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              クラウドファンディングプラットフォーム「CAMPFIRE」にて受付中です。
            </p>
          </div>

          {/* Selected Plan Summary Box */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-900/60">
                プラン {plan.planCode}
              </span>
              <span className="text-xs text-slate-400">
                {plan.category === 'location' ? '① ロケ地公開プラン' : '② 上映会無料招待プラン'}
              </span>
            </div>
            <h4 className="text-lg font-bold font-mincho text-white mb-2">
              {plan.title}
            </h4>
            <div className="mb-3">
              <span className="text-2xl font-bold font-gothic text-white">
                ¥{plan.price.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 ml-1">（税込・送料込）</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {plan.description}
            </p>

            <div className="border-t border-slate-800/80 pt-3">
              <span className="text-[11px] font-bold text-slate-400 block mb-2">
                含まれるリターン内容:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {plan.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>

            {plan.deliveryDate && (
              <div className="mt-3.5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>お届け予定時期</span>
                <span className="text-slate-200 font-semibold">{plan.deliveryDate}</span>
              </div>
            )}
          </div>

          {/* Pledge Guidance Notice */}
          <div className="bg-sky-950/20 border border-sky-900/40 rounded-xl p-3.5 mb-6 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-sky-400">
              <Info className="w-4 h-4 shrink-0" />
              <span>ご支援の流れ</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              下記の「CAMPFIREで支援する」ボタンを押すと、公式プロジェクトページが開きます。CAMPFIRE内で本プランを選択し、備考欄にご希望のエンドクレジット記載名をご記入の上お手続きください。
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            <a
              href={MOVIE_INFO.campfireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all text-center group"
            >
              <HeartHandshake className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>CAMPFIREでこのリターンを支援する</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 text-xs sm:text-sm font-medium border border-slate-800 transition-colors"
            >
              閉じる
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>CAMPFIRE公式の決済システムを通じて安全にご支援いただけます</span>
          </div>
        </div>
      </div>
    </div>
  );
};
