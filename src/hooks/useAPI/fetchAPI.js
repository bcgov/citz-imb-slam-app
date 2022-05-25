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

export const fetchAPI = async (endPoint, options = { method: 'get' }) => {
  let port = '';
  if (window.location.port) port = DEFAULT_API_PORT;

  const url = `${window.location.protocol}//${window.location.hostname}${port}/${API_PATH}/${endPoint}`;

  if (typeof options.body !== 'string') options.body = JSON.stringify(options.body)

  options.headers = {}
  options.headers['Access-Control-Request-Method'] = 'POST'
  options.headers['Content-Type'] = 'application/json'
  options.headers['Accept'] = '*/*'

  console.log('options', options)

  const response = await fetch(url, options);

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error(`${response.status} ${response.statusText} for ${url}`);
    console.warn('response', response);
    return [];
  }
};
