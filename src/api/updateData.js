import { fetchAPI } from "./common/fetchAPI"
/**
 * @description Makes a PUT fetch call to the api using the endpoint passed to it
 * @async
 * @category API
 * @param {string} endPoint API Endpoint
 * @param {object} options a json object containing a body member and the id
 * @param {string} options.id a string of the item id (uuid)
 * @param {object} options.body a json object of the payload to be sent to the API Server
 * @returns {Promise<object>} the returned body of the API call in json format
 * @example
 * import { updateData } from 'api'
 *
 * const response = await updateData('software', {id:'some_uuid',body:{title:'updated-title'}})
 */
export const updateData = async (endPoint, options) => {

    const { created, modified, ...body } = options.body

    const fetchOptions = {
        method: 'put',
        body: JSON.stringify(body),
        headers: {
            'content-type': 'application/json',
            accept: 'application/json',
        }
    }

    const response = await fetchAPI(endPoint, fetchOptions)

    return response
}
