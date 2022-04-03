const user = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { id } = arg

  return await dataSources.userApi.getUser(id)
}

const users = async (parent, arg, context, info) => {
  const { dataSources } = context
  const { input } = arg

  return await dataSources.userApi.getUsers(input)
}

const posts = (parent, arg, context, info) => {
  const { dataSources } = context
  const { id } = parent

  return dataSources.postApi.bachLoadByUsersId(id)
}

export const userResolvers = {
  Query: { user, users },
  User: { posts }
}
