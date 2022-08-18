import { Recipe } from '../../model/Recipe'

export interface GetRecipeRepository {
  get(id: string): Promise<Recipe>
}
