import { AddUserDatabase } from '../../data/add-user-db'
import { BadRequest } from '../../errors/BadRequest'
import { InvalidEmail } from '../../errors/InvalidEmail'
import { InvalidName } from '../../errors/InvalidName'
import { InvalidPassword } from '../../errors/InvalidPassword'
import { InvalidUser } from '../../errors/InvalidUser'
import { User } from '../../model/User'
import { Authentication } from '../../services/authenticaton'
import { emailValidator } from '../../services/email-validator'
import { HashManager } from '../../services/hash-manager'
import { generateId } from '../../services/id-generate'
import { AddUserResquestDTO } from '../repositories/add-user-repository'

export class AddUserUseCase {
  constructor(
    private addUserDatabase: AddUserDatabase,
    private hashManager: HashManager,
    private authentication: Authentication
  ) {}
  public async execute({ name, email, password }: AddUserResquestDTO): Promise<string> {
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

      if (password.length < 6) {
        throw new InvalidPassword()
      }

      const existsUser = await this.addUserDatabase.findByEmail(email)

      if (existsUser) {
        throw new InvalidUser()
      }

      const hashPassword = await this.hashManager.generateHash(password)

      const user: User = {
        id: generateId(),
        name,
        email,
        password: hashPassword,
      }

      await this.addUserDatabase.add(user)

      const token = this.authentication.generateToken({ id: user.id })
      return token
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
