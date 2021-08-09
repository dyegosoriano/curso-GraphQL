const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(id)
  const post = await response.json()

  return post
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFilterInput = new URLSearchParams(input)

  const posts = await getPosts('?' + apiFilterInput)
  return posts.json()
}

export const postResolvers = {
  Query: { post, posts }
}
