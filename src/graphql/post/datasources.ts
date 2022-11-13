import { RESTDataSource } from 'apollo-datasource-rest'

import { createPostFn, deletePostFn, updatePostFn } from './utils/post-repository'
import { makePostDataLoader } from './dataloaders'

export class PostsApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL + '/posts/'
    this.dataloader = makePostDataLoader(this.getPosts.bind(this)) // usando o BIND para passar uma cópia idêntica do método getPosts sem perder o this
  }

  async getPosts(urlParams = {}) {
    return this.get('', urlParams, { cacheOptions: { ttl: 60 } })
  }

  async getPost(id: string) {
    return this.get(id, undefined, { cacheOptions: { ttl: 60 } })
  }

  async createPost(postData) {
    return createPostFn(postData, this)
  }

  async updatePost(postId: string, postData) {
    return updatePostFn(postId, postData, this)
  }

  async deletePost(id: string) {
    return deletePostFn(id, this)
  }

  bachLoadByUsersId(ids: string[]) {
    return this.dataloader.load(ids)
  }
}
