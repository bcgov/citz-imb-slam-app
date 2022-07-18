export const getTableColumns = (fields) => {
  const tableColumns = fields
    .filter((field) => field.table.show)
    .map((field) => ({
      field: field.name,
      headerName: field.label,
      ...field.table,
    }));

  return tableColumns;
};
