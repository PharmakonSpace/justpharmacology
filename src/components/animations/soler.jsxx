import React, { useState, useEffect } from 'react';

const SOLER_STEPS = [
  {
    letter: 'S',
    name: 'Square',
    icon: '📐',
    tagline: 'Undivided Focus & Alignment',
    summary: 'Position shoulders parallel to the speaker or angle chairs at 90° to avoid feeling overly aggressive while maintaining clear focus.',
    details: [
      'Position shoulders parallel to the patient to signal undivided attention.',
      'If face-to-face feels too intense, place chairs at a 90° angle (e.g., desk corner).',
      'Eliminates body language that suggests you are looking for an exit.'
    ],
    pitfall: 'Sitting sideways or facing toward a computer screen.'
  },
  {
    letter: 'O',
    name: 'Open',
    tagline: 'Removing Defensive Barriers',
    icon: '👐',
    summary: 'Uncross arms and legs. Deliberately override internal discomfort or cold-room instincts so patients don’t feel shut out.',
    details: [
      'Rest hands naturally on your lap or loosely at your sides.',
      'Overcomes natural self-protective cues (crossed arms equal an emotional wall).',
      'Establishes an initial baseline of equality and accessibility.'
    ],
    pitfall: 'Crossing arms because of room temperature—patients misinterpret it as rejection.'
  },
  {
    letter: 'L',
    name: 'Lean',
    tagline: 'Demonstrating Active Interest',
    icon: '📐',
    summary: 'Hinge slightly forward from the waist. Stay outside the intimate 45 cm boundary to avoid invading personal space.',
    details: [
      'Hinge forward a few degrees from the waist to demonstrate engagement.',
      'Respect the 45 cm proxemic boundary.',
      'Crossing closer than 45 cm transforms interest into an intimidating invasion.'
    ],
    pitfall: 'Leaning too far forward (< 45 cm), causing patient to physically retreat.'
  },
  {
    letter: 'E',
    name: 'Eye Contact',
    tagline: 'Respectful, Non-Intimidating Focus',
    icon: '👁️',
    summary: 'Maintain soft, natural eye contact paired with occasional nods. Look down deliberately for notes, then look back up to reconnect.',
    details: [
      'Maintain a soft gaze with natural blinking rather than an unbroken stare.',
      'Pair eye contact with gentle nods to confirm comprehension.',
      'When reviewing notes, look down deliberately and return eyes immediately to re-engage.'
    ],
    pitfall: 'Unbroken intensity (staring) or staying glued to electronic medical records.'
  },
  {
    letter: 'R',
    name: 'Relax',
    tagline: 'Somatic Coregulation',
    icon: '🧘',
    summary: 'Drop shoulders away from ears and soften facial muscles to avoid robotic stiffness and regulate patient distress.',
    details: [
      'Take a subtle breath, release jaw tension, and lower shoulders away from ears.',
      'Prevents "robotic posture"—stiffness that patients read as anxiety or rushing.',
      'Signals safety to the patient’s nervous system, helping ease acute emotional distress.'
    ],
    pitfall: 'Stiff, hyper-focused posture that makes the clinician look anxious or rushed.'
  }
];

export default function SolerAnimation() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % SOLER_STEPS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const current = SOLER_STEPS[activeStep];

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
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <b style={{ fontSize: '1.1rem', color: '#0f172a' }}>SOLER Framework Interactive Model</b>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>Egan’s 5-Step Physical Blueprint for Active Listening</p>
        </div>
        <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#16a34a', background: '#f0fdf4', padding: '4px 10px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
          INTERACTIVE
        </span>
      </div>

      {/* Track / Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px', marginBottom: '1.25rem' }}>
        {SOLER_STEPS.map((s, idx) => {
          const active = idx === activeStep;
          return (
            <button
              key={s.letter + idx}
              onClick={() => { setActiveStep(idx); setIsPlaying(false); }}
              style={{
                border: active ? '2px solid #16a34a' : '1px solid #cbd5e1',
                background: active ? '#22c55e' : '#f8fafc',
                color: active ? '#ffffff' : '#334155',
                padding: '10px 4px',
                borderRadius: '8px',
                cursor: 'pointer',
                textAlign: 'center',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{s.letter}</div>
              <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: active ? 1 : 0.8 }}>{s.name}</div>
            </button>
          );
        })}
      </div>

      {/* Main Card */}
      <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2rem', background: '#ffffff', padding: '6px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            {current.icon}
          </span>
          <div>
            <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#1e293b' }}>
              Step {activeStep + 1}: {current.letter} — {current.name}
            </h4>
            <p style={{ margin: 0, fontSize: '0.825rem', color: '#16a34a', fontWeight: 'bold' }}>{current.tagline}</p>
          </div>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.4', marginBottom: '0.75rem' }}>
          {current.summary}
        </p>

        {/* Action Directives */}
        <ul style={{ margin: '0 0 0.75rem 0', paddingLeft: '1.2rem', color: '#475569', fontSize: '0.85rem', lineHeight: '1.5' }}>
          {current.details.map((detail, dIdx) => (
            <li key={dIdx} style={{ marginBottom: '3px' }}>{detail}</li>
          ))}
        </ul>

        {/* Warning Pitfall */}
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '8px 12px', borderRadius: '6px', color: '#991b1b', fontSize: '0.8rem' }}>
          <strong>⚠️ Clinical Pitfall:</strong> {current.pitfall}
        </div>
      </div>

      {/* Navigation Controls */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <button
          onClick={() => { setActiveStep(0); setIsPlaying(false); }}
          style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', background: '#ffffff', cursor: 'pointer' }}
        >
          Reset
        </button>
        <button
          onClick={() => setIsPlaying((v) => !v)}
          style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #16a34a', background: isPlaying ? '#16a34a' : '#ffffff', color: isPlaying ? '#ffffff' : '#16a34a', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          disabled={activeStep === SOLER_STEPS.length - 1}
          onClick={() => { setActiveStep((v) => Math.min(SOLER_STEPS.length - 1, v + 1)); setIsPlaying(false); }}
          style={{ padding: '6px 14px', borderRadius: '6px', border: '1px solid #cbd5e1', background: activeStep === SOLER_STEPS.length - 1 ? '#f1f5f9' : '#ffffff', cursor: activeStep === SOLER_STEPS.length - 1 ? 'not-allowed' : 'pointer' }}
        >
          Next step →
        </button>
      </div>
    </div>
  );
}
