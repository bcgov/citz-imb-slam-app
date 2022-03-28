import { FormControl, FormHelperText, Typography } from '@mui/material';

export const BaseControl = (props) => {
	const { children, required, label, helperText, error } = props;
	return (
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
	);
};
