import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { CreateUserDTO } from '../models/CreateUserDTO'

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body

      const user: CreateUserDTO = {
        email,
        name,
        password,
      }

      const userBusiness = new UserBusiness()
      await userBusiness.create(user)

      res.status(201).send({ message: 'Usuário cadastrado com sucesso' })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness()
      const users = await userBusiness.get()

      res.status(200).send(users)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}
