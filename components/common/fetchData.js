export const fetchData = async (endPoint) => {
    let port = ''
    console.log('window.location.port', window.location.port)
    if (window.location.port !== 443) port = ':3000'

    const url = `${window.location.protocol}//${window.location.hostname}${port}/api/${endPoint}`;
    console.log('url', url)
    const response = await fetch(url);

    if (response.ok) {
        if (response.status === 204) {
            //!no content
            return;
        } else if (response.status === 304) {
            console.warn(`${response.status} ${response.statusText} ${endPoint}`);
            return response.json();
        } else {
            return response.json();
        }
    } else {
        throw new Error(`${response.status} ${response.statusText} for ${url}`);
    }
}
