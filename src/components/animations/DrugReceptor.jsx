import { useEffect, useState } from 'react';

const steps = [
  [
    'Drug',
    '💊',
    'A drug approaches its biological target. The drug molecule must reach the site where it can interact with a receptor or another pharmacological target.'
  ],
  [
    'Receptor binding',
    '🎯',
    'The drug binds to a specific site on the receptor. The strength and selectivity of this interaction are related to the drug’s affinity for the receptor.'
  ],
  [
    'Receptor activation',
    '⚡',
    'Binding can change the receptor’s functional state. An agonist, for example, can stabilize an active receptor state and initiate signaling.'
  ],
  [
    'Signal',
    '🔄',
    'The activated receptor initiates downstream signaling. Depending on the receptor type, this may involve G proteins, second messengers, ion channels or enzymes.'
  ],
  [
    'Biological response',
    '✨',
    'The signaling pathway produces a measurable biological or physiological effect. The magnitude of the response depends on the drug, receptor and signaling system involved.'
  ]
];

export default function DrugResponseAnimation() {

  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;

    const timer = setInterval(() => {
      setActive(current => {
        if (current === steps.length - 1) {
          setPlaying(false);
          return current;
        }

        return current + 1;
      });
    }, 1800);

    return () => clearInterval(timer);
  }, [playing]);

  const s = steps[active];

  return (
    <div className="drug-response-lab">

      {/* HEADER */}

      <div className="drug-response-header">

        <div>
          <b>How Drug → Receptor → Response Happens</b>

          <p>
            Click a stage or press Play to follow the pharmacological sequence.
          </p>
        </div>

        <span className="lab-badge">
          INTERACTIVE
        </span>

      </div>


      {/* STEP TRACK */}

      <div className="drug-response-track">

        {steps.map((x, i) => (

          <div
            className="drug-response-stage"
            key={x[0]}
          >

            <button
              className={i === active ? 'active' : ''}
              onClick={() => {
                setActive(i);
                setPlaying(false);
              }}
            >

              <span className="stage-icon">
                {x[1]}
              </span>

              <strong>
                {x[0]}
              </strong>

              <small>
                Step {i + 1}
              </small>

            </button>

            {i < steps.length - 1 && (
              <span className="stage-arrow">
                →
              </span>
            )}

          </div>

        ))}

      </div>


      {/* MAIN VISUAL */}

      <div className="drug-response-visual">

        <div className="visual-label">
          DRUG–RECEPTOR INTERACTION MODEL
        </div>


        {/* EXTRACELLULAR AREA */}

        <div className="extracellular-area">

          <span>
            EXTRACELLULAR
          </span>

        </div>


        {/* CELL MEMBRANE */}

        <div className="cell-membrane">

          <div className="membrane-line" />

          <small>
            CELL MEMBRANE
          </small>

        </div>


        {/* INTRACELLULAR AREA */}

        <div className="intracellular-area">

          <span>
            INTRACELLULAR
          </span>

        </div>


        {/* DRUG */}

        <div
          className={`animated-drug drug-step-${active}`}
        >

          <span className="pill-left" />
          <span className="pill-right" />

          <span className="pill-divider" />

          <small>
            Drug
          </small>

        </div>


        {/* RECEPTOR */}

        <div
          className={`animated-receptor ${
            active >= 1 ? 'receptor-visible' : ''
          } ${
            active >= 2 ? 'receptor-active' : ''
          }`}
        >

          <div className="receptor-body">

            <div className="binding-site">
              {active >= 1 && '💊'}
            </div>

          </div>

          <small>
            Receptor
          </small>

        </div>


        {/* SIGNAL PATHWAY */}

        <div
          className={`signal-pathway ${
            active >= 3 ? 'signal-visible' : ''
          }`}
        >

          <span className="signal-particle particle-1">
            ⚡
          </span>

          <span className="signal-particle particle-2">
            ⚡
          </span>

          <span className="signal-particle particle-3">
            ⚡
          </span>

          <span className="signal-particle particle-4">
            ⚡
          </span>

        </div>


        {/* RESPONSE */}

        <div
          className={`biological-response ${
            active >= 4 ? 'response-visible' : ''
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


        {/* FLOW LABELS */}

        <div className="flow-label drug-flow-label">
          Drug approaches target
        </div>

        <div className="flow-label binding-flow-label">
          Binding
        </div>

        <div className="flow-label activation-flow-label">
          Activation
        </div>

        <div className="flow-label signal-flow-label">
          Downstream signaling
        </div>

      </div>


      {/* EXPLANATION */}

      <div className="drug-response-explain">

        <div className="step-number">
          {active + 1}
        </div>

        <div>

          <strong>
            {s[0]}
          </strong>

          <p>
            {s[2]}
          </p>

        </div>

      </div>


      {/* CONTROLS */}

      <div className="controls">

        <button
          onClick={() => {
            setActive(0);
            setPlaying(false);
          }}
        >
          Reset
        </button>


        <button
          className={playing ? 'selected' : ''}
          onClick={() => {

            if (active === steps.length - 1) {
              setActive(0);
            }

            setPlaying(value => !value);

          }}
        >
          {playing ? 'Pause' : 'Play'}
        </button>


        <button
          onClick={() => {

            setActive(current =>
              Math.min(steps.length - 1, current + 1)
            );

            setPlaying(false);

          }}
          disabled={active === steps.length - 1}
        >
          Next step →
        </button>

      </div>


      {/* REMEMBER */}

      <div className="drug-response-note">

        <b>Remember:</b>{' '}

        Drug–receptor interaction is a key part of pharmacodynamics.
        Binding itself is not always equivalent to activation. The
        resulting response depends on the drug’s intrinsic activity,
        receptor type and downstream signaling mechanism.

      </div>

    </div>
  );
}
