const user = async (_, args, context) => {
  const { getUsers } = context
  const { id } = args

  const response = await getUsers(id)
  const user = await response.json()

  return user
}

const users = async (_, args, context) => {
  const { getUsers } = context
  const { input } = args

  const apiFilterInput = new URLSearchParams(input)
  const users = await getUsers('?' + apiFilterInput)

  return users.json()
}

const posts = (parent, _, { dataSources }) => {
  const { id } = parent
  return dataSources.postApi.bachLoadByUsersId(id)
}

export const userResolvers = {
  Query: { user, users },
  User: { posts }
}
