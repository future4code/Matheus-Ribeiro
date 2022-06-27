import { Request, Response } from 'express'
import { GetOwnProfileUseCase } from '../application/usecases/get-own-profile-usecase'

export class GetOwnProfileController {
  constructor(private getOwnProfileUseCase: GetOwnProfileUseCase) {}

  public async get(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization!
      const user = await this.getOwnProfileUseCase.execute(token)
      res.status(200).send(user)
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}
