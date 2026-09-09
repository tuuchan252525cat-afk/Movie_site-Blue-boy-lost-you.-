/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { CastSection } from './components/CastSection';
import { StaffSection } from './components/StaffSection';
import { ScreeningSection } from './components/ScreeningSection';
import { CrowdfundingSection } from './components/CrowdfundingSection';
import { Footer } from './components/Footer';
import { AuditionModal } from './components/AuditionModal';
import { SupportModal } from './components/SupportModal';
import { INITIAL_CROWDFUNDING, RETURN_PLANS } from './data/movieData';
import { CrowdfundingState, ReturnPlan } from './types';
import { HeartHandshake, UserPlus } from 'lucide-react';

export default function App() {
  const [cfState, setCfState] = useState<CrowdfundingState>(INITIAL_CROWDFUNDING);
  const [selectedPlan, setSelectedPlan] = useState<ReturnPlan | null>(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isAuditionModalOpen, setIsAuditionModalOpen] = useState(false);

  const handleSelectPlan = (plan: ReturnPlan) => {
    setSelectedPlan(plan);
    setIsSupportModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white relative">
      {/* Fixed Header */}
      <Header onOpenSupportModal={() => handleSelectPlan(RETURN_PLANS[1])} />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero cfState={cfState} />
        <StorySection />
        <CastSection onOpenAuditionModal={() => setIsAuditionModalOpen(true)} />
        <StaffSection />
        <ScreeningSection />
        <CrowdfundingSection
          cfState={cfState}
          onSelectPlan={handleSelectPlan}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-40 bg-slate-950/95 border border-slate-800 backdrop-blur-lg p-2 rounded-2xl flex items-center gap-2 shadow-2xl shadow-black">
        <button
          onClick={() => setIsAuditionModalOpen(true)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 border border-slate-800 text-sky-300 font-medium text-xs flex items-center justify-center gap-1.5"
        >
          <UserPlus className="w-3.5 h-3.5" />
          <span>キャスト応募</span>
        </button>
        <a
          href="#crowdfunding"
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-950/40 text-center"
        >
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>クラファンで応援</span>
        </a>
      </div>

      {/* Modals */}
      <AuditionModal
        isOpen={isAuditionModalOpen}
        onClose={() => setIsAuditionModalOpen(false)}
      />

      <SupportModal
        plan={selectedPlan}
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </div>
  );
}
