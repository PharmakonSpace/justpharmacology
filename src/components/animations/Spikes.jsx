import React, { useState } from 'react';

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

export default function SpikesInteractiveAnimation() {
  const [activeTab, setActiveTab] = useState(0);
  const current = STAGES[activeTab];

  return (
    <div style={{
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.5rem',
      background: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      margin: '1.5rem 0'
    }}>
      {/* Header Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', color: '#2563eb', background: '#eff6ff', padding: '4px 12px', borderRadius: '20px' }}>
          INTERACTIVE FLOWCHART
        </span>
        <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
          Stage {activeTab + 1} of 6
        </span>
      </div>

      <h3 style={{ margin: '0 0 1rem 0', color: '#0f172a' }}>
        SPIKES Protocol: Algorithmic Empathy Pathway
      </h3>

      {/* Interactive Step Navigator */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', marginBottom: '1.5rem' }}>
        {STAGES.map((s, idx) => {
          const isActive = idx === activeTab;
          return (
            <button
              key={s.step + idx}
              onClick={() => setActiveTab(idx)}
              style={{
                border: isActive ? '2px solid #2563eb' : '1px solid #cbd5e1',
                background: isActive ? '#3b82f6' : '#f8fafc',
                color: isActive ? '#ffffff' : '#334155',
                padding: '10px 4px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{s.step}</div>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', opacity: isActive ? 0.9 : 0.7 }}>{s.name}</div>
            </button>
          );
        })}
      </div>

      {/* Active Stage Card Visualizer */}
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
          <div style={{ fontSize: '2rem', background: '#ffffff', padding: '8px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            {current.icon}
          </div>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.2rem', color: '#1e293b' }}>
              {current.step} — {current.name}
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              {current.tagline}
            </p>
          </div>
        </div>

        {/* Dynamic Metric Display */}
        <div style={{ display: 'flex', gap: '1rem', background: '#ffffff', padding: '10px 14px', borderRadius: '8px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748b', display: 'block' }}>{current.metricLabel}</span>
            <strong style={{ fontSize: '1rem', color: '#2563eb' }}>{current.metricValue}</strong>
          </div>
        </div>

        {/* Actionable Clinical Directives */}
        <ul style={{ margin: '0 0 1rem 0', paddingLeft: '1.2rem', color: '#334155', fontSize: '0.9rem', lineHeight: '1.6' }}>
          {current.details.map((detail, dIdx) => (
            <li key={dIdx} style={{ marginBottom: '4px' }}>{detail}</li>
          ))}
        </ul>

        {/* Contrast Breakdown: Wrong vs Right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.8rem' }}>
          <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '8px 12px', borderRadius: '6px', color: '#991b1b' }}>
            <strong>❌ Traditional Trap:</strong> {current.badApproach}
          </div>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '8px 12px', borderRadius: '6px', color: '#166534' }}>
            <strong>✅ SPIKES Standard:</strong> {current.goodApproach}
          </div>
        </div>
      </div>

      {/* Control Navigation Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button
          disabled={activeTab === 0}
          onClick={() => setActiveTab((prev) => prev - 1)}
          className="btn secondary"
          style={{ opacity: activeTab === 0 ? 0.5 : 1, cursor: activeTab === 0 ? 'not-allowed' : 'pointer' }}
        >
          ← Previous Stage
        </button>
        <button
          disabled={activeTab === STAGES.length - 1}
          onClick={() => setActiveTab((prev) => prev + 1)}
          className="btn primary"
          style={{ opacity: activeTab === STAGES.length - 1 ? 0.5 : 1, cursor: activeTab === STAGES.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Next Stage →
        </button>
      </div>
    </div>
  );
}
