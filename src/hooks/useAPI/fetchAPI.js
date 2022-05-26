import { API_URL } from 'constants';

export const fetchAPI = async (endPoint, options) => {
  const url = `${API_URL}/${endPoint}`;

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
