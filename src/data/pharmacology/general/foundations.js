export const lessons = [
{
    id:'intro-pharmacology', categoryId:'general', topic:'Foundations', title:'Introduction to Pharmacology', level:'Beginner', time:8,
    description:'Understand what pharmacology studies and the major branches used throughout the subject.',
    objectives:['Define pharmacology','Differentiate pharmacokinetics and pharmacodynamics','Recognize major drug-related terms'],
    sections:[
      {heading:'What is pharmacology?',content:'Pharmacology is the study of drugs and their interactions with living systems. It connects drug exposure with biological effects.'},
      {heading:'Major branches',content:'Pharmacokinetics describes what the body does to a drug. Pharmacodynamics describes what a drug does to the body. Related areas include clinical pharmacology, toxicology and pharmacogenomics.'}
    ],
    keyPoints:['PK = absorption, distribution, metabolism and excretion','PD = drug effects and mechanisms','Clinical pharmacology applies principles to patient care'],
    rapid:['PK: body → drug','PD: drug → body'], animation:'drug-receptor',
    video: { youtubeId: '', title: 'Introduction to Pharmacology: Definitions, Scope & Core Concepts' },
    quiz:[{question:'Pharmacokinetics primarily describes:',options:['What the drug does to the body','What the body does to the drug','Drug naming','Drug manufacturing'],answer:1,explanation:'Pharmacokinetics describes the time course of drug exposure, including absorption, distribution, metabolism and excretion.'}]
  },
{
    id:'drug-nomenclature',categoryId:'general',topic:'Foundations',title:'Drug Names & Nomenclature',level:'Beginner',time:7,
    description:'Learn the common ways medicines are named and why consistent naming matters.',
    objectives:['Recognize chemical, generic and brand names','Understand the value of generic naming','Distinguish a drug name from a dosage form'],
    sections:[{heading:'Three useful naming levels',content:'A drug may have a chemical name, a nonproprietary or generic name, and one or more brand names. The generic name is the most useful standard reference for pharmacology learning.'},{heading:'Name is not dosage form',content:'A drug name identifies the active substance, while a dosage form describes how it is supplied, such as tablet, capsule, solution or injection.'}],
    keyPoints:['Generic names improve clarity across manufacturers','One active ingredient may have multiple brand names','Strength and dosage form are separate from the drug name'],rapid:['Chemical → generic → brand','Drug name ≠ dosage form'],
    video: { youtubeId: '', title: 'Drug Names & Nomenclature: Chemical, Generic vs Brand' },
    quiz:[{question:'Which drug name is the most reliable international standard for pharmacological communication?',options:['Chemical IUPAC name only','Proprietary brand/trade name','Nonproprietary (generic) name','Dosage form description'],answer:2,explanation:'The nonproprietary (generic) name provides a uniform, universally recognized standard for a drug across different manufacturers and regions.'}]
  }
];

export const topic = 'Foundations';
