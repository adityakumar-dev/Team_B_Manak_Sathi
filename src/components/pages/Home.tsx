import React from 'react';
import {
  ShieldCheck,
  ArrowRight,
  Camera,
  HelpCircle,
  Compass,
  FileSearch,
  CheckCircle,
  WifiOff,
  Users,
  Building2,
  Sparkles,
  Award,
  BookOpen,
  FileCheck2,
  Check,
} from 'lucide-react';
import { PageId } from '../../types';

interface HomeProps {
  setCurrentPage: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const featureCards = [
    {
      num: '01',
      title: 'Show, say or type',
      desc: 'Snap a label, speak in regional language, or type your query about any product or standard.',
      icon: <Camera className="w-6 h-6 text-[#1F497D]" />,
      page: 'assistant' as PageId,
      isAmber: false,
    },
    {
      num: '02',
      title: 'Asks before it answers',
      desc: 'Gatekeeper validates questions and proactively clarifies missing details like material and intended usage.',
      icon: <HelpCircle className="w-6 h-6 text-[#1F497D]" />,
      page: 'assistant' as PageId,
      isAmber: false,
    },
    {
      num: '03',
      title: 'Compliance Roadmap',
      desc: 'End-to-end 8-step journey: standards, mandatory QCOs, lab tests, costs, and timeline.',
      icon: <Compass className="w-6 h-6 text-[#F5A623]" />,
      page: 'roadmap' as PageId,
      isAmber: true,
      highlightBadge: 'Key Differentiator',
    },
    {
      num: '04',
      title: 'Gap analyser',
      desc: 'Upload drawing or test sheet; verifies every parameter clause-by-clause before costly testing.',
      icon: <FileSearch className="w-6 h-6 text-[#F5A623]" />,
      page: 'gap-analyser' as PageId,
      isAmber: true,
      highlightBadge: 'Key Differentiator',
    },
    {
      num: '05',
      title: 'Licence & mark check',
      desc: 'Verify genuine Standard Marks, detect misused CM/L numbers on unauthorized brands, and check gold HUID.',
      icon: <CheckCircle className="w-6 h-6 text-[#1F497D]" />,
      page: 'mark-check' as PageId,
      isAmber: false,
    },
    {
      num: '06',
      title: 'Watches for you, even offline',
      desc: 'Track QCO enforcement dates and draft standards. Access saved standards and roadmaps without network.',
      icon: <WifiOff className="w-6 h-6 text-[#1F497D]" />,
      page: 'alerts' as PageId,
      isAmber: false,
    },
  ];

  const whoItHelps = [
    { role: 'MSMEs & Startups', desc: 'Demystifies mandatory QCOs, avoids failed testing fees, and provides step-by-step licensing paths.' },
    { role: 'Consumers', desc: 'Instantly identifies counterfeit Standard Marks and checks authenticity of gold hallmark HUID codes.' },
    { role: 'Jewellers & Artisans', desc: 'Simplifies hallmarking assay rules and compliance requirements under BIS regulations.' },
    { role: 'Students & Standards Clubs', desc: 'Educational access to Indian Standards with interactive clause explanations in regional languages.' },
    { role: 'BIS Officers & Labs', desc: 'Flags common industry confusions, tracks market anomalies, and surfaces potential licence misuse.' },
    { role: 'BIS & Dept of Consumer Affairs', desc: 'Data-driven visibility into national standardization queries without modifying legacy systems.' },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F497D]/5 via-white to-[#F4F6FA] pt-12 pb-16 sm:pt-16 sm:pb-20 border-b border-[#C5CFDF]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Subtle hackathon badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F497D]/10 border border-[#1F497D]/20 text-[#1F497D] text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
            <span>Smart India Hackathon 2026 · Problem Statement 26107</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1E1E] tracking-tight leading-[1.15]">
            From confusion to certification,{' '}
            <span className="text-[#1F497D] underline decoration-[#F5A623] decoration-wavy decoration-3 underline-offset-8">
              with proof at every step.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed">
            Ask about any Indian Standard by photo, voice or text. Manak Saathi asks what&apos;s missing, builds your compliance roadmap, checks if your product will pass, and cites the exact clause every time.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <button
              onClick={() => setCurrentPage('assistant')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1F497D] text-white font-bold text-sm shadow-lg hover:bg-[#16365C] hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <span>Try the Assistant</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => setCurrentPage('how-it-works')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#1F497D] border-2 border-[#1F497D] font-bold text-sm shadow-xs hover:bg-[#1F497D]/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>See how it works</span>
            </button>
          </div>

          {/* Row of Three Trust Badges */}
          <div className="mt-12 pt-8 border-t border-[#C5CFDF]/60 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#C5CFDF] shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-[#2E9E5B] flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-neutral-800">
                Checks before it answers
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#C5CFDF] shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1F497D] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-neutral-800">
                Cites before it speaks
              </span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#C5CFDF] shadow-2xs">
              <div className="w-7 h-7 rounded-full bg-amber-100 text-[#F5A623] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-semibold text-neutral-800">
                Zero change to BIS systems
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Six Feature Cards in 3x2 Grid (Cards 03 & 04 highlighted in amber) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1E1E]">
            A Complete Compliance Companion
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Engineered specifically for Indian manufacturers, MSMEs, testing labs and consumer awareness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <div
              key={card.num}
              onClick={() => setCurrentPage(card.page)}
              className={`rounded-2xl p-6 transition-all cursor-pointer relative group flex flex-col justify-between ${
                card.isAmber
                  ? 'bg-amber-50/70 border-2 border-[#F5A623] shadow-md hover:shadow-xl hover:-translate-y-1'
                  : 'bg-white border border-[#C5CFDF] shadow-xs hover:shadow-md hover:border-[#1F497D] hover:-translate-y-0.5'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      card.isAmber ? 'bg-amber-100 text-[#F5A623]' : 'bg-[#1F497D]/10 text-[#1F497D]'
                    }`}
                  >
                    {card.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    {card.highlightBadge && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#F5A623] text-white tracking-wide">
                        {card.highlightBadge}
                      </span>
                    )}
                    <span className="font-mono text-sm font-bold text-neutral-400">
                      {card.num}
                    </span>
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-2 ${card.isAmber ? 'text-neutral-900' : 'text-[#1E1E1E]'}`}>
                  {card.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold">
                <span className={card.isAmber ? 'text-[#b0730d]' : 'text-[#1F497D]'}>
                  Explore feature
                </span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "Who it helps" Strip */}
      <section className="py-12 bg-white border-y border-[#C5CFDF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-[#1F497D]" />
            <h2 className="text-lg font-bold text-[#1E1E1E] uppercase tracking-wider text-xs">
              Who It Helps Across the Indian Standardization Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whoItHelps.map((target, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#F4F6FA] border border-[#C5CFDF]/70 hover:border-[#1F497D] transition-colors"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#1F497D]" />
                  <h4 className="text-sm font-bold text-[#1F497D]">{target.role}</h4>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed pl-4">
                  {target.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Band in Navy */}
      <section className="bg-[#1F497D] text-white py-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Deterministic Grounding · Fail-Closed Safety</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Offline-first, proof-always.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/80 font-medium">
            Compliance doesn&apos;t wait for network. Neither does this.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setCurrentPage('assistant')}
              className="px-5 py-2.5 rounded-lg bg-[#F5A623] text-black font-bold text-xs hover:bg-amber-400 transition-colors shadow-md"
            >
              Start Interactive Assistant
            </button>
            <button
              onClick={() => setCurrentPage('roadmap')}
              className="px-5 py-2.5 rounded-lg bg-white/15 text-white font-semibold text-xs hover:bg-white/25 transition-colors border border-white/20"
            >
              View Sample Roadmap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
