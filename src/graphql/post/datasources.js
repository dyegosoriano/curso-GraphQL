import { RESTDataSource } from 'apollo-datasource-rest'

import { makePostDataLoader } from './dataloaders'

export class PostsApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL + '/posts/'
    this.dataloader = makePostDataLoader(this.getPosts.bind(this)) // usando o BIND para passar uma cópia idêntica do método getPosts sem perder o this
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, {
      cacheOptions: { ttl: 60 }
    })
  }

  async getPost(id) {
    return this.get(id, undefined, {
      cacheOptions: { ttl: 60 }
    })
  }

  bachLoadByUsersId(ids) {
    return this.dataloader.load(ids)
  }
}
