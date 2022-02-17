/** @format */

import { Alert, AlertTitle } from '@mui/material';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { DataGrid, GridColDef } from '@mui/x-data-grid';



export const TableGrid = ({ listName, title, getData }) => {
	const options = {};

	const { data, isLoading, isError } = useQuery(listName, async () => {
		const response = await getData(listName);
		return response;
	});

	console.log('data, isLoading, isError', data, isLoading, isError)

	const { rows, columns } = useMemo(() => {
		if (isLoading || isError) {
			return { rows: [], columns: [] };			
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
	console.log('data', data);
	return (
		<>
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
		</>
	);
};