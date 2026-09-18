// AnatomicalPositionPlanes.js

export const anatomicalPositionPlanesLesson = {
  id: 'anatomical-position-planes-directional-terms',
  isNew: true,
  isLatest: false,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-17',
  addedOrder: 12,

  categoryId: 'anatomy_physiology',
  topic: 'Anatomy & Physiology',

  title: 'Anatomical Position, Planes and Directional Terms',
  subtitle: 'The Fixed Coordinate System of the Human Body',

  level: 'Beginner',
  time: '12–15 min',

  description:
    'Learn how healthcare professionals describe the exact location and relationship of structures in the human body using anatomical position, body planes, directional terms, regional landmarks, and abdominal mapping. This lesson turns the moving human body into a standardized spatial reference system used in clinical examination, surgery, diagnostics, and medical imaging.',

  video: {
    youtubeId: 'JkCzL_0EwT0',
    title: 'Anatomical Position, Planes and Directional Terms',
  },

  objectives: [
    'Explain why medicine requires a fixed spatial reference system.',
    'Define the anatomical position.',
    'Understand why anatomical position remains the reference even when the patient changes physical position.',
    'Identify the three major anatomical planes.',
    'Differentiate sagittal, midsagittal, parasagittal, frontal, and transverse planes.',
    'Explain the difference between cross-sectional and longitudinal sections.',
    'Define superior and inferior.',
    'Define anterior and posterior.',
    'Define medial and lateral.',
    'Define proximal and distal.',
    'Define superficial and deep.',
    'Differentiate parietal and visceral membranes.',
    'Recognize important anatomical regional terms.',
    'Understand the four abdominal quadrants.',
    'Understand the nine abdominal regions.',
    'Explain how anatomical terminology creates a standardized clinical communication system.',
    'Apply multiple anatomical directional terms to describe a specific location.',
    'Connect anatomical terminology with medical imaging and clinical documentation.',
  ],

  anatomicalSteps: [
    {
      step: 1,
      title: 'Establish Anatomical Position',
      description:
        'Use the standardized reference stance—standing erect, feet parallel and forward, arms at sides with palms turned forward, head and eyes forward—as the fixed coordinate system for describing all human anatomy.',
    },
    {
      step: 2,
      title: 'Select the Anatomical Plane',
      description:
        'Determine whether the structure or section is oriented in the sagittal (left/right), frontal/coronal (anterior/posterior), or transverse/axial (superior/inferior) plane.',
    },
    {
      step: 3,
      title: 'Apply Directional Terminology',
      description:
        'Use standardized directional pairs—superior/inferior, anterior/posterior, medial/lateral, and proximal/distal—to specify relative relationships regardless of the patient’s real-time posture.',
    },
    {
      step: 4,
      title: 'Differentiate Depths and Serous Membranes',
      description:
        'Distinguish superficial structures (near the surface) from deep structures, and differentiate outer cavity-lining parietal layers from inner organ-covering visceral layers.',
    },
    {
      step: 5,
      title: 'Identify Surface Landmarks and Regions',
      description:
        'Reference specific anatomical landmarks (cephalic, cervical, thoracic, brachial, antecubital, femoral, patellar, popliteal, lumbar, gluteal) to localize symptoms or clinical procedures.',
    },
    {
      step: 6,
      title: 'Partition the Abdomen into Quadrants',
      description:
        'Divide the abdomen into four clinical quadrants (RUQ, LUQ, RLQ, LLQ) using transumbilical and median planes to correlate pain with visceral pathology (e.g., appendicitis in the RLQ, cholecystitis in the RUQ).',
    },
    {
      step: 7,
      title: 'Map the Nine Abdominopelvic Regions',
      description:
        'Use subcostal, transtubercular, and midclavicular lines to define nine precise regions: epigastric, umbilical, hypogastric, and paired hypochondriac, lumbar, and iliac/inguinal regions.',
    },
    {
      step: 8,
      title: 'Correlate with Radiology and Clinical Documentation',
      description:
        'Translate anatomical planes directly into CT, MRI, and ultrasound imaging orientations (axial, coronal, sagittal) and clear surgical operative documentation.',
    },
  ],

  frameworks: [
    {
      id: 'ANATOMICAL-PLANES',
      name: 'ANATOMICAL-PLANES',
      description: 'The three cardinal intersecting axes that section the human body in space.',
      items: [
        { init: 'S', label: 'Sagittal (Midsagittal & Parasagittal) — divides into Left & Right' },
        { init: 'F', label: 'Frontal (Coronal) — divides into Anterior (Front) & Posterior (Back)' },
        { init: 'T', label: 'Transverse (Horizontal / Axial) — divides into Superior & Inferior' },
        { init: 'O', label: 'Oblique — cuts at an angle between cardinal planes' },
      ],
    },
    {
      id: 'DIRECTIONAL-PAIRS',
      name: 'DIRECTIONAL-PAIRS',
      description: 'Paired relational terms used to define relative location in the body.',
      items: [
        { init: 'S/I', label: 'Superior (Cranial) vs Inferior (Caudal)' },
        { init: 'A/P', label: 'Anterior (Ventral) vs Posterior (Dorsal)' },
        { init: 'M/L', label: 'Medial (Toward Midline) vs Lateral (Away from Midline)' },
        { init: 'P/D', label: 'Proximal (Closer to Trunk/Origin) vs Distal (Farther along Limb)' },
        { init: 'S/D', label: 'Superficial (Near Surface) vs Deep (Internal)' },
        { init: 'I/C', label: 'Ipsilateral (Same Side) vs Contralateral (Opposite Side)' },
      ],
    },
    {
      id: 'ABDOMINAL-QUADRANTS',
      name: 'ABDOMINAL-QUADRANTS',
      description: 'The 4 clinical divisions used for rapid physical examination and pain triage.',
      items: [
        { init: 'RUQ', label: 'Right Upper Quadrant (Liver, Gallbladder, Duodenum, R. Kidney)' },
        { init: 'LUQ', label: 'Left Upper Quadrant (Stomach, Spleen, Pancreas, L. Kidney)' },
        { init: 'RLQ', label: 'Right Lower Quadrant (Appendix, Cecum, R. Ovary/Tube, R. Ureter)' },
        { init: 'LLQ', label: 'Left Lower Quadrant (Sigmoid Colon, L. Ovary/Tube, L. Ureter)' },
      ],
    },
    {
      id: 'NINE-REGIONS',
      name: 'NINE-REGIONS',
      description: 'The 3x3 anatomical grid for precise localization of abdominopelvic viscera.',
      items: [
        { init: 'EPI', label: 'Epigastric (Superior Central — Stomach, liver, pancreas)' },
        { init: 'UMB', label: 'Umbilical (Central — Small intestine, transverse colon)' },
        { init: 'HYP', label: 'Hypogastric / Pubic (Inferior Central — Bladder, uterus)' },
        { init: 'HYPO-R/L', label: 'Right & Left Hypochondriac (Flanking epigastric under ribs)' },
        { init: 'LUM-R/L', label: 'Right & Left Lumbar / Lateral (Flanking umbilical)' },
        { init: 'ILI-R/L', label: 'Right & Left Iliac / Inguinal (Flanking hypogastric in groin)' },
      ],
    },
    {
      id: 'SEROUS-MEMBRANES',
      name: 'SEROUS-MEMBRANES',
      description: 'The double-layered lining of ventral body cavities.',
      items: [
        { init: 'P', label: 'Parietal Layer — Lines the outer wall of the cavity' },
        { init: 'C', label: 'Cavity with Serous Fluid — Lubricating virtual space' },
        { init: 'V', label: 'Visceral Layer — Directly adheres to and covers the organ surface' },
      ],
    },
  ],

  sections: [
    {
      id: 'why-coordinate-system',
      heading: 'Why Medicine Demands a Universal Coordinate System',
      content: [
        'The human body is constantly moving, bending, turning, and assuming different postures—standing, sitting, lying supine on an operating table, or prone in an ICU bed.',
        'If a clinician describes a lesion as being "above the knee" or "on the left side," confusion arises if the reference changes with the patient’s body posture or the doctor’s vantage point.',
        'To prevent catastrophic surgical and diagnostic errors, medicine relies on a single, universally standardized coordinate system.',
        'In this system, all directional terms and anatomical descriptions are anchored to one fixed reference posture: the Anatomical Position.',
      ],
    },
    {
      id: 'anatomical-position-defined',
      heading: 'The Standard Anatomical Position Defined',
      content: [
        'In standard anatomical position, the body stands fully erect with the feet placed flat on the floor, slightly apart and pointing forward.',
        'The upper limbs rest at the sides of the trunk, and the palms of the hands face forward (anteriorly) with thumbs pointing away from the body (laterally).',
        'The head, face, and eyes are directed horizontally forward toward the observer.',
        'Crucial Clinical Rule: Regardless of how the patient is positioned in reality (prone, supine, laterally recumbent, or seated), all anatomical descriptions always assume the patient is in the standard anatomical position.',
      ],
    },
    {
      id: 'left-right-rule',
      heading: 'The Golden Rule of Anatomical Left and Right',
      content: [
        'In clinical medicine, "Right" and "Left" always refer strictly to the patient’s right and patient’s left—never the observer’s.',
        'When looking face-to-face at a patient, or viewing an anterior-posterior (AP) chest X-ray or CT scan, the patient’s right side is on your left side.',
        'Violating this rule is one of the leading historical causes of wrong-site surgeries (e.g., operating on the wrong kidney or limb).',
        'Modern surgical timeout safety checklists mandate verifying anatomical right versus left prior to any incision.',
      ],
    },
    {
      id: 'anatomical-planes-overview',
      heading: 'The Three Cardinal Anatomical Planes',
      content: [
        'Anatomical planes are imaginary flat surfaces that pass through the body in three perpendicular dimensions of space.',
        'Sectioning the body along these planes allows clinicians and anatomists to visualize internal relationships in two-dimensional slices.',
        'The three cardinal planes are the Sagittal plane, the Frontal (Coronal) plane, and the Transverse (Horizontal or Axial) plane.',
        'Any plane that cuts at an angle other than 90 degrees relative to these three cardinal planes is termed an Oblique plane.',
      ],
    },
    {
      id: 'sagittal-plane',
      heading: 'Sagittal Planes: Midsagittal and Parasagittal',
      content: [
        'A sagittal plane runs vertically from front to back, dividing the body or an organ into right and left portions.',
        'A midsagittal (median) plane passes directly through the exact midline of the body, dividing it into perfectly equal right and left halves.',
        'A parasagittal plane runs parallel to the midline but is offset, dividing the body into unequal right and left portions.',
        'In neuroimaging (such as MRI of the brain), a midsagittal section displays the corpus callosum, pituitary gland, brainstem, and fourth ventricle in pristine profile.',
      ],
    },
    {
      id: 'frontal-coronal-plane',
      heading: 'Frontal (Coronal) Plane',
      content: [
        'A frontal (or coronal) plane runs vertically from side to side, perpendicular to the sagittal plane.',
        'It divides the body or an organ into anterior (front) and posterior (back) portions.',
        'The term "coronal" comes from the coronal suture of the skull, which follows this plane like a crown.',
        'Coronal views are routinely used in clinical radiology to examine the bilateral symmetry of the lungs, pleural cavities, kidneys, and paranasal sinuses.',
      ],
    },
    {
      id: 'transverse-axial-plane',
      heading: 'Transverse (Horizontal or Axial) Plane',
      content: [
        'A transverse (horizontal) plane runs horizontally, perpendicular to both sagittal and frontal planes.',
        'It cuts horizontally across the body, dividing it into superior (upper) and inferior (lower) portions.',
        'In clinical radiology and computed tomography (CT), transverse sections are commonly called axial or cross-sectional slices.',
        'Standard CT scan viewing convention: Axial CT images are viewed looking up from the patient’s feet (the bottom of the slice), meaning the anterior side is at the top, posterior is at the bottom, the patient’s right is on the viewer’s left, and the patient’s left is on the viewer’s right.',
      ],
    },
    {
      id: 'directional-superior-inferior',
      heading: 'Superior (Cranial) vs. Inferior (Caudal)',
      content: [
        'Superior (cranial or cephalic) means toward the head or upper part of a structure or the body.',
        'For example, the heart is superior to the diaphragm; the forehead is superior to the nose.',
        'Inferior (caudal) means away from the head, or toward the lower part of a structure or the body.',
        'For example, the stomach is inferior to the lungs; the navel is inferior to the chin.',
        'These terms apply primarily to the axial skeleton (head, neck, and trunk).',
      ],
    },
    {
      id: 'directional-anterior-posterior',
      heading: 'Anterior (Ventral) vs. Posterior (Dorsal)',
      content: [
        'Anterior (ventral) means toward or at the front of the body.',
        'For example, the sternum (breastbone) is anterior to the heart; the patella is on the anterior knee.',
        'Posterior (dorsal) means toward or at the back of the body.',
        'For example, the esophagus is posterior to the trachea; the vertebral column is posterior to the abdominal aorta.',
        'In human bipeds, ventral is synonymous with anterior, and dorsal is synonymous with posterior. In quadrupeds (like cats or dogs), ventral faces the ground and dorsal faces the sky.',
      ],
    },
    {
      id: 'directional-medial-lateral',
      heading: 'Medial, Lateral, and Intermediate',
      content: [
        'Medial means toward or at the midline of the body (the imaginary vertical line dividing the body into right and left halves).',
        'For example, the sternum is medial to the ribs; the hallux (big toe) is on the medial side of the foot.',
        'Lateral means away from the midline of the body, toward the outer side.',
        'For example, the ears are lateral to the nose; the thumb (pollex) is lateral to the little finger in anatomical position.',
        'Intermediate describes a structure positioned between a more medial and a more lateral structure (e.g., the clavicle is intermediate between the sternum and the shoulder).',
      ],
    },
    {
      id: 'directional-proximal-distal',
      heading: 'Proximal vs. Distal: The Limb Coordinate Axis',
      content: [
        'Proximal and distal are reserved specifically for structures on the extremities (arms and legs) or along linear branching tubular systems (like blood vessels or the GI tract).',
        'Proximal means closer to the point of attachment of a limb to the body trunk, or closer to the point of origin.',
        'For example, the elbow is proximal to the wrist; the proximal tubule of the nephron is closer to the glomerulus.',
        'Distal means farther from the point of attachment of a limb to the trunk, or farther from the origin.',
        'For example, the ankle is distal to the knee; the fingers are distal to the palm.',
        'Crucial Distinction: Never use "superior" or "inferior" for the arms and legs if the limb can flex or rotate. Always use proximal and distal.',
      ],
    },
    {
      id: 'directional-superficial-deep',
      heading: 'Superficial vs. Deep: Depth Relative to Body Surface',
      content: [
        'Superficial (external) means toward or at the body surface.',
        'For example, the epidermis is superficial to the dermis; the ribs are superficial to the lungs.',
        'Deep (internal) means away from the body surface, more internal.',
        'For example, the skeletal muscles are deep to the subcutaneous fat; the aorta is deep to the rectus abdominis muscle.',
        'In surgical documentation, incisions and wound depths are classified based on the fascial planes they penetrate (e.g., superficial skin tear vs. deep fascial debridement).',
      ],
    },
    {
      id: 'serous-membranes',
      heading: 'Parietal vs. Visceral: Cavity Membranes',
      content: [
        'The closed ventral body cavities (thoracic and abdominopelvic) are lined by thin, double-layered serous membranes that secrete lubricating serous fluid.',
        'The Parietal layer lines the outer internal walls of the cavity (e.g., parietal pleura lines the thoracic wall; parietal peritoneum lines the abdominal wall).',
        'The Visceral layer covers and directly adheres to the external surface of the organs (viscera) inside the cavity (e.g., visceral pleura covers the lung; visceral pericardium covers the myocardium).',
        'Between the parietal and visceral layers lies a potential space filled with serous fluid. Inflammation of these membranes causes painful friction rubs (pleuritis, pericarditis, peritonitis).',
      ],
    },
    {
      id: 'abdominal-quadrants',
      heading: 'The Four Abdominal Quadrants',
      content: [
        'In emergency rooms and physical exams, clinicians rapidly triage abdominal pain using four quadrants divided by two intersecting lines through the umbilicus: the vertical median plane and the horizontal transumbilical plane.',
        'Right Upper Quadrant (RUQ): Contains the liver, gallbladder, head of pancreas, right kidney, and hepatic flexure of the colon. Tenderness here suggests cholecystitis or hepatitis.',
        'Left Upper Quadrant (LUQ): Contains the stomach, spleen, tail of pancreas, left kidney, and splenic flexure of the colon. Tenderness or trauma here raises suspicion for splenic rupture.',
        'Right Lower Quadrant (RLQ): Contains the cecum, appendix, right ovary/fallopian tube, and right ureter. Acute localized tenderness at McBurney’s point strongly indicates appendicitis.',
        'Left Lower Quadrant (LLQ): Contains the sigmoid colon, left ovary/fallopian tube, and left ureter. Pain here is classic for diverticulitis.',
      ],
    },
    {
      id: 'nine-regions',
      heading: 'The Nine Abdominopelvic Regions',
      content: [
        'For detailed anatomical localization, the abdomen is divided like a 3x3 tic-tac-toe grid using four planes: two vertical midclavicular lines, a horizontal subcostal line (under 10th costal cartilages), and a horizontal transtubercular line (across iliac tubercles).',
        'Superior row: Right Hypochondriac, Epigastric, Left Hypochondriac.',
        'Middle row: Right Lumbar (Lateral), Umbilical, Left Lumbar (Lateral).',
        'Inferior row: Right Iliac (Inguinal), Hypogastric (Pubic), Left Iliac (Inguinal).',
        'Epigastric pain commonly points to peptic ulcer disease, GERD, or pancreatitis; umbilical pain is the classic initial migratory site for early acute appendicitis.',
      ],
    },
    {
      id: 'clinical-application-imaging',
      heading: 'Connecting Terminology to Imaging and Surgery',
      content: [
        'Modern medical imaging tools—CT, MRI, PET, and Ultrasound—generate datasets rendered in orthogonal planes: axial (transverse), coronal (frontal), and sagittal.',
        'Radiologists describe lesions relative to surrounding structures using strict directional terms: "a 2 cm mass located in the lateral aspect of the right lobe of the liver, anterior to the inferior vena cava."',
        'In surgical timeouts and operative reports, using unambiguous anatomical language guarantees that the entire care team operates on the verified anatomical structure on the correct patient side.',
      ],
    },
  ],

  keyPoints: [
    'Standard anatomical position: body erect, feet forward, arms at sides, palms facing forward with thumbs lateral, gaze directed forward.',
    'Anatomical left and right always refer to the patient’s left and right, never the observer’s.',
    'The three cardinal planes are Sagittal (left/right), Frontal/Coronal (front/back), and Transverse/Axial (up/down).',
    'A midsagittal plane cuts directly along the midline into equal halves; parasagittal divides into unequal halves.',
    'Axial (transverse) CT slices are viewed as if looking up from the patient’s feet (patient’s right is on the viewer’s left).',
    'Superior (cranial) is toward the head; Inferior (caudal) is toward the lower body or tail.',
    'Anterior (ventral) is toward the front; Posterior (dorsal) is toward the back.',
    'Medial is toward the midline; Lateral is away from the midline.',
    'Proximal and distal apply strictly to limbs or branching tracts: proximal is closer to the trunk/origin; distal is farther away.',
    'The wrist is distal to the elbow; the hip is proximal to the knee.',
    'Superficial is toward the body surface; Deep is toward the interior of the body.',
    'Parietal serous membrane lines the cavity wall; Visceral serous membrane covers the organ surface.',
    'Abdominal quadrants are four: RUQ (gallbladder/liver), LUQ (spleen/stomach), RLQ (appendix/cecum), LLQ (sigmoid colon).',
    'The nine abdominal regions provide finer anatomical precision than the four quadrants.',
    'The epigastric region is superior to the umbilical region; the hypogastric region is inferior to the umbilical region.',
    'Right and left hypochondriac regions flank the epigastric region beneath the ribs.',
    'Right and left lumbar regions flank the umbilical region; right and left iliac (inguinal) regions flank the hypogastric region.',
    'Ipsilateral means on the same side of the body; Contralateral means on the opposite side.',
    'The right hand and right foot are ipsilateral; the right eye and left ear are contralateral.',
    'Oblique sections pass through the body or organ at an angle other than 90 degrees.',
    'In anatomical position, the radius and thumb are lateral; the ulna and pinky are medial.',
    'Serous fluid lubricates the virtual cavity between parietal and visceral serous membranes.',
    'McBurney’s point is in the RLQ, one-third of the distance from the anterior superior iliac spine to the umbilicus.',
    'Radiological orientation is universally standardized to prevent surgical wrong-site events.',
    'Universal Protocol mandates verifying anatomical site and laterality before all surgical procedures.',
  ],

  rapid: [
    'Anatomical stance = Erect + palms forward + thumbs lateral + feet parallel.',
    'Patient right/left = Patient’s orientation, NEVER observer’s.',
    'Sagittal plane = Divides into Right and Left portions.',
    'Midsagittal = Exact midline cut into equal right and left halves.',
    'Parasagittal = Off-center vertical cut into unequal right and left portions.',
    'Frontal (Coronal) plane = Divides into Anterior (front) and Posterior (back).',
    'Transverse (Axial) plane = Divides into Superior (top) and Inferior (bottom).',
    'Oblique plane = Any angular diagonal slice.',
    'Superior / Cranial = Toward the head.',
    'Inferior / Caudal = Toward the feet / lower body.',
    'Anterior / Ventral = Front of the body.',
    'Posterior / Dorsal = Back of the body.',
    'Medial = Toward the midline axis.',
    'Lateral = Away from the midline axis.',
    'Proximal = Closer to trunk or origin (limbs only).',
    'Distal = Farther from trunk or origin (limbs only).',
    'Superficial / Deep = Near surface vs internal.',
    'Parietal = Cavity wall lining.',
    'Visceral = Organ surface coating.',
    '4 Quadrants = RUQ (Liver/GB) | LUQ (Spleen/Stomach) | RLQ (Appendix) | LLQ (Sigmoid).',
    '9 Regions = 3 Rows (Hypochondriac/Epigastric | Lumbar/Umbilical | Iliac/Hypogastric).',
    'Ipsilateral = Same side | Contralateral = Opposite side.',
  ],

  animation: 'anatomical-position-planes',

  quiz: [
    {
      question: 'Which of the following describes the standard anatomical position?',
      options: [
        'Lying supine with arms folded across the chest and feet flexed',
        'Standing erect, feet pointing forward, arms at sides with palms facing forward, gaze forward',
        'Sitting upright with palms resting on knees and head turned laterally',
        'Standing with palms facing backward and feet wide apart',
      ],
      answer: 1,
      explanation:
        'In the standard anatomical position, the human body is upright, feet slightly separated and pointing forward, upper limbs at the sides with palms turned forward (thumbs lateral), and head facing anteriorly.',
    },
    {
      question: 'When looking at an anterior-posterior (AP) chest X-ray, where is the patient’s heart (anatomically left) located on the display?',
      options: [
        'On the viewer’s right side',
        'On the viewer’s left side',
        'Directly in the vertical center only',
        'At the top of the image',
      ],
      answer: 0,
      explanation:
        'Anatomical left and right always refer to the patient’s own left and right. Since the patient faces the observer in an AP view, the patient’s left side corresponds to the viewer’s right side.',
    },
    {
      question: 'Which anatomical plane divides the body into anterior and posterior portions?',
      options: [
        'Midsagittal plane',
        'Transverse plane',
        'Frontal (coronal) plane',
        'Oblique plane',
      ],
      answer: 2,
      explanation:
        'The frontal or coronal plane runs vertically from side to side and divides the body into anterior (front) and posterior (back) sections.',
    },
    {
      question: 'How does a midsagittal plane differ from a parasagittal plane?',
      options: [
        'A midsagittal plane is horizontal, while a parasagittal plane is vertical',
        'A midsagittal plane divides into equal left and right halves on the midline; a parasagittal plane divides into unequal left and right portions',
        'A midsagittal plane divides front from back; a parasagittal plane divides top from bottom',
        'There is no difference; they are interchangeable terms',
      ],
      answer: 1,
      explanation:
        'Both are vertical sagittal planes dividing the body into right and left, but the midsagittal plane passes directly along the midline creating equal halves, whereas parasagittal planes are offset from the midline.',
    },
    {
      question: 'In standard viewing of an axial (transverse) CT slice of the abdomen, from what vantage point is the slice viewed?',
      options: [
        'From above the patient’s head looking down',
        'From the patient’s feet looking up toward the head',
        'From the patient’s right side looking across',
        'From behind the patient’s back looking forward',
      ],
      answer: 1,
      explanation:
        'Standard CT conventions display axial images as viewed from the patient’s feet looking up: anterior is at the top, posterior at the bottom, the patient’s right is on the viewer’s left, and the patient’s left is on the viewer’s right.',
    },
    {
      question: 'Which directional term correctly describes the relationship of the elbow to the wrist?',
      options: [
        'The elbow is superior to the wrist',
        'The elbow is distal to the wrist',
        'The elbow is proximal to the wrist',
        'The elbow is medial to the wrist',
      ],
      answer: 2,
      explanation:
        'On extremities, proximal means closer to the point of attachment to the trunk. The elbow is closer to the shoulder girdle than the wrist is, making the elbow proximal to the wrist.',
    },
    {
      question: 'In anatomical position, what is the relationship of the thumb (pollex) to the little finger (pinky)?',
      options: [
        'The thumb is medial to the little finger',
        'The thumb is lateral to the little finger',
        'The thumb is proximal to the little finger',
        'The thumb is posterior to the little finger',
      ],
      answer: 1,
      explanation:
        'Because the palms face anteriorly in anatomical position, the thumbs point outward away from the midline, making the thumb lateral to the pinky finger.',
    },
    {
      question: 'Which of the following correctly pairs opposite directional terms?',
      options: [
        'Anterior — Inferior',
        'Proximal — Distal',
        'Superior — Medial',
        'Superficial — Lateral',
      ],
      answer: 1,
      explanation:
        'Proximal (closer to attachment/origin) and distal (farther from attachment/origin) are opposite directional terms used for limbs and tubular branching systems.',
    },
    {
      question: 'What is the term for a structure on the same side of the body as another structure?',
      options: [
        'Contralateral',
        'Bilateral',
        'Ipsilateral',
        'Unilateral',
      ],
      answer: 2,
      explanation:
        'Ipsilateral means located on the same side of the body. For example, the right gallbladder and right kidney are ipsilateral.',
    },
    {
      question: 'Which serous membrane layer directly coats and adheres to the external surface of an organ?',
      options: [
        'Parietal layer',
        'Visceral layer',
        'Epidermal layer',
        'Dural layer',
      ],
      answer: 1,
      explanation:
        'The visceral serous membrane directly adheres to and envelops the organ (viscus), while the parietal layer lines the internal surface of the body cavity wall.',
    },
    {
      question: 'A patient presents with acute fever and sharp right lower quadrant (RLQ) abdominal pain. Which organ is most likely inflamed?',
      options: [
        'Spleen',
        'Gallbladder',
        'Appendix',
        'Sigmoid colon',
      ],
      answer: 2,
      explanation:
        'The vermiform appendix is located in the Right Lower Quadrant (RLQ). Acute inflammation of the appendix (appendicitis) classically produces RLQ pain centered around McBurney’s point.',
    },
    {
      question: 'Which abdominal quadrant contains the spleen and the stomach?',
      options: [
        'Right Upper Quadrant (RUQ)',
        'Left Upper Quadrant (LUQ)',
        'Right Lower Quadrant (RLQ)',
        'Left Lower Quadrant (LLQ)',
      ],
      answer: 1,
      explanation:
        'The Left Upper Quadrant (LUQ) contains the stomach, spleen, tail of pancreas, left kidney, and splenic flexure of the colon.',
    },
    {
      question: 'In the nine abdominopelvic regions, which region is located directly superior to the umbilical region?',
      options: [
        'Hypogastric region',
        'Epigastric region',
        'Right hypochondriac region',
        'Left lumbar region',
      ],
      answer: 1,
      explanation:
        'The epigastric region (meaning "above the stomach") is the upper central region located directly superior to the umbilical region.',
    },
    {
      question: 'Which region lies immediately inferior to the umbilical region in the nine-region system?',
      options: [
        'Epigastric region',
        'Right iliac region',
        'Hypogastric (pubic) region',
        'Left hypochondriac region',
      ],
      answer: 2,
      explanation:
        'The hypogastric (or pubic) region is the lower central region located directly inferior to the umbilical region.',
    },
    {
      question: 'What is the relationship between the sternum and the vertebral column?',
      options: [
        'The sternum is posterior to the vertebral column',
        'The sternum is anterior to the vertebral column',
        'The sternum is distal to the vertebral column',
        'The sternum is lateral to the vertebral column',
      ],
      answer: 1,
      explanation:
        'The sternum (breastbone) is situated on the front of the thorax, making it anterior (ventral) to the posterior vertebral column.',
    },
    {
      question: 'Why is it incorrect to say that the wrist is "superior" to the fingers?',
      options: [
        'Because the fingers have more bones than the wrist',
        'Because if the arm is raised above the head, the directional relationship relative to gravity inverts, whereas "proximal" remains true regardless of limb position',
        'Because directional terms only apply to internal organs',
        'Because superior can only be used for the head and neck',
      ],
      answer: 1,
      explanation:
        'On limbs, directional relationships relative to the trunk must be expressed as proximal or distal because limbs move through space. The wrist is always proximal to the fingers, whether the arm is hanging down or raised overhead.',
    },
    {
      question: 'A laceration that cuts through the epidermis, dermis, and subcutaneous fat down to the deep fascia is classified relative to surface as:',
      options: [
        'Superficial laceration',
        'Deep laceration',
        'Contralateral laceration',
        'Bilateral laceration',
      ],
      answer: 1,
      explanation:
        'Structures or injuries extending away from the external surface into inner tissues and muscle fascia are termed deep.',
    },
    {
      question: 'Which anatomical section cuts diagonally at an angle between the cardinal planes?',
      options: [
        'Frontal section',
        'Transverse section',
        'Oblique section',
        'Midsagittal section',
      ],
      answer: 2,
      explanation:
        'An oblique section passes through the body or organ at an angle other than a strict 90-degree right angle to the horizontal and vertical planes.',
    },
    {
      question: 'The right lung and left lung are described as being:',
      options: [
        'Ipsilateral',
        'Contralateral',
        'Superficial to each other',
        'Proximal to each other',
      ],
      answer: 1,
      explanation:
        'Contralateral means on opposite sides of the midline. The right lung is contralateral to the left lung.',
    },
    {
      question: 'Why does the World Health Organization Surgical Safety Checklist mandate a "Time Out" before surgical incision?',
      options: [
        'To allow the surgeon to rest',
        'To verify the correct patient, correct procedure, and exact anatomical side/site to prevent wrong-site surgery',
        'To check the surgical billing codes',
        'To administer postoperative antibiotics',
      ],
      answer: 1,
      explanation:
        'The surgical Time Out is a mandatory safety check conducted immediately before incision to ensure the entire team agrees on the patient identity, procedure, and correct anatomical site/laterality.',
    },
  ],
};

export const lessons = [anatomicalPositionPlanesLesson];

export const topic = {
  id: 'anatomy_physiology',
  title: 'Anatomy & Physiology',
};

export default anatomicalPositionPlanesLesson;
