import React from 'react';
import { BookOpen, Heart, Users, Sparkles, Film } from 'lucide-react';
import { MOVIE_INFO } from '../data/movieData';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-sky-400 text-xs font-medium uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>STORY & ABOUT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-mincho text-white tracking-wider">
            作品概要・あらすじ
          </h2>
          <p className="text-sm text-slate-400 mt-2 font-gothic">
            {MOVIE_INFO.concept}
          </p>
        </div>

        {/* Lead Quote Card */}
        <div className="relative max-w-3xl mx-auto mb-16 p-6 sm:p-10 rounded-2xl bg-gradient-to-b from-slate-950/80 to-slate-900/90 border border-slate-800 shadow-xl text-center">
          <div className="inline-block mb-4">
            <span className="text-sky-400 text-xs tracking-widest font-gothic font-semibold uppercase px-3 py-1 rounded-full bg-sky-950/60 border border-sky-800/50">
              {MOVIE_INFO.badge}
            </span>
          </div>
          <blockquote className="font-mincho text-lg sm:text-2xl text-slate-100 font-medium leading-relaxed tracking-wider">
            「高校生だけで、高校生にしか作れないもの。<br className="hidden sm:inline" />
            たどり着いたのは、<span className="text-sky-300 font-semibold underline decoration-sky-500/40 underline-offset-8">『高校生の恋愛のリアルを映画化する』</span>ことでした。」
          </blockquote>
          <p className="mt-6 text-sm text-slate-300 leading-relaxed font-gothic max-w-2xl mx-auto">
            好きバレに告白、デートや衝突まで。一人の高校生のリアルな恋愛体験を描く作品です。
            甘酸っぱい思い出を思い出していただけるだけでなく、高校生のリアルに共感していただけたら嬉しいです。
          </p>
        </div>

        {/* Main Content Grid: Left Poster Scene & Right Story Synopsis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 group">
              <img
                src="/images/movie_story.jpg"
                alt="映画『君を失う、青い僕。』メインビジュアル"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs text-sky-400 font-gothic">現役高校生が描く、高校生の恋愛のリアル</span>
                <p className="font-mincho text-lg font-bold">『君を失う、青い僕。』</p>
              </div>
            </div>

            {/* Floating Info Tag */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-slate-950/95 border border-slate-800 p-4 rounded-xl shadow-2xl backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-1">
                <Film className="w-3.5 h-3.5" />
                <span>制作陣</span>
              </div>
              <p className="text-xs text-slate-300 font-gothic">
                {MOVIE_INFO.leadStaff}
              </p>
            </div>
          </div>

          {/* Synopsis Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-bold font-mincho text-white mb-4 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>あらすじ</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-gothic">
                <p>
                  ここは、人口の少ない田舎町。
                  登下校中に高校生のキラキラとした恋愛が始まった。
                </p>
                <p>
                  初めは、友達に相談していたものの、恥ずかしさからなかなか言えず。
                  恋人がいながらも、別の人を気になり始める主人公。
                </p>
                <p>
                  そして、新たな恋が始まった。うまくいっていたのも束の間、二人の恋は破局を迎える。
                </p>
                <p>
                  友人にたくさんの隠し事をしていた主人公だったが、相談するとずっと支えてくれた友達。
                  これが心の支えとなり、友人のありがたさを知る。
                </p>
                <p className="font-semibold text-sky-300 border-l-2 border-sky-400 pl-3 py-1 italic">
                  ただ最後に、一件の通知が――。
                </p>
              </div>
            </div>

            {/* Specifications Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Heart className="w-4 h-4" />
                  <span>作品テーマ</span>
                </div>
                <div className="text-base font-bold font-mincho text-white">
                  {MOVIE_INFO.theme}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  恋の痛みだけでなく、人と人とが支え合う友情の価値を描きます。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Users className="w-4 h-4" />
                  <span>企画意図</span>
                </div>
                <div className="text-base font-bold font-mincho text-white">
                  高校生が作る映像上映イベント
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  映画制作から上映会の企画・運営まで高校生自身の手で実現します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
