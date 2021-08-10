import { makeDataLoader } from './user/dataloader'
import { getUsers } from './user/utils'
import { getPosts } from './post/utils'

export const context = () => {
  return { userDataLoader: makeDataLoader(getUsers), getUsers, getPosts }
}
