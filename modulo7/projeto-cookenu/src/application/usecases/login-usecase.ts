import { LoginDatabase } from '../../data/login-db'
import { BadRequest } from '../../errors/BadRequest'
import { IncorrectPassword } from '../../errors/IncorrectPassword'
import { UserNotFound } from '../../errors/UserNotFound'
import { Authentication } from '../../services/authenticaton'
import { HashManager } from '../../services/hash-manager'
import { LoginResquestDTO } from '../repositories/login-repository'

export class LoginUseCase {
  constructor(
    private LoginDatabase: LoginDatabase,
    private hashManager: HashManager,
    private authentication: Authentication
  ) {}

  public async execute({ email, password }: LoginResquestDTO): Promise<string> {
    try {
      if (!email || !password) {
        throw new BadRequest()
      }

      const user = await this.LoginDatabase.login(email)

      if (!user) {
        throw new UserNotFound()
      }

      const isValid = await this.hashManager.comparePassword(password, user.password)

      if (!isValid) {
        throw new IncorrectPassword()
      }

      const token = this.authentication.generateToken({ id: user.id })
      return token
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
