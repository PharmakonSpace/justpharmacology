export const lessons = [
{
    id:'drug-interactions',categoryId:'general',topic:'Drug Interactions',title:'Drug Interactions: Pharmacokinetic vs Pharmacodynamic',level:'Intermediate',time:10,
    description:'Build a framework for recognizing how one drug can change another drug’s exposure or effect.',
    objectives:['Differentiate PK and PD interactions','Identify common PK mechanisms','Understand additive and opposing effects'],
    sections:[{heading:'Pharmacokinetic interaction',content:'One drug changes the absorption, distribution, metabolism or excretion of another, thereby changing its concentration-time profile.'},{heading:'Pharmacodynamic interaction',content:'One drug changes the effect of another without necessarily changing its concentration. Effects may be additive, synergistic or antagonistic depending on the pair and context.'}],
    keyPoints:['PK interaction → changes exposure','PD interaction → changes effect','Mechanism matters more than memorizing isolated examples'],rapid:['PK = concentration','PD = response'],
    quiz:[{question:'When drug A inhibits the hepatic CYP3A4 enzyme responsible for clearing drug B, this represents what type of interaction?',options:['Pharmacodynamic antagonism','Pharmacokinetic interaction resulting in increased drug B levels','Pharmaceutical physical incompatibility','Noncompetitive receptor desensitization'],answer:1,explanation:'Inhibition of drug-metabolizing enzymes alters the systemic exposure/clearance (PK) of the substrate drug without changing its intrinsic affinity or action on the receptor target (PD).'}]
  }
];

export const topic = 'Drug Interactions';
