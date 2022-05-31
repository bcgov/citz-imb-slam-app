import { useSoftware } from 'hooks';
import React from 'react';
import { PlainChip } from 'components';

export const SoftwareCell = ({value}) => {
	console.log('value', value);
	return value.map((item) => <PlainChip key={item.id} title={item.title} />);
};
