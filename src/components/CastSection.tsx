import React from 'react';
import { Users, UserCheck, MapPin, Send, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { CHARACTERS, CAST_RECRUITMENT } from '../data/movieData';

interface CastSectionProps {
  onOpenAuditionModal: () => void;
}

export const CastSection: React.FC<CastSectionProps> = ({ onOpenAuditionModal }) => {
  return (
    <section id="cast" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-sky-400 text-xs font-medium uppercase tracking-widest mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>CHARACTERS & CASTING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-mincho text-white tracking-wider">
            登場人物 ＆ キャスト緊急募集
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-gothic max-w-xl mx-auto">
            リアルな心情を生きる4人の高校生キャラクターと、現在進行中の出演者オーディション情報。
          </p>
        </div>

        {/* 4 Characters Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CHARACTERS.map((char, index) => (
            <div
              key={char.role}
              className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-5 hover:border-sky-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/60 border border-sky-900/60 px-2 py-0.5 rounded">
                    ROLE 0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium text-amber-300 flex items-center gap-1 bg-amber-950/40 px-2 py-0.5 rounded-full border border-amber-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    キャスト募集中
                  </span>
                </div>
                <h3 className="text-lg font-bold font-mincho text-white group-hover:text-sky-300 transition-colors">
                  {char.role}
                </h3>
                <p className="text-xs font-medium text-sky-300/80 mb-3">
                  {char.nameTitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-gothic">
                  {char.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span>出演枠</span>
                <span className="text-slate-200 font-medium">高校生キャスト</span>
              </div>
            </div>
          ))}
        </div>

        {/* High School Cast Emergency Recruitment Banner Box */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-sky-500/40 bg-gradient-to-br from-slate-900 via-sky-950/30 to-slate-900 shadow-2xl p-6 sm:p-10">
          {/* Background shooting photo blend */}
          <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-25 md:opacity-35 pointer-events-none">
            <img
              src="/images/shooting.jpg"
              alt="映画撮影風景"
              className="w-full h-full object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500 text-white text-xs font-bold uppercase tracking-wider mb-4 animate-bounce">
              <Sparkles className="w-3.5 h-3.5" />
              <span>緊急募集！高校生だけで作る青春映画</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-bold font-mincho text-white leading-tight">
              高校生キャスト 出演者募集
            </h3>

            <p className="text-sm sm:text-base text-slate-200 mt-4 leading-relaxed font-gothic">
              {CAST_RECRUITMENT.subtitle}。
              俳優を目指したい高校生はもちろん、<span className="text-sky-300 font-semibold underline underline-offset-4">未経験の方も大歓迎</span>です！
              ぜひ、高校生で集まって最高の青春を創りませんか？
            </p>

            {/* Requirements Box */}
            <div className="mt-6 bg-slate-950/80 border border-slate-800 rounded-xl p-4 sm:p-5 backdrop-blur-md">
              <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <UserCheck className="w-4 h-4" />
                <span>〈キャストの募集条件〉</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {CAST_RECRUITMENT.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-amber-300">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{CAST_RECRUITMENT.notes}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <button
                id="cast-open-audition-modal-button"
                onClick={onOpenAuditionModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>オーディションに応募・問い合わせ</span>
              </button>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white text-xs sm:text-sm font-medium flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                <span>徳留拓東 Instagram DMへ連絡</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
