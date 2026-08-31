// BiopsychosocialAnimation.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BiopsychosocialAnimation() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 'trigger',
      title: '1. Psychological Stress',
      sub: 'External / Cognitive Trigger',
      color: 'bg-amber-500',
      textColor: 'text-amber-500',
      borderColor: 'border-amber-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      desc: 'Cognitive perception of threat or chronic environmental stress activates the central nervous system.'
    },
    {
      id: 'cortisol',
      title: '2. Cortisol Surge',
      sub: 'Neuroendocrine Response',
      color: 'bg-rose-500',
      textColor: 'text-rose-500',
      borderColor: 'border-rose-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      desc: 'Adrenal glands release stress hormones (cortisol & adrenaline) into the bloodstream.'
    },
    {
      id: 'hypertension',
      title: '3. Sustained Hypertension',
      sub: 'Biological Consequence',
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      borderColor: 'border-purple-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      desc: 'Prolonged arterial constriction leads to chronic high blood pressure and systemic strain.'
    },
    {
      id: 'intervention',
      title: '4. Behavioral Intervention',
      sub: 'Biopsychosocial Solution',
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      borderColor: 'border-emerald-500',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      desc: 'Conditioning, reinforcement, and clinical therapy interrupt the cascade to restore equilibrium.'
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800">
      <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100">
            Neuroendocrine Cascade & Behavioral Intervention
          </h3>
          <p className="text-sm text-slate-400">
            Interactive visual model of stress-induced physiological changes
          </p>
        </div>
        <button
          onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          className="px-4 py-2 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors cursor-pointer"
        >
          Next Phase →
        </button>
      </div>

      {/* Process Step Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        {steps.map((s, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep > idx;

          return (
            <motion.div
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer p-4 rounded-xl border-2 transition-all relative ${
                isActive
                  ? `${s.borderColor} bg-slate-800`
                  : isPassed
                  ? 'border-slate-700 bg-slate-800/50 opacity-80'
                  : 'border-slate-800 bg-slate-950/40 opacity-50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
                <div className={`w-3 h-3 rounded-full ${isActive ? s.color : 'bg-slate-700'}`} />
              </div>
              <h4 className="text-sm font-semibold text-slate-200 leading-tight">
                {s.title.split('. ')[1]}
              </h4>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Animated Node Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row items-center gap-6"
        >
          {/* Animated Graphic Indicator */}
          <div className="relative flex items-center justify-center w-28 h-28 shrink-0">
            <motion.div
              animate={{
                scale: activeStep === 1 || activeStep === 2 ? [1, 1.15, 1] : 1
              }}
              transition={{
                repeat: Infinity,
                duration: activeStep === 2 ? 0.8 : 2
              }}
              className={`w-20 h-20 rounded-full ${steps[activeStep].color} flex items-center justify-center shadow-2xl`}
            >
              {steps[activeStep].icon}
            </motion.div>

            {(activeStep === 1 || activeStep === 2) && (
              <span
                className={`absolute inset-0 rounded-full animate-ping opacity-30 ${steps[activeStep].color}`}
              />
            )}
          </div>

          {/* Text Description */}
          <div className="flex-1 text-center md:text-left">
            <span className={`text-xs font-bold uppercase tracking-wider ${steps[activeStep].textColor}`}>
              {steps[activeStep].sub}
            </span>
            <h4 className="text-xl font-bold text-slate-100 mt-1">
              {steps[activeStep].title}
            </h4>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              {steps[activeStep].desc}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}