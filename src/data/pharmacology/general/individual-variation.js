export const lessons = [
{
    id:'pharmacogenomics',categoryId:'general',topic:'Individual Variation',title:'Pharmacogenomics & Individual Variation',level:'Intermediate',time:10,
    description:'Understand why genetics and patient factors can change drug response.',
    objectives:['Define pharmacogenomics','Identify non-genetic sources of variability','Understand the idea of personalized therapy'],
    sections:[{heading:'Pharmacogenomics',content:'Pharmacogenomics studies how genetic variation can influence drug response, including drug metabolism, targets and adverse reactions.'},{heading:'Other sources of variation',content:'Age, organ function, body composition, disease, concurrent medicines and adherence can also influence drug response.'}],
    keyPoints:['Genetics can affect pharmacokinetics and pharmacodynamics','Patient variability is multifactorial','Personalized therapy uses patient characteristics to improve treatment decisions'],rapid:['Genes + patient factors → response variability'],quiz:[]
  },
{
    id:'special-populations',categoryId:'general',topic:'Individual Variation',title:'Age, Pregnancy & Special Populations',level:'Intermediate',time:11,
    description:'Learn why pharmacology principles may behave differently across patient populations.',
    objectives:['Identify major sources of variability in children and older adults','Understand why pregnancy can change pharmacology','Recognize the need for individualized dosing'],
    sections:[{heading:'Pediatrics and older adults',content:'Body composition, organ maturation, renal function, hepatic function and receptor responses can differ with age. Dosing therefore often requires age- and patient-specific considerations.'},{heading:'Pregnancy',content:'Pregnancy can alter volume of distribution, renal function and other pharmacokinetic factors. Drug selection also requires consideration of maternal and fetal safety.'}],
    keyPoints:['Age can change PK and PD','Pregnancy changes physiology and treatment considerations','Dosing should be individualized when patient factors materially affect exposure'],rapid:['Patient factors matter','Same dose ≠ same exposure for everyone'],quiz:[]
  }
];

export const topic = 'Individual Variation';
