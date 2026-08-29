export const lessons = [
{
    id:'general-pharmacology-final-review',categoryId:'general',topic:'Rapid Revision',title:'General Pharmacology — Final Rapid Review',level:'All Levels',time:12,
    description:'A high-yield visual recap of the most important General Pharmacology concepts.',
    objectives:['Recall core PK concepts','Recall core PD concepts','Connect safety and dosing concepts'],
    sections:[{heading:'The complete framework',content:'Think of pharmacology as a chain: dose and route determine exposure; ADME determines concentration over time; concentration and target interaction determine effect; patient and disease factors modify both exposure and response.'},{heading:'Exam-ready checklist',content:'Before moving to the next module, make sure you can explain bioavailability, clearance, half-life, steady state, receptor families, agonists, antagonists, potency, efficacy, therapeutic window and PK versus PD interactions.'}],
    keyPoints:['PK: ADME + concentration over time','PD: target + mechanism + response','Safety: benefit, exposure, variability and monitoring'],rapid:['ADME → concentration → receptor/target → response','PK = exposure; PD = effect'],animation:'adme',quiz:[{question:'Which sequence best represents the core pharmacology learning chain?',options:['Drug name → brand → package','Dose/route → exposure → target → response','Response → dose → absorption only','Brand → price → response'],answer:1,explanation:'A useful framework is dose and route → exposure determined by PK → target interaction → pharmacodynamic response.'}]
  }
];

export const topic = 'Rapid Revision';
