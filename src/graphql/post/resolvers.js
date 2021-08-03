const post = async (_, { id }, { fetch }) => {
  const posts = await fetch(`http://localhost:3000/posts/${id}`)
  return posts.json()
}

const posts = async (_, __, { fetch }) => {
  const posts = await fetch('http://localhost:3000/posts')
  return posts.json()
}

export const postResolvers = {
  Query: { post, posts }
}
