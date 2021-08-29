// Query resolvers
const post = async (_, { id }, { dataSources }) => {
  const post = dataSources.postApi.getPost(id)
  return post
}

const posts = async (_, { input }, { dataSources }) => {
  const posts = dataSources.postApi.getPosts(input)
  return posts
}

// Mutation resolvers
const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postApi.createPost(data)
}

const updatePost = async (_, { postId, data }, { dataSources }) => {
  return dataSources.postApi.updatePost(postId, data)
}

// Field resolvers
const user = async (parent, _, { dataSources }) => {
  const { userId } = parent

  return dataSources.userApi.bachLoadByUsersId(userId)
}

export const postResolvers = {
  Mutation: { createPost, updatePost },
  Query: { post, posts },
  Post: { user }
}
