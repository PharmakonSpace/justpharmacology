// ClinicalCommunicationNoiseAnimation.jsx
import React, { useState } from 'react';
import {
  Radio,
  Volume2,
  VolumeX,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
  Sliders,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  UserCheck,
  Activity,
  Layers,
  HeartPulse
} from 'lucide-react';

const NOISE_VECTORS = [
  {
    id: 'language',
    name: 'Vector 1: Language & Encoding Noise',
    icon: '🗣️',
    color: '#e11d48',
    penalty: 20,
    activeDesc: 'Jargon encryption active: "Idiopathic refractory essential hypertension with peripheral extravasation risk."',
    fixedDesc: 'Calibrated language: "High blood pressure needing daily medicine to protect your heart and kidneys."',
  },
  {
    id: 'environment',
    name: 'Vector 2: Environmental & Physical Noise',
    icon: '🚨',
    color: '#ea580c',
    penalty: 18,
    activeDesc: 'Alarms beeping, overhead page blaring, doctor sitting behind high desk staring at EHR screen.',
    fixedDesc: 'Quiet room, eye-level seating with barrier removed, clinician eye contact maintained.',
  },
  {
    id: 'patient',
    name: 'Vector 3: Patient Cognitive & Emotional Overload',
    icon: '🧠',
    color: '#d97706',
    penalty: 22,
    activeDesc: 'Acute grief and 8/10 postoperative pain consuming bandwidth; falling into "the nodding trap".',
    fixedDesc: 'Pain managed first; emotional validation provided before transmitting complex instructions.',
  },
  {
    id: 'clinician',
    name: 'Vector 4: Clinician Bias & Premature Advising',
    icon: '🩺',
    color: '#7c3aed',
    penalty: 16,
    activeDesc: 'Clinician interrupts after 11 seconds with dismissive reassurance: "Don\'t worry, you\'ll be fine!"',
    fixedDesc: 'Open narrative listened to for 90s; concerns validated without hollow platitudes.',
  },
  {
    id: 'organizational',
    name: 'Vector 5: Organizational Stress & Depersonalization',
    icon: '🏥',
    color: '#475569',
    penalty: 14,
    activeDesc: 'Clinician double-booked (8 mins left); patient addressed purely as "Bed 14 discharge".',
    fixedDesc: 'Humanized protocol; structured handover; sufficient pacing allocated for safe discharge.',
  },
];

export default function ClinicalCommunicationNoiseAnimation() {
  const [activeTab, setActiveTab] = useState('simulator'); // 'simulator' | 'vectors' | 'diagnostic'

  // Noise vector states (true = noise present, false = noise remediated)
  const [activeNoises, setActiveNoises] = useState({
    language: true,
    environment: true,
    patient: false,
    clinician: false,
    organizational: true,
  });

  const [teachBackActive, setTeachBackActive] = useState(false);

  // Toggle individual noise vector
  const toggleNoise = (id) => {
    setActiveNoises((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Quick preset buttons
  const setPreset = (type) => {
    if (type === 'worst') {
      setActiveNoises({ language: true, environment: true, patient: true, clinician: true, organizational: true });
      setTeachBackActive(false);
    } else if (type === 'optimal') {
      setActiveNoises({ language: false, environment: false, patient: false, clinician: false, organizational: false });
      setTeachBackActive(true);
    } else if (type === 'moderate') {
      setActiveNoises({ language: true, environment: false, patient: true, clinician: false, organizational: false });
      setTeachBackActive(false);
    }
  };

  // Calculate Signal-to-Noise Ratio (0% to 100%)
  const totalPenalty = Object.keys(activeNoises).reduce((acc, key) => {
    if (activeNoises[key]) {
      const vec = NOISE_VECTORS.find((v) => v.id === key);
      return acc + (vec ? vec.penalty : 0);
    }
    return acc;
  }, 0);

  const rawSignal = Math.max(10, 100 - totalPenalty);
  const finalSignal = teachBackActive ? Math.min(100, rawSignal + 20) : rawSignal;

  // Derive patient decoded outcome based on signal fidelity
  const getDecodedMessage = () => {
    if (finalSignal >= 85) {
      return {
        status: 'High Fidelity (Safe Shared Meaning)',
        color: '#16a34a',
        bg: '#f0fdf4',
        border: '#bbf7d0',
        text: 'Patient understands: "I take one blue pill every morning with water. If my ankles swell or I feel dizzy, I contact the nurse immediately. I must never stop it abruptly."',
        safetyNote: '✅ Patient safely demonstrates comprehension via closed feedback loop. Accidental non-compliance averted.',
      };
    } else if (finalSignal >= 50) {
      return {
        status: 'Moderate Degradation (Ambiguous Transmission)',
        color: '#d97706',
        bg: '#fffbeb',
        border: '#fde68a',
        text: 'Patient decodes: "Take something for pressure... doctor said it was high... maybe twice a day? Or only when I get a headache? He seemed rushed so I just nodded."',
        safetyNote: '⚠️ Nodding Trap: Patient appears agreeable, but silent misunderstandings and irregular dosing are imminent.',
      };
    } else {
      return {
        status: 'Severe Signal Collapse (High Clinical Risk)',
        color: '#dc2626',
        bg: '#fef2f2',
        border: '#fecaca',
        text: 'Patient decodes: "...heart failure... catastrophic danger... [telemetry noise drowned out dosage]... bed 14... take water pills whenever... stop if I feel weird."',
        safetyNote: '🚨 Critical Safety Threat: Message scrambled by compounding noise. High risk of drug toxicity or complete abandonment of therapy.',
      };
    }
  };

  const decoded = getDecodedMessage();

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
                background: '#fee2e2',
                color: '#be123c',
                fontSize: '11.5px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <Radio size={12} /> Systems-Engineering Simulator
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Healthcare Psychology Module</span>
          </div>
          <h3 style={{ margin: '6px 0 2px', fontSize: 'clamp(17px, 2.5vw, 21px)', fontWeight: '700', color: '#0f172a' }}>
            Clinical Communication Signal-to-Noise Ratio (SNR)
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Interactive systems model diagnosing how 6 vectors of noise degrade the clinical signal and threaten shared meaning.
          </p>
        </div>

        {/* Preset quick buttons */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            type="button"
            onClick={() => setPreset('worst')}
            style={{
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '11.5px',
              fontWeight: '600',
              border: '1px solid #fecaca',
              background: '#fef2f2',
              color: '#b91c1c',
              cursor: 'pointer',
            }}
          >
            Worst Case (Max Noise)
          </button>
          <button
            type="button"
            onClick={() => setPreset('moderate')}
            style={{
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '11.5px',
              fontWeight: '600',
              border: '1px solid #fed7aa',
              background: '#fff7ed',
              color: '#c2410c',
              cursor: 'pointer',
            }}
          >
            Real-World Encounter
          </button>
          <button
            type="button"
            onClick={() => setPreset('optimal')}
            style={{
              padding: '5px 10px',
              borderRadius: '6px',
              fontSize: '11.5px',
              fontWeight: '600',
              border: '1px solid #bbf7d0',
              background: '#f0fdf4',
              color: '#15803d',
              cursor: 'pointer',
            }}
          >
            Closed Safety Loop
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
        {[
          { id: 'simulator', label: '1. Transmission Channel & SNR' },
          { id: 'vectors', label: '2. Six Noise Vectors Analysis' },
          { id: 'diagnostic', label: '3. Clinical Diagnostic & Repair Loop' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '8px 14px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600',
              border: activeTab === tab.id ? '2px solid #0d9488' : '1px solid #e2e8f0',
              background: activeTab === tab.id ? '#f0fdfa' : '#ffffff',
              color: activeTab === tab.id ? '#0f766e' : '#64748b',
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ----------------- TAB 1: TRANSMISSION CHANNEL & SNR SIMULATOR ----------------- */}
      {activeTab === 'simulator' && (
        <div>
          {/* Signal Meter Banner */}
          <div
            style={{
              padding: '16px',
              borderRadius: '12px',
              background: '#0f172a',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '13px', fontWeight: '700', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Activity size={16} /> Clinical Signal Integrity (Bandwidth):
              </span>
              <span style={{ fontSize: '18px', fontWeight: '800', color: finalSignal >= 80 ? '#4ade80' : finalSignal >= 50 ? '#facc15' : '#f87171' }}>
                {finalSignal}%
              </span>
            </div>

            {/* Progress Bar */}
            <div style={{ width: '100%', height: '10px', background: '#334155', borderRadius: '999px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${finalSignal}%`,
                  height: '100%',
                  background: finalSignal >= 80 ? '#22c55e' : finalSignal >= 50 ? '#eab308' : '#ef4444',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '6px' }}>
              <span>0% (Garbled Noise)</span>
              <span>Threshold for Safe Autonomous Adherence: 80%</span>
              <span>100% (Absolute Fidelity)</span>
            </div>
          </div>

          {/* Two-Column: Intended Message vs Decoded Outcome */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '20px' }}>
            {/* Sender / Intended */}
            <div style={{ padding: '16px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <span style={{ padding: '3px 8px', borderRadius: '6px', background: '#0284c7', color: '#ffffff', fontSize: '11px', fontWeight: '700' }}>
                  SENDER
                </span>
                <strong style={{ fontSize: '13px', color: '#0f172a' }}>Clinician’s Intended Clinical Signal</strong>
              </div>
              <div style={{ padding: '12px', background: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '12.5px', color: '#334155', lineHeight: 1.5 }}>
                "Patient must take 5mg of amlodipine once daily in the morning with food. Watch for ankle swelling; if dizzy, sit down and call our clinic. Do not stop without calling us."
              </div>
              <span style={{ display: 'block', marginTop: '8px', fontSize: '11px', color: '#64748b' }}>
                Core payload: Exact drug dose, timing, adverse effect monitoring, emergency protocol.
              </span>
            </div>

            {/* Receiver / Decoded */}
            <div style={{ padding: '16px', borderRadius: '12px', background: decoded.bg, border: `1px solid ${decoded.border}` }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ padding: '3px 8px', borderRadius: '6px', background: decoded.color, color: '#ffffff', fontSize: '11px', fontWeight: '700' }}>
                    RECEIVER
                  </span>
                  <strong style={{ fontSize: '13px', color: decoded.color }}>{decoded.status}</strong>
                </div>
              </div>
              <div style={{ padding: '12px', background: '#ffffff', borderRadius: '8px', border: `1px solid ${decoded.border}`, fontSize: '12.5px', color: '#1e293b', lineHeight: 1.5 }}>
                {decoded.text}
              </div>
              <span style={{ display: 'block', marginTop: '8px', fontSize: '11px', color: decoded.color, fontWeight: '600' }}>
                {decoded.safetyNote}
              </span>
            </div>
          </div>

          {/* Interactive Noise Vector Switches */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ fontSize: '13px', color: '#0f172a' }}>
                Toggle Active Communication Noise Vectors:
              </strong>
              <span style={{ fontSize: '11.5px', color: '#64748b' }}>
                Click to introduce or remediate specific noise
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              {NOISE_VECTORS.map((v) => {
                const isActive = activeNoises[v.id];
                return (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => toggleNoise(v.id)}
                    style={{
                      padding: '12px',
                      borderRadius: '10px',
                      border: isActive ? '2px solid #ef4444' : '1px solid #bbf7d0',
                      background: isActive ? '#fef2f2' : '#f0fdf4',
                      color: isActive ? '#991b1b' : '#166534',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700' }}>
                        {v.icon} {v.name.split(':')[1] || v.name}
                      </span>
                      <span style={{ fontSize: '10.5px', padding: '2px 6px', borderRadius: '999px', background: isActive ? '#fee2e2' : '#dcfce7', fontWeight: '700' }}>
                        {isActive ? `-${v.penalty}% NOISE` : 'REPAIRED'}
                      </span>
                    </div>
                    <p style={{ margin: '6px 0 0', fontSize: '11px', lineHeight: 1.35, color: isActive ? '#b91c1c' : '#15803d' }}>
                      {isActive ? v.activeDesc : v.fixedDesc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Teach-Back Loop Remediation Button */}
          <div
            style={{
              padding: '14px',
              borderRadius: '12px',
              background: teachBackActive ? '#ecfdf5' : '#f8fafc',
              border: teachBackActive ? '2px solid #10b981' : '1px dashed #cbd5e1',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div>
              <strong style={{ fontSize: '13px', color: teachBackActive ? '#065f46' : '#1e293b' }}>
                Stage 5: Close the Loop with the Teach-Back Method (+20% Fidelity Boost)
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>
                "Just to ensure I explained this clearly, in your own words, what is your plan for taking this pill tomorrow morning?"
              </p>
            </div>
            <button
              type="button"
              onClick={() => setTeachBackActive((prev) => !prev)}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                border: 'none',
                background: teachBackActive ? '#059669' : '#0d9488',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              {teachBackActive ? '✓ Teach-Back Active (Feedback Confirmed)' : '+ Execute Teach-Back Verification'}
            </button>
          </div>
        </div>
      )}

      {/* ----------------- TAB 2: SIX NOISE VECTORS ANALYSIS ----------------- */}
      {activeTab === 'vectors' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
          {[
            {
              title: 'Vector 1: Language & Encoding Noise',
              icon: '🗣️',
              color: '#e11d48',
              points: [
                'Medical jargon functions like hostile encryption for patients without medical backgrounds.',
                'Sapir-Whorf Hypothesis: The language used to describe reality dictates how that reality is psychologically experienced.',
                '"Heart failure" sounds like immediate death; "fluid on the lungs" explains a treatable mechanical problem.',
                'Patients also encode symptoms in vague euphemisms that clinicians must actively decipher.',
              ],
            },
            {
              title: 'Vector 2: Environmental & Physical Noise',
              icon: '🚨',
              color: '#ea580c',
              points: [
                'Telemetry alarms, overhead PA pages, and corridor bustle consume sensory processing bandwidth.',
                'Clinical Attention Channel: Clinicians breaking eye contact to interact with devices signal that incoming notifications outrank the patient.',
                'Physical Geometry: Sitting behind a wide desk creates an adversarial institutional barrier.',
                'Overcoming: Eye-level seating, closing clinic doors, removing physical obstacles.',
              ],
            },
            {
              title: 'Vector 3: Patient Cognitive & Emotional Noise',
              icon: '🧠',
              color: '#d97706',
              points: [
                'Acute pain, fear, and panic deplete the prefrontal cortex’s available processing memory.',
                'Limited health literacy leaves no foundational framework to anchor complex clinical instructions.',
                'The Nodding Trap: Patients politely nod while completely overwhelmed, masking non-comprehension.',
                'Overcoming: Administer analgesia, soothe emotional distress, and chunk instructions into bite-sized steps.',
              ],
            },
            {
              title: 'Vector 4: Clinician-Generated Noise',
              icon: '🩺',
              color: '#7c3aed',
              points: [
                'Assuming demographic or cultural uniformity creates instant diagnostic misalignment.',
                'Stereotypical chart labeling ("demanding", "non-compliant") poisons downstream provider perception.',
                'The Advising Trap: Interrupting the patient narrative too early (average is 11–18 seconds) truncates vital diagnostic history.',
                'Dismissive Clichés: Hollow reassurance ("Everything will be totally fine!") invalidates legitimate concerns.',
              ],
            },
            {
              title: 'Vector 5: Organizational & Structural Noise',
              icon: '🏥',
              color: '#475569',
              points: [
                'Severe time constraints and production pressure drive clinicians toward psychological depersonalization.',
                'Human beings are reduced to logistical place-markers (e.g., "Bed 16", "the gallbladder case").',
                'Hierarchical intimidation prevents lower-status nurses or trainees from speaking up during handovers.',
                'Safety requires flattening communication hierarchies and encouraging questioning.',
              ],
            },
            {
              title: 'Vector 6: Compounding Noise Attack',
              icon: '⚡',
              color: '#be123c',
              points: [
                'In real-world disasters, noise vectors rarely strike in isolation.',
                'Anxious patient + noisy ER corridor + rushed resident using jargon + EHR screen distraction = 100% signal wipeout.',
                'Treating breakdown as a diagnostic problem allows systematic decontamination of each barrier.',
              ],
            },
          ].map((v, idx) => (
            <div
              key={idx}
              style={{
                padding: '16px',
                borderRadius: '12px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '18px' }}>{v.icon}</span>
                <strong style={{ fontSize: '13px', color: '#0f172a' }}>{v.title}</strong>
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12px', color: '#475569', lineHeight: 1.5 }}>
                {v.points.map((p, pIdx) => (
                  <li key={pIdx} style={{ marginBottom: '6px' }}>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* ----------------- TAB 3: DIAGNOSTIC & REPAIR PROTOCOL ----------------- */}
      {activeTab === 'diagnostic' && (
        <div>
          <div style={{ padding: '14px', borderRadius: '12px', background: '#f0fdfa', border: '1px solid #99f6e4', marginBottom: '16px' }}>
            <strong style={{ fontSize: '13px', color: '#0f766e', display: 'block' }}>
              The 5-Step Clinical Noise Diagnostic &amp; Channel Repair Blueprint
            </strong>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#115e59', lineHeight: 1.45 }}>
              Instead of labeling a patient as "difficult", "non-compliant", or "inattentive", clinicians treat communication breakdowns as an engineering problem to diagnose and solve.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              {
                step: '1',
                title: 'Identify the Barrier',
                desc: 'Recognize the silence, hesitation, glazed stare, or nodding trap indicating message distortion.',
              },
              {
                step: '2',
                title: 'Diagnose the Vector',
                desc: 'Is it language? Environmental distraction? Acute pain? Clinician interruption? Time pressure?',
              },
              {
                step: '3',
                title: 'Calibrate Approach',
                desc: 'Translate technical jargon into concrete mechanical metaphors; adjust seating geometry.',
              },
              {
                step: '4',
                title: 'Rebuild Channel',
                desc: 'Pause devices, eliminate physical barriers, validate emotional distress, allow full uninterrupted narrative.',
              },
              {
                step: '5',
                title: 'Confirm Comprehension',
                desc: 'Close the loop with teach-back: verify that shared meaning has been safely demonstrated.',
              },
            ].map((st) => (
              <div
                key={st.step}
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: '#0d9488',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    marginBottom: '8px',
                  }}
                >
                  {st.step}
                </div>
                <strong style={{ fontSize: '12.5px', color: '#0f172a', marginBottom: '4px' }}>
                  {st.title}
                </strong>
                <p style={{ margin: 0, fontSize: '11.5px', color: '#64748b', lineHeight: 1.4 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Footer Note */}
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
          Clinical Communication Noise Simulator • Systems-Engineering Safety Framework
        </span>
        <span>Signal Bandwidth: {finalSignal}%</span>
      </div>
    </div>
  );
}
