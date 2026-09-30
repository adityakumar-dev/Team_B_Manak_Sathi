import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Wifi,
  WifiOff,
  Menu,
  X,
  Compass,
  FileSearch,
  CheckCircle,
  Bell,
  Code,
  Lock,
  Workflow,
  Sparkles,
  Bot
} from 'lucide-react';
import { PageId, Language } from '../../types';
import { UI_TRANSLATIONS } from '../../data/demo';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  isOffline: boolean;
  setIsOffline: (offline: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  setCurrentPage,
  language,
  setLanguage,
  isOffline,
  setIsOffline,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  const navItems: Array<{ id: PageId; label: string; icon: React.ReactNode; isDifferentiator?: boolean }> = [
    { id: 'home', label: t.navHome, icon: null },
    { id: 'assistant', label: t.navAssistant, icon: <Bot className="w-3.5 h-3.5" /> },
    { id: 'roadmap', label: t.navRoadmap, icon: <Compass className="w-3.5 h-3.5" />, isDifferentiator: true },
    { id: 'gap-analyser', label: t.navGapAnalyser, icon: <FileSearch className="w-3.5 h-3.5" />, isDifferentiator: true },
    { id: 'mark-check', label: t.navMarkCheck, icon: <CheckCircle className="w-3.5 h-3.5" /> },
    { id: 'alerts', label: t.navAlerts, icon: <Bell className="w-3.5 h-3.5" /> },
    { id: 'for-bis-websites', label: t.navForWebsites, icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'officials-portal', label: t.navOfficials, icon: <Lock className="w-3.5 h-3.5" /> },
    { id: 'how-it-works', label: t.navHowItWorks, icon: <Workflow className="w-3.5 h-3.5" /> },
  ];

  const languages: Array<{ code: Language; label: string; native: string }> = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
    { code: 'mr', label: 'Marathi', native: 'मराठी' },
    { code: 'ta', label: 'Tamil', native: 'தமிழ்' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#C5CFDF] shadow-xs">
      {/* Top micro bar for SIH 2026 header notice */}
      <div className="bg-[#1F497D] text-white px-4 py-1 text-[11px] flex justify-between items-center tracking-wide font-medium">
        <div className="flex items-center gap-2">
          <span className="bg-[#F5A623] text-[#1E1E1E] font-bold px-1.5 py-0.2 rounded text-[10px]">
            SIH 2026
          </span>
          <span className="truncate">
            Ministry of Consumer Affairs · Team_B Prototype (Problem Statement 26107)
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-white/80 text-[10px]">
          <span>Grounded in BIS Standards</span>
          <span>•</span>
          <span>Zero Hallucination Gate Architecture</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Wordmark: blue shield with checkmark + Manak Saathi text */}
          <div
            className="flex items-center gap-2.5 cursor-pointer select-none group"
            onClick={() => {
              setCurrentPage('home');
              setMobileMenuOpen(false);
            }}
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#1F497D] to-[#16365C] text-white shadow-sm group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#F5A623] rounded-full border-2 border-white flex items-center justify-center">
                <Sparkles className="w-2 h-2 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#1F497D]">
                  {t.appName}
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-700 border border-[#C5CFDF] font-semibold px-1.5 py-0.5 rounded-full">
                  AI
                </span>
              </div>
              <span className="text-[10px] text-neutral-500 font-medium -mt-1 hidden sm:block">
                Assistant for Indian Standards & BIS
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? item.isDifferentiator
                        ? 'bg-[#F5A623]/15 text-[#b0730d] font-bold border border-[#F5A623]'
                        : 'bg-[#1F497D]/10 text-[#1F497D] font-bold'
                      : item.isDifferentiator
                      ? 'text-[#1E1E1E] hover:bg-[#F5A623]/10 hover:text-[#b0730d]'
                      : 'text-[#1E1E1E]/80 hover:text-[#1F497D] hover:bg-neutral-100'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isDifferentiator && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls: Offline Toggle + Language Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Offline toggle */}
            <button
              onClick={() => setIsOffline(!isOffline)}
              title={isOffline ? 'Switch to Online Mode' : 'Simulate Offline Mode (Shows cached standards)'}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isOffline
                  ? 'bg-amber-100 text-amber-900 border-[#F5A623]'
                  : 'bg-white text-neutral-600 border-[#C5CFDF] hover:bg-neutral-50'
              }`}
            >
              {isOffline ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-[#F5A623]" />
                  <span className="hidden md:inline font-semibold">Offline</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-[#2E9E5B]" />
                  <span className="hidden md:inline">Online</span>
                </>
              )}
            </button>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-white text-[#1E1E1E] border border-[#C5CFDF] hover:bg-neutral-50 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#1F497D]" />
                <span className="font-medium">{currentLangObj.native}</span>
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1 w-36 bg-white border border-[#C5CFDF] rounded-xl shadow-lg z-50 py-1 overflow-hidden animate-in fade-in">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLanguage(l.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-neutral-100 transition-colors ${
                          language === l.code
                            ? 'font-bold text-[#1F497D] bg-neutral-50'
                            : 'text-neutral-700'
                        }`}
                      >
                        <span>{l.native}</span>
                        <span className="text-[10px] text-neutral-400">{l.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 border border-[#C5CFDF]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#C5CFDF] px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-between ${
                  isActive
                    ? item.isDifferentiator
                      ? 'bg-[#F5A623]/20 text-[#b0730d] font-bold border border-[#F5A623]'
                      : 'bg-[#1F497D]/10 text-[#1F497D] font-bold'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.isDifferentiator && (
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-[#F5A623] text-white">
                    Key feature
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Offline Mode Banner */}
      {isOffline && (
        <div className="bg-amber-500 text-slate-950 font-semibold px-4 py-1.5 text-xs flex items-center justify-center gap-2 border-b border-amber-600/40">
          <WifiOff className="w-4 h-4 shrink-0 text-slate-900" />
          <span>{t.offlineBannerText}</span>
          <span className="hidden sm:inline text-slate-900 font-normal">
            (Live mark checks paused · Cached standard clauses remain fully accessible)
          </span>
        </div>
      )}
    </header>
  );
};
