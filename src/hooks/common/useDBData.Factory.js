import { useAPI } from 'hooks';
import { Fields } from 'hooks/common/Fields.class';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
/**
 * Purpose: wrangle data, transform if needed,
 * present data in ways to view such as an array of rows for a table or
 * a single row for a form
 */
//TODO: refactor to embody the above purpose
export const useDBDataFactory = (tableName, rowId, fields=[]) => {
  const queryKey = useMemo(() => [tableName, rowId], [rowId, tableName]);

  const queryClient = useQueryClient();

  const { createData, fetchData, updateData, deleteData, isAuthorized } = useAPI()

  const { tableColumns, formFields, transformOnFetch, transformOnSave } = new Fields(fields);

  const query = useQuery(queryKey, async () => {
    let response;
    if (rowId) {
      response = await fetchData(`${tableName}/${rowId}`);
    } else {
      response = await fetchData(tableName);
    }
    return transformOnFetch(response);
  }, { enabled: isAuthorized });




  const appendItem = (oldValues, item) => [...oldValues, item];
  const removeItem = (oldValues, item) => {
    if (Array.isArray(oldValues)) return oldValues.filter((value) => value.id !== item.id);

    return oldValues
  }
  const updateItem = (oldValues, item) => {
    if (Array.isArray(oldValues)) return oldValues.map((value) => {
      if (value.id === item.id) return item;

      return value;
    })

    return item
  };

  const optimisticUpdateQueryData = useCallback(
    async (item, callBack) => {
      await queryClient.cancelQueries(queryKey);
      const previousValues = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (oldValues = []) =>
        callBack(oldValues, item),
      );
      return previousValues;
    },
    [queryClient, queryKey],
  );

  const onError = (error, newItem, context) => queryClient.setQueryData(queryKey, context);

  const refetchQueries = async (data, variables, context) => await queryClient.refetchQueries([tableName]);

  const removeQuery = async (data, variables, context, mutation) => await queryClient.removeQueries([tableName, variables.id]);

  const createItem = useMutation(
    ({ id, ...body }) => createData(tableName, { body }),
    {
      onMutate: (item) => optimisticUpdateQueryData(item, appendItem),
      onError,
      onSettled: refetchQueries,
    },
  );

  const changeItem = useMutation(
    async ({ id, ...body }) => await updateData(`${tableName}/${id}`, { id, ...body }),
    {
      onMutate: (item) => optimisticUpdateQueryData(item, updateItem),
      onError,
      onSettled: refetchQueries,
    },
  );

  const deleteItem = useMutation(({ id }) => deleteData(`${tableName}/${id}`), {
    onMutate: (item) => optimisticUpdateQueryData(item, removeItem),
    onError,
    onSettled: refetchQueries,
    onSuccess: removeQuery,
  });

  const remove = deleteItem.mutateAsync;
  const create = (body) => transformOnSave(body, createItem.mutateAsync)
  const update = (body) => transformOnSave(body, changeItem.mutateAsync)

  return { ...query, create, update, remove, tableColumns, formFields };
};
