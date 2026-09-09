import { ReturnPlan, CreatorProfile, CharacterInfo, CrowdfundingState } from '../types';

export const MOVIE_INFO = {
  title: '君を失う、青い僕。',
  englishTitle: 'Losing You, My Blue Youth',
  catchphrase: '現役高校生が描く、高校生の恋愛のリアル',
  subCatchphrase: '青春の光が、スクリーンに集う。',
  badge: '高校生の恋愛体験を映画化',
  concept: 'ひとりの高校生の恋愛体験を基にした、青春ドラマ',
  theme: '人と人との繋がり、友情',
  planningIntention: '高校生が作る映像上映会イベントの実施、上映（予定）',
  leadStaff: '脚本・撮影・編集：徳留 拓東・岩本 佑都',
  synopsis: `ここは、人口の少ない田舎町。登下校中に高校生のキラキラとした恋愛が始まった。

初めは、友達に相談していたものの、恥ずかしさからなかなか言えず。恋人がいながらも、別の人を気になり始める主人公。

そして、新たな恋が始まった。うまくいっていたのも束の間、二人の恋は破局を迎える。

友人にたくさんの隠し事をしていた主人公だったが、相談するとずっと支えてくれた友達。これが心の支えとなり、友人のありがたさを知る。

ただ最後に、一件の通知が――。`,
  messageFromDirectors: `高校生が映画を撮って、高校生主催の上映会を開きたい。そう簡単じゃないことも知っています。
しかし、僕たちは挑み続けます。

映像関係のイベントで出会い、「一緒に映像撮りたいね！」と会話した日から2週間。すでにストーリー概要が完成し、脚本作業に入っています。

『高校生クリエイターが輝ける環境』を目指して、僕たちの青春は続きます。高校生が持っている力、クリエイティブを信じて上映会まで走り続けます。

高校生が創る、高校生の恋愛のリアルを皆さんに届けるために。
高校生クリエイターが輝ける場所を作るために。
皆さんのご支援よろしくお願いします。`,
  directorsSignature: '徳留 拓東・岩本 佑都',
  campfireUrl: 'https://camp-fire.jp/projects/979846/preview?token=tjiicjr6&utm_campaign=cp_po_share_c_msg_projects_show'
};

export const CREATORS: CreatorProfile[] = [
  {
    name: '徳留 拓東',
    englishName: 'Tokudome Hiroki',
    role: '脚本・撮影・編集 / 共同代表',
    prefecture: '鹿児島県',
    bio: [
      '鹿児島県で精力的に活動する高校生映像クリエイター。',
      'オリジナルブランド/グッズ「scenelog.」を展開し、高校生ならではの繊細な光と色彩感覚を映像で紡ぎ出す。'
    ],
    qualifications: [
      '動画編集検定 2級（一般社団法人日本動画制作協会）',
      '文部科学省後援 色彩検定 3級'
    ],
    achievements: [
      '第6回オンラインアートフェス 映像作品出展',
      'Fukuoka Creators Fest 映像作品・写真出展',
      'NLA・ナキワラ！2026 ショートムービー部門 作品出展（鹿児島県代表として九州地区選考進出）'
    ],
    goodsOrProject: 'オリジナルグッズ「scenelog.」プロデュース',
    instagramUrl: 'https://www.instagram.com/',
    portfolioUrl: 'https://scenelog.jp'
  },
  {
    name: '岩本 佑都',
    englishName: 'Iwamoto Yuto',
    role: '脚本・撮影・編集 / 共同代表',
    prefecture: '宮崎県',
    bio: [
      '宮崎県で活動する高校生クリエイター。',
      '動画制作だけでなく、写真や書道、サイエンス・ロボティクスなど多彩な創作・探究活動に取り組む。'
    ],
    achievements: [
      'NLA・ナキワラ！2026 ショートムービー部門 作品出展（宮崎県代表として九州地区選考進出）',
      '宮崎frogs 2期生（令和6年度 経済産業省AKATSUKI プロジェクト採択）',
      'WRO Japan 2025 南九州予選 ジュニア部門 エキスパート競技 優勝・全国大会出場',
      '2025年度 MUSA(宮崎ジュニアサイエンスアカデミー) 宇宙コース 宇宙線クラス修了',
      '第3回 NE宮崎県大会 クロストークパネリスト'
    ],
    instagramUrl: 'https://www.instagram.com/',
    portfolioUrl: 'https://yuto-iwamoto.creative'
  }
];

export const CHARACTERS: CharacterInfo[] = [
  {
    role: '主人公 (男子高校生)',
    nameTitle: '揺れ動く心と秘密を抱える高校生',
    description: '登下校で始まった恋に胸を高鳴らせるも、次第に別の人へ惹かれていき、友人にも言えない葛藤を抱えてしまう。',
    castingStatus: 'recruiting'
  },
  {
    role: '恋人 (女子高校生)',
    nameTitle: '始まりの恋の相手',
    description: '純粋に主人公を想いながらも、すれ違いと小さな変化に胸を痛めていく女子高校生。',
    castingStatus: 'recruiting'
  },
  {
    role: '新たな想い人 (女子高校生)',
    nameTitle: '主人公の心を揺らす存在',
    description: '日常の中でふとした瞬間に出会い、主人公の心に新しい感情を芽生えさせる同級生。',
    castingStatus: 'recruiting'
  },
  {
    role: '親友 (男子高校生)',
    nameTitle: '嘘も秘密も受け止め支え続ける親友',
    description: 'たくさんの隠し事をしていた主人公が打ち明けたとき、責めることなく静かに寄り添い背中を押してくれた唯一無二の友達。',
    castingStatus: 'recruiting'
  }
];

export const CAST_RECRUITMENT = {
  title: '高校生キャスト 緊急募集！',
  subtitle: '高校生だけで作る青春映画に出演していただける高校生キャストを募集します',
  message: '俳優を目指したい高校生はもちろん、演技未経験の方も大歓迎です！ぜひ、高校生で集まって最高の青春を創りませんか？少しでも気になる方は、徳留拓東 InstagramのDMへご連絡ください。（企画書や日程の確認などをご案内いたします）',
  requirements: [
    '上映会での作品上映にご協力いただける方',
    '鹿児島県、または宮崎県に在住する高校生',
    '男子高校生 2名 / 女子高校生 2名'
  ],
  notes: '※応募数によってはお断りさせていただく場合がございます。あらかじめご了承ください。',
  contactInstagram: '@scenelog_creative / 徳留 拓東'
};

export const SCREENING_EVENT = {
  name: 'AOI FILM FEST',
  subtitle: '高校生が輝く映像上映イベント',
  date: '2027年3月14日 (Sun)',
  dateIso: '2027-03-14',
  openTime: '11:00',
  startTime: '13:00',
  venue: '福岡県内 会場（決定次第発表）',
  ticketInfo: {
    adult: '大人 1,000円',
    student: '高校生以下 無料（要整理券・予約）'
  },
  program: [
    '第1部：映画『君を失う、青い僕。』本編プレミア上映',
    '第2部：監督・スタッフ・キャストによる舞台挨拶＆メイキング秘話トーク',
    '第3部：高校生クリエイター交流セッション＆写真撮影会'
  ],
  copy: '青春の光が、スクリーンに集う'
};

export const INITIAL_CROWDFUNDING: CrowdfundingState = {
  targetAmount: 1500000,
  currentAmount: 0,
  supportersCount: 0,
  daysRemaining: 53,
  campfireUrl: 'https://camp-fire.jp/projects/979846/preview?token=tjiicjr6&utm_campaign=cp_po_share_c_msg_projects_show'
};

export const FUNDS_USAGE = [
  { item: '映画撮影、上映会におけるスタッフ・キャストさんの交通費', share: '35%' },
  { item: '撮影スタジオ等のレンタル費', share: '25%' },
  { item: '映像上映会 会場費、設営費', share: '20%' },
  { item: '広報/宣伝費', share: '10%' },
  { item: 'CAMPFIRE手数料', share: '10%' }
];

export const RETURN_PLANS: ReturnPlan[] = [
  {
    id: 'plan-a',
    category: 'location',
    planCode: 'A',
    title: 'ロケ地写真データ提供 プラン',
    price: 1000,
    description: '田舎町の美しいロケ地写真データをお届けします。デジタル機器の壁紙やSNSへの公開などご自由にお使いいただけます。',
    deliveryDate: '2026年11月',
    items: [
      'ロケ地写真の提供（デジタルデータ）',
      '感謝メッセージ',
      'エンドクレジットへのお名前掲載（ニックネーム可）'
    ]
  },
  {
    id: 'plan-b',
    category: 'location',
    planCode: 'B',
    title: '制作裏側動画 閲覧権プラン',
    price: 3000,
    description: '高校生制作陣による映画制作の舞台裏・メイキング映像を限定公開。動画共有サイトの非公開URLをお送りいたします。',
    deliveryDate: '2026年12月',
    items: [
      '制作裏側動画 閲覧権（非公開URL）',
      '感謝メッセージ',
      'エンドクレジットへのお名前掲載（ニックネーム可）'
    ],
    recommended: true
  },
  {
    id: 'plan-c',
    category: 'screening',
    planCode: 'C',
    title: '上映会招待チケット プラン',
    price: 5000,
    description: '福岡で開催される『AOI FILM FEST』上映会への招待チケットをお送りいたします。',
    deliveryDate: '2027年03月',
    items: [
      '上映会招待チケット（メールにて送信）',
      '感謝メッセージ',
      'エンドクレジットへのお名前掲載（ニックネーム可）'
    ]
  },
  {
    id: 'plan-d',
    category: 'screening',
    planCode: 'D',
    title: '上映会招待 ＋ 裏側レポート閲覧プラン',
    price: 10000,
    description: '上映会招待チケットに加え、撮影現場から毎月制作進捗をまとめた限定裏側レポートをお届けします。',
    deliveryDate: '2027年03月',
    items: [
      '上映会招待チケット（メールにて送信）',
      '裏側レポート 閲覧権（10月より毎月メール送信）',
      '感謝メッセージ',
      'エンドクレジットへのお名前掲載（ニックネーム可）'
    ]
  },
  {
    id: 'plan-e',
    category: 'screening',
    planCode: 'E',
    title: '上映会招待 ＋ 会場グッズ割引券1,000円分プラン',
    price: 50000,
    description: '上映会へのご招待と、当日会場内の物販ブースで使えるグッズ割引券1,000円分をお届けします。',
    deliveryDate: '2027年03月',
    items: [
      '上映会招待チケット（メールにて送信）',
      'ご来場時 グッズ割引券1,000円分（メール送信・会場利用可）',
      '感謝メッセージ',
      'エンドクレジットへのお名前掲載（ニックネーム可）'
    ]
  },
  {
    id: 'plan-f',
    category: 'screening',
    planCode: 'F',
    title: '上映会招待 ＋ 本作主題歌の限定映像閲覧権プラン',
    price: 100000,
    description: '上映会招待チケットと、本作主題歌の特別限定映像を閲覧いただける最上位支援プランです。',
    deliveryDate: '2027年03月',
    items: [
      '上映会招待チケット（メールにて送信）',
      '本作 主題歌の限定映像 閲覧権（非公開URL）',
      '感謝メッセージ',
      'エンドクレジットへのお名前掲載（ニックネーム可）'
    ],
    recommended: true
  }
];
