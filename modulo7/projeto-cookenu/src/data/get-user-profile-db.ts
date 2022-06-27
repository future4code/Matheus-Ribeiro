import { GetUserProfileRepository } from "../application/repositories/get-user-profile-repository"
import { User } from "../model/User"
import { ConnectionDatabase } from "./connection-db"

export class GetUserProfileDatabase extends ConnectionDatabase implements GetUserProfileRepository {
  async get(id: string): Promise<User> {
    try {
      const user = await GetUserProfileDatabase.connection
        .select('*')
        .from('cookenu_users')
        .where({ id })

      return user[0]
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
