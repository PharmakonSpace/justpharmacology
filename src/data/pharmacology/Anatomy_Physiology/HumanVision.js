// HumanVision.js

export const humanVisionLesson = {
  id: 'human-vision',
  isNew: true,
  isLatest: false,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-13T00:00:00',
  addedOrder: 8,

  categoryId: 'anatomy_physiology',
  topic: 'Anatomy & Physiology',

  title: 'Human Vision',
  subtitle: 'From Light Capture to Retinal Transduction and Three-Dimensional Perception',
  level: 'Beginner',
  time: '15–18 min',
  stepsTitle: 'Eight-Stage Human Vision Physiological Sequence',
  stepsIcon: '👁️',

  description:
    'Human vision is an active physiological pipeline in which the eye focuses incoming light, photoreceptors convert photons into electrical signals, and neural pathways transmit and process those signals in the brain to create conscious, spatial and three-dimensional visual perception.',

  // ---------------------------------------------------------
  // VIDEO
  // ---------------------------------------------------------

  video: {
    youtubeId: 'lN4nKraf2js',
    title: 'Human Vision — From Light to Conscious Perception',
  },

  // ---------------------------------------------------------
  // LEARNING OBJECTIVES
  // ---------------------------------------------------------

  objectives: [
    'Understand vision as an active physiological pipeline rather than a passive camera-like process.',
    'Describe the three major stages of vision: optomechanical focusing, photochemical transduction, and neural processing.',
    'Identify the major structures of the fibrous, vascular, and sensory tunics of the eye.',
    'Explain the role of the cornea in light refraction.',
    'Describe the functions of aqueous humor and vitreous humor.',
    'Explain how the iris and pupil regulate the amount of light entering the eye.',
    'Understand accommodation and the role of the ciliary muscle, suspensory ligaments, and lens.',
    'Differentiate the functions of rods and cones.',
    'Explain how photoreceptors convert incoming light into electrical signals.',
    'Trace the pathway from photoreceptors through bipolar and ganglion cells to the optic nerve.',
    'Trace the visual pathway through the optic chiasma, optic tracts, thalamus, and optic radiations to the occipital cortex.',
    'Explain how binocular vision allows the brain to construct depth and three-dimensional perception.',
  ],

  // ---------------------------------------------------------
  // VISION PROCESS
  // ---------------------------------------------------------

  humanVisionSteps: [
    {
      step: 1,
      title: 'Capture and Focus Incoming Light',
      description:
        'Light enters the eye through the transparent cornea and is refracted toward the lens and retina. The cornea provides most of the eye’s fixed refractive power, while the lens provides adjustable focusing.',
    },
    {
      step: 2,
      title: 'Regulate Light Entry',
      description:
        'The iris controls pupil diameter using smooth muscle. By changing pupil size, the eye regulates how much incoming light reaches the internal optical structures.',
    },
    {
      step: 3,
      title: 'Maintain the Optical Environment',
      description:
        'Aqueous humor fills the anterior cavity and helps maintain the internal environment and intraocular pressure. Vitreous humor occupies the posterior cavity and helps maintain the shape of the eyeball.',
    },
    {
      step: 4,
      title: 'Accommodate for Near Vision',
      description:
        'For distant vision, the ciliary muscle is relatively relaxed and the suspensory ligaments keep the lens flatter. For near vision, ciliary muscle contraction reduces tension on the suspensory ligaments, allowing the elastic lens to become more convex and increase its refractive power.',
    },
    {
      step: 5,
      title: 'Convert Light into Electrical Signals',
      description:
        'Photoreceptors in the retina absorb photons through visual photopigments. Light-triggered molecular changes alter photoreceptor membrane properties and initiate an electrical signal.',
    },
    {
      step: 6,
      title: 'Relay Signals Through the Retina',
      description:
        'Visual information passes from photoreceptors to bipolar neurons and then to ganglion cells. Ganglion-cell axons converge at the optic disc to form the optic nerve.',
    },
    {
      step: 7,
      title: 'Route Signals to the Visual Cortex',
      description:
        'The optic nerves leave the orbits and meet at the optic chiasma. Nasal retinal fibers cross to the opposite side while temporal retinal fibers remain on the same side. Signals then travel through the optic tracts, thalamus, and optic radiations to the primary visual cortex in the occipital lobe.',
    },
    {
      step: 8,
      title: 'Construct Orientation and Depth',
      description:
        'The brain integrates visual information from both eyes, processes the inverted retinal image, and compares differences between the two slightly offset views to construct an upright, spatial and three-dimensional visual experience.',
    },
  ],

  // ---------------------------------------------------------
  // FRAMEWORKS
  // ---------------------------------------------------------

  frameworks: [
    {
      id: 'VISION-PIPELINE',
      name: 'VISION-PIPELINE',
      description: 'The three-stage physiological sequence of human vision.',
      items: [
        {
          init: '1',
          label: 'Optomechanical focusing',
        },
        {
          init: '2',
          label: 'Photochemical transduction',
        },
        {
          init: '3',
          label: 'Neural processing',
        },
      ],
    },

    {
      id: 'EYE-TUNICS',
      name: 'EYE-TUNICS',
      description: 'The three major structural layers of the eyeball.',
      items: [
        {
          init: 'F',
          label: 'Fibrous tunic — sclera and cornea',
        },
        {
          init: 'V',
          label: 'Vascular tunic — choroid, iris and ciliary body',
        },
        {
          init: 'S',
          label: 'Sensory tunic — retina',
        },
      ],
    },

    {
      id: 'RETINAL-CHAIN',
      name: 'RETINAL-CHAIN',
      description: 'The basic cellular route for visual signal transmission within the retina.',
      items: [
        {
          init: '1',
          label: 'Photoreceptor',
        },
        {
          init: '2',
          label: 'Bipolar neuron',
        },
        {
          init: '3',
          label: 'Ganglion cell',
        },
        {
          init: '4',
          label: 'Optic nerve',
        },
      ],
    },

    {
      id: 'VISUAL-PATHWAY',
      name: 'VISUAL-PATHWAY',
      description: 'The major pathway carrying retinal information toward the visual cortex.',
      items: [
        {
          init: '1',
          label: 'Optic nerve',
        },
        {
          init: '2',
          label: 'Optic chiasma',
        },
        {
          init: '3',
          label: 'Optic tract',
        },
        {
          init: '4',
          label: 'Thalamus',
        },
        {
          init: '5',
          label: 'Optic radiations',
        },
        {
          init: '6',
          label: 'Primary visual cortex',
        },
      ],
    },

    {
      id: 'BINOCULAR-DEPTH',
      name: 'BINOCULAR-DEPTH',
      description: 'How two slightly different retinal images contribute to depth perception.',
      items: [
        {
          init: '1',
          label: 'Left and right eyes receive overlapping views',
        },
        {
          init: '2',
          label: 'Brain compares image differences',
        },
        {
          init: '3',
          label: 'Retinal disparity provides spatial information',
        },
        {
          init: '4',
          label: 'Brain constructs depth and 3D perception',
        },
      ],
    },
  ],

  // ---------------------------------------------------------
  // DETAILED SECTIONS
  // ---------------------------------------------------------

  sections: [
    {
      id: 'vision-as-active-pipeline',
      heading: 'Vision Is an Active Physiological Pipeline',
      content: [
        'Human vision is not simply a camera-like process in which the eye records an image and sends it unchanged to the brain.',
        'Vision is an active physiological sequence involving optical focusing, photochemical conversion, electrical signaling, neural transmission, and cortical processing.',
        'The overall sequence can be remembered as:',
        'Light → Optomechanical focusing → Photochemical transduction → Neural processing → Visual cortex → Conscious visual perception.',
        'The eyeball performs the initial focusing, regulation, and transduction steps, but the final vivid visual experience is assembled through neural processing in the brain.',
      ],
    },

    {
      id: 'three-stages',
      heading: 'The Three Major Stages of Vision',
      content: [
        'The first stage is optomechanical focusing. Structures of the eye capture incoming light and bend it so that the optical system can project an image onto the retina.',
        'The second stage is photochemical transduction. Specialized photoreceptors absorb light and convert the energy associated with photons into changes in electrical signaling within retinal cells.',
        'The third stage is neural processing. Signals travel through organized neural pathways toward the visual cortex, where the brain processes the incoming information and constructs spatial perception.',
      ],
    },

    {
      id: 'fibrous-tunic',
      heading: 'Fibrous Tunic: Sclera and Cornea',
      content: [
        'The outer fibrous tunic forms the protective outer layer of the eyeball.',
        'Most of this layer is formed by the sclera, the tough, opaque connective tissue that provides structural protection and helps maintain the shape of the eye.',
        'Anteriorly, the sclera transitions into the transparent cornea.',
        'The cornea is highly transparent and provides a major portion of the eye’s fixed refractive power. Unlike most vascular tissues, it is avascular, which helps preserve its optical transparency.',
        'The cornea receives oxygen and nutrients primarily through diffusion from the tear film and aqueous humor rather than through blood vessels within the corneal tissue.',
      ],
    },

    {
      id: 'aqueous-humor',
      heading: 'Aqueous Humor and the Anterior Cavity',
      content: [
        'The anterior cavity of the eye contains aqueous humor, a clear fluid located between the cornea and lens.',
        'Aqueous humor is continuously produced, circulated, and drained.',
        'It contributes to maintaining the appropriate internal environment and intraocular pressure of the eye.',
        'Its continuous movement is important because the cornea and lens depend on surrounding fluids for metabolic support.',
      ],
    },

    {
      id: 'vitreous-humor',
      heading: 'Vitreous Humor and the Posterior Cavity',
      content: [
        'The large posterior cavity behind the lens is filled with vitreous humor.',
        'Vitreous humor is a transparent, gel-like substance that occupies most of the internal volume of the eyeball.',
        'Because of its gel-like consistency and large volume, it helps maintain the shape and structural integrity of the eyeball.',
        'The vitreous also provides the optical medium through which light passes on its way from the lens to the retina.',
      ],
    },

    {
      id: 'vascular-tunic',
      heading: 'Vascular Tunic: Choroid, Iris and Ciliary Body',
      content: [
        'The middle vascular tunic contains important structures involved in supplying, regulating, and supporting the eye.',
        'The choroid contains a rich vascular supply that supports the tissues of the eye and contains melanin-containing cells that absorb stray light.',
        'Absorption of stray light helps reduce internal reflection and unwanted scattering that could interfere with image quality.',
        'Anteriorly, the vascular tunic continues into the iris.',
        'The iris contains smooth muscle that controls the diameter of the pupil and therefore regulates how much light enters the eye.',
        'Behind the iris lies the ciliary body, which contains the ciliary muscle and is associated with the suspensory apparatus of the lens.',
      ],
    },

    {
      id: 'accommodation',
      heading: 'Accommodation: Focusing on Near Objects',
      content: [
        'The lens changes its shape to adjust the refractive power of the eye. This process is called accommodation.',
        'During distance vision, the ciliary muscle is relatively relaxed. Tension in the suspensory ligaments keeps the lens relatively flattened, giving it lower refractive power.',
        'When shifting attention to a nearby object, the ciliary muscle contracts.',
        'This reduces tension on the suspensory ligaments, allowing the elastic lens to become more rounded or convex.',
        'The more convex lens has greater refractive power, allowing the eye to focus light from nearby objects onto the retina.',
        'Therefore, accommodation can be remembered as:',
        'Near object → Ciliary muscle contracts → Suspensory ligament tension decreases → Lens becomes more convex → Refractive power increases.',
      ],
    },

    {
      id: 'retina',
      heading: 'Retina: The Sensory Tunic',
      content: [
        'The retina forms the sensory tunic of the eye and contains the photoreceptors that detect light.',
        'Two important anatomical landmarks are the fovea centralis and optic disc.',
        'The fovea centralis is the region associated with the highest visual acuity. Its central region is especially rich in cone photoreceptors and is specialized for detailed vision.',
        'The optic disc is the location where retinal nerve fibers leave the eye to form the optic nerve.',
        'Because the optic disc contains no photoreceptors, light falling directly on this region cannot be detected. This produces the physiological blind spot.',
      ],
    },

    {
      id: 'rods-and-cones',
      heading: 'Rods and Cones',
      content: [
        'The retina contains two major classes of photoreceptors: rods and cones.',
        'Rods are highly sensitive to low levels of light and are particularly important for dim-light and night vision. Their signaling provides predominantly grayscale information rather than detailed color perception.',
        'Cones function best under brighter lighting conditions and are responsible for high-resolution and color vision.',
        'The foveal region is especially densely populated with cones, which contributes to its high visual acuity.',
        'A useful comparison is:',
        'Rods → Dim light → High sensitivity → Grayscale vision.',
        'Cones → Bright light → High resolution → Color vision.',
      ],
    },

    {
      id: 'phototransduction',
      heading: 'Photochemical Transduction',
      content: [
        'Photoreceptors convert incoming light into changes in electrical signaling through a process called phototransduction.',
        'When a photon is absorbed by a visual photopigment in the photoreceptor outer segment, it triggers a molecular change in the photopigment.',
        'Rhodopsin is an important visual photopigment associated with rod photoreceptors.',
        'The light-triggered molecular cascade changes ion-channel activity and the membrane potential of the photoreceptor.',
        'This converts information carried by light into a biological electrical signal that can be processed by the retinal neural network.',
        'The photon is therefore not simply converted directly into an action potential. Instead, photon absorption initiates a biochemical cascade that changes photoreceptor signaling.',
      ],
    },

    {
      id: 'retinal-neural-chain',
      heading: 'From Photoreceptors to Ganglion Cells',
      content: [
        'Visual information is processed within the retina before leaving the eye.',
        'The basic pathway described here is:',
        'Photoreceptor → Bipolar neuron → Ganglion cell.',
        'Photoreceptors detect the light stimulus and initiate changes in signaling.',
        'Bipolar neurons relay and participate in processing this information within the retinal circuitry.',
        'Ganglion cells generate action potentials that carry visual information out of the retina.',
        'The axons of ganglion cells converge at the optic disc and form the optic nerve.',
      ],
    },

    {
      id: 'optic-nerve',
      heading: 'Optic Nerve and Optic Chiasma',
      content: [
        'The optic nerve carries visual information from each eye toward the brain.',
        'The two optic nerves meet at the optic chiasma.',
        'At the optic chiasma, fibers from the nasal or medial portions of each retina cross to the opposite side.',
        'Fibers from the temporal or lateral portions of each retina remain on the same side.',
        'This arrangement allows information from the left visual field to be processed primarily by the right cerebral hemisphere and information from the right visual field to be processed primarily by the left cerebral hemisphere.',
      ],
    },

    {
      id: 'visual-pathway',
      heading: 'The Visual Pathway to the Occipital Cortex',
      content: [
        'After passing through the optic chiasma, visual fibers continue as the optic tracts.',
        'The optic tracts carry visual information toward the thalamus, where important relay and processing functions occur.',
        'From thalamic relay regions, visual information travels through the optic radiations.',
        'The optic radiations fan out toward the primary visual cortex located in the occipital lobe.',
        'The primary visual cortex receives and processes organized information about the visual field.',
        'The pathway can therefore be remembered as:',
        'Retina → Optic nerve → Optic chiasma → Optic tract → Thalamus → Optic radiations → Primary visual cortex.',
      ],
    },

    {
      id: 'visual-field',
      heading: 'Visual Fields and Hemispheric Processing',
      content: [
        'The organization of the visual pathway means that the brain processes visual fields in a contralateral manner.',
        'Information from the left visual field is routed primarily to the right cerebral hemisphere.',
        'Information from the right visual field is routed primarily to the left cerebral hemisphere.',
        'This organization is created by the selective crossing of nasal retinal fibers at the optic chiasma.',
        'Understanding this distinction is important because the eye receiving information and the brain hemisphere processing a visual field are not simply the same side.',
      ],
    },

    {
      id: 'retinal-image',
      heading: 'Why the Retinal Image Is Upside Down',
      content: [
        'The optical system of the eye projects an image onto the retina that is inverted and laterally reversed.',
        'The lens does not create an upright miniature picture inside the eye.',
        'Instead, the optical properties of the lens produce an inverted retinal image.',
        'The brain does not need to physically rotate a picture like a photograph. Instead, neural processing interprets the organized retinal signals in a way that produces our normal upright conscious perception.',
        'Therefore, the final visual experience is not simply a raw copy of the retinal image.',
      ],
    },

    {
      id: 'binocular-vision',
      heading: 'Binocular Vision and Depth Perception',
      content: [
        'The two eyes are separated horizontally, so each eye receives a slightly different view of the same environment.',
        'The images overlap substantially, but they are not identical.',
        'The brain compares the differences between the two retinal images.',
        'These small positional differences, known as binocular disparity, provide important information about relative distance and depth.',
        'By combining information from both eyes with other visual cues, the brain constructs a spatial and three-dimensional representation of the environment.',
        'Thus, binocular vision is not simply two identical cameras working independently. It is a coordinated neural process in which the brain combines two slightly different inputs into a unified percept.',
      ],
    },

    {
      id: 'final-integration',
      heading: 'The Eye Captures Information — The Brain Constructs Vision',
      content: [
        'The eyeball performs several essential functions: it focuses incoming light, regulates light entry, maintains its optical environment, and converts light into neural signals.',
        'However, these processes alone do not constitute conscious visual experience.',
        'The signals must travel through organized neural pathways and undergo processing within the brain.',
        'The visual cortex integrates information about location, orientation, spatial relationships and other properties of the visual scene.',
        'The brain also combines information from both eyes to construct depth and three-dimensional perception.',
        'The key conceptual point is:',
        'The eye provides the biological input, but the brain assembles the conscious visual experience.',
      ],
    },
  ],

  // ---------------------------------------------------------
  // KEY POINTS
  // ---------------------------------------------------------

  keyPoints: [
    'Human vision is an active physiological pipeline, not a passive camera-like recording system.',
    'Vision involves optomechanical focusing, photochemical transduction, and neural processing.',
    'The sclera forms most of the tough outer fibrous tunic of the eye.',
    'The transparent cornea provides most of the eye’s fixed refractive power.',
    'The cornea is avascular and receives nutrients and oxygen through surrounding fluids and diffusion.',
    'Aqueous humor occupies the anterior cavity and contributes to maintaining intraocular pressure and the internal environment.',
    'Vitreous humor is a transparent gel occupying most of the posterior cavity and helps maintain eyeball shape.',
    'The choroid provides vascular support and absorbs stray light through melanin.',
    'The iris controls pupil diameter and therefore regulates light entry.',
    'Accommodation allows the lens to increase its refractive power for near vision.',
    'The retina contains rods and cones that detect light.',
    'Rods are particularly important for dim-light vision, while cones support high-resolution and color vision.',
    'The foveal region provides the highest visual acuity and is cone-rich.',
    'The optic disc is the physiological blind spot because it contains no photoreceptors.',
    'Phototransduction begins when visual photopigments absorb photons and trigger a biochemical signaling cascade.',
    'Visual information passes through photoreceptors, bipolar neurons, and ganglion cells within the retina.',
    'Ganglion-cell axons form the optic nerve.',
    'Nasal retinal fibers cross at the optic chiasma while temporal retinal fibers remain ipsilateral.',
    'The visual pathway continues through the optic tract, thalamic relay, optic radiations, and primary visual cortex.',
    'The left visual field is processed primarily by the right cerebral hemisphere, while the right visual field is processed primarily by the left hemisphere.',
    'The retinal image is inverted and laterally reversed by the optical system.',
    'Binocular disparity allows the brain to extract depth information from the two slightly different views provided by the eyes.',
    'Conscious three-dimensional vision is ultimately constructed through neural processing in the brain.',
  ],

  // ---------------------------------------------------------
  // RAPID REVISION
  // ---------------------------------------------------------

  rapid: [
    'VISION = Optomechanical focusing + Photochemical transduction + Neural processing.',
    'Fibrous tunic = Sclera + Cornea.',
    'Vascular tunic = Choroid + Iris + Ciliary body.',
    'Sensory tunic = Retina.',
    'Cornea = Major fixed refractive element.',
    'Aqueous humor = Anterior cavity fluid + intraocular environment/pressure support.',
    'Vitreous humor = Posterior gel + eyeball shape support.',
    'Iris = Controls pupil diameter.',
    'Accommodation = Lens changes shape for near vision.',
    'Near vision = Ciliary muscle contracts → suspensory tension decreases → lens becomes more convex.',
    'Rods = Dim light + grayscale vision.',
    'Cones = Bright light + color + high visual acuity.',
    'Fovea = Highest visual acuity.',
    'Optic disc = Blind spot.',
    'Retinal chain = Photoreceptor → Bipolar → Ganglion.',
    'Visual pathway = Optic nerve → Chiasma → Tract → Thalamus → Radiations → Visual cortex.',
    'Left visual field → Right hemisphere.',
    'Right visual field → Left hemisphere.',
    'Binocular disparity → Depth perception.',
    'Final concept = The eye captures and converts; the brain constructs conscious vision.',
  ],

  // ---------------------------------------------------------
  // ANIMATION
  // ---------------------------------------------------------

  animation: 'human-vision',

  // ---------------------------------------------------------
  // QUIZ
  // ---------------------------------------------------------

  quiz: [
    {
      question: 'Which statement best describes human vision?',
      options: [
        'It is a passive camera-like recording process',
        'It is an active physiological pipeline involving optical, photochemical and neural processing',
        'It occurs entirely within the retina',
        'It occurs entirely within the lens',
      ],
      answer: 1,
      explanation:
        'Human vision involves optomechanical focusing, photochemical transduction and neural processing that ultimately constructs conscious visual perception.',
    },

    {
      question: 'Which structure provides most of the eye’s fixed refractive power?',
      options: ['Retina', 'Cornea', 'Optic nerve', 'Iris'],
      answer: 1,
      explanation:
        'The cornea provides most of the eye’s fixed refractive power.',
    },

    {
      question: 'Why is the cornea transparent and avascular?',
      options: [
        'It contains no living cells',
        'It does not require nutrients',
        'Lack of blood vessels helps preserve optical transparency',
        'It is part of the retina',
      ],
      answer: 2,
      explanation:
        'The cornea is avascular, which helps maintain its optical transparency. It receives oxygen and nutrients through diffusion and surrounding fluids.',
    },

    {
      question: 'Where is aqueous humor primarily located?',
      options: [
        'In the posterior vitreous cavity',
        'In the anterior cavity between the cornea and lens',
        'Inside the retina',
        'Inside the optic nerve',
      ],
      answer: 1,
      explanation:
        'Aqueous humor occupies the anterior portion of the eye between the cornea and lens.',
    },

    {
      question: 'What is a major function of vitreous humor?',
      options: [
        'Detect photons',
        'Control pupil diameter',
        'Help maintain the shape of the eyeball',
        'Produce visual pigments',
      ],
      answer: 2,
      explanation:
        'Vitreous humor is a gel-like substance occupying the posterior cavity and contributes to maintaining the shape and structural integrity of the eyeball.',
    },

    {
      question: 'Which structure controls pupil diameter?',
      options: ['Iris', 'Retina', 'Cornea', 'Optic disc'],
      answer: 0,
      explanation:
        'Smooth muscle within the iris changes pupil diameter and therefore regulates light entry.',
    },

    {
      question: 'What happens during accommodation for near vision?',
      options: [
        'The lens becomes flatter',
        'The ciliary muscle contracts and the lens becomes more convex',
        'The optic nerve contracts',
        'The retina moves forward',
      ],
      answer: 1,
      explanation:
        'Ciliary muscle contraction reduces tension on the suspensory ligaments, allowing the elastic lens to become more convex and increase refractive power.',
    },

    {
      question: 'Which photoreceptors are most important for dim-light vision?',
      options: ['Cones', 'Rods', 'Ganglion cells', 'Bipolar cells'],
      answer: 1,
      explanation:
        'Rods are highly sensitive to low levels of light and are important for night or dim-light vision.',
    },

    {
      question: 'Which photoreceptors are associated with color and high-resolution vision?',
      options: ['Rods', 'Cones', 'Ganglion cells', 'Bipolar cells'],
      answer: 1,
      explanation:
        'Cones function primarily under brighter conditions and support color and high-resolution vision.',
    },

    {
      question: 'Which retinal region provides the highest visual acuity?',
      options: ['Optic disc', 'Fovea centralis', 'Sclera', 'Choroid'],
      answer: 1,
      explanation:
        'The foveal region is specialized for high-acuity vision and is particularly rich in cones.',
    },

    {
      question: 'Why is the optic disc called the physiological blind spot?',
      options: [
        'It contains only rods',
        'It contains only cones',
        'It contains no photoreceptors',
        'It contains too many photoreceptors',
      ],
      answer: 2,
      explanation:
        'The optic disc is where ganglion-cell axons leave the eye, and it lacks photoreceptors. Light falling there therefore cannot be detected.',
    },

    {
      question: 'What is the basic retinal signaling sequence?',
      options: [
        'Ganglion → Photoreceptor → Bipolar',
        'Photoreceptor → Bipolar → Ganglion',
        'Bipolar → Photoreceptor → Ganglion',
        'Optic nerve → Photoreceptor → Bipolar',
      ],
      answer: 1,
      explanation:
        'The basic sequence is photoreceptor → bipolar neuron → ganglion cell.',
    },

    {
      question: 'What happens at the optic chiasma?',
      options: [
        'All retinal fibers cross',
        'No retinal fibers cross',
        'Nasal retinal fibers cross while temporal retinal fibers remain ipsilateral',
        'Only optic nerve fibers disappear',
      ],
      answer: 2,
      explanation:
        'Nasal retinal fibers cross at the optic chiasma, while temporal retinal fibers remain on the same side.',
    },

    {
      question: 'Which visual field is primarily processed by the right cerebral hemisphere?',
      options: [
        'Right visual field',
        'Left visual field',
        'Both exclusively',
        'Neither',
      ],
      answer: 1,
      explanation:
        'The left visual field is routed primarily to the right cerebral hemisphere.',
    },

    {
      question: 'Which sequence correctly describes the major visual pathway?',
      options: [
        'Retina → Optic nerve → Optic chiasma → Optic tract → Thalamus → Optic radiations → Visual cortex',
        'Retina → Cornea → Optic nerve → Cerebellum',
        'Retina → Lens → Choroid → Spinal cord',
        'Cornea → Retina → Spinal cord → Cerebellum',
      ],
      answer: 0,
      explanation:
        'Visual signals leave the retina through the optic nerve, pass through the optic chiasma and optic tract, relay through the thalamus, and reach the visual cortex through optic radiations.',
    },

    {
      question: 'What happens to the image projected onto the retina?',
      options: [
        'It is upright and unchanged',
        'It is inverted and laterally reversed',
        'It is always completely blurred',
        'It is converted directly into a photograph',
      ],
      answer: 1,
      explanation:
        'The optical system projects an inverted and laterally reversed image onto the retina. Neural processing then produces normal upright perception.',
    },

    {
      question: 'How does binocular vision contribute to depth perception?',
      options: [
        'The brain ignores one eye',
        'Both eyes receive exactly identical images',
        'The brain compares slightly different images from the two eyes',
        'The retina produces depth independently',
      ],
      answer: 2,
      explanation:
        'Because the eyes occupy slightly different positions, they receive offset views. The brain compares these differences to obtain information about depth.',
    },

    {
      question: 'Which statement best summarizes the final stage of vision?',
      options: [
        'The retina alone creates conscious vision',
        'The lens creates three-dimensional perception',
        'The brain integrates neural signals to construct conscious visual perception',
        'The cornea interprets visual information',
      ],
      answer: 2,
      explanation:
        'The eye captures and converts visual information, but conscious visual perception is constructed through neural processing in the brain.',
    },
  ],
};

// ---------------------------------------------------------
// LESSON EXPORTS
// ---------------------------------------------------------

export const lessons = [humanVisionLesson];

export const topic = {
  id: 'anatomy_physiology',
  title: 'Anatomy & Physiology',
};

export default humanVisionLesson;
