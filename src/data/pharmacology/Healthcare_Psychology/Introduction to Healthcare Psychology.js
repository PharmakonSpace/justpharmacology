// BiopsychosocialModel.js

export const biopsychosocialModelLesson = {
  id: 'introduction-to-healthcare-psychology',
  isNew: true,
  isLatest: false,
  badge: 'NEW',
  dateAdded: '2026-08-31T00:00:00',
  addedOrder: 3,
  categoryId: 'healthcare_psychology',
  topic: 'Introduction to Healthcare Psychology',
  title: 'Introduction to Healthcare Psychology',
  subtitle: 'The Biopsychosocial Model & Behavioral Science in Clinical Care',
  level: 'Beginner',
  time: 5,
  description:
    'An evidence-based overview of the biopsychosocial framework and core subfields of psychology—health, behavioral, clinical, and developmental—illustrating how non-biological factors directly determine medical outcomes and patient adherence.',
  video: {
    youtubeId: 'KRKvPxiVTmw', // Add YouTube video ID if available
    title: 'Introduction to Healthcare Psychology'
  },
  objectives: [
    'Define the Biopsychosocial Model and explain why physiological interventions alone often fail without behavioral integration',
    'Understand how health psychology links psychological stress triggers to physiological pathways such as cortisol release and hypertension',
    'Apply behavioral psychology techniques (conditioning and reinforcement) to smoking cessation and long-term medication adherence',
    'Differentiate between clinical and developmental psychology in tailoring age-appropriate and mental-health-integrated care'
  ],

  // 🎨 Process Flow / Step Breakdown for the Core Psychological Subfields
  biopsychosocialSteps: [
    {
      step: '1',
      title: 'Health Psychology',
      description: 'Studies how habits, social circles, and mental states interact directly with biological processes to influence illness.'
    },
    {
      step: '2',
      title: 'Behavioral Psychology',
      description: 'Applies B.F. Skinner conditioning and reinforcement to modify daily routines, smoking habits, and medication adherence.'
    },
    {
      step: '3',
      title: 'Clinical Psychology',
      description: 'Assesses, diagnoses, and treats co-occurring mental health disorders (e.g., severe anxiety, depression) alongside physical care.'
    },
    {
      step: '4',
      title: 'Developmental Psychology',
      description: 'Adapts communication and care plans to match age-specific cognitive and emotional capabilities across the lifespan.'
    }
  ],

  // 🩺 Sub-frameworks referenced inside the lesson — rendered as side-by-side readout panels
  frameworks: [
    {
      name: 'STRESS-HYPERTENSION',
      context: 'Neuroendocrine Stress Cascade Pathway',
      items: [
        { init: '1', label: 'Psychological Stress Trigger' },
        { init: '2', label: 'Adrenal Cortisol Release' },
        { init: '3', label: 'Sustained Arterial Constriction' },
        { init: '4', label: 'Chronic High Blood Pressure' }
      ]
    },
    {
      name: 'BEHAVIOR-MOD',
      context: 'Skinnerian Operant Adherence Loop',
      items: [
        { init: 'C', label: 'Conditioning target routines' },
        { init: 'R', label: 'Reinforcement for positive compliance' },
        { init: 'E', label: 'Environmental barrier elimination' },
        { init: 'A', label: 'Adherence tracking over time' }
      ]
    }
  ],

  // 📖 Sections with explicit `id` attributes for navigation scrolling
  sections: [
    {
      id: 'the-biopsychosocial-imperative',
      heading: 'The Biopsychosocial Imperative',
      content:
        'Imagine a perfect treatment for a failing heart. The surgical procedure is flawless, the new valves work beautifully, and the biological problem is solved. But six months later, the patient is back in the ER because they struggled to manage their stress levels or follow a complex medication schedule. Focusing strictly on physiology often overlooks the human being who must manage that physiology. A successful surgery is only the first step in a much longer chain of human decisions. This illustrates the biopsychosocial model, which acknowledges that physical health is inextricably linked to our social environments and psychological states.'
    },
    {
      id: 'empirical-foundation-of-psychology',
      heading: 'The Empirical Foundation of Psychology',
      content:
        'The psychological component traces back to two Greek roots: psyche, meaning soul, and logos, the study of it. While its origins are philosophical, the modern discipline is empirical. Today, psychology is the rigorous science of behavior and mental processes, relying on controlled experiments and systematic observation rather than speculation. When a care plan ignores the science of behavior, its effectiveness depends entirely on luck once the patient leaves the clinic. Clinical precision in the operating room does not guarantee recovery in the living room.'
    },
    {
      id: 'health-psychology-and-biological-pathways',
      heading: 'Health Psychology & Biological Pathways',
      content:
        'Today\'s most pressing medical challenges are often chronic conditions that develop over decades, heavily influenced by daily lifestyle choices. Health psychology studies exactly how these choices—our habits, social circles, and mental states—interact with physiological processes to influence the onset and course of illness. For instance, a psychological stress trigger prompts the release of cortisol, which over time can lead to a sustained increase in blood pressure.'
    },
    {
      id: 'behavioral-psychology-and-habit-modification',
      heading: 'Behavioral Psychology & Habit Modification',
      content:
        'To address these daily routines, medicine utilizes behavioral psychology. Rooted in the work of figures like B.F. Skinner, this branch focuses on observable actions and how behavior is learned, reinforced, or modified. By utilizing principles of conditioning and reinforcement, healthcare providers can help patients replace harmful routines with sustainable, health-promoting ones. These techniques are the primary tools used in successful smoking cessation programs, weight management protocols, and systems designed to improve long-term medication adherence.'
    },
    {
      id: 'clinical-and-developmental-integration',
      heading: 'Clinical & Developmental Integration',
      content:
        'Physical medicine frequently intersects with acute mental distress and varied cognitive capabilities. Clinical psychology focuses on the assessment, diagnosis, and treatment of mental health disorders, helping patients manage severe anxiety or depression alongside physical care. In integrated settings, clinical psychologists work with physicians to stabilize patients with dual diagnoses, ensuring mental health crises don\'t derail physical treatments. Meanwhile, developmental psychology studies how psychological needs shift as we age. A young child and an elderly adult possess vastly different cognitive and emotional tools; understanding these age-specific changes allows medical teams to adapt communication to match the patient\'s developmental stage.'
    },
    {
      id: 'the-integrated-care-bridge',
      heading: 'The Integrated Care Bridge',
      content:
        'Modern care is moving away from a model where physicians and psychologists operate in isolation, favoring cohesive integrated teams. Effective treatment requires an understanding of emotion, motivation, and cognition as core components of patient health, right alongside anatomy. The most advanced biological treatments still require a human to act on them. Psychology provides the bridge between a physician\'s prescription and a patient\'s daily reality, turning medical potential into measurable health.'
    }
  ],
  keyPoints: [
    'Physiological treatment alone is incomplete without accounting for psychological states and social environments',
    'Psychology is an empirical science relying on controlled experiments and systematic observation, not philosophical speculation',
    'Health psychology maps neuroendocrine stress cascades, such as stress triggers causing cortisol release and sustained high blood pressure',
    'Behavioral psychology uses conditioning and reinforcement to drive smoking cessation, weight management, and medication adherence',
    'Clinical psychology stabilizes dual diagnoses so mental health crises do not derail physical treatments',
    'Developmental psychology ensures communication and care plans are tailored to the patient\'s age and cognitive capabilities',
    'Psychology acts as the essential operational bridge turning biological medical potential into daily patient adherence'
  ],
  rapid: [
    'Biopsychosocial: Bio (anatomy) + Psycho (cognition/emotion) + Social (environment)',
    'Stress → Cortisol Release → Sustained Hypertension',
    'Behavioral Modification = Conditioning + Reinforcement'
  ],
  animation: 'biopsychosocial',
  
  quiz: [
    {
      question: 'What is the primary premise of the Biopsychosocial Model in healthcare?',
      options: [
        'Surgical precision alone guarantees complete post-discharge recovery',
        'Physical health is inextricably linked to psychological states and social environments',
        'Psychology relies primarily on philosophical speculation rather than data',
        'Biological treatment plans should operate independently of patient lifestyle habits'
      ],
      answer: 1,
      explanation:
        'The biopsychosocial model asserts that physical health cannot be separated from psychological well-being and social context, as human behavior dictates whether medical care succeeds post-discharge.'
    },
    {
      question: 'Which biological mechanism is highlighted as a link between psychological stress and physical disease?',
      options: [
        'Insulin suppression resulting in immediate hypoglycemia',
        'Psychological stress triggers prompting cortisol release, leading over time to sustained high blood pressure',
        'Histamine depletion causing rapid joint degeneration',
        'Thyroxine spikes causing acute renal failure'
      ],
      answer: 1,
      explanation:
        'Health psychology tracks biological mechanisms like stress triggering cortisol release, which contributes directly to sustained arterial hypertension.'
    },
    {
      question: 'How does behavioral psychology assist in chronic disease management?',
      options: [
        'By performing invasive diagnostic procedures',
        'By utilizing conditioning and reinforcement to modify daily habits and improve medication adherence',
        'By replacing all pharmacological prescriptions with talking therapies',
        'By focusing exclusively on unconscious childhood memories'
      ],
      answer: 1,
      explanation:
        'Behavioral psychology uses B.F. Skinner\'s principles of conditioning and reinforcement to help patients build health-promoting routines, manage weight, quit smoking, and stick to long-term medication schedules.'
    },
    {
      question: 'Why is developmental psychology vital for medical teams when structuring care plans?',
      options: [
        'It dictates the financial billing codes for different hospital departments',
        'It allows clinicians to adapt communication and expectations to match the patient\'s age-specific cognitive and emotional capabilities',
        'It focuses solely on treating pediatric heart malformations',
        'It eliminates the need for clinical psychologists in emergency settings'
      ],
      answer: 1,
      explanation:
        'Developmental psychology accounts for how cognitive and emotional tools evolve across the lifespan, allowing clinicians to tailor care whether treating a young child or an elderly adult.'
    }
  ]
};

export const lessons = [biopsychosocialModelLesson];

export const topic = 'Introduction to Healthcare Psychology';
