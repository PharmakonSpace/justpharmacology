import React, { useState, useEffect } from 'react';

const STAGES = [
  {
    step: 'S',
    name: 'Setting',
    tagline: 'Physical Engineering & SOLER Framework',
    icon: '🪑',
    metricLabel: 'Hierarchy Neutralization',
    metricValue: '100%',
    details: [
      'Bypass physical barriers (desks) for a collaborative lateral triangle.',
      'Achieve horizontal par with the patient’s eye level.',
      'Apply SOLER: Squarely face, Open posture, Lean in, Eye contact, Relax.'
    ],
    badApproach: 'Speaking downward across a desk, reinforcing clinical hierarchy.',
    goodApproach: 'Lateral positioning to construct an emotional safety container.'
  },
  {
    step: 'P',
    name: 'Perception',
    tagline: 'Measuring Expectation vs. Reality',
    icon: '📊',
    metricLabel: 'Cognitive Gap Assessment',
    metricValue: 'Active',
    details: [
      'Ask open questions: "What is your understanding of your condition so far?"',
      'Surface hidden blind spots (e.g., patient expecting a 100% cure after past surgery).',
      'Calibrate disclosure pace based on the identified gap.'
    ],
    badApproach: 'Blasting test results before knowing what the patient expects.',
    goodApproach: 'Measuring expectations first to avoid colliding with existing beliefs.'
  },
  {
    step: 'I',
    name: 'Invitation',
    tagline: 'Autonomy & Information Pacing',
    icon: '✉️',
    metricLabel: 'Patient Control',
    metricValue: 'High',
    details: [
      'Directly ask how much technical detail they wish to receive.',
      'Differentiate between patients who want full biological mechanics vs. macro steps.',
      'Prevent iatrogenic harm from unwanted data dumping.'
    ],
    badApproach: 'Assuming every patient wants a 20-minute pathology breakdown.',
    goodApproach: 'Tailoring the level of detail strictly to patient preference.'
  },
  {
    step: 'K',
    name: 'Knowledge',
    tagline: 'The Ask-Tell-Ask Loop',
    icon: '🧠',
    metricLabel: 'Bandwidth Protection',
    metricValue: 'Optimal',
    details: [
      'Deliver a warning shot: "I am afraid I have some difficult news to share."',
      'Chunk data into small, plain-language discrete blocks.',
      'Force frequent pauses to check understanding before moving to the next chunk.'
    ],
    badApproach: 'Filling silent gaps with rapid-fire medical jargon.',
    goodApproach: 'Chunking information to bypass natural cognitive overload.'
  },
  {
    step: 'E',
    name: 'Emotions',
    tagline: 'Trauma De-escalation (NURSE Model)',
    icon: '❤️',
    metricLabel: 'Autonomic Panic State',
    metricValue: 'Contained',
    details: [
      'Recognize sympathetic nervous system freeze/panic (hard stop).',
      'Deploy NURSE: Naming, Understanding, Respecting, Supporting, Exploring.',
      'Emotion dictates pacing; never advance to strategy during panic.'
    ],
    badApproach: 'Explaining treatment plans while the patient is in panic mode.',
    goodApproach: 'Algorithmic containment of trauma before discussing options.'
  },
  {
    step: 'S',
    name: 'Strategy',
    tagline: 'Restoring Agency & Next Steps',
    icon: '🗺️',
    metricLabel: 'Therapeutic Alliance',
    metricValue: 'Established',
    details: [
      'Co-author the path forward once de-escalation is achieved.',
      'Provide written materials for details that fade from memory.',
      'Ensure a clear, structured follow-up plan is finalized.'
    ],
    badApproach: 'Ending the consultation without concrete next steps.',
    goodApproach: 'Replacing helpless terror with a structured sense of agency.'
  }
];

export default function Spikes() {
  const [activeTab, setActiveTab] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % STAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [playing]);

  const current = STAGES[activeTab];

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.25rem',
      background: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      margin: '1.5rem 0',
      fontFamily: 'sans-serif'
    }}>
      {/* Header Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <b style={{ fontSize: '1.1rem', color: '#0f172a' }}>SPIKES Protocol: Algorithmic Empathy</b>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Click a stage or press Play to navigate steps.</p>
        </div>
        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#2563eb', background: '#eff6ff', padding: '4px 10px', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
          INTERACTIVE
        </span>
      </div>

      {/* Step Buttons Track */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px', marginBottom: '1.25rem' }}>
        {STAGES.map((s, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={s.step + idx}
              onClick={() => { setActiveTab(idx); setPlaying(false); }}
              style={{
                border: isActive ? '2px solid #2563eb' : '1px solid #cbd5e1',
                background: isActive ? '#3b82f6' : '#f8fafc',
                color: isActive ? '#ffffff' : '#334155',
                padding: '8px 2px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{s.step}</div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: isActive ? 1 : 0.7 }}>{s.name}</div>
            </button>
          );
        })}
      </div>

      {/* Main Details Card */}
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '1.75rem', background: '#ffffff', padding: '6px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            {current.icon}
          </span>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#1e293b' }}>
              Step {activeTab + 1}: {current.step} — {current.name}
            </h4>
            <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b' }}>{current.tagline}</p>
          </div>
        </div>

        {/* Metric */}
        <div style={{ background: '#ffffff', padding: '8px 12px', borderRadius: '6px', marginBottom: '0.75rem', border: '1px solid #e2e8f0', display: 'inline-block' }}>
          <span style={{ fontSize: '0.7rem', color: '#64748b', display: 'block' }}>{current.metricLabel}</span>
          <strong style={{ fontSize: '0.9rem', color: '#2563eb' }}>{current.metricValue}</strong>
        </div>

        {/* Action Directives */}
        <ul style={{ margin: '0 0 0.75rem 0', paddingLeft: '1.2rem', color: '#334155', fontSize: '0.85rem', lineHeight: '1.5' }}>
          {current.details.map((detail, dIdx) => (
            <li key={dIdx} style={{ marginBottom: '3px' }}>{detail}</li>
          ))}
        </ul>

        {/* Right vs Wrong */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.75rem' }}>
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '6px 10px', borderRadius: '6px', color: '#991b1b' }}>
            <strong>❌ Traditional Trap:</strong> {current.badApproach}
          </div>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 10px', borderRadius: '6px', color: '#166534' }}>
            <strong>✅ SPIKES Standard:</strong> {current.goodApproach}
          </div>
        </div>
      </div>

      {/* Control Buttons (Standard React Controls) */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button
          onClick={() => { setActiveTab(0); setPlaying(false); }}
          style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', cursor: 'pointer' }}
        >
          Reset
        </button>
        <button
          onClick={() => setPlaying((v) => !v)}
          style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #2563eb', background: playing ? '#2563eb' : '#ffffff', color: playing ? '#ffffff' : '#2563eb', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button
          disabled={activeTab === STAGES.length - 1}
          onClick={() => { setActiveTab((v) => Math.min(STAGES.length - 1, v + 1)); setPlaying(false); }}
          style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', background: activeTab === STAGES.length - 1 ? '#f1f5f9' : '#ffffff', cursor: activeTab === STAGES.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Next step →
        </button>
      </div>
    </div>
  );
}
