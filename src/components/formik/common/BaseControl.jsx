import { FormControl, FormHelperText, Typography, Grid } from '@mui/material';

export const BaseControl = (props) => {
	const { children, required, label, availability, helperText, error, breakPoints } =
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
					{availability ? (
						<Typography component='span' sx={{ fontWeight: '400 !important' }}>
							{availability}
						</Typography>
					) : null}					
				</Typography>

				{children}
				<FormHelperText className="form-error">{helperText}</FormHelperText>
			</FormControl>
		</Grid>
	);
};
