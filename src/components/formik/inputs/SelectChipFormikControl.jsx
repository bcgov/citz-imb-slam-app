import { Box, Chip, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from './BaseControl';

export const SelectChipFormikControl = (props) => {
	const {
		name,
		label,
		required,
		type = 'text',
		disabled,
		options,
		...remainingProps
	} = props;

	return (
		<Field name={name} {...remainingProps}>
			{({ field, form }) => (
				<BaseControl
					error={!!form.errors[field.name]}
					required={required}
					label={label}
					helperText={form.errors[field.name]}>
					<Select
						sx={{ marginTop: 2 }}
						{...field}
						multiple
						input={<OutlinedInput id='select-multiple-chip' label='chip' />}
						renderValue={(selected) => (
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{selected.map((value) => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
						
						disabled={disabled}>
						{options.map((option, key) => (
							<MenuItem key={key} value={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				</BaseControl>
			)}
		</Field>
	);
};
