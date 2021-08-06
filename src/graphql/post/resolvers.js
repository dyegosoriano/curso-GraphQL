const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(id)
  const post = await response.json()

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found!'
    }
  }

  return post
}

const posts = async (_, { input }, { getPosts }) => {
  const apiFilterInput = new URLSearchParams(input)

  const posts = await getPosts('?' + apiFilterInput)
  return posts.json()
}

export const postResolvers = {
  Query: { post, posts },
  PostResult: {
    __resolveType: obj => {
      if (typeof obj.statusCode !== 'undefined') return 'PostNotFoundError'
      if (typeof obj.id !== 'undefined') return 'Post'
      return null
    }
  }
}
