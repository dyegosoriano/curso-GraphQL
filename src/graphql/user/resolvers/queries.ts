import { GraphQLFieldResolver } from 'graphql'

export const user: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { id } = arg

  return await dataSources.userApi.getUser(id)
}

export const users: GraphQLFieldResolver<unknown, any> = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { input } = arg

  return await dataSources.userApi.getUsers(input)
}

export const posts: GraphQLFieldResolver<any, any> = (parent, arg, context, info) => {
  const { dataSources } = context
  const { id } = parent

  return dataSources.postApi.bachLoadByUsersId(id)
}
