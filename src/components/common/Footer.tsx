import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { SAMPLE_DATA_NOTICE } from '../../data/demo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#C5CFDF] text-xs text-neutral-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#1F497D]/10 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1F497D]" />
          </div>
          <p className="font-normal text-neutral-700">
            <span className="font-semibold text-[#1F497D]">Prototype by Team_B for SIH 2026.</span> Not an official BIS service. Uses sample data; production would use official BIS data under an integration agreement.
          </p>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-neutral-500">
          <span className="inline-flex items-center gap-1 bg-[#F4F6FA] border border-[#C5CFDF] px-2 py-0.5 rounded text-neutral-600 font-medium">
            <Info className="w-3 h-3 text-neutral-400" />
            {SAMPLE_DATA_NOTICE}
          </span>
          <span className="hidden md:inline">Problem Statement: 26107</span>
        </div>
      </div>
    </footer>
  );
};
