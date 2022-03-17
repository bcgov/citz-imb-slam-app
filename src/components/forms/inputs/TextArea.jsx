import TextareaAutosize from 'react-textarea-autosize';
import { Field } from 'formik';
import { ErrorMessage } from './ErrorMessage';
/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const TextArea = (props) => {
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
						<TextareaAutosize type='text' {...field} {...remainingProps} className={ meta.touched && meta.error ? "has-error" : "" }/>
						{meta.touched && meta.error ? (
							<ErrorMessage>{meta.error}</ErrorMessage>
						) : null}
					</div>
				);
			}}
		</Field>
	);
};
