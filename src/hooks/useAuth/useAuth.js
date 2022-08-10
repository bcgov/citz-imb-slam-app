import { signIn, signOut, useSession } from 'next-auth/react';
import { useMemo, useState, useEffect, useCallback } from 'react';
import { API_URL } from 'constants';
/**
 * Purpose: check if user is authenticated / authorized
 */
// TODO: refactor to embody the above purpose
export const useAuth = () => {
  const { data, status } = useSession();
  const [accessToken, setAccessToken] = useState(null);

  const API_PORT = process.env.NEXT_PUBLIC_API_PORT || '';
  const API_PATH = process.env.NEXT_PUBLIC_API_PATH || 'api/v1';

  const isAuthenticated = useMemo(() => {
    if (status === 'authenticated') return true;

    return false;
  }, [status]);

  const user = useMemo(() => {
    if (status === 'authenticated') return data.user;

    return {};
  }, [data?.user, status]);

  const getAccessToken = useCallback(async () => {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username: data.user.name,
        email: data.user.email,
      }),
      headers: {
        Accept: '*/*',
        'Access-Control-Request-Method': 'POST',
        'Content-Type': 'application/json',
      },
    };

    let payload = '';

    const response = await fetch(
      `${window.location.protocol}//${window.location.hostname}${API_PORT}/${API_PATH}/login`,
      options,
    );

    if (response.ok) {
      payload = await response.json();
      setAccessToken(payload.access_token);
    } else {
      console.error(`${response.status} ${response.statusText} for ${API_URL}`);
      console.warn('getAccess_token response', response);
    }
  }, [data?.user?.name]);

  useEffect(() => {
    if (status === 'authenticated') {
      getAccessToken();
    }
    return () => {};
  }, [getAccessToken, status]);

  const isAuthorized = useMemo(() => {
    if (isAuthenticated && accessToken) return true;

    return false;
  }, [accessToken, isAuthenticated]);

  return {
    isAuthenticated,
    isAuthorized,
    user,
    signIn,
    signOut,
    accessToken,
  };
};
