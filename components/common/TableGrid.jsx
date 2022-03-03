/** @format */

import { Alert, AlertTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const TableGrid = (props) => {
	const {
		columns = [],
		rows = [],
		isLoading,
		isError,
		checkboxSelection = true,
		disableColumnMenu = true,
	} = props;

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
			checkboxSelection={checkboxSelection}
			disableColumnMenu={disableColumnMenu}
			sx={{
				boxShadow: 0,
				backgroundColor: '#fff',
			}}
		/>
	);
};
