import { GraphQLFieldResolver } from 'graphql'

export const createPost: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { data } = arg

  return await dataSources.postApi.createPost(data)
}

export const updatePost: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { postId, data } = arg

  return await dataSources.postApi.updatePost(postId, data)
}

export const deletePost: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { postId } = arg

  return await dataSources.postApi.deletePost(postId)
}
