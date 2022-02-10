/** @format */

import { Alert, AlertTitle } from '@mui/material';
import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getData } from './getData';

export const TableGrid = ({ listName, title }) => {
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
			<div>{title}</div>
			<div>{JSON.stringify(columns)}</div>
			<div>{JSON.stringify(rows)}</div>
			{/* <MUIDataTable
				title={title}
				data={rows}
				columns={columns}
				options={options}
			/> */}
		</>
	);
};
