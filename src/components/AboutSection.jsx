import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowLeft, ArrowRight, Code2, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("en") ? "en" : "fa";
  const isRtl = currentLang === "fa";

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const coreSkills = [
    {
      name: "React.js",
      color: "from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30",
    },
    {
      name: "JavaScript (ES6+)",
      color: "from-yellow-500/20 to-amber-500/20 text-yellow-400 border-yellow-500/30",
    },
    {
      name: "Tailwind CSS",
      color: "from-sky-500/20 to-teal-500/20 text-sky-400 border-sky-500/30",
    },
    {
      name: "Git & GitHub",
      color: "from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30",
    },
    {
      name: "REST API",
      color: "from-emerald-500/20 to-green-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      name: "HTML5 & CSS3",
      color: "from-pink-500/20 to-rose-500/20 text-pink-400 border-rose-500/30",
    },
  ];

  // متون تایپ‌رایتر بر اساس زبان فعال
  const typewriterStrings = isRtl
    ? [
        "توسعه‌دهنده React.js & JavaScript (ES6+)",
        "معماری کامپوننت‌محور و وب‌اپلیکیشن‌های پیشرفته (SPA)",
        "مدیریت State، اتصال به API و پیاده‌سازی Clean Code",
        "بهینه‌سازی عملکرد (Performance) و ساختار‌های واکنش‌گرا",
      ]
    : [
        "React.js & JavaScript (ES6+) Developer",
        "Component-driven Architecture & Modern SPAs",
        "State Management, API Integration & Clean Code",
        "Performance Optimization & Responsive Design",
      ];

  return (
    <section
      id="about"
      className="pt-32 pb-20 px-4 sm:px-8 max-w-5xl mx-auto overflow-hidden"
    >
      {/* ================= ۱. بخش هیرو (تکست آزاد) ================= */}
      <div className="relative mb-16">
        <div
          dir={isRtl ? "rtl" : "ltr"}
          className={`relative ${isRtl ? "pr-6 sm:pr-8 text-right" : "pl-6 sm:pl-8 text-left"}`}
        >
          {/* خط دکوراتیو عمودی سمت راست/چپ */}
          <div
            className={`absolute top-2 bottom-2 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent rounded-full ${
              isRtl ? "right-0" : "left-0"
            }`}
          >
            <span
              className={`absolute -top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8] animate-pulse ${
                isRtl ? "-right-[5px]" : "-left-[5px]"
              }`}
            ></span>
          </div>

          {/* نشانگر وضعیت آماده به کار */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{t("about.status", "آماده همکاری در پروژه‌های Front-End")}</span>
          </motion.div>

          {/* تیتر اصلی */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-5"
          >
            {isRtl ? (
              <>
                سلام، من{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-600">
                  کسرا شکیب
                </span>{" "}
                هستم
              </>
            ) : (
              <>
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-purple-600">
                  Kasra Shakib
                </span>
              </>
            )}
          </motion.h1>

          {/* بخش تایپ‌رایتر */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-slate-300 font-medium flex items-center gap-2.5 h-14"
          >
            <span className="text-slate-400 shrink-0">
              {t("about.specialtyPrefix", "تخصص من:")}
            </span>
            <span className="text-indigo-400 font-bold border-b-2 border-indigo-500/50 pb-0.5">
              <Typewriter
                key={currentLang} // بازنشانی اثر تایپ‌رایتر هنگام تغییر زبان
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 50,
                }}
              />
            </span>
          </motion.div>

          {/* دکمه‌های اکشن */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm flex items-center gap-2.5 transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{t("about.contactBtn", "ارتباط با من")}</span>
              {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </a>

            <a
              href="https://github.com/KasraShakib"
              target="_blank"
              rel="noreferrer"
              className="bg-white/[0.07] hover:bg-white/15 text-white px-6 py-3.5 rounded-2xl font-medium text-sm flex items-center gap-2.5 transition-all border border-white/10 hover:border-white/25 hover:-translate-y-0.5 cursor-pointer backdrop-blur-2xl"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>{t("about.githubBtn", "گیت‌هاب")}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* ================= ۲. کارت درباره من (با استایل کریستالی گواهی‌ها) ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="p-8 sm:p-10 rounded-3xl relative border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
      >
        <div dir={isRtl ? "rtl" : "ltr"} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {t("about.title", "درباره من")}
            </h2>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light text-justify">
            {isRtl ? (
              <>
                من یک توسعه‌دهنده{" "}
                <strong className="text-white font-semibold">
                  نتیجه‌محور فرانت‌اند
                </strong>{" "}
                و متخصص{" "}
                <strong className="text-white font-semibold">React.js</strong>{" "}
                هستم که هم‌زمان با توسعه کدهای تمیز و ماژولار، روی خروجی بهینه
                پیاده‌سازی دقیق طرح‌های UI/UX و یکپارچه‌سازی کامل APIها تمرکز
                دارم. بر پایه‌های مهندسی وب و اکوسیستم مدرن جاوااسکریپت تسلط
                کامل دارم و از ابزارهای هوش مصنوعی به عنوان یک{" "}
                <strong className="text-indigo-400 font-medium">
                  شتاب‌دهنده هوشمند
                </strong>{" "}
                برای ارتقای فرآیند توسعه، افزایش سرعت و پیاده‌سازی متدولوژی‌های
                مدرن استفاده می‌کنم.
                <br />
                <br />
                به دنبال پیوستن به مجموعه‌ای هستم که برای{" "}
                <strong className="text-white font-semibold">
                  نوآوری، روحیه همکاری و یادگیری مستمر
                </strong>{" "}
                ارزش قائل است؛ و اطمینان دارم که با انگیزه، اشتیاق و قدرت حل
                مسئله‌ام، در هر موقعیتی که مسیر رشد و اشتیاقم به تکنولوژی را
                فراهم کند، به بهترین شکل ظاهر خواهم شد.
              </>
            ) : (
              <>
                I am a results-driven{" "}
                <strong className="text-white font-semibold">
                  Front-End Developer
                </strong>{" "}
                specializing in{" "}
                <strong className="text-white font-semibold">React.js</strong>,
                focused on building clean, modular code, pixel-perfect UI/UX
                implementations, and seamless API integrations. Possessing a
                strong foundation in web engineering and the modern JavaScript
                ecosystem, I leverage AI tools as an{" "}
                <strong className="text-indigo-400 font-medium">
                  intelligent accelerator
                </strong>{" "}
                to optimize workflows, boost productivity, and implement best
                practices.
                <br />
                <br />I am looking to join a forward-thinking team that values{" "}
                <strong className="text-white font-semibold">
                  innovation, collaboration, and continuous learning
                </strong>
                , confident in my ability to contribute effectively and solve
                complex challenges in a dynamic environment.
              </>
            )}
          </p>

          <hr className="border-white/10 my-6" />

          {/* ================= ۳. لیست مهارت‌ها ================= */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-400 uppercase mb-4">
              <Code2 size={16} className="text-indigo-400" />
              <span>
                {t("about.skillsTitle", "تکنولوژی‌ها و ابزارهای اصلی")}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r ${skill.color} border backdrop-blur-md transition-all hover:scale-105 select-none`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}