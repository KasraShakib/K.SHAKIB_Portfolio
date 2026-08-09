import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2, Clock, CheckCircle2 } from 'lucide-react';

const certificates = [
  {
    title: 'ReactJS',
    issuer: 'مجتمع فنی تهران (دیباگران)',
    date: 'دی ۱۴۰۴',
    duration: '۴۰ ساعت',
    score: '۹۳ از ۱۰۰',
    description: 'تسلط بر مفاهیم فرانت‌اند مدرن، کامپوننت‌نویسی، مدیریت State و اتصال به API با React.',
    link: '#'
  },
  {
    title: 'PHP & MYSQL Web Development',
    issuer: 'مجتمع فنی تهران (دیباگران)',
    date: 'دی ۱۴۰۴',
    duration: '۸۰ ساعت',
    score: '۹۰ از ۱۰۰',
    description: 'برنامه‌نویسی سمت سرور، مدیریت پایگاه داده MySQL و پیاده‌سازی پلتفرم‌های پویا.',
    link: '#'
  },
  {
    title: 'Web Design Pack',
    issuer: 'مجتمع فنی تهران (دیباگران)',
    date: 'مرداد ۱۴۰۴',
    duration: '۱۵۰ ساعت',
    score: '۹۰ از ۱۰۰',
    description: 'دوره جامع طراحی وب شامل HTML5, CSS3, JavaScript و اصول ساخت صفحات واکنش‌گرا.',
    link: '#'
  },
  {
    title: 'Programming with Python',
    issuer: 'مجتمع فنی تهران (دیباگران)',
    date: 'خرداد ۱۴۰۳',
    duration: '۶۰ ساعت',
    score: '۶۷ از ۱۰۰',
    description: 'برنامه‌نویسی پایه و پیشرفته پایتون، تحلیل داده و تفکر الگوریتمی.',
    link: '#'
  }
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 select-none cursor-default"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">گواهینامه‌ها و مدارک</h2>
        <div className="w-20 h-1 bg-indigo-500/80 mx-auto rounded-full shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="liquid-glass liquid-glass-hover p-6 rounded-2xl flex flex-col justify-between transform hover:-translate-y-1"
          >
            <div>
              {/* آیکون و تاریخ */}
              <div className="flex items-center justify-between mb-4 select-none">
                <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl cursor-default border border-indigo-500/30">
                  <Award size={24} />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 cursor-default">
                  <Calendar size={13} className="text-indigo-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* عنوان و مرکز صادرکننده */}
              <h3 className="text-base font-bold text-white mb-1.5 cursor-default dir-ltr text-right">
                {cert.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-indigo-300 mb-4 select-none cursor-default">
                <Building2 size={14} />
                <span>{cert.issuer}</span>
              </div>

              {/* نمره و مدت زمان دوره */}
              <div className="flex flex-wrap gap-2 mb-4 select-none cursor-default">
                <div className="flex items-center gap-1 text-[11px] bg-indigo-500/10 text-indigo-200 border border-indigo-500/20 px-2 py-0.5 rounded-md">
                  <Clock size={12} className="text-indigo-400" />
                  <span>مدت: {cert.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>نمره: {cert.score}</span>
                </div>
              </div>

              <p className="text-slate-300/80 text-xs leading-relaxed mb-6 cursor-default">
                {cert.description}
              </p>
            </div>

            {cert.link && cert.link !== '#' && (
              <div className="pt-3 border-t border-white/10">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-300 hover:text-indigo-200 hover:underline font-medium cursor-pointer"
                >
                  مشاهده مدرک <ExternalLink size={12} />
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}