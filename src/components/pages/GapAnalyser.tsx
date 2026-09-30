import React, { useState } from 'react';
import {
  FileSearch,
  UploadCloud,
  FileText,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  AlertTriangle,
  RotateCcw,
  Check,
  X,
  FileCheck2,
} from 'lucide-react';
import { SAMPLE_GAP_ANALYSIS, SAMPLE_DATA_NOTICE } from '../../data/demo';
import { CitationChip } from '../common/CitationChip';
import { useToast } from '../common/Toast';
import { GapRow } from '../../types';

interface GapAnalyserProps {
  openEvidence: (citationId: string) => void;
  autoRunSample?: boolean;
}

export const GapAnalyser: React.FC<GapAnalyserProps> = ({ openEvidence, autoRunSample }) => {
  const { showToast } = useToast();
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0); // 0 = idle, 1 = Reading, 2 = Extracting, 3 = Matching, 4 = Done
  const [gapData, setGapData] = useState<GapRow[] | null>(null);
  const [unknownDialogRow, setUnknownDialogRow] = useState<GapRow | null>(null);
  const [userUnknownAnswer, setUserUnknownAnswer] = useState('');

  // Start analysis simulation
  const startSimulation = () => {
    setAnalyzing(true);
    setAnalysisStep(1);

    setTimeout(() => {
      setAnalysisStep(2); // Extracting values
      setTimeout(() => {
        setAnalysisStep(3); // Matching to clauses
        setTimeout(() => {
          setAnalysisStep(4);
          setAnalyzing(false);
          setGapData(SAMPLE_GAP_ANALYSIS);
          showToast('Gap Analysis completed. 1 critical parameter failed.', 'error', 'Analysis Finished');
        }, 800);
      }, 700);
    }, 700);
  };

  // Run automatically if triggered from demo guide
  React.useEffect(() => {
    if (autoRunSample && !gapData && !analyzing) {
      startSimulation();
    }
  }, [autoRunSample]);

  const handleResolveUnknown = (answeredPass: boolean) => {
    if (!unknownDialogRow) return;

    setGapData((prev) =>
      prev
        ? prev.map((row) =>
            row.id === unknownDialogRow.id
              ? {
                  ...row,
                  result: answeredPass ? 'pass' : 'fail',
                  yourValue: answeredPass
                    ? 'Confirmed: Drawing Rev-3 includes base laser etch (Grade 304, Batch, Standard Mark)'
                    : 'Unconfirmed: Base laser engraving excluded from current drawing',
                  remedy: answeredPass
                    ? 'Resolved by user clarification: Base laser marking drawing confirmed.'
                    : 'Action required: Update drawing with required marking fields.',
                }
              : row
          )
        : null
    );

    setUnknownDialogRow(null);
    setUserUnknownAnswer('');
    showToast('Parameter updated based on your input.', 'success');
  };

  const passCount = gapData ? gapData.filter((r) => r.result === 'pass').length : 3;
  const failCount = gapData ? gapData.filter((r) => r.result === 'fail').length : 1;
  const unknownCount = gapData ? gapData.filter((r) => r.result === 'unknown').length : 1;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5A623] animate-ping" />
          <span className="text-xs font-bold uppercase tracking-wider text-[#b0730d] bg-[#F5A623]/15 px-2.5 py-0.5 rounded-full border border-[#F5A623]">
            Key Differentiator · Clause-by-Clause Gap Analyser
          </span>
        </div>
        <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
          {SAMPLE_DATA_NOTICE}
        </span>
      </div>

      {/* Main Title & Context Card */}
      <div className="bg-white rounded-2xl border-2 border-[#F5A623] p-6 shadow-sm mb-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#b0730d] mb-1">
              <FileSearch className="w-4 h-4 text-[#F5A623]" />
              <span>PRE-TESTING RISK MITIGATION</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#1E1E1E]">
              Technical Specification & Test Report Gap Analyser
            </h1>
            <p className="mt-1 text-xs text-neutral-600 max-w-3xl leading-relaxed">
              Upload your engineering CAD drawing, factory bill of materials, or raw material test report. Manak Saathi extracts parameters and validates every tolerance against the target Indian Standard clause before you pay for official laboratory testing.
            </p>
          </div>
        </div>
      </div>

      {/* Upload Zone / Demo Selector */}
      {!gapData && (
        <div className="bg-white rounded-2xl border border-dashed border-[#1F497D]/40 p-8 text-center shadow-xs mb-8">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-[#F5A623] flex items-center justify-center mx-auto mb-4">
            <UploadCloud className="w-8 h-8" />
          </div>

          <h3 className="font-bold text-base text-[#1E1E1E] mb-1">
            Drag & drop your product spec sheet or drawing (PDF/Image)
          </h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto mb-6">
            Accepts factory technical drawings, mill test certificates, or dimensional inspection logs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={startSimulation}
              disabled={analyzing}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#F5A623] text-black font-bold text-xs shadow-md hover:bg-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-black" />
              <span>Use sample spec sheet (Steel Bottle DWG-04)</span>
            </button>
            <button
              onClick={startSimulation}
              disabled={analyzing}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#1F497D] text-white font-bold text-xs shadow-md hover:bg-[#16365C] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Upload Custom Document</span>
            </button>
          </div>

          {/* Processing Animation Steps */}
          {analyzing && (
            <div className="mt-8 pt-6 border-t border-neutral-100 max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-700">1. Reading document & layout</span>
                {analysisStep >= 1 ? (
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B]" />
                ) : (
                  <span className="text-neutral-400">Waiting...</span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-700">2. Extracting physical values & metallurgical grades</span>
                {analysisStep >= 2 ? (
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B]" />
                ) : (
                  <span className="text-neutral-400">Waiting...</span>
                )}
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-neutral-700">3. Matching to Indian Standard clauses (IS XXXX : 20XX)</span>
                {analysisStep >= 3 ? (
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B]" />
                ) : (
                  <span className="text-neutral-400">Waiting...</span>
                )}
              </div>
              <div className="w-full bg-neutral-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#F5A623] h-full transition-all duration-300"
                  style={{ width: `${(analysisStep / 3) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Results View */}
      {gapData && (
        <div className="space-y-6">
          {/* Summary Bar */}
          <div className="p-4 rounded-xl bg-white border border-[#C5CFDF] shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-100 text-[#b0730d]">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold text-sm text-[#1E1E1E]">
                  {passCount} pass · <span className="text-[#D64545]">{failCount} fail</span> ·{' '}
                  <span className="text-neutral-500">{unknownCount} unknown</span>
                </div>
                <p className="text-xs text-neutral-500">
                  Fix non-conforming parameters before paying ₹14,500+ for laboratory testing.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setGapData(null);
                setAnalysisStep(0);
              }}
              className="px-3.5 py-1.5 rounded-lg border border-[#C5CFDF] hover:bg-neutral-50 text-neutral-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-neutral-500" />
              <span>Re-upload / Reset</span>
            </button>
          </div>

          {/* Results Table */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F4F6FA] text-neutral-700 font-bold border-b border-[#C5CFDF]">
                  <tr>
                    <th className="p-3.5">Parameter</th>
                    <th className="p-3.5">Your Value</th>
                    <th className="p-3.5">IS Requirement</th>
                    <th className="p-3.5">Clause</th>
                    <th className="p-3.5 text-center">Result</th>
                    <th className="p-3.5">Recommended Remedy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {gapData.map((row) => (
                    <tr
                      key={row.id}
                      className={
                        row.result === 'fail'
                          ? 'bg-rose-50/50 hover:bg-rose-50/80'
                          : row.result === 'unknown'
                          ? 'bg-slate-50/70 hover:bg-slate-50'
                          : 'hover:bg-neutral-50/70'
                      }
                    >
                      <td className="p-3.5 font-bold text-neutral-900">
                        {row.parameter}
                      </td>
                      <td className="p-3.5 font-mono text-neutral-800">
                        {row.yourValue}
                      </td>
                      <td className="p-3.5 text-neutral-700">
                        {row.requirement}
                      </td>
                      <td className="p-3.5 whitespace-nowrap">
                        <CitationChip
                          citationId={row.citationId}
                          onClick={openEvidence}
                        />
                      </td>
                      <td className="p-3.5 text-center">
                        {row.result === 'pass' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-[#2E9E5B] border border-emerald-300">
                            <CheckCircle2 className="w-3 h-3" /> Pass
                          </span>
                        )}
                        {row.result === 'fail' && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-rose-100 text-[#D64545] border border-rose-300">
                            <XCircle className="w-3 h-3" /> Fail
                          </span>
                        )}
                        {row.result === 'unknown' && (
                          <div className="flex flex-col items-center gap-1">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-neutral-200 text-neutral-700">
                              <HelpCircle className="w-3 h-3" /> Unknown
                            </span>
                            <button
                              onClick={() => setUnknownDialogRow(row)}
                              className="text-[10px] text-[#1F497D] font-bold hover:underline cursor-pointer"
                            >
                              Answer this
                            </button>
                          </div>
                        )}
                      </td>
                      <td className="p-3.5 text-neutral-600 leading-relaxed max-w-xs">
                        {row.remedy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mandatory Regulatory Advisory Notice */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-[#F5A623] shrink-0 mt-0.5" />
            <p>
              <span className="font-bold">Advisory Notice:</span> This pre-check is advisory only. Final conformity is decided exclusively by BIS testing and official factory inspection under the Conformity Assessment Regulations.
            </p>
          </div>
        </div>
      )}

      {/* Unknown Row Dialog Modal */}
      {unknownDialogRow && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#C5CFDF] animate-in zoom-in-95">
            <div className="flex items-center justify-between mb-4 pb-2 border-b">
              <h3 className="font-bold text-sm text-[#1F497D] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#F5A623]" />
                Clarify Missing Specification
              </h3>
              <button
                onClick={() => setUnknownDialogRow(null)}
                className="text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-700 mb-4 leading-relaxed">
              {unknownDialogRow.questionPrompt ||
                'The uploaded drawing does not indicate the marking specifications for the vessel base.'}
            </p>

            <div className="space-y-3">
              <button
                onClick={() => handleResolveUnknown(true)}
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-[#2E9E5B] text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>Yes, our laser etching includes Grade, Batch, and Mark</span>
                <Check className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleResolveUnknown(false)}
                className="w-full py-2.5 px-3 rounded-xl bg-rose-50 hover:bg-rose-100 border border-rose-300 text-[#D64545] text-xs font-bold text-left flex items-center justify-between transition-colors cursor-pointer"
              >
                <span>No, our base currently lacks these markings</span>
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
