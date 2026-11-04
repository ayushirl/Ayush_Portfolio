import React from 'react';
import { GraduationCap, Award, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, RECOGNITIONS } from '../utils/portfolio-data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-t border-slate-800/80 bg-[#090b11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Foundation / Academic Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-medium mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
              Foundation
            </h2>

            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/40 rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-slate-700/80 transition-all relative overflow-hidden"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-purple-400 mb-2">
                    <span>{edu.period}</span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                      Undergraduate
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {edu.field}
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-1">
                    {edu.institution}
                  </div>
                  {edu.details && (
                    <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recognition / Milestones Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>MILESTONES & STANDARDS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
              Recognition
            </h2>

            <div className="space-y-4">
              {RECOGNITIONS.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="p-5 sm:p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-sky-400 shrink-0 mt-0.5">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
