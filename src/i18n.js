import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fa: {
    translation: {
      nav: {
        about: "درباره من",
        skills: "مهارت‌ها",
        projects: "پروژه‌ها",
        certificates: "مدارک",
        contact: "ارتباط با من",
      },
      about: {
        status: "آماده همکاری در پروژه‌های Front-End",
        specialtyPrefix: "تخصص من:",
        contactBtn: "ارتباط با من",
        githubBtn: "گیت‌هاب",
        title: "درباره من",
        skillsTitle: "تکنولوژی‌ها و ابزارهای اصلی",
      },
      certificates: {
        badge: "VERIFIED SKILLS & DEGREES",
        title: "گواهینامه‌ها و مدارک",
        durationPrefix: "مدت:",
        scorePrefix: "نمره:",
        viewBtn: "مشاهده مدرک رسمی",
        items: [
          {
            title: "ReactJS",
            issuer: "مجتمع فنی تهران (دیباگران)",
            date: "دی ۱۴۰۴",
            duration: "۴۰ ساعت",
            score: "۹۳ از ۱۰۰",
            description: "تسلط بر مفاهیم فرانت‌اند مدرن، کامپوننت‌نویسی، مدیریت State و اتصال به API با React.",
            link: "#"
          },
          {
            title: "PHP & MYSQL Web Development",
            issuer: "مجتمع فنی تهران (دیباگران)",
            date: "دی ۱۴۰۴",
            duration: "۸۰ ساعت",
            score: "۹۰ از ۱۰۰",
            description: "برنامه‌نویسی سمت سرور، مدیریت پایگاه داده MySQL و پیاده‌سازی پلتفرم‌های پویا.",
            link: "#"
          },
          {
            title: "Web Design Pack",
            issuer: "مجتمع فنی تهران (دیباگران)",
            date: "مرداد ۱۴۰۴",
            duration: "۱۵۰ ساعت",
            score: "۹۰ از ۱۰۰",
            description: "دوره جامع طراحی وب شامل HTML5, CSS3, JavaScript و اصول ساخت صفحات واکنش‌گرا.",
            link: "#"
          },
          {
            title: "Programming with Python",
            issuer: "مجتمع فنی تهران (دیباگران)",
            date: "خرداد ۱۴۰۳",
            duration: "۶۰ ساعت",
            score: "۶۷ از ۱۰۰",
            description: "برنامه‌نویسی پایه و پیشرفته پایتون، تحلیل داده و تفکر الگوریتمی.",
            link: "#"
          }
        ]
      },
      skills: {
        title: "مهارت‌ها و استک فنی",
        categories: [
          {
            title: 'توسعه فرانت‌اند و اکوسیستم React',
            badge: 'تخصص اصلی',
            skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Responsive Design', 'RTL / LTR Architecture', 'RESTful APIs']
          },
          {
            title: 'تکنولوژی‌ها و ابزارهای توسعه',
            badge: 'ورک‌فلو و گیت',
            skills: ['Git & GitHub', 'VS Code', 'npm / yarn', 'Chrome DevTools', 'AI-Driven Workflows']
          },
          {
            title: 'آشنایی و درک سمت سرور',
            badge: 'بک‌اند و دیتابیس',
            skills: ['Node.js', 'Python', 'FastAPI', 'PHP', 'MySQL']
          }
        ]
      },
      projects: {
        title: "پروژه‌های شاخص",
        githubTooltip: "مشاهده سورس گیت‌هاب",
        demoTooltip: "پیش‌نمایش زنده",
        items: [
          {
            title: "Digikala UI Clone",
            description: "پیاده‌سازی کامل و پاسخ‌گوی (Responsive) رابط کاربری دیجی‌کالا با تمرکز روی فرانت‌اند مدرن، چیدمان‌های پیچیده و پشتیبانی کاملا راست‌چین (RTL).",
            tags: ["React", "Tailwind CSS", "Vite", "RTL Layout"],
            github: "https://github.com/KasraShakib/Digikala-UI-Clone",
            demo: "#",
          },
          {
            title: "IMDme Sample Project",
            description: "پروژه نمونه مشابه IMDb جهت دریافت داده‌های فیلم‌ها از طریق اتصال به REST API، فیلتر پیشرفته و نمایش ساختاریافته محتوا.",
            tags: ["React", "REST API", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/KasraShakib/IMDme_sample-project",
            demo: "#",
          },
          {
            title: "Goldtag UI Sample",
            description: "بازسازی معماری کامپوننت‌ها و UI سیستم فروشگاهی با ساختار تمیز و پویا جهت تمرین پیاده‌سازی پروژه‌های e-commerce.",
            tags: ["React", "CSS Modules", "UI Architecture"],
            github: "https://github.com/KasraShakib/Goldtag-sample-project",
            demo: "#",
          },
        ]
      },
      contact: {
        title: "راه‌های ارتباطی",
        subtitle: "برای همکاری و گفتگو می‌توانید از راه‌های زیر با من در تماس باشید",
        phoneLabel: "شماره تماس",
        emailLabel: "ایمیل",
        githubLabel: "گیت‌هاب",
        locationLabel: "موقعیت مکانی",
        locationValue: "ایران، تهران / تبریز"
      }
    },
  },
  en: {
    translation: {
      nav: {
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
      },
      about: {
        status: "Available for Front-End Roles & Projects",
        specialtyPrefix: "Specializing in:",
        contactBtn: "Get In Touch",
        githubBtn: "GitHub",
        title: "About Me",
        skillsTitle: "Core Technologies & Tools",
      },
      certificates: {
        badge: "VERIFIED SKILLS & DEGREES",
        title: "Certificates & Degrees",
        durationPrefix: "Duration:",
        scorePrefix: "Score:",
        viewBtn: "View Official Certificate",
        items: [
          {
            title: "ReactJS",
            issuer: "Tehran Technical Complex (Dibagaran)",
            date: "Jan 2026",
            duration: "40 Hours",
            score: "93 / 100",
            description: "Mastery of modern front-end concepts, component-driven architecture, state management, and API integration with React.",
            link: "#"
          },
          {
            title: "PHP & MYSQL Web Development",
            issuer: "Tehran Technical Complex (Dibagaran)",
            date: "Jan 2026",
            duration: "80 Hours",
            score: "90 / 100",
            description: "Server-side programming, MySQL database management, and building dynamic web platforms.",
            link: "#"
          },
          {
            title: "Web Design Pack",
            issuer: "Tehran Technical Complex (Dibagaran)",
            date: "Aug 2025",
            duration: "150 Hours",
            score: "90 / 100",
            description: "Comprehensive web design program covering HTML5, CSS3, JavaScript, and responsive design principles.",
            link: "#"
          },
          {
            title: "Programming with Python",
            issuer: "Tehran Technical Complex (Dibagaran)",
            date: "Jun 2024",
            duration: "60 Hours",
            score: "67 / 100",
            description: "Core and advanced Python programming, basic data structures, and algorithmic logic.",
            link: "#"
          }
        ]
      },
      skills: {
        title: "Skills & Tech Stack",
        categories: [
          {
            title: 'Front-End & React Ecosystem',
            badge: 'Core Specialty',
            skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'HTML5 / CSS3', 'Responsive Design', 'RTL / LTR Architecture', 'RESTful APIs']
          },
          {
            title: 'Development Tools & Workflow',
            badge: 'Workflow & Git',
            skills: ['Git & GitHub', 'VS Code', 'npm / yarn', 'Chrome DevTools', 'AI-Driven Workflows']
          },
          {
            title: 'Server-Side Familiarity',
            badge: 'Back-End & Database',
            skills: ['Node.js', 'Python', 'FastAPI', 'PHP', 'MySQL']
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        githubTooltip: "View GitHub Source",
        demoTooltip: "Live Preview",
        items: [
          {
            title: "Digikala UI Clone",
            description: "A fully responsive UI clone of Digikala focusing on modern front-end practices, complex layouts, and native RTL support.",
            tags: ["React", "Tailwind CSS", "Vite", "RTL Layout"],
            github: "https://github.com/KasraShakib/Digikala-UI-Clone",
            demo: "#",
          },
          {
            title: "IMDme Sample Project",
            description: "An IMDb-style sample project fetching movie data via REST API integration, featuring advanced filtering and structured display.",
            tags: ["React", "REST API", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/KasraShakib/IMDme_sample-project",
            demo: "#",
          },
          {
            title: "Goldtag UI Sample",
            description: "Recreating store UI and component architecture with a clean, dynamic structure to practice e-commerce development patterns.",
            tags: ["React", "CSS Modules", "UI Architecture"],
            github: "https://github.com/KasraShakib/Goldtag-sample-project",
            demo: "#",
          },
        ]
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Feel free to reach out through any of the channels below for collaboration or inquiries.",
        phoneLabel: "Phone Number",
        emailLabel: "Email",
        githubLabel: "GitHub",
        locationLabel: "Location",
        locationValue: "Iran, Tehran / Tabriz"
      }
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fa',
    interpolation: {
      escapeValue: false,
    },
  });

const updateDocumentAttributes = (lng) => {
  const isPersian = lng?.startsWith('fa');
  document.documentElement.dir = isPersian ? 'rtl' : 'ltr';
  document.documentElement.lang = isPersian ? 'fa' : 'en';
};

updateDocumentAttributes(i18n.language);
i18n.on('languageChanged', (lng) => {
  updateDocumentAttributes(lng);
});

export default i18n;