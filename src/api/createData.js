import { fetchAPI } from "./common/fetchAPI"

/**
 * @description Makes a POST fetch call to the api using the endpoint passed to it
 * @async
 * @category API
 * @param {string} endPoint API Endpoint
 * @param {object} options a json object containing a body member
 * @param {object.body} options.body a json object of the payload to be sent to the API Server
 * @returns {Promise<object>} the returned body of the API call in json format
 * @example
 * import { createData } from 'api'
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

    const response = await fetchAPI(endPoint, fetchOptions)

    return response

}
