import { User } from '../../model/User'

export interface GetUserProfileRepository {
  get(id: string): Promise<User>
}
