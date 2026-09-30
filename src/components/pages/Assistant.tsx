import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Mic,
  Camera,
  Paperclip,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  Settings2,
  Check,
  Bot,
  User,
  SlidersHorizontal,
} from 'lucide-react';
import { PageId } from '../../types';
import { CitationChip } from '../common/CitationChip';
import { SAMPLE_DATA_NOTICE } from '../../data/demo';

interface AssistantProps {
  setCurrentPage: (page: PageId) => void;
  openEvidence: (citationId: string) => void;
  initialQuery?: string;
  isOffline: boolean;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text?: string;
  type?: 'text' | 'gatekeeper' | 'requirement' | 'summary' | 'roadmap-card' | 'declined';
  gatekeeperData?: {
    step1Done: boolean;
    step2Done: boolean;
    step3Done: boolean;
    failed: boolean;
    failMessage?: string;
  };
  requirementStep?: number;
  questionText?: string;
  options?: string[];
  summaryData?: {
    product: string;
    material: string;
    use: string;
    role: string;
  };
  citations?: string[];
}

export const Assistant: React.FC<AssistantProps> = ({
  setCurrentPage,
  openEvidence,
  initialQuery,
  isOffline,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [thinkingMessage, setThinkingMessage] = useState('Grounding query against BIS database...');
  const [isRecording, setIsRecording] = useState(false);
  const [simulateBlurryPhoto, setSimulateBlurryPhoto] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Requirement flow answers state
  const [reqAnswers, setReqAnswers] = useState({
    material: 'Stainless steel',
    use: 'Drinking water',
    role: 'Manufacture in India',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome-1',
          sender: 'assistant',
          type: 'text',
          text: 'Namaste! I am Manak Saathi, your Indian Standards and BIS compliance companion. You can ask me about mandatory standards, upload product labels, or check manufacturing testing requirements.',
        },
      ]);
    }
  }, []);

  // Handle external trigger from demo guide
  useEffect(() => {
    if (initialQuery && initialQuery.length > 0) {
      handleUserTextSubmit(initialQuery);
    }
  }, [initialQuery]);

  const starterChips = [
    'I want to make steel water bottles',
    'Is this ISI mark genuine?',
    'What does HUID on gold mean?',
    'Which lab tests pressure cookers?',
    'What is the penalty for selling without a licence?',
  ];

  // Voice recording simulation
  const handleVoiceInput = () => {
    if (isRecording) return;
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setInputVal('I want to start making steel water bottles');
    }, 2000);
  };

  // User text submission
  const handleUserTextSubmit = (customText?: string) => {
    const query = (customText || inputVal).trim();
    if (!query) return;

    // Add user message
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      type: 'text',
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    // Check special questions
    if (query.toLowerCase().includes('penalty for selling without a licence')) {
      // GATE 2 fail closed demo
      setIsThinking(true);
      setThinkingMessage('Validating response against BIS Act 2016 verified repository...');
      setTimeout(() => {
        setIsThinking(false);
        const declinedMsg: Message = {
          id: `declined-${Date.now()}`,
          sender: 'assistant',
          type: 'declined',
          text: 'Official sources in my knowledge base do not cover this precisely. Please contact your nearest BIS branch office.',
        };
        setMessages((prev) => [...prev, declinedMsg]);
      }, 1000);
      return;
    }

    if (
      query.toLowerCase().includes('water bottle') ||
      query.toLowerCase().includes('steel bottle') ||
      query.toLowerCase().includes('start making')
    ) {
      // Triggers GATE 1b requirement check sequence
      setIsThinking(true);
      setThinkingMessage('Initiating Gate 1b Requirement check...');
      setTimeout(() => {
        setIsThinking(false);
        // Ask Q1
        const q1Msg: Message = {
          id: `req-1-${Date.now()}`,
          sender: 'assistant',
          type: 'requirement',
          requirementStep: 1,
          questionText: 'What material is the bottle made of?',
          options: ['Stainless steel', 'Copper', 'Plastic', 'Glass'],
        };
        setMessages((prev) => [...prev, q1Msg]);
      }, 900);
      return;
    }

    if (query.toLowerCase().includes('huid')) {
      setIsThinking(true);
      setThinkingMessage('Retrieving Hallmarking regulations...');
      setTimeout(() => {
        setIsThinking(false);
        const ansMsg: Message = {
          id: `ans-huid-${Date.now()}`,
          sender: 'assistant',
          type: 'text',
          text: 'A Hallmarking Unique Identification (HUID) is a 6-digit alphanumeric code laser-etched on gold jewellery at recognized Assaying and Hallmarking Centres.',
          citations: ['cit-bis-scheme-1'],
        };
        setMessages((prev) => [...prev, ansMsg]);
      }, 800);
      return;
    }

    if (query.toLowerCase().includes('pressure cooker')) {
      setIsThinking(true);
      setThinkingMessage('Locating LIMS accredited testing laboratories...');
      setTimeout(() => {
        setIsThinking(false);
        const ansMsg: Message = {
          id: `ans-cooker-${Date.now()}`,
          sender: 'assistant',
          type: 'text',
          text: 'Domestic pressure cookers must conform to IS 2347 (sample). Testing is conducted at Central Testing Laboratories (CTL Sahibabad), National Test House, and accredited regional testing facilities.',
          citations: ['cit-is-17526-cl-7-1'],
        };
        setMessages((prev) => [...prev, ansMsg]);
      }, 800);
      return;
    }

    // Default conversational response
    setIsThinking(true);
    setThinkingMessage('Grounding answer against Indian Standards clauses...');
    setTimeout(() => {
      setIsThinking(false);
      const defaultAns: Message = {
        id: `ans-${Date.now()}`,
        sender: 'assistant',
        type: 'text',
        text: `Under Indian Standards, products under mandatory Quality Control Orders require Scheme-I certification with an operative CM/L licence.`,
        citations: ['cit-qco-steel-2023', 'cit-is-17526-cl-5-1'],
      };
      setMessages((prev) => [...prev, defaultAns]);
    }, 1000);
  };

  // Requirement flow question responses
  const handleSelectOption = (step: number, optionValue: string) => {
    // Record user choice
    const userMsg: Message = {
      id: `opt-usr-${Date.now()}`,
      sender: 'user',
      text: optionValue,
    };
    setMessages((prev) => [...prev, userMsg]);

    if (step === 1) {
      setReqAnswers((p) => ({ ...p, material: optionValue }));
      setIsThinking(true);
      setThinkingMessage('Checking product scope requirements...');
      setTimeout(() => {
        setIsThinking(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `req-2-${Date.now()}`,
            sender: 'assistant',
            type: 'requirement',
            requirementStep: 2,
            questionText: 'Is it for drinking water or other liquids?',
            options: ['Drinking water', 'Other liquids'],
          },
        ]);
      }, 700);
    } else if (step === 2) {
      setReqAnswers((p) => ({ ...p, use: optionValue }));
      setIsThinking(true);
      setThinkingMessage('Determining licensing jurisdiction & scheme...');
      setTimeout(() => {
        setIsThinking(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `req-3-${Date.now()}`,
            sender: 'assistant',
            type: 'requirement',
            requirementStep: 3,
            questionText: 'Will you manufacture in India or import?',
            options: ['Manufacture in India', 'Import'],
          },
        ]);
      }, 700);
    } else if (step === 3) {
      setReqAnswers((p) => ({ ...p, role: optionValue }));
      setIsThinking(true);
      setThinkingMessage('Synthesizing structured understanding...');
      setTimeout(() => {
        setIsThinking(false);
        // Show "What I understood" summary card
        setMessages((prev) => [
          ...prev,
          {
            id: `summary-${Date.now()}`,
            sender: 'assistant',
            type: 'summary',
            summaryData: {
              product: 'Insulated Flasks and Water Bottles',
              material: reqAnswers.material || 'Stainless steel',
              use: reqAnswers.use || 'Drinking water',
              role: optionValue,
            },
          },
        ]);
      }, 900);
    }
  };

  // Confirmation on "What I understood"
  const handleConfirmSummary = () => {
    setIsThinking(true);
    setThinkingMessage('Compiling verified Compliance Roadmap with citations...');
    setTimeout(() => {
      setIsThinking(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ans-final-${Date.now()}`,
          sender: 'assistant',
          type: 'text',
          text: 'Stainless steel drinking water bottles are covered by IS XXXX : 20XX (sample). Compulsory certification under DPIIT Quality Control Order is mandatory before commercial distribution.',
          citations: ['cit-is-17526-cl-5-1', 'cit-qco-steel-2023'],
        },
        {
          id: `roadmap-ready-${Date.now()}`,
          sender: 'assistant',
          type: 'roadmap-card',
        },
      ]);
    }, 1100);
  };

  // Handle Photo/Image upload to trigger GATE 1a
  const triggerImageUploadSimulation = (isBlurry = false) => {
    const userMsg: Message = {
      id: `img-user-${Date.now()}`,
      sender: 'user',
      text: '📷 [Uploaded Product Photo: Stainless Steel Water Bottle Label]',
    };

    // System Gatekeeper card
    const gateMsg: Message = {
      id: `gate-${Date.now()}`,
      sender: 'system',
      type: 'gatekeeper',
      gatekeeperData: {
        step1Done: false,
        step2Done: false,
        step3Done: false,
        failed: false,
      },
    };

    setMessages((prev) => [...prev, userMsg, gateMsg]);

    // Animate check 1: Image clear
    setTimeout(() => {
      if (isBlurry || simulateBlurryPhoto) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === gateMsg.id
              ? {
                  ...m,
                  gatekeeperData: {
                    step1Done: false,
                    step2Done: false,
                    step3Done: false,
                    failed: true,
                    failMessage:
                      'The photo is blurry. Please retake it in good light, holding the label flat.',
                  },
                }
              : m
          )
        );
        return;
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === gateMsg.id
            ? { ...m, gatekeeperData: { ...m.gatekeeperData!, step1Done: true } }
            : m
        )
      );

      // Animate check 2: Label detected
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === gateMsg.id
              ? { ...m, gatekeeperData: { ...m.gatekeeperData!, step2Done: true } }
              : m
          )
        );

        // Animate check 3: Question is about BIS
        setTimeout(() => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === gateMsg.id
                ? { ...m, gatekeeperData: { ...m.gatekeeperData!, step3Done: true } }
                : m
            )
          );

          // Proactive assistant follow-up
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                id: `req-after-img-${Date.now()}`,
                sender: 'assistant',
                type: 'requirement',
                requirementStep: 1,
                questionText:
                  'Identified: Insulated vacuum flask / bottle label. What material is the inner liner made of?',
                options: ['Stainless steel', 'Copper', 'Plastic', 'Glass'],
              },
            ]);
          }, 800);
        }, 600);
      }, 600);
    }, 800);
  };

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] max-w-5xl mx-auto w-full px-2 sm:px-4 py-2 relative">
      {/* Assistant Header Toolbar */}
      <div className="bg-white rounded-xl border border-[#C5CFDF] px-4 py-2.5 mb-2 shadow-2xs flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#1F497D] text-white flex items-center justify-center font-bold">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xs font-bold text-[#1F497D] uppercase tracking-wide">
                Manak Saathi AI Chat
              </h2>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.2 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E9E5B] animate-pulse" />
                Dual-Gate Verifier Active
              </span>
            </div>
            <p className="text-[11px] text-neutral-500">
              Cites exact Indian Standards clauses with zero hallucination guarantee
            </p>
          </div>
        </div>

        {/* Settings button for judge demo toggle */}
        <div className="relative">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-1.5 rounded-lg border border-[#C5CFDF] hover:bg-neutral-100 text-neutral-600 transition-colors flex items-center gap-1 text-xs"
            title="Demo Gatekeeper Settings"
          >
            <Settings2 className="w-4 h-4 text-neutral-600" />
            <span className="hidden sm:inline font-medium">Demo Settings</span>
          </button>

          {showSettings && (
            <div className="absolute right-0 mt-2 w-64 bg-white border border-[#C5CFDF] rounded-xl shadow-xl z-50 p-3 text-xs">
              <div className="font-bold text-neutral-800 mb-2 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#1F497D]" />
                <span>Gatekeeper Simulation</span>
              </div>
              <label className="flex items-center gap-2 cursor-pointer p-2 rounded-lg bg-neutral-50 hover:bg-neutral-100">
                <input
                  type="checkbox"
                  checked={simulateBlurryPhoto}
                  onChange={(e) => setSimulateBlurryPhoto(e.target.checked)}
                  className="rounded text-[#1F497D] focus:ring-0"
                />
                <span className="text-neutral-700">Simulate blurry photo</span>
              </label>
              <p className="text-[10px] text-neutral-400 mt-2">
                Forces Gate 1a to reject degraded image with instruction to retake.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto space-y-3.5 px-1 sm:px-2 py-2">
        {messages.map((msg) => (
          <div key={msg.id} className="transition-all animate-in fade-in duration-200">
            {/* User message */}
            {msg.sender === 'user' && (
              <div className="flex justify-end">
                <div className="max-w-[85%] sm:max-w-xl bg-[#1F497D] text-white px-4 py-2.5 rounded-2xl rounded-tr-none shadow-2xs text-xs sm:text-sm leading-relaxed">
                  <div className="flex items-center gap-1.5 mb-1 text-[10px] text-white/70 font-medium">
                    <User className="w-3 h-3" />
                    <span>You</span>
                  </div>
                  <div>{msg.text}</div>
                </div>
              </div>
            )}

            {/* Assistant message */}
            {msg.sender === 'assistant' && msg.type === 'text' && (
              <div className="flex justify-start">
                <div className="max-w-[90%] sm:max-w-2xl bg-white border border-[#C5CFDF] p-4 rounded-2xl rounded-tl-none shadow-xs text-xs sm:text-sm leading-relaxed text-[#1E1E1E]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#1F497D]">
                      <Bot className="w-3.5 h-3.5" />
                      <span>Manak Saathi</span>
                    </div>
                    <span className="text-[10px] text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                      {SAMPLE_DATA_NOTICE}
                    </span>
                  </div>

                  <p className="text-neutral-800">
                    {msg.text}
                    {msg.citations?.map((citId) => (
                      <CitationChip
                        key={citId}
                        citationId={citId}
                        onClick={openEvidence}
                      />
                    ))}
                  </p>

                  {/* GATE 2 Citation Verifier status badge */}
                  <div className="mt-3 pt-2.5 border-t border-dashed border-[#C5CFDF] flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5 text-[#2E9E5B] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>✓ Verified: every sentence matched to its cited clause</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* GATE 1a Gatekeeper System Card */}
            {msg.sender === 'system' && msg.type === 'gatekeeper' && msg.gatekeeperData && (
              <div className="max-w-md mx-auto my-2 p-4 rounded-xl bg-amber-50/90 border-2 border-[#F5A623] shadow-md animate-in zoom-in-95">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-amber-200">
                  <div className="w-6 h-6 rounded-full bg-[#F5A623] text-white flex items-center justify-center font-bold text-xs">
                    1a
                  </div>
                  <h4 className="font-bold text-xs uppercase tracking-wide text-amber-950">
                    Gatekeeper Check (Gate 1a)
                  </h4>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Row 1 */}
                  <div className="flex items-center justify-between py-1">
                    <span className="text-neutral-800">1. Image is clear</span>
                    {msg.gatekeeperData.failed ? (
                      <span className="flex items-center gap-1 text-[#D64545] font-bold">
                        <XCircle className="w-4 h-4" /> Failed
                      </span>
                    ) : msg.gatekeeperData.step1Done ? (
                      <span className="flex items-center gap-1 text-[#2E9E5B] font-bold">
                        <CheckCircle2 className="w-4 h-4" /> Passed
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-[10px] animate-pulse">Evaluating...</span>
                    )}
                  </div>

                  {/* Row 2 */}
                  <div className="flex items-center justify-between py-1">
                    <span className="text-neutral-800">2. Product label detected</span>
                    {msg.gatekeeperData.step2Done ? (
                      <span className="flex items-center gap-1 text-[#2E9E5B] font-bold">
                        <CheckCircle2 className="w-4 h-4" /> Passed
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-[10px]">
                        {msg.gatekeeperData.failed ? 'Skipped' : 'Pending...'}
                      </span>
                    )}
                  </div>

                  {/* Row 3 */}
                  <div className="flex items-center justify-between py-1">
                    <span className="text-neutral-800">3. Question is about BIS standards</span>
                    {msg.gatekeeperData.step3Done ? (
                      <span className="flex items-center gap-1 text-[#2E9E5B] font-bold">
                        <CheckCircle2 className="w-4 h-4" /> Passed
                      </span>
                    ) : (
                      <span className="text-neutral-400 text-[10px]">
                        {msg.gatekeeperData.failed ? 'Skipped' : 'Pending...'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Gatekeeper Fail handling */}
                {msg.gatekeeperData.failed && (
                  <div className="mt-3 pt-3 border-t border-red-200">
                    <p className="text-xs text-[#D64545] font-medium leading-relaxed mb-3">
                      {msg.gatekeeperData.failMessage}
                    </p>
                    <button
                      onClick={() => {
                        setSimulateBlurryPhoto(false);
                        triggerImageUploadSimulation(false);
                      }}
                      className="w-full py-2 bg-white border border-[#D64545] text-[#D64545] hover:bg-rose-50 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake with Good Light & Focus</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* GATE 1b Requirement Check Question */}
            {msg.type === 'requirement' && msg.options && (
              <div className="flex justify-start">
                <div className="max-w-[90%] sm:max-w-lg bg-amber-50/80 border-2 border-[#F5A623] p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F5A623] text-white px-2 py-0.5 rounded-full">
                      Gate 1b · Question {msg.requirementStep} of 3
                    </span>
                    <span className="text-[10px] text-neutral-500 font-medium">
                      Clarification required
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 mb-3">
                    {msg.questionText}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {msg.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelectOption(msg.requirementStep || 1, opt)}
                        className="px-3 py-1.5 bg-white border border-[#F5A623] text-neutral-800 hover:bg-[#F5A623] hover:text-white rounded-lg text-xs font-medium shadow-2xs transition-all cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* "What I understood" Summary Card */}
            {msg.type === 'summary' && msg.summaryData && (
              <div className="max-w-md mx-auto my-3 bg-white border-2 border-[#1F497D] rounded-2xl p-4 sm:p-5 shadow-md">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-neutral-200">
                  <ShieldCheck className="w-5 h-5 text-[#1F497D]" />
                  <h4 className="font-bold text-sm text-[#1F497D]">What I Understood</h4>
                </div>

                <div className="space-y-2 text-xs mb-4">
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Product Category:</span>
                    <span className="font-semibold text-neutral-900">{msg.summaryData.product}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Material Grade:</span>
                    <span className="font-semibold text-neutral-900">{msg.summaryData.material}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-100">
                    <span className="text-neutral-500">Intended Application:</span>
                    <span className="font-semibold text-neutral-900">{msg.summaryData.use}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-500">Manufacturing Role:</span>
                    <span className="font-semibold text-neutral-900">{msg.summaryData.role}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleConfirmSummary}
                    className="flex-1 py-2 rounded-xl bg-[#2E9E5B] hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer"
                  >
                    <Check className="w-4 h-4" />
                    <span>Yes, that&apos;s right</span>
                  </button>
                  <button
                    onClick={() => {
                      setInputVal('I want to make copper water bottles instead');
                    }}
                    className="px-4 py-2 rounded-xl bg-white border border-[#C5CFDF] hover:bg-neutral-100 text-neutral-700 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}

            {/* Rich "Compliance Roadmap Ready" card */}
            {msg.type === 'roadmap-card' && (
              <div className="max-w-md mx-auto my-3 p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/60 border-2 border-[#F5A623] shadow-lg text-neutral-900 animate-in zoom-in-95">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-6 h-6 text-[#F5A623]" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#F5A623] text-white">
                      Headline Feature
                    </span>
                    <h4 className="font-extrabold text-base text-neutral-950 mt-0.5">
                      Compliance Roadmap Generated!
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-neutral-700 leading-relaxed mb-4">
                  Full 8-step journey ready: applicable standard IS XXXX : 20XX (sample), mandatory QCO status, 6 required lab tests, fee schedule, and 30-day timeline.
                </p>

                <button
                  onClick={() => setCurrentPage('roadmap')}
                  className="w-full py-2.5 rounded-xl bg-[#1F497D] hover:bg-[#16365C] text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Open Full Roadmap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}

            {/* Declined / Fail-Closed Response */}
            {msg.type === 'declined' && (
              <div className="flex justify-start">
                <div className="max-w-[90%] sm:max-w-xl bg-rose-50/90 border-2 border-[#D64545] p-4 rounded-2xl rounded-tl-none shadow-xs text-xs sm:text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#D64545] text-white px-2 py-0.5 rounded-full">
                      Declined: no verified source (fails closed)
                    </span>
                    <AlertTriangle className="w-4 h-4 text-[#D64545]" />
                  </div>
                  <p className="text-neutral-900 font-medium leading-relaxed">
                    {msg.text}
                  </p>
                  <p className="mt-2 text-[11px] text-neutral-500">
                    Gate 2 safety policy: Manak Saathi refuses to extrapolate legal advice or speculative enforcement thresholds without exact statutory clause citations.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Animated Thinking Indicator */}
        {isThinking && (
          <div className="flex justify-start animate-in fade-in">
            <div className="bg-white border border-[#C5CFDF] px-4 py-2.5 rounded-2xl rounded-tl-none shadow-xs flex items-center gap-2.5 text-xs text-neutral-600">
              <Sparkles className="w-4 h-4 text-[#F5A623] animate-spin" />
              <span className="font-medium animate-pulse">{thinkingMessage}</span>
            </div>
          </div>
        )}

        {/* Voice recording waveform animation */}
        {isRecording && (
          <div className="flex justify-center py-2 animate-in fade-in">
            <div className="bg-[#1F497D] text-white px-5 py-2 rounded-full shadow-lg flex items-center gap-3 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-ping" />
              <span>Listening to your voice... (Simulating Bhashini STT)</span>
              <div className="flex items-center gap-0.5">
                <span className="w-1 h-3 bg-white animate-pulse" />
                <span className="w-1 h-5 bg-white animate-pulse delay-75" />
                <span className="w-1 h-2 bg-white animate-pulse delay-150" />
                <span className="w-1 h-6 bg-white animate-pulse delay-100" />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Starter Chips */}
      <div className="py-2 overflow-x-auto flex items-center gap-2 no-scrollbar">
        <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider shrink-0 pl-1">
          Suggestions:
        </span>
        {starterChips.map((chip, idx) => (
          <button
            key={idx}
            onClick={() => handleUserTextSubmit(chip)}
            className="shrink-0 text-xs px-2.5 py-1 rounded-full bg-white hover:bg-neutral-100 text-neutral-700 border border-[#C5CFDF] hover:border-[#1F497D] transition-all cursor-pointer whitespace-nowrap"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Composer Bar */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] shadow-md p-2 flex items-center gap-1.5 sm:gap-2">
        {/* Hidden inputs for camera & files */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept=".pdf,.png,.jpg,.jpeg"
          onChange={() => triggerImageUploadSimulation(false)}
        />
        <input
          type="file"
          ref={cameraInputRef}
          className="hidden"
          accept="image/*"
          capture="environment"
          onChange={() => triggerImageUploadSimulation(false)}
        />

        {/* Input 1: Camera button */}
        <button
          type="button"
          onClick={() => triggerImageUploadSimulation(false)}
          title="Take photo of product label (Triggers Gate 1a)"
          className="p-2 text-neutral-600 hover:text-[#1F497D] hover:bg-neutral-100 rounded-xl transition-colors shrink-0"
        >
          <Camera className="w-5 h-5" />
        </button>

        {/* Input 2: Document upload button */}
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          title="Upload specification document or test report"
          className="p-2 text-neutral-600 hover:text-[#1F497D] hover:bg-neutral-100 rounded-xl transition-colors shrink-0"
        >
          <Paperclip className="w-5 h-5" />
        </button>

        {/* Input 3: Voice / Microphone button */}
        <button
          type="button"
          onClick={handleVoiceInput}
          title="Speak in English, Hindi, or regional languages"
          className={`p-2 rounded-xl transition-colors shrink-0 ${
            isRecording ? 'bg-red-500 text-white animate-pulse' : 'text-neutral-600 hover:text-[#1F497D] hover:bg-neutral-100'
          }`}
        >
          <Mic className="w-5 h-5" />
        </button>

        {/* Input 4: Text input box */}
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleUserTextSubmit();
          }}
          placeholder="Ask any Indian Standard clause, e.g. 'I want to make steel water bottles'..."
          className="flex-1 bg-transparent border-0 px-2 py-1.5 text-xs sm:text-sm text-neutral-900 focus:outline-hidden focus:ring-0 placeholder:text-neutral-400"
        />

        {/* Send button */}
        <button
          type="button"
          onClick={() => handleUserTextSubmit()}
          disabled={!inputVal.trim()}
          className="p-2.5 rounded-xl bg-[#1F497D] text-white hover:bg-[#16365C] disabled:opacity-40 disabled:hover:bg-[#1F497D] transition-all shrink-0 cursor-pointer shadow-2xs"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
