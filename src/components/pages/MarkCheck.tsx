import React, { useState } from 'react';
import {
  CheckCircle,
  Camera,
  Search,
  AlertTriangle,
  ShieldCheck,
  ShieldAlert,
  FileWarning,
  Sparkles,
  WifiOff,
  RotateCcw,
  Send,
  X,
  ExternalLink,
  Award,
} from 'lucide-react';
import {
  GENUINE_LICENCE_SAMPLE,
  MISUSED_LICENCE_SAMPLE,
  HUID_GOLD_SAMPLE,
  SAMPLE_DATA_NOTICE,
} from '../../data/demo';
import { useToast } from '../common/Toast';
import { LicenceCheckResult, HuidCheckResult } from '../../types';

interface MarkCheckProps {
  isOffline: boolean;
  autoSelectMisuseDemo?: boolean;
}

export const MarkCheck: React.FC<MarkCheckProps> = ({ isOffline, autoSelectMisuseDemo }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState<'scan' | 'code'>('scan');
  const [simulateMisuse, setSimulateMisuse] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  // Manual code input tab states
  const [cmlInput, setCmlInput] = useState('CM/L-0000000');
  const [huidInput, setHuidInput] = useState('');
  const [crsInput, setCrsInput] = useState('');

  // Verified output result
  const [licenceResult, setLicenceResult] = useState<LicenceCheckResult | null>(null);
  const [huidResult, setHuidResult] = useState<HuidCheckResult | null>(null);

  // Complaint modal preview
  const [complaintModalOpen, setComplaintModalOpen] = useState(false);

  // React to demo scenario 3
  React.useEffect(() => {
    if (autoSelectMisuseDemo) {
      setSimulateMisuse(true);
      handleTriggerScan(true);
    }
  }, [autoSelectMisuseDemo]);

  const handleTriggerScan = (forceMisuse = false) => {
    if (isOffline) {
      showToast('Live verification needs internet; code saved, will verify when online.', 'info', 'Offline Mode');
      return;
    }

    setIsScanning(true);
    setScanComplete(false);
    setLicenceResult(null);
    setHuidResult(null);

    // Simulate 1.2s camera scanning frame
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
      const isMisused = forceMisuse || simulateMisuse;
      setLicenceResult(isMisused ? MISUSED_LICENCE_SAMPLE : GENUINE_LICENCE_SAMPLE);
    }, 1200);
  };

  const handleVerifyCodes = (type: 'cml' | 'huid' | 'crs') => {
    if (isOffline) {
      showToast('Live verification needs internet; code saved, will verify when online.', 'info', 'Offline Mode');
      return;
    }

    if (type === 'huid') {
      setHuidResult(HUID_GOLD_SAMPLE);
      setLicenceResult(null);
      showToast('Gold Hallmark HUID verified successfully.', 'success');
      return;
    }

    const isMisused = simulateMisuse;
    setLicenceResult(isMisused ? MISUSED_LICENCE_SAMPLE : GENUINE_LICENCE_SAMPLE);
    setHuidResult(null);
    showToast('BIS licence check completed.', isMisused ? 'error' : 'success');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F497D] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
            Consumer Protection & Industry Verification
          </span>
        </div>
        <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
          {SAMPLE_DATA_NOTICE}
        </span>
      </div>

      {/* Main Title Card */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#1E1E1E]">
              Licence, Standard Mark & HUID Verification
            </h1>
            <p className="mt-1 text-xs text-neutral-600">
              Verify whether a manufacturer&apos;s CM/L number is genuine, active, and legally authorized for the printed brand.
            </p>
          </div>

          {/* Toggle for Misuse Simulation */}
          <div className="flex items-center gap-2 bg-amber-50 p-2.5 rounded-xl border border-amber-300">
            <label className="flex items-center gap-2 cursor-pointer text-xs">
              <input
                type="checkbox"
                checked={simulateMisuse}
                onChange={(e) => {
                  setSimulateMisuse(e.target.checked);
                  if (licenceResult) {
                    setLicenceResult(e.target.checked ? MISUSED_LICENCE_SAMPLE : GENUINE_LICENCE_SAMPLE);
                  }
                }}
                className="rounded text-[#F5A623] focus:ring-0"
              />
              <span className="font-bold text-amber-950">Simulate misused licence</span>
            </label>
          </div>
        </div>
      </div>

      {/* Offline Alert if active */}
      {isOffline && (
        <div className="mb-6 p-4 rounded-xl bg-amber-100 border border-amber-300 text-amber-950 text-xs flex items-center gap-2.5">
          <WifiOff className="w-5 h-5 text-amber-700 shrink-0" />
          <div>
            <span className="font-bold">Offline:</span> Live verification needs internet. Scanned codes are stored securely in local cache and will automatically verify when network is restored.
          </div>
        </div>
      )}

      {/* Tabs: Scan Label vs Enter Code */}
      <div className="flex items-center gap-2 mb-6 border-b border-[#C5CFDF] pb-2">
        <button
          onClick={() => setActiveTab('scan')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'scan'
              ? 'bg-[#1F497D] text-white shadow-2xs'
              : 'bg-white text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          <Camera className="w-4 h-4" />
          <span>Scan Product Label (OCR Camera)</span>
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'code'
              ? 'bg-[#1F497D] text-white shadow-2xs'
              : 'bg-white text-neutral-600 hover:bg-neutral-100'
          }`}
        >
          <Search className="w-4 h-4" />
          <span>Enter Code (CM/L, HUID, CRS)</span>
        </button>
      </div>

      {/* Tab 1: Scanner View */}
      {activeTab === 'scan' && (
        <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs mb-8 text-center">
          <div className="max-w-md mx-auto">
            {/* Camera Viewfinder Mock */}
            <div className="relative aspect-4/3 max-h-72 rounded-2xl bg-neutral-900 border-4 border-dashed border-[#1F497D]/60 flex items-center justify-center overflow-hidden mb-5">
              {isScanning ? (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                  {/* Laser Scanning Line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-amber-400 shadow-[0_0_15px_#F5A623] animate-bounce" />
                  <div className="w-48 h-36 border-2 border-amber-300 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xs font-mono bg-black/60 px-2 py-1 rounded">
                      Detecting BIS Mark & CM/L...
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-neutral-400 text-xs flex flex-col items-center gap-2 p-6">
                  {/* Generic round certification badge icon as per prompt rule: NEVER draw real ISI */}
                  <div className="w-16 h-16 rounded-full border-2 border-neutral-500 flex items-center justify-center text-neutral-300 mb-1">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <span className="font-semibold text-neutral-300">Point camera at Standard Mark on product box</span>
                  <span className="text-[11px] text-neutral-500">
                    Extracts IS number, brand name, and CM/L licence identifier
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={() => handleTriggerScan(simulateMisuse)}
              disabled={isScanning}
              className="w-full py-3 rounded-xl bg-[#1F497D] text-white font-bold text-xs shadow-md hover:bg-[#16365C] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Camera className="w-4 h-4" />
              <span>{isScanning ? 'Processing label image...' : 'Simulate Scanning Sample Label'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Manual Code Input */}
      {activeTab === 'code' && (
        <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Input 1: CM/L */}
            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-[#C5CFDF] flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  BIS Licence Number (CM/L)
                </label>
                <input
                  type="text"
                  value={cmlInput}
                  onChange={(e) => setCmlInput(e.target.value)}
                  placeholder="CM/L-XXXXXXX"
                  className="w-full px-3 py-2 bg-white border border-[#C5CFDF] rounded-lg text-xs font-mono text-neutral-900"
                />
                <span className="text-[10px] text-neutral-400 mt-1 block">7 or 8 digit product licence</span>
              </div>
              <button
                onClick={() => handleVerifyCodes('cml')}
                className="mt-3 w-full py-2 bg-[#1F497D] text-white text-xs font-bold rounded-lg hover:bg-[#16365C] cursor-pointer"
              >
                Verify Licence
              </button>
            </div>

            {/* Input 2: HUID for Gold */}
            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-[#C5CFDF] flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  Gold Hallmarking (HUID)
                </label>
                <input
                  type="text"
                  value={huidInput}
                  onChange={(e) => setHuidInput(e.target.value)}
                  placeholder="SAMPLE-HUID-9K2M4P"
                  className="w-full px-3 py-2 bg-white border border-[#C5CFDF] rounded-lg text-xs font-mono text-neutral-900 uppercase"
                />
                <span className="text-[10px] text-neutral-400 mt-1 block">6-character alphanumeric code</span>
              </div>
              <button
                onClick={() => handleVerifyCodes('huid')}
                className="mt-3 w-full py-2 bg-[#F5A623] text-black text-xs font-bold rounded-lg hover:bg-amber-400 cursor-pointer"
              >
                Verify Gold HUID
              </button>
            </div>

            {/* Input 3: CRS Registration */}
            <div className="p-4 rounded-xl bg-[#F4F6FA] border border-[#C5CFDF] flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold text-neutral-800 block mb-1">
                  Compulsory Reg. (CRS R-Number)
                </label>
                <input
                  type="text"
                  value={crsInput}
                  onChange={(e) => setCrsInput(e.target.value)}
                  placeholder="R-XXXXXXXX (sample)"
                  className="w-full px-3 py-2 bg-white border border-[#C5CFDF] rounded-lg text-xs font-mono text-neutral-900"
                />
                <span className="text-[10px] text-neutral-400 mt-1 block">For electronics & IT goods</span>
              </div>
              <button
                onClick={() => handleVerifyCodes('crs')}
                className="mt-3 w-full py-2 bg-neutral-800 text-white text-xs font-bold rounded-lg hover:bg-neutral-900 cursor-pointer"
              >
                Verify CRS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detected Fields & Verification Output Card */}
      {licenceResult && (
        <div
          className={`rounded-2xl border-2 p-6 shadow-md transition-all animate-in fade-in ${
            licenceResult.misuseSuspected
              ? 'bg-amber-50/90 border-[#F5A623]'
              : 'bg-white border-[#2E9E5B]'
          }`}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-3">
            <div className="flex items-center gap-2.5">
              {licenceResult.misuseSuspected ? (
                <div className="w-10 h-10 rounded-full bg-amber-100 text-[#b0730d] flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-[#F5A623]" />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-[#2E9E5B] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#2E9E5B]" />
                </div>
              )}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wide">
                    {licenceResult.misuseSuspected ? (
                      <span className="text-[#b0730d]">POTENTIAL BRAND MISUSE DETECTED</span>
                    ) : (
                      <span className="text-[#2E9E5B]">GENUINE & OPERATIVE LICENCE</span>
                    )}
                  </span>
                  <span className="text-[10px] bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded font-mono">
                    {licenceResult.cmlNumber}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mt-0.5">
                  {licenceResult.productName}
                </h3>
              </div>
            </div>

            <div className="text-[11px] text-neutral-500 font-medium">
              Source: BIS public data (live in prototype)
            </div>
          </div>

          {/* Detected Fields from OCR */}
          <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs border-b border-neutral-200">
            <div>
              <span className="text-neutral-500 block">Detected Brand on Pack:</span>
              <span className="font-bold text-neutral-900">{licenceResult.brand}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Standard Reference:</span>
              <span className="font-bold text-[#1F497D] font-mono">{licenceResult.isNumber}</span>
            </div>
            <div>
              <span className="text-neutral-500 block">Licensed Manufacturer:</span>
              <span className="font-bold text-neutral-900">{licenceResult.manufacturer}</span>
            </div>
          </div>

          {/* 4 Check Rows as requested */}
          <div className="py-4 space-y-2.5 text-xs">
            {/* Check 1 */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-neutral-200">
              <span className="font-medium text-neutral-800">Licence is valid and operative</span>
              <span className="flex items-center gap-1 font-bold text-[#2E9E5B]">
                <CheckCircle className="w-4 h-4" /> Valid (until {licenceResult.validUntil})
              </span>
            </div>

            {/* Check 2: Covers this brand */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-neutral-200">
              <span className="font-medium text-neutral-800">Covers this brand and product model</span>
              {licenceResult.isBrandInScope ? (
                <span className="flex items-center gap-1 font-bold text-[#2E9E5B]">
                  <CheckCircle className="w-4 h-4" /> Covered in Licence Scope
                </span>
              ) : (
                <span className="flex items-center gap-1 font-bold text-[#D64545]">
                  <FileWarning className="w-4 h-4" /> Brand Not Registered
                </span>
              )}
            </div>

            {/* Check 3: Stop marking */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-neutral-200">
              <span className="font-medium text-neutral-800">Not under stop marking orders</span>
              <span className="flex items-center gap-1 font-bold text-[#2E9E5B]">
                <CheckCircle className="w-4 h-4" /> Clear (No Stop Marking)
              </span>
            </div>

            {/* Check 4: Recall alerts */}
            <div className="flex items-center justify-between p-2 rounded-lg bg-white/70 border border-neutral-200">
              <span className="font-medium text-neutral-800">No recall alerts for this manufacturer</span>
              <span className="flex items-center gap-1 font-bold text-[#2E9E5B]">
                <CheckCircle className="w-4 h-4" /> Clear (Zero Recalls)
              </span>
            </div>
          </div>

          {/* Misuse Banner & Action */}
          {licenceResult.misuseSuspected && (
            <div className="mt-2 p-4 rounded-xl bg-amber-100 border border-amber-300 text-neutral-900 text-xs">
              <div className="font-bold text-amber-950 text-sm mb-1 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-[#F5A623]" />
                Genuine licence number, but it does not cover this brand. Possible misuse.
              </div>
              <p className="text-neutral-700 leading-relaxed mb-3">
                The manufacturer &apos;Apex Metalware&apos; holds a genuine licence, but the brand &apos;SHINE-PLUS HYDRATION&apos; has not been declared to BIS. Selling under an unregistered brand name is prohibited under Section 17 of the BIS Act, 2016.
              </p>
              <button
                onClick={() => setComplaintModalOpen(true)}
                className="px-4 py-2 bg-[#D64545] hover:bg-rose-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
              >
                <FileWarning className="w-4 h-4" />
                <span>Report to BIS (Preview Complaint)</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* HUID Result Card */}
      {huidResult && (
        <div className="rounded-2xl border-2 border-amber-300 bg-white p-6 shadow-md transition-all animate-in fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-4">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-[#F5A623]" />
              <div>
                <span className="text-[10px] font-bold text-[#b0730d] uppercase">BIS Hallmark Verified</span>
                <h3 className="font-bold text-base text-neutral-900">Gold Jewellery Authentication</h3>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-50 text-amber-900 px-2 py-1 rounded border border-amber-200">
              {huidResult.huid}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs mb-4">
            <div className="p-2.5 rounded-lg bg-[#F4F6FA]">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Assayed Purity</span>
              <span className="font-bold text-neutral-900 mt-0.5 block">{huidResult.purity}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F4F6FA]">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Article Category</span>
              <span className="font-bold text-neutral-900 mt-0.5 block">{huidResult.articleType}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F4F6FA]">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Certified Weight</span>
              <span className="font-bold text-neutral-900 mt-0.5 block">{huidResult.weightGrams}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#F4F6FA]">
              <span className="text-neutral-400 text-[10px] uppercase font-bold block">Hallmarking Date</span>
              <span className="font-bold text-neutral-900 mt-0.5 block">{huidResult.dateOfHallmarking}</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <div>
              <span className="font-bold block">Assaying & Hallmarking Centre:</span>
              <span className="text-neutral-700">{huidResult.hallmarkingCentre}</span>
            </div>
            <span className="font-mono text-[11px] text-emerald-800">{huidResult.centreCode}</span>
          </div>
        </div>
      )}

      {/* Pre-filled Complaint Preview Modal */}
      {complaintModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-[#C5CFDF] animate-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b mb-4">
              <h3 className="font-bold text-sm text-[#D64545] flex items-center gap-2">
                <FileWarning className="w-5 h-5" />
                Pre-Filled BIS Enforcement Complaint Form
              </h3>
              <button
                onClick={() => setComplaintModalOpen(false)}
                className="text-neutral-400 hover:text-neutral-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs mb-5">
              <div className="bg-[#F4F6FA] p-3 rounded-lg border border-neutral-200">
                <div className="font-bold text-neutral-800 mb-1">Subject: Suspected Misuse of CM/L Licence</div>
                <div className="text-neutral-600">Product: Stainless Steel Insulated Water Bottles</div>
                <div className="text-neutral-600 font-mono">Quoted CM/L: CM/L-0000000 (sample)</div>
                <div className="text-neutral-600">Unregistered Brand on Packaging: SHINE-PLUS HYDRATION</div>
              </div>

              <p className="text-neutral-600 leading-relaxed">
                This grievance draft is auto-compiled using telemetry from the Manak Saathi consumer scan. In production, this can be securely dispatched to the BIS Complaints Cell or Consumer Grievance Portal (e-Daakhil).
              </p>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => setComplaintModalOpen(false)}
                className="px-4 py-2 bg-neutral-100 text-neutral-700 text-xs font-semibold rounded-lg hover:bg-neutral-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setComplaintModalOpen(false);
                  showToast('Complaint draft saved to internal watch queue.', 'success', 'Report Stored');
                }}
                className="px-4 py-2 bg-[#D64545] text-white text-xs font-bold rounded-lg hover:bg-rose-700 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Simulate Dispatch to BIS Cell</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
