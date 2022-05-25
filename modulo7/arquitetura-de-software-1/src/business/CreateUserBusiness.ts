import { v4 as generateId } from 'uuid'
import { CreateUserDatabase } from '../data/user/CreateUserDatabase'

export type CreateUserRequest = {
  name: string
  email: string
  password: string
}

export class CreateUserBusiness {
  constructor(private readonly createUserDatabase: CreateUserDatabase) {}
  public execute = async (request: CreateUserRequest) => {
    try {
      const { name, email, password } = request
      const id: string = generateId()

      if (!name || !email || !password) {
        throw new Error('Preencha os campos "name", "email" e "password"')
      }

      await this.createUserDatabase.create({
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
