// Module 1 content registry. Add future modules without changing the lesson engine.
import { lessons as dosage_regimensLessons } from './pharmacology/general/dosage-regimens.js';
import { lessons as dose_responseLessons } from './pharmacology/general/dose-response.js';
import { lessons as drug_administrationLessons } from './pharmacology/general/drug-administration.js';
import { lessons as drug_interactionsLessons } from './pharmacology/general/drug-interactions.js';
import { lessons as drug_responseLessons } from './pharmacology/general/drug-response.js';
import { lessons as drug_safetyLessons } from './pharmacology/general/drug-safety.js';
import { lessons as foundationsLessons } from './pharmacology/general/foundations.js';
import { lessons as individual_variationLessons } from './pharmacology/general/individual-variation.js';
import { lessons as pharmacodynamicsLessons } from './pharmacology/general/pharmacodynamics.js';
import { lessons as pharmacokineticsLessons } from './pharmacology/general/pharmacokinetics.js';
import { lessons as rapid_revisionLessons } from './pharmacology/general/rapid-revision.js';
import { lessons as receptorsLessons } from './pharmacology/general/receptors.js';

export const lessons = [dosage_regimensLessons,dose_responseLessons,drug_administrationLessons,drug_interactionsLessons,drug_responseLessons,drug_safetyLessons,foundationsLessons,individual_variationLessons,pharmacodynamicsLessons,pharmacokineticsLessons,rapid_revisionLessons,receptorsLessons].flat();
