import { BaseDatabase } from '../../connection/BaseDatabase'
import { GetUserDatabase, User } from '../../user/GetUserDatabase'

export class KnexGetUserDatabase extends BaseDatabase implements GetUserDatabase {
  async get(): Promise<User[]> {
    const result = await BaseDatabase.connection('User_Arq').select('*')
    return result
  }
}
