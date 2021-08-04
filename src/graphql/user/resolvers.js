const user = async (_, { id }, { getUsers }) => {
  const users = await getUsers(id)
  return users.json()
}

const users = async (_, { input }, { getUsers }) => {
  const apiFilterInput = new URLSearchParams(input)

  const users = await getUsers('?' + apiFilterInput)
  return users.json()
}

export const userResolvers = {
  Query: { user, users }
}
