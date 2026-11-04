import React from 'react';
import { Layers, Cpu, GitPullRequest, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative bg-[#090b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PHILOSOPHY & PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              The Engineer
            </h2>
            <p className="mt-4 text-slate-400 text-base leading-relaxed">
              Engineering is more than writing code—it's about designing resilient systems that solve real-world problems at scale.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Full-Stack Architecture
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Open Source Contributor
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                Algorithmic Thinking
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-800/80 relative"
          >
            <div className="text-sky-400 font-mono text-sm tracking-wide uppercase mb-3">
              Guiding Principle
            </div>
            <blockquote className="text-xl sm:text-2xl font-medium text-slate-100 leading-snug italic border-l-2 border-sky-400 pl-4 mb-6">
              {PERSONAL_INFO.quote}
            </blockquote>
            <p className="text-slate-300 leading-relaxed mb-4">
              {PERSONAL_INFO.bioParagraph1}
            </p>
            <p className="text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bioParagraph2}
            </p>

            <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-3">
              <div className="text-xs font-mono text-slate-400">
                <span className="text-slate-500">Current Focus:</span>{' '}
                <span className="text-white font-semibold">Distributed Systems & High-Performance Web Apps</span>
              </div>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sky-400 hover:text-sky-300 underline underline-offset-4"
              >
                Inspect GitHub Commits &rarr;
              </a>
            </div>
          </motion.div>
        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Modern Full-Stack</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Writing strongly-typed React and TypeScript on the frontend paired with clean Express and Node.js REST services and optimized relational data layers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <GitPullRequest className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Open Source Citizen</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Active contributions to global open-source ecosystems, strictly adhering to community standards, documentation precision, and collaborative git flows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 hover:border-slate-700 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Algorithmic Rigor</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Strong grounding in time-and-space complexity analysis, tree traversals, dynamic programming, and data structure fundamentals for robust problem solving.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
