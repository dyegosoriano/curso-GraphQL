import { makeDataLoader } from './user/dataloaders'
import { getUsers } from './user/utils'
import { getPosts } from './post/utils'

export const context = () => {
  return { userDataLoader: makeDataLoader(getUsers), getUsers, getPosts }
}
