import React, { useState } from 'react';
import {
  Compass,
  Download,
  BookmarkPlus,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Coins,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  Building,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { DEFAULT_ROADMAP, SAMPLE_DATA_NOTICE } from '../../data/demo';
import { CitationChip } from '../common/CitationChip';
import { useToast } from '../common/Toast';
import { PageId } from '../../types';

interface RoadmapProps {
  openEvidence: (citationId: string) => void;
  setCurrentPage: (page: PageId) => void;
  isOffline: boolean;
}

export const Roadmap: React.FC<RoadmapProps> = ({ openEvidence, setCurrentPage, isOffline }) => {
  const { showToast } = useToast();
  const [expandedSteps, setExpandedSteps] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    5: true,
    6: true,
    7: true,
    8: true,
  });

  const toggleStep = (stepId: number) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  const handleDownload = () => {
    showToast('Checklist downloaded: Steel_Water_Bottle_Compliance_Checklist.pdf', 'success', 'PDF Generated');
  };

  const handleSaveOffline = () => {
    showToast('Roadmap saved for offline access. View anytime in Alerts > Saved items.', 'info', 'Saved Offline');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#b0730d] bg-[#F5A623]/15 px-2.5 py-0.5 rounded-full border border-[#F5A623]">
            Key Differentiator · Compliance Roadmap
          </span>
        </div>
        <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
          {SAMPLE_DATA_NOTICE}
        </span>
      </div>

      {/* Header Card Summarising Product */}
      <div className="bg-gradient-to-br from-amber-500/10 via-amber-100/30 to-white rounded-2xl border-2 border-[#F5A623] p-6 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#b0730d] mb-1">
              <Compass className="w-4 h-4 text-[#F5A623]" />
              <span>ACTIVE COMPLIANCE PROFILE</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#1E1E1E]">
              Stainless Steel Drinking-Water Bottles (Domestic Manufacturing)
            </h1>
            <p className="mt-1 text-xs text-neutral-600">
              Primary Standard: <span className="font-semibold text-[#1F497D]">IS XXXX : 20XX (sample)</span> · Grade 304/316 · Capacity: 500 ml – 1000 ml
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 rounded-xl bg-white border border-[#C5CFDF] hover:bg-neutral-50 text-neutral-800 text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#1F497D]" />
              <span>Download checklist (PDF)</span>
            </button>
            <button
              onClick={handleSaveOffline}
              className="px-3.5 py-2 rounded-xl bg-[#1F497D] text-white hover:bg-[#16365C] text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <BookmarkPlus className="w-3.5 h-3.5 text-amber-300" />
              <span>Save for offline</span>
            </button>
          </div>
        </div>

        {/* Quick summary badges */}
        <div className="mt-5 pt-4 border-t border-amber-200/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-white/80 p-2.5 rounded-lg border border-amber-200">
            <div className="text-neutral-400 text-[10px] uppercase font-bold">Mandatory Status</div>
            <div className="font-bold text-[#D64545] mt-0.5">Compulsory QCO</div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-amber-200">
            <div className="text-neutral-400 text-[10px] uppercase font-bold">Licence Scheme</div>
            <div className="font-bold text-[#1F497D] mt-0.5">Scheme-I (ISI Mark)</div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-amber-200">
            <div className="text-neutral-400 text-[10px] uppercase font-bold">Turnaround Time</div>
            <div className="font-bold text-[#2E9E5B] mt-0.5">~30 Days (Fast-Track)</div>
          </div>
          <div className="bg-white/80 p-2.5 rounded-lg border border-amber-200">
            <div className="text-neutral-400 text-[10px] uppercase font-bold">Est. Total Outlay</div>
            <div className="font-bold text-neutral-800 mt-0.5">₹57,500 (sample)</div>
          </div>
        </div>
      </div>

      {/* Vertical Stepper with 8 Expandable Cards */}
      <div className="space-y-4">
        {DEFAULT_ROADMAP.map((step) => {
          const isOpen = !!expandedSteps[step.id];

          return (
            <div
              key={step.id}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? 'bg-white border-[#1F497D]/40 shadow-md ring-1 ring-[#1F497D]/10'
                  : 'bg-white border-[#C5CFDF] hover:border-[#1F497D]/60'
              }`}
            >
              {/* Step Header */}
              <div
                onClick={() => toggleStep(step.id)}
                className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 cursor-pointer select-none"
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#1F497D]/10 text-[#1F497D] font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    {step.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-sm sm:text-base text-[#1E1E1E]">
                        {step.title}
                      </h3>
                      {step.badge && (
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            step.badgeType === 'amber'
                              ? 'bg-amber-100 text-[#b0730d] border border-amber-300'
                              : step.badgeType === 'green'
                              ? 'bg-emerald-100 text-[#2E9E5B] border border-emerald-300'
                              : 'bg-blue-100 text-[#1F497D] border border-blue-200'
                          }`}
                        >
                          {step.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-neutral-500 mt-0.5">{step.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <CitationChip
                    citationId={step.citationId}
                    onClick={openEvidence}
                  />
                  <button className="text-neutral-400 hover:text-neutral-700 p-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Step Expanded Content */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-neutral-100 space-y-4 text-xs">
                  {/* Step Summary */}
                  <div className="p-3 bg-[#F4F6FA] rounded-xl text-neutral-800 leading-relaxed font-medium">
                    {step.summary}
                  </div>

                  {/* Step 1: Standards List */}
                  {step.id === 1 && step.details?.standards && (
                    <div className="space-y-2">
                      <div className="font-bold text-neutral-700 uppercase tracking-wider text-[10px]">
                        Referenced Standards Matrix
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {step.details.standards.map((st, i) => (
                          <div key={i} className="p-2.5 rounded-lg border border-[#C5CFDF] bg-white">
                            <span className="font-mono font-bold text-[#1F497D] text-xs block">
                              {st.code}
                            </span>
                            <span className="text-[11px] text-neutral-600 block mt-1">
                              {st.title}
                            </span>
                            <span className="text-[10px] text-neutral-400 italic block mt-1">
                              {st.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: QCO Details */}
                  {step.id === 2 && step.details?.qcoDetails && (
                    <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/50 space-y-1 text-xs">
                      <div className="font-bold text-amber-900">
                        {step.details.qcoDetails.orderName}
                      </div>
                      <div className="text-neutral-700">
                        Effective Status: <span className="font-semibold">{step.details.qcoDetails.effectiveDate}</span>
                      </div>
                      <div className="text-[11px] text-neutral-500 font-mono">
                        Gazette Reference: {step.details.qcoDetails.gazetteNo}
                      </div>
                    </div>
                  )}

                  {/* Step 5: Required Tests */}
                  {step.id === 5 && step.details?.tests && (
                    <div className="space-y-2">
                      <div className="font-bold text-neutral-700 uppercase tracking-wider text-[10px]">
                        Mandatory Factory & Independent Test Schedule
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border border-[#C5CFDF] text-left text-xs rounded-lg overflow-hidden">
                          <thead className="bg-[#F4F6FA] text-neutral-700 font-bold">
                            <tr>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Test Parameter</th>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Clause Ref</th>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Sample Requirement</th>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Est. Duration</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-200">
                            {step.details.tests.map((test, i) => (
                              <tr key={i} className="hover:bg-neutral-50">
                                <td className="p-2.5 font-medium text-neutral-900">{test.testName}</td>
                                <td className="p-2.5 font-mono text-[#1F497D]">{test.clauseRef}</td>
                                <td className="p-2.5 text-neutral-600">{test.sampleSize}</td>
                                <td className="p-2.5 text-neutral-600">{test.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Step 6: Nearby Labs & Map Placeholder */}
                  {step.id === 6 && step.details?.labs && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {step.details.labs.map((lab, i) => (
                          <div key={i} className="p-3 rounded-xl border border-[#C5CFDF] bg-white flex flex-col justify-between">
                            <div>
                              <div className="flex items-center gap-1 text-[10px] text-[#2E9E5B] font-bold uppercase mb-1">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>BIS LIMS Scope Active</span>
                              </div>
                              <h4 className="font-bold text-neutral-900 text-xs">{lab.name}</h4>
                              <div className="flex items-center gap-1 text-neutral-500 mt-1">
                                <MapPin className="w-3 h-3 text-neutral-400" />
                                <span>{lab.city} ({lab.distance})</span>
                              </div>
                            </div>
                            <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-neutral-700 font-semibold">
                              <span>Testing Fee:</span>
                              <span className="font-bold text-[#1F497D]">{lab.cost}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Map Placeholder */}
                      <div className="h-28 rounded-xl bg-slate-100 border border-dashed border-[#C5CFDF] flex flex-col items-center justify-center text-neutral-500 text-xs">
                        <MapPin className="w-6 h-6 text-[#1F497D] mb-1 opacity-70" />
                        <span className="font-medium">Interactive Geo-Map of BIS Recognized Labs</span>
                        <span className="text-[10px] text-neutral-400">Integrated with BIS LIMS and National Testing Grid</span>
                      </div>
                    </div>
                  )}

                  {/* Step 7: Estimated Cost Breakdown Table */}
                  {step.id === 7 && step.details?.costs && (
                    <div className="space-y-2">
                      <div className="overflow-x-auto">
                        <table className="w-full border border-[#C5CFDF] text-left text-xs rounded-lg overflow-hidden">
                          <thead className="bg-[#F4F6FA] text-neutral-700 font-bold">
                            <tr>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Statutory Cost Head</th>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Indicative Amount</th>
                              <th className="p-2.5 border-b border-[#C5CFDF]">Regulatory Note</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-200">
                            {step.details.costs.map((c, i) => (
                              <tr key={i} className={i === step.details!.costs!.length - 1 ? 'bg-amber-50/70 font-bold' : ''}>
                                <td className="p-2.5 text-neutral-900">{c.head}</td>
                                <td className="p-2.5 font-mono text-[#1F497D] font-bold">{c.amount}</td>
                                <td className="p-2.5 text-neutral-500">{c.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Step 8: Application Steps & Timeline */}
                  {step.id === 8 && step.details?.timeline && (
                    <div className="space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {step.details.timeline.map((item, i) => (
                          <div key={i} className="p-2.5 rounded-lg border border-[#C5CFDF] bg-white flex items-start gap-2.5">
                            <span className="w-5 h-5 rounded-full bg-[#1F497D] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {item.stepNumber}
                            </span>
                            <div className="flex-1">
                              <p className="font-medium text-neutral-800 text-[11px]">{item.action}</p>
                              <span className="text-[10px] font-bold text-[#b0730d] bg-amber-50 px-1.5 py-0.2 rounded mt-1 inline-block">
                                {item.duration}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Action Footer with Disabled Manak Online button */}
      <div className="mt-8 p-6 rounded-2xl bg-white border border-[#C5CFDF] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-[#1E1E1E]">Ready to begin compliance filing?</h4>
          <p className="text-xs text-neutral-500 mt-0.5">
            Manak Saathi can pre-fill your technical documentation directly into the Manak Online portal.
          </p>
        </div>

        <div className="relative group shrink-0">
          <button
            type="button"
            disabled
            className="px-5 py-2.5 rounded-xl bg-neutral-200 text-neutral-500 font-bold text-xs cursor-not-allowed flex items-center gap-2 opacity-80"
          >
            <span>Start application on Manak Online</span>
            <span className="text-[10px] bg-amber-200 text-amber-900 font-extrabold px-1.5 py-0.5 rounded">
              Planned integration
            </span>
          </button>
          <div className="hidden group-hover:block absolute bottom-full right-0 mb-1 w-64 bg-neutral-900 text-white text-[11px] p-2.5 rounded-lg shadow-xl z-20">
            Official API integration with Manak Online planned under future Ministry of Consumer Affairs MOU.
          </div>
        </div>
      </div>
    </div>
  );
};
