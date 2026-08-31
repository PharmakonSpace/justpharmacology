import { useState } from "react";
import "./styles/animations.css";

const steps = [
  {
    title: "Drug",
    description: "A drug approaches its biological target.",
  },
  {
    title: "Receptor Binding",
    description:
      "The drug binds to a specific site on the receptor through molecular interactions.",
  },
  {
    title: "Receptor Activation",
    description:
      "Binding changes the receptor's functional state and can initiate cellular signaling.",
  },
  {
    title: "Signal",
    description:
      "The activated receptor triggers downstream signaling inside the cell.",
  },
  {
    title: "Biological Response",
    description:
      "The signaling pathway produces a measurable biological or physiological effect.",
  },
];

export default function DrugReceptorAnimation() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      setStep(1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const reset = () => {
    setStep(1);
  };

  return (
    <div className="drug-animation-card">

      {/* Header */}
      <div className="drug-animation-header">
        <h3>
          Interactive:{" "}
          <span>Drug → Receptor → Response</span>
        </h3>
      </div>

      {/* Progress */}
      <div className="drug-progress">

        <ProgressItem
          icon="💊"
          label="Drug"
          active={step === 1}
          completed={step > 1}
        />

        <div className="drug-progress-arrow">→</div>

        <ProgressItem
          icon="🎯"
          label="Receptor"
          active={step === 2 || step === 3}
          completed={step > 3}
        />

        <div className="drug-progress-arrow">→</div>

        <ProgressItem
          icon="⚡"
          label="Signal"
          active={step === 4}
          completed={step > 4}
        />

        <div className="drug-progress-arrow">→</div>

        <ProgressItem
          icon="✨"
          label="Response"
          active={step === 5}
          completed={false}
        />

      </div>

      {/* Animation Stage */}
      <div className={`drug-stage step-${step}`}>

        <div className="stage-label">
          MOLECULAR INTERACTION
        </div>

        {/* Cell membrane */}
        <div
          className={`cell-membrane ${
            step >= 2 ? "visible" : ""
          }`}
        >
          <div className="membrane-line" />
          <span>Intracellular</span>
        </div>

        {/* Drug */}
        <div
          className={`animated-drug ${
            step >= 1 ? "visible" : ""
          }`}
        >
          <div className="pill-left" />
          <div className="pill-right" />
          <div className="pill-divider" />

          <span>Drug</span>
        </div>

        {/* Receptor */}
        <div
          className={`animated-receptor ${
            step >= 2 ? "visible" : ""
          } ${
            step >= 3 ? "activated" : ""
          }`}
        >
          <div className="receptor-body" />
          <div className="receptor-binding-site" />
        </div>

        {/* Binding label */}
        {step === 2 && (
          <div className="binding-label">
            Binding
          </div>
        )}

        {/* Signal particles */}
        <div
          className={`signal-particles ${
            step >= 4 ? "visible" : ""
          }`}
        >
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Response */}
        <div
          className={`biological-response ${
            step >= 5 ? "visible" : ""
          }`}
        >
          <div className="response-icon">
            ✨
          </div>

          <strong>
            Biological Response
          </strong>

          <small>
            Functional effect
          </small>
        </div>

      </div>

      {/* Explanation */}
      <div className="drug-step-info">

        <div className="step-number">
          STEP {step} OF {steps.length}
        </div>

        <h4>
          {steps[step - 1].title}
        </h4>

        <p>
          {steps[step - 1].description}
        </p>

      </div>

      {/* Progress dots */}
      <div className="step-dots">

        {steps.map((_, index) => (
          <span
            key={index}
            className={`
              ${index + 1 === step ? "active" : ""}
              ${index + 1 < step ? "completed" : ""}
            `}
          />
        ))}

      </div>

      {/* Controls */}
      <div className="drug-controls">

        <button
          type="button"
          className="animation-btn secondary"
          onClick={reset}
        >
          Reset
        </button>

        <div className="animation-navigation">

          <button
            type="button"
            className="animation-btn secondary"
            onClick={previousStep}
            disabled={step === 1}
          >
            ← Previous
          </button>

          <button
            type="button"
            className="animation-btn primary"
            onClick={nextStep}
          >
            {step === steps.length
              ? "Restart"
              : "Next step →"}
          </button>

        </div>

      </div>

    </div>
  );
}


/* -------------------------------------------------------
   Progress Item
------------------------------------------------------- */

function ProgressItem({
  icon,
  label,
  active,
  completed,
}) {
  return (
    <div
      className={`
        progress-item
        ${active ? "active" : ""}
        ${completed ? "completed" : ""}
      `}
    >
      <div className="progress-icon">
        {icon}
      </div>

      <span>
        {label}
      </span>
    </div>
  );
}
