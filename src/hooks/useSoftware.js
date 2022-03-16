import { useTable } from "./common/useTable";

/**
 * @description a hook for retrieving, caching, and manipulating data.  it extends react-query
 * @async
 * @category Hooks
 * @extends external:React-Query
 * @param {string} [id] optional uuid to recieve a specific software title
 * @returns {Promise<object>} an object with members
 * @example
 * import { useSoftware } from 'hooks'
 *
 * const { data, isLoading, isError, create, update, delete } = useSoftware(id)
 */

export const useSoftware = (id) => {
    const dataTransform = (data) => {
        const newData = data.map(item => {
            const newItem = { ...item, renewal: new Date(item.renewal).toISOString().split('T')[0] }

            return newItem
        })
        
        return newData
    }

    const response = useTable('software', id, { dataTransform })

    return response
}
