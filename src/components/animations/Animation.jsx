import DrugReceptor from './DrugReceptor';
import ADME from './ADME';
import AgonistAntagonist from './AgonistAntagonist';
import AbsorptionAnimation from './AbsorptionAnimation';
import Spikes from './spikes';
import Soler from './soler';
import Biopsychosocial from './biopsychosocial';
import CarlRogers from './CarlRogers';
import PsychologicalFirstAid from './PsychologicalFirstAid';
import ClinicalCommunicationAnimation from './ClinicalCommunicationAnimation';
import ClinicalReflectiveLogAnimation from './ClinicalReflectiveLogAnimation';
import HumanVisionAnimation from './HumanVisionAnimation';
import ClinicalCommunicationNoiseAnimation from './ClinicalCommunicationNoiseAnimation';
import ClinicalQuestioningTrapsAnimation from './ClinicalQuestioningTrapsAnimation';


export default function Animation({ type }) {
  const normalizedType = type ? type.toLowerCase().trim() : '';

  if (normalizedType === 'absorption') return <AbsorptionAnimation />;
  if (normalizedType === 'adme') return <ADME />;
  if (normalizedType === 'agonist-antagonist') return <AgonistAntagonist />;
  if (normalizedType === 'spikes') return <Spikes />;
  if (normalizedType === 'soler') return <Soler />;
  if (normalizedType === 'biopsychosocial') return <Biopsychosocial />;
  if (normalizedType === 'carl-rogers-client-centered' || normalizedType === 'carl-rogers' || normalizedType === 'rogers') {
    return <CarlRogers />;
  }
  if (normalizedType === 'psychological-first-aid' || normalizedType === 'pfa') {
    return <PsychologicalFirstAid />;
  }
  if (
    normalizedType === 'clinical-communication-frameworks' ||
    normalizedType === 'clinical-communication' ||
    normalizedType === 'communication-frameworks'
  ) {
    return <ClinicalCommunicationAnimation />;
  }
  if (
    normalizedType === 'clinical-reflective-log' ||
    normalizedType === 'reflective-log' ||
    normalizedType === 'clinical-reflection'
  ) {
    return <ClinicalReflectiveLogAnimation />;
  }
  if (
    normalizedType === 'clinical-communication-noise' ||
    normalizedType === 'communication-noise' ||
    normalizedType === 'noise'
  ) {
    return <ClinicalCommunicationNoiseAnimation />;
  }
  if (
    normalizedType === 'clinical-questioning-traps' ||
    normalizedType === 'questioning-traps' ||
    normalizedType === 'questioning'
  ) {
    return <ClinicalQuestioningTrapsAnimation />;
  }
  if (
    normalizedType === 'human-vision' ||
    normalizedType === 'vision' ||
    normalizedType === 'eye' ||
    normalizedType === 'visual-pathway'
  ) {
    return <HumanVisionAnimation />;
  }

  return <DrugReceptor />;
}
