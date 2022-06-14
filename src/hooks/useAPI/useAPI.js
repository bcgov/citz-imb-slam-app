import { useAuth } from 'hooks';
import { useCallback } from 'react';
import { fetchAPI } from './fetchAPI';
/**
 * Purpose: prepare for API Call
 */

export const useAPI = () => {
  const { isAuthorized, access_token } = useAuth();

  const fetchOptions = useCallback(
    (options = {}) => {
      const {
        method = 'GET',
        headers: optionHeaders,
        body,
        ...remainingOptions
      } = options;

      const defaultHeaders = {
        Accept: '*/*',
        'Access-Control-Request-Method': method,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      };

      const headers = {
        ...defaultHeaders,
        ...optionHeaders,
      };

      return {
        method,
        headers,
        body: typeof body !== 'string' ? JSON.stringify(body) : body,
        ...remainingOptions,
      };
    },
    [access_token],
  );

  const fetchData = useCallback(
    async (endPoint) => {
      const response = await fetchAPI(endPoint, fetchOptions());

      return response;
    },
    [fetchOptions],
  );

  const createData = useCallback(
    async (endPoint, { body }) => {
      const response = await fetchAPI(
        endPoint,
        fetchOptions({
          method: 'POST',
          body,
        }),
      );

      return response;
    },
    [fetchOptions],
  );

  const updateData = useCallback(
    async (endPoint, body) => {
      const response = await fetchAPI(
        endPoint,
        fetchOptions({
          method: 'PUT',
          body,
        }),
      );

      return response;
    },
    [fetchOptions],
  );

  const deleteData = useCallback(
    async (endPoint) => {
      const response = await fetchAPI(
        endPoint,
        fetchOptions({ method: 'DELETE' }),
      );

      return response;
    },
    [fetchOptions],
  );

  return { createData, fetchData, updateData, deleteData, isAuthorized };
};
