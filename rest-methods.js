import fetch from 'node-fetch'

const API_URL = process.env.API_URL

const get = (endPoint, urlParam, requestInit) => {
  const url = API_URL + '/' + endPoint + '?' + new URLSearchParams(urlParam).toString()

  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    ...requestInit
  })
}

const post = (endPoint, body, requestInit) => {
  const url = API_URL + '/' + endPoint

  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    method: 'POST',
    ...requestInit
  })
}

const put = (endPoint, body, requestInit) => {
  const url = API_URL + '/' + endPoint

  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    method: 'PUT',
    ...requestInit
  })
}

const patch = (endPoint, body, requestInit) => {
  const url = API_URL + '/' + endPoint

  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    method: 'PATCH',
    ...requestInit
  })
}

const del = (endPoint, body, requestInit) => {
  const url = API_URL + '/' + endPoint

  return fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    method: 'DELETE',
    ...requestInit
  })
}
