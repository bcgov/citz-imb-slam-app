
/**
 * @description Makes a GET fetch call to the api using the endpoint passed to it
 * @async
 * @function fetchData
 * @param {string} endPoint endpoint for the api to be added to the base url
 * @returns {Promise<Array<object>>} the returned body of the API call in json format
 * @example
 * import { fetchData } from '@components/api'
 *
 * const response = await fetchData('software')
 */
export const fetchData = async (endPoint) => {
    let port = ''

    if (window.location.port) port = ':3000'

    const url = `${window.location.protocol}//${window.location.hostname}${port}/api/${endPoint}`;

    const response = await fetch(url);

    if (response.ok) {
        if (response.status === 204) {
            //!no content
            return;
        } else if (response.status === 304) {
            console.warn(`${response.status} ${response.statusText} ${endPoint}`);
            return response.json();
        } else {
            return response.json();
        }
    } else {
        throw new Error(`${response.status} ${response.statusText} for ${url}`);
    }
}
