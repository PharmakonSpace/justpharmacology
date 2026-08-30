export const lessons = [
  {
    id: 'spikes-protocol-breaking-bad-news',
    categoryId: 'clinical-communication',
    topic: 'Breaking Bad News',
    title: 'The SPIKES Protocol: Structured Clinical Empathy',
    level: 'Beginner',
    time: 8,
    description: 'Learn how to deliver devastating diagnoses using the six-stage SPIKES protocol to manage cognitive load and emotional trauma.',
    videoUrl: 'https://www.youtube.com/watch?v=Qs1x9W6ubi0', // Added YouTube reference link
    objectives: [
      'Recognize clinical compassion as a sequential, evidence-based procedure',
      'Explain the six stages of the SPIKES protocol',
      'Understand how to manage autonomic panic and cognitive load in patients'
    ],
    sections: [
      {
        heading: 'The Architecture of Empathy',
        content: 'Delivering a devastating diagnosis is a high-stakes clinical procedure. Treating it purely as an innate bedside manner often results in acute psychological trauma for the patient. The SPIKES protocol provides a structured, evidence-based architecture to stabilize the human nervous system.'
      },
      {
        heading: 'The Six Stages of SPIKES',
        content: 'The protocol establishes a six-stage pathway: Setting (physical engineering and SOLER framework), Perception (assessing patient understanding), Invitation (asking how much detail they want), Knowledge (using the ask-tell loop and chunking data), Emotions (managing panic with the NERS model), and Strategy (co-authoring the path forward).'
      }
    ],
    keyPoints: [
      'Human emotion severely constrains cognitive bandwidth during a crisis',
      'The SOLER framework helps create an emotional safety container by removing physical barriers',
      'Data chunking and the ask-tell loop prevent cognitive overload and data dumping',
      'Emotion strictly dictates clinical pacing; you must deescalate trauma before advancing to treatment'
    ],
    rapid: [
      'SPIKES: Setting → Perception → Invitation → Knowledge → Emotions → Strategy',
      'Emotion dictates pacing; never advance to treatment before stabilizing panic'
    ],
    animation: 'spikes',
    quiz: [
      {
        question: 'What is the primary function of the SPIKES protocol during a difficult diagnosis?',
        options: [
          'To ensure all medical facts are delivered as quickly as possible',
          'To systematically manage the patient\'s cognitive load and autonomic panic',
          'To replace the need for written follow-up materials',
          'To shift full legal responsibility to the patient'
        ],
        answer: 1,
        explanation: 'The SPIKES protocol functions as an architecture for systemic empathy designed to stabilize a human nervous system experiencing acute trauma.'
      }
    ]
  }
];

export const topic = 'Breaking Bad News';
