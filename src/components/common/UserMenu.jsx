// import { Avatar, Chip, Typography, Box, Menu, MenuItem, ListItemIcon , Logout } from '@mui/material';
import { useCallback, useState } from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Logout from '@mui/icons-material/Logout';


export const UserMenu = (props) => {
	const { title = '', size = 20, showTitle = true } = props;

	const stringToColor = useCallback((string) => {
		let hash = 0;
		let i;

		/* eslint-disable no-bitwise */
		for (i = 0; i < string.length; i += 1) {
			hash = string.charCodeAt(i) + ((hash << 5) - hash);
		}

		let color = '#';

		for (i = 0; i < 3; i += 1) {
			const value = (hash >> (i * 8)) & 0xff;
			color += `00${value.toString(16)}`.substr(-2);
		}
		/* eslint-enable no-bitwise */

		return color;
	}, []);

	// pop up menu
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
	  setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
	  setAnchorEl(null);
	};


	return (
		<>
		<Box 
			className="user"
			onClick={handleClick}
			aria-controls={open ? 'account-menu' : undefined}
			aria-haspopup="true"
			aria-expanded={open ? 'true' : undefined}
		>
			<Avatar
				alt={title}
				sx={{
					width: size,
					height: size,
					fontSize: '0.8rem',
					fontWeight: '400',
					padding: '11px',
					display: 'inline',
					fontFamily: 'var(--body-font-family)',
					bgcolor: stringToColor(title),
				}}>
				<Typography variant='span' sx={{ color: '#ffffff' }}>
					{title.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()}
				</Typography>
			</Avatar>
			<Typography variant='span' sx={{ fontSize: '0.9rem' }} className="user-name">
					{title}
			</Typography>
		</Box>
		<Menu
		anchorEl={anchorEl}
		id="account-menu"
		open={open}
		onClose={handleClose}
		onClick={handleClose}
		sx={{ boxShadow: 1 }}
		PaperProps={{
			elevation: 0,
			overflow: 'visible',
			className: 'ul-menu',
			mt: 1.5,
			
		}}
		transformOrigin={{ horizontal: 'right', vertical: 'top' }}
		anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>
		<MenuItem className="user-menu">
			<ListItemIcon >
			<PermIdentityIcon fontSize="small" sx={{ color: '#222222', fontSize: '0.9rem' }} />
			</ListItemIcon>
			My Profile
		</MenuItem>
		<MenuItem className="user-menu">
			<ListItemIcon>
			<Logout fontSize="small" sx={{ color: '#222222', fontSize: '0.9rem' }}/>
			</ListItemIcon>
			Sign Out
		</MenuItem>
		</Menu>
	</>

	);
};
