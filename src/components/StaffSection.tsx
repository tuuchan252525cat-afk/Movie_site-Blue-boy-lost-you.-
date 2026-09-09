import React from 'react';
import { Video, Award, CheckCircle2, Globe, HeartHandshake, Quote, MapPin } from 'lucide-react';
import { CREATORS, MOVIE_INFO } from '../data/movieData';

export const StaffSection: React.FC = () => {
  return (
    <section id="staff" className="py-24 bg-slate-900/40 relative overflow-hidden border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-sky-400 text-xs font-medium uppercase tracking-widest mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>DIRECTORS & CREATORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-mincho text-white tracking-wider">
            監督・制作スタッフ
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-gothic">
            鹿児島と宮崎、県境を超えて集まった現役高校生クリエイターによる共同制作
          </p>
        </div>

        {/* 2 Directors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CREATORS.map((creator, index) => (
            <div
              key={creator.name}
              className="bg-slate-950/80 border border-slate-800/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative group hover:border-slate-700 transition-all"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-sky-400 bg-sky-950/70 border border-sky-800/60 px-3 py-1 rounded-full">
                    {creator.role}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {creator.prefecture}
                  </span>
                </div>

                {/* Creator Name */}
                <div className="mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold font-mincho text-white">
                    {creator.name}
                  </h3>
                  <span className="text-xs font-sans text-slate-400 tracking-wider">
                    {creator.englishName}
                  </span>
                </div>

                {/* Bio text */}
                <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-gothic mb-6">
                  {creator.bio.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                  {creator.goodsOrProject && (
                    <p className="text-sky-300 font-medium pt-1">
                      ◆ {creator.goodsOrProject}
                    </p>
                  )}
                </div>

                {/* Qualifications */}
                {creator.qualifications && (
                  <div className="mb-5 bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>保有資格</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {creator.qualifications.map((q, i) => (
                        <li key={i}>・{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Achievements List */}
                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-2.5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>主な実績・採択</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {creator.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <span className="text-slate-500 shrink-0">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Creator SNS Links */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">SNS・リンク</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-sky-300 transition-colors"
                  >
                    <Globe className="w-3 h-3" />
                    <span>{creator.name} SNS</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story of Encounter: 県境を超えた青春 */}
        <div className="bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-6 sm:p-10 mb-12 shadow-xl">
          <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
            <HeartHandshake className="w-4 h-4" />
            <span>STORY OF COLLABORATION</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-mincho text-white mb-4">
            県境を超えた青春
          </h3>
          <div className="space-y-4 text-sm sm:text-base text-slate-200 leading-relaxed font-gothic max-w-3xl">
            <p>
              僕たちが出会ったのは、映像関係のイベントでした。
              県外に同じように映像を作っている高校生がいることを知れただけで、心から嬉しかったです。
            </p>
            <p>
              高校生であっても、<span className="text-sky-300 font-semibold">『自分を表現できる場所』・『輝ける場所』</span>を作るために、
              映像制作を行いながら上映会イベントを開催するための県境を超えて集まったメンバーです。
            </p>
          </div>
        </div>

        {/* Message from Directors: 最後に */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          <Quote className="w-10 h-10 text-slate-800 absolute top-6 right-6 pointer-events-none" />
          <h3 className="text-xl sm:text-2xl font-bold font-mincho text-white mb-6 border-b border-slate-800 pb-4">
            制作陣よりメッセージ ― 「最後に」
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-gothic whitespace-pre-line max-w-3xl">
            {MOVIE_INFO.messageFromDirectors}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
            <span className="font-mincho text-base sm:text-lg font-bold text-white tracking-widest">
              {MOVIE_INFO.directorsSignature}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
