import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchData, createData, updateData } from '../api'

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
    console.log('[tableName, id]', [tableName, id])
    const queryClient = useQueryClient()

    const onError = (error, newItem, context) => {
        queryClient.setQueryData([tableName, id], context)
    }

    const onSettled = async () => {
        console.log('[tableName, id]', [tableName, id])
        await queryClient.invalidateQueries([tableName, id])
        console.log('query', query)
    }

    const addNew = useMutation(newItem => {
        const { id, ...body } = newItem
        createData(tableName, { body })
    }, {
        onMutate: async (newItem) => {
            await queryClient.cancelQueries([tableName, id])

            const previousValues = queryClient.getQueryData([tableName, id])

            queryClient.setQueryData([tableName, id], (oldValues = []) => {

                let newValues = [...oldValues]

                newValues.push({ id: 'temp', ...newItem })

                return newValues
            })

            console.log('queryclient', queryclient)

            return previousValues
        },
        onError,
        onSettled
    })

    const change = useMutation(async newItem => {
        const { id, ...body } = newItem
        updateData(tableName, { id, body })
    }, {
        onMutate: async (updatedItem) => {
            await queryClient.cancelQueries([tableName, id])

            const previousValues = queryClient.getQueryData([tableName, id])

            // queryClient.setQueryData([tableName, id], (oldData = []) => {
            //     console.log('oldData', JSON.stringify(oldData))
            //     let newData = oldData.map(item => {

            //         if (item.id === updatedItem.id) {
            //             return updatedItem
            //         }
            //         return item
            //     })
            //     console.log('newValues', JSON.stringify(newData))
            //     return newData

            // })

            return previousValues
        },
        onError,
        onSettled
    }
    )

    return { ...query, create: addNew.mutateAsync, update: change.mutateAsync }
}
