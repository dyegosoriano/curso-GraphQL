import { createUser, updateUser, deleteUser } from './mutations'
import { users, user, posts } from './queries'

export const userResolvers = {
  Mutation: { createUser, updateUser, deleteUser },
  Query: { user, users },
  User: { posts },
}
