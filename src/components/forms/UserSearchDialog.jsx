import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import { Box, IconButton, Popper } from '@mui/material';
import { useState } from 'react';

export const UserSearchDialog = ({ id }) => {
	const [anchorEl, setAnchorEl] = useState(false);

	const handleClick = (event) => {
		console.log('i clicked', open);
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	return (
		<div>
			<IconButton
				color='primary'
				aria-label='assign license'
				onClick={handleClick}>
				<AssignmentIndIcon />
			</IconButton>
			<Popper id={id} open={Boolean(anchorEl)} anchorEl={anchorEl}>
				<Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
					The content of the Popper.
				</Box>
			</Popper>
		</div>
	);
};
