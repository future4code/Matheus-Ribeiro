import { UserCreateRequestDTO } from '../../models/user/UserCreateRequestDTO'
import { UserDTO } from '../../models/user/UserDTO'
import { UserCreateRepository } from '../../repositories/user/UserCreateRepository'
import { generateId } from '../../services/generateId'

export class UserCreateBusiness {
  constructor(private userCreateRepository: UserCreateRepository) {}

  public async execute({ name, email, password }: UserCreateRequestDTO): Promise<void> {
    try {
      const user: UserDTO = {
        id: generateId(),
        name,
        email,
        password
      }
      await this.userCreateRepository.create(user)
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
