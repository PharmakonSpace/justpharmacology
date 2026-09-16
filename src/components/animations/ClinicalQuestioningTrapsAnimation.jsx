// ClinicalQuestioningTrapsAnimation.jsx
import React, { useState } from 'react';
import {
  HelpCircle,
  MessageSquare,
  AlertOctagon,
  ShieldCheck,
  ShieldAlert,
  ArrowRight,
  User,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  XCircle,
  Activity,
  HeartHandshake
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'interrogation',
    title: 'Trap 1: The Interrogation Trap',
    badge: 'CLOSED QUESTION OVERLOAD',
    badgeColor: '#e11d48',
    doctorLine: '"Did you take your pill? Yes or no. Did you take it at 8 AM? Did you have breakfast? Is your headache better? Is it worse?"',
    patientInternal: 'I feel like I am in a courtroom being cross-examined. I am terrified of saying the wrong thing so I will only answer yes or no. I will not mention my leg swelling.',
    patientResponse: '"...Yes. Yes. No. A little better. No."',
    trustScore: 32,
    disclosureScore: 25,
    consequence: 'Patient narrative silenced; missed critical clinical red flag (peripheral edema and dizziness).',
    recommendation: 'Open with: "Tell me how your mornings have been going since starting the new medication."',
  },
  {
    id: 'leading',
    title: 'Trap 2: The Leading-Question Trap',
    badge: 'PREDETERMINED BIAS',
    badgeColor: '#ea580c',
    doctorLine: '"You haven\'t missed any doses of your blood pressure pill this week, have you?"',
    patientInternal: 'He clearly expects me to say no. If I tell him I stopped it because it made me dizzy, he will judge me as a bad patient. I will just agree to keep the peace.',
    patientResponse: '"No, doctor. Everything has been taken as prescribed."',
    trustScore: 40,
    disclosureScore: 20,
    consequence: 'False compliance documented in medical chart; leads to dangerous dose escalation for "unresponsive" hypertension.',
    recommendation: 'Ask neutrally: "How many days in a typical week are you able to take the medicine, and what gets in the way?"',
  },
  {
    id: 'why',
    title: 'Trap 3: The Accusatory "Why" Trap',
    badge: 'BLAME & DEFENSE TRIGGER',
    badgeColor: '#d97706',
    doctorLine: '"Why didn\'t you get your fasting blood work done before today\'s appointment?"',
    patientInternal: 'He is blaming me and treating me like a delinquent child. I had to take two night shifts and care for my mother. I feel defensive and angry.',
    patientResponse: '"I was busy! You doctors think people have unlimited free time!"',
    trustScore: 28,
    disclosureScore: 15,
    consequence: 'Therapeutic alliance fractured; patient enters hostile defensive posture and disengages from care.',
    recommendation: 'Pivot to barriers: "What made getting to the lab difficult for you this past week? Let\'s see how we can make that easier."',
  },
  {
    id: 'clarifying',
    title: 'Solution A: Clarifying Subjective Ambiguity',
    badge: 'OBJECTIVE DECODING',
    badgeColor: '#0284c7',
    doctorLine: '"You mentioned your chest feels \'funny\' after walking. When you say \'funny\', is it more like a tightness or squeezing, or more like fluttering and skipping a beat?"',
    patientInternal: 'He is actually listening and giving me words to explain what I feel. It feels like someone sitting on my chest, not fluttering.',
    patientResponse: '"It\'s like a tight band squeezing across my ribs when I climb stairs."',
    trustScore: 88,
    disclosureScore: 92,
    consequence: 'Anginal chest tightness isolated accurately without jumping to erroneous clinical assumptions.',
    recommendation: 'Offer 2–3 neutral descriptive anchors without leading toward a single predetermined diagnosis.',
  },
  {
    id: 'collaborative',
    title: 'Solution B: The Ask–Tell–Ask Collaborative Framework',
    badge: 'PARTNERSHIP IN CARE',
    badgeColor: '#16a34a',
    doctorLine: '1. Ask: "What is your current understanding of why we are starting this insulin?"\n2. Tell: [Explains simply: "It helps carry sugar out of the blood into muscle cells so you have energy."]\n3. Ask Again: "Just to be sure I explained that clearly, how would you describe how this medicine works to your family?"',
    patientInternal: 'The doctor values my input, respects my knowledge, and tests his own clarity rather than quizzing my intelligence. I feel safe and empowered.',
    patientResponse: '"It works like a key that lets sugar into my muscles for energy instead of staying trapped in my blood."',
    trustScore: 98,
    disclosureScore: 96,
    consequence: 'Closed feedback loop confirms shared meaning; patient achieves safe, autonomous treatment adherence.',
    recommendation: 'Always close the communication loop with patient summarization (Teach-Back) rather than asking "Do you understand?".',
  },
];

export default function ClinicalQuestioningTrapsAnimation() {
  const [selectedScenario, setSelectedScenario] = useState('interrogation');
  const [askTellStep, setAskTellStep] = useState(1);

  const scenario = SCENARIOS.find((s) => s.id === selectedScenario) || SCENARIOS[0];

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
                background: '#fef3c7',
                color: '#b45309',
                fontSize: '11.5px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <HelpCircle size={12} /> Intake &amp; Interview Simulator
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>Healthcare Psychology Module</span>
          </div>
          <h3 style={{ margin: '6px 0 2px', fontSize: 'clamp(17px, 2.5vw, 21px)', fontWeight: '700', color: '#0f172a' }}>
            Clinical Questioning Traps vs. Collaborative Inquiry
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Explore how question architecture triggers psychological defenses or builds structural trust for accurate clinical disclosure.
          </p>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '8px',
          marginBottom: '20px',
        }}
      >
        {SCENARIOS.map((s) => {
          const isSelected = selectedScenario === s.id;
          const isTrap = s.id === 'interrogation' || s.id === 'leading' || s.id === 'why';
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedScenario(s.id)}
              style={{
                padding: '10px 12px',
                borderRadius: '10px',
                border: isSelected ? `2px solid ${s.badgeColor}` : '1px solid #e2e8f0',
                background: isSelected ? (isTrap ? '#fff7ed' : '#f0fdf4') : '#ffffff',
                color: isSelected ? s.badgeColor : '#475569',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: '700' }}>
                  {s.badge}
                </span>
                {isTrap ? <AlertOctagon size={14} color="#ea580c" /> : <ShieldCheck size={14} color="#16a34a" />}
              </div>
              <strong style={{ display: 'block', marginTop: '4px', fontSize: '12.5px', color: '#0f172a' }}>
                {s.title.split(':')[1] || s.title}
              </strong>
            </button>
          );
        })}
      </div>

      {/* Dual Meters: Trust & Data Disclosure */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          padding: '14px 18px',
          borderRadius: '12px',
          background: '#0f172a',
          color: '#ffffff',
          marginBottom: '20px',
        }}
      >
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: '700', marginBottom: '6px' }}>
            <span style={{ color: '#38bdf8' }}>Psychological Safety &amp; Trust:</span>
            <span style={{ color: scenario.trustScore > 70 ? '#4ade80' : scenario.trustScore > 40 ? '#facc15' : '#f87171' }}>
              {scenario.trustScore}%
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: '#334155', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${scenario.trustScore}%`,
                height: '100%',
                background: scenario.trustScore > 70 ? '#22c55e' : scenario.trustScore > 40 ? '#eab308' : '#ef4444',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', fontWeight: '700', marginBottom: '6px' }}>
            <span style={{ color: '#fbbf24' }}>Accurate Clinical Disclosure Rate:</span>
            <span style={{ color: scenario.disclosureScore > 70 ? '#4ade80' : scenario.disclosureScore > 40 ? '#facc15' : '#f87171' }}>
              {scenario.disclosureScore}%
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: '#334155', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${scenario.disclosureScore}%`,
                height: '100%',
                background: scenario.disclosureScore > 70 ? '#22c55e' : scenario.disclosureScore > 40 ? '#eab308' : '#ef4444',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      </div>

      {/* Live Dialogue Exchange */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
        {/* Clinician's Utterance */}
        <div
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: '#f8fafc',
            border: '1px solid #cbd5e1',
            borderLeft: `4px solid ${scenario.badgeColor}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#0284c7', color: '#ffffff', padding: '2px 8px', borderRadius: '6px' }}>
              CLINICIAN QUESTIONING
            </span>
            <strong style={{ fontSize: '12.5px', color: '#0f172a' }}>{scenario.title}</strong>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#1e293b', fontStyle: 'italic', whiteSpace: 'pre-line', lineHeight: 1.5 }}>
            {scenario.doctorLine}
          </p>
        </div>

        {/* Patient Hidden Thoughts (Psychological Defenses) */}
        <div
          style={{
            padding: '14px',
            borderRadius: '12px',
            background: '#fffbeb',
            border: '1px solid #fde68a',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#d97706', color: '#ffffff', padding: '2px 8px', borderRadius: '6px' }}>
              PATIENT INTERNAL EXPERIENCE (PSYCHOLOGICAL DEFENSE)
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '12.5px', color: '#78350f', lineHeight: 1.45 }}>
            🧠 {scenario.patientInternal}
          </p>
        </div>

        {/* Patient Spoken Response */}
        <div
          style={{
            padding: '16px',
            borderRadius: '12px',
            background: '#f0fdf4',
            border: '1px solid #bbf7d0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', background: '#16a34a', color: '#ffffff', padding: '2px 8px', borderRadius: '6px' }}>
              PATIENT SPOKEN RESPONSE
            </span>
          </div>
          <p style={{ margin: 0, fontSize: '13.5px', color: '#14532d', fontWeight: '600' }}>
            🗣️ {scenario.patientResponse}
          </p>
        </div>
      </div>

      {/* Clinical Impact & Safe Collaborative Pivot */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '18px' }}>
        <div style={{ padding: '14px', borderRadius: '10px', background: '#fef2f2', border: '1px solid #fecaca' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <XCircle size={16} color="#dc2626" />
            <strong style={{ fontSize: '12.5px', color: '#991b1b' }}>Clinical Impact &amp; Data Risk</strong>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#b91c1c', lineHeight: 1.45 }}>
            {scenario.consequence}
          </p>
        </div>

        <div style={{ padding: '14px', borderRadius: '10px', background: '#f0f9ff', border: '1px solid #bae6fd' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
            <CheckCircle2 size={16} color="#0284c7" />
            <strong style={{ fontSize: '12.5px', color: '#0369a1' }}>Evidence-Based Collaborative Alternative</strong>
          </div>
          <p style={{ margin: 0, fontSize: '12px', color: '#0c4a6e', lineHeight: 1.45 }}>
            {scenario.recommendation}
          </p>
        </div>
      </div>

      {/* Ask-Tell-Ask Interactive Step Breakdown */}
      <div
        style={{
          padding: '16px',
          borderRadius: '12px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <strong style={{ fontSize: '13px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <HeartHandshake size={16} color="#0d9488" /> The 3-Step Ask–Tell–Ask Framework
          </strong>
          <span style={{ fontSize: '11.5px', color: '#64748b' }}>Active Patient Participation Architecture</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          {[
            {
              step: '1. ASK',
              title: 'Assess Knowledge',
              color: '#0284c7',
              bg: '#e0f2fe',
              text: '"What do you already know about high blood pressure and why medicine might help?"',
            },
            {
              step: '2. TELL',
              title: 'Explain Clearly',
              color: '#7c3aed',
              bg: '#ede9fe',
              text: '"Explain in plain words without jargon. Limit to 2–3 key takeaway messages."',
            },
            {
              step: '3. ASK AGAIN',
              title: 'Confirm Meaning',
              color: '#16a34a',
              bg: '#dcfce7',
              text: '"To make sure my explanation was clear, how would you summarize our plan?"',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '12px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #cbd5e1',
              }}
            >
              <span style={{ fontSize: '11px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', background: item.bg, color: item.color }}>
                {item.step}
              </span>
              <strong style={{ display: 'block', margin: '6px 0 4px', fontSize: '12px', color: '#0f172a' }}>
                {item.title}
              </strong>
              <p style={{ margin: 0, fontSize: '11.5px', color: '#475569', lineHeight: 1.35 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

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
          Clinical Questioning Traps • Intake Communication Simulator
        </span>
        <span>Principle: The right question is the first treatment.</span>
      </div>
    </div>
  );
}
