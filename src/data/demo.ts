/**
 * ============================================================================
 * MANAK SAATHI DEMO DATA REPOSITORY
 * ============================================================================
 * SIH 2026 Problem Statement 26107: AI Assistant for Indian Standards & BIS
 * Team_B Prototype
 * 
 * IMPORTANT:
 * All sample standards, clauses, tests, labs, fees, licences, HUIDs, and
 * analytics figures are stored centrally in this file. In production, these
 * values would be connected to official BIS portals (Manak Online, BIS Care,
 * LIMS, e-Gazette) under an institutional integration agreement.
 * ============================================================================
 */

import {
  Citation,
  RoadmapStepData,
  GapRow,
  LicenceCheckResult,
  HuidCheckResult,
  AlertNotification,
  OfficerFlaggedItem,
  MisuseReportItem,
  Language,
} from '../types';

export const SAMPLE_DATA_NOTICE = 'Sample data for demonstration';

// ==========================================
// 1. CITATIONS & INDIAN STANDARDS EVIDENCE
// ==========================================
export const CITATIONS: Record<string, Citation> = {
  'cit-is-17526-cl-5-1': {
    id: 'cit-is-17526-cl-5-1',
    isNumber: 'IS XXXX : 20XX (sample)',
    standardTitle: 'Stainless Steel Vacuum Flasks and Insulated Bottles — Specification',
    clause: 'Clause 5.1',
    amendment: 'Amendment 1 (sample)',
    year: '2023',
    clauseTitle: 'Material Composition & Food Contact Safety',
    highlightedText:
      'The body, liner, and all components coming into direct contact with potable water or beverages shall be manufactured from austenitic stainless steel conforming to Grade 304 (04Cr18Ni10) or Grade 316 of IS 6911. The use of scrap steel or non-conforming scrap blends is strictly prohibited.',
    textSnippet:
      'Austenitic grade 304/316 or food-grade compliant stainless steel conforming to IS 6911 is required for internal contact liners.',
    contextParagraphs: [
      '5.1 General Requirements — All materials utilized in fabrication of insulated water vessels must withstand continuous exposure to potable water without leaching harmful heavy metals.',
      'The body, liner, and all components coming into direct contact with potable water or beverages shall be manufactured from austenitic stainless steel conforming to Grade 304 (04Cr18Ni10) or Grade 316 of IS 6911. The use of scrap steel or non-conforming scrap blends is strictly prohibited.',
      'Non-metallic components including silicone gaskets, stoppers, and seals shall conform to IS 9845 for overall migration limits not exceeding 10 mg/dm².',
    ],
  },
  'cit-is-17526-cl-5-2': {
    id: 'cit-is-17526-cl-5-2',
    isNumber: 'IS XXXX : 20XX (sample)',
    standardTitle: 'Stainless Steel Vacuum Flasks and Insulated Bottles — Specification',
    clause: 'Clause 5.2',
    amendment: 'Amendment 1 (sample)',
    year: '2023',
    clauseTitle: 'Minimum Wall Thickness & Structural Rigidity',
    highlightedText:
      'The nominal wall thickness of the inner liner shall not be less than 0.50 mm (tolerance -0.03 mm) at any point, and the outer shell nominal thickness shall be not less than 0.45 mm to ensure sufficient drop impact resistance.',
    textSnippet:
      'Inner liner minimum wall thickness must be 0.50 mm with drop impact structural integrity.',
    contextParagraphs: [
      '5.2 Construction & Physical Dimensions — Insulated containers must exhibit uniform wall cross-sections to maintain structural stability under vacuum stress.',
      'The nominal wall thickness of the inner liner shall not be less than 0.50 mm (tolerance -0.03 mm) at any point, and the outer shell nominal thickness shall be not less than 0.45 mm to ensure sufficient drop impact resistance.',
      'Verification of wall thickness shall be carried out using ultrasonic thickness gauging or calibrated micrometer after sectioning sample vessels.',
    ],
  },
  'cit-is-17526-cl-6-3': {
    id: 'cit-is-17526-cl-6-3',
    isNumber: 'IS XXXX : 20XX (sample)',
    standardTitle: 'Stainless Steel Vacuum Flasks and Insulated Bottles — Specification',
    clause: 'Clause 6.3',
    amendment: 'Amendment 2 (sample)',
    year: '2023',
    clauseTitle: 'Thermal Insulation Retention Test',
    highlightedText:
      'When tested in accordance with Annex B, filled with boiling water at (98 ± 1)°C and kept at room temperature (27 ± 2)°C, the water temperature shall not fall below 62°C after a storage duration of 6 hours for bottles exceeding 500 ml capacity.',
    textSnippet:
      'Thermal retention test: water at 98°C must stay above 62°C after 6 hours at 27°C ambient.',
    contextParagraphs: [
      '6.3 Thermal Performance — Containers claiming thermal insulation shall undergo rigorous temperature retention validation.',
      'When tested in accordance with Annex B, filled with boiling water at (98 ± 1)°C and kept at room temperature (27 ± 2)°C, the water temperature shall not fall below 62°C after a storage duration of 6 hours for bottles exceeding 500 ml capacity.',
      'For cold insulation verification, the container filled with iced water at (4 ± 1)°C shall not exceed 10°C after 6 hours under ambient test conditions.',
    ],
  },
  'cit-is-17526-cl-7-1': {
    id: 'cit-is-17526-cl-7-1',
    isNumber: 'IS XXXX : 20XX (sample)',
    standardTitle: 'Stainless Steel Vacuum Flasks and Insulated Bottles — Specification',
    clause: 'Clause 7.1',
    amendment: 'Amendment 1 (sample)',
    year: '2023',
    clauseTitle: 'Leakage and Hydraulic Seal Test',
    highlightedText:
      'The closed bottle shall show no leakage of liquid or drop in pressure when inverted and subjected to an internal air pressure of 100 kPa for a continuous period of 5 minutes.',
    textSnippet:
      'No leakage permitted under inverted liquid test or 100 kPa air pressure for 5 minutes.',
    contextParagraphs: [
      '7.1 Hydraulic & Inversion Integrity — Every production batch sample must demonstrate hermetic sealing at closure interfaces.',
      'The closed bottle shall show no leakage of liquid or drop in pressure when inverted and subjected to an internal air pressure of 100 kPa for a continuous period of 5 minutes.',
      'Failure of closure silicone gasket or thread stripping under standard torque shall constitute rejection of the sample batch.',
    ],
  },
  'cit-qco-steel-2023': {
    id: 'cit-qco-steel-2023',
    isNumber: 'S.O. XXXX(E) (sample)',
    standardTitle: 'DPIIT Quality Control Order (QCO) for Insulated Flasks and Containers',
    clause: 'Order Clause 3(1)',
    year: '2023',
    clauseTitle: 'Compulsory Certification Mandate',
    highlightedText:
      'Goods or articles specified in Column (1) of the Table shall conform to the corresponding Indian Standard IS XXXX:20XX and shall bear the Standard Mark under a licence from the Bureau of Indian Standards as per Scheme-I of Schedule-II of BIS (Conformity Assessment) Regulations, 2018. No person shall manufacture, import, distribute, sell, or store for sale any goods not bearing the Standard Mark.',
    textSnippet:
      'Compulsory certification mandated under Section 16 of BIS Act, 2016; effective date applies nationwide.',
    contextParagraphs: [
      'Ministry of Commerce & Industry / Department for Promotion of Industry and Internal Trade Gazette Notification.',
      'Goods or articles specified in Column (1) of the Table shall conform to the corresponding Indian Standard IS XXXX:20XX and shall bear the Standard Mark under a licence from the Bureau of Indian Standards as per Scheme-I of Schedule-II of BIS (Conformity Assessment) Regulations, 2018. No person shall manufacture, import, distribute, sell, or store for sale any goods not bearing the Standard Mark.',
      'Micro and Small Enterprises registered under the MSME Act are granted phased compliance timeline extensions as per Schedule Notification 4(a).',
    ],
  },
  'cit-bis-scheme-1': {
    id: 'cit-bis-scheme-1',
    isNumber: 'BIS Reg. 2018 (sample)',
    standardTitle: 'BIS (Conformity Assessment) Regulations — Scheme I Product Certification',
    clause: 'Regulation 4 · Schedule II',
    year: '2018',
    clauseTitle: 'Simplified Procedure for Domestic Manufacturers',
    highlightedText:
      'Under the Simplified Procedure (Option 2), an applicant who submits an application accompanied by complete independent test reports from a BIS-recognized laboratory and a self-certified Scheme of Inspection and Testing (SIT) may be granted a licence within 30 days following an initial verification visit.',
    textSnippet:
      'Simplified procedure provides licence grant within ~30 days with accredited test reports.',
    contextParagraphs: [
      'Schedule II Scheme-I — Grant of Licence Procedure for Domestic Manufacturers.',
      'Under the Simplified Procedure (Option 2), an applicant who submits an application accompanied by complete independent test reports from a BIS-recognized laboratory and a self-certified Scheme of Inspection and Testing (SIT) may be granted a licence within 30 days following an initial verification visit.',
      'Production samples drawn during the factory audit must match the test report baseline within permissible tolerances.',
    ],
  },
  'cit-is-17526-cl-8-2': {
    id: 'cit-is-17526-cl-8-2',
    isNumber: 'IS XXXX : 20XX (sample)',
    standardTitle: 'Stainless Steel Vacuum Flasks and Insulated Bottles — Specification',
    clause: 'Clause 8.2',
    amendment: 'Amendment 1 (sample)',
    year: '2023',
    clauseTitle: 'Mandatory Marking & Label Details',
    highlightedText:
      'Each bottle shall be legibly and indelibly marked with: (a) Manufacturer name or registered trade-mark, (b) Nominal capacity in millilitres or litres, (c) Grade of stainless steel used for inner liner, (d) Batch number and year of manufacture, and (e) The Standard Mark with Licence Number CM/L-XXXXXXXXXX.',
    textSnippet:
      'Marking requirement: Brand, Nominal capacity, Steel grade, Batch/year, and Standard Mark with CM/L number.',
    contextParagraphs: [
      '8.2 Markings and Packaging requirements.',
      'Each bottle shall be legibly and indelibly marked with: (a) Manufacturer name or registered trade-mark, (b) Nominal capacity in millilitres or litres, (c) Grade of stainless steel used for inner liner, (d) Batch number and year of manufacture, and (e) The Standard Mark with Licence Number CM/L-XXXXXXXXXX.',
      'Marking shall be laser-etched, embossed, or stamped permanently on the base or body.',
    ],
  },
};

// ==========================================
// 2. COMPLIANCE ROADMAP (8 STEPS)
// ==========================================
export const DEFAULT_ROADMAP: RoadmapStepData[] = [
  {
    id: 1,
    title: '1. Applicable Standards',
    subtitle: 'Primary product standard and referenced material specifications',
    status: 'mandatory',
    badge: 'Standard Identified',
    badgeType: 'blue',
    citationId: 'cit-is-17526-cl-5-1',
    summary:
      'Your product falls under IS XXXX : 20XX (sample) for Insulated Flasks and Bottles, with stainless steel grade conforming to IS 6911 (sample). Non-metallic parts must comply with IS 9845.',
    details: {
      standards: [
        {
          code: 'IS XXXX : 20XX (sample)',
          title: 'Stainless Steel Vacuum Flasks and Insulated Bottles — Specification',
          type: 'Primary Product Standard',
        },
        {
          code: 'IS 6911 : 2017 (sample)',
          title: 'Stainless steel plate, sheet and strip — Specification',
          type: 'Material Standard (Grade 304/316)',
        },
        {
          code: 'IS 9845 : 1998 (sample)',
          title: 'Determination of overall migration of constituents of plastics',
          type: 'Food Contact Seal Standard',
        },
      ],
    },
  },
  {
    id: 2,
    title: '2. Mandatory or Voluntary Status',
    subtitle: 'Quality Control Order (QCO) gazette enforcement',
    status: 'mandatory',
    badge: 'Compulsory under QCO (sample)',
    badgeType: 'amber',
    citationId: 'cit-qco-steel-2023',
    summary:
      'Compulsory certification is strictly mandated under the DPIIT Quality Control Order. Manufacturing, importing, or selling without the Standard Mark is prohibited under Section 16 of the BIS Act, 2016.',
    details: {
      qcoDetails: {
        orderName: 'Insulated Containers and Vacuum Flasks (Quality Control) Order, 2023 (sample)',
        effectiveDate: 'Enforced nationwide (Grace periods for micro-enterprises expired)',
        gazetteNo: 'S.O. XXXX(E) dated 14 July 2023 (sample)',
      },
    },
  },
  {
    id: 3,
    title: '3. Certification Scheme',
    subtitle: 'Licence framework and mark allotment',
    status: 'mandatory',
    badge: 'Scheme-I (ISI Mark)',
    badgeType: 'blue',
    citationId: 'cit-bis-scheme-1',
    summary:
      'Covered under Scheme-I (Product Certification Scheme) of Schedule II of the BIS Conformity Assessment Regulations, 2018. Grants the right to use the Standard Mark with a unique CM/L licence number.',
    details: {
      schemeDetails: {
        name: 'Scheme-I: Domestic Product Certification Scheme',
        markType: 'Generic Standard Certification Mark with CM/L-0000000 (sample)',
        description:
          'Factory audit + independent third-party laboratory verification + Scheme of Inspection & Testing (SIT) adoption.',
      },
    },
  },
  {
    id: 4,
    title: '4. Simplified Procedure Eligibility',
    subtitle: 'Fast-track licensing timeline (~30 days)',
    status: 'completed',
    badge: 'Eligible for Fast-Track',
    badgeType: 'green',
    citationId: 'cit-bis-scheme-1',
    summary:
      'Eligible for Simplified Procedure (Option 2) because recognized third-party labs exist for testing prior to application. You can obtain a licence within approximately 30 days of submission.',
    details: {
      procedureDetails: {
        simplifiedEligible: true,
        reason:
          'Manufacturer can test samples in a recognized BIS/LIMS laboratory in advance and upload report with the Manak Online application.',
        turnaround: 'Estimated 28 to 35 business days from complete submission.',
      },
    },
  },
  {
    id: 5,
    title: '5. Required Laboratory Tests',
    subtitle: 'Scheme of Inspection and Testing (SIT) battery',
    status: 'mandatory',
    badge: '6 Core Tests Mandated',
    badgeType: 'blue',
    citationId: 'cit-is-17526-cl-6-3',
    summary:
      'Six mandatory tests must be satisfied: Chemical composition, Wall thickness uniformity, Thermal retention, Hydraulic seal leakage, Drop impact shock, and Handle / strap detachment force.',
    details: {
      tests: [
        {
          testName: 'Chemical Analysis of Liner (IS 6911)',
          clauseRef: 'Clause 5.1 (sample)',
          sampleSize: '2 cut coupons',
          duration: '3 days',
        },
        {
          testName: 'Nominal Wall Thickness Measurement',
          clauseRef: 'Clause 5.2 (sample)',
          sampleSize: '3 sample vessels',
          duration: '1 day',
        },
        {
          testName: 'Thermal Insulation Retention (6 hr)',
          clauseRef: 'Clause 6.3 (sample)',
          sampleSize: '5 vessels',
          duration: '2 days',
        },
        {
          testName: 'Leakage & Hydraulic Pressure (100 kPa)',
          clauseRef: 'Clause 7.1 (sample)',
          sampleSize: '5 vessels',
          duration: '1 day',
        },
        {
          testName: 'Drop Impact Resistance (1.2m onto concrete)',
          clauseRef: 'Clause 7.4 (sample)',
          sampleSize: '4 vessels',
          duration: '1 day',
        },
        {
          testName: 'Overall Migration of Plastic Seals (IS 9845)',
          clauseRef: 'Clause 5.3 (sample)',
          sampleSize: '10 gasket sets',
          duration: '5 days',
        },
      ],
    },
  },
  {
    id: 6,
    title: '6. Laboratories Near You',
    subtitle: 'BIS-recognized and NABL accredited test facilities',
    status: 'info',
    badge: '3 Facilities Available',
    badgeType: 'blue',
    citationId: 'cit-is-17526-cl-6-3',
    summary:
      'Three verified test facilities currently have active testing scope for IS XXXX : 20XX (sample) with live slots on the LIMS portal.',
    details: {
      labs: [
        {
          name: 'Central Testing Laboratory (CTL), BIS Regional (sample)',
          city: 'Sahibabad / Delhi NCR',
          distance: '28 km away',
          cost: '₹14,500 (sample)',
          accredited: true,
        },
        {
          name: 'National Test House (NTH Northern Region) (sample)',
          city: 'Ghaziabad, UP',
          distance: '42 km away',
          cost: '₹12,800 (sample)',
          accredited: true,
        },
        {
          name: 'Parihar Analytical Labs (NABL Accredited) (sample)',
          city: 'Okhla Phase-II, New Delhi',
          distance: '19 km away',
          cost: '₹16,200 (sample)',
          accredited: true,
        },
      ],
    },
  },
  {
    id: 7,
    title: '7. Estimated Costs & Government Fees',
    subtitle: 'Breakdown of statutory application, marking and testing costs',
    status: 'info',
    badge: 'Indicative ₹58,000 Total',
    badgeType: 'blue',
    citationId: 'cit-bis-scheme-1',
    summary:
      'Statutory application fee, minimum annual marking fee, testing charges, and inspection audit costs. Subsidies apply for Udyam-registered micro/small enterprises.',
    details: {
      costs: [
        {
          head: 'Application Fee (Statutory)',
          amount: '₹1,000 (sample)',
          note: 'Non-refundable portal submission fee',
        },
        {
          head: 'Preliminary Inspection / Audit Charges',
          amount: '₹7,000 (sample)',
          note: 'One officer-day inspection charge',
        },
        {
          head: 'Independent Laboratory Testing Charges',
          amount: '₹14,500 (sample)',
          note: 'Full type test battery at recognized lab',
        },
        {
          head: 'Annual Minimum Marking Fee (Year 1)',
          amount: '₹35,000 (sample)',
          note: 'Adjustable against unit production declaration (50% concession for MSME women entrepreneurs)',
        },
        {
          head: 'Estimated Total Outlay',
          amount: '₹57,500 (sample)',
          note: 'Indicative total for domestic manufacturing unit',
        },
      ],
    },
  },
  {
    id: 8,
    title: '8. Steps & Application Timeline',
    subtitle: 'End-to-end milestone tracker for licence grant',
    status: 'recommended',
    badge: 'Estimated 30–45 Days',
    badgeType: 'amber',
    citationId: 'cit-bis-scheme-1',
    summary:
      'Prepare plant machinery, establish in-house test bench, draw factory sample, test at recognized lab, submit Manak Online file, and receive factory audit.',
    details: {
      timeline: [
        {
          stepNumber: 1,
          action: 'Establish in-house testing facilities (calibrated micrometer, hydraulic pressure rig, thermometer)',
          duration: 'Days 1–10',
        },
        {
          stepNumber: 2,
          action: 'Procure certified Grade 304/316 raw material with manufacturer test certificates',
          duration: 'Days 11–15',
        },
        {
          stepNumber: 3,
          action: 'Send pilot production samples to BIS-recognized lab for complete preliminary test report',
          duration: 'Days 16–28',
        },
        {
          stepNumber: 4,
          action: 'File digital application on Manak Online with test report & Scheme of Inspection and Testing (SIT)',
          duration: 'Day 29',
        },
        {
          stepNumber: 5,
          action: 'BIS Officer factory audit: verification of quality control log, calibration, and packing mark',
          duration: 'Days 35–40',
        },
        {
          stepNumber: 6,
          action: 'Grant of Licence and allocation of unique CM/L-0000000 number',
          duration: 'Day 42–45',
        },
      ],
    },
  },
];

// ==========================================
// 3. GAP ANALYSER SAMPLE DATA
// ==========================================
export const SAMPLE_GAP_ANALYSIS: GapRow[] = [
  {
    id: 'gap-1',
    parameter: 'Inner Liner Material Grade',
    yourValue: 'AISI 304 Stainless Steel (0.07% C, 18.2% Cr, 8.4% Ni)',
    requirement: 'Austenitic Stainless Steel Grade 304 or 316 of IS 6911',
    clause: 'IS XXXX, Cl. 5.1 (sample)',
    citationId: 'cit-is-17526-cl-5-1',
    result: 'pass',
    remedy: 'Meets material standard requirements. Keep mill test certificate on file.',
  },
  {
    id: 'gap-2',
    parameter: 'Inner Liner Wall Thickness',
    yourValue: '0.40 mm nominal (Measured 0.38 mm at shoulder transition)',
    requirement: 'Minimum 0.50 mm (tolerance -0.03 mm)',
    clause: 'IS XXXX, Cl. 5.2 (sample)',
    citationId: 'cit-is-17526-cl-5-2',
    result: 'fail',
    remedy:
      'CRITICAL FAIL: Liner will fail drop impact and hydraulic deformation. Increase deep-drawing blank thickness or calibrate tool dies to achieve at least 0.50 mm.',
  },
  {
    id: 'gap-3',
    parameter: 'Thermal Retention (6 Hours)',
    yourValue: '66.4°C after 6 hours (Initial 98.2°C, ambient 26.5°C)',
    requirement: 'Minimum 62.0°C after 6 hours for bottles > 500 ml',
    clause: 'IS XXXX, Cl. 6.3 (sample)',
    citationId: 'cit-is-17526-cl-6-3',
    result: 'pass',
    remedy: 'Thermal vacuum integrity passes required threshold with +4.4°C safety margin.',
  },
  {
    id: 'gap-4',
    parameter: 'Hydraulic Seal & Leakage at 100 kPa',
    yourValue: 'Zero droplet leakage, pressure held for 5 minutes inverted',
    requirement: 'No leakage or pressure decay when tested at 100 kPa for 5 min',
    clause: 'IS XXXX, Cl. 7.1 (sample)',
    citationId: 'cit-is-17526-cl-7-1',
    result: 'pass',
    remedy: 'Gasket seal and screw thread profile satisfy tightness criteria.',
  },
  {
    id: 'gap-5',
    parameter: 'Indelible Laser Marking on Base',
    yourValue: 'Not stated in document (Drawing does not indicate base etching)',
    requirement: 'Brand, Capacity, Steel Grade, Batch Number & Standard Mark',
    clause: 'IS XXXX, Cl. 8.2 (sample)',
    citationId: 'cit-is-17526-cl-8-2',
    result: 'unknown',
    remedy: 'Drawing does not specify base markings. Add laser marking drawing before submitting to BIS.',
    questionPrompt: 'Do your current production drawings specify laser etching of steel grade and batch ID on the base?',
  },
];

// ==========================================
// 4. LICENCE & MARK CHECK DATA
// ==========================================
export const GENUINE_LICENCE_SAMPLE: LicenceCheckResult = {
  cmlNumber: 'CM/L-0000000 (sample)',
  isNumber: 'IS XXXX : 20XX (sample)',
  brand: 'HIMALAYAN SNO-PEAK (sample)',
  productName: 'Stainless Steel Insulated Water Bottles',
  manufacturer: 'Apex Metalware Manufacturing Pvt Ltd (sample)',
  factoryAddress: 'Plot 42-B, Industrial Focal Point, Phase-III, Mohali, Punjab 160055',
  validFrom: '15-Jan-2022',
  validUntil: '14-Jan-2027',
  status: 'Operative',
  isGenuine: true,
  isBrandInScope: true,
  stopMarking: false,
  recallAlerts: false,
  misuseSuspected: false,
};

export const MISUSED_LICENCE_SAMPLE: LicenceCheckResult = {
  cmlNumber: 'CM/L-0000000 (sample)',
  isNumber: 'IS XXXX : 20XX (sample)',
  brand: 'SHINE-PLUS HYDRATION (sample)',
  productName: 'Stainless Steel Insulated Water Bottles',
  manufacturer: 'Apex Metalware Manufacturing Pvt Ltd (sample)',
  factoryAddress: 'Plot 42-B, Industrial Focal Point, Phase-III, Mohali, Punjab 160055',
  validFrom: '15-Jan-2022',
  validUntil: '14-Jan-2027',
  status: 'Operative',
  isGenuine: true,
  isBrandInScope: false, // Brand NOT registered under this licence
  stopMarking: false,
  recallAlerts: false,
  misuseSuspected: true,
};

export const HUID_GOLD_SAMPLE: HuidCheckResult = {
  huid: 'SAMPLE-HUID-9K2M4P',
  purity: '22K916 (91.6% Pure Gold)',
  articleType: 'Gold Bangle / Kada',
  hallmarkingCentre: 'Vardhaman Assaying & Hallmarking Centre (AHC-0482, sample)',
  centreCode: 'AHC-DEL-0482 (sample)',
  dateOfHallmarking: '18-Mar-2026',
  weightGrams: '14.280 g',
  status: 'Verified',
};

// ==========================================
// 5. ALERTS & TIMELINE DATA
// ==========================================
export const SAMPLE_ALERTS: AlertNotification[] = [
  {
    id: 'alt-1',
    title: 'Quality Control Order Enforcement Date Fixed',
    type: 'qco',
    typeLabel: 'QCO Becomes Mandatory',
    standard: 'IS XXXX : 20XX (sample)',
    date: '15-Apr-2026',
    impactSummary: 'All manufacturers and importers must hold an operative licence with Standard Mark.',
    fullNote:
      'DPIIT notification confirms that from 15th April 2026, no stock without the Standard Mark may be cleared at customs or sold in retail. Ensure your licence audit is concluded.',
    urgency: 'high',
  },
  {
    id: 'alt-2',
    title: 'Draft Standard Open for Public Comments: Annex B Drop Test Revision',
    type: 'draft',
    typeLabel: 'Draft Standard Open for Comment',
    standard: 'IS XXXX : Draft Revision 2 (sample)',
    date: '28-Mar-2026',
    impactSummary: 'Proposed amendment introduces angled drop impact onto steel anvil.',
    fullNote:
      'Technical Committee CED 54 invites industry comments on revising Clause 7.4. You can submit suggestions via the BIS Standards Club portal before 30 April 2026.',
    urgency: 'medium',
  },
  {
    id: 'alt-3',
    title: 'Standard Revised: Amendment 3 Issued for Thermal Insulation Limits',
    type: 'revised',
    typeLabel: 'Standard Revised',
    standard: 'IS XXXX : Amd 3 (sample)',
    date: '10-Feb-2026',
    impactSummary: 'Allows vacuum copper-plating or multi-layer getter foil as alternate lining insulation.',
    fullNote:
      'Amendment 3 officially published. Manufacturers using modern reflective coatings may claim compliant test performance under modified Annex C.',
    urgency: 'info',
  },
];

export const SAVED_OFFLINE_ITEMS = [
  {
    id: 'offline-1',
    title: 'IS XXXX : 20XX (sample) — Stainless Steel Insulated Flasks',
    type: 'Standard Specification',
    savedDate: '24-Mar-2026',
    size: '1.4 MB (offline cache)',
  },
  {
    id: 'offline-2',
    title: 'Compliance Roadmap: Steel Bottle Domestic Manufacturing',
    type: 'Roadmap & Checklist',
    savedDate: '28-Mar-2026',
    size: '420 KB (offline cache)',
  },
  {
    id: 'offline-3',
    title: 'IS 6911 : 2017 (sample) — Stainless Steel Sheet Tolerances',
    type: 'Material Reference',
    savedDate: '15-Feb-2026',
    size: '890 KB (offline cache)',
  },
];

// ==========================================
// 6. OFFICIALS PORTAL ANALYTICS & REVIEWS
// ==========================================
export const OFFICIALS_KPI = {
  questionsAnsweredThisWeek: '18,492',
  questionsAnsweredChange: '+14.6% vs last week',
  declinedNoSource: '142',
  declinedRate: '0.76% (Fail-closed adherence)',
  flaggedForReview: '38',
  flaggedRate: 'Active review queue',
  markChecksTotal: '49,810',
  markChecksChange: '+23.1% consumer mobile checks',
  suspectedMisuseReports: '19',
  suspectedMisuseActioned: '14 notices dispatched',
};

export const TOP_QUERIED_STANDARDS = [
  { name: 'IS XXXX (Flasks, sample)', queries: 4210 },
  { name: 'IS 2347 (Pressure Cookers, sample)', queries: 3890 },
  { name: 'IS 14151 (Safety Helmets, sample)', queries: 3120 },
  { name: 'IS 302-2 (Domestic Appliances, sample)', queries: 2840 },
  { name: 'IS 1293 (Plugs & Sockets, sample)', queries: 2430 },
  { name: 'IS 15652 (Electrical Mats, sample)', queries: 1980 },
  { name: 'IS 15885 (LED Drivers, sample)', queries: 1750 },
  { name: 'IS 4984 (HDPE Pipes, sample)', queries: 1540 },
  { name: 'IS 12269 (53-Grade Cement, sample)', queries: 1390 },
  { name: 'IS 1786 (TMT Steel Bars, sample)', queries: 1220 },
];

export const LANGUAGE_DISTRIBUTION = [
  { name: 'English', value: 48, color: '#1F497D' },
  { name: 'हिन्दी (Hindi)', value: 34, color: '#F5A623' },
  { name: 'मराठी (Marathi)', value: 8, color: '#2E9E5B' },
  { name: 'தமிழ் (Tamil)', value: 6, color: '#8884d8' },
  { name: 'বাংলা (Bengali)', value: 4, color: '#ff7300' },
];

export const QUERY_TREND_30_DAYS = [
  { day: 'Day 1', queries: 1120, checks: 2100 },
  { day: 'Day 5', queries: 1450, checks: 2600 },
  { day: 'Day 10', queries: 1890, checks: 3100 },
  { day: 'Day 15', queries: 2240, checks: 3800 },
  { day: 'Day 20', queries: 2650, checks: 4500 },
  { day: 'Day 25', queries: 3100, checks: 5200 },
  { day: 'Day 30', queries: 3650, checks: 6400 },
];

export const STATE_WISE_QUERIES = [
  { state: 'Maharashtra', count: 6840 },
  { state: 'Gujarat', count: 5920 },
  { state: 'Tamil Nadu', count: 4710 },
  { state: 'Uttar Pradesh', count: 4320 },
  { state: 'Karnataka', count: 3880 },
  { state: 'Delhi NCR', count: 3650 },
  { state: 'West Bengal', count: 2890 },
  { state: 'Punjab & Haryana', count: 2610 },
];

export const CONFUSING_STANDARDS = [
  {
    standard: 'IS XXXX : 20XX (sample)',
    title: 'Stainless Steel Insulated Flasks',
    topQuestion: 'Can grade 201 steel be used for non-food contact outer shell?',
    followUpRate: '41.2%',
    actionRecommendation: 'Issue FAQ circular clarifying outer vs inner liner grades.',
  },
  {
    standard: 'IS 2347 : 2017 (sample)',
    title: 'Domestic Pressure Cookers',
    topQuestion: 'What is the minimum burst pressure rating for composite safety valves?',
    followUpRate: '38.6%',
    actionRecommendation: 'Standardize diagrammatic test guideline for MSME manufacturers.',
  },
  {
    standard: 'IS 14151 : 2020 (sample)',
    title: 'Protective Helmets for Two Wheelers',
    topQuestion: 'Does visor scratch test apply to tinted daytime visors?',
    followUpRate: '33.9%',
    actionRecommendation: 'Clarify Annexure C test scope in technical bulletin.',
  },
  {
    standard: 'IS 15885 : 2012 (sample)',
    title: 'Safety of Lamp Controlgear (LED)',
    topQuestion: 'Are plug-in SMPS adapters exempt if certified under CRS scheme?',
    followUpRate: '29.5%',
    actionRecommendation: 'Update cross-reference table between Scheme I and CRS Scheme.',
  },
];

export const FLAGGED_OFFICER_ITEMS: OfficerFlaggedItem[] = [
  {
    id: 'flg-101',
    query: 'Can an MSME manufacturer self-test wall thickness using optical calipers?',
    generatedAnswer:
      'No. Clause 5.2 specifies calibrated micrometer or ultrasonic gauging with calibration traceable to NPL.',
    reasonFlagged: 'Confidence score borderline (0.78); ambiguous tool specification.',
    confidenceScore: 0.78,
    userType: 'MSME Manufacturer (Pune)',
    timestamp: 'Today, 10:14 AM',
    status: 'Pending',
  },
  {
    id: 'flg-102',
    query: 'Is marking fee exempt during trial production runs?',
    generatedAnswer:
      'Declined to answer definitively. Marking fee policies are managed by the respective Regional Branch Office.',
    reasonFlagged: 'Fail-closed triggered; requires verification with latest Financial circular.',
    confidenceScore: 0.62,
    userType: 'Start-up Incubatee (Bangalore)',
    timestamp: 'Yesterday, 04:30 PM',
    status: 'Pending',
  },
  {
    id: 'flg-103',
    query: 'What is the penalty under Section 29 for unauthorized use of Standard Mark?',
    generatedAnswer:
      'Imprisonment up to two years or fine not less than two lakh rupees, extending up to ten times the value of goods.',
    reasonFlagged: 'Direct statutory quote; verify penalty slab with BIS Act 2016 Section 29(1).',
    confidenceScore: 0.94,
    userType: 'Legal Consultant (Mumbai)',
    timestamp: '28-Mar-2026',
    status: 'Approved',
  },
];

export const SUSPECTED_MISUSE_REPORTS: MisuseReportItem[] = [
  {
    id: 'rep-401',
    location: 'Sadar Bazar, Delhi',
    product: 'Stainless Steel Insulated Bottle',
    reportedBrand: 'SHINE-PLUS HYDRATION (sample)',
    quotedCML: 'CM/L-0000000 (sample)',
    reporterRole: 'Consumer via Mobile Mark Check',
    date: '30-Mar-2026',
    status: 'Under Investigation',
  },
  {
    id: 'rep-402',
    location: 'Begum Bazaar, Hyderabad',
    product: 'Domestic Pressure Cooker',
    reportedBrand: 'SAFE-FLAME ROYAL (sample)',
    quotedCML: 'CM/L-8821034 (sample)',
    reporterRole: 'Retailer verifying supplier invoice',
    date: '29-Mar-2026',
    status: 'Notice Issued',
  },
  {
    id: 'rep-403',
    location: 'Lamington Road, Mumbai',
    product: 'Power Plug Adapter 16A',
    reportedBrand: 'VOLT-MAX INDUSTRIAL (sample)',
    quotedCML: 'CM/L-7719201 (sample)',
    reporterRole: 'BIS Standards Club Student Member',
    date: '27-Mar-2026',
    status: 'Closed',
  },
];

// ==========================================
// 7. MULTILINGUAL UI DICTIONARY (i18n)
// ==========================================
export const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    appName: 'Manak Saathi',
    tagline: 'AI Assistant for Indian Standards & BIS Services',
    navHome: 'Home',
    navAssistant: 'Assistant',
    navRoadmap: 'Roadmap',
    navGapAnalyser: 'Gap Analyser',
    navMarkCheck: 'Mark Check',
    navAlerts: 'Alerts',
    navForWebsites: 'For BIS Websites',
    navOfficials: 'Officials Portal',
    navHowItWorks: 'How it Works',
    offlineMode: 'Offline mode',
    offlineBannerText: 'Offline: showing saved standards and roadmaps',
    tryAssistant: 'Try the Assistant',
    seeHowItWorks: 'See how it works',
    trustCheckBefore: 'Checks before it answers',
    trustCitesBefore: 'Cites before it speaks',
    trustZeroChange: 'Zero change to BIS systems',
    verifiedLine: '✓ Verified: every sentence matched to its cited clause',
    openRoadmap: 'Open Full Roadmap',
    downloadChecklist: 'Download Checklist (PDF)',
    saveOffline: 'Save for Offline',
    evidenceTitle: 'Official Standard Clause Evidence',
    openOfficialSource: 'Open official source',
    officialSourceTooltip: 'Links to BIS source in production under integration agreement',
    sampleNotice: 'Sample data for demonstration',
  },
  hi: {
    appName: 'मानक साथी',
    tagline: 'भारतीय मानक और बीआईएस सेवाओं के लिए एआई सहायक',
    navHome: 'होम',
    navAssistant: 'सहायक (चैट)',
    navRoadmap: 'रोडमैप',
    navGapAnalyser: 'गैप विश्लेषक',
    navMarkCheck: 'मार्क जांच',
    navAlerts: 'अलर्ट्स',
    navForWebsites: 'बीआईएस वेबसाइट्स हेतु',
    navOfficials: 'अधिकारी पोर्टल',
    navHowItWorks: 'यह कैसे काम करता है',
    offlineMode: 'ऑफलाइन मोड',
    offlineBannerText: 'ऑफलाइन: सहेजे गए मानक और अनुपालन रोडमैप प्रदर्शित हो रहे हैं',
    tryAssistant: 'सहायक आज़माएं',
    seeHowItWorks: 'कार्यप्रणाली देखें',
    trustCheckBefore: 'उत्तर देने से पहले जांचता है',
    trustCitesBefore: 'बोलने से पहले क्लॉज़ उद्धृत करता है',
    trustZeroChange: 'बीआईएस प्रणालियों में बिना किसी बदलाव के',
    verifiedLine: '✓ सत्यापित: प्रत्येक वाक्य अपने उद्धृत क्लॉज़ से प्रमाणित है',
    openRoadmap: 'पूर्ण रोडमैप खोलें',
    downloadChecklist: 'चेकलिस्ट डाउनलोड करें (PDF)',
    saveOffline: 'ऑफलाइन के लिए सहेजें',
    evidenceTitle: 'आधिकारिक मानक क्लॉज़ प्रमाण',
    openOfficialSource: 'आधिकारिक स्रोत खोलें',
    officialSourceTooltip: 'उत्पादन में एकीकरण समझौते के तहत बीआईएस स्रोत से लिंक होगा',
    sampleNotice: 'प्रदर्शन हेतु नमूना डेटा',
  },
  mr: {
    appName: 'मानक साथी',
    tagline: 'भारतीय मानके आणि बीआयएस सेवांसाठी एआय सहाय्यक',
    navHome: 'मुख्यपृष्ठ',
    navAssistant: 'सहाय्यक',
    navRoadmap: 'मार्गदर्शक (रोडमॅप)',
    navGapAnalyser: 'तूट विश्लेषक',
    navMarkCheck: 'मार्क पडताळणी',
    navAlerts: 'सूचना (अलर्ट्स)',
    navForWebsites: 'वेबसाइटसाठी विगेट',
    navOfficials: 'अधिकारी दालन',
    navHowItWorks: 'कसे कार्य करते',
    offlineMode: 'ऑफलाइन मोड',
    offlineBannerText: 'ऑफलाइन: साठवलेली मानके आणि मार्गदर्शक दर्शविले आहेत',
    tryAssistant: 'सहाय्यक वापरा',
    seeHowItWorks: 'कसे चालते ते पाहा',
    trustCheckBefore: 'उत्तर देण्यापूर्वी पडताळणी',
    trustCitesBefore: 'बोलण्यापूर्वी कलमाचा संदर्भ',
    trustZeroChange: 'बीआयएस यंत्रणेत कोणताही बदल नाही',
    verifiedLine: '✓ प्रमाणित: प्रत्येक वाक्य नमूद केलेल्या नियमाशी जुळते',
    openRoadmap: 'संपूर्ण रोडमॅप उघडा',
    downloadChecklist: 'चेकलिस्ट डाउनलोड करा',
    saveOffline: 'ऑफलाइनसाठी जतन करा',
    evidenceTitle: 'अधिकृत मानक कलम पुरावा',
    openOfficialSource: 'अधिकृत स्रोत उघडा',
    officialSourceTooltip: 'उत्पादनामध्ये बीआयएस स्रोताशी थेट जोडले जाईल',
    sampleNotice: 'प्रात्यक्षिकासाठी नमुना माहिती',
  },
  ta: {
    appName: 'மானக் சாதி',
    tagline: 'இந்திய தரநிலைகள் மற்றும் பிஐஎஸ் சேவைகளுக்கான ஏஐ உதவியாளர்',
    navHome: 'முகப்பு',
    navAssistant: 'உதவியாளர்',
    navRoadmap: 'செயல்திட்டம்',
    navGapAnalyser: 'இடைவெளி பகுப்பாய்வி',
    navMarkCheck: 'சான்றிதழ் சரிபார்ப்பு',
    navAlerts: 'அறிவிப்புகள்',
    navForWebsites: 'வலைத்தளங்களுக்கு',
    navOfficials: 'அதிகாரிகள் தளம்',
    navHowItWorks: 'செயல்படும் விதம்',
    offlineMode: 'ஆஃப்லைன் முறை',
    offlineBannerText: 'ஆஃப்லைன்: சேமிக்கப்பட்ட தரநிலைகள் மற்றும் திட்டங்கள் காண்பிக்கப்படுகின்றன',
    tryAssistant: 'உதவியாளரை சோதிக்க',
    seeHowItWorks: 'விளக்கத்தை காண்க',
    trustCheckBefore: 'பதிலளிக்கும் முன் சரிபார்க்கிறது',
    trustCitesBefore: 'கூறும் முன் விதியை சுட்டுகிறது',
    trustZeroChange: 'பிஐஎஸ் அமைப்புகளில் மாற்றம் தேவையில்லை',
    verifiedLine: '✓ சரிபார்க்கப்பட்டது: ஒவ்வொரு வாக்கியமும் ஆதார விதியுடன் பொருந்துகிறது',
    openRoadmap: 'முழு செயல்திட்டம் திற',
    downloadChecklist: 'சரிபார்ப்புப் பட்டியலை பதிவிறக்கு',
    saveOffline: 'ஆஃப்லைனில் சேமி',
    evidenceTitle: 'அதிகாரப்பூர்வ தரநிலை விதி ஆதாரம்',
    openOfficialSource: 'அதிகாரப்பூர்வ மூலத்தை திறக்கவும்',
    officialSourceTooltip: 'இணைப்பு ஒப்பந்தத்தின் கீழ் பிஐஎஸ் மூலத்துடன் இணைக்கப்படும்',
    sampleNotice: 'விளக்கக்காட்சிக்கான மாதிரி தகவல்',
  },
  bn: {
    appName: 'মানক সাথী',
    tagline: 'ভারতীয় মানক এবং বিআইএস পরিষেবার জন্য এআই সহায়ক',
    navHome: 'হোম',
    navAssistant: 'সহায়ক (চ্যাট)',
    navRoadmap: 'রোডম্যাপ',
    navGapAnalyser: 'গ্যাপ বিশ্লেষক',
    navMarkCheck: 'মার্ক যাচাই',
    navAlerts: 'সতর্কতা',
    navForWebsites: 'ওয়েবসাইটের জন্য',
    navOfficials: 'আধিকারিক পোর্টাল',
    navHowItWorks: 'কীভাবে কাজ করে',
    offlineMode: 'অফলাইন মোড',
    offlineBannerText: 'অফলাইন: সংরক্ষিত মানক এবং রোডম্যাপ প্রদর্শিত হচ্ছে',
    tryAssistant: 'সহায়ক ব্যবহার করুন',
    seeHowItWorks: 'কীভাবে কাজ করে দেখুন',
    trustCheckBefore: 'উত্তর দেওয়ার আগে যাচাই করে',
    trustCitesBefore: 'বলার আগে ধারা উদ্ধৃত করে',
    trustZeroChange: 'বিআইএস সিস্টেমে কোনও পরিবর্তন নেই',
    verifiedLine: '✓ যাচাইকৃত: প্রতিটি বাক্য উদ্ধৃত ধারার সাথে সঙ্গতিপূর্ণ',
    openRoadmap: 'সম্পূর্ণ রোডম্যাপ খুলুন',
    downloadChecklist: 'চেকলিস্ট ডাউনলোড করুন',
    saveOffline: 'অফলাইনের জন্য সংরক্ষণ করুন',
    evidenceTitle: 'অফিসিয়াল স্ট্যান্ডার্ড ধারা প্রমাণ',
    openOfficialSource: 'অফিসিয়াল উৎস খুলুন',
    officialSourceTooltip: 'চুক্তির আওতায় অফিসিয়াল বিআইএস উৎসের সাথে যুক্ত হবে',
    sampleNotice: 'প্রদর্শনের জন্য নমুনা ডেটা',
  },
};
