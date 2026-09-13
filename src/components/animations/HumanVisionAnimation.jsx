// HumanVisionAnimation.jsx
import React, { useState } from 'react';
import {
  Eye,
  Sun,
  Moon,
  Zap,
  Layers,
  Network,
  Maximize2,
  Minimize2,
  Sparkles,
  Info,
  CheckCircle2,
  HelpCircle,
  Activity,
  Compass,
  ArrowRight
} from 'lucide-react';

const TABS = [
  { id: 'optomechanics', label: '1. Optomechanics & Accommodation', icon: Eye, color: '#0284c7', bg: '#f0f9ff' },
  { id: 'phototransduction', label: '2. Phototransduction (Rods vs Cones)', icon: Zap, color: '#8b5cf6', bg: '#f5f3ff' },
  { id: 'retinal-circuit', label: '3. Retinal 3-Tier Neural Chain', icon: Layers, color: '#0d9488', bg: '#f0fdfa' },
  { id: 'visual-pathway', label: '4. Optic Chiasma & Cortex Mapping', icon: Network, color: '#d97706', bg: '#fffbeb' },
  { id: 'stereopsis', label: '5. Binocular Depth & 3D Stereopsis', icon: Compass, color: '#16a34a', bg: '#f0fdf4' },
];

export default function HumanVisionAnimation() {
  const [activeTab, setActiveTab] = useState('optomechanics');

  // Optomechanics state
  const [distanceMode, setDistanceMode] = useState('distant'); // 'distant' | 'near'
  const [pupilLightMode, setPupilLightMode] = useState('normal'); // 'bright' | 'normal' | 'dim'

  // Phototransduction state
  const [selectedPhotoreceptor, setSelectedPhotoreceptor] = useState('rod'); // 'rod' | 'cone'
  const [cascadeStep, setCascadeStep] = useState(0);

  // Retinal circuit state
  const [isPhotonFired, setIsPhotonFired] = useState(false);

  // Visual pathway state
  const [selectedLesion, setSelectedLesion] = useState('none'); // 'none' | 'chiasma' | 'right-tract' | 'right-nerve'

  // Stereopsis state
  const [disparityOffset, setDisparityOffset] = useState(18);

  const triggerPhoton = () => {
    setIsPhotonFired(true);
    setTimeout(() => setIsPhotonFired(false), 2400);
  };

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
      {/* Header */}
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
              <Sparkles size={12} /> Neuro-Optics Simulator
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Anatomy &amp; Physiology Module</span>
          </div>
          <h3 style={{ margin: '6px 0 2px', fontSize: 'clamp(17px, 2.5vw, 21px)', fontWeight: '700', color: '#0f172a' }}>
            Human Vision Physiological Pipeline
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Optomechanical refraction, ciliary accommodation, photochemical transduction, retinal circuits, and cortical mapping.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '8px',
          marginBottom: '20px',
        }}
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 12px',
                borderRadius: '10px',
                border: isActive ? `2px solid ${tab.color}` : '1px solid #e2e8f0',
                background: isActive ? tab.bg : '#ffffff',
                color: isActive ? tab.color : '#334155',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon size={16} color={isActive ? tab.color : '#64748b'} style={{ flexShrink: 0 }} />
              <span style={{ lineHeight: 1.3 }}>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ----------------- TAB 1: OPTOMECHANICS & ACCOMMODATION ----------------- */}
      {activeTab === 'optomechanics' && (
        <div>
          {/* Controls */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              padding: '12px 16px',
              background: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              marginBottom: '16px',
            }}
          >
            <div>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b', display: 'block' }}>
                Accommodation Target Distance:
              </span>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <button
                  type="button"
                  onClick={() => setDistanceMode('distant')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: distanceMode === 'distant' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    background: distanceMode === 'distant' ? '#e0f2fe' : '#ffffff',
                    color: distanceMode === 'distant' ? '#0369a1' : '#475569',
                    cursor: 'pointer',
                  }}
                >
                  🌲 Distant Vision (&gt; 6 meters)
                </button>
                <button
                  type="button"
                  onClick={() => setDistanceMode('near')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    border: distanceMode === 'near' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                    background: distanceMode === 'near' ? '#e0f2fe' : '#ffffff',
                    color: distanceMode === 'near' ? '#0369a1' : '#475569',
                    cursor: 'pointer',
                  }}
                >
                  📖 Near Vision (Reading ~25 cm)
                </button>
              </div>
            </div>

            <div>
              <span style={{ fontSize: '12px', fontWeight: '700', color: '#1e293b', display: 'block' }}>
                Ambient Light (Pupillary Reflex):
              </span>
              <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                {[
                  { id: 'bright', label: '☀️ Bright (Constrict)', size: 8 },
                  { id: 'normal', label: '⛅ Normal', size: 14 },
                  { id: 'dim', label: '🌙 Dim (Dilate)', size: 22 },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPupilLightMode(m.id)}
                    style={{
                      padding: '5px 10px',
                      borderRadius: '6px',
                      fontSize: '11.5px',
                      fontWeight: '600',
                      border: pupilLightMode === m.id ? '1px solid #0284c7' : '1px solid #cbd5e1',
                      background: pupilLightMode === m.id ? '#0284c7' : '#ffffff',
                      color: pupilLightMode === m.id ? '#ffffff' : '#475569',
                      cursor: 'pointer',
                    }}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Eye Diagram SVG */}
          <div
            style={{
              background: '#0f172a',
              borderRadius: '14px',
              padding: '20px',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#38bdf8' }}>
                Cross-Sectional Optomechanical Model
              </span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                Status: Lens is <strong>{distanceMode === 'distant' ? 'Flattened (Low Power)' : 'Bulged Convex (High Power)'}</strong>
              </span>
            </div>

            <svg viewBox="0 0 700 320" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Outer Sclera */}
              <path
                d="M 160 50 A 130 130 0 1 1 160 270"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="10"
              />
              {/* Choroid */}
              <path
                d="M 160 55 A 125 125 0 1 1 160 265"
                fill="none"
                stroke="#78350f"
                strokeWidth="4"
              />
              {/* Retina */}
              <path
                d="M 160 60 A 120 120 0 1 1 160 260"
                fill="none"
                stroke="#e11d48"
                strokeWidth="5"
              />

              {/* Fovea Centralis */}
              <circle cx="390" cy="160" r="5" fill="#fbbf24" />
              <text x="405" y="164" fill="#fbbf24" fontSize="11" fontWeight="bold">Fovea Centralis (High Acuity Cones)</text>

              {/* Optic Disc / Blind Spot */}
              <rect x="360" y="210" width="30" height="25" fill="#0f172a" rx="4" />
              <text x="400" y="225" fill="#f87171" fontSize="11">Optic Disc (Blind Spot - No Photoreceptors)</text>

              {/* Cornea (Anterior) */}
              <path
                d="M 160 70 C 100 110, 100 210, 160 250"
                fill="rgba(56, 189, 248, 0.15)"
                stroke="#38bdf8"
                strokeWidth="4"
              />
              <text x="50" y="80" fill="#38bdf8" fontSize="11" fontWeight="bold">Cornea (Avascular, Fixed Refraction)</text>

              {/* Anterior Cavity with Aqueous Humor */}
              <text x="100" y="195" fill="#7dd3fc" fontSize="10">Aqueous Humor</text>

              {/* Vitreous Chamber */}
              <text x="230" y="160" fill="#64748b" fontSize="13" fontWeight="600" opacity="0.6">
                Vitreous Humor (Gel Support)
              </text>

              {/* Iris & Pupil */}
              {/* Upper Iris */}
              <rect
                x="170"
                y="90"
                width="8"
                height={pupilLightMode === 'bright' ? 55 : pupilLightMode === 'normal' ? 45 : 30}
                fill="#0d9488"
                rx="3"
              />
              {/* Lower Iris */}
              <rect
                x="170"
                y={pupilLightMode === 'bright' ? 175 : pupilLightMode === 'normal' ? 185 : 200}
                width="8"
                height={pupilLightMode === 'bright' ? 55 : pupilLightMode === 'normal' ? 45 : 30}
                fill="#0d9488"
                rx="3"
              />
              <text x="140" y="145" fill="#14b8a6" fontSize="10" fontWeight="bold">Pupil</text>

              {/* Ciliary Body & Muscle */}
              <circle cx="188" cy="70" r="9" fill={distanceMode === 'near' ? '#f43f5e' : '#64748b'} />
              <circle cx="188" cy="250" r="9" fill={distanceMode === 'near' ? '#f43f5e' : '#64748b'} />
              <text x="202" y="68" fill={distanceMode === 'near' ? '#fda4af' : '#94a3b8'} fontSize="10">
                Ciliary Muscle {distanceMode === 'near' ? '(CONTRACTED)' : '(RELAXED)'}
              </text>

              {/* Suspensory Ligaments (Zonules) */}
              <line
                x1="188"
                y1="75"
                x2="188"
                y2="105"
                stroke={distanceMode === 'near' ? '#94a3b8' : '#38bdf8'}
                strokeWidth={distanceMode === 'near' ? 1.5 : 3}
                strokeDasharray={distanceMode === 'near' ? '3,3' : 'none'}
              />
              <line
                x1="188"
                y1="245"
                x2="188"
                y2="215"
                stroke={distanceMode === 'near' ? '#94a3b8' : '#38bdf8'}
                strokeWidth={distanceMode === 'near' ? 1.5 : 3}
                strokeDasharray={distanceMode === 'near' ? '3,3' : 'none'}
              />
              <text x="195" y="95" fill="#94a3b8" fontSize="9">
                Zonules {distanceMode === 'near' ? '(Slacked/Tension Low)' : '(Taut Tension)'}
              </text>

              {/* Crystalline Lens */}
              {distanceMode === 'distant' ? (
                // Flattened lens
                <ellipse cx="188" cy="160" rx="10" ry="50" fill="rgba(255,255,255,0.85)" stroke="#38bdf8" strokeWidth="2" />
              ) : (
                // Bulged / Convex lens
                <ellipse cx="188" cy="160" rx="20" ry="46" fill="rgba(255,255,255,0.92)" stroke="#f59e0b" strokeWidth="3" />
              )}
              <text x="160" y="285" fill="#e2e8f0" fontSize="11" fontWeight="bold">
                Lens: {distanceMode === 'distant' ? 'Flatter (Lower Diopters)' : 'Convex (Higher Diopters)'}
              </text>

              {/* Refracting Light Rays */}
              {distanceMode === 'distant' ? (
                // Parallel incoming rays
                <>
                  <line x1="20" y1="120" x2="135" y2="120" stroke="#fef08a" strokeWidth="2" />
                  <line x1="20" y1="160" x2="120" y2="160" stroke="#fef08a" strokeWidth="2" />
                  <line x1="20" y1="200" x2="135" y2="200" stroke="#fef08a" strokeWidth="2" />

                  {/* Refracted at cornea and lens to fovea */}
                  <line x1="135" y1="120" x2="188" y2="135" stroke="#fef08a" strokeWidth="2" />
                  <line x1="120" y1="160" x2="188" y2="160" stroke="#fef08a" strokeWidth="2" />
                  <line x1="135" y1="200" x2="188" y2="185" stroke="#fef08a" strokeWidth="2" />

                  <line x1="188" y1="135" x2="390" y2="160" stroke="#facc15" strokeWidth="2.5" />
                  <line x1="188" y1="160" x2="390" y2="160" stroke="#facc15" strokeWidth="2.5" />
                  <line x1="188" y1="185" x2="390" y2="160" stroke="#facc15" strokeWidth="2.5" />
                </>
              ) : (
                // Divergent incoming rays from near point
                <>
                  <circle cx="20" cy="160" r="6" fill="#f59e0b" />
                  <text x="10" y="145" fill="#f59e0b" fontSize="10" fontWeight="bold">Near Object (25cm)</text>
                  <line x1="20" y1="160" x2="135" y2="115" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="20" y1="160" x2="120" y2="160" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="20" y1="160" x2="135" y2="205" stroke="#f59e0b" strokeWidth="2" />

                  <line x1="135" y1="115" x2="188" y2="130" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="120" y1="160" x2="188" y2="160" stroke="#f59e0b" strokeWidth="2" />
                  <line x1="135" y1="205" x2="188" y2="190" stroke="#f59e0b" strokeWidth="2" />

                  {/* Sharp convergence due to thick lens */}
                  <line x1="188" y1="130" x2="390" y2="160" stroke="#facc15" strokeWidth="3" />
                  <line x1="188" y1="160" x2="390" y2="160" stroke="#facc15" strokeWidth="3" />
                  <line x1="188" y1="190" x2="390" y2="160" stroke="#facc15" strokeWidth="3" />
                </>
              )}
            </svg>
          </div>

          {/* Accommodation Mechanics Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginTop: '16px' }}>
            <div style={{ padding: '14px', borderRadius: '10px', background: '#f0f9ff', border: '1px solid #bae6fd' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <CheckCircle2 size={16} color="#0284c7" />
                <strong style={{ fontSize: '13px', color: '#0369a1' }}>The Accommodation Sequence Formula</strong>
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#0c4a6e', lineHeight: 1.45 }}>
                <strong>Near object</strong> → <strong>Ciliary muscle contracts</strong> → <strong>Zonular ligaments relax/slacken</strong> → <strong>Elastic lens rounds into convex shape</strong> → <strong>Refractive power increases (diopters climb)</strong> → Sharp retinal focus achieved.
              </p>
            </div>

            <div style={{ padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                <Info size={16} color="#475569" />
                <strong style={{ fontSize: '13px', color: '#1e293b' }}>Cornea vs. Lens Functional Split</strong>
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#475569', lineHeight: 1.45 }}>
                The <strong>cornea</strong> provides roughly <strong>70% (~40-44 D)</strong> of the eye’s fixed, unchangeable refraction. The <strong>lens</strong> provides the remaining <strong>adjustable ~15-20 D</strong> required for dynamic distance shifting.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- TAB 2: PHOTOTRANSDUCTION (RODS VS CONES) ----------------- */}
      {activeTab === 'phototransduction' && (
        <div>
          {/* Photoreceptor Selector */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setSelectedPhotoreceptor('rod')}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '12px',
                border: selectedPhotoreceptor === 'rod' ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
                background: selectedPhotoreceptor === 'rod' ? '#f5f3ff' : '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px', color: '#6d28d9' }}>Rod Photoreceptor</strong>
                <span style={{ fontSize: '11px', background: '#ede9fe', color: '#6d28d9', padding: '2px 8px', borderRadius: '999px', fontWeight: '700' }}>
                  ~120 Million
                </span>
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Scotopic (Dim-light), Grayscale, High Sensitivity</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedPhotoreceptor('cone')}
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '12px',
                border: selectedPhotoreceptor === 'cone' ? '2px solid #8b5cf6' : '1px solid #e2e8f0',
                background: selectedPhotoreceptor === 'cone' ? '#f5f3ff' : '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <strong style={{ fontSize: '14px', color: '#6d28d9' }}>Cone Photoreceptor</strong>
                <span style={{ fontSize: '11px', background: '#ede9fe', color: '#6d28d9', padding: '2px 8px', borderRadius: '999px', fontWeight: '700' }}>
                  ~6 Million
                </span>
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Photopic (Daylight), Color (S/M/L), High Acuity Fovea</span>
            </button>
          </div>

          {/* Interactive Biochemical Phototransduction Cascade */}
          <div
            style={{
              padding: '16px',
              borderRadius: '14px',
              background: '#0f172a',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#c084fc' }}>
                Biochemical Phototransduction Cascade ({selectedPhotoreceptor === 'rod' ? 'Rhodopsin' : 'Photopsin'})
              </span>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>Step {cascadeStep + 1} of 4</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
              {[
                {
                  step: 0,
                  title: '1. Photon Absorption',
                  desc: 'Photon strikes 11-cis-retinal chromophore inside opsin transmembrane pocket.',
                },
                {
                  step: 1,
                  title: '2. Retinal Isomerization',
                  desc: '11-cis isomerizes to all-trans-retinal, causing conformational change to Metarhodopsin II.',
                },
                {
                  step: 2,
                  title: '3. Transducin & PDE',
                  desc: 'G-protein Transducin triggers Phosphodiesterase (PDE), hydrolyzing cGMP to 5\'-GMP.',
                },
                {
                  step: 3,
                  title: '4. Hyperpolarization',
                  desc: 'Fall in cGMP closes cGMP-gated Na+/Ca2+ channels. Photoreceptor HYPERPOLARIZES (-70mV) reducing glutamate!',
                },
              ].map((item) => (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setCascadeStep(item.step)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: cascadeStep === item.step ? '2px solid #a855f7' : '1px solid #334155',
                    background: cascadeStep === item.step ? 'rgba(168, 85, 247, 0.2)' : '#1e293b',
                    color: '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <strong style={{ fontSize: '11.5px', color: cascadeStep === item.step ? '#d8b4fe' : '#94a3b8', display: 'block' }}>
                    {item.title}
                  </strong>
                  <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#cbd5e1', lineHeight: 1.35 }}>
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>

            <div style={{ marginTop: '14px', padding: '10px 14px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155' }}>
              <span style={{ fontSize: '12px', color: '#fbbf24', fontWeight: 'bold' }}>
                ⚡ Paradoxical Dark vs Light Mechanism:
              </span>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#e2e8f0', lineHeight: 1.45 }}>
                In total darkness, photoreceptors are <strong>depolarized (~ -40 mV)</strong> by the continuous inward "dark current" of Na+ and continuously release glutamate. <strong>LIGHT STOPS THIS</strong>: light closes sodium channels, hyperpolarizes the membrane, and decreases inhibitory glutamate release!
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div style={{ overflowX: 'auto', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12.5px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', color: '#475569' }}>
                  <th style={{ padding: '10px 14px' }}>Feature</th>
                  <th style={{ padding: '10px 14px', color: '#6d28d9' }}>Rods (Scotopic)</th>
                  <th style={{ padding: '10px 14px', color: '#0369a1' }}>Cones (Photopic)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600' }}>Light Sensitivity</td>
                  <td style={{ padding: '10px 14px' }}>Extreme (Can detect a single photon)</td>
                  <td style={{ padding: '10px 14px' }}>Low (Requires hundreds of photons)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9', background: '#fbfcfd' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600' }}>Color Perception</td>
                  <td style={{ padding: '10px 14px' }}>None (Achromatic / Grayscale)</td>
                  <td style={{ padding: '10px 14px' }}>Trichromatic: Blue (420nm), Green (530nm), Red (560nm)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '10px 14px', fontWeight: '600' }}>Visual Acuity &amp; Resolution</td>
                  <td style={{ padding: '10px 14px' }}>Low (High convergence: 100 rods → 1 ganglion)</td>
                  <td style={{ padding: '10px 14px' }}>High (1:1 private line in fovea: 1 cone → 1 ganglion)</td>
                </tr>
                <tr>
                  <td style={{ padding: '10px 14px', fontWeight: '600' }}>Retinal Distribution</td>
                  <td style={{ padding: '10px 14px' }}>Dense in peripheral retina; <strong>absent in fovea</strong></td>
                  <td style={{ padding: '10px 14px' }}>Exclusively packed into <strong>fovea centralis</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ----------------- TAB 3: RETINAL CIRCUIT ----------------- */}
      {activeTab === 'retinal-circuit' && (
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              background: '#f0fdfa',
              borderRadius: '12px',
              border: '1px solid #99f6e4',
              marginBottom: '16px',
            }}
          >
            <div>
              <strong style={{ fontSize: '13px', color: '#0f766e', display: 'block' }}>
                Three-Tier Retinal Cellular Pathway
              </strong>
              <span style={{ fontSize: '12px', color: '#115e59' }}>
                Photoreceptors → Bipolar Neurons → Ganglion Cells → Optic Nerve
              </span>
            </div>
            <button
              type="button"
              onClick={triggerPhoton}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: '700',
                border: 'none',
                background: '#0d9488',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              <Zap size={15} /> Fire Photon Pulse &amp; Trace Signal
            </button>
          </div>

          {/* Interactive Circuit Canvas */}
          <div
            style={{
              background: '#042f2e',
              borderRadius: '14px',
              padding: '24px',
              color: '#ffffff',
              position: 'relative',
            }}
          >
            <svg viewBox="0 0 680 240" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Light direction arrow */}
              <text x="20" y="30" fill="#2dd4bf" fontSize="11" fontWeight="bold">Incoming Light Direction →</text>
              <line x1="20" y1="40" x2="600" y2="40" stroke="#2dd4bf" strokeWidth="2" strokeDasharray="5,5" />

              {/* Layer 1: Ganglion Cells (Inner Retina) */}
              <g transform="translate(100, 70)">
                <circle cx="30" cy="50" r="18" fill={isPhotonFired ? '#facc15' : '#0f766e'} stroke="#2dd4bf" strokeWidth="2" />
                <text x="30" y="54" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">RGC</text>
                <text x="30" y="85" textAnchor="middle" fill="#99f6e4" fontSize="10" fontWeight="bold">Ganglion Cell</text>
                <text x="30" y="98" textAnchor="middle" fill="#5eead4" fontSize="8.5">Generates Action Potentials</text>

                {/* Axon going to optic nerve */}
                <line x1="12" y1="50" x2="-80" y2="50" stroke={isPhotonFired ? '#facc15' : '#2dd4bf'} strokeWidth="3" />
                <text x="-70" y="40" fill="#a7f3d0" fontSize="9">To Optic Nerve (CN II) →</text>
              </g>

              {/* Layer 2: Bipolar Cells (Middle) */}
              <g transform="translate(280, 70)">
                <rect x="15" y="35" width="30" height="30" rx="6" fill={isPhotonFired ? '#fbbf24' : '#115e59'} stroke="#5eead4" strokeWidth="2" />
                <text x="30" y="54" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">BIP</text>
                <text x="30" y="85" textAnchor="middle" fill="#99f6e4" fontSize="10" fontWeight="bold">Bipolar Neuron</text>
                <text x="30" y="98" textAnchor="middle" fill="#5eead4" fontSize="8.5">Graded Potentials Relay</text>

                {/* Synapse to Ganglion */}
                <line x1="15" y1="50" x2="-130" y2="50" stroke={isPhotonFired ? '#fbbf24' : '#14b8a6'} strokeWidth="2.5" />
              </g>

              {/* Layer 3: Photoreceptors (Outer Retina) */}
              <g transform="translate(460, 70)">
                <path
                  d="M 15 35 L 45 35 L 40 65 L 20 65 Z"
                  fill={isPhotonFired ? '#f59e0b' : '#134e4a'}
                  stroke="#2dd4bf"
                  strokeWidth="2"
                />
                <text x="30" y="53" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="bold">PHO</text>
                <text x="30" y="85" textAnchor="middle" fill="#99f6e4" fontSize="10" fontWeight="bold">Photoreceptors</text>
                <text x="30" y="98" textAnchor="middle" fill="#5eead4" fontSize="8.5">Rods &amp; Cones Outer Segments</text>

                {/* Synapse to Bipolar */}
                <line x1="15" y1="50" x2="-130" y2="50" stroke={isPhotonFired ? '#f59e0b' : '#14b8a6'} strokeWidth="2.5" />
              </g>

              {/* Pigment Epithelium (RPE) */}
              <rect x="540" y="60" width="20" height="120" fill="#78350f" rx="3" />
              <text x="570" y="110" fill="#d97706" fontSize="10" fontWeight="bold">Retinal Pigment</text>
              <text x="570" y="125" fill="#d97706" fontSize="10" fontWeight="bold">Epithelium (Melanin)</text>
              <text x="570" y="140" fill="#fed7aa" fontSize="8.5">Absorbs stray light</text>
            </svg>
          </div>

          <div style={{ marginTop: '14px', padding: '12px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12px', color: '#475569' }}>
            💡 <strong>Anatomical Inversion:</strong> Light travels through ganglion cells and bipolar cells <em>first</em> before reaching the photoreceptor outer segments at the back of the retina. The only place where these cell layers are pushed aside to allow unobstructed light access is the <strong>fovea centralis</strong>!
          </div>
        </div>
      )}

      {/* ----------------- TAB 4: VISUAL PATHWAY & CHIASMA MAPPING ----------------- */}
      {activeTab === 'visual-pathway' && (
        <div>
          {/* Lesion Simulation Bar */}
          <div
            style={{
              padding: '12px 16px',
              background: '#fffbeb',
              borderRadius: '12px',
              border: '1px solid #fde68a',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
              <Network size={16} color="#d97706" />
              <strong style={{ fontSize: '13px', color: '#92400e' }}>
                Optic Decussation &amp; Clinical Visual Field Deficit Simulator
              </strong>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { id: 'none', label: 'Healthy Normal Pathway' },
                { id: 'chiasma', label: '✂️ Pituitary Tumor at Chiasma (Bitemporal Hemianopsia)' },
                { id: 'right-tract', label: '✂️ Right Optic Tract Cut (Left Homonymous Hemianopsia)' },
                { id: 'right-nerve', label: '✂️ Right Optic Nerve Cut (Complete Right Anopsia)' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setSelectedLesion(btn.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '11.5px',
                    fontWeight: '600',
                    border: selectedLesion === btn.id ? '2px solid #d97706' : '1px solid #cbd5e1',
                    background: selectedLesion === btn.id ? '#fef3c7' : '#ffffff',
                    color: selectedLesion === btn.id ? '#78350f' : '#475569',
                    cursor: 'pointer',
                  }}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Pathway Diagram */}
          <div
            style={{
              background: '#1c1917',
              borderRadius: '14px',
              padding: '20px',
              color: '#ffffff',
            }}
          >
            <svg viewBox="0 0 650 360" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Left and Right Visual Fields */}
              <g transform="translate(180, 20)">
                <circle cx="70" cy="30" r="24" fill="#3b82f6" opacity="0.3" />
                <text x="70" y="34" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="bold">Left Visual Field</text>
                <circle cx="210" cy="30" r="24" fill="#22c55e" opacity="0.3" />
                <text x="210" y="34" textAnchor="middle" fill="#4ade80" fontSize="10" fontWeight="bold">Right Visual Field</text>
              </g>

              {/* Eyes */}
              {/* Left Eye */}
              <g transform="translate(200, 80)">
                <ellipse cx="30" cy="20" rx="20" ry="25" fill="#292524" stroke="#e7e5e4" strokeWidth="2" />
                <text x="30" y="24" textAnchor="middle" fill="#e7e5e4" fontSize="9">Left Eye</text>
              </g>
              {/* Right Eye */}
              <g transform="translate(360, 80)">
                <ellipse cx="30" cy="20" rx="20" ry="25" fill="#292524" stroke="#e7e5e4" strokeWidth="2" />
                <text x="30" y="24" textAnchor="middle" fill="#e7e5e4" fontSize="9">Right Eye</text>
              </g>

              {/* Optic Nerves */}
              <line x1="230" y1="105" x2="290" y2="160" stroke={selectedLesion === 'none' || selectedLesion === 'chiasma' || selectedLesion === 'right-tract' ? '#60a5fa' : '#ef4444'} strokeWidth="3" />
              <line x1="390" y1="105" x2="330" y2="160" stroke={selectedLesion === 'right-nerve' ? '#ef4444' : '#4ade80'} strokeWidth="3" strokeDasharray={selectedLesion === 'right-nerve' ? '4,4' : 'none'} />
              <text x="210" y="140" fill="#a8a29e" fontSize="9">Optic Nerves</text>

              {/* Optic Chiasma (Decussation point) */}
              <circle cx="310" cy="165" r="14" fill={selectedLesion === 'chiasma' ? '#ef4444' : '#d97706'} opacity="0.7" />
              <text x="340" y="169" fill="#fbbf24" fontSize="10.5" fontWeight="bold">
                Optic Chiasma {selectedLesion === 'chiasma' && '⚡ (Lesion!)'}
              </text>

              {/* Crossing Nasal fibers vs uncrossed temporal fibers */}
              {/* From Chiasma to Thalamus / LGN */}
              {/* Left Optic Tract */}
              <line x1="295" y1="175" x2="250" y2="240" stroke="#4ade80" strokeWidth="3" />
              <text x="210" y="210" fill="#4ade80" fontSize="9">Left Optic Tract</text>

              {/* Right Optic Tract */}
              <line
                x1="325"
                y1="175"
                x2="370"
                y2="240"
                stroke={selectedLesion === 'right-tract' ? '#ef4444' : '#60a5fa'}
                strokeWidth="3"
                strokeDasharray={selectedLesion === 'right-tract' ? '4,4' : 'none'}
              />
              <text x="380" y="210" fill={selectedLesion === 'right-tract' ? '#ef4444' : '#60a5fa'} fontSize="9">
                Right Optic Tract {selectedLesion === 'right-tract' && '(Cut!)'}
              </text>

              {/* Thalamus (Lateral Geniculate Nucleus - LGN) */}
              <rect x="235" y="240" width="30" height="20" rx="4" fill="#0369a1" />
              <text x="250" y="254" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">LGN</text>

              <rect x="355" y="240" width="30" height="20" rx="4" fill="#0369a1" />
              <text x="370" y="254" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">LGN</text>

              {/* Optic Radiations to Primary Visual Cortex */}
              <path d="M 250 260 Q 230 300 270 330" fill="none" stroke="#4ade80" strokeWidth="3" />
              <path d="M 370 260 Q 390 300 350 330" fill="none" stroke={selectedLesion === 'right-tract' ? '#78716c' : '#60a5fa'} strokeWidth="3" />

              {/* Primary Visual Cortex in Occipital Lobes */}
              <rect x="250" y="325" width="55" height="25" rx="5" fill="#15803d" />
              <text x="277" y="341" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Left V1</text>

              <rect x="315" y="325" width="55" height="25" rx="5" fill="#1d4ed8" />
              <text x="342" y="341" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="bold">Right V1</text>
            </svg>

            {/* Visual Field Deficit Result Banner */}
            <div style={{ marginTop: '12px', padding: '10px 14px', borderRadius: '8px', background: '#292524', border: '1px solid #44403c' }}>
              <span style={{ fontSize: '11.5px', color: '#f59e0b', fontWeight: 'bold' }}>Deficit Diagnosis:</span>
              <p style={{ margin: '3px 0 0', fontSize: '12px', color: '#e7e5e4', lineHeight: 1.4 }}>
                {selectedLesion === 'none' && 'Normal: Left hemisphere processes right visual field; right hemisphere processes left visual field.'}
                {selectedLesion === 'chiasma' && 'Pituitary Chiasmal Lesion: Damaged crossing nasal fibers lose the temporal visual fields of both eyes = BITEMPORAL HEMIANOPSIA (Tunnel Vision).'}
                {selectedLesion === 'right-tract' && 'Right Optic Tract Lesion: Destroys both fibers carrying the Left Visual Field = LEFT HOMONYMOUS HEMIANOPSIA.'}
                {selectedLesion === 'right-nerve' && 'Right Optic Nerve Lesion: Complete loss of vision in the right eye (Right Monocular Blindness).'}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- TAB 5: STEREOPSIS & BINOCULAR DEPTH ----------------- */}
      {activeTab === 'stereopsis' && (
        <div>
          <div style={{ padding: '14px', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#166534', display: 'block' }}>
              Retinal Disparity &amp; Cortical Stereopsis
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#14532d', lineHeight: 1.45 }}>
              Because our eyes are horizontally separated (~62–65 mm interpupillary distance), each eye captures an angle with slight horizontal parallax. The primary visual cortex fuses these two offset planar images to calculate relative distance and reconstruct a conscious three-dimensional world.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#334155' }}>
                Interpupillary Horizontal Disparity Offset: <strong>{disparityOffset}px</strong>
              </span>
              <input
                type="range"
                min="0"
                max="40"
                value={disparityOffset}
                onChange={(e) => setDisparityOffset(Number(e.target.value))}
                style={{ width: '180px', accentColor: '#16a34a' }}
              />
            </div>

            {/* Stereoscopic Overlap Demonstration */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}
            >
              <div
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '2px solid #93c5fd',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#1d4ed8' }}>Left Eye Retinal Image</span>
                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#3b82f6',
                      borderRadius: '8px',
                      position: 'absolute',
                      transform: `translateX(-${disparityOffset / 2}px)`,
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Shifted right relative to target</span>
              </div>

              <div
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: '#f8fafc',
                  border: '2px solid #86efac',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: '12px', fontWeight: '700', color: '#15803d' }}>Right Eye Retinal Image</span>
                <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      background: '#22c55e',
                      borderRadius: '8px',
                      position: 'absolute',
                      transform: `translateX(${disparityOffset / 2}px)`,
                      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Shifted left relative to target</span>
              </div>
            </div>

            {/* Fused Perception */}
            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#0f172a' }}>
                Occipital Binocular Fusion &amp; 3D Depth Perception:
              </span>
              <p style={{ margin: '6px 0 0', fontSize: '12px', color: '#475569' }}>
                {disparityOffset === 0
                  ? 'Zero Disparity: Two-dimensional planar perception (no stereoscopic depth cue).'
                  : `Calculated Depth Distance: High-confidence 3D volume reconstruction via binocular disparity (${disparityOffset} arc seconds).`}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid #f1f5f9',
        }}
      >
        <span style={{ fontSize: '11.5px', color: '#64748b' }}>
          Human Vision Module • Interactive Neuro-Optics Pipeline
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {activeTab !== 'optomechanics' && (
            <button
              type="button"
              onClick={() => {
                const curIdx = TABS.findIndex((t) => t.id === activeTab);
                if (curIdx > 0) setActiveTab(TABS[curIdx - 1].id);
              }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#334155',
                cursor: 'pointer',
              }}
            >
              Previous Section
            </button>
          )}
          {activeTab !== 'stereopsis' ? (
            <button
              type="button"
              onClick={() => {
                const curIdx = TABS.findIndex((t) => t.id === activeTab);
                if (curIdx < TABS.length - 1) setActiveTab(TABS[curIdx + 1].id);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                border: 'none',
                background: '#0284c7',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              Next Section <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveTab('optomechanics')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid #0284c7',
                background: '#f0f9ff',
                color: '#0369a1',
                cursor: 'pointer',
              }}
            >
              Restart Simulation
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
