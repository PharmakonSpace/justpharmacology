import DrugReceptor from './DrugReceptor';
import ADME from './ADME';
import AgonistAntagonist from './AgonistAntagonist';
import AbsorptionAnimation from './AbsorptionAnimation';
import Spikes from './spikes';
import Soler from './soler';
import biopsychosocial from './biopsychosocial';


export default function Animation({ type }) {
  const normalizedType = type ? type.toLowerCase().trim() : '';

  if (normalizedType === 'absorption') return <AbsorptionAnimation />;
  if (normalizedType === 'adme') return <ADME />;
  if (normalizedType === 'agonist-antagonist') return <AgonistAntagonist />;
  if (normalizedType === 'spikes') return <Spikes />;
  if (normalizedType === 'soler') return <Soler />;
  if (normalizedType === 'biopsychosocial') return <Biopsychosocial />;

  return <DrugReceptor />;
}
