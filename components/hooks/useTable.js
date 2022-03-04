import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchData, createData } from '../api'

export const useTable = (tableName, id) => {
    const query = useQuery([tableName, id], async () => {
        let response
        if (id) {
            response = await fetchData(`${tableName}/${id}`);
        } else {
            response = await fetchData(tableName);
        }

        return response;
    });

    const queryClient = useQueryClient()

    const addNew = useMutation(newItem => createData(tableName, { body: newItem }), {
        onMutate: async (newItem) => {
            await queryClient.cancelQueries(tableName)

            const previousValues = queryClient.getQueryData(tableName)

            queryClient.setQueryData(tableName, oldValues => {
                let newValues = [...oldValues]

                newValues.push({ id: 'temp', ...newItem })

                return newValues
            })

            return { previousValues }
        },
        onError: (error, newItem, context) => {
            queryClient.setQueryData(tableName, context.previousValues)
        },
        onSettled: async () => await queryClient.invalidateQueries(tableName)
    })

    return { ...query, create: addNew.mutateAsync }
}
