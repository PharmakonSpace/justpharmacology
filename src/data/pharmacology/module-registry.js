import { generalPharmacologyLessons } from './general/index.js';

export const modules = [
  { id:'general', title:'General Pharmacology', status:'available', lessons:generalPharmacologyLessons },
  { id:'autonomic', title:'Autonomic Pharmacology', status:'coming-soon', lessons:[] },
  { id:'cardiovascular', title:'Cardiovascular Pharmacology', status:'coming-soon', lessons:[] },
  { id:'cns', title:'CNS Pharmacology', status:'coming-soon', lessons:[] },
  { id:'endocrine', title:'Endocrine Pharmacology', status:'coming-soon', lessons:[] },
  { id:'respiratory', title:'Respiratory Pharmacology', status:'coming-soon', lessons:[] },
  { id:'gastrointestinal', title:'Gastrointestinal Pharmacology', status:'coming-soon', lessons:[] },
  { id:'renal', title:'Renal Pharmacology', status:'coming-soon', lessons:[] },
  { id:'blood', title:'Blood & Hematopoietic Pharmacology', status:'coming-soon', lessons:[] },
  { id:'antiinfective', title:'Anti-infective Pharmacology', status:'coming-soon', lessons:[] },
  { id:'toxicology', title:'Toxicology', status:'coming-soon', lessons:[] },
  { id:'clinical', title:'Clinical Pharmacology', status:'coming-soon', lessons:[] },
  {id:'healthcare_psychology',name:'Healthcare Psychology',status:'available', lessons:Healthcare Psychology and communication skill }
];

export const allLessons = modules.flatMap(m => m.lessons);
