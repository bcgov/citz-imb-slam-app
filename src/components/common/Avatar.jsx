import { useMemo } from 'react';
import { Avatar as MUIAvatar, Typography } from '@mui/material';

export const Avatar = (props) => {
	const { title, size = 25, image } = props;

	console.log('props', props);

	const bgcolor = useMemo(() => {
		let hash = 0;
		let i;

		for (i = 0; i < title.length; i += 1) {
			hash = title.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = '#';

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.substr(-2);
		}

		return color;
	}, [title]);

	return (
		<MUIAvatar
			src={image}
			alt={title}
			sx={{
				width: size,
				height: size,
				bgcolor,
			}}>
			<Typography variant='span' sx={{ color: '#ffffff' }}>
				{title.charAt(0).toUpperCase()}
			</Typography>
		</MUIAvatar>
	);
};

{
	/* <Avatar
	// src={session.data.user.image}
	imgProps={{ width: 100, height: 100 }}
	alt={userName}
	sx={{
		width: avatarSize,
		height: avatarSize,
		// fontSize: '0.8rem',
		// fontWeight: '400',
		// padding: '11px',
		// display: 'inline',
		// fontFamily: 'var(--body-font-family)',
		bgcolor: stringToColor(userName),
	}}>
	<Typography variant='span' sx={{ color: '#ffffff' }}>
		{userName
			.match(/(\b\S)?/g)
			.join('')
			.match(/(^\S|\S$)?/g)
			.join('')
			.toUpperCase()}
	</Typography>
</Avatar>; */
}
