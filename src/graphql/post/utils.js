import fetch from 'node-fetch'

export const getPosts = (id = '') => fetch(`${process.env.API_URL}/posts/${id}`)
