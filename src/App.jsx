import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import StarsCanvas from './components/Canvas/Stars';

export default function App() {
  return (
    <div className="relative min-h-screen animated-mesh-bg text-slate-100 overflow-hidden select-none">
      {/* گوی‌های نورانی پویا در پس‌زمینه جهت نمایان شدن افکت بلور شیشه‌ها */}
      <div className="fixed top-10 right-10 w-80 h-80 bg-indigo-500/40 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-purple-500/35 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <StarsCanvas />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}