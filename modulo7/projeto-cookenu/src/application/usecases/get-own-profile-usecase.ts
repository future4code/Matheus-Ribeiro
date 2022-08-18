import { GetOwnProfileDatabase } from '../../data/get-own-profile-db'
import { TokenNotFound } from '../../errors/TokenNotFound'
import { UserNotFound } from '../../errors/UserNotFound'
import { User } from '../../model/User'
import { Authentication } from '../../services/authenticaton'

export class GetOwnProfileUseCase {
  constructor(
    private getOwnProfileDatabase: GetOwnProfileDatabase,
    private authentication: Authentication
  ) {}

  public async execute(token: string): Promise<User> {
    try {
      if (!token) {
        throw new TokenNotFound()
      }

      const { id } = this.authentication.tokenData(token)
      const user = await this.getOwnProfileDatabase.get(id)

      if (!user) {
        throw new UserNotFound()
      }

      return user
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
