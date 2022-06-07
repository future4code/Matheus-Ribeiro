import { UserDTO } from '../../../models/user/UserDTO'
import { UserCreateRepository } from '../../user-repositories/UserCreateRepository'
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

  public async find(email: string): Promise<string> { 
    try {
      const result = await KnexUserCreateRepository.connection('labook_users')
        .where({ email: email })
        .select('email')

      const userEmail: string = result[0]

      return userEmail
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
