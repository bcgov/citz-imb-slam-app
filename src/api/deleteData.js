import { fetchAPI } from './common/fetchAPI';
/**
 * @description Makes a DELETE fetch call to the api using the endpoint passed to it
 * @async
 * @category API
 * @param {string} endPoint API Endpoint including the id of the record to delete
 * @returns {Promise<object>} the returned body of the API call in json format
 * @example
 * import { deleteData } from 'api'
 *
 * const response = await deleteData(`software/${id}`)
 */
export const deleteData = async (endPoint) => {
  const fetchOptions = {
    method: 'delete',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
    },
  };

  const response = await fetchAPI(endPoint, fetchOptions);

  return response;
};
