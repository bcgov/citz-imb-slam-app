/** @format */

import React from 'react';

const FormButton = (props) => {
	const { theme, type = 'button', children, ...remainingProps } = props;
	return (
		<button type={type} className={'btn btn-' + theme} {...remainingProps}>
			{children}
		</button>
	);
};

export default FormButton;
