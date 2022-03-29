import { useTable } from "./common/useTable";

export const useLicensees = () => {
    const assignedLicensesTable = useTable('assigned-license')

    return assignedLicensesTable
}
