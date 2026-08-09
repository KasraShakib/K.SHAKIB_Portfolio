import React from 'react';
import { motion } from 'framer-motion';
import {ExternalLink, FolderCode, GitBranch } from 'lucide-react';

const projects = [
  {
    title: 'Digikala UI Clone',
    description: 'پیاده‌سازی کامل و پاسخ‌گوی (Responsive) رابط کاربری دیجی‌کالا با تمرکز روی فرانت‌اند مدرن، چیدمان‌های پیچیده و پشتیبانی کاملا راست‌چین (RTL).',
    tags: ['React', 'Tailwind CSS', 'Vite', 'RTL Layout'],
    github: 'https://github.com/KasraShakib/Digikala-UI-Clone',
    demo: '#'
  },
  {
    title: 'IMDme Sample Project',
    description: 'پروژه نمونه مشابه IMDb جهت دریافت داده‌های فیلم‌ها از طریق اتصال به REST API، فیلتر پیشرفته و نمایش ساختاریافته محتوا.',
    tags: ['React', 'REST API', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/KasraShakib/IMDme_sample-project',
    demo: '#'
  },
  {
    title: 'Goldtag UI Sample',
    description: 'بازسازی معماری کامپوننت‌ها و UI سیستم فروشگاهی با ساختار تمیز و پویا جهت تمرین پیاده‌سازی پروژه‌های e-commerce.',
    tags: ['React', 'CSS Modules', 'UI Architecture'],
    github: 'https://github.com/KasraShakib/Goldtag-sample-project',
    demo: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 select-none cursor-default"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">پروژه‌های شاخص</h2>
        <div className="w-20 h-1 bg-indigo-500/80 mx-auto rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="liquid-glass liquid-glass-hover p-6 rounded-2xl flex flex-col justify-between transform hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4 select-none">
                <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-xl border border-indigo-500/30 cursor-default">
                  <FolderCode size={22} />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors cursor-pointer"
                    title="مشاهده سورس گیت‌هاب"
                  >
                    <GitBranch size={18} />
                  </a>
                  {proj.demo && proj.demo !== '#' && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors cursor-pointer"
                      title="پیش‌نمایش زنده"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 cursor-default">{proj.title}</h3>
              <p className="text-slate-300/80 text-xs leading-relaxed mb-6 cursor-default">{proj.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
              {proj.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-[11px] font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20 select-none cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}