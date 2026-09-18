// HearingStructureAndPhysiologyAnimation.jsx
import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Activity,
  Layers,
  Compass,
  CheckCircle2,
  AlertTriangle,
  Radio,
  Zap,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';

const TABS = [
  { id: 'pipeline', label: '1. Middle Ear & 20x Amplification', icon: Volume2 },
  { id: 'tonotopy', label: '2. Cochlear Tonotopy (Base vs. Apex)', icon: Layers },
  { id: 'haircell', label: '3. Hair Cell Mechanotransduction', icon: Zap },
  { id: 'binaural', label: '4. Binaural Localization & Pathway', icon: Compass },
  { id: 'clinical', label: '5. Tuning Fork Simulator (Weber & Rinne)', icon: Radio },
];

const FREQUENCIES = [
  { hz: 16000, label: '16 kHz (Very High)', region: 'Extreme Cochlear Base', stiffness: 'Very High Stiffness / Narrow', clinical: 'First lost in presbycusis and ototoxicity' },
  { hz: 4000, label: '4 kHz (High Speech / Notch)', region: 'Upper Basal Turn', stiffness: 'High Stiffness', clinical: 'Classic acoustic trauma notch from industrial noise or firearms' },
  { hz: 1500, label: '1.5 kHz (Mid Speech Consonants)', region: 'Mid-Cochlear Turn', stiffness: 'Moderate Stiffness / Width', clinical: 'Crucial for speech intelligibility (consonants)' },
  { hz: 500, label: '500 Hz (Low Speech Vowels)', region: 'Apical Turn', stiffness: 'Moderate Compliance', clinical: 'Vowel formants; preserved longer in age-related loss' },
  { hz: 100, label: '100 Hz (Deep Bass)', region: 'Cochlear Apex (Helicotrema)', stiffness: 'High Compliance / Wide (5x wider than base)', clinical: 'Deep ambient rumble; low frequency sound travels farthest' },
];

const CLINICAL_CASES = [
  {
    id: 'normal',
    title: 'Normal Bilateral Hearing',
    description: 'Intact external ear, compliant ossicular chain, healthy hair cells and CN VIII bilaterally.',
    rightRinne: { ac: 45, bc: 20, result: 'Positive (AC > BC)', note: 'Air conduction heard twice as long due to 20x ossicle amplification' },
    leftRinne: { ac: 45, bc: 20, result: 'Positive (AC > BC)', note: 'Normal bilateral amplification' },
    weber: { lateralization: 'Midline (Equal in both ears)', note: 'Bone conduction vibrations travel symmetrically to both intact cochleae' },
    diagnosis: 'Normal hearing acuity; intact conductive apparatus and sensorineural pathway.'
  },
  {
    id: 'right-conductive',
    title: 'Right Conductive Loss (e.g. Cerumen / Otosclerosis / Otitis Media)',
    description: 'Right ear has mechanical blockage (e.g. dense earwax, fluid in middle ear, or stapes footplate fixation). Cochlea is normal.',
    rightRinne: { ac: 10, bc: 25, result: 'Negative (BC ≥ AC)', note: 'Bone conduction is louder/longer than air conduction because bone bypasses middle-ear barrier' },
    leftRinne: { ac: 45, bc: 20, result: 'Positive (AC > BC)', note: 'Normal air conduction in healthy left ear' },
    weber: { lateralization: 'Lateralizes to RIGHT (Affected) Ear', note: 'Ambient background noise is blocked on the right, making bone-conducted vibrations resonate louder' },
    diagnosis: 'Right-sided Conductive Hearing Loss. Bone conduction normal; mechanical transmission impaired.'
  },
  {
    id: 'right-sensorineural',
    title: 'Right Sensorineural Loss (e.g. Presbycusis / Acoustic Neuroma / Gentamicin)',
    description: 'Damage to right organ of Corti hair cells or cochlear division of cranial nerve VIII. Middle ear mechanics are normal.',
    rightRinne: { ac: 15, bc: 8, result: 'Positive (AC > BC, but both reduced)', note: 'Air conduction is still longer than bone conduction, but both are diminished due to sensory cell loss' },
    leftRinne: { ac: 45, bc: 20, result: 'Positive (AC > BC)', note: 'Normal air and bone conduction in healthy left ear' },
    weber: { lateralization: 'Lateralizes to LEFT (Normal / Unaffected) Ear', note: 'The damaged right cochlea/nerve cannot perceive the bone vibrations, so sound is heard in the functioning ear' },
    diagnosis: 'Right-sided Sensorineural Hearing Loss. Irreversible hair cell or CN VIII neural loss.'
  }
];

export default function HearingStructureAndPhysiologyAnimation() {
  const [activeTab, setActiveTab] = useState('pipeline');

  // Tab 1 state: Sound pipeline
  const [pipelineVolume, setPipelineVolume] = useState('moderate'); // 'quiet' | 'moderate' | 'loud'
  const [isAcousticReflexActive, setIsAcousticReflexActive] = useState(false);

  // Tab 2 state: Tonotopy
  const [selectedFreq, setSelectedFreq] = useState(FREQUENCIES[1]); // 4kHz default

  // Tab 3 state: Mechanotransduction
  const [shearDirection, setShearDirection] = useState('neutral'); // 'neutral' | 'depolarize' | 'hyperpolarize'

  // Tab 4 state: Binaural sound location
  const [soundAngle, setSoundAngle] = useState(60); // degrees (-90 to +90)

  // Tab 5 state: Clinical simulator
  const [selectedCaseId, setSelectedCaseId] = useState('right-conductive');
  const [activeTuningFork, setActiveTuningFork] = useState(null); // 'rinne-right' | 'rinne-left' | 'weber' | null

  const currentCase = CLINICAL_CASES.find((c) => c.id === selectedCaseId) || CLINICAL_CASES[0];

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
        overflow: 'hidden',
      }}
    >
      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid #f1f5f9',
          marginBottom: '20px',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '3px 10px',
                borderRadius: '999px',
                background: '#e0f2fe',
                color: '#0369a1',
                fontSize: '11.5px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <Volume2 size={12} /> Auditory Physiology Simulator
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Anatomy &amp; Physiology Module</span>
          </div>
          <h3 style={{ margin: '6px 0 2px', fontSize: 'clamp(17px, 2.5vw, 21px)', fontWeight: '700', color: '#0f172a' }}>
            Ear Anatomy, Sound Transduction &amp; Clinical Audiology
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Follow sound from air pressure variations through middle-ear 20x amplification, cochlear tonotopy, and tuning fork diagnostics.
          </p>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: '600',
                border: isActive ? '2px solid #0284c7' : '1px solid #e2e8f0',
                background: isActive ? '#f0f9ff' : '#ffffff',
                color: isActive ? '#0369a1' : '#475569',
                cursor: 'pointer',
              }}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* ------------------- TAB 1: MIDDLE EAR & 20X AMPLIFICATION ------------------- */}
      {activeTab === 'pipeline' && (
        <div>
          {/* Controls Bar */}
          <div
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#334155' }}>Incoming Sound Intensity:</span>
              {(['quiet', 'moderate', 'loud']).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setPipelineVolume(lvl);
                    if (lvl === 'loud') setIsAcousticReflexActive(true);
                    else setIsAcousticReflexActive(false);
                  }}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: pipelineVolume === lvl ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    background: pipelineVolume === lvl ? '#e0f2fe' : '#ffffff',
                    color: pipelineVolume === lvl ? '#0369a1' : '#475569',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {lvl === 'quiet' ? 'Quiet (30 dB)' : lvl === 'moderate' ? 'Normal (60 dB)' : 'Loud (95 dB ⚠️)'}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsAcousticReflexActive(!isAcousticReflexActive)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '11.5px',
                fontWeight: '700',
                border: isAcousticReflexActive ? '2px solid #dc2626' : '1px solid #cbd5e1',
                background: isAcousticReflexActive ? '#fef2f2' : '#ffffff',
                color: isAcousticReflexActive ? '#b91c1c' : '#475569',
                cursor: 'pointer',
              }}
            >
              <ShieldAlert size={14} />
              Acoustic Reflex: {isAcousticReflexActive ? 'ENGAGED (Stapedius & Tensor Dampening)' : 'Relaxed'}
            </button>
          </div>

          {/* Mechanical Pipeline Diagram */}
          <div
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: '#0f172a',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <strong style={{ fontSize: '14px', color: '#38bdf8' }}>
                Mechanical Transmission &amp; Impedance Matching Architecture
              </strong>
              <span style={{ fontSize: '11.5px', padding: '3px 8px', borderRadius: '4px', background: '#1e293b', color: '#94a3b8' }}>
                Medium: Air (Outer/Middle) → Dense Perilymph Fluid (Inner Ear)
              </span>
            </div>

            {/* Step-by-step mechanical blocks */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', alignItems: 'center' }}>
              <div style={{ padding: '12px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: '700' }}>1. OUTER EAR</span>
                <strong style={{ display: 'block', fontSize: '13px', margin: '4px 0 2px' }}>Pinna &amp; Canal</strong>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>Funnels airborne acoustic waves</span>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: '#1e293b', border: '1px solid #38bdf8', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: '700' }}>2. TRANSDUCER</span>
                <strong style={{ display: 'block', fontSize: '13px', margin: '4px 0 2px' }}>Tympanic Membr.</strong>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>Area: ~55 mm² (large surface)</span>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: isAcousticReflexActive ? '#450a0a' : '#1e293b', border: isAcousticReflexActive ? '1px solid #dc2626' : '1px solid #334155', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: isAcousticReflexActive ? '#f87171' : '#38bdf8', fontWeight: '700' }}>3. LEVER ARM</span>
                <strong style={{ display: 'block', fontSize: '13px', margin: '4px 0 2px' }}>Malleus &amp; Incus</strong>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>Lever ratio: 1.3 to 1</span>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: '#1e293b', border: '1px solid #a855f7', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#c084fc', fontWeight: '700' }}>4. PISTON</span>
                <strong style={{ display: 'block', fontSize: '13px', margin: '4px 0 2px' }}>Stapes Footplate</strong>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>Area: ~3.2 mm² (small surface)</span>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: '#1e293b', border: '1px solid #10b981', textAlign: 'center' }}>
                <span style={{ fontSize: '11px', color: '#34d399', fontWeight: '700' }}>5. INNER EAR</span>
                <strong style={{ display: 'block', fontSize: '13px', margin: '4px 0 2px' }}>Oval Window</strong>
                <span style={{ fontSize: '10.5px', color: '#94a3b8' }}>Displaces cochlear fluid</span>
              </div>
            </div>

            {/* Amplification Math Box */}
            <div style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <strong style={{ fontSize: '13px', color: '#38bdf8' }}>The Physics of ~20-Fold Amplification:</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#cbd5e1' }}>
                    <strong>Pressure = Force / Area.</strong> Tympanic membrane (55 mm²) ÷ Stapes footplate (3.2 mm²) = <strong>17.2×</strong> hydraulic pressure gain.
                    Combined with the <strong>1.3×</strong> ossicular lever arm advantage: 17.2 × 1.3 ≈ <strong>22.4× total amplification</strong>.
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ display: 'block', fontSize: '11px', color: '#94a3b8' }}>Energy Transfer</span>
                  <span style={{ fontSize: '18px', fontWeight: '800', color: isAcousticReflexActive ? '#f87171' : '#34d399' }}>
                    {isAcousticReflexActive ? 'Dampened (~6x)' : '~20-Fold Force Gain'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Eustachian Tube & Middle Ear Protection Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <strong style={{ fontSize: '13.5px', color: '#0284c7', display: 'block', marginBottom: '6px' }}>
                Eustachian (Pharyngotympanic) Tube Dynamics
              </strong>
              <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#334155', lineHeight: 1.45 }}>
                Connects middle ear with nasopharynx. Normally collapsed; opens during swallowing and yawning to equalize pressure across the eardrum.
              </p>
              <div style={{ padding: '8px 10px', borderRadius: '6px', background: '#f0f9ff', border: '1px solid #bae6fd', fontSize: '11.5px', color: '#0369a1' }}>
                💡 <strong>Clinical Pearl:</strong> Eustachian tube dysfunction causes negative middle-ear pressure, serous fluid accumulation (otitis media with effusion), and conductive dampening.
              </div>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <strong style={{ fontSize: '13.5px', color: '#dc2626', display: 'block', marginBottom: '6px' }}>
                Acoustic Reflex: Tensor Tympani &amp; Stapedius
              </strong>
              <p style={{ margin: '0 0 8px', fontSize: '12px', color: '#334155', lineHeight: 1.45 }}>
                • <strong>Tensor tympani (CN V3)</strong> pulls malleus medially; <strong>Stapedius (CN VII)</strong> tilts stapes away from oval window.
              </p>
              <div style={{ padding: '8px 10px', borderRadius: '6px', background: '#fef2f2', border: '1px solid #fecaca', fontSize: '11.5px', color: '#991b1b' }}>
                ⚠️ <strong>Limitation:</strong> Has a 40–100 ms reflex latency. Cannot protect against sudden explosive sounds (gunshots) and fatigues under chronic noise.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- TAB 2: COCHLEAR TONOTOPY ------------------- */}
      {activeTab === 'tonotopy' && (
        <div>
          <div style={{ padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#0f172a', display: 'block' }}>
              Basilar Membrane Tonotopic Frequency Gradient
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>
              The cochlea uncoils into an anatomical acoustic prism. Select a sound frequency to observe its specific point of resonance and maximum basilar membrane displacement.
            </p>
          </div>

          {/* Frequency buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px', marginBottom: '18px' }}>
            {FREQUENCIES.map((f) => {
              const isSelected = selectedFreq.hz === f.hz;
              return (
                <button
                  key={f.hz}
                  type="button"
                  onClick={() => setSelectedFreq(f)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: isSelected ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    background: isSelected ? '#e0f2fe' : '#ffffff',
                    color: isSelected ? '#0369a1' : '#334155',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '13px' }}>{f.label}</strong>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>{f.region}</span>
                </button>
              );
            })}
          </div>

          {/* Uncoiled Cochlea Visual Model */}
          <div
            style={{
              padding: '20px',
              borderRadius: '12px',
              background: '#0f172a',
              color: '#ffffff',
              marginBottom: '18px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#38bdf8' }}>
                Uncoiled Basilar Membrane (Length ~33 mm)
              </span>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                Active Frequency: <strong style={{ color: '#38bdf8' }}>{selectedFreq.hz} Hz</strong>
              </span>
            </div>

            {/* Gradient Membrane Bar */}
            <div
              style={{
                position: 'relative',
                height: '56px',
                borderRadius: '8px',
                background: 'linear-gradient(to right, #0284c7, #38bdf8, #10b981, #f59e0b, #ef4444)',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '11px',
              }}
            >
              <div style={{ padding: '0 12px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                BASE (Stiff &amp; Narrow: 0.1 mm)<br />
                <span style={{ fontSize: '10px', opacity: 0.9 }}>High Hz (20 kHz)</span>
              </div>

              {/* Indicator of active frequency */}
              <div
                style={{
                  position: 'absolute',
                  left:
                    selectedFreq.hz === 16000 ? '12%' :
                    selectedFreq.hz === 4000 ? '34%' :
                    selectedFreq.hz === 1500 ? '55%' :
                    selectedFreq.hz === 500 ? '75%' : '92%',
                  top: '-8px',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  color: '#0f172a',
                  padding: '4px 10px',
                  borderRadius: '999px',
                  fontWeight: '800',
                  fontSize: '11px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  whiteSpace: 'nowrap',
                  border: '2px solid #0284c7',
                }}
              >
                ▼ Peak Wave: {selectedFreq.hz} Hz
              </div>

              <div style={{ padding: '0 12px', textAlign: 'right', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                APEX (Flexible &amp; Wide: 0.5 mm)<br />
                <span style={{ fontSize: '10px', opacity: 0.9 }}>Low Hz (20 Hz)</span>
              </div>
            </div>

            {/* Details Box */}
            <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #334155' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Anatomical Zone:</span>
                <strong style={{ display: 'block', fontSize: '12.5px', color: '#f8fafc' }}>{selectedFreq.region}</strong>
                <span style={{ fontSize: '11px', color: '#38bdf8' }}>{selectedFreq.stiffness}</span>
              </div>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #334155' }}>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Clinical Pathology Relevance:</span>
                <p style={{ margin: '2px 0 0', fontSize: '11.5px', color: '#e2e8f0' }}>{selectedFreq.clinical}</p>
              </div>
            </div>
          </div>

          {/* Clinical Insight: Why Base is Vulnerable */}
          <div style={{ padding: '16px', borderRadius: '12px', background: '#fffbeb', border: '1px solid #fde68a' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <AlertTriangle size={18} color="#d97706" />
              <strong style={{ fontSize: '13.5px', color: '#b45309' }}>
                Why Presbycusis &amp; Ototoxicity Attack the Base First:
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '12px', color: '#92400e', lineHeight: 1.5 }}>
              All sound waves enter through the oval window at the cochlear base before traveling onward. As a result, basal hair cells experience mechanical stress from <em>every</em> sound wave that enters the ear, accumulating oxidative stress and metabolic exhaustion throughout life. Consequently, high-frequency hearing loss is the hallmark of aging and aminoglycoside toxicity.
            </p>
          </div>
        </div>
      )}

      {/* ------------------- TAB 3: HAIR CELL TRANSDUCTION ------------------- */}
      {activeTab === 'haircell' && (
        <div>
          <div style={{ padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#0f172a', display: 'block' }}>
              Inner vs. Outer Hair Cells &amp; Potassium-Driven Depolarization
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>
              Auditory hair cells do not use sodium for depolarization. Instead, their apical stereocilia bathe in potassium-rich (+80 mV) endolymph inside the scala media.
            </p>
          </div>

          {/* Interactive Shear Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setShearDirection('depolarize')}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: '700',
                border: shearDirection === 'depolarize' ? '2px solid #16a34a' : '1px solid #cbd5e1',
                background: shearDirection === 'depolarize' ? '#f0fdf4' : '#ffffff',
                color: shearDirection === 'depolarize' ? '#15803d' : '#334155',
                cursor: 'pointer',
              }}
            >
              Deflect Toward Tallest Stereocilium (Depolarization ⚡)
            </button>

            <button
              type="button"
              onClick={() => setShearDirection('neutral')}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: '700',
                border: shearDirection === 'neutral' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                background: shearDirection === 'neutral' ? '#f0f9ff' : '#ffffff',
                color: shearDirection === 'neutral' ? '#0369a1' : '#334155',
                cursor: 'pointer',
              }}
            >
              Resting State (Basal Action Potentials)
            </button>

            <button
              type="button"
              onClick={() => setShearDirection('hyperpolarize')}
              style={{
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: '700',
                border: shearDirection === 'hyperpolarize' ? '2px solid #dc2626' : '1px solid #cbd5e1',
                background: shearDirection === 'hyperpolarize' ? '#fef2f2' : '#ffffff',
                color: shearDirection === 'hyperpolarize' ? '#b91c1c' : '#334155',
                cursor: 'pointer',
              }}
            >
              Deflect Away from Tallest (Hyperpolarization)
            </button>
          </div>

          {/* Transduction State Card */}
          <div
            style={{
              padding: '18px',
              borderRadius: '12px',
              background:
                shearDirection === 'depolarize' ? '#f0fdf4' :
                shearDirection === 'hyperpolarize' ? '#fef2f2' : '#f8fafc',
              border: `1px solid ${
                shearDirection === 'depolarize' ? '#86efac' :
                shearDirection === 'hyperpolarize' ? '#fca5a5' : '#cbd5e1'
              }`,
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ fontSize: '14px', color: shearDirection === 'depolarize' ? '#15803d' : shearDirection === 'hyperpolarize' ? '#991b1b' : '#0284c7' }}>
                {shearDirection === 'depolarize' ? 'EXCITATION: Tip Links Tensed → Ion Channels Open' :
                 shearDirection === 'hyperpolarize' ? 'INHIBITION: Tip Links Slack → Channels Closed' :
                 'RESTING STATE: Partial Channel Opening'}
              </strong>
              <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '4px', background: '#ffffff', fontWeight: '700' }}>
                Potential: {shearDirection === 'depolarize' ? '-45 mV (Depolarized)' : shearDirection === 'hyperpolarize' ? '-70 mV (Hyperpolarized)' : '-60 mV (Resting)'}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px', fontSize: '12px', color: '#334155' }}>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                <strong>Tip Link &amp; Mechanosensitive Channel:</strong>
                <p style={{ margin: '3px 0 0', color: '#64748b' }}>
                  {shearDirection === 'depolarize' ? 'Mechanical tension stretches cadherin-23 / protocadherin-15 tip links, snapping open MET channels.' :
                   shearDirection === 'hyperpolarize' ? 'Stereocilia lean back, tip links slacken, closing all MET channels.' :
                   'Roughly 10-15% of MET channels remain open at rest, sustaining spontaneous baseline firing.'}
                </p>
              </div>

              <div style={{ padding: '10px', borderRadius: '6px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                <strong>Ion Currents:</strong>
                <p style={{ margin: '3px 0 0', color: '#64748b' }}>
                  {shearDirection === 'depolarize' ? 'Massive K+ influx from endolymph (+80 mV) depolarizes the cell, opening basolateral voltage-gated Ca2+ channels.' :
                   shearDirection === 'hyperpolarize' ? 'No K+ influx; basolateral K+ channels pump potassium out into perilymph (hyperpolarization).' :
                   'Steady baseline K+ turnover maintained by stria vascularis.'}
                </p>
              </div>

              <div style={{ padding: '10px', borderRadius: '6px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                <strong>Neurotransmitter &amp; CN VIII Firing:</strong>
                <p style={{ margin: '3px 0 0', color: '#64748b' }}>
                  {shearDirection === 'depolarize' ? 'Ca2+ triggers exocytosis of GLUTAMATE into synaptic cleft → High action potential frequency in spiral ganglion.' :
                   shearDirection === 'hyperpolarize' ? 'Glutamate release ceases → Auditory nerve firing falls to zero.' :
                   'Tonic, steady release of glutamate maintaining resting spike train.'}
                </p>
              </div>
            </div>
          </div>

          {/* Inner vs Outer Hair Cells Comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '13.5px', color: '#0284c7' }}>Inner Hair Cells (IHCs)</strong>
                <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '4px', background: '#e0f2fe', color: '#0369a1', fontWeight: '700' }}>
                  ~3,500 cells (1 Row)
                </span>
              </div>
              <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#334155' }}>
                <strong>Primary Sensory Transducers:</strong> Account for &gt;95% of all afferent fibers in the auditory nerve (cranial nerve VIII).
              </p>
              <span style={{ fontSize: '11.5px', color: '#64748b' }}>
                Stereocilia do not directly touch the tectorial membrane; displaced by fluid velocity in the subtectorial space.
              </span>
            </div>

            <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <strong style={{ fontSize: '13.5px', color: '#7c3aed' }}>Outer Hair Cells (OHCs)</strong>
                <span style={{ fontSize: '11px', padding: '2px 6px', borderRadius: '4px', background: '#f5f3ff', color: '#7c3aed', fontWeight: '700' }}>
                  ~12,000 cells (3 Rows)
                </span>
              </div>
              <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#334155' }}>
                <strong>Cochlear Amplifiers (Electromotility):</strong> Express motor protein <em>prestin</em>. Depolarization causes them to shorten; hyperpolarization causes them to elongate.
              </p>
              <span style={{ fontSize: '11.5px', color: '#64748b' }}>
                Provide up to 50 dB of sensitivity amplification and sharpen frequency tuning.
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- TAB 4: BINAURAL LOCALIZATION & PATHWAY ------------------- */}
      {activeTab === 'binaural' && (
        <div>
          <div style={{ padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#0f172a', display: 'block' }}>
              Horizontal Sound Localization: Interaural Timing &amp; Level Differences
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>
              The brainstem compares acoustic cues between both ears to calculate the horizontal angle (azimuth) of a sound in 3D space.
            </p>
          </div>

          {/* Sound Angle Slider */}
          <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1', marginBottom: '18px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <strong style={{ fontSize: '13px', color: '#334155' }}>
                Simulate Sound Source Angle: <span style={{ color: '#0284c7' }}>{soundAngle > 0 ? `+${soundAngle}° (Right)` : soundAngle < 0 ? `${soundAngle}° (Left)` : '0° (Dead Center)'}</span>
              </strong>
              <div style={{ display: 'flex', gap: '6px' }}>
                {[-90, -45, 0, 45, 90].map((deg) => (
                  <button
                    key={deg}
                    type="button"
                    onClick={() => setSoundAngle(deg)}
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      border: soundAngle === deg ? '2px solid #0284c7' : '1px solid #cbd5e1',
                      background: soundAngle === deg ? '#e0f2fe' : '#ffffff',
                      color: soundAngle === deg ? '#0369a1' : '#475569',
                      cursor: 'pointer',
                    }}
                  >
                    {deg === 0 ? 'Center' : deg > 0 ? `+${deg}° R` : `${deg}° L`}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="range"
              min="-90"
              max="90"
              value={soundAngle}
              onChange={(e) => setSoundAngle(parseInt(e.target.value, 10))}
              style={{ width: '100%', cursor: 'pointer' }}
            />

            {/* Calculated Dual Cues */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', marginTop: '14px' }}>
              <div style={{ padding: '12px', borderRadius: '8px', background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                <strong style={{ fontSize: '12.5px', color: '#0369a1' }}>
                  1. Interaural Time Difference (ITD)
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: '11.5px', color: '#334155' }}>
                  Time Delay: <strong>{Math.abs(Math.round((soundAngle / 90) * 650))} microseconds (µs)</strong>.
                  <br />
                  Evaluated by <strong>Medial Superior Olive (MSO)</strong> in pons. Ideal for low frequencies (&lt; 1,500 Hz).
                </p>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: '#fdf4ff', border: '1px solid #f0abfc' }}>
                <strong style={{ fontSize: '12.5px', color: '#a21caf' }}>
                  2. Interaural Level Difference (ILD)
                </strong>
                <p style={{ margin: '4px 0 0', fontSize: '11.5px', color: '#334155' }}>
                  Acoustic Head Shadow: <strong>{Math.abs(Math.round((soundAngle / 90) * 20))} dB loudness drop</strong> at far ear.
                  <br />
                  Evaluated by <strong>Lateral Superior Olive (LSO)</strong>. Ideal for high frequencies (&gt; 3,000 Hz).
                </p>
              </div>
            </div>
          </div>

          {/* Ascending Relay Pathway Flow */}
          <div style={{ padding: '16px', borderRadius: '12px', background: '#0f172a', color: '#ffffff' }}>
            <strong style={{ fontSize: '13px', color: '#38bdf8', display: 'block', marginBottom: '10px' }}>
              Ascending Central Auditory Pathway ("SLIM" Mnemonic):
            </strong>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px', textAlign: 'center', fontSize: '11px' }}>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #334155' }}>
                <strong style={{ color: '#38bdf8', display: 'block' }}>Cochlear Nuclei</strong>
                <span>Medulla/Pons junction</span>
              </div>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #38bdf8' }}>
                <strong style={{ color: '#38bdf8', display: 'block' }}>Superior Olive (S)</strong>
                <span>Binaural comparison</span>
              </div>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #334155' }}>
                <strong style={{ color: '#38bdf8', display: 'block' }}>Lateral Lemniscus (L)</strong>
                <span>Ascending tract</span>
              </div>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #c084fc' }}>
                <strong style={{ color: '#c084fc', display: 'block' }}>Inferior Colliculus (I)</strong>
                <span>Midbrain audio map</span>
              </div>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #34d399' }}>
                <strong style={{ color: '#34d399', display: 'block' }}>Medial Geniculate (M)</strong>
                <span>Thalamic relay</span>
              </div>
              <div style={{ padding: '10px', borderRadius: '6px', background: '#1e293b', border: '1px solid #fbbf24' }}>
                <strong style={{ color: '#fbbf24', display: 'block' }}>Auditory Cortex</strong>
                <span>Heschl’s Gyrus (A1)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- TAB 5: TUNING FORK SIMULATOR (WEBER & RINNE) ------------------- */}
      {activeTab === 'clinical' && (
        <div>
          <div style={{ padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#0f172a', display: 'block' }}>
              Bedside Diagnostic Simulator: 512 Hz Weber &amp; Rinne Tuning Fork Tests
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>
              Select a clinical presentation to perform bedside tuning fork examination. Compare Air Conduction (AC) against Bone Conduction (BC) to differentiate mechanical from sensorineural pathology.
            </p>
          </div>

          {/* Clinical Patient Selector */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '18px' }}>
            {CLINICAL_CASES.map((c) => {
              const isSelected = selectedCaseId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    setSelectedCaseId(c.id);
                    setActiveTuningFork(null);
                  }}
                  style={{
                    padding: '12px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    background: isSelected ? '#f0f9ff' : '#ffffff',
                    color: isSelected ? '#0369a1' : '#334155',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '13px', marginBottom: '2px' }}>{c.title.split('(')[0]}</strong>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>{c.description}</span>
                </button>
              );
            })}
          </div>

          {/* Tuning Fork Test Trigger Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setActiveTuningFork('rinne-right')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                border: activeTuningFork === 'rinne-right' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                background: activeTuningFork === 'rinne-right' ? '#e0f2fe' : '#ffffff',
                color: activeTuningFork === 'rinne-right' ? '#0369a1' : '#334155',
                cursor: 'pointer',
              }}
            >
              <Radio size={14} /> Perform Rinne Test on RIGHT Ear
            </button>

            <button
              type="button"
              onClick={() => setActiveTuningFork('rinne-left')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                border: activeTuningFork === 'rinne-left' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                background: activeTuningFork === 'rinne-left' ? '#e0f2fe' : '#ffffff',
                color: activeTuningFork === 'rinne-left' ? '#0369a1' : '#334155',
                cursor: 'pointer',
              }}
            >
              <Radio size={14} /> Perform Rinne Test on LEFT Ear
            </button>

            <button
              type="button"
              onClick={() => setActiveTuningFork('weber')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                border: activeTuningFork === 'weber' ? '2px solid #7c3aed' : '1px solid #cbd5e1',
                background: activeTuningFork === 'weber' ? '#f5f3ff' : '#ffffff',
                color: activeTuningFork === 'weber' ? '#7c3aed' : '#334155',
                cursor: 'pointer',
              }}
            >
              <Radio size={14} /> Perform Weber Test (Forehead / Midline Vertex)
            </button>
          </div>

          {/* Test Results Display */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '18px' }}>
            {/* Rinne Results Card */}
            <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ fontSize: '13.5px', color: '#0284c7' }}>Rinne Test (AC vs. BC)</strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Normal: AC &gt; BC (Positive)</span>
              </div>

              <div style={{ marginBottom: '10px', padding: '10px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#334155' }}>Right Ear:</span>
                <strong style={{ display: 'block', fontSize: '13px', color: currentCase.rightRinne.result.includes('Negative') ? '#dc2626' : '#16a34a', margin: '2px 0' }}>
                  {currentCase.rightRinne.result}
                </strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>{currentCase.rightRinne.note}</span>
              </div>

              <div style={{ padding: '10px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#334155' }}>Left Ear:</span>
                <strong style={{ display: 'block', fontSize: '13px', color: '#16a34a', margin: '2px 0' }}>
                  {currentCase.leftRinne.result}
                </strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>{currentCase.leftRinne.note}</span>
              </div>
            </div>

            {/* Weber Results Card */}
            <div style={{ padding: '16px', borderRadius: '12px', background: '#ffffff', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ fontSize: '13.5px', color: '#7c3aed' }}>Weber Test (Midline Vertex)</strong>
                <span style={{ fontSize: '11px', color: '#64748b' }}>512 Hz on Cranial Midline</span>
              </div>

              <div style={{ padding: '14px', borderRadius: '8px', background: '#f5f3ff', border: '1px solid #ddd6fe', marginBottom: '10px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#5b21b6' }}>Observed Lateralization:</span>
                <strong style={{ display: 'block', fontSize: '14px', color: '#6d28d9', margin: '4px 0' }}>
                  {currentCase.weber.lateralization}
                </strong>
                <p style={{ margin: 0, fontSize: '11.5px', color: '#4c1d95', lineHeight: 1.4 }}>
                  {currentCase.weber.note}
                </p>
              </div>

              <div style={{ padding: '10px', borderRadius: '8px', background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '11.5px', color: '#475569' }}>
                💡 <strong>Diagnostic Rule:</strong>
                <br />
                • Conductive loss lateralizes to the <em>diseased</em> ear.
                <br />
                • Sensorineural loss lateralizes to the <em>healthy</em> ear.
              </div>
            </div>
          </div>

          {/* Final Diagnosis Banner */}
          <div style={{ padding: '16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <CheckCircle2 size={18} color="#16a34a" />
              <strong style={{ fontSize: '14px', color: '#15803d' }}>
                Clinical Diagnostic Conclusion:
              </strong>
            </div>
            <p style={{ margin: 0, fontSize: '12.5px', color: '#166534', fontWeight: '600' }}>
              {currentCase.diagnosis}
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid #f1f5f9',
          fontSize: '11.5px',
          color: '#64748b',
        }}
      >
        <span>
          Auditory System: Outer → Middle (20x) → Inner (Tonotopy) → Brainstem (ITD/ILD) → Heschl’s Gyrus
        </span>
        <span>Standard: 512 Hz Tuning Fork for Rinne &amp; Weber</span>
      </div>
    </div>
  );
}
