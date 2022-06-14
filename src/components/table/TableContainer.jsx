import { Alert, AlertTitle } from '@mui/material';
import {
  DataGrid,
  GridLinkOperator,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { TableHeader } from './common/TableHeader';

export const TableContainer = (props) => {
  const {
    dataHook = () => {},
    title,
    tableActions,
    sortBy,
    sortOrder,
    height,
  } = props;

  const tableData = dataHook();

  const { isLoading, isError, error, tableColumns, data } = tableData;

  const columns = useMemo(() => [...tableColumns], [tableColumns]);

  const router = useRouter();

  const openItem = useCallback(
    (row) => {
      router.push(`${title.toLowerCase()}/${row.id}`);
    },
    [router, title],
  );

  const [sortModel, setSortModel] = useState([
    {
      field: sortBy,
      sort: sortOrder,
    },
  ]);

  const CustomToolbar = useMemo(
    () => (
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
    ),
    [],
  );

  if (isError)
    return (
      <Alert severity="error">
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
        autoHeight
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
