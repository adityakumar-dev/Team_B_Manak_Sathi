import React, { useState } from 'react';
import {
  Bell,
  Smartphone,
  Mail,
  HardDrive,
  Calendar,
  AlertCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  Bookmark,
  FileText,
  ChevronRight,
} from 'lucide-react';
import { SAMPLE_ALERTS, SAVED_OFFLINE_ITEMS, SAMPLE_DATA_NOTICE } from '../../data/demo';
import { useToast } from '../common/Toast';
import { PageId } from '../../types';

interface AlertsProps {
  setCurrentPage: (page: PageId) => void;
  openEvidence: (citationId: string) => void;
  isOffline: boolean;
}

export const Alerts: React.FC<AlertsProps> = ({ setCurrentPage, openEvidence, isOffline }) => {
  const { showToast } = useToast();
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  const myProducts = [
    {
      id: 'prod-1',
      title: 'Stainless Steel Insulated Flasks & Bottles',
      standard: 'IS XXXX : 20XX (sample)',
      status: 'QCO Mandated',
      statusColor: 'text-[#D64545] bg-rose-50 border-rose-200',
      activeAlertsCount: 2,
    },
    {
      id: 'prod-2',
      title: 'Domestic Electric Pressure Cookers',
      standard: 'IS 2347 : 2017 (sample)',
      status: 'Operative Licence',
      statusColor: 'text-[#2E9E5B] bg-emerald-50 border-emerald-200',
      activeAlertsCount: 1,
    },
  ];

  const handleToggleSms = () => {
    setSmsAlerts(!smsAlerts);
    showToast(
      !smsAlerts ? 'SMS regulatory notifications enabled.' : 'SMS notifications paused.',
      'info'
    );
  };

  const handleToggleEmail = () => {
    setEmailAlerts(!emailAlerts);
    showToast(
      !emailAlerts ? 'Email digest enabled for Indian Standards gazettes.' : 'Email notifications paused.',
      'info'
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Banner Notice */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1F497D] bg-blue-100 px-2.5 py-0.5 rounded-full border border-blue-200">
            Standardization Radar & Notifications
          </span>
        </div>
        <span className="text-xs text-neutral-400 bg-white border border-[#C5CFDF] px-2 py-0.5 rounded">
          {SAMPLE_DATA_NOTICE}
        </span>
      </div>

      {/* Main Title & Notification Subscriptions Card */}
      <div className="bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#1F497D] mb-1">
              <Bell className="w-4 h-4 text-[#F5A623]" />
              <span>REGULATORY SURVEILLANCE RADAR</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#1E1E1E]">
              Alerts & Standards Watch
            </h1>
            <p className="mt-1 text-xs text-neutral-600 max-w-2xl leading-relaxed">
              Never get caught off-guard by a surprise Quality Control Order or a revised test method. Manak Saathi continuously scans the e-Gazette and BIS Technical Committee bulletins.
            </p>
          </div>

          {/* Toggle Switches for SMS / Email */}
          <div className="flex items-center gap-3 bg-[#F4F6FA] p-3 rounded-xl border border-[#C5CFDF] shrink-0">
            <label className="flex items-center gap-1.5 cursor-pointer text-xs font-medium text-neutral-700">
              <input
                type="checkbox"
                checked={smsAlerts}
                onChange={handleToggleSms}
                className="rounded text-[#1F497D] focus:ring-0"
              />
              <Smartphone className="w-3.5 h-3.5 text-neutral-500" />
              <span>SMS Alerts</span>
            </label>

            <span className="text-neutral-300">|</span>

            <label className="flex items-center gap-1.5 cursor-pointer text-xs font-medium text-neutral-700">
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={handleToggleEmail}
                className="rounded text-[#1F497D] focus:ring-0"
              />
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              <span>Email Digest</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: My Products + Saved for Offline */}
        <div className="space-y-6">
          {/* Section: My Products (2 saved items) */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-sm text-[#1E1E1E] flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-[#1F497D]" />
                My Monitored Products
              </h2>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                2 Active
              </span>
            </div>

            <div className="space-y-3">
              {myProducts.map((p) => (
                <div
                  key={p.id}
                  className="p-3.5 rounded-xl bg-[#F4F6FA] border border-[#C5CFDF] hover:border-[#1F497D] transition-colors cursor-pointer"
                  onClick={() => setCurrentPage('roadmap')}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-xs text-neutral-900 leading-snug">
                      {p.title}
                    </h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${p.statusColor}`}>
                      {p.status}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#1F497D] font-medium">
                    {p.standard}
                  </div>
                  <div className="mt-2 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>{p.activeAlertsCount} pending notifications</span>
                    <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Saved for Offline */}
          <div className="bg-white rounded-2xl border border-[#C5CFDF] p-5 shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-bold text-sm text-[#1E1E1E] flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#2E9E5B]" />
                Saved for Offline Use
              </h2>
              <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                Cache Ready
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 mb-4">
              Accessible anywhere without active internet connectivity.
            </p>

            <div className="space-y-2.5">
              {SAVED_OFFLINE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.type.includes('Roadmap')) {
                      setCurrentPage('roadmap');
                    } else {
                      openEvidence('cit-is-17526-cl-5-1');
                    }
                  }}
                  className="p-2.5 rounded-xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:border-[#1F497D] transition-colors cursor-pointer text-xs"
                >
                  <div className="font-bold text-neutral-900 line-clamp-1">{item.title}</div>
                  <div className="flex items-center justify-between mt-1 text-[10px] text-neutral-500">
                    <span>{item.type}</span>
                    <span className="font-mono">{item.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Alerts Timeline */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[#C5CFDF] p-6 shadow-xs">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#1F497D]" />
              <h2 className="font-bold text-base text-[#1E1E1E]">
                Regulatory Alerts Timeline
              </h2>
            </div>
            <span className="text-xs text-neutral-500">
              Live e-Gazette feed
            </span>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#C5CFDF]">
            {SAMPLE_ALERTS.map((alert) => {
              // Colored tags as per requirements:
              // "Draft standard open for comment" (blue)
              // "Standard revised" (purple)
              // "QCO becomes mandatory" (amber)
              let badgeColor = 'bg-amber-100 text-amber-900 border-amber-300';
              let dotColor = 'bg-[#F5A623]';
              if (alert.type === 'draft') {
                badgeColor = 'bg-blue-100 text-[#1F497D] border-blue-300';
                dotColor = 'bg-[#1F497D]';
              } else if (alert.type === 'revised') {
                badgeColor = 'bg-purple-100 text-purple-900 border-purple-300';
                dotColor = 'bg-purple-600';
              }

              return (
                <div key={alert.id} className="relative group">
                  {/* Timeline bullet dot */}
                  <div
                    className={`absolute -left-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ${dotColor} shadow-xs`}
                  />

                  <div className="bg-[#F4F6FA] p-4 rounded-xl border border-[#C5CFDF] hover:border-[#1F497D] transition-all">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${badgeColor}`}>
                        {alert.typeLabel}
                      </span>
                      <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {alert.date}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-neutral-900 mb-1">
                      {alert.title}
                    </h3>
                    <div className="text-xs font-mono text-[#1F497D] font-semibold mb-2">
                      {alert.standard}
                    </div>

                    <p className="text-xs text-neutral-700 leading-relaxed mb-3">
                      {alert.fullNote}
                    </p>

                    {/* "What this means for you" line */}
                    <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-xs">
                      <span className="font-bold text-neutral-800">What this means for you: </span>
                      <span className="text-neutral-600">{alert.impactSummary}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
