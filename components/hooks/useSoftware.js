import { object } from "yup"
import { useTable } from "./useTable"



/**
 * @description a hook for retrieving, caching, and manipulating data.  it extends react-query
 * @async
 * @module useSoftware
 * @extends external:React-Query
 * @param {string} [id] optional uuid to recieve a specific software title
 * @returns {Promise<object>} an object with members
 * @example
 * import { useSoftware } from '@components/hooks'
 *
 * const { data, isLoading, isError, create, update, delete } = useSoftware()
 */

export const useSoftware = (id) => {
    const response = useTable('software', id)

    return response
}
