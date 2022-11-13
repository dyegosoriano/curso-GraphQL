import { AuthenticationError } from 'apollo-server-core'
import { RESTDataSource } from 'apollo-datasource-rest'

import { passwordCompare } from '../../utils/password'
import { tokenJWTCreate } from '../../utils/token'

interface ILogin {
  password: string
  userName: string
}

export class LoginApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = process.env.API_URL + '/users/'
  }

  async login({ userName, password }: ILogin) {
    const [user] = await this.get('', { userName }, { cacheOptions: { ttl: 0 } })
    if (!user) throw new AuthenticationError('User do not exist')

    const { password_hash, id: userId } = user
    const isPasswordValid = await passwordCompare({ password, password_hash })

    if (!isPasswordValid) throw new AuthenticationError('Invalid password')

    const token = tokenJWTCreate({ userId })

    return { userId, token }
  }
}
