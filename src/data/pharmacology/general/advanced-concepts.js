export const lessons = [
  {
    id:'potency-vs-efficacy',categoryId:'general',topic:'Pharmacodynamics',title:'Potency vs Efficacy',level:'Beginner',time:8,
    description:'Understand why potency and efficacy are different properties of a drug.',
    objectives:['Define potency and efficacy','Interpret EC50 as a potency-related measure','Explain why a less potent drug can still have greater clinical usefulness'],
    sections:[
      {heading:'Potency',content:'Potency describes how much drug is needed to produce a specified effect. On a concentration-response graph, a leftward shift generally indicates greater potency when the same effect scale is used.'},
      {heading:'Efficacy',content:'Efficacy describes the maximum effect a drug can produce in a given system. A drug can be highly potent but have lower maximal efficacy than another drug.'}
    ],
    keyPoints:['Potency = amount/concentration needed for an effect','Efficacy = maximum effect achievable','Clinical choice is not based on potency alone'],rapid:['Potency: how much?','Efficacy: how much maximum?'],animation:'agonist-antagonist',quiz:[{question:'Which term describes the maximum effect a drug can produce?',options:['Potency','Efficacy','Bioavailability','Clearance'],answer:1,explanation:'Efficacy refers to the maximum effect achievable by a drug in a specified system.'}]
  },
  {
    id:'spare-receptors',categoryId:'general',topic:'Receptors',title:'Spare Receptors',level:'Intermediate',time:7,
    description:'Learn how maximal tissue response can occur without occupancy of every receptor.',
    objectives:['Define spare receptors','Explain receptor reserve concept','Relate receptor reserve to concentration-response behavior'],
    sections:[{heading:'Concept',content:'Spare receptors are present when a maximal tissue response can be produced without occupying all available receptors. This reflects receptor reserve and downstream signal amplification.'}],
    keyPoints:['Not every receptor must be occupied for maximal effect','Receptor reserve depends on the tissue and signaling system'],rapid:['Spare receptors = receptor reserve'],quiz:[]
  },
  {
    id:'bioequivalence',categoryId:'general',topic:'Drug Response',title:'Bioequivalence',level:'Intermediate',time:7,
    description:'Understand the pharmacokinetic idea of bioequivalence used when comparing drug products.',
    objectives:['Define bioequivalence','Recognize AUC and Cmax as key exposure measures','Distinguish bioequivalence from therapeutic equivalence'],
    sections:[{heading:'What it means',content:'Bioequivalence compares the rate and extent of systemic exposure between pharmaceutical products under defined study conditions. Measures such as area under the concentration-time curve (AUC) and maximum concentration (Cmax) are commonly evaluated.'}],
    keyPoints:['AUC reflects overall exposure','Cmax reflects peak concentration','Bioequivalence is a pharmacokinetic comparison'],rapid:['AUC = extent of exposure','Cmax = peak exposure'],quiz:[]
  },
  {
    id:'prodrugs',categoryId:'general',topic:'Drug Response',title:'Prodrugs',level:'Beginner',time:6,
    description:'Learn why some medicines are administered in a form that is converted to an active drug in the body.',
    objectives:['Define a prodrug','Understand why prodrugs are designed','Recognize the role of metabolism in activation'],
    sections:[{heading:'Definition',content:'A prodrug is administered in a form that undergoes conversion in the body to generate an active pharmacologic species. The design can improve absorption, distribution, stability or tolerability.'}],
    keyPoints:['Prodrug requires biotransformation for activation','Activation can vary with metabolism'],rapid:['Prodrug → conversion → active species'],quiz:[]
  },
  {
    id:'volume-of-distribution',categoryId:'general',topic:'Pharmacokinetics',title:'Volume of Distribution',level:'Intermediate',time:8,
    description:'Understand the apparent volume that relates the amount of drug in the body to its measured plasma concentration.',
    objectives:['Define apparent volume of distribution','Interpret a high versus low Vd conceptually','Connect Vd with distribution'],
    sections:[{heading:'Concept',content:'Apparent volume of distribution (Vd) is a proportionality measure relating the amount of drug in the body to its plasma concentration. A larger apparent Vd often reflects extensive distribution into tissues relative to plasma.'}],
    keyPoints:['Vd is an apparent, not necessarily an anatomical, volume','Higher Vd generally indicates greater tissue distribution'],rapid:['Vd = amount in body ÷ plasma concentration'],quiz:[]
  },
  {
    id:'dose-rate-and-infusion',categoryId:'general',topic:'Dosage & Regimens',title:'Dose Rate & IV Infusion',level:'Intermediate',time:8,
    description:'Understand how dose rate influences drug concentration during continuous intravenous infusion.',
    objectives:['Define infusion rate','Relate infusion rate to steady-state concentration','Understand why loading and maintenance strategies differ'],
    sections:[{heading:'Infusion principle',content:'During continuous IV infusion, drug enters the systemic circulation at a defined rate. At steady state, the rate of drug input equals the rate of drug elimination. Clearance influences the steady-state concentration reached for a given infusion rate.'}],
    keyPoints:['Input rate and elimination determine concentration','Steady state occurs when input rate equals elimination rate'],rapid:['Infusion: constant input','Steady state: input = elimination'],quiz:[]
  },
  {
    id:'renal-clearance-basics',categoryId:'general',topic:'Pharmacokinetics',title:'Renal Clearance Basics',level:'Intermediate',time:8,
    description:'Learn the basic processes that determine renal elimination of drugs.',
    objectives:['Identify filtration, secretion and reabsorption','Explain how renal function can alter drug exposure','Recognize why kidney function matters for dosing'],
    sections:[{heading:'Three processes',content:'Renal drug handling can involve glomerular filtration, active tubular secretion and tubular reabsorption. The balance among these processes contributes to renal clearance.'}],
    keyPoints:['Filtration occurs at the glomerulus','Active secretion can move drugs into tubular fluid','Reabsorption can return drug from tubular fluid to blood'],rapid:['Kidney handling: filtration + secretion − reabsorption'],quiz:[]
  },
  {
    id:'drug-allergy-vs-idiosyncrasy',categoryId:'general',topic:'Drug Safety',title:'Drug Allergy & Idiosyncratic Reactions',level:'Intermediate',time:8,
    description:'Differentiate immune-mediated drug allergy from unusual, unpredictable drug responses.',
    objectives:['Define drug allergy','Understand idiosyncratic reactions','Avoid treating the two terms as synonyms'],
    sections:[{heading:'Drug allergy',content:'Drug allergy is an immune-mediated hypersensitivity response to a drug or its reactive product. Clinical patterns vary with the immune mechanism.'},{heading:'Idiosyncrasy',content:'An idiosyncratic reaction is an unusual and unpredictable response that is not readily explained by the usual pharmacologic action. Genetic factors can contribute to some idiosyncratic reactions.'}],
    keyPoints:['Allergy is immune mediated','Idiosyncrasy is unusual and unpredictable','Both require careful clinical assessment'],rapid:['Allergy ≠ idiosyncrasy'],quiz:[]
  },
  {
    id:'side-effect-vs-adverse-effect',categoryId:'general',topic:'Drug Safety',title:'Side Effect vs Adverse Drug Reaction',level:'Beginner',time:7,
    description:'Clarify commonly confused safety terms used in pharmacology.',
    objectives:['Distinguish side effects from adverse drug reactions','Understand why context and dose matter','Use safety terminology more precisely'],
    sections:[{heading:'Practical distinction',content:'A side effect is commonly used for an unintended effect that occurs at therapeutic doses and may be related to the drug’s pharmacology. Adverse drug reaction is a broader safety term for harmful and unintended responses occurring at normal doses used for prevention, diagnosis or treatment.'}],
    keyPoints:['Unintended does not automatically mean allergic','ADR is a broad pharmacovigilance concept'],rapid:['ADR = harmful + unintended response at normal use'],quiz:[]
  },
  {
    id:'pharmacovigilance-basics',categoryId:'general',topic:'Drug Safety',title:'Pharmacovigilance Basics',level:'Beginner',time:7,
    description:'Understand how medicine safety is monitored after products reach real-world use.',
    objectives:['Define pharmacovigilance','Explain why post-marketing surveillance matters','Recognize spontaneous reporting as one safety signal source'],
    sections:[{heading:'Purpose',content:'Pharmacovigilance is concerned with detecting, assessing, understanding and preventing adverse effects or other medicine-related problems. Rare or delayed events may become clearer only after wider use.'}],
    keyPoints:['Safety monitoring continues after approval','Signals require assessment and confirmation','Real-world data complement clinical trials'],rapid:['Pharmacovigilance = ongoing medicine safety monitoring'],quiz:[]
  },
  {
    id:'placebo-nocebo',categoryId:'general',topic:'Drug Response',title:'Placebo & Nocebo Effects',level:'Beginner',time:6,
    description:'Learn how expectations and treatment context can influence perceived or reported outcomes.',
    objectives:['Define placebo effect','Define nocebo effect','Understand why controlled trials account for treatment expectations'],
    sections:[{heading:'Placebo',content:'Placebo effects describe beneficial changes associated with the context and expectation of treatment rather than a specific active pharmacologic ingredient.'},{heading:'Nocebo',content:'Nocebo effects describe negative symptoms or outcomes associated with expectations of harm or treatment context.'}],
    keyPoints:['Expectation can influence symptoms and outcomes','Placebo-controlled trials help separate treatment effects from contextual effects'],rapid:['Placebo: expected benefit','Nocebo: expected harm'],quiz:[]
  },
  {
    id:'therapeutic-equivalence',categoryId:'general',topic:'Drug Response',title:'Therapeutic Equivalence',level:'Intermediate',time:7,
    description:'Understand the broader idea of equivalent clinical performance between pharmaceutical products.',
    objectives:['Distinguish therapeutic equivalence from bioequivalence','Understand why dosage form and active ingredient matter','Recognize that regulatory definitions are product-specific'],
    sections:[{heading:'Concept',content:'Therapeutic equivalence is a clinical and regulatory concept concerning whether two medicinal products can be expected to have the same therapeutic effect and safety profile when used under labeled conditions. Bioequivalence may support such determinations but is not identical to therapeutic equivalence.'}],
    keyPoints:['Bioequivalence focuses on exposure','Therapeutic equivalence concerns clinical therapeutic performance'],rapid:['Bioequivalence ≠ therapeutic equivalence'],quiz:[]
  },
  {
    id:'enzyme-inhibition-clinical-impact',categoryId:'general',topic:'Pharmacokinetics',title:'Enzyme Inhibition: Clinical Impact',level:'Intermediate',time:8,
    description:'See how metabolic enzyme inhibition can change exposure to another medicine.',
    objectives:['Explain how inhibition can alter drug concentrations','Distinguish inhibition from induction','Recognize that effects may occur relatively quickly'],
    sections:[{heading:'Mechanism',content:'When a metabolic enzyme is inhibited, metabolism of a susceptible substrate can decrease. This may increase plasma exposure and prolong effects, depending on the pathway and drug characteristics.'}],
    keyPoints:['Inhibition generally decreases enzyme activity','Interaction magnitude depends on the affected pathway and drugs involved'],rapid:['Inhibition → ↓ metabolism → possible ↑ exposure'],quiz:[]
  },
  {
    id:'enzyme-induction-clinical-impact',categoryId:'general',topic:'Pharmacokinetics',title:'Enzyme Induction: Clinical Impact',level:'Intermediate',time:8,
    description:'Understand how increased metabolic enzyme expression can change drug exposure.',
    objectives:['Explain enzyme induction','Contrast induction with inhibition','Understand why induction often develops over time'],
    sections:[{heading:'Mechanism',content:'Enzyme induction increases the amount or activity of drug-metabolizing enzymes through regulatory processes. For a susceptible substrate, this can increase metabolism and reduce exposure; the effect depends on the pathway and drug.'}],
    keyPoints:['Induction increases metabolic capacity','Onset may be slower than direct enzyme inhibition because new enzyme expression may be required'],rapid:['Induction → ↑ metabolism → possible ↓ exposure'],quiz:[]
  },
  {
    id:'therapeutic-drug-monitoring-principles',categoryId:'general',topic:'Dosage & Regimens',title:'When Therapeutic Drug Monitoring Helps',level:'Intermediate',time:8,
    description:'Understand the pharmacologic principles behind measuring drug concentrations in selected patients.',
    objectives:['Explain the purpose of TDM','Identify drugs where concentration monitoring can be useful','Recognize the importance of sampling time'],
    sections:[{heading:'Why monitor?',content:'Therapeutic drug monitoring can help individualize dosing for selected medicines when there is a useful relationship between concentration and effect or toxicity, substantial variability among patients, and a practical target concentration range.'},{heading:'Sampling matters',content:'A concentration has meaning only in context. Dose history, time since the last dose, sampling time, formulation and patient factors must be considered.'}],
    keyPoints:['TDM is selective, not routine for every drug','Timing of sample collection is critical'],rapid:['TDM = concentration + context + timing'],quiz:[]
  }
];
