import { Stack, Typography } from '@mui/material';
import { BackButton } from 'components';

export const TableHeader = ({ children, title }) => {
	return (
		<Stack direction={'column'} justifyContent='space-between' paddingTop={2} marginBottom={2}>
			{/* <Stack direction={'row'} justifyContent='flex-start' spacing={2}>
				<BackButton />
			</Stack> */}
			<Stack direction={'row'} justifyContent='space-between' spacing={2}>
				<Typography variant='h4' className="app-header">{title}</Typography>
				<Stack direction={'row'} justifyContent='flex-end' spacing={2}>
					{children}
				</Stack>
			</Stack>
		</Stack>
	);
};
