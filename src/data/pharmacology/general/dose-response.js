export const lessons = [
{
    id:'dose-response',categoryId:'general',topic:'Dose-Response',title:'Dose-Response Relationships',level:'Intermediate',time:10,
    description:'Learn how dose or concentration relates to pharmacological response.',
    objectives:['Read a concentration-effect curve','Define potency','Define efficacy'],
    sections:[{heading:'Potency',content:'Potency describes the concentration or dose required to produce a specified effect. A more potent drug produces a given effect at a lower concentration or dose, all else being equal.'},{heading:'Efficacy',content:'Efficacy describes the maximum effect a drug can produce in a particular system. It is distinct from potency.'}],
    keyPoints:['Potency relates to dose/concentration needed','Efficacy relates to maximum response','Do not use potency and efficacy interchangeably'],rapid:['Potency = how much','Efficacy = how much maximum'],quiz:[{question:'Which term describes the maximum response a drug can produce in a system?',options:['Potency','Efficacy','Bioavailability','Clearance'],answer:1,explanation:'Efficacy describes the maximal response produced by a drug in the relevant system.'}]
  },
{
    id:'dose-response-curves',categoryId:'general',topic:'Dose-Response',title:'Graded vs Quantal Dose-Response Curves',level:'Advanced',time:10,
    description:'Differentiate individual response curves from population response distributions.',
    objectives:['Define graded response','Define quantal response','Understand why each curve is used'],
    sections:[{heading:'Graded response',content:'A graded response measures the magnitude of an effect in an individual biological system as dose or concentration changes.'},{heading:'Quantal response',content:'A quantal response records whether a defined all-or-none outcome occurs in members of a population, allowing estimation of measures such as ED50 for that population outcome.'}],
    keyPoints:['Graded = magnitude of response','Quantal = fraction of population with defined outcome','The two curves answer different questions'],rapid:['Graded → how much?','Quantal → how many?'],
    quiz:[{question:'A quantal dose-response curve is constructed to measure:',options:['Graded muscle contraction percentage in a single organ','The fraction or percentage of individuals in a population displaying a defined all-or-none biological endpoint','The molecular binding affinity to purified receptor protein','The rate of biliary drug excretion'],answer:1,explanation:'Quantal dose-response curves plot the cumulative percentage of a population exhibiting a predetermined all-or-none response (e.g. therapeutic relief, sleep, or lethality) as a function of dose.'}]
  }
];

export const topic = 'Dose-Response';
