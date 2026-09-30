import React, { useState } from 'react';
import {
  Code,
  Copy,
  Check,
  Sparkles,
  Bot,
  ExternalLink,
  ShieldCheck,
  Sliders,
  Send,
  X,
  MessageSquare,
  Globe,
  SlidersHorizontal,
} from 'lucide-react';
import { useToast } from '../common/Toast';
import { SAMPLE_DATA_NOTICE } from '../../data/demo';

export const ForBisWebsites: React.FC = () => {
  const { showToast } = useToast();
  const [copiedSnippet1, setCopiedSnippet1] = useState(false);
  const [copiedSnippet2, setCopiedSnippet2] = useState(false);
  const [widgetOpen, setWidgetOpen] = useState(false);

  // Configuration options state
  const [widgetLang, setWidgetLang] = useState('en');
  const [themeColor, setThemeColor] = useState('#1F497D');
  const [allowedScope, setAllowedScope] = useState('all');
  const [dataSources, setDataSources] = useState({
    standards: true,
    bisCare: true,
    manakOnline: true,
    limsLabs: true,
    egazette: true,
  });

  // Simulated widget chat messages
  const [widgetMessages, setWidgetMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string }>>([
    {
      sender: 'assistant',
      text: 'Namaste! How may I assist you with Indian Standards on this portal today?',
    },
  ]);
  const [widgetInput, setWidgetInput] = useState('');

  const snippet1 = `<script src="https://cdn.manaksaathi.example/widget.js" data-site="bis-portal" data-lang="${widgetLang}" data-color="${themeColor}"></script>`;

  const snippet2 = `// Modern Web Component / SDK initialization
import { initManakSaathi } from '@manak-saathi/embed-sdk';

initManakSaathi({
  container: '#manak-assistant-root',
  theme: '${themeColor}',
  locale: '${widgetLang}',
  scopes: ['standards_inquiry', 'licence_verifier', 'qco_finder'],
  dualGateVerification: true
});`;

  const copyToClipboard = (text: string, isFirst: boolean) => {
    navigator.clipboard.writeText(text);
    if (isFirst) {
      setCopiedSnippet1(true);
      setTimeout(() => setCopiedSnippet1(false), 2000);
    } else {
      setCopiedSnippet2(true);
      setTimeout(() => setCopiedSnippet2(false), 2000);
    }
    showToast('Embed snippet copied to clipboard.', 'success');
  };

  const handleSendWidgetMessage = () => {
    if (!widgetInput.trim()) return;
    const txt = widgetInput;
    setWidgetMessages((prev) => [...prev, { sender: 'user', text: txt }]);
    setWidgetInput('');

    setTimeout(() => {
      setWidgetMessages((prev) => [
        ...prev,
        {
          sender: 'assistant',
          text: `Under Indian Standards, products under mandatory QCOs require Scheme-I certification. (Referenced: IS XXXX : 20XX sample, Cl. 5.1).`,
        },
      ]);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F497D] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
            Plug-and-Play Chatbot Library
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wide bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded-full">
            Zero Change to BIS Systems
          </span>
        </div>
        <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
          {SAMPLE_DATA_NOTICE}
        </span>
      </div>

      {/* Main Title Card */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs mb-8">
        <h1 className="text-xl sm:text-2xl font-extrabold text-[#1E1E1E]">
          Embed Manak Saathi into Any BIS or Ministry Portal
        </h1>
        <p className="mt-1 text-xs text-neutral-600 max-w-3xl leading-relaxed">
          BIS operates multiple independent portals (bis.gov.in, Manak Online, BIS Care, LIMS, e-Sale). Rather than re-architecting legacy systems, officials can drop Manak Saathi into any webpage with a single line of script.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Mock Government Webpage */}
        <div className="lg:col-span-7 bg-white rounded-2xl border-2 border-neutral-300 shadow-sm overflow-hidden flex flex-col min-h-[580px] relative">
          {/* Government Watermark Bar */}
          <div className="bg-neutral-800 text-white px-4 py-1.5 text-[10px] flex items-center justify-between uppercase font-mono tracking-wider">
            <span>Demo site: not a real BIS page</span>
            <span className="text-amber-300">Simulated Environment</span>
          </div>

          {/* Mock Header with Generic Grey Emblem */}
          <div className="p-4 border-b border-neutral-200 bg-[#F4F6FA] flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Generic Grey Emblem Placeholder as per rule: Do NOT draw real emblem */}
              <div className="w-10 h-10 rounded-full bg-neutral-300 border border-neutral-400 flex items-center justify-center text-neutral-600 font-bold text-[10px] text-center leading-none">
                MOCK<br/>EMBLEM
              </div>
              <div>
                <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-tight">
                  Bureau of Indian Standards (Simulated Portal)
                </h3>
                <p className="text-[10px] text-neutral-500">
                  National Standards Body of India · Department of Consumer Affairs
                </p>
              </div>
            </div>
            <div className="text-[10px] font-mono bg-white border px-2 py-0.5 rounded text-neutral-600">
              portal.sample.gov.in
            </div>
          </div>

          {/* Mock Navigation */}
          <div className="bg-[#1F497D] text-white px-4 py-2 text-xs flex items-center gap-4">
            <span className="font-bold border-b-2 border-amber-400 pb-0.5">Standards</span>
            <span className="opacity-80">Conformity Assessment</span>
            <span className="opacity-80">Hallmarking</span>
            <span className="opacity-80">Laboratories</span>
          </div>

          {/* Mock Portal Content Body */}
          <div className="p-6 space-y-4 flex-1 bg-white">
            <div className="h-6 w-3/4 bg-neutral-100 rounded animate-pulse" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-neutral-100 rounded" />
              <div className="h-3 w-5/6 bg-neutral-100 rounded" />
              <div className="h-3 w-4/6 bg-neutral-100 rounded" />
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                <span className="text-xs font-bold text-neutral-700 block mb-1">
                  Product Certification Scheme (Scheme-I)
                </span>
                <span className="text-[11px] text-neutral-500">
                  Applicable for all domestic manufactured commodities under Section 13.
                </span>
              </div>
              <div className="p-3 rounded-lg border border-neutral-200 bg-neutral-50">
                <span className="text-xs font-bold text-neutral-700 block mb-1">
                  Quality Control Orders Directory
                </span>
                <span className="text-[11px] text-neutral-500">
                  730+ products currently notified for compulsory compliance.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-[#1F497D]">
              <span className="font-bold block mb-1">Notice to Applicants:</span>
              Simplified licensing applies to MSME entities submitting recognized lab test reports. Click the floating widget at bottom-right for instant clause guidance.
            </div>
          </div>

          {/* Floating Chat Bubble in Bottom-Right Corner */}
          <div className="absolute bottom-5 right-5 z-20">
            {!widgetOpen ? (
              <button
                onClick={() => setWidgetOpen(true)}
                className="flex items-center gap-2 px-4 py-3 rounded-full text-white shadow-xl hover:scale-105 transition-transform cursor-pointer border-2 border-white"
                style={{ backgroundColor: themeColor }}
              >
                <Bot className="w-5 h-5 text-amber-300" />
                <span className="text-xs font-bold">Ask Manak Saathi</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </button>
            ) : (
              /* Compact Widget Window */
              <div className="w-80 sm:w-96 h-96 bg-white rounded-2xl shadow-2xl border border-neutral-300 flex flex-col overflow-hidden animate-in zoom-in-95">
                {/* Widget Header */}
                <div
                  className="px-4 py-3 text-white flex items-center justify-between"
                  style={{ backgroundColor: themeColor }}
                >
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-amber-300" />
                    <div>
                      <h4 className="text-xs font-bold">Manak Saathi Assistant</h4>
                      <p className="text-[9px] text-white/80">Embedded Widget Mode</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setWidgetOpen(false)}
                    className="text-white/80 hover:text-white p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Messages Body */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-xs bg-[#F4F6FA]">
                  {widgetMessages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`p-2.5 rounded-xl max-w-[85%] text-xs leading-relaxed ${
                          m.sender === 'user'
                            ? 'bg-[#1F497D] text-white'
                            : 'bg-white border border-[#C5CFDF] text-neutral-800'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input Bar */}
                <div className="p-2 bg-white border-t border-neutral-200 flex items-center gap-1.5">
                  <input
                    type="text"
                    value={widgetInput}
                    onChange={(e) => setWidgetInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendWidgetMessage()}
                    placeholder="Ask about standards on this page..."
                    className="flex-1 text-xs px-2.5 py-1.5 border border-neutral-200 rounded-lg focus:outline-hidden"
                  />
                  <button
                    onClick={handleSendWidgetMessage}
                    className="p-2 rounded-lg text-white"
                    style={{ backgroundColor: themeColor }}
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Code Snippets & Zero-Code Configurator */}
        <div className="lg:col-span-5 space-y-6">
          {/* Code Snippets Card */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#1F497D]">
              <Code className="w-4 h-4 text-[#F5A623]" />
              <span>INSTANT INTEGRATION</span>
            </div>
            <h2 className="text-base font-bold text-[#1E1E1E] mb-1">
              Add Manak Saathi to any BIS website in one line
            </h2>
            <p className="text-xs text-neutral-500 mb-4">
              Copy and paste this script tag before the closing &lt;/body&gt; tag.
            </p>

            {/* Snippet 1: 1-line script */}
            <div className="relative mb-4">
              <pre className="bg-neutral-900 text-neutral-100 p-3.5 rounded-xl text-[11px] font-mono overflow-x-auto leading-relaxed border border-neutral-800">
                {snippet1}
              </pre>
              <button
                onClick={() => copyToClipboard(snippet1, true)}
                className="absolute top-2.5 right-2.5 p-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-colors flex items-center gap-1 text-[10px] font-mono cursor-pointer"
              >
                {copiedSnippet1 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet1 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Snippet 2: Web SDK */}
            <div className="relative">
              <div className="text-[11px] font-bold text-neutral-700 mb-1.5">
                Modern NPM / Web Component SDK:
              </div>
              <pre className="bg-neutral-900 text-neutral-100 p-3.5 rounded-xl text-[11px] font-mono overflow-x-auto leading-relaxed border border-neutral-800">
                {snippet2}
              </pre>
              <button
                onClick={() => copyToClipboard(snippet2, false)}
                className="absolute top-8 right-2.5 p-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-colors flex items-center gap-1 text-[10px] font-mono cursor-pointer"
              >
                {copiedSnippet2 ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSnippet2 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Zero-Code Configuration Panel */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-[#1F497D]" />
                <h3 className="font-bold text-sm text-[#1E1E1E]">Portal Administrator Settings</h3>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                No-Code GUI
              </span>
            </div>

            {/* Theme Colour Picker */}
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1.5">
                Widget Theme Colour
              </label>
              <div className="flex items-center gap-2">
                {[
                  { color: '#1F497D', label: 'BIS Navy' },
                  { color: '#0d5c3a', label: 'Gov Green' },
                  { color: '#9c4112', label: 'Saffron' },
                  { color: '#1f2937', label: 'Slate' },
                ].map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setThemeColor(c.color)}
                    className={`w-7 h-7 rounded-full border-2 transition-transform cursor-pointer ${
                      themeColor === c.color ? 'scale-110 border-neutral-900 shadow-sm' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: c.color }}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            {/* Language Selection */}
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                Default Language
              </label>
              <select
                value={widgetLang}
                onChange={(e) => setWidgetLang(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-neutral-50 border border-[#C5CFDF] rounded-lg"
              >
                <option value="en">English (Official Gazette default)</option>
                <option value="hi">हिन्दी (Hindi)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="bn">বাংলা (Bengali)</option>
              </select>
            </div>

            {/* Data Sources Checkboxes */}
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-2">
                Allowed Knowledge Feeds (Real-time Grounding)
              </label>
              <div className="space-y-1.5 text-xs text-neutral-700">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={dataSources.standards}
                    onChange={(e) => setDataSources((p) => ({ ...p, standards: e.target.checked }))}
                    className="rounded text-[#1F497D]"
                  />
                  <span>Official Indian Standards (e-Sale repository)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={dataSources.bisCare}
                    onChange={(e) => setDataSources((p) => ({ ...p, bisCare: e.target.checked }))}
                    className="rounded text-[#1F497D]"
                  />
                  <span>BIS Care licence & HUID database</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={dataSources.manakOnline}
                    onChange={(e) => setDataSources((p) => ({ ...p, manakOnline: e.target.checked }))}
                    className="rounded text-[#1F497D]"
                  />
                  <span>Manak Online application guidelines</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={dataSources.limsLabs}
                    onChange={(e) => setDataSources((p) => ({ ...p, limsLabs: e.target.checked }))}
                    className="rounded text-[#1F497D]"
                  />
                  <span>LIMS accredited laboratories directory</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={dataSources.egazette}
                    onChange={(e) => setDataSources((p) => ({ ...p, egazette: e.target.checked }))}
                    className="rounded text-[#1F497D]"
                  />
                  <span>eGazette Quality Control Orders (QCO)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
