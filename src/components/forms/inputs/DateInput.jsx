import { Field } from 'formik';
import { ErrorMessage } from './ErrorMessage';
import Moment from 'react-moment';

/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const DateInput = (props) => {
	const { label, name, required = false, id, ...remainingProps } = props;
    console.log(remainingProps)

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
						<input type='date' {...field} {...remainingProps} className={ meta.touched && meta.error ? "has-error" : "" }/>
                        <Moment>{remainingProps.value}</Moment>
						{meta.touched && meta.error ? (
							<ErrorMessage>{meta.error}</ErrorMessage>
						) : null}
					</div>
				);
			}}
		</Field>
	);
};
