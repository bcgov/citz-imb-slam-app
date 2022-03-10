import { Field } from 'formik';
import { ErrorMessage } from './ErrorMessage';
/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const TextInput = (props) => {
	const { label, name, required = false, id, ...remainingProps } = props;



	return (
		<Field name={name} id={id} >
			{(props) => {
				const { field, meta } = props;
				return (
					<div className='flex-large'>
						<label htmlFor={id}>
							{label}
							{required ? <span>*</span> : null}
						</label>
						<input type='text' {...field} {...remainingProps} className={ meta.touched && meta.error ? "has-error" : "" }/>
						{meta.touched && meta.error ? (
							<ErrorMessage>{label} is required.</ErrorMessage>
						) : null}
					</div>
				);
			}}
		</Field>
	);
};
