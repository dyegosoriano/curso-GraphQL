// Query resolvers
const post = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { id } = arg

  return await dataSources.postApi.getPost(id)
}

const posts = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { input } = arg

  return await dataSources.postApi.getPosts(input)
}

// Mutation resolvers
const createPost = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { data } = arg

  return await dataSources.postApi.createPost(data)
}

const updatePost = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { postId, data } = arg

  return await dataSources.postApi.updatePost(postId, data)
}

// Field resolvers
const user = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { userId } = parent

  return await dataSources.userApi.bachLoadByUsersId(userId)
}

export const postResolvers = {
  Mutation: { createPost, updatePost },
  Query: { post, posts },
  Post: { user }
}
