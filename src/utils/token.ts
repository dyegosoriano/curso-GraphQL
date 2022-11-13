import jwt from 'jsonwebtoken'

export const tokenJWTCreate = (payload: any): string => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
}
