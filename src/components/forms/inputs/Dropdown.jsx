import { Field } from 'formik';
import { ErrorMessage } from './ErrorMessage';
import Select from 'react-select' 
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';

/**
 *
 * @param {*} props
 * @returns {React.jsx}
 */
export const Dropdown = (props) => {
	const { label, name, instanceId,required = false, id, ...remainingProps } = props;

    const [selectedOption, setSelectedOption] = useState(null);
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	  ];




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
						<Select 
                        {...field} {...remainingProps} 
                        className={ meta.touched && meta.error ? "has-error" : "" }
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options} 
                        id={id}
                        instanceId={instanceId}              
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
