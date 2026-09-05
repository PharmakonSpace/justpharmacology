// PsychologicalFirstAid.jsx
import React, { useState } from 'react';

const PFA_STEPS = [
  {
    step: 1,
    title: 'Clear the Noise',
    tagline: 'Reduce Environmental & Cognitive Interference',
    icon: '🔇',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    keyAction:
      'Immediately evaluate the physical room. Close the examination door, lower excessive fluorescent lighting, and mute non-critical alarm buzzers before verbal intake.',
    clinicalRationale:
      'Extreme emotional distress generates severe internal cognitive noise. Adding chaotic external auditory and visual stimuli saturates working memory, rendering the patient unable to decode clinical information.',
    clinicalCue: '“Let me close this door and turn down this monitor so we can have some quiet space together.”',
    contraindicated:
      'Attempting to shout clinical questions over noisy hallways or flashing diagnostic displays.'
  },
  {
    step: 2,
    title: 'Establish Physical Safety',
    tagline: 'Eye-Level Posture & Empathic Silence',
    icon: '🪑',
    color: '#0d9488',
    bg: '#f0fdfa',
    border: '#ccfbf1',
    keyAction:
      'Lower yourself to eye level with the patient. Sit down, keep hands relaxed, maintain open posture, and permit deliberate silence without demanding answers.',
    clinicalRationale:
      'Standing over a patient signals dominant task authority and triggers defensive sympathetic vigilance. Eye-level alignment and unhurried silence signal physiological safety.',
    clinicalCue: 'Sit down at 90° or eye level, soften facial tone, breathe steadily, and allow 5–10 seconds of calm presence before speaking.',
    contraindicated:
      'Towering over the gurney, clutching a clipboard defensively, and firing intake questions rapidly.'
  },
  {
    step: 3,
    title: 'Listen & Validate',
    tagline: 'Reflect Emotions Without Minimization',
    icon: '👂',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    keyAction:
      'Openly observe emotional tone and identify feelings aloud without judgment, diagnostic debate, or premature reassurance.',
    clinicalRationale:
      'Validation confirms the patient is perceived and respected. When patients feel emotionally recognized, their need to defend their distress dissipates.',
    clinicalCue: '“I can see how terrified and exhausted you feel right now after everything that just happened.”',
    contraindicated:
      'Offering hollow false reassurance: “Don’t worry, everything is going to be completely fine!”'
  },
  {
    step: 4,
    title: 'Comfort & Empower',
    tagline: 'Practical Comfort & Restoring Predictability',
    icon: '☕',
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    keyAction:
      'Provide tangible, non-demanding physical comfort (water, warm blanket) and establish crisp, predictable temporal boundaries for what will happen next.',
    clinicalRationale:
      'Distress is experienced as loss of control. Predictable, small physical acts and clear time expectations ground autonomic arousal and restore agency.',
    clinicalCue: '“Here is a warm blanket and water. I will give you 10 minutes of quiet, and then I will return to walk through our plan together.”',
    contraindicated:
      'Asking the overwhelmed patient to make complex decisions: “Do you want medication A or B, or should we schedule tests now?”'
  }
];

export default function PsychologicalFirstAidAnimation() {
  const [activeTab, setActiveTab] = useState(1);
  const [noiseLevel, setNoiseLevel] = useState(80); // 0 (calm/clear) to 100 (chaotic)
  const [activeMode, setActiveMode] = useState('sequence'); // 'sequence' | 'noiseSimulator' | 'dialogue'

  const currentStep = PFA_STEPS.find((s) => s.step === activeTab) || PFA_STEPS[0];

  // Calculated decoding efficiency based on noise level
  const decodingScore = Math.max(15, Math.round(100 - noiseLevel * 0.85));
  const channelStatus =
    noiseLevel > 65
      ? 'Severe Cognitive Noise: Decoding Blocked'
      : noiseLevel > 35
      ? 'Moderate Interference: Partial Comprehension'
      : 'Clear Channel: Optimal Clinical Engagement';

  const channelColor =
    noiseLevel > 65 ? '#ef4444' : noiseLevel > 35 ? '#f59e0b' : '#10b981';

  return (
    <div
      style={{
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '1.25rem',
        background: '#ffffff',
        boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
        margin: '1.5rem 0',
        fontFamily: 'inherit',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '1rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid #f1f5f9',
        }}
      >
        <div>
          <b style={{ fontSize: '1.15rem', color: '#0f172a' }}>
            Psychological First Aid (PFA) Protocol Simulator
          </b>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
            Acute Emotional Stabilization &amp; Information-Decoding Optimization
          </p>
        </div>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#0284c7',
            background: '#f0f9ff',
            padding: '4px 10px',
            borderRadius: '12px',
            border: '1px solid #bae6fd',
          }}
        >
          ACUTE STABILIZATION
        </span>
      </div>

      {/* Mode Selector */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '1.25rem',
          background: '#f8fafc',
          padding: '4px',
          borderRadius: '10px',
          border: '1px solid #e2e8f0',
        }}
      >
        <button
          type="button"
          onClick={() => setActiveMode('sequence')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: activeMode === 'sequence' ? '700' : '500',
            background: activeMode === 'sequence' ? '#ffffff' : 'transparent',
            color: activeMode === 'sequence' ? '#0f172a' : '#64748b',
            boxShadow: activeMode === 'sequence' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            cursor: 'pointer',
          }}
        >
          🛡️ 4-Step PFA Sequence
        </button>
        <button
          type="button"
          onClick={() => setActiveMode('noiseSimulator')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: activeMode === 'noiseSimulator' ? '700' : '500',
            background: activeMode === 'noiseSimulator' ? '#ffffff' : 'transparent',
            color: activeMode === 'noiseSimulator' ? '#0f172a' : '#64748b',
            boxShadow: activeMode === 'noiseSimulator' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            cursor: 'pointer',
          }}
        >
          📡 Noise &amp; Decoding Simulator
        </button>
        <button
          type="button"
          onClick={() => setActiveMode('dialogue')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: activeMode === 'dialogue' ? '700' : '500',
            background: activeMode === 'dialogue' ? '#ffffff' : 'transparent',
            color: activeMode === 'dialogue' ? '#0f172a' : '#64748b',
            boxShadow: activeMode === 'dialogue' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            cursor: 'pointer',
          }}
        >
          💬 Validation vs. False Reassurance
        </button>
      </div>

      {/* VIEW 1: 4-STEP PFA SEQUENCE */}
      {activeMode === 'sequence' && (
        <div>
          {/* Step Selector Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '1.25rem' }}>
            {PFA_STEPS.map((s) => {
              const active = s.step === activeTab;
              return (
                <button
                  type="button"
                  key={s.step}
                  onClick={() => setActiveTab(s.step)}
                  style={{
                    border: active ? `2px solid ${s.color}` : '1px solid #cbd5e1',
                    background: active ? s.bg : '#f8fafc',
                    color: active ? s.color : '#334155',
                    padding: '10px 6px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '1.15rem', marginBottom: '2px' }}>{s.icon}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Step {s.step}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{s.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div
            style={{
              background: '#f8fafc',
              border: `1px solid ${currentStep.border}`,
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontSize: '2rem',
                  background: '#ffffff',
                  padding: '8px 12px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                }}
              >
                {currentStep.icon}
              </span>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a' }}>
                  Step {currentStep.step}: {currentStep.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: currentStep.color, fontWeight: '700' }}>
                  {currentStep.tagline}
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px' }}>
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '10px 14px', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: currentStep.color, textTransform: 'uppercase', marginBottom: '4px' }}>
                  🎯 Immediate Clinical Action
                </div>
                <div style={{ fontSize: '0.875rem', color: '#1e293b', lineHeight: '1.4' }}>
                  {currentStep.keyAction}
                </div>
              </div>

              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '10px 14px', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#475569', textTransform: 'uppercase', marginBottom: '4px' }}>
                  🧠 Neurological / Cognitive Rationale
                </div>
                <div style={{ fontSize: '0.875rem', color: '#334155', lineHeight: '1.4' }}>
                  {currentStep.clinicalRationale}
                </div>
              </div>

              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '10px 14px', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#15803d', textTransform: 'uppercase', marginBottom: '4px' }}>
                  💬 What to Say or Do (Clinical Cue)
                </div>
                <div style={{ fontSize: '0.875rem', color: '#166534', fontStyle: 'italic', lineHeight: '1.4' }}>
                  {currentStep.clinicalCue}
                </div>
              </div>

              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '10px 14px', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#b91c1c', textTransform: 'uppercase', marginBottom: '4px' }}>
                  ⚠️ Roadblock to Avoid
                </div>
                <div style={{ fontSize: '0.875rem', color: '#991b1b', lineHeight: '1.4' }}>
                  {currentStep.contraindicated}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: NOISE & DECODING SIMULATOR */}
      {activeMode === 'noiseSimulator' && (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#0f172a' }}>
              The Shannon-Weaver Communication Model in Acute Distress
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              Adjust Environmental &amp; Cognitive Noise to observe patient information decoding efficiency
            </p>
          </div>

          {/* Flow Diagram */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '8px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '1.25rem',
              alignItems: 'center',
            }}
          >
            {/* Sender */}
            <div style={{ textAlign: 'center', padding: '8px', background: '#f0f9ff', borderRadius: '8px', border: '1px solid #bae6fd' }}>
              <div style={{ fontSize: '1.5rem' }}>👨‍⚕️</div>
              <strong style={{ fontSize: '0.8rem', color: '#0369a1' }}>Sender</strong>
              <div style={{ fontSize: '0.7rem', color: '#0284c7' }}>Clinical Provider</div>
            </div>

            <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 'bold', fontSize: '0.9rem' }}>➔</div>

            {/* Noise Channel */}
            <div
              style={{
                textAlign: 'center',
                padding: '8px',
                background: noiseLevel > 65 ? '#fef2f2' : noiseLevel > 35 ? '#fffbeb' : '#f0fdf4',
                borderRadius: '8px',
                border: `1px solid ${channelColor}`,
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>{noiseLevel > 65 ? '⚡📢' : noiseLevel > 35 ? '⚠️' : '🛡️🕊️'}</div>
              <strong style={{ fontSize: '0.8rem', color: channelColor }}>Channel Noise</strong>
              <div style={{ fontSize: '0.7rem', color: channelColor }}>Noise: {noiseLevel}%</div>
            </div>

            <div style={{ textAlign: 'center', color: '#94a3b8', fontWeight: 'bold', fontSize: '0.9rem' }}>➔</div>

            {/* Receiver */}
            <div style={{ textAlign: 'center', padding: '8px', background: '#fdf4ff', borderRadius: '8px', border: '1px solid #f0abfc' }}>
              <div style={{ fontSize: '1.5rem' }}>👤</div>
              <strong style={{ fontSize: '0.8rem', color: '#86198f' }}>Receiver</strong>
              <div style={{ fontSize: '0.7rem', color: '#a21caf' }}>Patient Decoding</div>
            </div>
          </div>

          {/* Slider */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>🕊️ Low Noise (PFA Applied)</span>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>📢 High Distraction &amp; Panic</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={noiseLevel}
              onChange={(e) => setNoiseLevel(Number(e.target.value))}
              style={{
                width: '100%',
                height: '8px',
                borderRadius: '5px',
                background: '#e2e8f0',
                outline: 'none',
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Metric Box */}
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              border: `1px solid ${channelColor}`,
              background: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <strong style={{ fontSize: '0.95rem', color: channelColor }}>{channelStatus}</strong>
              <span style={{ fontSize: '0.9rem', fontWeight: '800', color: channelColor }}>
                Comprehension: {decodingScore}%
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }}>
              {noiseLevel > 65 &&
                'Extreme internal and external sensory overload. The patient cannot retain symptom queries or instructions. Priority: Clear the noise and sit down at eye level.'}
              {noiseLevel >= 35 && noiseLevel <= 65 &&
                'Moderate interference. The patient catches fragments of speech but remains hypervigilant. Empathic silence and simple comfort restore clarity.'}
              {noiseLevel < 35 &&
                'Optimal emotional grounding. Environmental calm, open posture, and validation have cleared cognitive bandwidth. The patient is ready for structured clinical intake.'}
            </p>
          </div>
        </div>
      )}

      {/* VIEW 3: DIALOGUE CONTRAST */}
      {activeMode === 'dialogue' && (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#0f172a' }}>
              Clinical Dialogue Contrast: Validation vs. False Reassurance
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              Why minimizing fears backfires and how genuine validation calms autonomic panic
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '10px',
              padding: '12px 16px',
              marginBottom: '1rem',
            }}
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0284c7', textTransform: 'uppercase' }}>
              Distressed Patient in Emergency Room:
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '0.95rem', color: '#1e293b', fontStyle: 'italic' }}>
              “My heart is racing so fast, I can’t catch my breath, and nobody is telling me what is happening. Am I having a heart attack right now?!”
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {/* False Reassurance */}
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#b91c1c', marginBottom: '4px' }}>
                ❌ False Reassurance &amp; Dismissal
              </div>
              <p style={{ margin: '0 0 8px', fontSize: '0.875rem', color: '#991b1b', fontStyle: 'italic' }}>
                “You just need to calm down, you’re fine! Young people don’t have heart attacks. Stop hyperventilating and answer my questions.”
              </p>
              <div style={{ fontSize: '0.75rem', color: '#7f1d1d' }}>
                <strong>Impact:</strong> Invalidates the visceral physical sensation of dying, making the patient feel misunderstood and escalating tachycardia.
              </div>
            </div>

            {/* PFA Validation */}
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#15803d', marginBottom: '4px' }}>
                ✅ PFA Active Emotional Validation
              </div>
              <p style={{ margin: '0 0 8px', fontSize: '0.875rem', color: '#166534', fontStyle: 'italic' }}>
                “I hear how terrifying this is, and having your chest pound like that is frightening. I am right here with you. We have monitors on your heart right now, and you are in a safe place.”
              </p>
              <div style={{ fontSize: '0.75rem', color: '#14532d' }}>
                <strong>Impact:</strong> Acknowledges terror without lying, establishes immediate physical presence, and grounds the patient’s autonomic alarm.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
