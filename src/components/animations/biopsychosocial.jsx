// biopsychosocial.jsx
import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Zap, 
  Activity, 
  HeartPulse, 
  Sparkles, 
  Brain, 
  ShieldCheck, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Users,
  Smile,
  Stethoscope
} from 'lucide-react';

const PHASES = [
  {
    id: 'trigger',
    phaseNumber: 1,
    title: 'Cognitive Stress Trigger',
    category: 'PSYCHOLOGICAL (COGNITIVE)',
    badgeColor: '#f59e0b',
    badgeBg: '#fef3c7',
    badgeBorder: '#fde68a',
    accentColor: '#d97706',
    icon: '⚡',
    organ: 'Brain (Cerebral Cortex & Amygdala)',
    cortisolLevel: 'Elevating (+45%)',
    bloodPressure: '128 / 84 mmHg',
    vascularTone: 'Mild Spasm',
    autonomicState: 'Sympathetic Alarm Triggered',
    mechanism: 'Cognitive perception of threat or chronic emotional strain activates the amygdala, sending alarm signals to the hypothalamus to initiate the alarm phase.',
    clinicalScenario: 'A post-cardiac surgery patient experiences high panic and workplace distress upon returning home, fearing physical vulnerability.',
    takeaway: 'Perceived stress without physical threat triggers the exact same neuroendocrine alarm as acute bodily trauma.'
  },
  {
    id: 'cortisol',
    phaseNumber: 2,
    title: 'Neuroendocrine Cortisol Surge',
    category: 'ENDOCRINE (HPA AXIS)',
    badgeColor: '#ef4444',
    badgeBg: '#fee2e2',
    badgeBorder: '#fca5a5',
    accentColor: '#dc2626',
    icon: '🧪',
    organ: 'Adrenal Cortex & Medulla',
    cortisolLevel: 'Critical Surge (+190%)',
    bloodPressure: '148 / 96 mmHg',
    vascularTone: 'Active Constriction',
    autonomicState: 'Maximal Sympathetic Dominance',
    mechanism: 'Hypothalamus releases CRH, stimulating the pituitary to secrete ACTH. Adrenal glands flood systemic circulation with cortisol and epinephrine.',
    clinicalScenario: 'Circulating cortisol blunts insulin sensitivity, mobilizes glucose, elevates heart rate, and enhances systemic vascular contractility.',
    takeaway: 'Prolonged endocrine activation converts an adaptive short-term survival response into chronic biological damage.'
  },
  {
    id: 'hypertension',
    phaseNumber: 3,
    title: 'Sustained Hypertension & Strain',
    category: 'BIOLOGICAL (CARDIOVASCULAR)',
    badgeColor: '#8b5cf6',
    badgeBg: '#ede9fe',
    badgeBorder: '#ddd6fe',
    accentColor: '#7c3aed',
    icon: '🫀',
    organ: 'Arterial Vasculature & Endothelium',
    cortisolLevel: 'Chronic Elevation (+140%)',
    bloodPressure: '162 / 102 mmHg',
    vascularTone: 'Severe Resistance',
    autonomicState: 'Endothelial Shear Stress',
    mechanism: 'Sustained arteriolar smooth muscle contraction increases Total Peripheral Resistance (TPR), accelerating vascular remodeling and cardiac workload.',
    clinicalScenario: 'Despite flawless surgery, the patient returns to the emergency department with hypertensive urgency and accelerated vessel strain.',
    takeaway: 'Physiological repair alone fails when unmanaged psychosocial stress drives persistent vascular vasoconstriction.'
  },
  {
    id: 'intervention',
    phaseNumber: 4,
    title: 'Behavioral & Psychosocial Reset',
    category: 'INTEGRATED CARE (HOLISTIC)',
    badgeColor: '#10b981',
    badgeBg: '#d1fae5',
    badgeBorder: '#a7f3d0',
    accentColor: '#059669',
    icon: '🌱',
    organ: 'Integrated System (Vagus & CNS)',
    cortisolLevel: 'Normalized (Baseline)',
    bloodPressure: '118 / 76 mmHg',
    vascularTone: 'Normal Compliance',
    autonomicState: 'Parasympathetic Equilibrium',
    mechanism: 'Operant habit conditioning, cognitive reframing, mindfulness, and social support lower sympathetic drive, restoring vascular compliance and therapy adherence.',
    clinicalScenario: 'Structured habit chaining pairs medication taking with breakfast; relaxation breathing triggers vagal baroreflex deceleration.',
    takeaway: 'Behavioral and psychological interventions serve as the vital bridge turning clinical prescriptions into durable health.'
  }
];

const SUBFIELDS = [
  {
    id: 'health',
    name: 'Health Psychology',
    icon: '🧬',
    role: 'Biological & Habit Interface',
    focus: 'Maps how cognitive stress cascades directly alter neuroendocrine and immune pathways.',
    application: 'Educating hypertensive and cardiac patients on how emotional regulation directly dampens cortisol and arterial pressure.'
  },
  {
    id: 'behavioral',
    name: 'Behavioral Psychology',
    icon: '🔁',
    role: 'Conditioning & Routines',
    focus: 'Uses Skinnerian conditioning and reinforcement schedules to modify observable actions.',
    application: 'Structuring cue-routine-reward loops for smoking cessation, dietary shifts, and 95%+ medication adherence.'
  },
  {
    id: 'clinical',
    name: 'Clinical Psychology',
    icon: '🩺',
    role: 'Mental Health Integration',
    focus: 'Diagnoses and treats comorbid severe anxiety, major depression, and illness-related trauma.',
    application: 'Collaborative care models treating post-infarction depression to prevent secondary non-compliance and ER visits.'
  },
  {
    id: 'developmental',
    name: 'Developmental Psychology',
    icon: '🌱',
    role: 'Lifespan Adaptations',
    focus: 'Tailors communication and care plans to match evolving cognitive and emotional developmental stages.',
    application: 'Using gamified analogies for pediatric asthma inhalers vs. structured memory scaffolding for geriatric dosing.'
  }
];

export default function BiopsychosocialAnimation() {
  const [activeTab, setActiveTab] = useState('cascade'); // 'cascade' | 'subfields' | 'behavior'
  const [activePhase, setActivePhase] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [adherenceStreak, setAdherenceStreak] = useState(3);
  const [hasTakenDose, setHasTakenDose] = useState(false);

  // Auto-play timer for cascade
  useEffect(() => {
    let timer;
    if (isPlaying && activeTab === 'cascade') {
      timer = setInterval(() => {
        setActivePhase((prev) => (prev + 1) % PHASES.length);
      }, 3600);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeTab]);

  const currentPhase = PHASES[activePhase];

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
        margin: '20px 0',
        fontFamily: 'inherit',
        color: '#0f172a'
      }}
    >
      {/* Top Banner & Mode Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid #f1f5f9',
          marginBottom: '18px'
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '0.05em',
                color: '#0d9488',
                background: '#f0fdfa',
                border: '1px solid #ccfbf1',
                padding: '3px 10px',
                borderRadius: '20px'
              }}
            >
              BIOPSYCHOSOCIAL MODEL
            </span>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
              Interactive Medical Simulator
            </span>
          </div>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>
            The Neuroendocrine Stress Cascade &amp; Behavioral Science
          </h3>
        </div>

        {/* View Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            background: '#f8fafc',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            gap: '2px'
          }}
        >
          <button
            type="button"
            onClick={() => setActiveTab('cascade')}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'cascade' ? '#0d9488' : 'transparent',
              color: activeTab === 'cascade' ? '#ffffff' : '#64748b',
              transition: 'all 0.18s ease'
            }}
          >
            ⚡ Stress Cascade
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('subfields')}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'subfields' ? '#0d9488' : 'transparent',
              color: activeTab === 'subfields' ? '#ffffff' : '#64748b',
              transition: 'all 0.18s ease'
            }}
          >
            🧠 4 Subfields
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('behavior')}
            style={{
              padding: '6px 12px',
              fontSize: '12px',
              fontWeight: '700',
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'behavior' ? '#0d9488' : 'transparent',
              color: activeTab === 'behavior' ? '#ffffff' : '#64748b',
              transition: 'all 0.18s ease'
            }}
          >
            🔁 Operant Habit Lab
          </button>
        </div>
      </div>

      {/* VIEW 1: CASCADE SIMULATOR */}
      {activeTab === 'cascade' && (
        <div>
          {/* Controls Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
              background: '#f8fafc',
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}
          >
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>
              Phase {activePhase + 1} of {PHASES.length}:{' '}
              <span style={{ color: currentPhase.accentColor }}>{currentPhase.title}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActivePhase((prev) => (prev - 1 + PHASES.length) % PHASES.length);
                }}
                style={{
                  padding: '6px 10px',
                  fontSize: '12px',
                  fontWeight: '600',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  color: '#334155',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <ChevronLeft size={14} /> Prev
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                style={{
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: isPlaying ? '#f59e0b' : '#0d9488',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause' : 'Auto Play'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActivePhase(0);
                }}
                style={{
                  padding: '6px 10px',
                  fontSize: '12px',
                  fontWeight: '600',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '6px',
                  color: '#475569',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center'
                }}
                title="Reset"
              >
                <RotateCcw size={14} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsPlaying(false);
                  setActivePhase((prev) => (prev + 1) % PHASES.length);
                }}
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  fontWeight: '700',
                  background: '#0f172a',
                  border: 'none',
                  borderRadius: '6px',
                  color: '#ffffff',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                Next <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* 4 Phase Progress Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '10px',
              marginBottom: '18px'
            }}
          >
            {PHASES.map((p, idx) => {
              const isActive = activePhase === idx;
              const isPast = activePhase > idx;

              return (
                <button
                  type="button"
                  key={p.id}
                  onClick={() => {
                    setIsPlaying(false);
                    setActivePhase(idx);
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: isActive
                      ? `2px solid ${p.accentColor}`
                      : isPast
                      ? '1px solid #cbd5e1'
                      : '1px solid #e2e8f0',
                    background: isActive ? '#ffffff' : isPast ? '#f8fafc' : '#ffffff',
                    cursor: 'pointer',
                    boxShadow: isActive ? `0 4px 12px ${p.accentColor}25` : 'none',
                    transition: 'all 0.18s ease'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '6px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '800',
                        fontFamily: 'monospace',
                        color: isActive ? p.accentColor : '#64748b'
                      }}
                    >
                      0{p.phaseNumber}
                    </span>
                    <span style={{ fontSize: '14px' }}>{p.icon}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: '800',
                      color: isActive ? '#0f172a' : '#475569',
                      lineHeight: '1.3'
                    }}
                  >
                    {p.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Biological Stage Graphic & Readout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '18px'
            }}
          >
            {/* Left: Graphic Visualizer */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '12px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      color: currentPhase.badgeColor,
                      background: currentPhase.badgeBg,
                      border: `1px solid ${currentPhase.badgeBorder}`,
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}
                  >
                    {currentPhase.category}
                  </span>
                  <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>
                    Target: {currentPhase.organ}
                  </span>
                </div>

                {/* SVG Visual Stage */}
                <div
                  style={{
                    height: '140px',
                    background: '#0f172a',
                    borderRadius: '10px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px'
                  }}
                >
                  {/* Dynamic Visual depending on Phase */}
                  {activePhase === 0 && (
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#f59e0b20',
                          border: '2px dashed #f59e0b',
                          margin: '0 auto 8px',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: '28px'
                        }}
                      >
                        🧠
                      </div>
                      <div style={{ fontSize: '12px', color: '#fbbf24', fontWeight: '700' }}>
                        Amygdala &amp; Cortical Threat Perception
                      </div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                        CRH Secretion Triggered
                      </div>
                    </div>
                  )}

                  {activePhase === 1 && (
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#ef444425',
                          border: '2px solid #ef4444',
                          margin: '0 auto 8px',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: '28px'
                        }}
                      >
                        ⚡
                      </div>
                      <div style={{ fontSize: '12px', color: '#f87171', fontWeight: '700' }}>
                        Adrenal Glands: Cortisol + Epinephrine Flood
                      </div>
                      <div style={{ fontSize: '11px', color: '#cbd5e1' }}>
                        ACTH Stimulates Adrenal Cortex
                      </div>
                    </div>
                  )}

                  {activePhase === 2 && (
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                      <div
                        style={{
                          width: '120px',
                          height: '40px',
                          borderRadius: '8px',
                          background: '#8b5cf625',
                          border: '2px solid #8b5cf6',
                          margin: '0 auto 8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <span style={{ fontSize: '16px' }}>🔴</span>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#c4b5fd' }}>
                          Arteriolar Lumen
                        </span>
                        <span style={{ fontSize: '16px' }}>🔴</span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#c4b5fd', fontWeight: '700' }}>
                        Constricted Lumen ➔ High Peripheral Resistance
                      </div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                        High Endothelial Shear &amp; Hypertensive Strain
                      </div>
                    </div>
                  )}

                  {activePhase === 3 && (
                    <div style={{ textAlign: 'center', color: '#ffffff' }}>
                      <div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: '#10b98125',
                          border: '2px solid #10b981',
                          margin: '0 auto 8px',
                          display: 'grid',
                          placeItems: 'center',
                          fontSize: '28px'
                        }}
                      >
                        🌿
                      </div>
                      <div style={{ fontSize: '12px', color: '#34d399', fontWeight: '700' }}>
                        Vagal Tone Activated ➔ Arteriolar Relaxation
                      </div>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                        HPA Negative Feedback &amp; Restored Equilibrium
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Physiological Telemetry Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  background: '#f8fafc',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  fontSize: '12px'
                }}
              >
                <div>
                  <div style={{ color: '#64748b', fontSize: '11px' }}>Cortisol Level:</div>
                  <strong style={{ color: currentPhase.accentColor }}>
                    {currentPhase.cortisolLevel}
                  </strong>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11px' }}>Blood Pressure:</div>
                  <strong style={{ color: '#0f172a' }}>{currentPhase.bloodPressure}</strong>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11px' }}>Vascular Tone:</div>
                  <strong style={{ color: '#334155' }}>{currentPhase.vascularTone}</strong>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '11px' }}>Autonomic State:</div>
                  <strong style={{ color: '#334155' }}>{currentPhase.autonomicState}</strong>
                </div>
              </div>
            </div>

            {/* Right: Clinical Description & Takeaway */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div>
                <h4 style={{ margin: '0 0 6px', fontSize: '15px', color: '#0f172a', fontWeight: '800' }}>
                  Pathophysiological Mechanism:
                </h4>
                <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#334155', lineHeight: '1.55' }}>
                  {currentPhase.mechanism}
                </p>

                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '12px',
                    marginBottom: '12px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '800',
                      color: '#0d9488',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Stethoscope size={13} /> CLINICAL CORRELATION:
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
                    {currentPhase.clinicalScenario}
                  </div>
                </div>
              </div>

              {/* High Yield Pearl */}
              <div
                style={{
                  background: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}
              >
                <CheckCircle2 size={16} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '12px', color: '#166534', lineHeight: '1.45' }}>
                  <strong>Key Takeaway:</strong> {currentPhase.takeaway}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: 4 PSYCHOLOGICAL SUBFIELDS INTERACTIVE MATRIX */}
      {activeTab === 'subfields' && (
        <div>
          <p style={{ fontSize: '13px', color: '#475569', margin: '0 0 14px', lineHeight: '1.5' }}>
            Effective healthcare psychology integrates four empirical branches to address patients
            beyond isolated biology. Click each subfield to explore how it translates into everyday
            clinical outcomes:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px'
            }}
          >
            {SUBFIELDS.map((sub) => (
              <div
                key={sub.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '16px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '10px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '22px',
                        background: '#f0fdfa',
                        border: '1px solid #ccfbf1',
                        padding: '6px',
                        borderRadius: '8px',
                        display: 'grid',
                        placeItems: 'center'
                      }}
                    >
                      {sub.icon}
                    </span>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>
                        {sub.name}
                      </h4>
                      <span style={{ fontSize: '11px', color: '#0d9488', fontWeight: '700' }}>
                        {sub.role}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: '1.5', marginBottom: '10px' }}>
                    <strong>Scientific Focus:</strong> {sub.focus}
                  </div>
                </div>

                <div
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '12px',
                    color: '#475569',
                    lineHeight: '1.45'
                  }}
                >
                  <strong style={{ color: '#0f172a' }}>💡 Clinical Application:</strong> {sub.application}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 3: OPERANT BEHAVIORAL HABIT LAB */}
      {activeTab === 'behavior' && (
        <div>
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '16px'
            }}
          >
            <h4 style={{ margin: '0 0 6px', fontSize: '15px', color: '#0f172a', fontWeight: '800' }}>
              Skinnerian Operant Adherence Loop Simulator
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#475569', lineHeight: '1.5' }}>
              B.F. Skinner demonstrated that behaviors are established and maintained through systematic
              conditioning and positive reinforcement schedules. Test how habit chaining anchors long-term medication compliance.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '12px',
              marginBottom: '16px'
            }}
          >
            {/* Step 1: Cue / Trigger */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '14px'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#f59e0b', marginBottom: '4px' }}>
                1. STIMULUS / ANCHOR CUE
              </div>
              <strong style={{ fontSize: '13px', color: '#0f172a' }}>Daily Established Routine</strong>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0', lineHeight: '1.4' }}>
                Anchor the medication right next to the morning coffee maker or toothbrush.
              </p>
            </div>

            {/* Step 2: Target Action */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '14px'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#3b82f6', marginBottom: '4px' }}>
                2. TARGET ROUTINE
              </div>
              <strong style={{ fontSize: '13px', color: '#0f172a' }}>Take Prescribed Dose</strong>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0', lineHeight: '1.4' }}>
                Zero cognitive friction: take dose with morning glass of water immediately after coffee.
              </p>
            </div>

            {/* Step 3: Immediate Reinforcement */}
            <div
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '14px'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: '800', color: '#10b981', marginBottom: '4px' }}>
                3. REINFORCEMENT
              </div>
              <strong style={{ fontSize: '13px', color: '#0f172a' }}>Digital Streak &amp; Dopamine Reward</strong>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '4px 0 0', lineHeight: '1.4' }}>
                Visual feedback confirms protection and strengthens neural habit loop.
              </p>
            </div>
          </div>

          {/* Interactive Adherence Tracker Demo */}
          <div
            style={{
              background: '#f0fdfa',
              border: '1px solid #ccfbf1',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div>
              <div style={{ fontSize: '12px', color: '#0d9488', fontWeight: '700' }}>
                CLINICAL ADHERENCE DEMO
              </div>
              <div style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>
                Current Adherence Streak:{' '}
                <span style={{ color: '#0d9488' }}>{adherenceStreak} Consecutive Days</span>
              </div>
              <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                Predicted 1-year cardiovascular risk reduction:{' '}
                <strong style={{ color: '#16a34a' }}>-34%</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => {
                  if (!hasTakenDose) {
                    setAdherenceStreak((prev) => prev + 1);
                    setHasTakenDose(true);
                  }
                }}
                disabled={hasTakenDose}
                style={{
                  padding: '8px 16px',
                  background: hasTakenDose ? '#94a3b8' : '#0d9488',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: hasTakenDose ? 'default' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <CheckCircle2 size={15} />
                {hasTakenDose ? 'Dose Logged for Today! 🎉' : 'Log Today’s Morning Dose'}
              </button>

              {hasTakenDose && (
                <button
                  type="button"
                  onClick={() => setHasTakenDose(false)}
                  style={{
                    padding: '8px 12px',
                    background: '#ffffff',
                    color: '#475569',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Simulate Next Day
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
