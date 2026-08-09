import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'توسعه فرانت‌اند (تخصص اصلی)',
    icon: <Code2 className="text-indigo-400" size={24} />,
    skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Responsive Design', 'RTL/LTR Support', 'RESTful APIs']
  },
  {
    title: 'بک‌اند و دیتابیس (آشنایی)',
    icon: <Server className="text-indigo-400" size={24} />,
    skills: ['Node.js', 'Python', 'FastAPI', 'PHP', 'MySQL']
  },
  {
    title: 'ابزارها و ورک‌فلو',
    icon: <Wrench className="text-indigo-400" size={24} />,
    skills: ['Git & GitHub', 'Figma', 'VS Code', 'npm / yarn']
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 select-none cursor-default"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">مهارت‌های فنی</h2>
        <div className="w-20 h-1 bg-indigo-500/80 mx-auto rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="liquid-glass liquid-glass-hover p-6 rounded-2xl flex flex-col justify-between transform hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-6 select-none">
                <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/30 shrink-0">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-white cursor-default">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium text-slate-200 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}