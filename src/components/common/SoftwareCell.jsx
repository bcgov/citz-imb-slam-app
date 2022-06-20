import { PlainChip } from './PlainChip';

export const SoftwareCell = ({ value }) =>
  value.map((item) => <PlainChip key={item.id} title={item.title} />);
