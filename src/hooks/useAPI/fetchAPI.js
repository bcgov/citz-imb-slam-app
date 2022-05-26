import { DEFAULT_API_PORT } from 'constants';


const HTML_RESPONSE = {
  NO_CONTENT: 204,
  NOT_MODIFIED: 304,
};

const API_PATH = 'api/v1'

const responseTransform = (data) => {
  if (Array.isArray(data)) return data;

  return [data];
};

export const fetchAPI = async (endPoint, options) => {
  let port = '';
  if (window.location.port) port = DEFAULT_API_PORT;

  const url = `${window.location.protocol}//${window.location.hostname}${port}/${API_PATH}/${endPoint}`;

  const response = await fetch(url, options);

  if (response.ok) {
    const payload = await response.json();
    return payload;
  } else {
    console.error(`${response.status} ${response.statusText} for ${url}`);
    console.warn('fetchAPI response', response);
    throw new Error(response.statusText)
  }
};
