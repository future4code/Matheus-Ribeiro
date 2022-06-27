import { Request, Response } from 'express'
import { AddUserUseCase } from '../application/usecases/add-user-usecase'

export class AddUserController {
  constructor(private addUserUseCase: AddUserUseCase) {}

  public async add(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body

      const token = await this.addUserUseCase.execute({ name, email, password })

      res.status(201).send({ message: 'User created with success.', access_token: token })
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}
