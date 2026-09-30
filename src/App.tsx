import React, { useState } from 'react';
import { PageId, Language } from './types';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { EvidenceViewer } from './components/common/EvidenceViewer';
import { DemoGuideModal } from './components/common/DemoGuideModal';
import { ToastProvider, useToast } from './components/common/Toast';
import { Home } from './components/pages/Home';
import { Assistant } from './components/pages/Assistant';
import { Roadmap } from './components/pages/Roadmap';
import { GapAnalyser } from './components/pages/GapAnalyser';
import { MarkCheck } from './components/pages/MarkCheck';
import { Alerts } from './components/pages/Alerts';
import { ForBisWebsites } from './components/pages/ForBisWebsites';
import { OfficialsPortal } from './components/pages/OfficialsPortal';
import { HowItWorks } from './components/pages/HowItWorks';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [isOffline, setIsOffline] = useState(false);
  const [activeCitationId, setActiveCitationId] = useState<string | null>(null);

  // States to facilitate the 1-click Judge Demo Scenarios
  const [assistantInitialQuery, setAssistantInitialQuery] = useState('');
  const [autoRunGapSample, setAutoRunGapSample] = useState(false);
  const [autoSelectMisuseDemo, setAutoSelectMisuseDemo] = useState(false);

  const openEvidence = (citationId: string) => {
    setActiveCitationId(citationId);
  };

  const closeEvidence = () => {
    setActiveCitationId(null);
  };

  // Demo Guide 4 Scenario Handler
  const handleSelectScenario = (scenarioId: number) => {
    if (scenarioId === 1) {
      // Scenario 1: Photo -> Roadmap
      setAutoRunGapSample(false);
      setAutoSelectMisuseDemo(false);
      setAssistantInitialQuery('I want to make steel water bottles');
      setCurrentPage('assistant');
    } else if (scenarioId === 2) {
      // Scenario 2: Spec sheet -> Gap report
      setAutoRunGapSample(true);
      setAutoSelectMisuseDemo(false);
      setCurrentPage('gap-analyser');
    } else if (scenarioId === 3) {
      // Scenario 3: Label -> Mark check (misuse)
      setAutoSelectMisuseDemo(true);
      setAutoRunGapSample(false);
      setCurrentPage('mark-check');
    } else if (scenarioId === 4) {
      // Scenario 4: Officer view
      setAutoRunGapSample(false);
      setAutoSelectMisuseDemo(false);
      setCurrentPage('officials-portal');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6FA] text-[#1E1E1E] font-sans selection:bg-amber-200">
      {/* Top Navbar with Wordmark, Links, Offline toggle & Language Switcher */}
      <Header
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        language={language}
        setLanguage={setLanguage}
        isOffline={isOffline}
        setIsOffline={setIsOffline}
      />

      {/* Main Page Content Body */}
      <main className="flex-1 flex flex-col">
        {currentPage === 'home' && (
          <Home
            setCurrentPage={(page) => {
              setCurrentPage(page);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'assistant' && (
          <Assistant
            setCurrentPage={setCurrentPage}
            openEvidence={openEvidence}
            initialQuery={assistantInitialQuery}
            isOffline={isOffline}
          />
        )}

        {currentPage === 'roadmap' && (
          <Roadmap
            openEvidence={openEvidence}
            setCurrentPage={setCurrentPage}
            isOffline={isOffline}
          />
        )}

        {currentPage === 'gap-analyser' && (
          <GapAnalyser
            openEvidence={openEvidence}
            autoRunSample={autoRunGapSample}
          />
        )}

        {currentPage === 'mark-check' && (
          <MarkCheck
            isOffline={isOffline}
            autoSelectMisuseDemo={autoSelectMisuseDemo}
          />
        )}

        {currentPage === 'alerts' && (
          <Alerts
            setCurrentPage={setCurrentPage}
            openEvidence={openEvidence}
            isOffline={isOffline}
          />
        )}

        {currentPage === 'for-bis-websites' && <ForBisWebsites />}

        {currentPage === 'officials-portal' && <OfficialsPortal />}

        {currentPage === 'how-it-works' && <HowItWorks />}
      </main>

      {/* Evidence Viewer Slide-over Sheet (Clause & Standard PDF proof) */}
      <EvidenceViewer
        citationId={activeCitationId}
        onClose={closeEvidence}
      />

      {/* Floating 1-Click Demo Guide (Judge Quick-Demo Panel) */}
      <DemoGuideModal
        onSelectScenario={handleSelectScenario}
        currentPage={currentPage}
      />

      {/* Slim Government-Grade Footer on Every Page */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  );
}
