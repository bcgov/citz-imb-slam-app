/** @format */

import { Alert, AlertTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

export const TableGrid = ({ listName, getData, columns = [] }) => {
	const { data, isLoading, isError } = useQuery(listName, async () => {
		const response = await getData();
		return response;
	});

	const rows = useMemo(() => {
		if (isLoading || isError) {
			return [];
		}

		return data;
	}, [data, isLoading, isError]);

	if (isError) {
		return (
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				there was an error
			</Alert>
		);
	}

	return (
		<DataGrid
			columns={columns}
			rows={rows}
			autoHeight={true}
			loading={isLoading}
			checkboxSelection={true}
			disableColumnMenu={true}
			sx={{
				boxShadow: 0,
				backgroundColor: '#fff',
			}}
		/>
	);
};
