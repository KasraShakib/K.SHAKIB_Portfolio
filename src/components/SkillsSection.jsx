import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// ۱. تعریف آیکون‌ها خارج از رندر کامپوننت جهت جلوگیری از بازآفرینی در هر فریم
const ICONS = [
  <Code2 className="text-indigo-400" size={22} />,
  <Wrench className="text-indigo-400" size={22} />,
  <Server className="text-indigo-400" size={22} />
];

// ۲. جداسازی تگ مهارت جهت بهینه‌سازی Re-render و لایه‌بندی GPU
const SkillBadge = memo(({ skill }) => (
  <span className="px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white transition-all cursor-default select-none backdrop-blur-sm transform-gpu">
    {skill}
  </span>
));
SkillBadge.displayName = 'SkillBadge';

// ۳. کامپوننت آیتم‌های تایم‌لاین به صورت memo
const CategoryItem = memo(({ cat, idx, isRtl }) => {
  const isEven = idx % 2 === 0;

  // تنظیم جهت انیمیشن ورودی بر اساس زبان و موقعیت در تایم‌لاین
  const xOffset = isRtl 
    ? (isEven ? -30 : 30) 
    : (isEven ? 30 : -30);

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: idx * 0.1, ease: 'easeOut' }}
      className={`relative flex flex-col md:flex-row items-start md:items-center pr-10 md:pr-0 transform-gpu ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* دایره پالس‌دار روی خط تایم‌لاین */}
      <div className="absolute right-[-1px] md:right-auto md:left-1/2 md:-translate-x-1/2 top-1.5 md:top-auto w-3.5 h-3.5 md:w-4 md:h-4 rounded-full bg-slate-950 border-2 border-indigo-400 z-10 shadow-[0_0_12px_#818cf8] transform-gpu">
        <span className="absolute inset-0 rounded-full bg-indigo-400/60 animate-ping"></span>
      </div>

      <div className="hidden md:block w-1/2" />

      {/* محتوای کارت مهارت‌ها */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className={`flex items-center gap-2.5 mb-3.5 flex-wrap ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
          <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 shrink-0 backdrop-blur-md">
            {ICONS[idx % ICONS.length]}
          </div>
          <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
            {cat.title}
          </h3>
          <span className="px-2.5 py-0.5 text-[11px] sm:text-xs font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 rounded-full backdrop-blur-sm">
            {cat.badge}
          </span>
        </div>

        <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
          {cat.skills?.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
});
CategoryItem.displayName = 'CategoryItem';

function SkillsSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fa';
  const isRtl = currentLang === 'fa';

  const skillCategories = useMemo(() => {
    return t('skills.categories', { returnObjects: true }) || [];
  }, [t, currentLang]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 max-w-5xl mx-auto overflow-hidden">
      {/* هدر بخش */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-16 select-none cursor-default transform-gpu"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
          {t('skills.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
      </motion.div>

      {/* تایم‌لاین اصلی */}
      <div className="relative">
        {/* خط عمودی متصل‌کننده */}
        <div className="absolute right-3.5 md:right-auto md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500/50 to-transparent pointer-events-none"></div>

        <div className="space-y-12 md:space-y-16">
          {skillCategories.map((cat, idx) => (
            <CategoryItem
              key={cat.title || idx}
              cat={cat}
              idx={idx}
              isRtl={isRtl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);