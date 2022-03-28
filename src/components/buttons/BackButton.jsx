import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const BackButton = (props) => {
	const { linkText = 'Back', linkURL } = props;

	const router = useRouter();

	const clickHandler = useCallback(() => {
		if (linkURL) return router.push(linkURL);
		return router.back();
	}, [linkURL, router]);

	return (
		<Button onClick={clickHandler} startIcon={<ArrowBackIcon />}>
			{linkText}
		</Button>
	);
};
