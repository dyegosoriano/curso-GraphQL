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

const posts = (parent, _, context) => {
  const { postDataLoader } = context
  const { id } = parent

  return postDataLoader.load(id)
}

export const userResolvers = {
  Query: { user, users },
  User: { posts }
}
