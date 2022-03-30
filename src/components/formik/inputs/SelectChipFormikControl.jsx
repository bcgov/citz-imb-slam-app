import { Box, Chip, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from './BaseControl';

export const SelectChipFormikControl = (props) => {
	const { name, label, required, type, disabled, options, ...remainingProps } =
		props;
	console.log('props', props)
	return (
		<Field name={name}>
			{({ field, form }) => {
				console.log('field', field)
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
							// input={<OutlinedInput id='select-multiple-chip' label='chip' />}
							renderValue={(selected) => {
								const selectedOptions = [];

								for (let i = 0; i < selected.length; i++) {
									for (let j = 0; j < options.length; j++) {
										if (options[j].id === selected[i]) {
											selectedOptions.push(options[j].value);
											break;
										}
									}
								}

								return (
									<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
										{selectedOptions.map((value, key) => {
											return <Chip key={key} label={value} />;
										})}
									</Box>
								);
							}}
							disabled={disabled}>
							{options.map((license, key) => {
								return (
									<MenuItem key={key} value={license.id}>
										{license.value}
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
