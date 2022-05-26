import { useState, useCallback, useEffect } from 'react'
import jsonwebtoken from 'jsonwebtoken'
import { DEFAULT_API_PORT } from 'constants';
import { useSession } from 'next-auth/react';
import { fetchAPI } from "./fetchAPI"
import { useAuth } from 'hooks';
/**
 * Purpose: fetch from an API
 */
//TODO: refactor to embody the above purpose
export const useAPI = () => {
    const { isAuthenticated, isAuthorized, user, signIn, signOut, access_token } = useAuth()

    const fetchOptions = useCallback((options = {}) => {
        const { method = 'GET', headers: optionHeaders, body, ...remainingOptions } = options

        const defaultHeaders = {
            'Accept': '*/*',
            'Access-Control-Request-Method': method,
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }

        const headers = {
            ...defaultHeaders,
            ...optionHeaders
        }

        return {
            method,
            headers,
            body: typeof body !== 'string' ? JSON.stringify(body) : body,
            ...remainingOptions
        }
    }, [access_token])

    const fetchData = useCallback(async (endPoint) => {
        const response = await fetchAPI(endPoint, fetchOptions());

        return response;
    }, [fetchOptions])

    return { fetchData, isAuthorized }
}
