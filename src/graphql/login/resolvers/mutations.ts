import { GraphQLFieldResolver } from 'graphql'

export const login: GraphQLFieldResolver<unknown, any> = async (_parent, { data }, { dataSources }, _info) => {
  const { userName, password } = data

  return dataSources.loginApi.login({ userName, password })
}
