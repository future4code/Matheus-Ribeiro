import { AddUserRepository } from '../application/repositories/add-user-repository'
import { User } from '../model/User'
import { ConnectionDatabase } from './connection-db'

export class AddUserDatabase extends ConnectionDatabase implements AddUserRepository {
  async add({ id, name, email, password }: User): Promise<void> {
    try {
      await AddUserDatabase.connection
        .insert({ id, name, email, password })
        .into('cookenu_users')
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
  async findByEmail(email: string): Promise<User> {
    try {
      const user = await AddUserDatabase.connection
        .select('*')
        .from('cookenu_users')
        .where({ email })

      return user[0]
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
