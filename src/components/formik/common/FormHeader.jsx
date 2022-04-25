import { Stack, Typography } from '@mui/material';
import { BackButton } from 'components';

export const FormHeader = ({ children, formTitle}) => {
	return (
		<Stack direction={'row'} justifyContent='space-between' paddingTop={2} marginBottom={2}>
				<Stack direction={'row'} justifyContent='flex-end' spacing={2}>
					<Typography variant='h4' className="app-header">{formTitle}</Typography>
				</Stack>
				<Stack direction={'row'} justifyContent='flex-end' spacing={2}>
					{children}
				</Stack>
		</Stack>
	);
};
