import { GetOwnProfileDatabase } from '../../data/get-own-profile-db'
import { GetRecipeDatabase } from '../../data/get-recipe-db'
import { TokenNotFound } from '../../errors/TokenNotFound'
import { UserNotFound } from '../../errors/UserNotFound'
import { Recipe } from '../../model/Recipe'
import { Authentication } from '../../services/authenticaton'

export class GetRecipeUseCase {
  constructor(
    private getRecipeDatabase: GetRecipeDatabase,
    private authentication: Authentication,
    private getOwnProfileDatabase: GetOwnProfileDatabase
  ) {}

  public async execute(token: string, recipe_id: string): Promise<Recipe> {
    try {
      if (!token) {
        throw new TokenNotFound()
      }

      const { id } = this.authentication.tokenData(token)
      const auth = await this.getOwnProfileDatabase.get(id)

      if (!auth) {
        throw new UserNotFound()
      }

      const recipe = await this.getRecipeDatabase.get(recipe_id)

      return recipe
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
