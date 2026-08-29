export const lessons = [
{
    id:'loading-maintenance-dose',categoryId:'general',topic:'Dosage & Regimens',title:'Loading Dose & Maintenance Dose',level:'Intermediate',time:9,
    description:'Understand why a loading dose and maintenance regimen solve different pharmacokinetic problems.',
    objectives:['Explain loading dose','Explain maintenance dosing','Relate dose to Vd and clearance conceptually'],
    sections:[{heading:'Loading dose',content:'A loading dose is used to reach a target concentration more quickly. The amount required is strongly related to the desired concentration and apparent volume of distribution, with bioavailability considered for non-IV routes.'},{heading:'Maintenance dose',content:'Maintenance dosing replaces drug that is being eliminated and is therefore linked more closely to clearance, target concentration and dosing interval.'}],
    keyPoints:['Loading dose mainly relates to Vd and target concentration','Maintenance dosing mainly relates to clearance','Route and bioavailability influence the administered dose'],rapid:['Loading → reach target','Maintenance → replace elimination'],quiz:[]
  },
{
    id:'dose-calculation-basics',categoryId:'general',topic:'Dosage & Regimens',title:'Basic Dose Calculation Concepts',level:'Beginner',time:9,
    description:'Build a safe conceptual foundation for dose, concentration, rate and dosing interval.',
    objectives:['Distinguish dose from dose rate','Understand concentration units','Recognize the role of dosing interval'],
    sections:[{heading:'Dose versus dose rate',content:'Dose is an amount administered at a time, while dose rate describes amount administered per unit time. Infusions are commonly expressed as a rate.'},{heading:'Concentration',content:'Drug concentration expresses the amount of drug in a specified volume, such as mg/L. Always check units before performing calculations.'}],
    keyPoints:['Dose = amount','Dose rate = amount/time','Concentration = amount/volume','Units are part of the answer'],rapid:['mg = amount','mg/h = rate','mg/L = concentration'],quiz:[]
  }
];

export const topic = 'Dosage & Regimens';
