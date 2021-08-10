import fetch from 'node-fetch'

export const getUsers = (id = '') => fetch(`${process.env.API_URL}/users/${id}`)
