import { Alert, AlertTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo, useCallback } from 'react';
import { TableHeader } from './common/TableHeader';
import { useRouter } from 'next/router';


export const TableContainer = (props) => {
	
	const { dataHook = () => {}, actionColumn, title, tableActions } = props;

	const tableData = dataHook();

	const { isLoading, isError, error, tableColumns, data } = tableData;
	console.log('tableData', tableActions)
	const columns = useMemo(
		() => [...tableColumns, actionColumn],
		[actionColumn, tableColumns],
	);

	const router = useRouter();

	const openItem = useCallback(
		(props) => {
			router.push(`${title.toLowerCase()}/${props.id}`);
		},
		[router, title],
	);

	if (isError)
		return (
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				{error.message}
			</Alert>
		);

	return (
		<>
			<TableHeader title={title}>{tableActions}</TableHeader>
			<DataGrid
				columns={columns}
				rows={data}
				loading={isLoading}
				autoHeight={true}
				disableColumnMenu
				disableSelectionOnClick
				onRowClick={openItem}
				sx={{
					backgroundColor: '#fff',
				}}
			/>
		</>
	);
};
