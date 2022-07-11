export const useApi = () => {
  const PORT = process.env.REACT_APP_PORT || ''

  const BASEURL = `${window.location.protocol}//${window.location.hostname}${PORT}/api/v1`
  const BASEOPTIONS = {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Method': 'GET',
      'Content-Type': 'application/json'
    },
  }

  const getRoot = async () => {
    const response = await fetch(`${BASEURL}`, BASEOPTIONS)

    if (response.ok) {
      const payload = await response.json()
      console.log('payload', payload)
      return payload
    }
  }

  const login = async () => {

    const headers = {
      ...BASEOPTIONS.headers,
      'Access-Control-Request-Method': 'POST',
    }

    const options = {
      ...BASEOPTIONS,
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: 'scott.toews@gmail.com',
        password: 'pass'
      })
    }
    const response = await fetch(`${BASEURL}/auth/login`, options)

    if (response.ok) {
      // const payload = await response.json()
      // console.log('payload', payload)
      // return payload
    }
  }

  return { getRoot, login }
}
