import { fetchAPI } from './fetchAPI'
import { useState, useCallback } from 'react'
import jsonwebtoken from 'jsonwebtoken'


export const useAPI = () => {

    const [access_token, setAccess_token] = useState(null)

    const token_expired = async () => {
        if (access_token === null) return true

        const { exp } = await jsonwebtoken.decode(access_token)

        console.log('exp', exp)
        return false
    }

    const login = useCallback(
        async (username) => {
            if (await token_expired()) {

                const options = {
                    method: 'post',
                    body: { username }
                }

                const result = await fetchAPI('login', options)

                setAccess_token(result)



            }
        },
        [],
    )





    return { login }
}
