import { GetOwnProfileRepository } from '../application/repositories/get-own-profile-repository'
import { User } from '../model/User'
import { ConnectionDatabase } from './connection-db'

export class GetOwnProfileDatabase extends ConnectionDatabase implements GetOwnProfileRepository {
  async get(id: string): Promise<User> {
    try {
      const user = await GetOwnProfileDatabase.connection
        .select('*')
        .from('cookenu_users')
        .where({ id })

      return user[0]
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
