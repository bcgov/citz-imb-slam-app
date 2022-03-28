import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const SaveCancelButtons = (props) => {
	const { saveCallback = () => {}, resetForm } = props;

	const router = useRouter();

	const clickHandler = useCallback(
		async (event) => {
			if (event.target.id === 'save') await saveCallback();

			resetForm();
			router.back();
		},
		[resetForm, router, saveCallback],
	);

	return (
		<Stack direction={'row'} spacing={2} justifyContent={'center'}>
			<Button id='cancel' onClick={clickHandler} variant='outlined'>
				Cancel
			</Button>
			<Button
				type='submit'
				id='save'
				onClick={clickHandler}
				variant='contained'>
				Save
			</Button>
		</Stack>
	);
};
