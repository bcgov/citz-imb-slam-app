import { DEFAULT_API_PORT, HTML_RESPONSE } from 'constants'

const responseTransform = (data) => {
    if (Array.isArray(data)) return data

    return [data]
}

export const fetchAPI = async (endPoint, options) => {
    const isDelete = options?.method === 'delete'

    let port = ''
    if (window.location.port) port = DEFAULT_API_PORT

    const url = `${window.location.protocol}//${window.location.hostname}${port}/api/${endPoint}`;

    const response = await fetch(url, options)

    if (response.ok) {
        if (response.status === HTML_RESPONSE.NO_CONTENT) {
            return;
        } else if (response.status === HTML_RESPONSE.NOT_MODIFIED) {
            console.warn(`${response.status} ${response.statusText} ${endPoint}`);
            const data = await response.json()
            return responseTransform(data)
        } else {
            if (isDelete) return
            const data = await response.json()
            return responseTransform(data)
        }
    } else {
        throw new Error(`${response.status} ${response.statusText} for ${url}`);
    }
}
