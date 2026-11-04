import React from 'react';
import { Briefcase, GitBranch, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { EXPERIENCES, PERSONAL_INFO } from '../utils/portfolio-data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-slate-800/80 bg-[#090b11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono font-medium mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>TRACK RECORD & CONTRIBUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              On the Field
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl">
              Practical engineering experience across open-source codebases, client-facing software, and end-to-end application development.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 group"
          >
            <span>Verify on GitHub Profile</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Experience Timeline Grid */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-slate-700/80 transition-all relative overflow-hidden"
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-500/50 via-indigo-500/30 to-transparent" />

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="inline-block text-xs font-mono font-semibold text-sky-400 tracking-wider mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-medium text-slate-400 mt-1">
                    {exp.organization}
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-md bg-slate-800 text-xs font-mono text-slate-300 border border-slate-700/60">
                  <GitBranch className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.type}</span>
                </div>
              </div>

              {/* Numbered Achievements List (Vidyansh Shukla style) */}
              <div className="space-y-3.5 mb-6">
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3.5">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 text-sky-400 border border-slate-700/80 text-xs font-mono font-bold flex items-center justify-center mt-0.5">
                      {pIdx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies Used Pills */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
