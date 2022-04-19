import { useSoftware } from 'hooks';
import React from 'react';
import { PlainChip } from 'components';

export const SoftwareCell = ({ value }) => {
	const { data } = useSoftware();

	const values = value.map((item) => data.find((option) => option.id === item));

	return values.map((item) => <PlainChip key={item.id} title={item.title} />);
};
