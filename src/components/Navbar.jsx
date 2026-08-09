import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'درباره من', href: '#about' },
    { name: 'مهارت‌ها', href: '#skills' },
    { name: 'پروژه‌ها', href: '#projects' },
    { name: 'مدارک', href: '#certificates' },
    { name: 'ارتباط با من', href: '#contact' },
  ];

  // تابع مدیریت اسکرول نرم به بخش مورد نظر
  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 90; // ارتفاع نوبار جهت جلوگیری از پوشانده شدن بالای بخش‌ها
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6">
      <nav className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 ${
        scrolled ? 'liquid-glass py-3 px-6 shadow-2xl' : 'bg-transparent py-2 px-4'
      } flex items-center justify-between select-none`}>
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, '#')} 
          className="text-xl font-bold text-white tracking-wider cursor-pointer"
        >
          K<span className="text-indigo-400">.SHAKIB</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white cursor-pointer p-1"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Box */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto liquid-glass p-6 rounded-2xl flex flex-col gap-4 select-none">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer py-1"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}