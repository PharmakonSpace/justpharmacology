// ClinicalCommunicationFrameworks.js

export const clinicalCommunicationFrameworksLesson = {
  id: 'clinical-communication-frameworks',
  isNew: true,
  isLatest: true,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-08T00:00:00',
  addedOrder: 6,
  categoryId: 'healthcare_psychology',
  topic: 'Healthcare Psychology',
  title: 'Clinical Communication Frameworks',
  subtitle: 'From Basic Message Transfer to Patient-Centered, System-Level Communication',
  level: 'Beginner',
  time: 18,
  description:
    'A systems-based introduction to clinical communication, covering linear and circular transactional models, communication noise, environmental constraints, teach-back, the ICF framework, person-centered practice, therapeutic relationship pillars, interpersonal proximity, relationship stages, multidisciplinary team dynamics, health literacy, and low-bandwidth telehealth communication.',

  video: {
    youtubeId: 'jrx92Kn3xRE', // Add YouTube video ID if available
    title: 'Clinical Communication Frameworks'
  },

  objectives: [
    'Explain why delivering medical facts is not equivalent to achieving clinical communication or patient understanding',
    'Differentiate the basic linear communication model from Bateson’s circular transactional model',
    'Identify internal and external sources of communication noise and explain how they affect message decoding',
    'Apply teach-back and feedback loops to verify mutual understanding',
    'Explain how time, physical space, organizational rules, and privacy constraints alter clinical communication',
    'Describe how the WHO ICF framework provides a standardized language across multidisciplinary healthcare systems',
    'Explain the sequential therapeutic chain from mutual understanding to relationship, person-centered goals, compliance, and positive outcomes',
    'Identify the five behavioral pillars of person-centered communication: respect, empathy, trust, collaboration, and empowerment',
    'Apply proxemics and structured relationship stages to maintain safe therapeutic boundaries',
    'Explain how multidisciplinary teams evolve through forming, storming, norming, performing, and eventual closure',
    'Describe the communication challenges created by limited health literacy and explain practical strategies for clearer health materials',
    'Adapt communication protocols to telephone, text, video, email, and fax channels with reduced nonverbal information'
  ],

  // 🎨 Process Flow / Step Breakdown for Clinical Communication
  clinicalCommunicationSteps: [
    {
      step: '1',
      title: 'Encode Clearly',
      description:
        'The clinician must recognize that delivering medical facts is not enough; the message must be encoded in a way the patient can understand and use safely.'
    },
    {
      step: '2',
      title: 'Account for Filters',
      description:
        'Clinician assumptions, jargon, authority expectations, patient culture, values, previous healthcare experiences, pain, anxiety, and environmental chaos can alter the message.'
    },
    {
      step: '3',
      title: 'Close the Feedback Loop',
      description:
        'Use active feedback such as teach-back to verify what information the patient actually received and understood.'
    },
    {
      step: '4',
      title: 'Adapt to Context',
      description:
        'Adjust communication to time pressure, physical surroundings, organizational requirements, privacy rules, and the patient’s immediate circumstances.'
    },
    {
      step: '5',
      title: 'Build Mutual Understanding',
      description:
        'Establish a shared reality regarding the diagnosis and the patient’s lived experience before setting treatment goals.'
    },
    {
      step: '6',
      title: 'Create the Therapeutic Relationship',
      description:
        'Develop safety and respect, then negotiate person-centered goals that align clinical targets with the patient’s actual daily needs and priorities.'
    },
    {
      step: '7',
      title: 'Scale Communication',
      description:
        'Maintain safe communication across interpersonal, team, and mass-communication levels, including low-bandwidth remote channels.'
    }
  ],

  // 🧠 Core frameworks — rendered as side-by-side readout panels
  frameworks: [
    {
      name: 'TRANSACTIONAL-COMM',
      context: 'Bateson’s Circular Transactional Model',
      items: [
        { init: 'C', label: 'Clinician filters — bias, jargon, assumptions, authority' },
        { init: 'P', label: 'Patient filters — culture, values, prior healthcare experiences' },
        { init: 'N', label: 'Clinical noise — pain, anxiety, chaotic environments' },
        { init: 'F', label: 'Feedback — teach-back verifies the message received' }
      ]
    },
    {
      name: 'THERAPEUTIC-CHAIN',
      context: 'Person-Centered Practice Outcome Sequence',
      items: [
        { init: '1', label: 'Negotiated mutual understanding' },
        { init: '2', label: 'Therapeutic relationship based on safety and respect' },
        { init: '3', label: 'Person-centered goals' },
        { init: '4', label: 'Improved compliance → Positive health outcomes' }
      ]
    },
    {
      name: 'FIVE-PILLARS',
      context: 'Behavioral Foundations of Person-Centered Practice',
      items: [
        { init: 'R', label: 'Respect' },
        { init: 'E', label: 'Empathy' },
        { init: 'T', label: 'Trust' },
        { init: 'C', label: 'Collaboration' },
        { init: 'E', label: 'Empowerment' }
      ]
    },
    {
      name: 'COMM-SCALES',
      context: 'Three Operational Communication Levels',
      items: [
        { init: 'I', label: 'Interpersonal dyad — provider ↔ patient' },
        { init: 'G', label: 'Group dynamics — multidisciplinary team synchronization' },
        { init: 'M', label: 'Mass communication — health systems communicating with populations' }
      ]
    }
  ],

  // 📖 Sections with explicit `id` attributes for navigation scrolling
  sections: [
    {
      id: 'communication-is-not-information-delivery',
      heading: 'Communication Is More Than Information Delivery',
      content:
        'A clinician can accurately recite a diagnosis, dosage, and discharge instructions without those facts reaching the patient’s comprehension. Delivering medical facts is therefore not the same as achieving communication. Clinical communication is a systemic tool that directly affects patient safety and treatment compliance. Misunderstood instructions can contribute to medical errors, while failure to understand the necessity of a treatment regimen can prevent patients from following it at home.'
    },
    {
      id: 'linear-model',
      heading: 'The Linear Model of Communication',
      content:
        'The basic linear model describes communication as a sequential movement of information from sender to receiver. The sender encodes an idea, transmits it through a channel, and the receiver decodes the message. The model provides a useful baseline, but the lesson emphasizes that healthcare communication is more complex because messages are not static objects and patients are not passive recipients.'
    },
    {
      id: 'bateson-transactional-model',
      heading: 'Bateson’s Circular Transactional Model',
      content:
        'Bateson’s circular transactional model upgrades the simple linear system by treating communication as a simultaneous exchange in which participants continuously influence one another. The clinician brings biases, medical jargon, and assumptions about authority. The patient brings culture, personal values, and previous healthcare experiences. As a message passes through these distinct internal filters, its meaning can change or degrade. The message sent may therefore differ substantially from the message received.'
    },
    {
      id: 'communication-noise',
      heading: 'Communication Noise & Message Degradation',
      content:
        'Communication is further affected by clinical noise. Physical pain, anxiety, and a chaotic emergency environment can interfere with the communication channel. These factors can prevent the patient from accurately processing or decoding information. Because meaning is not passively transferred, clinicians must actively identify interference and continuously negotiate mutual understanding.'
    },
    {
      id: 'teach-back-feedback',
      heading: 'Teach-Back: Closing the Feedback Loop',
      content:
        'The teach-back method creates an active feedback loop. Instead of assuming that the patient understood the instructions, the clinician asks the patient to explain the instructions back. This verifies the shape of the message that survived the various filters. Teach-back therefore transforms communication from one-way information delivery into an active process of checking and repairing understanding.'
    },
    {
      id: 'person-situation-model',
      heading: 'Hargie & Dixon’s Person-Situation Model',
      content:
        'Individual psychology is only one layer of clinical communication. Hargie and Dixon’s person-situation model places the communicating dyad inside an environmental boundary. Time is a major constraint: a standard 10-minute outpatient encounter limits how much information can be successfully negotiated. Physical space also matters; a trauma bay filled with monitors and overlapping voices demands a different communication strategy from a quiet private consultation room. Organizational rules and privacy laws further constrain what information can enter the communication channel.'
    },
    {
      id: 'dynamic-encoding',
      heading: 'Dynamic Encoding in Clinical Context',
      content:
        'A skilled clinician reads environmental pressures in real time and dynamically changes how information is encoded. The communication strategy must fit the immediate context rather than assuming that the same message format works in every clinical environment. Time, space, privacy, organizational requirements, and patient circumstances all influence how information should be delivered.'
    },
    {
      id: 'who-icf',
      heading: 'WHO ICF: Scaling Communication Across Care Systems',
      content:
        'A patient’s healthcare journey rarely ends with one clinician. Diagnoses and treatment plans can move across multiple specialists. The World Health Organization’s ICF framework is presented as a macro-level system that maps health across physical functioning, environmental factors, and social support systems. The individual clinician-patient interaction is one node within this larger matrix. A standardized communication language helps doctors, physical therapists, social workers, and other professionals decode patient status consistently and reduces the risk of critical context being lost during handoffs.'
    },
    {
      id: 'therapeutic-chain',
      heading: 'The Person-Centered Therapeutic Chain',
      content:
        'The communication models converge on a practical person-centered sequence. Negotiated mutual understanding comes first. This establishes a shared reality regarding the diagnosis and the patient’s lived experience. That shared reality supports a functional therapeutic relationship based on safety and respect. Once the relationship is secure, clinicians and patients can establish person-centered goals that map clinical targets onto actual daily needs. When treatment targets align with personal priorities, compliance can increase and contribute to positive health outcomes. Skipping an earlier step can weaken the entire chain.'
    },
    {
      id: 'five-behavioral-pillars',
      heading: 'Five Behavioral Pillars',
      content:
        'A functional therapeutic relationship is supported by five behavioral pillars: respect, empathy, trust, collaboration, and empowerment. Respect involves maintaining unconditional positive regard for the patient’s context. Empathy involves sensing the patient’s emotional world from their perspective rather than projecting sympathy. Trust depends on a reliable and secure professional boundary over time. Collaboration means deliberately sharing clinical power and constructing the treatment plan with the patient rather than for them. Empowerment equips the patient with knowledge and authority to participate in informed decisions and shifts them from passive data receivers to active agents in their recovery.'
    },
    {
      id: 'three-communication-scales',
      heading: 'Three Operational Scales of Communication',
      content:
        'Safe clinical communication must operate across three distinct scales. The first is the interpersonal dyad: one-to-one communication between provider and patient. The second is group dynamics: the process by which multidisciplinary teams synchronize. The third is mass communication: the translation of complex medical information for entire populations. Failure at any of these levels can weaken the safety net surrounding the patient.'
    },
    {
      id: 'interpersonal-dyad',
      heading: 'The Interpersonal Dyad & Therapeutic Boundaries',
      content:
        'The provider-patient dyad is governed by therapeutic boundaries that distinguish clinical interaction from ordinary social interaction. Physical space is one component of these boundaries. Edward Hall’s concept of proxemics provides a framework for understanding interpersonal distance and the meaning communicated through proximity.'
    },
    {
      id: 'proxemics',
      heading: 'Proxemics in the Clinical Environment',
      content:
        'The lesson describes the social zone as approximately 4 to 12 feet, used for impersonal professional transactions. The personal zone is described as approximately 1.5 to 4 feet and can be used for personal health discussions or explaining a procedure. Physical examination requires entering a much closer intimate zone. Crossing into this restricted space without warning or consent can trigger a biological threat response and increase anxiety or defensiveness. Clinicians can reduce this risk by narrating actions before physical contact, for example explaining that they are going to listen to the patient’s lungs.'
    },
    {
      id: 'devito-six-stage-model',
      heading: 'DeVito’s Six-Stage Relationship Model',
      content:
        'Therapeutic relationships also follow a structured timeline. The lesson presents DeVito’s six-stage model as a framework for managing clinical relationships from beginning to end. Contact uses predictable everyday communication to establish an initial baseline and assess the patient’s state. Involvement uses guided questioning to uncover the reason for the visit and build mutuality. Intimacy represents deep therapeutic trust and empathy while maintaining professional boundaries rather than becoming a social friendship. Deterioration functions as a structured off-ramp that prepares the patient for discharge or transfer. Repair can occur when a relationship experiences disruption such as unexpected readmission, followed by dissolution when care formally ends.'
    },
    {
      id: 'relationship-termination',
      heading: 'Why Structured Closure Matters',
      content:
        'The lesson emphasizes that failure to structure the final stage can contribute to patient overdependency. For clinicians, carrying unresolved emotional weight from previous patients can also contribute to emotional burnout. Formal boundaries and structured closure therefore protect both the therapeutic relationship and the professional.'
    },
    {
      id: 'multidisciplinary-teams',
      heading: 'Multidisciplinary Team Dynamics',
      content:
        'As communication scales from the individual dyad to multidisciplinary teams, the environment becomes more complex. High-performing teams do not emerge simply by assembling skilled specialists; they require procedural development. Tuckman and Jensen’s model describes a progression through forming, storming, norming, performing, and eventual closure or disbanding. Conflict during storming is presented as a necessary developmental phase rather than something that should be artificially suppressed.'
    },
    {
      id: 'tuckman-jensen',
      heading: 'Tuckman & Jensen: Forming to Performing',
      content:
        'During forming, team members orient themselves, become acquainted, and clarify the mission. Storming involves inevitable clinical conflict and friction. Norming establishes internal rules for patient safety, workflow, and confidentiality. Performing is the stage in which the team can achieve effective clinical production. The team eventually moves toward closure or disbanding. Suppressing the storming phase to maintain superficial politeness can prevent teams from developing genuine rules and trust, potentially compromising patient care.'
    },
    {
      id: 'team-psychological-drivers',
      heading: 'Psychological Drivers of Team Development',
      content:
        'The lesson identifies three sequential team needs through psychologist William Schutz: inclusion, control, and affection. Inclusion addresses whether members feel they belong. Control concerns who leads and how authority is distributed. Affection concerns the development of mutual trust. A task-oriented perspective is also described as emphasizing movement through dissatisfaction toward resolution. These psychological and task processes help explain why teams must work through conflict rather than simply avoid it.'
    },
    {
      id: 'health-literacy',
      heading: 'Health Literacy & Mass Communication',
      content:
        'The final communication tier involves discharge packets, medication inserts, and public health warnings. Success at this scale depends heavily on health literacy. The lesson highlights a substantial mismatch between highly educated clinicians and the reading abilities of the population they serve. Patients can experience a perfectly executed hospital stay and still encounter serious medication-management problems at home if they cannot understand the discharge instructions.'
    },
    {
      id: 'plain-language-materials',
      heading: 'Designing Understandable Clinical Materials',
      content:
        'The engineering response described in the lesson is to make mass clinical materials accessible at approximately a fifth- to sixth-grade reading level. Practitioners can improve comprehension by using active voice, breaking complex information into digestible chunks, and using clean, legible typography. If a clinical document cannot be understood by its intended audience, the communication transfer has effectively failed even when the medical content itself is technically correct.'
    },
    {
      id: 'telehealth-bandwidth',
      heading: 'Telehealth & Communication Bandwidth',
      content:
        'Telehealth changes the communication channel by reducing geographic context and potentially degrading nonverbal information. The lesson presents a bandwidth-style comparison in which face-to-face communication retains the richest nonverbal channel, telephone communication removes much of the visual channel, and written or digital text removes vocal tone as well. The central implication is that communication protocols must become more deliberate as the channel becomes more constrained.'
    },
    {
      id: 'telephone-triage',
      heading: 'Telephone Triage & Active Listening',
      content:
        'Telephone communication requires clinicians to compensate for the loss of visual information through active listening. Attention shifts toward remaining vocal and paralinguistic cues such as rapid breathing, unusual pauses, and vocal signs of pain. The lesson also describes a protocol of opening the interaction by explicitly stating the clinician’s name and department, helping establish context and professional identity.'
    },
    {
      id: 'text-messaging',
      heading: 'Text Messaging & SMS Protocol',
      content:
        'Text communication operates with even fewer expressive cues. The lesson recommends strict rules for clinical SMS: use the patient’s name, keep phrasing concise, remove medical abbreviations, and explicitly identify the clinic in the sign-off to establish verifiable authority. These rules compensate for the ambiguity created by the limited communication channel.'
    },
    {
      id: 'video-teleconferencing',
      heading: 'Video & Teleconferencing',
      content:
        'Adding a camera does not automatically eliminate communication problems. Video systems still require structural discipline to prevent confusion and missed information. The host should introduce remote sites and participants should state their names before speaking. Explicit verbal confirmation loops and personalized farewells can help ensure that critical understanding is maintained despite connection delays or other technical limitations.'
    },
    {
      id: 'email-fax',
      heading: 'Email & Fax: Permanent Clinical Communication',
      content:
        'Email and fax communications should not be treated as casual messages. The lesson characterizes them as permanent and discoverable legal documents that may lack inherent privacy and can potentially be seen by unintended readers in household or office environments. The described safeguards include checking spelling and grammar, securing prior consent for sensitive information, and using detailed confidentiality disclaimers.'
    },
    {
      id: 'communication-as-safety-system',
      heading: 'Communication as a Patient Safety System',
      content:
        'Across interpersonal, team, population, and remote communication settings, disciplined protocols compensate for information that can be distorted or lost. A healthcare professional cannot assume that a message sent is automatically a message understood. Communication must be engineered to match the limitations of the channel, the environment, and the audience. When these principles are applied consistently, communication becomes an active patient-safety intervention rather than a simple exchange of data.'
    }
  ],

  keyPoints: [
    'Delivering medical facts is not equivalent to achieving patient understanding',
    'Clinical communication directly affects patient safety, medical errors, and treatment compliance',
    'The linear model describes sender → encoding → channel → receiver → decoding, but healthcare communication requires a more interactive framework',
    'Bateson’s circular transactional model treats clinician and patient as simultaneous participants who continuously influence one another',
    'Clinician assumptions, patient culture and values, prior experiences, pain, anxiety, and environmental chaos can distort messages',
    'Teach-back creates a feedback loop that verifies what information the patient actually received and understood',
    'Hargie and Dixon’s person-situation model emphasizes environmental constraints such as time, space, organizational rules, and privacy',
    'The WHO ICF provides a macro-level framework for communicating health status across multiple professionals and care settings',
    'Person-centered practice follows a therapeutic chain: mutual understanding → relationship → goals → compliance → positive outcomes',
    'The five behavioral pillars are respect, empathy, trust, collaboration, and empowerment',
    'Clinical communication operates across interpersonal dyads, group dynamics, and mass communication',
    'Proxemics helps clinicians manage physical distance and therapeutic boundaries',
    'DeVito’s relationship model structures the beginning, development, repair, and closure of clinical relationships',
    'Tuckman and Jensen’s model explains team development through forming, storming, norming, performing, and closure',
    'Health literacy limits can cause clinically important information to fail after discharge',
    'Plain-language design, active voice, short information chunks, and legible typography improve mass clinical communication',
    'Telephone, SMS, video, email, and fax require modality-specific protocols because nonverbal information and contextual cues are reduced',
    'A message sent is not automatically a message understood; communication must be actively verified and engineered for patient safety'
  ],

  rapid: [
    'Clinical Communication ≠ Information Delivery',
    'Linear Model = Sender → Encode → Channel → Decode → Receiver',
    'Transactional Model = Continuous Mutual Influence + Filters + Feedback',
    'Teach-Back = Send → Patient Explains Back → Verify Understanding',
    'Therapeutic Chain = Mutual Understanding → Relationship → Goals → Compliance → Outcomes',
    'Five Pillars = Respect + Empathy + Trust + Collaboration + Empowerment',
    'Communication Scales = Interpersonal → Team → Mass Communication',
    'Team Development = Forming → Storming → Norming → Performing → Closure',
    'Low-Bandwidth Channels Require More Explicit Protocol',
    'Patient Safety Principle = Message Sent ≠ Message Understood'
  ],

  animation: 'clinical-communication-frameworks',

  quiz: [
    {
      question: 'Why is delivering medical facts not sufficient for effective clinical communication?',
      options: [
        'Medical facts are never useful to patients',
        'Information can be delivered accurately without reaching the patient’s comprehension',
        'Patients should not receive discharge instructions',
        'Only written communication is clinically valid'
      ],
      answer: 1,
      explanation:
        'The lesson distinguishes information delivery from communication. A clinician can accurately recite medical facts while the patient fails to comprehend or act on them.'
    },
    {
      question: 'What is the main limitation of the basic linear model of communication in healthcare?',
      options: [
        'It contains too many participants',
        'It assumes communication is a simple sequential transfer rather than a continuously influenced interaction',
        'It requires feedback at every stage',
        'It focuses exclusively on environmental noise'
      ],
      answer: 1,
      explanation:
        'The linear model treats information as moving sequentially from sender to receiver. The lesson argues that clinical communication requires a circular transactional model because participants continuously influence one another.'
    },
    {
      question: 'What does Bateson’s circular transactional model emphasize?',
      options: [
        'The patient is a passive receiver',
        'Clinicians and patients simultaneously influence the communication process',
        'Medical jargon always improves understanding',
        'Messages remain unchanged as they travel through a channel'
      ],
      answer: 1,
      explanation:
        'Bateson’s transactional framework views communication as a continuous process in which both participants bring internal filters and influence the interaction.'
    },
    {
      question: 'Which intervention creates an active feedback loop to verify patient understanding?',
      options: [
        'Teach-back',
        'Medical jargon',
        'Physical proximity',
        'Written discharge paperwork alone'
      ],
      answer: 0,
      explanation:
        'Teach-back asks the patient to explain instructions back to the clinician, allowing the clinician to verify the message that was actually understood.'
    },
    {
      question: 'Which is an example of clinical communication noise?',
      options: [
        'Teach-back',
        'Patient anxiety or physical pain',
        'A clear explanation',
        'Mutual goal setting'
      ],
      answer: 1,
      explanation:
        'The lesson identifies physical pain, anxiety, and chaotic clinical environments as forms of noise that can distort communication.'
    },
    {
      question: 'According to the person-centered therapeutic chain, what should come first?',
      options: [
        'Dictating treatment goals',
        'Negotiated mutual understanding',
        'Discharge',
        'Mass communication'
      ],
      answer: 1,
      explanation:
        'The sequence begins with negotiated mutual understanding, followed by a therapeutic relationship, person-centered goals, compliance, and positive health outcomes.'
    },
    {
      question: 'Which set contains the five behavioral pillars of person-centered practice?',
      options: [
        'Diagnosis, medication, compliance, billing, discharge',
        'Respect, empathy, trust, collaboration, empowerment',
        'Speed, authority, distance, control, documentation',
        'Privacy, technology, coding, billing, referral'
      ],
      answer: 1,
      explanation:
        'The five pillars identified in the lesson are respect, empathy, trust, collaboration, and empowerment.'
    },
    {
      question: 'What is the purpose of collaboration in person-centered clinical communication?',
      options: [
        'To allow the clinician to make all decisions independently',
        'To deliberately share clinical power and construct the treatment plan with the patient',
        'To eliminate professional boundaries',
        'To replace clinical expertise with patient preference alone'
      ],
      answer: 1,
      explanation:
        'Collaboration means negotiated sharing of clinical power and constructing the treatment plan with the patient rather than for them.'
    },
    {
      question: 'Why is proxemics important in clinical care?',
      options: [
        'It determines medication dosage',
        'It provides a framework for managing physical proximity and therapeutic boundaries',
        'It eliminates the need for consent',
        'It applies only to social relationships'
      ],
      answer: 1,
      explanation:
        'Proxemics helps clinicians understand and manage physical distance. Entering close physical space without warning or consent can increase perceived threat and defensiveness.'
    },
    {
      question: 'Which sequence represents Tuckman and Jensen’s team development model as presented in the lesson?',
      options: [
        'Contact → Involvement → Intimacy → Dissolution',
        'Forming → Storming → Norming → Performing → Closure',
        'Encoding → Channel → Decoding → Receiver',
        'Assessment → Diagnosis → Prescription → Discharge'
      ],
      answer: 1,
      explanation:
        'The team development sequence presented is forming, storming, norming, performing, followed eventually by closure or disbanding.'
    },
    {
      question: 'Why should clinical teams not artificially suppress the storming phase?',
      options: [
        'Storming eliminates the need for rules',
        'Conflict helps teams work toward genuine rules, trust, and functional coordination',
        'Storming is the final stage of team development',
        'Conflict always improves patient outcomes automatically'
      ],
      answer: 1,
      explanation:
        'The lesson presents storming as a necessary phase in which teams work through conflict and friction before establishing rules and trust during norming.'
    },
    {
      question: 'What is a major consequence of inadequate health literacy in mass clinical communication?',
      options: [
        'Patients automatically become more adherent',
        'Patients may misunderstand discharge or medication instructions and mismanage treatment at home',
        'Clinical documents become easier to understand',
        'Nonverbal communication increases'
      ],
      answer: 1,
      explanation:
        'The lesson describes how patients can leave a successful hospital stay but struggle with medication management because they cannot understand written instructions.'
    },
    {
      question: 'Which strategy is recommended for improving mass clinical materials?',
      options: [
        'Increase medical jargon',
        'Use active voice, digestible information chunks, and clean typography',
        'Write at the highest possible reading level',
        'Remove all instructions'
      ],
      answer: 1,
      explanation:
        'The lesson recommends accessible reading levels, active voice, digestible chunks, and clean, legible typography.'
    },
    {
      question: 'Why does telephone triage require stronger active listening?',
      options: [
        'Telephone communication contains more visual information than face-to-face care',
        'The clinician loses much of the visual/nonverbal channel and must attend closely to vocal and paralinguistic cues',
        'Telephone calls eliminate the need for context',
        'Patients cannot communicate verbally by telephone'
      ],
      answer: 1,
      explanation:
        'Telephone communication removes much of the visual channel, so clinicians must compensate by listening for cues such as rapid breathing, unusual pauses, and vocal signs of pain.'
    },
    {
      question: 'Which practice is recommended for clinical SMS communication?',
      options: [
        'Use unexplained medical abbreviations',
        'Keep messages concise, use the patient’s name, avoid abbreviations, and identify the clinic',
        'Include as much unrelated information as possible',
        'Assume the recipient knows who sent the message'
      ],
      answer: 1,
      explanation:
        'The lesson recommends concise phrasing, the patient’s name, removal of medical abbreviations, and explicit clinic identification to reduce ambiguity.'
    },
    {
      question: 'What is the central patient-safety principle of the chapter?',
      options: [
        'A message sent is automatically a message understood',
        'Clinical communication is mainly social conversation',
        'A message sent is not automatically a message understood',
        'More information always produces better outcomes'
      ],
      answer: 2,
      explanation:
        'The chapter repeatedly emphasizes that communication must be actively verified and engineered around the limitations of the channel, environment, and audience.'
    }
  ]
};

export const lessons = [clinicalCommunicationFrameworksLesson];

export const topic = 'Healthcare Psychology';

export default clinicalCommunicationFrameworksLesson;
