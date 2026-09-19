// HearingStructureAndPhysiologyAnimation.jsx
import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Volume2,
  Layers,
  Compass,
  CheckCircle2,
  Radio,
  Zap,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  Info,
  Stethoscope,
  Activity,
} from 'lucide-react';

/* =========================================================================
   1. DATA DICTIONARIES & SEQUENCES (from user specification)
   ========================================================================= */

function spiral(cx, cy, r0, r1, turns, start) {
  const pts = [];
  const steps = 340;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = start + t * turns * 2 * Math.PI;
    const r = r0 + (r1 - r0) * t;
    pts.push((cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1));
  }
  return 'M' + pts.join(' L ');
}

const PARTS = {
  sound: {
    t: 'Sound wave',
    r: 'Outer ear',
    d: 'A sound is a pressure wave travelling through air at about 343 m/s. Frequency sets pitch, amplitude sets loudness. The whole ear exists to turn these pressure changes into something a nerve can carry.',
    f: [
      ['Speech range', '300 Hz – 3.4 kHz'],
      ['Human range', '20 Hz – 20 kHz'],
    ],
  },
  auricle: {
    t: 'Auricle (pinna)',
    r: 'Outer ear',
    d: 'The elastic cartilage funnel that collects sound and directs it into the canal. Its ridges filter incoming sound differently depending on whether it arrives from above, below, front or back, which is how you judge height and front-versus-back with a single ear.',
    f: [
      ['Made of', 'Elastic cartilage + skin'],
      ['Job', 'Collect and add direction cues'],
    ],
  },
  canal: {
    t: 'External acoustic meatus',
    r: 'Outer ear',
    d: 'A slightly S-shaped tube roughly 2.5 cm long, lined with ceruminous glands that make earwax to trap debris and keep the skin supple. As a tube closed at one end it resonates, boosting the frequencies most important for speech before they ever reach the eardrum.',
    f: [
      ['Length', '~2.5 cm'],
      ['Resonance', '~2–5 kHz, up to ~15 dB'],
      ['Protects with', 'Cerumen, hairs'],
    ],
  },
  eardrum: {
    t: 'Tympanic membrane',
    r: 'Middle ear',
    d: "A thin, cone-shaped membrane that seals the end of the canal. Pressure waves push and pull it, so it vibrates at exactly the frequency of the incoming sound. Its large surface area compared with the oval window is a key part of the ear's amplification.",
    f: [
      ['Area', '~55 mm² effective'],
      ['Converts', 'Air pressure to motion'],
      ['Attached to', 'Handle of the malleus'],
    ],
  },
  malleus: {
    t: 'Malleus (hammer)',
    r: 'Middle ear',
    d: 'First of the three ossicles. Its handle is embedded in the eardrum, so every vibration of the membrane is passed straight into bone. Its head articulates with the incus in the attic of the middle ear cavity.',
    f: [
      ['Order', '1 of 3'],
      ['Muscle', 'Tensor tympani damps it'],
    ],
  },
  incus: {
    t: 'Incus (anvil)',
    r: 'Middle ear',
    d: 'The middle link. Malleus and incus rotate together about a shared axis, and because the malleus arm is longer than the incus arm the chain works as a lever, trading a larger movement for a stronger force.',
    f: [
      ['Lever ratio', '~1.3 : 1'],
      ['Order', '2 of 3'],
    ],
  },
  stapes: {
    t: 'Stapes (stirrup)',
    r: 'Middle ear',
    d: "The smallest bone in the body. Its footplate sits in the oval window and pistons against the fluid of the inner ear. Squeezing the eardrum's force onto this tiny footplate raises pressure enormously, which is what lets airborne sound get into fluid at all.",
    f: [
      ['Area ratio', '~17 : 1'],
      ['Total gain', '~20–25× pressure'],
      ['Muscle', 'Stapedius, acoustic reflex'],
    ],
  },
  oval: {
    t: 'Oval window',
    r: 'Middle ear / inner ear',
    d: 'The membrane-covered opening where the stapes footplate meets the inner ear. Every inward push here sends a pressure wave through the perilymph; the round window below bulges outward to let the incompressible fluid move.',
    f: [
      ['Opens into', 'Scala vestibuli'],
      ['Partner', 'Round window relieves pressure'],
    ],
  },
  eustachian: {
    t: 'Eustachian tube',
    r: 'Middle ear',
    d: 'A tube running from the middle ear down to the nasopharynx. It is normally closed and opens when you swallow or yawn, letting air in or out so the pressure behind the eardrum matches the pressure outside. This is why ears pop in a plane or a lift.',
    f: [
      ['Runs to', 'Nasopharynx'],
      ['Opens on', 'Swallowing, yawning'],
      ['Risk', 'Route for middle ear infection'],
    ],
  },
  cochlea: {
    t: 'Cochlea',
    r: 'Inner ear',
    d: 'A bony spiral of about two and a half turns. Uncoiled it would be roughly 35 mm long. Three fluid-filled channels run its length: scala vestibuli and scala tympani hold perilymph, and between them the scala media holds potassium-rich endolymph that powers the hair cells.',
    f: [
      ['Turns', '~2.5'],
      ['Uncoiled length', '~35 mm'],
      ['Fluids', 'Perilymph, endolymph'],
    ],
  },
  corti: {
    t: 'Organ of Corti',
    r: 'Inner ear',
    d: 'The sensory strip sitting on the basilar membrane, running the whole length of the cochlea. It carries one row of inner hair cells and three rows of outer hair cells, with the gel-like tectorial membrane lying over their tips. This is where hearing actually happens.',
    f: [
      ['Sits on', 'Basilar membrane'],
      ['Covered by', 'Tectorial membrane'],
      ['Inner cells', '~3,500'],
      ['Outer cells', '~12,000'],
    ],
  },
  hair: {
    t: 'Hair cells',
    r: 'Inner ear',
    d: 'When the basilar membrane moves, the stereocilia shear against the tectorial membrane and bend. Bending pulls open tip-link gated channels, potassium floods in from the endolymph, the cell depolarises and releases glutamate onto the nerve fibre. Inner hair cells do the reporting; outer hair cells actively stretch and contract to sharpen and amplify the response.',
    f: [
      ['Process', 'Mechanotransduction'],
      ['Trigger', 'Stereocilia bend'],
      ['Clinical note', 'Permanent loss (non-regenerating in humans)'],
    ],
  },
  nerve: {
    t: 'Cochlear nerve (CN VIII)',
    r: 'Neural',
    d: 'Spiral ganglion fibres gather the output of the hair cells and carry it as trains of action potentials. Fibres keep their tonotopic order, so position within the nerve still codes frequency, while firing rate and timing code loudness and the fine structure of the sound.',
    f: [
      ['Fibres', '~30,000'],
      ['Codes', 'Place, rate, timing'],
    ],
  },
  brainstem: {
    t: 'Brainstem and thalamic relays',
    r: 'Neural',
    d: 'Signals enter the cochlear nuclei, then cross to the superior olivary complex where the two ears are compared for the first time. From there the lateral lemniscus carries them to the inferior colliculus in the midbrain and on to the medial geniculate body of the thalamus.',
    f: [
      ['Order', 'Cochlear nuclei → superior olive → inferior colliculus → MGN'],
      ['Superior olive', 'Compares the two ears (ITD & ILD)'],
    ],
  },
  cortex: {
    t: 'Auditory cortex',
    r: 'Neural',
    d: 'Located on the superior temporal gyrus (Heschl’s gyrus). Primary auditory cortex is tonotopically mapped, just like the cochlea, and surrounding areas pull the signal apart into speech, music, warning sounds and background. Interpretation, not detection, happens here.',
    f: [
      ['Where', 'Superior temporal gyrus (A1)'],
      ['Map', 'Tonotopic, cochlea preserved'],
    ],
  },
};

const ANATOMY_LIST = [
  'auricle',
  'canal',
  'eardrum',
  'malleus',
  'incus',
  'stapes',
  'eustachian',
  'cochlea',
  'corti',
  'hair',
  'nerve',
  'brainstem',
  'cortex',
];

const STEPS = [
  {
    id: 'sound',
    t: 'Sound reaches the ear',
    r: 'Step 1',
    d: 'A vibrating source pushes and pulls the air around it. Those pressure changes spread outward and arrive at the side of the head.',
    anim: ['waves'],
  },
  {
    id: 'auricle',
    t: 'The pinna gathers it',
    r: 'Step 2',
    d: 'The auricle funnels the wave inward and shapes it slightly depending on direction, giving the brain its first clue about where the sound came from.',
    anim: ['waves'],
  },
  {
    id: 'canal',
    t: 'The canal resonates',
    r: 'Step 3',
    d: 'The 2.5 cm canal behaves like a closed pipe and naturally boosts frequencies around 2–5 kHz, which is exactly where the consonants of speech live.',
    anim: ['waves'],
  },
  {
    id: 'eardrum',
    t: 'The eardrum vibrates',
    r: 'Step 4',
    d: 'Pressure changes move the membrane in and out at the frequency of the sound. Airborne energy is now mechanical movement.',
    anim: ['waves', 'drum'],
  },
  {
    id: 'stapes',
    t: 'The ossicles amplify',
    r: 'Step 5',
    d: "Malleus, incus and stapes act as a lever, and the eardrum's wide area is funnelled onto the tiny stapes footplate. Together these raise pressure roughly 20–25 times, enough to drive fluid instead of air.",
    anim: ['drum', 'ossicles'],
  },
  {
    id: 'oval',
    t: 'Stapes pistons the oval window',
    r: 'Step 6',
    d: 'The footplate rocks in the oval window and launches a pressure wave into the perilymph of the scala vestibuli. The round window bulges outward to make room.',
    anim: ['ossicles', 'fluid'],
  },
  {
    id: 'cochlea',
    t: 'A wave travels the cochlea',
    r: 'Step 7',
    d: 'The pressure wave runs along the basilar membrane. The membrane is narrow and stiff at the base and wide and floppy at the apex, so each frequency peaks at its own position. This tonotopic map is how place codes pitch.',
    anim: ['fluid', 'tono'],
    inset: 'tono',
  },
  {
    id: 'corti',
    t: 'The organ of Corti shears',
    r: 'Step 8',
    d: 'As the basilar membrane rises and falls, the hair cells sitting on it move against the overlying tectorial membrane, and their stereocilia bend sideways.',
    anim: ['fluid', 'hair'],
    inset: 'corti',
  },
  {
    id: 'hair',
    t: 'Bending becomes electricity',
    r: 'Step 9',
    d: 'Bending opens mechanically gated ion channels. Potassium rushes in from the endolymph, the hair cell depolarises and releases glutamate onto the cochlear nerve fibre. Outer hair cells contract in step to sharpen the peak.',
    anim: ['hair', 'ions'],
    inset: 'corti',
  },
  {
    id: 'nerve',
    t: 'The nerve fires',
    r: 'Step 10',
    d: 'Action potentials travel up CN VIII. Which fibres fire codes frequency, how fast they fire codes intensity, and when they fire codes the timing that matters for speech and localisation.',
    anim: ['nerve'],
  },
  {
    id: 'brainstem',
    t: 'Brainstem compares the ears',
    r: 'Step 11',
    d: 'In the superior olive, tiny differences in arrival time and loudness between the two ears are measured. That comparison is what tells you a sound came from your left.',
    anim: ['nerve'],
  },
  {
    id: 'cortex',
    t: 'The cortex interprets',
    r: 'Step 12',
    d: 'Via the inferior colliculus and thalamus the signal reaches the auditory cortex, where it stops being data and becomes a voice, a siren or a song.',
    anim: ['nerve', 'cortex'],
  },
];

const PATH = [
  ['Sound wave', 'sound'],
  ['Auricle', 'auricle'],
  ['Ear canal', 'canal'],
  ['Tympanic membrane', 'eardrum'],
  ['Malleus', 'malleus'],
  ['Incus', 'incus'],
  ['Stapes', 'stapes'],
  ['Oval window', 'oval'],
  ['Cochlear fluid', 'cochlea'],
  ['Basilar membrane', 'cochlea'],
  ['Organ of Corti', 'corti'],
  ['Hair cells', 'hair'],
  ['Mechanotransduction', 'hair'],
  ['Cochlear nerve', 'nerve'],
  ['Brainstem relays', 'brainstem'],
  ['Auditory cortex', 'cortex'],
];

const PATH_NOTE = {
  8: 'Perilymph carries the pressure wave; endolymph bathes the hair bundles.',
  9: 'Stiff at the base, floppy at the apex — the frequency map of the ear.',
  12: 'The single moment where mechanical energy becomes a neural signal.',
};

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
    diagnosis: 'Normal hearing acuity; intact conductive apparatus and sensorineural pathway.',
  },
  {
    id: 'right-conductive',
    title: 'Right Conductive Loss (e.g. Cerumen / Otosclerosis / Otitis Media)',
    description: 'Right ear has mechanical blockage (e.g. dense earwax, fluid in middle ear, or stapes footplate fixation). Cochlea is normal.',
    rightRinne: { ac: 10, bc: 25, result: 'Negative (BC ≥ AC)', note: 'Bone conduction is louder/longer than air conduction because bone bypasses middle-ear barrier' },
    leftRinne: { ac: 45, bc: 20, result: 'Positive (AC > BC)', note: 'Normal air conduction in healthy left ear' },
    weber: { lateralization: 'Lateralizes to RIGHT (Affected) Ear', note: 'Ambient background noise is blocked on the right, making bone-conducted vibrations resonate louder' },
    diagnosis: 'Right-sided Conductive Hearing Loss. Bone conduction normal; mechanical transmission impaired.',
  },
  {
    id: 'right-sensorineural',
    title: 'Right Sensorineural Loss (e.g. Presbycusis / Acoustic Neuroma / Gentamicin)',
    description: 'Damage to right organ of Corti hair cells or cochlear division of cranial nerve VIII. Middle ear mechanics are normal.',
    rightRinne: { ac: 15, bc: 8, result: 'Positive (AC > BC, but both reduced)', note: 'Air conduction is still longer than bone conduction, but both are diminished due to sensory cell loss' },
    leftRinne: { ac: 45, bc: 20, result: 'Positive (AC > BC)', note: 'Normal air and bone conduction in healthy left ear' },
    weber: { lateralization: 'Lateralizes to LEFT (Normal / Unaffected) Ear', note: 'The damaged right cochlea/nerve cannot perceive the bone vibrations, so sound is heard in the functioning ear' },
    diagnosis: 'Right-sided Sensorineural Hearing Loss. Irreversible hair cell or CN VIII neural loss.',
  },
];

/* =========================================================================
   2. MAIN COMPONENT
   ========================================================================= */

export default function HearingStructureAndPhysiologyAnimation() {
  // Top Level Tab Navigation
  const [activeMainTab, setActiveMainTab] = useState('interactive-engine'); // 'interactive-engine' | 'tonotopy' | 'haircell' | 'clinical'

  // Interactive Ear Engine States
  const [engineMode, setEngineMode] = useState('anatomy'); // 'anatomy' | 'physio' | 'path'
  const [selectedPart, setSelectedPart] = useState('sound');
  const [stepIx, setStepIx] = useState(0);
  const [pathIx, setPathIx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
 

  // Advanced sub-tool states
  const [selectedFreq, setSelectedFreq] = useState(FREQUENCIES[1]);
  const [shearDirection, setShearDirection] = useState('neutral');
  const [selectedCaseId, setSelectedCaseId] = useState('right-conductive');
  const [activeTuningFork, setActiveTuningFork] = useState(null);

  // Cochlear logarithmic spiral math
  const cochleaWall = useMemo(() => spiral(502, 300, 104, 12, 2.55, Math.PI), []);
  const cochleaInner = useMemo(() => spiral(502, 300, 104, 16, 2.55, Math.PI + 0.06), []);

  // Step play/pause timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        if (engineMode === 'physio') {
          setStepIx((prev) => {
            if (prev >= STEPS.length - 1) {
              setIsPlaying(false);
              return 0;
            }
            return prev + 1;
          });
        } else if (engineMode === 'path') {
          setPathIx((prev) => {
            if (prev >= PATH.length - 1) {
              setIsPlaying(false);
              return 0;
            }
            return prev + 1;
          });
        }
      }, 2600);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, engineMode]);

  // Determine active animations based on mode and current item
  const activeAnimClasses = useMemo(() => {
    const list = [];
    if (engineMode === 'anatomy') {
      if (selectedPart === 'sound') list.push('anim-waves');
      else if (selectedPart === 'eardrum') list.push('anim-drum');
      else if (selectedPart === 'malleus' || selectedPart === 'incus' || selectedPart === 'stapes') {
        list.push('anim-drum', 'anim-ossicles');
      } else if (selectedPart === 'oval') list.push('anim-ossicles', 'anim-fluid');
      else if (selectedPart === 'cochlea') list.push('anim-fluid');
      else if (selectedPart === 'corti') list.push('anim-fluid', 'anim-hair');
      else if (selectedPart === 'hair') list.push('anim-hair', 'anim-ions');
      else if (selectedPart === 'nerve') list.push('anim-nerve');
      else if (selectedPart === 'brainstem') list.push('anim-nerve');
      else if (selectedPart === 'cortex') list.push('anim-nerve', 'anim-cortex');
    } else if (engineMode === 'physio') {
      const current = STEPS[stepIx];
      if (current && current.anim) {
        current.anim.forEach((a) => list.push('anim-' + a));
      }
    } else if (engineMode === 'path') {
      const row = PATH[pathIx];
      if (row) {
        const id = row[1];
        if (id === 'sound') list.push('anim-waves');
        else if (id === 'eardrum') list.push('anim-drum');
        else if (id === 'malleus' || id === 'incus' || id === 'stapes') list.push('anim-ossicles');
        else if (id === 'oval') list.push('anim-fluid');
        else if (id === 'cochlea') list.push('anim-fluid');
        else if (id === 'corti') list.push('anim-fluid', 'anim-hair');
        else if (id === 'hair') list.push('anim-hair', 'anim-ions');
        else if (id === 'nerve' || id === 'brainstem' || id === 'cortex') list.push('anim-nerve', 'anim-cortex');
      }
    }
    return list;
  }, [engineMode, selectedPart, stepIx, pathIx]);

  // Determine active highlighted SVG part
  const activeSvgId = useMemo(() => {
    let raw = 'sound';
    if (engineMode === 'anatomy') raw = selectedPart;
    else if (engineMode === 'physio') raw = STEPS[stepIx]?.id || 'sound';
    else if (engineMode === 'path') raw = PATH[pathIx]?.[1] || 'sound';

    if (raw === 'corti' || raw === 'hair') return 'cochlea';
    return raw;
  }, [engineMode, selectedPart, stepIx, pathIx]);

  // Determine active inset figure
  const activeInset = useMemo(() => {
    if (engineMode === 'anatomy') {
      return selectedPart === 'corti' || selectedPart === 'hair' ? 'corti' : null;
    }
    if (engineMode === 'physio') {
      return STEPS[stepIx]?.inset || null;
    }
    if (engineMode === 'path') {
      const id = PATH[pathIx]?.[1];
      if (id === 'corti' || id === 'hair') return 'corti';
      if (pathIx === 9) return 'tono';
      return null;
    }
    return null;
  }, [engineMode, selectedPart, stepIx, pathIx]);

  // Content for panel
  const panelData = useMemo(() => {
    if (engineMode === 'anatomy') {
      const p = PARTS[selectedPart] || PARTS.sound;
      return {
        kicker: p.r,
        title: p.t,
        desc: p.d,
        facts: p.f || [],
      };
    }
    if (engineMode === 'physio') {
      const s = STEPS[stepIx] || STEPS[0];
      const p = PARTS[s.id];
      return {
        kicker: `${s.r} of ${STEPS.length}`,
        title: s.t,
        desc: s.d,
        facts: p?.f || [],
      };
    }
    // Path mode
    const row = PATH[pathIx] || PATH[0];
    const p = PARTS[row[1]];
    const note = PATH_NOTE[pathIx] ? PATH_NOTE[pathIx] + ' ' : '';
    return {
      kicker: `Link ${pathIx + 1} of ${PATH.length}`,
      title: row[0],
      desc: note + (p?.d || ''),
      facts: p?.f || [],
    };
  }, [engineMode, selectedPart, stepIx, pathIx]);

  // Handle part click on SVG
  const handlePartClick = (id) => {
    setIsPlaying(false);
    if (engineMode === 'anatomy') {
      setSelectedPart(id);
    } else if (engineMode === 'physio') {
      const ix = STEPS.findIndex((s) => s.id === id);
      if (ix >= 0) setStepIx(ix);
      else setSelectedPart(id);
    } else {
      const ix = PATH.findIndex((r) => r[1] === id);
      if (ix >= 0) setPathIx(ix);
      else setSelectedPart(id);
    }
  };

  const currentCase = CLINICAL_CASES.find((c) => c.id === selectedCaseId) || CLINICAL_CASES[0];

  return (
    <div
      className="ear-anim-container"
      style={{
        background: 'var(--bg)',
        color: 'var(--text)',
        borderRadius: '16px',
        padding: 'clamp(14px, 2.5vw, 24px)',
        border: '1px solid var(--border)',
        boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
        fontFamily: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Scoped CSS for Keyframe Animations and SVG Highlight Filters */}
      <style>{`
        .ear-anim-container {
          --bg: #f8fafc;
          --panel: #ffffff;
          --panel-2: #f1f5f9;
          --border: #cbd5e1;
          --text: #0e2138;
          --muted: #64748b;
          --accent: #0284c7;
          --accent-soft: rgba(2, 132, 199, 0.12);
          --outer: #38bdf8;
          --middle: #e2a03f;
          --inner: #34d399;
          --nerve: #f0b429;
          --stage: #0a1e36;
          --stage-text: #e8f1fb;
          --stage-muted: #9fb6d0;
          --stage-border: rgba(120, 170, 220, 0.28);
        }

        .ear-stage {
          background: radial-gradient(120% 130% at 18% 12%, #16395f 0%, var(--stage) 62%);
          border: 1px solid var(--stage-border);
          border-radius: 14px;
          padding: 10px;
          overflow: hidden;
        }
        .ear-stage svg {
          display: block;
          width: 100%;
          height: auto;
          max-width: 100%;
        }

        .ear-part { cursor: pointer; }
        .ear-part .hit { fill: transparent; }
        .ear-part:hover .lit { filter: url(#glowFilter); }
        .ear-stage.focus .ear-part:not(.active) { opacity: 0.32; transition: opacity 0.25s ease; }
        .ear-part.active .lit { filter: url(#glowFilter); }
        .ear-part.active .lbl { fill: #ffffff; font-weight: 700; }

        .lbl { font-family: "IBM Plex Sans", sans-serif; font-size: 12.5px; fill: #dce9f7; font-weight: 500; pointer-events: none; }
        .lbl.sm { font-size: 11px; fill: #9fb6d0; }
        .lead { stroke: #7fa6c9; stroke-width: 1; fill: none; opacity: 0.75; pointer-events: none; }
        .ear-stage.hidelabels .lbl, .ear-stage.hidelabels .lead { opacity: 0.15; transition: opacity 0.3s; }

        @keyframes emit { 0% { opacity: 0; transform: translateX(26px); } 25% { opacity: 0.95; } 100% { opacity: 0; transform: translateX(-4px); } }
        .wave { opacity: 0; }
        .anim-waves .wave { animation: emit 1.8s linear infinite; }
        .anim-waves .wave:nth-child(2) { animation-delay: 0.6s; }
        .anim-waves .wave:nth-child(3) { animation-delay: 1.2s; }

        @keyframes drum { 0%, 100% { transform: scaleX(1); } 50% { transform: scaleX(1.5); } }
        #eardrumMemb { transform-box: fill-box; transform-origin: center; }
        .anim-drum #eardrumMemb { animation: drum 0.42s ease-in-out infinite; }

        @keyframes rock { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-3.4deg); } }
        #ossicleGroup { transform-box: view-box; transform-origin: 296px 250px; }
        .anim-ossicles #ossicleGroup { animation: rock 0.42s ease-in-out infinite; }

        @keyframes piston { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(3.5px, 1px); } }
        #ovalWin { transform-box: fill-box; transform-origin: center; }
        .anim-fluid #ovalWin { animation: piston 0.42s ease-in-out infinite; }

        @keyframes flow { to { stroke-dashoffset: -1400; } }
        #fluidPulse { stroke-dasharray: 34 62; stroke-dashoffset: 0; opacity: 0; }
        .anim-fluid #fluidPulse { opacity: 0.95; animation: flow 3.4s linear infinite; }

        @keyframes spark { to { stroke-dashoffset: -620; } }
        #nervePulse { stroke-dasharray: 22 300; opacity: 0; }
        .anim-nerve #nervePulse { opacity: 1; animation: spark 1.6s linear infinite; }

        @keyframes cortexPulse { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.95; } }
        #cortexGlow { opacity: 0.25; }
        .anim-cortex #cortexGlow { animation: cortexPulse 1.4s ease-in-out infinite; }

        @keyframes shear { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(9px); } }
        @keyframes bend { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(11deg); } }
        @keyframes fizz { 0% { opacity: 0; transform: translate(0, 0); } 40% { opacity: 1; } 100% { opacity: 0; transform: translate(16px, 16px); } }

        .anim-hair #tectorial { animation: shear 0.9s ease-in-out infinite; }
        .anim-hair .cilia { animation: bend 0.9s ease-in-out infinite; }
        .cilia { transform-box: fill-box; transform-origin: bottom center; }
        .ion { opacity: 0; }
        .anim-ions .ion { animation: fizz 1.5s linear infinite; }
        .anim-ions .ion:nth-child(2) { animation-delay: 0.4s; }
        .anim-ions .ion:nth-child(3) { animation-delay: 0.8s; }
        .anim-ions .ion:nth-child(4) { animation-delay: 1.1s; }

        @keyframes travel { 0% { transform: translateX(0); opacity: 0; } 12% { opacity: 1; } 100% { transform: translateX(208px); opacity: 0; } }
        #wavePacket { opacity: 0; }
        .anim-tono #wavePacket { animation: travel 2.6s ease-in infinite; }

        @media (prefers-reduced-motion: reduce) {
          .anim-waves .wave, #eardrumMemb, #ossicleGroup, #ovalWin, #fluidPulse, #nervePulse, #cortexGlow, #tectorial, .cilia, .ion, #wavePacket {
            animation: none !important;
          }
        }
      `}</style>

      {/* Top Header */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border)',
          marginBottom: '18px',
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
                background: 'var(--accent-soft)',
                color: 'var(--accent)',
                fontSize: '11.5px',
                fontWeight: '700',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              <Volume2 size={12} /> Auditory Physiology Simulator
            </span>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>High-Yield Visualizer</span>
          </div>
          <h2 style={{ margin: '6px 0 2px', fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '700' }}>
            Anatomy of the Ear &amp; Physiology of Hearing
          </h2>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
            Follow sound from air pressure vibrations through middle-ear 20x amplification, cochlear tonotopy, and bedside tuning fork tests.
          </p>
        </div>

       
      </div>

      {/* Primary Navigation Tabs */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {[
          { id: 'interactive-engine', label: '🎧 Interactive Ear Anatomy & Hearing Engine', icon: Volume2 },
          { id: 'tonotopy', label: '📊 Cochlear Tonotopy (Base vs. Apex)', icon: Layers },
          { id: 'haircell', label: '⚡ Hair Cell Mechanotransduction', icon: Zap },
          { id: 'clinical', label: '🩺 Bedside Tuning Fork (Rinne & Weber)', icon: Radio },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMainTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveMainTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: '600',
                border: isActive ? '2px solid var(--accent)' : '1px solid var(--border)',
                background: isActive ? 'var(--accent-soft)' : 'var(--panel)',
                color: isActive ? 'var(--accent)' : 'var(--muted)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <Icon size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* =========================================================================
         TAB 1: INTERACTIVE EAR ANATOMY & HEARING ENGINE (User-specified Visualizer)
         ========================================================================= */}
      {activeMainTab === 'interactive-engine' && (
        <div>
          {/* Sub-modes bar: Anatomy / How hearing works / Complete pathway */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {[
              { id: 'anatomy', title: 'Anatomy Mode', sub: 'Explore each structure on diagram' },
              { id: 'physio', title: 'How Hearing Works', sub: 'Air to fluid to nerve, step by step' },
              { id: 'path', title: 'Complete Pathway', sub: 'All 16 links in the chain' },
            ].map((m) => {
              const isSelected = engineMode === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setEngineMode(m.id);
                  }}
                  style={{
                    flex: '1 1 200px',
                    textAlign: 'left',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                    background: isSelected ? 'var(--accent-soft)' : 'var(--panel)',
                    color: isSelected ? 'var(--text)' : 'var(--muted)',
                    cursor: 'pointer',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '13px', color: 'var(--text)' }}>
                    {m.title}
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{m.sub}</span>
                </button>
              );
            })}
          </div>

          {/* Main Layout: SVG Stage on left, Explanatory Panel on right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.7fr) minmax(290px, 1fr)',
              gap: '18px',
              alignItems: 'start',
            }}
          >
            {/* Left: SVG Canvas Stage */}
            <div>
              <div
                className={`ear-stage ${activeSvgId ? 'focus' : ''} ${
                  engineMode === 'path' ? 'hidelabels' : ''
                } ${activeAnimClasses.join(' ')}`}
              >
                <svg
                  viewBox="0 0 1000 560"
                  role="img"
                  aria-label="Cross-section of human ear from auricle to auditory cortex"
                >
                  <defs>
                    <filter id="glowFilter" x="-60%" y="-60%" width="220%" height="220%">
                      <feGaussianBlur stdDeviation="6" result="b" />
                      <feFlood floodColor="#7fe3ff" floodOpacity="0.85" result="c" />
                      <feComposite in="c" in2="b" operator="in" result="g" />
                      <feMerge>
                        <feMergeNode in="g" />
                        <feMergeNode in="g" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#f0ac99" />
                      <stop offset="1" stopColor="#d07a6c" />
                    </linearGradient>
                    <linearGradient id="canalG" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#d98d7d" />
                      <stop offset="1" stopColor="#a8544c" />
                    </linearGradient>
                    <linearGradient id="boneG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#f3e2c2" />
                      <stop offset="1" stopColor="#cfae7e" />
                    </linearGradient>
                    <linearGradient id="cochG" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#7fd2f5" />
                      <stop offset="1" stopColor="#1d7fc0" />
                    </linearGradient>
                    <linearGradient id="brainG" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#eeb6a6" />
                      <stop offset="1" stopColor="#cf8877" />
                    </linearGradient>
                  </defs>

                  {/* Region Bands */}
                  <g opacity="0.14">
                    <rect x="24" y="86" width="248" height="404" rx="14" fill="#38bdf8" />
                    <rect x="276" y="86" width="150" height="404" rx="14" fill="#e2a03f" />
                    <rect x="430" y="86" width="180" height="404" rx="14" fill="#34d399" />
                  </g>
                  <g className="lbl sm" textAnchor="middle">
                    <text x="148" y="108">Outer ear</text>
                    <text x="351" y="108">Middle ear</text>
                    <text x="520" y="108">Inner ear</text>
                    <text x="800" y="108">Central auditory pathway</text>
                  </g>

                  {/* Sound Wave */}
                  <g
                    className={`ear-part ${activeSvgId === 'sound' ? 'active' : ''}`}
                    onClick={() => handlePartClick('sound')}
                    tabIndex={0}
                    role="button"
                    aria-label="Sound wave"
                  >
                    <g className="lit" stroke="#7fe3ff" strokeWidth="3.4" fill="none" strokeLinecap="round">
                      <path className="wave" d="M40 214 A62 62 0 0 1 40 330" />
                      <path className="wave" d="M22 196 A86 86 0 0 1 22 348" />
                      <path className="wave" d="M6 178 A110 110 0 0 1 6 366" />
                    </g>
                    <rect className="hit" x="0" y="170" width="60" height="200" />
                  </g>

                  {/* Auricle (Pinna) */}
                  <g
                    className={`ear-part ${activeSvgId === 'auricle' ? 'active' : ''}`}
                    onClick={() => handlePartClick('auricle')}
                    tabIndex={0}
                    role="button"
                    aria-label="Auricle or pinna"
                  >
                    <g className="lit">
                      <path
                        d="M172 122 C112 122 72 178 72 252 C72 332 96 392 122 428 C140 452 178 447 181 413 C184 382 160 372 157 345 C154 318 178 304 202 300 L202 262 C186 254 179 234 191 214 C207 188 202 148 172 122 Z"
                        fill="url(#skin)"
                        stroke="#8d4c42"
                        strokeWidth="2"
                      />
                      <path d="M191 212 C160 228 150 268 166 296" fill="none" stroke="#a35a4e" strokeWidth="2.4" opacity="0.8" />
                      <path d="M152 176 C131 202 129 242 142 272" fill="none" stroke="#a35a4e" strokeWidth="2.4" opacity="0.8" />
                      <path d="M120 392 C132 404 148 408 160 400" fill="none" stroke="#a35a4e" strokeWidth="2" opacity="0.7" />
                    </g>
                    <path
                      className="hit"
                      d="M172 122 C112 122 72 178 72 252 C72 332 96 392 122 428 C140 452 178 447 181 413 C184 382 160 372 157 345 C154 318 178 304 202 300 L202 262 C186 254 179 234 191 214 C207 188 202 148 172 122 Z"
                    />
                    <path className="lead" d="M120 140 L92 128" />
                    <text className="lbl" x="86" y="124" textAnchor="end">Auricle</text>
                  </g>

                  {/* Ear Canal (External Acoustic Meatus) */}
                  <g
                    className={`ear-part ${activeSvgId === 'canal' ? 'active' : ''}`}
                    onClick={() => handlePartClick('canal')}
                    tabIndex={0}
                    role="button"
                    aria-label="External acoustic meatus, the ear canal"
                  >
                    <g className="lit">
                      <path
                        d="M200 262 C226 250 250 246 272 243 L272 323 C250 320 225 314 200 300 Z"
                        fill="url(#canalG)"
                        stroke="#8d4c42"
                        strokeWidth="1.6"
                      />
                      <g fill="#f0c24a" opacity="0.9">
                        <ellipse cx="228" cy="258" rx="7" ry="4.5" />
                        <ellipse cx="248" cy="308" rx="6" ry="4" />
                      </g>
                    </g>
                    <path className="hit" d="M200 258 L274 238 L274 328 L200 304 Z" />
                    <path className="lead" d="M236 250 L244 206" />
                    <text className="lbl" x="246" y="200">Ear canal</text>
                    <text className="lbl sm" x="246" y="186">ceruminous glands</text>
                  </g>

                  {/* Eardrum (Tympanic Membrane) */}
                  <g
                    className={`ear-part ${activeSvgId === 'eardrum' ? 'active' : ''}`}
                    onClick={() => handlePartClick('eardrum')}
                    tabIndex={0}
                    role="button"
                    aria-label="Tympanic membrane, the eardrum"
                  >
                    <g className="lit">
                      <ellipse
                        id="eardrumMemb"
                        cx="277"
                        cy="283"
                        rx="6"
                        ry="43"
                        transform="rotate(-7 277 283)"
                        fill="#e9d6cf"
                        opacity="0.92"
                        stroke="#b07f74"
                        strokeWidth="2"
                      />
                    </g>
                    <rect className="hit" x="262" y="236" width="32" height="96" />
                    <path className="lead" d="M277 330 L268 398" />
                    <text className="lbl" x="262" y="414" textAnchor="end">Tympanic membrane</text>
                  </g>

                  {/* Ossicles Group */}
                  <g id="ossicleGroup">
                    {/* Malleus */}
                    <g
                      className={`ear-part ${activeSvgId === 'malleus' ? 'active' : ''}`}
                      onClick={() => handlePartClick('malleus')}
                      tabIndex={0}
                      role="button"
                      aria-label="Malleus, the hammer"
                    >
                      <g className="lit" fill="url(#boneG)" stroke="#9a7a4a" strokeWidth="1.6">
                        <path d="M274 302 L296 252 L306 256 L284 306 Z" />
                        <circle cx="308" cy="241" r="12" />
                      </g>
                      <rect className="hit" x="270" y="226" width="48" height="86" />
                      <path className="lead" d="M304 228 L296 194" />
                      <text className="lbl" x="294" y="188" textAnchor="middle">Malleus</text>
                    </g>

                    {/* Incus */}
                    <g
                      className={`ear-part ${activeSvgId === 'incus' ? 'active' : ''}`}
                      onClick={() => handlePartClick('incus')}
                      tabIndex={0}
                      role="button"
                      aria-label="Incus, the anvil"
                    >
                      <g className="lit" fill="url(#boneG)" stroke="#9a7a4a" strokeWidth="1.6">
                        <ellipse cx="335" cy="239" rx="17" ry="13" />
                        <path d="M340 250 L356 274 L348 279 L332 253 Z" />
                      </g>
                      <rect className="hit" x="316" y="224" width="46" height="62" />
                      <path className="lead" d="M344 224 L352 190" />
                      <text className="lbl" x="352" y="184" textAnchor="middle">Incus</text>
                    </g>

                    {/* Stapes */}
                    <g
                      className={`ear-part ${activeSvgId === 'stapes' ? 'active' : ''}`}
                      onClick={() => handlePartClick('stapes')}
                      tabIndex={0}
                      role="button"
                      aria-label="Stapes, the stirrup"
                    >
                      <g className="lit" fill="none" stroke="#dcc08a" strokeWidth="5" strokeLinecap="round">
                        <path d="M356 276 L382 268" />
                        <path d="M356 278 L382 292" />
                        <path d="M384 264 L388 296" strokeWidth="7" />
                      </g>
                      <rect className="hit" x="350" y="256" width="46" height="48" />
                      <path className="lead" d="M376 262 L392 226" />
                      <text className="lbl" x="394" y="220" textAnchor="middle">Stapes</text>
                    </g>
                  </g>

                  {/* Oval & Round Window */}
                  <g
                    className={`ear-part ${activeSvgId === 'oval' ? 'active' : ''}`}
                    onClick={() => handlePartClick('oval')}
                    tabIndex={0}
                    role="button"
                    aria-label="Oval window"
                  >
                    <g className="lit">
                      <ellipse id="ovalWin" cx="394" cy="280" rx="5" ry="15" fill="#8fd9f7" stroke="#2b86bd" strokeWidth="2" />
                    </g>
                    <rect className="hit" x="384" y="262" width="22" height="38" />
                    <path className="lead" d="M400 268 L428 246" />
                    <text className="lbl sm" x="432" y="242">Oval window</text>
                  </g>
                  <ellipse cx="398" cy="330" rx="5" ry="10" fill="#9ec6de" stroke="#2b86bd" strokeWidth="1.6" opacity="0.85" />
                  <text className="lbl sm" x="414" y="352">Round window</text>

                  {/* Eustachian Tube */}
                  <g
                    className={`ear-part ${activeSvgId === 'eustachian' ? 'active' : ''}`}
                    onClick={() => handlePartClick('eustachian')}
                    tabIndex={0}
                    role="button"
                    aria-label="Eustachian tube"
                  >
                    <g className="lit" fill="none" stroke="#d98d7d" strokeWidth="15" strokeLinecap="round">
                      <path d="M300 322 C324 366 360 396 424 418" />
                    </g>
                    <path d="M300 322 C324 366 360 396 424 418" fill="none" stroke="#7d3d36" strokeWidth="3" opacity="0.6" />
                    <path className="hit" d="M300 322 C324 366 360 396 424 418" stroke="transparent" strokeWidth="26" fill="none" />
                    <path className="lead" d="M382 404 L392 438" />
                    <text className="lbl" x="396" y="452">Eustachian tube</text>
                  </g>

                  {/* Cochlea (Spiral) */}
                  <g
                    className={`ear-part ${activeSvgId === 'cochlea' ? 'active' : ''}`}
                    onClick={() => handlePartClick('cochlea')}
                    tabIndex={0}
                    role="button"
                    aria-label="Cochlea"
                  >
                    <g className="lit">
                      <path d={cochleaWall} fill="none" stroke="url(#cochG)" strokeWidth="26" strokeLinecap="round" />
                      <path d={cochleaInner} fill="none" stroke="#e8f6ff" strokeWidth="2.4" opacity="0.55" />
                      <path id="fluidPulse" d={cochleaWall} fill="none" stroke="#ffffff" strokeWidth="9" strokeLinecap="round" />
                    </g>
                    <path d={cochleaWall} className="hit" fill="none" stroke="transparent" strokeWidth="34" />
                    <path className="lead" d="M508 392 L520 432" />
                    <text className="lbl" x="524" y="446">Cochlea</text>
                    <text className="lbl sm" x="524" y="461">organ of Corti inside</text>
                  </g>

                  {/* Cochlear Nerve (CN VIII) */}
                  <g
                    className={`ear-part ${activeSvgId === 'nerve' ? 'active' : ''}`}
                    onClick={() => handlePartClick('nerve')}
                    tabIndex={0}
                    role="button"
                    aria-label="Cochlear nerve, cranial nerve eight"
                  >
                    <g className="lit" fill="none" stroke="#f0b429" strokeLinecap="round">
                      <path d="M504 300 C560 296 596 318 632 344" strokeWidth="10" />
                      <path d="M508 288 C556 282 590 300 622 326" strokeWidth="4" opacity="0.7" />
                      <path
                        id="nervePulse"
                        d="M504 300 C560 296 596 318 632 344 C664 366 676 330 690 300 C708 262 744 232 792 226"
                        stroke="#fff6d8"
                        strokeWidth="6"
                      />
                    </g>
                    <path d="M504 300 C560 296 596 318 632 344" className="hit" stroke="transparent" strokeWidth="30" fill="none" />
                    <path className="lead" d="M566 314 L572 372" />
                    <text className="lbl" x="576" y="386">Cochlear nerve</text>
                    <text className="lbl sm" x="576" y="401">CN VIII</text>
                  </g>

                  {/* Brainstem Relays */}
                  <g
                    className={`ear-part ${activeSvgId === 'brainstem' ? 'active' : ''}`}
                    onClick={() => handlePartClick('brainstem')}
                    tabIndex={0}
                    role="button"
                    aria-label="Brainstem and thalamic relays"
                  >
                    <g className="lit">
                      <path d="M646 326 C628 356 622 392 628 424 L664 424 C666 390 676 352 690 330 Z" fill="#d8a08f" stroke="#a36a5c" strokeWidth="2" />
                      <circle cx="652" cy="356" r="6" fill="#f0b429" opacity="0.9" />
                      <circle cx="662" cy="392" r="6" fill="#f0b429" opacity="0.9" />
                    </g>
                    <rect className="hit" x="620" y="320" width="76" height="110" />
                    <path className="lead" d="M648 424 L644 458" />
                    <text className="lbl" x="644" y="472" textAnchor="middle">Brainstem relays</text>
                  </g>

                  {/* Auditory Cortex (Temporal Lobe) */}
                  <g
                    className={`ear-part ${activeSvgId === 'cortex' ? 'active' : ''}`}
                    onClick={() => handlePartClick('cortex')}
                    tabIndex={0}
                    role="button"
                    aria-label="Auditory cortex in the temporal lobe"
                  >
                    <g className="lit">
                      <path
                        d="M700 296 C692 206 760 140 850 146 C930 151 962 214 946 274 C936 320 892 346 842 346 L802 346 C782 362 748 366 722 346 C708 334 701 316 700 296 Z"
                        fill="url(#brainG)"
                        stroke="#a36a5c"
                        strokeWidth="2.4"
                      />
                      <g stroke="#a36a5c" strokeWidth="2" fill="none" opacity="0.55">
                        <path d="M742 180 C770 200 764 232 736 244" />
                        <path d="M800 158 C830 184 820 220 790 232" />
                        <path d="M866 168 C896 192 890 228 858 240" />
                        <path d="M756 290 C792 312 850 310 886 288" />
                      </g>
                      <ellipse id="cortexGlow" cx="818" cy="296" rx="44" ry="19" transform="rotate(-12 818 296)" fill="#ff8a5c" />
                      <ellipse cx="818" cy="296" rx="44" ry="19" transform="rotate(-12 818 296)" fill="none" stroke="#ff8a5c" strokeWidth="2.4" />
                    </g>
                    <path
                      className="hit"
                      d="M700 296 C692 206 760 140 850 146 C930 151 962 214 946 274 C936 320 892 346 842 346 L802 346 C782 362 748 366 722 346 C708 334 701 316 700 296 Z"
                    />
                    <path className="lead" d="M848 288 L900 320" />
                    <text className="lbl" x="906" y="326">Auditory cortex</text>
                    <text className="lbl sm" x="906" y="341">temporal lobe</text>
                  </g>
                </svg>
              </div>

              {/* Stage legend & hints */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px',
                  padding: '6px 4px 0',
                  fontSize: '11.5px',
                  color: 'var(--muted)',
                }}
              >
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  <span><span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '2px', background: 'var(--outer)', marginRight: '5px' }}></span>Outer ear</span>
                  <span><span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '2px', background: 'var(--middle)', marginRight: '5px' }}></span>Middle ear</span>
                  <span><span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '2px', background: 'var(--inner)', marginRight: '5px' }}></span>Inner ear</span>
                  <span><span style={{ display: 'inline-block', width: '9px', height: '9px', borderRadius: '2px', background: 'var(--nerve)', marginRight: '5px' }}></span>Neural pathway</span>
                </div>
                <span>💡 Click any structure to inspect &amp; animate</span>
              </div>
            </div>

            {/* Right: Side Inspection Panel */}
            <aside
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--border)',
                borderRadius: '14px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    fontWeight: '600',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {panelData.kicker}
                </span>
                <h3 style={{ margin: '2px 0 6px', fontSize: '17px', fontWeight: '700', color: 'var(--text)' }}>
                  {panelData.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                  {panelData.desc}
                </p>
              </div>

              {/* Dynamic Inset 1: Organ of Corti */}
              {activeInset === 'corti' && (
                <div
                  style={{
                    background: 'var(--stage)',
                    border: '1px solid var(--stage-border)',
                    borderRadius: '10px',
                    padding: '8px',
                  }}
                >
                  <svg viewBox="0 0 340 196" role="img" aria-label="Organ of Corti with inner and outer hair cells">
                    <path id="tectorial" d="M14 62 C90 50 240 52 320 66 L320 84 C238 70 90 68 14 80 Z" fill="#c9a7e8" opacity="0.75" />
                    <text className="lbl sm" x="14" y="46" style={{ fontSize: '10px' }}>Tectorial membrane</text>
                    <g>
                      <rect x="82" y="96" width="26" height="48" rx="9" fill="#f6d9c2" stroke="#b98a6a" strokeWidth="1.5" />
                      <g className="cilia" stroke="#ffd47f" strokeWidth="3" strokeLinecap="round">
                        <path d="M88 96 L86 80" />
                        <path d="M95 96 L95 78" />
                        <path d="M102 96 L104 80" />
                      </g>
                      <text className="lbl sm" x="70" y="164" style={{ fontSize: '10px' }}>Inner hair cell</text>
                    </g>
                    <g>
                      <g transform="translate(96,0)">
                        <rect x="82" y="102" width="20" height="42" rx="8" fill="#f6d9c2" stroke="#b98a6a" strokeWidth="1.5" />
                        <g className="cilia" stroke="#7fe3ff" strokeWidth="2.6" strokeLinecap="round">
                          <path d="M87 102 L85 86" />
                          <path d="M92 102 L92 84" />
                          <path d="M97 102 L99 86" />
                        </g>
                      </g>
                      <g transform="translate(130,0)">
                        <rect x="82" y="102" width="20" height="42" rx="8" fill="#f6d9c2" stroke="#b98a6a" strokeWidth="1.5" />
                        <g className="cilia" stroke="#7fe3ff" strokeWidth="2.6" strokeLinecap="round">
                          <path d="M87 102 L85 86" />
                          <path d="M92 102 L92 84" />
                          <path d="M97 102 L99 86" />
                        </g>
                      </g>
                      <g transform="translate(164,0)">
                        <rect x="82" y="102" width="20" height="42" rx="8" fill="#f6d9c2" stroke="#b98a6a" strokeWidth="1.5" />
                        <g className="cilia" stroke="#7fe3ff" strokeWidth="2.6" strokeLinecap="round">
                          <path d="M87 102 L85 86" />
                          <path d="M92 102 L92 84" />
                          <path d="M97 102 L99 86" />
                        </g>
                      </g>
                      <text className="lbl sm" x="190" y="164" style={{ fontSize: '10px' }}>Outer hair cells</text>
                    </g>
                    <g className="ions">
                      <circle className="ion" cx="112" cy="86" r="3" fill="#7fe3ff" />
                      <circle className="ion" cx="118" cy="92" r="3" fill="#ffd47f" />
                      <circle className="ion" cx="108" cy="94" r="2.6" fill="#7fe3ff" />
                      <circle className="ion" cx="122" cy="84" r="2.6" fill="#ffd47f" />
                    </g>
                    <rect x="14" y="144" width="306" height="9" rx="4" fill="#e0c08a" />
                    <text className="lbl sm" x="14" y="176" style={{ fontSize: '10px' }}>Basilar membrane</text>
                    <g stroke="#f0b429" strokeWidth="2.4" fill="none">
                      <path d="M95 153 C150 178 240 176 306 172" />
                      <path d="M188 153 C220 172 258 176 306 172" />
                    </g>
                    <text className="lbl sm" x="326" y="170" textAnchor="end" style={{ fontSize: '10px' }}>to CN VIII</text>
                  </svg>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--stage-muted)', marginTop: '4px', textAlign: 'center' }}>
                    Hair cells sit on basilar membrane; shearing against tectorial membrane opens K+ channels.
                  </span>
                </div>
              )}

              {/* Dynamic Inset 2: Uncoiled Tonotopic Map */}
              {activeInset === 'tono' && (
                <div
                  style={{
                    background: 'var(--stage)',
                    border: '1px solid var(--stage-border)',
                    borderRadius: '10px',
                    padding: '8px',
                  }}
                >
                  <svg viewBox="0 0 340 120" role="img" aria-label="Uncoiled cochlea showing tonotopic map">
                    <defs>
                      <linearGradient id="tonoGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0" stopColor="#ff7a5c" />
                        <stop offset="0.5" stopColor="#f0c94b" />
                        <stop offset="1" stopColor="#4fb6ef" />
                      </linearGradient>
                    </defs>
                    <path d="M20 46 L316 32 C326 32 326 88 316 88 L20 74 Z" fill="url(#tonoGrad)" opacity="0.85" />
                    <g id="wavePacket">
                      <path d="M40 60 q10 -20 20 0 q10 20 20 0 q10 -20 20 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                    </g>
                    <text className="lbl sm" x="20" y="106" style={{ fontSize: '10px' }}>Base · high frequency (20 kHz) · stiff</text>
                    <text className="lbl sm" x="320" y="106" textAnchor="end" style={{ fontSize: '10px' }}>Apex · low (20 Hz) · compliant</text>
                  </svg>
                  <span style={{ display: 'block', fontSize: '11px', color: 'var(--stage-muted)', marginTop: '4px', textAlign: 'center' }}>
                    Tonotopy: high pitch resonates at stiff base; low pitch reaches compliant apex.
                  </span>
                </div>
              )}

              {/* High-yield Facts List */}
              {panelData.facts.length > 0 && (
                <ul
                  style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  {panelData.facts.map(([label, val], idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        padding: '6px 0',
                        borderBottom: '1px dashed var(--border)',
                        fontSize: '12px',
                      }}
                    >
                      <b style={{ flex: '0 0 100px', color: 'var(--muted)', fontWeight: 600 }}>{label}</b>
                      <span style={{ color: 'var(--text)' }}>{val}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Transport Controls for Step / Pathway mode */}
              {(engineMode === 'physio' || engineMode === 'path') && (
                <div style={{ marginTop: '4px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsPlaying(false);
                        if (engineMode === 'physio') setStepIx((p) => Math.max(p - 1, 0));
                        else setPathIx((p) => Math.max(p - 1, 0));
                      }}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'var(--panel-2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <ChevronLeft size={14} /> Back
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      style={{
                        padding: '6px 14px',
                        borderRadius: '6px',
                        background: 'var(--accent)',
                        border: '1px solid var(--accent)',
                        color: '#ffffff',
                        fontSize: '12px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                      {isPlaying ? 'Pause' : 'Play'}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsPlaying(false);
                        if (engineMode === 'physio') setStepIx((p) => Math.min(p + 1, STEPS.length - 1));
                        else setPathIx((p) => Math.min(p + 1, PATH.length - 1));
                      }}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '6px',
                        background: 'var(--panel-2)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        fontSize: '12px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Next <ChevronRight size={14} />
                    </button>

                    <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--muted)', marginLeft: 'auto' }}>
                      {engineMode === 'physio'
                        ? `${stepIx + 1} / ${STEPS.length}`
                        : `${pathIx + 1} / ${PATH.length}`}
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div
                    style={{
                      height: '4px',
                      background: 'var(--panel-2)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      marginTop: '8px',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        background: 'var(--accent)',
                        width: `${
                          engineMode === 'physio'
                            ? ((stepIx + 1) / STEPS.length) * 100
                            : ((pathIx + 1) / PATH.length) * 100
                        }%`,
                        transition: 'width 0.3s ease',
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Quick Select Chips */}
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: 'var(--muted)',
                    marginBottom: '6px',
                  }}
                >
                  {engineMode === 'anatomy'
                    ? 'All structures:'
                    : engineMode === 'physio'
                    ? 'Jump to step:'
                    : 'Chain links (1-16):'}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {engineMode === 'anatomy' &&
                    ANATOMY_LIST.map((key) => {
                      const isSelected = selectedPart === key;
                      const label = PARTS[key]?.t.replace(/ \(.*\)/, '') || key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => {
                            setIsPlaying(false);
                            setSelectedPart(key);
                          }}
                          style={{
                            background: isSelected ? 'var(--accent)' : 'var(--panel-2)',
                            color: isSelected ? '#ffffff' : 'var(--text)',
                            border: '1px solid transparent',
                            fontSize: '11.5px',
                            fontWeight: isSelected ? '700' : '500',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            cursor: 'pointer',
                          }}
                        >
                          {label}
                        </button>
                      );
                    })}

                  {engineMode === 'physio' &&
                    STEPS.map((s, idx) => {
                      const isSelected = stepIx === idx;
                      return (
                        <button
                          key={s.id + idx}
                          type="button"
                          onClick={() => {
                            setIsPlaying(false);
                            setStepIx(idx);
                          }}
                          style={{
                            background: isSelected ? 'var(--accent)' : 'var(--panel-2)',
                            color: isSelected ? '#ffffff' : 'var(--text)',
                            border: '1px solid transparent',
                            fontSize: '11px',
                            fontWeight: isSelected ? '700' : '500',
                            padding: '4px 9px',
                            borderRadius: '999px',
                            cursor: 'pointer',
                          }}
                        >
                          <span style={{ opacity: 0.7, marginRight: '4px' }}>{idx + 1}.</span>
                          {s.t}
                        </button>
                      );
                    })}

                  {engineMode === 'path' &&
                    PATH.map((row, idx) => {
                      const isSelected = pathIx === idx;
                      return (
                        <button
                          key={row[0] + idx}
                          type="button"
                          onClick={() => {
                            setIsPlaying(false);
                            setPathIx(idx);
                          }}
                          style={{
                            background: isSelected ? 'var(--accent)' : 'var(--panel-2)',
                            color: isSelected ? '#ffffff' : 'var(--text)',
                            border: '1px solid transparent',
                            fontSize: '11px',
                            fontWeight: isSelected ? '700' : '500',
                            padding: '4px 9px',
                            borderRadius: '999px',
                            cursor: 'pointer',
                          }}
                        >
                          <span style={{ opacity: 0.7, marginRight: '4px' }}>{idx + 1}.</span>
                          {row[0]}
                        </button>
                      );
                    })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      )}

      {/* =========================================================================
         TAB 2: COCHLEAR TONOTOPY & FREQUENCY GRADIENT
         ========================================================================= */}
      {activeMainTab === 'tonotopy' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700' }}>
              Tonotopic Pitch Map: Base (Stiff / High Hz) to Apex (Compliant / Low Hz)
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
              Georg von Békésy discovered that the basilar membrane is not uniform: it is narrow &amp; stiff at the base and 5× wider &amp; floppy at the apex.
            </p>
          </div>

          {/* Interactive Frequency Selection Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px', marginBottom: '16px' }}>
            {FREQUENCIES.map((f) => {
              const isSelected = selectedFreq.hz === f.hz;
              return (
                <button
                  key={f.hz}
                  type="button"
                  onClick={() => setSelectedFreq(f)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                    background: isSelected ? 'var(--accent-soft)' : 'var(--panel)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: '700', fontSize: '13px', color: isSelected ? 'var(--accent)' : 'var(--text)' }}>
                    {f.label}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px' }}>
                    {f.region}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Uncoiled Basilar Membrane Interactive Model */}
          <div
            style={{
              padding: '20px',
              borderRadius: '14px',
              background: '#0a1e36',
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', fontSize: '12px' }}>
              <span style={{ color: '#38bdf8', fontWeight: '700' }}>Uncoiled Basilar Membrane (Length ~33–35 mm)</span>
              <span style={{ color: '#94a3b8' }}>
                Resonance: <strong style={{ color: '#ffffff' }}>{selectedFreq.hz} Hz</strong> ({selectedFreq.region})
              </span>
            </div>

            {/* Gradient Bar with Traveling Wave Peak */}
            <div
              style={{
                position: 'relative',
                height: '56px',
                borderRadius: '8px',
                background: 'linear-gradient(to right, #0284c7, #38bdf8, #10b981, #f59e0b, #ef4444)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 12px',
                fontWeight: '700',
                fontSize: '11px',
              }}
            >
              <div>
                BASE (Stiff &amp; Narrow: 0.1 mm)<br />
                <span style={{ fontSize: '10px', opacity: 0.85 }}>20,000 Hz</span>
              </div>

              {/* Indicator Peak Pin */}
              <div
                style={{
                  position: 'absolute',
                  left:
                    selectedFreq.hz === 16000 ? '12%' :
                    selectedFreq.hz === 4000 ? '34%' :
                    selectedFreq.hz === 1500 ? '55%' :
                    selectedFreq.hz === 500 ? '75%' : '92%',
                  top: '-10px',
                  transform: 'translateX(-50%)',
                  background: '#ffffff',
                  color: '#0f172a',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  fontWeight: '800',
                  fontSize: '11px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  whiteSpace: 'nowrap',
                  border: '2px solid #0284c7',
                }}
              >
                ▼ Traveling Wave Peak: {selectedFreq.hz} Hz
              </div>

              <div style={{ textAlign: 'right' }}>
                APEX / Helicotrema (Floppy &amp; Wide: 0.5 mm)<br />
                <span style={{ fontSize: '10px', opacity: 0.85 }}>20 Hz</span>
              </div>
            </div>
          </div>

          {/* Clinical Card for Selected Frequency */}
          <div
            style={{
              padding: '14px 16px',
              borderRadius: '12px',
              background: 'var(--panel)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '12px',
            }}
          >
            <Activity size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong style={{ fontSize: '13.5px', color: 'var(--text)' }}>
                Clinical Correlation: {selectedFreq.label}
              </strong>
              <p style={{ margin: '4px 0 0', fontSize: '12.5px', color: 'var(--muted)', lineHeight: 1.5 }}>
                {selectedFreq.clinical}. Physical properties: <strong>{selectedFreq.stiffness}</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         TAB 3: HAIR CELL MECHANOTRANSDUCTION & MET CHANNELS
         ========================================================================= */}
      {activeMainTab === 'haircell' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700' }}>
              Mechanotransduction: Stereocilia Tip-Links &amp; K+ Influx
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
              Hair cells are the biological transducers. Endolymph has a +80 mV endocochlear potential, driving rapid K+ influx without ATP breakdown during depolarization.
            </p>
          </div>

          {/* Interactive Shear Control Buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
            {[
              { id: 'neutral', label: 'Neutral Rest (~10% channels open)' },
              { id: 'depolarize', label: 'Bend toward Tallest Kinocilium (Depolarization ⚡)' },
              { id: 'hyperpolarize', label: 'Bend toward Shortest Cilia (Hyperpolarization 🛑)' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setShearDirection(btn.id)}
                style={{
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontSize: '12.5px',
                  fontWeight: '600',
                  border: shearDirection === btn.id ? '2px solid var(--accent)' : '1px solid var(--border)',
                  background: shearDirection === btn.id ? 'var(--accent-soft)' : 'var(--panel)',
                  color: shearDirection === btn.id ? 'var(--accent)' : 'var(--text)',
                  cursor: 'pointer',
                }}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Interactive Visual Graphic */}
          <div
            style={{
              padding: '20px',
              borderRadius: '14px',
              background: '#0a1e36',
              color: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '280px',
                height: '140px',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                gap: '12px',
                marginBottom: '10px',
              }}
            >
              {/* Tectorial Membrane on Top */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  width: '240px',
                  height: '16px',
                  borderRadius: '6px',
                  background: '#c084fc',
                  transform:
                    shearDirection === 'depolarize'
                      ? 'translateX(18px)'
                      : shearDirection === 'hyperpolarize'
                      ? 'translateX(-18px)'
                      : 'translateX(0)',
                  transition: 'transform 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  fontWeight: '700',
                  color: '#ffffff',
                }}
              >
                Tectorial Membrane (Gelatinous Roof)
              </div>

              {/* Stereocilia (Small, Mid, Tall) */}
              {[
                { h: 50, color: '#38bdf8' },
                { h: 70, color: '#38bdf8' },
                { h: 90, color: '#ffd47f' },
              ].map((cilia, i) => (
                <div
                  key={i}
                  style={{
                    width: '16px',
                    height: `${cilia.h}px`,
                    borderRadius: '8px 8px 0 0',
                    background: cilia.color,
                    transformOrigin: 'bottom center',
                    transform:
                      shearDirection === 'depolarize'
                        ? 'rotate(18deg)'
                        : shearDirection === 'hyperpolarize'
                        ? 'rotate(-18deg)'
                        : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* Status readouts */}
            <div
              style={{
                padding: '8px 18px',
                borderRadius: '8px',
                background:
                  shearDirection === 'depolarize' ? '#065f46' : shearDirection === 'hyperpolarize' ? '#991b1b' : '#1e293b',
                color: '#ffffff',
                fontSize: '12.5px',
                fontWeight: '700',
              }}
            >
              {shearDirection === 'depolarize' && 'MET Channels WIDE OPEN: Giant K+ and Ca2+ Influx → Glutamate Exocytosis to CN VIII'}
              {shearDirection === 'hyperpolarize' && 'MET Channels FORCED SHUT: 0 mV K+ Influx → Cell Hyperpolarizes → Nerve Firing Quieted'}
              {shearDirection === 'neutral' && 'Resting State: 10% Channels Open → Baseline Spontaneous Nerve Firing (90 spikes/sec)'}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         TAB 4: CLINICAL TUNING FORK SIMULATOR (Rinne & Weber Tests)
         ========================================================================= */}
      {activeMainTab === 'clinical' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ margin: '0 0 4px', fontSize: '16px', fontWeight: '700' }}>
              Bedside 512 Hz Tuning Fork Diagnostic Matrix (Rinne &amp; Weber)
            </h4>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)' }}>
              Select a clinical scenario below to see how physical Middle-Ear impedance barriers (Conductive) vs. Hair Cell/Nerve damage (Sensorineural) alter acoustic lateralization.
            </p>
          </div>

          {/* Case Selection Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '8px', marginBottom: '16px' }}>
            {CLINICAL_CASES.map((c) => {
              const isSelected = selectedCaseId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCaseId(c.id)}
                  style={{
                    padding: '12px 14px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid var(--accent)' : '1px solid var(--border)',
                    background: isSelected ? 'var(--accent-soft)' : 'var(--panel)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '13px', color: isSelected ? 'var(--accent)' : 'var(--text)' }}>
                    {c.title}
                  </strong>
                  <span style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', display: 'block' }}>
                    {c.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Comparison Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '16px' }}>
            {/* Rinne Card */}
            <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ fontSize: '13.5px', color: '#0284c7' }}>Rinne Test (Air vs. Bone Conduction)</strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Normal: AC &gt; BC (Positive)</span>
              </div>

              <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--panel-2)', marginBottom: '8px' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700' }}>Right Ear:</span>
                <strong
                  style={{
                    display: 'block',
                    fontSize: '13px',
                    color: currentCase.rightRinne.result.includes('Negative') ? '#dc2626' : '#16a34a',
                    margin: '2px 0',
                  }}
                >
                  {currentCase.rightRinne.result}
                </strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{currentCase.rightRinne.note}</span>
              </div>

              <div style={{ padding: '10px', borderRadius: '8px', background: 'var(--panel-2)' }}>
                <span style={{ fontSize: '11.5px', fontWeight: '700' }}>Left Ear:</span>
                <strong style={{ display: 'block', fontSize: '13px', color: '#16a34a', margin: '2px 0' }}>
                  {currentCase.leftRinne.result}
                </strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{currentCase.leftRinne.note}</span>
              </div>
            </div>

            {/* Weber Card */}
            <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--panel)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <strong style={{ fontSize: '13.5px', color: '#7c3aed' }}>Weber Test (Midline Vertex)</strong>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>512 Hz at Cranial Midline</span>
              </div>

              <div style={{ padding: '12px', borderRadius: '8px', background: '#f5f3ff', border: '1px solid #ddd6fe', marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#5b21b6' }}>Observed Lateralization:</span>
                <strong style={{ display: 'block', fontSize: '13.5px', color: '#6d28d9', margin: '3px 0' }}>
                  {currentCase.weber.lateralization}
                </strong>
                <span style={{ fontSize: '11.5px', color: '#4c1d95', lineHeight: 1.4 }}>
                  {currentCase.weber.note}
                </span>
              </div>

              <div style={{ fontSize: '11.5px', color: 'var(--muted)' }}>
                💡 <strong>Clinical Rules:</strong>
                <br />
                • Conductive loss lateralizes to the <em>affected</em> ear (blocked ambient noise amplifies bone resonance).
                <br />
                • Sensorineural loss lateralizes to the <em>normal</em> ear (damaged inner ear cannot detect bone waves).
              </div>
            </div>
          </div>

          {/* Diagnostic Conclusion */}
          <div style={{ padding: '14px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
              <CheckCircle2 size={16} color="#16a34a" />
              <strong style={{ fontSize: '13.5px', color: '#15803d' }}>Diagnostic Conclusion:</strong>
            </div>
            <p style={{ margin: 0, fontSize: '12.5px', color: '#166534', fontWeight: '600' }}>
              {currentCase.diagnosis}
            </p>
          </div>
        </div>
      )}

      {/* Footer Meta */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '20px',
          paddingTop: '14px',
          borderTop: '1px solid var(--border)',
          fontSize: '11.5px',
          color: 'var(--muted)',
        }}
      >
        <span>
          Auditory Chain: Outer (Pinna/Canal) → Middle (TM &amp; Ossicles ~20x gain) → Inner (Tonotopy) → Brainstem → Heschl’s Gyrus
        </span>
        <span>Built for medical &amp; pharmacology revision</span>
      </div>
    </div>
  );
}
