import React from 'react';
import { Mail, Github, Linkedin, MapPin, Terminal, Code2, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/portfolio-data';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Subtle radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col items-start space-y-6"
          >
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{PERSONAL_INFO.availabilityBadge}</span>
            </motion.div>

            {/* Giant Typographic Name (Signature style like reference site) */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05]">
                Ayush Kumar
              </h1>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-slate-700/80 leading-[1.05] select-none">
                Mahato
              </div>
            </div>

            {/* Pitch Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Software Engineer building the next generation of{' '}
              <span className="text-white font-semibold italic">scalable architectures</span>,{' '}
              <span className="text-white font-semibold italic">responsive web systems</span>, and{' '}
              <span className="text-sky-400 font-semibold italic">open-source software</span>.
            </p>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 w-full sm:w-auto pt-2">
              <a
                href="#contact"
                className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-900" />
                <span>Hire Ayush</span>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>Source Code</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Metadata Tags / Location & Specialty */}
            <div className="flex flex-wrap items-center gap-3 pt-4 text-xs font-mono text-slate-400 border-t border-slate-800/80 w-full max-w-xl">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{PERSONAL_INFO.location} (Remote / Relocation)</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{PERSONAL_INFO.specialty}</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Open Source</span>
              </div>
            </div>

          </motion.div>

          {/* Right Hero Column: Visual Developer Portrait Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative subtle card shadow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/20 to-indigo-500/20 blur-xl opacity-70" />
              
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-3 sm:p-4 border border-slate-800 shadow-2xl">
                
                {/* Developer Image Container */}
                <div className="relative aspect-[4/4.5] sm:aspect-[4/4.6] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 group flex flex-col justify-between p-4">
                  
                  {/* Background identicon image with subtle tech grid overlay */}
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-30 contrast-125 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500"
                    loading="eager"
                  />
                  
                  {/* Gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14] via-[#0b0d14]/60 to-transparent pointer-events-none" />

                  {/* Top floating pill: GitHub status */}
                  <div className="relative z-10 self-start bg-[#0b0d14]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700/60 flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-slate-200">github.com/ayushirl</span>
                  </div>

                  {/* Center Monogram / Engineer Badge for personal branding */}
                  <div className="relative z-10 flex flex-col items-center justify-center py-6 text-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-500/20 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center shadow-xl backdrop-blur-md mb-3 group-hover:border-sky-400/60 transition-colors">
                      <span className="font-mono text-3xl font-black text-white">AKM</span>
                    </div>
                    <div className="text-sm font-bold text-white tracking-wide">
                      Ayush Kumar Mahato
                    </div>
                    <div className="text-xs font-mono text-sky-400">
                      Software Engineer • Full Stack
                    </div>
                  </div>

                  {/* Bottom right floating pill: LinkedIn 'Let's Connect' */}
                  <div className="relative z-10 flex items-center justify-between w-full pt-2">
                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-800">
                      Open to Work
                    </div>

                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-slate-900 px-3.5 py-2 rounded-xl shadow-xl hover:bg-slate-100 flex items-center gap-2.5 transition-transform hover:scale-105 cursor-pointer"
                      aria-label="LinkedIn profile connection"
                    >
                      <div className="bg-[#0a66c2] text-white p-1 rounded-md">
                        <Linkedin className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500 leading-none">
                          LinkedIn
                        </div>
                        <div className="text-xs font-bold leading-tight">
                          Let's Connect
                        </div>
                      </div>
                    </a>
                  </div>

                </div>

                {/* Card footer micro info */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Engineered with React & TypeScript</span>
                  <span className="text-sky-400">v2.0</span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll down indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors p-2"
            aria-label="Scroll down to About section"
          >
            <span>Explore Engineering Profile</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-sky-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
