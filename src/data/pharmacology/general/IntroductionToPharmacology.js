// IntroductionToPharmacology.js

export const introductionToPharmacologyLesson = {
  id: 'introduction-to-pharmacology',
  isNew: true,
  isLatest: false,
  badge: 'NEW CHAPTER',
  dateAdded: '2026-09-17',
  addedOrder: 12,

  categoryId: 'general_pharmacology',
  topic: 'General Pharmacology',

  title: 'Introduction to Pharmacology',
  subtitle: 'Understanding Drugs, Their Actions, Movement, Names, Uses, and Classification',

  level: 'Beginner',
  time: '18–22 min',

  description:
    'Build the foundation of pharmacology by understanding what a drug is, how pharmacology developed, pharmacodynamics versus pharmacokinetics, pharmacotherapeutics, clinical pharmacology, chemotherapy, pharmacy, toxicology, drug nomenclature, drug compendia, essential medicines, prescription and over-the-counter drugs, and orphan drugs.',

  video: {
    youtubeId: '',
    title: 'Introduction to Pharmacology — Foundations of Drug Science'
  },

  objectives: [
    'Define pharmacology and explain its scope.',
    'Explain the meaning of the terms pharmacodynamics and pharmacokinetics.',
    'Differentiate what the drug does to the body from what the body does to the drug.',
    'Describe the major processes involved in pharmacokinetics.',
    'Explain pharmacotherapeutics and its relationship to disease treatment.',
    'Define clinical pharmacology and explain its role in evidence-based medicine.',
    'Explain the concept of chemotherapy and selective toxicity.',
    'Differentiate pharmacodynamic agents from chemotherapeutic agents.',
    'Define pharmacy and pharmaceutics.',
    'Explain the role of toxicology in drug safety and poisoning.',
    'Identify the three major categories of drug names.',
    'Differentiate chemical, non-proprietary, and proprietary drug names.',
    'Explain why non-proprietary names are important in prescribing.',
    'Describe the purpose of pharmacopoeias and formularies.',
    'Explain the concept of essential medicines.',
    'Identify major criteria used in selecting essential medicines.',
    'Differentiate prescription drugs from over-the-counter drugs.',
    'Explain the concept of orphan drugs.',
    'Understand why the same chemical substance can function as either a drug or a poison depending on dose.',
    'Recognize pharmacology as a foundation for rational therapeutics.'
  ],

  pharmacologySteps: [
    {
      step: 1,
      title: 'Define Pharmacology',
      description:
        'Understand pharmacology as the science concerned with drugs and their interactions with living systems.'
    },
    {
      step: 2,
      title: 'Understand Pharmacodynamics',
      description:
        'Study what the drug does to the body, including its physiological, biochemical, and molecular effects.'
    },
    {
      step: 3,
      title: 'Understand Pharmacokinetics',
      description:
        'Study what the body does to the drug through absorption, distribution, biotransformation, and excretion.'
    },
    {
      step: 4,
      title: 'Connect Drugs With Therapeutics',
      description:
        'Understand how pharmacological knowledge is applied to prevention, mitigation, and treatment of disease.'
    },
    {
      step: 5,
      title: 'Explore Related Disciplines',
      description:
        'Differentiate clinical pharmacology, chemotherapy, pharmacy, pharmaceutics, and toxicology.'
    },
    {
      step: 6,
      title: 'Decode Drug Names',
      description:
        'Recognize chemical, non-proprietary, and proprietary names and understand why naming matters.'
    },
    {
      step: 7,
      title: 'Use Drug Information Sources',
      description:
        'Understand pharmacopoeias, formularies, and other drug compendia as sources of medicinal information.'
    },
    {
      step: 8,
      title: 'Understand Special Drug Categories',
      description:
        'Learn the concepts of essential medicines, prescription drugs, OTC drugs, and orphan drugs.'
    }
  ],

  frameworks: [
    {
      name: 'PHARMACOLOGY-CORE',
      items: [
        {
          init: 'P',
          label: 'Pharmacodynamics'
        },
        {
          init: 'K',
          label: 'Pharmacokinetics'
        },
        {
          init: 'T',
          label: 'Therapeutics'
        },
        {
          init: 'S',
          label: 'Safety'
        }
      ]
    },

    {
      name: 'PD-VS-PK',
      items: [
        {
          init: 'PD',
          label: 'What the drug does to the body'
        },
        {
          init: 'PK',
          label: 'What the body does to the drug'
        }
      ]
    },

    {
      name: 'DRUG-NAMES',
      items: [
        {
          init: 'C',
          label: 'Chemical Name'
        },
        {
          init: 'N',
          label: 'Non-proprietary Name'
        },
        {
          init: 'B',
          label: 'Brand / Proprietary Name'
        }
      ]
    },

    {
      name: 'DRUG-INFORMATION',
      items: [
        {
          init: 'P',
          label: 'Pharmacopoeia'
        },
        {
          init: 'F',
          label: 'Formulary'
        },
        {
          init: 'C',
          label: 'Compendia'
        }
      ]
    },

    {
      name: 'ESSENTIAL-MEDICINE',
      items: [
        {
          init: 'E',
          label: 'Efficacy'
        },
        {
          init: 'S',
          label: 'Safety'
        },
        {
          init: 'Q',
          label: 'Quality'
        },
        {
          init: 'C',
          label: 'Cost'
        },
        {
          init: 'A',
          label: 'Availability'
        }
      ]
    }
  ],

  sections: [
    {
      id: 'what-is-pharmacology',
      heading: '1. What Is Pharmacology?',
      content: `
Pharmacology is the science of drugs.

The term is derived from Greek:

Pharmacon = drug

Logos = discourse or study

In a broad sense, pharmacology deals with the interaction of exogenously administered chemical molecules with living systems.

A chemical substance that can produce a biological response may be considered a drug in the broad pharmacological sense.

Pharmacology encompasses knowledge about drugs, with particular importance placed on information required for their effective and safe medicinal use.

The subject therefore connects:

Drug → Biological system → Response → Therapeutic effect → Safety

Pharmacology forms an important foundation for rational therapeutics because it explains not only what drugs do, but also how and why they produce their effects.
`
    },

    {
      id: 'history',
      heading: '2. Development of Pharmacology',
      content: `
For thousands of years, medicines were largely crude natural products with unknown chemical composition.

People could observe that a substance produced an effect, but the mechanism responsible for that effect was often unknown.

Pharmacology developed into an experimental science during the nineteenth century.

The source identifies Rudolf Buchheim as an important figure in the development of experimental pharmacology. He founded the first institute of pharmacology in Germany in 1847.

Later, Oswald Schmiedeberg and other major pharmacologists, including J. Langley, T. Frazer, P. Ehrlich, A. J. Clark, and J. J. Abel, contributed fundamental concepts to the discipline.

As pharmacology developed:

• Drugs were purified.
• Chemical structures were characterized.
• More potent and selective drugs were developed.
• Molecular targets were identified.
• Mechanisms of drug action became increasingly understood.

This scientific development helped establish pharmacology as a backbone of rational therapeutics.
`
    },

    {
      id: 'pharmacodynamics',
      heading: '3. Pharmacodynamics — What the Drug Does to the Body',
      content: `
Pharmacodynamics describes the effects of drugs on the body.

A useful memory rule is:

PHARMACODYNAMICS = WHAT THE DRUG DOES TO THE BODY

It includes:

• Physiological effects
• Biochemical effects
• Mechanisms of action
• Effects at organ-system level
• Effects at subcellular level
• Effects at macromolecular level

The source gives adrenaline as an example.

Adrenaline interacts with adrenoceptors.

This produces G-protein-mediated stimulation of cell membrane-bound adenylyl cyclase, increasing intracellular cyclic 3',5'-AMP.

The resulting biological effects include:

• Cardiac stimulation
• Hepatic glycogenolysis
• Hyperglycaemia

The example demonstrates how pharmacodynamics can connect:

Drug → Receptor → Signalling pathway → Cellular effect → Organ effect
`
    },

    {
      id: 'pharmacokinetics',
      heading: '4. Pharmacokinetics — What the Body Does to the Drug',
      content: `
Pharmacokinetics describes the movement of a drug into, through, and out of the body.

A simple memory rule is:

PHARMACOKINETICS = WHAT THE BODY DOES TO THE DRUG

The source identifies the major pharmacokinetic processes as:

• Absorption
• Distribution
• Binding / localization / storage
• Biotransformation
• Excretion

These processes determine the concentration of drug available at different sites over time.

The source uses paracetamol as an example.

It describes paracetamol as being rapidly and almost completely absorbed orally, reaching peak blood levels within approximately 30–60 minutes.

The example also describes plasma protein binding, distribution, hepatic metabolism, urinary excretion, half-life, and clearance.

This illustrates that pharmacokinetics follows the journey of the drug through the body.
`
    },

    {
      id: 'pd-vs-pk',
      heading: '5. Pharmacodynamics Versus Pharmacokinetics',
      content: `
The distinction between pharmacodynamics and pharmacokinetics is one of the most important foundations in pharmacology.

PHARMACODYNAMICS

What the drug does to the body.

Examples include:

• Receptor activation
• Enzyme inhibition
• Physiological response
• Biochemical response
• Therapeutic effect
• Adverse effect

PHARMACOKINETICS

What the body does to the drug.

Examples include:

• Absorption
• Distribution
• Binding
• Metabolism
• Excretion
• Plasma concentration over time

The easiest conceptual model is:

PHARMACOKINETICS:
Drug enters → moves through → is altered → leaves the body

PHARMACODYNAMICS:
Drug reaches target → interacts with target → produces biological response

Together they explain the relationship between drug concentration and drug effect.
`
    },

    {
      id: 'drug-definition',
      heading: '6. What Is a Drug?',
      content: `
The source describes a drug as a single active chemical entity present in a medicine and used for diagnosis, prevention, treatment, or cure of disease.

The WHO definition presented in the source is broader.

It describes a drug as a substance or product used, or intended to be used, to modify or explore physiological systems or pathological states for the benefit of the recipient.

The term "drug" is sometimes used in everyday language specifically for addictive, abused, or illicit substances.

The source emphasizes that this restricted use is narrower than the pharmacological meaning of the term.

In pharmacology, drug is fundamentally a scientific term referring to a substance capable of producing biological effects and, in the medicinal context, having therapeutic or diagnostic application.
`
    },

    {
      id: 'pharmacotherapeutics',
      heading: '7. Pharmacotherapeutics',
      content: `
Pharmacotherapeutics is the application of pharmacological information together with knowledge of disease for its prevention, mitigation, or cure.

It involves selecting an appropriate:

• Drug
• Dose
• Duration of treatment

The choice must take into account the specific characteristics of the patient.

Therefore:

Pharmacology = understanding drugs

Pharmacotherapeutics = applying that knowledge to patient treatment

This is where pharmacological knowledge becomes directly connected to rational therapeutic decision-making.
`
    },

    {
      id: 'clinical-pharmacology',
      heading: '8. Clinical Pharmacology',
      content: `
Clinical pharmacology is the scientific study of drugs in humans.

It includes pharmacodynamic and pharmacokinetic investigations in:

• Healthy volunteers
• Patients

It also includes:

• Evaluation of efficacy
• Evaluation of safety
• Comparative trials
• Comparison with other forms of treatment
• Surveillance of drug-use patterns
• Surveillance of adverse effects

The aim of clinical pharmacology is to generate evidence that supports optimum use of drugs.

It therefore has a direct relationship with evidence-based medicine.
`
    },

    {
      id: 'chemotherapy',
      heading: '9. Chemotherapy and Selective Toxicity',
      content: `
Chemotherapy refers to treatment of systemic infection or malignancy with specific drugs that have selective toxicity toward the infecting organism or malignant cell while producing no or minimal effects on host cells.

The central idea is:

Target → Infecting organism / malignant cell

while attempting to minimize:

Host cell damage

The source distinguishes two broad categories of drugs:

Pharmacodynamic agents:

Designed to produce pharmacodynamic effects in the recipient.

Chemotherapeutic agents:

Designed to inhibit or kill invading organisms or malignant cells while producing minimal pharmacodynamic effects in the recipient.

This distinction helps separate drugs primarily intended to modify host physiology from agents intended to selectively damage a pathological target.
`
    },

    {
      id: 'pharmacy-pharmaceutics',
      heading: '10. Pharmacy and Pharmaceutics',
      content: `
Pharmacy is described as the art and science of compounding and dispensing drugs or preparing suitable dosage forms for administration to humans or animals.

It includes activities such as:

• Collection
• Identification
• Purification
• Isolation
• Synthesis
• Standardization
• Quality control

Pharmaceutics refers primarily to the technological science involved in large-scale manufacture and formulation of drugs.

A useful distinction is:

PHARMACY → Compounding, dispensing, preparation, and handling of medicinal products

PHARMACEUTICS → Science and technology of pharmaceutical formulation and manufacture
`
    },

    {
      id: 'toxicology',
      heading: '11. Toxicology',
      content: `
Toxicology is the study of poisonous effects of drugs and other chemicals.

The source includes chemicals from:

• Household environments
• Environmental pollutants
• Industry
• Agriculture
• Deliberate poisoning

Toxicology emphasizes:

• Detection of poisoning
• Prevention of poisoning
• Treatment of poisoning
• Adverse effects of drugs

An important pharmacological principle is:

The same substance can act as a drug or a poison depending on the dose.

This makes dose an essential concept in understanding both therapeutic and toxic effects.
`
    },

    {
      id: 'drug-nomenclature',
      heading: '12. Drug Nomenclature',
      content: `
A drug can have several different names.

The source describes three major categories:

1. Chemical name
2. Non-proprietary name
3. Proprietary or brand name

Understanding these categories prevents confusion when the same active drug appears under different names.
`
    },

    {
      id: 'chemical-name',
      heading: '13. Chemical Name',
      content: `
The chemical name describes the chemical structure of the drug.

The source gives propranolol as an example with a detailed chemical name.

Chemical names can be extremely precise but are often cumbersome for prescribing and everyday clinical communication.

Manufacturers may initially use a code name during drug development before an approved name is established.

The source gives RO 15-1788 as an example of a development code that later became flumazenil.

Therefore:

Chemical name → describes chemical identity

Development code → temporary identification during development

Approved/non-proprietary name → practical scientific identification
`
    },

    {
      id: 'nonproprietary-name',
      heading: '14. Non-Proprietary Name',
      content: `
A non-proprietary name is the name accepted by a competent scientific body or authority.

The source discusses naming systems such as:

• United States Adopted Name (USAN)
• British Approved Name (BAN)
• Recommended International Nonproprietary Name (rINN)

International standardization of drug names helps provide consistency between countries.

The source notes that some older drugs may have more than one non-proprietary name.

Examples include:

Meperidine / Pethidine

Lidocaine / Lignocaine

The term "generic name" is commonly used for a non-proprietary name, although the source notes that this terminology is technically imprecise.

The important practical point is that non-proprietary names provide a standardized way of identifying active drugs.
`
    },

    {
      id: 'brand-name',
      heading: '15. Proprietary or Brand Name',
      content: `
A proprietary or brand name is assigned by the manufacturer and is its property or trademark.

One active drug may have multiple brand names.

For example, the source lists multiple brand names for atenolol from different manufacturers.

Brand names may be designed to be:

• Short
• Easy to remember
• Catchy
• Suggestive of the drug's intended use

Brand names may also differ between countries.

The source gives timolol eye drops as an example, noting different marketed brand names in the USA and India.

This explains why relying only on brand names can create confusion when identifying the active drug.
`
    },

    {
      id: 'why-nonproprietary',
      heading: '16. Why Non-Proprietary Names Matter',
      content: `
The source gives several reasons for using non-proprietary names in prescribing:

• Uniformity
• Convenience
• Economy
• Better comprehension

Pharmacological relationships can also become easier to recognize from standardized names.

For example, several beta-blockers share recognizable naming patterns even though their individual brand names may be completely different.

However, the source also notes that dependable brand prescribing may sometimes be considered when consistency of product quality and bioavailability is particularly important and regulatory quality control is not rigorous.

The key lesson is not that one naming system is universally sufficient.

Rather, clinicians and pharmacists need to understand the relationship between active-drug names and marketed products.
`
    },

    {
      id: 'drug-compendia',
      heading: '17. Drug Compendia',
      content: `
Drug compendia are compilations of information about drugs, generally organized as monographs.

They provide practical information about medicinal products.

The source distinguishes official and non-official compendia.

Official compendia include pharmacopoeias and formularies produced by government authorities and having legal status in their respective settings.

Non-official compendia may be produced by professional organizations and provide supplementary drug information.
`
    },

    {
      id: 'pharmacopoeia',
      heading: '18. Pharmacopoeias',
      content: `
Pharmacopoeias contain detailed standards and specifications related to officially recognized drugs.

The source describes information such as:

• Chemical structure
• Molecular weight
• Physical characteristics
• Chemical characteristics
• Solubility
• Identification methods
• Assay methods
• Purity standards
• Storage conditions
• Dosage forms

They are particularly important to drug manufacturers and regulatory authorities.

Examples mentioned in the source include:

• Indian Pharmacopoeia (IP)
• British Pharmacopoeia (BP)
• European Pharmacopoeia (Eur P)
• United States Pharmacopeia (USP)
`
    },

    {
      id: 'formularies',
      heading: '19. Formularies',
      content: `
Formularies are practical compilations of information about selected medicines available for medicinal use.

They may include:

• Indications
• Doses
• Dosage forms
• Contraindications
• Precautions
• Adverse effects
• Storage information

Drugs are generally organized according to therapeutic class.

Formularies may also include:

• Rational fixed-dose combinations
• Commentary on drug classes
• Clinical conditions
• Treatment guidelines
• Informative appendices

The source notes that formularies can be particularly helpful to prescribers.
`
    },

    {
      id: 'other-compendia',
      heading: '20. Other Drug References',
      content: `
The source also describes non-official drug references.

Martindale: The Complete Drug Reference is presented as an extensive international compilation of information about medicines.

The source describes it as containing:

• Pharmaceutical information
• Pharmacological information
• Therapeutic information
• Information on medicines used or registered internationally
• Information about newer launches

Other references mentioned include:

• Physicians' Desk Reference (PDR)
• Drug Facts and Comparisons

Together, drug compendia provide structured sources of information that support safe and informed medicine use.
`
    },

    {
      id: 'essential-medicines',
      heading: '21. Essential Medicines',
      content: `
Essential medicines are medicines selected to satisfy the priority healthcare needs of a population.

The WHO definition presented in the source emphasizes:

• Public health relevance
• Evidence of efficacy
• Safety
• Comparative cost-effectiveness
• Availability
• Adequate quantity
• Appropriate dosage forms
• Assured quality
• Adequate information
• Affordability

The essential medicines concept recognizes that healthcare systems have limited resources.

A relatively small group of well-selected medicines can address a large proportion of priority healthcare needs.

Therefore, selection focuses not simply on whether a medicine exists, but on whether it provides appropriate value for population health needs.
`
    },

    {
      id: 'essential-medicine-selection',
      heading: '22. Criteria for Selecting Essential Medicines',
      content: `
The source identifies several criteria used when selecting essential medicines.

1. Efficacy and safety

Adequate clinical evidence should support efficacy and safety.

2. Quality

The medicine should be available in a form in which quality, including bioavailability and stability during storage, can be assured.

3. Disease pattern

Selection should reflect prevalent diseases.

4. Healthcare infrastructure

Availability of facilities and trained personnel should be considered.

5. Financial resources

Economic realities influence selection.

6. Population factors

Genetic, demographic, and environmental factors can be relevant.

7. Comparative evaluation

When similar medicines exist, selection may consider:

• Efficacy
• Safety
• Quality
• Price
• Availability

8. Pharmacokinetic characteristics

Comparative pharmacokinetic properties may influence selection.

9. Local manufacturing and storage

Local capacity may also be considered.

10. Fixed-dose combinations

The source states that most essential medicines should be single compounds. Fixed-ratio combinations should be included when the combination provides a demonstrated therapeutic, safety, adherence, or drug-resistance advantage.

11. Continuous review

Essential-medicine selection should change as public-health priorities, epidemiology, formulations, and pharmacological knowledge change.
`
    },

    {
      id: 'who-model-list',
      heading: '23. WHO Model List and National Lists',
      content: `
The source describes the WHO Model List of Essential Drugs as a framework that member countries can adapt according to their local needs.

It notes that the first WHO Model List was introduced in 1977 and subsequently revised.

The source also discusses India's National Essential Drugs List and its later development as the National List of Essential Medicines.

The underlying principle is:

Global guidance → Local adaptation → National priority healthcare needs

The source also describes potential benefits of adopting essential-medicine lists for procurement and supply, including improved availability, cost savings, and more rational use of medicines.
`
    },

    {
      id: 'prescription-otc',
      heading: '24. Prescription and Non-Prescription Drugs',
      content: `
Drugs can also be classified according to whether they require a prescription.

Prescription drugs are medicines that, under applicable drug regulations, require a prescription from a registered medical practitioner.

The source discusses Schedule H medicines in the Indian regulatory context.

Non-prescription or over-the-counter (OTC) medicines can be obtained without a prescription under applicable regulations.

Examples mentioned in the source include:

• Simple analgesics such as paracetamol and aspirin
• Antacids
• Laxatives such as senna and lactulose
• Vitamins
• Ferrous salts

The exact legal classification and sale requirements depend on the applicable regulations and can change over time.

The key pharmacology concept is:

Prescription status is a regulatory classification, not simply a measure of whether a drug has biological activity.
`
    },

    {
      id: 'orphan-drugs',
      heading: '25. Orphan Drugs',
      content: `
Orphan drugs are medicines or biological products developed for diagnosis, prevention, or treatment of rare diseases or conditions.

The source also includes certain diseases that are more common but restricted to resource-poor or endemic settings where development and marketing may not reasonably recover their costs.

The central problem is economic:

Small patient population → Limited commercial market → Difficult recovery of development and marketing costs

Despite this, orphan drugs may be medically important and potentially life-saving for affected patients.

Governments may therefore provide incentives to encourage pharmaceutical companies to develop and market treatments for rare diseases.

The source gives examples including:

• Sodium nitrite
• Fomepizole
• Liposomal amphotericin B
• Miltefosine
• Rifabutin
• Succimer
• Somatropin
• Digoxin immune Fab
• Liothyronine (T3)
`
    },

    {
      id: 'final-foundation',
      heading: '26. The Pharmacology Foundation',
      content: `
The entire lesson can be organized around one central idea:

Pharmacology explains drugs from multiple perspectives.

WHAT IS THE DRUG?

→ Drug definition and nomenclature

WHAT DOES THE DRUG DO?

→ Pharmacodynamics

WHAT DOES THE BODY DO TO THE DRUG?

→ Pharmacokinetics

HOW IS THE DRUG USED TO TREAT DISEASE?

→ Pharmacotherapeutics

HOW IS THE DRUG STUDIED IN HUMANS?

→ Clinical pharmacology

HOW CAN THE DRUG TARGET PATHOGENS OR MALIGNANT CELLS?

→ Chemotherapy

HOW IS THE MEDICINE PREPARED AND DISPENSED?

→ Pharmacy and pharmaceutics

WHAT HAPPENS WHEN A CHEMICAL PRODUCES HARM?

→ Toxicology

WHERE DO WE FIND RELIABLE DRUG INFORMATION?

→ Pharmacopoeias, formularies, and other compendia

WHICH MEDICINES SHOULD PRIORITY HEALTHCARE SYSTEMS ENSURE ARE AVAILABLE?

→ Essential medicines

WHO NEEDS PRESCRIPTION CONTROL?

→ Prescription versus OTC classification

WHAT HAPPENS WHEN A MEDICINE IS NEEDED FOR A RARE CONDITION WITH A LIMITED MARKET?

→ Orphan-drug concept

Together, these concepts provide the foundation for studying the rest of pharmacology.
`
    }
  ],

  keyPoints: [
    'Pharmacology is the science of drugs.',
    'Pharmacology studies interactions between chemical substances and living systems.',
    'Pharmacology is a foundation of rational therapeutics.',
    'Pharmacodynamics means what the drug does to the body.',
    'Pharmacokinetics means what the body does to the drug.',
    'Pharmacodynamics includes physiological, biochemical, and molecular effects.',
    'Pharmacokinetics includes absorption, distribution, binding/localization/storage, biotransformation, and excretion.',
    'Pharmacotherapeutics applies pharmacological knowledge to disease prevention, mitigation, and treatment.',
    'Clinical pharmacology studies drugs in humans.',
    'Clinical pharmacology evaluates efficacy, safety, pharmacokinetics, pharmacodynamics, and comparative treatment outcomes.',
    'Clinical pharmacology supports evidence-based medicine.',
    'Chemotherapy uses drugs with selective toxicity against infecting organisms or malignant cells.',
    'Pharmacy involves compounding, dispensing, and preparation of dosage forms.',
    'Pharmaceutics is primarily concerned with pharmaceutical technology and manufacture.',
    'Toxicology studies poisonous effects of drugs and chemicals.',
    'The same chemical can act as a drug or poison depending on dose.',
    'A drug can have chemical, non-proprietary, and proprietary names.',
    'Chemical names describe chemical structure but can be cumbersome for prescribing.',
    'Non-proprietary names provide standardized scientific identification.',
    'Proprietary names are manufacturer-assigned brand names.',
    'The same active drug may have multiple brand names.',
    'Brand names can differ between countries.',
    'Drug compendia compile structured information about medicines.',
    'Pharmacopoeias contain standards and specifications for officially recognized drugs.',
    'Formularies provide practical clinical information about selected medicines.',
    'Essential medicines are selected to satisfy priority healthcare needs.',
    'Essential-medicine selection considers efficacy, safety, quality, cost, availability, and population needs.',
    'Essential-medicine lists require continuous review as healthcare priorities change.',
    'Prescription and OTC status is a regulatory classification.',
    'Orphan drugs address rare diseases or conditions with limited commercial markets.',
    'Pharmacology connects drug chemistry, mechanisms, movement, therapeutics, safety, regulation, and clinical use.'
  ],

  rapid: [
    'Pharmacology = science of drugs.',
    'Pharmacodynamics = what the drug does to the body.',
    'Pharmacokinetics = what the body does to the drug.',
    'PK includes absorption, distribution, metabolism/biotransformation, and excretion.',
    'Pharmacotherapeutics = application of pharmacology to treatment of disease.',
    'Clinical pharmacology = scientific study of drugs in humans.',
    'Clinical pharmacology supports evidence-based medicine.',
    'Chemotherapy = treatment using agents with selective toxicity toward pathogens or malignant cells.',
    'Pharmacy = compounding, dispensing, and preparation of medicines.',
    'Pharmaceutics = pharmaceutical technology and manufacture.',
    'Toxicology = study of poisonous effects of drugs and chemicals.',
    'Dose can determine whether a substance produces therapeutic or toxic effects.',
    'Drug names = chemical + non-proprietary + proprietary.',
    'Chemical name describes chemical structure.',
    'Non-proprietary name = standardized scientific name.',
    'Proprietary name = manufacturer-assigned brand name.',
    'Pharmacopoeia = standards and specifications.',
    'Formulary = practical information about selected medicines.',
    'Essential medicines address priority healthcare needs.',
    'Essential medicines are selected using evidence, safety, quality, cost, and availability considerations.',
    'Prescription drugs require prescription under applicable regulations.',
    'OTC drugs can be obtained without a prescription under applicable regulations.',
    'Orphan drugs are associated with rare diseases or limited commercial markets.',
    'Pharmacology is the foundation for rational therapeutics.'
  ],

  animation: 'introduction-to-pharmacology',

  quiz: [
    {
      question: 'What is pharmacology?',
      options: [
        'The study of only pharmaceutical manufacturing',
        'The science of drugs',
        'The study of surgery',
        'The study of anatomy'
      ],
      answer: 1,
      explanation:
        'Pharmacology is the science of drugs and their interactions with living systems.'
    },

    {
      question: 'What does pharmacodynamics describe?',
      options: [
        'What the body does to the drug',
        'What the drug does to the body',
        'How drugs are manufactured',
        'How drugs are named'
      ],
      answer: 1,
      explanation:
        'Pharmacodynamics describes the physiological, biochemical, and molecular effects of drugs on the body.'
    },

    {
      question: 'What does pharmacokinetics describe?',
      options: [
        'What the drug does to the body',
        'What the body does to the drug',
        'How a drug is prescribed',
        'How a drug is patented'
      ],
      answer: 1,
      explanation:
        'Pharmacokinetics describes the movement and alteration of a drug within the body.'
    },

    {
      question: 'Which is a pharmacokinetic process?',
      options: [
        'Receptor activation',
        'Absorption',
        'Signal transduction',
        'Therapeutic response'
      ],
      answer: 1,
      explanation:
        'Absorption is one of the major pharmacokinetic processes.'
    },

    {
      question: 'Which sequence best represents the major pharmacokinetic processes?',
      options: [
        'Receptor → enzyme → response',
        'Absorption → distribution → biotransformation → excretion',
        'Diagnosis → prescription → surgery',
        'Brand → generic → chemical'
      ],
      answer: 1,
      explanation:
        'The source describes absorption, distribution, biotransformation, and excretion as major pharmacokinetic processes.'
    },

    {
      question: 'What is pharmacotherapeutics?',
      options: [
        'Application of pharmacological knowledge to disease treatment',
        'Study of drug packaging',
        'Study of chemical naming only',
        'Study of pharmaceutical advertising'
      ],
      answer: 0,
      explanation:
        'Pharmacotherapeutics applies pharmacological knowledge together with disease knowledge to prevention, mitigation, or cure.'
    },

    {
      question: 'What does clinical pharmacology primarily study?',
      options: [
        'Drugs in humans',
        'Only animal anatomy',
        'Only drug manufacturing',
        'Only herbal products'
      ],
      answer: 0,
      explanation:
        'Clinical pharmacology is the scientific study of drugs in humans.'
    },

    {
      question: 'What is one aim of clinical pharmacology?',
      options: [
        'To eliminate all drug names',
        'To generate data for optimum use of drugs',
        'To replace all clinical trials',
        'To manufacture every medicine'
      ],
      answer: 1,
      explanation:
        'The source states that clinical pharmacology aims to generate data for optimum use of drugs and supports evidence-based medicine.'
    },

    {
      question: 'What is selective toxicity particularly important for?',
      options: [
        'Chemotherapy',
        'Pharmacy dispensing',
        'Drug nomenclature',
        'Pharmacopoeial testing'
      ],
      answer: 0,
      explanation:
        'Chemotherapeutic agents are intended to act against infecting organisms or malignant cells with minimal effects on host cells.'
    },

    {
      question: 'What does toxicology study?',
      options: [
        'Only therapeutic effects',
        'Poisonous effects of drugs and chemicals',
        'Only drug names',
        'Only dosage forms'
      ],
      answer: 1,
      explanation:
        'Toxicology studies poisonous effects and includes detection, prevention, and treatment of poisoning.'
    },

    {
      question: 'How many major drug-name categories are described in the lesson?',
      options: [
        'Two',
        'Three',
        'Four',
        'Five'
      ],
      answer: 1,
      explanation:
        'The three categories are chemical, non-proprietary, and proprietary/brand names.'
    },

    {
      question: 'What does a chemical drug name primarily describe?',
      options: [
        "The manufacturer's marketing strategy",
        'The chemical structure of the substance',
        "The patient's diagnosis",
        'The dosage schedule'
      ],
      answer: 1,
      explanation:
        'The chemical name describes the chemical structure of the drug.'
    },

    {
      question: 'What is a proprietary name?',
      options: [
        'A manufacturer-assigned brand name',
        'A chemical structure',
        'A pharmacopoeial standard',
        'A disease classification'
      ],
      answer: 0,
      explanation:
        'A proprietary or brand name is assigned by the manufacturer and is its property or trademark.'
    },

    {
      question: 'Why are non-proprietary names useful?',
      options: [
        'They provide standardized identification',
        'They always indicate the manufacturer',
        'They replace pharmacodynamics',
        'They describe patient-specific dosing'
      ],
      answer: 0,
      explanation:
        'Non-proprietary names provide standardized scientific identification and support uniform prescribing.'
    },

    {
      question: 'What does a pharmacopoeia primarily contain?',
      options: [
        'Drug standards and specifications',
        'Only advertisements',
        'Only patient histories',
        'Only clinical case reports'
      ],
      answer: 0,
      explanation:
        'Pharmacopoeias contain standards and specifications such as identity, purity, assay, storage, and dosage-form information.'
    },

    {
      question: 'What is a formulary?',
      options: [
        'A compilation of practical information about selected medicines',
        'A chemical structure database only',
        'A surgical textbook',
        'A patient registration form'
      ],
      answer: 0,
      explanation:
        'Formularies provide practical information such as indications, doses, dosage forms, contraindications, precautions, and adverse effects.'
    },

    {
      question: 'What is the central purpose of essential medicines?',
      options: [
        'To satisfy priority healthcare needs',
        'To include every medicine available',
        'To promote only expensive medicines',
        'To eliminate generic medicines'
      ],
      answer: 0,
      explanation:
        'Essential medicines are selected to satisfy the priority healthcare needs of a population.'
    },

    {
      question: 'Which factor can influence essential-medicine selection?',
      options: [
        'Efficacy and safety',
        'Packaging color only',
        'Brand popularity only',
        'Advertising budget only'
      ],
      answer: 0,
      explanation:
        'The source identifies efficacy, safety, quality, cost, availability, disease patterns, and other factors as relevant considerations.'
    },

    {
      question: 'What distinguishes prescription drugs from OTC drugs?',
      options: [
        'Whether they have biological activity',
        'Whether applicable regulations require a prescription',
        'Whether they are always synthetic',
        'Whether they are always expensive'
      ],
      answer: 1,
      explanation:
        'Prescription versus OTC status is primarily a regulatory classification concerning access and dispensing requirements.'
    },

    {
      question: 'What is an orphan drug?',
      options: [
        'A medicine intended for a rare disease or condition with a limited commercial market',
        'A drug with no biological activity',
        'A drug that has expired',
        'A drug used only in hospitals'
      ],
      answer: 0,
      explanation:
        'Orphan drugs are associated with rare diseases or conditions where the limited market can make development commercially difficult.'
    },

    {
      question: 'Which statement correctly summarizes the relationship between pharmacodynamics and pharmacokinetics?',
      options: [
        'Both mean exactly the same thing',
        'PD describes drug effects; PK describes drug movement and handling by the body',
        'PD describes manufacturing; PK describes prescribing',
        'PD describes drug names; PK describes drug prices'
      ],
      answer: 1,
      explanation:
        'Pharmacodynamics focuses on drug effects, while pharmacokinetics focuses on what happens to the drug within the body.'
    }
  ]
};

export const lessons = [introductionToPharmacologyLesson];

export const topic = {
  id: 'general_pharmacology',
  title: 'General Pharmacology'
};

export default introductionToPharmacologyLesson;
