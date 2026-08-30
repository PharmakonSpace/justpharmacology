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
    keyPoints:['Not every receptor must be occupied for maximal effect','Receptor reserve depends on the tissue and signaling system'],rapid:['Spare receptors = receptor reserve'],
    quiz:[{question:'The phenomenon of "spare receptors" indicates that:',options:['All receptors must be 100% occupied to achieve 50% response','Maximal biological tissue response (Emax) can be achieved at drug concentrations that occupy only a fraction of total receptors','Receptors are broken and cannot bind drugs','The drug has zero efficacy'],answer:1,explanation:'Spare receptors exist when downstream signal amplification allows a drug to produce a 100% maximal tissue response without occupying all available receptor molecules.'}]
  },
  {
    id:'bioequivalence',categoryId:'general',topic:'Drug Response',title:'Bioequivalence',level:'Intermediate',time:7,
    description:'Understand the pharmacokinetic idea of bioequivalence used when comparing drug products.',
    objectives:['Define bioequivalence','Recognize AUC and Cmax as key exposure measures','Distinguish bioequivalence from therapeutic equivalence'],
    sections:[{heading:'What it means',content:'Bioequivalence compares the rate and extent of systemic exposure between pharmaceutical products under defined study conditions. Measures such as area under the concentration-time curve (AUC) and maximum concentration (Cmax) are commonly evaluated.'}],
    keyPoints:['AUC reflects overall exposure','Cmax reflects peak concentration','Bioequivalence is a pharmacokinetic comparison'],rapid:['AUC = extent of exposure','Cmax = peak exposure'],
    quiz:[{question:'Two drug formulations are considered bioequivalent when they display no significant difference in:',options:['Tablet color and shape','Rate (Cmax, Tmax) and extent (AUC) of active ingredient availability at site of action','Shelf-life expiration date','Manufacturing factory location'],answer:1,explanation:'Bioequivalence requires that the rate and extent of absorption (measured by Cmax, Tmax, and AUC) do not significantly differ when administered at identical doses under similar conditions.'}]
  },
  {
    id:'prodrugs',categoryId:'general',topic:'Drug Response',title:'Prodrugs',level:'Beginner',time:6,
    description:'Learn why some medicines are administered in a form that is converted to an active drug in the body.',
    objectives:['Define a prodrug','Understand why prodrugs are designed','Recognize the role of metabolism in activation'],
    sections:[{heading:'Definition',content:'A prodrug is administered in a form that undergoes conversion in the body to generate an active pharmacologic species. The design can improve absorption, distribution, stability or tolerability.'}],
    keyPoints:['Prodrug requires biotransformation for activation','Activation can vary with metabolism'],rapid:['Prodrug → conversion → active species'],
    quiz:[{question:'A prodrug is administered in an inactive or less active form that requires what process to become therapeutically active?',options:['Renal filtration without chemical change','In vivo enzymatic or chemical biotransformation','Receptor destruction','Light exposure prior to ingestion'],answer:1,explanation:'Prodrugs are pharmacologically inactive precursors designed to undergo enzymatic or chemical conversion inside the body into active therapeutic metabolites.'}]
  },
  {
    id:'volume-of-distribution',categoryId:'general',topic:'Pharmacokinetics',title:'Volume of Distribution',level:'Intermediate',time:8,
    description:'Understand the apparent volume that relates the amount of drug in the body to its measured plasma concentration.',
    objectives:['Define apparent volume of distribution','Interpret a high versus low Vd conceptually','Connect Vd with distribution'],
    sections:[{heading:'Concept',content:'Apparent volume of distribution (Vd) is a proportionality measure relating the amount of drug in the body to its plasma concentration. A larger apparent Vd often reflects extensive distribution into tissues relative to plasma.'}],
    keyPoints:['Vd is an apparent, not necessarily an anatomical, volume','Higher Vd generally indicates greater tissue distribution'],rapid:['Vd = amount in body ÷ plasma concentration'],
    quiz:[{question:'How is the apparent volume of distribution (Vd) calculated mathematically?',options:['Vd = Total Dose administered ÷ Clearance','Vd = Total Amount of drug in body ÷ Plasma Concentration (Cp)','Vd = Half-life × Elimination rate','Vd = Bioavailability × Body weight'],answer:1,explanation:'Vd is the proportionality constant relating the total amount of drug in the body to the measured plasma concentration (Vd = Amount / Cp).'}]
  },
  {
    id:'dose-rate-and-infusion',categoryId:'general',topic:'Dosage & Regimens',title:'Dose Rate & IV Infusion',level:'Intermediate',time:8,
    description:'Understand how dose rate influences drug concentration during continuous intravenous infusion.',
    objectives:['Define infusion rate','Relate infusion rate to steady-state concentration','Understand why loading and maintenance strategies differ'],
    sections:[{heading:'Infusion principle',content:'During continuous IV infusion, drug enters the systemic circulation at a defined rate. At steady state, the rate of drug input equals the rate of drug elimination. Clearance influences the steady-state concentration reached for a given infusion rate.'}],
    keyPoints:['Input rate and elimination determine concentration','Steady state occurs when input rate equals elimination rate'],rapid:['Infusion: constant input','Steady state: input = elimination'],
    quiz:[{question:'During continuous IV infusion, steady-state plasma concentration (Css) is directly proportional to infusion rate (R0) and inversely proportional to:',options:['Plasma protein binding percentage','Total body clearance (CL)','Tablet dissolution time','Renal tubular length'],answer:1,explanation:'At steady state, input rate equals elimination rate: R0 = Css × CL, therefore Css = R0 / CL.'}]
  },
  {
    id:'renal-clearance-basics',categoryId:'general',topic:'Pharmacokinetics',title:'Renal Clearance Basics',level:'Intermediate',time:8,
    description:'Learn the basic processes that determine renal elimination of drugs.',
    objectives:['Identify filtration, secretion and reabsorption','Explain how renal function can alter drug exposure','Recognize why kidney function matters for dosing'],
    sections:[{heading:'Three processes',content:'Renal drug handling can involve glomerular filtration, active tubular secretion and tubular reabsorption. The balance among these processes contributes to renal clearance.'}],
    keyPoints:['Filtration occurs at the glomerulus','Active secretion can move drugs into tubular fluid','Reabsorption can return drug from tubular fluid to blood'],rapid:['Kidney handling: filtration + secretion − reabsorption'],
    quiz:[{question:'Which formula represents total renal drug clearance (CLR)?',options:['CLR = Filtration Rate + Secretion Rate − Reabsorption Rate','CLR = Blood pressure × Heart rate','CLR = Glomerular filtration only','CLR = Tubular reabsorption ÷ 2'],answer:0,explanation:'Renal excretion net rate equals the amount filtered plus active tubular secretion minus passive/active tubular reabsorption back into the blood.'}]
  },
  {
    id:'drug-allergy-vs-idiosyncrasy',categoryId:'general',topic:'Drug Safety',title:'Drug Allergy & Idiosyncratic Reactions',level:'Intermediate',time:8,
    description:'Differentiate immune-mediated drug allergy from unusual, unpredictable drug responses.',
    objectives:['Define drug allergy','Understand idiosyncratic reactions','Avoid treating the two terms as synonyms'],
    sections:[{heading:'Drug allergy',content:'Drug allergy is an immune-mediated hypersensitivity response to a drug or its reactive product. Clinical patterns vary with the immune mechanism.'},{heading:'Idiosyncrasy',content:'An idiosyncratic reaction is an unusual and unpredictable response that is not readily explained by the usual pharmacologic action. Genetic factors can contribute to some idiosyncratic reactions.'}],
    keyPoints:['Allergy is immune mediated','Idiosyncrasy is unusual and unpredictable','Both require careful clinical assessment'],rapid:['Allergy ≠ idiosyncrasy'],
    quiz:[{question:'How does an idiosyncratic drug reaction differ from a drug allergy?',options:['Idiosyncratic reactions are purely immune/antibody mediated','Idiosyncratic reactions are genetically determined abnormal responses not mediated by the immune system','Idiosyncratic reactions only occur in children','Idiosyncratic reactions are always 100% predictable by drug class'],answer:1,explanation:'Drug allergies involve immune sensitization (antibodies/T-cells), whereas idiosyncratic reactions are rare, unexpected responses frequently rooted in specific genetic enzymatic variations (e.g. G6PD deficiency with primaquine).'}]
  },
  {
    id:'side-effect-vs-adverse-effect',categoryId:'general',topic:'Drug Safety',title:'Side Effect vs Adverse Drug Reaction',level:'Beginner',time:7,
    description:'Clarify commonly confused safety terms used in pharmacology.',
    objectives:['Distinguish side effects from adverse drug reactions','Understand why context and dose matter','Use safety terminology more precisely'],
    sections:[{heading:'Practical distinction',content:'A side effect is commonly used for an unintended effect that occurs at therapeutic doses and may be related to the drug’s pharmacology. Adverse drug reaction is a broader safety term for harmful and unintended responses occurring at normal doses used for prevention, diagnosis or treatment.'}],
    keyPoints:['Unintended does not automatically mean allergic','ADR is a broad pharmacovigilance concept'],rapid:['ADR = harmful + unintended response at normal use'],
    quiz:[{question:'An adverse drug reaction (ADR) is strictly defined as:',options:['Any intentional medication overdose in a hospital','A noxious and unintended response to a drug occurring at doses normally used in humans for prophylaxis, diagnosis, or therapy','Normal expected therapeutic cure of an infection','A prescription calculation error made by a pharmacist'],answer:1,explanation:'The WHO defines an ADR as any response to a drug which is noxious and unintended, and which occurs at doses normally used in humans.'}]
  },
  {
    id:'pharmacovigilance-basics',categoryId:'general',topic:'Drug Safety',title:'Pharmacovigilance Basics',level:'Beginner',time:7,
    description:'Understand how medicine safety is monitored after products reach real-world use.',
    objectives:['Define pharmacovigilance','Explain why post-marketing surveillance matters','Recognize spontaneous reporting as one safety signal source'],
    sections:[{heading:'Purpose',content:'Pharmacovigilance is concerned with detecting, assessing, understanding and preventing adverse effects or other medicine-related problems. Rare or delayed events may become clearer only after wider use.'}],
    keyPoints:['Safety monitoring continues after approval','Signals require assessment and confirmation','Real-world data complement clinical trials'],rapid:['Pharmacovigilance = ongoing medicine safety monitoring'],
    quiz:[{question:'Why is post-marketing pharmacovigilance (Phase IV surveillance) essential?',options:['To test drug stability on pharmacy shelves','To detect rare, delayed, or idiosyncratic adverse drug reactions in large, diverse patient populations that clinical trials cannot capture','To increase the commercial sales price of the medication','To eliminate the need for physician prescriptions'],answer:1,explanation:'Phase III clinical trials involve limited patient numbers over restricted durations; Phase IV post-marketing pharmacovigilance detects rare adverse events (e.g. 1 in 10,000) in real-world clinical use.'}]
  },
  {
    id:'placebo-nocebo',categoryId:'general',topic:'Drug Response',title:'Placebo & Nocebo Effects',level:'Beginner',time:6,
    description:'Learn how expectations and treatment context can influence perceived or reported outcomes.',
    objectives:['Define placebo effect','Define nocebo effect','Understand why controlled trials account for treatment expectations'],
    sections:[{heading:'Placebo',content:'Placebo effects describe beneficial changes associated with the context and expectation of treatment rather than a specific active pharmacologic ingredient.'},{heading:'Nocebo',content:'Nocebo effects describe negative symptoms or outcomes associated with expectations of harm or treatment context.'}],
    keyPoints:['Expectation can influence symptoms and outcomes','Placebo-controlled trials help separate treatment effects from contextual effects'],rapid:['Placebo: expected benefit','Nocebo: expected harm'],
    quiz:[{question:'The "nocebo effect" refers to:',options:['Beneficial physiological outcomes from inert sugar pills','Adverse symptoms or worsening experienced by a patient due to negative expectations rather than active pharmacology','Complete receptor down-regulation','A drug that cures two diseases simultaneously'],answer:1,explanation:'The nocebo effect occurs when a patient’s anticipation of negative side effects produces genuine adverse symptoms despite taking an inert substance.'}]
  },
  {
    id:'therapeutic-equivalence',categoryId:'general',topic:'Drug Response',title:'Therapeutic Equivalence',level:'Intermediate',time:7,
    description:'Understand the broader idea of equivalent clinical performance between pharmaceutical products.',
    objectives:['Distinguish therapeutic equivalence from bioequivalence','Understand why dosage form and active ingredient matter','Recognize that regulatory definitions are product-specific'],
    sections:[{heading:'Concept',content:'Therapeutic equivalence is a clinical and regulatory concept concerning whether two medicinal products can be expected to have the same therapeutic effect and safety profile when used under labeled conditions. Bioequivalence may support such determinations but is not identical to therapeutic equivalence.'}],
    keyPoints:['Bioequivalence focuses on exposure','Therapeutic equivalence concerns clinical therapeutic performance'],rapid:['Bioequivalence ≠ therapeutic equivalence'],
    quiz:[{question:'Two drug products are considered "therapeutically equivalent" if they are pharmaceutically equivalent, bioequivalent, and:',options:['Have identical packaging color','Can be expected to have the same clinical efficacy and safety profile when administered under labeled conditions','Are sold at the exact same retail price','Contain different active chemical molecules'],answer:1,explanation:'Therapeutic equivalence requires pharmaceutical equivalence and proven bioequivalence, ensuring identical clinical efficacy and safety profiles in patients.'}]
  },
  {
    id:'enzyme-inhibition-clinical-impact',categoryId:'general',topic:'Pharmacokinetics',title:'Enzyme Inhibition: Clinical Impact',level:'Intermediate',time:8,
    description:'See how metabolic enzyme inhibition can change exposure to another medicine.',
    objectives:['Explain how inhibition can alter drug concentrations','Distinguish inhibition from induction','Recognize that effects may occur relatively quickly'],
    sections:[{heading:'Mechanism',content:'When a metabolic enzyme is inhibited, metabolism of a susceptible substrate can decrease. This may increase plasma exposure and prolong effects, depending on the pathway and drug characteristics.'}],
    keyPoints:['Inhibition generally decreases enzyme activity','Interaction magnitude depends on the affected pathway and drugs involved'],rapid:['Inhibition → ↓ metabolism → possible ↑ exposure'],
    quiz:[{question:'What is the typical time course of competitive enzyme inhibition compared to enzyme induction?',options:['Inhibition is rapid (hours to days), while induction requires days to weeks for new enzyme protein synthesis','Inhibition takes several months to begin','Induction is always instantaneous within 10 seconds','Both always take exactly 30 days'],answer:0,explanation:'Enzyme inhibition occurs as soon as the inhibitor reaches the enzyme active site (rapid onset), whereas enzyme induction requires gene transcription and new protein synthesis (slower onset over days/weeks).'}]
  },
  {
    id:'enzyme-induction-clinical-impact',categoryId:'general',topic:'Pharmacokinetics',title:'Enzyme Induction: Clinical Impact',level:'Intermediate',time:8,
    description:'Understand how increased metabolic enzyme expression can change drug exposure.',
    objectives:['Explain enzyme induction','Contrast induction with inhibition','Understand why induction often develops over time'],
    sections:[{heading:'Mechanism',content:'Enzyme induction increases the amount or activity of drug-metabolizing enzymes through regulatory processes. For a susceptible substrate, this can increase metabolism and reduce exposure; the effect depends on the pathway and drug.'}],
    keyPoints:['Induction increases metabolic capacity','Onset may be slower than direct enzyme inhibition because new enzyme expression may be required'],rapid:['Induction → ↑ metabolism → possible ↓ exposure'],
    quiz:[{question:'Co-administering a potent CYP3A4 enzyme inducer (e.g., rifampin) with an oral contraceptive substrate will typically cause:',options:['Marked increase in contraceptive blood levels and toxicity','Increased metabolism of the contraceptive, leading to reduced plasma levels and therapeutic failure','No change whatsoever in hormonal levels','Immediate complete renal failure'],answer:1,explanation:'CYP inducers increase enzyme quantity, accelerating metabolism of substrate drugs, which lowers their plasma concentrations and can lead to therapeutic failure.'}]
  },
  {
    id:'therapeutic-drug-monitoring-principles',categoryId:'general',topic:'Dosage & Regimens',title:'When Therapeutic Drug Monitoring Helps',level:'Intermediate',time:8,
    description:'Understand the pharmacologic principles behind measuring drug concentrations in selected patients.',
    objectives:['Explain the purpose of TDM','Identify drugs where concentration monitoring can be useful','Recognize the importance of sampling time'],
    sections:[{heading:'Why monitor?',content:'Therapeutic drug monitoring can help individualize dosing for selected medicines when there is a useful relationship between concentration and effect or toxicity, substantial variability among patients, and a practical target concentration range.'},{heading:'Sampling matters',content:'A concentration has meaning only in context. Dose history, time since the last dose, sampling time, formulation and patient factors must be considered.'}],
    keyPoints:['TDM is selective, not routine for every drug','Timing of sample collection is critical'],rapid:['TDM = concentration + context + timing'],
    quiz:[{question:'Therapeutic drug monitoring (TDM) is most indicated for medications that possess:',options:['A wide therapeutic window and minimal patient variability','A narrow therapeutic index, unpredictable pharmacokinetics, and direct correlation between plasma level and clinical effect/toxicity','Instant over-the-counter availability with zero toxicity risk','Irreversible binding to all human cell types'],answer:1,explanation:'TDM is indicated for drugs with narrow therapeutic ranges (e.g., aminoglycosides, digoxin, lithium, phenytoin, theophylline, cyclosporine) where target blood levels prevent toxicity and ensure efficacy.'}]
  }
];
