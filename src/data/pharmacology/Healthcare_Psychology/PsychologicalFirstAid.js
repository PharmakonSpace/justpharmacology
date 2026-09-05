// PsychologicalFirstAid.js

export const psychologicalFirstAidLesson = {
  id: 'psychological-first-aid',
  isNew: true,
  isLatest: true,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-05T00:00:00',
  addedOrder: 5,
  categoryId: 'healthcare_psychology',
  topic: 'Healthcare Psychology',
  title: 'Psychological First Aid',
  subtitle: 'A Four-Step Protocol for Stabilizing Patients in Acute Emotional Distress',
  level: 'Beginner',
  time: 6,
  description:
    'A practical introduction to psychological first aid for clinical settings, showing how providers can reduce anxiety, establish safety, listen and validate emotions, and provide comfort and empowerment before attempting detailed clinical assessment.',

  video: {
    youtubeId: 'CKS8_AkuAk4', // Add YouTube video ID if available
    title: 'Psychological First Aid'
  },

  objectives: [
    'Explain why acute emotional distress can interfere with a patient’s ability to process clinical information',
    'Perform an internal emotional check before approaching a highly distressed patient',
    'Apply the four-step psychological first aid sequence: clear the noise, establish physical safety, listen and validate, and comfort and empower',
    'Use environmental and nonverbal interventions to create a safer, more predictable clinical interaction',
    'Differentiate emotional validation from minimizing feelings and false reassurance',
    'Explain how psychological stabilization supports more effective communication and accurate clinical data collection'
  ],

  // 🎨 Process Flow / Step Breakdown for Psychological First Aid
  psychologicalFirstAidSteps: [
    {
      step: '1',
      title: 'Clear the Noise',
      description:
        'Reduce environmental distractions and recognize that severe emotional distress creates internal cognitive noise that can interfere with the patient’s ability to process and decode information.'
    },
    {
      step: '2',
      title: 'Establish Physical Safety',
      description:
        'Sit at the patient’s eye level, maintain an open posture, use gentle eye contact, and allow empathic silence so the patient can adjust without pressure.'
    },
    {
      step: '3',
      title: 'Listen & Validate',
      description:
        'Use a gentle open observation, allow the patient to tell their story at their own pace, and identify their emotions without judgment or minimizing their experience.'
    },
    {
      step: '4',
      title: 'Comfort & Empower',
      description:
        'Provide simple practical comfort, reduce decision-making demands, establish predictable boundaries, and restore a small measure of control and predictability.'
    }
  ],

  // 🧠 Core frameworks — rendered as side-by-side readout panels
  frameworks: [
    {
      name: 'COMMUNICATION-NOISE',
      context: 'Sender → Encoding → Channel → Decoding → Receiver',
      items: [
        { init: 'S', label: 'Sender — provider communicates information' },
        { init: 'C', label: 'Channel — clinical communication environment' },
        { init: 'N', label: 'Noise — environmental distraction + severe emotional distress' },
        { init: 'R', label: 'Receiver — patient must process and decode information' }
      ]
    },
    {
      name: 'PFA-PROTOCOL',
      context: 'Four-Step Psychological First Aid Sequence',
      items: [
        { init: '1', label: 'Clear the noise' },
        { init: '2', label: 'Establish physical safety' },
        { init: '3', label: 'Listen and validate' },
        { init: '4', label: 'Comfort and empower' }
      ]
    }
  ],

  // 📖 Sections with explicit `id` attributes for navigation scrolling
  sections: [
    {
      id: 'when-standard-intake-fails',
      heading: 'When Standard Intake Fails',
      content:
        'A patient experiencing acute, overwhelming emotional distress may have difficulty processing information. In this state, standard intake questions can fail because the patient may be unable to organize symptoms, answer questions, or engage with the provider effectively. Attempting to collect detailed clinical information before reducing the immediate distress can cause the patient to withdraw further. Psychological first aid begins by stabilizing the interaction so communication can become possible.'
    },
    {
      id: 'internal-provider-check',
      heading: 'Before You Approach: Check Yourself',
      content:
        'The first preparation happens inside the provider. Notice your own emotional baseline and personal defense mechanisms before entering the interaction. If you carry stress or defensiveness into the room, the vulnerable patient may detect it. Consciously drop assumptions about why the patient is upset and approach their perceptual world without judgment. A grounded and self-aware provider creates the foundation for a successful external intervention.'
    },
    {
      id: 'step-one-clear-the-noise',
      heading: 'Step One: Clear the Noise',
      content:
        'As you enter the room, immediately assess the physical environment and the patient’s immediate physical state. The communication process can be understood as information flowing from a sender, being encoded, traveling through a channel, being decoded, and reaching a receiver. In a clinical setting, noise can disrupt this process. Severe emotional distress creates intense internal noise that can overwhelm cognitive processing and interfere with the patient’s ability to decode what the provider is saying. Before addressing internal noise, first reduce external noise. Close the exam room door, adjust an uncomfortable thermostat, and silence unnecessary or blaring medical monitors. Creating a calmer environment is a gateway to effective emotional intervention.'
    },
    {
      id: 'step-two-establish-safety',
      heading: 'Step Two: Establish Physical Safety',
      content:
        'Physical positioning communicates safety before words do. A provider who towers over a distressed patient can unintentionally signal an aggressive or task-focused agenda. Sitting at eye level with an open posture communicates respect for the patient’s personal space. Once seated, use empathic silence as an active clinical tool. Remain quietly present and allow the patient time to adjust to your proximity without demanding immediate answers. Gentle eye contact, relaxed arms, and an unhurried presence reinforce this sense of safety.'
    },
    {
      id: 'avoid-mind-reading',
      heading: 'Avoid Mind Reading',
      content:
        'Do not assume that you know what the patient is afraid of simply by observing posture, facial expression, or other nonverbal behavior. Projecting your own interpretation onto the patient can cause you to miss their actual concerns. The provider’s task is to create space for the patient to communicate their experience rather than deciding in advance what that experience must be.'
    },
    {
      id: 'step-three-listen-and-validate',
      heading: 'Step Three: Listen & Validate',
      content:
        'Begin with a gentle, open observation and allow the patient to tell their story at their own pace. As they speak, identify their emotions out loud without judgment. A statement such as, “It must be frightening not to understand what is happening,” communicates recognition of the patient’s emotional experience. Explicit validation demonstrates that the provider is listening and can reduce the patient’s need to defend or justify their distress.'
    },
    {
      id: 'avoid-false-reassurance',
      heading: 'Avoid False Reassurance & Minimization',
      content:
        'A major communication roadblock is false reassurance or minimizing a patient’s feelings. Telling a terrified patient that everything will be fine without understanding their experience can weaken the therapeutic relationship. If the patient believes the provider does not understand the severity of the situation, distress may escalate. Validation does not mean agreeing with every interpretation; it means recognizing the emotional experience being communicated without judgment.'
    },
    {
      id: 'step-four-comfort-and-empower',
      heading: 'Step Four: Comfort & Empower',
      content:
        'Sustained extreme distress can leave a patient physically exhausted. Offer actionable comfort that does not require complex decisions. Rather than asking an overwhelmed person to choose what they need, provide simple practical support such as water or a warm blanket when appropriate. Establish a clear temporal boundary for the interaction, such as giving the patient a defined period to rest and collect their thoughts before returning to continue the examination. Practical, non-reactive help communicates that the environment is reliable and immediate needs will be addressed.'
    },
    {
      id: 'predictability-restores-control',
      heading: 'Predictability Restores a Sense of Control',
      content:
        'Clear boundaries and attention to immediate physical needs can restore a small measure of predictability. Extreme distress is associated in the lesson with helplessness and loss of control. A predictable environment gives the patient a clearer sense of what will happen next, helping create the conditions needed to re-engage with the clinical interaction.'
    },
    {
      id: 'return-to-clinical-engagement',
      heading: 'From Stabilization to Clinical Engagement',
      content:
        'After the intervention, the patient may show visible signs of reduced emotional arousal, such as exhaling more fully, lowering their shoulders, and becoming more ready to engage. Psychological first aid is presented as a reliable, repeatable sequence: clear the noise, establish connection through empathic silence, listen and validate, and finally comfort and empower. Rushing a distressed patient through a checklist can result in failed communication. Taking time to stabilize the interaction builds trust and supports the collection of more accurate clinical information.'
    },
    {
      id: 'clinical-application',
      heading: 'Clinical Application',
      content:
        'When encountering a patient whose anxiety is blocking communication, pause before beginning the routine assessment. Check your own emotional state, improve the immediate environment, and sit at the patient’s level. A treatment plan can only work when the patient is able to process the information being communicated. Mastering psychological first aid therefore positions the provider as a stabilizing emotional anchor while creating the conditions for effective clinical communication.'
    }
  ],

  keyPoints: [
    'Acute overwhelming emotional distress can interfere with cognitive processing and communication',
    'The provider should perform an internal emotional check before approaching a highly distressed patient',
    'External environmental noise should be reduced before attempting to overcome internal cognitive noise',
    'Physical positioning, open posture, gentle eye contact, and empathic silence can communicate safety',
    'Providers should avoid mind reading and assumptions about what the patient is experiencing',
    'Listening and explicit emotional validation help the patient feel heard without judgment',
    'False reassurance and minimization can damage the therapeutic relationship and increase distress',
    'Simple practical comfort reduces decision-making demands during overwhelming distress',
    'Clear boundaries and predictable next steps can restore a measure of control and predictability',
    'Psychological first aid follows a repeatable sequence: clear the noise → establish safety → listen and validate → comfort and empower',
    'Psychological stabilization can make later clinical communication and data collection more effective'
  ],

  rapid: [
    'Psychological First Aid = Clear Noise → Establish Safety → Listen & Validate → Comfort & Empower',
    'Communication = Sender → Encoding → Channel → Decoding → Receiver',
    'Severe Distress = Internal Cognitive Noise → Reduced Information Processing',
    'Safety Cues = Eye-Level Position + Open Posture + Gentle Eye Contact + Empathic Silence',
    'Validation ≠ False Reassurance or Minimization',
    'Predictability → Greater Sense of Control → Readiness to Re-engage'
  ],

  animation: 'psychological-first-aid',

  quiz: [
    {
      question: 'Why can standard intake questions fail when a patient is experiencing acute overwhelming emotional distress?',
      options: [
        'The patient has permanently lost the ability to communicate',
        'Severe distress can overwhelm cognitive processing and interfere with information decoding',
        'Standard intake questions are never useful in healthcare',
        'Patients in distress should always be treated without communication'
      ],
      answer: 1,
      explanation:
        'The lesson explains that extreme emotional distress creates internal cognitive noise that can interfere with the patient’s ability to process and decode information.'
    },
    {
      question: 'What should the provider do before approaching a highly distressed patient?',
      options: [
        'Immediately begin asking detailed symptom questions',
        'Assume the reason for the patient’s distress',
        'Check their own emotional baseline and defense mechanisms',
        'Avoid making eye contact'
      ],
      answer: 2,
      explanation:
        'The provider first performs an internal check, notices their own emotional state and defenses, and consciously drops assumptions before entering the patient’s perceptual world.'
    },
    {
      question: 'What is the first step of the psychological first aid protocol?',
      options: [
        'Begin a complete physical examination',
        'Clear the noise',
        'Give direct advice',
        'Ask the patient to explain every symptom'
      ],
      answer: 1,
      explanation:
        'The first step is to clear environmental noise and reduce distractions so the patient can better process the interaction.'
    },
    {
      question: 'Which behavior best communicates physical safety during psychological first aid?',
      options: [
        'Standing over the patient with a closed posture',
        'Maintaining an aggressive task-focused stance',
        'Sitting at eye level with an open posture and using empathic silence',
        'Immediately demanding answers'
      ],
      answer: 2,
      explanation:
        'Sitting at eye level, maintaining an open posture, and allowing empathic silence communicates respect, safety, and an unhurried presence.'
    },
    {
      question: 'Why should a provider avoid mind reading?',
      options: [
        'Nonverbal behavior has no clinical value',
        'The provider can never communicate with distressed patients',
        'Projecting assumptions about the patient’s fears can cause the provider to miss the patient’s actual concerns',
        'Mind reading is required only during physical examinations'
      ],
      answer: 2,
      explanation:
        'The lesson emphasizes that posture alone does not reveal a patient’s specific fears. The provider should create space for the patient to communicate their actual concerns.'
    },
    {
      question: 'Which response best demonstrates emotional validation?',
      options: [
        '“There is nothing to worry about.”',
        '“You should calm down.”',
        '“It must be frightening not to understand what is happening.”',
        '“Your feelings are not relevant right now.”'
      ],
      answer: 2,
      explanation:
        'The example explicitly recognizes the patient’s emotional experience without judgment or minimization.'
    },
    {
      question: 'What is a major communication roadblock during acute distress?',
      options: [
        'Allowing appropriate silence',
        'False reassurance and minimizing the patient’s feelings',
        'Using gentle eye contact',
        'Providing simple practical comfort'
      ],
      answer: 1,
      explanation:
        'False reassurance and minimization can make patients feel misunderstood, potentially increasing distress and weakening the therapeutic relationship.'
    },
    {
      question: 'What is the purpose of providing simple practical comfort?',
      options: [
        'To make the patient responsible for complex decisions',
        'To replace all clinical treatment',
        'To meet immediate needs without requiring complex decisions and restore predictability',
        'To end communication permanently'
      ],
      answer: 2,
      explanation:
        'Simple actions such as offering water or a warm blanket reduce decision-making demands and help create a reliable, predictable environment.'
    }
  ]
};

export const lessons = [psychologicalFirstAidLesson];

export const topic = 'Healthcare Psychology';

export default psychologicalFirstAidLesson;
