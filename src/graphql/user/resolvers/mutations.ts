import { GraphQLFieldResolver } from 'graphql'

export const createUser: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { data } = arg

  return await dataSources.userApi.createUser(data)
}

export const updateUser: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { userId, data } = arg

  return await dataSources.userApi.updateUser(userId, data)
}

export const deleteUser: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { userId } = arg

  return await dataSources.userApi.deleteUser(userId)
}
