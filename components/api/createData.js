/**
 * @description Makes a POST fetch call to the api using the endpoint passed to it
 * @async
 * @function createData
 * @param {string} endPoint API Endpoint
 * @param {object} options a json object containing a body member
 * @param {object.body} options.body a json object of the payload to be sent to the API Server
 * @returns {Promise<object>} the returned body of the API call in json format
 * @example
 * import { createData } from '@components/api'
 *
 * const response = await createData('software', {body:{title:'some-text'}, publisher:'some-text'}, administrator:'some-text'}})
 */
export const createData = async (endPoint, options) => {

    const fetchOptions = {
        method: 'post',
        body: JSON.stringify(options.body),
        headers: {
            'content-type': 'application/json',
            accept: 'application/json',
        }
    }

    let port = ''
    if (window.location.port) port = ':3000'

    const url = `${window.location.protocol}//${window.location.hostname}${port}/api/${endPoint}`;

    const response = await fetch(url, fetchOptions);

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
