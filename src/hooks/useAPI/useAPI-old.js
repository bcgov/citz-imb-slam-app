import { useState, useCallback, useEffect } from 'react'
import jsonwebtoken from 'jsonwebtoken'
import { DEFAULT_API_PORT } from 'constants';
import { getSession } from 'next-auth/react';

export const useAPI = async () => {
    // const [access_token, setAccess_token] = useState(null)

    // const HTML_RESPONSE = {
    //     NO_CONTENT: 204,
    //     NOT_MODIFIED: 304,
    // };

    // const API_PATH = 'api/v1'  //TODO: put in env

    // const responseTransform = (data) => {
    //     if (Array.isArray(data)) return data;

    //     return [data];
    // };



   

    // useEffect(() => {
    //     authenticate()
    //     return () => {

    //     }
    // }, [])

    // const token_expired = async () => {
    //     console.log('token_expired access_token', access_token)
    //     if (access_token === null) return true

    //     const decoded = await jsonwebtoken.decode(access_token)

    //     console.log('decoded', decoded)
    //     return false
    // }

    // const login = useCallback(
    //     async (username) => {
    //         if (await token_expired()) {

    //             const options = {
    //                 method: 'POST',
    //                 body: { username }
    //             }

    //             const result = await fetchAPI('login', options)

    //             setAccess_token(result)

    //         }
    //     },
    //     [],
    // )

    // //-----------------------------------------



    // //-----------------------------------------







    // const createData = useCallback(
    //     async () => {
    //         const fetchOptions = {
    //             method: 'post',
    //             body: JSON.stringify(options.body),
    //             headers: {
    //                 'content-type': 'application/json',
    //                 accept: 'application/json',
    //             },
    //         };

    //         const response = await fetchAPI(endPoint, fetchOptions);

    //         return response;
    //     }, [])

    const foo = () => { return [] }

    return {
        // login, createData, fetchData,
        foo
    }
}
