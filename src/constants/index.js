export const API_PORT = process.env.NEXT_PUBLIC_API_PORT;
export const API_PATH = process.env.NEXT_PUBLIC_API_PATH;
export const API_URL = `${window.location.protocol}//${window.location.hostname}${process.env.NEXT_PUBLIC_API_PORT}/${process.env.NEXT_PUBLIC_API_PATH}`;
export const HTML_RESPONSE = {
  NO_CONTENT: 204,
  NOT_MODIFIED: 304,
};
