import { Request, Response } from 'express'
import { AddRecipeUseCase } from '../application/usecases/add-recipe-usecase'

export class AddRecipeController {
  constructor(private addRecipeUseCase: AddRecipeUseCase) {}

  public async add(req: Request, res: Response): Promise<void> {
    try {
      const token = req.headers.authorization!
      const { title, description } = req.body

      const recipe = {
        token,
        title,
        description
      }

      await this.addRecipeUseCase.execute(recipe)
      res.status(201).send({ message: 'Recipe added' })
    } catch (error: any) {
      res.status(400).send({
        message: error.message || error.sqlMessage
      })
    }
  }
}
