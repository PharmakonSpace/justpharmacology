export const lessons = [
{
    id:'therapeutic-index',categoryId:'general',topic:'Drug Safety',title:'Therapeutic Index & Therapeutic Window',level:'Intermediate',time:9,
    description:'Understand the basic concepts used to describe the separation between desired and toxic drug effects.',
    objectives:['Define therapeutic index','Understand therapeutic window','Recognize why safety margins vary among drugs'],
    sections:[{heading:'Therapeutic index',content:'Therapeutic index is a ratio used in pharmacology to compare a toxic dose with an effective dose in a defined context. Larger separation generally suggests a wider safety margin, but the exact interpretation depends on the data and population.'},{heading:'Therapeutic window',content:'The therapeutic window is the range of drug concentrations or doses associated with desired effects while avoiding unacceptable toxicity.'}],
    keyPoints:['Safety is not determined by one number alone','Narrow therapeutic index drugs require careful dosing and monitoring in appropriate clinical settings','Therapeutic window is a range, not a single value'],rapid:['TI = toxic/effective dose ratio','Window = desired effect range'],
    quiz:[{question:'A drug with a narrow therapeutic index (TI) is characterized by:',options:['A large margin of safety between therapeutic and lethal/toxic doses','A very small difference between minimum effective concentration and toxic concentration requiring precise dosing','Absolute safety even when taken at 10x overdose','Lack of any receptor-mediated biological effects'],answer:1,explanation:'A narrow therapeutic index means small increases in blood concentration can transition a patient from safe therapeutic benefit to severe toxicity.'}]
  },
{
    id:'adverse-drug-reactions',categoryId:'general',topic:'Drug Safety',title:'Adverse Drug Reactions',level:'Intermediate',time:10,
    description:'Learn the basic concept of adverse drug reactions and how predictable and unpredictable reactions differ.',
    objectives:['Define an adverse drug reaction','Distinguish common reaction patterns','Understand dose-related versus idiosyncratic concepts'],
    sections:[{heading:'What is an ADR?',content:'An adverse drug reaction is a harmful and unintended response to a drug when used at normal doses for prevention, diagnosis or treatment.'},{heading:'Predictability',content:'Some reactions are related to the known pharmacological action and dose of a drug, while others are less predictable and may involve unusual susceptibility or immune mechanisms.'}],
    keyPoints:['Adverse reaction is not the same as medication error','Dose-related reactions often reflect known pharmacology','Unexpected reactions may require special evaluation'],rapid:['ADR = harmful + unintended drug response','Predictable ≠ always preventable'],
    quiz:[{question:'A Type A (Augmented) adverse drug reaction is typically:',options:['Unpredictable, rare, and immune-mediated','Dose-dependent and predictable based on the known pharmacology of the drug','Completely independent of drug dosage or target receptor','Caused by genetic chromosomal mutations after 20 years'],answer:1,explanation:'Type A adverse drug reactions represent exaggerated pharmacological responses that are dose-dependent, common, and predictable.'}]
  },
{
    id:'therapeutic-drug-monitoring',categoryId:'general',topic:'Drug Safety',title:'Therapeutic Drug Monitoring',level:'Intermediate',time:9,
    description:'Understand why selected drugs may require concentration monitoring and how samples relate to dosing.',
    objectives:['Define therapeutic drug monitoring','Recognize drugs with narrow therapeutic ranges conceptually','Understand timing of concentration samples'],
    sections:[{heading:'Why monitor concentrations?',content:'Therapeutic drug monitoring can help optimize therapy for selected drugs when concentration-response relationships are useful, variability is substantial or the therapeutic range is relatively narrow.'},{heading:'Timing matters',content:'A concentration has meaning only in relation to dose, dosing interval and sampling time. Trough and peak samples answer different questions.'}],
    keyPoints:['TDM is selective, not required for every drug','Sample timing is critical','Concentration must be interpreted with clinical context'],rapid:['TDM = concentration + timing + clinical context'],
    quiz:[{question:'When should a trough blood concentration level typically be drawn during therapeutic drug monitoring (TDM)?',options:['Immediately after intravenous infusion completion','Exactly halfway between two doses','Immediately prior to administering the next scheduled dose','At random times without regard to dosing schedule'],answer:2,explanation:'Trough levels represent the lowest concentration of drug in the body during a dosing cycle and are measured immediately before the next dose is administered.'}]
  }
];

export const topic = 'Drug Safety';
