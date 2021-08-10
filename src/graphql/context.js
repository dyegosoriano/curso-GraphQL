import { makeUserDataLoader } from './user/dataloaders'
import { getUsers } from './user/utils'

import { makePostDataLoader } from './post/dataloaders'
import { getPosts } from './post/utils'

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers),
    postDataLoader: makePostDataLoader(getPosts),
    getUsers,
    getPosts
  }
}
