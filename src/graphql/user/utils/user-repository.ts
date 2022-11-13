import { ValidationError } from 'apollo-server-errors'

import { passwordCompare, passwordHash, passwordValidate } from '../../../utils/password'

export const createUserFn = async (userData, dataSource) => {
  checkUserFields(userData, true)

  const indexRefUser = await dataSource.get('', { _sort: 'indexRef', _order: 'desc', _limit: 1 })
  const indexRef = indexRefUser[0].indexRef + 1

  const foundUser = await userExists(userData.userName, dataSource)

  if (typeof foundUser !== 'undefined') {
    throw new ValidationError(`userName ${userData.userName} has already been taken`)
  }

  const password_hash = await passwordHash(userData.password)
  Object.assign(userData, { password_hash })
  delete userData.password

  return dataSource.post('', { ...userData, indexRef, createdAt: new Date().toISOString() })
}

export const updateUserFn = async (userId: string, userData, dataSource) => {
  checkUserFields(userData, false)

  if (!userId) throw new ValidationError('Missing userId')
  const [user] = await dataSource.get('', { id: userId })

  if (userData.userName) {
    const userNameExist = await userExists(userData.userName, dataSource)
    const invalidUsername = typeof userNameExist !== 'undefined' && userNameExist.id !== userId

    if (invalidUsername) throw new ValidationError(`userName ${userData.userName} has already been taken`)
  }

  if (!!userData.newPassword && !!userData.password && !!user.password_hash) {
    const passwordIsValid = await passwordCompare({ password: userData.password, passwordHash: user.password_hash })
    if (!passwordIsValid) throw new ValidationError('Password invalid!')

    const password_hash = await passwordHash(userData.newPassword)
    Object.assign(userData, { password_hash })

    delete userData.newPassword
    delete userData.password
  }

  return dataSource.patch(userId, { ...userData })
}

export const deleteUserFn = async (userId, dataSource) => {
  if (!userId) throw new ValidationError('Missing userId')

  return !!(await dataSource.delete(userId))
}

const userExists = async (userName, dataSource) => {
  const [found] = await dataSource.get('', { userName })
  return found
}

const validateUserName = userName => {
  const userNameRegExp = /^[a-z]([a-z0-9_.-]+)+$/gi

  if (!userName.match(userNameRegExp)) {
    throw new ValidationError(`userName must match ${userNameRegExp}`)
  }
}

const checkUserFields = (user, allFieldsRequired = false) => {
  const userFields = ['firstName', 'lastName', 'userName']

  for (const field of userFields) {
    if (!allFieldsRequired) {
      if (typeof user[field] === 'undefined') {
        continue
      }
    }

    if (field === 'password') passwordValidate(user[field])
    if (field === 'userName') validateUserName(user[field])
    if (!user[field]) throw new Error(`Missing ${field}`)
  }
}
