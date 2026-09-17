import { lessons as anatomicalPositionPlanesLessons } from './AnatomicalPositionPlanes.js';
import { lessons as humanVisionLessons } from './HumanVision.js';

export { lessons as anatomicalPositionPlanesLessons } from './AnatomicalPositionPlanes.js';
export { lessons as humanVisionLessons } from './HumanVision.js';

export const anatomyPhysiologyLessons = [
  ...anatomicalPositionPlanesLessons,
  ...humanVisionLessons
];
