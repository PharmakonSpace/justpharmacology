import DrugReceptor from './DrugReceptor';
import ADME from './ADME';
import AgonistAntagonist from './AgonistAntagonist';
import AbsorptionAnimation from './AbsorptionAnimation';
import Spikes from './Spikes'; // 1. Import Spikes component

export default function Animation({ type }) {
  // Convert type to lowercase to avoid casing errors (e.g., 'Spikes' vs 'spikes')
  const normalizedType = type ? type.toLowerCase() : '';

  if (normalizedType === 'absorption') return <AbsorptionAnimation />;
  if (normalizedType === 'adme') return <ADME />;
  if (normalizedType === 'agonist-antagonist') return <AgonistAntagonist />;
  if (normalizedType === 'spikes') return <Spikes />; // 2. Add Spikes route

  return <DrugReceptor />;
}
