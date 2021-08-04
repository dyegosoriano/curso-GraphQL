const post = async (_, { id }, { getPosts }) => {
  const posts = await getPosts(id)
  return posts.json()
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFilterInput = new URLSearchParams(input)

  const posts = await getPosts('?' + apiFilterInput)
  return posts.json()
}

export const postResolvers = {
  Query: { post, posts }
}
