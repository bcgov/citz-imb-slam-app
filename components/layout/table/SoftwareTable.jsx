/** @format */

import React, { useMemo } from 'react';
import { TableGrid } from '../../common/TableGrid';
import { TableHeader } from '../header/TableHeader';
import { useSoftware } from '../../hooks';

export const SoftwareTable = () => {
	const columns = [
		{ field: 'title', headerName: 'Software Title', width: 150 },
		{ field: 'publisher', headerName: 'Publisher', width: 150 },
		{
			field: 'administrator',
			headerName: 'Licence Administrator',
			width: 175,
		},
	];

	const { data, isLoading, isError } = useSoftware();

	const rows = useMemo(() => {
		if (isLoading || isError) {
			return [];
		}

		return data;
	}, [data, isLoading, isError]);

	return (
		<>
			<TableHeader title={'Software List'} buttonText={'+ Add Software'} />
			<div className='app-body'>
				<TableGrid
					listName={'software'}
					columns={columns}
					rows={rows}
					isError={isError}
					isLoading={isLoading}
				/>
			</div>
		</>
	);
};
