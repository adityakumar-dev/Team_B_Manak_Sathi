import React from 'react';
import { X, ExternalLink, ShieldCheck, Download, Printer, Search, FileText } from 'lucide-react';
import { CITATIONS, SAMPLE_DATA_NOTICE } from '../../data/demo';

interface EvidenceViewerProps {
  citationId: string | null;
  onClose: () => void;
}

export const EvidenceViewer: React.FC<EvidenceViewerProps> = ({ citationId, onClose }) => {
  if (!citationId) return null;
  const citation = CITATIONS[citationId] || CITATIONS['cit-is-17526-cl-5-1'];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs flex justify-end transition-opacity animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col border-l border-[#C5CFDF] sm:rounded-l-2xl overflow-hidden animate-in slide-in-from-right duration-300"
      >
        {/* PDF Viewer Header */}
        <div className="bg-[#1F497D] text-white px-5 py-4 flex items-center justify-between border-b border-[#1F497D]/50">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white/10 rounded-lg">
              <FileText className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-300">
                  Evidence Viewer (Gate 2 Verified)
                </span>
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white/90">
                  Official Standard
                </span>
              </div>
              <h2 className="text-sm font-medium text-white/95">
                {citation.isNumber} · {citation.clause} {citation.amendment ? `· ${citation.amendment}` : ''}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Close Evidence Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Toolbar */}
        <div className="bg-[#F4F6FA] border-b border-[#C5CFDF] px-5 py-2.5 flex items-center justify-between text-xs text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="font-mono font-medium text-neutral-800">
              Page 8 of 24 (simulated PDF)
            </span>
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-500 italic flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E9E5B]" /> Cryptographic SHA-256 match
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-white text-neutral-500 hover:text-neutral-800"
              title="Find in document"
            >
              <Search className="w-3.5 h-3.5" />
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-white text-neutral-500 hover:text-neutral-800"
              title="Print certified excerpt"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
            <button 
              type="button" 
              className="p-1.5 rounded hover:bg-white text-neutral-500 hover:text-neutral-800"
              title="Download standard excerpt"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* PDF Simulated Page Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#E9ECF2]/60 flex justify-center">
          <div className="w-full max-w-xl bg-white shadow-md border border-[#C5CFDF] p-6 sm:p-8 rounded-sm relative font-serif text-sm leading-relaxed text-[#1E1E1E]">
            {/* Sample Notice watermark */}
            <div className="text-right text-[11px] font-sans text-neutral-400 mb-4 border-b pb-2">
              <span className="bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded text-[10px] font-sans font-medium uppercase tracking-wide">
                {SAMPLE_DATA_NOTICE}
              </span>
            </div>

            {/* Standard Title block */}
            <div className="text-center mb-6 pb-4 border-b-2 border-neutral-800 font-sans">
              <div className="flex justify-center mb-2">
                <div className="w-9 h-9 rounded-full border-2 border-[#1F497D] flex items-center justify-center text-[#1F497D]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-bold text-base text-[#1F497D] tracking-wide">
                {citation.isNumber}
              </h3>
              <p className="text-xs text-neutral-700 font-medium max-w-md mx-auto mt-1">
                {citation.standardTitle}
              </p>
              <p className="text-[11px] text-neutral-500 mt-1">
                Section: Mechanical & Chemical Engineering Division Council
              </p>
            </div>

            {/* Section heading */}
            <div className="mb-4">
              <h4 className="font-sans font-bold text-sm text-neutral-900 uppercase tracking-wide">
                {citation.clause} — {citation.clauseTitle}
              </h4>
            </div>

            {/* Paragraphs before highlighted */}
            {citation.contextParagraphs && citation.contextParagraphs[0] && (
              <p className="text-neutral-700 mb-4 text-justify">
                {citation.contextParagraphs[0]}
              </p>
            )}

            {/* Highlighting clause in yellow with left amber bar as per design rules */}
            <div className="my-5 p-4 bg-amber-50/90 border-l-4 border-[#F5A623] rounded-r shadow-2xs relative">
              <div className="absolute -top-2.5 right-3 bg-[#F5A623] text-white text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full shadow-xs">
                CITED CLAUSE REQUIREMENT
              </div>
              <p className="text-neutral-950 font-medium leading-relaxed">
                {citation.highlightedText}
              </p>
            </div>

            {/* Subsequent context */}
            {citation.contextParagraphs && citation.contextParagraphs.slice(2).map((para, i) => (
              <p key={i} className="text-neutral-700 mb-4 text-justify">
                {para}
              </p>
            ))}

            {/* Verification Seal at bottom of PDF page */}
            <div className="mt-8 pt-4 border-t border-dashed border-neutral-300 flex items-center justify-between text-[11px] font-sans text-neutral-500">
              <div className="flex items-center gap-1.5 text-[#2E9E5B] font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified against official repository cache</span>
              </div>
              <div>Ref: {citation.id}</div>
            </div>
          </div>
        </div>

        {/* Footer with disabled official source link + explanation */}
        <div className="bg-white border-t border-[#C5CFDF] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative group w-full sm:w-auto">
            <button
              type="button"
              disabled
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-400 bg-neutral-100 border border-neutral-200 rounded-lg cursor-not-allowed opacity-80"
              title="Links to BIS source in production under an integration agreement"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open official source (Production)</span>
            </button>
            <div className="hidden group-hover:block absolute bottom-full left-0 mb-1 w-64 bg-neutral-900 text-white text-[11px] p-2 rounded shadow-lg z-20">
              Links to BIS source in production under an official institutional integration agreement.
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 bg-[#1F497D] text-white text-xs font-semibold rounded-lg hover:bg-[#1F497D]/90 transition-colors shadow-2xs"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
