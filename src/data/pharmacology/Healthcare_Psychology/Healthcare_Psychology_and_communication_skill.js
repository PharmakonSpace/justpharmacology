export const lessons = [
  {
    id: 'healthcare_psychology',
    categoryId: 'healthcare_psychology',
    topic: 'Breaking Bad News',
    title: 'The SPIKES Protocol: Structured Clinical Empathy',
    level: 'Beginner',
    time: 8,
    description:
      'Learn how clinicians deliver devastating diagnoses using the six-stage SPIKES protocol — a structured, evidence-based method for managing a patient\'s cognitive load and emotional shock.',
    videoUrl: 'https://www.youtube.com/watch?v=Qs1x9W6ubi0',
    objectives: [
      'Recognize clinical compassion as a sequential, evidence-based procedure rather than an innate trait',
      'Explain each of the six stages of the SPIKES protocol and what it accomplishes',
      'Understand how emotion constrains cognitive bandwidth, and how clinicians manage autonomic panic and information overload'
    ],
    sections: [
      {
        heading: 'The Architecture of Empathy',
        content:
          'Delivering devastating news — a malignancy, a recurrence, a treatment failure — is one of the highest-stakes moments in medicine. Medicine has long treated this as an art form, assuming good communication comes down to an untrainable trait: "bedside manner." In practice, clinicians who rely purely on instinct and recite raw data often cause real psychological harm. Developed by oncologists Walter Baile and Robert Buckman, the SPIKES protocol reframes compassion as a precise, sequential, evidence-based procedure — an architecture designed to stabilize a frightened nervous system rather than simply transmit facts.'
      },
      {
        heading: 'Why Structure Matters: The Cognitive Bottleneck',
        content:
          'Fear sharply narrows working memory and the capacity to process new information. A patient who feels frightened cannot absorb medical detail, no matter how clearly it is explained. This means a clinician must manage the patient\'s emotional state and cognitive load *before* attempting to convey a treatment strategy — trying to do both at once is what causes the message to be lost.'
      },
      {
        heading: 'The Six Stages of SPIKES',
        content:
          'S — Setting: arranging the physical and relational environment before any news is shared. P — Perception: finding out what the patient already believes or understands. I — Invitation: asking how much detail the patient wants. K — Knowledge: delivering the information itself, in small, plain-language pieces. E — Emotions: naming and responding to the patient\'s reaction. S — Strategy: closing with a concrete, collaborative plan for what happens next.'
      },
      {
        heading: 'Setting: Removing the Barrier',
        content:
          'The traditional setup — a clinician speaking downward across a desk to a seated patient — reinforces hierarchy and distance. SPIKES calls for physically restructuring the space into a collaborative, lateral arrangement. This is formalized in the SOLER framework: sit Squarely facing the patient, adopt an Open posture, Lean in slightly, make appropriate Eye contact, and Relax. Before a single medical term is spoken, this positioning builds the emotional safety needed for what follows.'
      },
      {
        heading: 'Perception and Invitation: Calibrating Before Disclosing',
        content:
          'Opening with test results risks colliding head-on with what the patient already believes. In the Perception phase, the clinician asks what the patient understands so far — surfacing gaps between expectation and reality (a patient may believe a past surgery was curative, for example). In the Invitation phase, the clinician asks directly how much detail the patient wants: some want full biological detail, others only the next practical step. Together, these two steps prevent unwanted "data dumping" and put the pace of disclosure in the patient\'s hands.'
      },
      {
        heading: 'Knowledge: Delivering the News',
        content:
          'Disclosure begins with a brief warning shot — "I\'m afraid I have some difficult news" — to prime the patient before the impact lands. Faced with a distressed patient, inexperienced clinicians often feel a strong urge to fill silence with rapid technical explanation; this usually means the patient absorbs nothing. Instead, SPIKES uses an ask-tell-ask loop: deliver information in small, plain-language chunks, then pause to check understanding before continuing. This chunking respects the brain\'s limited capacity to take in threatening information.'
      },
      {
        heading: 'Emotions: Stabilizing Before Advancing',
        content:
          'Even with careful pacing, the moment a diagnosis lands, many patients enter a sympathetic nervous system response — acute distress that temporarily blocks further processing. Anything discussed while a patient is in this state is unlikely to be remembered. To respond, clinicians use the NURSE model: Naming the emotion, expressing Understanding, Respecting how the patient has coped before, exploring or Supporting them, and Exploring what the emotion means to them. Advancing to strategy before this stabilization occurs generally fails.'
      },
      {
        heading: 'Strategy: Restoring a Sense of Agency',
        content:
          'Once the patient is emotionally steadier, the clinician shifts to co-authoring next steps: summarizing the path forward, providing written materials (since much of what is said in this state will be forgotten), and agreeing on concrete next actions. A bad-news conversation should never end without a clear follow-up plan — this is what turns helpless uncertainty into a structured sense of control.'
      },
      {
        heading: 'Why It Matters',
        content:
          'The older, paternalistic model treats patients as passive recipients of data. SPIKES treats them as complex, vulnerable systems that need structure, not just information, to stay engaged. Used well, it helps clinicians navigate the hardest conversations in medicine while building trust rather than trauma.'
      }
    ],
    keyPoints: [
      'Fear sharply reduces a patient\'s capacity to process new information — emotional state must be managed before facts can land',
      'The SOLER framework (Squarely face, Open posture, Lean in, Eye contact, Relax) builds physical and emotional safety before disclosure',
      'Perception and Invitation calibrate what to say and how much, preventing unwanted data dumping',
      'The ask-tell-ask loop delivers information in small, checked chunks rather than one dense explanation',
      'The NURSE model (Naming, Understanding, Respecting, Supporting, Exploring) helps de-escalate emotional shock',
      'Emotion dictates pacing: a clinician must stabilize distress before moving to strategy and next steps',
      'Every bad-news conversation should end with a clear, written, collaborative follow-up plan'
    ],
    rapid: [
      'SPIKES: Setting → Perception → Invitation → Knowledge → Emotions → Strategy',
      'SOLER sets up the room; NURSE handles the emotional reaction',
      'Never advance to strategy before the patient\'s distress is stabilized'
    ],
    animation: 'spikes',
    quiz: [
      {
        question: 'What is the primary function of the SPIKES protocol during a difficult diagnosis?',
        options: [
          'To ensure all medical facts are delivered as quickly as possible',
          'To systematically manage the patient\'s cognitive load and emotional state before delivering a strategy',
          'To replace the need for written follow-up materials',
          'To shift full legal responsibility onto the patient'
        ],
        answer: 1,
        explanation:
          'SPIKES is an architecture for systemic empathy: it manages fear and cognitive load first, because a frightened patient cannot absorb medical detail regardless of how clearly it\'s explained.'
      },
      {
        question: 'What does the SOLER framework help a clinician do?',
        options: [
          'Decide how much medical detail to share',
          'Structure the physical setting to reduce hierarchy and build safety',
          'Summarize the treatment plan at the end of the conversation',
          'Name and validate the patient\'s emotional reaction'
        ],
        answer: 1,
        explanation:
          'SOLER (sit Squarely, Open posture, Lean in, Eye contact, Relax) is used in the Setting stage to physically restructure the encounter into a collaborative, non-hierarchical arrangement.'
      },
      {
        question: 'Why does SPIKES use an ask-tell-ask loop during the Knowledge stage?',
        options: [
          'To make the conversation shorter',
          'To avoid giving the patient any written materials',
          'To deliver information in small, plain-language pieces and check understanding along the way',
          'To determine the patient\'s legal next of kin'
        ],
        answer: 2,
        explanation:
          'Delivering dense information all at once overwhelms a frightened patient. Chunking the news and checking comprehension between pieces respects the brain\'s limited capacity to absorb threatening information.'
      },
      {
        question: 'What does the NURSE model address?',
        options: [
          'Physical positioning in the room',
          'How much technical detail the patient wants',
          'The patient\'s emotional reaction after the news lands',
          'Insurance and billing logistics'
        ],
        answer: 2,
        explanation:
          'NURSE (Naming, Understanding, Respecting, Supporting, Exploring) is used in the Emotions stage to de-escalate acute distress before moving on to Strategy.'
      }
    ]
  }
];

export const topic = 'Breaking Bad News';
