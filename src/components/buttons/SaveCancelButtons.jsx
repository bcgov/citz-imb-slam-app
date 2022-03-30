import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const SaveCancelButtons = (props) => {
	const { saveCallback = () => {}, resetForm, ShowSaveButton = true } = props;

	const router = useRouter();

	const clickHandler = useCallback(() => {
		resetForm();
		router.back();
	}, [resetForm, router]);

	return (
		<Stack direction={'row'} spacing={2} justifyContent={'center'}>
			<Button id='cancel' onClick={clickHandler} variant='outlined'>
				Cancel
			</Button>
			{ShowSaveButton ? (
				<Button
					type='submit'
					id='save'
					onClick={saveCallback}
					variant='contained'>
					Save
				</Button>
			) : null}
		</Stack>
	);
};
