// Query resolvers
const post = async (parent, { id }, { dataSources }, info) => {
  return await dataSources.postApi.getPost(id)
}

const posts = async (parent, { input }, { dataSources }, info) => {
  return await dataSources.postApi.getPosts(input)
}

// Mutation resolvers
const createPost = async (parent, { data }, { dataSources }, info) => {
  return await dataSources.postApi.createPost(data)
}

const updatePost = async (parent, { postId, data }, { dataSources }, info) => {
  return await dataSources.postApi.updatePost(postId, data)
}

// Field resolvers
const user = async (parent, arg, { dataSources }, info) => {
  const { userId } = parent

  return await dataSources.userApi.bachLoadByUsersId(userId)
}

export const postResolvers = {
  Mutation: { createPost, updatePost },
  Query: { post, posts },
  Post: { user }
}
