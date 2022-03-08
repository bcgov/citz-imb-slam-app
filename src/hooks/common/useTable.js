import { createData, fetchData, updateData } from 'api';
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useTable = (tableName, rowId) => {
    const queryKey = [tableName, rowId]

    const queryClient = useQueryClient()

    const query = useQuery(queryKey, async () => {
        let response
        if (rowId) {
            response = await fetchData(`${tableName}/${rowId}`);
        } else {
            response = await fetchData(tableName);
        }

        return response;
    });

    const appendItem = (oldValues, item) => oldValues.push(item)
    const removeItem = (oldValues, item) => oldValues.filter(value => value.id !== item.id)
    const updateItem = (oldValues, item) => oldValues.map(value => {
        if (value.id === item.id) return item
        return value
    })

    const mutate = async (item, callBack) => {
        await queryClient.cancelQueries(queryKey)
        const previousValues = queryClient.getQueryData(queryKey)
        queryClient.setQueryData(queryKey, (oldValues = []) => callBack(oldValues, item))
        return previousValues
    }

    const onError = (error, newItem, context) => queryClient.setQueryData([tableName, id], context)

    const onSettled = async (data, error, variables, context) => await queryClient.refetchQueries([tableName])

    const createItem = useMutation(newItem => {
        const { id, ...body } = newItem
        createData(tableName, { body })
    }, {
        onMutate: (item) => mutate(item, appendItem),
        onError,
        onSettled
    })

    const changeItem = useMutation(item => {
        const { id, ...body } = item
        updateData(tableName, { id, body })
    }, {
        onMutate: (item) => mutate(item, updateItem),
        onError,
        onSettled
    })

    const deleteItem = useMutation(item => {
        const { id, ...body } = item
        updateData(tableName, { id, body })
    }, {
        onMutate: (item) => mutate(item, removeItem),
        onError,
        onSettled
    })

    const create = createItem.mutateAsync
    const update = changeItem.mutateAsync
    const remove = deleteItem.mutateAsync

    return { ...query, create, update, remove }
}
