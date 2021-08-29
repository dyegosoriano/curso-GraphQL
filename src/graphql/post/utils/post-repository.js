import { ValidationError } from 'apollo-server'

export const createPostFn = async (postData, dataSource) => {
  const postInfo = await createPostInfo(postData, dataSource)
  const { title, body, userId } = postInfo

  if (!title || !body || !userId) {
    throw new ValidationError('You have to send title, body and userId')
  }

  return await dataSource.post('', { ...postInfo })
}

const userExist = async (userId, dataSource) => {
  try {
    await dataSource.context.dataSources.userApi.get(userId)
  } catch (error) {
    throw new ValidationError(`User id ${userId} dows not exist`)
  }
}

const createPostInfo = async (postData, dataSource) => {
  const { userId, title, body } = postData

  await userExist(userId, dataSource)

  const indexRefPost = await dataSource.get('', {
    _sort: 'indexRef',
    _order: 'desc',
    _limit: 1
  })

  const indexRef = indexRefPost[0].indexRef + 1

  return { title, body, userId, indexRef, createdAt: new Date().toISOString() }
}
