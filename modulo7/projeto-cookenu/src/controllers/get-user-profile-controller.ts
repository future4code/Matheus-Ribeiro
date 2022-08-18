import { Request, Response } from 'express'
import { GetUserProfileUseCase } from '../application/usecases/get-user-profile-usecase'

export class GetUserProfileController {
  constructor(private getUserProfileUseCase: GetUserProfileUseCase) {}

  public async get(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const token = req.headers.authorization!
      const user = await this.getUserProfileUseCase.execute(token, id)
      res.status(200).send(user)
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}
