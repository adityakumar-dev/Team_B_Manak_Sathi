import React from 'react';
import {
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
  Cpu,
  Database,
  WifiOff,
  Wifi,
  Sparkles,
  ArrowRight,
  GitFork,
  Radio,
} from 'lucide-react';
import { SAMPLE_DATA_NOTICE } from '../../data/demo';

export const HowItWorks: React.FC = () => {
  const pipelineSteps = [
    {
      num: 1,
      title: 'Multi-input',
      desc: 'Voice (Bhashini), camera label photo, CAD PDF drawing, or natural text.',
      isAmber: false,
    },
    {
      num: 2,
      title: 'Gatekeeper (Gate 1a)',
      desc: 'Validates image clarity, checks for label presence, confirms BIS relevance.',
      isAmber: true,
      gateGroup: 'Gate 1: before processing',
    },
    {
      num: 3,
      title: 'Requirement check (Gate 1b)',
      desc: 'Proactively asks missing details (material, application, domestic vs import).',
      isAmber: true,
      gateGroup: 'Gate 1: before processing',
    },
    {
      num: 4,
      title: 'Hybrid retrieval',
      desc: 'Dense semantic embeddings + sparse BM25 keyword matching across Indian Standards.',
      isAmber: false,
    },
    {
      num: 5,
      title: 'Rules & engines',
      desc: 'Deterministic rules check QCO gazettes, simplified procedure rules & SIT schedules.',
      isAmber: false,
    },
    {
      num: 6,
      title: 'Grounded answer',
      desc: 'LLM synthesizes response strictly constrained to retrieved clause snippets.',
      isAmber: false,
    },
    {
      num: 7,
      title: 'Citation verifier (Gate 2)',
      desc: 'Every sentence checked against cited clause text; fails closed if no proof.',
      isAmber: true,
      gateGroup: 'Gate 2: before answering',
    },
    {
      num: 8,
      title: 'Deliver with evidence',
      desc: 'User receives verified answer, interactive PDF evidence viewer & roadmap.',
      isAmber: false,
    },
  ];

  const channels = ['Mobile App (Flutter)', 'Web App (React/Vite)', 'Chatbot Library (Embed)', 'Officials Portal'];
  const coreModules = ['Gatekeeper Engine', 'Hybrid RAG Pipeline', 'Deterministic Rules Engine', 'Gate 2 Citation Verifier'];
  const liveSources = [
    'Manak Online public reports',
    'BIS Care verification portal',
    'LIMS recognized labs grid',
    'bis.gov.in Gazette feeds',
    'eGazette QCO notifications',
    'Bhashini AI Language Mission',
  ];
  const plannedIntegrations = [
    'Manak Online 1-click application pre-fill',
    'National Single Window System (NSWS) link',
    'Official BIS authenticated REST APIs',
    'e-Sale automated standard licensing',
  ];

  const techStack = [
    'Flutter',
    'FastAPI',
    'PostgreSQL + pgvector',
    'Neo4j',
    'vLLM',
    'llama.cpp',
    'BGE-M3',
    'Docling',
    'ML Kit',
    'Bhashini',
    'RAGAS',
    'Docker',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F497D] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
            System Architecture & Pipeline
          </span>
        </div>
        <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
          {SAMPLE_DATA_NOTICE}
        </span>
      </div>

      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F497D]/10 text-[#1F497D] text-xs font-semibold mb-3">
          <Workflow className="w-4 h-4 text-[#F5A623]" />
          <span>Zero-Hallucination Dual Gate Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-[#1E1E1E]">
          How Manak Saathi Works Under the Hood
        </h1>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 leading-relaxed">
          Standardization compliance is a legal responsibility. We designed a dual-gate pipeline that checks the input before processing, grounds strictly in Indian Standards, and verifies every sentence against verified clauses before answering.
        </p>
      </div>

      {/* 8-Step Pipeline */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-neutral-200 gap-2">
          <div>
            <h2 className="text-lg font-bold text-[#1E1E1E]">
              End-to-End Deterministic Pipeline
            </h2>
            <p className="text-xs text-neutral-500">
              Notice the two amber validation gates: Gate 1 stops ambiguous queries; Gate 2 enforces closed-book verification.
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1 font-bold text-[#b0730d]">
              <span className="w-3 h-3 rounded-full bg-[#F5A623]" /> Validation Gates
            </span>
            <span className="flex items-center gap-1 text-neutral-600 font-medium">
              <span className="w-3 h-3 rounded-full bg-[#1F497D]" /> Standard Stages
            </span>
          </div>
        </div>

        {/* Pipeline Steps Grid (Horizontal on desktop, vertical on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-3 relative">
          {pipelineSteps.map((step) => (
            <div
              key={step.num}
              className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                step.isAmber
                  ? 'bg-amber-50/90 border-2 border-[#F5A623] shadow-xs'
                  : 'bg-[#F4F6FA] border-[#C5CFDF]'
              }`}
            >
              <div>
                {/* Gate Group header badge */}
                {step.gateGroup && (
                  <div className="mb-2">
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-[#F5A623] text-black block text-center truncate">
                      {step.gateGroup}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                      step.isAmber
                        ? 'bg-[#F5A623] text-black'
                        : 'bg-[#1F497D] text-white'
                    }`}
                  >
                    {step.num}
                  </span>
                </div>

                <h3 className="font-bold text-xs text-[#1E1E1E] mb-1">
                  {step.title}
                </h3>
                <p className="text-[11px] text-neutral-600 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4-Column Architecture Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#1E1E1E]">
          System Architecture & Integration Boundaries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: Channels */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                <Radio className="w-5 h-5 text-[#1F497D]" />
                <h3 className="font-bold text-sm text-[#1F497D]">1. Access Channels</h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Omnichannel interfaces reaching MSMEs, officers, and consumers anywhere.
              </p>
              <div className="space-y-2">
                {channels.map((ch, i) => (
                  <div key={i} className="p-2 rounded-lg bg-[#F4F6FA] text-xs font-semibold text-neutral-800 border border-[#C5CFDF]/50">
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core */}
          <div className="bg-white rounded-2xl border-2 border-[#1F497D] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                <Cpu className="w-5 h-5 text-[#1F497D]" />
                <h3 className="font-bold text-sm text-[#1F497D]">2. Manak Saathi Core</h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Proprietary verification, clause-level grounding, and reasoning engine.
              </p>
              <div className="space-y-2">
                {coreModules.map((cm, i) => (
                  <div key={i} className="p-2 rounded-lg bg-blue-50/60 text-xs font-bold text-[#1F497D] border border-blue-200">
                    {cm}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: BIS Data Sources (Live) */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                <Database className="w-5 h-5 text-[#2E9E5B]" />
                <h3 className="font-bold text-sm text-[#2E9E5B]">3. BIS Data (Live)</h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Public datasets parsed and embedded in prototype without touching BIS servers.
              </p>
              <div className="space-y-2">
                {liveSources.map((ls, i) => (
                  <div key={i} className="p-2 rounded-lg bg-emerald-50 text-xs font-medium text-emerald-950 border border-emerald-200 flex items-center justify-between">
                    <span>{ls}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E9E5B] shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Planned Integrations (Dashed Borders) */}
          <div className="bg-white rounded-2xl border-2 border-dashed border-[#F5A623] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                <GitFork className="w-5 h-5 text-[#F5A623]" />
                <h3 className="font-bold text-sm text-[#b0730d]">4. Planned Integrations</h3>
              </div>
              <p className="text-xs text-neutral-500 mb-4">
                Future API endpoints under institutional agreement with BIS / Ministry.
              </p>
              <div className="space-y-2">
                {plannedIntegrations.map((pi, i) => (
                  <div key={i} className="p-2 rounded-lg bg-amber-50 text-xs font-semibold text-amber-900 border border-dashed border-amber-300">
                    {pi}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Strip */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
        <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">
          Production Tech Stack & Frameworks
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-[#F4F6FA] border border-[#C5CFDF] text-xs font-mono font-bold text-[#1F497D]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Offline vs Online Comparison Section */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
        <h3 className="text-base font-bold text-[#1E1E1E] mb-2">
          Offline vs. Online Capability Matrix
        </h3>
        <p className="text-xs text-neutral-500 mb-6">
          Compliance does not stop in rural manufacturing clusters or basement testing labs without cellular network.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offline Box */}
          <div className="p-5 rounded-xl bg-neutral-50 border border-neutral-200">
            <div className="flex items-center gap-2 mb-3 text-neutral-800 font-bold text-sm">
              <WifiOff className="w-5 h-5 text-neutral-600" />
              <span>Offline Mode (Cached on Device)</span>
            </div>
            <ul className="space-y-2 text-xs text-neutral-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Full text of downloaded Indian Standards (e.g. IS XXXX)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Saved compliance roadmaps & interactive checklists</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>On-device clause question answering (quantized small model)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Offline queueing of scanned marks for later verification</span>
              </li>
            </ul>
          </div>

          {/* Online Box */}
          <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200">
            <div className="flex items-center gap-2 mb-3 text-[#1F497D] font-bold text-sm">
              <Wifi className="w-4 h-4 text-[#1F497D]" />
              <span>Online Mode (Live Connected)</span>
            </div>
            <ul className="space-y-2 text-xs text-neutral-800">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Live BIS Care licence & operative status verification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Gold Hallmarking HUID real-time registry queries</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Live recall, stop marking, and counterfeit notice dispatch</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                <span>Real-time e-Gazette Quality Control Order notifications</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
