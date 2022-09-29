import { GraphQLFieldResolver } from 'graphql'

export const post: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { id } = arg

  return await dataSources.postApi.getPost(id)
}

export const posts: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { input } = arg

  return await dataSources.postApi.getPosts(input)
}

// Field resolvers
export const user: GraphQLFieldResolver<any, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { userId } = parent

  return await dataSources.userApi.bachLoadByUsersId(userId)
}
