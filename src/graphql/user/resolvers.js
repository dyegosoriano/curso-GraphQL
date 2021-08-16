const user = async (_, { id }, { dataSources }) => {
  const user = await dataSources.userApi.getUser(id)
  return user
}

const users = async (_, { input }, { dataSources }) => {
  const users = await dataSources.userApi.getUsers(input)
  return users
}

const posts = (parent, _, { dataSources }) => {
  const { id } = parent
  return dataSources.postApi.bachLoadByUsersId(id)
}

export const userResolvers = {
  Query: { user, users },
  User: { posts }
}
