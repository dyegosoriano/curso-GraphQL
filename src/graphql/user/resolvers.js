const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers(id)
  const user = await response.json()

  if (typeof user.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'User not found!'
    }
  }

  return user
}

const users = async (_, { input }, { getUsers }) => {
  const apiFilterInput = new URLSearchParams(input)

  const users = await getUsers('?' + apiFilterInput)
  return users.json()
}

export const userResolvers = {
  Query: { user, users },
  UserResult: {
    __resolveType: obj => {
      if (typeof obj.statusCode !== 'undefined') return 'UserNotFoundError'
      if (typeof obj.id !== 'undefined') return 'User'
      return null
    }
  }
}
