import { AuthenticationData } from './../model/Auth'
import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export class Authentication {
  public generateToken = (input: AuthenticationData) => {
    const token = jwt.sign({ id: input.id }, process.env.JWT_KEY as string, {
      expiresIn: '1h'
    })
    return token
  }

  public tokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as jwt.JwtPayload

    return { id: payload.id as string }
  }
}
