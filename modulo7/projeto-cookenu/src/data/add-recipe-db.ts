import { AddRecipeRepository } from '../application/repositories/add-recipe-repository'
import { Recipe } from '../model/Recipe'
import { ConnectionDatabase } from './connection-db'

export class AddRecipeDatabase extends ConnectionDatabase implements AddRecipeRepository {
  async add(recipe: Recipe): Promise<void> {
    try {
      await AddRecipeDatabase.connection.insert(recipe).into('cookenu_recipes')
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}
