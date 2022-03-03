export const createData = async (endPoint, options) => {
    console.log('endPoint, options', endPoint, options)
    const fetchOptions = {
        method: 'post',
        body: JSON.stringify(options.body),
        headers: {
            'content-type': 'application/json',
            accept: 'application/json',
        }
    }

    let port = ''
    if (window.location.port) port = ':3000'

    const url = `${window.location.protocol}//${window.location.hostname}${port}/api/${endPoint}`;

    const response = await fetch(url, fetchOptions);

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
