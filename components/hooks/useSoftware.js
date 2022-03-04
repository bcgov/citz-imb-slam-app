import { useTable } from "./useTable"


export const useSoftware = (id) => {
    const response = useTable('software', id)

    return response
}
