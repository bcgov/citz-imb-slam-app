import { Alert, AlertTitle, Box } from '@mui/material';
import { DataGrid, GridLinkOperator, GridToolbarQuickFilter, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { TableHeader } from './common/TableHeader';

export const TableContainer = (props) => {
	
	const { dataHook = () => {}, title, tableActions } = props;

	const tableData = dataHook();

	const { isLoading, isError, error, tableColumns, data } = tableData;

	const columns = useMemo(
		() => [...tableColumns],
		[tableColumns],
	);

	const router = useRouter();

	const openItem = useCallback(
		(props) => {
			router.push(`${title.toLowerCase()}/${props.id}`);
		},
		[router, title],
	);

	const [sortModel, setSortModel] = useState([
		{
			field: props.sortBy,
			sort: props.sortOrder,
		},
	]);

	const height = props.height;

	function CustomToolbar() {
		return (
		  <GridToolbarContainer>
			<GridToolbarQuickFilter
			  quickFilterParser={(searchInput) =>
				searchInput
				  .split(',')
				  .map((value) => value.trim())
				  .filter((value) => value !== '')
			  }
			/> 
		  </GridToolbarContainer>
		);
	  }
	
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
				components={{ Toolbar: CustomToolbar }}
				initialState={{
					filter: {
						filterModel: {
							items: [],
							quickFilterLogicOperator: GridLinkOperator.Or,
						},
					},
				}}
				columns={columns}
				rows={data}
				loading={isLoading}
				autoHeight={true}
				sortModel={sortModel}
				onSortModelChange={(model) => setSortModel(model)}
				disableColumnMenu
				disableSelectionOnClick
				onRowClick={openItem}
				rowHeight={height}
				sx={{
					backgroundColor: '#fff',
				}}
			/>
		</>
	);
};
