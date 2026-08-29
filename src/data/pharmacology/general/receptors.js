export const lessons = [
{
    id:'receptors',categoryId:'general',topic:'Receptors',title:'Drug Receptors',level:'Beginner',time:9,
    description:'Learn how receptors translate drug binding into biological responses.',
    objectives:['Define receptor','Understand ligand binding','Differentiate agonist and antagonist'],
    sections:[{heading:'Receptors as targets',content:'Many drugs act by binding to macromolecular targets such as receptors, enzymes, ion channels or transporters.'},{heading:'Binding and response',content:'Affinity describes how readily a drug associates with a target. Functional response depends on receptor activation, signaling and the biological system.'}],
    keyPoints:['Affinity is not the same as efficacy','Agonists activate receptor-mediated responses','Antagonists prevent or reduce activation by agonists'],rapid:['Affinity = binding','Efficacy = ability to produce an effect'],animation:'drug-receptor',quiz:[{question:'A drug that activates a receptor and produces a response is generally called:',options:['Antagonist','Agonist','Chelator','Prodrug'],answer:1,explanation:'An agonist binds to a target and produces receptor activation or a biological response.'}]
  },
{
    id:'agonist-antagonist',categoryId:'general',topic:'Receptors',title:'Agonists vs Antagonists',level:'Beginner',time:8,
    description:'Use an interactive model to visualize receptor activation and blockade.',
    objectives:['Define agonist','Define antagonist','Visualize receptor occupancy'],
    sections:[{heading:'Agonist',content:'An agonist produces receptor activation or a biological response through its target.'},{heading:'Antagonist',content:'An antagonist binds to a target and reduces or prevents activation by an agonist.'}],
    keyPoints:['Full agonist: high efficacy in the relevant system','Partial agonist: lower maximal response than a full agonist under comparable conditions','Antagonists can act through different mechanisms'],rapid:['Agonist → activates','Antagonist → blocks/reduces activation'],animation:'agonist-antagonist',quiz:[]
  },
{
    id:'partial-agonist',categoryId:'general',topic:'Receptors',title:'Full & Partial Agonists',level:'Intermediate',time:9,
    description:'Understand why partial agonists can produce a lower maximum response even when they occupy receptors.',
    objectives:['Define full agonist','Define partial agonist','Understand intrinsic efficacy conceptually'],
    sections:[{heading:'Full agonist',content:'A full agonist can produce the maximum response supported by the system under the conditions being studied.'},{heading:'Partial agonist',content:'A partial agonist produces a lower maximal response than a full agonist in the same system, even when sufficient receptors are occupied.'}],
    keyPoints:['Partial agonist has lower efficacy than a full agonist in the system','Effect depends on receptor reserve and tissue context','A partial agonist can functionally oppose a full agonist in some settings'],rapid:['Full → higher maximum response','Partial → lower maximum response'],quiz:[]
  },
{
    id:'competitive-antagonism',categoryId:'general',topic:'Receptors',title:'Competitive Antagonism',level:'Intermediate',time:9,
    description:'Visualize how a reversible competitive antagonist changes an agonist concentration-effect relationship.',
    objectives:['Define reversible competitive antagonism','Understand rightward shift conceptually','Differentiate occupancy from efficacy'],
    sections:[{heading:'Core mechanism',content:'A reversible competitive antagonist competes with an agonist for the same binding site or functionally overlapping site. Increasing agonist concentration can overcome the blockade in the idealized model.'},{heading:'Concentration-effect curve',content:'The classic effect is a rightward shift of the agonist concentration-effect curve without a reduction in maximum response, assuming simple reversible competitive antagonism and no other limiting factors.'}],
    keyPoints:['Competition is reversible in the classic model','More agonist can overcome blockade','Classic curve: rightward shift with preserved Emax'],rapid:['Competitive antagonist → right shift','Emax preserved in ideal model'],animation:'agonist-antagonist',quiz:[]
  },
{
    id:'receptor-types',categoryId:'general',topic:'Receptors',title:'Major Receptor Families',level:'Intermediate',time:11,
    description:'Compare ligand-gated ion channels, G-protein-coupled receptors, enzyme-linked receptors and intracellular receptors.',
    objectives:['Name four major receptor families','Compare signaling speed','Connect receptor type with mechanism'],
    sections:[{heading:'Four major families',content:'Major receptor families include ligand-gated ion channels, G-protein-coupled receptors, enzyme-linked receptors and intracellular receptors.'},{heading:'Speed and signaling',content:'Ligand-gated ion channels can produce very rapid responses. GPCRs commonly signal through G proteins and second messengers. Enzyme-linked receptors often regulate phosphorylation pathways. Intracellular receptors can alter gene transcription and typically produce slower-onset effects.'}],
    keyPoints:['Ion channels → rapid','GPCRs → second messengers','Enzyme-linked → phosphorylation/signaling','Intracellular → gene regulation'],rapid:['4 families: ion channel, GPCR, enzyme-linked, intracellular'],animation:'drug-receptor',quiz:[]
  },
{
    id:'second-messengers',categoryId:'general',topic:'Receptors',title:'Second Messenger Systems',level:'Intermediate',time:10,
    description:'Understand how receptor activation can be amplified through intracellular signaling pathways.',
    objectives:['Define second messenger','Recognize cAMP and IP3/DAG pathways','Understand signal amplification'],
    sections:[{heading:'What is a second messenger?',content:'A second messenger is an intracellular signaling molecule generated or released after receptor activation that helps transmit the signal inside the cell.'},{heading:'Common pathways',content:'Examples include cAMP signaling and phospholipase C pathways involving IP3 and DAG. The exact response depends on receptor subtype, cell type and downstream proteins.'}],
    keyPoints:['Second messengers relay extracellular signals','One receptor event can influence multiple intracellular molecules','Cell context determines the final response'],rapid:['Receptor → G protein/enzyme → second messenger → response'],animation:'drug-receptor',quiz:[]
  },
{
    id:'signal-amplification',categoryId:'general',topic:'Receptors',title:'Signal Amplification & Desensitization',level:'Advanced',time:9,
    description:'Learn why a small receptor-level event can create a large response and why repeated stimulation may reduce responsiveness.',
    objectives:['Explain signal amplification','Define desensitization','Connect receptor regulation with tolerance'],
    sections:[{heading:'Amplification',content:'Signaling cascades can amplify a receptor signal because one activated component can influence many downstream molecules.'},{heading:'Desensitization',content:'Repeated or prolonged receptor stimulation can reduce responsiveness through mechanisms such as receptor phosphorylation, uncoupling, internalization or downstream adaptation.'}],
    keyPoints:['Amplification increases signal size','Desensitization reduces responsiveness','Receptor regulation contributes to some forms of tolerance'],rapid:['Amplification → bigger downstream signal','Desensitization → weaker response'],quiz:[]
  }
];

export const topic = 'Receptors';
