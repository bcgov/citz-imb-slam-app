import { Avatar, Stack } from '@mui/material';
import { useCallback } from 'react';

export const AvatarTitle = (props) => {
	const { title, src } = props;

	const stringToColor = useCallback((string) => {
		let hash = 0;
		let i;

		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = '#';

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.substr(-2);
		}
		/* eslint-enable no-bitwise */

		return color;
	}, []);

	return (
		<Stack direction={'row'} spacing={1}>
			<Avatar
				sx={{
					width: 24,
					height: 24,
					bgcolor: stringToColor(title),
				}}>
				{title.charAt(0).toUpperCase()}
			</Avatar>
			<span>{title}</span>
		</Stack>
	);
};
