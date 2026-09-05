// CarlRogersClientCenteredTherapy.js

export const carlRogersClientCenteredTherapyLesson = {
  id: 'carl-rogers-client-centered-therapy',
  isNew: true,
  isLatest: false,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-05T00:00:00',
  addedOrder: 4,
  categoryId: 'healthcare_psychology',
  topic: 'Healthcare Psychology',
  title: 'Carl Rogers & Client-Centered Therapy',
  subtitle: 'Self-Actualization, Incongruence & the Three Core Therapeutic Conditions',
  level: 'Beginner',
  time: 6,
  description:
    'An introduction to Carl Rogers’ humanistic approach to psychology, explaining the shift from passive patient treatment to client-centered care, the role of self-actualization, real and ideal self, incongruence, non-directive practice, and the three core therapeutic conditions of congruence, unconditional positive regard, and empathy.',
  video: {
    youtubeId: 'QZn_F7zR6Cc', // Add YouTube video ID if available
    title: 'Carl Rogers & Client-Centered Therapy'
  },

  objectives: [
    'Explain Carl Rogers’ humanistic, client-centered approach and why it challenges a purely expert-driven model of psychological care',
    'Understand self-actualization and how the gap between the real self and ideal self can produce incongruence, anxiety, and defensiveness',
    'Explain why the Rogerian practitioner adopts a non-directive stance rather than prescribing solutions or advice',
    'Identify and differentiate the three core therapeutic conditions: congruence, unconditional positive regard, and empathy',
    'Describe how reflective listening and therapeutic safety help clients explore their own thoughts and reduce defensive barriers',
    'Connect Rogers’ principles to modern patient-centered care, where patient values and goals influence treatment planning'
  ],

  // 🎨 Process Flow / Step Breakdown for Client-Centered Therapy
  biopsychosocialSteps: [
    {
      step: '1',
      title: 'Humanistic Third Force',
      description:
        'Carl Rogers pioneered a humanistic approach that challenged the idea of treating people as passive patients who simply receive expert intervention.'
    },
    {
      step: '2',
      title: 'Self-Actualization',
      description:
        'Rogers proposed that every person possesses a natural drive to grow, adapt, and move toward their highest potential.'
    },
    {
      step: '3',
      title: 'Incongruence',
      description:
        'Psychological distress can emerge when the authentic real self becomes separated from the ideal self shaped by social expectations and the need for acceptance.'
    },
    {
      step: '4',
      title: 'Non-Directive Practice',
      description:
        'Instead of dictating solutions, the practitioner creates conditions that encourage the client to look inward and discover their own direction.'
    },
    {
      step: '5',
      title: 'Three Core Conditions',
      description:
        'Congruence, unconditional positive regard, and empathy create the relational environment needed for psychological exploration and reduced defensiveness.'
    },
    {
      step: '6',
      title: 'Reflective Listening',
      description:
        'The practitioner paraphrases what the client communicates and uses appropriate silence to give the client space to hear and understand their own thoughts.'
    }
  ],

  // 🧠 Core framework — rendered as side-by-side readout panels
  frameworks: [
    {
      name: 'SELF-INCONGRUENCE',
      context: 'Real Self → Ideal Self → Psychological Distress',
      items: [
        { init: 'R', label: 'Real self — who the person authentically experiences themselves to be' },
        { init: 'I', label: 'Ideal self — who the person believes they are expected or required to be' },
        { init: 'G', label: 'Gap between real and ideal self' },
        { init: 'D', label: 'Incongruence → anxiety and defensiveness' }
      ]
    },
    {
      name: 'ROGERIAN-CONDITIONS',
      context: 'Three Core Therapeutic Conditions',
      items: [
        { init: 'C', label: 'Congruence — authentic and transparent practitioner' },
        { init: 'U', label: 'Unconditional positive regard — acceptance without judgment' },
        { init: 'E', label: 'Empathy — accurately understanding the client’s internal world' }
      ]
    }
  ],

  // 📖 Sections with explicit `id` attributes for navigation scrolling
  sections: [
    {
      id: 'from-patient-to-client',
      heading: 'From Passive Patient to Active Client',
      content:
        'Treating human beings as passive patients can strip them of their sense of agency by reducing complex psychological pain to a problem that an outside expert must repair. Carl Rogers challenged this hierarchy through the humanistic approach that became known as the third force in psychology. Rogers argued that the clinical expert does not necessarily know what is best for the individual experiencing distress. To signal this change, he replaced the traditional term patient with client, emphasizing a more active and participatory role for the person receiving psychological care.'
    },
    {
      id: 'self-actualization',
      heading: 'The Drive Toward Self-Actualization',
      content:
        'At the center of Rogers’ approach is self-actualization. The theory assumes that human beings possess a natural drive to grow, adapt, and reach their highest potential. From this perspective, the practitioner does not need to impose a complex top-down solution. Instead, the practitioner creates the conditions that allow the person’s own internal capacity for growth to become active.'
    },
    {
      id: 'real-self-and-ideal-self',
      heading: 'Real Self vs Ideal Self',
      content:
        'Rogers explained psychological distress partly through a conflict between the real self and the ideal self. The real self represents who a person authentically experiences themselves to be, while the ideal self represents who they believe they should or are expected to be. People may hide aspects of their authentic self in order to gain acceptance. Over time, this can create a gap between the real and ideal selves.'
    },
    {
      id: 'incongruence',
      heading: 'Incongruence: The Gap That Creates Distress',
      content:
        'Rogers called the gap between the real self and ideal self incongruence. When people repeatedly suppress their authentic experiences in order to meet external expectations, psychological tension can develop. In the framework presented here, incongruence is associated with anxiety and defensiveness. The therapeutic goal is therefore not simply to provide an external answer, but to create conditions in which the person can safely explore and reduce this internal gap.'
    },
    {
      id: 'non-directive-stance',
      heading: 'Why the Practitioner Does Not Give Advice',
      content:
        'The Rogerian practitioner adopts a non-directive stance. The rationale is that dictating solutions can encourage the client to seek the practitioner’s approval rather than develop their own understanding. This may push the ideal self even further away from the client’s authentic experience. By stepping back from advice-giving, the practitioner creates space for the client to look inward, understand their own experience, and bridge the gap themselves.'
    },
    {
      id: 'three-core-conditions',
      heading: 'The Three Core Therapeutic Conditions',
      content:
        'A non-directive approach depends on three core relational conditions: congruence, unconditional positive regard, and empathy. Congruence means that the practitioner is authentic and transparent rather than hiding behind a professional facade. Unconditional positive regard means accepting the client without judgment or evaluation, creating psychological safety for exploring difficult experiences. Empathy means accurately sensing and understanding the client’s internal world while maintaining professional grounding. Together, these conditions function as active therapeutic tools rather than passive attitudes.'
    },
    {
      id: 'reflective-listening',
      heading: 'Reflective Listening & Therapeutic Silence',
      content:
        'In practice, the Rogerian method uses reflective listening. The practitioner paraphrases what they hear and allows appropriate silence, giving the client space to hear their own thoughts. In a psychologically safe environment, the client can gradually reduce defensive barriers and speak more openly. Without external judgment forcing them to perform for approval, the real and ideal selves can move toward greater alignment.'
    },
    {
      id: 'patient-centered-care',
      heading: 'From Rogerian Therapy to Patient-Centered Care',
      content:
        'Rogers’ core conditions extended beyond the therapist’s office and contributed to a broader movement away from paternalistic approaches to care. The same principles support patient-centered care, where the patient’s values and goals are important components of treatment planning. The central lesson is that effective care is not only about having the correct intervention; it is also about creating an environment in which people can participate actively in decisions affecting their health.'
    },
    {
      id: 'the-power-of-empathic-safety',
      heading: 'The Power of Empathic Safety',
      content:
        'Whether the setting is clinical care or a personal conversation, the most powerful response to someone in distress is not always having the right answer. A safe and empathic relationship can give a person the psychological space needed to explore their own experience and discover their own direction. In the Rogerian framework, the practitioner’s role is therefore less about controlling the outcome and more about creating the conditions in which meaningful self-understanding and growth can occur.'
    }
  ],

  keyPoints: [
    'Carl Rogers challenged a passive patient model by emphasizing the person’s agency and active participation',
    'The humanistic approach assumes an innate drive toward growth and self-actualization',
    'The real self represents the person’s authentic experience, while the ideal self represents who they believe they should be',
    'Incongruence is the gap between the real self and ideal self and is associated with anxiety and defensiveness',
    'The Rogerian practitioner adopts a non-directive stance rather than imposing advice or solutions',
    'Congruence means the practitioner is authentic and transparent',
    'Unconditional positive regard means accepting the client without judgment or evaluation',
    'Empathy involves understanding the client’s internal world while maintaining professional grounding',
    'Reflective listening and appropriate silence allow clients to hear and explore their own thoughts',
    'Rogers’ principles helped support the broader movement toward patient-centered care'
  ],

  rapid: [
    'Rogers: Patient → Client → Greater Agency',
    'Self-Actualization = Natural Drive to Grow + Adapt + Reach Potential',
    'Real Self ↔ Ideal Self → Gap = Incongruence',
    'Three Core Conditions = Congruence + Unconditional Positive Regard + Empathy',
    'Rogerian Method = Non-Directive Stance + Reflective Listening + Therapeutic Safety'
  ],

  animation: 'carl-rogers-client-centered',

  quiz: [
    {
      question: 'What major shift did Carl Rogers emphasize through the use of the term client rather than patient?',
      options: [
        'Replacing psychological care with medication-only treatment',
        'Emphasizing the person’s agency and active participation rather than a passive treatment role',
        'Making clinicians responsible for deciding every solution',
        'Removing psychological concepts from healthcare'
      ],
      answer: 1,
      explanation:
        'Rogers used the term client to move away from the idea of a passive person waiting for an expert to repair them and toward a more active, participatory role.'
    },
    {
      question: 'What is self-actualization in Rogers’ approach?',
      options: [
        'A technique in which the clinician gives direct advice',
        'A natural drive to grow, adapt, and reach one’s highest potential',
        'A diagnostic test for psychological disorders',
        'A method of suppressing difficult emotions'
      ],
      answer: 1,
      explanation:
        'Rogers proposed that every human being possesses a latent, natural drive toward growth, adaptation, and reaching their potential.'
    },
    {
      question: 'What did Rogers mean by incongruence?',
      options: [
        'A perfect match between the real and ideal self',
        'The absence of social expectations',
        'A gap between the real self and the ideal self',
        'A clinician’s failure to diagnose a disorder'
      ],
      answer: 2,
      explanation:
        'Incongruence refers to the gap between who a person authentically experiences themselves to be and who they believe they are expected or required to be.'
    },
    {
      question: 'Which three conditions are central to the Rogerian therapeutic approach?',
      options: [
        'Diagnosis, medication, and behavioral punishment',
        'Congruence, unconditional positive regard, and empathy',
        'Authority, confrontation, and evaluation',
        'Silence, diagnosis, and prescription'
      ],
      answer: 1,
      explanation:
        'Rogers identified congruence, unconditional positive regard, and empathy as the three core relational conditions supporting the client-centered approach.'
    },
    {
      question: 'Why does the Rogerian practitioner avoid simply giving advice?',
      options: [
        'Because clients should never communicate with clinicians',
        'Because advice can encourage clients to seek external approval instead of developing their own understanding',
        'Because psychological distress has no possible solution',
        'Because silence is always better than communication'
      ],
      answer: 1,
      explanation:
        'The non-directive stance gives the client space to look inward and develop their own understanding rather than becoming dependent on the practitioner’s approval or prescribed solution.'
    },
    {
      question: 'What is the purpose of reflective listening in the Rogerian method?',
      options: [
        'To force the client to accept the practitioner’s opinion',
        'To diagnose every psychological disorder immediately',
        'To paraphrase what the client communicates and create space for self-exploration',
        'To prevent the client from discussing difficult emotions'
      ],
      answer: 2,
      explanation:
        'Reflective listening allows the practitioner to communicate understanding while giving the client space to hear, explore, and clarify their own thoughts.'
    }
  ]
};

export const lessons = [carlRogersClientCenteredTherapyLesson];

export const topic = 'Healthcare Psychology';

export default carlRogersClientCenteredTherapyLesson;
