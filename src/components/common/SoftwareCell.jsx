import { PlainChip } from 'components';

export const SoftwareCell = ({ value }) => {
  return value.map((item) => <PlainChip key={item.id} title={item.title} />);
};
