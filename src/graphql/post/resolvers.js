import DataLoader from 'dataloader'
import fetch from 'node-fetch'

const post = async (_, args, context) => {
  const { getPosts } = context
  const { id } = args

  const response = await getPosts(id)
  const post = await response.json()

  return post
}

const posts = async (_, args, context) => {
  const { getPosts } = context
  const { input } = args

  const apiFilterInput = new URLSearchParams(input)

  const posts = await getPosts('?' + apiFilterInput)
  return posts.json()
}

const userDataLoader = new DataLoader(async ids => {
  const urlIds = ids.join('&id=')
  const url = `http://localhost:3000/users/?id=${urlIds}`

  const response = await fetch(url)
  const users = await response.json()

  return ids.map(id => users.find(user => user.id === id))
})

const user = async (parent, _, context) => {
  const { userId } = parent

  return userDataLoader.load(userId)
}

export const postResolvers = {
  Query: { post, posts },
  Post: { user }
}
