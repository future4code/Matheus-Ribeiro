import { Request, Response } from 'express'
import { PostUserBusiness } from '../business/PostUserBusiness'
import { httpPostRequest } from '../types/task'

export class PostUserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body

      const httpPostRequest: httpPostRequest = {
        name,
        email,
        password
      }

      const userBusiness = new PostUserBusiness()
      userBusiness.createUser(httpPostRequest)

      res.status(201).send({ message: 'Usuário criado!' })
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }
}
