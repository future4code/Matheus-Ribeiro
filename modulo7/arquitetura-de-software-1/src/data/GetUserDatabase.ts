import { BaseDatabase } from './BaseDatabase'

export class GetUserDatabase extends BaseDatabase {
  public getAllUsers = async () => {
    return await GetUserDatabase.connection.select("*").from('User_Arq')
  }
}
