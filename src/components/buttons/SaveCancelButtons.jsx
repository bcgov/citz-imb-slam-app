import { Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const SaveCancelButtons = (props) => {
	const { resetForm, ShowSaveButton = true } = props;

	const router = useRouter();

	const clickHandler = useCallback(() => {
		resetForm();
		router.back();
	}, [resetForm, router]);

	return (
		<Stack direction={'row'} spacing={2} justifyContent={'center'}>
			<Button id='cancel' onClick={clickHandler} className="btn btn-muted">
				Cancel
			</Button>
			{ShowSaveButton ? (
				<Button type='submit' id='save' className="btn btn-default">
					Save
				</Button>
			) : null}
		</Stack>
	);
};
