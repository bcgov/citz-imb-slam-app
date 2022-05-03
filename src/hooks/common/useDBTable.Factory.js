import { createData, fetchData, updateData, deleteData } from 'api';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useCallback, useMemo } from 'react';

export const useDBTableFactory = (tableName, rowId) => {
  const queryKey = useMemo(() => [tableName, rowId], [rowId, tableName]);

  const queryClient = useQueryClient();

  const query = useQuery(queryKey, async () => {
    let response;
    if (rowId) {
      response = await fetchData(`${tableName}/${rowId}`);
    } else {
      response = await fetchData(tableName);
    }
    return response;
  });

  const appendItem = (oldValues, item) => [...oldValues, item];
  const removeItem = (oldValues, item) =>
    oldValues.filter((value) => value.id !== item.id);
  const updateItem = (oldValues, item) =>
    oldValues.map((value) => {
      if (value.id === item.id) return item;
      return value;
    });

  const mutate = useCallback(
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

  const onError = (error, newItem, context) =>
    queryClient.setQueryData(queryKey, context);

  const refetchQueries = async (data, variables, context) =>
    await queryClient.refetchQueries([tableName]);

  const removeQuery = async (data, variables, context, mutation) =>
    await queryClient.removeQueries([tableName, variables.id]);

  const createItem = useMutation(
    ({ id, ...body }) => createData(tableName, { body }),
    {
      onMutate: (item) => mutate(item, appendItem),
      onError,
      onSettled: refetchQueries,
    },
  );

  const changeItem = useMutation(
    async ({ id, ...body }) =>
      await updateData(`${tableName}/${id}`, { id, body }),
    {
      onMutate: (item) => mutate(item, updateItem),
      onError,
      onSettled: refetchQueries,
    },
  );

  const deleteItem = useMutation(({ id }) => deleteData(`${tableName}/${id}`), {
    onMutate: (item) => mutate(item, removeItem),
    onError,
    onSettled: refetchQueries,
    onSuccess: removeQuery,
  });

  const create = createItem.mutateAsync;
  const update = changeItem.mutateAsync;
  const remove = deleteItem.mutateAsync;

  return { ...query, create, update, remove };
};
