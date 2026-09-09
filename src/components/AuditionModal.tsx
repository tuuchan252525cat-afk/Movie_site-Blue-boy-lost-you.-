import React, { useState } from 'react';
import { X, Send, Copy, Check, Instagram, Sparkles, AlertCircle } from 'lucide-react';
import { CAST_RECRUITMENT, MOVIE_INFO } from '../data/movieData';

interface AuditionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditionModal: React.FC<AuditionModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [prefecture, setPrefecture] = useState<'鹿児島県' | '宮崎県' | 'その他'>('鹿児島県');
  const [grade, setGrade] = useState('高校1年生');
  const [role, setRole] = useState('男子高校生役');
  const [experience, setExperience] = useState('未経験（やってみたい！）');
  const [igHandle, setIgHandle] = useState('');
  const [comment, setComment] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const generatedMessage = `【映画『${MOVIE_INFO.title}』キャスト応募】
氏名：${name || '（未入力）'}
在住：${prefecture}
学年：${grade}
希望役：${role}
演技経験：${experience}
連絡先IG：${igHandle || '（未入力）'}
メッセージ：
${comment || 'よろしくお願いします！'}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedMessage);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          aria-label="閉じる"
        >
          <X className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-sky-950 border border-sky-500 text-sky-400 flex items-center justify-center mx-auto shadow-lg shadow-sky-500/20">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-mincho text-white">
              ご応募メッセージを作成しました！
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              下記の応募文をコピーして、徳留拓東のInstagram DMへお送りいただくか、制作陣へ直接ご連絡ください。
            </p>

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-left font-mono text-xs text-slate-200 whitespace-pre-wrap max-h-48 overflow-y-auto">
              {generatedMessage}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleCopy}
                className="flex-1 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'コピーしました！' : '応募文をコピー'}</span>
              </button>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagramを開く</span>
              </a>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-slate-400 hover:text-slate-200 underline pt-2 block mx-auto"
            >
              閉じる
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold text-sky-400 tracking-wider uppercase">
                CAST AUDITION ENTRY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-mincho text-white mt-1">
                高校生キャスト 応募・問い合わせ
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                鹿児島・宮崎在住の高校生向け出演者オーディションフォームです。
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-slate-300 font-medium mb-1">お名前 (ニックネーム可)</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="例：山田 太郎 / アオイ"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">お住まい</label>
                  <select
                    value={prefecture}
                    onChange={(e) => setPrefecture(e.target.value as any)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">学年</label>
                  <select
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="高校1年生">高校1年生</option>
                    <option value="高校2年生">高校2年生</option>
                    <option value="高校3年生">高校3年生</option>
                    <option value="その他">その他（高校生年代）</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">希望する役</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="男子高校生役（2名募集）">男子高校生役</option>
                    <option value="女子高校生役（2名募集）">女子高校生役</option>
                    <option value="どちらでも・おまかせ">どちらでも・おまかせ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">演技・撮影経験</label>
                  <select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-sky-500"
                  >
                    <option value="未経験（やってみたい！）">未経験（大歓迎）</option>
                    <option value="演劇部・舞台経験あり">演劇部・舞台経験あり</option>
                    <option value="自主映像・モデル等経験あり">映像・モデル経験あり</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Instagram アカウント (任意)</label>
                <input
                  type="text"
                  value={igHandle}
                  onChange={(e) => setIgHandle(e.target.value)}
                  placeholder="@your_instagram"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">意気込み・メッセージ</label>
                <textarea
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="高校生だけで作る映画に興味を持ちました！よろしくお願いします。"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <div className="p-3 bg-slate-900/60 border border-slate-800 rounded-xl flex items-start gap-2 text-[11px] text-amber-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{CAST_RECRUITMENT.notes}</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>応募メッセージを作成する</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
