import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const EXPIRES_IN = '1min'

export type AuthenticationData = {
  id: string
}

export class Authenticator {
  generateToken(id: AuthenticationData): string {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, { expiresIn: EXPIRES_IN })
    return token
  }

  verifyToken(token: string): AuthenticationData {
    const decoded = jwt.verify(token, process.env.JWT_KEY as string)
    const { id } = decoded as AuthenticationData
    return { id }
  }
}
