import { users, user, posts } from './queries'

export const userResolvers = {
  Query: { user, users },
  User: { posts },
}
