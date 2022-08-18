import { GetOwnProfileDatabase } from '../../data/get-own-profile-db'
import { GetUserProfileDatabase } from '../../data/get-user-profile-db'
import { UserNotFound } from '../../errors/UserNotFound'
import { User } from '../../model/User'
import { Authentication } from '../../services/authenticaton'

export class GetUserProfileUseCase {
  constructor(
    private getUserProfileDatabase: GetUserProfileDatabase,
    private authentication: Authentication,
    private getOwnProfileDatabase: GetOwnProfileDatabase
  ) {}

  public async execute(token: string, user_id: string): Promise<User> {
    try {
      if (!token) {
        throw new UserNotFound()
      }

      const { id } = this.authentication.tokenData(token)
      const auth = await this.getOwnProfileDatabase.get(id)

      if (!auth) {
        throw new UserNotFound()
      }

      const user = await this.getUserProfileDatabase.get(user_id)

      return user
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
