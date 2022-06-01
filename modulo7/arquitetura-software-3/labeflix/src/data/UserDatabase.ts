import { UserDTO } from '../models/user/UserDTO'

import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_USER'

  async create({ id, name, email, password }: UserDTO): Promise<void> {
    const user: UserDTO = {
      id,
      name,
      email,
      password
    }

    await UserDatabase.connection.insert(user).into(UserDatabase.TABLE_NAME)
  }

  async get(): Promise<UserDTO[]> {
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select('*')
    return result
  }
}
