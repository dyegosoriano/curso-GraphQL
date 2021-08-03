import fetch from 'node-fetch'

const API_URL = 'http://localhost:3000'

export const context = () => {
  return {
    getUsers: (id = '') => fetch(`${API_URL}/users/${id}`),
    getPosts: (id = '') => fetch(`${API_URL}/posts/${id}`)
  }
}
