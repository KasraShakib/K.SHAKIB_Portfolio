import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderCode, GitBranch } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectsSection() {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) || [];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden select-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 cursor-default"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-md">
          {t('projects.title')}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.8)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
        {projects.map((proj, idx) => (
          <motion.a
            key={proj.title}
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-2xl flex flex-col justify-between cursor-pointer group relative z-10 transform-gpu hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-500/20 text-indigo-300 rounded-2xl border border-indigo-500/30 group-hover:bg-indigo-500/30 transition-colors">
                  <FolderCode size={22} />
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="p-2 text-slate-300 group-hover:text-white bg-white/5 group-hover:bg-white/10 rounded-xl border border-white/10 transition-colors"
                    title={t('projects.githubTooltip')}
                  >
                    <GitBranch size={18} />
                  </div>
                  {proj.demo && proj.demo !== "#" && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(proj.demo, "_blank");
                      }}
                      className="p-2 text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors cursor-pointer"
                      title={t('projects.demoTooltip')}
                    >
                      <ExternalLink size={18} />
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-300/80 text-xs leading-relaxed mb-6">
                {proj.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10 mt-auto">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20 whitespace-nowrap"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}