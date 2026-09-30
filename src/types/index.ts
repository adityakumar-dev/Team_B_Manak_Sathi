export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'bn';

export type PageId = 
  | 'home' 
  | 'assistant' 
  | 'roadmap' 
  | 'gap-analyser' 
  | 'mark-check' 
  | 'alerts' 
  | 'for-bis-websites' 
  | 'officials-portal' 
  | 'how-it-works';

export interface Citation {
  id: string;
  isNumber: string;
  standardTitle: string;
  clause: string;
  amendment?: string;
  year?: string;
  clauseTitle: string;
  textSnippet: string;
  highlightedText: string;
  contextParagraphs: string[];
}

export interface RoadmapStepData {
  id: number;
  title: string;
  subtitle: string;
  status: 'mandatory' | 'recommended' | 'completed' | 'info';
  badge?: string;
  badgeType?: 'amber' | 'blue' | 'green' | 'red';
  citationId: string;
  summary: string;
  details?: {
    standards?: Array<{ code: string; title: string; type: string }>;
    qcoDetails?: { orderName: string; effectiveDate: string; gazetteNo: string };
    schemeDetails?: { name: string; markType: string; description: string };
    procedureDetails?: { simplifiedEligible: boolean; reason: string; turnaround: string };
    tests?: Array<{ testName: string; clauseRef: string; sampleSize: string; duration: string }>;
    labs?: Array<{ name: string; city: string; distance: string; cost: string; accredited: boolean }>;
    costs?: Array<{ head: string; amount: string; note: string }>;
    timeline?: Array<{ stepNumber: number; action: string; duration: string }>;
  };
}

export interface GapRow {
  id: string;
  parameter: string;
  yourValue: string;
  requirement: string;
  clause: string;
  citationId: string;
  result: 'pass' | 'fail' | 'unknown';
  remedy?: string;
  questionPrompt?: string;
}

export interface LicenceCheckResult {
  cmlNumber: string;
  isNumber: string;
  brand: string;
  productName: string;
  manufacturer: string;
  factoryAddress: string;
  validFrom: string;
  validUntil: string;
  status: 'Operative' | 'Expired' | 'Suspended';
  isGenuine: boolean;
  isBrandInScope: boolean;
  stopMarking: boolean;
  recallAlerts: boolean;
  misuseSuspected?: boolean;
}

export interface HuidCheckResult {
  huid: string;
  purity: string;
  articleType: string;
  hallmarkingCentre: string;
  centreCode: string;
  dateOfHallmarking: string;
  weightGrams: string;
  status: 'Verified' | 'Pending';
}

export interface AlertNotification {
  id: string;
  title: string;
  type: 'draft' | 'revised' | 'qco';
  typeLabel: string;
  standard: string;
  date: string;
  impactSummary: string;
  fullNote: string;
  urgency: 'high' | 'medium' | 'info';
}

export interface OfficerFlaggedItem {
  id: string;
  query: string;
  generatedAnswer: string;
  reasonFlagged: string;
  confidenceScore: number;
  userType: string;
  timestamp: string;
  status: 'Pending' | 'Approved' | 'Corrected';
}

export interface MisuseReportItem {
  id: string;
  location: string;
  product: string;
  reportedBrand: string;
  quotedCML: string;
  reporterRole: string;
  date: string;
  status: 'Under Investigation' | 'Notice Issued' | 'Closed';
}
