/** @format */

import React from 'react';

export const Button = (props) => {
	return <button className={'btn btn-' + props.theme}>{props.children}</button>;
};
