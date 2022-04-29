const urlPrefix = 'https://elec591-coivd19-info-hub.herokuapp.com'

// const urlPrefix = 'http://localhost:3000'

export function get(url) {
    return fetch(urlPrefix + url, {
        method: "get",
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then(response => {
        if (!response.ok) {
            if (!response.ok) {
                throw new Error(response.status.toString())
            }
            // console.error(response.statusText)
            // throw new Error(response.statusText)
        }
        return response.json()
    })
}


export function httpDelete(url) {
    return fetch(urlPrefix + url, {
        method: "delete",
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    }).then(response => {
        if (!response.ok) {
            if (!response.ok) {
                throw new Error(response.status.toString())
            }
            // console.error(response.statusText)
            // throw new Error(response.statusText)
        }
        return response.json()
    })
}

export function post(url, data) {
    return fetch(urlPrefix + url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            if (!response.ok) {
                throw new Error(response.status.toString())
            }
            // console.error(response.statusText)
            // throw new Error(response.statusText)
        }
        return response.json()
    })
}

export function put(url, data) {
    return fetch(urlPrefix + url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.status.toString())
        }
        return response.json()
    })
}