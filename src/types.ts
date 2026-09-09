export interface ReturnPlan {
  id: string;
  category: 'location' | 'screening';
  planCode: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  title: string;
  price: number;
  description: string;
  items: string[];
  deliveryDate?: string;
  recommended?: boolean;
}

export interface CreatorProfile {
  name: string;
  englishName: string;
  role: string;
  prefecture: string;
  bio: string[];
  qualifications?: string[];
  achievements: string[];
  goodsOrProject?: string;
  instagramUrl?: string;
  portfolioUrl?: string;
  avatarPlaceholder?: string;
}

export interface CharacterInfo {
  role: string;
  nameTitle: string;
  description: string;
  castingStatus: 'recruiting' | 'in_progress' | 'confirmed';
}

export interface NewsItem {
  id: string;
  date: string;
  category: 'お知らせ' | 'イベント' | 'クラファン' | 'キャスト';
  title: string;
  summary: string;
}

export interface CrowdfundingState {
  targetAmount: number;
  currentAmount: number;
  supportersCount: number;
  daysRemaining: number;
  campfireUrl: string;
}
