import { Fields } from "hooks/common/Fields.class";
import { useMemo } from "react";
import { useDBTableFactory } from "../common/useDBTable.Factory";
import { softwareFields } from "./softwareFields";

export const useSoftware = (id) => {

    const softwareTable = useDBTableFactory('software', id)

    const data = useMemo(() => {
        if (softwareTable.isLoading || softwareTable.isError || softwareTable.data === undefined) return []

        return softwareTable.data.map(item => {
            return { ...item, renewal: new Date(item.renewal).toISOString().split('T')[0] }
        })
    }, [softwareTable.data, softwareTable.isError, softwareTable.isLoading])

    const { tableColumns, formFields } = new Fields(softwareFields)

    return { ...softwareTable, data, tableColumns, formFields }
}
