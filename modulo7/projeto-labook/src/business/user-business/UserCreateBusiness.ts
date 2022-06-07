import { BadRequest } from '../../errors/BadRequest'
import { CustomError } from '../../errors/CustomError'
import { InvalidEmail } from '../../errors/InvalidEmail'
import { InvalidName } from '../../errors/InvalidName'
import { InvalidPassword } from '../../errors/InvalidPassword'
import { InvalidUser } from '../../errors/InvalidUser'
import { UserCreateRequestDTO } from '../../models/user/UserCreateRequestDTO'
import { UserDTO } from '../../models/user/UserDTO'
import { UserCreateRepository } from '../../repositories/user-repositories/UserCreateRepository'
import { emailValidator } from '../../services/emailValidator'
import { generateId } from '../../services/generateId'

export class UserCreateBusiness {
  constructor(private userCreateRepository: UserCreateRepository) {}

  public async execute({ name, email, password }: UserCreateRequestDTO): Promise<void> {
    try {
      if (!name || !email || !password) {
        throw new BadRequest()
      }

      if (name.length < 2) {
        throw new InvalidName()
      }

      if (!emailValidator(email)) {
        throw new InvalidEmail()
      }

      if (password.length < 8) {
        throw new InvalidPassword()
      }

      const userExists = await this.userCreateRepository.find(email)

      if (userExists) {
        throw new InvalidUser()
      }

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
