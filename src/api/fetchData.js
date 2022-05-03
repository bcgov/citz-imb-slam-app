import { fetchAPI } from './common/fetchAPI';
/**
 * @description Makes a GET fetch call to the api using the endpoint passed to it
 * @async
 * @category API
 * @param {string} endPoint endpoint for the api to be added to the base url
 * @returns {Promise<Array<object>>} the returned body of the API call in json format
 * @example
 * import { fetchData } from 'api'
 *
 * const response = await fetchData('software')
 */
export const fetchData = async (endPoint) => {
  const response = await fetchAPI(endPoint);

  return response;
};
