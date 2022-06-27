import { GetRecipeRepository } from '../application/repositories/get-recipe-repository'
import { Recipe } from '../model/Recipe'
import { ConnectionDatabase } from './connection-db'

export class GetRecipeDatabase extends ConnectionDatabase implements GetRecipeRepository {
  async get(id: string): Promise<Recipe> {
    try {
      const recipe = await GetRecipeDatabase.connection
        .select('*')
        .from('cookenu_recipes')
        .where({ id })

      return recipe[0]
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
