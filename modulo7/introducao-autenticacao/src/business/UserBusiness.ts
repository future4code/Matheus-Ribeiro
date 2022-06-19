import { UserDatabase } from '../data/UserDatabase'
import {
  BadRequest,
  CustomError,
  InvalidEmail,
  InvalidName,
  InvalidPassword
} from '../error/customError'
import { UserInputDTO, user, EditUserInputDTO, EditUserInput } from '../model/user'
import { Authenticator } from '../services/Authenticator'
import { generateId } from '../services/generate-id'

export class UserBusiness {
  public createUser = async (input: UserInputDTO) => {
    try {
      const { name, nickname, email, password } = input

      if (!name || !nickname || !email || !password) {
        throw new CustomError(400, 'Preencha os campos "name","nickname", "email" e "password"')
      }

      if (name.length < 4) {
        throw new InvalidName()
      }

      if (!email.includes('@')) {
        throw new InvalidEmail()
      }

      if (password.length < 6) {
        throw new InvalidPassword()
      }

      const id: string = generateId()

      const user: user = {
        id,
        name,
        nickname,
        email,
        password
      }
      const userDatabase = new UserDatabase()
      await userDatabase.insertUser(user)

      const authenticator = new Authenticator()
      const token = authenticator.generateToken({ id })
      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public login = async (email: string, password: string) => {
    try {
      if (!email || !password) {
        throw new BadRequest()
      }

      if (!email.includes('@')) {
        throw new InvalidEmail()
      }

      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserByEmail(email)

      if (!user) {
        throw new CustomError(400, 'Usuário não encontrado')
      }

      if (user.password !== password) {
        throw new CustomError(400, 'Senha inválida')
      }

      const authenticator = new Authenticator()
      const token = authenticator.generateToken(user.id)

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public getUserData = async (token: string) => {
    try {
      if (!token) { 
        throw new CustomError(400, 'Token inválido')
      }

      const authenticator = new Authenticator()
      const authenticationData = authenticator.verifyToken(token)
      
      const userDatabase = new UserDatabase()
      const user = await userDatabase.getUserById(authenticationData.id)

      if (!user) {
        throw new CustomError(400, 'Usuário não encontrado')
      }

      return user
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }

  public editUser = async (input: EditUserInputDTO) => {
    try {
      const { name, nickname, id } = input

      if (!name || !nickname || !id) {
        throw new CustomError(400, 'Preencha os campos "id", "name" e "nickname"')
      }

      if (name.length < 4) {
        throw new InvalidName()
      }

      const editUserInput: EditUserInput = {
        id,
        name,
        nickname
      }

      const userDatabase = new UserDatabase()
      await userDatabase.editUser(editUserInput)
    } catch (error: any) {
      throw new CustomError(400, error.message)
    }
  }
}
