const user = async (parent, { id }, { dataSources }, info) => {
  return await dataSources.userApi.getUser(id)
}

const users = async (parent, { input }, { dataSources }, info) => {
  return await dataSources.userApi.getUsers(input)
}

const posts = (parent, arg, { dataSources }, info) => {
  const { id } = parent
  return dataSources.postApi.bachLoadByUsersId(id)
}

export const userResolvers = {
  Query: { user, users },
  User: { posts }
}
