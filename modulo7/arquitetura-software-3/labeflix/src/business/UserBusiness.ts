import { UserDatabase } from '../data/UserDatabase'
import { BadRequest } from '../error/BadRequest'
import { CreateUserDTO } from '../models/user/CreateUserDTO'
import { UserDTO } from '../models/user/UserDTO'
import { generateId } from '../services/id-generator'

export class UserBusiness {
  async create({ email, name, password }: CreateUserDTO): Promise<void> {
    if (!email || !name || !password) {
      throw new BadRequest()
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
