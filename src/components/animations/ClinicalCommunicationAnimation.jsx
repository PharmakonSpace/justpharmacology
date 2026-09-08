// ClinicalCommunicationAnimation.jsx
import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Users,
  MessageSquare,
  VolumeX,
  Volume2,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Share2,
  Phone,
  Video,
  Smartphone,
  Sparkles,
  ArrowRight,
  Layers,
  Activity,
  FileText
} from 'lucide-react';

const MODES = [
  { id: 'linear', label: '1. Linear vs Circular Model', icon: MessageSquare },
  { id: 'noise', label: '2. Clinical Noise & Filters', icon: VolumeX },
  { id: 'teachback', label: '3. Teach-Back Feedback Loop', icon: CheckCircle2 },
  { id: 'therapeutic', label: '4. Person-Centered Chain', icon: Heart },
  { id: 'proxemics', label: '5. Proxemics & Zones', icon: Users },
  { id: 'multidisciplinary', label: '6. Team Storming to Norming', icon: Layers },
  { id: 'telehealth', label: '7. Telehealth Bandwidth', icon: Phone }
];

export default function ClinicalCommunicationAnimation() {
  const [activeMode, setActiveMode] = useState('linear');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [noiseLevel, setNoiseLevel] = useState('high'); // 'low', 'high'
  const [useTeachBack, setUseTeachBack] = useState(false);
  const [proxemicZone, setProxemicZone] = useState('social'); // 'intimate', 'personal', 'social', 'public'
  const [selectedPillar, setSelectedPillar] = useState(0);
  const [teleChannel, setTeleChannel] = useState('face'); // 'face', 'video', 'phone', 'text', 'fax'

  // Auto play timer for step progression
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prev) => (prev + 1) % 4);
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '16px',
        padding: 'clamp(14px, 3vw, 24px)',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
        fontFamily: 'inherit',
        color: '#0f172a',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden'
      }}
    >
      {/* Header Banner */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '20px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ background: '#ecfdf5', color: '#059669', fontSize: '11px', fontWeight: '800', letterSpacing: '0.06em', padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase' }}>
              INTERACTIVE CLINICAL SIMULATOR
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>• Systems Communication Architecture</span>
          </div>
          <h3 style={{ margin: 0, fontSize: '19px', fontWeight: '800', color: '#0f172a' }}>
            Clinical Communication &amp; Transactional Dynamics
          </h3>
          <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#64748b' }}>
            Interactive simulation of filters, feedback loops, proxemics, team Tuckman cycles, and telehealth bandwidth.
          </p>
        </div>

        {/* Global Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: 'none',
              background: isPlaying ? '#ea580c' : '#0d9488',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            {isPlaying ? 'Pause Auto' : 'Auto Play'}
          </button>
          <button
            onClick={() => {
              setStep(0);
              setIsPlaying(false);
            }}
            title="Reset step"
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: '#f8fafc',
              color: '#475569',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Mode Navigation Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '10px',
          marginBottom: '20px',
          borderBottom: '1px solid #f1f5f9'
        }}
      >
        {MODES.map((m) => {
          const Icon = m.icon;
          const isActive = activeMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => {
                setActiveMode(m.id);
                setStep(0);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: isActive ? '700' : '500',
                whiteSpace: 'nowrap',
                border: isActive ? '1px solid #0d9488' : '1px solid #e2e8f0',
                background: isActive ? '#f0fdf4' : '#ffffff',
                color: isActive ? '#0f766e' : '#64748b',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <Icon size={14} />
              {m.label}
            </button>
          );
        })}
      </div>

      {/* ────────────────── MODULE 1: LINEAR VS CIRCULAR TRANSACTIONAL ────────────────── */}
      {activeMode === 'linear' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            {/* Linear Model Box */}
            <div
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px',
                background: '#f8fafc'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong style={{ fontSize: '14px', color: '#64748b' }}>Basic Linear Model (Sequential)</strong>
                <span style={{ fontSize: '11px', background: '#fee2e2', color: '#b91c1c', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                  Insufficient for Medicine
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 0', padding: '12px', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px' }}>👨‍⚕️</div>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Sender (Doctor)</span>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>Encodes Facts</div>
                </div>
                <div style={{ flex: 1, textAlign: 'center', margin: '0 8px' }}>
                  <div style={{ height: '2px', background: '#cbd5e1', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', fontSize: '10px', color: '#64748b', background: '#fff', padding: '0 4px' }}>
                      One-way channel ➔
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '24px' }}>🧑‍🦱</div>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#0f172a' }}>Receiver (Patient)</span>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>Passive Recipient</div>
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                ⚠️ <strong>Flaw:</strong> Treats patient as an empty receptacle. Assumes if facts are spoken, comprehension and compliance automatically occur.
              </p>
            </div>

            {/* Circular Transactional Model Box */}
            <div
              style={{
                border: '2px solid #0d9488',
                borderRadius: '12px',
                padding: '16px',
                background: '#f0fdf4'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <strong style={{ fontSize: '14px', color: '#0f766e' }}>Bateson’s Circular Transactional Model</strong>
                <span style={{ fontSize: '11px', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '6px', fontWeight: '700' }}>
                  Clinical Standard
                </span>
              </div>
              <div style={{ position: 'relative', margin: '14px 0', padding: '12px', background: '#ffffff', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center', width: '38%' }}>
                    <div style={{ fontSize: '24px' }}>👨‍⚕️</div>
                    <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#0f766e' }}>Clinician</span>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>Biases, Jargon, Authority</div>
                  </div>
                  <div style={{ width: '24%', textAlign: 'center' }}>
                    <div style={{ fontSize: '18px' }}>🔄</div>
                    <span style={{ fontSize: '10px', fontWeight: '800', color: '#0d9488' }}>MUTUAL INFLUENCE</span>
                  </div>
                  <div style={{ textAlign: 'center', width: '38%' }}>
                    <div style={{ fontSize: '24px' }}>🧑‍🦱</div>
                    <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#0f766e' }}>Patient</span>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>Culture, Pain, Anxiety</div>
                  </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed #cbd5e1', fontSize: '11px', color: '#047857', fontWeight: '600' }}>
                  Continuous Feedback Loop: Message Sent ≠ Message Understood
                </div>
              </div>
              <p style={{ fontSize: '12px', color: '#166534', lineHeight: '1.5', margin: 0 }}>
                ✅ <strong>Clinical Reality:</strong> Both parties encode and decode simultaneously. Active verification (Teach-back) is required to check what message survived personal filters.
              </p>
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
            💡 <strong>Core Takeaway:</strong> Delivering medical facts is an act of transmission, not communication. Communication is only achieved when shared meaning is actively verified.
          </div>
        </div>
      )}

      {/* ────────────────── MODULE 2: CLINICAL NOISE & FILTERS ────────────────── */}
      {activeMode === 'noise' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#475569' }}>
              Simulate Environmental &amp; Internal Noise Level:
            </span>
            <div style={{ display: 'inline-flex', gap: '6px' }}>
              <button
                onClick={() => setNoiseLevel('low')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700',
                  border: noiseLevel === 'low' ? '1px solid #059669' : '1px solid #e2e8f0',
                  background: noiseLevel === 'low' ? '#ecfdf5' : '#ffffff',
                  color: noiseLevel === 'low' ? '#059669' : '#64748b',
                  cursor: 'pointer'
                }}
              >
                Low Noise (Private Room)
              </button>
              <button
                onClick={() => setNoiseLevel('high')}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '700',
                  border: noiseLevel === 'high' ? '1px solid #dc2626' : '1px solid #e2e8f0',
                  background: noiseLevel === 'high' ? '#fef2f2' : '#ffffff',
                  color: noiseLevel === 'high' ? '#dc2626' : '#64748b',
                  cursor: 'pointer'
                }}
              >
                High Noise (ED / Chaotic)
              </button>
            </div>
          </div>

          <div
            style={{
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '20px',
              background: noiseLevel === 'high' ? '#fff1f2' : '#f0fdf4',
              transition: 'background 0.3s ease',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '16px' }}>
              {/* Doctor's Sent Message */}
              <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#0284c7', textTransform: 'uppercase' }}>Message Sent (100% Medical)</span>
                <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#0f172a', fontWeight: '600' }}>
                  "Take 500mg Metformin twice daily with meals to avoid lactic acidosis and GI distress."
                </p>
              </div>

              {/* The Filter Barrier */}
              <div style={{ textAlign: 'center', padding: '0 8px' }}>
                <div style={{ fontSize: '24px', color: noiseLevel === 'high' ? '#ef4444' : '#10b981' }}>
                  {noiseLevel === 'high' ? <VolumeX size={32} /> : <Volume2 size={32} />}
                </div>
                <span style={{ fontSize: '11px', fontWeight: '800', color: noiseLevel === 'high' ? '#b91c1c' : '#047857' }}>
                  {noiseLevel === 'high' ? '70% SIGNAL LOSS' : '15% SIGNAL LOSS'}
                </span>
                <div style={{ fontSize: '10px', color: '#64748b', maxWidth: '120px', marginTop: '4px' }}>
                  {noiseLevel === 'high' ? 'Pain + Panic + Overlapping Alarms' : 'Calm, private, paced'}
                </div>
              </div>

              {/* Patient's Decoded Message */}
              <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: noiseLevel === 'high' ? '#dc2626' : '#059669', textTransform: 'uppercase' }}>
                  Message Received by Patient
                </span>
                <p style={{ margin: '8px 0 0', fontSize: '13px', color: '#0f172a', fontWeight: '500' }}>
                  {noiseLevel === 'high'
                    ? '"Something about twice a day... wait, did the doctor say it causes acid poisoning?" (High Anxiety & Misunderstanding)'
                    : '"Take one Metformin tablet with breakfast and one with dinner so my stomach doesn’t hurt."'
                  }
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', fontSize: '12px' }}>
            <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>Internal Noise:</strong> Severe acute pain, visceral nausea, catastrophic fear, shame.
            </div>
            <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>External Noise:</strong> Beeping cardiac monitors, hallway commotion, lack of privacy.
            </div>
            <div style={{ padding: '10px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <strong>Semantic Noise:</strong> Unexplained medical jargon (e.g., "titrate", "dyspnea", "NPO").
            </div>
          </div>
        </div>
      )}

      {/* ────────────────── MODULE 3: TEACH-BACK FEEDBACK LOOP ────────────────── */}
      {activeMode === 'teachback' && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>Toggle Feedback Verification Loop:</span>
            <button
              onClick={() => setUseTeachBack(!useTeachBack)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700',
                border: 'none',
                background: useTeachBack ? '#059669' : '#e11d48',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              {useTeachBack ? <CheckCircle2 size={16} /> : <AlertTriangle size={16} />}
              {useTeachBack ? 'Teach-Back ACTIVE (Closed Loop)' : 'Teach-Back OFF (Assumption Trap)'}
            </button>
          </div>

          <div
            style={{
              padding: '20px',
              borderRadius: '12px',
              border: useTeachBack ? '2px solid #10b981' : '2px solid #fda4af',
              background: useTeachBack ? '#ecfdf5' : '#fff1f2',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ background: '#0284c7', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px' }}>
                  STEP 1: CLINICIAN
                </span>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#0f172a' }}>
                  "I want to make sure I explained your new blood pressure pills clearly. When you get home and your spouse asks how you are supposed to take them, what will you tell them?"
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ background: useTeachBack ? '#10b981' : '#f59e0b', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px' }}>
                  STEP 2: PATIENT
                </span>
                <p style={{ margin: 0, fontSize: '13.5px', color: '#0f172a', fontWeight: '500' }}>
                  {useTeachBack
                    ? '"I will tell them that I take one blue pill every morning before work, and if I feel dizzy, I sit down and write it in my logbook before calling you."'
                    : '"Yes, doctor, I understand everything completely. (Nods politely without actually knowing which pill is which)"'
                  }
                </p>
              </div>

              {useTeachBack && (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', borderTop: '1px dashed #6ee7b7', paddingTop: '10px' }}>
                  <span style={{ background: '#059669', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '3px 8px', borderRadius: '6px' }}>
                    STEP 3: VERIFY &amp; REPAIR
                  </span>
                  <p style={{ margin: 0, fontSize: '13px', color: '#065f46', fontWeight: '600' }}>
                    ✅ Loop Closed! The clinician accurately verified comprehension without making the patient feel tested or embarrassed.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12.5px', color: '#475569' }}>
            ⚠️ <strong>Golden Rule of Teach-Back:</strong> Never ask <em>"Do you understand?"</em> (patients will reflexively say yes due to authority expectations). Instead, place the responsibility on yourself: <em>"Just to make sure I explained everything clearly, could you tell me how you will take this medication at home?"</em>
          </div>
        </div>
      )}

      {/* ────────────────── MODULE 4: THERAPEUTIC CHAIN & 5 PILLARS ────────────────── */}
      {activeMode === 'therapeutic' && (
        <div>
          <span style={{ fontSize: '12px', fontWeight: '800', color: '#0f766e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Person-Centered Sequential Chain
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px', margin: '12px 0 20px' }}>
            {[
              { num: '1', title: 'Mutual Understanding', sub: 'Shared reality on diagnosis & lived experience' },
              { num: '2', title: 'Therapeutic Relationship', sub: 'Built on psychological safety & respect' },
              { num: '3', title: 'Person-Centered Goals', sub: 'Align clinical targets with patient priorities' },
              { num: '4', title: 'Positive Outcomes', sub: 'Maximized compliance & clinical recovery' }
            ].map((node, i) => (
              <div
                key={i}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: '1px solid #bbf7d0',
                  background: '#f0fdf4',
                  position: 'relative',
                  minWidth: 0
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0d9488', color: '#fff', fontSize: '11px', fontWeight: 'bold', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                    {node.num}
                  </span>
                  <strong style={{ fontSize: '12.5px', color: '#0f766e' }}>{node.title}</strong>
                </div>
                <div style={{ fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>{node.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#334155', textTransform: 'uppercase' }}>
              The Five Behavioral Pillars of Person-Centered Practice
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '8px', marginTop: '10px' }}>
              {[
                { letter: 'R', name: 'Respect', desc: 'Unconditional positive regard for lived patient context without judgment.' },
                { letter: 'E', name: 'Empathy', desc: 'Feeling with the patient from their perspective, distinct from detached pity.' },
                { letter: 'T', name: 'Trust', desc: 'Dependable, predictable professional boundaries maintained over time.' },
                { letter: 'C', name: 'Collaboration', desc: 'Deliberately sharing clinical decision-making power as co-designers.' },
                { letter: 'E', name: 'Empowerment', desc: 'Transferring knowledge and agency so patient acts in their own recovery.' }
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPillar(idx)}
                  style={{
                    padding: '12px 10px',
                    borderRadius: '8px',
                    border: selectedPillar === idx ? '2px solid #0d9488' : '1px solid #e2e8f0',
                    background: selectedPillar === idx ? '#f0fdf4' : '#ffffff',
                    textAlign: 'left',
                    cursor: 'pointer',
                    minWidth: 0
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <span style={{ fontWeight: '800', color: '#0d9488', fontSize: '14px', flexShrink: 0 }}>{p.letter}</span>
                    <strong style={{ fontSize: '12px', color: '#0f172a' }}>{p.name}</strong>
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#64748b', lineHeight: '1.4' }}>{p.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ────────────────── MODULE 5: PROXEMICS & BOUNDARIES ────────────────── */}
      {activeMode === 'proxemics' && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>
              Select Edward Hall's Interpersonal Distance Zone:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {[
                { id: 'intimate', label: 'Intimate (<1.5 ft)', color: '#e11d48' },
                { id: 'personal', label: 'Personal (1.5 - 4 ft)', color: '#0d9488' },
                { id: 'social', label: 'Social (4 - 12 ft)', color: '#0284c7' },
                { id: 'public', label: 'Public (>12 ft)', color: '#64748b' }
              ].map((z) => (
                <button
                  key={z.id}
                  onClick={() => setProxemicZone(z.id)}
                  style={{
                    padding: '6px 10px',
                    borderRadius: '6px',
                    fontSize: '11.5px',
                    fontWeight: '700',
                    border: proxemicZone === z.id ? `2px solid ${z.color}` : '1px solid #e2e8f0',
                    background: proxemicZone === z.id ? '#f8fafc' : '#ffffff',
                    color: proxemicZone === z.id ? z.color : '#64748b',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {z.label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Visual Proximity Target */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px', position: 'relative' }}>
              <div
                style={{
                  width: proxemicZone === 'intimate' ? '80px' : proxemicZone === 'personal' ? '150px' : proxemicZone === 'social' ? '230px' : '300px',
                  height: proxemicZone === 'intimate' ? '80px' : proxemicZone === 'personal' ? '150px' : proxemicZone === 'social' ? '230px' : '300px',
                  borderRadius: '50%',
                  border: '2px dashed #0d9488',
                  background: 'rgba(13, 148, 136, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ fontSize: '32px' }}>🧑‍🦱 (Patient)</div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  right: proxemicZone === 'intimate' ? '42%' : proxemicZone === 'personal' ? '30%' : proxemicZone === 'social' ? '18%' : '5%',
                  fontSize: '32px',
                  transition: 'all 0.3s ease'
                }}
              >
                👨‍⚕️
              </div>
            </div>

            <div style={{ marginTop: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
              <strong style={{ fontSize: '14px', color: '#0f172a' }}>
                {proxemicZone === 'intimate' && '🚨 Intimate Zone: Physical Contact (< 1.5 ft)'}
                {proxemicZone === 'personal' && '🩺 Personal Zone: Therapeutic Consultation (1.5 - 4 ft)'}
                {proxemicZone === 'social' && '📋 Social Zone: Impersonal / Group Rounds (4 - 12 ft)'}
                {proxemicZone === 'public' && '🏛️ Public Zone: General Hallways / Mass Briefings (> 12 ft)'}
              </strong>
              <p style={{ margin: '6px auto 0', maxWidth: '650px', fontSize: '12.5px', color: '#475569' }}>
                {proxemicZone === 'intimate' &&
                  'Requires EXPLICIT pre-narration (e.g., "I am now going to gently listen to your lungs with the stethoscope"). Unwarned entry triggers primitive threat amygdala responses.'}
                {proxemicZone === 'personal' &&
                  'Ideal distance for discussing sensitive medication regimens, treatment goals, and expressing empathy while honoring physical safety.'}
                {proxemicZone === 'social' &&
                  'Used when conducting standard administrative admissions or addressing family groups without invading intimate personal comfort boundaries.'}
                {proxemicZone === 'public' &&
                  'Too distant for confidential clinical disclosure. Risk of violating HIPAA / privacy regulations if clinical specifics are spoken at this range.'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────── MODULE 6: MULTIDISCIPLINARY TEAMS (TUCKMAN) ────────────────── */}
      {activeMode === 'multidisciplinary' && (
        <div>
          <span style={{ fontSize: '12px', fontWeight: '800', color: '#475569', textTransform: 'uppercase' }}>
            Tuckman &amp; Jensen Clinical Team Progression
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px', margin: '14px 0' }}>
            {[
              { stage: 'Forming', icon: '👋', tag: 'Orientation', desc: 'Polite acquaintance, clarifying specialties and patient assignment.' },
              { stage: 'Storming', icon: '⚡', tag: 'Necessary Friction', desc: 'Disagreement over clinical protocols, authority, and ego boundaries.' },
              { stage: 'Norming', icon: '📐', tag: 'Standardization', desc: 'Rules codified for patient handoffs, medication reconciliation, and safety.' },
              { stage: 'Performing', icon: '🚀', tag: 'Synergy', desc: 'High clinical efficacy, seamless ICU/OR synchronization, interdisciplinary trust.' },
              { stage: 'Closure', icon: '🏁', tag: 'Debrief & Disband', desc: 'Structured handover, emotional debriefing, preventing clinician burnout.' }
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '12px',
                  borderRadius: '10px',
                  border: s.stage === 'Storming' ? '1px solid #fca5a5' : '1px solid #e2e8f0',
                  background: s.stage === 'Storming' ? '#fef2f2' : '#f8fafc',
                  minWidth: 0
                }}
              >
                <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.icon}</div>
                <strong style={{ fontSize: '13px', color: '#0f172a' }}>{s.stage}</strong>
                <div style={{ fontSize: '10px', fontWeight: '700', color: s.stage === 'Storming' ? '#b91c1c' : '#0d9488', marginBottom: '4px' }}>
                  {s.tag}
                </div>
                <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>{s.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fef3c7', border: '1px solid #fde68a', padding: '12px 16px', borderRadius: '8px', fontSize: '12.5px', color: '#92400e' }}>
            ⚠️ <strong>Crucial Clinical Insight:</strong> Suppressing the <em>Storming</em> phase out of superficial politeness compromises patient safety! Interprofessional conflict must be resolved with standardized safety protocols (Norming) rather than swept under the rug.
          </div>
        </div>
      )}

      {/* ────────────────── MODULE 7: TELEHEALTH BANDWIDTH COMPARISON ────────────────── */}
      {activeMode === 'telehealth' && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#334155' }}>
              Select Communication Modality Bandwidth:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {[
                { id: 'face', label: 'Face-to-Face', icon: Users },
                { id: 'video', label: 'Video Call', icon: Video },
                { id: 'phone', label: 'Telephone', icon: Phone },
                { id: 'text', label: 'SMS / Text', icon: Smartphone },
                { id: 'fax', label: 'Email / Fax', icon: FileText }
              ].map((ch) => {
                const Icon = ch.icon;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setTeleChannel(ch.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: teleChannel === ch.id ? '700' : '500',
                      border: teleChannel === ch.id ? '1px solid #0d9488' : '1px solid #cbd5e1',
                      background: teleChannel === ch.id ? '#f0fdf4' : '#ffffff',
                      color: teleChannel === ch.id ? '#0f766e' : '#64748b',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <Icon size={13} />
                    {ch.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              padding: '18px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc',
              marginBottom: '16px'
            }}
          >
            {teleChannel === 'face' && (
              <div>
                <strong style={{ fontSize: '14px', color: '#059669' }}>Rich Bandwidth (Maximum Nonverbal Data)</strong>
                <p style={{ margin: '6px 0', fontSize: '13px', color: '#334155' }}>
                  Full visual access to micro-expressions, posture, body language, vocal timbre, and breathing patterns. Lowest probability of emotional misinterpretation.
                </p>
                <div style={{ fontSize: '12px', color: '#047857', fontWeight: '600' }}>
                  Protocol: Observe SOLER posture (Squarely facing, Open posture, Lean in, Eye contact, Relaxed).
                </div>
              </div>
            )}

            {teleChannel === 'video' && (
              <div>
                <strong style={{ fontSize: '14px', color: '#0284c7' }}>Moderate Bandwidth (Upper Body / Facial Cues)</strong>
                <p style={{ margin: '6px 0', fontSize: '13px', color: '#334155' }}>
                  Restricted field of view; technical lag and missed lower-body fidgeting or trembling. Requires deliberate framing and eye contact with the camera.
                </p>
                <div style={{ fontSize: '12px', color: '#0369a1', fontWeight: '600' }}>
                  Protocol: Host introduces all remote participants, states names before speaking, and maintains explicit verbal confirmation pauses.
                </div>
              </div>
            )}

            {teleChannel === 'phone' && (
              <div>
                <strong style={{ fontSize: '14px', color: '#d97706' }}>Constrained Bandwidth (Vocal Only - No Visuals)</strong>
                <p style={{ margin: '6px 0', fontSize: '13px', color: '#334155' }}>
                  Zero visual cues. Clinician must practice active listening for subtle paralinguistic indicators: sighing, rapid shallow breathing, vocal tremor, long hesitations.
                </p>
                <div style={{ fontSize: '12px', color: '#b45309', fontWeight: '600' }}>
                  Protocol: Immediately state name and department; use verbal signposts ("I am reading your chart now, one moment").
                </div>
              </div>
            )}

            {teleChannel === 'text' && (
              <div>
                <strong style={{ fontSize: '14px', color: '#dc2626' }}>Low Bandwidth (Asynchronous Text Only)</strong>
                <p style={{ margin: '6px 0', fontSize: '13px', color: '#334155' }}>
                  No vocal tone or pacing. Highest risk of perceived coldness, ambiguity, or panic from brevity.
                </p>
                <div style={{ fontSize: '12px', color: '#b91c1c', fontWeight: '600' }}>
                  Protocol: Strict clinic identifier, address patient by formal name, zero medical shorthand/abbreviations, actionable closing contact number.
                </div>
              </div>
            )}

            {teleChannel === 'fax' && (
              <div>
                <strong style={{ fontSize: '14px', color: '#475569' }}>Legal &amp; Permanent Document Channel</strong>
                <p style={{ margin: '6px 0', fontSize: '13px', color: '#334155' }}>
                  Permanent, discoverable legal records. Potentially visible to unintended office personnel or shared home fax machines.
                </p>
                <div style={{ fontSize: '12px', color: '#334155', fontWeight: '600' }}>
                  Protocol: Prior patient consent for sensitive information, professional disclaimer coversheet, strict spelling/grammar audit.
                </div>
              </div>
            )}
          </div>

          <div style={{ fontSize: '12.5px', color: '#64748b', background: '#f1f5f9', padding: '10px 14px', borderRadius: '8px' }}>
            💡 <strong>Bandwidth Axiom:</strong> The narrower the communication channel, the more structured, explicit, and disciplined your communication protocol must become!
          </div>
        </div>
      )}
    </div>
  );
}
