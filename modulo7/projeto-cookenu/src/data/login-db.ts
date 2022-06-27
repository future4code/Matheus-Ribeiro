import { LoginRepository, LoginResquestDTO } from '../application/repositories/login-repository'
import { User } from '../model/User'
import { ConnectionDatabase } from './connection-db'

export class LoginDatabase extends ConnectionDatabase implements LoginRepository {
  async login(email: string): Promise<User> {
    try {
      const user = await LoginDatabase.connection.select('*').from('cookenu_users').where({ email })

      return user[0]
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
