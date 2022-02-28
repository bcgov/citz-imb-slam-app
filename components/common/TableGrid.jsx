/** @format */

import { Alert, AlertTitle } from '@mui/material';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export const TableGrid = ({ listName, title, getData, columns = [] }) => {
	const options = {};

	const { data, isLoading, isError } = useQuery(listName, async () => {
		const response = await getData(listName);
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
		<>
			<DataGrid
				columns={columns}
				rows={rows}
				autoHeight={true}
				loading={isLoading}
				checkboxSelection={true}
				disableColumnMenu={true}
				// components={{ Toolbar: QuickSearchToolbar }}
				// componentsProps={{
				// 	toolbar: {
				// 	  value: searchText,
				// 	  onChange: (event) => requestSearch(event.target.value),
				// 	  clearSearch: () => requestSearch(''),
				// 	},
				//   }}
				sx={{
					boxShadow: 0,
					backgroundColor: '#fff',
				}}
			/>
		</>
	);
};
