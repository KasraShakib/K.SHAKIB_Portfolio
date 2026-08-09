import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import profileImg from '../assets/photos/Gemini_Generated_Image_erzr8rerzr8rerzr.png';

export default function AboutSection() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 90;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="pt-36 pb-20 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="liquid-glass p-8 md:p-12 rounded-3xl relative"
      >
        {/* لایه‌بندی دو ستونه: عکس کنار متن */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-right">
          
          {/* بخش عکس کادر بندی شده در سمت راست/کنار */}
          <div className="shrink-0">
            <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-indigo-500/30 p-1.5 bg-indigo-500/10 shadow-xl shadow-indigo-500/10">
              <img 
                src={profileImg}
                alt="کسری شکیب" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* محتوای متنی */}
          <div className="flex-1">
            {/* نشانگر وضعیت آماده به کار */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span dir="rtl">آماده همکاری در پروژه‌های Front-End</span>
            </div>

            {/* پورتفولیو کوچک بالای اسم */}
            <span className="block text-xs md:text-sm font-semibold tracking-widest text-indigo-400 uppercase mb-1">
              پورتفولیو
            </span>

            {/* نام کسری شکیب به صورت بزرگ و فارسی */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
                کسری شکیب
              </span>
            </h1>

            {/* متن درباره من کامل و حرفه‌ای */}
            <p dir='rtl' className="text-slate-200 text-sm md:text-base leading-relaxed mb-8 font-light text-justify md:text-right">
              توسعه‌دهنده فرانت‌اند متعهد و خلاق با تسلط عمیق بر اکوسیستم مدرن وب و تمرکز ویژه روی <strong className="text-white font-semibold">React.js</strong> و <strong className="text-white font-semibold">JavaScript (ES6+)</strong>. متخصص در پیاده‌سازی رابط‌های کاربری چشم‌نواز، واکنش‌گرا (Responsive) و کارآمد با استفاده از <strong className="text-white font-semibold">Tailwind CSS</strong>، معماری کامپوننت‌محور، مدیریت state و اتصال به <strong className="text-white font-semibold">RESTful APIs</strong>. مجهز به دانش کار با ابزارهای نسخه برداری <strong className="text-white font-semibold">Git & GitHub</strong>، طراحی و تحویل طرح‌ها از <strong className="text-white font-semibold">Figma</strong> و مسلط به استانداردسازی ساختار کامپوننت‌ها برای حالت‌های RTL/LTR. همواره مشتاق یادگیری، بهینه‌سازی عملکرد (Performance) و تحویل پروژه‌هایی با بهترین تجربه کاربری (UX/UI).
            </p>

            {/* دکمه‌های اکشن */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="https://github.com/KasraShakib"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass liquid-glass-hover text-white px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                گیت‌هاب
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-indigo-600/90 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/30 cursor-pointer"
              >
                ارتباط با من <ArrowLeft size={16} />
              </a>
              
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}