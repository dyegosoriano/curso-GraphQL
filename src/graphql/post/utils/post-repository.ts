import { ValidationError } from 'apollo-server'

const userExist = async (userId: string, dataSource) => {
  try {
    await dataSource.context.dataSources.userApi.get(userId)
  } catch (error) {
    throw new ValidationError(`User id ${userId} does not exist`)
  }
}

export const createPostFn = async (postData, dataSource) => {
  const postInfo = await createPostInfo(postData, dataSource)
  const { title, body, userId } = postInfo

  if (!title || !body || !userId) throw new ValidationError('You have to send title, body and userId')

  return await dataSource.post('', { ...postInfo })
}

export const updatePostFn = async (postId: string, postData, dataSource) => {
  if (!postId) throw new ValidationError('Missing postId')

  const { userId, title, body } = postData

  if (title && title === '') throw new ValidationError('Missing title')
  if (body && body === '') throw new ValidationError('Missing body')

  if (userId && userId) await userExist(postData.userId, dataSource)

  return await dataSource.patch(postId, { ...postData })
}

export const deletePostFn = async (postId: string, dataSource) => {
  if (!postId) throw new ValidationError('Missing postId')

  const deleted = await dataSource.delete(postId)

  return !!deleted
}

const createPostInfo = async (postData, dataSource) => {
  const { userId, title, body } = postData

  await userExist(userId, dataSource)

  const indexRefPost = await dataSource.get('', {
    _sort: 'indexRef',
    _order: 'desc',
    _limit: 1,
  })

  const indexRef = indexRefPost[0].indexRef + 1

  return { title, body, userId, indexRef, createdAt: new Date().toISOString() }
}
