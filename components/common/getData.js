import { fetchData } from "./fetchData"

export const getData = async (table) => {

    const data = await fetchData(table)
console.log('data', data)
    return data
}
