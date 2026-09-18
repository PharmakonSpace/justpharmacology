import { lessons as hearingLessons } from './HearingStructureAndPhysiology.js';
import { lessons as anatomicalPositionPlanesLessons } from './AnatomicalPositionPlanes.js';
import { lessons as humanVisionLessons } from './HumanVision.js';

export { lessons as hearingLessons } from './HearingStructureAndPhysiology.js';
export { lessons as anatomicalPositionPlanesLessons } from './AnatomicalPositionPlanes.js';
export { lessons as humanVisionLessons } from './HumanVision.js';

export const anatomyPhysiologyLessons = [
  ...hearingLessons,
  ...anatomicalPositionPlanesLessons,
  ...humanVisionLessons
];

