/** @format */
/**
 * A react component that accepts a text string
 *
 * @component
 */
import { Field } from 'formik';
import { ErrorMessage } from './ErrorMessage';

export const TextInput = (props) => {
	const { label, name, required = false, id, ...remainingProps } = props;

	return (
		<Field name={name} id={id}>
			{(props) => {
				const { field, meta } = props;
				return (
					<div className='flex-large'>
						<label htmlFor={id}>
							{label}
							{required ? <span>*</span> : null}
						</label>
						<input type='text' {...field} {...remainingProps} />
						{meta.touched && meta.error ? (
							<ErrorMessage>{meta.error}</ErrorMessage>
						) : null}
					</div>
				);
			}}
		</Field>
	);
};
