import { Request, Response } from 'express'
import { GetRecipeUseCase } from '../application/usecases/get-recipe-usecase'

export class GetRecipeController {
  constructor(private getRecipeUseCase: GetRecipeUseCase) {}

  public async get(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params
      const token = req.headers.authorization!
      const user = await this.getRecipeUseCase.execute(token, id)
      res.status(200).send(user)
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}
