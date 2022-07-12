export const useApi = () => {
  const PORT = process.env.REACT_APP_PORT || ''

  const baseURL = `${window.location.protocol}//${window.location.hostname}${PORT}`

  const APIBASEURL = `${baseURL}/api/v1`

  const BASEOPTIONS = {
    method: 'GET',
    // credentials: 'include',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Method': 'GET',
      'Content-Type': 'application/json'
    },
  }

  const getRoot = async () => {
    const response = await fetch(`${APIBASEURL}`, BASEOPTIONS)

    if (response.ok) {
      const payload = await response.json()
      console.log('payload', payload)
      return payload
    }
  }

  const login = async () => {

    const headers = {
      // ...BASEOPTIONS.headers,
      // 'Access-Control-Request-Method': 'GET',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      // mode: 'cors'
    }

    const options = {
      ...BASEOPTIONS,
      method: 'GET',
      headers,
      // body: JSON.stringify({
      //   email: 'scott.toews@gmail.com',
      //   password: 'pass'
      // })
    }
    const response = await fetch(`${APIBASEURL}/auth/github`, options)

    if (response.ok) {
      // const payload = await response.json()
      // console.log('payload', payload)
      // return payload
    }
  }

  return { getRoot, login, baseURL }
}
