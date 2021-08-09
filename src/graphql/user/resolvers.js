const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers(id)
  const user = await response.json()

  return user
}

const users = async (_, { input }, { getUsers }) => {
  const apiFilterInput = new URLSearchParams(input)

  const users = await getUsers('?' + apiFilterInput)
  return users.json()
}

export const userResolvers = {
  Query: { user, users }
}
