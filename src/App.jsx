import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';

// 1. Lazy Load کردن بخش‌های پایین‌تر و انیمیشن‌های سنگین
const StarsCanvas = lazy(() => import('./components/Canvas/Stars'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const CertificatesSection = lazy(() => import('./components/CertificatesSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

// کامپوننت لودینگ سبک جهت جلوگیری از پرش صفحه
const SectionLoader = () => (
  <div className="w-full h-40 flex items-center justify-center text-slate-500">
    <div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <div className="relative min-h-screen animated-mesh-bg text-slate-100 overflow-hidden select-none">
      
      {/* 2. بهینه‌سازی گوی‌های نورانی با transform-gpu و will-change برای انتقال پردازش به GPU */}
      <div className="fixed top-10 right-10 w-80 h-80 bg-indigo-500/30 rounded-full blur-[80px] pointer-events-none animate-pulse transform-gpu will-change-transform"></div>
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-purple-500/25 rounded-full blur-[90px] pointer-events-none animate-pulse transform-gpu will-change-transform"></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none transform-gpu"></div>

      <div className="relative z-10">
        {/* نوبار و بخش Hero (About) بدون Lazy باقی می‌مانند تا FCP و سرعت لود اولیه عالی باشد */}
        <Navbar />
        <main>
          {/* کانواس ستاره‌ها به همراه Suspense */}
          <Suspense fallback={null}>
            <StarsCanvas />
          </Suspense>

          <AboutSection />

          {/* بقیه سکشن‌ها به صورت Lazy بارگذاری می‌شوند */}
          <Suspense fallback={<SectionLoader />}>
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            <ContactSection />
          </Suspense>
        </main>
      </div>
    </div>
  );
}