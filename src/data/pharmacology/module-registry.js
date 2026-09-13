import { generalPharmacologyLessons } from './general/index.js';
import { HealthcarePsychologyandcommunicationskillLessons } from './Healthcare_Psychology/index.js'; // Adjust path if needed
import { anatomyPhysiologyLessons } from './Anatomy_Physiology/index.js';

export const modules = [
  { id:'general', title:'General Pharmacology', status:'available', lessons:generalPharmacologyLessons },
  { id:'anatomy_physiology', title:'Anatomy & Physiology', name:'Anatomy & Physiology', icon:'👁️🫀', isNew: true, status:'available', dateAdded: '2026-09-13T00:00:00', lessons:anatomyPhysiologyLessons },
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
  { id:'healthcare_psychology', title:'Healthcare Psychology & Communication Skills', name:'Healthcare Psychology & Communication Skills', icon:'🧠💬', isNew: true, status:'available', lessons:HealthcarePsychologyandcommunicationskillLessons }
];

export const allLessons = modules.flatMap(m => m.lessons);
