// ClinicalReflectiveLogAnimation.jsx
import React, { useState } from 'react';
import {
  BookOpen,
  UserCheck,
  Brain,
  Scale,
  Target,
  ShieldCheck,
  Eye,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  RefreshCw,
  FileText,
  Lock,
  MessageSquare
} from 'lucide-react';

const STAGES = [
  {
    id: 'description',
    number: '1',
    title: 'Objective Description',
    tag: 'Facts & Context First',
    icon: FileText,
    color: '#0d9488',
    bg: '#f0fdfa',
    border: '#99f6e4',
    summary: 'Record what objectively occurred in the environment without premature interpretations or emotional judgments.'
  },
  {
    id: 'self-awareness',
    number: '2',
    title: 'Self-Awareness & Emotions',
    tag: 'Internal Honest Processing',
    icon: Brain,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    border: '#ddd6fe',
    summary: 'Shift inward using first-person language ("I felt", "I assumed", "I hesitated") to explore personal reactions and biases.'
  },
  {
    id: 'analysis',
    number: '3',
    title: 'Critical Theoretical Analysis',
    tag: 'Bridging Theory & Practice',
    icon: BookOpen,
    color: '#0284c7',
    bg: '#f0f9ff',
    border: '#bae6fd',
    summary: 'Ask why the encounter unfolded this way. Connect clinical observations to communication frameworks and psychological models.'
  },
  {
    id: 'evaluation',
    number: '4',
    title: 'Evaluation & Alternatives',
    tag: 'Actual vs Unchosen Paths',
    icon: Scale,
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fde68a',
    summary: 'Honoring clinical reality: compare the approach you actually used against alternative options and their consequences.'
  },
  {
    id: 'action-plan',
    number: '5',
    title: 'Action Plan & CPD',
    tag: 'Targeted Behavioral Change',
    icon: Target,
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    summary: 'Translate experiential insight into specific, measurable clinical behaviors for future practice and portfolio documentation.'
  }
];

const SCENARIOS = [
  {
    id: 'oncology-defensive',
    title: 'Case A: The Defensive Oncology Consultation',
    clinicalSetting: 'Outpatient Oncology Clinic',
    patientCode: 'Patient X (58-year-old male, metastatic colorectal cancer)',
    trigger: 'Patient slammed consultation desk when discussion turned to oral chemotherapy adherence.',
    unrefinedDraft:
      'The patient was uncooperative, non-compliant, and aggressive because he refuses to take his medication properly and got angry at me when I tried to explain the regimen.',
    objectiveDescription:
      'During discussion of capecitabine adherence, Patient X slammed his open palm onto the desk, raised his voice stating "You doctors treat me like a child," and leaned backward crossing his arms. I sat upright with my notebook.',
    confidentialityApplied: true,
    firstPersonEmotions: [
      { emotion: 'Defensiveness', intensity: 85, note: 'I felt personally attacked and wanted to assert my professional authority and pharmacological knowledge.' },
      { emotion: 'Anxiety', intensity: 65, note: 'I worried the clinic was running 20 minutes behind and wanted a quick resolution.' },
      { emotion: 'Self-Doubt', intensity: 45, note: 'I questioned whether my opening explanation sounded condescending.' }
    ],
    theoreticalLinks: [
      {
        model: 'Kubler-Ross / Reactive Anger',
        rationale: 'The desk slam was a grief-driven autonomic expression of perceived loss of bodily autonomy, not personal hostility toward me.'
      },
      {
        model: 'Bateson Circular Communication',
        rationale: 'My rigid upright posture and immediate rebuttal reinforced symmetrical escalation rather than complementary de-escalation.'
      }
    ],
    evaluation: {
      actual: 'I defended the importance of the dosing schedule and cited clinical trial survival percentages.',
      consequence: 'Patient shut down, broke eye contact, and muttered "Whatever, just give me the paper."',
      alternative: 'Apply deliberate 5-second silence, acknowledge emotional weight: "I hear how exhausting and overwhelming this schedule feels for you."',
      predictedOutcome: 'Validation would lower sympathetic arousal and rebuild collaborative therapeutic alliance.'
    },
    actionPlan:
      'In subsequent consultations, apply a deliberate 4-second silence buffer when met with emotional pushback. Replace statistical defenses with emotional reflection before offering solutions.'
  },
  {
    id: 'emergency-overwhelm',
    title: 'Case B: Emergency Triage Miscommunication',
    clinicalSetting: 'Emergency Department Fast-Track',
    patientCode: 'Patient Y (42-year-old female, acute severe asthma flare)',
    trigger: 'Patient repeatedly asked same question regarding nebulizer medication every 3 minutes.',
    unrefinedDraft:
      'Patient was needy, anxious, and was not listening to me despite me repeating the discharge instructions three times.',
    objectiveDescription:
      'Patient Y asked "What is in this mask again?" 4 times over 12 minutes while clutching her chest. Monitor showed tachycardia (118 bpm). I spoke quickly while typing into the electronic health record.',
    confidentialityApplied: true,
    firstPersonEmotions: [
      { emotion: 'Irritation / Impatience', intensity: 75, note: 'I felt frustrated having to repeat myself while 6 triage charts waited on my desk.' },
      { emotion: 'Guilt', intensity: 50, note: 'I recognized I never turned my chair to face her fully.' }
    ],
    theoreticalLinks: [
      {
        model: 'Cognitive Channel Capacity & Noise',
        rationale: 'Severe acute dyspnea induces cerebral hypoxia and sympathetic distress noise, severely degrading working memory encoding.'
      },
      {
        model: 'Transactional Distance & Body Language',
        rationale: 'Typing with my back turned communicated detachment, escalating her anxiety and prompting repeated reassurance-seeking.'
      }
    ],
    evaluation: {
      actual: 'I sighed audibly and repeated: "As I already said, it is Salbutamol and Ipratropium."',
      consequence: 'Patient felt like a nuisance, apologizing profusely while trembling.',
      alternative: 'Stop typing, turn chair 90°, look into patient’s eyes, and hand her a simple card with the two drug names clearly printed.',
      predictedOutcome: 'Visual anchor reduces working memory strain; full presence conveys psychological safety.'
    },
    actionPlan:
      'Mandate the "Hands-Off-Keyboard" rule during acute patient distress. Implement a pocket medication flashcard for verbal patients experiencing respiratory stress.'
  }
];

export default function ClinicalReflectiveLogAnimation() {
  const [activeStage, setActiveStage] = useState('description');
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [showFactFilter, setShowFactFilter] = useState(true);
  const [anonymizeToggle, setAnonymizeToggle] = useState(true);
  const [activePillarCheck, setActivePillarCheck] = useState({
    anonymity: true,
    firstPerson: true,
    factsSeparated: true,
    theoryLinked: true,
    actionMeasurable: true
  });

  const scenario = SCENARIOS[selectedScenarioIdx];
  const currentStageInfo = STAGES.find((s) => s.id === activeStage) || STAGES[0];

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
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid #f1f5f9',
          marginBottom: '20px'
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
                background: '#ccfbf1',
                color: '#0f766e',
                fontSize: '11.5px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}
            >
              <Sparkles size={12} /> Interactive Reflective Workbench
            </span>
            <span style={{ fontSize: '12px', color: '#64748b' }}>5-Part Anatomy Simulator</span>
          </div>
          <h3 style={{ margin: '6px 0 2px', fontSize: 'clamp(17px, 2.5vw, 20px)', fontWeight: '700', color: '#0f172a' }}>
            Structured Clinical Reflection Engine
          </h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
            Bridging raw messy clinical encounters with psychological theory, evaluation, and CPD action plans.
          </p>
        </div>

        {/* Case Switcher */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569' }}>Select Scenario:</span>
          <div style={{ display: 'inline-flex', gap: '6px' }}>
            {SCENARIOS.map((sc, idx) => (
              <button
                key={sc.id}
                type="button"
                onClick={() => setSelectedScenarioIdx(idx)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: selectedScenarioIdx === idx ? '1px solid #0d9488' : '1px solid #cbd5e1',
                  background: selectedScenarioIdx === idx ? '#0d9488' : '#ffffff',
                  color: selectedScenarioIdx === idx ? '#ffffff' : '#334155',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                Case {idx === 0 ? 'A (Oncology)' : 'B (Triage)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Five-Stage Stepper Navigation */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '8px',
          marginBottom: '20px'
        }}
      >
        {STAGES.map((st) => {
          const Icon = st.icon;
          const isActive = activeStage === st.id;
          return (
            <button
              key={st.id}
              type="button"
              onClick={() => setActiveStage(st.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px 12px',
                borderRadius: '12px',
                border: isActive ? `2px solid ${st.color}` : '1px solid #e2e8f0',
                background: isActive ? st.bg : '#ffffff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.15s ease',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '4px' }}>
                <span
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: isActive ? st.color : '#e2e8f0',
                    color: isActive ? '#ffffff' : '#475569',
                    fontSize: '11px',
                    fontWeight: '700',
                    display: 'grid',
                    placeItems: 'center'
                  }}
                >
                  {st.number}
                </span>
                <Icon size={14} color={isActive ? st.color : '#94a3b8'} />
              </div>
              <strong style={{ fontSize: '12px', color: isActive ? st.color : '#1e293b', lineHeight: '1.3' }}>
                {st.title}
              </strong>
              <span style={{ fontSize: '10.5px', color: '#64748b', marginTop: '2px' }}>{st.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Stage Summary Header */}
      <div
        style={{
          padding: '12px 16px',
          borderRadius: '10px',
          background: currentStageInfo.bg,
          border: `1px solid ${currentStageInfo.border}`,
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <currentStageInfo.icon size={22} color={currentStageInfo.color} style={{ flexShrink: 0 }} />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', color: currentStageInfo.color }}>
              Stage {currentStageInfo.number} in Reflective Anatomy
            </span>
            <span style={{ fontSize: '12px', color: '#475569' }}>•</span>
            <strong style={{ fontSize: '13px', color: '#0f172a' }}>{currentStageInfo.title}</strong>
          </div>
          <p style={{ margin: '2px 0 0', fontSize: '12.5px', color: '#334155' }}>{currentStageInfo.summary}</p>
        </div>
      </div>

      {/* Active Stage Interactive Body */}
      {activeStage === 'description' && (
        <div>
          {/* Controls: Fact Filter & Anonymity */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              padding: '10px 14px',
              background: '#f8fafc',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lock size={15} color="#0f766e" />
              <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#334155' }}>
                Confidentiality &amp; Objective Fact Filter
              </span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <button
                type="button"
                onClick={() => setAnonymizeToggle(!anonymizeToggle)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  border: '1px solid #cbd5e1',
                  background: anonymizeToggle ? '#ecfdf5' : '#fff1f2',
                  color: anonymizeToggle ? '#047857' : '#be123c',
                  cursor: 'pointer'
                }}
              >
                <ShieldCheck size={13} /> {anonymizeToggle ? 'Anonymized (Patient X)' : 'Show Raw Identifiers'}
              </button>
              <button
                type="button"
                onClick={() => setShowFactFilter(!showFactFilter)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  fontSize: '11.5px',
                  fontWeight: '600',
                  border: '1px solid #cbd5e1',
                  background: showFactFilter ? '#eff6ff' : '#ffffff',
                  color: showFactFilter ? '#1d4ed8' : '#475569',
                  cursor: 'pointer'
                }}
              >
                <Eye size={13} /> {showFactFilter ? 'Objective Facts Only' : 'Compare with Biased Draft'}
              </button>
            </div>
          </div>

          {/* Comparison Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {/* Subjective / Flawed Draft */}
            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #fecaca',
                background: '#fffbfa',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <AlertTriangle size={15} color="#dc2626" />
                <strong style={{ fontSize: '13px', color: '#991b1b' }}>Subjective Casual Narrative (Avoid)</strong>
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#451a03', fontStyle: 'italic', lineHeight: '1.5' }}>
                "{scenario.unrefinedDraft}"
              </p>
              <div style={{ marginTop: '12px', padding: '8px 10px', background: '#fee2e2', borderRadius: '6px', fontSize: '11px', color: '#7f1d1d' }}>
                ⚠️ <strong>Defect:</strong> Prematurely judges patient as "non-compliant" and assumes malicious motive before recording observable behavior.
              </div>
            </div>

            {/* Objective Professional Account */}
            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #bbf7d0',
                background: '#f0fdf4',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <CheckCircle2 size={15} color="#16a34a" />
                <strong style={{ fontSize: '13px', color: '#166534' }}>Structured Objective Description (Step 1)</strong>
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: '#064e3b', lineHeight: '1.5' }}>
                {scenario.objectiveDescription.replace(
                  'Patient X',
                  anonymizeToggle ? 'Patient X' : 'Arthur Pendelton (DOB: 14/02/1968, NHS #4928)'
                )}
              </p>
              <div style={{ marginTop: '12px', padding: '8px 10px', background: '#dcfce7', borderRadius: '6px', fontSize: '11px', color: '#14532d' }}>
                ✅ <strong>Excellence:</strong> Separates observable environment, physical dialogue, and non-verbal cues from clinician interpretation.
              </div>
            </div>
          </div>
        </div>
      )}

      {activeStage === 'self-awareness' && (
        <div>
          <div style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#6d28d9', textTransform: 'uppercase' }}>
              First-Person Subjective Audit: "I Felt + I Assumed + I Chose"
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#475569' }}>
              Authentic clinical reflection requires examining hesitation, defensiveness, and cognitive shortcuts without self-protective distortion.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {scenario.firstPersonEmotions.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '14px',
                  borderRadius: '10px',
                  border: '1px solid #e2e8f0',
                  background: '#faf5ff'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: '#ede9fe',
                        color: '#6d28d9',
                        fontSize: '11.5px',
                        fontWeight: '700'
                      }}
                    >
                      {item.emotion}
                    </span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Arousal Level: {item.intensity}%</span>
                  </div>
                  <div
                    style={{
                      width: '80px',
                      height: '6px',
                      borderRadius: '999px',
                      background: '#e2e8f0',
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        width: `${item.intensity}%`,
                        height: '100%',
                        background: item.intensity > 70 ? '#e11d48' : item.intensity > 50 ? '#8b5cf6' : '#0d9488'
                      }}
                    />
                  </div>
                </div>
                <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: '1.45' }}>
                  <strong>Clinician First-Person Reflection:</strong> "{item.note}"
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeStage === 'analysis' && (
        <div>
          <div style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#0369a1', textTransform: 'uppercase' }}>
              Theoretical Integration: Translating Textbook Models to Bedside Realities
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#475569' }}>
              Why did the interaction unfold in this specific trajectory? Connect observed behaviors with verified models:
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {scenario.theoreticalLinks.map((th, idx) => (
              <div
                key={idx}
                style={{
                  padding: '16px',
                  borderRadius: '12px',
                  border: '1px solid #bae6fd',
                  background: '#f0f9ff'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <BookOpen size={16} color="#0284c7" />
                  <strong style={{ fontSize: '13px', color: '#0369a1' }}>{th.model}</strong>
                </div>
                <p style={{ margin: 0, fontSize: '12.5px', color: '#0c4a6e', lineHeight: '1.5' }}>
                  {th.rationale}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeStage === 'evaluation' && (
        <div>
          <div style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#b45309', textTransform: 'uppercase' }}>
              Counterfactual Evaluation: Actual Path vs. Alternative Strategy
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#475569' }}>
              Weighing clinical efficacy: What did you choose, what were the consequences, and what unchosen approach could have altered the outcome?
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            {/* Actual Approach */}
            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #fed7aa',
                background: '#fffaf5'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#ffedd5',
                    color: '#c2410c',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase'
                  }}
                >
                  Actual Approach
                </span>
              </div>
              <div style={{ fontSize: '12.5px', color: '#7c2d12', marginBottom: '8px', lineHeight: '1.45' }}>
                <strong>What I Chose:</strong> {scenario.evaluation.actual}
              </div>
              <div style={{ fontSize: '12px', color: '#9a3412', background: '#fed7aa', padding: '8px 10px', borderRadius: '6px' }}>
                <strong>Consequence:</strong> {scenario.evaluation.consequence}
              </div>
            </div>

            {/* Alternative Approach */}
            <div
              style={{
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #bbf7d0',
                background: '#f0fdf4'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: '#dcfce7',
                    color: '#15803d',
                    fontSize: '11px',
                    fontWeight: '800',
                    textTransform: 'uppercase'
                  }}
                >
                  Alternative Strategy
                </span>
              </div>
              <div style={{ fontSize: '12.5px', color: '#14532d', marginBottom: '8px', lineHeight: '1.45' }}>
                <strong>What Could Have Been Done:</strong> {scenario.evaluation.alternative}
              </div>
              <div style={{ fontSize: '12px', color: '#166534', background: '#dcfce7', padding: '8px 10px', borderRadius: '6px' }}>
                <strong>Predicted Outcome:</strong> {scenario.evaluation.predictedOutcome}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeStage === 'action-plan' && (
        <div>
          <div style={{ marginBottom: '14px' }}>
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#15803d', textTransform: 'uppercase' }}>
              Action Plan &amp; CPD Registration Output
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: '#475569' }}>
              Avoiding vague promises to "communicate better." Committing to a distinct, measurable behavioral technique:
            </p>
          </div>

          {/* Action Card */}
          <div
            style={{
              padding: '18px',
              borderRadius: '12px',
              border: '1px solid #86efac',
              background: '#f0fdf4',
              marginBottom: '16px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Target size={18} color="#16a34a" />
              <strong style={{ fontSize: '14px', color: '#14532d' }}>Specific Measurable Behavioral Commitment:</strong>
            </div>
            <div style={{ fontSize: '13.5px', color: '#064e3b', lineHeight: '1.5', fontWeight: '500' }}>
              "{scenario.actionPlan}"
            </div>
          </div>

          {/* CPD Portfolio Audit Checklist */}
          <div
            style={{
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              background: '#f8fafc'
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#334155', display: 'block', marginBottom: '8px' }}>
              Reflective Log Portfolio Quality Standards:
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
              {[
                { key: 'anonymity', label: 'Confidentiality Enforced (Patient X)' },
                { key: 'firstPerson', label: 'First-Person Agency ("I chose/felt")' },
                { key: 'factsSeparated', label: 'Facts Kept Distinct from Reactions' },
                { key: 'theoryLinked', label: 'Psychological/Communication Model Applied' },
                { key: 'actionMeasurable', label: 'Concrete Behavioral Action Defined' }
              ].map((item) => (
                <label
                  key={item.key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '11.5px',
                    color: '#334155',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <input
                    type="checkbox"
                    checked={activePillarCheck[item.key]}
                    onChange={(e) =>
                      setActivePillarCheck({
                        ...activePillarCheck,
                        [item.key]: e.target.checked
                      })
                    }
                    style={{ accentColor: '#0d9488' }}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footer Navigation Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '20px',
          paddingTop: '16px',
          borderTop: '1px solid #f1f5f9'
        }}
      >
        <span style={{ fontSize: '11.5px', color: '#64748b' }}>
          Stage {currentStageInfo.number} of 5 • {currentStageInfo.title}
        </span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {activeStage !== 'description' && (
            <button
              type="button"
              onClick={() => {
                const curIdx = STAGES.findIndex((s) => s.id === activeStage);
                if (curIdx > 0) setActiveStage(STAGES[curIdx - 1].id);
              }}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid #cbd5e1',
                background: '#ffffff',
                color: '#334155',
                cursor: 'pointer'
              }}
            >
              Previous Stage
            </button>
          )}
          {activeStage !== 'action-plan' ? (
            <button
              type="button"
              onClick={() => {
                const curIdx = STAGES.findIndex((s) => s.id === activeStage);
                if (curIdx < STAGES.length - 1) setActiveStage(STAGES[curIdx + 1].id);
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
                background: '#0d9488',
                color: '#ffffff',
                cursor: 'pointer'
              }}
            >
              Next Stage <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setActiveStage('description')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '600',
                border: '1px solid #0d9488',
                background: '#f0fdf4',
                color: '#0f766e',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={13} /> Restart Walkthrough
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
