import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, GitBranch } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto border-t border-white/10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 select-none"
      >
        <h2 className="text-3xl font-bold text-white mb-2 cursor-default drop-shadow-md">راه‌های ارتباطی</h2>
        <p className="text-slate-300/80 text-sm cursor-default">برای همکاری و گفتگو می‌توانید از راه‌های زیر با من در تماس باشید</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 select-none"
      >
        {/* شماره تماس */}
        <a
          href="tel:09362176385"
          className="liquid-glass liquid-glass-hover p-5 rounded-2xl flex items-center gap-4 transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="p-3.5 bg-indigo-500/20 text-indigo-300 rounded-xl shrink-0 border border-indigo-500/30">
            <Phone size={22} />
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">شماره تماس</span>
            <span className="text-base font-medium text-white block dir-ltr text-right">09362176385</span>
          </div>
        </a>

        {/* ایمیل */}
        <a
          href="mailto:kasrashakib505@gmail.com"
          className="liquid-glass liquid-glass-hover p-5 rounded-2xl flex items-center gap-4 transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="p-3.5 bg-indigo-500/20 text-indigo-300 rounded-xl shrink-0 border border-indigo-500/30">
            <Mail size={22} />
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">ایمیل</span>
            <span className="text-base font-medium text-white block whitespace-nowrap">
              kasrashakib505@gmail.com
            </span>
          </div>
        </a>

        {/* گیت‌هاب */}
        <a 
          href="https://github.com/KasraShakib" 
          target="_blank" 
          rel="noreferrer"
          className="liquid-glass liquid-glass-hover p-5 rounded-2xl flex items-center gap-4 transform hover:-translate-y-1 cursor-pointer"
        >
          <div className="p-3.5 bg-indigo-500/20 text-indigo-300 rounded-xl shrink-0 border border-indigo-500/30">
            <GitBranch size={22} />
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">گیت‌هاب</span>
            <span className="text-base font-medium text-white block">KasraShakib</span>
          </div>
        </a>

        {/* موقعیت مکانی */}
        <div className="liquid-glass liquid-glass-hover p-5 rounded-2xl flex items-center gap-4 transform hover:-translate-y-1 cursor-pointer">
          <div className="p-3.5 bg-indigo-500/20 text-indigo-300 rounded-xl shrink-0 border border-indigo-500/30">
            <MapPin size={22} />
          </div>
          <div>
            <span className="text-xs text-slate-400 block mb-0.5">موقعیت مکانی</span>
            <span className="text-base font-medium text-white block">ایران، تهران / تبریز</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}