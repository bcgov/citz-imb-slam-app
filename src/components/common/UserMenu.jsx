import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Logout from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {
	Button,
	ListItemIcon,
	Menu,
	MenuItem,
	Typography,
} from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useMemo, useState } from 'react';
import { Avatar } from './Avatar';

export const UserMenu = () => {
	const session = useSession();

	const userName = useMemo(() => {
		if (session.status === 'authenticated') return session.data.user.name;

		return '';
	}, [session.data?.user?.name, session.status]);

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	if (session.status !== 'authenticated')
		return (
			<Button
				color='primary'
				onClick={(e) => {
					e.preventDefault();
					signIn('github');
				}}
				variant='text'>
				<Typography>Sign In</Typography>
			</Button>
		);

	return (
		<>
			<Button
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				variant='text'>
				<Avatar title={userName} image={session.data.user.image} />
				<Typography>{userName}</Typography>
			</Button>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem>
					<ListItemIcon>
						<PermIdentityIcon />
					</ListItemIcon>
					<Typography>My Profile</Typography>
				</MenuItem>
				<MenuItem
					onClick={(e) => {
						e.preventDefault();
						signOut();
					}}>
					<ListItemIcon>
						<Logout />
					</ListItemIcon>
					<Typography>Sign Out</Typography>
				</MenuItem>
			</Menu>
		</>
	);
};
