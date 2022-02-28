/** @format */

import React from 'react';
import { TableGrid } from '../common/TableGrid';
import { TableHeader } from './TableHeader';

const columns = [
	{ field: 'title', headerName: 'Software Title', width: 150 },
	{ field: 'publisher', headerName: 'Publisher', width: 150 },
	{ field: 'administrator', headerName: 'Licence Administrator', width: 175 },
];

export const SoftwareList = ({ getData }) => {
	return (
		<div className='app-body'>
			<TableHeader title={'Software List'} buttonText={'+ Add Software'} />
			<TableGrid listName={'software'} getData={getData} columns={columns} />
		</div>
	);
};
