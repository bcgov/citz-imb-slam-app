import { useMemo } from "react";
import { useDatabase } from "../common/useDatabase";
import { softwareFields } from "./softwareFields";

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

    const softwareTable = useDatabase('software', id)

    const data = useMemo(() => {
        if (softwareTable.isLoading || softwareTable.isError || softwareTable.data === undefined) return []

        return softwareTable.data.map(item => {
            return { ...item, renewal: new Date(item.renewal).toISOString().split('T')[0] }
        })
    }, [softwareTable.data, softwareTable.isError, softwareTable.isLoading])

    const { tableColumns, formFields } = useMemo(() => softwareFields(), [])

    return { ...softwareTable, tableColumns, formFields }
}
