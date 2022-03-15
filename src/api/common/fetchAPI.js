import { DEFAULT_API_PORT, HTML_RESPONSE } from 'constants'

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
            return response.json()
        } else {
            if(isDelete) return
            return response.json()
        }
    } else {
        throw new Error(`${response.status} ${response.statusText} for ${url}`);
    }
}
