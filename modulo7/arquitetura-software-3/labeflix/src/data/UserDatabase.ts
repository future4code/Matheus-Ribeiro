import { UserDTO } from '../models/UserDTO'

import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_USER'

  async create({ id, name, email, password }: UserDTO): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password
      })
      .into(UserDatabase.TABLE_NAME)
  }

  async get(): Promise<UserDTO[]> {
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME).select('*')
    return result
  }
}
