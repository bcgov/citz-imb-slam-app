import { Fields } from "hooks/common/Fields.class";
import { useSoftware } from 'hooks';
import { useCallback, useMemo } from "react";
import * as Yup from 'yup';
import { useDBTableFactory } from "../common/useDBTable.Factory";
import { licenseeFields } from './licenseeFields'

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

    const licenseeTable = useDBTableFactory('licensee', licenseeId)

    const data = useMemo(() => {
        if (licenseeTable.isLoading || licenseeTable.isError || licenseeTable.data === undefined) return []

        return licenseeTable.data.map(item => {
            return { ...item, software: item.__softwareConnection__?.map(software => software.__software__.id) }
        })

    }, [licenseeTable.data, licenseeTable.isError, licenseeTable.isLoading])

    const initialValues = useMemo(() => {
        if (licenseeTable.isLoading || licenseeTable.isError || licenseeTable.data === undefined) return {}

        if (licenseeId) return { id: licenseeId, name: data[0].name, software: data[0].software }

        return {}
    }, [data, licenseeId, licenseeTable.data, licenseeTable.isError, licenseeTable.isLoading])

    const assignedLicensesTable = useDBTableFactory('assigned-license')

    const create = useCallback(async (props) => {
        const { name, notes = '', software } = props

        software = software.map((software) => {
            return { id: software };
        });

        const licensee = await licenseeTable.create({ name, notes })
        const licenseeId = licensee[0].id

        for (let i = 0; i < software.length; i++) {
            await assignedLicensesTable.create({ softwareId: software[i].id, licenseeId })
        }

    }, [assignedLicensesTable, licenseeTable])

    const update = useCallback(async (props) => {
        const { id: licenseeId, name, notes = '', software } = props

        software = software.map((software) => {
			return { id: software };
		});

        await licenseeTable.update({ id: licenseeId, name, notes })

        const currentLicenses = assignedLicensesTable.data.filter(license => license.licenseeId === licenseeId)

        for (let i = 0; i < currentLicenses.length; i++) {
            for (let j = 0; j < software.length; j++) {
                if (currentLicenses[i].softwareId === software[j].id) {
                    currentLicenses[i].keep = true
                    software[j].keep = true
                    break
                }
            }
        }

        const licensesToRemove = currentLicenses.filter(license => !license.keep)
        const licensesToAdd = software.filter(license => !license.keep)

        for (let i = 0; i < licensesToRemove.length; i++) {
            await assignedLicensesTable.remove({ id: licensesToRemove[i].id })
        }

        for (let i = 0; i < licensesToAdd.length; i++) {
            await assignedLicensesTable.create({ softwareId: licensesToAdd[i].id, licenseeId })
        }

    }, [assignedLicensesTable, licenseeTable])

    const remove = useCallback(async (props) => {
        const { id: licenseeId } = props

        const assignedLicenses = assignedLicensesTable.data.filter(item => item.licenseeId === licenseeId)

        for (let i = 0; i < assignedLicenses.length; i++) {
            await assignedLicensesTable.remove({ id: assignedLicenses[i].id })
        }

        await licenseeTable.remove({ id: licenseeId })
    }, [assignedLicensesTable, licenseeTable])

    const options = softwareTable.data.map(({ id, title }) => {
        return { value: id, label: title }
    })

    const { tableColumns, formFields } = new Fields(licenseeFields, { software: options })

    return { ...licenseeTable, data, tableColumns, formFields, create, remove, update }
}
