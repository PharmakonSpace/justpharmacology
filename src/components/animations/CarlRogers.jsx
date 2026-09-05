// CarlRogers.jsx
import React, { useState } from 'react';

const CONDITIONS = [
  {
    id: 'congruence',
    letter: 'C',
    name: 'Congruence',
    subtitle: 'Genuineness & Transparency',
    icon: '🪞',
    color: '#0d9488',
    bg: '#f0fdfa',
    border: '#ccfbf1',
    concept:
      'The clinician is authentically themselves, transparent, and grounded without hiding behind an aloof professional mask or false reassurance.',
    clinicalBehavior:
      'Expresses authentic human reactions naturally; ensures non-verbal expressions align with spoken statements; avoids deceptive clinical personas.',
    exampleDialogue:
      '“I hear how overwhelming this diagnosis feels right now, and I want to be honest with you—this will take deliberate adjustment, and I will be walking through this with you step by step.”',
    contraindicatedAction:
      'Adopting a cold, detached academic facade or giving fake smiling reassurances that invalidate the gravity of the patient’s experience.'
  },
  {
    id: 'upr',
    letter: 'U',
    name: 'Unconditional Positive Regard',
    subtitle: 'Acceptance Without Judgment',
    icon: '🤝',
    color: '#3b82f6',
    bg: '#eff6ff',
    border: '#bfdbfe',
    concept:
      'Warm acceptance of the client as a person of unconditional human worth, free from moral judgment, evaluation, or conditional expectations.',
    clinicalBehavior:
      'Validates the patient’s lived reality and vulnerabilities without lecturing, scolding, or expressing disappointment over relapses or non-compliance.',
    exampleDialogue:
      '“You mentioned missing insulin doses when work becomes exhausting. Thank you for telling me that openly. We are not here to grade you—we are here to look at what got in the way and find an approach that works for your life.”',
    contraindicatedAction:
      'Scolding, moralizing, showing visible frustration, or demanding adherence purely to satisfy the clinician’s expectations.'
  },
  {
    id: 'empathy',
    letter: 'E',
    name: 'Accurate Empathy',
    subtitle: 'Sensing the Client’s Internal World',
    icon: '🧠',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    concept:
      'Accurately perceiving the client’s private internal frame of reference, feelings, and meanings as if they were one’s own, while retaining therapeutic grounding.',
    clinicalBehavior:
      'Uses reflective listening to clarify the patient’s emotional state, paraphrasing underlying fears without rushing to give hasty premature advice.',
    exampleDialogue:
      '“It sounds like it isn’t just the physical pain that scares you, but the fear of losing your independence and not being able to pick up your daughter.”',
    contraindicatedAction:
      'Premature solutioneering (“Just take the pills and you’ll feel fine”) or confusing empathy with hollow pity (“I feel so sorry for you”).'
  }
];

export default function CarlRogersAnimation() {
  const [activeTab, setActiveTab] = useState('congruence');
  const [alignmentScore, setAlignmentScore] = useState(30); // 0 = maximal incongruence, 100 = full congruence
  const [activeMode, setActiveMode] = useState('conditions'); // 'conditions' | 'incongruence' | 'dialogue'

  const currentCondition = CONDITIONS.find((c) => c.id === activeTab) || CONDITIONS[0];

  // Incongruence visual values
  const gapPixels = Math.round(110 * (1 - alignmentScore / 100));
  const distressLevel =
    alignmentScore < 35 ? 'Severe Incongruence & Anxiety' :
    alignmentScore < 70 ? 'Moderate Tension & Defensive Barriers' :
    'Harmonious Alignment & Self-Actualization';
  const distressColor =
    alignmentScore < 35 ? '#ef4444' :
    alignmentScore < 70 ? '#f59e0b' :
    '#10b981';

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
            Rogerian Humanistic &amp; Client-Centered Interactive Model
          </b>
          <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
            Self-Actualization, The Incongruence Gap &amp; The Three Core Conditions
          </p>
        </div>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#0d9488',
            background: '#f0fdfa',
            padding: '4px 10px',
            borderRadius: '12px',
            border: '1px solid #ccfbf1',
          }}
        >
          HUMANISTIC PSYCHOLOGY
        </span>
      </div>

      {/* Main Mode Switcher */}
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
          onClick={() => setActiveMode('conditions')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: activeMode === 'conditions' ? '700' : '500',
            background: activeMode === 'conditions' ? '#ffffff' : 'transparent',
            color: activeMode === 'conditions' ? '#0f172a' : '#64748b',
            boxShadow: activeMode === 'conditions' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            cursor: 'pointer',
          }}
        >
          🌱 3 Core Conditions
        </button>
        <button
          type="button"
          onClick={() => setActiveMode('incongruence')}
          style={{
            flex: 1,
            padding: '8px 12px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '0.85rem',
            fontWeight: activeMode === 'incongruence' ? '700' : '500',
            background: activeMode === 'incongruence' ? '#ffffff' : 'transparent',
            color: activeMode === 'incongruence' ? '#0f172a' : '#64748b',
            boxShadow: activeMode === 'incongruence' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none',
            cursor: 'pointer',
          }}
        >
          ⚖️ Incongruence Gap Simulator
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
          💬 Reflective vs. Paternalistic
        </button>
      </div>

      {/* VIEW 1: THE THREE CORE CONDITIONS */}
      {activeMode === 'conditions' && (
        <div>
          {/* Condition Selector Tabs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '1.25rem' }}>
            {CONDITIONS.map((c) => {
              const active = c.id === activeTab;
              return (
                <button
                  type="button"
                  key={c.id}
                  onClick={() => setActiveTab(c.id)}
                  style={{
                    border: active ? `2px solid ${c.color}` : '1px solid #cbd5e1',
                    background: active ? c.bg : '#f8fafc',
                    color: active ? c.color : '#334155',
                    padding: '12px 8px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <div style={{ fontSize: '1.25rem', marginBottom: '2px' }}>{c.icon}</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{c.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#64748b' }}>({c.letter})</div>
                </button>
              );
            })}
          </div>

          {/* Active Condition Details Card */}
          <div
            style={{
              background: '#f8fafc',
              border: `1px solid ${currentCondition.border}`,
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
                {currentCondition.icon}
              </span>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a' }}>
                  Condition: {currentCondition.name} ({currentCondition.letter})
                </h4>
                <p style={{ margin: 0, fontSize: '0.85rem', color: currentCondition.color, fontWeight: '700' }}>
                  {currentCondition.subtitle}
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: '1.5', marginBottom: '1rem' }}>
              {currentCondition.concept}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginBottom: '0.75rem' }}>
              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  padding: '10px 14px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#0d9488', textTransform: 'uppercase', marginBottom: '4px' }}>
                  🎯 Rogerian Clinical Implementation
                </div>
                <div style={{ fontSize: '0.875rem', color: '#1e293b', lineHeight: '1.4' }}>
                  {currentCondition.clinicalBehavior}
                </div>
              </div>

              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  padding: '10px 14px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#15803d', textTransform: 'uppercase', marginBottom: '4px' }}>
                  💬 Exemplary Reflective Dialogue
                </div>
                <div style={{ fontSize: '0.875rem', color: '#166534', fontStyle: 'italic', lineHeight: '1.4' }}>
                  {currentCondition.exampleDialogue}
                </div>
              </div>

              <div
                style={{
                  background: '#fef2f2',
                  border: '1px solid #fecaca',
                  padding: '10px 14px',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#b91c1c', textTransform: 'uppercase', marginBottom: '4px' }}>
                  ⚠️ What to Avoid (Defensive Trigger)
                </div>
                <div style={{ fontSize: '0.875rem', color: '#991b1b', lineHeight: '1.4' }}>
                  {currentCondition.contraindicatedAction}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: INCONGRUENCE GAP SIMULATOR */}
      {activeMode === 'incongruence' && (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#0f172a' }}>
              Real Self vs. Ideal Self: The Incongruence Continuum
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              Drag the slider to adjust therapeutic safety and observe how the self-gap contracts
            </p>
          </div>

          {/* Visual Dual Sphere Stage */}
          <div
            style={{
              height: '180px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              marginBottom: '1.25rem',
            }}
          >
            {/* Real Self Sphere */}
            <div
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'rgba(13, 148, 136, 0.25)',
                border: '3px solid #0d9488',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `translateX(-${gapPixels / 2}px)`,
                transition: 'transform 0.2s ease-out',
                zIndex: 2,
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>👤</span>
              <strong style={{ fontSize: '0.85rem', color: '#0f766e' }}>Real Self</strong>
              <span style={{ fontSize: '0.65rem', color: '#115e59', textAlign: 'center', padding: '0 4px' }}>
                Authentic Experience
              </span>
            </div>

            {/* Incongruence Gap Indicator */}
            {gapPixels > 20 && (
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  background: '#fef2f2',
                  border: '1px dashed #ef4444',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  color: '#b91c1c',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  zIndex: 4,
                }}
              >
                Incongruence Gap: {Math.round(100 - alignmentScore)}%
              </div>
            )}

            {/* Ideal Self Sphere */}
            <div
              style={{
                width: '130px',
                height: '130px',
                borderRadius: '50%',
                background: 'rgba(59, 130, 246, 0.25)',
                border: '3px solid #3b82f6',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `translateX(${gapPixels / 2}px)`,
                transition: 'transform 0.2s ease-out',
                zIndex: 1,
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>⭐</span>
              <strong style={{ fontSize: '0.85rem', color: '#1d4ed8' }}>Ideal Self</strong>
              <span style={{ fontSize: '0.65rem', color: '#1e40af', textAlign: 'center', padding: '0 4px' }}>
                External Demands
              </span>
            </div>
          </div>

          {/* Slider Control */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
              <span style={{ color: '#ef4444', fontWeight: 'bold' }}>⚡ Severe Incongruence (Defensive)</span>
              <span style={{ color: '#10b981', fontWeight: 'bold' }}>🌱 Congruent Self-Actualization</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={alignmentScore}
              onChange={(e) => setAlignmentScore(Number(e.target.value))}
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

          {/* Dynamic Diagnosis Readout */}
          <div
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              border: `1px solid ${distressColor}`,
              background: '#ffffff',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: distressColor,
                }}
              />
              <strong style={{ fontSize: '0.9rem', color: distressColor }}>{distressLevel}</strong>
            </div>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: '1.4' }}>
              {alignmentScore < 35 &&
                'Large gap between authentic feelings and social expectations. The patient experiences chronic internal tension, vulnerability, and utilizes defensive denial or withdrawal.'}
              {alignmentScore >= 35 && alignmentScore < 70 &&
                'Moderate incongruence. Under empathetic safety and unconditional positive regard, defensive boundaries soften as the client begins exploring forbidden thoughts.'}
              {alignmentScore >= 70 &&
                'High congruence. The real self and ideal self overlap seamlessly. The client experiences self-actualization, inner peace, and spontaneous personal growth.'}
            </p>
          </div>
        </div>
      )}

      {/* VIEW 3: DIALOGUE CONTRAST (REFLECTIVE VS. PATERNALISTIC) */}
      {activeMode === 'dialogue' && (
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '1.1rem', color: '#0f172a' }}>
              Paternalistic Advice vs. Rogerian Reflective Listening
            </h4>
            <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
              Compare how clinical responses impact patient agency and defensiveness
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
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#0369a1', textTransform: 'uppercase' }}>
              Patient Statement:
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '0.95rem', color: '#1e293b', fontStyle: 'italic' }}>
              “Everyone tells me I just have to accept this chronic illness and take the pills, but honestly, every time I open that pill bottle, I feel like my old life is completely over.”
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {/* Paternalistic */}
            <div
              style={{
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#b91c1c', marginBottom: '4px' }}>
                ❌ Paternalistic Advice Model (Expert-Driven)
              </div>
              <p style={{ margin: '0 0 8px', fontSize: '0.875rem', color: '#991b1b', fontStyle: 'italic' }}>
                “You really can’t think that way. The medicine is vital for your survival. If you skip your doses, your condition will deteriorate rapidly. You need to pull yourself together.”
              </p>
              <div style={{ fontSize: '0.75rem', color: '#7f1d1d' }}>
                <strong>Outcome:</strong> Imposes the clinician’s ideal expectations, shuts down self-exploration, and breeds resistance or guilty non-adherence.
              </div>
            </div>

            {/* Rogerian */}
            <div
              style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '10px',
                padding: '12px 14px',
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#15803d', marginBottom: '4px' }}>
                ✅ Rogerian Non-Directive Reflection
              </div>
              <p style={{ margin: '0 0 8px', fontSize: '0.875rem', color: '#166534', fontStyle: 'italic' }}>
                “It sounds like the medication feels like a painful daily reminder of what you have lost, and you are grieving the freedom and identity you had before.”
              </p>
              <div style={{ fontSize: '0.75rem', color: '#14532d' }}>
                <strong>Outcome:</strong> Meets the patient in their authentic reality without judgment, relieving anxiety and empowering them to find their own readiness to cope.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
