import React, { useState, memo, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Calendar, Building2, Clock, CheckCircle2, ChevronDown, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// 1. کارت آکاردئونی موبایل با حفظ کامل افکت شیشه‌ای، بلور و لایه‌های گلاس‌مورفیسم
const CertificateMobileCard = memo(({ cert, idx, isOpen, onToggle, isRtl, t }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      className={`rounded-2xl border transition-colors duration-300 overflow-hidden transform-gpu backdrop-blur-xl ${
        isOpen 
          ? 'border-indigo-500/40 bg-gradient-to-b from-indigo-500/10 via-white/[0.05] to-transparent shadow-[0_10px_30px_rgba(99,102,241,0.15)]' 
          : 'border-white/10 bg-white/5'
      }`}
    >
      <div
        onClick={onToggle}
        dir={isRtl ? 'rtl' : 'ltr'}
        className="p-4 flex items-center justify-between cursor-pointer active:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-2.5 rounded-xl border shrink-0 transition-all duration-300 ${
            isOpen 
              ? 'bg-indigo-600/20 border-indigo-400/50 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
              : 'bg-white/5 border-white/10 text-slate-400'
          }`}>
            <Award size={22} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-white truncate">
              {cert.title}
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1 whitespace-nowrap">
              <Calendar size={11} className="text-indigo-400" />
              <span>{cert.date}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 whitespace-nowrap backdrop-blur-md">
            {cert.score}
          </span>
          <ChevronDown size={18} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`} />
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            dir={isRtl ? 'rtl' : 'ltr'}
            className="border-t border-white/10 px-4 pb-4 pt-3 transform-gpu"
          >
            <div className="flex items-center gap-1.5 text-xs text-indigo-300 mb-3">
              <Building2 size={13} />
              <span>{cert.issuer}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              <div className="flex items-center gap-1 text-[11px] bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 px-2.5 py-0.5 rounded-lg whitespace-nowrap backdrop-blur-sm">
                <Clock size={12} className="text-indigo-400" />
                <span>{t('certificates.durationPrefix', 'مدت:')} {cert.duration}</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 rounded-lg whitespace-nowrap backdrop-blur-sm">
                <CheckCircle2 size={12} className="text-emerald-400" />
                <span>{t('certificates.scorePrefix', 'نمره:')} {cert.score}</span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed mb-4">
              {cert.description}
            </p>

            {cert.link && cert.link !== '#' && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/30 px-3 py-1.5 rounded-xl transition-all"
              >
                <span>{t('certificates.viewBtn', 'مشاهده مدرک رسمی')}</span>
                <ExternalLink size={12} />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

CertificateMobileCard.displayName = 'CertificateMobileCard';

function CertificatesSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fa';
  const isRtl = currentLang === 'fa';

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState(0);

  const certificatesData = useMemo(() => {
    return t('certificates.items', { returnObjects: true }) || [];
  }, [t]);

  return (
    <section id="certificates" className="py-24 px-4 sm:px-8 max-w-5xl mx-auto relative overflow-hidden select-none">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16 md:mb-20 transform-gpu"
      >
        <span className="text-xs font-semibold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full backdrop-blur-md">
          {t('certificates.badge', 'VERIFIED SKILLS & DEGREES')}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4 drop-shadow-lg">
          {t('certificates.title', 'گواهینامه‌ها و مدارک')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
      </motion.div>

      {/* Desktop View */}
      <div className="hidden md:block relative">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-y-1/2" />

        <div className="grid grid-cols-4 gap-6 relative z-10">
          {certificatesData.map((cert, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={cert.title + idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className="cursor-pointer group flex flex-col items-center transform-gpu"
              >
                <div className="relative flex items-center justify-center mb-6">
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute inset-0 bg-indigo-500/30 rounded-2xl blur-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <div className={`p-4 rounded-2xl border transition-all duration-300 relative backdrop-blur-md ${
                    isActive 
                      ? 'bg-indigo-600/20 border-indigo-400 text-indigo-300 shadow-[0_0_25px_rgba(99,102,241,0.5)] scale-110' 
                      : 'bg-white/5 border-white/10 text-slate-400 group-hover:border-white/30 group-hover:text-slate-200'
                  }`}>
                    <Award size={28} className={`transition-transform duration-300 ${isActive ? 'rotate-12 scale-110' : ''}`} />
                  </div>

                  <span className={`absolute -top-3 text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300 backdrop-blur-md'
                      : 'bg-slate-900/80 border-white/10 text-slate-400'
                  }`}>
                    {cert.score}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className={`text-sm font-bold transition-colors duration-200 ${isActive ? 'text-indigo-300' : 'text-slate-300 group-hover:text-white'}`}>
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center justify-center gap-1 whitespace-nowrap">
                    <Calendar size={11} className="text-indigo-400" />
                    <span>{cert.date}</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 min-h-[200px]">
          <AnimatePresence mode="wait">
            {certificatesData[activeIndex] && (
              <motion.div
                key={activeIndex + currentLang}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-2xl transform-gpu shadow-2xl"
              >
                <div dir={isRtl ? 'rtl' : 'ltr'} className="flex flex-row items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-indigo-400" />
                      <span className="text-xs text-indigo-300 font-medium">{certificatesData[activeIndex].issuer}</span>
                    </div>
                    <h3 className="text-2xl font-black text-white">
                      {certificatesData[activeIndex].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 px-3 py-1 rounded-xl whitespace-nowrap backdrop-blur-sm">
                      <Clock size={14} className="text-indigo-400" />
                      <span>{t('certificates.durationPrefix', 'مدت:')} {certificatesData[activeIndex].duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-xl whitespace-nowrap backdrop-blur-sm">
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span>{t('certificates.scorePrefix', 'نمره:')} {certificatesData[activeIndex].score}</span>
                    </div>
                  </div>
                </div>

                <p dir={isRtl ? 'rtl' : 'ltr'} className="text-slate-300 text-sm leading-relaxed mb-6 max-w-3xl">
                  {certificatesData[activeIndex].description}
                </p>

                {certificatesData[activeIndex].link && certificatesData[activeIndex].link !== '#' && (
                  <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'}`}>
                    <a
                      href={certificatesData[activeIndex].link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-indigo-600/30 hover:bg-indigo-600/50 border border-indigo-500/40 px-4 py-2 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    >
                      <span>{t('certificates.viewBtn', 'مشاهده مدرک رسمی')}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Accordion */}
      <div className="md:hidden flex flex-col gap-4">
        {certificatesData.map((cert, idx) => (
          <CertificateMobileCard
            key={cert.title + idx}
            cert={cert}
            idx={idx}
            isOpen={expandedMobileIndex === idx}
            onToggle={() => setExpandedMobileIndex(expandedMobileIndex === idx ? -1 : idx)}
            isRtl={isRtl}
            t={t}
          />
        ))}
      </div>
    </section>
  );
}

export default memo(CertificatesSection);