import { useCallback } from 'react';
import { useAuth } from '../useAuth/useAuth';
import { fetchAPI } from './fetchAPI';
/**
 * Purpose: prepare for API Call
 */

export const useAPI = () => {
  const { isAuthorized, accessToken } = useAuth();

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
        Authorization: `Bearer ${accessToken}`,
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
    [accessToken],
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
      // Ensure email is treated as lowercase
      if (body.email) body.email = body.email.toLowerCase();

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
      // Ensure email is treated as lowercase
      if (body.email) body.email = body.email.toLowerCase();

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
