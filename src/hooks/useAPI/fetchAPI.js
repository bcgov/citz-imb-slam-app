export const fetchAPI = async (endPoint, options) => {

  const API_PORT = process.env.NEXT_PUBLIC_API_PORT || ''
  const API_PATH = process.env.NEXT_PUBLIC_API_PATH || 'api/v1'

  const url = `${window.location.protocol}//${window.location.hostname}${API_PORT}/${API_PATH}/${endPoint}`;
  console.log('url>>', url)
  const response = await fetch(url, options);

  if (response.ok) {
    if (options.method.toLowerCase() === 'delete') return null;

    const payload = await response.json();
    return payload;
  } else {
    console.error(`${response.status} ${response.statusText} for ${url}`);
    console.warn('fetchAPI error response', response);
    throw new Error(response.statusText);
  }
};
