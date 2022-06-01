import { UserDatabase } from '../data/UserDatabase'
import { v4 as generateId } from 'uuid'
import { User } from '../types/User'
import { CreateUserDTO } from '../models/CreateUserDTO'
import { UserDTO } from '../models/UserDTO'

export class UserBusiness {
  async create({ email, name, password }: CreateUserDTO): Promise<void> {
    if (!email || !name || !password) {
      throw new Error('Dados inválidos (email, name, password)')
    }

    const id = generateId()
    
    const user: UserDTO = {
      id,
      name,
      email,
      password
    }

    const userDatabase = new UserDatabase()
    await userDatabase.create(user)
  }

  async get(): Promise<UserDTO[]> {
    const userDatabase = new UserDatabase()

    const result = await userDatabase.get()
    return result
  }
}
