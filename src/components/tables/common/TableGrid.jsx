import { Alert, AlertTitle } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
/**
 * Presents a table
 * @param {*} props
 * @returns {React.jsx}
 */
export const TableGrid = (props) => {
	const {
		columns = [],
		rows = [],
		onRowClick,
		isLoading,
		isError,
		checkboxSelection = false,
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
			onRowClick={onRowClick}
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
