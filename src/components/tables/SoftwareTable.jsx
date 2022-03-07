/** @format */

import React, { useMemo, useCallback } from 'react';
import { TableGrid } from './TableGrid';
import { TableHeader } from './TableHeader';
import { useSoftware } from 'hooks';
import { useRouter } from 'next/router';
/**
 * A react component that displays Software Titles obtained from an api call the backend server
 * probably needs refactoring
 * 
 * @component
 */

export const SoftwareTable = () => {
	const columns = [
		// { field: 'id', headerName: 'ID', width: 275 },
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

	const router = useRouter();

	const onRowClick = useCallback(
		(props) => {
			router.push(`/software/${props.id}`);
		},
		[router],
	);

	return (
		<div className='app'>
			<TableHeader title={'Software List'} buttonText={'+ Add Software'} />
			<div className='app-body'>
				<TableGrid
					listName={'software'}
					columns={columns}
					rows={rows}
					onRowClick={onRowClick}
					isError={isError}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};
