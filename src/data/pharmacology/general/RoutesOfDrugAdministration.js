// RoutesOfDrugAdministration.js

export const routesOfDrugAdministrationLesson = {
  id: 'routes-of-drug-administration',
  isNew: true,
  isLatest: true,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-18',
  addedOrder: 14,
  categoryId: 'general_pharmacology',
  topic: 'General Pharmacology',
  title: 'Routes of Drug Administration',
  subtitle: 'Understanding Local and Systemic Drug Delivery and Choosing the Appropriate Route',
  level: 'Beginner',
  time: '18–22 min',

  description: `
    The route of drug administration determines how a drug reaches its site of action.
    The appropriate route depends on drug properties, the desired site of action,
    absorption, first-pass metabolism, required speed of response, dosage accuracy,
    and the patient's condition.

    This lesson introduces local and systemic routes of administration and explains
    the major routes including oral, sublingual/buccal, rectal, cutaneous/transdermal,
    inhalational, nasal, and parenteral routes.
  `,

  infographic: {
    src: '/routes-of-drug-administration.png',
    fallbackSrcs: [
      '/image.png',
      '/images/routes-of-drug-administration.png',
      '/routes_of_drug_administration.png'
    ],
    title: 'Master Classification: Routes of Drug Administration',
    badge: 'High-Yield Clinical Map',
    alt: 'Master flowchart of Routes of Drug Administration showing Local Routes (Topical, Local injection, Local arterial) and Systemic Routes (Enteral, Mucosal, Respiratory, Transdermal, Parenteral with needle angles IV 25°, IM 90°, SC 45°, ID 10-15°)',
    caption: 'Comprehensive anatomical and clinical flowchart separating drug delivery into Local Routes (targeted to a specific site) versus Systemic Routes (circulated through the bloodstream), including topical sites, local injections, mucosal membranes, and parenteral needle angles.'
  },

  video: {
    youtubeId: '',
    title: 'Routes of Drug Administration'
  },

  pharmacologySteps: [
    {
      step: 1,
      title: 'Classify Routes by Intended Action',
      description:
        'Begin by separating drug administration routes into local and systemic routes.'
    },
    {
      step: 2,
      title: 'Understand Local Routes',
      description:
        'Learn how drugs can be delivered directly to accessible localized sites while minimizing systemic exposure.'
    },
    {
      step: 3,
      title: 'Understand Systemic Routes',
      description:
        'Learn how drugs are administered with the intention of reaching the bloodstream and being distributed throughout the body.'
    },
    {
      step: 4,
      title: 'Choose the Route Using Clinical Factors',
      description:
        'Evaluate drug properties, desired site, absorption, first-pass metabolism, required speed, dosage accuracy, and patient condition.'
    },
    {
      step: 5,
      title: 'Understand Enteral and Mucosal Routes',
      description:
        'Compare oral, sublingual/buccal, and rectal administration.'
    },
    {
      step: 6,
      title: 'Understand Cutaneous and Respiratory Routes',
      description:
        'Explore cutaneous, transdermal, inhalational, and nasal administration.'
    },
    {
      step: 7,
      title: 'Understand Parenteral Administration',
      description:
        'Learn why injections can overcome several limitations of oral administration.'
    },
    {
      step: 8,
      title: 'Compare Major Injection Routes',
      description:
        'Differentiate subcutaneous, intramuscular, intravenous, and intradermal administration.'
    }
  ],

  frameworks: [
    {
      id: 'ROUTE-CLASSIFICATION',
      name: 'ROUTES OF DRUG ADMINISTRATION',
      items: [
        {
          init: '1. LOCAL',
          label: 'Local routes: Topical, Local injection (intra-articular, perineural, intrathecal, retrobulbar), Local arterial'
        },
        {
          init: '2. SYSTEMIC',
          label: 'Systemic routes: Enteral, Mucosal, Respiratory, Transdermal, and Parenteral (IV, IM, SC, ID)'
        }
      ]
    },

    {
      id: 'LOCAL-ROUTES-TAXONOMY',
      name: '1. LOCAL ROUTES ARCHITECTURE',
      items: [
        {
          init: 'TOPICAL',
          label: 'Skin, Eye, Ear, Nasal mucosa, Oral/oropharyngeal mucosa, and Vaginal / rectal local application'
        },
        {
          init: 'INJECTION',
          label: 'Intra-articular (joints), Perineural/local infiltration, Intrathecal (CSF), Retrobulbar (behind eye)'
        },
        {
          init: 'ARTERIAL',
          label: 'Close intra-arterial administration for regional perfusion (diagnostic angiography, limb malignancy)'
        }
      ]
    },

    {
      id: 'SYSTEMIC-ROUTES-TAXONOMY',
      name: '2. SYSTEMIC ROUTES ARCHITECTURE',
      items: [
        {
          init: 'ENTERAL',
          label: 'A. Enteral / Gastrointestinal: Oral (PO) and Rectal (PR)'
        },
        {
          init: 'MUCOSAL',
          label: 'B. Mucosal / Transmucosal: Sublingual (SL), Buccal, and Nasal'
        },
        {
          init: 'RESPIRATORY',
          label: 'C. Respiratory: Inhalational gases & volatile liquids across vast alveolar area'
        },
        {
          init: 'TRANSDERMAL',
          label: 'D. Transdermal: Transdermal patch/system for sustained zero-order systemic absorption'
        },
        {
          init: 'PARENTERAL',
          label: 'E. Parenteral: Intravenous (IV), Intramuscular (IM), Subcutaneous (SC), and Intradermal (ID)'
        }
      ]
    },

    {
      id: 'PARENTERAL-INJECTIONS',
      name: 'E. PARENTERAL INJECTION ROUTES',
      items: [
        {
          init: 'IV',
          label: 'Intravenous: Direct vascular injection, 100% bioavailability, immediate effect, dose titration'
        },
        {
          init: 'IM',
          label: 'Intramuscular: Injected into vascular skeletal muscle, faster than SC, accommodates depot preparations'
        },
        {
          init: 'SC',
          label: 'Subcutaneous: Deposited in loose hypodermis, self-injection (insulin, heparin), pellet implants'
        },
        {
          init: 'ID',
          label: 'Intradermal: Injected into dermis creating a bleb; BCG vaccination and allergy/sensitivity testing'
        }
      ]
    },

    {
      id: 'ROUTE-SELECTION',
      name: 'FACTORS GOVERNING ROUTE SELECTION',
      items: [
        {
          init: 'DRUG',
          label: 'Physical state (solid, liquid, gas), solubility, pH, stability, irritancy'
        },
        {
          init: 'SITE',
          label: 'Desired site: localized approachable target vs. generalized systemic distribution'
        },
        {
          init: 'SPEED',
          label: 'Required rapidity of response (emergency stat IV/SL vs. routine maintenance)'
        },
        {
          init: 'FIRST-PASS',
          label: 'Susceptibility to gastrointestinal breakdown and hepatic first-pass metabolism'
        },
        {
          init: 'ACCURACY',
          label: 'Degree of dosage accuracy required (continuous IV infusion or inhalation titration)'
        },
        {
          init: 'PATIENT',
          label: 'Patient condition: consciousness, recurrent vomiting, cooperation, pediatric/geriatric, shock'
        }
      ]
    }
  ],

  sections: [
    {
      id: 'intro-routes',
      heading: 'What Are Routes of Drug Administration?',
      content: `
        Most drugs can be administered by more than one route.

        The appropriate route depends on both drug-related and patient-related
        factors. Practical considerations such as feasibility, convenience,
        and the clinical situation also influence the choice.

        Routes of drug administration can broadly be divided into:

        1. Local routes
        2. Systemic routes
      `
    },

    {
      id: 'classification-of-routes',
      heading: 'Classification of Routes of Drug Administration',
      content: `
        ROUTES OF DRUG ADMINISTRATION
        │
        ├── 1. LOCAL ROUTES
        │   │
        │   ├── Topical
        │   │   ├── Skin
        │   │   ├── Eye
        │   │   ├── Ear
        │   │   ├── Nasal mucosa
        │   │   ├── Oral/oropharyngeal mucosa
        │   │   └── Vaginal / rectal local application
        │   │
        │   ├── Local injection
        │   │   ├── Intra-articular
        │   │   ├── Perineural / local infiltration
        │   │   ├── Intrathecal
        │   │   └── Retrobulbar
        │   │
        │   └── Local arterial administration
        │
        └── 2. SYSTEMIC ROUTES
            │
            ├── A. ENTERAL / GASTROINTESTINAL
            │   ├── Oral
            │   └── Rectal
            │
            ├── B. MUCOSAL / TRANSMUCOSAL
            │   ├── Sublingual
            │   ├── Buccal
            │   └── Nasal
            │
            ├── C. RESPIRATORY
            │   └── Inhalational
            │
            ├── D. TRANSDERMAL
            │   └── Transdermal patch/system
            │
            └── E. PARENTERAL
                │
                ├── Intravenous (IV)
                ├── Intramuscular (IM)
                ├── Subcutaneous (SC)
                └── Intradermal (ID)

        The fundamental division separates **Local Routes** (where drug is applied directly to an accessible anatomical site for circumscribed action with minimal systemic absorption) from **Systemic Routes** (where the drug enters systemic venous/arterial circulation to reach distant or generalized receptors throughout the body).

        **1. LOCAL ROUTES ARCHITECTURE**:
        • **Topical Administration**: External application of a drug to an epithelial surface for localized action. Includes the **Skin** (lotions, creams, ointments for cutaneous lesions), **Eye** (drops and ointments for conjunctival and corneal conditions), **Ear** (drops for external otitis), **Nasal mucosa** (decongestant and anti-inflammatory sprays), **Oral/oropharyngeal mucosa** (lozenges, paints, mouthwashes for stomatitis/pharyngitis), and **Vaginal / rectal local application** (pessaries, suppositories, retention enemas for localized mucosal inflammation).
        • **Local Injection**: Direct delivery into deeper closed compartments using a syringe and needle. Includes **Intra-articular** (injection into a joint cavity, e.g., hydrocortisone or triamcinolone for arthritis), **Perineural / local infiltration** (infiltration of local anaesthetic around a nerve trunk or wound margin), **Intrathecal** (subarachnoid space injection for spinal anaesthesia or acute leukemia chemotherapy), and **Retrobulbar** (behind the eyeball for ophthalmic surgery anesthesia).
        • **Local Arterial Administration**: Close intra-arterial infusion directing concentrated agent into the regional vascular bed of an organ or extremity (e.g., diagnostic coronary/cerebral angiography contrast media, or regional perfusion of cytotoxic agents for limb malignancies).

        **2. SYSTEMIC ROUTES ARCHITECTURE**:
        • **A. Enteral / Gastrointestinal**: Utilizing the alimentary canal. Comprises **Oral (PO)** (the oldest, commonest, and most convenient route, subject to gastric acid, GI motility, and hepatic first-pass metabolism) and **Rectal (PR)** (suppositories and enemas for systemic absorption when oral intake is compromised by recurrent vomiting or unconsciousness; external hemorrhoidal veins partly bypass the liver).
        • **B. Mucosal / Transmucosal**: Direct absorption across non-keratinized mucous membranes into systemic venous circulation, avoiding destructive gastrointestinal fluids and bypassing hepatic first-pass metabolism. Comprises **Sublingual** (placed under the tongue, e.g., glyceryl trinitrate for acute angina), **Buccal** (placed between cheek and gum, e.g., prochlorperazine for emesis), and **Nasal** (vascular nasal mucosa for systemic peptide absorption, e.g., desmopressin and GnRH agonists).
        • **C. Respiratory (Inhalational)**: Volatile liquids and gases administered via the respiratory tract that undergo rapid exchange across the expansive pulmonary alveolar-capillary membrane, offering near-instantaneous systemic onset and continuous depth titration (e.g., volatile general anaesthetics).
        • **D. Transdermal (Transdermal Patch / System)**: Rate-controlled adhesive delivery systems delivering lipophilic drug across the stratum corneum into dermal capillaries and systemic circulation with sustained, zero-order-like plasma profiles bypassing hepatic first-pass (e.g., GTN, fentanyl, nicotine, clonidine, estradiol).
        • **E. Parenteral**: Injections that deposit drug directly into tissue fluid or vascular compartments without crossing enteral mucosal barriers:
          - **Intravenous (IV)**: Direct venous access providing 100% bioavailability, instant onset, and precise dose titration in clinical emergencies.
          - **Intramuscular (IM)**: Deposition into large vascular skeletal muscle beds (deltoid, gluteus maximus, vastus lateralis) for predictable absorption and long-acting depot preparations.
          - **Subcutaneous (SC)**: Injected into loose subcutaneous hypodermis for slower, steady absorption; ideal for patient self-injection (insulin, low-molecular-weight heparin) and subdermal implants.
          - **Intradermal (ID)**: Injected directly into the upper dermis creating a characteristic circumscribed bleb; reserved for diagnostic antigen testing (Mantoux test, allergy scratch tests) and BCG vaccination.
      `
    },

    {
      id: 'local-routes',
      heading: 'Local Routes',
      content: `
        Local routes are used when the desired effect is at a localized,
        accessible site and systemic absorption is minimal or absent.

        The objective is to achieve a high concentration of drug at the
        desired site without unnecessarily exposing the rest of the body.

        Therefore, systemic adverse effects or toxicity may be absent or
        minimized when systemic absorption is minimal.

        However, some drugs administered through routes traditionally used
        for local delivery can also be absorbed systemically and used for
        systemic effects.
      `
    },

    {
      id: 'topical-route',
      heading: 'Topical Administration',
      content: `
        Topical administration refers to external application of a drug
        to a surface for localized action.

        Drugs may be delivered to localized lesions involving the skin,
        oropharyngeal or nasal mucosa, eyes, ear canal, anal canal, or vagina.

        Dosage forms mentioned in the source include:

        • Lotions
        • Ointments
        • Creams
        • Powders
        • Rinses
        • Paints
        • Drops
        • Sprays
        • Lozenges
        • Suppositories
        • Pessaries

        Other examples include nonabsorbable drugs given orally for action
        on the gastrointestinal mucosa, inhaled drugs intended to act on
        the bronchi, and irrigating solutions or jellies applied locally.
      `
    },

    {
      id: 'deep-tissue-local',
      heading: 'Local Administration to Deeper Tissues',
      content: `
        Certain deeper sites can be approached directly using a syringe
        and needle.

        For local administration, the drug should be in a form that permits
        slow systemic absorption when local action is intended.

        Examples mentioned in the source include:

        • Intra-articular injection into a joint
        • Infiltration around a nerve
        • Intrathecal injection
        • Retrobulbar injection behind the eyeball

        The principle is direct delivery to a selected anatomical site
        rather than relying on systemic distribution.
      `
    },

    {
      id: 'arterial-local',
      heading: 'Local Arterial Supply',
      content: `
        Close intra-arterial injection can be used when delivery through
        a particular arterial supply is desired.

        The source gives angiographic contrast media as an example.

        It also describes infusion of anticancer drugs into arteries such
        as the femoral or brachial artery to localize treatment for limb
        malignancies.
      `
    },

    {
      id: 'systemic-routes',
      heading: 'Systemic Routes',
      content: `
        Systemic routes are intended to result in absorption of the drug
        into the bloodstream.

        After entering circulation, the drug can be distributed throughout
        the body, including the site of action.

        Systemic administration is therefore useful when the desired effect
        is generalized or when the target site cannot be approached directly.
      `
    },

    {
      id: 'route-selection-factors',
      heading: 'Factors Governing the Choice of Route',
      content: `
        The choice of route is influenced by several factors.

        1. Physical and chemical properties of the drug
           • Solid, liquid, or gas
           • Solubility
           • Stability
           • pH
           • Irritancy

        2. Site of desired action
           • Localized and approachable
           • Generalized and not directly approachable

        3. Rate and extent of absorption

        4. Effect of digestive juices and first-pass metabolism

        5. Rapidity with which the response is desired
           • Routine treatment
           • Emergency treatment

        6. Accuracy of dosage required
           • Intravenous and inhalational routes can permit fine adjustment

        7. Condition of the patient
           • Unconsciousness
           • Vomiting
           • Lack of cooperation
      `
    },

    {
      id: 'oral-route',
      heading: 'Oral Administration',
      content: `
        Oral administration is described as the oldest and commonest mode
        of drug administration.

        Major advantages include:

        • Safety
        • Convenience
        • Noninvasive administration
        • Often painless administration
        • Usually does not require assistance
        • Sterility of the medication is generally not required
        • Lower cost

        Both solid and liquid dosage forms can be administered orally.

        Examples of solid dosage forms include powders, tablets, capsules,
        spansules, dragees, moulded tablets, and gastrointestinal therapeutic
        systems.

        Liquid dosage forms include elixirs, syrups, emulsions, and mixtures.
      `
    },

    {
      id: 'oral-limitations',
      heading: 'Limitations of the Oral Route',
      content: `
        Oral administration has several limitations.

        • Drug action may be slower and therefore unsuitable for emergencies.
        • Unpalatable drugs may be difficult to administer.
        • Some drugs may cause nausea or vomiting.
        • The route cannot be used effectively in an unconscious, uncooperative,
          or vomiting patient.
        • Drug absorption may be variable and erratic.
        • Some drugs are not adequately absorbed.
        • Some drugs may be destroyed by digestive juices.
        • Some drugs undergo extensive destruction or metabolism in the liver.

        Therefore, the convenience of the oral route must be balanced against
        the properties of the drug and the clinical situation.
      `
    },

    {
      id: 'sublingual-buccal',
      heading: 'Sublingual and Buccal Administration',
      content: `
        In sublingual administration, the drug is placed under the tongue.

        In buccal administration, the drug is placed against the buccal
        mucosa of the mouth.

        The source states that lipid-soluble and non-irritating drugs are
        suitable for these routes.

        Absorption is relatively rapid and action may occur within minutes.

        A major advantage is avoidance of hepatic first-pass metabolism
        for drug absorbed directly into the systemic circulation through
        the oral mucosa.

        Examples mentioned include:

        • Glyceryl trinitrate (GTN)
        • Buprenorphine
        • Desamino-oxytocin
      `
    },

    {
      id: 'rectal-route',
      heading: 'Rectal Administration',
      content: `
        Drugs can be administered rectally as suppositories or retention
        enemas for systemic effects.

        This route may be useful when oral administration is difficult,
        including situations involving recurrent vomiting or unconsciousness.

        However, the source notes that rectal administration can be
        inconvenient and embarrassing and that absorption may be slower,
        irregular, and unpredictable.

        Certain drugs, including diazepam, indomethacin, paracetamol,
        and ergotamine, are mentioned as examples of drugs that may be
        administered rectally.

        The source also explains that drug absorbed through external
        haemorrhoidal veins can partially bypass the liver, whereas drug
        absorbed through internal haemorrhoidal veins does not follow
        the same pathway.
      `
    },

    {
      id: 'cutaneous-route',
      heading: 'Cutaneous Administration',
      content: `
        Highly lipid-soluble drugs can be applied to the skin for slow
        and prolonged absorption.

        The drug may be incorporated into an ointment and applied over
        a specified area of skin.

        According to the source, absorption may be enhanced by:

        • Rubbing the preparation
        • Using an oily base
        • Applying an occlusive dressing

        The source also notes that this route can bypass hepatic first-pass
        metabolism for drug entering systemic circulation through the skin.
      `
    },

    {
      id: 'transdermal-system',
      heading: 'Transdermal Therapeutic Systems',
      content: `
        Transdermal therapeutic systems are adhesive patches designed
        to deliver a drug through the stratum corneum into systemic
        circulation.

        The drug is delivered from the skin surface by diffusion.

        The system is designed to control the rate at which drug reaches
        the skin, allowing relatively constant and predictable delivery.

        Common application sites mentioned include:

        • Chest
        • Abdomen
        • Upper arm
        • Lower back
        • Buttock
        • Mastoid region

        Examples mentioned in the source include transdermal preparations
        of GTN, fentanyl, nicotine, and estradiol.

        Advantages described include:

        • Smooth plasma concentrations
        • Less fluctuation
        • Little first-pass metabolism
        • Convenience
        • Potentially improved patient compliance

        Local irritation and erythema may occur. Rotating application sites
        can help minimize local irritation.
      `
    },

    {
      id: 'inhalation-route',
      heading: 'Inhalational Administration',
      content: `
        Volatile liquids and gases can be administered by inhalation
        for systemic action.

        General anaesthetics are given as an example.

        Absorption occurs across the large surface area of the alveoli,
        allowing very rapid action.

        When administration is stopped, the drug can diffuse back and
        be eliminated through expired air.

        This permits controlled administration with moment-to-moment
        adjustment.

        The source also notes that irritant vapours can cause inflammation
        of the respiratory tract and increase secretion.
      `
    },

    {
      id: 'nasal-route',
      heading: 'Nasal Administration',
      content: `
        The nasal mucous membrane can readily absorb many drugs.

        The route bypasses digestive juices and hepatic first-pass metabolism.

        Examples mentioned in the source include:

        • GnRH agonists
        • Desmopressin

        These may be administered as sprays or nebulized solutions.

        The source also notes that nasal administration has been explored
        for certain peptide drugs and for approaches involving drugs such
        as insulin and strategies intended to bypass the blood-brain barrier.
      `
    },

    {
      id: 'parenteral-route',
      heading: 'Parenteral Administration',
      content: `
        The term parenteral is derived from:

        Par = beyond
        Enteral = intestinal

        Conventionally, parenteral administration refers to administration
        by injection, delivering the drug directly into tissue fluid or blood
        without requiring passage across the enteral mucosa.

        Major advantages include:

        • Faster and more reliable drug action
        • Useful in emergencies
        • Avoidance of gastric irritation and vomiting
        • Can be used in unconscious, uncooperative, or vomiting patients
        • No interference from food or digestive juices
        • Bypasses hepatic first-pass metabolism

        Important disadvantages include:

        • Sterile preparation is required
        • Higher cost
        • Invasive technique
        • Pain or discomfort
        • Often requires assistance
        • Possibility of local tissue injury
        • Greater procedural risk than oral administration
      `
    },

    {
      id: 'subcutaneous-route',
      heading: 'Subcutaneous Administration',
      content: `
        In subcutaneous administration, the drug is deposited into
        loose subcutaneous tissue.

        The source describes subcutaneous tissue as less vascular than
        muscle, so absorption is slower than after intramuscular injection.

        Important characteristics include:

        • Only small volumes can generally be injected
        • Deep penetration is not required
        • Self-injection is possible
        • Irritant drugs may cause problems because the tissue is richly
          supplied with nerves
        • Absorption can be delayed in shock because of vasoconstriction
        • Depot preparations can be used for prolonged action

        Special forms described in the source include dermojet administration
        and pellet implantation.
      `
    },

    {
      id: 'dermojet',
      heading: 'Dermojet Administration',
      content: `
        Dermojet administration uses a high-velocity jet of drug solution
        projected through a very fine opening.

        A needle is not used.

        The solution passes through the superficial layers and is deposited
        in subcutaneous tissue.

        The source describes this method as essentially painless and suitable
        for mass inoculation.
      `
    },

    {
      id: 'pellet-implants',
      heading: 'Pellet and Subcutaneous Implants',
      content: `
        A solid drug pellet can be introduced into subcutaneous tissue
        using a trocar and cannula.

        The source describes this approach as providing sustained release
        over weeks or months.

        It also describes nonbiodegradable and biodegradable implants
        in which drug is released slowly and relatively uniformly.

        Nonbiodegradable implants require later removal, whereas biodegradable
        implants do not require removal for that reason.

        The source mentions use in hormones and contraceptives and gives
        NORPLANT as an example.
      `
    },

    {
      id: 'intramuscular-route',
      heading: 'Intramuscular Administration',
      content: `
        In intramuscular administration, the drug is injected into
        a large skeletal muscle.

        Examples of muscles mentioned include:

        • Deltoid
        • Triceps
        • Gluteus maximus
        • Rectus femoris

        Muscle is more vascular than subcutaneous tissue, so absorption
        of aqueous solutions is faster.

        Mildly irritant drugs may be administered intramuscularly.

        Depot preparations such as oily solutions and aqueous suspensions
        can also be administered by this route.

        Self-injection may be impractical because deeper penetration is
        required.

        The source advises avoiding intramuscular injections in patients
        receiving anticoagulant treatment because of the risk of local
        haematoma.
      `
    },

    {
      id: 'intravenous-route',
      heading: 'Intravenous Administration',
      content: `
        In intravenous administration, the drug is injected as a bolus
        or infused slowly into a vein.

        Because the drug enters the bloodstream directly, effects can
        occur immediately.

        This makes the route particularly valuable in emergency situations.

        The source notes that the drug becomes diluted in blood, allowing
        administration of some highly irritant drugs that would not be
        suitable for other routes.

        Important hazards include:

        • Thrombophlebitis
        • Tissue necrosis following extravasation
        • Air embolism

        Only suitable aqueous preparations should be administered intravenously;
        suspensions are unsuitable because particles may produce embolic risk.

        There are no depot preparations for intravenous administration.

        Intravenous administration provides 100% bioavailability.

        When the response can be accurately measured and the drug is short
        acting, the dose can be titrated according to response. The source
        gives blood pressure and sodium nitroprusside as examples.

        The source describes intravenous administration as a high-risk route
        because vital organs can be exposed rapidly to high drug concentrations.
      `
    },

    {
      id: 'intradermal-route',
      heading: 'Intradermal Administration',
      content: `
        In intradermal administration, the drug is injected into the skin.

        The injection produces a raised bleb.

        Examples mentioned include:

        • BCG vaccination
        • Sensitivity testing

        The source describes intradermal administration as a route used
        for specific purposes rather than routine systemic drug delivery.
      `
    },

    {
      id: 'first-pass-route',
      heading: 'Routes and First-Pass Metabolism',
      content: `
        The route of administration influences whether and how much drug
        is exposed to hepatic first-pass metabolism.

        The source emphasizes that orally absorbed drug undergoes first-pass
        metabolism in the intestinal wall and liver.

        It also states that approximately half of drug absorbed from the
        rectum passes through the liver, depending on the venous drainage
        through which the drug is absorbed.

        Sublingual administration can bypass hepatic first-pass metabolism
        because drug absorbed through the oral mucosa enters systemic
        circulation directly.

        Cutaneous/transdermal and several parenteral routes also avoid the
        usual gastrointestinal absorption pathway and can reduce or bypass
        hepatic first-pass metabolism.
      `
    },

    {
      id: 'route-clinical-integration',
      heading: 'Putting Route Selection Together',
      content: `
        Route selection is not based on one factor alone.

        A practical decision sequence is:

        Drug properties
        ↓
        Desired site of action
        ↓
        Required speed of response
        ↓
        Absorption characteristics
        ↓
        First-pass metabolism
        ↓
        Required dosage accuracy
        ↓
        Patient condition
        ↓
        Appropriate route

        For example, an unconscious or repeatedly vomiting patient may not
        be able to receive a drug effectively by mouth.

        In an emergency, a route capable of producing rapid and predictable
        drug action may be preferred.

        For localized disease, direct local administration may allow a high
        concentration at the target site while minimizing systemic exposure.

        The route is therefore part of the pharmacological decision—not
        simply a method of putting a drug into the body.
      `
    }
  ],

  keyPoints: [
    'Routes of drug administration are broadly classified into local and systemic routes.',
    'Local routes aim to produce drug action at a localized site with minimal systemic exposure.',
    'Systemic routes are intended to result in absorption into the bloodstream.',
    'Route selection depends on drug properties, desired site of action, absorption, first-pass metabolism, required speed, dosage accuracy, and patient condition.',
    'Oral administration is convenient, noninvasive, and commonly used but may have variable absorption and can be affected by digestive juices and hepatic first-pass metabolism.',
    'Sublingual and buccal administration can produce relatively rapid absorption and bypass hepatic first-pass metabolism for absorbed drug.',
    'Rectal absorption can be irregular and unpredictable but may be useful when oral administration is difficult.',
    'Cutaneous administration can provide slow and prolonged absorption for suitable lipid-soluble drugs.',
    'Transdermal systems are designed to deliver drug through the skin into systemic circulation at a controlled rate.',
    'Inhalational administration can produce very rapid absorption because of the large alveolar surface.',
    'Nasal administration can bypass digestive juices and hepatic first-pass metabolism.',
    'Parenteral administration delivers drugs into tissue fluid or blood without crossing the enteral mucosa.',
    'Subcutaneous absorption is generally slower than intramuscular absorption because subcutaneous tissue is less vascular.',
    'Intramuscular administration allows faster absorption of aqueous solutions than subcutaneous administration.',
    'Intravenous administration delivers drug directly into the bloodstream and has 100% bioavailability.',
    'Intravenous administration allows titration when drug effect can be accurately measured.',
    'Intradermal administration is used for specific purposes such as BCG vaccination and sensitivity testing.',
    'The correct route depends on both the drug and the patient.'
  ],

  rapid: [
    {
      term: 'Local route',
      meaning: 'Administration intended primarily for localized action.',
      definition: 'Administration intended primarily for localized action.'
    },
    {
      term: 'Systemic route',
      meaning: 'Administration intended to result in drug entry into the bloodstream and distribution through the body.',
      definition: 'Administration intended to result in drug entry into the bloodstream and distribution through the body.'
    },
    {
      term: 'Oral',
      meaning: 'Drug administered by mouth.',
      definition: 'Drug administered by mouth.'
    },
    {
      term: 'Sublingual',
      meaning: 'Drug placed under the tongue for mucosal absorption.',
      definition: 'Drug placed under the tongue for mucosal absorption.'
    },
    {
      term: 'Buccal',
      meaning: 'Drug administered through the buccal mucosa.',
      definition: 'Drug administered through the buccal mucosa.'
    },
    {
      term: 'Rectal',
      meaning: 'Drug administered through the rectum.',
      definition: 'Drug administered through the rectum.'
    },
    {
      term: 'Transdermal',
      meaning: 'Drug delivered through the skin into systemic circulation.',
      definition: 'Drug delivered through the skin into systemic circulation.'
    },
    {
      term: 'Inhalational',
      meaning: 'Drug administered through the respiratory tract by inhalation.',
      definition: 'Drug administered through the respiratory tract by inhalation.'
    },
    {
      term: 'Nasal',
      meaning: 'Drug absorbed through the nasal mucosa.',
      definition: 'Drug absorbed through the nasal mucosa.'
    },
    {
      term: 'Parenteral',
      meaning: 'Administration, conventionally by injection, beyond the enteral route.',
      definition: 'Administration, conventionally by injection, beyond the enteral route.'
    },
    {
      term: 'Subcutaneous',
      meaning: 'Drug deposited into subcutaneous tissue.',
      definition: 'Drug deposited into subcutaneous tissue.'
    },
    {
      term: 'Intramuscular',
      meaning: 'Drug injected into skeletal muscle.',
      definition: 'Drug injected into skeletal muscle.'
    },
    {
      term: 'Intravenous',
      meaning: 'Drug injected or infused directly into a vein.',
      definition: 'Drug injected or infused directly into a vein.'
    },
    {
      term: 'Intradermal',
      meaning: 'Drug injected into the skin.',
      definition: 'Drug injected into the skin.'
    },
    {
      term: 'First-pass metabolism',
      meaning: 'Presystemic metabolism encountered by drug before or during its first passage into systemic circulation, especially after oral administration.',
      definition: 'Presystemic metabolism encountered by drug before or during its first passage into systemic circulation, especially after oral administration.'
    }
  ],

  tables: [
    {
      title: 'Hierarchical Classification Architecture of Routes of Drug Administration',
      headers: ['Major Division', 'Branch / Category', 'Sub-Route / Technique', 'Key Anatomical Site', 'Clinical Representative Examples'],
      rows: [
        ['1. LOCAL ROUTES', 'Topical', 'Skin', 'Cutaneous epidermis & dermis', 'Calamine lotion, clotrimazole cream, neomycin ointment'],
        ['1. LOCAL ROUTES', 'Topical', 'Eye', 'Conjunctival sac, cornea, anterior chamber', 'Timolol maleate drops, ciprofloxacin drops, atropine ointment'],
        ['1. LOCAL ROUTES', 'Topical', 'Ear', 'External auditory canal', 'Polymyxin-B ear drops, chloramphenicol drops, wax drops'],
        ['1. LOCAL ROUTES', 'Topical', 'Nasal mucosa', 'Nasal respiratory epithelium', 'Oxymetazoline spray, xylometazoline drops, fluticasone spray'],
        ['1. LOCAL ROUTES', 'Topical', 'Oral / oropharyngeal mucosa', 'Buccal & pharyngeal mucosal lining', 'Clotrimazole lozenge, chlorhexidine rinse, lignocaine viscous'],
        ['1. LOCAL ROUTES', 'Topical', 'Vaginal / rectal local application', 'Vaginal canal or anal mucosal fold', 'Clotrimazole pessaries, hydrocortisone proctitis foam/enema'],
        ['1. LOCAL ROUTES', 'Local injection', 'Intra-articular', 'Synovial cavity of movable joint', 'Triamcinolone acetonide in rheumatoid or osteoarthritis of knee'],
        ['1. LOCAL ROUTES', 'Local injection', 'Perineural / local infiltration', 'Around peripheral nerve trunk or wound margin', 'Lignocaine 2% with/without adrenaline for wound suturing'],
        ['1. LOCAL ROUTES', 'Local injection', 'Intrathecal', 'Subarachnoid space (lumbar puncture L3-L4)', 'Bupivacaine spinal anaesthesia, methotrexate in leukemia'],
        ['1. LOCAL ROUTES', 'Local injection', 'Retrobulbar', 'Behind eyeball into retrobulbar muscle cone', 'Lignocaine block for cataract extraction or ocular surgery'],
        ['1. LOCAL ROUTES', 'Local arterial administration', 'Close intra-arterial infusion', 'Regional feeding artery (femoral/brachial)', 'Diagnostic coronary/cerebral angiographic contrast; limb cancer perfusion'],
        ['2. SYSTEMIC ROUTES', 'A. ENTERAL / GI', 'Oral', 'Alimentary canal (stomach and intestines)', 'Paracetamol tablet, amoxicillin capsule, metformin tablet'],
        ['2. SYSTEMIC ROUTES', 'A. ENTERAL / GI', 'Rectal', 'Rectal venous plexus into systemic circulation', 'Diazepam rectal solution for pediatric status epilepticus'],
        ['2. SYSTEMIC ROUTES', 'B. MUCOSAL / TRANSMUCOSAL', 'Sublingual', 'Sublingual mucosa into superior vena cava', 'Glyceryl trinitrate (GTN) for acute relief of angina pectoris'],
        ['2. SYSTEMIC ROUTES', 'B. MUCOSAL / TRANSMUCOSAL', 'Buccal', 'Cheek pouch mucosa into venous circulation', 'Prochlorperazine buccal tablet for severe vestibular nausea'],
        ['2. SYSTEMIC ROUTES', 'B. MUCOSAL / TRANSMUCOSAL', 'Nasal', 'Nasal mucosal microvascular bed', 'Desmopressin spray in diabetes insipidus, buserelin / GnRH analogs'],
        ['2. SYSTEMIC ROUTES', 'C. RESPIRATORY', 'Inhalational', 'Alveolar-capillary exchange membrane', 'Sevoflurane, isoflurane, nitrous oxide general anaesthetics'],
        ['2. SYSTEMIC ROUTES', 'D. TRANSDERMAL', 'Transdermal patch/system', 'Stratum corneum into dermal capillary bed', 'GTN patch, fentanyl patch, nicotine patch, estradiol patch'],
        ['2. SYSTEMIC ROUTES', 'E. PARENTERAL', 'Intravenous (IV)', 'Direct intravascular lumen', 'Sodium nitroprusside infusion, IV adrenaline in cardiac arrest'],
        ['2. SYSTEMIC ROUTES', 'E. PARENTERAL', 'Intramuscular (IM)', 'Vascular skeletal muscle mass', 'Ceftriaxone, haloperidol decanoate, tetanus toxoid vaccine'],
        ['2. SYSTEMIC ROUTES', 'E. PARENTERAL', 'Subcutaneous (SC)', 'Loose connective hypodermis', 'Insulin in diabetes, heparin, Norplant progestin contraceptive implant'],
        ['2. SYSTEMIC ROUTES', 'E. PARENTERAL', 'Intradermal (ID)', 'Upper dermis (raising a visible bleb)', 'BCG vaccination, Mantoux tuberculin test, drug allergy test']
      ]
    }
  ],

  animation: 'routes-of-drug-administration',

  quiz: [
    {
      question: 'What are the two broad categories of routes of drug administration described in the lesson?',
      options: [
        'Enteral and parenteral',
        'Local and systemic',
        'Oral and injectable',
        'Mucosal and vascular'
      ],
      answer: 1,
      explanation:
        'The source broadly divides routes into local routes and systemic routes.'
    },

    {
      question: 'What is the primary purpose of a local route?',
      options: [
        'To expose the entire body to the drug',
        'To maximize hepatic metabolism',
        'To produce drug action at a localized site',
        'To ensure 100% bioavailability'
      ],
      answer: 2,
      explanation:
        'Local routes are used to deliver high drug concentrations at the desired localized site while minimizing systemic exposure.'
    },

    {
      question: 'Which factor can influence the choice of drug administration route?',
      options: [
        'Drug solubility',
        'Patient condition',
        'Required speed of response',
        'All of the above'
      ],
      answer: 3,
      explanation:
        'Drug properties, patient condition, speed of response, absorption, first-pass metabolism, dosage accuracy, and desired site all influence route selection.'
    },

    {
      question: 'Which route is described as the oldest and commonest mode of drug administration?',
      options: [
        'Intravenous',
        'Oral',
        'Intradermal',
        'Inhalational'
      ],
      answer: 1,
      explanation:
        'The source describes oral ingestion as the oldest and commonest mode of administration.'
    },

    {
      question: 'Which is an important limitation of oral administration?',
      options: [
        'It is always painful',
        'It always requires sterile preparation',
        'Absorption may be variable and erratic',
        'It always produces immediate action'
      ],
      answer: 2,
      explanation:
        'The source notes that oral drug absorption may be variable and erratic.'
    },

    {
      question: 'What is a major advantage of sublingual administration?',
      options: [
        'It increases hepatic first-pass metabolism',
        'It can bypass hepatic first-pass metabolism',
        'It requires intestinal absorption',
        'It always produces prolonged depot action'
      ],
      answer: 1,
      explanation:
        'Drug absorbed through the oral mucosa can enter systemic circulation without undergoing the usual hepatic first-pass metabolism.'
    },

    {
      question: 'Which drug is mentioned as an example of sublingual administration?',
      options: [
        'Glyceryl trinitrate',
        'Insulin',
        'Penicillin G',
        'Streptomycin'
      ],
      answer: 0,
      explanation:
        'The source specifically lists glyceryl trinitrate (GTN) as a sublingual drug.'
    },

    {
      question: 'Which route may be useful when a patient is repeatedly vomiting?',
      options: [
        'Oral only',
        'Rectal',
        'Oral tablet only',
        'None of the routes'
      ],
      answer: 1,
      explanation:
        'The source describes rectal administration as an option when oral administration is difficult because of recurrent vomiting.'
    },

    {
      question: 'What type of drug is particularly suitable for slow absorption through the skin?',
      options: [
        'Highly lipid-soluble drugs',
        'Only gases',
        'Only water-insoluble crystals',
        'Only proteins'
      ],
      answer: 0,
      explanation:
        'The source states that highly lipid-soluble drugs can be applied to the skin for slow and prolonged absorption.'
    },

    {
      question: 'What is the purpose of a transdermal therapeutic system?',
      options: [
        'To deliver drug through the skin into systemic circulation',
        'To destroy drug in the stomach',
        'To inject drug directly into muscle',
        'To prevent all drug absorption'
      ],
      answer: 0,
      explanation:
        'Transdermal patches deliver drug through the stratum corneum into systemic circulation.'
    },

    {
      question: 'Why can inhalational administration produce very rapid action?',
      options: [
        'Because drug is absorbed through the large alveolar surface',
        'Because it always bypasses the lungs',
        'Because it is injected directly into a vein',
        'Because it requires hepatic activation'
      ],
      answer: 0,
      explanation:
        'The source attributes rapid absorption to the vast surface area of the alveoli.'
    },

    {
      question: 'Which route can bypass digestive juices and hepatic first-pass metabolism?',
      options: [
        'Nasal',
        'Oral',
        'Only rectal',
        'Only gastric'
      ],
      answer: 0,
      explanation:
        'The source states that drugs administered nasally can bypass digestive juices and the liver.'
    },

    {
      question: 'What does the term parenteral conventionally refer to?',
      options: [
        'Administration by mouth',
        'Administration by injection beyond the enteral route',
        'Only topical administration',
        'Only inhalation'
      ],
      answer: 1,
      explanation:
        'Parenteral conventionally refers to administration by injection that avoids crossing the enteral mucosa.'
    },

    {
      question: 'Which is an advantage of parenteral administration?',
      options: [
        'It always requires intestinal absorption',
        'It can be used in unconscious or vomiting patients',
        'It is always cheaper than oral administration',
        'It is completely noninvasive'
      ],
      answer: 1,
      explanation:
        'Parenteral routes can be used when oral administration is not practical, including in unconscious or vomiting patients.'
    },

    {
      question: 'Which route generally has slower absorption than intramuscular administration?',
      options: [
        'Subcutaneous',
        'Intravenous',
        'Inhalational',
        'Sublingual'
      ],
      answer: 0,
      explanation:
        'The source describes subcutaneous tissue as less vascular, resulting in slower absorption than intramuscular administration.'
    },

    {
      question: 'Why should subcutaneous administration be used cautiously in shock?',
      options: [
        'Shock causes vasoconstriction that can delay absorption',
        'Shock always increases subcutaneous absorption',
        'The drug becomes orally inactive',
        'It causes immediate hepatic metabolism'
      ],
      answer: 0,
      explanation:
        'The source notes that vasoconstriction in shock can delay subcutaneous absorption.'
    },

    {
      question: 'Which route delivers drug directly into the bloodstream?',
      options: [
        'Intravenous',
        'Topical',
        'Subcutaneous',
        'Intradermal'
      ],
      answer: 0,
      explanation:
        'Intravenous administration places the drug directly into the bloodstream.'
    },

    {
      question: 'What is the bioavailability of a drug administered intravenously?',
      options: [
        '25%',
        '50%',
        '75%',
        '100%'
      ],
      answer: 3,
      explanation:
        'The source states that intravenous administration has 100% bioavailability.'
    },

    {
      question: 'Which route allows dose titration according to measurable response when appropriate?',
      options: [
        'Intravenous',
        'Topical only',
        'Oral only',
        'Rectal only'
      ],
      answer: 0,
      explanation:
        'The source describes intravenous administration as allowing titration when the response can be accurately measured and the drug is short acting.'
    },

    {
      question: 'Which route produces a bleb and is used for purposes such as BCG vaccination and sensitivity testing?',
      options: [
        'Intramuscular',
        'Subcutaneous',
        'Intradermal',
        'Intravenous'
      ],
      answer: 2,
      explanation:
        'Intradermal injection is described as producing a bleb and being used for BCG vaccination and sensitivity testing.'
    },

    {
      question: 'Which factor is especially important when selecting a route for an emergency?',
      options: [
        'Rapidity of response',
        'Taste of the tablet only',
        'Colour of the dosage form',
        'Packaging size'
      ],
      answer: 0,
      explanation:
        'The required rapidity of response is one of the listed factors governing route selection.'
    }
  ]
};

export const lessons = [routesOfDrugAdministrationLesson];

export const topic = {
  id: 'general_pharmacology',
  title: 'General Pharmacology'
};

export default routesOfDrugAdministrationLesson;
