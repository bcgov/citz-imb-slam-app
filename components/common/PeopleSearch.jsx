/** @format */

import React from 'react';

export const PeopleSearch = ({
	label,
	column = 'column is required',
	value,
	onChange,
}) => {
	return (
		<div className='flex-large'>
			<label>{label || column}</label>
			<input type='text' name={column} value={value} onChange={onChange} />
		</div>
	);
};
