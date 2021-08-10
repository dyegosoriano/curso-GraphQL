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

const user = async (parent, _, context) => {
  const { userDataLoader } = context
  const { userId } = parent

  return userDataLoader.load(userId)
}

export const postResolvers = {
  Query: { post, posts },
  Post: { user }
}
