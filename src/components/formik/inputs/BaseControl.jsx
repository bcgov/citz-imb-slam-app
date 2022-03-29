import { FormControl, FormHelperText, Typography, Grid } from '@mui/material';

export const BaseControl = (props) => {
	const { children, required, label, helperText, error, breakPoints } =
		props;

	return (
		<Grid item {...breakPoints}>
			<FormControl fullWidth={true} error={error}>
				<Typography component='label'>
					{label}
					{required ? (
						<Typography component='span' sx={{ color: 'error.main' }}>
							*
						</Typography>
					) : null}
				</Typography>

				{children}
				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		</Grid>
	);
};
