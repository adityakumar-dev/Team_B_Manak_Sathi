import React, { useState } from 'react';
import { PlayCircle, Sparkles, ChevronRight, X, Camera, FileSpreadsheet, ShieldAlert, BarChart3, HelpCircle } from 'lucide-react';
import { PageId } from '../../types';

interface DemoGuideModalProps {
  onSelectScenario: (scenarioId: number) => void;
  currentPage: PageId;
}

export const DemoGuideModal: React.FC<DemoGuideModalProps> = ({ onSelectScenario }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scenarios = [
    {
      id: 1,
      title: 'Scenario 1: Photo → Roadmap',
      badge: 'Assistant & Gatekeeper',
      badgeColor: 'bg-[#F5A623] text-black',
      desc: 'Simulates uploading a steel water bottle photo, triggers Gate 1a checks, answers 3 requirement prompts, and generates the full compliance roadmap.',
      icon: <Camera className="w-5 h-5 text-[#1F497D]" />,
    },
    {
      id: 2,
      title: 'Scenario 2: Spec Sheet → Gap Report',
      badge: 'Clause Analyser',
      badgeColor: 'bg-emerald-600 text-white',
      desc: 'Simulates uploading a factory specification drawing, parses parameters against IS clauses, flags 1 fail (wall thickness) and 1 unknown marking parameter.',
      icon: <FileSpreadsheet className="w-5 h-5 text-emerald-600" />,
    },
    {
      id: 3,
      title: 'Scenario 3: Label → Mark Check (Misuse)',
      badge: 'Consumer Protection',
      badgeColor: 'bg-rose-600 text-white',
      desc: 'Scans a sample product label where the licence is valid, but the brand is un-scoped, triggering misuse warning and a pre-filled BIS report preview.',
      icon: <ShieldAlert className="w-5 h-5 text-[#D64545]" />,
    },
    {
      id: 4,
      title: 'Scenario 4: Officer Portal & Analytics',
      badge: 'Officials Dashboard',
      badgeColor: 'bg-[#1F497D] text-white',
      desc: 'Opens the internal regulatory view for BIS / Ministry officers showing top queried standards, fail-closed audit logs, and AI confidence review queues.',
      icon: <BarChart3 className="w-5 h-5 text-[#1F497D]" />,
    },
  ];

  return (
    <>
      {/* Floating Demo Trigger Button at bottom-left */}
      <div className="fixed bottom-14 left-4 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#1F497D] text-white text-xs font-bold shadow-xl hover:bg-[#16365C] hover:scale-105 transition-all border-2 border-amber-400 group cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
          <span>Demo Guide (3-Min Pitch)</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Demo Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-[#C5CFDF] overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#1F497D] to-[#16365C] text-white p-5 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#F5A623] text-black text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                    SIH 2026 Judge Deck
                  </span>
                  <span className="text-xs text-amber-200 font-medium">Team_B Instant Demos</span>
                </div>
                <h3 className="text-lg font-bold">1-Click Live Demonstration Scenarios</h3>
                <p className="text-xs text-white/80 mt-1">
                  Demonstrate the core differentiators to evaluation judges in under 3 minutes.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white p-1 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: 4 Scenarios */}
            <div className="p-4 sm:p-5 space-y-3 max-h-[75vh] overflow-y-auto">
              {scenarios.map((sc) => (
                <div
                  key={sc.id}
                  onClick={() => {
                    onSelectScenario(sc.id);
                    setIsOpen(false);
                  }}
                  className="group p-3.5 rounded-xl border border-[#C5CFDF] hover:border-[#1F497D] bg-neutral-50 hover:bg-[#1F497D]/5 transition-all cursor-pointer flex items-start gap-3.5"
                >
                  <div className="p-2.5 bg-white rounded-lg shadow-2xs border border-neutral-200 shrink-0 group-hover:scale-105 transition-transform">
                    {sc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h4 className="text-sm font-bold text-[#1E1E1E] group-hover:text-[#1F497D]">
                        {sc.title}
                      </h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${sc.badgeColor}`}>
                        {sc.badge}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {sc.desc}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[#1F497D] group-hover:translate-x-1 transition-all shrink-0 self-center" />
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#F4F6FA] border-t border-[#C5CFDF] px-5 py-3 flex items-center justify-between text-xs text-neutral-600">
              <span className="flex items-center gap-1.5 font-medium">
                <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
                Zero setup needed · Runs simulated pipeline
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 bg-white border border-[#C5CFDF] rounded-lg text-neutral-700 hover:bg-neutral-100 font-medium"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
