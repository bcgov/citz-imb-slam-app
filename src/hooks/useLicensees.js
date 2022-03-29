import { useSoftware } from 'hooks';
import { useCallback, useMemo } from "react";
import * as Yup from 'yup';
import { useTable } from "./common/useTable";

/**
 * @description a hook for retrieving, caching, and manipulating data.  it extends react-query
 * @async
 * @category Hooks
 * @extends external:React-Query
 * @param {string} [licenseeId] optional uuid to recieve a specific licensee
 * @returns {Promise<object>} an object with members
 * @example
 * import { useLicensees } from 'hooks'
 *
 * const { data, isLoading, isError, create, update, delete } = useLicensees(id)
 */

export const useLicensees = (licenseeId) => {
    const softwareTable = useSoftware()

    const licenseOptions = useMemo(() => {
        if (softwareTable.isLoading || softwareTable.isError) return []

        return softwareTable.data.map(({ id, title }) => {
            const option = {}
            option.id = id
            option.value = title
            return option
        })

    }, [softwareTable.data, softwareTable.isLoading, softwareTable.isError])

    const dataTransform = useCallback((data) => {

        const newData = data.map(item => {
            const newItem = { ...item, software: item.__softwareConnection__.map(software => { return { id: software.__software__.id, value: software.__software__.title } }) }
            return newItem

        })
        return newData
    }, [])

    const licenseeTable = useTable('licensee', licenseeId, { dataTransform })

    const formFields = useMemo(() => {
        if (licenseeTable.isLoading || licenseeTable.isError) return []

        return [
            {
                name: 'id',
                label: 'hidden Field',
                initialValue: licenseeId ? licenseeId : 'temp',
                control: 'hidden',
            },
            {
                name: 'name',
                label: 'Licensee Name',
                initialValue: licenseeId ? licenseeTable.data[0].name : '',
                control: 'text',
                validation: Yup.string().required('Required'),
                fullWidth: true,
            },
            {
                name: 'software',
                label: 'Assigned Licenses',
                control: 'selectChip',
                initialValue: licenseeId ? licenseeTable.data[0].software || [] : [],
                options: licenseOptions,
                fullWidth: true,
            },
        ]
    }, [licenseeTable, licenseeId, licenseOptions])

    const assignedLicensesTable = useTable('assigned-license')

    const create = async (props) => {
        const { id, name, software } = props

        let licenseeId = id

        if (id === 'temp') {
            const licensee = await licenseeTable.create({ name: name, notes: '' })
            licenseeId = licensee[0].id
        }

        for (let i = 0; i < software.length; i++) {
            await assignedLicensesTable.create({ softwareId: software[i].id, licenseeId })
        }
    }

    const remove = async (props) => {
        const { id: licenseeId } = props

        const assignedLicenses = assignedLicensesTable.data.filter(item => item.licenseeId === licenseeId)

        for (let i = 0; i < assignedLicenses.length; i++) {
            await assignedLicensesTable.remove({ id: assignedLicenses[i].id })
        }

        await licenseeTable.remove({ id: licenseeId })
    }

    return { ...licenseeTable, formFields, create, remove }
}
