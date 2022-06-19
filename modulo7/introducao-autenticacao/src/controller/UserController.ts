import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { EditUserInputDTO, UserInputDTO } from '../model/user'

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password
      }
      const userBusiness = new UserBusiness()
      const token = await userBusiness.createUser(input)

      res.status(201).send({ message: 'Usuário criado!', token: token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      const userBusiness = new UserBusiness()
      const token = await userBusiness.login(email, password)

      res.status(200).send({ message: 'Usuário logado!', token: token })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  public getUserData = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string
      const userBusiness = new UserBusiness()
      const user = await userBusiness.getUserData(token)

      res.status(200).send({ user })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        id: req.params.id
      }

      const userBusiness = new UserBusiness()
      userBusiness.editUser(input)

      res.status(201).send({ message: 'Usuário alterado!' })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
