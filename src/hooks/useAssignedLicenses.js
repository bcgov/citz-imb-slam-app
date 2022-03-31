import { useDatabase } from "./common/useDatabase";

export const useLicensees = () => {
    const assignedLicensesTable = useDatabase('assigned-license')

    return assignedLicensesTable
}
