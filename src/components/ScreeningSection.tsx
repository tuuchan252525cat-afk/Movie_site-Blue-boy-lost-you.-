import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Sparkles, ExternalLink, CalendarPlus } from 'lucide-react';
import { SCREENING_EVENT, MOVIE_INFO } from '../data/movieData';

export const ScreeningSection: React.FC = () => {
  const handleAddToCalendar = () => {
    // Generate Google Calendar Link
    const title = encodeURIComponent(`【上映会】映画『${MOVIE_INFO.title}』上映＆舞台挨拶 (AOI FILM FEST)`);
    const details = encodeURIComponent(
      `高校生が描く青春映画『${MOVIE_INFO.title}』本編上映＆舞台挨拶トークセッション\n入場チケット：大人1,000円 / 高校生以下 無料\n公式サイト：${window.location.href}`
    );
    const location = encodeURIComponent('福岡県内 会場');
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=20270314T020000Z/20270314T070000Z&details=${details}&location=${location}`;
    window.open(googleCalUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="screening" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Visual lighting backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-300 text-xs font-medium uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>SCREENING EVENT / 福岡上映会</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-mincho text-white tracking-wider">
            {SCREENING_EVENT.name}
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-gothic">
            {SCREENING_EVENT.subtitle}
          </p>
        </div>

        {/* Big Event Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Event Visual Poster (Left) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-slate-700/80 group bg-slate-950">
              <img
                src="/images/aoi_screening.jpg"
                alt="『君を失う、青い僕。』作品上映＆舞台挨拶 (AOI FILM FEST 公式ポスター)"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Event Details (Right) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-sky-400 tracking-widest uppercase">
                PREMIERE SCREENING
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-mincho text-white mt-1">
                上映会情報・プログラム
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 font-gothic">
                高校生クリエイターが情熱を注いで制作した映画を大スクリーンで体感。
                上映後には監督・キャストによる舞台挨拶や制作裏話トークをお届けします。
              </p>
            </div>

            {/* Event Specs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase mb-1">
                  <Calendar className="w-4 h-4" />
                  <span>開催日時</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-mincho text-white">
                  {SCREENING_EVENT.date}
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5 font-mono">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>OPEN {SCREENING_EVENT.openTime} / START {SCREENING_EVENT.startTime}</span>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>開催会場</span>
                </div>
                <div className="text-base sm:text-lg font-bold font-mincho text-white">
                  {SCREENING_EVENT.venue}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-gothic">
                  ※会場の詳細・アクセスは決定次第、SNS・本サイトで発表
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl sm:col-span-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase mb-1">
                  <Ticket className="w-4 h-4" />
                  <span>チケット料金</span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-bold text-white font-gothic">
                  <span className="bg-emerald-950/40 text-emerald-300 border border-emerald-800/40 px-3 py-1 rounded-lg">
                    {SCREENING_EVENT.ticketInfo.adult}
                  </span>
                  <span className="bg-sky-950/40 text-sky-300 border border-sky-800/40 px-3 py-1 rounded-lg">
                    {SCREENING_EVENT.ticketInfo.student}
                  </span>
                </div>
              </div>
            </div>

            {/* Event Program List */}
            <div className="bg-slate-950/50 border border-slate-800/80 p-4 rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                当日タイムテーブル・予定プログラム
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-gothic">
                {SCREENING_EVENT.program.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#crowdfunding"
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 transition-all text-center"
              >
                <span>クラファンで無料招待チケットを入手</span>
              </a>

              <button
                onClick={handleAddToCalendar}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition-colors"
                title="Googleカレンダーに予定を登録"
              >
                <CalendarPlus className="w-4 h-4 text-sky-400" />
                <span>Googleカレンダーに追加</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
