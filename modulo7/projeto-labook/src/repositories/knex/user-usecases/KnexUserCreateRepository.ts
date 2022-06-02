import { UserDTO } from '../../../models/user/UserDTO'
import { UserCreateRepository } from '../../user/UserCreateRepository'
import { KnexDatabase } from '../KnexDatabase'

export class KnexUserCreateRepository extends KnexDatabase implements UserCreateRepository {
  public async create(data: UserDTO): Promise<void> {
    try {
      await KnexUserCreateRepository.connection('labook_users').insert({
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password
      })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
