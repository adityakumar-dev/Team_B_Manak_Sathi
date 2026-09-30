import React from 'react';
import { BookOpen } from 'lucide-react';
import { CITATIONS } from '../../data/demo';

interface CitationChipProps {
  citationId: string;
  onClick: (citationId: string) => void;
  label?: string;
  className?: string;
}

export const CitationChip: React.FC<CitationChipProps> = ({
  citationId,
  onClick,
  label,
  className = '',
}) => {
  const citation = CITATIONS[citationId];
  const displayLabel = label || (citation ? `[${citation.isNumber}, ${citation.clause}]` : `[Clause Ref]`);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick(citationId);
      }}
      title="Click to inspect verified standard clause evidence"
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 mx-1 text-xs font-mono font-medium text-[#1F497D] bg-[#1F497D]/10 hover:bg-[#1F497D]/20 border border-[#1F497D]/30 rounded cursor-pointer transition-colors shadow-2xs group ${className}`}
    >
      <BookOpen className="w-3 h-3 text-[#1F497D] group-hover:scale-110 transition-transform" />
      <span className="underline decoration-dotted underline-offset-2">{displayLabel}</span>
    </button>
  );
};
