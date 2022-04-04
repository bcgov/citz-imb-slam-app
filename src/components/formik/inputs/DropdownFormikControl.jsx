import { MenuItem } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from './BaseControl';
import { Select } from 'react-select' 

export const SelectFormikControl = (props) => {
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
		<Field name={name}>
			{({ field, form }) => (
				<BaseControl
					error={!!form.errors[field.name]}
					required={required}
					label={label}
					helperText={form.errors[field.name]}
					{...remainingProps}>
					<Select sx={{ marginTop: 2 }} {...field} disabled={disabled}>
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
