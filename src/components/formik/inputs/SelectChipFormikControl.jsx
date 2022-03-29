import { Box, Chip, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from './BaseControl';

export const SelectChipFormikControl = (props) => {
	const { name, label, required, type, disabled, options, ...remainingProps } =
		props;
	return (
		<Field name={name}>
			{({ field, form }) => {
				return (
					<BaseControl
						error={!!form.errors[field.name]}
						required={required}
						label={label}
						helperText={form.errors[field.name]}
						{...remainingProps}>
						<Select
							sx={{ marginTop: 2 }}
							{...field}
							multiple
							input={<OutlinedInput id='select-multiple-chip' label='chip' />}
							renderValue={(selected) => (
								<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
									{selected.map(({ value }, key) => {
										return <Chip key={key} label={value} />;
									})}
								</Box>
							)}
							disabled={disabled}>
							{options.map(({ id, value }, key) => {
								return (
									<MenuItem key={key} value={{ id, value }}>
										{value}
									</MenuItem>
								);
							})}
						</Select>
					</BaseControl>
				);
			}}
		</Field>
	);
};
