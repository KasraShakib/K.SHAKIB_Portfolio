import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'fa';
  const isRtl = currentLang === 'fa';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > 20 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.certificates'), href: '#certificates' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      {/* بک‌دراپ شفاف برای بستن منو در موبایل */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-8 pointer-events-none">
        <nav 
          /* جهت برای جای‌گیری درست برند (سمت چپ در فارسی، سمت راست در انگلیسی) */
          dir={isRtl ? 'ltr' : 'rtl'}
          className={`max-w-7xl mx-auto rounded-3xl flex items-center justify-between select-none pointer-events-auto transition-all duration-300 ease-in-out ${
            scrolled 
              ? 'bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.25)] py-3 px-6' 
              : 'bg-transparent border border-transparent shadow-none py-2 px-4'
          }`}
        >
          {/* ۱. برند / لوگو */}
          <a 
            href="#" 
            onClick={(e) => scrollToSection(e, '#')} 
            className="text-xl sm:text-2xl font-black tracking-wider text-white cursor-pointer group"
          >
            K<span className="text-indigo-400 group-hover:text-purple-400 transition-colors duration-300">.SHAKIB</span>
          </a>

          {/* ۲. منوی دسکتاپ (جهت متون متناسب با زبان) */}
          <div className="hidden md:flex items-center gap-8" dir={isRtl ? 'rtl' : 'ltr'}>
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative text-sm text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer py-1 group"
                  >
                    {link.name}
                    <span className={`absolute bottom-0 ${isRtl ? 'right-0' : 'left-0'} w-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full`}></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* دکمه تغییر زبان (دسکتاپ) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.07] hover:bg-white/15 border border-white/10 text-xs font-semibold text-white backdrop-blur-2xl transition-all cursor-pointer active:scale-95"
              title="تغییر زبان / Change Language"
            >
              <Globe size={14} className="text-indigo-400" />
              <span>{currentLang === 'fa' ? 'EN' : 'FA'}</span>
            </button>
          </div>

          {/* ۳. دکمه‌ها در موبایل (تغییر زبان + همبرگر منو) */}
          <div className="flex md:hidden items-center gap-2" dir="ltr">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/[0.07] active:bg-white/15 border border-white/10 text-xs font-semibold text-white backdrop-blur-2xl transition-all cursor-pointer"
            >
              <Globe size={14} className="text-indigo-400" />
              <span>{currentLang === 'fa' ? 'EN' : 'FA'}</span>
            </button>

            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              className="text-slate-300 hover:text-white cursor-pointer p-2 rounded-xl bg-white/[0.07] active:bg-white/15 border border-white/10 transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* منوی کشویی موبایل با همان استایل گواهی‌ها */}
        {mobileMenuOpen && (
          <div 
            dir={isRtl ? 'rtl' : 'ltr'}
            className="md:hidden mt-3 max-w-7xl mx-auto bg-gradient-to-b from-white/[0.09] to-black/40 backdrop-blur-2xl border border-white/10 p-4 rounded-3xl flex flex-col gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2 duration-150"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-white active:bg-white/10 px-3 py-2.5 rounded-xl transition-all cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}