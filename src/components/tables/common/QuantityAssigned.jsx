import { CircularProgress, Box, Typography } from '@mui/material';

export const QuantityAssigned = (props) => {
	const { assigned = 0, available = 0 } = props;

    let color = 'primary';
    if (assigned >= available * .75) color = 'warning'
	if (assigned >= available) color = 'error';

	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress
				variant='determinate'
				value={(assigned / available) * 100}
				color={color}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Typography variant='caption' component='div' color='text.secondary'>
					{available}
				</Typography>
			</Box>
		</Box>
	);
};
