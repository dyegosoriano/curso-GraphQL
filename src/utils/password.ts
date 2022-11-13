import { UserInputError } from 'apollo-server-core'
import bcrypt from 'bcryptjs'

interface IComparePassword {
  password_hash: string
  password: string
}

export const passwordCompare = async ({ password, password_hash }: IComparePassword): Promise<boolean> => {
  return await bcrypt.compare(password, password_hash)
}

export const passwordHash = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 16)
}

export const passwordValidate = async (password: string) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,30}$/

  if (!password.match(strongPasswordRegex)) {
    throw new UserInputError(
      'Password must contain at least: One lower case latter, one upper case letter and one number.'
    )
  }
}
