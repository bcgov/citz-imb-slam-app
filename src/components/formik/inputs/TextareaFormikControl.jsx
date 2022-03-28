import { TextareaAutosize } from '@mui/material';
import { Field } from 'formik';
import { BaseControl } from './BaseControl';

export const TextareaFormikControl = (props) => {
	const { name, label, required, disabled, ...remainingProps } = props;

	return (
		<Field name={name} {...remainingProps}>
			{({ field, form }) => (
				<BaseControl
					error={!!form.errors[field.name]}
					required={required}
					label={label}
					helperText={form.errors[field.name]}>
					<TextareaAutosize {...field} disabled={disabled} />
				</BaseControl>
			)}
		</Field>
	);
};
