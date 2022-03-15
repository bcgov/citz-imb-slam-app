import { Field } from 'formik';
import { ErrorMessage } from './ErrorMessage';
import DatePicker from 'react-date-picker/dist/entry.nostyle';

/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const DateInput = (props) => {
	const { label, name, required = false, id, ...remainingProps } = props;

	return (
		<Field name={name} id={id}>
			{(props) => {
				console.log('props', props);
				const { field, meta } = props;
				console.log('field', field)
				field.value = new Date(field.value)
				return (
					<div className='flex-large'>
						<label htmlFor={id}>
							{label}
							{required ? <span>*</span> : null}
						</label>
						<DatePicker {...field}/>
						<input
							type='date'
							{...field}
							{...remainingProps}
							className={meta.touched && meta.error ? 'has-error' : ''}
						/>
						{meta.touched && meta.error ? (
							<ErrorMessage>{meta.error}</ErrorMessage>
						) : null}
					</div>
				);
			}}
		</Field>
	);
};
