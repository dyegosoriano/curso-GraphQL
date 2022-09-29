import { RESTDataSource } from 'apollo-datasource-rest'

import { makeUserDataLoader } from './dataloaders'

export class UsersApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL + '/users/'
    this.dataloader = makeUserDataLoader(this.getUsers.bind(this)) // usando o BIND para passar uma cópia idêntica do método getUsers sem perder o this
  }

  async getUsers(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 },
    })
  }

  async getUser(id: string) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 },
    })
  }

  bachLoadByUsersId(ids: string[]) {
    return this.dataloader.load(ids)
  }
}
