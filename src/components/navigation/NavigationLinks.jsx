import { Button, Stack, Typography } from '@mui/material';
import { UserMenu } from 'components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export const NavigationLinks = () => {
	const router = useRouter();
	const { status } = useSession();

	return (
		<Stack direction='row' spacing={2}>
			{status === 'authenticated' && (
				<>
					<Button variant='text' onClick={() => router.push('/software')}>
						<Typography variant='paragraph' color='text.primary'>
							Software
						</Typography>
					</Button>
					<Button variant='text' onClick={() => router.push('/licensees')}>
						<Typography variant='paragraph' color='text.primary'>
							Licensees
						</Typography>
					</Button>
					<Button variant='text' onClick={() => router.push('/contact')}>
						<Typography variant='paragraph' color='text.primary'>
							Contact
						</Typography>
					</Button>
				</>
			)}
			<UserMenu />
		</Stack>
	);
};
