import { createPost, updatePost, deletePost } from './mutations'
import { posts, post, user } from './queries'

export const postResolvers = {
  Mutation: { createPost, updatePost, deletePost },
  Query: { post, posts },
  Post: { user },
}
