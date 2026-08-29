export const lessons = [
{
    id:'drug-absorption',categoryId:'general',topic:'Pharmacokinetics',title:'Drug Absorption',level:'Beginner',time:10,
    description:'Learn how drugs move from their site of administration into systemic circulation.',
    objectives:['Define absorption','Identify factors affecting absorption','Understand bioavailability'],
    sections:[{heading:'The basic concept',content:'Absorption is the movement of a drug from its site of administration into the systemic circulation.'},{heading:'What changes absorption?',content:'Route, formulation, blood flow, surface area, lipid solubility, pH and transport mechanisms can influence absorption.'},{heading:'Bioavailability',content:'Bioavailability is the fraction of an administered dose that reaches systemic circulation in unchanged form. Intravenous administration is the reference for complete systemic availability in the usual model.'}],
    keyPoints:['IV administration bypasses an absorption step','Bioavailability describes systemic availability','First-pass metabolism can reduce oral bioavailability'],rapid:['Absorption → systemic circulation','F = fraction reaching systemic circulation'],animation:'absorption',quiz:[{question:'Which route most directly bypasses an absorption step?',options:['Oral','Intramuscular','Intravenous','Subcutaneous'],answer:2,explanation:'An IV dose is delivered directly into systemic circulation.'}]
  },
{
    id:'bioavailability-first-pass',categoryId:'general',topic:'Pharmacokinetics',title:'Bioavailability & First-Pass Effect',level:'Intermediate',time:10,
    description:'Understand why the same dose can produce different systemic exposure depending on route.',
    objectives:['Define bioavailability','Explain first-pass metabolism','Relate route to systemic exposure'],
    sections:[{heading:'Bioavailability',content:'Bioavailability compares the amount of active drug reaching systemic circulation with the administered dose. It is influenced by absorption and presystemic elimination.'},{heading:'First-pass effect',content:'After oral administration, some drugs undergo metabolism in the intestinal wall and liver before reaching systemic circulation. This can reduce the fraction of active drug that becomes systemically available.'}],
    keyPoints:['F can be less than 1 for many non-IV routes','First-pass effect is presystemic metabolism','Route selection can change systemic exposure'],rapid:['F = systemic fraction','First pass → intestine/liver before systemic circulation'],quiz:[]
  },
{
    id:'drug-distribution',categoryId:'general',topic:'Pharmacokinetics',title:'Drug Distribution',level:'Beginner',time:9,
    description:'Explore how drugs distribute between blood and tissues.',
    objectives:['Define distribution','Understand protein binding','Explain volume of distribution'],
    sections:[{heading:'Distribution',content:'Distribution is the reversible movement of drug between the bloodstream and tissues.'},{heading:'What affects distribution?',content:'Tissue perfusion, capillary permeability, lipid solubility, tissue binding and plasma protein binding can all influence distribution.'},{heading:'Volume of distribution',content:'Apparent volume of distribution relates the amount of drug in the body to its measured plasma concentration. It is a calculated pharmacokinetic parameter, not necessarily an anatomical volume.'}],
    keyPoints:['Blood flow strongly affects early distribution','Only unbound drug is generally available to leave plasma','A large apparent Vd suggests extensive distribution relative to plasma'],rapid:['Vd = amount in body / plasma concentration','Free drug can distribute'],quiz:[]
  },
{
    id:'plasma-protein-binding',categoryId:'general',topic:'Pharmacokinetics',title:'Plasma Protein Binding',level:'Intermediate',time:9,
    description:'Understand bound and unbound drug and why free concentration matters.',
    objectives:['Differentiate bound and unbound drug','Explain reversible protein binding','Understand why free drug is pharmacologically important'],
    sections:[{heading:'Bound versus unbound',content:'Many drugs reversibly bind plasma proteins. The unbound fraction can leave the vascular compartment and interact with targets or undergo elimination.'},{heading:'Clinical meaning',content:'Changes in protein concentration or binding can alter free drug concentration, but the overall clinical effect depends on distribution, clearance and the therapeutic window of the drug.'}],
    keyPoints:['Unbound drug is generally able to distribute and interact with targets','Albumin commonly binds many acidic drugs','Protein binding is usually reversible'],rapid:['Bound ↔ unbound','Free drug → distribution/effect/elimination'],quiz:[]
  },
{
    id:'drug-metabolism',categoryId:'general',topic:'Pharmacokinetics',title:'Drug Metabolism',level:'Intermediate',time:10,
    description:'Understand biotransformation and why metabolism can alter drug activity.',
    objectives:['Explain biotransformation','Differentiate Phase I and Phase II reactions','Understand enzyme induction and inhibition'],
    sections:[{heading:'Why metabolism matters',content:'Drug metabolism can convert compounds into metabolites with different pharmacological properties and can facilitate elimination.'},{heading:'Phase I and Phase II',content:'Phase I reactions commonly include oxidation, reduction and hydrolysis. Phase II reactions commonly involve conjugation. Not every drug undergoes both phases in sequence.'},{heading:'CYP enzymes',content:'Cytochrome P450 enzymes are important in the metabolism of many drugs. Enzyme inhibition and induction can change exposure to substrate drugs.'}],
    keyPoints:['Phase I often introduces or exposes functional groups','Phase II often conjugates the molecule','Enzyme inhibition can increase exposure to some substrates','Enzyme induction can decrease exposure to some substrates'],rapid:['Phase I = functionalization','Phase II = conjugation'],animation:'adme',quiz:[]
  },
{
    id:'enzyme-induction-inhibition',categoryId:'general',topic:'Pharmacokinetics',title:'Enzyme Induction & Inhibition',level:'Intermediate',time:9,
    description:'Learn the core difference between enzyme induction and inhibition and how each can change drug exposure.',
    objectives:['Define induction','Define inhibition','Predict the direction of a basic interaction'],
    sections:[{heading:'Enzyme inhibition',content:'Inhibition reduces enzyme activity. If the inhibited enzyme normally clears a substrate drug, substrate concentrations may rise.'},{heading:'Enzyme induction',content:'Induction increases expression or activity of certain enzymes over time. If the induced enzyme clears a substrate, substrate exposure may fall.'}],
    keyPoints:['Inhibition is often faster than induction','Direction depends on the metabolic role of the enzyme','Some interactions involve transporters rather than enzymes'],rapid:['Inhibition → less enzyme activity','Induction → more enzyme activity'],quiz:[{question:'If an enzyme that clears a drug is strongly inhibited, the drug exposure may:',options:['Increase','Always become zero','Never change','Immediately become inactive'],answer:0,explanation:'Reduced clearance can increase exposure to a substrate drug, although the actual clinical effect depends on the system.'}]
  },
{
    id:'drug-excretion',categoryId:'general',topic:'Pharmacokinetics',title:'Drug Excretion',level:'Beginner',time:9,
    description:'Learn how drugs and metabolites leave the body, with emphasis on renal elimination.',
    objectives:['Define excretion','Describe renal filtration and secretion','Understand reabsorption at a basic level'],
    sections:[{heading:'Excretion versus metabolism',content:'Excretion removes drug or metabolites from the body. Metabolism chemically modifies a drug; the metabolite may then be excreted.'},{heading:'Renal excretion',content:'Renal elimination can involve glomerular filtration, tubular secretion and tubular reabsorption. Unbound drug is more readily filtered at the glomerulus.'}],
    keyPoints:['Kidney is a major route of excretion for many drugs','Filtration depends on unbound drug','Reabsorption can influence final urinary elimination'],rapid:['Excretion = leaving the body','Kidney: filtration + secretion − reabsorption'],quiz:[]
  },
{
    id:'clearance',categoryId:'general',topic:'Pharmacokinetics',title:'Clearance',level:'Intermediate',time:10,
    description:'Understand clearance as a key measure of the body’s ability to remove drug from plasma.',
    objectives:['Define clearance','Differentiate renal and hepatic clearance','Relate clearance to drug exposure'],
    sections:[{heading:'What is clearance?',content:'Clearance is the hypothetical volume of plasma from which drug is completely removed per unit time. It is a rate parameter, not the amount of drug eliminated.'},{heading:'Total clearance',content:'Total body clearance can be considered as the sum of organ clearances, such as renal and hepatic clearance, when appropriate.'}],
    keyPoints:['Clearance affects drug exposure','Higher clearance generally lowers exposure at a given dosing rate','Clearance has units of volume/time'],rapid:['CL = removal capacity','Total CL ≈ renal + hepatic + other contributions'],quiz:[{question:'Clearance is best described as:',options:['Amount of drug in the body','Volume of plasma cleared of drug per unit time','Time to peak concentration','Fraction absorbed'],answer:1,explanation:'Clearance describes the volume of plasma from which drug is removed per unit time.'}]
  },
{
    id:'half-life',categoryId:'general',topic:'Pharmacokinetics',title:'Half-Life',level:'Beginner',time:8,
    description:'Learn what drug half-life means and why it influences dosing intervals and time to steady state.',
    objectives:['Define half-life','Understand repeated-dose accumulation','Estimate time to steady state'],
    sections:[{heading:'Definition',content:'Half-life is the time required for the plasma concentration or amount of drug in the body to decrease by approximately 50% under the relevant elimination conditions.'},{heading:'Why it matters',content:'Half-life helps guide dosing intervals and predicts the approach to steady state after repeated dosing or infusion. A common approximation is that about 4–5 half-lives are needed to approach steady state.'}],
    keyPoints:['Longer half-life usually means slower concentration decline','Half-life is influenced by clearance and volume of distribution','Steady state is approached over several half-lives'],rapid:['1 t½ → 50%','~4–5 t½ → near steady state'],quiz:[]
  },
{
    id:'pharmacokinetic-models',categoryId:'general',topic:'Pharmacokinetics',title:'One-Compartment & Multi-Compartment Models',level:'Intermediate',time:9,
    description:'Use simplified compartment models to visualize drug movement after administration.',
    objectives:['Understand a pharmacokinetic compartment','Differentiate one- and multi-compartment models','Recognize that compartments are mathematical models'],
    sections:[{heading:'A useful abstraction',content:'A compartment is a mathematical representation of drug distribution, not necessarily a single anatomical organ.'},{heading:'One versus multiple compartments',content:'A one-compartment model treats the body as a single kinetically uniform space. Multi-compartment models represent an initial distribution phase followed by slower changes associated with other compartments.'}],
    keyPoints:['Compartments are mathematical abstractions','More compartments can describe complex concentration-time curves','Model choice depends on the observed pharmacokinetics'],rapid:['Compartment = model, not organ','Multi-compartment → distribution phases'],animation:'adme',quiz:[]
  },
{
    id:'zero-first-order',categoryId:'general',topic:'Pharmacokinetics',title:'First-Order & Zero-Order Elimination',level:'Intermediate',time:10,
    description:'Compare elimination processes where the rate depends on concentration versus a fixed amount per unit time.',
    objectives:['Define first-order elimination','Define zero-order elimination','Recognize saturation as the key concept'],
    sections:[{heading:'First-order elimination',content:'In first-order elimination, a constant fraction of the drug is removed per unit time over the relevant concentration range. The absolute amount removed changes as concentration changes.'},{heading:'Zero-order elimination',content:'In zero-order elimination, a constant amount is removed per unit time. This can occur when an elimination pathway is saturated.'}],
    keyPoints:['First-order: fraction/time','Zero-order: amount/time','Saturation can cause dose-dependent kinetics'],rapid:['1st order → constant fraction','0 order → constant amount'],quiz:[{question:'In first-order elimination, the amount eliminated per unit time:',options:['Is always constant','Changes with concentration','Is always zero','Does not depend on concentration'],answer:1,explanation:'The fraction eliminated per unit time is approximately constant, so the absolute amount changes with concentration.'}]
  },
{
    id:'steady-state',categoryId:'general',topic:'Pharmacokinetics',title:'Steady State & Drug Accumulation',level:'Intermediate',time:9,
    description:'Visualize how repeated dosing leads toward a plateau when drug input and elimination balance.',
    objectives:['Define steady state','Explain accumulation','Relate steady state to half-life'],
    sections:[{heading:'Steady state',content:'At steady state, the average rate of drug input equals the average rate of drug elimination over the dosing interval.'},{heading:'Accumulation',content:'With repeated dosing, drug remains in the body between doses. Concentrations rise until input and elimination balance, producing a repeating concentration pattern around a steady average.'}],
    keyPoints:['Steady state depends mainly on half-life, not simply dose size','About 4–5 half-lives is a common approximation to approach steady state','Changing dose changes the level; changing half-life changes how quickly it is reached'],rapid:['Steady state = input ≈ elimination','~4–5 t½ → near steady state'],animation:'adme',quiz:[]
  }
];

export const topic = 'Pharmacokinetics';
