import { Field } from 'formik';
import { BaseControl } from './BaseControl';
import { Input, TextareaAutosize } from '@mui/material';

export const TextareaFormikControl = (props) => {
	const { name, label, required, ...remainingProps } = props;

	return (
		<Field name={name} {...remainingProps}>
			{({ field, form }) => (
				<BaseControl
					error={!!form.errors[field.name]}
					required={required}
					label={label}
					helperText={form.errors[field.name]}>
					<TextareaAutosize {...field} />
				</BaseControl>
			)}
		</Field>
	);
};
