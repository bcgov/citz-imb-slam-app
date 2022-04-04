import { Field } from 'formik';
import { BaseControl } from '../common/BaseControl';
import { Input } from '@mui/material';

export const InputFormikControl = (props) => {
	const {
		name,
		label,
		required,
		type = 'text',
		disabled,
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
					<Input
						{...field}
						disableUnderline={true}
						type={type}
						disabled={disabled}
					/>
				</BaseControl>
			)}
		</Field>
	);
};
