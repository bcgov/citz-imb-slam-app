import { Stack } from '@mui/material';
import { BackButton } from 'components';

export const FormHeader = ({ children}) => {
	return (
		<Stack direction={'row'} justifyContent='space-between' marginBottom={2}>
			<BackButton />
				<Stack direction={'row'} justifyContent='flex-end' spacing={2}>
					{children}
				</Stack>
		</Stack>
	);
};
