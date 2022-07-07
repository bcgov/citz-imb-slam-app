export const useApi = () => {
  const PORT = process.env.REACT_APP_PORT || ''

  const BASEURL = `${window.location.protocol}//${window.location.hostname}${PORT}/api/v1`
  const BASEOPTIONS = {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Method': 'GET',
      'Content-Type': 'application/json'
    },
  }
  console.log('BASEURL', BASEURL)
  const getRoot = async () => {
    const response = await fetch(`${BASEURL}`, BASEOPTIONS)

    if (response.ok) {
      const payload = await response.json()
      return payload
    }
  }

  return { getRoot }
}
