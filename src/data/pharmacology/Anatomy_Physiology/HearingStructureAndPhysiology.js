// HearingStructureAndPhysiology.js

export const hearingStructureAndPhysiologyLesson = {
  id: 'hearing-structure-and-physiology',
  isNew: true,
  isLatest: true,
  badge: 'NEW LESSON',
  dateAdded: '2026-09-18',
  addedOrder: 13,
  categoryId: 'anatomy_physiology',
  topic: 'Anatomy & Physiology',
  title: 'Anatomy of Ear & Physiology of Hearing',
  subtitle: 'Tracing Sound from Air Vibrations to Mechanical Transduction and Auditory Perception',
  level: 'Beginner',
  time: '18–22 min',
  stepsTitle: 'Eight-Stage Auditory Transmission & Mechanotransduction Sequence',
  stepsIcon: '👂',

  description: `
    Hearing is a highly coordinated sequence of mechanical, fluid, cellular,
    and neural events. Sound waves are collected by the outer ear, transmitted
    through the tympanic membrane and ossicles, converted into fluid movement
    within the cochlea, and transformed by mechanoreceptor hair cells into
    electrical signals.

    This lesson follows the complete pathway of hearing from sound collection
    to auditory processing in the brain and introduces the major mechanisms
    involved in conductive and sensorineural hearing loss.
  `,

  video: {
    youtubeId: 'goLzSfNXpdM',
    title: 'Hearing: Structure & Physiology',
  },

  objectives: [
    'Trace the complete auditory pathway from airborne pressure oscillations to cortical auditory perception.',
    'Differentiate the anatomical boundaries and primary roles of the outer, middle, and inner ear.',
    'Describe the acoustic funneling and protective ceruminous apparatus of the external acoustic meatus.',
    'Explain how the tympanic membrane converts atmospheric sound waves into ossicular mechanical displacements.',
    'Analyze how the malleus, incus, and stapes achieve an approximate 20-fold pressure amplification to overcome acoustic impedance.',
    'Describe the role of the Eustachian (pharyngotympanic) tube in middle-ear pressure equilibrium.',
    'Explain the protective function and physiological limits of the acoustic reflex mediated by tensor tympani and stapedius.',
    'Contrast the fluid composition, electrical potentials, and anatomical compartments of perilymph versus endolymph.',
    'Detail the structural anatomy of the cochlea, including scala vestibuli, scala media (cochlear duct), and scala tympani.',
    'Examine the microanatomy of the organ of Corti and the mechanotransductive role of inner and outer hair cells.',
    'Explain how basilar membrane movement displaces stereocilia tip links to open mechanically gated ion channels.',
    'Describe the tonotopic organization of the basilar membrane from the stiff base to the compliant apex.',
    'Follow the ascending neural pathway from the spiral ganglion via CN VIII to the superior olivary complex, colliculus, and cortex.',
    'Explain how the brain utilizes Interaural Time Differences (ITD) and Interaural Level Differences (ILD) for horizontal sound localization.',
    'Distinguish the pathophysiological mechanisms, clinical etiologies, and diagnostic profiles of conductive versus sensorineural hearing loss.',
    'Interpret bedside tuning fork evaluations, specifically the Rinne and Weber diagnostic tests.'
  ],

  physiologySteps: [
    {
      step: 1,
      title: 'Catch the Sound Wave',
      description:
        'Understand how the auricle and external acoustic meatus collect, filter, and conduct airborne acoustic pressure waves toward the tympanic membrane.',
    },
    {
      step: 2,
      title: 'Convert Sound Into Mechanical Vibration',
      description:
        'Follow the acoustic vibration of the tympanic membrane and its mechanical transmission through the malleus, incus, and stapes.',
    },
    {
      step: 3,
      title: 'Amplify the Mechanical Signal',
      description:
        'Understand the mechanical lever advantage and surface-area ratio of the ossicular chain, delivering approximately 20-fold force amplification to overcome cochlear fluid impedance.',
    },
    {
      step: 4,
      title: 'Move the Cochlear Fluid',
      description:
        'Trace stapedial footplate piston movements at the oval window into travelling fluid pressure waves across scala vestibuli and scala tympani.',
    },
    {
      step: 5,
      title: 'Activate Hair Cells',
      description:
        'Understand how vertical displacement of the basilar membrane shears stereocilia against the tectorial membrane, tensing tip links and opening mechanically gated K+ channels.',
    },
    {
      step: 6,
      title: 'Encode Frequency (Tonotopy)',
      description:
        'Learn how physical gradients along the basilar membrane partition frequencies: stiff/narrow base for high frequencies, wide/flexible apex for low frequencies.',
    },
    {
      step: 7,
      title: 'Transmit the Neural Signal',
      description:
        'Follow auditory action potentials along primary bipolar sensory neurons through the cochlear branch of cranial nerve VIII into the brainstem.',
    },
    {
      step: 8,
      title: 'Decode Sound in the Brain',
      description:
        'Understand central auditory integration, binaural sound localization via ITD/ILD, conscious perception in Heschl’s gyrus, and patterns of clinical hearing loss.',
    },
  ],

  // Duplicate for generic step renderers
  hearingSteps: [
    {
      step: 1,
      title: 'Catch the Sound Wave',
      description:
        'Understand how the auricle and external acoustic meatus collect and conduct sound toward the tympanic membrane.',
    },
    {
      step: 2,
      title: 'Convert Sound Into Mechanical Vibration',
      description:
        'Follow vibration of the tympanic membrane and transmission through the malleus, incus, and stapes.',
    },
    {
      step: 3,
      title: 'Amplify the Mechanical Signal',
      description:
        'Understand the mechanical advantage of the middle-ear ossicles and the role of pressure equalization.',
    },
    {
      step: 4,
      title: 'Move the Cochlear Fluid',
      description:
        'Trace movement from the stapes and oval window into the fluid-filled cochlea.',
    },
    {
      step: 5,
      title: 'Activate Hair Cells',
      description:
        'Understand how movement of the basilar membrane bends hair-cell stereocilia and initiates mechanotransduction.',
    },
    {
      step: 6,
      title: 'Encode Frequency',
      description:
        'Learn how different regions of the basilar membrane respond preferentially to different sound frequencies.',
    },
    {
      step: 7,
      title: 'Transmit the Neural Signal',
      description:
        'Follow auditory information through the cochlear branch of cranial nerve VIII toward the brain.',
    },
    {
      step: 8,
      title: 'Decode Sound in the Brain',
      description:
        'Understand auditory perception, binaural sound localization, and major patterns of hearing loss.',
    },
  ],

  frameworks: [
    {
      id: 'HEARING-PATHWAY',
      name: 'Auditory Transmission Pathway',
      context: 'Sequential mechanical-to-neural acoustic conduction cascade',
      icon: '🎧',
      items: [
        {
          init: 'Outer',
          label: 'Auricle (Pinna) → External acoustic meatus funnels airborne waves',
        },
        {
          init: 'Middle',
          label: 'Tympanic membrane vibration → Ossicular chain ~20x amplification',
        },
        {
          init: 'Inner',
          label: 'Oval window displacement → Cochlear fluid wave → Hair cell shear',
        },
        {
          init: 'Neural',
          label: 'Spiral ganglion → Cochlear nerve (CN VIII) → Auditory cortex',
        },
      ],
    },

    {
      id: 'MECHANOTRANSDUCTION',
      name: 'Energy Transduction Cascade',
      context: 'Physical force conversion into high-fidelity neural spike trains',
      icon: '⚡',
      items: [
        {
          init: 'Acoustic',
          label: 'Air pressure variations funneled into ear canal',
        },
        {
          init: 'Mechanical',
          label: 'Tympanic membrane oscillation and ossicular piston levering',
        },
        {
          init: 'Hydraulic',
          label: 'Perilymph and endolymph fluid traveling waves along basilar membrane',
        },
        {
          init: 'Micro-Shear',
          label: 'Tectorial membrane shearing deflects hair-cell stereocilia',
        },
        {
          init: 'Electrical',
          label: 'MET channel opening → K+ influx → Glutamate exocytosis to CN VIII',
        },
      ],
    },

    {
      id: 'EAR-ZONES',
      name: 'Three Anatomical Ear Zones',
      context: 'Distinct structural compartments and their physiological roles',
      icon: '👂',
      items: [
        {
          init: 'Outer Ear',
          label: 'Acoustic funneling, protection by cerumen, and sound localization',
        },
        {
          init: 'Middle Ear',
          label: 'Impedance matching, 20x pressure gain, and acoustic reflex dampening',
        },
        {
          init: 'Inner Ear',
          label: 'Tonotopic mechanotransduction in cochlea and vestibular equilibrium',
        },
      ],
    },

    {
      id: 'FREQUENCY-MAP',
      name: 'Cochlear Tonotopic Frequency Gradient',
      context: 'Spatial mapping of acoustic pitch from cochlear base to apex',
      icon: '📊',
      items: [
        {
          init: 'High Pitch',
          label: 'Cochlear Base (narrow, stiff, taut basilar membrane: 16–20 kHz)',
        },
        {
          init: 'Mid Pitch',
          label: 'Mid-Cochlea (intermediate stiffness: 1,000–4,000 Hz speech range)',
        },
        {
          init: 'Low Pitch',
          label: 'Cochlear Apex / Helicotrema (wide, flexible, compliant: 20–500 Hz)',
        },
      ],
    },

    {
      id: 'HEARING-LOSS',
      name: 'Clinical Hearing Loss Classification',
      context: 'Differential diagnosis between mechanical obstruction and neural injury',
      icon: '🩺',
      items: [
        {
          init: 'Conductive',
          label: 'Mechanical barrier in outer/middle ear (Cerumen, Otitis Media, Otosclerosis); BC ≥ AC',
        },
        {
          init: 'Sensorineural',
          label: 'Irreversible pathology of hair cells or CN VIII (Presbycusis, Ototoxicity); AC > BC',
        },
      ],
    },
  ],

  sections: [
    {
      id: 'hearing-introduction',
      heading: 'How Does Hearing Begin?',
      content: `
Hearing begins with invisible pressure variations traveling through the air as sound waves.

These mechanical waves are collected by the ear and transformed through a sequence of mechanical, fluid, cellular, and neural events.

The overall pathway can be summarized as:

Sound wave
↓
Outer ear
↓
Tympanic membrane
↓
Ossicles
↓
Oval window
↓
Cochlear fluid movement
↓
Basilar membrane movement
↓
Hair-cell mechanotransduction
↓
Auditory nerve
↓
Brain
↓
Perception of sound
      `,
    },

    {
      id: 'three-ear-zones',
      heading: 'The Three Main Zones of the Ear',
      content: `
Structurally, the human ear is divided into three major regions:

1. Outer ear
2. Middle ear
3. Inner ear

The outer ear collects and conducts sound toward the tympanic membrane.

The middle ear contains the tympanic membrane and auditory ossicles, which transmit mechanical vibration toward the inner ear.

The inner ear contains the cochlea, which is responsible for hearing, as well as vestibular structures involved in balance.

Therefore, although the entire ear participates in sensory processing, the cochlea is the key structure for hearing.
      `,
    },

    {
      id: 'mechanoreceptors',
      heading: 'Mechanoreceptors: The Key to Hearing',
      content: `
Hearing depends on mechanoreceptors—sensory receptors that respond to mechanical forces.

This is different from photoreceptors in the eye, which respond to light.

In the auditory system, mechanical movement ultimately causes deflection of specialized sensory hair cells in the cochlea.

This process is called mechanotransduction:

Mechanical movement
↓
Hair-cell stimulation
↓
Electrical signaling

Therefore, the auditory system converts a physical mechanical stimulus into a neural electrical signal.
      `,
    },

    {
      id: 'outer-ear-catching-wave',
      heading: 'Catching the Wave: The Outer Ear',
      content: `
The visible part of the external ear is the auricle, also called the pinna.

The auricle helps collect sound waves and directs them toward the external acoustic meatus, commonly called the ear canal.

The external acoustic meatus is a short canal extending through the temporal bone toward the tympanic membrane.

Sound waves travel through this canal before reaching the eardrum.

The external acoustic canal contains ceruminous glands, which produce cerumen, commonly known as earwax.

Cerumen contributes to protection of the external auditory canal by trapping dust, repelling insects, and maintaining an acidic, antimicrobial environment.
      `,
    },

    {
      id: 'tympanic-membrane',
      heading: 'The Tympanic Membrane',
      content: `
At the end of the external acoustic meatus is the tympanic membrane, commonly called the eardrum.

When sound waves reach the tympanic membrane, pressure variations cause the membrane to vibrate.

These vibrations provide the mechanical input for the middle-ear ossicles.

The tympanic membrane therefore forms an important interface between the external and middle ear.
      `,
    },

    {
      id: 'auditory-ossicles',
      heading: 'The Auditory Ossicles',
      content: `
The middle ear contains three small bones called the auditory ossicles:

1. Malleus — hammer
2. Incus — anvil
3. Stapes — stirrup

The sequence is:

Tympanic membrane
↓
Malleus
↓
Incus
↓
Stapes
↓
Oval window

Vibration of the tympanic membrane moves the malleus. The malleus moves the incus, and the incus transfers the movement to the stapes.

The stapes then moves at the oval window of the inner ear.
      `,
    },

    {
      id: 'middle-ear-amplification',
      heading: 'The Middle Ear as a Mechanical Amplifier',
      content: `
The ossicles do more than simply connect the tympanic membrane to the inner ear.

Their arrangement provides a mechanical advantage that increases the pressure delivered to the oval window.

The source describes this as approximately a 20-fold amplification of force.

This mechanical advantage is important because the vibration is transferred from an air-filled environment into the fluid-filled inner ear.

The middle ear therefore helps overcome the mismatch between air and the much denser cochlear fluids (acoustic impedance matching).

Without this amplification, roughly 99.9% of sound energy would be reflected back off the fluid interface rather than entering the cochlea.
      `,
    },

    {
      id: 'eustachian-tube',
      heading: 'The Eustachian Tube',
      content: `
The Eustachian tube (pharyngotympanic tube) connects the middle ear with the nasopharynx.

Its important function is to help equalize air pressure across the tympanic membrane.

Changes in atmospheric pressure, such as during air travel or scuba diving, can temporarily create a pressure difference between the middle ear and the external environment.

Opening of the Eustachian tube helps restore pressure balance, allowing the tympanic membrane to vibrate normally.
      `,
    },

    {
      id: 'middle-ear-muscles',
      heading: 'Protection From Loud Sounds',
      content: `
Two small muscles are associated with the middle-ear ossicles:

• Tensor tympani (innervated by CN V3)
• Stapedius (innervated by CN VII)

In response to loud sounds, contraction of these muscles can reduce transmission of mechanical energy through the ossicular chain.

This acoustic reflex provides some protection against excessive sound levels.

However, it has a latency of 40–100 milliseconds and fatigues rapidly, so it does not protect against sudden impulse noises (such as gunshots) or sustained prolonged industrial noise.
      `,
    },

    {
      id: 'bony-labyrinth',
      heading: 'The Inner Ear and Bony Labyrinth',
      content: `
The inner ear is housed within the petrous portion of the temporal bone.

Its structures form an intricate system commonly referred to as the labyrinth, consisting of a bony outer shell and an internal membranous labyrinth.

The cochlea is the spiral-shaped part specialized for hearing.

Other inner-ear structures (semicircular canals, utricle, and saccule) participate in balance and vestibular equilibrium.

For understanding hearing, the cochlea is the central structure because it contains the sensory apparatus responsible for converting mechanical vibration into neural signals.
      `,
    },

    {
      id: 'cochlea',
      heading: 'The Cochlea: The Organ of Hearing',
      content: `
The cochlea is a spiral-shaped structure resembling a snail shell, making approximately 2.75 turns around a central bony pillar called the modiolus.

Internally, it is divided into three parallel fluid-filled compartments:
1. Scala vestibuli (superior, contains perilymph)
2. Scala media or cochlear duct (middle, contains endolymph)
3. Scala tympani (inferior, contains perilymph)

Movement of the stapes at the oval window generates pressure changes in cochlear fluids.

These fluid movements travel through the scala vestibuli, displace the vestibular and basilar membranes, and exit at the round window of the scala tympani.
      `,
    },

    {
      id: 'organ-of-corti',
      heading: 'The Organ of Corti',
      content: `
The organ of Corti (spiral organ) is the sensory organ of hearing.

It lies on the basilar membrane within the cochlear duct (scala media).

It contains specialized sensory hair cells whose apical stereocilia are deflected by movement of the cochlear structures against the overlying gelatinous tectorial membrane.

When the basilar membrane moves upward, the hair-cell stereocilia are displaced toward the tallest stereocilium (kinocilium axis).

This mechanical deflection pulls on protein bridges called tip links, opening mechanically gated K+ channels.

Because endolymph has an unusually high K+ concentration and high positive electrical potential (+80 mV), K+ rushes into the hair cells, causing depolarization, Ca2+ influx through voltage-gated channels, and release of glutamate at the afferent synapse with the spiral ganglion.
      `,
    },

    {
      id: 'basilar-membrane-frequency',
      heading: 'How the Cochlea Detects Different Frequencies',
      content: `
The basilar membrane is mechanically organized so that different regions respond preferentially to different sound frequencies.

The cochlear base is relatively stiff and narrow and responds preferentially to higher-frequency sounds (up to 20,000 Hz).

Toward the apex, the membrane becomes wider and more flexible, responding preferentially to lower-frequency sounds (down to 20 Hz).

Therefore:

High frequency
→ maximum displacement toward the cochlear base

Low frequency
→ maximum displacement toward the cochlear apex

This spatial organization is called tonotopic organization.

The brain uses this anatomical frequency map to represent the pitch of incoming sounds across the auditory spectrum.
      `,
    },

    {
      id: 'transduction',
      heading: 'Mechanical Transduction Into an Electrical Signal',
      content: `
The complete auditory sequence connects together as:

Sound wave
↓
Tympanic membrane vibration
↓
Ossicular movement
↓
Stapes movement at oval window
↓
Cochlear fluid movement
↓
Basilar membrane displacement
↓
Hair-cell stereocilia deflection
↓
Tip-link tension and K+ channel opening
↓
Depolarization and Ca2+ influx
↓
Glutamate release
↓
Action potentials in spiral ganglion fibers of the auditory nerve

This transformation from mechanical energy into neural signaling is the fundamental process of auditory mechanotransduction.
      `,
    },

    {
      id: 'auditory-nerve',
      heading: 'The Auditory Nerve',
      content: `
The electrical information generated by cochlear hair cells is transmitted through auditory nerve fibers.

The cochlear division of the vestibulocochlear nerve, cranial nerve VIII, carries auditory information toward the central nervous system.

The primary sensory neuron cell bodies reside in the spiral ganglion within the cochlea. Their central axons pass through the internal acoustic meatus into the brainstem to synapse in the cochlear nuclei.
      `,
    },

    {
      id: 'auditory-cortex',
      heading: 'The Brain Decodes the Signal',
      content: `
The electrical signals traveling through the auditory pathway are not themselves the subjective experience of music, speech, or other sounds.

Neural processing in the brain interprets these patterns.

From the cochlear nuclei, signals ascend through the superior olivary complex, lateral lemniscus, and inferior colliculus in the midbrain, before synapsing in the medial geniculate body (MGB) of the thalamus.

From the thalamus, thalamocortical acoustic radiations project to the primary auditory cortex (Brodmann areas 41 and 42, Heschl’s gyrus) located in the superior temporal lobe.

The brain extracts key acoustic properties:
• Frequency or pitch
• Intensity or loudness
• Temporal patterns and rhythm
• Spatial origin and binaural localization
• Complex semantic features such as phonemes, words, and musical harmony
      `,
    },

    {
      id: 'sound-localization',
      heading: 'How We Locate Sound',
      content: `
Because the two ears are separated by the head, a sound originating from one side reaches one ear slightly earlier and slightly louder than the other.

The nervous system compares information arriving from both ears in the superior olivary nuclei of the pons.

Two primary binaural cues govern sound localization:

1. Interaural Time Differences (ITD):
For low frequencies (< 1,500 Hz), the brain detects microsecond differences in the arrival time of the sound wave between the two ears.

2. Interaural Level Differences (ILD):
For high frequencies (> 3,000 Hz), the head acts as an acoustic shadow, causing the sound to be louder at the near ear and quieter at the far ear.

These differences allow the brain to compute the precise horizontal azimuth of sound sources in space.
      `,
    },

    {
      id: 'conductive-hearing-loss',
      heading: 'Conductive Hearing Loss',
      content: `
Conductive hearing loss results from impaired mechanical transmission of sound vibrations through the external or middle ear into the cochlea.

The inner ear (cochlea) and cranial nerve VIII are typically structurally intact; the mechanical energy simply cannot reach them efficiently.

Common etiologies include:
• Cerumen impaction: Physical blockage of the external acoustic meatus by dense earwax.
• Otitis media with effusion: Accumulation of fluid or purulent exudate in the middle ear space, dampening ossicular mobility.
• Tympanic membrane perforation: Trauma, blast injury, or infection tearing the eardrum.
• Otosclerosis: Abnormal bony remodeling immobilizing the stapedial footplate at the oval window.
• Cholesteatoma: An expanding destructive keratinizing squamous epithelial cyst within the middle ear.

Management depends on etiology and includes cerumen disimpaction, antibiotic therapy, tympanostomy tube placement, or surgical reconstruction (such as stapedectomy or tympanoplasty). Because the cochlea is undamaged, bone conduction bypasses the middle ear defect and remains intact.
      `,
    },

    {
      id: 'sensorineural-hearing-loss',
      heading: 'Sensorineural Hearing Loss and Auditory Pathology',
      content: `
Sensorineural hearing loss (SNHL) occurs when there is damage to the delicate sensory hair cells of the organ of Corti or to the vestibulocochlear nerve (cranial nerve VIII) and central pathways.

Key characteristics:
• Permanent cellular loss: In adult mammals, cochlear hair cells do not regenerate once destroyed.
• Common causes:
  - Presbycusis: Age-related progressive hearing loss that predominantly affects high frequencies first due to wear-and-tear on basal cochlear hair cells.
  - Noise-induced hearing loss (acoustic trauma): Prolonged industrial or recreational sound (> 85 dBA) shears and destroys stereocilia, classically producing a 4,000 Hz notch on audiometry.
  - Ototoxic drugs: Aminoglycoside antibiotics (e.g., gentamicin, amikacin), platinum chemotherapeutic agents (e.g., cisplatin), high-dose loop diuretics (e.g., furosemide), and salicylates.
  - Vestibular schwannoma (acoustic neuroma): A benign Schwann cell tumor of CN VIII causing unilateral sensorineural hearing loss and tinnitus.
  - Congenital infections: Cytomegalovirus (CMV), rubella, or toxoplasmosis.

Management includes hearing aids for residual functional hair cells, and cochlear implants that directly electrically stimulate spiral ganglion neurons when hair cells are completely absent.
      `,
    },

    {
      id: 'clinical-hearing-tests',
      heading: 'Bedside Diagnostic Tests: Rinne and Weber',
      content: `
Clinicians utilize a 512 Hz tuning fork at the bedside to rapidly distinguish between conductive and sensorineural hearing loss:

1. Rinne Test (Air Conduction vs. Bone Conduction):
• The vibrating fork is placed on the mastoid process (bone conduction, BC) until the patient no longer hears it, then immediately held near the ear canal (air conduction, AC).
• Normal result (Positive Rinne): AC > BC (sound is heard louder and longer via air because the ossicular chain provides 20-fold amplification).
• Conductive Hearing Loss (Negative Rinne): BC ≥ AC in the affected ear (bone conduction bypasses the mechanical middle-ear obstruction).
• Sensorineural Loss: AC > BC persists, but both AC and BC are diminished proportionally.

2. Weber Test (Midline Sound Lateralization):
• The vibrating fork is placed firmly on the vertex of the cranium or midline forehead.
• Normal: Sound is heard equally in both ears (no lateralization).
• Unilateral Conductive Loss: Sound lateralizes to the AFFECTED ear because ambient room noise is blocked in that ear, enhancing bone-conducted resonance.
• Unilateral Sensorineural Loss: Sound lateralizes to the UNAFFECTED (normal) ear because the damaged cochlea or nerve cannot perceive the bone vibrations.
      `,
    },
  ],

  tables: [
    {
      title: '🩺 Bedside Diagnostic Tuning Fork Matrix (512 Hz)',
      headers: ['Diagnostic Test', 'Normal Finding', 'Conductive Hearing Loss', 'Sensorineural Hearing Loss', 'Clinical Pearl'],
      rows: [
        [
          'Rinne Test (Air vs. Bone Conduction)',
          'Positive: AC > BC (Sound heard twice as long via air)',
          'Negative: BC ≥ AC in affected ear',
          'Positive (Preserved ratio): AC > BC, but both reduced',
          'Mastoid placement tests bone conduction; ear canal opening tests air amplification.'
        ],
        [
          'Weber Test (Midline Vertex Lateralization)',
          'Sound heard equally in midline (No lateralization)',
          'Lateralizes to the AFFECTED ear',
          'Lateralizes to the NORMAL (Unaffected) ear',
          'Conductive blocks ambient noise; sensorineural cannot transduce bone vibrations.'
        ],
        [
          'Schwabach Test (Patient vs. Examiner BC)',
          'Bone conduction equal to examiner',
          'Prolonged bone conduction in affected ear',
          'Shortened bone conduction in affected ear',
          'Relies on normal hearing threshold of clinician as baseline control.'
        ]
      ]
    },
    {
      title: '⚙️ Middle Ear Acoustic Amplification & Impedance Matching',
      headers: ['Amplification Mechanism', 'Physical Principle', 'Pressure Gain Factor', 'Physiological Significance'],
      rows: [
        [
          'Areal Ratio (Eardrum : Stapes)',
          'Force concentrated from large TM (55 mm²) to small stapes footplate (3.2 mm²)',
          '~17:1 Gain',
          'Overcomes high hydraulic impedance of cochlear perilymph fluid.'
        ],
        [
          'Ossicular Lever Action',
          'Malleus arm is 1.3× longer than incus long process (Class 1 lever)',
          '~1.3:1 Gain',
          'Converts larger low-force displacement to smaller high-force displacement.'
        ],
        [
          'Catenary Curvature of TM',
          'Conical, curved membrane buckling increases mechanical force at umbo',
          '~1.2:1 Gain',
          'Additional passive physical advantage from membrane geometry.'
        ],
        [
          'Total System Gain',
          'Product of Areal Ratio × Lever Advantage (17 × 1.3)',
          '~20- to 22-Fold Gain (+27 to +30 dB)',
          'Prevents 99.9% reflection of airborne acoustic energy at air-fluid boundary.'
        ]
      ]
    },
    {
      title: '🌊 Cochlear Fluid & Microenvironment Comparison',
      headers: ['Fluid Compartment', 'Anatomical Location', 'Electrolyte Profile', 'Electrical Potential', 'Function in Transduction'],
      rows: [
        [
          'Perilymph',
          'Scala Vestibuli & Scala Tympani',
          'High Na+ (140 mM), Low K+ (5 mM) [ECF-like]',
          '0 mV (Reference)',
          'Conducts pressure waves from oval window to round window.'
        ],
        [
          'Endolymph',
          'Scala Media (Cochlear Duct)',
          'High K+ (150 mM), Low Na+ (2 mM) [ICF-like]',
          '+80 mV Endocochlear Potential',
          'Secreted by stria vascularis; drives giant 140 mV electrical gradient across hair cells.'
        ]
      ]
    }
  ],

  animation: 'hearing-structure-and-physiology',

  keyPoints: [
    'Hearing begins as atmospheric pressure variations that are funneled by the auricle into the external acoustic meatus.',
    'Cerumen produced by ceruminous glands provides mechanical, moisture-repelling, and antimicrobial protection for the canal.',
    'The tympanic membrane transduces airborne acoustic energy into physical mechanical oscillations.',
    'The middle ear houses three ossicles in series: malleus (hammer), incus (anvil), and stapes (stirrup).',
    'The ossicular chain achieves approximately a 20-fold force amplification through lever action and the surface area difference between eardrum and oval window.',
    'This amplification overcomes acoustic impedance mismatch between air and dense cochlear perilymph.',
    'The Eustachian (pharyngotympanic) tube balances middle ear pressure with atmospheric pressure via the nasopharynx.',
    'The tensor tympani (CN V3) and stapedius (CN VII) muscles mediate the protective acoustic reflex to dampen loud sounds.',
    'The inner ear contains the cochlea for hearing and the semicircular canals, utricle, and saccule for balance.',
    'The cochlea is partitioned into three fluid channels: scala vestibuli, scala media (cochlear duct), and scala tympani.',
    'Scala vestibuli and scala tympani contain perilymph (high Na+, low K+), while scala media contains endolymph (high K+, +80 mV potential).',
    'The organ of Corti sits atop the basilar membrane and contains inner and outer hair cells.',
    'Inner hair cells are primary sensory transducers; outer hair cells act as mechanical electromotile amplifiers.',
    'Basilar membrane displacement shears stereocilia against the tectorial membrane, stretching tip links.',
    'Opening of mechanically gated K+ channels allows potassium influx from endolymph, depolarizing the hair cell.',
    'Tonotopic organization maps frequency: the narrow, stiff base detects high frequencies; the wide, flexible apex detects low frequencies.',
    'Auditory nerve fibers (cranial nerve VIII) carry action potentials from spiral ganglion cells to the brainstem cochlear nuclei.',
    'Ascending auditory pathways include superior olivary complex, lateral lemniscus, inferior colliculus, and medial geniculate nucleus.',
    'Sound is consciously perceived in the primary auditory cortex (Heschl’s gyrus) in the superior temporal lobe.',
    'Binaural sound localization relies on Interaural Time Differences (low frequencies) and Interaural Level Differences (high frequencies).',
    'Conductive hearing loss involves outer or middle ear mechanical impairment (e.g., cerumen, otitis media, otosclerosis).',
    'Sensorineural hearing loss involves damage to cochlear hair cells, CN VIII, or auditory pathways (e.g., presbycusis, noise trauma, ototoxicity).',
    'In Rinne testing, normal is AC > BC; in conductive loss, BC ≥ AC (negative Rinne).',
    'In Weber testing, conductive loss lateralizes to the affected ear, whereas sensorineural loss lateralizes to the normal ear.'
  ],

  rapid: [
    'Pinna (Auricle) = External cartilaginous structure that collects and funnels sound waves into external acoustic meatus.',
    'Tympanic Membrane = Thin semitransparent fibrous membrane vibrating in response to sound pressure waves.',
    'Ossicles (Malleus, Incus, Stapes) = Three middle-ear bones bridging vibrations from eardrum to oval window.',
    '20-Fold Amplification = Area ratio (TM 55 mm² : Stapes 3.2 mm² = 17:1) + Lever advantage (1.3:1) ≈ 20x pressure gain.',
    'Acoustic Impedance Matching = Middle ear converts low-resistance airborne waves into high-resistance perilymph fluid motion.',
    'Eustachian Tube = Equalizes middle-ear pneumatic pressure with nasopharynx; collapsed at rest, opens on swallowing/yawning.',
    'Acoustic Reflex = Tensor tympani (CN V3) and stapedius (CN VII) contract to stiffen ossicles and protect cochlea from loud sound.',
    'Scala Media (Cochlear Duct) = Middle chamber filled with high-potassium (+80 mV) endolymph, housing organ of Corti.',
    'Perilymph vs. Endolymph = Perilymph is high Na+ (0 mV, in tympani/vestibuli); Endolymph is high K+ (+80 mV endocochlear potential, in media).',
    'Organ of Corti = Epithelial sensory receptor on basilar membrane transducing mechanical fluid shear into nerve impulses.',
    'Inner vs. Outer Hair Cells = IHCs transmit 95% of afferent auditory signals (CN VIII); OHCs contract via prestin to amplify soft sounds.',
    'Tip Links = Cadherin/protocadherin filaments connecting stereocilia tips that pull open MET cation channels upon deflection.',
    'Potassium Depolarization = Rare physiological state where K+ influx from endolymph drives hair cell depolarization.',
    'Tonotopic Organization = Basilar membrane gradient: high frequencies at stiff, narrow base; low frequencies at compliant, wide apex.',
    'Superior Olivary Complex = Pons auditory relay: MSO computes time differences (ITD); LSO computes loudness differences (ILD).',
    'Heschl’s Gyrus (Brodmann 41/42) = Primary auditory cortex in superior temporal lobe decoding conscious pitch and sound patterns.',
    'Conductive Hearing Loss = Mechanical impairment of sound conduction in outer or middle ear; bone conduction remains intact.',
    'Sensorineural Hearing Loss = Pathology of cochlear hair cells, spiral ganglion, or vestibulocochlear nerve (CN VIII).',
    'Presbycusis = Progressive bilateral age-related sensorineural loss starting at the high-frequency cochlear base.',
    'Rinne Test (512 Hz) = Normal/Sensorineural is positive (AC > BC); Conductive loss is negative (BC ≥ AC).',
    'Weber Test (512 Hz) = Conductive loss lateralizes to affected ear; Sensorineural loss lateralizes to unaffected (normal) ear.'
  ],

  quiz: [
    {
      question: 'Which sequence correctly traces the mechanical transmission of sound through the middle ear ossicles?',
      options: [
        'Tympanic membrane → Incus → Malleus → Stapes → Oval window',
        'Tympanic membrane → Malleus → Incus → Stapes → Oval window',
        'Tympanic membrane → Stapes → Incus → Malleus → Round window',
        'Tympanic membrane → Malleus → Stapes → Incus → Oval window',
      ],
      answer: 1,
      explanation:
        'Acoustic vibrations pass sequentially from the tympanic membrane to the malleus (hammer), to the incus (anvil), and to the stapes (stirrup), which acts upon the oval window.',
    },
    {
      question: 'Why is the ~20-fold pressure amplification produced by the middle ear ossicles physiologically necessary?',
      options: [
        'To speed up the nerve conduction velocity of cranial nerve VIII',
        'To overcome the acoustic impedance mismatch between air and the dense cochlear fluid',
        'To prevent the Eustachian tube from collapsing during swallowing',
        'To hyperpolarize inner hair cells during intense sound exposure',
      ],
      answer: 1,
      explanation:
        'Cochlear fluid has much higher acoustic impedance than air. The middle ear’s lever action and surface area ratio amplify force to prevent 99.9% of sound energy from bouncing off the fluid boundary.',
    },
    {
      question: 'Which anatomical structure directly connects the middle ear cavity to the nasopharynx to equalize air pressure?',
      options: [
        'External acoustic meatus',
        'Eustachian (pharyngotympanic) tube',
        'Internal acoustic meatus',
        'Cochlear aqueduct',
      ],
      answer: 1,
      explanation:
        'The Eustachian tube connects the middle ear to the nasopharynx, opening during swallowing and yawning to equalize atmospheric pressure across the eardrum.',
    },
    {
      question: 'The stapedius muscle contracts during the acoustic reflex to protect the inner ear. Which cranial nerve innervates this muscle?',
      options: [
        'Cranial nerve V (Trigeminal nerve)',
        'Cranial nerve VII (Facial nerve)',
        'Cranial nerve VIII (Vestibulocochlear nerve)',
        'Cranial nerve IX (Glossopharyngeal nerve)',
      ],
      answer: 1,
      explanation:
        'The stapedius muscle is innervated by the facial nerve (CN VII). The tensor tympani is innervated by the mandibular division of the trigeminal nerve (CN V3).',
    },
    {
      question: 'Which fluid fills the scala media (cochlear duct) and has an unusually high concentration of potassium ions (+80 mV potential)?',
      options: [
        'Perilymph',
        'Endolymph',
        'Cerebrospinal fluid',
        'Aqueous humor',
      ],
      answer: 1,
      explanation:
        'Endolymph fills the scala media and is secreted by the stria vascularis; it is unique among extracellular fluids in having high K+ and low Na+, generating an endocochlear potential of +80 mV.',
    },
    {
      question: 'How are high-frequency sound waves (e.g., 15,000–20,000 Hz) encoded along the basilar membrane?',
      options: [
        'Maximum displacement near the narrow, stiff base of the cochlea',
        'Maximum displacement near the wide, flexible apex (helicotrema) of the cochlea',
        'Uniform displacement along the entire basilar membrane simultaneously',
        'Direct chemical stimulation of the semicircular canals',
      ],
      answer: 0,
      explanation:
        'Due to tonotopic mechanical properties, high frequencies create maximal displacement at the stiff, narrow base near the oval window, while low frequencies travel to the wide, flexible apex.',
    },
    {
      question: 'In hair-cell mechanotransduction, what mechanical event directly causes the opening of cation channels on stereocilia?',
      options: [
        'ATP binding to purinergic P2X receptors',
        'Tension on protein tip links when stereocilia are deflected toward the tallest stereocilium',
        'Relaxation of tectorial membrane collagen fibers',
        'Depolarization by sodium influx from perilymph',
      ],
      answer: 1,
      explanation:
        'Deflection of stereocilia toward the tallest stereocilium exerts tension on tip links connecting adjacent stereocilia tips, pulling open mechanically gated K+ channels.',
    },
    {
      question: 'Unlike most neurons where sodium drives depolarization, hair cells depolarize when which ion enters through apical mechanosensitive channels?',
      options: [
        'Sodium (Na+)',
        'Potassium (K+)',
        'Chloride (Cl-)',
        'Magnesium (Mg2+)',
      ],
      answer: 1,
      explanation:
        'Because endolymph has an extraordinarily high K+ concentration and positive endocochlear potential, K+ rushes down its electrochemical gradient into the hair cell, triggering depolarization.',
    },
    {
      question: 'Where are the cell bodies of the primary sensory bipolar neurons that innervate cochlear hair cells located?',
      options: [
        'Otic ganglion',
        'Spiral ganglion',
        'Geniculate ganglion',
        'Superior olivary complex',
      ],
      answer: 1,
      explanation:
        'The primary sensory neurons for hearing have their cell bodies in the spiral ganglion within the modiolus of the cochlea.',
    },
    {
      question: 'Which brainstem structure is the first station in the ascending auditory pathway to receive binaural input and compute sound localization?',
      options: [
        'Cochlear nucleus',
        'Superior olivary complex',
        'Medial geniculate nucleus',
        'Lateral geniculate nucleus',
      ],
      answer: 1,
      explanation:
        'The superior olivary complex in the pons is the first auditory center to receive binaural input, calculating interaural time differences (ITD) and level differences (ILD) to pinpoint sound origin.',
    },
    {
      question: 'In which cerebral lobe and cortical gyrus is the primary auditory cortex (Brodmann areas 41 and 42) located?',
      options: [
        'Frontal lobe, precentral gyrus',
        'Parietal lobe, postcentral gyrus',
        'Temporal lobe, superior temporal gyrus (Heschl’s gyrus)',
        'Occipital lobe, calcarine sulcus',
      ],
      answer: 2,
      explanation:
        'The primary auditory cortex is located in Heschl’s gyrus (transverse temporal gyrus) within the superior temporal lobe.',
    },
    {
      question: 'A 68-year-old patient presents with progressive, bilateral difficulty hearing high-pitched voices and understanding speech in crowded rooms. What is the most likely diagnosis?',
      options: [
        'Otosclerosis',
        'Presbycusis',
        'Acoustic neuroma',
        'Cerumen impaction',
      ],
      answer: 1,
      explanation:
        'Presbycusis is age-related sensorineural hearing loss resulting from degeneration of hair cells at the basal turn of the cochlea, causing bilateral high-frequency hearing deficits.',
    },
    {
      question: 'A 24-year-old swimmer presents with right-sided ear fullness and hearing loss. Otoscopy reveals complete canal occlusion with dark brown cerumen. What type of hearing loss does this represent?',
      options: [
        'Sensorineural hearing loss',
        'Conductive hearing loss',
        'Central auditory processing disorder',
        'Retrocochlear hearing loss',
      ],
      answer: 1,
      explanation:
        'Cerumen impaction prevents sound waves from reaching the tympanic membrane mechanically; because the cochlea is healthy, this is classic conductive hearing loss.',
    },
    {
      question: 'During a Rinne test on the right ear, bone conduction is heard louder and longer than air conduction (BC > AC, negative Rinne). What does this indicate?',
      options: [
        'Normal right ear hearing',
        'Right sensorineural hearing loss',
        'Right conductive hearing loss',
        'Left conductive hearing loss',
      ],
      answer: 2,
      explanation:
        'A negative Rinne test (BC ≥ AC) demonstrates conductive hearing loss in the tested ear, because bone conduction bypasses the defective middle-ear mechanism.',
    },
    {
      question: 'In a patient with unilateral right-sided conductive hearing loss, what is the expected result on the Weber tuning fork test?',
      options: [
        'Sound is heard equally in both ears',
        'Sound lateralizes to the right (affected) ear',
        'Sound lateralizes to the left (unaffected) ear',
        'Sound cannot be heard in either ear',
      ],
      answer: 1,
      explanation:
        'In unilateral conductive hearing loss, the Weber test lateralizes to the AFFECTED ear because the conductive barrier blocks ambient background room noise, making bone-conducted sound seem louder.',
    },
    {
      question: 'In a patient with unilateral left-sided sensorineural hearing loss from acoustic neuroma, what is the expected result on the Weber test?',
      options: [
        'Sound lateralizes to the left ear',
        'Sound lateralizes to the right (unaffected) ear',
        'Sound is heard equally in both ears',
        'Negative Rinne bilaterally',
      ],
      answer: 1,
      explanation:
        'In unilateral sensorineural hearing loss, the Weber test lateralizes to the UNAFFECTED (normal, right) ear because the damaged left sensory/neural apparatus cannot perceive the bone vibrations.',
    },
    {
      question: 'Which of the following medications is well recognized for causing ototoxic sensorineural hearing loss and tinnitus?',
      options: [
        'Amoxicillin',
        'Gentamicin (Aminoglycoside)',
        'Acetaminophen',
        'Metoprolol',
      ],
      answer: 1,
      explanation:
        'Aminoglycoside antibiotics like gentamicin are notoriously ototoxic, directly damaging cochlear outer hair cells and vestibular hair cells.',
    },
    {
      question: 'What is the functional role of outer hair cells in the organ of Corti?',
      options: [
        'Transmit 95% of afferent auditory nerve impulses to the brainstem',
        'Undergo rapid electromotility (contracting and elongating via prestin) to mechanically amplify soft sounds',
        'Produce cerumen to protect the basilar membrane',
        'Synthesize perilymph for scala vestibuli',
      ],
      answer: 1,
      explanation:
        'Outer hair cells express the motor protein prestin and undergo voltage-dependent length changes (electromotility), acting as the "cochlear amplifier" to sharpen frequency resolution and amplify quiet sounds.',
    },
    {
      question: 'Which mechanism explains how the human brain determines the horizontal location of a low-frequency sound (< 1,500 Hz)?',
      options: [
        'Interaural Level Difference (ILD) due to head shadow',
        'Interaural Time Difference (ITD) between sound wave arrival at the two ears',
        'Pupillary constriction latency',
        'Vitreous humor oscillation frequency',
      ],
      answer: 1,
      explanation:
        'Low-frequency sounds bend around the head without casting a significant acoustic shadow; therefore, the brain relies on interaural time differences (ITD) in the microsecond range to localize the sound source.',
    },
    {
      question: 'What happens to excess acoustic fluid pressure waves after they traverse the scala vestibuli and scala tympani?',
      options: [
        'They are absorbed by the malleus bone marrow',
        'They bulge outwards into the air-filled middle ear at the round window (secondary tympanic membrane)',
        'They exit through the external acoustic meatus',
        'They enter the internal carotid artery',
      ],
      answer: 1,
      explanation:
        'Because fluid is incompressible within the rigid bony labyrinth, inward movement of the stapes at the oval window is accommodated by outward bulging of the flexible round window membrane at the base of the scala tympani.',
    },
  ],
};

export const lessons = [hearingStructureAndPhysiologyLesson];

export const topic = {
  id: 'anatomy_physiology',
  title: 'Anatomy & Physiology',
};

export default hearingStructureAndPhysiologyLesson;
