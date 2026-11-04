import React, { useState, useMemo } from 'react';
import { Search, Code2, Server, Layout, Database, Brain, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES, searchSkills } from '../utils/portfolio-data';
import { SkillLevel } from '../types/portfolio';

export const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    return searchSkills(SKILL_CATEGORIES, searchQuery);
  }, [searchQuery]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-purple-400" />;
      case 'tools-databases':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'core':
        return <Brain className="w-5 h-5 text-indigo-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-400" />;
    }
  };

  const getLevelBadgeClass = (level: SkillLevel) => {
    switch (level) {
      case 'Expert':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'Advanced':
        return 'text-sky-400 bg-sky-500/10 border-sky-500/20';
      case 'Proficient':
        return 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20';
      case 'Intermediate':
        return 'text-slate-400 bg-slate-800 border-slate-700/60';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-24 border-t border-slate-800/80 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Skills & Technologies
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-2xl">
              A structured technical overview of my engineering toolkit across modern languages, distributed backends, frontends, and core CS fundamentals.
            </p>
          </div>

          {/* Interactive Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. React, SQL)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all font-mono text-xs"
              aria-label="Filter skills by keyword"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>
        </motion.div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="bg-slate-900/40 rounded-2xl p-6 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80">
                    <div className="p-2.5 rounded-xl bg-slate-800/70 border border-slate-700/50">
                      {getCategoryIcon(category.id)}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List matching Vidyansh reference structure */}
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/70 hover:bg-slate-800/60 border border-slate-800/60 transition-colors"
                      >
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md border font-medium ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-slate-600">• Production Ready</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/20">
            <p className="text-slate-400 font-mono text-sm">
              No skills found matching "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs font-mono text-sky-400 hover:underline"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
