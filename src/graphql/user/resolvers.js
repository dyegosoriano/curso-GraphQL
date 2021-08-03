const user = async (_, { id }, { getUsers }) => {
  const users = await getUsers(id)
  return users.json()
}

const users = async (_, __, { getUsers }) => {
  const users = await getUsers()
  return users.json()
}

export const userResolvers = {
  Query: { user, users }
}
