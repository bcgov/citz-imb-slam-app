/** @format */

import React from 'react';
import { TableGrid } from '../common/TableGrid';

const columns = [
	{ field: 'title', headerName: 'Software Title', width: 150 },
	{ field: 'publisher', headerName: 'Publisher', width: 150 },
	{ field: 'administrator', headerName: 'Licence Administrator', width: 175 },
];

export const SoftwareList = ({ getData }) => {
	return (
		<div className='app-body'>
			<TableGrid
				listName={'software'}
				title={'Software List'}
				getData={getData}
				columns={columns}
			/>
		</div>
	);
};
