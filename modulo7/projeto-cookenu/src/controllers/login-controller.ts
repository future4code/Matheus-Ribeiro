import { Request, Response } from 'express'
import { LoginUseCase } from '../application/usecases/login-usecase'

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body

      const token = await this.loginUseCase.execute({ email, password })

      res.status(201).send({ message: 'Login successfull', access_token: token })
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}
