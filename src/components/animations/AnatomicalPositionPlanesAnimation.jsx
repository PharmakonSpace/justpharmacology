// AnatomicalPositionPlanesAnimation.jsx
import React, { useState } from 'react';
import {
  Compass,
  Layers,
  Grid,
  Scissors,
  Eye,
  Info,
  Activity,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  HelpCircle,
  Sparkles
} from 'lucide-react';

const PLANES_DATA = [
  {
    id: 'sagittal',
    name: 'Sagittal Plane (Midsagittal & Parasagittal)',
    divider: 'Vertical: Left vs. Right',
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    description: 'Runs vertically from front to back, dividing the body into right and left portions.',
    midsagittal: 'Midsagittal (Median): Exact center cut producing equal symmetrical halves.',
    parasagittal: 'Parasagittal: Off-center cut producing unequal left and right portions.',
    clinicalUse: 'Primary view for neuroimaging (MRI) showing corpus callosum, brainstem, and spine alignment.',
    sliceContent: [
      { organ: 'Brain & Brainstem', detail: 'Midline profile of corpus callosum and cerebellar vermis' },
      { organ: 'Vertebral Canal', detail: 'Spinal cord running within neural foramina' },
      { organ: 'Sternum & Heart', detail: 'Anterior-posterior cardiac profile and retrosternal space' },
    ],
  },
  {
    id: 'coronal',
    name: 'Frontal (Coronal) Plane',
    divider: 'Vertical: Anterior (Front) vs. Posterior (Back)',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    description: 'Runs vertically from side to side, dividing into anterior (ventral) and posterior (dorsal) sections.',
    midsagittal: 'Named after the coronal suture of the cranium.',
    parasagittal: 'Perpendicular to both sagittal and transverse planes.',
    clinicalUse: 'Essential for bilateral symmetry comparison: lung fields, paranasal sinuses, kidneys, and pelvis.',
    sliceContent: [
      { organ: 'Bilateral Lungs', detail: 'Right (3 lobes) and left (2 lobes) symmetry and pleural recesses' },
      { organ: 'Liver & Spleen', detail: 'Subdiaphragmatic solid organ relationships' },
      { organ: 'Bilateral Kidneys', detail: 'Retroperitoneal renal parenchyma and ureteral takeoff' },
    ],
  },
  {
    id: 'transverse',
    name: 'Transverse (Horizontal / Axial) Plane',
    divider: 'Horizontal: Superior (Top) vs. Inferior (Bottom)',
    color: '#059669',
    bg: '#ecfdf5',
    border: '#a7f3d0',
    description: 'Cuts horizontally across the body, dividing into superior and inferior segments.',
    midsagittal: 'Universal CT & MRI cross-sectional slice standard.',
    parasagittal: 'Radiology viewing rule: Looking UP from the patient’s feet.',
    clinicalUse: 'Gold standard for Computed Tomography (CT). Top is Anterior; Bottom is Posterior; Left is Patient Right.',
    sliceContent: [
      { organ: 'Abdominal Viscera', detail: 'Cross-section of liver, stomach, pancreas, and spleen' },
      { organ: 'Great Vessels', detail: 'Abdominal aorta (left of spine) and IVC (right of spine)' },
      { organ: 'Vertebral Body', detail: 'Centrum positioned posteriorly with spinal cord canal' },
    ],
  },
];

const DIRECTIONAL_PAIRS = [
  {
    name: 'Superior vs. Inferior',
    latin: 'Cranial (Cephalic) vs. Caudal',
    rule: 'Axial body: toward head vs. toward feet/tail.',
    example: 'The heart is superior to the diaphragm; the stomach is inferior to the lungs.',
    caution: 'Do NOT use for limbs where joint flexion inverts gravitational relationships.',
  },
  {
    name: 'Anterior vs. Posterior',
    latin: 'Ventral vs. Dorsal',
    rule: 'Front of the body vs. back of the body.',
    example: 'The sternum is anterior to the heart; the esophagus is posterior to the trachea.',
    caution: 'In human bipeds, anterior = ventral, posterior = dorsal. In quadrupeds, ventral faces ground.',
  },
  {
    name: 'Medial vs. Lateral',
    latin: 'Towards midline vs. Away from midline',
    rule: 'Relative to the imaginary vertical midline of the body.',
    example: 'The nose is medial to the eyes; the thumb is lateral to the little finger in anatomical position.',
    caution: 'Palms face forward in anatomical stance, so the radius & thumb are always lateral.',
  },
  {
    name: 'Proximal vs. Distal',
    latin: 'Closer to trunk/origin vs. Farther along extremity',
    rule: 'Strictly reserved for limbs and branching tubular networks (vessels/GI).',
    example: 'The elbow is proximal to the wrist; the knee is distal to the hip.',
    caution: 'Always use proximal/distal for arms and legs, never superior/inferior.',
  },
  {
    name: 'Superficial vs. Deep',
    latin: 'External vs. Internal',
    rule: 'Depth relative to the external body surface/skin.',
    example: 'The epidermis is superficial to the dermis; skeletal muscles are deep to subcutaneous fat.',
    caution: 'Used in surgery and trauma to classify penetration through fascial planes.',
  },
  {
    name: 'Parietal vs. Visceral',
    latin: 'Cavity wall vs. Organ surface',
    rule: 'Double-layered serous membranes lining closed ventral body cavities.',
    example: 'Parietal pleura lines the chest wall; visceral pleura adheres directly to the lung surface.',
    caution: 'Inflammation of either layer causes painful friction rubs (pleuritis, peritonitis).',
  },
];

const QUADRANTS = [
  {
    id: 'RUQ',
    name: 'Right Upper Quadrant',
    color: '#0284c7',
    organs: 'Liver (Right Lobe), Gallbladder, Duodenum, Head of Pancreas, Right Kidney & Adrenal, Hepatic Flexure',
    clinical: 'Murphy’s Sign positive: Acute Cholecystitis, biliary colic, hepatitis, right lower lobe pneumonia.',
  },
  {
    id: 'LUQ',
    name: 'Left Upper Quadrant',
    color: '#7c3aed',
    organs: 'Stomach, Spleen, Left Lobe of Liver, Body/Tail of Pancreas, Left Kidney & Adrenal, Splenic Flexure',
    clinical: 'Kehr’s sign (referred left shoulder pain): Splenic rupture or laceration, gastric ulcer perforation, acute pancreatitis.',
  },
  {
    id: 'RLQ',
    name: 'Right Lower Quadrant',
    color: '#e11d48',
    organs: 'Cecum, Vermiform Appendix, Ascending Colon, Right Ovary & Fallopian Tube, Right Ureter, Right Spermatic Cord',
    clinical: 'McBurney’s Point tenderness: Acute Appendicitis, ruptured ectopic pregnancy, ovarian torsion, Crohn’s ileitis.',
  },
  {
    id: 'LLQ',
    name: 'Left Lower Quadrant',
    color: '#d97706',
    organs: 'Sigmoid Colon, Descending Colon, Left Ovary & Fallopian Tube, Left Ureter, Left Spermatic Cord',
    clinical: 'Left-sided lower abdominal pain: Acute Diverticulitis ("left-sided appendicitis"), ulcerative colitis, ectopic pregnancy.',
  },
];

const NINE_REGIONS = [
  { id: 'RH', name: 'Right Hypochondriac', organs: 'Liver, Gallbladder, Right Kidney', row: 1, col: 1 },
  { id: 'EPI', name: 'Epigastric', organs: 'Stomach, Liver, Pancreas, Duodenum', row: 1, col: 2 },
  { id: 'LH', name: 'Left Hypochondriac', organs: 'Spleen, Stomach, Left Kidney', row: 1, col: 3 },
  { id: 'RL', name: 'Right Lumbar (Lateral)', organs: 'Ascending Colon, Small Intestine', row: 2, col: 1 },
  { id: 'UMB', name: 'Umbilical', organs: 'Transverse Colon, Small Intestine, Aorta', row: 2, col: 2 },
  { id: 'LL', name: 'Left Lumbar (Lateral)', organs: 'Descending Colon, Small Intestine', row: 2, col: 3 },
  { id: 'RI', name: 'Right Iliac (Inguinal)', organs: 'Appendix, Cecum, R. Ovary', row: 3, col: 1 },
  { id: 'HYP', name: 'Hypogastric (Pubic)', organs: 'Urinary Bladder, Uterus, Prostate', row: 3, col: 2 },
  { id: 'LI', name: 'Left Iliac (Inguinal)', organs: 'Sigmoid Colon, L. Ovary', row: 3, col: 3 },
];

export default function AnatomicalPositionPlanesAnimation() {
  const [activeTab, setActiveTab] = useState('planes'); // 'planes' | 'directional' | 'abdominal'
  const [selectedPlane, setSelectedPlane] = useState('sagittal');
  const [selectedQuadrant, setSelectedQuadrant] = useState('RLQ');
  const [selectedRegion, setSelectedRegion] = useState('EPI');
  const [abdomenView, setAbdomenView] = useState('quadrants'); // 'quadrants' | 'nine'

  const plane = PLANES_DATA.find((p) => p.id === selectedPlane) || PLANES_DATA[0];
  const quadrant = QUADRANTS.find((q) => q.id === selectedQuadrant) || QUADRANTS[2];
  const region = NINE_REGIONS.find((r) => r.id === selectedRegion) || NINE_REGIONS[1];

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
              <Compass size={12} /> Anatomical Orientation Lab
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Anatomy &amp; Physiology Module</span>
          </div>
          <h3 style={{ margin: '6px 0 2px', fontSize: 'clamp(17px, 2.5vw, 21px)', fontWeight: '700', color: '#0f172a' }}>
            Anatomical Position, Body Planes &amp; Directional Coordinates
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Explore the fixed reference system of the human body, orthogonal imaging planes, and abdominal quadrant pathology.
          </p>
        </div>
      </div>

      {/* Primary Navigation Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {[
          { id: 'planes', label: '1. Three Cardinal Planes & CT Slicing', icon: Layers },
          { id: 'directional', label: '2. Directional Terms & Limb Axes', icon: Compass },
          { id: 'abdominal', label: '3. Abdominal Quadrants & 9 Regions', icon: Grid },
        ].map((tab) => {
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

      {/* ------------------- TAB 1: CARDINAL BODY PLANES ------------------- */}
      {activeTab === 'planes' && (
        <div>
          {/* Anatomical Position Banner */}
          <div
            style={{
              padding: '14px 18px',
              borderRadius: '12px',
              background: '#0f172a',
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Universal Reference Stance
              </span>
              <strong style={{ display: 'block', fontSize: '14px', marginTop: '2px', color: '#ffffff' }}>
                Standard Anatomical Position:
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#cbd5e1', lineHeight: 1.4 }}>
                Erect stance • Feet parallel &amp; forward • Arms at sides • Palms turned forward (thumbs lateral) • Gaze directed forward.
              </p>
            </div>
            <div style={{ padding: '6px 12px', borderRadius: '8px', background: '#1e293b', border: '1px solid #334155', fontSize: '11.5px', color: '#f8fafc' }}>
              ⚠️ <strong style={{ color: '#fbbf24' }}>Rule:</strong> Patient right/left ALWAYS refers to the <em>patient</em>, never the viewer.
            </div>
          </div>

          {/* Plane Selector Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '20px' }}>
            {PLANES_DATA.map((p) => {
              const isSelected = selectedPlane === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedPlane(p.id)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: isSelected ? `2px solid ${p.color}` : '1px solid #e2e8f0',
                    background: isSelected ? p.bg : '#ffffff',
                    color: isSelected ? p.color : '#334155',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '13px' }}>{p.name.split('(')[0]}</strong>
                  <span style={{ fontSize: '11.5px', color: '#64748b' }}>{p.divider}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Plane Display */}
          <div
            style={{
              padding: '18px',
              borderRadius: '12px',
              background: plane.bg,
              border: `1px solid ${plane.border}`,
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Scissors size={18} color={plane.color} />
                <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: plane.color }}>
                  {plane.name}
                </h4>
              </div>
              <span style={{ padding: '3px 10px', borderRadius: '999px', background: '#ffffff', border: `1px solid ${plane.border}`, fontSize: '11px', fontWeight: '700', color: plane.color }}>
                {plane.divider}
              </span>
            </div>

            <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
              {plane.description}
            </p>

            {/* Subdivisions & Clinical Radiology View */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px', marginBottom: '14px' }}>
              <div style={{ padding: '12px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                <strong style={{ fontSize: '12px', color: '#0f172a' }}>Geometry &amp; Orientation:</strong>
                <p style={{ margin: '4px 0 0', fontSize: '11.5px', color: '#64748b', lineHeight: 1.4 }}>
                  • {plane.midsagittal}
                </p>
                <p style={{ margin: '4px 0 0', fontSize: '11.5px', color: '#64748b', lineHeight: 1.4 }}>
                  • {plane.parasagittal}
                </p>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                <strong style={{ fontSize: '12px', color: '#0f172a' }}>Medical Imaging &amp; Surgical Value:</strong>
                <p style={{ margin: '4px 0 0', fontSize: '11.5px', color: '#64748b', lineHeight: 1.4 }}>
                  {plane.clinicalUse}
                </p>
              </div>
            </div>

            {/* What appears on this slice */}
            <div>
              <strong style={{ fontSize: '12px', color: '#0f172a', display: 'block', marginBottom: '6px' }}>
                Key Anatomical Structures Rendered in this Plane:
              </strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
                {plane.sliceContent.map((item, idx) => (
                  <div key={idx} style={{ padding: '10px', borderRadius: '6px', background: '#ffffff', border: '1px solid #e2e8f0' }}>
                    <strong style={{ fontSize: '12px', color: plane.color }}>{item.organ}</strong>
                    <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#64748b' }}>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------- TAB 2: DIRECTIONAL TERMS ------------------- */}
      {activeTab === 'directional' && (
        <div>
          <div style={{ padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#0f172a', display: 'block' }}>
              Standard Directional Coordinate Pairs
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b', lineHeight: 1.45 }}>
              Directional terms describe the relative position of one body structure compared to another. They are always anchored to standard anatomical position.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {DIRECTIONAL_PAIRS.map((pair, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <strong style={{ fontSize: '13.5px', color: '#0284c7' }}>{pair.name}</strong>
                    <span style={{ fontSize: '10.5px', padding: '2px 6px', borderRadius: '4px', background: '#e0f2fe', color: '#0369a1', fontWeight: '600' }}>
                      {pair.latin}
                    </span>
                  </div>
                  <p style={{ margin: '0 0 6px', fontSize: '12px', color: '#334155', fontWeight: '600' }}>
                    Definition: {pair.rule}
                  </p>
                  <div style={{ padding: '8px', borderRadius: '6px', background: '#f8fafc', border: '1px solid #e2e8f0', fontSize: '11.5px', color: '#475569', marginBottom: '8px' }}>
                    💡 <em>Example:</em> {pair.example}
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#dc2626', fontWeight: '600' }}>
                  ⚠️ {pair.caution}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ------------------- TAB 3: ABDOMINAL MAPPING ------------------- */}
      {activeTab === 'abdominal' && (
        <div>
          {/* Sub-toggle: 4 Quadrants vs 9 Regions */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
            <button
              type="button"
              onClick={() => setAbdomenView('quadrants')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '600',
                border: abdomenView === 'quadrants' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                background: abdomenView === 'quadrants' ? '#f0f9ff' : '#ffffff',
                color: abdomenView === 'quadrants' ? '#0369a1' : '#64748b',
                cursor: 'pointer',
              }}
            >
              Four Clinical Quadrants (Triage &amp; ER)
            </button>
            <button
              type="button"
              onClick={() => setAbdomenView('nine')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '600',
                border: abdomenView === 'nine' ? '2px solid #0284c7' : '1px solid #cbd5e1',
                background: abdomenView === 'nine' ? '#f0f9ff' : '#ffffff',
                color: abdomenView === 'nine' ? '#0369a1' : '#64748b',
                cursor: 'pointer',
              }}
            >
              Nine Abdominopelvic Regions (Anatomical Precision)
            </button>
          </div>

          {/* FOUR QUADRANTS VIEW */}
          {abdomenView === 'quadrants' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', marginBottom: '18px' }}>
                {QUADRANTS.map((q) => {
                  const isSelected = selectedQuadrant === q.id;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setSelectedQuadrant(q.id)}
                      style={{
                        padding: '16px',
                        borderRadius: '12px',
                        border: isSelected ? `2px solid ${q.color}` : '1px solid #cbd5e1',
                        background: isSelected ? '#f8fafc' : '#ffffff',
                        textAlign: 'left',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ fontSize: '16px', fontWeight: '800', color: q.color }}>{q.id}</span>
                        <strong style={{ fontSize: '13px', color: '#0f172a' }}>{q.name}</strong>
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#475569', marginBottom: '8px', lineHeight: 1.4 }}>
                        <strong>Viscera:</strong> {q.organs}
                      </div>
                      <div style={{ fontSize: '11.5px', color: '#b91c1c', fontWeight: '600' }}>
                        🚨 {q.clinical}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Quadrant Deep Dive */}
              <div style={{ padding: '16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <CheckCircle2 size={18} color="#16a34a" />
                  <strong style={{ fontSize: '14px', color: '#15803d' }}>
                    Clinical Correlation: {quadrant.name} ({quadrant.id})
                  </strong>
                </div>
                <p style={{ margin: '0 0 6px', fontSize: '12.5px', color: '#166534' }}>
                  <strong>Key Viscera:</strong> {quadrant.organs}
                </p>
                <p style={{ margin: 0, fontSize: '12.5px', color: '#166534' }}>
                  <strong>Diagnostic Value:</strong> {quadrant.clinical}
                </p>
              </div>
            </div>
          )}

          {/* NINE REGIONS VIEW */}
          {abdomenView === 'nine' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', maxWidth: '600px', margin: '0 auto 16px' }}>
                {NINE_REGIONS.map((r) => {
                  const isSelected = selectedRegion === r.id;
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setSelectedRegion(r.id)}
                      style={{
                        padding: '12px 8px',
                        borderRadius: '8px',
                        border: isSelected ? '2px solid #0284c7' : '1px solid #cbd5e1',
                        background: isSelected ? '#e0f2fe' : '#ffffff',
                        textAlign: 'center',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ display: 'block', fontSize: '11px', fontWeight: '800', color: isSelected ? '#0369a1' : '#64748b' }}>
                        {r.id}
                      </span>
                      <strong style={{ display: 'block', fontSize: '11.5px', color: '#0f172a', marginTop: '2px' }}>
                        {r.name}
                      </strong>
                    </button>
                  );
                })}
              </div>

              {/* Selected Region Detail */}
              <div style={{ padding: '14px 18px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
                <strong style={{ fontSize: '13px', color: '#0284c7', display: 'block', marginBottom: '4px' }}>
                  {region.name} Region ({region.id})
                </strong>
                <span style={{ fontSize: '12px', color: '#334155' }}>
                  Primary Organs: {region.organs}
                </span>
              </div>
            </div>
          )}
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
          Anatomical Coordinate System • Fixed Reference Standard
        </span>
        <span>Orientation: Patient Right is Viewer Left</span>
      </div>
    </div>
  );
}
