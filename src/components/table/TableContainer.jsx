import { Alert, AlertTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useMemo } from 'react';
import { TableHeader } from './common/TableHeader';

export const TableContainer = (props) => {
	const { dataHook = () => {}, actionColumn, title, tableActions } = props;

	const tableData = dataHook();

	const { isLoading, isError, error, tableColumns, data } = tableData;

	const columns = useMemo(
		() => [...tableColumns, actionColumn],
		[actionColumn, tableColumns],
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
				sx={{
					backgroundColor: '#fff',
				}}
			/>
		</>
	);
};
