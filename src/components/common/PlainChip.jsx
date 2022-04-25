import { Chip, Typography } from '@mui/material';
import { useCallback } from 'react';

export const PlainChip = (props) => {
	const { title = '', size = 24, showTitle = true } = props;

	return (
		<Chip
			label={title}
		>
            					<Typography variant='span' sx={{ color: '#ffffff' }}>
						{title.charAt(0).toUpperCase()}
					</Typography>
        </Chip>
	);
};
