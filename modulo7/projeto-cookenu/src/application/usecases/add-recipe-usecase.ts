import { AddRecipeDatabase } from '../../data/add-recipe-db'
import { GetOwnProfileDatabase } from '../../data/get-own-profile-db'
import { BadRequest } from '../../errors/BadRequest'
import { TokenNotFound } from '../../errors/TokenNotFound'
import { UserNotFound } from '../../errors/UserNotFound'
import { Recipe } from '../../model/Recipe'
import { Authentication } from '../../services/authenticaton'
import { generateDate } from '../../services/date-generate'
import { generateId } from '../../services/id-generate'
import { AddRecipeRequestDTO } from '../repositories/add-recipe-repository'

export class AddRecipeUseCase {
  constructor(
    private addRecipeDatabase: AddRecipeDatabase,
    private authentication: Authentication,
    private getOwnProfileDatabase: GetOwnProfileDatabase
  ) { }

  async execute({ token, title, description }: AddRecipeRequestDTO): Promise<void> {
    try {
      if (!token) {
        throw new TokenNotFound()
      }

      if (!title || !description) {
        throw new BadRequest()
      }

      const { id } = this.authentication.tokenData(token)
      const user = await this.getOwnProfileDatabase.get(id)

      if (!user) {
        throw new UserNotFound()
      }

      const recipe: Recipe = {
        id: generateId(),
        title,
        description,
        user_id: user.id,
        created_at: generateDate(new Date())
      }

      await this.addRecipeDatabase.add(recipe)
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
