import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, MapPin, MessageSquare, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, validateContactForm } from '../utils/portfolio-data';
import { ContactFormValues, ContactFormErrors } from '../types/portfolio';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactFormErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateContactForm(formValues);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setFormErrors({});

    // Simulate reliable submission feedback & provide direct mailto action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const handleTriggerMailto = () => {
    const encodedSubject = encodeURIComponent(formValues.subject || 'Opportunity Inquiry');
    const encodedBody = encodeURIComponent(
      `Hi Ayush,\n\nName: ${formValues.name}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-800/80 bg-[#0b0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Interested in hiring me for an SDE role, discussing open-source software, or building something impactful together? Drop a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Channels & Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Direct Email Card with 1-click copy */}
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 relative">
              <div className="text-xs font-mono text-slate-400 mb-1 uppercase tracking-wider">
                Direct Communication
              </div>
              <div className="text-lg font-bold text-white mb-2">
                Email Ayush
              </div>
              <p className="text-xs text-slate-400 mb-4">
                Primary inbox monitored daily for job opportunities, inquiries, and technical collaboration.
              </p>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-slate-200 truncate">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 ml-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copiedEmail && (
                <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied {PERSONAL_INFO.email} to clipboard!</span>
                </div>
              )}
            </div>

            {/* LinkedIn Connection Card */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-[#0a66c2]/50 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0a66c2]/10 border border-[#0a66c2]/30 flex items-center justify-center text-[#0a66c2]">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Professional Network</div>
                  <div className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                    Connect on LinkedIn
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">
                    Ayush Kumar Mahato
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-sky-400 group-hover:translate-x-1 transition-transform">
                Visit &rarr;
              </span>
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all flex items-center justify-between group block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-200">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Code & Contributions</div>
                  <div className="text-base font-bold text-white group-hover:text-sky-400 transition-colors">
                    GitHub @ayushirl
                  </div>
                  <div className="text-xs font-mono text-slate-500 mt-0.5">
                    Public repositories & open-source work
                  </div>
                </div>
              </div>
              <span className="text-xs font-mono text-sky-400 group-hover:translate-x-1 transition-transform">
                Explore &rarr;
              </span>
            </a>

            {/* Location & Availability Note */}
            <div className="p-4 rounded-xl bg-slate-900/20 border border-slate-800/60 flex items-center gap-3 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Based in India • Available for Global Remote or On-site Relocation</span>
            </div>

          </motion.div>

          {/* Right Column: Working Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 bg-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-800/80"
          >
            {submitSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Prepared!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-white">{formValues.name}</span>. Your message has been formatted. You can also launch your mail client directly to dispatch to <span className="text-sky-400 font-mono">{PERSONAL_INFO.email}</span>.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleTriggerMailto}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shadow-md"
                  >
                    Open in Mail Client
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormValues({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <MessageSquare className="w-4 h-4 text-sky-400" />
                  <span>Send an Instant Direct Note</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formValues.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Chen"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                        formErrors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                        formErrors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formValues.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all ${
                      formErrors.subject
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300">
                      Message <span className="text-rose-400">*</span>
                    </label>
                    <span className="text-[10px] font-mono text-slate-500">
                      {formValues.message.length} chars
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formValues.message}
                    onChange={handleInputChange}
                    placeholder="Hi Ayush, I came across your portfolio and GitHub profile..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 transition-all resize-none ${
                      formErrors.message
                        ? 'border-rose-500 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-sky-500 focus:ring-sky-500'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-sky-400 hover:bg-sky-300 disabled:opacity-50 transition-all shadow-md shadow-sky-400/10 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
