// SectionContentFormatter.jsx
import React from 'react';
import {
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  AlertCircle,
  Lightbulb,
  Stethoscope,
  Activity,
  Layers,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

/**
 * Highlights clinical terms, test results, and anatomical formulas
 */
function formatInlineText(text) {
  if (typeof text !== 'string') return text;

  // Split by bold markdown **text**
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} style={{ color: '#0f172a', fontWeight: '700' }}>
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Replace test formulas with stylized pills
    const formulaRegex = /(AC\s*>\s*BC|BC\s*≥\s*AC|AC\s*=\s*BC|512\s*Hz|20-fold|17:1|1\.3:1|\+80\s*mV|0\s*mV|-60\s*mV|-45\s*mV)/g;
    const subParts = part.split(formulaRegex);

    if (subParts.length > 1) {
      return subParts.map((sub, j) => {
        if (sub.match(formulaRegex)) {
          const isNormal = sub.includes('AC > BC') || sub.includes('+80 mV');
          const isConductive = sub.includes('BC ≥ AC');
          return (
            <span
              key={`${i}-${j}`}
              style={{
                display: 'inline-block',
                padding: '1px 6px',
                borderRadius: '4px',
                fontSize: '11.5px',
                fontWeight: '700',
                fontFamily: 'monospace',
                background: isNormal ? '#ecfdf5' : isConductive ? '#fef2f2' : '#f1f5f9',
                color: isNormal ? '#059669' : isConductive ? '#dc2626' : '#0284c7',
                border: `1px solid ${isNormal ? '#a7f3d0' : isConductive ? '#fecaca' : '#cbd5e1'}`,
                margin: '0 2px',
              }}
            >
              {sub}
            </span>
          );
        }
        return sub;
      });
    }

    return part;
  });
}

/**
 * Renders a vertical or stepped pathway cascade (e.g. A ↓ B ↓ C)
 */
function PathwayCascade({ steps }) {
  return (
    <div
      style={{
        margin: '14px 0',
        padding: '16px',
        borderRadius: '12px',
        background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
        border: '1px solid #e2e8f0',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '11.5px',
          fontWeight: '700',
          color: '#0369a1',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '12px',
        }}
      >
        <Activity size={14} /> Physiological Transmission Cascade
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 14px',
                borderRadius: '8px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: idx === 0 ? '#0284c7' : idx === steps.length - 1 ? '#16a34a' : '#e0f2fe',
                  color: idx === 0 || idx === steps.length - 1 ? '#ffffff' : '#0369a1',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '11px',
                  fontWeight: '700',
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#1e293b' }}>
                {formatInlineText(step)}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '-2px 0' }}>
                <ArrowDown size={14} color="#94a3b8" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/**
 * Formats a numbered clinical procedure or test block (e.g. Rinne or Weber test)
 */
function ClinicalProcedureCard({ title, bullets, stepNumber }) {
  const isRinne = title.toLowerCase().includes('rinne');
  const isWeber = title.toLowerCase().includes('weber');

  const theme = isRinne
    ? { border: '#bae6fd', bg: '#f0f9ff', badgeBg: '#0284c7', text: '#0369a1', icon: Stethoscope }
    : isWeber
    ? { border: '#ddd6fe', bg: '#f5f3ff', badgeBg: '#7c3aed', text: '#6d28d9', icon: Activity }
    : { border: '#e2e8f0', bg: '#f8fafc', badgeBg: '#475569', text: '#334155', icon: CheckCircle2 };

  const Icon = theme.icon;

  return (
    <div
      style={{
        margin: '14px 0',
        borderRadius: '14px',
        border: `1px solid ${theme.border}`,
        background: '#ffffff',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
      }}
    >
      {/* Header banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: theme.bg,
          borderBottom: `1px solid ${theme.border}`,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              padding: '2px 8px',
              borderRadius: '6px',
              background: theme.badgeBg,
              color: '#ffffff',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {stepNumber ? `Test ${stepNumber}` : 'Clinical Test'}
          </span>
          <strong style={{ fontSize: '14px', color: '#0f172a' }}>{title}</strong>
        </div>
        <Icon size={16} color={theme.text} />
      </div>

      {/* Bullets & Interpretation */}
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {bullets.map((b, i) => {
          const isResult =
            b.toLowerCase().includes('normal result') ||
            b.toLowerCase().includes('positive rinne') ||
            b.toLowerCase().includes('conductive hearing loss') ||
            b.toLowerCase().includes('negative rinne') ||
            b.toLowerCase().includes('sensorineural') ||
            b.toLowerCase().includes('unilateral conductive') ||
            b.toLowerCase().includes('unilateral sensorineural');

          const isNormal = b.toLowerCase().includes('normal') || b.toLowerCase().includes('positive rinne');
          const isConductive = b.toLowerCase().includes('conductive') || b.toLowerCase().includes('negative rinne');
          const isSensorineural = b.toLowerCase().includes('sensorineural');

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: isResult ? '10px 12px' : '6px 0',
                borderRadius: isResult ? '8px' : '0',
                background: isResult
                  ? isNormal
                    ? '#f0fdf4'
                    : isConductive
                    ? '#fffbeb'
                    : '#fdf4ff'
                  : 'transparent',
                border: isResult
                  ? `1px solid ${
                      isNormal ? '#bbf7d0' : isConductive ? '#fde68a' : '#f0abfc'
                    }`
                  : 'none',
                fontSize: '13px',
                lineHeight: '1.55',
                color: '#334155',
              }}
            >
              <span
                style={{
                  color: isResult
                    ? isNormal
                      ? '#16a34a'
                      : isConductive
                      ? '#d97706'
                      : '#a21caf'
                    : '#0284c7',
                  flexShrink: 0,
                  marginTop: '2px',
                  fontWeight: '700',
                }}
              >
                {isResult ? '•' : '▸'}
              </span>
              <div style={{ flex: 1 }}>{formatInlineText(b)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Formats standard bullet points into elegant clinical rows
 */
function BulletList({ items }) {
  return (
    <div style={{ margin: '10px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {items.map((item, idx) => {
        // Check if item has a colon lead-in (e.g. "Outer ear: Collects and...")
        const colonIndex = item.indexOf(':');
        let leadIn = null;
        let rest = item;
        if (colonIndex > 0 && colonIndex < 35) {
          leadIn = item.substring(0, colonIndex + 1);
          rest = item.substring(colonIndex + 1);
        }

        return (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '10px 14px',
              borderRadius: '9px',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              fontSize: '13px',
              lineHeight: '1.55',
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                background: '#e0f2fe',
                color: '#0284c7',
                fontSize: '10px',
                fontWeight: '800',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              ✓
            </span>
            <div style={{ flex: 1, color: '#334155' }}>
              {leadIn && (
                <strong style={{ color: '#0f172a', marginRight: '4px' }}>
                  {formatInlineText(leadIn)}
                </strong>
              )}
              {formatInlineText(rest)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Callout box for pearls, mechanisms, or clinical warnings
 */
function CalloutBox({ text, type = 'info' }) {
  const isPearl = type === 'pearl' || text.toLowerCase().includes('clinical pearl');
  const isMechanism = type === 'mechanism' || text.toLowerCase().includes('mechanism:');
  const isWarning = type === 'warning' || text.toLowerCase().includes('caution:') || text.toLowerCase().includes('warning:');

  const theme = isPearl
    ? { bg: '#f0fdf4', border: '#bbf7d0', color: '#15803d', icon: Lightbulb, title: 'Clinical Pearl' }
    : isWarning
    ? { bg: '#fffbeb', border: '#fde68a', color: '#b45309', icon: AlertCircle, title: 'Clinical Precaution' }
    : { bg: '#f0f9ff', border: '#bae6fd', color: '#0369a1', icon: Sparkles, title: 'Physiological Insight' };

  const Icon = theme.icon;

  return (
    <div
      style={{
        margin: '12px 0',
        padding: '14px 16px',
        borderRadius: '10px',
        background: theme.bg,
        border: `1px solid ${theme.border}`,
        display: 'flex',
        alignItems: 'flex-start',
        gap: '12px',
      }}
    >
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '7px',
          background: '#ffffff',
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
          border: `1px solid ${theme.border}`,
        }}
      >
        <Icon size={16} color={theme.color} />
      </div>
      <div style={{ flex: 1 }}>
        <strong style={{ display: 'block', fontSize: '12px', color: theme.color, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
          {theme.title}
        </strong>
        <p style={{ margin: 0, fontSize: '13px', lineHeight: '1.55', color: '#334155' }}>
          {formatInlineText(text)}
        </p>
      </div>
    </div>
  );
}

/**
 * Renders hierarchical classification tree diagrams (e.g. ├──, └──, │)
 */
function ClassificationTreeCard({ content }) {
  const lines = content.split('\n');
  return (
    <div
      style={{
        margin: '16px 0',
        borderRadius: '12px',
        border: '1px solid #334155',
        background: '#090d16',
        color: '#f8fafc',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.12)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          background: '#111827',
          borderBottom: '1px solid #1f2937',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
          <Layers size={16} color="#38bdf8" />
          <span style={{ fontSize: '13px', fontWeight: '700', color: '#e2e8f0', letterSpacing: '0.02em' }}>
            Hierarchical Route Classification Architecture
          </span>
        </div>
        <span
          style={{
            fontSize: '10.5px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            padding: '3px 9px',
            borderRadius: '20px',
            background: '#0369a1',
            color: '#e0f2fe',
            fontWeight: '700',
          }}
        >
          TAXONOMY MAP
        </span>
      </div>
      <div
        style={{
          padding: '16px 20px',
          overflowX: 'auto',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          fontSize: '13px',
          lineHeight: '1.7',
          whiteSpace: 'pre',
        }}
      >
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={idx} style={{ height: '8px' }} />;
          }

          const isHeader = trimmed.startsWith('ROUTES OF DRUG ADMINISTRATION');
          const isMajorBranch = trimmed.includes('1. LOCAL ROUTES') || trimmed.includes('2. SYSTEMIC ROUTES');
          const isCategoryBranch = /├──\s+([A-Z]\.\s+|Topical|Local injection|Local arterial|Parenteral)/i.test(line);

          let color = '#94a3b8';
          let fontWeight = '400';

          if (isHeader) {
            color = '#38bdf8';
            fontWeight = '800';
          } else if (isMajorBranch) {
            color = trimmed.includes('LOCAL') ? '#34d399' : '#60a5fa';
            fontWeight = '700';
          } else if (isCategoryBranch) {
            color = '#fbbf24';
            fontWeight = '600';
          } else if (trimmed.includes('│')) {
            color = '#64748b';
          } else {
            color = '#e2e8f0';
          }

          return (
            <div key={idx} style={{ color, fontWeight }}>
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Main parser component for any section content string or array
 */
export default function SectionContentFormatter({ content }) {
  if (!content) return null;

  // Handle array of strings or blocks
  if (Array.isArray(content)) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {content.map((item, idx) => (
          <SectionContentFormatter key={idx} content={item} />
        ))}
      </div>
    );
  }

  // Content is a string: analyze and parse
  const rawText = content.trim();

  // 1. Check for Downward Arrow cascade (e.g. A ↓ B ↓ C)
  if (rawText.includes('↓')) {
    const lines = rawText.split('\n').map((l) => l.trim()).filter(Boolean);
    const steps = [];
    for (let i = 0; i < lines.length; i++) {
      if (lines[i] === '↓') continue;
      steps.push(lines[i]);
    }
    if (steps.length >= 3) {
      return <PathwayCascade steps={steps} />;
    }
  }

  // 2. Check for Numbered Clinical Procedures (e.g. "1. Rinne Test...\n2. Weber Test...")
  const numberedTestRegex = /(?:^|\n)(\d+\.\s+[^\n]+(?::|\)))/g;
  if (rawText.match(numberedTestRegex)) {
    // Split into introduction and procedure blocks
    const chunks = rawText.split(/(?=(?:^|\n)\d+\.\s+)/);
    return (
      <div>
        {chunks.map((chunk, idx) => {
          const trimmed = chunk.trim();
          if (!trimmed) return null;

          const match = trimmed.match(/^(\d+)\.\s+([^\n]+)/);
          if (match) {
            const stepNum = match[1];
            const title = match[2];
            const rest = trimmed.replace(/^(\d+)\.\s+[^\n]+\n?/, '').trim();
            const bulletLines = rest
              .split('\n')
              .map((l) => l.trim())
              .filter(Boolean)
              .map((l) => l.replace(/^[•\-\*]\s*/, ''));

            return (
              <ClinicalProcedureCard
                key={idx}
                stepNumber={stepNum}
                title={title}
                bullets={bulletLines}
              />
            );
          }

          // Introduction paragraph
          return (
            <p
              key={idx}
              style={{
                margin: '0 0 10px',
                fontSize: '13.5px',
                lineHeight: '1.65',
                color: '#334155',
                fontWeight: '500',
              }}
            >
              {formatInlineText(trimmed)}
            </p>
          );
        })}
      </div>
    );
  }

  // 3. Check for multi-line text with bullets or multiple paragraphs
  const paragraphs = rawText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {paragraphs.map((para, pIdx) => {
        // Bullet group inside paragraph
        const lines = para.split('\n').map((l) => l.trim()).filter(Boolean);
        const hasBullets = lines.some((l) => l.startsWith('•') || l.startsWith('-') || l.startsWith('*'));

        if (hasBullets) {
          const regularLines = [];
          const bulletLines = [];

          lines.forEach((l) => {
            if (l.startsWith('•') || l.startsWith('-') || l.startsWith('*')) {
              bulletLines.push(l.replace(/^[•\-\*]\s*/, ''));
            } else {
              regularLines.push(l);
            }
          });

          return (
            <div key={pIdx}>
              {regularLines.length > 0 && (
                <p style={{ margin: '0 0 8px', fontSize: '13.5px', lineHeight: '1.65', color: '#334155' }}>
                  {formatInlineText(regularLines.join(' '))}
                </p>
              )}
              {bulletLines.length > 0 && <BulletList items={bulletLines} />}
            </div>
          );
        }

        // Tree diagram check
        if (para.includes('├──') || para.includes('└──')) {
          return <ClassificationTreeCard key={pIdx} content={para} />;
        }

        // Callout check
        if (
          para.toLowerCase().startsWith('clinical pearl:') ||
          para.toLowerCase().startsWith('clinical note:') ||
          para.toLowerCase().startsWith('important:')
        ) {
          return <CalloutBox key={pIdx} text={para} type="pearl" />;
        }

        if (para.toLowerCase().startsWith('warning:') || para.toLowerCase().startsWith('caution:')) {
          return <CalloutBox key={pIdx} text={para} type="warning" />;
        }

        // Standard clean paragraph
        return (
          <p
            key={pIdx}
            style={{
              margin: 0,
              fontSize: '13.5px',
              lineHeight: '1.68',
              color: '#334155',
              letterSpacing: '0.01em',
            }}
          >
            {formatInlineText(para)}
          </p>
        );
      })}
    </div>
  );
}
