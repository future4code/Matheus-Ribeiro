import { v4 as generateId } from 'uuid'
import { PostUserDatabase } from '../data/PostUserDatabase'

import { httpPostRequest } from '../types/task'

export class PostUserBusiness {
  public createUser = async (httpPostRequest: httpPostRequest) => {
    try {
      const { name,  email, password } = httpPostRequest

      if (!name || !email || !password) {
        throw new Error('Preencha os campos "name", "email" e "password"')
      }

      const id: string = generateId()

      const userDatabase = new PostUserDatabase()
      await userDatabase.insertUser({
        id,
        name,
        email,
        password
      })
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}
