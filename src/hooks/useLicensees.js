import { useTable } from "./common/useTable";

/**
 * @description a hook for retrieving, caching, and manipulating data.  it extends react-query
 * @async
 * @category Hooks
 * @extends external:React-Query
 * @param {string} [id] optional uuid to recieve a specific licensee
 * @returns {Promise<object>} an object with members
 * @example
 * import { useLicensees } from 'hooks'
 *
 * const { data, isLoading, isError, create, update, delete } = useLicensees(id)
 */

export const useLicensees = (id) => {
    const dataTransform = (data) => {

        const newData = data.map(item => {
            const newItem = item

            newItem.licenses = item.__softwareConnection__.map(software => software.__software__)

            return newItem
        })

        return newData
    }

    const response = useTable('licensee', id, { dataTransform })

    return response
}
