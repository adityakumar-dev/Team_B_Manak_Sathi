import React, { useState } from 'react';
import {
  Lock,
  ShieldCheck,
  BarChart3,
  TrendingUp,
  AlertOctagon,
  Users,
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  LogOut,
  MapPin,
  FileCheck,
  AlertTriangle,
  FileText,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  OFFICIALS_KPI,
  TOP_QUERIED_STANDARDS,
  LANGUAGE_DISTRIBUTION,
  QUERY_TREND_30_DAYS,
  STATE_WISE_QUERIES,
  CONFUSING_STANDARDS,
  FLAGGED_OFFICER_ITEMS,
  SUSPECTED_MISUSE_REPORTS,
  SAMPLE_DATA_NOTICE,
} from '../../data/demo';
import { useToast } from '../common/Toast';
import { OfficerFlaggedItem } from '../../types';

export const OfficialsPortal: React.FC = () => {
  const { showToast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('officer.bis@gov.in');
  const [password, setPassword] = useState('••••••••••••');
  const [flaggedItems, setFlaggedItems] = useState<OfficerFlaggedItem[]>(FLAGGED_OFFICER_ITEMS);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticated(true);
    showToast('Authenticated as BIS Officer. Welcome to Command Analytics.', 'success');
  };

  const handleApprove = (id: string) => {
    setFlaggedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Approved' } : item))
    );
    showToast('Added to verified training data & fine-tuning cache.', 'success');
  };

  const handleCorrect = (id: string) => {
    setFlaggedItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: 'Corrected' } : item))
    );
    showToast('Correction dispatched to Technical Committee reviewer.', 'info');
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto my-12 px-4">
        <div className="bg-white rounded-2xl border border-[#C5CFDF] shadow-lg p-6 sm:p-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#1F497D] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold text-[#1E1E1E]">Officials Portal Login</h1>
            <p className="text-xs text-neutral-500 mt-1">
              Authorized access for Bureau of Indian Standards & Ministry Officers
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                Official Government Email ID
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="name@bis.gov.in"
                className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-[#C5CFDF] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1F497D]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-neutral-700 block mb-1">
                NIC / Gov Single Sign-On Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full text-xs px-3.5 py-2.5 bg-neutral-50 border border-[#C5CFDF] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#1F497D]"
              />
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900">
              <span className="font-bold">Prototype Demo Notice:</span> Any credentials grant instant access for SIH evaluation.
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1F497D] hover:bg-[#16365C] text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              Sign In to Officials Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F497D] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
            Officials Analytics Portal
          </span>
          <span className="text-xs text-neutral-500 font-mono">
            Logged in: officer.bis@gov.in (Headquarters, New Delhi)
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
            {SAMPLE_DATA_NOTICE}
          </span>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg flex items-center gap-1 text-xs"
            title="Log Out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Row (5 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* KPI 1 */}
        <div className="p-4 rounded-2xl bg-white border border-[#C5CFDF] shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs mb-1">
            <span className="font-semibold">Queries Answered</span>
            <Users className="w-4 h-4 text-[#1F497D]" />
          </div>
          <div className="text-2xl font-black text-[#1E1E1E]">
            {OFFICIALS_KPI.questionsAnsweredThisWeek}
          </div>
          <div className="text-[10px] text-[#2E9E5B] font-bold mt-1">
            {OFFICIALS_KPI.questionsAnsweredChange}
          </div>
        </div>

        {/* KPI 2 */}
        <div className="p-4 rounded-2xl bg-white border border-[#C5CFDF] shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs mb-1">
            <span className="font-semibold">Declined (No Source)</span>
            <AlertOctagon className="w-4 h-4 text-[#D64545]" />
          </div>
          <div className="text-2xl font-black text-[#1E1E1E]">
            {OFFICIALS_KPI.declinedNoSource}
          </div>
          <div className="text-[10px] text-neutral-500 font-medium mt-1">
            {OFFICIALS_KPI.declinedRate}
          </div>
        </div>

        {/* KPI 3 */}
        <div className="p-4 rounded-2xl bg-white border border-[#C5CFDF] shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs mb-1">
            <span className="font-semibold">Flagged for Review</span>
            <AlertTriangle className="w-4 h-4 text-[#F5A623]" />
          </div>
          <div className="text-2xl font-black text-[#1E1E1E]">
            {OFFICIALS_KPI.flaggedForReview}
          </div>
          <div className="text-[10px] text-[#b0730d] font-bold mt-1">
            {OFFICIALS_KPI.flaggedRate}
          </div>
        </div>

        {/* KPI 4 */}
        <div className="p-4 rounded-2xl bg-white border border-[#C5CFDF] shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs mb-1">
            <span className="font-semibold">Mark Checks (Total)</span>
            <CheckCircle2 className="w-4 h-4 text-[#2E9E5B]" />
          </div>
          <div className="text-2xl font-black text-[#1E1E1E]">
            {OFFICIALS_KPI.markChecksTotal}
          </div>
          <div className="text-[10px] text-[#2E9E5B] font-bold mt-1">
            {OFFICIALS_KPI.markChecksChange}
          </div>
        </div>

        {/* KPI 5 */}
        <div className="p-4 rounded-2xl bg-white border border-[#C5CFDF] shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-xs mb-1">
            <span className="font-semibold">Suspected Misuses</span>
            <AlertTriangle className="w-4 h-4 text-[#D64545]" />
          </div>
          <div className="text-2xl font-black text-[#D64545]">
            {OFFICIALS_KPI.suspectedMisuseReports}
          </div>
          <div className="text-[10px] text-neutral-500 font-medium mt-1">
            {OFFICIALS_KPI.suspectedMisuseActioned}
          </div>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart 1: 30-Day Query & Verification Trend (Line Chart) */}
        <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-[#1E1E1E]">
              30-Day Query & Mark Verification Velocity
            </h3>
            <span className="text-[11px] text-neutral-500 font-mono">Real-time telemetry</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={QUERY_TREND_30_DAYS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ECEFF4" />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="queries" stroke="#1F497D" strokeWidth={2.5} name="Assistant Queries" />
                <Line type="monotone" dataKey="checks" stroke="#F5A623" strokeWidth={2.5} name="Mark Checks" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Top 10 Queried Standards (Horizontal Bar Chart) */}
        <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-[#1E1E1E]">
              Top 10 Most Queried Indian Standards
            </h3>
            <span className="text-[11px] text-neutral-500">Industry volume</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={TOP_QUERIED_STANDARDS.slice(0, 6)} margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ECEFF4" />
                <XAxis type="number" tick={{ fontSize: 11 }} />
                <YAxis dataKey="name" type="category" width={110} tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar dataKey="queries" fill="#1F497D" radius={[0, 4, 4, 0]} name="Queries" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Language Distribution (Donut Chart) */}
        <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-[#1E1E1E]">
              Queries by Language (Bhashini Multi-lingual)
            </h3>
            <span className="text-[11px] text-neutral-500">% share</span>
          </div>
          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={LANGUAGE_DISTRIBUTION}
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                  label={({ name, percent }: { name?: string; percent?: number }) => `${name || ''} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                >
                  {LANGUAGE_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: State-Wise Activity Breakdown */}
        <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm text-[#1E1E1E]">
              State-Wise Inquiries (Industrial Hubs)
            </h3>
            <span className="text-[11px] text-neutral-500">Pan-India footprint</span>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={STATE_WISE_QUERIES}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ECEFF4" />
                <XAxis dataKey="state" tick={{ fontSize: 10 }} angle={-25} textAnchor="end" height={50} />
                <YAxis tick={{ fontSize: 11 }} />
                <Tooltip />
                <Bar dataKey="count" fill="#F5A623" radius={[4, 4, 0, 0]} name="Inquiries" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Confusing Standards Table */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-base text-[#1E1E1E]">
              Confusing Standards Intelligence
            </h3>
            <p className="text-xs text-neutral-500">
              Standards with the highest follow-up question rates — ideal candidates for Technical Committee clarification circulars.
            </p>
          </div>
          <span className="text-xs font-bold text-[#b0730d] bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300">
            TC Action Recommended
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F4F6FA] text-neutral-700 font-bold border-b border-[#C5CFDF]">
              <tr>
                <th className="p-3">Standard Code & Title</th>
                <th className="p-3">Most Frequent User Doubt</th>
                <th className="p-3 text-center">Follow-up Rate</th>
                <th className="p-3">Automated TC Action Suggestion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {CONFUSING_STANDARDS.map((cs, i) => (
                <tr key={i} className="hover:bg-neutral-50">
                  <td className="p-3">
                    <div className="font-mono font-bold text-[#1F497D]">{cs.standard}</div>
                    <div className="text-neutral-500 text-[11px]">{cs.title}</div>
                  </td>
                  <td className="p-3 font-medium text-neutral-800">{cs.topQuestion}</td>
                  <td className="p-3 text-center">
                    <span className="font-bold text-[#D64545] bg-rose-50 px-2 py-0.5 rounded">
                      {cs.followUpRate}
                    </span>
                  </td>
                  <td className="p-3 text-neutral-600">{cs.actionRecommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review Queue of Flagged Answers */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-base text-[#1E1E1E]">
              AI Review Queue (Fail-Closed & Low-Confidence Queries)
            </h3>
            <p className="text-xs text-neutral-500">
              Human-in-the-loop review queue for borderline responses or statutory citations.
            </p>
          </div>
          <span className="text-xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded">
            {flaggedItems.filter((i) => i.status === 'Pending').length} Pending Review
          </span>
        </div>

        <div className="space-y-3">
          {flaggedItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-[#C5CFDF] bg-[#F4F6FA] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs"
            >
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-neutral-900">&ldquo;{item.query}&rdquo;</span>
                  <span className="text-[10px] text-neutral-400 font-mono">({item.userType})</span>
                </div>
                <p className="text-neutral-700 italic">
                  Answer: {item.generatedAnswer}
                </p>
                <div className="text-[11px] text-amber-800 font-medium">
                  Flag reason: {item.reasonFlagged} (Score: {item.confidenceScore})
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {item.status === 'Pending' ? (
                  <>
                    <button
                      onClick={() => handleApprove(item.id)}
                      className="px-3 py-1.5 rounded-lg bg-[#2E9E5B] hover:bg-emerald-700 text-white font-bold transition-colors cursor-pointer shadow-2xs"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleCorrect(item.id)}
                      className="px-3 py-1.5 rounded-lg bg-white border border-[#C5CFDF] hover:bg-neutral-100 text-neutral-700 font-semibold transition-colors cursor-pointer"
                    >
                      Correct
                    </button>
                  </>
                ) : (
                  <span className="px-2.5 py-1 rounded-full font-bold text-[10px] uppercase bg-emerald-100 text-emerald-800 border border-emerald-300">
                    Status: {item.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fake-Mark & Misuse Reports List */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-200">
          <div>
            <h3 className="font-bold text-base text-[#1E1E1E]">
              Suspected Fake-Mark & Brand Misuse Intelligence Reports
            </h3>
            <p className="text-xs text-neutral-500">
              Crowdsourced consumer scans and retailer verification anomalies routed to enforcement branch.
            </p>
          </div>
          <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded">
            Enforcement Branch
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#F4F6FA] text-neutral-700 font-bold border-b border-[#C5CFDF]">
              <tr>
                <th className="p-3">Reported Product</th>
                <th className="p-3">Brand on Box</th>
                <th className="p-3">Quoted CM/L</th>
                <th className="p-3">Market Location</th>
                <th className="p-3">Source Channel</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {SUSPECTED_MISUSE_REPORTS.map((rep) => (
                <tr key={rep.id} className="hover:bg-neutral-50">
                  <td className="p-3 font-medium text-neutral-900">{rep.product}</td>
                  <td className="p-3 font-bold text-[#D64545]">{rep.reportedBrand}</td>
                  <td className="p-3 font-mono text-neutral-700">{rep.quotedCML}</td>
                  <td className="p-3 text-neutral-600 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span>{rep.location}</span>
                  </td>
                  <td className="p-3 text-neutral-500">{rep.reporterRole}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        rep.status === 'Notice Issued'
                          ? 'bg-amber-100 text-amber-800'
                          : rep.status === 'Under Investigation'
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {rep.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
